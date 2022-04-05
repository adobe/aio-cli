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

class MockOclifError extends Error {
  constructor (message) {
    super(message)
    this.name = 'OclifError'
    this.oclif = { exit: 0 }
  }
}

jest.mock('@oclif/command', () => {
  return {
    // note: arrow function won't work because Command is extended and called with new
    Command: function () { },
    run: function (cmd) {
      if (cmd.indexOf('--help') > -1) {
        // this error has extra props, so base command knows not to re-throw it
        throw new MockOclifError('maybe things will turn out okay')
      } else {
        throw new Error('things do not look good')
      }
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
    expect(mockRunHook).toHaveBeenCalledWith('command_error', expect.objectContaining({ message: 'things do not look good' }))
  })

  test('when command throws oclif-error, swallow error and fire `postrun` event :  --help', async () => {
    await expect(testCommand.run(['a', 'c', 'd', '--help'])).resolves.toEqual(undefined)
    expect(mockRunHook).toHaveBeenCalledWith('postrun')
  })
})
