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

const testCommand = require('../src/index')

jest.mock('@oclif/config', () => {
  return {
    load: () => {
      return {
        findCommand: (cmd) => {
          return ['a', 'a:b', 'a:b:c', 'a:b:c:d'].indexOf(cmd) > -1
        }
      }
    }
  }
})

jest.mock('@oclif/command', () => {
  return {
    // note: arrow function won't work because Command is extended and called with new
    Command: function () {},
    run: function (cmd) {
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

  test('run function properly reforms args', async () => {
    let result = await testCommand.run(['a', 'c', 'd'])
    expect(result[0]).toEqual('a')

    // [a,b,c,d] => a:b:c:d
    result = await testCommand.run(['a', 'b', 'c', 'd'])
    expect(result[0]).toEqual('a:b:c:d')

    // [a,b,c,-f,d] => a:b:c -f d
    result = await testCommand.run(['a', 'b', 'c', '-f', 'd'])
    expect(result[0]).toEqual('a:b:c')

    // [a:b, c:d] => a:b:c:d
    result = await testCommand.run(['a:b', 'c:d'])
    expect(result[0]).toEqual('a:b:c:d')

    // [a:b:c:d] => a:b:c:d
    result = await testCommand.run(['a:b:c:d'])
    expect(result[0]).toEqual('a:b:c:d')

    // [a:b:c, d] => a:b:c:d
    result = await testCommand.run(['a:b:c', 'd'])
    expect(result[0]).toEqual('a:b:c:d')

    // [a b:c:d] => a:b:c:d
    result = await testCommand.run(['a', 'b:c:d'])
    expect(result[0]).toEqual('a:b:c:d')
  })
})
