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
const chalk = require('chalk').default
const fs = require.requireActual('fs')

test('cli init test', async () => {
  const packagejson = JSON.parse(fs.readFileSync('package.json').toString())
  const name = `${packagejson.name}`
  console.log(chalk.blue(`> e2e tests for ${chalk.bold(name)}`))
  const testFolder = 'e2e_test_run'

  expect(() => { execa.sync('rm', ['-rf', testFolder], { stderr: 'inherit' }) }).not.toThrow()
  console.log(chalk.dim(`    - create test foler..`))
  expect(() => { execa.sync('mkdir', [testFolder], { stderr: 'inherit' }) }).not.toThrow()
  process.chdir(testFolder)
  console.log(chalk.bold('    - running tests..'))
  expect(() => { execa.sync('node', ['../bin/run', 'app', 'init', '-y'], { stderr: 'inherit' }) }).not.toThrow()

  const files = ['actions/generic/index.js', 'test/actions/generic.test.js', 'test/jest.setup.js',
    'web-src/src/App.js', 'web-src/src/exc-runtime.js', 'web-src/404.html',
    'web-src/index.html', '.aio', '.env', 'package.json', 'README.md', 'manifest.yml']
  files.forEach(file => {
    expect(() => { execa.sync('ls', [file]) }).not.toThrow()
  })

  process.chdir('..')
  expect(() => { execa.sync('rm', ['-rf', testFolder], { stderr: 'inherit' }) }).not.toThrow()
  console.log(chalk.green(`    - done for ${chalk.bold(testFolder)}`))
})
