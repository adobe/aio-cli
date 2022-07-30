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

const fetch = require('node-fetch')
const fs = require('fs')
const inquirer = require('inquirer')

require('./types.jsdoc') // get types

/**
 * Sort array values according to the sort order and/or sort-field.
 *
 * Note that this will use the Javascript sort() function, thus the values will
 * be sorted in-place.
 *
 * @param {Array<object>} values array of objects (with fields to sort by)
 * @param {object} [options] sort options to pass
 * @param {boolean} [options.descending] true by default, sort order
 * @param {string} [options.field] 'date' by default, sort field ('name', 'date' options)
 * @returns {Array<object>} the sorted values array (input values array sorted in place)
 */
function sortValues (values, { descending = true, field = 'date' } = {}) {
  const supportedFields = ['name', 'date']
  if (!supportedFields.includes(field)) { // unknown field, we just return the array
    console.log('unknown field ... ', field)
    return values
  }

  values.sort((left, right) => {
    const d1 = left[field]
    const d2 = right[field]

    if (descending) {
      return (d1 > d2) ? -1 : (d1 < d2) ? 1 : 0
    } else {
      return (d1 > d2) ? 1 : (d1 < d2) ? -1 : 0
    }
  })
  return values
}

/**
 * Gets the latest version of a plugin from npm.
 *
 * @param {string} npmPackageName the npm package name of the plugin
 * @returns {string} the latest version of the plugin from the npm registry
 */
async function getNpmLatestVersion (npmPackageName) {
  const res = await fetch(`https://registry.npmjs.com/${npmPackageName}`)
  const { 'dist-tags': distTags } = await res.json()
  return distTags && distTags.latest
}

/**
 * Gets the npm package version of an npm package installed in the cli.
 *
 * @param {string} cliRoot the root path of the cli
 * @param {string} npmPackageName the npm package name
 * @returns {string} the version of the package from the cli node_modules
 */
async function getNpmLocalVersion (cliRoot, npmPackageName) {
  const pjsonPath = `${cliRoot}/node_modules/${npmPackageName}/package.json`
  const pjson = JSON.parse(fs.readFileSync(pjsonPath))

  return pjson.version
}

/**
 * Prompt for confirmation.
 *
 * @param {string} [message=Confirm?] the message to show
 * @param {boolean} [defaultValue=false] the default value if the user presses 'Enter'
 * @returns {boolean} true or false chosen for the confirmation
 */
async function prompt (message = 'Confirm?', defaultValue = false) {
  return inquirer.prompt({
    name: 'confirm',
    type: 'confirm',
    message,
    default: defaultValue
  }).then(function (answers) {
    return answers.confirm
  })
}

/**
 * Hide NPM Warnings by intercepting process.stderr.write stream
 *
 */
function hideNPMWarnings () {
  const fn = process.stderr.write

  /**
   * Function to override the process.stderr.write and hide npm warnings
   *
   * @private
   */
  function write () {
    const msg = Buffer.isBuffer(arguments[0]) ? arguments[0].toString() : arguments[0]
    if (!msg.startsWith('warning')) {
      fn.apply(process.stderr, arguments)
    }
    return true
  }
  process.stderr.write = write
}

module.exports = {
  prompt,
  sortValues,
  getNpmLatestVersion,
  getNpmLocalVersion,
  hideNPMWarnings
}
