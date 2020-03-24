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

/**
 * InstalledPlugin
 * Metadata for a plugin that is installed in the CLI.
 *
 * @typedef {object} InstalledPlugin
 * @property {string} type - the type of the plugin (user, core, link)
 * @property {string} name - the npm package name of the plugin
 * @property {string} version - the version of the npm package
 */

/**
 * ToUpdatePlugin.
 * Metadata regarding a plugin that needs to be updated.
 *
 * @typedef {object} ToUpdatePlugin
 * @property {string} type - the type of the plugin (user, core, link)
 * @property {string} name - the npm package name of the plugin
 * @property {string} coreVersion - if it's a core plugin, the version of the core plugin that is installed with the cli
 * @property {string} currentVersion - the current version of the npm package
 * @property {string} latestVersion - the latest version of the npm package (in the npm registry)
 * @property {boolean} needsUpdate - true if the package needs to be updated
 * @property {boolean} needsWarning - true if the package needs a warning
 */
