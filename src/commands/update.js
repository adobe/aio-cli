/*
 * Copyright 2020 Adobe Inc. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const { Command, Flags, ux } = require('@oclif/core')
const inquirer = require('inquirer')
const chalk = require('chalk')
const ora = require('ora')
const semver = require('semver')
const { prompt, getNpmLatestVersion, getNpmLocalVersion, hideNPMWarnings } = require('../helpers')

require('../types.jsdoc') // get types
/* global ToUpdatePlugin */

class UpdateCommand extends Command {
  /**
   * List the plugins that have updates.
   *
   * @param {Array<ToUpdatePlugin>} plugins the plugins to update
   * @param {object} colOptions the column options
   * @param {string} colOptions.col1 the heading text for the first column
   * @param {string} colOptions.col2 the heading text for the second column
   * @param {string} colOptions.col3 the heading text for the third column
   */
  async __list (plugins, { col1 = 'user plugin updates available', col2 = 'current', col3 = 'latest' } = {}) {
    const columns = {
      [col1]: {
        width: 10,
        get: row => row.asterisk ? `${row.name}${chalk.yellow('*')}` : `${row.name}`
      },
      [col2]: {
        minWidth: 10,
        get: row => `${row.currentVersion}`
      },
      [col3]: {
        get: row => `${row.latestVersion}`
      }
    }

    ux.table(plugins, columns)
  }

  /**
   * Install the plugins that have updates.
   *
   * @private
   * @param {Array<ToUpdatePlugin>} plugins the plugins to update
   * @param {boolean} needsConfirm true to show confirmation prompt
   */
  async __install (plugins, needsConfirm, verbose) {
    await this.__list(plugins)
    let _doUpdate = true

    this.log() // newline

    if (needsConfirm) {
      _doUpdate = await prompt(`Update ${plugins.length} user plugin(s)?`)
    }
    if (_doUpdate) {
      if (!verbose) {
        // Intercept the stderr stream to hide npm warnings
        hideNPMWarnings()
      }

      // install the plugins in sequence
      for (const plugin of plugins) {
        await this.config.runCommand('plugins:install', [plugin.name])
      }
    }
  }

  /**
   * Install the plugins that have  updates, with an interactive install.
   *
   * @private
   * @param {Array<ToUpdatePlugin>} plugins the plugins to update
   */
  async __interactiveInstall (plugins, verbose) {
    const inqChoices = plugins
      .map(plugin => { // map to expected inquirer format
        return {
          name: `${plugin.name}@${plugin.latestVersion}`,
          value: plugin.name
        }
      })

    const response = await inquirer.prompt([{
      name: 'plugins',
      message: 'Select plugins to update',
      type: 'checkbox',
      choices: inqChoices
    }])

    if (!verbose) {
      // Intercept the stderr stream to hide npm warnings
      hideNPMWarnings()
    }

    // install the plugins in sequence
    for (const plugin of response.plugins) {
      await this.config.runCommand('plugins:install', [plugin])
    }
  }

  __coreUpdateable (plugin) {
    const corePlugins = this.config.pjson.oclif.plugins
    return !(
      corePlugins.includes(plugin.name) &&
      !(plugin.name.startsWith('@adobe/'))
    )
  }

  /**
   * Process the plugins, determine if they need updates or warnings.
   *
   * @returns {Array<ToUpdatePlugin>} the process plugins
   */
  async __processPlugins () {
    const corePlugins = this.config.pjson.oclif.plugins
    const plugins = []

    // Filter installed plugins:
    // - remove any plugin that is in core, that is not from the @adobe namespace
    // These will not be updateable for compatibility reasons
    const installedPlugins = this.config.plugins
      .filter(p => this.__coreUpdateable(p))
      // remove the cli itself from the plugin list
      .filter(plugin => plugin.name !== this.config.pjson.name)

    for (const plugin of installedPlugins) {
      const { type, name, version: currentVersion } = plugin
      const latestVersion = await getNpmLatestVersion(name)
      if (!latestVersion) {
        continue
      }

      let coreVersion = (type === 'core') ? currentVersion : null
      const needsUpdate = semver.gt(latestVersion, currentVersion)
      let needsWarning = false

      if (!needsUpdate) {
        // a user installed plugin could be older or the same version as a core plugin it overrides
        // usually this is not an intended case, and we warn the user
        // (scenario: a user installs an updated version of the cli with all the updated plugins,
        // but the user already has these updated as user-installed plugins)
        const pluginOverridesCorePlugin = (type === 'user' && corePlugins.includes(name))
        if (pluginOverridesCorePlugin) {
          coreVersion = await getNpmLocalVersion(this.config.root, name)
          needsWarning = semver.gte(coreVersion, currentVersion)
        }
      }

      plugins.push({
        type,
        name,
        currentVersion,
        latestVersion,
        coreVersion,
        needsUpdate,
        needsWarning
      })
    }

    return plugins
  }

  /**
   * Command entry point
   *
   * @returns {Promise} promise that lists/interactive install/installs the update
   */
  async run () {
    const { flags } = await this.parse(UpdateCommand)
    const spinner = ora()

    spinner.start()
    const plugins = await this.__processPlugins()
    spinner.stop()

    const corePlugins = this.config.pjson.oclif.plugins
    const needsUpdateCore = plugins.filter(p => p.needsUpdate && p.type === 'core')
    const needsUpdateUser = plugins.filter(p => p.needsUpdate && p.type !== 'core')
    const needsUpdateCoreButUserInstalled = needsUpdateUser.filter(p => corePlugins.includes(p.name))
    const needsUpdateUserNonCore = needsUpdateUser.filter(p => !corePlugins.includes(p.name))

    const needsWarning = plugins.filter(p => p.needsWarning)

    if (needsWarning.length > 0) {
      this.log(`${chalk.red('warning:')} the user-installed plugin(s) below have versions older or equal to the core plugin versions, and should be uninstalled via ${chalk.yellow(`${this.config.pjson.oclif.bin} plugins:uninstall <plugin_name>`)}`)
      this.__list(needsWarning, { col1: 'plugin(s) to uninstall' })
      this.log()
    }

    const corePluginTotal = needsUpdateCore.length + needsUpdateCoreButUserInstalled.length

    this.log(`There are ${chalk.yellow(corePluginTotal)} core plugin update(s), and ${chalk.yellow(needsUpdateUserNonCore.length)} user plugin update(s) available.`)
    this.log()

    if (corePluginTotal > 0) {
      const pluginsToRollback = needsUpdateCoreButUserInstalled
        .map(plugin => ({ ...plugin, asterisk: true }))
      await this.__list([...needsUpdateCore, ...pluginsToRollback], { col1: 'Core plugin updates available' })
      this.log()
      if (needsUpdateCoreButUserInstalled.length > 0) {
        this.log(`${chalk.red('warning:')} these plugins need to be rolled-back first via ${chalk.yellow('aio rollback -i')}:\n${pluginsToRollback.map(p => `  - ${p.name}`).join('\n')}`)
      }
      this.log(`${chalk.blueBright('note:')} to update the core plugins, please reinstall the cli: ${chalk.yellow('npm install -g @adobe/aio-cli')}`)
      this.log()
    }

    if (needsUpdateUserNonCore.length > 0) {
      if (flags.list) {
        return this.__list(needsUpdateUserNonCore)
      } else if (flags.interactive) {
        return this.__interactiveInstall(needsUpdateUserNonCore, flags.verbose)
      } else {
        return this.__install(needsUpdateUserNonCore, flags.confirm, flags.verbose)
      }
    }
  }
}

UpdateCommand.description = `Update all installed plugins.
This command will only:
- update user-installed plugins that are not core
`

UpdateCommand.flags = {
  interactive: Flags.boolean({
    char: 'i',
    default: false,
    description: 'interactive update mode'
  }),
  list: Flags.boolean({
    char: 'l',
    default: false,
    description: 'list plugins that will be updated'
  }),
  confirm: Flags.boolean({
    char: 'c',
    default: true,
    description: 'confirmation needed for update (defaults to true)',
    allowNo: true
  }),
  verbose: Flags.boolean({
    char: 'v',
    default: false,
    description: 'Verbose output'
  })
}

module.exports = UpdateCommand
