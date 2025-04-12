/*
 * Copyright 2022 Adobe Inc. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const { Command, run, Config } = require('@oclif/core')
const semver = require('semver')
const chalk = require('chalk')

class AIOCommand extends Command { }

AIOCommand.run = async (argv, opts) => {
  if (!argv) {
    argv = process.argv.slice(2)
  }

  // oclif originally included the following too ...
  // this resulted in an uncovered line in the tests, and it appeared to never happen anyway
  // seem like it would only
  // ||  module.parent && module.parent.parent && module.parent.parent.filename
  const config = await Config.load(opts || __dirname)

  // Check Node.js version
  const nodeVersion = process.version
  if (semver.major(nodeVersion) > 22) {
    console.log(chalk.yellow('⚠️ Warning: You are using Node.js version ' + nodeVersion + ', which is not officially supported by Adobe I/O CLI.'))
    console.log(chalk.yellow('   Supported versions are Node.js 18, 20, and 22.'))
    console.log(chalk.yellow('   To use a supported Node.js version, please consider using nvm (Node Version Manager).'))
    console.log(chalk.yellow('   To find the nvm documentation visit:'))
    console.log(chalk.yellow('   https://github.com/nvm-sh/nvm'))
    console.log()
  }

  // the second parameter is the root path to the CLI containing the command
  try {
    return await run(argv, config.options)
  } catch (error) {
    // oclif throws if the user typed --help ... ?
    if (error.oclif && error.oclif.exit === 0) {
      await config.runHook('postrun')
    } else {
      await config.runHook('command_error', { message: error.message })
      throw (error)
    }
  }
}

module.exports = AIOCommand
