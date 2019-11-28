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

const { Command, flags } = require('@oclif/command')
const { cli } = require('cli-ux')
const fetch = require('node-fetch')
const inquirer = require('inquirer')

// todo: future use keywords ecosytem:aio-cli-plugin
// use size + from to do paging ?

/* this is how cordova does it
https://npmsearch.com/query?fields=name,keywords,license,description,author,modified,homepage,version,rating&q=keywords:%22ecosystem:cordova%22&sort=rating:desc&size=500&start=0
*/

const url = 'https://api.npms.io/v2/search?q=aio-cli-plugin'

class DiscoCommand extends Command {
  async _installPlugins (list) {
    for (let x = 0; x < list.length; x++) {
      await this.config.runCommand('plugins:install', [list[x]])
    }
  }

  _getInstalledPlugins () {
    const map = {}
    this.config.commands.forEach(elem => {
      map[elem.pluginName] = elem.pluginType
    })
    return Object.keys(map)
  }

  sort (values, { descending = true, field = 'date' } = {}) {
    const supportedFields = ['name', 'date']
    if (!supportedFields.includes(field)) { // unknown field, we just return the array
      return values
    }

    values.sort((l, r) => {
      const d1 = l.package[field]
      const d2 = r.package[field]

      if (descending) {
        return (d1 > d2) ? -1 : (d1 < d2) ? 1 : 0
      } else {
        return (d1 > d2) ? 1 : (d1 < d2) ? -1 : 0
      }
    })
    return values
  }

  async install (values) {
    let inqChoices = values.map(el => {
      return {
        name: `${el.package.name}@${el.package.version}`,
        value: el.package.name }
    })

    const installedPlugins = this._getInstalledPlugins()

    // remove already installed plugins
    inqChoices = inqChoices.filter(el => {
      return installedPlugins.indexOf(el.value) < 0
    })

    if (inqChoices.length < 1) {
      this.log('All available plugins appear to be installed.')
      return
    }

    return inquirer.prompt([{
      name: 'plugins',
      message: 'select plugins to install',
      type: 'checkbox',
      choices: inqChoices
    }]).then(response => {
      this._installPlugins(response.plugins)
    })
  }

  async list (values) {
    const options = { year: 'numeric',
      month: 'long',
      day: 'numeric' }

    const columns = {
      name: {
        width: 10,
        get: row => `${row.package.name}`
      },
      version: {
        minWidth: 10,
        get: row => `${row.package.version}`
      },
      description: {
        get: row => `${row.package.description}`
      },
      published: {
        get: row => `${new Date(row.package.date).toLocaleDateString('en', options)}`
      }
    }
    // skip ones that aren't from us
    cli.table(values, columns)
  }

  async run () {
    const { flags } = this.parse(DiscoCommand)

    return fetch(url)
      .then(res => res.json())
      .then(json => {
        // ours only, this could become a flag, searching for oclif-plugin reveals some more
        const adobeOnly = json.results.filter(elem => elem.package.scope === 'adobe')
        this.sort(adobeOnly, { descending: flags['sort-order'] !== 'asc', field: flags['sort-field'] })

        if (flags.install) {
          this.install(adobeOnly)
        } else {
          this.list(adobeOnly)
        }
      })
      .catch(err => {
        this.error('Oops:' + err)
      })
  }
}

DiscoCommand.description = `Discover plugins to install

To install a plugin, run 'aio plugins install NAME'
`

DiscoCommand.aliases = ['plugins:discover']
DiscoCommand.flags = {
  install: flags.boolean({
    char: 'i',
    default: false,
    description: 'interactive install mode'
  }),
  'sort-field': flags.string({
    char: 'f',
    default: 'date',
    options: ['date', 'name'],
    description: 'which column to sort, use the sort-order flag to specify sort direction'
  }),
  'sort-order': flags.string({
    char: 'o',
    default: 'desc',
    options: ['asc', 'desc'],
    description: 'sort order for a column, use the sort-field flag to specify which column to sort'
  })
}

module.exports = DiscoCommand
