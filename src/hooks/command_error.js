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

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

/**
 * Hook that runs when a command error occurs.
 * Provides helpful error messages when authentication/project errors occur.
 *
 * @param {object} options the hook options
 * @param {string} options.message the error message
 */
async function hook (options) {
  const { message } = options

  // Check if the error is authentication-related
  const authErrors = [
    'An AUTH key must be specified',
    'AUTH key must be specified',
    'authentication',
    'not authenticated'
  ]

  const isAuthError = authErrors.some(error => 
    message && message.toLowerCase().includes(error.toLowerCase())
  )

  if (isAuthError) {
    // Check if we're in an App Builder project directory
    const appConfigPath = path.join(process.cwd(), 'app.config.yaml')
    const hasAppConfig = fs.existsSync(appConfigPath)

    if (!hasAppConfig) {
      // Provide a helpful error message
      console.error(chalk.red('\n❌ You are not in an App Builder project directory.\n'))
      console.error(chalk.yellow('To fix this:'))
      console.error(chalk.yellow('  1. Navigate to an existing App Builder project directory, or'))
      console.error(chalk.yellow('  2. Create a new App Builder project with: ') + chalk.cyan('aio app init'))
      console.error(chalk.yellow('\nFor more information, visit: https://developer.adobe.com/app-builder/docs/\n'))
    }
  }
}

module.exports = hook
