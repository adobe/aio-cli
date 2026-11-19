/*
 * Copyright 2024 Adobe Inc. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const hook = require('../../src/hooks/command_error')
const fs = require('fs')
const path = require('path')

jest.mock('fs')

describe('command_error hook', () => {
  let consoleErrorSpy

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation()
    jest.clearAllMocks()
  })

  afterEach(() => {
    consoleErrorSpy.mockRestore()
  })

  describe('authentication errors', () => {
    test('shows helpful message when auth error occurs outside App Builder project', async () => {
      fs.existsSync.mockReturnValue(false)

      await hook({ message: 'An AUTH key must be specified' })

      expect(fs.existsSync).toHaveBeenCalledWith(path.join(process.cwd(), 'app.config.yaml'))
      expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('You are not in an App Builder project directory'))
      expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('To fix this:'))
      expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('aio app init'))
    })

    test('shows helpful message for "AUTH key must be specified" error', async () => {
      fs.existsSync.mockReturnValue(false)

      await hook({ message: 'AUTH key must be specified' })

      expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('You are not in an App Builder project directory'))
    })

    test('shows helpful message for "authentication" error', async () => {
      fs.existsSync.mockReturnValue(false)

      await hook({ message: 'authentication failed' })

      expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('You are not in an App Builder project directory'))
    })

    test('shows helpful message for "not authenticated" error', async () => {
      fs.existsSync.mockReturnValue(false)

      await hook({ message: 'not authenticated' })

      expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('You are not in an App Builder project directory'))
    })

    test('does not show message when auth error occurs inside App Builder project', async () => {
      fs.existsSync.mockReturnValue(true)

      await hook({ message: 'An AUTH key must be specified' })

      expect(fs.existsSync).toHaveBeenCalledWith(path.join(process.cwd(), 'app.config.yaml'))
      expect(consoleErrorSpy).not.toHaveBeenCalled()
    })

    test('handles case-insensitive auth error matching', async () => {
      fs.existsSync.mockReturnValue(false)

      await hook({ message: 'an auth KEY must be SPECIFIED' })

      expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('You are not in an App Builder project directory'))
    })
  })

  describe('non-authentication errors', () => {
    test('does not show message for non-auth errors', async () => {
      await hook({ message: 'Some other error occurred' })

      expect(fs.existsSync).not.toHaveBeenCalled()
      expect(consoleErrorSpy).not.toHaveBeenCalled()
    })

    test('handles undefined message', async () => {
      await hook({ message: undefined })

      expect(fs.existsSync).not.toHaveBeenCalled()
      expect(consoleErrorSpy).not.toHaveBeenCalled()
    })

    test('handles null message', async () => {
      await hook({ message: null })

      expect(fs.existsSync).not.toHaveBeenCalled()
      expect(consoleErrorSpy).not.toHaveBeenCalled()
    })

    test('handles empty message', async () => {
      await hook({ message: '' })

      expect(fs.existsSync).not.toHaveBeenCalled()
      expect(consoleErrorSpy).not.toHaveBeenCalled()
    })
  })
})
