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

const { Command, flags } = require('@oclif/command')
const inquirer = require('inquirer')
const { cli } = require('cli-ux')
const chalk = require('chalk')
const ora = require('ora')
const semver = require('semver')
const { prompt, getNpmLatestVersion, getNpmLocalVersion } = require('../helpers')

class UpdateCommand extends Command {
  /**
   * List the plugins that have updates.
   *
   * @param {Array<ToUpdatePlugin>} plugins the plugins to update
   */
  async __list (plugins, { col1 = 'plugin(s) to update', col2 = 'current', col3 = 'latest' } = {}) {
    const columns = {
      [col1]: {
        width: 10,
        get: row => `${row.name}`
      },
      [col2]: {
        minWidth: 10,
        get: row => `${row.currentVersion}`
      },
      [col3]: {
        get: row => `${row.latestVersion}`
      }
    }

    cli.table(plugins, columns)
  }

  /**
   * Install the plugins that have updates.
   *
   * @private
   * @param {Array<ToUpdatePlugin>} plugins the plugins to update
   * @param {boolean} needsConfirm true to show confirmation prompt
   */
  async __install (plugins, needsConfirm) {
    await this.__list(plugins)
    let _doUpdate = true

    this.log() // newline

    if (needsConfirm) {
      _doUpdate = await prompt(`Update ${plugins.length} plugin(s)?`)
    }

    if (_doUpdate) {
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
  async __interactiveInstall (plugins) {
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

    // install the plugins in sequence
    for (const plugin of response.plugins) {
      await this.config.runCommand('plugins:install', [plugin])
    }
  }

  /**
   * Process the plugins, determine if they need updates or warnings.
   *
   * @param {object} cliRoot the root folder of the cli
   * @param {Array<string>} corePlugins package names of the core plugins
   * @param {Array<InstalledPlugin>} installedPlugins
   * @returns {Array<ToUpdatePlugin}
   */
  async __processPlugins () {
    const corePlugins = this.config.pjson.oclif.plugins
    const plugins = []

    // Filter installed plugins:
    // - remove any plugin that is in core, that is not from the @adobe namespace
    // These will not be updateable for compatibility reasons
    const installedPlugins = this.config.plugins
      .filter(plugin =>
        !(
          corePlugins.includes(plugin.name) &&
          !(plugin.name.startsWith('@adobe/'))
        )
      )
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
   */
  async run () {
    const { flags } = this.parse(UpdateCommand)
    const spinner = ora()

    spinner.start()
    const plugins = await this.__processPlugins(this.config.root, this.config.pjson.oclif.plugins, this.config.plugins)
    spinner.stop()
    const needsUpdate = plugins.filter(p => p.needsUpdate)
    const needsWarning = plugins.filter(p => p.needsWarning)

    if (needsWarning.length > 0) {
      this.log(`${chalk.red('warning:')} the user-installed plugin(s) below have versions older or equal to the core plugin versions, and should be uninstalled via ${chalk.yellow(`${this.config.pjson.oclif.bin} plugins:uninstall <plugin_name>`)}`)
      this.__list(needsWarning, { col1: 'plugin(s) to uninstall' })
      this.log()
    }

    if (needsUpdate.length === 0) {
      this.log('no plugins to update')
      return
    }

    if (flags.list) {
      return this.__list(needsUpdate)
    } else if (flags.interactive) {
      return this.__interactiveInstall(needsUpdate)
    } else {
      return this.__install(needsUpdate, flags.confirm)
    }
  }
}

UpdateCommand.description = `Update all installed plugins.
This command will only:
- update core plugins that are from the @adobe namespace
- update all other user-installed plugins
`

UpdateCommand.flags = {
  interactive: flags.boolean({
    char: 'i',
    default: false,
    description: 'interactive update mode'
  }),
  list: flags.boolean({
    char: 'l',
    default: false,
    description: 'list plugins that will be updated'
  }),
  confirm: flags.boolean({
    char: 'c',
    default: true,
    description: 'confirmation needed for update (defaults to true)',
    allowNo: true
  })
}

module.exports = UpdateCommand
