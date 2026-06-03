/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const execa = require('execa')
const path = require('path')
const fs = jest.requireActual('fs')
const util = require('util')
const fse = {
  mkdir: util.promisify(fs.mkdir),
  rm: util.promisify(fs.rm)
}

const BIN_RUN = path.resolve(__dirname, '../bin/run')

jest.setTimeout(120000)

test('errors render through oclif, not Node\'s uncaught-exception printer', async () => {
  // Spawns the real bin/run with an argv guaranteed to trigger a flag
  // parse error from `@oclif/core`. When the bin's `.catch` handler is
  // wired correctly, oclif's renderer produces a clean single-line
  // `Error: …` message. When the handler is dropped (regression
  // tracked in adobe/aio-cli#829 / ACNA-4659), the rejection escapes
  // to Node and the output instead contains a source frame, a caret,
  // a stack trace, and a `Node.js vXX` footer. Asserting on the
  // absence of those Node-specific markers detects the regression
  // without coupling to oclif's exact prefix.
  const result = await execa('node', [BIN_RUN, 'app', 'use', '--no-such-flag'],
    { reject: false })

  // Non-zero exit on a parse error is part of the contract.
  expect(result.exitCode).not.toBe(0)

  // The user-facing message must be present so the customer knows what
  // went wrong; the framework renders it on stderr.
  expect(result.stderr).toMatch(/Nonexistent flag.*--no-such-flag/)

  // None of these substrings should appear: each is a fingerprint of
  // Node's default unhandled-rejection / uncaught-exception output.
  expect(result.stderr).not.toMatch(/at processTicksAndRejections/)
  expect(result.stderr).not.toMatch(/^Node\.js v\d+/m)
  expect(result.stderr).not.toMatch(/^\s+\^\s*$/m)
})

test('cli init test', async () => {
  const testFolder = 'e2e_test_run'

  await fse.rm(testFolder, { recursive: true, force: true })
  await fse.mkdir(testFolder)
  process.chdir(testFolder)

  await execa('node', ['../bin/run', 'app', 'init', '-y', '--no-login', '--no-extensions'], { stderr: 'inherit' })

  const files = [
    'actions/generic/index.js',
    'actions/publish-events/index.js',
    'actions/utils.js',
    'test/generic.test.js',
    'test/publish-events.test.js',
    'test/utils.test.js',
    'jest.setup.js',
    'web-src/src/index.js',
    'web-src/src/exc-runtime.js',
    'web-src/index.html',
    '.babelrc',
    '.env',
    'package.json',
    'README.md',
    'app.config.yaml'
  ]

  const missingFiles = []

  files.forEach(file => {
    const fileExists = fs.existsSync(file)
    if (!fileExists) {
      console.error(`File ${file} does not exist.`)
      missingFiles.push(file)
    }
  })

  expect(missingFiles).toEqual([])

  process.chdir('..')
  await fse.rm(testFolder, { recursive: true, force: true })
})
