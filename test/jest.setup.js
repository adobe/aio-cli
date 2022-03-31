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

const { stdout } = require('stdout-stderr')

jest.setTimeout(3000)
jest.useFakeTimers()

const fetch = require('jest-fetch-mock')
jest.setMock('node-fetch', fetch)

// dont touch the real fs
jest.mock('fs', () => require('jest-plugin-fs/mock'))

// trap console log
beforeEach(() => { stdout.start() })
afterEach(() => { stdout.stop() })
