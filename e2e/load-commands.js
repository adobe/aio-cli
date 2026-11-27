/*
Copyright 2026 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// Loads the module of every command shipped with the CLI (root and bundled
// plugins) and writes a JSON report to the file given as the first argument.
// e2e.js runs this in a separate Node process so the result reflects the real
// Node module loader, e.g. a require() of an ESM-only dependency on Node 20.17.

const fs = require('fs')
const path = require('path')
const { Config } = require('@oclif/core')

const main = async (reportFile) => {
  const config = await Config.load(path.resolve(__dirname, '..'))
  const corePlugins = [...config.plugins.values()].filter(plugin => plugin.type === 'core')
  const report = {
    plugins: corePlugins.map(plugin => plugin.name),
    commands: [],
    failures: []
  }

  for (const plugin of corePlugins) {
    for (const command of plugin.commands) {
      report.commands.push(command.id)
      try {
        await command.load()
      } catch (error) {
        report.failures.push(`${command.id} (${plugin.name}): ${error.code || error.name} ${error.message.split('\n')[0]}`)
      }
    }
  }

  fs.writeFileSync(reportFile, JSON.stringify(report))
}

main(process.argv[2])
