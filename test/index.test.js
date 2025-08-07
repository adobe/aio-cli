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

const testCommand = require('../src/index')

jest.mock('@oclif/core', () => {
  return {
    ...jest.requireActual('@oclif/core'),
    Config: {
      load: () => ({
        pjson: {
          engines: {
            node: '>=18 <23'
          }
        },
        options: {}
      })
    },
    Command: jest.fn(),
    run: async function (cmd) {
      return cmd
    }
  }
})

describe('run command', () => {
  test('index exports a run function', async () => {
    expect(typeof testCommand.run).toEqual('function')
  })

  test('run function returns a promise', async () => {
    const result = testCommand.run(['a'])
    expect(typeof result).toEqual('object')
    expect(typeof result.then).toEqual('function')
    expect(typeof result.catch).toEqual('function')
  })

  test('run using process.argv', async () => {
    const temp = process.argv
    process.argv = [0, 0, 'a']
    const result = await testCommand.run()
    expect(result[0]).toEqual('a')
    process.argv = temp
  })
})

describe('Node.js version check', () => {
  const originalVersion = process.version
  let logSpy

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation()
  })

  afterEach(() => {
    jest.restoreAllMocks()
    Object.defineProperty(process, 'version', {
      value: originalVersion
    })
  })

  test('should not show warning for supported Node.js version', async () => {
    Object.defineProperty(process, 'version', {
      value: 'v22.14.0'
    })

    const AIOCommand = require('../src/index')
    await AIOCommand.run(['--version'])

    // Check warning is not displayed
    expect(logSpy).not.toHaveBeenCalledWith(
      expect.stringContaining('Warning: Node.js version')
    )
  })

  test('should show warning for unsupported Node.js version', async () => {
    Object.defineProperty(process, 'version', {
      value: 'v23.0.0'
    })

    const AIOCommand = require('../src/index')
    await AIOCommand.run(['--version'])

    // Check warning is displayed
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('Warning: Node.js version v23.0.0 is not supported')
    )
  })
})
