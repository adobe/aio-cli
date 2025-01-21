/*
 * Copyright 2019 Adobe Inc. All rights reserved.
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
const { sortValues } = require('../helpers')

/*
This is how cordova does it:
https://npmsearch.com/query?fields=name,keywords,license,description,author,modified,homepage,version,rating&q=keywords:%22ecosystem:cordova%22&sort=rating:desc&size=500&start=0

future: use keywords ecosytem:aio-cli-plugin
*/

class DiscoCommand extends Command {
  async _install (plugins) {
    // get installed plugins
    const installedPlugins = this.config.commands.map(elem => {
      return elem.pluginName
    })

    const inqChoices = plugins
      .filter(elem => { // remove any installed plugins from the list
        return !installedPlugins.includes(elem.name)
      })
      .map(elem => { // map to expected inquirer format
        return {
          name: `${elem.name}@${elem.version}`,
          value: elem.name
        }
      })

    if (!(inqChoices.length)) {
      this.log('All available plugins appear to be installed.')
      return []
    }

    const response = await inquirer.prompt([{
      name: 'plugins',
      message: 'Select plugins to install',
      type: 'checkbox',
      choices: inqChoices
    }])

    // install the plugins in sequence
    for (const plugin of response.plugins) {
      await this.config.runCommand('plugins:install', [plugin])
    }

    return response.plugins
  }

  async _list (plugins) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    const columns = {
      name: {
        width: 10,
        get: row => `${row.name}`
      },
      version: {
        minWidth: 10,
        get: row => `${row.version}`
      },
      description: {
        get: row => `${row.description}`
      },
      published: {
        get: row => `${new Date(row.date).toLocaleDateString('en', options)}`
      }
    }
    // skip ones that aren't from us
    ux.table(plugins, columns)
  }

  async run () {
    const { flags } = await this.parse(DiscoCommand)

    try {
      const url = 'https://registry.npmjs.org/-/v1/search?text=aio-cli-plugin'
      const response = await fetch(url)
      const json = await response.json()

      // ours only, this could become a flag, searching for oclif-plugin reveals some more
      const adobeOnly = json.objects
        .map(e => e.package)
        .filter(elem => elem.scope === 'adobe')

      sortValues(adobeOnly, {
        descending: flags['sort-order'] !== 'asc',
        field: flags['sort-field']
      })

      if (flags.install) {
        return this._install(adobeOnly)
      } else {
        return this._list(adobeOnly)
      }
    } catch (error) {
      this.error(error.toString())
    }
  }
}

DiscoCommand.description = `Discover plugins to install
To install a plugin, run 'aio plugins install NAME'
`

DiscoCommand.aliases = ['plugins:discover']
DiscoCommand.flags = {
  install: Flags.boolean({
    char: 'i',
    default: false,
    description: 'interactive install mode'
  }),
  'sort-field': Flags.string({
    char: 'f',
    default: 'date',
    options: ['date', 'name'],
    description: 'which column to sort, use the sort-order flag to specify sort direction'
  }),
  'sort-order': Flags.string({
    char: 'o',
    default: 'desc',
    options: ['asc', 'desc'],
    description: 'sort order for a column, use the sort-field flag to specify which column to sort'
  })
}

module.exports = DiscoCommand
