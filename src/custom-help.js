/*
 * Copyright 2025 Adobe Inc. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const { Help } = require('@oclif/core')

/**
 * Custom Help class to handle alias resolution for command help display.
 *
 * Issue: When users run "aio rt --help", oclif's help system doesn't recognize
 * that "rt" is an alias for "runtime" and should display all subcommands.
 * The help system looks for "rt:*" subcommands which don't exist in the manifest
 * (they're registered as "runtime:*").
 *
 * Solution: Override showHelp to resolve aliases to their canonical command names
 * before displaying help, ensuring proper subcommand listing.
 *
 * @see https://github.com/adobe/aio-cli-plugin-runtime
 */
class CustomHelp extends Help {
  /**
   * Show help for a command, resolving aliases to canonical names.
   *
   * @param {string[]} args - Command ID and arguments to show help for
   * @returns {Promise<void>}
   */
  async showHelp (args) {
    // Skip alias resolution if args is invalid or empty
    if (!Array.isArray(args) || args.length === 0) {
      return super.showHelp(args)
    }

    // Map of known aliases to canonical command names
    // Add more mappings here as needed for other top-level aliases
    const aliasMap = {
      rt: 'runtime'
    }

    // Resolve alias to canonical name if it exists
    const commandId = args[0]
    if (aliasMap[commandId]) {
      const resolvedArgs = [aliasMap[commandId], ...args.slice(1)]
      return super.showHelp(resolvedArgs)
    }

    // No alias resolution needed, show help as-is
    return super.showHelp(args)
  }
}

module.exports = CustomHelp
