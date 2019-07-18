<!--
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
-->

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@adobe/aio-cli.svg)](https://npmjs.org/package/@adobe/aio-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli.svg)](https://npmjs.org/package/@adobe/aio-cli)
[![Build Status](https://travis-ci.com/adobe/aio-cli.svg?branch=master)](https://travis-ci.com/adobe/aio-cli)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![Greenkeeper badge](https://badges.greenkeeper.io/adobe/aio-cli.svg)](https://greenkeeper.io/)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli/)

aio-cli
=======

Adobe I/O Extensible CLI


<!-- toc -->
* [Development](#development)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Development
```sh-session
$ npm install
$ npm link 
```

# Usage
<!-- usage -->
```sh-session
$ npm install -g @adobe/aio-cli
$ aio COMMAND
running command...
$ aio (-v|--version|version)
@adobe/aio-cli/2.0.0 darwin-x64 node-v8.11.4
$ aio --help [COMMAND]
USAGE
  $ aio COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`aio autocomplete [SHELL]`](#aio-autocomplete-shell)
* [`aio config`](#aio-config)
* [`aio config:clear`](#aio-configclear)
* [`aio config:delete KEYS...`](#aio-configdelete-keys)
* [`aio config:edit`](#aio-configedit)
* [`aio config:get KEY`](#aio-configget-key)
* [`aio config:list`](#aio-configlist)
* [`aio config set key 'a value'       # set key to 'a value'`](#aio-config-set-key-a-value--------set-key-to-a-value)
* [`aio console`](#aio-console)
* [`aio console:integration NAMESPACE`](#aio-consoleintegration-namespace)
* [`aio console:list-integrations`](#aio-consolelist-integrations)
* [`aio console:reset-integration [INTEGRATION_ID]`](#aio-consolereset-integration-integration_id)
* [`aio console:select-integration [INTEGRATION_ID]`](#aio-consoleselect-integration-integration_id)
* [`aio console:selected-integration`](#aio-consoleselected-integration)
* [`aio help [COMMAND]`](#aio-help-command)
* [`aio jwt-auth:access-token`](#aio-jwt-authaccess-token)
* [`aio plugins`](#aio-plugins)
* [`aio plugins:install PLUGIN...`](#aio-pluginsinstall-plugin)
* [`aio plugins:link PLUGIN`](#aio-pluginslink-plugin)
* [`aio plugins:uninstall PLUGIN...`](#aio-pluginsuninstall-plugin)
* [`aio plugins:update`](#aio-pluginsupdate)

## `aio autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ aio autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ aio autocomplete
  $ aio autocomplete bash
  $ aio autocomplete zsh
  $ aio autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.0/src/commands/autocomplete/index.ts)_

## `aio config`

list, get, set, delete, and edit persistent configuration data

```
USAGE
  $ aio config

OPTIONS
  -e, --env     environment variables
  -g, --global  global config
  -j, --json    output in json
  -l, --local   local config
  -y, --yaml    output in yaml
  --verbose     show all config values

ALIASES
  $ aio config:ls

EXAMPLES
  $ aio config:list
  $ aio config:get KEY
  $ aio config:set KEY VALUE
  $ aio config:delete KEY
  $ aio config:clear
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/v2.0.0/src/commands/config/index.js)_

## `aio config:clear`

clears all persistent config values

```
USAGE
  $ aio config:clear

OPTIONS
  -f, --force   do not prompt for confirmation
  -g, --global  global config
  -l, --local   local config
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/v2.0.0/src/commands/config/clear.js)_

## `aio config:delete KEYS...`

deletes persistent config values

```
USAGE
  $ aio config:delete KEYS...

OPTIONS
  -g, --global  global config
  -l, --local   local config

ALIASES
  $ aio config:del
  $ aio config:rm
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/v2.0.0/src/commands/config/delete.js)_

## `aio config:edit`

edit config file

```
USAGE
  $ aio config:edit

OPTIONS
  -g, --global  global config
  -l, --local   local config
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/v2.0.0/src/commands/config/edit.js)_

## `aio config:get KEY`

gets a persistent config value

```
USAGE
  $ aio config:get KEY

OPTIONS
  -e, --env     environment variables
  -g, --global  global config
  -j, --json    output in json
  -l, --local   local config
  -y, --yaml    output in yaml
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/v2.0.0/src/commands/config/get.js)_

## `aio config:list`

lists all persistent config values

```
USAGE
  $ aio config:list

OPTIONS
  -e, --env     environment variables
  -g, --global  global config
  -j, --json    output in json
  -l, --local   local config
  -y, --yaml    output in yaml
  --verbose     show all config values

ALIASES
  $ aio config:ls
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/v2.0.0/src/commands/config/list.js)_

## `aio config set key 'a value'       # set key to 'a value'`

sets a persistent config value

```
USAGE
  $ aio config set key 'a value'       # set key to 'a value'
  $ aio config set key -f value.json   # set key to the json found in the file value.json
  $ aio config set -j key < value.json # set key to the json found in the file value.json

OPTIONS
  -f, --file         value is a path to a file
  -g, --global       global config
  -i, --interactive  prompt for value
  -j, --json         value is json
  -l, --local        local config
  -y, --yaml         value is yaml
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/v2.0.0/src/commands/config/set.js)_

## `aio console`

List or select console integrations for the Adobe I/O Runtime

```
USAGE
  $ aio console

OPTIONS
  -n, --name                   sort results by name
  -p, --passphrase=passphrase  the passphrase for the private-key

ALIASES
  $ aio console:ls
  $ aio console:list

EXAMPLES
  $ aio console:list-integrations
  $ aio console:ls
  $ aio console list-integrations
  $ aio console:select-integration INTEGRATION_ID
  $ aio console:sel INTEGRATION_ID
  $ aio console select-integration INTEGRATION_ID
  $ aio console:reset-integration INTEGRATION_ID
  $ aio console:reset INTEGRATION_ID
  $ aio console reset-integration INTEGRATION_ID
  $ aio console:current-integration
  $ aio console:current
  $ aio console current-integration
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/v2.0.1/src/commands/console/index.js)_

## `aio console:integration NAMESPACE`

Views an integration for use with Adobe I/O Runtime serverless functions

```
USAGE
  $ aio console:integration NAMESPACE

ARGUMENTS
  NAMESPACE  namespace of an integration

OPTIONS
  -p, --passphrase=passphrase  the passphrase for the private-key

ALIASES
  $ aio console:get
  $ aio console:int
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/v2.0.1/src/commands/console/integration.js)_

## `aio console:list-integrations`

lists integrations for use with Adobe I/O Runtime serverless functions

```
USAGE
  $ aio console:list-integrations

OPTIONS
  -n, --name                   sort results by name
  -p, --passphrase=passphrase  the passphrase for the private-key

ALIASES
  $ aio console:ls
  $ aio console:list
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/v2.0.1/src/commands/console/list-integrations.js)_

## `aio console:reset-integration [INTEGRATION_ID]`

resets an integration's .wskprops auth hash.

```
USAGE
  $ aio console:reset-integration [INTEGRATION_ID]

DESCRIPTION
  after running this command all clients will need to run `console:select-integration` 
  to get a new auth hash in their .wskprops file

ALIASES
  $ aio console:reset
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/v2.0.1/src/commands/console/reset-integration.js)_

## `aio console:select-integration [INTEGRATION_ID]`

selects an integration and writes the .wskprops file to the local machine

```
USAGE
  $ aio console:select-integration [INTEGRATION_ID]

OPTIONS
  -f, --force                  do not prompt if the .wskprops file exists
  -g, --global                 save selected integration to global config
  -l, --local                  save selected integration to local config
  -p, --passphrase=passphrase  the passphrase for the private-key
  -w, --wskprops               save selected integration to .wskprops file (default)

DESCRIPTION
  Run 'console:ls' to get a list of integrations to select from.
  The .wskprops file will be written to your home folder, and you will be prompted whether you want to overwrite an 
  existing file.

ALIASES
  $ aio console:sel
  $ aio console:select
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/v2.0.1/src/commands/console/select-integration.js)_

## `aio console:selected-integration`

lists the selected integration for use with Adobe I/O Runtime serverless functions

```
USAGE
  $ aio console:selected-integration

OPTIONS
  -p, --passphrase=passphrase  the passphrase for the private-key

ALIASES
  $ aio console:selected
  $ aio console:current
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/v2.0.1/src/commands/console/selected-integration.js)_

## `aio help [COMMAND]`

display help for aio

```
USAGE
  $ aio help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `aio jwt-auth:access-token`

get the access token for the Adobe I/O Console

```
USAGE
  $ aio jwt-auth:access-token

OPTIONS
  -b, --bare                   print access token only
  -f, --force                  get a new access token
  -p, --passphrase=passphrase  the passphrase for the private-key
  --no-prompt                  do not prompt for passphrase

DESCRIPTION
  You must have a 'jwt-auth' key in your config, that has all your config data in .json format:
       aio config set jwt-auth --json --file path/to/your/config.json

EXAMPLE

  jwt_auth:
  {
     "client_id": "...",
     "client_secret": "..."
     "jwt_payload": {
       "iss": "...",
       "sub": "...",
       "...": true,
       "aud": "..."
     },
     "jwt_private_key": "/path/to/cert"
  }
```

_See code: [@adobe/aio-cli-plugin-jwt-auth](https://github.com/adobe/aio-cli-plugin-jwt-auth/blob/v2.0.0/src/commands/jwt-auth/access-token.js)_

## `aio plugins`

list installed plugins

```
USAGE
  $ aio plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ aio plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.7/src/commands/plugins/index.ts)_

## `aio plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ aio plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command 
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in 
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ aio plugins:add

EXAMPLES
  $ aio plugins:install myplugin 
  $ aio plugins:install https://github.com/someuser/someplugin
  $ aio plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.7/src/commands/plugins/install.ts)_

## `aio plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ aio plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' 
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLE
  $ aio plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.7/src/commands/plugins/link.ts)_

## `aio plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ aio plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ aio plugins:unlink
  $ aio plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.7/src/commands/plugins/uninstall.ts)_

## `aio plugins:update`

update installed plugins

```
USAGE
  $ aio plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.7/src/commands/plugins/update.ts)_
<!-- commandsstop -->
