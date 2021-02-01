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
const { prompt, hideNPMWarnings } = require('../helpers')

require('../types.jsdoc') // get types
/* global InstalledPlugin */

class RollbackCommand extends Command {
  /**
   * List the plugins that are installed.
   *
   * @param {Array<InstalledPlugin>} plugins the installed plugins
   */
  async __list (plugins) {
    const columns = {
      plugin: {
        width: 10,
        get: row => `${row.name}`
      },
      version: {
        minWidth: 10,
        get: row => `${row.version}`
      }
    }

    cli.table(plugins, columns)
  }

  /**
   * Clear the installed plugins (uninstall all)
   *
   * @private
   * @param {Array<InstalledPlugin>} plugins the installed plugins
   * @param {boolean} needsConfirm true to show confirmation prompt
   */
  async __clear (plugins, needsConfirm, verbose) {
    await this.__list(plugins)
    let _doClear = true

    this.log() // newline

    if (needsConfirm) {
      _doClear = await prompt(`Uninstall ${plugins.length} plugin(s)?`)
    }

    if (_doClear) {
      if (!verbose) {
        // Intercept the stderr stream to hide npm warnings
        hideNPMWarnings()
      }

      // uninstall the plugins in sequence
      for (const plugin of plugins) {
        await this.config.runCommand('plugins:uninstall', [plugin.name])
      }
    }
  }

  /**
   * Clear the installed plugins, with an interactive uninstall.
   *
   * @private
   * @param {Array<ToUpdatePlugin>} plugins the plugins to update
   */
  async __interactiveClear (plugins, verbose) {
    const inqChoices = plugins
      .map(plugin => { // map to expected inquirer format
        return {
          name: `${plugin.name}@${plugin.version}`,
          value: plugin.name
        }
      })

    const response = await inquirer.prompt([{
      name: 'plugins',
      message: 'Select plugins to uninstall',
      type: 'checkbox',
      choices: inqChoices
    }])

    if (!verbose) {
      // Intercept the stderr stream to hide npm warnings
      hideNPMWarnings()
    }

    // uninstall the plugins in sequence
    for (const plugin of response.plugins) {
      await this.config.runCommand('plugins:uninstall', [plugin])
    }
  }

  /**
   * Command entry point
   */
  async run () {
    const { flags } = this.parse(RollbackCommand)
    const plugins = this.config.plugins.filter(p => p.type === 'user')

    if (plugins.length === 0) {
      this.log('no installed plugins to clear')
      return
    }

    if (flags.list) {
      return this.__list(plugins)
    } else if (flags.interactive) {
      return this.__interactiveClear(plugins, flags.verbose)
    } else {
      return this.__clear(plugins, flags.confirm, flags.verbose)
    }
  }
}

RollbackCommand.description = 'Clears all installed plugins.'

RollbackCommand.flags = {
  interactive: flags.boolean({
    char: 'i',
    default: false,
    description: 'interactive clear mode'
  }),
  list: flags.boolean({
    char: 'l',
    default: false,
    description: 'list plugins that will be cleared'
  }),
  confirm: flags.boolean({
    char: 'c',
    default: true,
    description: 'confirmation needed for clear (defaults to true)',
    allowNo: true
  }),
  verbose: flags.boolean({
    char: 'v',
    default: false,
    description: 'Verbose output'
  })
}

module.exports = RollbackCommand
