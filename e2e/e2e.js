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
const crypto = require('crypto')
const os = require('os')
const path = require('path')
const fs = jest.requireActual('fs')
const util = require('util')
const fse = {
  mkdir: util.promisify(fs.mkdir),
  rm: util.promisify(fs.rm)
}
const { oclif: { plugins: BUNDLED_PLUGINS } } = require('../package.json')

const BIN_RUN = path.resolve(__dirname, '../bin/run')
const LOAD_COMMANDS = path.resolve(__dirname, 'load-commands.js')

jest.setTimeout(120000)

let tmpDir

/**
 * Runs the CLI in tmpDir with an isolated global config and telemetry disabled.
 *
 * @param {Array<string>} args the CLI arguments
 * @param {object} [options] execa options
 * @returns {Promise<object>} the execa result
 */
const aio = (args, options = {}) => execa(process.execPath, [BIN_RUN, ...args], {
  cwd: tmpDir,
  env: {
    AIO_CONFIG_FILE: path.join(tmpDir, 'global-aio-config'),
    AIO_TELEMETRY_DISABLED: 'true'
  },
  ...options
})

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

describe('bundled plugins (offline)', () => {
  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'aio-cli-e2e-'))
  })

  afterEach(async () => {
    await fse.rm(tmpDir, { recursive: true, force: true })
  })

  test('every bundled plugin is installed and every command module loads', async () => {
    // A dependency change can break a plugin only when one of its commands
    // is run, e.g. an ESM-only package that a plugin require()s fails on
    // Node 20.17. Load every command module to catch that for all commands.
    const reportFile = path.join(tmpDir, 'load-commands.json')
    await execa(process.execPath, [LOAD_COMMANDS, reportFile])
    const report = JSON.parse(fs.readFileSync(reportFile, 'utf8'))

    expect(report.plugins).toEqual(expect.arrayContaining(BUNDLED_PLUGINS))
    expect(report.commands.length).toBeGreaterThan(0)
    expect(report.failures).toEqual([])
  })

  test('certificate generate, fingerprint and verify', async () => {
    const generated = await aio(['certificate', 'generate', '--keyout', 'private.key', '--out', 'cert.crt', '-n', 'e2e.aio.test', '--days', '2'])
    expect(generated.stdout).toMatch('success: generated certificate')

    // Check the output with Node's own X.509 implementation, independently of node-forge.
    const cert = new crypto.X509Certificate(fs.readFileSync(path.join(tmpDir, 'cert.crt')))
    const privateKey = crypto.createPrivateKey(fs.readFileSync(path.join(tmpDir, 'private.key')))
    expect(cert.subject).toBe('CN=e2e.aio.test')
    expect(cert.checkPrivateKey(privateKey)).toBe(true)
    const validDays = (Date.parse(cert.validTo) - Date.parse(cert.validFrom)) / (24 * 60 * 60 * 1000)
    expect(validDays).toBeGreaterThan(1.9)
    expect(validDays).toBeLessThan(2.1)

    const fingerprint = await aio(['certificate', 'fingerprint', 'cert.crt'])
    expect(fingerprint.stdout.trim()).toBe(cert.fingerprint.replace(/:/g, '').toLowerCase())

    expect((await aio(['certificate', 'verify', 'cert.crt'])).stdout.trim()).toBe('Verified')
    expect((await aio(['certificate', 'verify', 'cert.crt', '--days', '1'])).stdout.trim()).toBe('certificate will be valid in 1 day')
    expect((await aio(['certificate', 'verify', 'cert.crt', '--days', '5'])).stdout.trim()).toBe('certificate will NOT be valid in 5 days')

    fs.writeFileSync(path.join(tmpDir, 'invalid.crt'), 'not a certificate')
    const invalid = await aio(['certificate', 'verify', 'invalid.crt'], { reject: false })
    expect(invalid.exitCode).not.toBe(0)
    expect(invalid.stderr).toMatch(/Invalid PEM/)
  })

  test('config set, get and delete for global and local config', async () => {
    const globalConfigFile = path.join(tmpDir, 'global-aio-config')
    const localConfigFile = path.join(tmpDir, '.aio')

    await aio(['config', 'set', 'e2e.global', 'global-value'])
    await aio(['config', 'set', '--local', 'e2e.local', 'local-value'])

    expect(fs.readFileSync(globalConfigFile, 'utf8')).toMatch('global-value')
    expect(fs.readFileSync(globalConfigFile, 'utf8')).not.toMatch('local-value')
    expect(fs.readFileSync(localConfigFile, 'utf8')).toMatch('local-value')
    expect((await aio(['config', 'get', 'e2e.global'])).stdout.trim()).toBe('global-value')
    expect(JSON.parse((await aio(['config', 'get', 'e2e', '--json'])).stdout))
      .toEqual({ global: 'global-value', local: 'local-value' })

    await aio(['config', 'delete', 'e2e.global'])
    await aio(['config', 'delete', '--local', 'e2e.local'])

    expect((await aio(['config', 'get', 'e2e', '--json'])).stdout.trim()).toBe('')
  })
})

test('cli init test', async () => {
  const testFolder = 'e2e_test_run'

  await fse.rm(testFolder, { recursive: true, force: true })
  await fse.mkdir(testFolder)
  process.chdir(testFolder)

  await execa('node', ['../bin/run', 'app', 'init', '-y', '--no-login', '--standalone-app'], { stderr: 'inherit' })

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
