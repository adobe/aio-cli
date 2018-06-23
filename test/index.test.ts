/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import {expect, test} from '@oclif/test'
const chalk = require('chalk')
const Config = require('@adobe/aio-cli-plugin-config')
const fs = require('fs')
const path = require('path')

before(async () => {
  // tslint:disable

  const configObject = await Config.get()
  if (JSON.stringify(configObject) !== '{}') {
    // we back-up the existing config, just in case
    const backup_file = path.join(process.cwd(), 'config.json.bak')
    console.log(chalk.yellow(`[globalSetup] Existing config found, backing up to '${backup_file}'.`))
    fs.writeFileSync(backup_file, JSON.stringify(configObject, null, 4))
  }

  console.log(chalk.yellow('[globalSetup] Wiping the config for the tests.'))
  Config.clear()

  // tslint:enable
})

after(async () => {
  // tslint:disable

  const configObject = await Config.get()
  if (JSON.stringify(configObject) !== '{}') {
    console.log(chalk.red('[globalTeardown] !!!ERROR!!! The config file was changed during the tests.'))
    console.log(chalk.gray(`[globalTeardown] The new config file contents are: ${JSON.stringify(configObject)}`))
  }
  // tslint:enable
})

describe('config command existence tests', () => {
  test
  .stdout()
  .command(['config'])
  .it('checks existence of config command', ctx => {
    // it should fail if command not found
    expect(ctx.stdout).to.exist
  })

  test
  .stdout()
  .command(['config:set'])
  .it('checks existence of config:set command', ctx => {
    // it should fail if command not found
    expect(ctx.stdout).to.exist
  })

  test
  .stdout()
  .command(['config:get'])
  .it('checks existence of config:get command', ctx => {
    // it should fail if command not found
    expect(ctx.stdout).to.exist
  })

  test
  .stdout()
  .command(['config:del'])
  .it('checks existence of config:del command', ctx => {
    // it should fail if command not found
    expect(ctx.stdout).to.exist
  })

  test
  .stdout()
  .command(['config:delete'])
  .it('checks existence of config:delete command', ctx => {
    // it should fail if command not found
    expect(ctx.stdout).to.exist
  })

  // test
  // .stdout()
  // .command(['config:clear']) // TODO: need to mock
  // .it('checks existence of config:clear command', ctx => {
  //   // it should fail if command not found
  //   expect(ctx.stdout).to.exist
  // })
})

describe('jwt-auth command existence tests', () => {
  test
  .stdout()
  .command(['jwt-auth:access-token'])
  .catch('missing config data: jwt-auth')
  .it('checks existence of jwt-auth:access-token command', ctx => {
    // Error is thrown above
    // it should fail if command not found
    expect(ctx.stdout).to.exist
  })
})

describe('console command existence tests', () => {
  test
  .stdout()
  .command(['console:list-integrations'])
  .catch('missing config data: jwt-auth')
  .it('checks existence of console:list-integrations command', ctx => {
    // Error is thrown above
    // it should fail if command not found
    expect(ctx.stdout).to.exist
  })

  test
  .stdout()
  .command(['console:select-integration'])
  .catch('missing expected integration identifier.')
  .it('checks existence of console:select-integration command', ctx => {
    // Error is thrown above
    // it should fail if command not found
    expect(ctx.stdout).to.exist
  })
})
