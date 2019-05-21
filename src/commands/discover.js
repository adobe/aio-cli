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
const plugins = require('@oclif/plugin-plugins')
const { cli } = require('cli-ux')
const fetch = require('node-fetch')
const inquirer = require('inquirer')

// todo: future use keywords ecosytem:aio-cli-plugin
// use size+from to do paging ?
let url = 'https://api.npms.io/v2/search?q=aio-cli-plugin'

class DiscoCommand extends Command {
  async _installPlugins (list) {
    for (let x = 0; x < list.length; x++) {
      await this.config.runCommand('plugins:install', [list[x]])
    }
  }
  async run () {
    const { flags } = this.parse(DiscoCommand)

    return fetch(url)
      .then(res => res.json())
      .then(json => {
        let adobeOnly = json.results.filter(elem => elem.package.scope === 'adobe')

        if (flags.install) {
          // todo: remove already installed plugins
          let inqChoices = adobeOnly.map(el => {
            return {
              name: `${el.package.name}@${el.package.version}`,
              value: el.package.name }
          })
          inquirer.prompt([{
            name: 'plugins',
            message: 'select plugins to install',
            type: 'checkbox',
            choices: inqChoices
          }]).then(response => {
            this._installPlugins(response.plugins)
          })
        } else {
          let options = { year: 'numeric',
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
          cli.table(adobeOnly, columns)
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
    default: false
  })
}

module.exports = DiscoCommand
