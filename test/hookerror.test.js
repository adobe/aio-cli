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

const mockRunHook = jest.fn()

jest.mock('@oclif/command', () => {
  return {
    // note: arrow function won't work because Command is extended and called with new
    Command: function () {
      console.log('someone created this')
    },
    run: function (cmd) {
      console.log('thriwing')
      throw new Error('things do not look good')
    }
  }
})

jest.mock('@oclif/config', () => {
  return {
    load: () => {
      return {
        runHook: mockRunHook,
        findCommand: (cmd) => {
          return ['a', 'a:b', 'a:b:c', 'a:b:c:d'].indexOf(cmd) > -1
        }
      }
    }
  }
})

describe('when command run throws', () => {
  test('fire hook when command throws', async () => {
    await expect(testCommand.run(['a', 'c', 'd'])).rejects.toThrow('things do not look good')
    expect(mockRunHook).toBeCalled()
  })
})
