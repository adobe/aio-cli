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
const helpers = require('../../src/helpers')
const { stdout } = require('stdout-stderr')

jest.mock('../../src/helpers')
jest.mock('inquirer')
jest.mock('ora')
const ora = require('ora')
ora.mockImplementation(() => ({
  start: jest.fn(),
  stop: jest.fn()
}))

const TheCommand = require('../../src/commands/update')

let command

beforeEach(() => {
  jest.clearAllMocks()
  fetch.resetMocks()
  command = new TheCommand([])
  command.config = {
    commands: [],
    runCommand: jest.fn()
  }
})

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

test('no updates', () => {
  const corePlugins = ['core1']
  const installedPlugins = [
    { name: 'plugin1', version: '0.1', type: 'user' },
    { name: 'plugin2', version: '0.1', type: 'user' },
    { name: 'plugin3', version: '0.1', type: 'user' }
  ]

  helpers.getNpmLatestVersion.mockImplementation(() => '0.1')
  helpers.getNpmLocalVersion.mockImplementation(() => '0.1')
  command.config = mockConfig(corePlugins, installedPlugins)

  const spy = jest.spyOn(command, '__processPlugins')

  return doRunCommand([], async () => {
    const results = (await spy.mock.results[0].value).filter(p => p.needsUpdate)
    expect(results.length).toEqual(0)
    expect(stdout.output).toMatch('no plugins to update')
  })
})

test('needs update (--no-confirm)', () => {
  const corePlugins = ['core1']
  const installedPlugins = [
    { name: 'plugin1', version: '0.1', type: 'user' },
    { name: 'plugin2', version: '0.1', type: 'user' },
    { name: 'plugin3', version: '0.1', type: 'user' }
  ]

  helpers.getNpmLatestVersion.mockImplementation(() => '0.2')
  helpers.getNpmLocalVersion.mockImplementation(() => '0.1')
  command.config = mockConfig(corePlugins, installedPlugins)

  const spy = jest.spyOn(command, '__processPlugins')

  return doRunCommand(['--no-confirm'], async () => {
    const results = (await spy.mock.results[0].value).filter(p => p.needsUpdate)
    expect(results.length).toEqual(3)
  })
})

test('needs update (--confirm)', () => {
  const corePlugins = ['core1']
  const installedPlugins = [
    { name: 'core1', version: '0.1', type: 'core' },
    { name: 'plugin1', version: '0.1', type: 'user' },
    { name: 'plugin2', version: '0.1', type: 'user' },
    { name: 'plugin3', version: '0.1', type: 'user' }
  ]

  helpers.getNpmLatestVersion.mockImplementation(() => '0.2')
  helpers.getNpmLocalVersion.mockImplementation(() => '0.1')
  command.config = mockConfig(corePlugins, installedPlugins)

  const spy = jest.spyOn(command, '__processPlugins')

  return doRunCommand(['--confirm'], async () => {
    const results = (await spy.mock.results[0].value).filter(p => p.needsUpdate)
    expect(results.length).toEqual(4)
  })
})

test('needs warning', () => {
  const corePlugins = ['core1', 'core2']
  const installedPlugins = [
    { name: 'core1', version: '0.1', type: 'user' },
    { name: 'core2', version: '0.1', type: 'core' },
    { name: 'plugin2', version: '0.1', type: 'user' },
    { name: 'plugin3', version: '0.1', type: 'user' }
  ]

  helpers.getNpmLatestVersion.mockImplementation(() => '0.1')
  helpers.getNpmLocalVersion.mockImplementation(() => '0.1')
  command.config = mockConfig(corePlugins, installedPlugins)

  const spy = jest.spyOn(command, '__processPlugins')

  return doRunCommand([], async () => {
    const results = (await spy.mock.results[0].value).filter(p => p.needsWarning)
    expect(results.length).toEqual(1)
  })
})

test('list', () => {
  const corePlugins = ['core1']
  const installedPlugins = [
    { name: 'plugin1', version: '0.1', type: 'user' },
    { name: 'plugin2', version: '0.1', type: 'user' },
    { name: 'plugin3', version: '0.1', type: 'user' }
  ]

  helpers.getNpmLatestVersion.mockImplementation(() => '0.2')
  helpers.getNpmLocalVersion.mockImplementation(() => '0.1')
  command.config = mockConfig(corePlugins, installedPlugins)

  const spyList = jest.spyOn(command, '__list')
  const spyInstall = jest.spyOn(command, '__install')
  const spyInteractiveInstall = jest.spyOn(command, '__interactiveInstall')

  return doRunCommand(['--list'], async () => {
    expect(spyList).toHaveBeenCalled()
    expect(spyInstall).not.toHaveBeenCalled()
    expect(spyInteractiveInstall).not.toHaveBeenCalled()
  })
})

test('interactive', () => {
  const corePlugins = ['core1']
  const installedPlugins = [
    { name: 'plugin1', version: '0.1', type: 'user' },
    { name: 'plugin2', version: '0.1', type: 'user' },
    { name: 'plugin3', version: '0.1', type: 'user' }
  ]

  helpers.getNpmLatestVersion.mockImplementation(() => '0.2')
  helpers.getNpmLocalVersion.mockImplementation(() => '0.1')
  command.config = mockConfig(corePlugins, installedPlugins)

  const spyInstall = jest.spyOn(command, '__install')
  const spyInteractiveInstall = jest.spyOn(command, '__interactiveInstall')

  inquirer.prompt = jest.fn().mockResolvedValue({
    plugins: ['plugin1', 'plugin2']
  })

  return doRunCommand(['--interactive'], async () => {
    expect(spyInstall).not.toHaveBeenCalled()
    expect(spyInteractiveInstall).toHaveBeenCalled()
  })
})
