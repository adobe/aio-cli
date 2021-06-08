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
const fs = jest.requireActual('fs')
const util = require('util')
const fse = {
  mkdir: util.promisify(fs.mkdir),
  rm: util.promisify(fs.rm)
}

jest.setTimeout(120000)

test('cli init test', async () => {
  const testFolder = 'e2e_test_run'

  await fse.rm(testFolder, { recursive: true, force: true })
  await fse.mkdir(testFolder)
  process.chdir(testFolder)

  await execa('node', ['../bin/run', 'app', 'init', '-y'], { stderr: 'inherit' })

  const files = [
    'actions/generic/index.js',
    'test/actions/generic.test.js',
    'test/jest.setup.js',
    'web-src/src/index.js',
    'web-src/src/exc-runtime.js',
    'web-src/index.html',
    '.aio',
    '.env',
    'package.json',
    'README.md',
    'manifest.yml']

  files.forEach(file => {
    const fileExists = fs.existsSync(file)
    if (!fileExists) {
      console.error(`File ${file} does not exist.`)
    }
    expect(fileExists).toBeTruthy()
  })

  process.chdir('..')
  await fse.rm(testFolder, { recursive: true, force: true })
})
