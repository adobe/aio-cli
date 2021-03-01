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

const fetch = require('node-fetch')
const inquirer = require('inquirer')
const { stdout } = require('stdout-stderr')
const helpers = require('../../src/helpers')

jest.mock('../../src/helpers')
jest.mock('inquirer')
jest.mock('ora')
const ora = require('ora')
ora.mockImplementation(() => ({
  start: jest.fn(),
  stop: jest.fn()
}))

const TheCommand = require('../../src/commands/rollback')

let command

beforeEach(() => {
  jest.clearAllMocks()
  fetch.resetMocks()
  command = new TheCommand([])
  command.config = {
    commands: [{ pluginName: 'baz' }],
    runCommand: jest.fn()
  }
})

/** @private */
function mockConfig (corePlugins, installedPlugins) {
  return {
    root: '/cliroot',
    pjson: {
      oclif: {
        plugins: corePlugins
      }
    },
    plugins: installedPlugins,
    runCommand: jest.fn()
  }
}

/** @private */
function doRunCommand (argv, onSuccess, onFailure) {
  return new Promise((resolve, reject) => {
    command.argv = argv
    return command.run()
      .then(async () => {
        if (typeof onSuccess === 'function') {
          await onSuccess()
        }
        resolve()
      })
      .catch(async e => {
        if (typeof onFailure === 'function') {
          await onFailure()
        }
        reject(e)
      })
  })
}

test('exports a run function', async () => {
  expect(typeof TheCommand.run).toEqual('function')
})

test('no installed plugins', () => {
  const corePlugins = []
  const installedPlugins = []

  command.config = mockConfig(corePlugins, installedPlugins)

  return doRunCommand([], async () => {
    expect(stdout.output).toMatch('no installed plugins to clear')
  })
})

test('clear (--no-confirm)', () => {
  const corePlugins = ['core1']
  const installedPlugins = [
    { name: 'core1', version: '0.1', type: 'core' },
    { name: 'plugin1', version: '0.1', type: 'user' },
    { name: 'plugin2', version: '0.1', type: 'user' },
    { name: 'plugin3', version: '0.1', type: 'user' }
  ]

  command.config = mockConfig(corePlugins, installedPlugins)
  const spy = jest.spyOn(command, '__clear')

  return doRunCommand(['--no-confirm'], async () => {
    const results = (await spy.mock.calls[0][0]).filter(p => p.type === 'user')
    expect(results.length).toEqual(3)
  })
})

test('clear (--confirm)', () => {
  const corePlugins = ['core1']
  const installedPlugins = [
    { name: 'core1', version: '0.1', type: 'core' },
    { name: 'plugin1', version: '0.1', type: 'user' },
    { name: 'plugin2', version: '0.1', type: 'user' },
    { name: 'plugin3', version: '0.1', type: 'user' }
  ]

  command.config = mockConfig(corePlugins, installedPlugins)
  const spy = jest.spyOn(command, '__clear')

  return doRunCommand(['--confirm'], async () => {
    const results = (await spy.mock.calls[0][0]).filter(p => p.type === 'user')
    expect(results.length).toEqual(3)
  })
})

test('clear (--interactive)', () => {
  const corePlugins = ['core1']
  const installedPlugins = [
    { name: 'core1', version: '0.1', type: 'core' },
    { name: 'plugin1', version: '0.1', type: 'user' },
    { name: 'plugin2', version: '0.1', type: 'user' },
    { name: 'plugin3', version: '0.1', type: 'user' }
  ]

  inquirer.prompt = jest.fn().mockResolvedValue({
    plugins: ['plugin1', 'plugin2']
  })

  command.config = mockConfig(corePlugins, installedPlugins)
  const spy = jest.spyOn(command, '__interactiveClear')

  return doRunCommand(['--interactive'], async () => {
    const results = (await spy.mock.calls[0][0]).filter(p => p.type === 'user')
    expect(results.length).toEqual(3)
  })
})

test('clear (--verbose)', () => {
  const corePlugins = ['core1']
  const installedPlugins = [
    { name: 'core1', version: '0.1', type: 'core' },
    { name: 'plugin1', version: '0.1', type: 'user' },
    { name: 'plugin2', version: '0.1', type: 'user' },
    { name: 'plugin3', version: '0.1', type: 'user' }
  ]

  inquirer.prompt = jest.fn().mockResolvedValue({
    plugins: ['plugin1', 'plugin2']
  })

  helpers.hideNPMWarnings.mockImplementation(() => {})
  command.config = mockConfig(corePlugins, installedPlugins)

  return doRunCommand(['--no-confirm', '--verbose'], async () => {
    expect(helpers.hideNPMWarnings).not.toHaveBeenCalled()
  })
})

test('clear (--interactive. --verbose)', () => {
  const corePlugins = ['core1']
  const installedPlugins = [
    { name: 'core1', version: '0.1', type: 'core' },
    { name: 'plugin1', version: '0.1', type: 'user' },
    { name: 'plugin2', version: '0.1', type: 'user' },
    { name: 'plugin3', version: '0.1', type: 'user' }
  ]

  inquirer.prompt = jest.fn().mockResolvedValue({
    plugins: ['plugin1', 'plugin2']
  })

  helpers.hideNPMWarnings.mockImplementation(() => {})
  command.config = mockConfig(corePlugins, installedPlugins)

  return doRunCommand(['--interactive', '--verbose'], async () => {
    expect(helpers.hideNPMWarnings).not.toHaveBeenCalled()
  })
})

test('clear (--list)', () => {
  const corePlugins = ['core1']
  const installedPlugins = [
    { name: 'core1', version: '0.1', type: 'core' },
    { name: 'plugin1', version: '0.1', type: 'user' },
    { name: 'plugin2', version: '0.1', type: 'user' },
    { name: 'plugin3', version: '0.1', type: 'user' }
  ]

  command.config = mockConfig(corePlugins, installedPlugins)
  const spy = jest.spyOn(command, '__list')

  return doRunCommand(['--list'], async () => {
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
