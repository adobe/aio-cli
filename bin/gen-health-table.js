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

const fs = require('fs-extra')
const Readme = require('@oclif/dev-cli/lib/commands/readme').default

function genRow (pkName) {
  return `| [@${pkName}](https://github.com/${pkName})  ` +
         `| [![Version](https://img.shields.io/npm/v/@${pkName}.svg)](https://npmjs.org/package/@${pkName})` +
         `| [![Downloads/week](https://img.shields.io/npm/dw/@${pkName}.svg)](https://npmjs.org/package/@${pkName})` +
         `| [![Build Status](https://travis-ci.com/${pkName}.svg?branch=master)](https://travis-ci.com/${pkName})` +
         `| [![Codecov Coverage](https://img.shields.io/codecov/c/github/${pkName}/master.svg?style=flat-square)](https://codecov.io/gh/${pkName}/)` +
         `| [![Github Issues](https://img.shields.io/github/issues/${pkName}.svg)](https://github.com/${pkName}/issues)` +
         `| [![Github Pull Requests](https://img.shields.io/github/issues-pr/${pkName}.svg)](https://github.com/${pkName}/pulls)|`
}

function replaceTag (readme, tag, body) {
  const oclDev = new Readme()
  return oclDev.replaceTag(readme, tag, body)

  // this is the code that oclif/dev-cli/readme runs:
  // if (readme.includes(`<!-- ${tag} -->`)) {
  //   if (readme.includes(`<!-- ${tag}stop -->`)) {
  //     readme = readme.replace(new RegExp(`<!-- ${tag} -->(.|\n)*<!-- ${tag}stop -->`, 'm'), `<!-- ${tag} -->`)
  //   }
  //   console.log(`replacing <!-- ${tag} --> in README.md`)
  // }
  // return readme.replace(`<!-- ${tag} -->`, `<!-- ${tag} -->\n${body}\n<!-- ${tag}stop -->`)
}

// load package.json and get @adobe dependencies
// only adobe cli plugins, and remove the '@'
const pkjson = fs.readJSONSync('package.json')
const adobeDeps = pkjson.oclif.plugins
  .filter(item => item.indexOf('@adobe/aio-cli-plugin') === 0)
  .map(item => item.substring(1))

// add the aio-cli itself ...
adobeDeps.unshift(pkjson.name.substring(1))

// prime tableData with headers, and hrs
const tableData = ['| Module | Version | Downloads | Build Status | Coverage  | Issues | Pull Requests |',
  '|---|---|---|---|---|---|---|']

// add a row for each item
adobeDeps.forEach(item => { tableData.push(genRow(item)) })

// replace the text in README
const readme = fs.readFileSync('README.md', 'utf8')
fs.writeFileSync('README.md', replaceTag(readme, 'health', tableData.join('\n')))
