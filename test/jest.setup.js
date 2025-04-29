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

global.setFetchMock = (ok = true, mockData = {}) => {
  global.fetch = jest.fn().mockResolvedValue({
    ok,
    json: () => ok ? Promise.resolve(mockData) : Promise.reject(mockData)
  })
}

// trap console log
// note: if you use console.log, some of these tests will start failing because they depend on the order/position of the output
beforeEach(() => { stdout.start(); stdout.print = false })
afterEach(() => { stdout.stop() })
