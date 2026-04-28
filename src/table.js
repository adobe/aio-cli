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

const stringWidth = require('string-width')

/**
 * Pad a string to a given display width, accounting for ANSI escape sequences.
 *
 * @param {string} str - the string to pad
 * @param {number} width - the target display width
 * @returns {string} the padded string
 */
function padEndVisible (str, width) {
  return str + ' '.repeat(Math.max(0, width - stringWidth(str)))
}

/**
 * Print a table to stdout, compatible with the ux.table API removed in @oclif/core v4.
 *
 * @param {object[]} data - array of row objects
 * @param {object} columns - column definitions: { colName: { get, minWidth?, width? }, ... }
 */
function printTable (data, columns) {
  const headers = Object.keys(columns)
  const rows = data.map(row =>
    headers.map(h => String(columns[h].get(row)))
  )

  const widths = headers.map((h, i) => {
    const min = Math.max(columns[h].minWidth || 0, columns[h].width || 0)
    return Math.max(stringWidth(h), min, ...rows.map(r => stringWidth(r[i]))) + 2
  })

  console.log(headers.map((h, i) => padEndVisible(h, widths[i])).join(''))
  console.log(widths.map(w => '─'.repeat(w - 1)).join(' '))
  rows.forEach(row => console.log(row.map((c, i) => padEndVisible(c, widths[i])).join('')))
}

module.exports = { printTable, padEndVisible }
