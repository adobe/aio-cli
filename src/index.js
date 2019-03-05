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

const { Command, run } = require('@oclif/command')
const Config = require("@oclif/config")


class AIOCommand extends Command { }

AIOCommand.run =  async (argv, opts) => {
  if (!argv) {
    argv = process.argv.slice(2)
  }

  // oclif originally included the following too ... 
  // this resulted in an uncovered line in the tests, and it appeared to never happen anyway
  // seem like it would only 
    //||  module.parent && module.parent.parent && module.parent.parent.filename 
  const config = await Config.load(opts || __dirname);

  let subCommand = argv[0]

  // 1. find the first flag ( note: there could be none ... )
  let firstFlag = argv.slice().findIndex(elem => elem.indexOf('-') == 0)
  if (firstFlag < 0) {
    firstFlag = argv.length
  }
  // 2. try to make the biggest topic command by combining with ':'
  // and looking up in this.config.commandIDs
  for (let x = firstFlag; x > -1; x--) {
    subCommand = argv.slice(0, x).join(':')
      //if (config.findTopic(subCommand)) { // <= this works but does not support aliases
    if (config.findCommand(subCommand)) {
      argv = [subCommand].concat(argv.slice(x))
      break
    }
  }

  // the second parameter is the root path to the CLI containing the command
  return run(argv, config.options)

}

module.exports = {run:AIOCommand.run}
