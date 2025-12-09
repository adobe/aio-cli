/*
 * Copyright 2025 Adobe Inc. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const { Help } = require('@oclif/core')
const CustomHelp = require('../src/custom-help')

describe('CustomHelp', () => {
  let customHelp
  let showHelpSpy

  beforeEach(() => {
    const mockConfig = { commands: new Map(), topics: [] }
    customHelp = new CustomHelp(mockConfig)
    showHelpSpy = jest.spyOn(Help.prototype, 'showHelp').mockResolvedValue()
  })

  afterEach(() => {
    showHelpSpy.mockRestore()
  })

  test('resolves "rt" alias to "runtime"', async () => {
    await customHelp.showHelp(['rt'])
    expect(showHelpSpy).toHaveBeenCalledWith(['runtime'])
  })

  test('resolves "rt" with subcommands', async () => {
    await customHelp.showHelp(['rt', 'action'])
    expect(showHelpSpy).toHaveBeenCalledWith(['runtime', 'action'])
  })

  test('passes through non-aliased commands unchanged', async () => {
    await customHelp.showHelp(['config'])
    expect(showHelpSpy).toHaveBeenCalledWith(['config'])
  })

  test('handles empty array', async () => {
    await customHelp.showHelp([])
    expect(showHelpSpy).toHaveBeenCalledWith([])
  })

  test('handles non-array arguments', async () => {
    await customHelp.showHelp('runtime')
    expect(showHelpSpy).toHaveBeenCalledWith('runtime')
  })
})
