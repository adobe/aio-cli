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
const TheCommand = require('../../src/commands/discover')
const { stdout } = require('stdout-stderr')

jest.mock('inquirer')

let command

beforeEach(() => {
  fetch.resetMocks()
  command = new TheCommand([])
  command.config = {
    commands: [{ pluginName: '@adobe/aio-cli-plugin-baz' }],
    runCommand: jest.fn()
  }
})

test('exports a run function', async () => {
  expect(typeof TheCommand.run).toEqual('function')
})

describe('sorting', () => {
  const genesis = new Date()
  const later = new Date(genesis.valueOf())
  later.setDate(later.getDate() + 10)

  const expectedResult = {
    objects: [
      { package: { name: '@adobe/aio-cli-plugin-a', description: 'plugin a', version: '1.0.0', date: genesis } },
      { package: { name: '@adobe/aio-cli-plugin-b', description: 'plugin b', version: '1.0.1', date: later } }
    ]
  }
  beforeEach(() => {
    fetch.mockResponseOnce(JSON.stringify(expectedResult))
  })

  test('unknown sort-field', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      objects: []
    }))
    command.argv = ['--sort-field', 'unknown']
    await expect(command.run()).rejects.toThrow('Expected --sort-field=')
  })

  test('sort-field=name, ascending', async () => {
    command.argv = ['--sort-field', 'name', '--sort-order', 'asc']
    await command.run()
    const splitOutput = stdout.output.split('\n')
    expect(splitOutput[2]).toMatch('@adobe/aio-cli-plugin-a') // @adobe/aio-cli-plugin-a is first
    expect(splitOutput[3]).toMatch('@adobe/aio-cli-plugin-b') // @adobe/aio-cli-plugin-b is second
  })

  test('sort-field=name, descending', async () => {
    command.argv = ['--sort-field', 'name', '--sort-order', 'desc']
    await command.run()
    const splitOutput = stdout.output.split('\n')
    expect(splitOutput[2]).toMatch('@adobe/aio-cli-plugin-b') // @adobe/aio-cli-plugin-b is first
    expect(splitOutput[3]).toMatch('@adobe/aio-cli-plugin-a') // @adobe/aio-cli-plugin-a is second
  })

  test('sort-field=date, ascending', async () => {
    command.argv = ['--sort-field', 'date', '--sort-order', 'asc']
    await command.run()
    const splitOutput = stdout.output.split('\n')
    expect(splitOutput[2]).toMatch('@adobe/aio-cli-plugin-a') // @adobe/aio-cli-plugin-a is first
    expect(splitOutput[3]).toMatch('@adobe/aio-cli-plugin-b') // @adobe/aio-cli-plugin-b is second
  })

  test('sort-field=date, descending', async () => {
    command.argv = ['--sort-field', 'date', '--sort-order', 'desc']
    await command.run()
    const splitOutput = stdout.output.split('\n')
    expect(splitOutput[2]).toMatch('@adobe/aio-cli-plugin-b') // @adobe/aio-cli-plugin-b is first
    expect(splitOutput[3]).toMatch('@adobe/aio-cli-plugin-a') // @adobe/aio-cli-plugin-a is second
  })
})

test('interactive install', async () => {
  const now = new Date()
  const tomorrow = new Date(now.valueOf() + 86400000)
  const dayAfter = new Date(tomorrow.valueOf() + 86400000)

  const expectedResult = {
    objects: [
      { package: { name: '@adobe/aio-cli-plugin-foo', description: 'some foo', version: '1.0.0', date: now } },
      { package: { name: '@adobe/aio-cli-plugin-bar', description: 'some bar', version: '1.0.1', date: tomorrow } },
      { package: { name: '@adobe/aio-cli-plugin-baz', description: 'some baz', version: '1.0.2', date: dayAfter } }
    ]
  }
  fetch.mockResponseOnce(JSON.stringify(expectedResult))

  command.argv = ['-i']
  inquirer.prompt = jest.fn().mockResolvedValue({
    plugins: ['@adobe/aio-cli-plugin-bar', '@adobe/aio-cli-plugin-foo']
  })

  const result = await command.run()
  expect(result).toEqual(['@adobe/aio-cli-plugin-bar', '@adobe/aio-cli-plugin-foo'])
  const arg = inquirer.prompt.mock.calls[0][0] // first arg of first call
  expect(arg[0].choices.map(elem => elem.value)).toEqual(['@adobe/aio-cli-plugin-bar', '@adobe/aio-cli-plugin-foo']) // @adobe/aio-cli-plugin-baz was an existing plugin, filtered out
})

test('interactive install - no choices', async () => {
  const now = new Date()

  const expectedResult = {
    objects: [
      { package: { name: '@adobe/aio-cli-plugin-baz', description: 'some baz', version: '1.0.2', date: now } }
    ]
  }
  fetch.mockResponseOnce(JSON.stringify(expectedResult))

  command.argv = ['-i']
  inquirer.prompt = jest.fn().mockResolvedValue({
    plugins: []
  })
  const result = await command.run()
  expect(result).toEqual([])
})

test('json result error', async () => {
  fetch.mockResponse()
  command.argv = []
  await expect(command.run()).rejects.toThrow('FetchError: invalid json response body')
})
