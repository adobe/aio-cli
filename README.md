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
![Node.js CI](https://github.com/adobe/aio-cli/workflows/Node.js%20CI/badge.svg)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) 
[![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli/)

aio-cli
=======

Adobe I/O Extensible CLI

<!-- toc -->
* [aio cli health](#aio-cli-health)
* [Getting started](#getting-started)
* [Technical requirements](#technical-requirements)
* [Proxy Support](#proxy-support)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [aio cli health](#aio-cli-health)
* [Getting started](#getting-started)
* [Technical requirements](#technical-requirements)
* [Proxy Support](#proxy-support)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->



# aio cli health
Health badges for the aio-cli and its plugins and modules
<!--
DON'T GENERATE MANUALLY!
run gen-health-table.js with `npm run gen-health`
-->
<!-- health -->
| Module | Version | Downloads | Build Status | Coverage  | Issues | Pull Requests |
|---|---|---|---|---|---|---|
| [@adobe/aio-cli](https://github.com/adobe/aio-cli)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli.svg)](https://npmjs.org/package/@adobe/aio-cli)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli.svg)](https://npmjs.org/package/@adobe/aio-cli)| [![Node.js CI](https://github.com/adobe/aio-cli/actions/workflows/node.js.yml/badge.svg)](https://github.com/adobe/aio-cli/actions/workflows/node.js.yml)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli.svg)](https://github.com/adobe/aio-cli/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli.svg)](https://github.com/adobe/aio-cli/pulls)|
| [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-config.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-config)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-config.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-config)| [![Node.js CI](https://github.com/adobe/aio-cli-plugin-config/actions/workflows/node.js.yml/badge.svg)](https://github.com/adobe/aio-cli-plugin-config/actions/workflows/node.js.yml)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-config/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-config/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-config.svg)](https://github.com/adobe/aio-cli-plugin-config/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-config.svg)](https://github.com/adobe/aio-cli-plugin-config/pulls)|
| [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-console.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-console)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-console.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-console)| [![Node.js CI](https://github.com/adobe/aio-cli-plugin-console/actions/workflows/node.js.yml/badge.svg)](https://github.com/adobe/aio-cli-plugin-console/actions/workflows/node.js.yml)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-console/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-console/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-console.svg)](https://github.com/adobe/aio-cli-plugin-console/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-console.svg)](https://github.com/adobe/aio-cli-plugin-console/pulls)|
| [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-runtime.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-runtime)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-runtime.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-runtime)| [![Node.js CI](https://github.com/adobe/aio-cli-plugin-runtime/actions/workflows/node.js.yml/badge.svg)](https://github.com/adobe/aio-cli-plugin-runtime/actions/workflows/node.js.yml)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-runtime/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-runtime/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-runtime.svg)](https://github.com/adobe/aio-cli-plugin-runtime/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-runtime.svg)](https://github.com/adobe/aio-cli-plugin-runtime/pulls)|
| [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-app.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-app)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-app.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-app)| [![Node.js CI](https://github.com/adobe/aio-cli-plugin-app/actions/workflows/node.js.yml/badge.svg)](https://github.com/adobe/aio-cli-plugin-app/actions/workflows/node.js.yml)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-app/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-app/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-app.svg)](https://github.com/adobe/aio-cli-plugin-app/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-app.svg)](https://github.com/adobe/aio-cli-plugin-app/pulls)|
| [@adobe/aio-cli-plugin-auth](https://github.com/adobe/aio-cli-plugin-auth)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-auth.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-auth)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-auth.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-auth)| [![Node.js CI](https://github.com/adobe/aio-cli-plugin-auth/actions/workflows/node.js.yml/badge.svg)](https://github.com/adobe/aio-cli-plugin-auth/actions/workflows/node.js.yml)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-auth/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-auth/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-auth.svg)](https://github.com/adobe/aio-cli-plugin-auth/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-auth.svg)](https://github.com/adobe/aio-cli-plugin-auth/pulls)|
| [@adobe/aio-cli-plugin-certificate](https://github.com/adobe/aio-cli-plugin-certificate)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-certificate.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-certificate)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-certificate.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-certificate)| [![Node.js CI](https://github.com/adobe/aio-cli-plugin-certificate/actions/workflows/node.js.yml/badge.svg)](https://github.com/adobe/aio-cli-plugin-certificate/actions/workflows/node.js.yml)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-certificate/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-certificate/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-certificate.svg)](https://github.com/adobe/aio-cli-plugin-certificate/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-certificate.svg)](https://github.com/adobe/aio-cli-plugin-certificate/pulls)|
| [@adobe/aio-cli-plugin-info](https://github.com/adobe/aio-cli-plugin-info)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-info.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-info)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-info.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-info)| [![Node.js CI](https://github.com/adobe/aio-cli-plugin-info/actions/workflows/node.js.yml/badge.svg)](https://github.com/adobe/aio-cli-plugin-info/actions/workflows/node.js.yml)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-info/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-info/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-info.svg)](https://github.com/adobe/aio-cli-plugin-info/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-info.svg)](https://github.com/adobe/aio-cli-plugin-info/pulls)|
| [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-events.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-events)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-events.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-events)| [![Node.js CI](https://github.com/adobe/aio-cli-plugin-events/actions/workflows/node.js.yml/badge.svg)](https://github.com/adobe/aio-cli-plugin-events/actions/workflows/node.js.yml)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-events/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-events/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-events.svg)](https://github.com/adobe/aio-cli-plugin-events/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-events.svg)](https://github.com/adobe/aio-cli-plugin-events/pulls)|
| [@adobe/aio-cli-plugin-telemetry](https://github.com/adobe/aio-cli-plugin-telemetry)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-telemetry.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-telemetry)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-telemetry.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-telemetry)| [![Node.js CI](https://github.com/adobe/aio-cli-plugin-telemetry/actions/workflows/node.js.yml/badge.svg)](https://github.com/adobe/aio-cli-plugin-telemetry/actions/workflows/node.js.yml)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-telemetry/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-telemetry/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-telemetry.svg)](https://github.com/adobe/aio-cli-plugin-telemetry/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-telemetry.svg)](https://github.com/adobe/aio-cli-plugin-telemetry/pulls)|
| [@adobe/generator-aio-app](https://github.com/adobe/generator-aio-app)  | [![Version](https://img.shields.io/npm/v/@adobe/generator-aio-app.svg)](https://npmjs.org/package/@adobe/generator-aio-app)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/generator-aio-app.svg)](https://npmjs.org/package/@adobe/generator-aio-app)| [![Node.js CI](https://github.com/adobe/generator-aio-app/actions/workflows/node.js.yml/badge.svg)](https://github.com/adobe/generator-aio-app/actions/workflows/node.js.yml)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/generator-aio-app/master.svg?style=flat-square)](https://codecov.io/gh/adobe/generator-aio-app/)| [![Github Issues](https://img.shields.io/github/issues/adobe/generator-aio-app.svg)](https://github.com/adobe/generator-aio-app/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/generator-aio-app.svg)](https://github.com/adobe/generator-aio-app/pulls)|
| [@adobe/generator-aio-console](https://github.com/adobe/generator-aio-console)  | [![Version](https://img.shields.io/npm/v/@adobe/generator-aio-console.svg)](https://npmjs.org/package/@adobe/generator-aio-console)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/generator-aio-console.svg)](https://npmjs.org/package/@adobe/generator-aio-console)| [![Node.js CI](https://github.com/adobe/generator-aio-console/actions/workflows/node.js.yml/badge.svg)](https://github.com/adobe/generator-aio-console/actions/workflows/node.js.yml)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/generator-aio-console/master.svg?style=flat-square)](https://codecov.io/gh/adobe/generator-aio-console/)| [![Github Issues](https://img.shields.io/github/issues/adobe/generator-aio-console.svg)](https://github.com/adobe/generator-aio-console/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/generator-aio-console.svg)](https://github.com/adobe/generator-aio-console/pulls)|
<!-- healthstop -->

# Getting started

See the [Adobe Developer App Builder docs](https://www.adobe.io/apis/experienceplatform/project-firefly/docs.html)

# Technical requirements

See the [App Builder `Setting up Your Environment` doc](https://www.adobe.io/apis/experienceplatform/project-firefly/docs.html#!AdobeDocs/project-firefly/master/getting_started/setup.md)

# Proxy Support

Set these environment variables, to use proxies (case sensitive):
1. `HTTP_PROXY`
2. `HTTPS_PROXY`

The appropriate proxy will be used to proxy http/https urls respectively.

If your proxy requires basic authentication, embed the username and password in the url itself. For example, if your server is `https://example.com` and username is `user` and password is `password`, the url should look like this:
```
https://user:password@example.com
```
If your username or password contains non-alphanumeric characters, they **must** be url-encoded.

You can verify if you set the proxy info properly by running:
```
aio info
```

# Usage
<!-- usage -->
```sh-session
$ npm install -g @adobe/aio-cli
$ aio COMMAND
running command...
$ aio (--version|-v)
@adobe/aio-cli/9.4.1 win32-x64 node-v16.19.1
$ aio --help [COMMAND]
USAGE
  $ aio COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g @adobe/aio-cli
$ aio COMMAND
running command...
$ aio (--version)
@adobe/aio-cli/9.2.0 darwin-x64 node-v14.18.3
$ aio --help [COMMAND]
USAGE
  $ aio COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`aio app`](#aio-app)
* [`aio app add`](#aio-app-add)
* [`aio app add action`](#aio-app-add-action)
* [`aio app add actions`](#aio-app-add-actions)
* [`aio app add ci`](#aio-app-add-ci)
* [`aio app add event`](#aio-app-add-event)
* [`aio app add events`](#aio-app-add-events)
* [`aio app add ext`](#aio-app-add-ext)
* [`aio app add extension`](#aio-app-add-extension)
* [`aio app add extensions`](#aio-app-add-extensions)
* [`aio app add service`](#aio-app-add-service)
* [`aio app add services`](#aio-app-add-services)
* [`aio app add web-assets`](#aio-app-add-web-assets)
* [`aio app build`](#aio-app-build)
* [`aio app config`](#aio-app-config)
* [`aio app config get`](#aio-app-config-get)
* [`aio app config get lf`](#aio-app-config-get-lf)
* [`aio app config get lf errors`](#aio-app-config-get-lf-errors)
* [`aio app config get log-forwarding`](#aio-app-config-get-log-forwarding)
* [`aio app config get log-forwarding errors`](#aio-app-config-get-log-forwarding-errors)
* [`aio app config set`](#aio-app-config-set)
* [`aio app config set lf`](#aio-app-config-set-lf)
* [`aio app config set log-forwarding`](#aio-app-config-set-log-forwarding)
* [`aio app create [PATH]`](#aio-app-create-path)
* [`aio app delete`](#aio-app-delete)
* [`aio app delete action [ACTION-NAME]`](#aio-app-delete-action-action-name)
* [`aio app delete actions [ACTION-NAME]`](#aio-app-delete-actions-action-name)
* [`aio app delete ci`](#aio-app-delete-ci)
* [`aio app delete ext`](#aio-app-delete-ext)
* [`aio app delete extension`](#aio-app-delete-extension)
* [`aio app delete extensions`](#aio-app-delete-extensions)
* [`aio app delete service`](#aio-app-delete-service)
* [`aio app delete services`](#aio-app-delete-services)
* [`aio app delete web-assets`](#aio-app-delete-web-assets)
* [`aio app deploy`](#aio-app-deploy)
* [`aio app get-url [ACTION]`](#aio-app-get-url-action)
* [`aio app info`](#aio-app-info)
* [`aio app init [PATH]`](#aio-app-init-path)
* [`aio app list`](#aio-app-list)
* [`aio app list ext`](#aio-app-list-ext)
* [`aio app list ext-points`](#aio-app-list-ext-points)
* [`aio app list extension`](#aio-app-list-extension)
* [`aio app list extension-points`](#aio-app-list-extension-points)
* [`aio app list extensions`](#aio-app-list-extensions)
* [`aio app logs`](#aio-app-logs)
* [`aio app run`](#aio-app-run)
* [`aio app test`](#aio-app-test)
* [`aio app undeploy`](#aio-app-undeploy)
* [`aio app use [CONFIG_FILE_PATH]`](#aio-app-use-config_file_path)
* [`aio auth`](#aio-auth)
* [`aio auth ctx`](#aio-auth-ctx)
* [`aio auth login`](#aio-auth-login)
* [`aio auth logout`](#aio-auth-logout)
* [`aio autocomplete [SHELL]`](#aio-autocomplete-shell)
* [`aio certificate`](#aio-certificate)
* [`aio certificate fingerprint FILE`](#aio-certificate-fingerprint-file)
* [`aio certificate generate`](#aio-certificate-generate)
* [`aio certificate verify FILE`](#aio-certificate-verify-file)
* [`aio config`](#aio-config)
* [`aio config clear`](#aio-config-clear)
* [`aio config del KEYS...`](#aio-config-del-keys)
* [`aio config delete KEYS...`](#aio-config-delete-keys)
* [`aio config edit`](#aio-config-edit)
* [`aio config get KEY`](#aio-config-get-key)
* [`aio config list`](#aio-config-list)
* [`aio config ls`](#aio-config-ls)
* [`aio config rm KEYS...`](#aio-config-rm-keys)
* [`aio config set key 'a value'       # set key to 'a value'`](#aio-config-set-key-a-value--------set-key-to-a-value)
* [`aio console`](#aio-console)
* [`aio console open`](#aio-console-open)
* [`aio console org`](#aio-console-org)
* [`aio console org list`](#aio-console-org-list)
* [`aio console org ls`](#aio-console-org-ls)
* [`aio console org sel [ORGCODE]`](#aio-console-org-sel-orgcode)
* [`aio console org select [ORGCODE]`](#aio-console-org-select-orgcode)
* [`aio console project`](#aio-console-project)
* [`aio console project list`](#aio-console-project-list)
* [`aio console project ls`](#aio-console-project-ls)
* [`aio console project sel [PROJECTIDORNAME]`](#aio-console-project-sel-projectidorname)
* [`aio console project select [PROJECTIDORNAME]`](#aio-console-project-select-projectidorname)
* [`aio console publickey`](#aio-console-publickey)
* [`aio console publickey delete IDORFINGERPRINT`](#aio-console-publickey-delete-idorfingerprint)
* [`aio console publickey list`](#aio-console-publickey-list)
* [`aio console publickey upload FILE`](#aio-console-publickey-upload-file)
* [`aio console where`](#aio-console-where)
* [`aio console workspace`](#aio-console-workspace)
* [`aio console workspace dl [DESTINATION]`](#aio-console-workspace-dl-destination)
* [`aio console workspace download [DESTINATION]`](#aio-console-workspace-download-destination)
* [`aio console workspace list`](#aio-console-workspace-list)
* [`aio console workspace ls`](#aio-console-workspace-ls)
* [`aio console workspace sel [WORKSPACEIDORNAME]`](#aio-console-workspace-sel-workspaceidorname)
* [`aio console workspace select [WORKSPACEIDORNAME]`](#aio-console-workspace-select-workspaceidorname)
* [`aio console ws`](#aio-console-ws)
* [`aio console ws dl [DESTINATION]`](#aio-console-ws-dl-destination)
* [`aio console ws download [DESTINATION]`](#aio-console-ws-download-destination)
* [`aio console ws list`](#aio-console-ws-list)
* [`aio console ws ls`](#aio-console-ws-ls)
* [`aio console ws sel [WORKSPACEIDORNAME]`](#aio-console-ws-sel-workspaceidorname)
* [`aio console ws select [WORKSPACEIDORNAME]`](#aio-console-ws-select-workspaceidorname)
* [`aio context`](#aio-context)
* [`aio ctx`](#aio-ctx)
* [`aio discover`](#aio-discover)
* [`aio event`](#aio-event)
* [`aio event eventmetadata`](#aio-event-eventmetadata)
* [`aio event eventmetadata create PROVIDERID`](#aio-event-eventmetadata-create-providerid)
* [`aio event eventmetadata delete PROVIDERID [EVENTCODE]`](#aio-event-eventmetadata-delete-providerid-eventcode)
* [`aio event eventmetadata get PROVIDERID EVENTCODE`](#aio-event-eventmetadata-get-providerid-eventcode)
* [`aio event eventmetadata list PROVIDERID`](#aio-event-eventmetadata-list-providerid)
* [`aio event eventmetadata ls PROVIDERID`](#aio-event-eventmetadata-ls-providerid)
* [`aio event eventmetadata update PROVIDERID EVENTCODE`](#aio-event-eventmetadata-update-providerid-eventcode)
* [`aio event provider`](#aio-event-provider)
* [`aio event provider create`](#aio-event-provider-create)
* [`aio event provider delete PROVIDERID`](#aio-event-provider-delete-providerid)
* [`aio event provider get PROVIDERID`](#aio-event-provider-get-providerid)
* [`aio event provider list`](#aio-event-provider-list)
* [`aio event provider ls`](#aio-event-provider-ls)
* [`aio event provider update PROVIDERID`](#aio-event-provider-update-providerid)
* [`aio event reg`](#aio-event-reg)
* [`aio event reg create BODYJSONFILE`](#aio-event-reg-create-bodyjsonfile)
* [`aio event reg delete REGISTRATIONID`](#aio-event-reg-delete-registrationid)
* [`aio event reg get REGISTRATIONID`](#aio-event-reg-get-registrationid)
* [`aio event reg list`](#aio-event-reg-list)
* [`aio event reg ls`](#aio-event-reg-ls)
* [`aio event registration`](#aio-event-registration)
* [`aio event registration create BODYJSONFILE`](#aio-event-registration-create-bodyjsonfile)
* [`aio event registration delete REGISTRATIONID`](#aio-event-registration-delete-registrationid)
* [`aio event registration get REGISTRATIONID`](#aio-event-registration-get-registrationid)
* [`aio event registration list`](#aio-event-registration-list)
* [`aio event registration ls`](#aio-event-registration-ls)
* [`aio help [COMMANDS]`](#aio-help-commands)
* [`aio info`](#aio-info)
* [`aio login`](#aio-login)
* [`aio logout`](#aio-logout)
* [`aio open`](#aio-open)
* [`aio plugins`](#aio-plugins)
* [`aio plugins:install PLUGIN...`](#aio-pluginsinstall-plugin)
* [`aio plugins discover`](#aio-plugins-discover)
* [`aio plugins:inspect PLUGIN...`](#aio-pluginsinspect-plugin)
* [`aio plugins:install PLUGIN...`](#aio-pluginsinstall-plugin-1)
* [`aio plugins:link PLUGIN`](#aio-pluginslink-plugin)
* [`aio plugins:uninstall PLUGIN...`](#aio-pluginsuninstall-plugin)
* [`aio plugins:uninstall PLUGIN...`](#aio-pluginsuninstall-plugin-1)
* [`aio plugins:uninstall PLUGIN...`](#aio-pluginsuninstall-plugin-2)
* [`aio plugins update`](#aio-plugins-update)
* [`aio report`](#aio-report)
* [`aio rollback`](#aio-rollback)
* [`aio rt`](#aio-rt)
* [`aio rt action`](#aio-rt-action)
* [`aio rt action create ACTIONNAME [ACTIONPATH]`](#aio-rt-action-create-actionname-actionpath)
* [`aio rt action del ACTIONNAME`](#aio-rt-action-del-actionname)
* [`aio rt action delete ACTIONNAME`](#aio-rt-action-delete-actionname)
* [`aio rt action get ACTIONNAME`](#aio-rt-action-get-actionname)
* [`aio rt action invoke ACTIONNAME`](#aio-rt-action-invoke-actionname)
* [`aio rt action list [PACKAGENAME]`](#aio-rt-action-list-packagename)
* [`aio rt action ls [PACKAGENAME]`](#aio-rt-action-ls-packagename)
* [`aio rt action update ACTIONNAME [ACTIONPATH]`](#aio-rt-action-update-actionname-actionpath)
* [`aio rt actions list [PACKAGENAME]`](#aio-rt-actions-list-packagename)
* [`aio rt actions ls [PACKAGENAME]`](#aio-rt-actions-ls-packagename)
* [`aio rt activation`](#aio-rt-activation)
* [`aio rt activation get [ACTIVATIONID]`](#aio-rt-activation-get-activationid)
* [`aio rt activation list [ACTION_NAME]`](#aio-rt-activation-list-action_name)
* [`aio rt activation log [ACTIVATIONID]`](#aio-rt-activation-log-activationid)
* [`aio rt activation logs [ACTIVATIONID]`](#aio-rt-activation-logs-activationid)
* [`aio rt activation ls [ACTION_NAME]`](#aio-rt-activation-ls-action_name)
* [`aio rt activation result [ACTIVATIONID]`](#aio-rt-activation-result-activationid)
* [`aio rt activations list [ACTION_NAME]`](#aio-rt-activations-list-action_name)
* [`aio rt activations ls [ACTION_NAME]`](#aio-rt-activations-ls-action_name)
* [`aio rt api`](#aio-rt-api)
* [`aio rt api create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`](#aio-rt-api-create-basepath-relpath-apiverb-action)
* [`aio rt api delete BASEPATHORAPINAME [RELPATH] [APIVERB]`](#aio-rt-api-delete-basepathorapiname-relpath-apiverb)
* [`aio rt api get BASEPATHORAPINAME`](#aio-rt-api-get-basepathorapiname)
* [`aio rt api list [BASEPATH] [RELPATH] [APIVERB]`](#aio-rt-api-list-basepath-relpath-apiverb)
* [`aio rt api ls [BASEPATH] [RELPATH] [APIVERB]`](#aio-rt-api-ls-basepath-relpath-apiverb)
* [`aio rt deploy`](#aio-rt-deploy)
* [`aio rt deploy export`](#aio-rt-deploy-export)
* [`aio rt deploy report`](#aio-rt-deploy-report)
* [`aio rt deploy sync`](#aio-rt-deploy-sync)
* [`aio rt deploy undeploy`](#aio-rt-deploy-undeploy)
* [`aio rt deploy version`](#aio-rt-deploy-version)
* [`aio rt get`](#aio-rt-get)
* [`aio rt list`](#aio-rt-list)
* [`aio rt log [ACTIVATIONID]`](#aio-rt-log-activationid)
* [`aio rt logs [ACTIVATIONID]`](#aio-rt-logs-activationid)
* [`aio rt ls`](#aio-rt-ls)
* [`aio rt namespace`](#aio-rt-namespace)
* [`aio rt namespace lf`](#aio-rt-namespace-lf)
* [`aio rt namespace lf errors`](#aio-rt-namespace-lf-errors)
* [`aio rt namespace lf get`](#aio-rt-namespace-lf-get)
* [`aio rt namespace lf set`](#aio-rt-namespace-lf-set)
* [`aio rt namespace lf set adobe-io-runtime`](#aio-rt-namespace-lf-set-adobe-io-runtime)
* [`aio rt namespace lf set azure-log-analytics`](#aio-rt-namespace-lf-set-azure-log-analytics)
* [`aio rt namespace lf set splunk-hec`](#aio-rt-namespace-lf-set-splunk-hec)
* [`aio rt namespace list`](#aio-rt-namespace-list)
* [`aio rt namespace log-forwarding`](#aio-rt-namespace-log-forwarding)
* [`aio rt namespace log-forwarding errors`](#aio-rt-namespace-log-forwarding-errors)
* [`aio rt namespace log-forwarding get`](#aio-rt-namespace-log-forwarding-get)
* [`aio rt namespace log-forwarding set`](#aio-rt-namespace-log-forwarding-set)
* [`aio rt namespace log-forwarding set adobe-io-runtime`](#aio-rt-namespace-log-forwarding-set-adobe-io-runtime)
* [`aio rt namespace log-forwarding set azure-log-analytics`](#aio-rt-namespace-log-forwarding-set-azure-log-analytics)
* [`aio rt namespace log-forwarding set splunk-hec`](#aio-rt-namespace-log-forwarding-set-splunk-hec)
* [`aio rt namespace ls`](#aio-rt-namespace-ls)
* [`aio rt ns`](#aio-rt-ns)
* [`aio rt ns lf`](#aio-rt-ns-lf)
* [`aio rt ns lf errors`](#aio-rt-ns-lf-errors)
* [`aio rt ns lf get`](#aio-rt-ns-lf-get)
* [`aio rt ns lf set`](#aio-rt-ns-lf-set)
* [`aio rt ns lf set adobe-io-runtime`](#aio-rt-ns-lf-set-adobe-io-runtime)
* [`aio rt ns lf set azure-log-analytics`](#aio-rt-ns-lf-set-azure-log-analytics)
* [`aio rt ns lf set splunk-hec`](#aio-rt-ns-lf-set-splunk-hec)
* [`aio rt ns list`](#aio-rt-ns-list)
* [`aio rt ns log-forwarding`](#aio-rt-ns-log-forwarding)
* [`aio rt ns log-forwarding errors`](#aio-rt-ns-log-forwarding-errors)
* [`aio rt ns log-forwarding get`](#aio-rt-ns-log-forwarding-get)
* [`aio rt ns log-forwarding set`](#aio-rt-ns-log-forwarding-set)
* [`aio rt ns log-forwarding set adobe-io-runtime`](#aio-rt-ns-log-forwarding-set-adobe-io-runtime)
* [`aio rt ns log-forwarding set azure-log-analytics`](#aio-rt-ns-log-forwarding-set-azure-log-analytics)
* [`aio rt ns log-forwarding set splunk-hec`](#aio-rt-ns-log-forwarding-set-splunk-hec)
* [`aio rt ns ls`](#aio-rt-ns-ls)
* [`aio rt package`](#aio-rt-package)
* [`aio rt package bind PACKAGENAME BINDPACKAGENAME`](#aio-rt-package-bind-packagename-bindpackagename)
* [`aio rt package create PACKAGENAME`](#aio-rt-package-create-packagename)
* [`aio rt package delete PACKAGENAME`](#aio-rt-package-delete-packagename)
* [`aio rt package get PACKAGENAME`](#aio-rt-package-get-packagename)
* [`aio rt package list [NAMESPACE]`](#aio-rt-package-list-namespace)
* [`aio rt package ls [NAMESPACE]`](#aio-rt-package-ls-namespace)
* [`aio rt package update PACKAGENAME`](#aio-rt-package-update-packagename)
* [`aio rt pkg`](#aio-rt-pkg)
* [`aio rt pkg bind PACKAGENAME BINDPACKAGENAME`](#aio-rt-pkg-bind-packagename-bindpackagename)
* [`aio rt pkg create PACKAGENAME`](#aio-rt-pkg-create-packagename)
* [`aio rt pkg delete PACKAGENAME`](#aio-rt-pkg-delete-packagename)
* [`aio rt pkg get PACKAGENAME`](#aio-rt-pkg-get-packagename)
* [`aio rt pkg list [NAMESPACE]`](#aio-rt-pkg-list-namespace)
* [`aio rt pkg ls [NAMESPACE]`](#aio-rt-pkg-ls-namespace)
* [`aio rt pkg update PACKAGENAME`](#aio-rt-pkg-update-packagename)
* [`aio rt prop`](#aio-rt-prop)
* [`aio rt prop get`](#aio-rt-prop-get)
* [`aio rt prop set`](#aio-rt-prop-set)
* [`aio rt prop unset`](#aio-rt-prop-unset)
* [`aio rt property`](#aio-rt-property)
* [`aio rt property get`](#aio-rt-property-get)
* [`aio rt property set`](#aio-rt-property-set)
* [`aio rt property unset`](#aio-rt-property-unset)
* [`aio rt route`](#aio-rt-route)
* [`aio rt route create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`](#aio-rt-route-create-basepath-relpath-apiverb-action)
* [`aio rt route delete BASEPATHORAPINAME [RELPATH] [APIVERB]`](#aio-rt-route-delete-basepathorapiname-relpath-apiverb)
* [`aio rt route get BASEPATHORAPINAME`](#aio-rt-route-get-basepathorapiname)
* [`aio rt route list [BASEPATH] [RELPATH] [APIVERB]`](#aio-rt-route-list-basepath-relpath-apiverb)
* [`aio rt route ls [BASEPATH] [RELPATH] [APIVERB]`](#aio-rt-route-ls-basepath-relpath-apiverb)
* [`aio rt rule`](#aio-rt-rule)
* [`aio rt rule create NAME TRIGGER ACTION`](#aio-rt-rule-create-name-trigger-action)
* [`aio rt rule delete NAME`](#aio-rt-rule-delete-name)
* [`aio rt rule disable NAME`](#aio-rt-rule-disable-name)
* [`aio rt rule enable NAME`](#aio-rt-rule-enable-name)
* [`aio rt rule get NAME`](#aio-rt-rule-get-name)
* [`aio rt rule list`](#aio-rt-rule-list)
* [`aio rt rule ls`](#aio-rt-rule-ls)
* [`aio rt rule status NAME`](#aio-rt-rule-status-name)
* [`aio rt rule update NAME TRIGGER ACTION`](#aio-rt-rule-update-name-trigger-action)
* [`aio rt trigger`](#aio-rt-trigger)
* [`aio rt trigger create TRIGGERNAME`](#aio-rt-trigger-create-triggername)
* [`aio rt trigger delete TRIGGERPATH`](#aio-rt-trigger-delete-triggerpath)
* [`aio rt trigger fire TRIGGERNAME`](#aio-rt-trigger-fire-triggername)
* [`aio rt trigger get TRIGGERPATH`](#aio-rt-trigger-get-triggerpath)
* [`aio rt trigger list`](#aio-rt-trigger-list)
* [`aio rt trigger ls`](#aio-rt-trigger-ls)
* [`aio rt trigger update TRIGGERNAME`](#aio-rt-trigger-update-triggername)
* [`aio runtime`](#aio-runtime)
* [`aio runtime action`](#aio-runtime-action)
* [`aio runtime action create ACTIONNAME [ACTIONPATH]`](#aio-runtime-action-create-actionname-actionpath)
* [`aio runtime action del ACTIONNAME`](#aio-runtime-action-del-actionname)
* [`aio runtime action delete ACTIONNAME`](#aio-runtime-action-delete-actionname)
* [`aio runtime action get ACTIONNAME`](#aio-runtime-action-get-actionname)
* [`aio runtime action invoke ACTIONNAME`](#aio-runtime-action-invoke-actionname)
* [`aio runtime action list [PACKAGENAME]`](#aio-runtime-action-list-packagename)
* [`aio runtime action ls [PACKAGENAME]`](#aio-runtime-action-ls-packagename)
* [`aio runtime action update ACTIONNAME [ACTIONPATH]`](#aio-runtime-action-update-actionname-actionpath)
* [`aio runtime actions list [PACKAGENAME]`](#aio-runtime-actions-list-packagename)
* [`aio runtime actions ls [PACKAGENAME]`](#aio-runtime-actions-ls-packagename)
* [`aio runtime activation`](#aio-runtime-activation)
* [`aio runtime activation get [ACTIVATIONID]`](#aio-runtime-activation-get-activationid)
* [`aio runtime activation list [ACTION_NAME]`](#aio-runtime-activation-list-action_name)
* [`aio runtime activation log [ACTIVATIONID]`](#aio-runtime-activation-log-activationid)
* [`aio runtime activation logs [ACTIVATIONID]`](#aio-runtime-activation-logs-activationid)
* [`aio runtime activation ls [ACTION_NAME]`](#aio-runtime-activation-ls-action_name)
* [`aio runtime activation result [ACTIVATIONID]`](#aio-runtime-activation-result-activationid)
* [`aio runtime activations list [ACTION_NAME]`](#aio-runtime-activations-list-action_name)
* [`aio runtime activations ls [ACTION_NAME]`](#aio-runtime-activations-ls-action_name)
* [`aio runtime api`](#aio-runtime-api)
* [`aio runtime api create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`](#aio-runtime-api-create-basepath-relpath-apiverb-action)
* [`aio runtime api delete BASEPATHORAPINAME [RELPATH] [APIVERB]`](#aio-runtime-api-delete-basepathorapiname-relpath-apiverb)
* [`aio runtime api get BASEPATHORAPINAME`](#aio-runtime-api-get-basepathorapiname)
* [`aio runtime api list [BASEPATH] [RELPATH] [APIVERB]`](#aio-runtime-api-list-basepath-relpath-apiverb)
* [`aio runtime api ls [BASEPATH] [RELPATH] [APIVERB]`](#aio-runtime-api-ls-basepath-relpath-apiverb)
* [`aio runtime deploy`](#aio-runtime-deploy)
* [`aio runtime deploy export`](#aio-runtime-deploy-export)
* [`aio runtime deploy report`](#aio-runtime-deploy-report)
* [`aio runtime deploy sync`](#aio-runtime-deploy-sync)
* [`aio runtime deploy undeploy`](#aio-runtime-deploy-undeploy)
* [`aio runtime deploy version`](#aio-runtime-deploy-version)
* [`aio runtime list`](#aio-runtime-list)
* [`aio runtime log [ACTIVATIONID]`](#aio-runtime-log-activationid)
* [`aio runtime logs [ACTIVATIONID]`](#aio-runtime-logs-activationid)
* [`aio runtime ls`](#aio-runtime-ls)
* [`aio runtime namespace`](#aio-runtime-namespace)
* [`aio runtime namespace get`](#aio-runtime-namespace-get)
* [`aio runtime namespace lf`](#aio-runtime-namespace-lf)
* [`aio runtime namespace lf errors`](#aio-runtime-namespace-lf-errors)
* [`aio runtime namespace lf get`](#aio-runtime-namespace-lf-get)
* [`aio runtime namespace lf set`](#aio-runtime-namespace-lf-set)
* [`aio runtime namespace lf set adobe-io-runtime`](#aio-runtime-namespace-lf-set-adobe-io-runtime)
* [`aio runtime namespace lf set azure-log-analytics`](#aio-runtime-namespace-lf-set-azure-log-analytics)
* [`aio runtime namespace lf set splunk-hec`](#aio-runtime-namespace-lf-set-splunk-hec)
* [`aio runtime namespace list`](#aio-runtime-namespace-list)
* [`aio runtime namespace log-forwarding`](#aio-runtime-namespace-log-forwarding)
* [`aio runtime namespace log-forwarding errors`](#aio-runtime-namespace-log-forwarding-errors)
* [`aio runtime namespace log-forwarding get`](#aio-runtime-namespace-log-forwarding-get)
* [`aio runtime namespace log-forwarding set`](#aio-runtime-namespace-log-forwarding-set)
* [`aio runtime namespace log-forwarding set adobe-io-runtime`](#aio-runtime-namespace-log-forwarding-set-adobe-io-runtime)
* [`aio runtime namespace log-forwarding set azure-log-analytics`](#aio-runtime-namespace-log-forwarding-set-azure-log-analytics)
* [`aio runtime namespace log-forwarding set splunk-hec`](#aio-runtime-namespace-log-forwarding-set-splunk-hec)
* [`aio runtime namespace ls`](#aio-runtime-namespace-ls)
* [`aio runtime ns`](#aio-runtime-ns)
* [`aio runtime ns lf`](#aio-runtime-ns-lf)
* [`aio runtime ns lf errors`](#aio-runtime-ns-lf-errors)
* [`aio runtime ns lf get`](#aio-runtime-ns-lf-get)
* [`aio runtime ns lf set`](#aio-runtime-ns-lf-set)
* [`aio runtime ns lf set adobe-io-runtime`](#aio-runtime-ns-lf-set-adobe-io-runtime)
* [`aio runtime ns lf set azure-log-analytics`](#aio-runtime-ns-lf-set-azure-log-analytics)
* [`aio runtime ns lf set splunk-hec`](#aio-runtime-ns-lf-set-splunk-hec)
* [`aio runtime ns list`](#aio-runtime-ns-list)
* [`aio runtime ns log-forwarding`](#aio-runtime-ns-log-forwarding)
* [`aio runtime ns log-forwarding errors`](#aio-runtime-ns-log-forwarding-errors)
* [`aio runtime ns log-forwarding get`](#aio-runtime-ns-log-forwarding-get)
* [`aio runtime ns log-forwarding set`](#aio-runtime-ns-log-forwarding-set)
* [`aio runtime ns log-forwarding set adobe-io-runtime`](#aio-runtime-ns-log-forwarding-set-adobe-io-runtime)
* [`aio runtime ns log-forwarding set azure-log-analytics`](#aio-runtime-ns-log-forwarding-set-azure-log-analytics)
* [`aio runtime ns log-forwarding set splunk-hec`](#aio-runtime-ns-log-forwarding-set-splunk-hec)
* [`aio runtime ns ls`](#aio-runtime-ns-ls)
* [`aio runtime package`](#aio-runtime-package)
* [`aio runtime package bind PACKAGENAME BINDPACKAGENAME`](#aio-runtime-package-bind-packagename-bindpackagename)
* [`aio runtime package create PACKAGENAME`](#aio-runtime-package-create-packagename)
* [`aio runtime package delete PACKAGENAME`](#aio-runtime-package-delete-packagename)
* [`aio runtime package get PACKAGENAME`](#aio-runtime-package-get-packagename)
* [`aio runtime package list [NAMESPACE]`](#aio-runtime-package-list-namespace)
* [`aio runtime package ls [NAMESPACE]`](#aio-runtime-package-ls-namespace)
* [`aio runtime package update PACKAGENAME`](#aio-runtime-package-update-packagename)
* [`aio runtime pkg`](#aio-runtime-pkg)
* [`aio runtime pkg bind PACKAGENAME BINDPACKAGENAME`](#aio-runtime-pkg-bind-packagename-bindpackagename)
* [`aio runtime pkg create PACKAGENAME`](#aio-runtime-pkg-create-packagename)
* [`aio runtime pkg delete PACKAGENAME`](#aio-runtime-pkg-delete-packagename)
* [`aio runtime pkg get PACKAGENAME`](#aio-runtime-pkg-get-packagename)
* [`aio runtime pkg list [NAMESPACE]`](#aio-runtime-pkg-list-namespace)
* [`aio runtime pkg ls [NAMESPACE]`](#aio-runtime-pkg-ls-namespace)
* [`aio runtime pkg update PACKAGENAME`](#aio-runtime-pkg-update-packagename)
* [`aio runtime prop`](#aio-runtime-prop)
* [`aio runtime prop get`](#aio-runtime-prop-get)
* [`aio runtime prop set`](#aio-runtime-prop-set)
* [`aio runtime prop unset`](#aio-runtime-prop-unset)
* [`aio runtime property`](#aio-runtime-property)
* [`aio runtime property get`](#aio-runtime-property-get)
* [`aio runtime property set`](#aio-runtime-property-set)
* [`aio runtime property unset`](#aio-runtime-property-unset)
* [`aio runtime route`](#aio-runtime-route)
* [`aio runtime route create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`](#aio-runtime-route-create-basepath-relpath-apiverb-action)
* [`aio runtime route delete BASEPATHORAPINAME [RELPATH] [APIVERB]`](#aio-runtime-route-delete-basepathorapiname-relpath-apiverb)
* [`aio runtime route get BASEPATHORAPINAME`](#aio-runtime-route-get-basepathorapiname)
* [`aio runtime route list [BASEPATH] [RELPATH] [APIVERB]`](#aio-runtime-route-list-basepath-relpath-apiverb)
* [`aio runtime route ls [BASEPATH] [RELPATH] [APIVERB]`](#aio-runtime-route-ls-basepath-relpath-apiverb)
* [`aio runtime rule`](#aio-runtime-rule)
* [`aio runtime rule create NAME TRIGGER ACTION`](#aio-runtime-rule-create-name-trigger-action)
* [`aio runtime rule delete NAME`](#aio-runtime-rule-delete-name)
* [`aio runtime rule disable NAME`](#aio-runtime-rule-disable-name)
* [`aio runtime rule enable NAME`](#aio-runtime-rule-enable-name)
* [`aio runtime rule get NAME`](#aio-runtime-rule-get-name)
* [`aio runtime rule list`](#aio-runtime-rule-list)
* [`aio runtime rule ls`](#aio-runtime-rule-ls)
* [`aio runtime rule status NAME`](#aio-runtime-rule-status-name)
* [`aio runtime rule update NAME TRIGGER ACTION`](#aio-runtime-rule-update-name-trigger-action)
* [`aio runtime trigger`](#aio-runtime-trigger)
* [`aio runtime trigger create TRIGGERNAME`](#aio-runtime-trigger-create-triggername)
* [`aio runtime trigger delete TRIGGERPATH`](#aio-runtime-trigger-delete-triggerpath)
* [`aio runtime trigger fire TRIGGERNAME`](#aio-runtime-trigger-fire-triggername)
* [`aio runtime trigger get TRIGGERPATH`](#aio-runtime-trigger-get-triggerpath)
* [`aio runtime trigger list`](#aio-runtime-trigger-list)
* [`aio runtime trigger ls`](#aio-runtime-trigger-ls)
* [`aio runtime trigger update TRIGGERNAME`](#aio-runtime-trigger-update-triggername)
* [`aio telemetry yes`](#aio-telemetry-yes)
* [`aio templates`](#aio-templates)
* [`aio templates disco`](#aio-templates-disco)
* [`aio templates discover`](#aio-templates-discover)
* [`aio templates i PATH`](#aio-templates-i-path)
* [`aio templates info`](#aio-templates-info)
* [`aio templates install PATH`](#aio-templates-install-path)
* [`aio templates remove NAME`](#aio-templates-remove-name)
* [`aio templates rm NAME`](#aio-templates-rm-name)
* [`aio templates rollback`](#aio-templates-rollback)
* [`aio templates sub NAME GITHUBREPOURL`](#aio-templates-sub-name-githubrepourl)
* [`aio templates submit NAME GITHUBREPOURL`](#aio-templates-submit-name-githubrepourl)
* [`aio templates un PACKAGE-NAME`](#aio-templates-un-package-name)
* [`aio templates uninstall PACKAGE-NAME`](#aio-templates-uninstall-package-name)
* [`aio update`](#aio-update)
* [`aio where`](#aio-where)

## `aio app`

Create, run, test, and deploy Adobe I/O Apps

```
USAGE
  $ aio app [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Create, run, test, and deploy Adobe I/O Apps
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/11.0.0/src/commands/app/index.ts)_

## `aio app add`

Add a new component to an existing Adobe I/O App

```
USAGE
  $ aio app add [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Add a new component to an existing Adobe I/O App
```

## `aio app add action`

Add new actions

```
USAGE
  $ aio app add action [-v] [--version] [--install] [-y] [-e <value>]

FLAGS
  -e, --extension=<value>  Add actions to a specific extension
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add new actions


ALIASES
  $ aio app add actions
```

## `aio app add actions`

Add new actions

```
USAGE
  $ aio app add actions [-v] [--version] [--install] [-y] [-e <value>]

FLAGS
  -e, --extension=<value>  Add actions to a specific extension
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add new actions


ALIASES
  $ aio app add actions
```

## `aio app add ci`

Add CI files

```
USAGE
  $ aio app add ci [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Add CI files
```

## `aio app add event`

Add a new Adobe I/O Events action

```
USAGE
  $ aio app add event [-v] [--version] [--install] [-y] [-e <value>]

FLAGS
  -e, --extension=<value>  Add events to a specific extension
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add a new Adobe I/O Events action


ALIASES
  $ aio app add events
```

## `aio app add events`

Add a new Adobe I/O Events action

```
USAGE
  $ aio app add events [-v] [--version] [--install] [-y] [-e <value>]

FLAGS
  -e, --extension=<value>  Add events to a specific extension
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add a new Adobe I/O Events action


ALIASES
  $ aio app add events
```

## `aio app add ext`

Add new extensions to the project

```
USAGE
  $ aio app add ext [-v] [--version] [--install] [-y] [-e <value>]

FLAGS
  -e, --extension=<value>...  Specify extensions to add, skips selection prompt
  -v, --verbose               Verbose output
  -y, --yes                   Skip questions, and use all default values
  --[no-]install              [default: true] Run npm installation after files are created
  --version                   Show version

DESCRIPTION
  Add new extensions to the project


ALIASES
  $ aio app add ext
  $ aio app add extensions
```

## `aio app add extension`

Add new extensions to the project

```
USAGE
  $ aio app add extension [-v] [--version] [--install] [-y] [-e <value>]

FLAGS
  -e, --extension=<value>...  Specify extensions to add, skips selection prompt
  -v, --verbose               Verbose output
  -y, --yes                   Skip questions, and use all default values
  --[no-]install              [default: true] Run npm installation after files are created
  --version                   Show version

DESCRIPTION
  Add new extensions to the project


ALIASES
  $ aio app add ext
  $ aio app add extensions
```

## `aio app add extensions`

Add new extensions to the project

```
USAGE
  $ aio app add extensions [-v] [--version] [--install] [-y] [-e <value>]

FLAGS
  -e, --extension=<value>...  Specify extensions to add, skips selection prompt
  -v, --verbose               Verbose output
  -y, --yes                   Skip questions, and use all default values
  --[no-]install              [default: true] Run npm installation after files are created
  --version                   Show version

DESCRIPTION
  Add new extensions to the project


ALIASES
  $ aio app add ext
  $ aio app add extensions
```

## `aio app add service`

Subscribe to Services in the current Workspace

```
USAGE
  $ aio app add service [-v] [--version] [--use-jwt]

FLAGS
  -v, --verbose  Verbose output
  --use-jwt      if the config has both jwt and OAuth Server to Server Credentials (while migrating), prefer the JWT
                 credentials
  --version      Show version

DESCRIPTION
  Subscribe to Services in the current Workspace


ALIASES
  $ aio app add services
```

## `aio app add services`

Subscribe to Services in the current Workspace

```
USAGE
  $ aio app add services [-v] [--version] [--use-jwt]

FLAGS
  -v, --verbose  Verbose output
  --use-jwt      if the config has both jwt and OAuth Server to Server Credentials (while migrating), prefer the JWT
                 credentials
  --version      Show version

DESCRIPTION
  Subscribe to Services in the current Workspace


ALIASES
  $ aio app add services
```

## `aio app add web-assets`

Add web assets support

```
USAGE
  $ aio app add web-assets [-v] [--version] [--install] [-y] [-e <value>]

FLAGS
  -e, --extension=<value>  Add web-assets to a specific extension
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add web assets support
```

## `aio app build`

Build an Adobe I/O App

```
USAGE
  $ aio app build [-v] [--version] [--actions | -a <value>] [--web-assets] [--force-build] [--content-hash]
    [--web-optimize] [-e <value> | ]

FLAGS
  -a, --action=<value>...     Build only a specific action, the flags can be specified multiple times, this will set
                              --no-publish
  -e, --extension=<value>...  Build only a specific extension point, the flags can be specified multiple times
  -v, --verbose               Verbose output
  --[no-]actions              [default: true] Build actions if any
  --[no-]content-hash         [default: true] Enable content hashing in browser code
  --[no-]force-build          [default: true] Force a build even if one already exists
  --version                   Show version
  --[no-]web-assets           [default: true] Build web-assets if any
  --web-optimize              [default: false] Enable optimization (minification) of js/css/html

DESCRIPTION
  Build an Adobe I/O App

  This will always force a rebuild unless --no-force-build is set.
```

## `aio app config`

Manage app config

```
USAGE
  $ aio app config [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Manage app config

ALIASES
  $ aio app config
  $ aio app config
```

## `aio app config get`

Get app config

```
USAGE
  $ aio app config get [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Get app config

ALIASES
  $ aio app config get
```

## `aio app config get lf`

Get log forwarding destination configuration

```
USAGE
  $ aio app config get lf [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio app config get log-forwarding
  $ aio app config get lf
```

## `aio app config get lf errors`

Get log forwarding errors

```
USAGE
  $ aio app config get lf errors [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio app config get log-forwarding errors
  $ aio app config get lf errors
```

## `aio app config get log-forwarding`

Get log forwarding destination configuration

```
USAGE
  $ aio app config get log-forwarding [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio app config get log-forwarding
  $ aio app config get lf
```

## `aio app config get log-forwarding errors`

Get log forwarding errors

```
USAGE
  $ aio app config get log-forwarding errors [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio app config get log-forwarding errors
  $ aio app config get lf errors
```

## `aio app config set`

Set app config

```
USAGE
  $ aio app config set [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Set app config

ALIASES
  $ aio app config set
```

## `aio app config set lf`

Set log forwarding destination configuration

```
USAGE
  $ aio app config set lf [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Set log forwarding destination configuration

ALIASES
  $ aio app config set log-forwarding
  $ aio app config set lf
```

## `aio app config set log-forwarding`

Set log forwarding destination configuration

```
USAGE
  $ aio app config set log-forwarding [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Set log forwarding destination configuration

ALIASES
  $ aio app config set log-forwarding
  $ aio app config set lf
```

## `aio app create [PATH]`

Create a new Adobe I/O App with default parameters

```
USAGE
  $ aio app create [PATH] [-v] [--version] [-i <value>]

ARGUMENTS
  PATH  [default: .] Path to the app directory

FLAGS
  -i, --import=<value>  Import an Adobe I/O Developer Console configuration file
  -v, --verbose         Verbose output
  --version             Show version

DESCRIPTION
  Create a new Adobe I/O App with default parameters
```

## `aio app delete`

Delete a component from an existing Adobe I/O App

```
USAGE
  $ aio app delete [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Delete a component from an existing Adobe I/O App
```

## `aio app delete action [ACTION-NAME]`

Delete existing actions

```
USAGE
  $ aio app delete action [ACTION-NAME] [-v] [--version] [-y]

ARGUMENTS
  ACTION-NAME  Action `pkg/name` to delete, you can specify multiple actions via a comma separated list

FLAGS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version

DESCRIPTION
  Delete existing actions


ALIASES
  $ aio app delete actions
```

## `aio app delete actions [ACTION-NAME]`

Delete existing actions

```
USAGE
  $ aio app delete actions [ACTION-NAME] [-v] [--version] [-y]

ARGUMENTS
  ACTION-NAME  Action `pkg/name` to delete, you can specify multiple actions via a comma separated list

FLAGS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version

DESCRIPTION
  Delete existing actions


ALIASES
  $ aio app delete actions
```

## `aio app delete ci`

Delete existing CI files

```
USAGE
  $ aio app delete ci [-v] [--version] [-y]

FLAGS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version

DESCRIPTION
  Delete existing CI files
```

## `aio app delete ext`

Delete existing extensions

```
USAGE
  $ aio app delete ext [-v] [--version] [-y] [--install] [-e <value>]

FLAGS
  -e, --extension=<value>...  Specify extensions to delete, skips selection prompt
  -v, --verbose               Verbose output
  -y, --yes                   Skip questions, and use all default values
  --[no-]install              [default: true] Run npm installation after files are created
  --version                   Show version

DESCRIPTION
  Delete existing extensions


ALIASES
  $ aio app delete ext
  $ aio app delete extensions
```

## `aio app delete extension`

Delete existing extensions

```
USAGE
  $ aio app delete extension [-v] [--version] [-y] [--install] [-e <value>]

FLAGS
  -e, --extension=<value>...  Specify extensions to delete, skips selection prompt
  -v, --verbose               Verbose output
  -y, --yes                   Skip questions, and use all default values
  --[no-]install              [default: true] Run npm installation after files are created
  --version                   Show version

DESCRIPTION
  Delete existing extensions


ALIASES
  $ aio app delete ext
  $ aio app delete extensions
```

## `aio app delete extensions`

Delete existing extensions

```
USAGE
  $ aio app delete extensions [-v] [--version] [-y] [--install] [-e <value>]

FLAGS
  -e, --extension=<value>...  Specify extensions to delete, skips selection prompt
  -v, --verbose               Verbose output
  -y, --yes                   Skip questions, and use all default values
  --[no-]install              [default: true] Run npm installation after files are created
  --version                   Show version

DESCRIPTION
  Delete existing extensions


ALIASES
  $ aio app delete ext
  $ aio app delete extensions
```

## `aio app delete service`

Delete Services in the current Workspace

```
USAGE
  $ aio app delete service [-v] [--version] [--use-jwt]

FLAGS
  -v, --verbose  Verbose output
  --use-jwt      if the config has both jwt and OAuth Server to Server Credentials (while migrating), prefer the JWT
                 credentials
  --version      Show version

DESCRIPTION
  Delete Services in the current Workspace


ALIASES
  $ aio app delete services
```

## `aio app delete services`

Delete Services in the current Workspace

```
USAGE
  $ aio app delete services [-v] [--version] [--use-jwt]

FLAGS
  -v, --verbose  Verbose output
  --use-jwt      if the config has both jwt and OAuth Server to Server Credentials (while migrating), prefer the JWT
                 credentials
  --version      Show version

DESCRIPTION
  Delete Services in the current Workspace


ALIASES
  $ aio app delete services
```

## `aio app delete web-assets`

Delete existing web assets

```
USAGE
  $ aio app delete web-assets [-v] [--version] [-y]

FLAGS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version

DESCRIPTION
  Delete existing web assets
```

## `aio app deploy`

Build and deploy an Adobe I/O App

```
USAGE
  $ aio app deploy [-v] [--version] [--actions | -a <value>] [--web-assets] [--force-build | ] [--content-hash]
    [--web-optimize] [-e <value> | ] [--build] [--open] [--force-deploy] [--force-publish |  | --publish]
    [--force-events |  | ] [--log-forwarding-update]

FLAGS
  -a, --action=<value>...       Deploy only a specific action, the flags can be specified multiple times, this will set
                                --no-publish
  -e, --extension=<value>...    Deploy only a specific extension, the flags can be specified multiple times
  -v, --verbose                 Verbose output
  --[no-]actions                [default: true] Deploy actions if any
  --[no-]build                  [default: true] Run the build phase before deployment
  --[no-]content-hash           [default: true] Enable content hashing in browser code
  --[no-]force-build            [default: true] Force a build even if one already exists
  --force-deploy                [default: false] Force deploy changes, regardless of production Workspace being
                                published in Exchange.
  --[no-]force-events           [default: false] Force event registrations and delete any registrations not part of the
                                config file
  --force-publish               [default: false] Force publish extension(s) to Exchange, delete previously published
                                extension points
  --[no-]log-forwarding-update  [default: true] Update log forwarding configuration on server
  --open                        Open the default web browser after a successful deploy, only valid if your app has a
                                front-end
  --[no-]publish                [default: true] Publish extension(s) to Exchange
  --version                     Show version
  --[no-]web-assets             [default: true] Deploy web-assets if any
  --web-optimize                [default: false] Enable optimization (minification) of web js/css/html

DESCRIPTION
  Build and deploy an Adobe I/O App

  This will always force a rebuild unless --no-force-build is set.
```

## `aio app get-url [ACTION]`

Get action URLs

```
USAGE
  $ aio app get-url [ACTION] [-v] [--version] [--cdn] [-j] [-h] [-y] [--local]

FLAGS
  -h, --hson     Output human readable json
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --cdn          Display CDN based action URLs
  --local        Display locally based action URLs
  --version      Show version

DESCRIPTION
  Get action URLs
```

## `aio app info`

Display settings/configuration in use by an Adobe I/O App

```
USAGE
  $ aio app info [-v] [--version] [-j | -h | -y] [--mask]

FLAGS
  -h, --hson     Output human readable json
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --[no-]mask    Hide known private info
  --version      Show version

DESCRIPTION
  Display settings/configuration in use by an Adobe I/O App
```

## `aio app init [PATH]`

Create a new Adobe I/O App

```
USAGE
  $ aio app init [PATH] [-v] [--version] [--install] [-y] [--login] [-e <value> | -t <value>]
    [--standalone-app | ] [-w <value> | -i <value>] [--confirm-new-workspace] [--use-jwt]

ARGUMENTS
  PATH  [default: .] Path to the app directory

FLAGS
  -e, --extension=<value>...  Extension point(s) to implement
  -i, --import=<value>        Import an Adobe I/O Developer Console configuration file
  -t, --template=<value>...   Specify a link to a template that will be installed
  -v, --verbose               Verbose output
  -w, --workspace=<value>     [default: Stage] Specify the Adobe Developer Console Workspace to init from, defaults to
                              Stage
  -y, --yes                   Skip questions, and use all default values
  --confirm-new-workspace     Skip and confirm prompt for creating a new workspace
  --[no-]install              [default: true] Run npm installation after files are created
  --[no-]login                Login using your Adobe ID for interacting with Adobe I/O Developer Console
  --standalone-app            Create a stand-alone application
  --use-jwt                   if the config has both jwt and OAuth Server to Server Credentials (while migrating),
                              prefer the JWT credentials
  --version                   Show version

DESCRIPTION
  Create a new Adobe I/O App
```

## `aio app list`

List components for Adobe I/O App

```
USAGE
  $ aio app list [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  List components for Adobe I/O App
```

## `aio app list ext`

List implemented extensions

```
USAGE
  $ aio app list ext [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --version      Show version

DESCRIPTION
  List implemented extensions


ALIASES
  $ aio app list ext
  $ aio app list extensions
```

## `aio app list ext-points`

List all extension points for the selected org

```
USAGE
  $ aio app list ext-points [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --version      Show version

DESCRIPTION
  List all extension points for the selected org


ALIASES
  $ aio app list ext-points
  $ aio app list extension-points
```

## `aio app list extension`

List implemented extensions

```
USAGE
  $ aio app list extension [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --version      Show version

DESCRIPTION
  List implemented extensions


ALIASES
  $ aio app list ext
  $ aio app list extensions
```

## `aio app list extension-points`

List all extension points for the selected org

```
USAGE
  $ aio app list extension-points [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --version      Show version

DESCRIPTION
  List all extension points for the selected org


ALIASES
  $ aio app list ext-points
  $ aio app list extension-points
```

## `aio app list extensions`

List implemented extensions

```
USAGE
  $ aio app list extensions [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --version      Show version

DESCRIPTION
  List implemented extensions


ALIASES
  $ aio app list ext
  $ aio app list extensions
```

## `aio app logs`

Fetch logs for an Adobe I/O App

```
USAGE
  $ aio app logs [-v] [--version] [-l <value>] [-a <value>] [-r] [-t | -w | -o]

FLAGS
  -a, --action=<value>...  Fetch logs for a specific action
  -l, --limit=<value>      [default: 1] Limit number of activations to fetch logs from ( 1-50 )
  -o, --poll               Fetch logs continuously
  -r, --strip              strip timestamp information and output first line only
  -t, --tail               Fetch logs continuously
  -v, --verbose            Verbose output
  -w, --watch              Fetch logs continuously
  --version                Show version

DESCRIPTION
  Fetch logs for an Adobe I/O App
```

## `aio app run`

Run an Adobe I/O App

```
USAGE
  $ aio app run [-v] [--version] [--local | ] [--serve] [--actions] [--open] [-e <value>]

FLAGS
  -e, --extension=<value>  Run only a specific extension, this flag can only be specified once
  -v, --verbose            Verbose output
  --[no-]actions           [default: true] Run actions, defaults to true, to skip actions use --no-actions
  --local                  Run/debug actions locally (requires Docker running)
  --open                   Open the default web browser after a successful run, only valid if your app has a front-end
  --[no-]serve             [default: true] Start frontend server (experimental)
  --version                Show version

DESCRIPTION
  Run an Adobe I/O App
```

## `aio app test`

Run tests for an Adobe I/O App

```
USAGE
  $ aio app test [-v] [--version] [-e <value> | -a <value>] [--all] [--e2e] [--unit]

FLAGS
  -a, --action=<value>...     the action(s) to test
  -e, --extension=<value>...  the extension(s) to test
  -v, --verbose               Verbose output
  --all                       run both unit and e2e tests
  --e2e                       run e2e tests
  --unit                      run unit tests
  --version                   Show version

DESCRIPTION
  Run tests for an Adobe I/O App
  If no flags are specified, by default only unit-tests are run.

  For the --action flag, it tries a substring search on the 'package-name/action-name' pair for an action.
  For the --extension flag, it tries a substring search on the 'extension-name' only.
  If the extension has a hook called 'test' in its 'ext.config.yaml', the script specified will be run instead.
```

## `aio app undeploy`

Undeploys an Adobe I/O App

```
USAGE
  $ aio app undeploy [-v] [--version] [--actions] [--events] [--web-assets] [-e <value>] [--force-unpublish |
    --unpublish]

FLAGS
  -e, --extension=<value>...  Undeploy only a specific extension, the flags can be specified multiple times
  -v, --verbose               Verbose output
  --[no-]actions              [default: true] Undeploy actions if any
  --[no-]events               [default: true] Undeploy (unregister) events if any
  --force-unpublish           Force unpublish extension(s) from Exchange, will delete all extension points
  --[no-]unpublish            [default: true] Unpublish selected extension(s) from Exchange
  --version                   Show version
  --[no-]web-assets           [default: true] Undeploy web-assets if any

DESCRIPTION
  Undeploys an Adobe I/O App
```

## `aio app use [CONFIG_FILE_PATH]`

Import an Adobe Developer Console configuration file.

```
USAGE
  $ aio app use [CONFIG_FILE_PATH] [-v] [--version] [--overwrite | --merge] [--confirm-new-workspace] [-w
    <value> | [-g | -w <value>] | ] [--no-service-sync | --confirm-service-sync] [--no-input] [--use-jwt]

ARGUMENTS
  CONFIG_FILE_PATH  path to an Adobe I/O Developer Console configuration file

FLAGS
  -g, --global                  Use the global Adobe Developer Console Org / Project / Workspace configuration, which
                                can be set via `aio console` commands
  -v, --verbose                 Verbose output
  -w, --workspace=<value>       Specify the Adobe Developer Console Workspace name or Workspace id to import the
                                configuration from
  -w, --workspace-name=<value>  [DEPRECATED]: please use --workspace instead
  --confirm-new-workspace       Skip and confirm prompt for creating a new workspace
  --confirm-service-sync        Skip the Service sync prompt and overwrite Service subscriptions in the new Workspace
                                with current subscriptions
  --merge                       Merge any .aio and .env files during import of the Adobe Developer Console configuration
                                file
  --no-input                    Skip user prompts by setting --no-service-sync and --merge. Requires one of
                                config_file_path or --global or --workspace
  --no-service-sync             Skip the Service sync prompt and do not attach current Service subscriptions to the new
                                Workspace
  --overwrite                   Overwrite any .aio and .env files during import of the Adobe Developer Console
                                configuration file
  --use-jwt                     if the config has both jwt and OAuth Server to Server Credentials (while migrating),
                                prefer the JWT credentials
  --version                     Show version

DESCRIPTION
  Import an Adobe Developer Console configuration file.

  If the optional configuration file is not set, this command will retrieve the console org, project, and workspace
  settings from the global config.

  To set these global config values, see the help text for 'aio console --help'.

  To download the configuration file for your project, select the 'Download' button in the toolbar of your project's
  page in https://developer.adobe.com/console/
```

## `aio auth`

Adobe IMS commands to login and logout.

```
USAGE
  $ aio auth

DESCRIPTION
  Adobe IMS commands to login and logout.

  The main commands are `auth login` to get or create an access token and
  `auth logout` to invalidate an access token and thus log out from Adobe IMS.

  Logging in and out is based on configuration of which there may be
  multiple. Each set of configuration properties, called an Adobe IMS context,
  can be individually addressed by a label.

  Configuration for the Adobe IMS commands is stored in the "ims"
  configuration property. The special property "ims.config.current" contains the
  label of the current configuration which can be set using the
  "aio auth ctx -s <label>" command.

  Each set of properties in a labeled Adobe IMS context configurations has
  configuration properties depending on the kind of access that is
  supported. The below example shows the configuration for OAuth2
  based (graphical SUSI) login.

  The "env" property is optional and designates the Adobe IMS environment
  used for authentication. Possible values are "stage" and "prod".
  If the property is missing or any other value, it defaults to "prod".

  All commands allow their normal output to be formatted in either
  HJSON (default), JSON, or YAML.


EXAMPLES
  {
      ims: {
        contexts: {
          postman: {
            env: "stage",
            callback_url: "https://callback.example.com",
            client_id: "example.com-client-id",
            client_secret: "XXXXXXXX",
            scope: "openid AdobeID additional_info.projectedProductContext read_organizations",
            state: ""
          }
        },
        config: {
          current: "postman"
        }
      }
    }
```

_See code: [@adobe/aio-cli-plugin-auth](https://github.com/adobe/aio-cli-plugin-auth/blob/3.2.1/src/commands/auth/index.js)_

## `aio auth ctx`

Manage Adobe IMS contexts.

```
USAGE
  $ aio auth ctx [--debug <value>] [-v] [-l | -g] [-c <value>] [--list | --value | -s <value> | ]

FLAGS
  -c, --ctx=<value>  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -g, --global       global config
  -l, --local        local config
  -s, --set=<value>  Sets the name of the current local Adobe IMS context
  -v, --verbose      Verbose output
  --debug=<value>    Debug level output
  --list             Names of the Adobe IMS contexts as an array
  --value            Prints named or current Adobe IMS context data

DESCRIPTION
  Manage Adobe IMS contexts.

  The following options exist for this command:

  * List the names of the configured Adobe IMS contexts
  * Print the name of the current Adobe IMS context
  * Set the name of the current Adobe IMS context
  * Print the configuration of the current or a named Adobe IMS context

  Currently it is not possible to update the Adobe Adobe IMS context configuration
  using this command. Use the "aio config" commands for this.
  e.g. aio config:set ims.contexts.your_context.your_context_key "your_context_value"

  Please note, that the following IMS context label names is reserved: `cli`
  and should not be used as an IMS context name.

  Also note that the current context can only be set locally.


ALIASES
  $ aio ctx
  $ aio context
```

## `aio auth login`

Log in with a certain Adobe IMS context and returns the access token.

```
USAGE
  $ aio auth login [--debug <value>] [-v] [-l | -g] [-c <value>] [-f] [-d] [-b] [-o]

FLAGS
  -b, --bare         print access token only
  -c, --ctx=<value>  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -d, --decode       Decode and display access token data
  -f, --force        Force logging in. This causes a forced logout on the context first and makes sure to not use any
                     cached data when calling the plugin.
  -g, --global       global config
  -l, --local        local config
  -o, --[no-]open    Open the default browser to complete the login
  -v, --verbose      Verbose output
  --debug=<value>    Debug level output

DESCRIPTION
  Log in with a certain Adobe IMS context and returns the access token.

  If the Adobe IMS context already has a valid access token set (valid meaning
  at least 10 minutes before expiry), that token is returned.

  Otherwise, if the Adobe IMS context has a valid refresh token set (valid
  meaning at least 10 minutes before expiry) that refresh token is
  exchanged for an access token before returning the access token.

  Lastly, if the Adobe IMS context properties are supported by one of the
  Adobe IMS login plugins, that login plugin is called to guide through
  the IMS login process.

  The currently supported Adobe IMS login plugins are:

  * aio-lib-ims-jwt for JWT token based login supporting
  Adobe I/O Console service integrations.
  * aio-lib-ims-oauth for browser based OAuth2 login. This
  plugin will launch the default browser to guide the user through the
  login process. The plugin itself will *never* see the user's
  password but only receive the authorization token after the
  user has authenticated with Adobe IMS.


ALIASES
  $ aio login
```

## `aio auth logout`

Log out the current or a named Adobe IMS context.

```
USAGE
  $ aio auth logout [--debug <value>] [-v] [-l | -g] [-c <value>] [-f]

FLAGS
  -c, --ctx=<value>  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -f, --[no-]force   Invalidate the refresh token as well as all access tokens.
                     Otherwise only the access token is invalidated. For Adobe IMS
                     contexts not supporting refresh tokens, this flag has no
                     effect.
  -g, --global       global config
  -l, --local        local config
  -v, --verbose      Verbose output
  --debug=<value>    Debug level output

DESCRIPTION
  Log out the current or a named Adobe IMS context.

  This command can be called multiple times on the same Adobe IMS context with
  out causing any errors. The assumption is that after calling this command
  without an error, the Adobe IMS context's access and refresh tokens have been
  invalidated and removed from persistent storage. Repeatedly calling this
  command will just do nothing.


ALIASES
  $ aio logout
```

## `aio autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ aio autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  (zsh|bash|powershell) Shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ aio autocomplete

  $ aio autocomplete bash

  $ aio autocomplete zsh

  $ aio autocomplete powershell

  $ aio autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v2.3.5/src/commands/autocomplete/index.ts)_

## `aio certificate`

Generate, fingerprint, or verify a certificate for use with Adobe I/O

```
USAGE
  $ aio certificate

DESCRIPTION
  Generate, fingerprint, or verify a certificate for use with Adobe I/O
```

_See code: [@adobe/aio-cli-plugin-certificate](https://github.com/adobe/aio-cli-plugin-certificate/blob/1.0.1/src/commands/certificate/index.js)_

## `aio certificate fingerprint FILE`

Compute the fingerprint of a public key certificate for use with Adobe I/O

```
USAGE
  $ aio certificate fingerprint FILE

ARGUMENTS
  FILE  file path to certificate to fingerprint

DESCRIPTION
  Compute the fingerprint of a public key certificate for use with Adobe I/O
```

## `aio certificate generate`

Generate a new private/public key pair

```
USAGE
  $ aio certificate generate [--keyout <value>] [--out <value>] [-n <value>] [-c <value>] [-s <value>] [-l <value>] [-o
    <value>] [-u <value>] [--days <value>]

FLAGS
  -c, --country=<value>       Country Name
  -l, --locality=<value>      Locality, or city name
  -n, --name=<value>          [default: selfsign.localhost] Common Name: typically a host domain name, like
                              www.mysite.com
  -o, --organization=<value>  Organization name
  -s, --state=<value>         State or Province
  -u, --unit=<value>          Organizational unit or department
  --days=<value>              [default: 365] Number of days the certificate should be valid for. (Max 365)
  --keyout=<value>            [default: private.key] file to send the key to
  --out=<value>               [default: certificate_pub.crt] output file

DESCRIPTION
  Generate a new private/public key pair
  Generate a self-signed certificate to enable https:// on localhost or signing jwt payloads for interacting with Adobe
  services.
```

## `aio certificate verify FILE`

Verify a certificate for use with Adobe I/O

```
USAGE
  $ aio certificate verify FILE [--days <value>]

ARGUMENTS
  FILE  file path to certificate to verify

FLAGS
  --days=<value>  +- is certificate valid in --days

DESCRIPTION
  Verify a certificate for use with Adobe I/O
  Verifies that the certificate is valid, and/or will not expire in [--days] days from now.
```

## `aio config`

list, get, set, delete, and edit persistent configuration data

```
USAGE
  $ aio config [-l | -g] [-e] [--verbose |  | [-j | -y]]

FLAGS
  -e, --env     environment variables
  -g, --global  global config
  -j, --json    output in json
  -l, --local   local config
  -y, --yaml    output in yaml
  --verbose     show all config values

DESCRIPTION
  list, get, set, delete, and edit persistent configuration data

ALIASES
  $ aio config ls

EXAMPLES
  $ aio config:list

  $ aio config:get KEY

  $ aio config:set KEY VALUE

  $ aio config:delete KEY

  $ aio config:clear
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/4.0.1/src/commands/config/index.js)_

## `aio config clear`

clears all persistent config values

```
USAGE
  $ aio config clear [-l | -g] [-f]

FLAGS
  -f, --force   do not prompt for confirmation
  -g, --global  global config
  -l, --local   local config

DESCRIPTION
  clears all persistent config values
```

## `aio config del KEYS...`

deletes persistent config values

```
USAGE
  $ aio config del KEYS... [-l | -g]

FLAGS
  -g, --global  global config
  -l, --local   local config

DESCRIPTION
  deletes persistent config values

ALIASES
  $ aio config del
  $ aio config rm
```

## `aio config delete KEYS...`

deletes persistent config values

```
USAGE
  $ aio config delete KEYS... [-l | -g]

FLAGS
  -g, --global  global config
  -l, --local   local config

DESCRIPTION
  deletes persistent config values

ALIASES
  $ aio config del
  $ aio config rm
```

## `aio config edit`

edit config file

```
USAGE
  $ aio config edit [-l | -g]

FLAGS
  -g, --global  global config
  -l, --local   local config

DESCRIPTION
  edit config file
```

## `aio config get KEY`

gets a persistent config value

```
USAGE
  $ aio config get KEY [-l | -g] [-j | -y] [-e]

FLAGS
  -e, --env     environment variables
  -g, --global  global config
  -j, --json    output in json
  -l, --local   local config
  -y, --yaml    output in yaml

DESCRIPTION
  gets a persistent config value
```

## `aio config list`

lists all persistent config values

```
USAGE
  $ aio config list [-l | -g] [-e] [--verbose |  | [-j | -y]]

FLAGS
  -e, --env     environment variables
  -g, --global  global config
  -j, --json    output in json
  -l, --local   local config
  -y, --yaml    output in yaml
  --verbose     show all config values

DESCRIPTION
  lists all persistent config values

ALIASES
  $ aio config ls
```

## `aio config ls`

list, get, set, delete, and edit persistent configuration data

```
USAGE
  $ aio config ls [-l | -g] [-e] [--verbose |  | [-j | -y]]

FLAGS
  -e, --env     environment variables
  -g, --global  global config
  -j, --json    output in json
  -l, --local   local config
  -y, --yaml    output in yaml
  --verbose     show all config values

DESCRIPTION
  list, get, set, delete, and edit persistent configuration data

ALIASES
  $ aio config ls

EXAMPLES
  $ aio config:list

  $ aio config:get KEY

  $ aio config:set KEY VALUE

  $ aio config:delete KEY

  $ aio config:clear
```

## `aio config rm KEYS...`

deletes persistent config values

```
USAGE
  $ aio config rm KEYS... [-l | -g]

FLAGS
  -g, --global  global config
  -l, --local   local config

DESCRIPTION
  deletes persistent config values

ALIASES
  $ aio config del
  $ aio config rm
```

## `aio config set key 'a value'       # set key to 'a value'`

sets a persistent config value

```
USAGE
  $ aio config set key 'a value'       # set key to 'a value'
  $ aio config set key -f value.json   # set key to the json found in the file value.json
  $ aio config set -j key < value.json # set key to the json found in the file value.json

FLAGS
  -f, --file         value is a path to a file
  -g, --global       global config
  -i, --interactive  prompt for value
  -j, --json         value is json
  -l, --local        local config
  -y, --yaml         value is yaml

DESCRIPTION
  sets a persistent config value
```

## `aio console`

Console plugin for the Adobe I/O CLI

```
USAGE
  $ aio console [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Console plugin for the Adobe I/O CLI
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/4.1.0/src/commands/console/index.js)_

## `aio console open`

Open the developer console for the selected Organization, Project and Workspace

```
USAGE
  $ aio console open [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Open the developer console for the selected Organization, Project and Workspace

ALIASES
  $ aio open
```

## `aio console org`

Manage your Adobe I/O Console Organizations

```
USAGE
  $ aio console org [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Manage your Adobe I/O Console Organizations
```

## `aio console org list`

List your Organizations

```
USAGE
  $ aio console org list [--help] [-j | -y]

FLAGS
  -j, --json  Output json
  -y, --yml   Output yml
  --help      Show help

DESCRIPTION
  List your Organizations

ALIASES
  $ aio console org ls
```

## `aio console org ls`

List your Organizations

```
USAGE
  $ aio console org ls [--help] [-j | -y]

FLAGS
  -j, --json  Output json
  -y, --yml   Output yml
  --help      Show help

DESCRIPTION
  List your Organizations

ALIASES
  $ aio console org ls
```

## `aio console org sel [ORGCODE]`

Select an Organization

```
USAGE
  $ aio console org sel [ORGCODE] [--help]

ARGUMENTS
  ORGCODE  Adobe Developer Console Org code

FLAGS
  --help  Show help

DESCRIPTION
  Select an Organization

ALIASES
  $ aio console org sel
```

## `aio console org select [ORGCODE]`

Select an Organization

```
USAGE
  $ aio console org select [ORGCODE] [--help]

ARGUMENTS
  ORGCODE  Adobe Developer Console Org code

FLAGS
  --help  Show help

DESCRIPTION
  Select an Organization

ALIASES
  $ aio console org sel
```

## `aio console project`

Manage your Adobe I/O Console Projects

```
USAGE
  $ aio console project [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Manage your Adobe I/O Console Projects
```

## `aio console project list`

List your Projects for the selected Organization

```
USAGE
  $ aio console project list [--help] [--orgId <value>] [-j | -y]

FLAGS
  -j, --json       Output json
  -y, --yml        Output yml
  --help           Show help
  --orgId=<value>  OrgID for listing projects

DESCRIPTION
  List your Projects for the selected Organization

ALIASES
  $ aio console project ls
```

## `aio console project ls`

List your Projects for the selected Organization

```
USAGE
  $ aio console project ls [--help] [--orgId <value>] [-j | -y]

FLAGS
  -j, --json       Output json
  -y, --yml        Output yml
  --help           Show help
  --orgId=<value>  OrgID for listing projects

DESCRIPTION
  List your Projects for the selected Organization

ALIASES
  $ aio console project ls
```

## `aio console project sel [PROJECTIDORNAME]`

Select a Project for the selected Organization

```
USAGE
  $ aio console project sel [PROJECTIDORNAME] [--help] [--orgId <value>]

ARGUMENTS
  PROJECTIDORNAME  Adobe Developer Console Project id or Project name

FLAGS
  --help           Show help
  --orgId=<value>  Organization id of the Console Project to select

DESCRIPTION
  Select a Project for the selected Organization

ALIASES
  $ aio console project sel
```

## `aio console project select [PROJECTIDORNAME]`

Select a Project for the selected Organization

```
USAGE
  $ aio console project select [PROJECTIDORNAME] [--help] [--orgId <value>]

ARGUMENTS
  PROJECTIDORNAME  Adobe Developer Console Project id or Project name

FLAGS
  --help           Show help
  --orgId=<value>  Organization id of the Console Project to select

DESCRIPTION
  Select a Project for the selected Organization

ALIASES
  $ aio console project sel
```

## `aio console publickey`

Manage Public Key Bindings for your Adobe I/O Console Workspaces

```
USAGE
  $ aio console publickey [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Manage Public Key Bindings for your Adobe I/O Console Workspaces
```

## `aio console publickey delete IDORFINGERPRINT`

Delete a public key certificate from the selected Workspace

```
USAGE
  $ aio console publickey delete IDORFINGERPRINT [--help] [--orgId <value>] [--projectId <value>] [--workspaceId
  <value>]

ARGUMENTS
  IDORFINGERPRINT  The bindingId or the fingerprint of the public key binding to delete

FLAGS
  --help                 Show help
  --orgId=<value>        Organization id of the Console Workspace to delete the public key certificate from
  --projectId=<value>    Project id of the Console Workspace to delete the public key certificate from
  --workspaceId=<value>  Workspace id of the Console Workspace to delete the public key certificate from

DESCRIPTION
  Delete a public key certificate from the selected Workspace
```

## `aio console publickey list`

List the public key certificates bound to the selected Workspace

```
USAGE
  $ aio console publickey list [--help] [--orgId <value>] [--projectId <value>] [--workspaceId <value>] [-j | -y]

FLAGS
  -j, --json             Output json
  -y, --yml              Output yml
  --help                 Show help
  --orgId=<value>        Organization id of the Console Workspace to list the public key certificates for
  --projectId=<value>    Project id of the Console Workspace to list the public key certificate for
  --workspaceId=<value>  Workspace id of the Console Workspace to list the public key certificate for

DESCRIPTION
  List the public key certificates bound to the selected Workspace
```

## `aio console publickey upload FILE`

Upload a public key certificate to the selected Workspace

```
USAGE
  $ aio console publickey upload FILE [--help] [--orgId <value>] [--projectId <value>] [--workspaceId <value>] [-j | -y]

ARGUMENTS
  FILE  Path to public key certificate file in PEM format

FLAGS
  -j, --json             Output json
  -y, --yml              Output yml
  --help                 Show help
  --orgId=<value>        Organization id of the Console Workspace to upload the public key certificate to
  --projectId=<value>    Project id of the Console Workspace to upload the public key certificate to
  --workspaceId=<value>  Workspace id of the Console Workspace to upload the public key certificate to

DESCRIPTION
  Upload a public key certificate to the selected Workspace
```

## `aio console where`

Show the currently selected Organization, Project and Workspace

```
USAGE
  $ aio console where [--help] [-j | -y]

FLAGS
  -j, --json  Output json
  -y, --yml   Output yml
  --help      Show help

DESCRIPTION
  Show the currently selected Organization, Project and Workspace

ALIASES
  $ aio where
```

## `aio console workspace`

Manage your Adobe I/O Console Workspaces

```
USAGE
  $ aio console workspace [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Manage your Adobe I/O Console Workspaces

ALIASES
  $ aio console ws
```

## `aio console workspace dl [DESTINATION]`

Downloads the configuration for the selected Workspace

```
USAGE
  $ aio console workspace dl [DESTINATION] [--help] [--orgId <value>] [--projectId <value>] [--workspaceId <value>]

ARGUMENTS
  DESTINATION  Output file name or folder name where the Console Workspace configuration file should be saved

FLAGS
  --help                 Show help
  --orgId=<value>        Organization id of the Console Workspace configuration to download
  --projectId=<value>    Project id of the Console Workspace configuration to download
  --workspaceId=<value>  Workspace id of the Console Workspace configuration to download

DESCRIPTION
  Downloads the configuration for the selected Workspace

ALIASES
  $ aio console workspace dl
  $ aio console ws download
  $ aio console ws dl
```

## `aio console workspace download [DESTINATION]`

Downloads the configuration for the selected Workspace

```
USAGE
  $ aio console workspace download [DESTINATION] [--help] [--orgId <value>] [--projectId <value>] [--workspaceId
  <value>]

ARGUMENTS
  DESTINATION  Output file name or folder name where the Console Workspace configuration file should be saved

FLAGS
  --help                 Show help
  --orgId=<value>        Organization id of the Console Workspace configuration to download
  --projectId=<value>    Project id of the Console Workspace configuration to download
  --workspaceId=<value>  Workspace id of the Console Workspace configuration to download

DESCRIPTION
  Downloads the configuration for the selected Workspace

ALIASES
  $ aio console workspace dl
  $ aio console ws download
  $ aio console ws dl
```

## `aio console workspace list`

List your Workspaces for your selected Project

```
USAGE
  $ aio console workspace list [--help] [-j | -y] [--orgId <value>] [--projectId <value>]

FLAGS
  -j, --json           Output json
  -y, --yml            Output yml
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspaces to list
  --projectId=<value>  Project id of the Console Workspaces to list

DESCRIPTION
  List your Workspaces for your selected Project

ALIASES
  $ aio console workspace ls
  $ aio console ws list
  $ aio console ws ls
```

## `aio console workspace ls`

List your Workspaces for your selected Project

```
USAGE
  $ aio console workspace ls [--help] [-j | -y] [--orgId <value>] [--projectId <value>]

FLAGS
  -j, --json           Output json
  -y, --yml            Output yml
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspaces to list
  --projectId=<value>  Project id of the Console Workspaces to list

DESCRIPTION
  List your Workspaces for your selected Project

ALIASES
  $ aio console workspace ls
  $ aio console ws list
  $ aio console ws ls
```

## `aio console workspace sel [WORKSPACEIDORNAME]`

Select a Workspace for the selected Project

```
USAGE
  $ aio console workspace sel [WORKSPACEIDORNAME] [--help] [--orgId <value>] [--projectId <value>]

ARGUMENTS
  WORKSPACEIDORNAME  Adobe Developer Console Workspace id or Workspace name

FLAGS
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspace to select
  --projectId=<value>  Project id of the Console Workspace to select

DESCRIPTION
  Select a Workspace for the selected Project

ALIASES
  $ aio console workspace sel
  $ aio console ws select
  $ aio console ws sel
```

## `aio console workspace select [WORKSPACEIDORNAME]`

Select a Workspace for the selected Project

```
USAGE
  $ aio console workspace select [WORKSPACEIDORNAME] [--help] [--orgId <value>] [--projectId <value>]

ARGUMENTS
  WORKSPACEIDORNAME  Adobe Developer Console Workspace id or Workspace name

FLAGS
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspace to select
  --projectId=<value>  Project id of the Console Workspace to select

DESCRIPTION
  Select a Workspace for the selected Project

ALIASES
  $ aio console workspace sel
  $ aio console ws select
  $ aio console ws sel
```

## `aio console ws`

Manage your Adobe I/O Console Workspaces

```
USAGE
  $ aio console ws [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Manage your Adobe I/O Console Workspaces

ALIASES
  $ aio console ws
```

## `aio console ws dl [DESTINATION]`

Downloads the configuration for the selected Workspace

```
USAGE
  $ aio console ws dl [DESTINATION] [--help] [--orgId <value>] [--projectId <value>] [--workspaceId <value>]

ARGUMENTS
  DESTINATION  Output file name or folder name where the Console Workspace configuration file should be saved

FLAGS
  --help                 Show help
  --orgId=<value>        Organization id of the Console Workspace configuration to download
  --projectId=<value>    Project id of the Console Workspace configuration to download
  --workspaceId=<value>  Workspace id of the Console Workspace configuration to download

DESCRIPTION
  Downloads the configuration for the selected Workspace

ALIASES
  $ aio console workspace dl
  $ aio console ws download
  $ aio console ws dl
```

## `aio console ws download [DESTINATION]`

Downloads the configuration for the selected Workspace

```
USAGE
  $ aio console ws download [DESTINATION] [--help] [--orgId <value>] [--projectId <value>] [--workspaceId <value>]

ARGUMENTS
  DESTINATION  Output file name or folder name where the Console Workspace configuration file should be saved

FLAGS
  --help                 Show help
  --orgId=<value>        Organization id of the Console Workspace configuration to download
  --projectId=<value>    Project id of the Console Workspace configuration to download
  --workspaceId=<value>  Workspace id of the Console Workspace configuration to download

DESCRIPTION
  Downloads the configuration for the selected Workspace

ALIASES
  $ aio console workspace dl
  $ aio console ws download
  $ aio console ws dl
```

## `aio console ws list`

List your Workspaces for your selected Project

```
USAGE
  $ aio console ws list [--help] [-j | -y] [--orgId <value>] [--projectId <value>]

FLAGS
  -j, --json           Output json
  -y, --yml            Output yml
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspaces to list
  --projectId=<value>  Project id of the Console Workspaces to list

DESCRIPTION
  List your Workspaces for your selected Project

ALIASES
  $ aio console workspace ls
  $ aio console ws list
  $ aio console ws ls
```

## `aio console ws ls`

List your Workspaces for your selected Project

```
USAGE
  $ aio console ws ls [--help] [-j | -y] [--orgId <value>] [--projectId <value>]

FLAGS
  -j, --json           Output json
  -y, --yml            Output yml
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspaces to list
  --projectId=<value>  Project id of the Console Workspaces to list

DESCRIPTION
  List your Workspaces for your selected Project

ALIASES
  $ aio console workspace ls
  $ aio console ws list
  $ aio console ws ls
```

## `aio console ws sel [WORKSPACEIDORNAME]`

Select a Workspace for the selected Project

```
USAGE
  $ aio console ws sel [WORKSPACEIDORNAME] [--help] [--orgId <value>] [--projectId <value>]

ARGUMENTS
  WORKSPACEIDORNAME  Adobe Developer Console Workspace id or Workspace name

FLAGS
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspace to select
  --projectId=<value>  Project id of the Console Workspace to select

DESCRIPTION
  Select a Workspace for the selected Project

ALIASES
  $ aio console workspace sel
  $ aio console ws select
  $ aio console ws sel
```

## `aio console ws select [WORKSPACEIDORNAME]`

Select a Workspace for the selected Project

```
USAGE
  $ aio console ws select [WORKSPACEIDORNAME] [--help] [--orgId <value>] [--projectId <value>]

ARGUMENTS
  WORKSPACEIDORNAME  Adobe Developer Console Workspace id or Workspace name

FLAGS
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspace to select
  --projectId=<value>  Project id of the Console Workspace to select

DESCRIPTION
  Select a Workspace for the selected Project

ALIASES
  $ aio console workspace sel
  $ aio console ws select
  $ aio console ws sel
```

## `aio context`

Manage Adobe IMS contexts.

```
USAGE
  $ aio context [--debug <value>] [-v] [-l | -g] [-c <value>] [--list | --value | -s <value> | ]

FLAGS
  -c, --ctx=<value>  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -g, --global       global config
  -l, --local        local config
  -s, --set=<value>  Sets the name of the current local Adobe IMS context
  -v, --verbose      Verbose output
  --debug=<value>    Debug level output
  --list             Names of the Adobe IMS contexts as an array
  --value            Prints named or current Adobe IMS context data

DESCRIPTION
  Manage Adobe IMS contexts.

  The following options exist for this command:

  * List the names of the configured Adobe IMS contexts
  * Print the name of the current Adobe IMS context
  * Set the name of the current Adobe IMS context
  * Print the configuration of the current or a named Adobe IMS context

  Currently it is not possible to update the Adobe Adobe IMS context configuration
  using this command. Use the "aio config" commands for this.
  e.g. aio config:set ims.contexts.your_context.your_context_key "your_context_value"

  Please note, that the following IMS context label names is reserved: `cli`
  and should not be used as an IMS context name.

  Also note that the current context can only be set locally.


ALIASES
  $ aio ctx
  $ aio context
```

## `aio ctx`

Manage Adobe IMS contexts.

```
USAGE
  $ aio ctx [--debug <value>] [-v] [-l | -g] [-c <value>] [--list | --value | -s <value> | ]

FLAGS
  -c, --ctx=<value>  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -g, --global       global config
  -l, --local        local config
  -s, --set=<value>  Sets the name of the current local Adobe IMS context
  -v, --verbose      Verbose output
  --debug=<value>    Debug level output
  --list             Names of the Adobe IMS contexts as an array
  --value            Prints named or current Adobe IMS context data

DESCRIPTION
  Manage Adobe IMS contexts.

  The following options exist for this command:

  * List the names of the configured Adobe IMS contexts
  * Print the name of the current Adobe IMS context
  * Set the name of the current Adobe IMS context
  * Print the configuration of the current or a named Adobe IMS context

  Currently it is not possible to update the Adobe Adobe IMS context configuration
  using this command. Use the "aio config" commands for this.
  e.g. aio config:set ims.contexts.your_context.your_context_key "your_context_value"

  Please note, that the following IMS context label names is reserved: `cli`
  and should not be used as an IMS context name.

  Also note that the current context can only be set locally.


ALIASES
  $ aio ctx
  $ aio context
```

## `aio discover`

Discover plugins to install

```
USAGE
  $ aio discover [-i] [-f date|name] [-o asc|desc]

FLAGS
  -f, --sort-field=<option>  [default: date] which column to sort, use the sort-order flag to specify sort direction
                             <options: date|name>
  -i, --install              interactive install mode
  -o, --sort-order=<option>  [default: desc] sort order for a column, use the sort-field flag to specify which column to
                             sort
                             <options: asc|desc>

DESCRIPTION
  Discover plugins to install
  To install a plugin, run 'aio plugins install NAME'


ALIASES
  $ aio plugins discover
```

_See code: [src/commands/discover.ts](https://github.com/adobe/aio-cli/blob/9.4.1/src/commands/discover.ts)_

## `aio event`

Manage your Adobe I/O Events

```
USAGE
  $ aio event [--help] [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Manage your Adobe I/O Events
```

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v3.3.1/src/commands/event/index.ts)_

## `aio event eventmetadata`

Manage your Adobe I/O Events Providers' Event Metadata

```
USAGE
  $ aio event eventmetadata [--help] [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Manage your Adobe I/O Events Providers' Event Metadata
```

## `aio event eventmetadata create PROVIDERID`

Create an Event Metadata for a Provider

```
USAGE
  $ aio event eventmetadata create PROVIDERID [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  PROVIDERID  The requested eventmetadata event code

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Create an Event Metadata for a Provider
```

## `aio event eventmetadata delete PROVIDERID [EVENTCODE]`

Delete Event Metadata for a Provider

```
USAGE
  $ aio event eventmetadata delete PROVIDERID [EVENTCODE] [--help] [-v] [--version]

ARGUMENTS
  PROVIDERID  The requested provider ID
  EVENTCODE   The requested eventmetadata event code

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Delete Event Metadata for a Provider
```

## `aio event eventmetadata get PROVIDERID EVENTCODE`

Get details of an Event Code of a Provider

```
USAGE
  $ aio event eventmetadata get PROVIDERID EVENTCODE [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  PROVIDERID  The requested provider ID
  EVENTCODE   The requested eventmetadata event code

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Get details of an Event Code of a Provider
```

## `aio event eventmetadata list PROVIDERID`

List all Event Metadata for a Provider

```
USAGE
  $ aio event eventmetadata list PROVIDERID [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  PROVIDERID  The requested provider ID

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  List all Event Metadata for a Provider

ALIASES
  $ aio event eventmetadata ls
```

## `aio event eventmetadata ls PROVIDERID`

List all Event Metadata for a Provider

```
USAGE
  $ aio event eventmetadata ls PROVIDERID [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  PROVIDERID  The requested provider ID

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  List all Event Metadata for a Provider

ALIASES
  $ aio event eventmetadata ls
```

## `aio event eventmetadata update PROVIDERID EVENTCODE`

Update an Event Metadata for a Provider

```
USAGE
  $ aio event eventmetadata update PROVIDERID EVENTCODE [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  PROVIDERID  The requested provider ID
  EVENTCODE   The requested eventmetadata event code

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Update an Event Metadata for a Provider
```

## `aio event provider`

Manage your Adobe I/O Events Providers

```
USAGE
  $ aio event provider [--help] [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Manage your Adobe I/O Events Providers
```

## `aio event provider create`

Create a new Provider

```
USAGE
  $ aio event provider create [--help] [-v] [--version] [-j | -y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Create a new Provider
```

## `aio event provider delete PROVIDERID`

Delete Provider by id

```
USAGE
  $ aio event provider delete PROVIDERID [--help] [-v] [--version]

ARGUMENTS
  PROVIDERID  The requested provider ID

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Delete Provider by id
```

## `aio event provider get PROVIDERID`

Get details of Provider by id

```
USAGE
  $ aio event provider get PROVIDERID [--help] [-v] [--version] [--fetchEventMetadata] [-j | -y]

ARGUMENTS
  PROVIDERID  The requested provider ID

FLAGS
  -j, --json            Output json
  -v, --verbose         Verbose output
  -y, --yml             Output yml
  --fetchEventMetadata  Fetch event metadata with provider
  --help                Show help
  --version             Show version

DESCRIPTION
  Get details of Provider by id
```

## `aio event provider list`

Get list of all Providers for the Organization

```
USAGE
  $ aio event provider list [--help] [-v] [--version] [--fetchEventMetadata] [--providerMetadataId <value> | -p <value>]
    [--instanceId <value>] [-j | -y]

FLAGS
  -j, --json                            Output json
  -p, --providerMetadataIds=<value>...  Filter providers for org by list of provider metadata ids
  -v, --verbose                         Verbose output
  -y, --yml                             Output yml
  --fetchEventMetadata                  Fetch event metadata with provider
  --help                                Show help
  --instanceId=<value>                  Filter providers for org by provider metadata id (and instance id if applicable)
  --providerMetadataId=<value>          Filter providers for org by provider metadata id (and instance id if applicable)
  --version                             Show version

DESCRIPTION
  Get list of all Providers for the Organization

ALIASES
  $ aio event provider ls
```

## `aio event provider ls`

Get list of all Providers for the Organization

```
USAGE
  $ aio event provider ls [--help] [-v] [--version] [--fetchEventMetadata] [--providerMetadataId <value> | -p <value>]
    [--instanceId <value>] [-j | -y]

FLAGS
  -j, --json                            Output json
  -p, --providerMetadataIds=<value>...  Filter providers for org by list of provider metadata ids
  -v, --verbose                         Verbose output
  -y, --yml                             Output yml
  --fetchEventMetadata                  Fetch event metadata with provider
  --help                                Show help
  --instanceId=<value>                  Filter providers for org by provider metadata id (and instance id if applicable)
  --providerMetadataId=<value>          Filter providers for org by provider metadata id (and instance id if applicable)
  --version                             Show version

DESCRIPTION
  Get list of all Providers for the Organization

ALIASES
  $ aio event provider ls
```

## `aio event provider update PROVIDERID`

Update an existing Provider

```
USAGE
  $ aio event provider update PROVIDERID [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  PROVIDERID  The requested provider ID

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Update an existing Provider
```

## `aio event reg`

Manage your Adobe I/O Events Registrations

```
USAGE
  $ aio event reg [--help] [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Manage your Adobe I/O Events Registrations

ALIASES
  $ aio event reg
```

## `aio event reg create BODYJSONFILE`

Create a new Event Registration in your Workspace

```
USAGE
  $ aio event reg create BODYJSONFILE [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  BODYJSONFILE
      Path to a file in JSON format with the information to create a new Event Registration.
      The JSON should follow the following format:
      {
      "name": "<event registration name>",
      "description": "<event registration description>",
      "delivery_type": "webhook|webhook_batch|journal",
      "webhook_url": "<webhook URL responding to challenge>",
      "events_of_interest": [{
      "provider_id": "<event provider id>",
      "event_code": "<event provider event_code metadata>"
      }, { /* ...more events */ }]
      }

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Create a new Event Registration in your Workspace

ALIASES
  $ aio event reg create
```

## `aio event reg delete REGISTRATIONID`

Delete Registration

```
USAGE
  $ aio event reg delete REGISTRATIONID [--help] [-v] [--version]

ARGUMENTS
  REGISTRATIONID  The requested registration ID

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Delete Registration

ALIASES
  $ aio event reg delete
```

## `aio event reg get REGISTRATIONID`

Get an Event Registration in your Workspace

```
USAGE
  $ aio event reg get REGISTRATIONID [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  REGISTRATIONID  The requested registration ID

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Get an Event Registration in your Workspace

ALIASES
  $ aio event reg get
```

## `aio event reg list`

List your Event Registrations in your Workspace

```
USAGE
  $ aio event reg list [--help] [-v] [--version] [-j | -y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  List your Event Registrations in your Workspace

ALIASES
  $ aio event registration ls
  $ aio event reg list
  $ aio event reg ls
```

## `aio event reg ls`

List your Event Registrations in your Workspace

```
USAGE
  $ aio event reg ls [--help] [-v] [--version] [-j | -y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  List your Event Registrations in your Workspace

ALIASES
  $ aio event registration ls
  $ aio event reg list
  $ aio event reg ls
```

## `aio event registration`

Manage your Adobe I/O Events Registrations

```
USAGE
  $ aio event registration [--help] [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Manage your Adobe I/O Events Registrations

ALIASES
  $ aio event reg
```

## `aio event registration create BODYJSONFILE`

Create a new Event Registration in your Workspace

```
USAGE
  $ aio event registration create BODYJSONFILE [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  BODYJSONFILE
      Path to a file in JSON format with the information to create a new Event Registration.
      The JSON should follow the following format:
      {
      "name": "<event registration name>",
      "description": "<event registration description>",
      "delivery_type": "webhook|webhook_batch|journal",
      "webhook_url": "<webhook URL responding to challenge>",
      "events_of_interest": [{
      "provider_id": "<event provider id>",
      "event_code": "<event provider event_code metadata>"
      }, { /* ...more events */ }]
      }

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Create a new Event Registration in your Workspace

ALIASES
  $ aio event reg create
```

## `aio event registration delete REGISTRATIONID`

Delete Registration

```
USAGE
  $ aio event registration delete REGISTRATIONID [--help] [-v] [--version]

ARGUMENTS
  REGISTRATIONID  The requested registration ID

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Delete Registration

ALIASES
  $ aio event reg delete
```

## `aio event registration get REGISTRATIONID`

Get an Event Registration in your Workspace

```
USAGE
  $ aio event registration get REGISTRATIONID [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  REGISTRATIONID  The requested registration ID

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Get an Event Registration in your Workspace

ALIASES
  $ aio event reg get
```

## `aio event registration list`

List your Event Registrations in your Workspace

```
USAGE
  $ aio event registration list [--help] [-v] [--version] [-j | -y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  List your Event Registrations in your Workspace

ALIASES
  $ aio event registration ls
  $ aio event reg list
  $ aio event reg ls
```

## `aio event registration ls`

List your Event Registrations in your Workspace

```
USAGE
  $ aio event registration ls [--help] [-v] [--version] [-j | -y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  List your Event Registrations in your Workspace

ALIASES
  $ aio event registration ls
  $ aio event reg list
  $ aio event reg ls
```

## `aio help [COMMANDS]`

Display help for aio.

```
USAGE
  $ aio help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for aio.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.13/src/commands/help.ts)_

## `aio info`

Display dev environment version information

```
USAGE
  $ aio info [-y | -j]

FLAGS
  -j, --json  output raw json
  -y, --yml   output yml

DESCRIPTION
  Display dev environment version information
```

_See code: [@adobe/aio-cli-plugin-info](https://github.com/adobe/aio-cli-plugin-info/blob/3.0.1/src/commands/info.js)_

## `aio login`

Log in with a certain Adobe IMS context and returns the access token.

```
USAGE
  $ aio login [--debug <value>] [-v] [-l | -g] [-c <value>] [-f] [-d] [-b] [-o]

FLAGS
  -b, --bare         print access token only
  -c, --ctx=<value>  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -d, --decode       Decode and display access token data
  -f, --force        Force logging in. This causes a forced logout on the context first and makes sure to not use any
                     cached data when calling the plugin.
  -g, --global       global config
  -l, --local        local config
  -o, --[no-]open    Open the default browser to complete the login
  -v, --verbose      Verbose output
  --debug=<value>    Debug level output

DESCRIPTION
  Log in with a certain Adobe IMS context and returns the access token.

  If the Adobe IMS context already has a valid access token set (valid meaning
  at least 10 minutes before expiry), that token is returned.

  Otherwise, if the Adobe IMS context has a valid refresh token set (valid
  meaning at least 10 minutes before expiry) that refresh token is
  exchanged for an access token before returning the access token.

  Lastly, if the Adobe IMS context properties are supported by one of the
  Adobe IMS login plugins, that login plugin is called to guide through
  the IMS login process.

  The currently supported Adobe IMS login plugins are:

  * aio-lib-ims-jwt for JWT token based login supporting
  Adobe I/O Console service integrations.
  * aio-lib-ims-oauth for browser based OAuth2 login. This
  plugin will launch the default browser to guide the user through the
  login process. The plugin itself will *never* see the user's
  password but only receive the authorization token after the
  user has authenticated with Adobe IMS.


ALIASES
  $ aio login
```

## `aio logout`

Log out the current or a named Adobe IMS context.

```
USAGE
  $ aio logout [--debug <value>] [-v] [-l | -g] [-c <value>] [-f]

FLAGS
  -c, --ctx=<value>  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -f, --[no-]force   Invalidate the refresh token as well as all access tokens.
                     Otherwise only the access token is invalidated. For Adobe IMS
                     contexts not supporting refresh tokens, this flag has no
                     effect.
  -g, --global       global config
  -l, --local        local config
  -v, --verbose      Verbose output
  --debug=<value>    Debug level output

DESCRIPTION
  Log out the current or a named Adobe IMS context.

  This command can be called multiple times on the same Adobe IMS context with
  out causing any errors. The assumption is that after calling this command
  without an error, the Adobe IMS context's access and refresh tokens have been
  invalidated and removed from persistent storage. Repeatedly calling this
  command will just do nothing.


ALIASES
  $ aio logout
```

## `aio open`

Open the developer console for the selected Organization, Project and Workspace

```
USAGE
  $ aio open [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Open the developer console for the selected Organization, Project and Workspace

ALIASES
  $ aio open
```

## `aio plugins`

List installed plugins.

```
USAGE
  $ aio plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ aio plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `aio plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ aio plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ aio plugins add

EXAMPLES
  $ aio plugins:install myplugin 

  $ aio plugins:install https://github.com/someuser/someplugin

  $ aio plugins:install someuser/someplugin
```

## `aio plugins discover`

Discover plugins to install

```
USAGE
  $ aio plugins discover [-i] [-f date|name] [-o asc|desc]

FLAGS
  -f, --sort-field=<option>  [default: date] which column to sort, use the sort-order flag to specify sort direction
                             <options: date|name>
  -i, --install              interactive install mode
  -o, --sort-order=<option>  [default: desc] sort order for a column, use the sort-field flag to specify which column to
                             sort
                             <options: asc|desc>

DESCRIPTION
  Discover plugins to install
  To install a plugin, run 'aio plugins install NAME'


ALIASES
  $ aio plugins discover
```

## `aio plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ aio plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ aio plugins:inspect myplugin
```

## `aio plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ aio plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ aio plugins add

EXAMPLES
  $ aio plugins:install myplugin 

  $ aio plugins:install https://github.com/someuser/someplugin

  $ aio plugins:install someuser/someplugin
```

## `aio plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ aio plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ aio plugins:link myplugin
```

## `aio plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ aio plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aio plugins unlink
  $ aio plugins remove
```

## `aio plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ aio plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aio plugins unlink
  $ aio plugins remove
```

## `aio plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ aio plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aio plugins unlink
  $ aio plugins remove
```

## `aio plugins update`

Update installed plugins.

```
USAGE
  $ aio plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `aio report`

Report an issue with the CLI or submit a feature request

```
USAGE
  $ aio report [-b | -f]

FLAGS
  -b, --bug      report an issue
  -f, --feature  request a feature

DESCRIPTION
  Report an issue with the CLI or submit a feature request
```

_See code: [@adobe/aio-cli-plugin-info](https://github.com/adobe/aio-cli-plugin-info/blob/3.0.1/src/commands/report.js)_

## `aio rollback`

Clears all installed plugins.

```
USAGE
  $ aio rollback [-i] [-l] [-c] [-v]

FLAGS
  -c, --[no-]confirm  confirmation needed for clear (defaults to true)
  -i, --interactive   interactive clear mode
  -l, --list          list plugins that will be cleared
  -v, --verbose       Verbose output

DESCRIPTION
  Clears all installed plugins.
```

_See code: [src/commands/rollback.ts](https://github.com/adobe/aio-cli/blob/9.4.1/src/commands/rollback.ts)_

## `aio rt`

Execute runtime commands

```
USAGE
  $ aio rt [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Execute runtime commands

ALIASES
  $ aio rt
```

## `aio rt action`

Manage your actions

```
USAGE
  $ aio rt action [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your actions

ALIASES
  $ aio rt action
```

## `aio rt action create ACTIONNAME [ACTIONPATH]`

Creates an Action

```
USAGE
  $ aio rt action create ACTIONNAME [ACTIONPATH] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost
    <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [--copy <value>] [-e <value>]
    [--web-secure <value> --web true|yes|false|no|raw] [-P <value>] [-E <value>] [-t <value>] [-m <value>] [-l <value>]
    [--kind <value>] [-a <value>] [-A <value>] [--sequence <value>] [--docker <value>] [--main <value>] [--binary]
    [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -E, --env-file=<value>         FILE containing environment variables in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -e, --env=<value>...           environment values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -l, --logsize=<value>          the maximum log size LIMIT in MB for the action (default 10, min: 0, max: 10)
  -m, --memory=<value>           the maximum memory LIMIT in MB for the action (default 256, min: 128, max: 4096)
  -p, --param=<value>...         parameter values in KEY VALUE format
  -t, --timeout=<value>          the timeout LIMIT in milliseconds after which the action is terminated (default 60000,
                                 min: 100, max: 3600000)
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --binary                       treat code artifact as binary
  --cert=<value>                 client cert
  --copy=<value>                 copy an existing action
  --debug=<value>                Debug level output
  --docker=<value>               [Restricted Access] use provided Docker image (a path on DockerHub) to run the action
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --kind=<value>                 the KIND of the action runtime (example: swift:default, nodejs:default)
  --main=<value>                 the name of the action entry point (function or fully-qualified method name when
                                 applicable)
  --sequence=<value>             treat ACTION as comma separated sequence of actions to invoke
  --version                      Show version
  --web=<option>                 treat ACTION as a web action or as a raw HTTP web action
                                 <options: true|yes|false|no|raw>
  --web-secure=<value>           secure the web action (valid values are true, false, or any string)

DESCRIPTION
  Creates an Action

ALIASES
  $ aio rt action create
```

## `aio rt action del ACTIONNAME`

Deletes an Action

```
USAGE
  $ aio rt action del ACTIONNAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Deletes an Action

ALIASES
  $ aio runtime action del
  $ aio rt action delete
  $ aio rt action del
```

## `aio rt action delete ACTIONNAME`

Deletes an Action

```
USAGE
  $ aio rt action delete ACTIONNAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Deletes an Action

ALIASES
  $ aio runtime action del
  $ aio rt action delete
  $ aio rt action del
```

## `aio rt action get ACTIONNAME`

Retrieves an Action

```
USAGE
  $ aio rt action get ACTIONNAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-r] [-c] [--save] [--save-as <value>]

FLAGS
  -c, --code            show action code (only works if code is not a zip file)
  -i, --insecure        bypass certificate check
  -r, --url             get action url
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --save                save action code to file corresponding with action name
  --save-as=<value>     file to save action code to
  --version             Show version

DESCRIPTION
  Retrieves an Action

ALIASES
  $ aio rt action get
```

## `aio rt action invoke ACTIONNAME`

Invokes an Action

```
USAGE
  $ aio rt action invoke ACTIONNAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-b] [-r]

FLAGS
  -P, --param-file=<value>  FILE containing parameter values in JSON format
  -b, --blocking            blocking invoke
  -i, --insecure            bypass certificate check
  -p, --param=<value>...    parameter values in KEY VALUE format
  -r, --result              blocking invoke; show only activation result (unless there is a failure)
  -u, --auth=<value>        whisk auth
  -v, --verbose             Verbose output
  --apihost=<value>         whisk API host
  --apiversion=<value>      whisk API version
  --cert=<value>            client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key=<value>             client key
  --version                 Show version

DESCRIPTION
  Invokes an Action

ALIASES
  $ aio rt action invoke
```

## `aio rt action list [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio rt action list [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of actions from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Actions

ALIASES
  $ aio runtime action ls
  $ aio runtime actions list
  $ aio runtime actions ls
  $ aio rt action list
  $ aio rt actions list
  $ aio rt action ls
  $ aio rt actions ls
```

## `aio rt action ls [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio rt action ls [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of actions from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Actions

ALIASES
  $ aio runtime action ls
  $ aio runtime actions list
  $ aio runtime actions ls
  $ aio rt action list
  $ aio rt actions list
  $ aio rt action ls
  $ aio rt actions ls
```

## `aio rt action update ACTIONNAME [ACTIONPATH]`

Updates an Action

```
USAGE
  $ aio rt action update ACTIONNAME [ACTIONPATH] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost
    <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [--copy <value>] [-e <value>]
    [--web-secure <value> --web true|yes|false|no|raw] [-P <value>] [-E <value>] [-t <value>] [-m <value>] [-l <value>]
    [--kind <value>] [-a <value>] [-A <value>] [--sequence <value>] [--docker <value>] [--main <value>] [--binary]
    [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -E, --env-file=<value>         FILE containing environment variables in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -e, --env=<value>...           environment values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -l, --logsize=<value>          the maximum log size LIMIT in MB for the action (default 10, min: 0, max: 10)
  -m, --memory=<value>           the maximum memory LIMIT in MB for the action (default 256, min: 128, max: 4096)
  -p, --param=<value>...         parameter values in KEY VALUE format
  -t, --timeout=<value>          the timeout LIMIT in milliseconds after which the action is terminated (default 60000,
                                 min: 100, max: 3600000)
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --binary                       treat code artifact as binary
  --cert=<value>                 client cert
  --copy=<value>                 copy an existing action
  --debug=<value>                Debug level output
  --docker=<value>               [Restricted Access] use provided Docker image (a path on DockerHub) to run the action
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --kind=<value>                 the KIND of the action runtime (example: swift:default, nodejs:default)
  --main=<value>                 the name of the action entry point (function or fully-qualified method name when
                                 applicable)
  --sequence=<value>             treat ACTION as comma separated sequence of actions to invoke
  --version                      Show version
  --web=<option>                 treat ACTION as a web action or as a raw HTTP web action
                                 <options: true|yes|false|no|raw>
  --web-secure=<value>           secure the web action (valid values are true, false, or any string)

DESCRIPTION
  Updates an Action

ALIASES
  $ aio rt action update
```

## `aio rt actions list [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio rt actions list [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of actions from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Actions

ALIASES
  $ aio runtime action ls
  $ aio runtime actions list
  $ aio runtime actions ls
  $ aio rt action list
  $ aio rt actions list
  $ aio rt action ls
  $ aio rt actions ls
```

## `aio rt actions ls [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio rt actions ls [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of actions from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Actions

ALIASES
  $ aio runtime action ls
  $ aio runtime actions list
  $ aio runtime actions ls
  $ aio rt action list
  $ aio rt actions list
  $ aio rt action ls
  $ aio rt actions ls
```

## `aio rt activation`

Manage your activations

```
USAGE
  $ aio rt activation [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your activations

ALIASES
  $ aio rt activation
```

## `aio rt activation get [ACTIVATIONID]`

Retrieves an Activation

```
USAGE
  $ aio rt activation get [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l] [-g]

FLAGS
  -g, --logs            emit only the logs, stripped of time stamps and stream identifier
  -i, --insecure        bypass certificate check
  -l, --last            retrieves the most recent activation
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Retrieves an Activation

ALIASES
  $ aio rt activation get
```

## `aio rt activation list [ACTION_NAME]`

Lists all the Activations

```
USAGE
  $ aio rt activation list [ACTION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations (min: 0, max: 50)
  -s, --skip=<value>    exclude the first SKIP number of activations from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --since=<value>       return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan
                        1970
  --upto=<value>        return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan
                        1970
  --version             Show version

DESCRIPTION
  Lists all the Activations

ALIASES
  $ aio runtime activations list
  $ aio runtime activation ls
  $ aio runtime activations ls
  $ aio rt activation list
  $ aio rt activation ls
  $ aio rt activations list
  $ aio rt activations ls
```

## `aio rt activation log [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio rt activation log [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-d |  | [-a <value> | -m | -p <value>]] [-r] [--limit
    <value> | -l] [-t | -w | -o]

FLAGS
  -a, --action=<value>   Fetch logs for a specific action
  -d, --deployed         Fetch logs for all actions deployed under a specific package
  -i, --insecure         bypass certificate check
  -l, --last             retrieves the most recent activation logs
  -m, --manifest         Fetch logs for all actions in the manifest
  -o, --poll             Fetch logs continuously
  -p, --package=<value>  Fetch logs for a specific package in the manifest
  -r, --strip            strip timestamp information and output first line only
  -t, --tail             Fetch logs continuously
  -u, --auth=<value>     whisk auth
  -v, --verbose          Verbose output
  -w, --watch            Fetch logs continuously
  --apihost=<value>      whisk API host
  --apiversion=<value>   whisk API version
  --cert=<value>         client cert
  --debug=<value>        Debug level output
  --help                 Show help
  --key=<value>          client key
  --limit=<value>        return logs only from last LIMIT number of activations (min: 0, max: 50)
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime activation log
  $ aio runtime log
  $ aio runtime logs
  $ aio rt activation logs
  $ aio rt activation log
  $ aio rt log
  $ aio rt logs
```

## `aio rt activation logs [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio rt activation logs [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-d |  | [-a <value> | -m | -p <value>]] [-r] [--limit
    <value> | -l] [-t | -w | -o]

FLAGS
  -a, --action=<value>   Fetch logs for a specific action
  -d, --deployed         Fetch logs for all actions deployed under a specific package
  -i, --insecure         bypass certificate check
  -l, --last             retrieves the most recent activation logs
  -m, --manifest         Fetch logs for all actions in the manifest
  -o, --poll             Fetch logs continuously
  -p, --package=<value>  Fetch logs for a specific package in the manifest
  -r, --strip            strip timestamp information and output first line only
  -t, --tail             Fetch logs continuously
  -u, --auth=<value>     whisk auth
  -v, --verbose          Verbose output
  -w, --watch            Fetch logs continuously
  --apihost=<value>      whisk API host
  --apiversion=<value>   whisk API version
  --cert=<value>         client cert
  --debug=<value>        Debug level output
  --help                 Show help
  --key=<value>          client key
  --limit=<value>        return logs only from last LIMIT number of activations (min: 0, max: 50)
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime activation log
  $ aio runtime log
  $ aio runtime logs
  $ aio rt activation logs
  $ aio rt activation log
  $ aio rt log
  $ aio rt logs
```

## `aio rt activation ls [ACTION_NAME]`

Lists all the Activations

```
USAGE
  $ aio rt activation ls [ACTION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations (min: 0, max: 50)
  -s, --skip=<value>    exclude the first SKIP number of activations from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --since=<value>       return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan
                        1970
  --upto=<value>        return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan
                        1970
  --version             Show version

DESCRIPTION
  Lists all the Activations

ALIASES
  $ aio runtime activations list
  $ aio runtime activation ls
  $ aio runtime activations ls
  $ aio rt activation list
  $ aio rt activation ls
  $ aio rt activations list
  $ aio rt activations ls
```

## `aio rt activation result [ACTIVATIONID]`

Retrieves the Results for an Activation

```
USAGE
  $ aio rt activation result [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l]

FLAGS
  -i, --insecure        bypass certificate check
  -l, --last            retrieves the most recent activation result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Retrieves the Results for an Activation

ALIASES
  $ aio rt activation result
```

## `aio rt activations list [ACTION_NAME]`

Lists all the Activations

```
USAGE
  $ aio rt activations list [ACTION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations (min: 0, max: 50)
  -s, --skip=<value>    exclude the first SKIP number of activations from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --since=<value>       return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan
                        1970
  --upto=<value>        return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan
                        1970
  --version             Show version

DESCRIPTION
  Lists all the Activations

ALIASES
  $ aio runtime activations list
  $ aio runtime activation ls
  $ aio runtime activations ls
  $ aio rt activation list
  $ aio rt activation ls
  $ aio rt activations list
  $ aio rt activations ls
```

## `aio rt activations ls [ACTION_NAME]`

Lists all the Activations

```
USAGE
  $ aio rt activations ls [ACTION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations (min: 0, max: 50)
  -s, --skip=<value>    exclude the first SKIP number of activations from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --since=<value>       return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan
                        1970
  --upto=<value>        return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan
                        1970
  --version             Show version

DESCRIPTION
  Lists all the Activations

ALIASES
  $ aio runtime activations list
  $ aio runtime activation ls
  $ aio runtime activations ls
  $ aio rt activation list
  $ aio rt activation ls
  $ aio rt activations list
  $ aio rt activations ls
```

## `aio rt api`

Manage your api routes

```
USAGE
  $ aio rt api [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your api routes

ALIASES
  $ aio rt api
  $ aio runtime route
  $ aio rt route
```

## `aio rt api create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`

create a new api route

```
USAGE
  $ aio rt api create [BASEPATH] [RELPATH] [APIVERB] [ACTION] [--cert <value>] [--key <value>] [--apiversion
    <value>] [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-n <value> | -c <value>]
    [-r html|http|json|text|svg|json | ]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb
  ACTION    The action to call

FLAGS
  -c, --config-file=<value>     file containing API configuration in swagger JSON format
  -i, --insecure                bypass certificate check
  -n, --apiname=<value>         Friendly name of the API; ignored when CFG_FILE is specified (default BASE_PATH)
  -r, --response-type=<option>  [default: json] Set the web action response TYPE.
                                <options: html|http|json|text|svg|json>
  -u, --auth=<value>            whisk auth
  -v, --verbose                 Verbose output
  --apihost=<value>             whisk API host
  --apiversion=<value>          whisk API version
  --cert=<value>                client cert
  --debug=<value>               Debug level output
  --help                        Show help
  --key=<value>                 client key
  --version                     Show version

DESCRIPTION
  create a new api route

ALIASES
  $ aio runtime route create
  $ aio rt route create
  $ aio rt api create
```

## `aio rt api delete BASEPATHORAPINAME [RELPATH] [APIVERB]`

delete an API

```
USAGE
  $ aio rt api delete BASEPATHORAPINAME [RELPATH] [APIVERB] [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name
  RELPATH            The path of the api relative to the base path
  APIVERB            (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  delete an API

ALIASES
  $ aio runtime route delete
  $ aio rt route delete
  $ aio rt api delete
```

## `aio rt api get BASEPATHORAPINAME`

get API details

```
USAGE
  $ aio rt api get BASEPATHORAPINAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  get API details

ALIASES
  $ aio runtime route get
  $ aio rt route get
  $ aio rt api get
```

## `aio rt api list [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio rt api list [BASEPATH] [RELPATH] [APIVERB] [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--json]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of triggers
  -s, --skip=<value>    exclude the first SKIP number of triggers from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  list route/apis for Adobe I/O Runtime

ALIASES
  $ aio runtime api ls
  $ aio runtime route list
  $ aio runtime route ls
  $ aio rt api list
  $ aio rt api ls
  $ aio rt route list
  $ aio rt route ls
```

## `aio rt api ls [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio rt api ls [BASEPATH] [RELPATH] [APIVERB] [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--json]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of triggers
  -s, --skip=<value>    exclude the first SKIP number of triggers from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  list route/apis for Adobe I/O Runtime

ALIASES
  $ aio runtime api ls
  $ aio runtime route list
  $ aio runtime route ls
  $ aio rt api list
  $ aio rt api ls
  $ aio rt route list
  $ aio rt route ls
```

## `aio rt deploy`

The Runtime Deployment Tool

```
USAGE
  $ aio rt deploy [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [-m <value>] [-d <value>] [--param <value>] [-P <value>]

FLAGS
  -P, --param-file=<value>  FILE containing parameter values in JSON format
  -d, --deployment=<value>  the path to the deployment file
  -i, --insecure            bypass certificate check
  -m, --manifest=<value>    the manifest file location
  -u, --auth=<value>        whisk auth
  -v, --verbose             Verbose output
  --apihost=<value>         whisk API host
  --apiversion=<value>      whisk API version
  --cert=<value>            client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key=<value>             client key
  --param=<value>...        parameter values in KEY VALUE format
  --version                 Show version

DESCRIPTION
  The Runtime Deployment Tool

ALIASES
  $ aio rt deploy
```

## `aio rt deploy export`

Exports managed project assets from Runtime to manifest and function files

```
USAGE
  $ aio rt deploy export -m <value> --projectname <value> [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure          bypass certificate check
  -m, --manifest=<value>  (required) the manifest file location
  -u, --auth=<value>      whisk auth
  -v, --verbose           Verbose output
  --apihost=<value>       whisk API host
  --apiversion=<value>    whisk API version
  --cert=<value>          client cert
  --debug=<value>         Debug level output
  --help                  Show help
  --key=<value>           client key
  --projectname=<value>   (required) the name of the project to be undeployed
  --version               Show version

DESCRIPTION
  Exports managed project assets from Runtime to manifest and function files

ALIASES
  $ aio rt deploy export
```

## `aio rt deploy report`

Provides a summary report of Runtime assets being deployed/undeployed based on manifest/deployment YAML

```
USAGE
  $ aio rt deploy report [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [-m <value>] [-d <value>]

FLAGS
  -d, --deployment=<value>  the deployment file location
  -i, --insecure            bypass certificate check
  -m, --manifest=<value>    the manifest file location
  -u, --auth=<value>        whisk auth
  -v, --verbose             Verbose output
  --apihost=<value>         whisk API host
  --apiversion=<value>      whisk API version
  --cert=<value>            client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key=<value>             client key
  --version                 Show version

DESCRIPTION
  Provides a summary report of Runtime assets being deployed/undeployed based on manifest/deployment YAML

ALIASES
  $ aio rt deploy report
```

## `aio rt deploy sync`

A tool to sync deployment and undeployment of Runtime packages using a manifest and optional deployment files using YAML

```
USAGE
  $ aio rt deploy sync [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [-m <value>] [-d <value>]

FLAGS
  -d, --deployment=<value>  the path to the deployment file
  -i, --insecure            bypass certificate check
  -m, --manifest=<value>    the manifest file location
  -u, --auth=<value>        whisk auth
  -v, --verbose             Verbose output
  --apihost=<value>         whisk API host
  --apiversion=<value>      whisk API version
  --cert=<value>            client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key=<value>             client key
  --version                 Show version

DESCRIPTION
  A tool to sync deployment and undeployment of Runtime packages using a manifest and optional deployment files using
  YAML

ALIASES
  $ aio rt deploy sync
```

## `aio rt deploy undeploy`

Undeploy removes Runtime assets which were deployed from the manifest and deployment YAML

```
USAGE
  $ aio rt deploy undeploy [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [-m <value>] [--projectname <value>]

FLAGS
  -i, --insecure          bypass certificate check
  -m, --manifest=<value>  the manifest file location
  -u, --auth=<value>      whisk auth
  -v, --verbose           Verbose output
  --apihost=<value>       whisk API host
  --apiversion=<value>    whisk API version
  --cert=<value>          client cert
  --debug=<value>         Debug level output
  --help                  Show help
  --key=<value>           client key
  --projectname=<value>   the name of the project to be undeployed
  --version               Show version

DESCRIPTION
  Undeploy removes Runtime assets which were deployed from the manifest and deployment YAML

ALIASES
  $ aio rt deploy undeploy
```

## `aio rt deploy version`

Prints the version number of aio runtime deploy

```
USAGE
  $ aio rt deploy version [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Prints the version number of aio runtime deploy

ALIASES
  $ aio rt deploy version
```

## `aio rt get`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio rt get [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json] [--name-sort] [-n]

FLAGS
  -i, --insecure        bypass certificate check
  -n, --name            sort results by name
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Get triggers, actions, and rules in the registry for namespace

ALIASES
  $ aio rt get
  $ aio runtime list
  $ aio rt list
  $ aio runtime ls
  $ aio rt ls
```

## `aio rt list`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio rt list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json] [--name-sort] [-n]

FLAGS
  -i, --insecure        bypass certificate check
  -n, --name            sort results by name
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Get triggers, actions, and rules in the registry for namespace

ALIASES
  $ aio rt get
  $ aio runtime list
  $ aio rt list
  $ aio runtime ls
  $ aio rt ls
```

## `aio rt log [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio rt log [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-d |  | [-a <value> | -m | -p <value>]] [-r] [--limit
    <value> | -l] [-t | -w | -o]

FLAGS
  -a, --action=<value>   Fetch logs for a specific action
  -d, --deployed         Fetch logs for all actions deployed under a specific package
  -i, --insecure         bypass certificate check
  -l, --last             retrieves the most recent activation logs
  -m, --manifest         Fetch logs for all actions in the manifest
  -o, --poll             Fetch logs continuously
  -p, --package=<value>  Fetch logs for a specific package in the manifest
  -r, --strip            strip timestamp information and output first line only
  -t, --tail             Fetch logs continuously
  -u, --auth=<value>     whisk auth
  -v, --verbose          Verbose output
  -w, --watch            Fetch logs continuously
  --apihost=<value>      whisk API host
  --apiversion=<value>   whisk API version
  --cert=<value>         client cert
  --debug=<value>        Debug level output
  --help                 Show help
  --key=<value>          client key
  --limit=<value>        return logs only from last LIMIT number of activations (min: 0, max: 50)
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime activation log
  $ aio runtime log
  $ aio runtime logs
  $ aio rt activation logs
  $ aio rt activation log
  $ aio rt log
  $ aio rt logs
```

## `aio rt logs [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio rt logs [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-d |  | [-a <value> | -m | -p <value>]] [-r] [--limit
    <value> | -l] [-t | -w | -o]

FLAGS
  -a, --action=<value>   Fetch logs for a specific action
  -d, --deployed         Fetch logs for all actions deployed under a specific package
  -i, --insecure         bypass certificate check
  -l, --last             retrieves the most recent activation logs
  -m, --manifest         Fetch logs for all actions in the manifest
  -o, --poll             Fetch logs continuously
  -p, --package=<value>  Fetch logs for a specific package in the manifest
  -r, --strip            strip timestamp information and output first line only
  -t, --tail             Fetch logs continuously
  -u, --auth=<value>     whisk auth
  -v, --verbose          Verbose output
  -w, --watch            Fetch logs continuously
  --apihost=<value>      whisk API host
  --apiversion=<value>   whisk API version
  --cert=<value>         client cert
  --debug=<value>        Debug level output
  --help                 Show help
  --key=<value>          client key
  --limit=<value>        return logs only from last LIMIT number of activations (min: 0, max: 50)
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime activation log
  $ aio runtime log
  $ aio runtime logs
  $ aio rt activation logs
  $ aio rt activation log
  $ aio rt log
  $ aio rt logs
```

## `aio rt ls`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio rt ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json] [--name-sort] [-n]

FLAGS
  -i, --insecure        bypass certificate check
  -n, --name            sort results by name
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Get triggers, actions, and rules in the registry for namespace

ALIASES
  $ aio rt get
  $ aio runtime list
  $ aio rt list
  $ aio runtime ls
  $ aio rt ls
```

## `aio rt namespace`

Manage your namespaces

```
USAGE
  $ aio rt namespace [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your namespaces

ALIASES
  $ aio runtime ns
  $ aio rt namespace
  $ aio rt ns
```

## `aio rt namespace lf`

Manage log forwarding settings

```
USAGE
  $ aio rt namespace lf [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage log forwarding settings

ALIASES
  $ aio runtime ns log-forwarding
  $ aio runtime ns lf
  $ aio runtime namespace lf
  $ aio rt namespace log-forwarding
  $ aio rt namespace lf
  $ aio rt ns log-forwarding
  $ aio rt ns lf
```

## `aio rt namespace lf errors`

Get log forwarding errors

```
USAGE
  $ aio rt namespace lf errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio runtime ns log-forwarding errors
  $ aio runtime ns lf errors
  $ aio runtime namespace lf errors
  $ aio rt namespace log-forwarding errors
  $ aio rt namespace lf errors
  $ aio rt ns log-forwarding errors
  $ aio rt ns lf errors
```

## `aio rt namespace lf get`

Get log forwarding destination configuration

```
USAGE
  $ aio rt namespace lf get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio runtime ns log-forwarding get
  $ aio runtime ns lf get
  $ aio runtime namespace lf get
  $ aio rt namespace log-forwarding get
  $ aio rt namespace lf get
  $ aio rt ns log-forwarding get
  $ aio rt ns lf get
```

## `aio rt namespace lf set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio rt namespace lf set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Configure log forwarding destination (interactive)

ALIASES
  $ aio runtime ns log-forwarding set
  $ aio runtime ns lf set
  $ aio runtime namespace lf set
  $ aio rt namespace log-forwarding set
  $ aio rt namespace lf set
  $ aio rt ns log-forwarding set
  $ aio rt ns lf set
```

## `aio rt namespace lf set adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio rt namespace lf set adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

ALIASES
  $ aio runtime ns log-forwarding set adobe-io-runtime
  $ aio runtime ns lf set adobe-io-runtime
  $ aio runtime namespace lf set adobe-io-runtime
  $ aio rt namespace log-forwarding set adobe-io-runtime
  $ aio rt namespace lf set adobe-io-runtime
  $ aio rt ns log-forwarding set adobe-io-runtime
  $ aio rt ns lf set adobe-io-runtime
```

## `aio rt namespace lf set azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio rt namespace lf set azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
    [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --customer-id=<value>  (required) Customer ID
  --debug=<value>        Debug level output
  --help                 Show help
  --key                  client key
  --log-type=<value>     (required) Log type
  --shared-key=<value>   (required) Shared key
  --version              Show version

DESCRIPTION
  Set log forwarding destination to Azure Log Analytics

ALIASES
  $ aio runtime ns log-forwarding set azure-log-analytics
  $ aio runtime ns lf set azure-log-analytics
  $ aio runtime namespace lf set azure-log-analytics
  $ aio rt namespace log-forwarding set azure-log-analytics
  $ aio rt namespace lf set azure-log-analytics
  $ aio rt ns log-forwarding set azure-log-analytics
  $ aio rt ns lf set azure-log-analytics
```

## `aio rt namespace lf set splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio rt namespace lf set splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
    [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --hec-token=<value>  (required) HEC token
  --help               Show help
  --host=<value>       (required) Host
  --index=<value>      (required) Index
  --key                client key
  --port=<value>       (required) Port
  --version            Show version

DESCRIPTION
  Set log forwarding destination to Splunk HEC

ALIASES
  $ aio runtime ns log-forwarding set splunk-hec
  $ aio runtime ns lf set splunk-hec
  $ aio runtime namespace lf set splunk-hec
  $ aio rt namespace log-forwarding set splunk-hec
  $ aio rt namespace lf set splunk-hec
  $ aio rt ns log-forwarding set splunk-hec
  $ aio rt ns lf set splunk-hec
```

## `aio rt namespace list`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio rt namespace list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Lists all of your namespaces for Adobe I/O Runtime

ALIASES
  $ aio runtime namespace ls
  $ aio runtime ns list
  $ aio runtime ns ls
  $ aio rt namespace list
  $ aio rt namespace ls
  $ aio rt ns list
  $ aio rt ns ls
```

## `aio rt namespace log-forwarding`

Manage log forwarding settings

```
USAGE
  $ aio rt namespace log-forwarding [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage log forwarding settings

ALIASES
  $ aio runtime ns log-forwarding
  $ aio runtime ns lf
  $ aio runtime namespace lf
  $ aio rt namespace log-forwarding
  $ aio rt namespace lf
  $ aio rt ns log-forwarding
  $ aio rt ns lf
```

## `aio rt namespace log-forwarding errors`

Get log forwarding errors

```
USAGE
  $ aio rt namespace log-forwarding errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio runtime ns log-forwarding errors
  $ aio runtime ns lf errors
  $ aio runtime namespace lf errors
  $ aio rt namespace log-forwarding errors
  $ aio rt namespace lf errors
  $ aio rt ns log-forwarding errors
  $ aio rt ns lf errors
```

## `aio rt namespace log-forwarding get`

Get log forwarding destination configuration

```
USAGE
  $ aio rt namespace log-forwarding get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio runtime ns log-forwarding get
  $ aio runtime ns lf get
  $ aio runtime namespace lf get
  $ aio rt namespace log-forwarding get
  $ aio rt namespace lf get
  $ aio rt ns log-forwarding get
  $ aio rt ns lf get
```

## `aio rt namespace log-forwarding set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio rt namespace log-forwarding set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Configure log forwarding destination (interactive)

ALIASES
  $ aio runtime ns log-forwarding set
  $ aio runtime ns lf set
  $ aio runtime namespace lf set
  $ aio rt namespace log-forwarding set
  $ aio rt namespace lf set
  $ aio rt ns log-forwarding set
  $ aio rt ns lf set
```

## `aio rt namespace log-forwarding set adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio rt namespace log-forwarding set adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

ALIASES
  $ aio runtime ns log-forwarding set adobe-io-runtime
  $ aio runtime ns lf set adobe-io-runtime
  $ aio runtime namespace lf set adobe-io-runtime
  $ aio rt namespace log-forwarding set adobe-io-runtime
  $ aio rt namespace lf set adobe-io-runtime
  $ aio rt ns log-forwarding set adobe-io-runtime
  $ aio rt ns lf set adobe-io-runtime
```

## `aio rt namespace log-forwarding set azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio rt namespace log-forwarding set azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
    [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --customer-id=<value>  (required) Customer ID
  --debug=<value>        Debug level output
  --help                 Show help
  --key                  client key
  --log-type=<value>     (required) Log type
  --shared-key=<value>   (required) Shared key
  --version              Show version

DESCRIPTION
  Set log forwarding destination to Azure Log Analytics

ALIASES
  $ aio runtime ns log-forwarding set azure-log-analytics
  $ aio runtime ns lf set azure-log-analytics
  $ aio runtime namespace lf set azure-log-analytics
  $ aio rt namespace log-forwarding set azure-log-analytics
  $ aio rt namespace lf set azure-log-analytics
  $ aio rt ns log-forwarding set azure-log-analytics
  $ aio rt ns lf set azure-log-analytics
```

## `aio rt namespace log-forwarding set splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio rt namespace log-forwarding set splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
    [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --hec-token=<value>  (required) HEC token
  --help               Show help
  --host=<value>       (required) Host
  --index=<value>      (required) Index
  --key                client key
  --port=<value>       (required) Port
  --version            Show version

DESCRIPTION
  Set log forwarding destination to Splunk HEC

ALIASES
  $ aio runtime ns log-forwarding set splunk-hec
  $ aio runtime ns lf set splunk-hec
  $ aio runtime namespace lf set splunk-hec
  $ aio rt namespace log-forwarding set splunk-hec
  $ aio rt namespace lf set splunk-hec
  $ aio rt ns log-forwarding set splunk-hec
  $ aio rt ns lf set splunk-hec
```

## `aio rt namespace ls`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio rt namespace ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Lists all of your namespaces for Adobe I/O Runtime

ALIASES
  $ aio runtime namespace ls
  $ aio runtime ns list
  $ aio runtime ns ls
  $ aio rt namespace list
  $ aio rt namespace ls
  $ aio rt ns list
  $ aio rt ns ls
```

## `aio rt ns`

Manage your namespaces

```
USAGE
  $ aio rt ns [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your namespaces

ALIASES
  $ aio runtime ns
  $ aio rt namespace
  $ aio rt ns
```

## `aio rt ns lf`

Manage log forwarding settings

```
USAGE
  $ aio rt ns lf [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage log forwarding settings

ALIASES
  $ aio runtime ns log-forwarding
  $ aio runtime ns lf
  $ aio runtime namespace lf
  $ aio rt namespace log-forwarding
  $ aio rt namespace lf
  $ aio rt ns log-forwarding
  $ aio rt ns lf
```

## `aio rt ns lf errors`

Get log forwarding errors

```
USAGE
  $ aio rt ns lf errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio runtime ns log-forwarding errors
  $ aio runtime ns lf errors
  $ aio runtime namespace lf errors
  $ aio rt namespace log-forwarding errors
  $ aio rt namespace lf errors
  $ aio rt ns log-forwarding errors
  $ aio rt ns lf errors
```

## `aio rt ns lf get`

Get log forwarding destination configuration

```
USAGE
  $ aio rt ns lf get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio runtime ns log-forwarding get
  $ aio runtime ns lf get
  $ aio runtime namespace lf get
  $ aio rt namespace log-forwarding get
  $ aio rt namespace lf get
  $ aio rt ns log-forwarding get
  $ aio rt ns lf get
```

## `aio rt ns lf set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio rt ns lf set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Configure log forwarding destination (interactive)

ALIASES
  $ aio runtime ns log-forwarding set
  $ aio runtime ns lf set
  $ aio runtime namespace lf set
  $ aio rt namespace log-forwarding set
  $ aio rt namespace lf set
  $ aio rt ns log-forwarding set
  $ aio rt ns lf set
```

## `aio rt ns lf set adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio rt ns lf set adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

ALIASES
  $ aio runtime ns log-forwarding set adobe-io-runtime
  $ aio runtime ns lf set adobe-io-runtime
  $ aio runtime namespace lf set adobe-io-runtime
  $ aio rt namespace log-forwarding set adobe-io-runtime
  $ aio rt namespace lf set adobe-io-runtime
  $ aio rt ns log-forwarding set adobe-io-runtime
  $ aio rt ns lf set adobe-io-runtime
```

## `aio rt ns lf set azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio rt ns lf set azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
    [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --customer-id=<value>  (required) Customer ID
  --debug=<value>        Debug level output
  --help                 Show help
  --key                  client key
  --log-type=<value>     (required) Log type
  --shared-key=<value>   (required) Shared key
  --version              Show version

DESCRIPTION
  Set log forwarding destination to Azure Log Analytics

ALIASES
  $ aio runtime ns log-forwarding set azure-log-analytics
  $ aio runtime ns lf set azure-log-analytics
  $ aio runtime namespace lf set azure-log-analytics
  $ aio rt namespace log-forwarding set azure-log-analytics
  $ aio rt namespace lf set azure-log-analytics
  $ aio rt ns log-forwarding set azure-log-analytics
  $ aio rt ns lf set azure-log-analytics
```

## `aio rt ns lf set splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio rt ns lf set splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
    [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --hec-token=<value>  (required) HEC token
  --help               Show help
  --host=<value>       (required) Host
  --index=<value>      (required) Index
  --key                client key
  --port=<value>       (required) Port
  --version            Show version

DESCRIPTION
  Set log forwarding destination to Splunk HEC

ALIASES
  $ aio runtime ns log-forwarding set splunk-hec
  $ aio runtime ns lf set splunk-hec
  $ aio runtime namespace lf set splunk-hec
  $ aio rt namespace log-forwarding set splunk-hec
  $ aio rt namespace lf set splunk-hec
  $ aio rt ns log-forwarding set splunk-hec
  $ aio rt ns lf set splunk-hec
```

## `aio rt ns list`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio rt ns list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Lists all of your namespaces for Adobe I/O Runtime

ALIASES
  $ aio runtime namespace ls
  $ aio runtime ns list
  $ aio runtime ns ls
  $ aio rt namespace list
  $ aio rt namespace ls
  $ aio rt ns list
  $ aio rt ns ls
```

## `aio rt ns log-forwarding`

Manage log forwarding settings

```
USAGE
  $ aio rt ns log-forwarding [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage log forwarding settings

ALIASES
  $ aio runtime ns log-forwarding
  $ aio runtime ns lf
  $ aio runtime namespace lf
  $ aio rt namespace log-forwarding
  $ aio rt namespace lf
  $ aio rt ns log-forwarding
  $ aio rt ns lf
```

## `aio rt ns log-forwarding errors`

Get log forwarding errors

```
USAGE
  $ aio rt ns log-forwarding errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio runtime ns log-forwarding errors
  $ aio runtime ns lf errors
  $ aio runtime namespace lf errors
  $ aio rt namespace log-forwarding errors
  $ aio rt namespace lf errors
  $ aio rt ns log-forwarding errors
  $ aio rt ns lf errors
```

## `aio rt ns log-forwarding get`

Get log forwarding destination configuration

```
USAGE
  $ aio rt ns log-forwarding get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio runtime ns log-forwarding get
  $ aio runtime ns lf get
  $ aio runtime namespace lf get
  $ aio rt namespace log-forwarding get
  $ aio rt namespace lf get
  $ aio rt ns log-forwarding get
  $ aio rt ns lf get
```

## `aio rt ns log-forwarding set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio rt ns log-forwarding set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Configure log forwarding destination (interactive)

ALIASES
  $ aio runtime ns log-forwarding set
  $ aio runtime ns lf set
  $ aio runtime namespace lf set
  $ aio rt namespace log-forwarding set
  $ aio rt namespace lf set
  $ aio rt ns log-forwarding set
  $ aio rt ns lf set
```

## `aio rt ns log-forwarding set adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio rt ns log-forwarding set adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

ALIASES
  $ aio runtime ns log-forwarding set adobe-io-runtime
  $ aio runtime ns lf set adobe-io-runtime
  $ aio runtime namespace lf set adobe-io-runtime
  $ aio rt namespace log-forwarding set adobe-io-runtime
  $ aio rt namespace lf set adobe-io-runtime
  $ aio rt ns log-forwarding set adobe-io-runtime
  $ aio rt ns lf set adobe-io-runtime
```

## `aio rt ns log-forwarding set azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio rt ns log-forwarding set azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
    [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --customer-id=<value>  (required) Customer ID
  --debug=<value>        Debug level output
  --help                 Show help
  --key                  client key
  --log-type=<value>     (required) Log type
  --shared-key=<value>   (required) Shared key
  --version              Show version

DESCRIPTION
  Set log forwarding destination to Azure Log Analytics

ALIASES
  $ aio runtime ns log-forwarding set azure-log-analytics
  $ aio runtime ns lf set azure-log-analytics
  $ aio runtime namespace lf set azure-log-analytics
  $ aio rt namespace log-forwarding set azure-log-analytics
  $ aio rt namespace lf set azure-log-analytics
  $ aio rt ns log-forwarding set azure-log-analytics
  $ aio rt ns lf set azure-log-analytics
```

## `aio rt ns log-forwarding set splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio rt ns log-forwarding set splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
    [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --hec-token=<value>  (required) HEC token
  --help               Show help
  --host=<value>       (required) Host
  --index=<value>      (required) Index
  --key                client key
  --port=<value>       (required) Port
  --version            Show version

DESCRIPTION
  Set log forwarding destination to Splunk HEC

ALIASES
  $ aio runtime ns log-forwarding set splunk-hec
  $ aio runtime ns lf set splunk-hec
  $ aio runtime namespace lf set splunk-hec
  $ aio rt namespace log-forwarding set splunk-hec
  $ aio rt namespace lf set splunk-hec
  $ aio rt ns log-forwarding set splunk-hec
  $ aio rt ns lf set splunk-hec
```

## `aio rt ns ls`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio rt ns ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Lists all of your namespaces for Adobe I/O Runtime

ALIASES
  $ aio runtime namespace ls
  $ aio runtime ns list
  $ aio runtime ns ls
  $ aio rt namespace list
  $ aio rt namespace ls
  $ aio rt ns list
  $ aio rt ns ls
```

## `aio rt package`

Manage your packages

```
USAGE
  $ aio rt package [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your packages

ALIASES
  $ aio runtime pkg
  $ aio rt package
  $ aio rt pkg
```

## `aio rt package bind PACKAGENAME BINDPACKAGENAME`

Bind parameters to a package

```
USAGE
  $ aio rt package bind PACKAGENAME BINDPACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --version                      Show version

DESCRIPTION
  Bind parameters to a package

ALIASES
  $ aio runtime pkg bind
  $ aio rt package bind
  $ aio rt pkg bind
```

## `aio rt package create PACKAGENAME`

Creates a Package

```
USAGE
  $ aio rt package create PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --shared=<option>              parameter to be passed to indicate whether package is shared or private
                                 <options: true|yes|false|no>
  --version                      Show version

DESCRIPTION
  Creates a Package

ALIASES
  $ aio runtime pkg create
  $ aio rt package create
  $ aio rt pkg create
```

## `aio rt package delete PACKAGENAME`

Deletes a Package

```
USAGE
  $ aio rt package delete PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [--json] [-r]

FLAGS
  -i, --insecure        bypass certificate check
  -r, --recursive       Deletes all associated actions (and rules & triggers associated with the actions)
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Deletes a Package

ALIASES
  $ aio runtime pkg delete
  $ aio rt package delete
  $ aio rt pkg delete
```

## `aio rt package get PACKAGENAME`

Retrieves a Package

```
USAGE
  $ aio rt package get PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Retrieves a Package

ALIASES
  $ aio runtime pkg get
  $ aio rt package get
  $ aio rt pkg get
```

## `aio rt package list [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio rt package list [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of packages from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Packages

ALIASES
  $ aio runtime package ls
  $ aio runtime pkg list
  $ aio runtime pkg ls
  $ aio rt package list
  $ aio rt package ls
  $ aio rt pkg list
  $ aio rt pkg ls
```

## `aio rt package ls [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio rt package ls [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of packages from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Packages

ALIASES
  $ aio runtime package ls
  $ aio runtime pkg list
  $ aio runtime pkg ls
  $ aio rt package list
  $ aio rt package ls
  $ aio rt pkg list
  $ aio rt pkg ls
```

## `aio rt package update PACKAGENAME`

Updates a Package

```
USAGE
  $ aio rt package update PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --shared=<option>              parameter to be passed to indicate whether package is shared or private
                                 <options: true|yes|false|no>
  --version                      Show version

DESCRIPTION
  Updates a Package

ALIASES
  $ aio runtime pkg update
  $ aio rt package update
  $ aio rt pkg update
```

## `aio rt pkg`

Manage your packages

```
USAGE
  $ aio rt pkg [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your packages

ALIASES
  $ aio runtime pkg
  $ aio rt package
  $ aio rt pkg
```

## `aio rt pkg bind PACKAGENAME BINDPACKAGENAME`

Bind parameters to a package

```
USAGE
  $ aio rt pkg bind PACKAGENAME BINDPACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --version                      Show version

DESCRIPTION
  Bind parameters to a package

ALIASES
  $ aio runtime pkg bind
  $ aio rt package bind
  $ aio rt pkg bind
```

## `aio rt pkg create PACKAGENAME`

Creates a Package

```
USAGE
  $ aio rt pkg create PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --shared=<option>              parameter to be passed to indicate whether package is shared or private
                                 <options: true|yes|false|no>
  --version                      Show version

DESCRIPTION
  Creates a Package

ALIASES
  $ aio runtime pkg create
  $ aio rt package create
  $ aio rt pkg create
```

## `aio rt pkg delete PACKAGENAME`

Deletes a Package

```
USAGE
  $ aio rt pkg delete PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [--json] [-r]

FLAGS
  -i, --insecure        bypass certificate check
  -r, --recursive       Deletes all associated actions (and rules & triggers associated with the actions)
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Deletes a Package

ALIASES
  $ aio runtime pkg delete
  $ aio rt package delete
  $ aio rt pkg delete
```

## `aio rt pkg get PACKAGENAME`

Retrieves a Package

```
USAGE
  $ aio rt pkg get PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Retrieves a Package

ALIASES
  $ aio runtime pkg get
  $ aio rt package get
  $ aio rt pkg get
```

## `aio rt pkg list [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio rt pkg list [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of packages from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Packages

ALIASES
  $ aio runtime package ls
  $ aio runtime pkg list
  $ aio runtime pkg ls
  $ aio rt package list
  $ aio rt package ls
  $ aio rt pkg list
  $ aio rt pkg ls
```

## `aio rt pkg ls [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio rt pkg ls [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of packages from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Packages

ALIASES
  $ aio runtime package ls
  $ aio runtime pkg list
  $ aio runtime pkg ls
  $ aio rt package list
  $ aio rt package ls
  $ aio rt pkg list
  $ aio rt pkg ls
```

## `aio rt pkg update PACKAGENAME`

Updates a Package

```
USAGE
  $ aio rt pkg update PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --shared=<option>              parameter to be passed to indicate whether package is shared or private
                                 <options: true|yes|false|no>
  --version                      Show version

DESCRIPTION
  Updates a Package

ALIASES
  $ aio runtime pkg update
  $ aio rt package update
  $ aio rt pkg update
```

## `aio rt prop`

Execute property commands

```
USAGE
  $ aio rt prop [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Execute property commands

ALIASES
  $ aio runtime prop
  $ aio rt prop
  $ aio rt property
```

## `aio rt prop get`

get property

```
USAGE
  $ aio rt prop get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace] [--all] [--apibuild] [--apibuildno] [--cliversion]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --all            all properties
  --apibuild       whisk API build version
  --apibuildno     whisk API build number
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --cliversion     whisk CLI version
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --namespace      whisk namespace
  --version        Show version

DESCRIPTION
  get property

ALIASES
  $ aio runtime prop get
  $ aio rt property get
  $ aio rt prop get
```

## `aio rt prop set`

set property

```
USAGE
  $ aio rt prop set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace <value>]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --key                client key
  --namespace=<value>  whisk namespace
  --version            Show version

DESCRIPTION
  set property

ALIASES
  $ aio runtime prop set
  $ aio rt property set
  $ aio rt prop set
```

## `aio rt prop unset`

unset property

```
USAGE
  $ aio rt prop unset [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --namespace      whisk namespace
  --version        Show version

DESCRIPTION
  unset property

ALIASES
  $ aio runtime prop unset
  $ aio rt property unset
  $ aio rt prop unset
```

## `aio rt property`

Execute property commands

```
USAGE
  $ aio rt property [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Execute property commands

ALIASES
  $ aio runtime prop
  $ aio rt prop
  $ aio rt property
```

## `aio rt property get`

get property

```
USAGE
  $ aio rt property get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace] [--all] [--apibuild] [--apibuildno] [--cliversion]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --all            all properties
  --apibuild       whisk API build version
  --apibuildno     whisk API build number
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --cliversion     whisk CLI version
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --namespace      whisk namespace
  --version        Show version

DESCRIPTION
  get property

ALIASES
  $ aio runtime prop get
  $ aio rt property get
  $ aio rt prop get
```

## `aio rt property set`

set property

```
USAGE
  $ aio rt property set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace <value>]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --key                client key
  --namespace=<value>  whisk namespace
  --version            Show version

DESCRIPTION
  set property

ALIASES
  $ aio runtime prop set
  $ aio rt property set
  $ aio rt prop set
```

## `aio rt property unset`

unset property

```
USAGE
  $ aio rt property unset [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --namespace      whisk namespace
  --version        Show version

DESCRIPTION
  unset property

ALIASES
  $ aio runtime prop unset
  $ aio rt property unset
  $ aio rt prop unset
```

## `aio rt route`

Manage your api routes

```
USAGE
  $ aio rt route [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your api routes

ALIASES
  $ aio rt api
  $ aio runtime route
  $ aio rt route
```

## `aio rt route create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`

create a new api route

```
USAGE
  $ aio rt route create [BASEPATH] [RELPATH] [APIVERB] [ACTION] [--cert <value>] [--key <value>] [--apiversion
    <value>] [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-n <value> | -c <value>]
    [-r html|http|json|text|svg|json | ]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb
  ACTION    The action to call

FLAGS
  -c, --config-file=<value>     file containing API configuration in swagger JSON format
  -i, --insecure                bypass certificate check
  -n, --apiname=<value>         Friendly name of the API; ignored when CFG_FILE is specified (default BASE_PATH)
  -r, --response-type=<option>  [default: json] Set the web action response TYPE.
                                <options: html|http|json|text|svg|json>
  -u, --auth=<value>            whisk auth
  -v, --verbose                 Verbose output
  --apihost=<value>             whisk API host
  --apiversion=<value>          whisk API version
  --cert=<value>                client cert
  --debug=<value>               Debug level output
  --help                        Show help
  --key=<value>                 client key
  --version                     Show version

DESCRIPTION
  create a new api route

ALIASES
  $ aio runtime route create
  $ aio rt route create
  $ aio rt api create
```

## `aio rt route delete BASEPATHORAPINAME [RELPATH] [APIVERB]`

delete an API

```
USAGE
  $ aio rt route delete BASEPATHORAPINAME [RELPATH] [APIVERB] [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name
  RELPATH            The path of the api relative to the base path
  APIVERB            (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  delete an API

ALIASES
  $ aio runtime route delete
  $ aio rt route delete
  $ aio rt api delete
```

## `aio rt route get BASEPATHORAPINAME`

get API details

```
USAGE
  $ aio rt route get BASEPATHORAPINAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  get API details

ALIASES
  $ aio runtime route get
  $ aio rt route get
  $ aio rt api get
```

## `aio rt route list [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio rt route list [BASEPATH] [RELPATH] [APIVERB] [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--json]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of triggers
  -s, --skip=<value>    exclude the first SKIP number of triggers from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  list route/apis for Adobe I/O Runtime

ALIASES
  $ aio runtime api ls
  $ aio runtime route list
  $ aio runtime route ls
  $ aio rt api list
  $ aio rt api ls
  $ aio rt route list
  $ aio rt route ls
```

## `aio rt route ls [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio rt route ls [BASEPATH] [RELPATH] [APIVERB] [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--json]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of triggers
  -s, --skip=<value>    exclude the first SKIP number of triggers from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  list route/apis for Adobe I/O Runtime

ALIASES
  $ aio runtime api ls
  $ aio runtime route list
  $ aio runtime route ls
  $ aio rt api list
  $ aio rt api ls
  $ aio rt route list
  $ aio rt route ls
```

## `aio rt rule`

Manage your rules

```
USAGE
  $ aio rt rule [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your rules

ALIASES
  $ aio rt rule
```

## `aio rt rule create NAME TRIGGER ACTION`

Create a Rule

```
USAGE
  $ aio rt rule create NAME TRIGGER ACTION [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>]
    [-v] [--version] [--help] [--json]

ARGUMENTS
  NAME     Name of the rule
  TRIGGER  Name of the trigger
  ACTION   Name of the action

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --json           output raw json
  --key            client key
  --version        Show version

DESCRIPTION
  Create a Rule

ALIASES
  $ aio rt rule create
```

## `aio rt rule delete NAME`

Delete a Rule

```
USAGE
  $ aio rt rule delete NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--json]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --json           output raw json
  --key            client key
  --version        Show version

DESCRIPTION
  Delete a Rule

ALIASES
  $ aio rt rule delete
```

## `aio rt rule disable NAME`

Disable a Rule

```
USAGE
  $ aio rt rule disable NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Disable a Rule

ALIASES
  $ aio rt rule disable
```

## `aio rt rule enable NAME`

Enable a Rule

```
USAGE
  $ aio rt rule enable NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Enable a Rule

ALIASES
  $ aio rt rule enable
```

## `aio rt rule get NAME`

Retrieves a Rule

```
USAGE
  $ aio rt rule get NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Retrieves a Rule

ALIASES
  $ aio rt rule get
```

## `aio rt rule list`

Retrieves a list of Rules

```
USAGE
  $ aio rt rule list [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of rules
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  Limit number of rules returned (min: 0, max: 50)
  -n, --name           sort results by name
  -s, --skip=<value>   Skip number of rules returned
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --name-sort          sort results by name
  --version            Show version

DESCRIPTION
  Retrieves a list of Rules

ALIASES
  $ aio runtime rule ls
  $ aio rt rule list
  $ aio rt rule ls
```

## `aio rt rule ls`

Retrieves a list of Rules

```
USAGE
  $ aio rt rule ls [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of rules
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  Limit number of rules returned (min: 0, max: 50)
  -n, --name           sort results by name
  -s, --skip=<value>   Skip number of rules returned
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --name-sort          sort results by name
  --version            Show version

DESCRIPTION
  Retrieves a list of Rules

ALIASES
  $ aio runtime rule ls
  $ aio rt rule list
  $ aio rt rule ls
```

## `aio rt rule status NAME`

Gets the status of a rule

```
USAGE
  $ aio rt rule status NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Gets the status of a rule

ALIASES
  $ aio rt rule status
```

## `aio rt rule update NAME TRIGGER ACTION`

Update a Rule

```
USAGE
  $ aio rt rule update NAME TRIGGER ACTION [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>]
    [-v] [--version] [--help] [--json]

ARGUMENTS
  NAME     Name of the rule
  TRIGGER  Name of the trigger
  ACTION   Name of the action

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --json           output raw json
  --key            client key
  --version        Show version

DESCRIPTION
  Update a Rule

ALIASES
  $ aio rt rule update
```

## `aio rt trigger`

Manage your triggers

```
USAGE
  $ aio rt trigger [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your triggers

ALIASES
  $ aio rt trigger
```

## `aio rt trigger create TRIGGERNAME`

Create a trigger for Adobe I/O Runtime

```
USAGE
  $ aio rt trigger create TRIGGERNAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>] [-a <value>] [-A <value>] [-f <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -f, --feed=<value>             trigger feed ACTION_NAME
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameter values in KEY VALUE format
  -u, --auth                     whisk auth
  -v, --verbose                  Verbose output
  --apihost                      whisk API host
  --apiversion                   whisk API version
  --cert                         client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --key                          client key
  --version                      Show version

DESCRIPTION
  Create a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger create
```

## `aio rt trigger delete TRIGGERPATH`

Delete a trigger for Adobe I/O Runtime

```
USAGE
  $ aio rt trigger delete TRIGGERPATH [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help]

ARGUMENTS
  TRIGGERPATH  The name of the trigger, in the format /NAMESPACE/NAME

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Delete a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger delete
```

## `aio rt trigger fire TRIGGERNAME`

Fire a trigger for Adobe I/O Runtime

```
USAGE
  $ aio rt trigger fire TRIGGERNAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -P, --param-file=<value>  FILE containing parameter values in JSON format
  -i, --insecure            bypass certificate check
  -p, --param=<value>...    parameter values in KEY VALUE format
  -u, --auth                whisk auth
  -v, --verbose             Verbose output
  --apihost                 whisk API host
  --apiversion              whisk API version
  --cert                    client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key                     client key
  --version                 Show version

DESCRIPTION
  Fire a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger fire
```

## `aio rt trigger get TRIGGERPATH`

Get a trigger for Adobe I/O Runtime

```
USAGE
  $ aio rt trigger get TRIGGERPATH [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help]

ARGUMENTS
  TRIGGERPATH  The name/path of the trigger, in the format /NAMESPACE/NAME

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger get
```

## `aio rt trigger list`

Lists all of your triggers for Adobe I/O Runtime

```
USAGE
  $ aio rt trigger list [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of triggers
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  [default: 30] only return LIMIT number of triggers (min: 0, max: 50)
  -n, --name           sort results by name
  -s, --skip=<value>   exclude the first SKIP number of triggers from the result
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --name-sort          sort results by name
  --version            Show version

DESCRIPTION
  Lists all of your triggers for Adobe I/O Runtime

ALIASES
  $ aio runtime trigger ls
  $ aio rt trigger list
  $ aio rt trigger ls
```

## `aio rt trigger ls`

Lists all of your triggers for Adobe I/O Runtime

```
USAGE
  $ aio rt trigger ls [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of triggers
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  [default: 30] only return LIMIT number of triggers (min: 0, max: 50)
  -n, --name           sort results by name
  -s, --skip=<value>   exclude the first SKIP number of triggers from the result
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --name-sort          sort results by name
  --version            Show version

DESCRIPTION
  Lists all of your triggers for Adobe I/O Runtime

ALIASES
  $ aio runtime trigger ls
  $ aio rt trigger list
  $ aio rt trigger ls
```

## `aio rt trigger update TRIGGERNAME`

Update or create a trigger for Adobe I/O Runtime

```
USAGE
  $ aio rt trigger update TRIGGERNAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>] [-a <value>] [-A <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameter values in KEY VALUE format
  -u, --auth                     whisk auth
  -v, --verbose                  Verbose output
  --apihost                      whisk API host
  --apiversion                   whisk API version
  --cert                         client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --key                          client key
  --version                      Show version

DESCRIPTION
  Update or create a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger update
```

## `aio runtime`

Execute runtime commands

```
USAGE
  $ aio runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Execute runtime commands

ALIASES
  $ aio rt
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/6.1.0/src/commands/runtime/index.js)_

## `aio runtime action`

Manage your actions

```
USAGE
  $ aio runtime action [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your actions

ALIASES
  $ aio rt action
```

## `aio runtime action create ACTIONNAME [ACTIONPATH]`

Creates an Action

```
USAGE
  $ aio runtime action create ACTIONNAME [ACTIONPATH] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost
    <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [--copy <value>] [-e <value>]
    [--web-secure <value> --web true|yes|false|no|raw] [-P <value>] [-E <value>] [-t <value>] [-m <value>] [-l <value>]
    [--kind <value>] [-a <value>] [-A <value>] [--sequence <value>] [--docker <value>] [--main <value>] [--binary]
    [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -E, --env-file=<value>         FILE containing environment variables in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -e, --env=<value>...           environment values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -l, --logsize=<value>          the maximum log size LIMIT in MB for the action (default 10, min: 0, max: 10)
  -m, --memory=<value>           the maximum memory LIMIT in MB for the action (default 256, min: 128, max: 4096)
  -p, --param=<value>...         parameter values in KEY VALUE format
  -t, --timeout=<value>          the timeout LIMIT in milliseconds after which the action is terminated (default 60000,
                                 min: 100, max: 3600000)
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --binary                       treat code artifact as binary
  --cert=<value>                 client cert
  --copy=<value>                 copy an existing action
  --debug=<value>                Debug level output
  --docker=<value>               [Restricted Access] use provided Docker image (a path on DockerHub) to run the action
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --kind=<value>                 the KIND of the action runtime (example: swift:default, nodejs:default)
  --main=<value>                 the name of the action entry point (function or fully-qualified method name when
                                 applicable)
  --sequence=<value>             treat ACTION as comma separated sequence of actions to invoke
  --version                      Show version
  --web=<option>                 treat ACTION as a web action or as a raw HTTP web action
                                 <options: true|yes|false|no|raw>
  --web-secure=<value>           secure the web action (valid values are true, false, or any string)

DESCRIPTION
  Creates an Action

ALIASES
  $ aio rt action create
```

## `aio runtime action del ACTIONNAME`

Deletes an Action

```
USAGE
  $ aio runtime action del ACTIONNAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Deletes an Action

ALIASES
  $ aio runtime action del
  $ aio rt action delete
  $ aio rt action del
```

## `aio runtime action delete ACTIONNAME`

Deletes an Action

```
USAGE
  $ aio runtime action delete ACTIONNAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Deletes an Action

ALIASES
  $ aio runtime action del
  $ aio rt action delete
  $ aio rt action del
```

## `aio runtime action get ACTIONNAME`

Retrieves an Action

```
USAGE
  $ aio runtime action get ACTIONNAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-r] [-c] [--save] [--save-as <value>]

FLAGS
  -c, --code            show action code (only works if code is not a zip file)
  -i, --insecure        bypass certificate check
  -r, --url             get action url
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --save                save action code to file corresponding with action name
  --save-as=<value>     file to save action code to
  --version             Show version

DESCRIPTION
  Retrieves an Action

ALIASES
  $ aio rt action get
```

## `aio runtime action invoke ACTIONNAME`

Invokes an Action

```
USAGE
  $ aio runtime action invoke ACTIONNAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-b] [-r]

FLAGS
  -P, --param-file=<value>  FILE containing parameter values in JSON format
  -b, --blocking            blocking invoke
  -i, --insecure            bypass certificate check
  -p, --param=<value>...    parameter values in KEY VALUE format
  -r, --result              blocking invoke; show only activation result (unless there is a failure)
  -u, --auth=<value>        whisk auth
  -v, --verbose             Verbose output
  --apihost=<value>         whisk API host
  --apiversion=<value>      whisk API version
  --cert=<value>            client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key=<value>             client key
  --version                 Show version

DESCRIPTION
  Invokes an Action

ALIASES
  $ aio rt action invoke
```

## `aio runtime action list [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio runtime action list [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of actions from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Actions

ALIASES
  $ aio runtime action ls
  $ aio runtime actions list
  $ aio runtime actions ls
  $ aio rt action list
  $ aio rt actions list
  $ aio rt action ls
  $ aio rt actions ls
```

## `aio runtime action ls [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio runtime action ls [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of actions from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Actions

ALIASES
  $ aio runtime action ls
  $ aio runtime actions list
  $ aio runtime actions ls
  $ aio rt action list
  $ aio rt actions list
  $ aio rt action ls
  $ aio rt actions ls
```

## `aio runtime action update ACTIONNAME [ACTIONPATH]`

Updates an Action

```
USAGE
  $ aio runtime action update ACTIONNAME [ACTIONPATH] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost
    <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [--copy <value>] [-e <value>]
    [--web-secure <value> --web true|yes|false|no|raw] [-P <value>] [-E <value>] [-t <value>] [-m <value>] [-l <value>]
    [--kind <value>] [-a <value>] [-A <value>] [--sequence <value>] [--docker <value>] [--main <value>] [--binary]
    [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -E, --env-file=<value>         FILE containing environment variables in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -e, --env=<value>...           environment values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -l, --logsize=<value>          the maximum log size LIMIT in MB for the action (default 10, min: 0, max: 10)
  -m, --memory=<value>           the maximum memory LIMIT in MB for the action (default 256, min: 128, max: 4096)
  -p, --param=<value>...         parameter values in KEY VALUE format
  -t, --timeout=<value>          the timeout LIMIT in milliseconds after which the action is terminated (default 60000,
                                 min: 100, max: 3600000)
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --binary                       treat code artifact as binary
  --cert=<value>                 client cert
  --copy=<value>                 copy an existing action
  --debug=<value>                Debug level output
  --docker=<value>               [Restricted Access] use provided Docker image (a path on DockerHub) to run the action
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --kind=<value>                 the KIND of the action runtime (example: swift:default, nodejs:default)
  --main=<value>                 the name of the action entry point (function or fully-qualified method name when
                                 applicable)
  --sequence=<value>             treat ACTION as comma separated sequence of actions to invoke
  --version                      Show version
  --web=<option>                 treat ACTION as a web action or as a raw HTTP web action
                                 <options: true|yes|false|no|raw>
  --web-secure=<value>           secure the web action (valid values are true, false, or any string)

DESCRIPTION
  Updates an Action

ALIASES
  $ aio rt action update
```

## `aio runtime actions list [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio runtime actions list [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of actions from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Actions

ALIASES
  $ aio runtime action ls
  $ aio runtime actions list
  $ aio runtime actions ls
  $ aio rt action list
  $ aio rt actions list
  $ aio rt action ls
  $ aio rt actions ls
```

## `aio runtime actions ls [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio runtime actions ls [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of actions from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Actions

ALIASES
  $ aio runtime action ls
  $ aio runtime actions list
  $ aio runtime actions ls
  $ aio rt action list
  $ aio rt actions list
  $ aio rt action ls
  $ aio rt actions ls
```

## `aio runtime activation`

Manage your activations

```
USAGE
  $ aio runtime activation [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your activations

ALIASES
  $ aio rt activation
```

## `aio runtime activation get [ACTIVATIONID]`

Retrieves an Activation

```
USAGE
  $ aio runtime activation get [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l] [-g]

FLAGS
  -g, --logs            emit only the logs, stripped of time stamps and stream identifier
  -i, --insecure        bypass certificate check
  -l, --last            retrieves the most recent activation
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Retrieves an Activation

ALIASES
  $ aio rt activation get
```

## `aio runtime activation list [ACTION_NAME]`

Lists all the Activations

```
USAGE
  $ aio runtime activation list [ACTION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations (min: 0, max: 50)
  -s, --skip=<value>    exclude the first SKIP number of activations from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --since=<value>       return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan
                        1970
  --upto=<value>        return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan
                        1970
  --version             Show version

DESCRIPTION
  Lists all the Activations

ALIASES
  $ aio runtime activations list
  $ aio runtime activation ls
  $ aio runtime activations ls
  $ aio rt activation list
  $ aio rt activation ls
  $ aio rt activations list
  $ aio rt activations ls
```

## `aio runtime activation log [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio runtime activation log [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-d |  | [-a <value> | -m | -p <value>]] [-r] [--limit
    <value> | -l] [-t | -w | -o]

FLAGS
  -a, --action=<value>   Fetch logs for a specific action
  -d, --deployed         Fetch logs for all actions deployed under a specific package
  -i, --insecure         bypass certificate check
  -l, --last             retrieves the most recent activation logs
  -m, --manifest         Fetch logs for all actions in the manifest
  -o, --poll             Fetch logs continuously
  -p, --package=<value>  Fetch logs for a specific package in the manifest
  -r, --strip            strip timestamp information and output first line only
  -t, --tail             Fetch logs continuously
  -u, --auth=<value>     whisk auth
  -v, --verbose          Verbose output
  -w, --watch            Fetch logs continuously
  --apihost=<value>      whisk API host
  --apiversion=<value>   whisk API version
  --cert=<value>         client cert
  --debug=<value>        Debug level output
  --help                 Show help
  --key=<value>          client key
  --limit=<value>        return logs only from last LIMIT number of activations (min: 0, max: 50)
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime activation log
  $ aio runtime log
  $ aio runtime logs
  $ aio rt activation logs
  $ aio rt activation log
  $ aio rt log
  $ aio rt logs
```

## `aio runtime activation logs [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio runtime activation logs [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-d |  | [-a <value> | -m | -p <value>]] [-r] [--limit
    <value> | -l] [-t | -w | -o]

FLAGS
  -a, --action=<value>   Fetch logs for a specific action
  -d, --deployed         Fetch logs for all actions deployed under a specific package
  -i, --insecure         bypass certificate check
  -l, --last             retrieves the most recent activation logs
  -m, --manifest         Fetch logs for all actions in the manifest
  -o, --poll             Fetch logs continuously
  -p, --package=<value>  Fetch logs for a specific package in the manifest
  -r, --strip            strip timestamp information and output first line only
  -t, --tail             Fetch logs continuously
  -u, --auth=<value>     whisk auth
  -v, --verbose          Verbose output
  -w, --watch            Fetch logs continuously
  --apihost=<value>      whisk API host
  --apiversion=<value>   whisk API version
  --cert=<value>         client cert
  --debug=<value>        Debug level output
  --help                 Show help
  --key=<value>          client key
  --limit=<value>        return logs only from last LIMIT number of activations (min: 0, max: 50)
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime activation log
  $ aio runtime log
  $ aio runtime logs
  $ aio rt activation logs
  $ aio rt activation log
  $ aio rt log
  $ aio rt logs
```

## `aio runtime activation ls [ACTION_NAME]`

Lists all the Activations

```
USAGE
  $ aio runtime activation ls [ACTION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations (min: 0, max: 50)
  -s, --skip=<value>    exclude the first SKIP number of activations from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --since=<value>       return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan
                        1970
  --upto=<value>        return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan
                        1970
  --version             Show version

DESCRIPTION
  Lists all the Activations

ALIASES
  $ aio runtime activations list
  $ aio runtime activation ls
  $ aio runtime activations ls
  $ aio rt activation list
  $ aio rt activation ls
  $ aio rt activations list
  $ aio rt activations ls
```

## `aio runtime activation result [ACTIVATIONID]`

Retrieves the Results for an Activation

```
USAGE
  $ aio runtime activation result [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l]

FLAGS
  -i, --insecure        bypass certificate check
  -l, --last            retrieves the most recent activation result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Retrieves the Results for an Activation

ALIASES
  $ aio rt activation result
```

## `aio runtime activations list [ACTION_NAME]`

Lists all the Activations

```
USAGE
  $ aio runtime activations list [ACTION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations (min: 0, max: 50)
  -s, --skip=<value>    exclude the first SKIP number of activations from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --since=<value>       return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan
                        1970
  --upto=<value>        return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan
                        1970
  --version             Show version

DESCRIPTION
  Lists all the Activations

ALIASES
  $ aio runtime activations list
  $ aio runtime activation ls
  $ aio runtime activations ls
  $ aio rt activation list
  $ aio rt activation ls
  $ aio rt activations list
  $ aio rt activations ls
```

## `aio runtime activations ls [ACTION_NAME]`

Lists all the Activations

```
USAGE
  $ aio runtime activations ls [ACTION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations (min: 0, max: 50)
  -s, --skip=<value>    exclude the first SKIP number of activations from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --since=<value>       return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan
                        1970
  --upto=<value>        return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan
                        1970
  --version             Show version

DESCRIPTION
  Lists all the Activations

ALIASES
  $ aio runtime activations list
  $ aio runtime activation ls
  $ aio runtime activations ls
  $ aio rt activation list
  $ aio rt activation ls
  $ aio rt activations list
  $ aio rt activations ls
```

## `aio runtime api`

Manage your api routes

```
USAGE
  $ aio runtime api [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your api routes

ALIASES
  $ aio rt api
  $ aio runtime route
  $ aio rt route
```

## `aio runtime api create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`

create a new api route

```
USAGE
  $ aio runtime api create [BASEPATH] [RELPATH] [APIVERB] [ACTION] [--cert <value>] [--key <value>] [--apiversion
    <value>] [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-n <value> | -c <value>]
    [-r html|http|json|text|svg|json | ]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb
  ACTION    The action to call

FLAGS
  -c, --config-file=<value>     file containing API configuration in swagger JSON format
  -i, --insecure                bypass certificate check
  -n, --apiname=<value>         Friendly name of the API; ignored when CFG_FILE is specified (default BASE_PATH)
  -r, --response-type=<option>  [default: json] Set the web action response TYPE.
                                <options: html|http|json|text|svg|json>
  -u, --auth=<value>            whisk auth
  -v, --verbose                 Verbose output
  --apihost=<value>             whisk API host
  --apiversion=<value>          whisk API version
  --cert=<value>                client cert
  --debug=<value>               Debug level output
  --help                        Show help
  --key=<value>                 client key
  --version                     Show version

DESCRIPTION
  create a new api route

ALIASES
  $ aio runtime route create
  $ aio rt route create
  $ aio rt api create
```

## `aio runtime api delete BASEPATHORAPINAME [RELPATH] [APIVERB]`

delete an API

```
USAGE
  $ aio runtime api delete BASEPATHORAPINAME [RELPATH] [APIVERB] [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name
  RELPATH            The path of the api relative to the base path
  APIVERB            (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  delete an API

ALIASES
  $ aio runtime route delete
  $ aio rt route delete
  $ aio rt api delete
```

## `aio runtime api get BASEPATHORAPINAME`

get API details

```
USAGE
  $ aio runtime api get BASEPATHORAPINAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  get API details

ALIASES
  $ aio runtime route get
  $ aio rt route get
  $ aio rt api get
```

## `aio runtime api list [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio runtime api list [BASEPATH] [RELPATH] [APIVERB] [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--json]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of triggers
  -s, --skip=<value>    exclude the first SKIP number of triggers from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  list route/apis for Adobe I/O Runtime

ALIASES
  $ aio runtime api ls
  $ aio runtime route list
  $ aio runtime route ls
  $ aio rt api list
  $ aio rt api ls
  $ aio rt route list
  $ aio rt route ls
```

## `aio runtime api ls [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio runtime api ls [BASEPATH] [RELPATH] [APIVERB] [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--json]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of triggers
  -s, --skip=<value>    exclude the first SKIP number of triggers from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  list route/apis for Adobe I/O Runtime

ALIASES
  $ aio runtime api ls
  $ aio runtime route list
  $ aio runtime route ls
  $ aio rt api list
  $ aio rt api ls
  $ aio rt route list
  $ aio rt route ls
```

## `aio runtime deploy`

The Runtime Deployment Tool

```
USAGE
  $ aio runtime deploy [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [-m <value>] [-d <value>] [--param <value>] [-P <value>]

FLAGS
  -P, --param-file=<value>  FILE containing parameter values in JSON format
  -d, --deployment=<value>  the path to the deployment file
  -i, --insecure            bypass certificate check
  -m, --manifest=<value>    the manifest file location
  -u, --auth=<value>        whisk auth
  -v, --verbose             Verbose output
  --apihost=<value>         whisk API host
  --apiversion=<value>      whisk API version
  --cert=<value>            client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key=<value>             client key
  --param=<value>...        parameter values in KEY VALUE format
  --version                 Show version

DESCRIPTION
  The Runtime Deployment Tool

ALIASES
  $ aio rt deploy
```

## `aio runtime deploy export`

Exports managed project assets from Runtime to manifest and function files

```
USAGE
  $ aio runtime deploy export -m <value> --projectname <value> [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure          bypass certificate check
  -m, --manifest=<value>  (required) the manifest file location
  -u, --auth=<value>      whisk auth
  -v, --verbose           Verbose output
  --apihost=<value>       whisk API host
  --apiversion=<value>    whisk API version
  --cert=<value>          client cert
  --debug=<value>         Debug level output
  --help                  Show help
  --key=<value>           client key
  --projectname=<value>   (required) the name of the project to be undeployed
  --version               Show version

DESCRIPTION
  Exports managed project assets from Runtime to manifest and function files

ALIASES
  $ aio rt deploy export
```

## `aio runtime deploy report`

Provides a summary report of Runtime assets being deployed/undeployed based on manifest/deployment YAML

```
USAGE
  $ aio runtime deploy report [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [-m <value>] [-d <value>]

FLAGS
  -d, --deployment=<value>  the deployment file location
  -i, --insecure            bypass certificate check
  -m, --manifest=<value>    the manifest file location
  -u, --auth=<value>        whisk auth
  -v, --verbose             Verbose output
  --apihost=<value>         whisk API host
  --apiversion=<value>      whisk API version
  --cert=<value>            client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key=<value>             client key
  --version                 Show version

DESCRIPTION
  Provides a summary report of Runtime assets being deployed/undeployed based on manifest/deployment YAML

ALIASES
  $ aio rt deploy report
```

## `aio runtime deploy sync`

A tool to sync deployment and undeployment of Runtime packages using a manifest and optional deployment files using YAML

```
USAGE
  $ aio runtime deploy sync [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [-m <value>] [-d <value>]

FLAGS
  -d, --deployment=<value>  the path to the deployment file
  -i, --insecure            bypass certificate check
  -m, --manifest=<value>    the manifest file location
  -u, --auth=<value>        whisk auth
  -v, --verbose             Verbose output
  --apihost=<value>         whisk API host
  --apiversion=<value>      whisk API version
  --cert=<value>            client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key=<value>             client key
  --version                 Show version

DESCRIPTION
  A tool to sync deployment and undeployment of Runtime packages using a manifest and optional deployment files using
  YAML

ALIASES
  $ aio rt deploy sync
```

## `aio runtime deploy undeploy`

Undeploy removes Runtime assets which were deployed from the manifest and deployment YAML

```
USAGE
  $ aio runtime deploy undeploy [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [-m <value>] [--projectname <value>]

FLAGS
  -i, --insecure          bypass certificate check
  -m, --manifest=<value>  the manifest file location
  -u, --auth=<value>      whisk auth
  -v, --verbose           Verbose output
  --apihost=<value>       whisk API host
  --apiversion=<value>    whisk API version
  --cert=<value>          client cert
  --debug=<value>         Debug level output
  --help                  Show help
  --key=<value>           client key
  --projectname=<value>   the name of the project to be undeployed
  --version               Show version

DESCRIPTION
  Undeploy removes Runtime assets which were deployed from the manifest and deployment YAML

ALIASES
  $ aio rt deploy undeploy
```

## `aio runtime deploy version`

Prints the version number of aio runtime deploy

```
USAGE
  $ aio runtime deploy version [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Prints the version number of aio runtime deploy

ALIASES
  $ aio rt deploy version
```

## `aio runtime list`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio runtime list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json] [--name-sort] [-n]

FLAGS
  -i, --insecure        bypass certificate check
  -n, --name            sort results by name
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Get triggers, actions, and rules in the registry for namespace

ALIASES
  $ aio rt get
  $ aio runtime list
  $ aio rt list
  $ aio runtime ls
  $ aio rt ls
```

## `aio runtime log [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio runtime log [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-d |  | [-a <value> | -m | -p <value>]] [-r] [--limit
    <value> | -l] [-t | -w | -o]

FLAGS
  -a, --action=<value>   Fetch logs for a specific action
  -d, --deployed         Fetch logs for all actions deployed under a specific package
  -i, --insecure         bypass certificate check
  -l, --last             retrieves the most recent activation logs
  -m, --manifest         Fetch logs for all actions in the manifest
  -o, --poll             Fetch logs continuously
  -p, --package=<value>  Fetch logs for a specific package in the manifest
  -r, --strip            strip timestamp information and output first line only
  -t, --tail             Fetch logs continuously
  -u, --auth=<value>     whisk auth
  -v, --verbose          Verbose output
  -w, --watch            Fetch logs continuously
  --apihost=<value>      whisk API host
  --apiversion=<value>   whisk API version
  --cert=<value>         client cert
  --debug=<value>        Debug level output
  --help                 Show help
  --key=<value>          client key
  --limit=<value>        return logs only from last LIMIT number of activations (min: 0, max: 50)
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime activation log
  $ aio runtime log
  $ aio runtime logs
  $ aio rt activation logs
  $ aio rt activation log
  $ aio rt log
  $ aio rt logs
```

## `aio runtime logs [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio runtime logs [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-d |  | [-a <value> | -m | -p <value>]] [-r] [--limit
    <value> | -l] [-t | -w | -o]

FLAGS
  -a, --action=<value>   Fetch logs for a specific action
  -d, --deployed         Fetch logs for all actions deployed under a specific package
  -i, --insecure         bypass certificate check
  -l, --last             retrieves the most recent activation logs
  -m, --manifest         Fetch logs for all actions in the manifest
  -o, --poll             Fetch logs continuously
  -p, --package=<value>  Fetch logs for a specific package in the manifest
  -r, --strip            strip timestamp information and output first line only
  -t, --tail             Fetch logs continuously
  -u, --auth=<value>     whisk auth
  -v, --verbose          Verbose output
  -w, --watch            Fetch logs continuously
  --apihost=<value>      whisk API host
  --apiversion=<value>   whisk API version
  --cert=<value>         client cert
  --debug=<value>        Debug level output
  --help                 Show help
  --key=<value>          client key
  --limit=<value>        return logs only from last LIMIT number of activations (min: 0, max: 50)
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime activation log
  $ aio runtime log
  $ aio runtime logs
  $ aio rt activation logs
  $ aio rt activation log
  $ aio rt log
  $ aio rt logs
```

## `aio runtime ls`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio runtime ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json] [--name-sort] [-n]

FLAGS
  -i, --insecure        bypass certificate check
  -n, --name            sort results by name
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Get triggers, actions, and rules in the registry for namespace

ALIASES
  $ aio rt get
  $ aio runtime list
  $ aio rt list
  $ aio runtime ls
  $ aio rt ls
```

## `aio runtime namespace`

Manage your namespaces

```
USAGE
  $ aio runtime namespace [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your namespaces

ALIASES
  $ aio runtime ns
  $ aio rt namespace
  $ aio rt ns
```

## `aio runtime namespace get`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio runtime namespace get [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json] [--name-sort] [-n]

FLAGS
  -i, --insecure        bypass certificate check
  -n, --name            sort results by name
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Get triggers, actions, and rules in the registry for namespace

ALIASES
  $ aio rt get
  $ aio runtime list
  $ aio rt list
  $ aio runtime ls
  $ aio rt ls
```

## `aio runtime namespace lf`

Manage log forwarding settings

```
USAGE
  $ aio runtime namespace lf [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage log forwarding settings

ALIASES
  $ aio runtime ns log-forwarding
  $ aio runtime ns lf
  $ aio runtime namespace lf
  $ aio rt namespace log-forwarding
  $ aio rt namespace lf
  $ aio rt ns log-forwarding
  $ aio rt ns lf
```

## `aio runtime namespace lf errors`

Get log forwarding errors

```
USAGE
  $ aio runtime namespace lf errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio runtime ns log-forwarding errors
  $ aio runtime ns lf errors
  $ aio runtime namespace lf errors
  $ aio rt namespace log-forwarding errors
  $ aio rt namespace lf errors
  $ aio rt ns log-forwarding errors
  $ aio rt ns lf errors
```

## `aio runtime namespace lf get`

Get log forwarding destination configuration

```
USAGE
  $ aio runtime namespace lf get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio runtime ns log-forwarding get
  $ aio runtime ns lf get
  $ aio runtime namespace lf get
  $ aio rt namespace log-forwarding get
  $ aio rt namespace lf get
  $ aio rt ns log-forwarding get
  $ aio rt ns lf get
```

## `aio runtime namespace lf set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio runtime namespace lf set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Configure log forwarding destination (interactive)

ALIASES
  $ aio runtime ns log-forwarding set
  $ aio runtime ns lf set
  $ aio runtime namespace lf set
  $ aio rt namespace log-forwarding set
  $ aio rt namespace lf set
  $ aio rt ns log-forwarding set
  $ aio rt ns lf set
```

## `aio runtime namespace lf set adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio runtime namespace lf set adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

ALIASES
  $ aio runtime ns log-forwarding set adobe-io-runtime
  $ aio runtime ns lf set adobe-io-runtime
  $ aio runtime namespace lf set adobe-io-runtime
  $ aio rt namespace log-forwarding set adobe-io-runtime
  $ aio rt namespace lf set adobe-io-runtime
  $ aio rt ns log-forwarding set adobe-io-runtime
  $ aio rt ns lf set adobe-io-runtime
```

## `aio runtime namespace lf set azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio runtime namespace lf set azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
    [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --customer-id=<value>  (required) Customer ID
  --debug=<value>        Debug level output
  --help                 Show help
  --key                  client key
  --log-type=<value>     (required) Log type
  --shared-key=<value>   (required) Shared key
  --version              Show version

DESCRIPTION
  Set log forwarding destination to Azure Log Analytics

ALIASES
  $ aio runtime ns log-forwarding set azure-log-analytics
  $ aio runtime ns lf set azure-log-analytics
  $ aio runtime namespace lf set azure-log-analytics
  $ aio rt namespace log-forwarding set azure-log-analytics
  $ aio rt namespace lf set azure-log-analytics
  $ aio rt ns log-forwarding set azure-log-analytics
  $ aio rt ns lf set azure-log-analytics
```

## `aio runtime namespace lf set splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio runtime namespace lf set splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
    [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --hec-token=<value>  (required) HEC token
  --help               Show help
  --host=<value>       (required) Host
  --index=<value>      (required) Index
  --key                client key
  --port=<value>       (required) Port
  --version            Show version

DESCRIPTION
  Set log forwarding destination to Splunk HEC

ALIASES
  $ aio runtime ns log-forwarding set splunk-hec
  $ aio runtime ns lf set splunk-hec
  $ aio runtime namespace lf set splunk-hec
  $ aio rt namespace log-forwarding set splunk-hec
  $ aio rt namespace lf set splunk-hec
  $ aio rt ns log-forwarding set splunk-hec
  $ aio rt ns lf set splunk-hec
```

## `aio runtime namespace list`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio runtime namespace list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Lists all of your namespaces for Adobe I/O Runtime

ALIASES
  $ aio runtime namespace ls
  $ aio runtime ns list
  $ aio runtime ns ls
  $ aio rt namespace list
  $ aio rt namespace ls
  $ aio rt ns list
  $ aio rt ns ls
```

## `aio runtime namespace log-forwarding`

Manage log forwarding settings

```
USAGE
  $ aio runtime namespace log-forwarding [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage log forwarding settings

ALIASES
  $ aio runtime ns log-forwarding
  $ aio runtime ns lf
  $ aio runtime namespace lf
  $ aio rt namespace log-forwarding
  $ aio rt namespace lf
  $ aio rt ns log-forwarding
  $ aio rt ns lf
```

## `aio runtime namespace log-forwarding errors`

Get log forwarding errors

```
USAGE
  $ aio runtime namespace log-forwarding errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio runtime ns log-forwarding errors
  $ aio runtime ns lf errors
  $ aio runtime namespace lf errors
  $ aio rt namespace log-forwarding errors
  $ aio rt namespace lf errors
  $ aio rt ns log-forwarding errors
  $ aio rt ns lf errors
```

## `aio runtime namespace log-forwarding get`

Get log forwarding destination configuration

```
USAGE
  $ aio runtime namespace log-forwarding get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio runtime ns log-forwarding get
  $ aio runtime ns lf get
  $ aio runtime namespace lf get
  $ aio rt namespace log-forwarding get
  $ aio rt namespace lf get
  $ aio rt ns log-forwarding get
  $ aio rt ns lf get
```

## `aio runtime namespace log-forwarding set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio runtime namespace log-forwarding set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Configure log forwarding destination (interactive)

ALIASES
  $ aio runtime ns log-forwarding set
  $ aio runtime ns lf set
  $ aio runtime namespace lf set
  $ aio rt namespace log-forwarding set
  $ aio rt namespace lf set
  $ aio rt ns log-forwarding set
  $ aio rt ns lf set
```

## `aio runtime namespace log-forwarding set adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio runtime namespace log-forwarding set adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

ALIASES
  $ aio runtime ns log-forwarding set adobe-io-runtime
  $ aio runtime ns lf set adobe-io-runtime
  $ aio runtime namespace lf set adobe-io-runtime
  $ aio rt namespace log-forwarding set adobe-io-runtime
  $ aio rt namespace lf set adobe-io-runtime
  $ aio rt ns log-forwarding set adobe-io-runtime
  $ aio rt ns lf set adobe-io-runtime
```

## `aio runtime namespace log-forwarding set azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio runtime namespace log-forwarding set azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
    [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --customer-id=<value>  (required) Customer ID
  --debug=<value>        Debug level output
  --help                 Show help
  --key                  client key
  --log-type=<value>     (required) Log type
  --shared-key=<value>   (required) Shared key
  --version              Show version

DESCRIPTION
  Set log forwarding destination to Azure Log Analytics

ALIASES
  $ aio runtime ns log-forwarding set azure-log-analytics
  $ aio runtime ns lf set azure-log-analytics
  $ aio runtime namespace lf set azure-log-analytics
  $ aio rt namespace log-forwarding set azure-log-analytics
  $ aio rt namespace lf set azure-log-analytics
  $ aio rt ns log-forwarding set azure-log-analytics
  $ aio rt ns lf set azure-log-analytics
```

## `aio runtime namespace log-forwarding set splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio runtime namespace log-forwarding set splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
    [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --hec-token=<value>  (required) HEC token
  --help               Show help
  --host=<value>       (required) Host
  --index=<value>      (required) Index
  --key                client key
  --port=<value>       (required) Port
  --version            Show version

DESCRIPTION
  Set log forwarding destination to Splunk HEC

ALIASES
  $ aio runtime ns log-forwarding set splunk-hec
  $ aio runtime ns lf set splunk-hec
  $ aio runtime namespace lf set splunk-hec
  $ aio rt namespace log-forwarding set splunk-hec
  $ aio rt namespace lf set splunk-hec
  $ aio rt ns log-forwarding set splunk-hec
  $ aio rt ns lf set splunk-hec
```

## `aio runtime namespace ls`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio runtime namespace ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Lists all of your namespaces for Adobe I/O Runtime

ALIASES
  $ aio runtime namespace ls
  $ aio runtime ns list
  $ aio runtime ns ls
  $ aio rt namespace list
  $ aio rt namespace ls
  $ aio rt ns list
  $ aio rt ns ls
```

## `aio runtime ns`

Manage your namespaces

```
USAGE
  $ aio runtime ns [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your namespaces

ALIASES
  $ aio runtime ns
  $ aio rt namespace
  $ aio rt ns
```

## `aio runtime ns lf`

Manage log forwarding settings

```
USAGE
  $ aio runtime ns lf [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage log forwarding settings

ALIASES
  $ aio runtime ns log-forwarding
  $ aio runtime ns lf
  $ aio runtime namespace lf
  $ aio rt namespace log-forwarding
  $ aio rt namespace lf
  $ aio rt ns log-forwarding
  $ aio rt ns lf
```

## `aio runtime ns lf errors`

Get log forwarding errors

```
USAGE
  $ aio runtime ns lf errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio runtime ns log-forwarding errors
  $ aio runtime ns lf errors
  $ aio runtime namespace lf errors
  $ aio rt namespace log-forwarding errors
  $ aio rt namespace lf errors
  $ aio rt ns log-forwarding errors
  $ aio rt ns lf errors
```

## `aio runtime ns lf get`

Get log forwarding destination configuration

```
USAGE
  $ aio runtime ns lf get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio runtime ns log-forwarding get
  $ aio runtime ns lf get
  $ aio runtime namespace lf get
  $ aio rt namespace log-forwarding get
  $ aio rt namespace lf get
  $ aio rt ns log-forwarding get
  $ aio rt ns lf get
```

## `aio runtime ns lf set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio runtime ns lf set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Configure log forwarding destination (interactive)

ALIASES
  $ aio runtime ns log-forwarding set
  $ aio runtime ns lf set
  $ aio runtime namespace lf set
  $ aio rt namespace log-forwarding set
  $ aio rt namespace lf set
  $ aio rt ns log-forwarding set
  $ aio rt ns lf set
```

## `aio runtime ns lf set adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio runtime ns lf set adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

ALIASES
  $ aio runtime ns log-forwarding set adobe-io-runtime
  $ aio runtime ns lf set adobe-io-runtime
  $ aio runtime namespace lf set adobe-io-runtime
  $ aio rt namespace log-forwarding set adobe-io-runtime
  $ aio rt namespace lf set adobe-io-runtime
  $ aio rt ns log-forwarding set adobe-io-runtime
  $ aio rt ns lf set adobe-io-runtime
```

## `aio runtime ns lf set azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio runtime ns lf set azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
    [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --customer-id=<value>  (required) Customer ID
  --debug=<value>        Debug level output
  --help                 Show help
  --key                  client key
  --log-type=<value>     (required) Log type
  --shared-key=<value>   (required) Shared key
  --version              Show version

DESCRIPTION
  Set log forwarding destination to Azure Log Analytics

ALIASES
  $ aio runtime ns log-forwarding set azure-log-analytics
  $ aio runtime ns lf set azure-log-analytics
  $ aio runtime namespace lf set azure-log-analytics
  $ aio rt namespace log-forwarding set azure-log-analytics
  $ aio rt namespace lf set azure-log-analytics
  $ aio rt ns log-forwarding set azure-log-analytics
  $ aio rt ns lf set azure-log-analytics
```

## `aio runtime ns lf set splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio runtime ns lf set splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
    [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --hec-token=<value>  (required) HEC token
  --help               Show help
  --host=<value>       (required) Host
  --index=<value>      (required) Index
  --key                client key
  --port=<value>       (required) Port
  --version            Show version

DESCRIPTION
  Set log forwarding destination to Splunk HEC

ALIASES
  $ aio runtime ns log-forwarding set splunk-hec
  $ aio runtime ns lf set splunk-hec
  $ aio runtime namespace lf set splunk-hec
  $ aio rt namespace log-forwarding set splunk-hec
  $ aio rt namespace lf set splunk-hec
  $ aio rt ns log-forwarding set splunk-hec
  $ aio rt ns lf set splunk-hec
```

## `aio runtime ns list`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio runtime ns list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Lists all of your namespaces for Adobe I/O Runtime

ALIASES
  $ aio runtime namespace ls
  $ aio runtime ns list
  $ aio runtime ns ls
  $ aio rt namespace list
  $ aio rt namespace ls
  $ aio rt ns list
  $ aio rt ns ls
```

## `aio runtime ns log-forwarding`

Manage log forwarding settings

```
USAGE
  $ aio runtime ns log-forwarding [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage log forwarding settings

ALIASES
  $ aio runtime ns log-forwarding
  $ aio runtime ns lf
  $ aio runtime namespace lf
  $ aio rt namespace log-forwarding
  $ aio rt namespace lf
  $ aio rt ns log-forwarding
  $ aio rt ns lf
```

## `aio runtime ns log-forwarding errors`

Get log forwarding errors

```
USAGE
  $ aio runtime ns log-forwarding errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio runtime ns log-forwarding errors
  $ aio runtime ns lf errors
  $ aio runtime namespace lf errors
  $ aio rt namespace log-forwarding errors
  $ aio rt namespace lf errors
  $ aio rt ns log-forwarding errors
  $ aio rt ns lf errors
```

## `aio runtime ns log-forwarding get`

Get log forwarding destination configuration

```
USAGE
  $ aio runtime ns log-forwarding get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio runtime ns log-forwarding get
  $ aio runtime ns lf get
  $ aio runtime namespace lf get
  $ aio rt namespace log-forwarding get
  $ aio rt namespace lf get
  $ aio rt ns log-forwarding get
  $ aio rt ns lf get
```

## `aio runtime ns log-forwarding set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio runtime ns log-forwarding set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Configure log forwarding destination (interactive)

ALIASES
  $ aio runtime ns log-forwarding set
  $ aio runtime ns lf set
  $ aio runtime namespace lf set
  $ aio rt namespace log-forwarding set
  $ aio rt namespace lf set
  $ aio rt ns log-forwarding set
  $ aio rt ns lf set
```

## `aio runtime ns log-forwarding set adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio runtime ns log-forwarding set adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

ALIASES
  $ aio runtime ns log-forwarding set adobe-io-runtime
  $ aio runtime ns lf set adobe-io-runtime
  $ aio runtime namespace lf set adobe-io-runtime
  $ aio rt namespace log-forwarding set adobe-io-runtime
  $ aio rt namespace lf set adobe-io-runtime
  $ aio rt ns log-forwarding set adobe-io-runtime
  $ aio rt ns lf set adobe-io-runtime
```

## `aio runtime ns log-forwarding set azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio runtime ns log-forwarding set azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
    [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --customer-id=<value>  (required) Customer ID
  --debug=<value>        Debug level output
  --help                 Show help
  --key                  client key
  --log-type=<value>     (required) Log type
  --shared-key=<value>   (required) Shared key
  --version              Show version

DESCRIPTION
  Set log forwarding destination to Azure Log Analytics

ALIASES
  $ aio runtime ns log-forwarding set azure-log-analytics
  $ aio runtime ns lf set azure-log-analytics
  $ aio runtime namespace lf set azure-log-analytics
  $ aio rt namespace log-forwarding set azure-log-analytics
  $ aio rt namespace lf set azure-log-analytics
  $ aio rt ns log-forwarding set azure-log-analytics
  $ aio rt ns lf set azure-log-analytics
```

## `aio runtime ns log-forwarding set splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio runtime ns log-forwarding set splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
    [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --hec-token=<value>  (required) HEC token
  --help               Show help
  --host=<value>       (required) Host
  --index=<value>      (required) Index
  --key                client key
  --port=<value>       (required) Port
  --version            Show version

DESCRIPTION
  Set log forwarding destination to Splunk HEC

ALIASES
  $ aio runtime ns log-forwarding set splunk-hec
  $ aio runtime ns lf set splunk-hec
  $ aio runtime namespace lf set splunk-hec
  $ aio rt namespace log-forwarding set splunk-hec
  $ aio rt namespace lf set splunk-hec
  $ aio rt ns log-forwarding set splunk-hec
  $ aio rt ns lf set splunk-hec
```

## `aio runtime ns ls`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio runtime ns ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Lists all of your namespaces for Adobe I/O Runtime

ALIASES
  $ aio runtime namespace ls
  $ aio runtime ns list
  $ aio runtime ns ls
  $ aio rt namespace list
  $ aio rt namespace ls
  $ aio rt ns list
  $ aio rt ns ls
```

## `aio runtime package`

Manage your packages

```
USAGE
  $ aio runtime package [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your packages

ALIASES
  $ aio runtime pkg
  $ aio rt package
  $ aio rt pkg
```

## `aio runtime package bind PACKAGENAME BINDPACKAGENAME`

Bind parameters to a package

```
USAGE
  $ aio runtime package bind PACKAGENAME BINDPACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --version                      Show version

DESCRIPTION
  Bind parameters to a package

ALIASES
  $ aio runtime pkg bind
  $ aio rt package bind
  $ aio rt pkg bind
```

## `aio runtime package create PACKAGENAME`

Creates a Package

```
USAGE
  $ aio runtime package create PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --shared=<option>              parameter to be passed to indicate whether package is shared or private
                                 <options: true|yes|false|no>
  --version                      Show version

DESCRIPTION
  Creates a Package

ALIASES
  $ aio runtime pkg create
  $ aio rt package create
  $ aio rt pkg create
```

## `aio runtime package delete PACKAGENAME`

Deletes a Package

```
USAGE
  $ aio runtime package delete PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [--json] [-r]

FLAGS
  -i, --insecure        bypass certificate check
  -r, --recursive       Deletes all associated actions (and rules & triggers associated with the actions)
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Deletes a Package

ALIASES
  $ aio runtime pkg delete
  $ aio rt package delete
  $ aio rt pkg delete
```

## `aio runtime package get PACKAGENAME`

Retrieves a Package

```
USAGE
  $ aio runtime package get PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Retrieves a Package

ALIASES
  $ aio runtime pkg get
  $ aio rt package get
  $ aio rt pkg get
```

## `aio runtime package list [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio runtime package list [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of packages from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Packages

ALIASES
  $ aio runtime package ls
  $ aio runtime pkg list
  $ aio runtime pkg ls
  $ aio rt package list
  $ aio rt package ls
  $ aio rt pkg list
  $ aio rt pkg ls
```

## `aio runtime package ls [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio runtime package ls [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of packages from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Packages

ALIASES
  $ aio runtime package ls
  $ aio runtime pkg list
  $ aio runtime pkg ls
  $ aio rt package list
  $ aio rt package ls
  $ aio rt pkg list
  $ aio rt pkg ls
```

## `aio runtime package update PACKAGENAME`

Updates a Package

```
USAGE
  $ aio runtime package update PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --shared=<option>              parameter to be passed to indicate whether package is shared or private
                                 <options: true|yes|false|no>
  --version                      Show version

DESCRIPTION
  Updates a Package

ALIASES
  $ aio runtime pkg update
  $ aio rt package update
  $ aio rt pkg update
```

## `aio runtime pkg`

Manage your packages

```
USAGE
  $ aio runtime pkg [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your packages

ALIASES
  $ aio runtime pkg
  $ aio rt package
  $ aio rt pkg
```

## `aio runtime pkg bind PACKAGENAME BINDPACKAGENAME`

Bind parameters to a package

```
USAGE
  $ aio runtime pkg bind PACKAGENAME BINDPACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --version                      Show version

DESCRIPTION
  Bind parameters to a package

ALIASES
  $ aio runtime pkg bind
  $ aio rt package bind
  $ aio rt pkg bind
```

## `aio runtime pkg create PACKAGENAME`

Creates a Package

```
USAGE
  $ aio runtime pkg create PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --shared=<option>              parameter to be passed to indicate whether package is shared or private
                                 <options: true|yes|false|no>
  --version                      Show version

DESCRIPTION
  Creates a Package

ALIASES
  $ aio runtime pkg create
  $ aio rt package create
  $ aio rt pkg create
```

## `aio runtime pkg delete PACKAGENAME`

Deletes a Package

```
USAGE
  $ aio runtime pkg delete PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [--json] [-r]

FLAGS
  -i, --insecure        bypass certificate check
  -r, --recursive       Deletes all associated actions (and rules & triggers associated with the actions)
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Deletes a Package

ALIASES
  $ aio runtime pkg delete
  $ aio rt package delete
  $ aio rt pkg delete
```

## `aio runtime pkg get PACKAGENAME`

Retrieves a Package

```
USAGE
  $ aio runtime pkg get PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Retrieves a Package

ALIASES
  $ aio runtime pkg get
  $ aio rt package get
  $ aio rt pkg get
```

## `aio runtime pkg list [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio runtime pkg list [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of packages from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Packages

ALIASES
  $ aio runtime package ls
  $ aio runtime pkg list
  $ aio runtime pkg ls
  $ aio rt package list
  $ aio rt package ls
  $ aio rt pkg list
  $ aio rt pkg ls
```

## `aio runtime pkg ls [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio runtime pkg ls [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of packages from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Packages

ALIASES
  $ aio runtime package ls
  $ aio runtime pkg list
  $ aio runtime pkg ls
  $ aio rt package list
  $ aio rt package ls
  $ aio rt pkg list
  $ aio rt pkg ls
```

## `aio runtime pkg update PACKAGENAME`

Updates a Package

```
USAGE
  $ aio runtime pkg update PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --shared=<option>              parameter to be passed to indicate whether package is shared or private
                                 <options: true|yes|false|no>
  --version                      Show version

DESCRIPTION
  Updates a Package

ALIASES
  $ aio runtime pkg update
  $ aio rt package update
  $ aio rt pkg update
```

## `aio runtime prop`

Execute property commands

```
USAGE
  $ aio runtime prop [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Execute property commands

ALIASES
  $ aio runtime prop
  $ aio rt prop
  $ aio rt property
```

## `aio runtime prop get`

get property

```
USAGE
  $ aio runtime prop get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace] [--all] [--apibuild] [--apibuildno] [--cliversion]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --all            all properties
  --apibuild       whisk API build version
  --apibuildno     whisk API build number
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --cliversion     whisk CLI version
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --namespace      whisk namespace
  --version        Show version

DESCRIPTION
  get property

ALIASES
  $ aio runtime prop get
  $ aio rt property get
  $ aio rt prop get
```

## `aio runtime prop set`

set property

```
USAGE
  $ aio runtime prop set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace <value>]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --key                client key
  --namespace=<value>  whisk namespace
  --version            Show version

DESCRIPTION
  set property

ALIASES
  $ aio runtime prop set
  $ aio rt property set
  $ aio rt prop set
```

## `aio runtime prop unset`

unset property

```
USAGE
  $ aio runtime prop unset [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --namespace      whisk namespace
  --version        Show version

DESCRIPTION
  unset property

ALIASES
  $ aio runtime prop unset
  $ aio rt property unset
  $ aio rt prop unset
```

## `aio runtime property`

Execute property commands

```
USAGE
  $ aio runtime property [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Execute property commands

ALIASES
  $ aio runtime prop
  $ aio rt prop
  $ aio rt property
```

## `aio runtime property get`

get property

```
USAGE
  $ aio runtime property get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace] [--all] [--apibuild] [--apibuildno] [--cliversion]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --all            all properties
  --apibuild       whisk API build version
  --apibuildno     whisk API build number
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --cliversion     whisk CLI version
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --namespace      whisk namespace
  --version        Show version

DESCRIPTION
  get property

ALIASES
  $ aio runtime prop get
  $ aio rt property get
  $ aio rt prop get
```

## `aio runtime property set`

set property

```
USAGE
  $ aio runtime property set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace <value>]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --key                client key
  --namespace=<value>  whisk namespace
  --version            Show version

DESCRIPTION
  set property

ALIASES
  $ aio runtime prop set
  $ aio rt property set
  $ aio rt prop set
```

## `aio runtime property unset`

unset property

```
USAGE
  $ aio runtime property unset [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --namespace      whisk namespace
  --version        Show version

DESCRIPTION
  unset property

ALIASES
  $ aio runtime prop unset
  $ aio rt property unset
  $ aio rt prop unset
```

## `aio runtime route`

Manage your api routes

```
USAGE
  $ aio runtime route [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your api routes

ALIASES
  $ aio rt api
  $ aio runtime route
  $ aio rt route
```

## `aio runtime route create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`

create a new api route

```
USAGE
  $ aio runtime route create [BASEPATH] [RELPATH] [APIVERB] [ACTION] [--cert <value>] [--key <value>] [--apiversion
    <value>] [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-n <value> | -c <value>]
    [-r html|http|json|text|svg|json | ]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb
  ACTION    The action to call

FLAGS
  -c, --config-file=<value>     file containing API configuration in swagger JSON format
  -i, --insecure                bypass certificate check
  -n, --apiname=<value>         Friendly name of the API; ignored when CFG_FILE is specified (default BASE_PATH)
  -r, --response-type=<option>  [default: json] Set the web action response TYPE.
                                <options: html|http|json|text|svg|json>
  -u, --auth=<value>            whisk auth
  -v, --verbose                 Verbose output
  --apihost=<value>             whisk API host
  --apiversion=<value>          whisk API version
  --cert=<value>                client cert
  --debug=<value>               Debug level output
  --help                        Show help
  --key=<value>                 client key
  --version                     Show version

DESCRIPTION
  create a new api route

ALIASES
  $ aio runtime route create
  $ aio rt route create
  $ aio rt api create
```

## `aio runtime route delete BASEPATHORAPINAME [RELPATH] [APIVERB]`

delete an API

```
USAGE
  $ aio runtime route delete BASEPATHORAPINAME [RELPATH] [APIVERB] [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name
  RELPATH            The path of the api relative to the base path
  APIVERB            (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  delete an API

ALIASES
  $ aio runtime route delete
  $ aio rt route delete
  $ aio rt api delete
```

## `aio runtime route get BASEPATHORAPINAME`

get API details

```
USAGE
  $ aio runtime route get BASEPATHORAPINAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  get API details

ALIASES
  $ aio runtime route get
  $ aio rt route get
  $ aio rt api get
```

## `aio runtime route list [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio runtime route list [BASEPATH] [RELPATH] [APIVERB] [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--json]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of triggers
  -s, --skip=<value>    exclude the first SKIP number of triggers from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  list route/apis for Adobe I/O Runtime

ALIASES
  $ aio runtime api ls
  $ aio runtime route list
  $ aio runtime route ls
  $ aio rt api list
  $ aio rt api ls
  $ aio rt route list
  $ aio rt route ls
```

## `aio runtime route ls [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio runtime route ls [BASEPATH] [RELPATH] [APIVERB] [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--json]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of triggers
  -s, --skip=<value>    exclude the first SKIP number of triggers from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  list route/apis for Adobe I/O Runtime

ALIASES
  $ aio runtime api ls
  $ aio runtime route list
  $ aio runtime route ls
  $ aio rt api list
  $ aio rt api ls
  $ aio rt route list
  $ aio rt route ls
```

## `aio runtime rule`

Manage your rules

```
USAGE
  $ aio runtime rule [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your rules

ALIASES
  $ aio rt rule
```

## `aio runtime rule create NAME TRIGGER ACTION`

Create a Rule

```
USAGE
  $ aio runtime rule create NAME TRIGGER ACTION [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>]
    [-v] [--version] [--help] [--json]

ARGUMENTS
  NAME     Name of the rule
  TRIGGER  Name of the trigger
  ACTION   Name of the action

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --json           output raw json
  --key            client key
  --version        Show version

DESCRIPTION
  Create a Rule

ALIASES
  $ aio rt rule create
```

## `aio runtime rule delete NAME`

Delete a Rule

```
USAGE
  $ aio runtime rule delete NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--json]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --json           output raw json
  --key            client key
  --version        Show version

DESCRIPTION
  Delete a Rule

ALIASES
  $ aio rt rule delete
```

## `aio runtime rule disable NAME`

Disable a Rule

```
USAGE
  $ aio runtime rule disable NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Disable a Rule

ALIASES
  $ aio rt rule disable
```

## `aio runtime rule enable NAME`

Enable a Rule

```
USAGE
  $ aio runtime rule enable NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Enable a Rule

ALIASES
  $ aio rt rule enable
```

## `aio runtime rule get NAME`

Retrieves a Rule

```
USAGE
  $ aio runtime rule get NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Retrieves a Rule

ALIASES
  $ aio rt rule get
```

## `aio runtime rule list`

Retrieves a list of Rules

```
USAGE
  $ aio runtime rule list [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of rules
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  Limit number of rules returned (min: 0, max: 50)
  -n, --name           sort results by name
  -s, --skip=<value>   Skip number of rules returned
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --name-sort          sort results by name
  --version            Show version

DESCRIPTION
  Retrieves a list of Rules

ALIASES
  $ aio runtime rule ls
  $ aio rt rule list
  $ aio rt rule ls
```

## `aio runtime rule ls`

Retrieves a list of Rules

```
USAGE
  $ aio runtime rule ls [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of rules
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  Limit number of rules returned (min: 0, max: 50)
  -n, --name           sort results by name
  -s, --skip=<value>   Skip number of rules returned
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --name-sort          sort results by name
  --version            Show version

DESCRIPTION
  Retrieves a list of Rules

ALIASES
  $ aio runtime rule ls
  $ aio rt rule list
  $ aio rt rule ls
```

## `aio runtime rule status NAME`

Gets the status of a rule

```
USAGE
  $ aio runtime rule status NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Gets the status of a rule

ALIASES
  $ aio rt rule status
```

## `aio runtime rule update NAME TRIGGER ACTION`

Update a Rule

```
USAGE
  $ aio runtime rule update NAME TRIGGER ACTION [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>]
    [-v] [--version] [--help] [--json]

ARGUMENTS
  NAME     Name of the rule
  TRIGGER  Name of the trigger
  ACTION   Name of the action

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --json           output raw json
  --key            client key
  --version        Show version

DESCRIPTION
  Update a Rule

ALIASES
  $ aio rt rule update
```

## `aio runtime trigger`

Manage your triggers

```
USAGE
  $ aio runtime trigger [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your triggers

ALIASES
  $ aio rt trigger
```

## `aio runtime trigger create TRIGGERNAME`

Create a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime trigger create TRIGGERNAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>] [-a <value>] [-A <value>] [-f <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -f, --feed=<value>             trigger feed ACTION_NAME
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameter values in KEY VALUE format
  -u, --auth                     whisk auth
  -v, --verbose                  Verbose output
  --apihost                      whisk API host
  --apiversion                   whisk API version
  --cert                         client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --key                          client key
  --version                      Show version

DESCRIPTION
  Create a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger create
```

## `aio runtime trigger delete TRIGGERPATH`

Delete a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime trigger delete TRIGGERPATH [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help]

ARGUMENTS
  TRIGGERPATH  The name of the trigger, in the format /NAMESPACE/NAME

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Delete a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger delete
```

## `aio runtime trigger fire TRIGGERNAME`

Fire a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime trigger fire TRIGGERNAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -P, --param-file=<value>  FILE containing parameter values in JSON format
  -i, --insecure            bypass certificate check
  -p, --param=<value>...    parameter values in KEY VALUE format
  -u, --auth                whisk auth
  -v, --verbose             Verbose output
  --apihost                 whisk API host
  --apiversion              whisk API version
  --cert                    client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key                     client key
  --version                 Show version

DESCRIPTION
  Fire a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger fire
```

## `aio runtime trigger get TRIGGERPATH`

Get a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime trigger get TRIGGERPATH [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help]

ARGUMENTS
  TRIGGERPATH  The name/path of the trigger, in the format /NAMESPACE/NAME

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger get
```

## `aio runtime trigger list`

Lists all of your triggers for Adobe I/O Runtime

```
USAGE
  $ aio runtime trigger list [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of triggers
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  [default: 30] only return LIMIT number of triggers (min: 0, max: 50)
  -n, --name           sort results by name
  -s, --skip=<value>   exclude the first SKIP number of triggers from the result
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --name-sort          sort results by name
  --version            Show version

DESCRIPTION
  Lists all of your triggers for Adobe I/O Runtime

ALIASES
  $ aio runtime trigger ls
  $ aio rt trigger list
  $ aio rt trigger ls
```

## `aio runtime trigger ls`

Lists all of your triggers for Adobe I/O Runtime

```
USAGE
  $ aio runtime trigger ls [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of triggers
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  [default: 30] only return LIMIT number of triggers (min: 0, max: 50)
  -n, --name           sort results by name
  -s, --skip=<value>   exclude the first SKIP number of triggers from the result
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --name-sort          sort results by name
  --version            Show version

DESCRIPTION
  Lists all of your triggers for Adobe I/O Runtime

ALIASES
  $ aio runtime trigger ls
  $ aio rt trigger list
  $ aio rt trigger ls
```

## `aio runtime trigger update TRIGGERNAME`

Update or create a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime trigger update TRIGGERNAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>] [-a <value>] [-A <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameter values in KEY VALUE format
  -u, --auth                     whisk auth
  -v, --verbose                  Verbose output
  --apihost                      whisk API host
  --apiversion                   whisk API version
  --cert                         client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --key                          client key
  --version                      Show version

DESCRIPTION
  Update or create a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger update
```

## `aio telemetry yes`

Allow the cli to collect anonymous usage data

```
USAGE
  $ aio telemetry yes
  $ aio telemetry off
  $ aio telemetry

ARGUMENTS
  STATE  (on|off|yes|no) set telemetry state

DESCRIPTION
  Allow the cli to collect anonymous usage data
```

_See code: [@adobe/aio-cli-plugin-telemetry](https://github.com/adobe/aio-cli-plugin-telemetry/blob/v1.2.0/src/commands/telemetry/index.js)_

## `aio templates`

Discover, install, or uninstall a new template into an existing Adobe Developer App Builder App

```
USAGE
  $ aio templates [-v]

FLAGS
  -v, --verbose  Verbose output

DESCRIPTION
  Discover, install, or uninstall a new template into an existing Adobe Developer App Builder App
```

_See code: [@adobe/aio-cli-plugin-app-templates](https://github.com/adobe/aio-cli-plugin-app-templates/blob/1.5.2/src/commands/templates/index.js)_

## `aio templates disco`

Discover App Builder templates to install

```
USAGE
  $ aio templates disco [-v] [-i] [-f publishDate|names|adobeRecommended] [-o asc|desc]

FLAGS
  -f, --sort-field=<option>  [default: adobeRecommended] which column to sort, use the sort-order flag to specify sort
                             direction
                             <options: publishDate|names|adobeRecommended>
  -i, --interactive          interactive install mode
  -o, --sort-order=<option>  [default: desc] sort order for a column, use the sort-field flag to specify which column to
                             sort
                             <options: asc|desc>
  -v, --verbose              Verbose output

DESCRIPTION
  Discover App Builder templates to install

ALIASES
  $ aio templates disco
```

## `aio templates discover`

Discover App Builder templates to install

```
USAGE
  $ aio templates discover [-v] [-i] [-f publishDate|names|adobeRecommended] [-o asc|desc]

FLAGS
  -f, --sort-field=<option>  [default: adobeRecommended] which column to sort, use the sort-order flag to specify sort
                             direction
                             <options: publishDate|names|adobeRecommended>
  -i, --interactive          interactive install mode
  -o, --sort-order=<option>  [default: desc] sort order for a column, use the sort-field flag to specify which column to
                             sort
                             <options: asc|desc>
  -v, --verbose              Verbose output

DESCRIPTION
  Discover App Builder templates to install

ALIASES
  $ aio templates disco
```

## `aio templates i PATH`

Install an Adobe Developer App Builder template

```
USAGE
  $ aio templates i PATH [-v] [-y] [--install] [--process-install-config] [--template-options <value>]

ARGUMENTS
  PATH  path to the template (npm package name, file path, url). See examples

FLAGS
  -v, --verbose                  Verbose output
  -y, --yes                      Skip questions, and use all default values
  --[no-]install                 [default: true] Run npm installation after files are created
  --[no-]process-install-config  [default: true] Process the template install.yml configuration file, defaults to true,
                                 to skip processing install.yml use --no-process-install-config
  --template-options=<value>     Additional template options, as a base64-encoded json string

DESCRIPTION
  Install an Adobe Developer App Builder template

ALIASES
  $ aio templates i

EXAMPLES
  $ aio templates install https://github.com/org/repo

  $ aio templates install git+https://github.com/org/repo

  $ aio templates install ssh://github.com/org/repo

  $ aio templates install git+ssh://github.com/org/repo

  $ aio templates install file:../relative/path/to/template/folder

  $ aio templates install file:/absolute/path/to/template/folder

  $ aio templates install ../relative/path/to/template/folder

  $ aio templates install /absolute/path/to/template/folder

  $ aio templates install npm-package-name

  $ aio templates install npm-package-name@tagOrVersion

  $ aio templates install @scope/npm-package-name

  $ aio templates install @scope/npm-package-name@tagOrVersion
```

## `aio templates info`

List all App Builder templates that are installed

```
USAGE
  $ aio templates info [-v] [-y | -j] [-s]

FLAGS
  -j, --json               output raw json
  -s, --required-services  includes services required by a template in the output
  -v, --verbose            Verbose output
  -y, --yml                output yml

DESCRIPTION
  List all App Builder templates that are installed
```

## `aio templates install PATH`

Install an Adobe Developer App Builder template

```
USAGE
  $ aio templates install PATH [-v] [-y] [--install] [--process-install-config] [--template-options <value>]

ARGUMENTS
  PATH  path to the template (npm package name, file path, url). See examples

FLAGS
  -v, --verbose                  Verbose output
  -y, --yes                      Skip questions, and use all default values
  --[no-]install                 [default: true] Run npm installation after files are created
  --[no-]process-install-config  [default: true] Process the template install.yml configuration file, defaults to true,
                                 to skip processing install.yml use --no-process-install-config
  --template-options=<value>     Additional template options, as a base64-encoded json string

DESCRIPTION
  Install an Adobe Developer App Builder template

ALIASES
  $ aio templates i

EXAMPLES
  $ aio templates install https://github.com/org/repo

  $ aio templates install git+https://github.com/org/repo

  $ aio templates install ssh://github.com/org/repo

  $ aio templates install git+ssh://github.com/org/repo

  $ aio templates install file:../relative/path/to/template/folder

  $ aio templates install file:/absolute/path/to/template/folder

  $ aio templates install ../relative/path/to/template/folder

  $ aio templates install /absolute/path/to/template/folder

  $ aio templates install npm-package-name

  $ aio templates install npm-package-name@tagOrVersion

  $ aio templates install @scope/npm-package-name

  $ aio templates install @scope/npm-package-name@tagOrVersion
```

## `aio templates remove NAME`

Remove an Adobe Developer App Builder template from the Template Registry

```
USAGE
  $ aio templates remove NAME [-v]

ARGUMENTS
  NAME  The name of the package implementing the template on npmjs.com

FLAGS
  -v, --verbose  Verbose output

DESCRIPTION
  Remove an Adobe Developer App Builder template from the Template Registry

ALIASES
  $ aio templates rm

EXAMPLES
  $ aio templates remove @adobe/app-builder-template
```

## `aio templates rm NAME`

Remove an Adobe Developer App Builder template from the Template Registry

```
USAGE
  $ aio templates rm NAME [-v]

ARGUMENTS
  NAME  The name of the package implementing the template on npmjs.com

FLAGS
  -v, --verbose  Verbose output

DESCRIPTION
  Remove an Adobe Developer App Builder template from the Template Registry

ALIASES
  $ aio templates rm

EXAMPLES
  $ aio templates remove @adobe/app-builder-template
```

## `aio templates rollback`

Clears all installed templates

```
USAGE
  $ aio templates rollback [-v] [-i] [-l] [-c]

FLAGS
  -c, --[no-]confirm  confirmation needed for clear (defaults to true)
  -i, --interactive   interactive clear mode
  -l, --list          list templates that will be uninstalled
  -v, --verbose       Verbose output

DESCRIPTION
  Clears all installed templates
```

## `aio templates sub NAME GITHUBREPOURL`

Submit an Adobe Developer App Builder template

```
USAGE
  $ aio templates sub NAME GITHUBREPOURL [-v]

ARGUMENTS
  NAME           The name of the package implementing the template on npmjs.com
  GITHUBREPOURL  A link to the Github repository containing the package's source code

FLAGS
  -v, --verbose  Verbose output

DESCRIPTION
  Submit an Adobe Developer App Builder template

ALIASES
  $ aio templates sub

EXAMPLES
  $ aio templates submit @adobe/app-builder-template https://github.com/adobe/app-builder-template
```

## `aio templates submit NAME GITHUBREPOURL`

Submit an Adobe Developer App Builder template

```
USAGE
  $ aio templates submit NAME GITHUBREPOURL [-v]

ARGUMENTS
  NAME           The name of the package implementing the template on npmjs.com
  GITHUBREPOURL  A link to the Github repository containing the package's source code

FLAGS
  -v, --verbose  Verbose output

DESCRIPTION
  Submit an Adobe Developer App Builder template

ALIASES
  $ aio templates sub

EXAMPLES
  $ aio templates submit @adobe/app-builder-template https://github.com/adobe/app-builder-template
```

## `aio templates un PACKAGE-NAME`

Uninstall an Adobe Developer App Builder template

```
USAGE
  $ aio templates un PACKAGE-NAME [-v]

ARGUMENTS
  PACKAGE-NAME  package name of the template

FLAGS
  -v, --verbose  Verbose output

DESCRIPTION
  Uninstall an Adobe Developer App Builder template

ALIASES
  $ aio templates un
```

## `aio templates uninstall PACKAGE-NAME`

Uninstall an Adobe Developer App Builder template

```
USAGE
  $ aio templates uninstall PACKAGE-NAME [-v]

ARGUMENTS
  PACKAGE-NAME  package name of the template

FLAGS
  -v, --verbose  Verbose output

DESCRIPTION
  Uninstall an Adobe Developer App Builder template

ALIASES
  $ aio templates un
```

## `aio update`

Update all installed plugins.

```
USAGE
  $ aio update [-i] [-l] [-c] [-v]

FLAGS
  -c, --[no-]confirm  confirmation needed for update (defaults to true)
  -i, --interactive   interactive update mode
  -l, --list          list plugins that will be updated
  -v, --verbose       Verbose output

DESCRIPTION
  Update all installed plugins.
  This command will only:
  - update user-installed plugins that are not core
```

_See code: [src/commands/update.ts](https://github.com/adobe/aio-cli/blob/9.4.1/src/commands/update.ts)_

## `aio where`

Show the currently selected Organization, Project and Workspace

```
USAGE
  $ aio where [--help] [-j | -y]

FLAGS
  -j, --json  Output json
  -y, --yml   Output yml
  --help      Show help

DESCRIPTION
  Show the currently selected Organization, Project and Workspace

ALIASES
  $ aio where
```
<!-- commandsstop -->
* [`aio app`](#aio-app)
* [`aio app add`](#aio-app-add)
* [`aio app add action`](#aio-app-add-action)
* [`aio app add actions`](#aio-app-add-actions)
* [`aio app add ci`](#aio-app-add-ci)
* [`aio app add event`](#aio-app-add-event)
* [`aio app add events`](#aio-app-add-events)
* [`aio app add ext`](#aio-app-add-ext)
* [`aio app add extension`](#aio-app-add-extension)
* [`aio app add extensions`](#aio-app-add-extensions)
* [`aio app add service`](#aio-app-add-service)
* [`aio app add services`](#aio-app-add-services)
* [`aio app add web-assets`](#aio-app-add-web-assets)
* [`aio app build`](#aio-app-build)
* [`aio app config`](#aio-app-config)
* [`aio app config get`](#aio-app-config-get)
* [`aio app config get lf`](#aio-app-config-get-lf)
* [`aio app config get lf errors`](#aio-app-config-get-lf-errors)
* [`aio app config get log-forwarding`](#aio-app-config-get-log-forwarding)
* [`aio app config get log-forwarding errors`](#aio-app-config-get-log-forwarding-errors)
* [`aio app config set`](#aio-app-config-set)
* [`aio app config set lf`](#aio-app-config-set-lf)
* [`aio app config set log-forwarding`](#aio-app-config-set-log-forwarding)
* [`aio app create [PATH]`](#aio-app-create-path)
* [`aio app delete`](#aio-app-delete)
* [`aio app delete action [ACTION-NAME]`](#aio-app-delete-action-action-name)
* [`aio app delete actions [ACTION-NAME]`](#aio-app-delete-actions-action-name)
* [`aio app delete ci`](#aio-app-delete-ci)
* [`aio app delete event [EVENT-ACTION-NAME]`](#aio-app-delete-event-event-action-name)
* [`aio app delete events [EVENT-ACTION-NAME]`](#aio-app-delete-events-event-action-name)
* [`aio app delete ext`](#aio-app-delete-ext)
* [`aio app delete extension`](#aio-app-delete-extension)
* [`aio app delete extensions`](#aio-app-delete-extensions)
* [`aio app delete service`](#aio-app-delete-service)
* [`aio app delete services`](#aio-app-delete-services)
* [`aio app delete web-assets`](#aio-app-delete-web-assets)
* [`aio app deploy`](#aio-app-deploy)
* [`aio app get-url [ACTION]`](#aio-app-get-url-action)
* [`aio app info`](#aio-app-info)
* [`aio app init [PATH]`](#aio-app-init-path)
* [`aio app list`](#aio-app-list)
* [`aio app list ext`](#aio-app-list-ext)
* [`aio app list ext-points`](#aio-app-list-ext-points)
* [`aio app list extension`](#aio-app-list-extension)
* [`aio app list extension-points`](#aio-app-list-extension-points)
* [`aio app list extensions`](#aio-app-list-extensions)
* [`aio app logs`](#aio-app-logs)
* [`aio app run`](#aio-app-run)
* [`aio app test`](#aio-app-test)
* [`aio app undeploy`](#aio-app-undeploy)
* [`aio app use [CONFIG_FILE_PATH]`](#aio-app-use-config_file_path)
* [`aio auth`](#aio-auth)
* [`aio auth ctx`](#aio-auth-ctx)
* [`aio auth login`](#aio-auth-login)
* [`aio auth logout`](#aio-auth-logout)
* [`aio autocomplete [SHELL]`](#aio-autocomplete-shell)
* [`aio certificate`](#aio-certificate)
* [`aio certificate fingerprint FILE`](#aio-certificate-fingerprint-file)
* [`aio certificate generate`](#aio-certificate-generate)
* [`aio certificate verify FILE`](#aio-certificate-verify-file)
* [`aio config`](#aio-config)
* [`aio config clear`](#aio-config-clear)
* [`aio config del KEYS...`](#aio-config-del-keys)
* [`aio config delete KEYS...`](#aio-config-delete-keys)
* [`aio config edit`](#aio-config-edit)
* [`aio config get KEY`](#aio-config-get-key)
* [`aio config list`](#aio-config-list)
* [`aio config ls`](#aio-config-ls)
* [`aio config rm KEYS...`](#aio-config-rm-keys)
* [`aio config set key 'a value'       # set key to 'a value'`](#aio-config-set-key-a-value--------set-key-to-a-value)
* [`aio console`](#aio-console)
* [`aio console open`](#aio-console-open)
* [`aio console org`](#aio-console-org)
* [`aio console org list`](#aio-console-org-list)
* [`aio console org ls`](#aio-console-org-ls)
* [`aio console org sel [ORGCODE]`](#aio-console-org-sel-orgcode)
* [`aio console org select [ORGCODE]`](#aio-console-org-select-orgcode)
* [`aio console project`](#aio-console-project)
* [`aio console project list`](#aio-console-project-list)
* [`aio console project ls`](#aio-console-project-ls)
* [`aio console project sel [PROJECTIDORNAME]`](#aio-console-project-sel-projectidorname)
* [`aio console project select [PROJECTIDORNAME]`](#aio-console-project-select-projectidorname)
* [`aio console publickey`](#aio-console-publickey)
* [`aio console publickey delete IDORFINGERPRINT`](#aio-console-publickey-delete-idorfingerprint)
* [`aio console publickey list`](#aio-console-publickey-list)
* [`aio console publickey upload FILE`](#aio-console-publickey-upload-file)
* [`aio console where`](#aio-console-where)
* [`aio console workspace`](#aio-console-workspace)
* [`aio console workspace dl [DESTINATION]`](#aio-console-workspace-dl-destination)
* [`aio console workspace download [DESTINATION]`](#aio-console-workspace-download-destination)
* [`aio console workspace list`](#aio-console-workspace-list)
* [`aio console workspace ls`](#aio-console-workspace-ls)
* [`aio console workspace sel [WORKSPACEIDORNAME]`](#aio-console-workspace-sel-workspaceidorname)
* [`aio console workspace select [WORKSPACEIDORNAME]`](#aio-console-workspace-select-workspaceidorname)
* [`aio console ws`](#aio-console-ws)
* [`aio console ws dl [DESTINATION]`](#aio-console-ws-dl-destination)
* [`aio console ws download [DESTINATION]`](#aio-console-ws-download-destination)
* [`aio console ws list`](#aio-console-ws-list)
* [`aio console ws ls`](#aio-console-ws-ls)
* [`aio console ws sel [WORKSPACEIDORNAME]`](#aio-console-ws-sel-workspaceidorname)
* [`aio console ws select [WORKSPACEIDORNAME]`](#aio-console-ws-select-workspaceidorname)
* [`aio context`](#aio-context)
* [`aio ctx`](#aio-ctx)
* [`aio discover`](#aio-discover)
* [`aio event`](#aio-event)
* [`aio event eventmetadata`](#aio-event-eventmetadata)
* [`aio event eventmetadata create PROVIDERID`](#aio-event-eventmetadata-create-providerid)
* [`aio event eventmetadata delete PROVIDERID [EVENTCODE]`](#aio-event-eventmetadata-delete-providerid-eventcode)
* [`aio event eventmetadata get PROVIDERID EVENTCODE`](#aio-event-eventmetadata-get-providerid-eventcode)
* [`aio event eventmetadata list PROVIDERID`](#aio-event-eventmetadata-list-providerid)
* [`aio event eventmetadata ls PROVIDERID`](#aio-event-eventmetadata-ls-providerid)
* [`aio event eventmetadata update PROVIDERID EVENTCODE`](#aio-event-eventmetadata-update-providerid-eventcode)
* [`aio event provider`](#aio-event-provider)
* [`aio event provider create`](#aio-event-provider-create)
* [`aio event provider delete PROVIDERID`](#aio-event-provider-delete-providerid)
* [`aio event provider get PROVIDERID`](#aio-event-provider-get-providerid)
* [`aio event provider list`](#aio-event-provider-list)
* [`aio event provider ls`](#aio-event-provider-ls)
* [`aio event provider update PROVIDERID`](#aio-event-provider-update-providerid)
* [`aio event reg`](#aio-event-reg)
* [`aio event reg create BODYJSONFILE`](#aio-event-reg-create-bodyjsonfile)
* [`aio event reg delete REGISTRATIONID`](#aio-event-reg-delete-registrationid)
* [`aio event reg get REGISTRATIONID`](#aio-event-reg-get-registrationid)
* [`aio event reg list`](#aio-event-reg-list)
* [`aio event reg ls`](#aio-event-reg-ls)
* [`aio event registration`](#aio-event-registration)
* [`aio event registration create BODYJSONFILE`](#aio-event-registration-create-bodyjsonfile)
* [`aio event registration delete REGISTRATIONID`](#aio-event-registration-delete-registrationid)
* [`aio event registration get REGISTRATIONID`](#aio-event-registration-get-registrationid)
* [`aio event registration list`](#aio-event-registration-list)
* [`aio event registration ls`](#aio-event-registration-ls)
* [`aio help [COMMANDS]`](#aio-help-commands)
* [`aio info`](#aio-info)
* [`aio login`](#aio-login)
* [`aio logout`](#aio-logout)
* [`aio open`](#aio-open)
* [`aio plugins`](#aio-plugins)
* [`aio plugins:install PLUGIN...`](#aio-pluginsinstall-plugin)
* [`aio plugins discover`](#aio-plugins-discover)
* [`aio plugins:inspect PLUGIN...`](#aio-pluginsinspect-plugin)
* [`aio plugins:install PLUGIN...`](#aio-pluginsinstall-plugin-1)
* [`aio plugins:link PLUGIN`](#aio-pluginslink-plugin)
* [`aio plugins:uninstall PLUGIN...`](#aio-pluginsuninstall-plugin)
* [`aio plugins:uninstall PLUGIN...`](#aio-pluginsuninstall-plugin-1)
* [`aio plugins:uninstall PLUGIN...`](#aio-pluginsuninstall-plugin-2)
* [`aio plugins update`](#aio-plugins-update)
* [`aio report`](#aio-report)
* [`aio rollback`](#aio-rollback)
* [`aio rt`](#aio-rt)
* [`aio rt action`](#aio-rt-action)
* [`aio rt action create ACTIONNAME [ACTIONPATH]`](#aio-rt-action-create-actionname-actionpath)
* [`aio rt action del ACTIONNAME`](#aio-rt-action-del-actionname)
* [`aio rt action delete ACTIONNAME`](#aio-rt-action-delete-actionname)
* [`aio rt action get ACTIONNAME`](#aio-rt-action-get-actionname)
* [`aio rt action invoke ACTIONNAME`](#aio-rt-action-invoke-actionname)
* [`aio rt action list [PACKAGENAME]`](#aio-rt-action-list-packagename)
* [`aio rt action ls [PACKAGENAME]`](#aio-rt-action-ls-packagename)
* [`aio rt action update ACTIONNAME [ACTIONPATH]`](#aio-rt-action-update-actionname-actionpath)
* [`aio rt actions list [PACKAGENAME]`](#aio-rt-actions-list-packagename)
* [`aio rt actions ls [PACKAGENAME]`](#aio-rt-actions-ls-packagename)
* [`aio rt activation`](#aio-rt-activation)
* [`aio rt activation get [ACTIVATIONID]`](#aio-rt-activation-get-activationid)
* [`aio rt activation list [ACTION_NAME]`](#aio-rt-activation-list-action_name)
* [`aio rt activation log [ACTIVATIONID]`](#aio-rt-activation-log-activationid)
* [`aio rt activation logs [ACTIVATIONID]`](#aio-rt-activation-logs-activationid)
* [`aio rt activation ls [ACTION_NAME]`](#aio-rt-activation-ls-action_name)
* [`aio rt activation result [ACTIVATIONID]`](#aio-rt-activation-result-activationid)
* [`aio rt activations list [ACTION_NAME]`](#aio-rt-activations-list-action_name)
* [`aio rt activations ls [ACTION_NAME]`](#aio-rt-activations-ls-action_name)
* [`aio rt api`](#aio-rt-api)
* [`aio rt api create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`](#aio-rt-api-create-basepath-relpath-apiverb-action)
* [`aio rt api delete BASEPATHORAPINAME [RELPATH] [APIVERB]`](#aio-rt-api-delete-basepathorapiname-relpath-apiverb)
* [`aio rt api get BASEPATHORAPINAME`](#aio-rt-api-get-basepathorapiname)
* [`aio rt api list [BASEPATH] [RELPATH] [APIVERB]`](#aio-rt-api-list-basepath-relpath-apiverb)
* [`aio rt api ls [BASEPATH] [RELPATH] [APIVERB]`](#aio-rt-api-ls-basepath-relpath-apiverb)
* [`aio rt deploy`](#aio-rt-deploy)
* [`aio rt deploy export`](#aio-rt-deploy-export)
* [`aio rt deploy report`](#aio-rt-deploy-report)
* [`aio rt deploy sync`](#aio-rt-deploy-sync)
* [`aio rt deploy undeploy`](#aio-rt-deploy-undeploy)
* [`aio rt deploy version`](#aio-rt-deploy-version)
* [`aio rt get`](#aio-rt-get)
* [`aio rt list`](#aio-rt-list)
* [`aio rt log [ACTIVATIONID]`](#aio-rt-log-activationid)
* [`aio rt logs [ACTIVATIONID]`](#aio-rt-logs-activationid)
* [`aio rt ls`](#aio-rt-ls)
* [`aio rt namespace`](#aio-rt-namespace)
* [`aio rt namespace lf`](#aio-rt-namespace-lf)
* [`aio rt namespace lf errors`](#aio-rt-namespace-lf-errors)
* [`aio rt namespace lf get`](#aio-rt-namespace-lf-get)
* [`aio rt namespace lf set`](#aio-rt-namespace-lf-set)
* [`aio rt namespace lf set adobe-io-runtime`](#aio-rt-namespace-lf-set-adobe-io-runtime)
* [`aio rt namespace lf set azure-log-analytics`](#aio-rt-namespace-lf-set-azure-log-analytics)
* [`aio rt namespace lf set splunk-hec`](#aio-rt-namespace-lf-set-splunk-hec)
* [`aio rt namespace list`](#aio-rt-namespace-list)
* [`aio rt namespace log-forwarding`](#aio-rt-namespace-log-forwarding)
* [`aio rt namespace log-forwarding errors`](#aio-rt-namespace-log-forwarding-errors)
* [`aio rt namespace log-forwarding get`](#aio-rt-namespace-log-forwarding-get)
* [`aio rt namespace log-forwarding set`](#aio-rt-namespace-log-forwarding-set)
* [`aio rt namespace log-forwarding set adobe-io-runtime`](#aio-rt-namespace-log-forwarding-set-adobe-io-runtime)
* [`aio rt namespace log-forwarding set azure-log-analytics`](#aio-rt-namespace-log-forwarding-set-azure-log-analytics)
* [`aio rt namespace log-forwarding set splunk-hec`](#aio-rt-namespace-log-forwarding-set-splunk-hec)
* [`aio rt namespace ls`](#aio-rt-namespace-ls)
* [`aio rt ns`](#aio-rt-ns)
* [`aio rt ns lf`](#aio-rt-ns-lf)
* [`aio rt ns lf errors`](#aio-rt-ns-lf-errors)
* [`aio rt ns lf get`](#aio-rt-ns-lf-get)
* [`aio rt ns lf set`](#aio-rt-ns-lf-set)
* [`aio rt ns lf set adobe-io-runtime`](#aio-rt-ns-lf-set-adobe-io-runtime)
* [`aio rt ns lf set azure-log-analytics`](#aio-rt-ns-lf-set-azure-log-analytics)
* [`aio rt ns lf set splunk-hec`](#aio-rt-ns-lf-set-splunk-hec)
* [`aio rt ns list`](#aio-rt-ns-list)
* [`aio rt ns log-forwarding`](#aio-rt-ns-log-forwarding)
* [`aio rt ns log-forwarding errors`](#aio-rt-ns-log-forwarding-errors)
* [`aio rt ns log-forwarding get`](#aio-rt-ns-log-forwarding-get)
* [`aio rt ns log-forwarding set`](#aio-rt-ns-log-forwarding-set)
* [`aio rt ns log-forwarding set adobe-io-runtime`](#aio-rt-ns-log-forwarding-set-adobe-io-runtime)
* [`aio rt ns log-forwarding set azure-log-analytics`](#aio-rt-ns-log-forwarding-set-azure-log-analytics)
* [`aio rt ns log-forwarding set splunk-hec`](#aio-rt-ns-log-forwarding-set-splunk-hec)
* [`aio rt ns ls`](#aio-rt-ns-ls)
* [`aio rt package`](#aio-rt-package)
* [`aio rt package bind PACKAGENAME BINDPACKAGENAME`](#aio-rt-package-bind-packagename-bindpackagename)
* [`aio rt package create PACKAGENAME`](#aio-rt-package-create-packagename)
* [`aio rt package delete PACKAGENAME`](#aio-rt-package-delete-packagename)
* [`aio rt package get PACKAGENAME`](#aio-rt-package-get-packagename)
* [`aio rt package list [NAMESPACE]`](#aio-rt-package-list-namespace)
* [`aio rt package ls [NAMESPACE]`](#aio-rt-package-ls-namespace)
* [`aio rt package update PACKAGENAME`](#aio-rt-package-update-packagename)
* [`aio rt pkg`](#aio-rt-pkg)
* [`aio rt pkg bind PACKAGENAME BINDPACKAGENAME`](#aio-rt-pkg-bind-packagename-bindpackagename)
* [`aio rt pkg create PACKAGENAME`](#aio-rt-pkg-create-packagename)
* [`aio rt pkg delete PACKAGENAME`](#aio-rt-pkg-delete-packagename)
* [`aio rt pkg get PACKAGENAME`](#aio-rt-pkg-get-packagename)
* [`aio rt pkg list [NAMESPACE]`](#aio-rt-pkg-list-namespace)
* [`aio rt pkg ls [NAMESPACE]`](#aio-rt-pkg-ls-namespace)
* [`aio rt pkg update PACKAGENAME`](#aio-rt-pkg-update-packagename)
* [`aio rt prop`](#aio-rt-prop)
* [`aio rt prop get`](#aio-rt-prop-get)
* [`aio rt prop set`](#aio-rt-prop-set)
* [`aio rt prop unset`](#aio-rt-prop-unset)
* [`aio rt property`](#aio-rt-property)
* [`aio rt property get`](#aio-rt-property-get)
* [`aio rt property set`](#aio-rt-property-set)
* [`aio rt property unset`](#aio-rt-property-unset)
* [`aio rt route create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`](#aio-rt-route-create-basepath-relpath-apiverb-action)
* [`aio rt route delete BASEPATHORAPINAME [RELPATH] [APIVERB]`](#aio-rt-route-delete-basepathorapiname-relpath-apiverb)
* [`aio rt route get BASEPATHORAPINAME`](#aio-rt-route-get-basepathorapiname)
* [`aio rt route list [BASEPATH] [RELPATH] [APIVERB]`](#aio-rt-route-list-basepath-relpath-apiverb)
* [`aio rt route ls [BASEPATH] [RELPATH] [APIVERB]`](#aio-rt-route-ls-basepath-relpath-apiverb)
* [`aio rt rule`](#aio-rt-rule)
* [`aio rt rule create NAME TRIGGER ACTION`](#aio-rt-rule-create-name-trigger-action)
* [`aio rt rule delete NAME`](#aio-rt-rule-delete-name)
* [`aio rt rule disable NAME`](#aio-rt-rule-disable-name)
* [`aio rt rule enable NAME`](#aio-rt-rule-enable-name)
* [`aio rt rule get NAME`](#aio-rt-rule-get-name)
* [`aio rt rule list`](#aio-rt-rule-list)
* [`aio rt rule ls`](#aio-rt-rule-ls)
* [`aio rt rule status NAME`](#aio-rt-rule-status-name)
* [`aio rt rule update NAME TRIGGER ACTION`](#aio-rt-rule-update-name-trigger-action)
* [`aio rt trigger`](#aio-rt-trigger)
* [`aio rt trigger create TRIGGERNAME`](#aio-rt-trigger-create-triggername)
* [`aio rt trigger delete TRIGGERPATH`](#aio-rt-trigger-delete-triggerpath)
* [`aio rt trigger fire TRIGGERNAME`](#aio-rt-trigger-fire-triggername)
* [`aio rt trigger get TRIGGERPATH`](#aio-rt-trigger-get-triggerpath)
* [`aio rt trigger list`](#aio-rt-trigger-list)
* [`aio rt trigger ls`](#aio-rt-trigger-ls)
* [`aio rt trigger update TRIGGERNAME`](#aio-rt-trigger-update-triggername)
* [`aio runtime`](#aio-runtime)
* [`aio runtime action`](#aio-runtime-action)
* [`aio runtime action create ACTIONNAME [ACTIONPATH]`](#aio-runtime-action-create-actionname-actionpath)
* [`aio runtime action del ACTIONNAME`](#aio-runtime-action-del-actionname)
* [`aio runtime action delete ACTIONNAME`](#aio-runtime-action-delete-actionname)
* [`aio runtime action get ACTIONNAME`](#aio-runtime-action-get-actionname)
* [`aio runtime action invoke ACTIONNAME`](#aio-runtime-action-invoke-actionname)
* [`aio runtime action list [PACKAGENAME]`](#aio-runtime-action-list-packagename)
* [`aio runtime action ls [PACKAGENAME]`](#aio-runtime-action-ls-packagename)
* [`aio runtime action update ACTIONNAME [ACTIONPATH]`](#aio-runtime-action-update-actionname-actionpath)
* [`aio runtime actions list [PACKAGENAME]`](#aio-runtime-actions-list-packagename)
* [`aio runtime actions ls [PACKAGENAME]`](#aio-runtime-actions-ls-packagename)
* [`aio runtime activation`](#aio-runtime-activation)
* [`aio runtime activation get [ACTIVATIONID]`](#aio-runtime-activation-get-activationid)
* [`aio runtime activation list [ACTION_NAME]`](#aio-runtime-activation-list-action_name)
* [`aio runtime activation log [ACTIVATIONID]`](#aio-runtime-activation-log-activationid)
* [`aio runtime activation logs [ACTIVATIONID]`](#aio-runtime-activation-logs-activationid)
* [`aio runtime activation ls [ACTION_NAME]`](#aio-runtime-activation-ls-action_name)
* [`aio runtime activation result [ACTIVATIONID]`](#aio-runtime-activation-result-activationid)
* [`aio runtime activations list [ACTION_NAME]`](#aio-runtime-activations-list-action_name)
* [`aio runtime activations ls [ACTION_NAME]`](#aio-runtime-activations-ls-action_name)
* [`aio runtime api`](#aio-runtime-api)
* [`aio runtime api create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`](#aio-runtime-api-create-basepath-relpath-apiverb-action)
* [`aio runtime api delete BASEPATHORAPINAME [RELPATH] [APIVERB]`](#aio-runtime-api-delete-basepathorapiname-relpath-apiverb)
* [`aio runtime api get BASEPATHORAPINAME`](#aio-runtime-api-get-basepathorapiname)
* [`aio runtime api list [BASEPATH] [RELPATH] [APIVERB]`](#aio-runtime-api-list-basepath-relpath-apiverb)
* [`aio runtime api ls [BASEPATH] [RELPATH] [APIVERB]`](#aio-runtime-api-ls-basepath-relpath-apiverb)
* [`aio runtime deploy`](#aio-runtime-deploy)
* [`aio runtime deploy export`](#aio-runtime-deploy-export)
* [`aio runtime deploy report`](#aio-runtime-deploy-report)
* [`aio runtime deploy sync`](#aio-runtime-deploy-sync)
* [`aio runtime deploy undeploy`](#aio-runtime-deploy-undeploy)
* [`aio runtime deploy version`](#aio-runtime-deploy-version)
* [`aio runtime list`](#aio-runtime-list)
* [`aio runtime log [ACTIVATIONID]`](#aio-runtime-log-activationid)
* [`aio runtime logs [ACTIVATIONID]`](#aio-runtime-logs-activationid)
* [`aio runtime ls`](#aio-runtime-ls)
* [`aio runtime namespace`](#aio-runtime-namespace)
* [`aio runtime namespace get`](#aio-runtime-namespace-get)
* [`aio runtime namespace lf`](#aio-runtime-namespace-lf)
* [`aio runtime namespace lf errors`](#aio-runtime-namespace-lf-errors)
* [`aio runtime namespace lf get`](#aio-runtime-namespace-lf-get)
* [`aio runtime namespace lf set`](#aio-runtime-namespace-lf-set)
* [`aio runtime namespace lf set adobe-io-runtime`](#aio-runtime-namespace-lf-set-adobe-io-runtime)
* [`aio runtime namespace lf set azure-log-analytics`](#aio-runtime-namespace-lf-set-azure-log-analytics)
* [`aio runtime namespace lf set splunk-hec`](#aio-runtime-namespace-lf-set-splunk-hec)
* [`aio runtime namespace list`](#aio-runtime-namespace-list)
* [`aio runtime namespace log-forwarding`](#aio-runtime-namespace-log-forwarding)
* [`aio runtime namespace log-forwarding errors`](#aio-runtime-namespace-log-forwarding-errors)
* [`aio runtime namespace log-forwarding get`](#aio-runtime-namespace-log-forwarding-get)
* [`aio runtime namespace log-forwarding set`](#aio-runtime-namespace-log-forwarding-set)
* [`aio runtime namespace log-forwarding set adobe-io-runtime`](#aio-runtime-namespace-log-forwarding-set-adobe-io-runtime)
* [`aio runtime namespace log-forwarding set azure-log-analytics`](#aio-runtime-namespace-log-forwarding-set-azure-log-analytics)
* [`aio runtime namespace log-forwarding set splunk-hec`](#aio-runtime-namespace-log-forwarding-set-splunk-hec)
* [`aio runtime namespace ls`](#aio-runtime-namespace-ls)
* [`aio runtime ns`](#aio-runtime-ns)
* [`aio runtime ns lf`](#aio-runtime-ns-lf)
* [`aio runtime ns lf errors`](#aio-runtime-ns-lf-errors)
* [`aio runtime ns lf get`](#aio-runtime-ns-lf-get)
* [`aio runtime ns lf set`](#aio-runtime-ns-lf-set)
* [`aio runtime ns lf set adobe-io-runtime`](#aio-runtime-ns-lf-set-adobe-io-runtime)
* [`aio runtime ns lf set azure-log-analytics`](#aio-runtime-ns-lf-set-azure-log-analytics)
* [`aio runtime ns lf set splunk-hec`](#aio-runtime-ns-lf-set-splunk-hec)
* [`aio runtime ns list`](#aio-runtime-ns-list)
* [`aio runtime ns log-forwarding`](#aio-runtime-ns-log-forwarding)
* [`aio runtime ns log-forwarding errors`](#aio-runtime-ns-log-forwarding-errors)
* [`aio runtime ns log-forwarding get`](#aio-runtime-ns-log-forwarding-get)
* [`aio runtime ns log-forwarding set`](#aio-runtime-ns-log-forwarding-set)
* [`aio runtime ns log-forwarding set adobe-io-runtime`](#aio-runtime-ns-log-forwarding-set-adobe-io-runtime)
* [`aio runtime ns log-forwarding set azure-log-analytics`](#aio-runtime-ns-log-forwarding-set-azure-log-analytics)
* [`aio runtime ns log-forwarding set splunk-hec`](#aio-runtime-ns-log-forwarding-set-splunk-hec)
* [`aio runtime ns ls`](#aio-runtime-ns-ls)
* [`aio runtime package`](#aio-runtime-package)
* [`aio runtime package bind PACKAGENAME BINDPACKAGENAME`](#aio-runtime-package-bind-packagename-bindpackagename)
* [`aio runtime package create PACKAGENAME`](#aio-runtime-package-create-packagename)
* [`aio runtime package delete PACKAGENAME`](#aio-runtime-package-delete-packagename)
* [`aio runtime package get PACKAGENAME`](#aio-runtime-package-get-packagename)
* [`aio runtime package list [NAMESPACE]`](#aio-runtime-package-list-namespace)
* [`aio runtime package ls [NAMESPACE]`](#aio-runtime-package-ls-namespace)
* [`aio runtime package update PACKAGENAME`](#aio-runtime-package-update-packagename)
* [`aio runtime pkg`](#aio-runtime-pkg)
* [`aio runtime pkg bind PACKAGENAME BINDPACKAGENAME`](#aio-runtime-pkg-bind-packagename-bindpackagename)
* [`aio runtime pkg create PACKAGENAME`](#aio-runtime-pkg-create-packagename)
* [`aio runtime pkg delete PACKAGENAME`](#aio-runtime-pkg-delete-packagename)
* [`aio runtime pkg get PACKAGENAME`](#aio-runtime-pkg-get-packagename)
* [`aio runtime pkg list [NAMESPACE]`](#aio-runtime-pkg-list-namespace)
* [`aio runtime pkg ls [NAMESPACE]`](#aio-runtime-pkg-ls-namespace)
* [`aio runtime pkg update PACKAGENAME`](#aio-runtime-pkg-update-packagename)
* [`aio runtime prop`](#aio-runtime-prop)
* [`aio runtime prop get`](#aio-runtime-prop-get)
* [`aio runtime prop set`](#aio-runtime-prop-set)
* [`aio runtime prop unset`](#aio-runtime-prop-unset)
* [`aio runtime property`](#aio-runtime-property)
* [`aio runtime property get`](#aio-runtime-property-get)
* [`aio runtime property set`](#aio-runtime-property-set)
* [`aio runtime property unset`](#aio-runtime-property-unset)
* [`aio runtime route`](#aio-runtime-route)
* [`aio runtime route create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`](#aio-runtime-route-create-basepath-relpath-apiverb-action)
* [`aio runtime route delete BASEPATHORAPINAME [RELPATH] [APIVERB]`](#aio-runtime-route-delete-basepathorapiname-relpath-apiverb)
* [`aio runtime route get BASEPATHORAPINAME`](#aio-runtime-route-get-basepathorapiname)
* [`aio runtime route list [BASEPATH] [RELPATH] [APIVERB]`](#aio-runtime-route-list-basepath-relpath-apiverb)
* [`aio runtime route ls [BASEPATH] [RELPATH] [APIVERB]`](#aio-runtime-route-ls-basepath-relpath-apiverb)
* [`aio runtime rule`](#aio-runtime-rule)
* [`aio runtime rule create NAME TRIGGER ACTION`](#aio-runtime-rule-create-name-trigger-action)
* [`aio runtime rule delete NAME`](#aio-runtime-rule-delete-name)
* [`aio runtime rule disable NAME`](#aio-runtime-rule-disable-name)
* [`aio runtime rule enable NAME`](#aio-runtime-rule-enable-name)
* [`aio runtime rule get NAME`](#aio-runtime-rule-get-name)
* [`aio runtime rule list`](#aio-runtime-rule-list)
* [`aio runtime rule ls`](#aio-runtime-rule-ls)
* [`aio runtime rule status NAME`](#aio-runtime-rule-status-name)
* [`aio runtime rule update NAME TRIGGER ACTION`](#aio-runtime-rule-update-name-trigger-action)
* [`aio runtime trigger`](#aio-runtime-trigger)
* [`aio runtime trigger create TRIGGERNAME`](#aio-runtime-trigger-create-triggername)
* [`aio runtime trigger delete TRIGGERPATH`](#aio-runtime-trigger-delete-triggerpath)
* [`aio runtime trigger fire TRIGGERNAME`](#aio-runtime-trigger-fire-triggername)
* [`aio runtime trigger get TRIGGERPATH`](#aio-runtime-trigger-get-triggerpath)
* [`aio runtime trigger list`](#aio-runtime-trigger-list)
* [`aio runtime trigger ls`](#aio-runtime-trigger-ls)
* [`aio runtime trigger update TRIGGERNAME`](#aio-runtime-trigger-update-triggername)
* [`aio telemetry yes`](#aio-telemetry-yes)
* [`aio templates`](#aio-templates)
* [`aio templates disco`](#aio-templates-disco)
* [`aio templates discover`](#aio-templates-discover)
* [`aio templates i PATH`](#aio-templates-i-path)
* [`aio templates info`](#aio-templates-info)
* [`aio templates install PATH`](#aio-templates-install-path)
* [`aio templates remove NAME`](#aio-templates-remove-name)
* [`aio templates rm NAME`](#aio-templates-rm-name)
* [`aio templates rollback`](#aio-templates-rollback)
* [`aio templates sub NAME GITHUBREPOURL`](#aio-templates-sub-name-githubrepourl)
* [`aio templates submit NAME GITHUBREPOURL`](#aio-templates-submit-name-githubrepourl)
* [`aio templates un PACKAGE-NAME`](#aio-templates-un-package-name)
* [`aio templates uninstall PACKAGE-NAME`](#aio-templates-uninstall-package-name)
* [`aio update`](#aio-update)
* [`aio where`](#aio-where)

## `aio app`

Create, run, test, and deploy Adobe I/O Apps

```
USAGE
  $ aio app [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Create, run, test, and deploy Adobe I/O Apps
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/10.1.0/src/commands/app/index.js)_

## `aio app add`

Add a new component to an existing Adobe I/O App

```
USAGE
  $ aio app add [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Add a new component to an existing Adobe I/O App
```

## `aio app add action`

Add new actions

```
USAGE
  $ aio app add action [-v] [--version] [--install] [-y] [-e <value>]

FLAGS
  -e, --extension=<value>  Add actions to a specific extension
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add new actions


ALIASES
  $ aio app add actions
```

## `aio app add actions`

Add new actions

```
USAGE
  $ aio app add actions [-v] [--version] [--install] [-y] [-e <value>]

FLAGS
  -e, --extension=<value>  Add actions to a specific extension
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add new actions


ALIASES
  $ aio app add actions
```

## `aio app add ci`

Add CI files

```
USAGE
  $ aio app add ci [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Add CI files
```

## `aio app add event`

Add a new Adobe I/O Events action

```
USAGE
  $ aio app add event [-v] [--version] [--install] [-y] [-e <value>]

FLAGS
  -e, --extension=<value>  Add actions to a specific extension
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add a new Adobe I/O Events action


ALIASES
  $ aio app add events
```

## `aio app add events`

Add a new Adobe I/O Events action

```
USAGE
  $ aio app add events [-v] [--version] [--install] [-y] [-e <value>]

FLAGS
  -e, --extension=<value>  Add actions to a specific extension
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add a new Adobe I/O Events action


ALIASES
  $ aio app add events
```

## `aio app add ext`

Add new extensions to the project

```
USAGE
  $ aio app add ext [-v] [--version] [--install] [-y] [-e <value>]

FLAGS
  -e, --extension=<value>...  Specify extensions to add, skips selection prompt
  -v, --verbose               Verbose output
  -y, --yes                   Skip questions, and use all default values
  --[no-]install              [default: true] Run npm installation after files are created
  --version                   Show version

DESCRIPTION
  Add new extensions to the project


ALIASES
  $ aio app add ext
  $ aio app add extensions
```

## `aio app add extension`

Add new extensions to the project

```
USAGE
  $ aio app add extension [-v] [--version] [--install] [-y] [-e <value>]

FLAGS
  -e, --extension=<value>...  Specify extensions to add, skips selection prompt
  -v, --verbose               Verbose output
  -y, --yes                   Skip questions, and use all default values
  --[no-]install              [default: true] Run npm installation after files are created
  --version                   Show version

DESCRIPTION
  Add new extensions to the project


ALIASES
  $ aio app add ext
  $ aio app add extensions
```

## `aio app add extensions`

Add new extensions to the project

```
USAGE
  $ aio app add extensions [-v] [--version] [--install] [-y] [-e <value>]

FLAGS
  -e, --extension=<value>...  Specify extensions to add, skips selection prompt
  -v, --verbose               Verbose output
  -y, --yes                   Skip questions, and use all default values
  --[no-]install              [default: true] Run npm installation after files are created
  --version                   Show version

DESCRIPTION
  Add new extensions to the project


ALIASES
  $ aio app add ext
  $ aio app add extensions
```

## `aio app add service`

Subscribe to Services in the current Workspace

```
USAGE
  $ aio app add service [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Subscribe to Services in the current Workspace


ALIASES
  $ aio app add services
```

## `aio app add services`

Subscribe to Services in the current Workspace

```
USAGE
  $ aio app add services [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Subscribe to Services in the current Workspace


ALIASES
  $ aio app add services
```

## `aio app add web-assets`

Add web assets support

```
USAGE
  $ aio app add web-assets [-v] [--version] [--install] [-y] [-e <value>]

FLAGS
  -e, --extension=<value>  Add web-assets to a specific extension
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add web assets support
```

## `aio app build`

Build an Adobe I/O App

```
USAGE
  $ aio app build [-v] [--version] [--actions | -a <value>] [--web-assets] [--force-build] [--content-hash]
    [--web-optimize] [-e <value> | ]

FLAGS
  -a, --action=<value>...     Build only a specific action, the flags can be specified multiple times, this will set
                              --no-publish
  -e, --extension=<value>...  Build only a specific extension point, the flags can be specified multiple times
  -v, --verbose               Verbose output
  --[no-]actions              [default: true] Build actions if any
  --[no-]content-hash         [default: true] Enable content hashing in browser code
  --[no-]force-build          [default: true] Force a build even if one already exists
  --version                   Show version
  --[no-]web-assets           [default: true] Build web-assets if any
  --web-optimize              [default: false] Enable optimization (minification) of js/css/html

DESCRIPTION
  Build an Adobe I/O App

  This will always force a rebuild unless --no-force-build is set.
```

## `aio app config`

Manage app config

```
USAGE
  $ aio app config [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Manage app config

ALIASES
  $ aio app config
  $ aio app config
```

## `aio app config get`

Get app config

```
USAGE
  $ aio app config get [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Get app config

ALIASES
  $ aio app config get
```

## `aio app config get lf`

Get log forwarding destination configuration

```
USAGE
  $ aio app config get lf [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio app config get log-forwarding
  $ aio app config get lf
```

## `aio app config get lf errors`

Get log forwarding errors

```
USAGE
  $ aio app config get lf errors [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio app config get log-forwarding errors
  $ aio app config get lf errors
```

## `aio app config get log-forwarding`

Get log forwarding destination configuration

```
USAGE
  $ aio app config get log-forwarding [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio app config get log-forwarding
  $ aio app config get lf
```

## `aio app config get log-forwarding errors`

Get log forwarding errors

```
USAGE
  $ aio app config get log-forwarding errors [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio app config get log-forwarding errors
  $ aio app config get lf errors
```

## `aio app config set`

Set app config

```
USAGE
  $ aio app config set [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Set app config

ALIASES
  $ aio app config set
```

## `aio app config set lf`

Set log forwarding destination configuration

```
USAGE
  $ aio app config set lf [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Set log forwarding destination configuration

ALIASES
  $ aio app config set log-forwarding
  $ aio app config set lf
```

## `aio app config set log-forwarding`

Set log forwarding destination configuration

```
USAGE
  $ aio app config set log-forwarding [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Set log forwarding destination configuration

ALIASES
  $ aio app config set log-forwarding
  $ aio app config set lf
```

## `aio app create [PATH]`

Create a new Adobe I/O App with default parameters

```
USAGE
  $ aio app create [PATH] [-v] [--version] [-i <value>]

ARGUMENTS
  PATH  [default: .] Path to the app directory

FLAGS
  -i, --import=<value>  Import an Adobe I/O Developer Console configuration file
  -v, --verbose         Verbose output
  --version             Show version

DESCRIPTION
  Create a new Adobe I/O App with default parameters
```

## `aio app delete`

Delete a component from an existing Adobe I/O App

```
USAGE
  $ aio app delete [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Delete a component from an existing Adobe I/O App
```

## `aio app delete action [ACTION-NAME]`

Delete existing actions

```
USAGE
  $ aio app delete action [ACTION-NAME] [-v] [--version] [-y]

ARGUMENTS
  ACTION-NAME  Action `pkg/name` to delete, you can specify multiple actions via a comma separated list

FLAGS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version

DESCRIPTION
  Delete existing actions


ALIASES
  $ aio app delete actions
```

## `aio app delete actions [ACTION-NAME]`

Delete existing actions

```
USAGE
  $ aio app delete actions [ACTION-NAME] [-v] [--version] [-y]

ARGUMENTS
  ACTION-NAME  Action `pkg/name` to delete, you can specify multiple actions via a comma separated list

FLAGS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version

DESCRIPTION
  Delete existing actions


ALIASES
  $ aio app delete actions
```

## `aio app delete ci`

Delete existing CI files

```
USAGE
  $ aio app delete ci [-v] [--version] [-y]

FLAGS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version

DESCRIPTION
  Delete existing CI files
```

## `aio app delete event [EVENT-ACTION-NAME]`

Delete existing Adobe I/O Events actions

```
USAGE
  $ aio app delete event [EVENT-ACTION-NAME] [-v] [--version] [-y]

ARGUMENTS
  EVENT-ACTION-NAME  Action `pkg/name` to delete, you can specify multiple actions via a comma separated list

FLAGS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version

DESCRIPTION
  Delete existing Adobe I/O Events actions


ALIASES
  $ aio app delete events
```

## `aio app delete events [EVENT-ACTION-NAME]`

Delete existing Adobe I/O Events actions

```
USAGE
  $ aio app delete events [EVENT-ACTION-NAME] [-v] [--version] [-y]

ARGUMENTS
  EVENT-ACTION-NAME  Action `pkg/name` to delete, you can specify multiple actions via a comma separated list

FLAGS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version

DESCRIPTION
  Delete existing Adobe I/O Events actions


ALIASES
  $ aio app delete events
```

## `aio app delete ext`

Delete existing extensions

```
USAGE
  $ aio app delete ext [-v] [--version] [-y] [--install] [-e <value>]

FLAGS
  -e, --extension=<value>...  Specify extensions to delete, skips selection prompt
  -v, --verbose               Verbose output
  -y, --yes                   Skip questions, and use all default values
  --[no-]install              [default: true] Run npm installation after files are created
  --version                   Show version

DESCRIPTION
  Delete existing extensions


ALIASES
  $ aio app delete ext
  $ aio app delete extensions
```

## `aio app delete extension`

Delete existing extensions

```
USAGE
  $ aio app delete extension [-v] [--version] [-y] [--install] [-e <value>]

FLAGS
  -e, --extension=<value>...  Specify extensions to delete, skips selection prompt
  -v, --verbose               Verbose output
  -y, --yes                   Skip questions, and use all default values
  --[no-]install              [default: true] Run npm installation after files are created
  --version                   Show version

DESCRIPTION
  Delete existing extensions


ALIASES
  $ aio app delete ext
  $ aio app delete extensions
```

## `aio app delete extensions`

Delete existing extensions

```
USAGE
  $ aio app delete extensions [-v] [--version] [-y] [--install] [-e <value>]

FLAGS
  -e, --extension=<value>...  Specify extensions to delete, skips selection prompt
  -v, --verbose               Verbose output
  -y, --yes                   Skip questions, and use all default values
  --[no-]install              [default: true] Run npm installation after files are created
  --version                   Show version

DESCRIPTION
  Delete existing extensions


ALIASES
  $ aio app delete ext
  $ aio app delete extensions
```

## `aio app delete service`

Delete Services in the current Workspace

```
USAGE
  $ aio app delete service [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Delete Services in the current Workspace


ALIASES
  $ aio app delete services
```

## `aio app delete services`

Delete Services in the current Workspace

```
USAGE
  $ aio app delete services [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Delete Services in the current Workspace


ALIASES
  $ aio app delete services
```

## `aio app delete web-assets`

Delete existing web assets

```
USAGE
  $ aio app delete web-assets [-v] [--version] [-y]

FLAGS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version

DESCRIPTION
  Delete existing web assets
```

## `aio app deploy`

Build and deploy an Adobe I/O App

```
USAGE
  $ aio app deploy [-v] [--version] [--actions | -a <value>] [--web-assets] [--force-build | ] [--content-hash]
    [--web-optimize] [-e <value> | ] [--build] [--open] [--force-deploy] [--force-publish |  | --publish]
    [--log-forwarding-update]

FLAGS
  -a, --action=<value>...       Deploy only a specific action, the flags can be specified multiple times, this will set
                                --no-publish
  -e, --extension=<value>...    Deploy only a specific extension, the flags can be specified multiple times
  -v, --verbose                 Verbose output
  --[no-]actions                [default: true] Deploy actions if any
  --[no-]build                  [default: true] Run the build phase before deployment
  --[no-]content-hash           [default: true] Enable content hashing in browser code
  --[no-]force-build            [default: true] Force a build even if one already exists
  --force-deploy                [default: false] Force deploy changes, regardless of production Workspace being
                                published in Exchange.
  --force-publish               [default: false] Force publish extension(s) to Exchange, delete previously published
                                extension points
  --[no-]log-forwarding-update  [default: true] Update log forwarding configuration on server
  --open                        Open the default web browser after a successful deploy, only valid if your app has a
                                front-end
  --[no-]publish                [default: true] Publish extension(s) to Exchange
  --version                     Show version
  --[no-]web-assets             [default: true] Deploy web-assets if any
  --web-optimize                [default: false] Enable optimization (minification) of web js/css/html

DESCRIPTION
  Build and deploy an Adobe I/O App

  This will always force a rebuild unless --no-force-build is set.
```

## `aio app get-url [ACTION]`

Get action URLs

```
USAGE
  $ aio app get-url [ACTION] [-v] [--version] [--cdn] [-j] [-h] [-y] [--local]

FLAGS
  -h, --hson     Output human readable json
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --cdn          Display CDN based action URLs
  --local        Display locally based action URLs
  --version      Show version

DESCRIPTION
  Get action URLs
```

## `aio app info`

Display settings/configuration in use by an Adobe I/O App

```
USAGE
  $ aio app info [-v] [--version] [-j | -h | -y] [--mask]

FLAGS
  -h, --hson     Output human readable json
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --[no-]mask    Hide known private info
  --version      Show version

DESCRIPTION
  Display settings/configuration in use by an Adobe I/O App
```

## `aio app init [PATH]`

Create a new Adobe I/O App

```
USAGE
  $ aio app init [PATH] [-v] [--version] [--install] [-y] [--login] [-e <value> | -t <value>]
    [--standalone-app | ] [-w <value> | -i <value>] [--confirm-new-workspace]

ARGUMENTS
  PATH  [default: .] Path to the app directory

FLAGS
  -e, --extension=<value>...  Extension point(s) to implement
  -i, --import=<value>        Import an Adobe I/O Developer Console configuration file
  -t, --template=<value>...   Specify a link to a template that will be installed
  -v, --verbose               Verbose output
  -w, --workspace=<value>     [default: Stage] Specify the Adobe Developer Console Workspace to init from, defaults to
                              Stage
  -y, --yes                   Skip questions, and use all default values
  --confirm-new-workspace     Skip and confirm prompt for creating a new workspace
  --[no-]install              [default: true] Run npm installation after files are created
  --[no-]login                Login using your Adobe ID for interacting with Adobe I/O Developer Console
  --standalone-app            Create a stand-alone application
  --version                   Show version

DESCRIPTION
  Create a new Adobe I/O App
```

## `aio app list`

List components for Adobe I/O App

```
USAGE
  $ aio app list [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  List components for Adobe I/O App
```

## `aio app list ext`

List implemented extensions

```
USAGE
  $ aio app list ext [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --version      Show version

DESCRIPTION
  List implemented extensions


ALIASES
  $ aio app list ext
  $ aio app list extensions
```

## `aio app list ext-points`

List all extension points for the selected org

```
USAGE
  $ aio app list ext-points [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --version      Show version

DESCRIPTION
  List all extension points for the selected org


ALIASES
  $ aio app list ext-points
  $ aio app list extension-points
```

## `aio app list extension`

List implemented extensions

```
USAGE
  $ aio app list extension [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --version      Show version

DESCRIPTION
  List implemented extensions


ALIASES
  $ aio app list ext
  $ aio app list extensions
```

## `aio app list extension-points`

List all extension points for the selected org

```
USAGE
  $ aio app list extension-points [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --version      Show version

DESCRIPTION
  List all extension points for the selected org


ALIASES
  $ aio app list ext-points
  $ aio app list extension-points
```

## `aio app list extensions`

List implemented extensions

```
USAGE
  $ aio app list extensions [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --version      Show version

DESCRIPTION
  List implemented extensions


ALIASES
  $ aio app list ext
  $ aio app list extensions
```

## `aio app logs`

Fetch logs for an Adobe I/O App

```
USAGE
  $ aio app logs [-v] [--version] [-l <value>] [-a <value>] [-r] [-t | -w | -o]

FLAGS
  -a, --action=<value>...  Fetch logs for a specific action
  -l, --limit=<value>      [default: 1] Limit number of activations to fetch logs from ( 1-50 )
  -o, --poll               Fetch logs continuously
  -r, --strip              strip timestamp information and output first line only
  -t, --tail               Fetch logs continuously
  -v, --verbose            Verbose output
  -w, --watch              Fetch logs continuously
  --version                Show version

DESCRIPTION
  Fetch logs for an Adobe I/O App
```

## `aio app run`

Run an Adobe I/O App

```
USAGE
  $ aio app run [-v] [--version] [--local | ] [--serve] [--actions] [--open] [-e <value>]

FLAGS
  -e, --extension=<value>  Run only a specific extension, this flag can only be specified once
  -v, --verbose            Verbose output
  --[no-]actions           [default: true] Run actions, defaults to true, to skip actions use --no-actions
  --local                  Run/debug actions locally (requires Docker running)
  --open                   Open the default web browser after a successful run, only valid if your app has a front-end
  --[no-]serve             [default: true] Start frontend server (experimental)
  --version                Show version

DESCRIPTION
  Run an Adobe I/O App
```

## `aio app test`

Run tests for an Adobe I/O App

```
USAGE
  $ aio app test [-v] [--version] [-e <value> | -a <value>] [--all] [--e2e] [--unit]

FLAGS
  -a, --action=<value>...     the action(s) to test
  -e, --extension=<value>...  the extension(s) to test
  -v, --verbose               Verbose output
  --all                       run both unit and e2e tests
  --e2e                       run e2e tests
  --unit                      run unit tests
  --version                   Show version

DESCRIPTION
  Run tests for an Adobe I/O App
  If no flags are specified, by default only unit-tests are run.

  For the --action flag, it tries a substring search on the 'package-name/action-name' pair for an action.
  For the --extension flag, it tries a substring search on the 'extension-name' only.
  If the extension has a hook called 'test' in its 'ext.config.yaml', the script specified will be run instead.
```

## `aio app undeploy`

Undeploys an Adobe I/O App

```
USAGE
  $ aio app undeploy [-v] [--version] [--actions] [--web-assets] [-e <value>] [--force-unpublish | --unpublish]

FLAGS
  -e, --extension=<value>...  Undeploy only a specific extension, the flags can be specified multiple times
  -v, --verbose               Verbose output
  --[no-]actions              [default: true] Undeploy actions if any
  --force-unpublish           Force unpublish extension(s) from Exchange, will delete all extension points
  --[no-]unpublish            [default: true] Unpublish selected extension(s) from Exchange
  --version                   Show version
  --[no-]web-assets           [default: true] Undeploy web-assets if any

DESCRIPTION
  Undeploys an Adobe I/O App
```

## `aio app use [CONFIG_FILE_PATH]`

Import an Adobe Developer Console configuration file.

```
USAGE
  $ aio app use [CONFIG_FILE_PATH] [-v] [--version] [--overwrite | --merge] [--confirm-new-workspace] [-w
    <value> | [-g | -w <value>] | ] [--no-service-sync | --confirm-service-sync] [--no-input]

ARGUMENTS
  CONFIG_FILE_PATH  path to an Adobe I/O Developer Console configuration file

FLAGS
  -g, --global                  Use the global Adobe Developer Console Org / Project / Workspace configuration, which
                                can be set via `aio console` commands
  -v, --verbose                 Verbose output
  -w, --workspace=<value>       Specify the Adobe Developer Console Workspace name or Workspace id to import the
                                configuration from
  -w, --workspace-name=<value>  [DEPRECATED]: please use --workspace instead
  --confirm-new-workspace       Skip and confirm prompt for creating a new workspace
  --confirm-service-sync        Skip the Service sync prompt and overwrite Service subscriptions in the new Workspace
                                with current subscriptions
  --merge                       Merge any .aio and .env files during import of the Adobe Developer Console configuration
                                file
  --no-input                    Skip user prompts by setting --no-service-sync and --merge. Requires one of
                                config_file_path or --global or --workspace
  --no-service-sync             Skip the Service sync prompt and do not attach current Service subscriptions to the new
                                Workspace
  --overwrite                   Overwrite any .aio and .env files during import of the Adobe Developer Console
                                configuration file
  --version                     Show version

DESCRIPTION
  Import an Adobe Developer Console configuration file.

  If the optional configuration file is not set, this command will retrieve the console org, project, and workspace
  settings from the global config.

  To set these global config values, see the help text for 'aio console --help'.

  To download the configuration file for your project, select the 'Download' button in the toolbar of your project's
  page in https://console.adobe.io
```

## `aio auth`

Adobe IMS commands to login and logout.

```
USAGE
  $ aio auth

DESCRIPTION
  Adobe IMS commands to login and logout.

  The main commands are `auth login` to get or create an access token and
  `auth logout` to invalidate an access token and thus log out from Adobe IMS.

  Logging in and out is based on configuration of which there may be
  multiple. Each set of configuration properties, called an Adobe IMS context,
  can be individually addressed by a label.

  Configuration for the Adobe IMS commands is stored in the "ims"
  configuration property. The special property "ims.config.current" contains the
  label of the current configuration which can be set using the
  "aio auth ctx -s <label>" command.

  Each set of properties in a labeled Adobe IMS context configurations has
  configuration properties depending on the kind of access that is
  supported. The below example shows the configuration for OAuth2
  based (graphical SUSI) login.

  The "env" property is optional and designates the Adobe IMS environment
  used for authentication. Possible values are "stage" and "prod".
  If the property is missing or any other value, it defaults to "prod".

  All commands allow their normal output to be formatted in either
  HJSON (default), JSON, or YAML.


EXAMPLES
  {
      ims: {
        contexts: {
          postman: {
            env: "stage",
            callback_url: "https://callback.example.com",
            client_id: "example.com-client-id",
            client_secret: "XXXXXXXX",
            scope: "openid AdobeID additional_info.projectedProductContext read_organizations",
            state: ""
          }
        },
        config: {
          current: "postman"
        }
      }
    }
```

_See code: [@adobe/aio-cli-plugin-auth](https://github.com/adobe/aio-cli-plugin-auth/blob/3.2.0/src/commands/auth/index.js)_

## `aio auth ctx`

Manage Adobe IMS contexts.

```
USAGE
  $ aio auth ctx [--debug <value>] [-v] [-l | -g] [-c <value>] [--list | --value | -s <value> | ]

FLAGS
  -c, --ctx=<value>  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -g, --global       global config
  -l, --local        local config
  -s, --set=<value>  Sets the name of the current local Adobe IMS context
  -v, --verbose      Verbose output
  --debug=<value>    Debug level output
  --list             Names of the Adobe IMS contexts as an array
  --value            Prints named or current Adobe IMS context data

DESCRIPTION
  Manage Adobe IMS contexts.

  The following options exist for this command:

  * List the names of the configured Adobe IMS contexts
  * Print the name of the current Adobe IMS context
  * Set the name of the current Adobe IMS context
  * Print the configuration of the current or a named Adobe IMS context

  Currently it is not possible to update the Adobe Adobe IMS context configuration
  using this command. Use the "aio config" commands for this.
  e.g. aio config:set ims.contexts.your_context.your_context_key "your_context_value"

  Please note, that the following IMS context label names is reserved: `cli`
  and should not be used as an IMS context name.

  Also note that the current context can only be set locally.


ALIASES
  $ aio ctx
  $ aio context
```

## `aio auth login`

Log in with a certain Adobe IMS context and returns the access token.

```
USAGE
  $ aio auth login [--debug <value>] [-v] [-l | -g] [-c <value>] [-f] [-d] [-b] [-o]

FLAGS
  -b, --bare         print access token only
  -c, --ctx=<value>  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -d, --decode       Decode and display access token data
  -f, --force        Force logging in. This causes a forced logout on the context first and makes sure to not use any
                     cached data when calling the plugin.
  -g, --global       global config
  -l, --local        local config
  -o, --[no-]open    Open the default browser to complete the login
  -v, --verbose      Verbose output
  --debug=<value>    Debug level output

DESCRIPTION
  Log in with a certain Adobe IMS context and returns the access token.

  If the Adobe IMS context already has a valid access token set (valid meaning
  at least 10 minutes before expiry), that token is returned.

  Otherwise, if the Adobe IMS context has a valid refresh token set (valid
  meaning at least 10 minutes before expiry) that refresh token is
  exchanged for an access token before returning the access token.

  Lastly, if the Adobe IMS context properties are supported by one of the
  Adobe IMS login plugins, that login plugin is called to guide through
  the IMS login process.

  The currently supported Adobe IMS login plugins are:

  * aio-lib-ims-jwt for JWT token based login supporting
  Adobe I/O Console service integrations.
  * aio-lib-ims-oauth for browser based OAuth2 login. This
  plugin will launch the default browser to guide the user through the
  login process. The plugin itself will *never* see the user's
  password but only receive the authorization token after the
  user has authenticated with Adobe IMS.


ALIASES
  $ aio login
```

## `aio auth logout`

Log out the current or a named Adobe IMS context.

```
USAGE
  $ aio auth logout [--debug <value>] [-v] [-l | -g] [-c <value>] [-f]

FLAGS
  -c, --ctx=<value>  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -f, --[no-]force   Invalidate the refresh token as well as all access tokens.
                     Otherwise only the access token is invalidated. For Adobe IMS
                     contexts not supporting refresh tokens, this flag has no
                     effect.
  -g, --global       global config
  -l, --local        local config
  -v, --verbose      Verbose output
  --debug=<value>    Debug level output

DESCRIPTION
  Log out the current or a named Adobe IMS context.

  This command can be called multiple times on the same Adobe IMS context with
  out causing any errors. The assumption is that after calling this command
  without an error, the Adobe IMS context's access and refresh tokens have been
  invalidated and removed from persistent storage. Repeatedly calling this
  command will just do nothing.


ALIASES
  $ aio logout
```

## `aio autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ aio autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ aio autocomplete

  $ aio autocomplete bash

  $ aio autocomplete zsh

  $ aio autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.4.6/src/commands/autocomplete/index.ts)_

## `aio certificate`

Generate, fingerprint, or verify a certificate for use with Adobe I/O

```
USAGE
  $ aio certificate

DESCRIPTION
  Generate, fingerprint, or verify a certificate for use with Adobe I/O
```

_See code: [@adobe/aio-cli-plugin-certificate](https://github.com/adobe/aio-cli-plugin-certificate/blob/1.0.1/src/commands/certificate/index.js)_

## `aio certificate fingerprint FILE`

Compute the fingerprint of a public key certificate for use with Adobe I/O

```
USAGE
  $ aio certificate fingerprint FILE

ARGUMENTS
  FILE  file path to certificate to fingerprint

DESCRIPTION
  Compute the fingerprint of a public key certificate for use with Adobe I/O
```

## `aio certificate generate`

Generate a new private/public key pair

```
USAGE
  $ aio certificate generate [--keyout <value>] [--out <value>] [-n <value>] [-c <value>] [-s <value>] [-l <value>] [-o
    <value>] [-u <value>] [--days <value>]

FLAGS
  -c, --country=<value>       Country Name
  -l, --locality=<value>      Locality, or city name
  -n, --name=<value>          [default: selfsign.localhost] Common Name: typically a host domain name, like
                              www.mysite.com
  -o, --organization=<value>  Organization name
  -s, --state=<value>         State or Province
  -u, --unit=<value>          Organizational unit or department
  --days=<value>              [default: 365] Number of days the certificate should be valid for. (Max 365)
  --keyout=<value>            [default: private.key] file to send the key to
  --out=<value>               [default: certificate_pub.crt] output file

DESCRIPTION
  Generate a new private/public key pair
  Generate a self-signed certificate to enable https:// on localhost or signing jwt payloads for interacting with Adobe
  services.
```

## `aio certificate verify FILE`

Verify a certificate for use with Adobe I/O

```
USAGE
  $ aio certificate verify FILE [--days <value>]

ARGUMENTS
  FILE  file path to certificate to verify

FLAGS
  --days=<value>  +- is certificate valid in --days

DESCRIPTION
  Verify a certificate for use with Adobe I/O
  Verifies that the certificate is valid, and/or will not expire in [--days] days from now.
```

## `aio config`

list, get, set, delete, and edit persistent configuration data

```
USAGE
  $ aio config [-l | -g] [-e] [--verbose |  | [-j | -y]]

FLAGS
  -e, --env     environment variables
  -g, --global  global config
  -j, --json    output in json
  -l, --local   local config
  -y, --yaml    output in yaml
  --verbose     show all config values

DESCRIPTION
  list, get, set, delete, and edit persistent configuration data

ALIASES
  $ aio config ls

EXAMPLES
  $ aio config:list

  $ aio config:get KEY

  $ aio config:set KEY VALUE

  $ aio config:delete KEY

  $ aio config:clear
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/4.0.1/src/commands/config/index.js)_

## `aio config clear`

clears all persistent config values

```
USAGE
  $ aio config clear [-l | -g] [-f]

FLAGS
  -f, --force   do not prompt for confirmation
  -g, --global  global config
  -l, --local   local config

DESCRIPTION
  clears all persistent config values
```

## `aio config del KEYS...`

deletes persistent config values

```
USAGE
  $ aio config del KEYS... [-l | -g]

FLAGS
  -g, --global  global config
  -l, --local   local config

DESCRIPTION
  deletes persistent config values

ALIASES
  $ aio config del
  $ aio config rm
```

## `aio config delete KEYS...`

deletes persistent config values

```
USAGE
  $ aio config delete KEYS... [-l | -g]

FLAGS
  -g, --global  global config
  -l, --local   local config

DESCRIPTION
  deletes persistent config values

ALIASES
  $ aio config del
  $ aio config rm
```

## `aio config edit`

edit config file

```
USAGE
  $ aio config edit [-l | -g]

FLAGS
  -g, --global  global config
  -l, --local   local config

DESCRIPTION
  edit config file
```

## `aio config get KEY`

gets a persistent config value

```
USAGE
  $ aio config get KEY [-l | -g] [-j | -y] [-e]

FLAGS
  -e, --env     environment variables
  -g, --global  global config
  -j, --json    output in json
  -l, --local   local config
  -y, --yaml    output in yaml

DESCRIPTION
  gets a persistent config value
```

## `aio config list`

lists all persistent config values

```
USAGE
  $ aio config list [-l | -g] [-e] [--verbose |  | [-j | -y]]

FLAGS
  -e, --env     environment variables
  -g, --global  global config
  -j, --json    output in json
  -l, --local   local config
  -y, --yaml    output in yaml
  --verbose     show all config values

DESCRIPTION
  lists all persistent config values

ALIASES
  $ aio config ls
```

## `aio config ls`

list, get, set, delete, and edit persistent configuration data

```
USAGE
  $ aio config ls [-l | -g] [-e] [--verbose |  | [-j | -y]]

FLAGS
  -e, --env     environment variables
  -g, --global  global config
  -j, --json    output in json
  -l, --local   local config
  -y, --yaml    output in yaml
  --verbose     show all config values

DESCRIPTION
  list, get, set, delete, and edit persistent configuration data

ALIASES
  $ aio config ls

EXAMPLES
  $ aio config:list

  $ aio config:get KEY

  $ aio config:set KEY VALUE

  $ aio config:delete KEY

  $ aio config:clear
```

## `aio config rm KEYS...`

deletes persistent config values

```
USAGE
  $ aio config rm KEYS... [-l | -g]

FLAGS
  -g, --global  global config
  -l, --local   local config

DESCRIPTION
  deletes persistent config values

ALIASES
  $ aio config del
  $ aio config rm
```

## `aio config set key 'a value'       # set key to 'a value'`

sets a persistent config value

```
USAGE
  $ aio config set key 'a value'       # set key to 'a value'
  $ aio config set key -f value.json   # set key to the json found in the file value.json
  $ aio config set -j key < value.json # set key to the json found in the file value.json

FLAGS
  -f, --file         value is a path to a file
  -g, --global       global config
  -i, --interactive  prompt for value
  -j, --json         value is json
  -l, --local        local config
  -y, --yaml         value is yaml

DESCRIPTION
  sets a persistent config value
```

## `aio console`

Console plugin for the Adobe I/O CLI

```
USAGE
  $ aio console [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Console plugin for the Adobe I/O CLI
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/4.1.0/src/commands/console/index.js)_

## `aio console open`

Open the developer console for the selected Organization, Project and Workspace

```
USAGE
  $ aio console open [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Open the developer console for the selected Organization, Project and Workspace

ALIASES
  $ aio open
```

## `aio console org`

Manage your Adobe I/O Console Organizations

```
USAGE
  $ aio console org [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Manage your Adobe I/O Console Organizations
```

## `aio console org list`

List your Organizations

```
USAGE
  $ aio console org list [--help] [-j | -y]

FLAGS
  -j, --json  Output json
  -y, --yml   Output yml
  --help      Show help

DESCRIPTION
  List your Organizations

ALIASES
  $ aio console org ls
```

## `aio console org ls`

List your Organizations

```
USAGE
  $ aio console org ls [--help] [-j | -y]

FLAGS
  -j, --json  Output json
  -y, --yml   Output yml
  --help      Show help

DESCRIPTION
  List your Organizations

ALIASES
  $ aio console org ls
```

## `aio console org sel [ORGCODE]`

Select an Organization

```
USAGE
  $ aio console org sel [ORGCODE] [--help]

ARGUMENTS
  ORGCODE  Adobe Developer Console Org code

FLAGS
  --help  Show help

DESCRIPTION
  Select an Organization

ALIASES
  $ aio console org sel
```

## `aio console org select [ORGCODE]`

Select an Organization

```
USAGE
  $ aio console org select [ORGCODE] [--help]

ARGUMENTS
  ORGCODE  Adobe Developer Console Org code

FLAGS
  --help  Show help

DESCRIPTION
  Select an Organization

ALIASES
  $ aio console org sel
```

## `aio console project`

Manage your Adobe I/O Console Projects

```
USAGE
  $ aio console project [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Manage your Adobe I/O Console Projects
```

## `aio console project list`

List your Projects for the selected Organization

```
USAGE
  $ aio console project list [--help] [--orgId <value>] [-j | -y]

FLAGS
  -j, --json       Output json
  -y, --yml        Output yml
  --help           Show help
  --orgId=<value>  OrgID for listing projects

DESCRIPTION
  List your Projects for the selected Organization

ALIASES
  $ aio console project ls
```

## `aio console project ls`

List your Projects for the selected Organization

```
USAGE
  $ aio console project ls [--help] [--orgId <value>] [-j | -y]

FLAGS
  -j, --json       Output json
  -y, --yml        Output yml
  --help           Show help
  --orgId=<value>  OrgID for listing projects

DESCRIPTION
  List your Projects for the selected Organization

ALIASES
  $ aio console project ls
```

## `aio console project sel [PROJECTIDORNAME]`

Select a Project for the selected Organization

```
USAGE
  $ aio console project sel [PROJECTIDORNAME] [--help] [--orgId <value>]

ARGUMENTS
  PROJECTIDORNAME  Adobe Developer Console Project id or Project name

FLAGS
  --help           Show help
  --orgId=<value>  Organization id of the Console Project to select

DESCRIPTION
  Select a Project for the selected Organization

ALIASES
  $ aio console project sel
```

## `aio console project select [PROJECTIDORNAME]`

Select a Project for the selected Organization

```
USAGE
  $ aio console project select [PROJECTIDORNAME] [--help] [--orgId <value>]

ARGUMENTS
  PROJECTIDORNAME  Adobe Developer Console Project id or Project name

FLAGS
  --help           Show help
  --orgId=<value>  Organization id of the Console Project to select

DESCRIPTION
  Select a Project for the selected Organization

ALIASES
  $ aio console project sel
```

## `aio console publickey`

Manage Public Key Bindings for your Adobe I/O Console Workspaces

```
USAGE
  $ aio console publickey [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Manage Public Key Bindings for your Adobe I/O Console Workspaces
```

## `aio console publickey delete IDORFINGERPRINT`

Delete a public key certificate from the selected Workspace

```
USAGE
  $ aio console publickey delete IDORFINGERPRINT [--help] [--orgId <value>] [--projectId <value>] [--workspaceId
  <value>]

ARGUMENTS
  IDORFINGERPRINT  The bindingId or the fingerprint of the public key binding to delete

FLAGS
  --help                 Show help
  --orgId=<value>        Organization id of the Console Workspace to delete the public key certificate from
  --projectId=<value>    Project id of the Console Workspace to delete the public key certificate from
  --workspaceId=<value>  Workspace id of the Console Workspace to delete the public key certificate from

DESCRIPTION
  Delete a public key certificate from the selected Workspace
```

## `aio console publickey list`

List the public key certificates bound to the selected Workspace

```
USAGE
  $ aio console publickey list [--help] [--orgId <value>] [--projectId <value>] [--workspaceId <value>] [-j | -y]

FLAGS
  -j, --json             Output json
  -y, --yml              Output yml
  --help                 Show help
  --orgId=<value>        Organization id of the Console Workspace to list the public key certificates for
  --projectId=<value>    Project id of the Console Workspace to list the public key certificate for
  --workspaceId=<value>  Workspace id of the Console Workspace to list the public key certificate for

DESCRIPTION
  List the public key certificates bound to the selected Workspace
```

## `aio console publickey upload FILE`

Upload a public key certificate to the selected Workspace

```
USAGE
  $ aio console publickey upload FILE [--help] [--orgId <value>] [--projectId <value>] [--workspaceId <value>] [-j | -y]

ARGUMENTS
  FILE  Path to public key certificate file in PEM format

FLAGS
  -j, --json             Output json
  -y, --yml              Output yml
  --help                 Show help
  --orgId=<value>        Organization id of the Console Workspace to upload the public key certificate to
  --projectId=<value>    Project id of the Console Workspace to upload the public key certificate to
  --workspaceId=<value>  Workspace id of the Console Workspace to upload the public key certificate to

DESCRIPTION
  Upload a public key certificate to the selected Workspace
```

## `aio console where`

Show the currently selected Organization, Project and Workspace

```
USAGE
  $ aio console where [--help] [-j | -y]

FLAGS
  -j, --json  Output json
  -y, --yml   Output yml
  --help      Show help

DESCRIPTION
  Show the currently selected Organization, Project and Workspace

ALIASES
  $ aio where
```

## `aio console workspace`

Manage your Adobe I/O Console Workspaces

```
USAGE
  $ aio console workspace [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Manage your Adobe I/O Console Workspaces

ALIASES
  $ aio console ws
```

## `aio console workspace dl [DESTINATION]`

Downloads the configuration for the selected Workspace

```
USAGE
  $ aio console workspace dl [DESTINATION] [--help] [--orgId <value>] [--projectId <value>] [--workspaceId <value>]

ARGUMENTS
  DESTINATION  Output file name or folder name where the Console Workspace configuration file should be saved

FLAGS
  --help                 Show help
  --orgId=<value>        Organization id of the Console Workspace configuration to download
  --projectId=<value>    Project id of the Console Workspace configuration to download
  --workspaceId=<value>  Workspace id of the Console Workspace configuration to download

DESCRIPTION
  Downloads the configuration for the selected Workspace

ALIASES
  $ aio console workspace dl
  $ aio console ws download
  $ aio console ws dl
```

## `aio console workspace download [DESTINATION]`

Downloads the configuration for the selected Workspace

```
USAGE
  $ aio console workspace download [DESTINATION] [--help] [--orgId <value>] [--projectId <value>] [--workspaceId
  <value>]

ARGUMENTS
  DESTINATION  Output file name or folder name where the Console Workspace configuration file should be saved

FLAGS
  --help                 Show help
  --orgId=<value>        Organization id of the Console Workspace configuration to download
  --projectId=<value>    Project id of the Console Workspace configuration to download
  --workspaceId=<value>  Workspace id of the Console Workspace configuration to download

DESCRIPTION
  Downloads the configuration for the selected Workspace

ALIASES
  $ aio console workspace dl
  $ aio console ws download
  $ aio console ws dl
```

## `aio console workspace list`

List your Workspaces for your selected Project

```
USAGE
  $ aio console workspace list [--help] [-j | -y] [--orgId <value>] [--projectId <value>]

FLAGS
  -j, --json           Output json
  -y, --yml            Output yml
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspaces to list
  --projectId=<value>  Project id of the Console Workspaces to list

DESCRIPTION
  List your Workspaces for your selected Project

ALIASES
  $ aio console workspace ls
  $ aio console ws list
  $ aio console ws ls
```

## `aio console workspace ls`

List your Workspaces for your selected Project

```
USAGE
  $ aio console workspace ls [--help] [-j | -y] [--orgId <value>] [--projectId <value>]

FLAGS
  -j, --json           Output json
  -y, --yml            Output yml
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspaces to list
  --projectId=<value>  Project id of the Console Workspaces to list

DESCRIPTION
  List your Workspaces for your selected Project

ALIASES
  $ aio console workspace ls
  $ aio console ws list
  $ aio console ws ls
```

## `aio console workspace sel [WORKSPACEIDORNAME]`

Select a Workspace for the selected Project

```
USAGE
  $ aio console workspace sel [WORKSPACEIDORNAME] [--help] [--orgId <value>] [--projectId <value>]

ARGUMENTS
  WORKSPACEIDORNAME  Adobe Developer Console Workspace id or Workspace name

FLAGS
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspace to select
  --projectId=<value>  Project id of the Console Workspace to select

DESCRIPTION
  Select a Workspace for the selected Project

ALIASES
  $ aio console workspace sel
  $ aio console ws select
  $ aio console ws sel
```

## `aio console workspace select [WORKSPACEIDORNAME]`

Select a Workspace for the selected Project

```
USAGE
  $ aio console workspace select [WORKSPACEIDORNAME] [--help] [--orgId <value>] [--projectId <value>]

ARGUMENTS
  WORKSPACEIDORNAME  Adobe Developer Console Workspace id or Workspace name

FLAGS
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspace to select
  --projectId=<value>  Project id of the Console Workspace to select

DESCRIPTION
  Select a Workspace for the selected Project

ALIASES
  $ aio console workspace sel
  $ aio console ws select
  $ aio console ws sel
```

## `aio console ws`

Manage your Adobe I/O Console Workspaces

```
USAGE
  $ aio console ws [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Manage your Adobe I/O Console Workspaces

ALIASES
  $ aio console ws
```

## `aio console ws dl [DESTINATION]`

Downloads the configuration for the selected Workspace

```
USAGE
  $ aio console ws dl [DESTINATION] [--help] [--orgId <value>] [--projectId <value>] [--workspaceId <value>]

ARGUMENTS
  DESTINATION  Output file name or folder name where the Console Workspace configuration file should be saved

FLAGS
  --help                 Show help
  --orgId=<value>        Organization id of the Console Workspace configuration to download
  --projectId=<value>    Project id of the Console Workspace configuration to download
  --workspaceId=<value>  Workspace id of the Console Workspace configuration to download

DESCRIPTION
  Downloads the configuration for the selected Workspace

ALIASES
  $ aio console workspace dl
  $ aio console ws download
  $ aio console ws dl
```

## `aio console ws download [DESTINATION]`

Downloads the configuration for the selected Workspace

```
USAGE
  $ aio console ws download [DESTINATION] [--help] [--orgId <value>] [--projectId <value>] [--workspaceId <value>]

ARGUMENTS
  DESTINATION  Output file name or folder name where the Console Workspace configuration file should be saved

FLAGS
  --help                 Show help
  --orgId=<value>        Organization id of the Console Workspace configuration to download
  --projectId=<value>    Project id of the Console Workspace configuration to download
  --workspaceId=<value>  Workspace id of the Console Workspace configuration to download

DESCRIPTION
  Downloads the configuration for the selected Workspace

ALIASES
  $ aio console workspace dl
  $ aio console ws download
  $ aio console ws dl
```

## `aio console ws list`

List your Workspaces for your selected Project

```
USAGE
  $ aio console ws list [--help] [-j | -y] [--orgId <value>] [--projectId <value>]

FLAGS
  -j, --json           Output json
  -y, --yml            Output yml
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspaces to list
  --projectId=<value>  Project id of the Console Workspaces to list

DESCRIPTION
  List your Workspaces for your selected Project

ALIASES
  $ aio console workspace ls
  $ aio console ws list
  $ aio console ws ls
```

## `aio console ws ls`

List your Workspaces for your selected Project

```
USAGE
  $ aio console ws ls [--help] [-j | -y] [--orgId <value>] [--projectId <value>]

FLAGS
  -j, --json           Output json
  -y, --yml            Output yml
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspaces to list
  --projectId=<value>  Project id of the Console Workspaces to list

DESCRIPTION
  List your Workspaces for your selected Project

ALIASES
  $ aio console workspace ls
  $ aio console ws list
  $ aio console ws ls
```

## `aio console ws sel [WORKSPACEIDORNAME]`

Select a Workspace for the selected Project

```
USAGE
  $ aio console ws sel [WORKSPACEIDORNAME] [--help] [--orgId <value>] [--projectId <value>]

ARGUMENTS
  WORKSPACEIDORNAME  Adobe Developer Console Workspace id or Workspace name

FLAGS
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspace to select
  --projectId=<value>  Project id of the Console Workspace to select

DESCRIPTION
  Select a Workspace for the selected Project

ALIASES
  $ aio console workspace sel
  $ aio console ws select
  $ aio console ws sel
```

## `aio console ws select [WORKSPACEIDORNAME]`

Select a Workspace for the selected Project

```
USAGE
  $ aio console ws select [WORKSPACEIDORNAME] [--help] [--orgId <value>] [--projectId <value>]

ARGUMENTS
  WORKSPACEIDORNAME  Adobe Developer Console Workspace id or Workspace name

FLAGS
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspace to select
  --projectId=<value>  Project id of the Console Workspace to select

DESCRIPTION
  Select a Workspace for the selected Project

ALIASES
  $ aio console workspace sel
  $ aio console ws select
  $ aio console ws sel
```

## `aio context`

Manage Adobe IMS contexts.

```
USAGE
  $ aio context [--debug <value>] [-v] [-l | -g] [-c <value>] [--list | --value | -s <value> | ]

FLAGS
  -c, --ctx=<value>  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -g, --global       global config
  -l, --local        local config
  -s, --set=<value>  Sets the name of the current local Adobe IMS context
  -v, --verbose      Verbose output
  --debug=<value>    Debug level output
  --list             Names of the Adobe IMS contexts as an array
  --value            Prints named or current Adobe IMS context data

DESCRIPTION
  Manage Adobe IMS contexts.

  The following options exist for this command:

  * List the names of the configured Adobe IMS contexts
  * Print the name of the current Adobe IMS context
  * Set the name of the current Adobe IMS context
  * Print the configuration of the current or a named Adobe IMS context

  Currently it is not possible to update the Adobe Adobe IMS context configuration
  using this command. Use the "aio config" commands for this.
  e.g. aio config:set ims.contexts.your_context.your_context_key "your_context_value"

  Please note, that the following IMS context label names is reserved: `cli`
  and should not be used as an IMS context name.

  Also note that the current context can only be set locally.


ALIASES
  $ aio ctx
  $ aio context
```

## `aio ctx`

Manage Adobe IMS contexts.

```
USAGE
  $ aio ctx [--debug <value>] [-v] [-l | -g] [-c <value>] [--list | --value | -s <value> | ]

FLAGS
  -c, --ctx=<value>  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -g, --global       global config
  -l, --local        local config
  -s, --set=<value>  Sets the name of the current local Adobe IMS context
  -v, --verbose      Verbose output
  --debug=<value>    Debug level output
  --list             Names of the Adobe IMS contexts as an array
  --value            Prints named or current Adobe IMS context data

DESCRIPTION
  Manage Adobe IMS contexts.

  The following options exist for this command:

  * List the names of the configured Adobe IMS contexts
  * Print the name of the current Adobe IMS context
  * Set the name of the current Adobe IMS context
  * Print the configuration of the current or a named Adobe IMS context

  Currently it is not possible to update the Adobe Adobe IMS context configuration
  using this command. Use the "aio config" commands for this.
  e.g. aio config:set ims.contexts.your_context.your_context_key "your_context_value"

  Please note, that the following IMS context label names is reserved: `cli`
  and should not be used as an IMS context name.

  Also note that the current context can only be set locally.


ALIASES
  $ aio ctx
  $ aio context
```

## `aio discover`

Discover plugins to install

```
USAGE
  $ aio discover [-i] [-f date|name] [-o asc|desc]

FLAGS
  -f, --sort-field=<option>  [default: date] which column to sort, use the sort-order flag to specify sort direction
                             <options: date|name>
  -i, --install              interactive install mode
  -o, --sort-order=<option>  [default: desc] sort order for a column, use the sort-field flag to specify which column to
                             sort
                             <options: asc|desc>

DESCRIPTION
  Discover plugins to install
  To install a plugin, run 'aio plugins install NAME'


ALIASES
  $ aio plugins discover
```

_See code: [src/commands/discover.ts](https://github.com/adobe/aio-cli/blob/9.2.0/src/commands/discover.ts)_

## `aio event`

Manage your Adobe I/O Events

```
USAGE
  $ aio event [--help] [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Manage your Adobe I/O Events
```

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v3.0.1/src/commands/event/index.ts)_

## `aio event eventmetadata`

Manage your Adobe I/O Events Providers' Event Metadata

```
USAGE
  $ aio event eventmetadata [--help] [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Manage your Adobe I/O Events Providers' Event Metadata
```

## `aio event eventmetadata create PROVIDERID`

Create an Event Metadata for a Provider

```
USAGE
  $ aio event eventmetadata create PROVIDERID [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  PROVIDERID  The requested eventmetadata event code

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Create an Event Metadata for a Provider
```

## `aio event eventmetadata delete PROVIDERID [EVENTCODE]`

Delete Event Metadata for a Provider

```
USAGE
  $ aio event eventmetadata delete PROVIDERID [EVENTCODE] [--help] [-v] [--version]

ARGUMENTS
  PROVIDERID  The requested provider ID
  EVENTCODE   The requested eventmetadata event code

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Delete Event Metadata for a Provider
```

## `aio event eventmetadata get PROVIDERID EVENTCODE`

Get details of an Event Code of a Provider

```
USAGE
  $ aio event eventmetadata get PROVIDERID EVENTCODE [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  PROVIDERID  The requested provider ID
  EVENTCODE   The requested eventmetadata event code

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Get details of an Event Code of a Provider
```

## `aio event eventmetadata list PROVIDERID`

List all Event Metadata for a Provider

```
USAGE
  $ aio event eventmetadata list PROVIDERID [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  PROVIDERID  The requested provider ID

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  List all Event Metadata for a Provider

ALIASES
  $ aio event eventmetadata ls
```

## `aio event eventmetadata ls PROVIDERID`

List all Event Metadata for a Provider

```
USAGE
  $ aio event eventmetadata ls PROVIDERID [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  PROVIDERID  The requested provider ID

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  List all Event Metadata for a Provider

ALIASES
  $ aio event eventmetadata ls
```

## `aio event eventmetadata update PROVIDERID EVENTCODE`

Update an Event Metadata for a Provider

```
USAGE
  $ aio event eventmetadata update PROVIDERID EVENTCODE [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  PROVIDERID  The requested provider ID
  EVENTCODE   The requested eventmetadata event code

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Update an Event Metadata for a Provider
```

## `aio event provider`

Manage your Adobe I/O Events Providers

```
USAGE
  $ aio event provider [--help] [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Manage your Adobe I/O Events Providers
```

## `aio event provider create`

Create a new Provider

```
USAGE
  $ aio event provider create [--help] [-v] [--version] [-j | -y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Create a new Provider
```

## `aio event provider delete PROVIDERID`

Delete Provider by id

```
USAGE
  $ aio event provider delete PROVIDERID [--help] [-v] [--version]

ARGUMENTS
  PROVIDERID  The requested provider ID

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Delete Provider by id
```

## `aio event provider get PROVIDERID`

Get details of Provider by id

```
USAGE
  $ aio event provider get PROVIDERID [--help] [-v] [--version] [--fetchEventMetadata] [-j | -y]

ARGUMENTS
  PROVIDERID  The requested provider ID

FLAGS
  -j, --json            Output json
  -v, --verbose         Verbose output
  -y, --yml             Output yml
  --fetchEventMetadata  Fetch event metadata with provider
  --help                Show help
  --version             Show version

DESCRIPTION
  Get details of Provider by id
```

## `aio event provider list`

Get list of all Providers for the Organization

```
USAGE
  $ aio event provider list [--help] [-v] [--version] [-j | -y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Get list of all Providers for the Organization

ALIASES
  $ aio event provider ls
```

## `aio event provider ls`

Get list of all Providers for the Organization

```
USAGE
  $ aio event provider ls [--help] [-v] [--version] [-j | -y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Get list of all Providers for the Organization

ALIASES
  $ aio event provider ls
```

## `aio event provider update PROVIDERID`

Update an existing Provider

```
USAGE
  $ aio event provider update PROVIDERID [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  PROVIDERID  The requested provider ID

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Update an existing Provider
```

## `aio event reg`

Manage your Adobe I/O Events Registrations

```
USAGE
  $ aio event reg [--help] [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Manage your Adobe I/O Events Registrations

ALIASES
  $ aio event reg
```

## `aio event reg create BODYJSONFILE`

Create a new Event Registration in your Workspace

```
USAGE
  $ aio event reg create BODYJSONFILE [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  BODYJSONFILE
      Path to a file in JSON format with the information to create a new Event Registration.
      The JSON should follow the following format:
      {
      "name": "<event registration name>",
      "description": "<event registration description>",
      "delivery_type": "webhook|webhook_batch|journal",
      "webhook_url": "<webhook URL responding to challenge>",
      "events_of_interest": [{
      "provider_id": "<event provider id>",
      "event_code": "<event provider event_code metadata>"
      }, { /* ...more events */ }]
      }

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Create a new Event Registration in your Workspace

ALIASES
  $ aio event reg create
```

## `aio event reg delete REGISTRATIONID`

Delete Registration

```
USAGE
  $ aio event reg delete REGISTRATIONID [--help] [-v] [--version]

ARGUMENTS
  REGISTRATIONID  The requested registration ID

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Delete Registration

ALIASES
  $ aio event reg delete
```

## `aio event reg get REGISTRATIONID`

Get an Event Registration in your Workspace

```
USAGE
  $ aio event reg get REGISTRATIONID [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  REGISTRATIONID  The requested registration ID

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Get an Event Registration in your Workspace

ALIASES
  $ aio event reg get
```

## `aio event reg list`

List your Event Registrations in your Workspace

```
USAGE
  $ aio event reg list [--help] [-v] [--version] [-j | -y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  List your Event Registrations in your Workspace

ALIASES
  $ aio event registration ls
  $ aio event reg list
  $ aio event reg ls
```

## `aio event reg ls`

List your Event Registrations in your Workspace

```
USAGE
  $ aio event reg ls [--help] [-v] [--version] [-j | -y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  List your Event Registrations in your Workspace

ALIASES
  $ aio event registration ls
  $ aio event reg list
  $ aio event reg ls
```

## `aio event registration`

Manage your Adobe I/O Events Registrations

```
USAGE
  $ aio event registration [--help] [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Manage your Adobe I/O Events Registrations

ALIASES
  $ aio event reg
```

## `aio event registration create BODYJSONFILE`

Create a new Event Registration in your Workspace

```
USAGE
  $ aio event registration create BODYJSONFILE [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  BODYJSONFILE
      Path to a file in JSON format with the information to create a new Event Registration.
      The JSON should follow the following format:
      {
      "name": "<event registration name>",
      "description": "<event registration description>",
      "delivery_type": "webhook|webhook_batch|journal",
      "webhook_url": "<webhook URL responding to challenge>",
      "events_of_interest": [{
      "provider_id": "<event provider id>",
      "event_code": "<event provider event_code metadata>"
      }, { /* ...more events */ }]
      }

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Create a new Event Registration in your Workspace

ALIASES
  $ aio event reg create
```

## `aio event registration delete REGISTRATIONID`

Delete Registration

```
USAGE
  $ aio event registration delete REGISTRATIONID [--help] [-v] [--version]

ARGUMENTS
  REGISTRATIONID  The requested registration ID

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Delete Registration

ALIASES
  $ aio event reg delete
```

## `aio event registration get REGISTRATIONID`

Get an Event Registration in your Workspace

```
USAGE
  $ aio event registration get REGISTRATIONID [--help] [-v] [--version] [-j | -y]

ARGUMENTS
  REGISTRATIONID  The requested registration ID

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Get an Event Registration in your Workspace

ALIASES
  $ aio event reg get
```

## `aio event registration list`

List your Event Registrations in your Workspace

```
USAGE
  $ aio event registration list [--help] [-v] [--version] [-j | -y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  List your Event Registrations in your Workspace

ALIASES
  $ aio event registration ls
  $ aio event reg list
  $ aio event reg ls
```

## `aio event registration ls`

List your Event Registrations in your Workspace

```
USAGE
  $ aio event registration ls [--help] [-v] [--version] [-j | -y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  List your Event Registrations in your Workspace

ALIASES
  $ aio event registration ls
  $ aio event reg list
  $ aio event reg ls
```

## `aio help [COMMANDS]`

Display help for aio.

```
USAGE
  $ aio help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for aio.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.8/src/commands/help.ts)_

## `aio info`

Display dev environment version information

```
USAGE
  $ aio info [-y | -j]

FLAGS
  -j, --json  output raw json
  -y, --yml   output yml

DESCRIPTION
  Display dev environment version information
```

_See code: [@adobe/aio-cli-plugin-info](https://github.com/adobe/aio-cli-plugin-info/blob/3.0.1/src/commands/info.js)_

## `aio login`

Log in with a certain Adobe IMS context and returns the access token.

```
USAGE
  $ aio login [--debug <value>] [-v] [-l | -g] [-c <value>] [-f] [-d] [-b] [-o]

FLAGS
  -b, --bare         print access token only
  -c, --ctx=<value>  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -d, --decode       Decode and display access token data
  -f, --force        Force logging in. This causes a forced logout on the context first and makes sure to not use any
                     cached data when calling the plugin.
  -g, --global       global config
  -l, --local        local config
  -o, --[no-]open    Open the default browser to complete the login
  -v, --verbose      Verbose output
  --debug=<value>    Debug level output

DESCRIPTION
  Log in with a certain Adobe IMS context and returns the access token.

  If the Adobe IMS context already has a valid access token set (valid meaning
  at least 10 minutes before expiry), that token is returned.

  Otherwise, if the Adobe IMS context has a valid refresh token set (valid
  meaning at least 10 minutes before expiry) that refresh token is
  exchanged for an access token before returning the access token.

  Lastly, if the Adobe IMS context properties are supported by one of the
  Adobe IMS login plugins, that login plugin is called to guide through
  the IMS login process.

  The currently supported Adobe IMS login plugins are:

  * aio-lib-ims-jwt for JWT token based login supporting
  Adobe I/O Console service integrations.
  * aio-lib-ims-oauth for browser based OAuth2 login. This
  plugin will launch the default browser to guide the user through the
  login process. The plugin itself will *never* see the user's
  password but only receive the authorization token after the
  user has authenticated with Adobe IMS.


ALIASES
  $ aio login
```

## `aio logout`

Log out the current or a named Adobe IMS context.

```
USAGE
  $ aio logout [--debug <value>] [-v] [-l | -g] [-c <value>] [-f]

FLAGS
  -c, --ctx=<value>  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -f, --[no-]force   Invalidate the refresh token as well as all access tokens.
                     Otherwise only the access token is invalidated. For Adobe IMS
                     contexts not supporting refresh tokens, this flag has no
                     effect.
  -g, --global       global config
  -l, --local        local config
  -v, --verbose      Verbose output
  --debug=<value>    Debug level output

DESCRIPTION
  Log out the current or a named Adobe IMS context.

  This command can be called multiple times on the same Adobe IMS context with
  out causing any errors. The assumption is that after calling this command
  without an error, the Adobe IMS context's access and refresh tokens have been
  invalidated and removed from persistent storage. Repeatedly calling this
  command will just do nothing.


ALIASES
  $ aio logout
```

## `aio open`

Open the developer console for the selected Organization, Project and Workspace

```
USAGE
  $ aio open [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Open the developer console for the selected Organization, Project and Workspace

ALIASES
  $ aio open
```

## `aio plugins`

List installed plugins.

```
USAGE
  $ aio plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ aio plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.3/src/commands/plugins/index.ts)_

## `aio plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ aio plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ aio plugins add

EXAMPLES
  $ aio plugins:install myplugin 

  $ aio plugins:install https://github.com/someuser/someplugin

  $ aio plugins:install someuser/someplugin
```

## `aio plugins discover`

Discover plugins to install

```
USAGE
  $ aio plugins discover [-i] [-f date|name] [-o asc|desc]

FLAGS
  -f, --sort-field=<option>  [default: date] which column to sort, use the sort-order flag to specify sort direction
                             <options: date|name>
  -i, --install              interactive install mode
  -o, --sort-order=<option>  [default: desc] sort order for a column, use the sort-field flag to specify which column to
                             sort
                             <options: asc|desc>

DESCRIPTION
  Discover plugins to install
  To install a plugin, run 'aio plugins install NAME'


ALIASES
  $ aio plugins discover
```

## `aio plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ aio plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ aio plugins:inspect myplugin
```

## `aio plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ aio plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ aio plugins add

EXAMPLES
  $ aio plugins:install myplugin 

  $ aio plugins:install https://github.com/someuser/someplugin

  $ aio plugins:install someuser/someplugin
```

## `aio plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ aio plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ aio plugins:link myplugin
```

## `aio plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ aio plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aio plugins unlink
  $ aio plugins remove
```

## `aio plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ aio plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aio plugins unlink
  $ aio plugins remove
```

## `aio plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ aio plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aio plugins unlink
  $ aio plugins remove
```

## `aio plugins update`

Update installed plugins.

```
USAGE
  $ aio plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `aio report`

Report an issue with the CLI or submit a feature request

```
USAGE
  $ aio report [-b | -f]

FLAGS
  -b, --bug      report an issue
  -f, --feature  request a feature

DESCRIPTION
  Report an issue with the CLI or submit a feature request
```

_See code: [@adobe/aio-cli-plugin-info](https://github.com/adobe/aio-cli-plugin-info/blob/3.0.1/src/commands/report.js)_

## `aio rollback`

Clears all installed plugins.

```
USAGE
  $ aio rollback [-i] [-l] [-c] [-v]

FLAGS
  -c, --[no-]confirm  confirmation needed for clear (defaults to true)
  -i, --interactive   interactive clear mode
  -l, --list          list plugins that will be cleared
  -v, --verbose       Verbose output

DESCRIPTION
  Clears all installed plugins.
```

_See code: [src/commands/rollback.ts](https://github.com/adobe/aio-cli/blob/9.2.0/src/commands/rollback.ts)_

## `aio rt`

Execute runtime commands

```
USAGE
  $ aio rt [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Execute runtime commands

ALIASES
  $ aio rt
```

## `aio rt action`

Manage your actions

```
USAGE
  $ aio rt action [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your actions

ALIASES
  $ aio rt action
```

## `aio rt action create ACTIONNAME [ACTIONPATH]`

Creates an Action

```
USAGE
  $ aio rt action create ACTIONNAME [ACTIONPATH] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost
    <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [--copy <value>] [-e <value>]
    [--web-secure <value> --web true|yes|false|no|raw] [-P <value>] [-E <value>] [-t <value>] [-m <value>] [-l <value>]
    [--kind <value>] [-a <value>] [-A <value>] [--sequence <value>] [--docker <value>] [--main <value>] [--binary]
    [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -E, --env-file=<value>         FILE containing environment variables in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -e, --env=<value>...           environment values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -l, --logsize=<value>          the maximum log size LIMIT in MB for the action (default 10, min: 0, max: 10)
  -m, --memory=<value>           the maximum memory LIMIT in MB for the action (default 256, min: 128, max: 4096)
  -p, --param=<value>...         parameter values in KEY VALUE format
  -t, --timeout=<value>          the timeout LIMIT in milliseconds after which the action is terminated (default 60000,
                                 min: 100, max: 3600000)
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --binary                       treat code artifact as binary
  --cert=<value>                 client cert
  --copy=<value>                 copy an existing action
  --debug=<value>                Debug level output
  --docker=<value>               [Restricted Access] use provided Docker image (a path on DockerHub) to run the action
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --kind=<value>                 the KIND of the action runtime (example: swift:default, nodejs:default)
  --main=<value>                 the name of the action entry point (function or fully-qualified method name when
                                 applicable)
  --sequence=<value>             treat ACTION as comma separated sequence of actions to invoke
  --version                      Show version
  --web=<option>                 treat ACTION as a web action or as a raw HTTP web action
                                 <options: true|yes|false|no|raw>
  --web-secure=<value>           secure the web action (valid values are true, false, or any string)

DESCRIPTION
  Creates an Action

ALIASES
  $ aio rt action create
```

## `aio rt action del ACTIONNAME`

Deletes an Action

```
USAGE
  $ aio rt action del ACTIONNAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Deletes an Action

ALIASES
  $ aio runtime action del
  $ aio rt action delete
  $ aio rt action del
```

## `aio rt action delete ACTIONNAME`

Deletes an Action

```
USAGE
  $ aio rt action delete ACTIONNAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Deletes an Action

ALIASES
  $ aio runtime action del
  $ aio rt action delete
  $ aio rt action del
```

## `aio rt action get ACTIONNAME`

Retrieves an Action

```
USAGE
  $ aio rt action get ACTIONNAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-r] [-c] [--save] [--save-as <value>]

FLAGS
  -c, --code            show action code (only works if code is not a zip file)
  -i, --insecure        bypass certificate check
  -r, --url             get action url
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --save                save action code to file corresponding with action name
  --save-as=<value>     file to save action code to
  --version             Show version

DESCRIPTION
  Retrieves an Action

ALIASES
  $ aio rt action get
```

## `aio rt action invoke ACTIONNAME`

Invokes an Action

```
USAGE
  $ aio rt action invoke ACTIONNAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-b] [-r]

FLAGS
  -P, --param-file=<value>  FILE containing parameter values in JSON format
  -b, --blocking            blocking invoke
  -i, --insecure            bypass certificate check
  -p, --param=<value>...    parameter values in KEY VALUE format
  -r, --result              blocking invoke; show only activation result (unless there is a failure)
  -u, --auth=<value>        whisk auth
  -v, --verbose             Verbose output
  --apihost=<value>         whisk API host
  --apiversion=<value>      whisk API version
  --cert=<value>            client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key=<value>             client key
  --version                 Show version

DESCRIPTION
  Invokes an Action

ALIASES
  $ aio rt action invoke
```

## `aio rt action list [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio rt action list [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of actions from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Actions

ALIASES
  $ aio runtime action ls
  $ aio runtime actions list
  $ aio runtime actions ls
  $ aio rt action list
  $ aio rt actions list
  $ aio rt action ls
  $ aio rt actions ls
```

## `aio rt action ls [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio rt action ls [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of actions from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Actions

ALIASES
  $ aio runtime action ls
  $ aio runtime actions list
  $ aio runtime actions ls
  $ aio rt action list
  $ aio rt actions list
  $ aio rt action ls
  $ aio rt actions ls
```

## `aio rt action update ACTIONNAME [ACTIONPATH]`

Updates an Action

```
USAGE
  $ aio rt action update ACTIONNAME [ACTIONPATH] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost
    <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [--copy <value>] [-e <value>]
    [--web-secure <value> --web true|yes|false|no|raw] [-P <value>] [-E <value>] [-t <value>] [-m <value>] [-l <value>]
    [--kind <value>] [-a <value>] [-A <value>] [--sequence <value>] [--docker <value>] [--main <value>] [--binary]
    [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -E, --env-file=<value>         FILE containing environment variables in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -e, --env=<value>...           environment values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -l, --logsize=<value>          the maximum log size LIMIT in MB for the action (default 10, min: 0, max: 10)
  -m, --memory=<value>           the maximum memory LIMIT in MB for the action (default 256, min: 128, max: 4096)
  -p, --param=<value>...         parameter values in KEY VALUE format
  -t, --timeout=<value>          the timeout LIMIT in milliseconds after which the action is terminated (default 60000,
                                 min: 100, max: 3600000)
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --binary                       treat code artifact as binary
  --cert=<value>                 client cert
  --copy=<value>                 copy an existing action
  --debug=<value>                Debug level output
  --docker=<value>               [Restricted Access] use provided Docker image (a path on DockerHub) to run the action
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --kind=<value>                 the KIND of the action runtime (example: swift:default, nodejs:default)
  --main=<value>                 the name of the action entry point (function or fully-qualified method name when
                                 applicable)
  --sequence=<value>             treat ACTION as comma separated sequence of actions to invoke
  --version                      Show version
  --web=<option>                 treat ACTION as a web action or as a raw HTTP web action
                                 <options: true|yes|false|no|raw>
  --web-secure=<value>           secure the web action (valid values are true, false, or any string)

DESCRIPTION
  Updates an Action

ALIASES
  $ aio rt action update
```

## `aio rt actions list [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio rt actions list [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of actions from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Actions

ALIASES
  $ aio runtime action ls
  $ aio runtime actions list
  $ aio runtime actions ls
  $ aio rt action list
  $ aio rt actions list
  $ aio rt action ls
  $ aio rt actions ls
```

## `aio rt actions ls [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio rt actions ls [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of actions from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Actions

ALIASES
  $ aio runtime action ls
  $ aio runtime actions list
  $ aio runtime actions ls
  $ aio rt action list
  $ aio rt actions list
  $ aio rt action ls
  $ aio rt actions ls
```

## `aio rt activation`

Manage your activations

```
USAGE
  $ aio rt activation [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your activations

ALIASES
  $ aio rt activation
```

## `aio rt activation get [ACTIVATIONID]`

Retrieves an Activation

```
USAGE
  $ aio rt activation get [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l] [-g]

FLAGS
  -g, --logs            emit only the logs, stripped of time stamps and stream identifier
  -i, --insecure        bypass certificate check
  -l, --last            retrieves the most recent activation
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Retrieves an Activation

ALIASES
  $ aio rt activation get
```

## `aio rt activation list [ACTION_NAME]`

Lists all the Activations

```
USAGE
  $ aio rt activation list [ACTION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations (min: 0, max: 50)
  -s, --skip=<value>    exclude the first SKIP number of activations from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --since=<value>       return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan
                        1970
  --upto=<value>        return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan
                        1970
  --version             Show version

DESCRIPTION
  Lists all the Activations

ALIASES
  $ aio runtime activations list
  $ aio runtime activation ls
  $ aio runtime activations ls
  $ aio rt activation list
  $ aio rt activation ls
  $ aio rt activations list
  $ aio rt activations ls
```

## `aio rt activation log [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio rt activation log [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-d |  | [-a <value> | -m | -p <value>]] [-r] [--limit
    <value> | -l] [-t | -w | -o]

FLAGS
  -a, --action=<value>   Fetch logs for a specific action
  -d, --deployed         Fetch logs for all actions deployed under a specific package
  -i, --insecure         bypass certificate check
  -l, --last             retrieves the most recent activation logs
  -m, --manifest         Fetch logs for all actions in the manifest
  -o, --poll             Fetch logs continuously
  -p, --package=<value>  Fetch logs for a specific package in the manifest
  -r, --strip            strip timestamp information and output first line only
  -t, --tail             Fetch logs continuously
  -u, --auth=<value>     whisk auth
  -v, --verbose          Verbose output
  -w, --watch            Fetch logs continuously
  --apihost=<value>      whisk API host
  --apiversion=<value>   whisk API version
  --cert=<value>         client cert
  --debug=<value>        Debug level output
  --help                 Show help
  --key=<value>          client key
  --limit=<value>        return logs only from last LIMIT number of activations (min: 0, max: 50)
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime activation log
  $ aio runtime log
  $ aio runtime logs
  $ aio rt activation logs
  $ aio rt activation log
  $ aio rt log
  $ aio rt logs
```

## `aio rt activation logs [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio rt activation logs [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-d |  | [-a <value> | -m | -p <value>]] [-r] [--limit
    <value> | -l] [-t | -w | -o]

FLAGS
  -a, --action=<value>   Fetch logs for a specific action
  -d, --deployed         Fetch logs for all actions deployed under a specific package
  -i, --insecure         bypass certificate check
  -l, --last             retrieves the most recent activation logs
  -m, --manifest         Fetch logs for all actions in the manifest
  -o, --poll             Fetch logs continuously
  -p, --package=<value>  Fetch logs for a specific package in the manifest
  -r, --strip            strip timestamp information and output first line only
  -t, --tail             Fetch logs continuously
  -u, --auth=<value>     whisk auth
  -v, --verbose          Verbose output
  -w, --watch            Fetch logs continuously
  --apihost=<value>      whisk API host
  --apiversion=<value>   whisk API version
  --cert=<value>         client cert
  --debug=<value>        Debug level output
  --help                 Show help
  --key=<value>          client key
  --limit=<value>        return logs only from last LIMIT number of activations (min: 0, max: 50)
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime activation log
  $ aio runtime log
  $ aio runtime logs
  $ aio rt activation logs
  $ aio rt activation log
  $ aio rt log
  $ aio rt logs
```

## `aio rt activation ls [ACTION_NAME]`

Lists all the Activations

```
USAGE
  $ aio rt activation ls [ACTION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations (min: 0, max: 50)
  -s, --skip=<value>    exclude the first SKIP number of activations from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --since=<value>       return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan
                        1970
  --upto=<value>        return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan
                        1970
  --version             Show version

DESCRIPTION
  Lists all the Activations

ALIASES
  $ aio runtime activations list
  $ aio runtime activation ls
  $ aio runtime activations ls
  $ aio rt activation list
  $ aio rt activation ls
  $ aio rt activations list
  $ aio rt activations ls
```

## `aio rt activation result [ACTIVATIONID]`

Retrieves the Results for an Activation

```
USAGE
  $ aio rt activation result [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l]

FLAGS
  -i, --insecure        bypass certificate check
  -l, --last            retrieves the most recent activation result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Retrieves the Results for an Activation

ALIASES
  $ aio rt activation result
```

## `aio rt activations list [ACTION_NAME]`

Lists all the Activations

```
USAGE
  $ aio rt activations list [ACTION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations (min: 0, max: 50)
  -s, --skip=<value>    exclude the first SKIP number of activations from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --since=<value>       return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan
                        1970
  --upto=<value>        return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan
                        1970
  --version             Show version

DESCRIPTION
  Lists all the Activations

ALIASES
  $ aio runtime activations list
  $ aio runtime activation ls
  $ aio runtime activations ls
  $ aio rt activation list
  $ aio rt activation ls
  $ aio rt activations list
  $ aio rt activations ls
```

## `aio rt activations ls [ACTION_NAME]`

Lists all the Activations

```
USAGE
  $ aio rt activations ls [ACTION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations (min: 0, max: 50)
  -s, --skip=<value>    exclude the first SKIP number of activations from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --since=<value>       return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan
                        1970
  --upto=<value>        return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan
                        1970
  --version             Show version

DESCRIPTION
  Lists all the Activations

ALIASES
  $ aio runtime activations list
  $ aio runtime activation ls
  $ aio runtime activations ls
  $ aio rt activation list
  $ aio rt activation ls
  $ aio rt activations list
  $ aio rt activations ls
```

## `aio rt api`

Manage your routes

```
USAGE
  $ aio rt api [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your routes

ALIASES
  $ aio runtime api
  $ aio rt api
```

## `aio rt api create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`

create a new api route

```
USAGE
  $ aio rt api create [BASEPATH] [RELPATH] [APIVERB] [ACTION] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i]
    [--debug <value>] [-v] [--version] [--help] [-n <value> | -c <value>] [-r html|http|json|text|svg|json | ]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb
  ACTION    The action to call

FLAGS
  -c, --config-file=<value>     file containing API configuration in swagger JSON format
  -i, --insecure                bypass certificate check
  -n, --apiname=<value>         Friendly name of the API; ignored when CFG_FILE is specified (default BASE_PATH)
  -r, --response-type=<option>  [default: json] Set the web action response TYPE.
                                <options: html|http|json|text|svg|json>
  -u, --auth                    whisk auth
  -v, --verbose                 Verbose output
  --apihost                     whisk API host
  --apiversion                  whisk API version
  --cert                        client cert
  --debug=<value>               Debug level output
  --help                        Show help
  --key                         client key
  --version                     Show version

DESCRIPTION
  create a new api route

ALIASES
  $ aio runtime api create
  $ aio rt route create
  $ aio rt api create
```

## `aio rt api delete BASEPATHORAPINAME [RELPATH] [APIVERB]`

delete an API

```
USAGE
  $ aio rt api delete BASEPATHORAPINAME [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i]
    [--debug <value>] [-v] [--version] [--help]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name
  RELPATH            The path of the api relative to the base path
  APIVERB            (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  delete an API

ALIASES
  $ aio runtime api delete
  $ aio rt route delete
  $ aio rt api delete
```

## `aio rt api get BASEPATHORAPINAME`

get API details

```
USAGE
  $ aio rt api get BASEPATHORAPINAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>]
    [-v] [--version] [--help]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  get API details

ALIASES
  $ aio runtime api get
  $ aio rt route get
  $ aio rt api get
```

## `aio rt api list [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio rt api list [BASEPATH] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
    <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--json]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  only return LIMIT number of triggers
  -s, --skip=<value>   exclude the first SKIP number of triggers from the result
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --version            Show version

DESCRIPTION
  list route/apis for Adobe I/O Runtime

ALIASES
  $ aio runtime route ls
  $ aio runtime api list
  $ aio runtime api ls
  $ aio rt route list
  $ aio rt route ls
  $ aio rt api list
  $ aio rt api ls
```

## `aio rt api ls [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio rt api ls [BASEPATH] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
    <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--json]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  only return LIMIT number of triggers
  -s, --skip=<value>   exclude the first SKIP number of triggers from the result
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --version            Show version

DESCRIPTION
  list route/apis for Adobe I/O Runtime

ALIASES
  $ aio runtime route ls
  $ aio runtime api list
  $ aio runtime api ls
  $ aio rt route list
  $ aio rt route ls
  $ aio rt api list
  $ aio rt api ls
```

## `aio rt deploy`

The Runtime Deployment Tool

```
USAGE
  $ aio rt deploy [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [-m <value>] [-d <value>] [--param <value>] [-P <value>]

FLAGS
  -P, --param-file=<value>  FILE containing parameter values in JSON format
  -d, --deployment=<value>  the path to the deployment file
  -i, --insecure            bypass certificate check
  -m, --manifest=<value>    the manifest file location
  -u, --auth=<value>        whisk auth
  -v, --verbose             Verbose output
  --apihost=<value>         whisk API host
  --apiversion=<value>      whisk API version
  --cert=<value>            client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key=<value>             client key
  --param=<value>...        parameter values in KEY VALUE format
  --version                 Show version

DESCRIPTION
  The Runtime Deployment Tool

ALIASES
  $ aio rt deploy
```

## `aio rt deploy export`

Exports managed project assets from Runtime to manifest and function files

```
USAGE
  $ aio rt deploy export -m <value> --projectname <value> [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure          bypass certificate check
  -m, --manifest=<value>  (required) the manifest file location
  -u, --auth=<value>      whisk auth
  -v, --verbose           Verbose output
  --apihost=<value>       whisk API host
  --apiversion=<value>    whisk API version
  --cert=<value>          client cert
  --debug=<value>         Debug level output
  --help                  Show help
  --key=<value>           client key
  --projectname=<value>   (required) the name of the project to be undeployed
  --version               Show version

DESCRIPTION
  Exports managed project assets from Runtime to manifest and function files

ALIASES
  $ aio rt deploy export
```

## `aio rt deploy report`

Provides a summary report of Runtime assets being deployed/undeployed based on manifest/deployment YAML

```
USAGE
  $ aio rt deploy report [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [-m <value>] [-d <value>]

FLAGS
  -d, --deployment=<value>  the deployment file location
  -i, --insecure            bypass certificate check
  -m, --manifest=<value>    the manifest file location
  -u, --auth=<value>        whisk auth
  -v, --verbose             Verbose output
  --apihost=<value>         whisk API host
  --apiversion=<value>      whisk API version
  --cert=<value>            client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key=<value>             client key
  --version                 Show version

DESCRIPTION
  Provides a summary report of Runtime assets being deployed/undeployed based on manifest/deployment YAML

ALIASES
  $ aio rt deploy report
```

## `aio rt deploy sync`

A tool to sync deployment and undeployment of Runtime packages using a manifest and optional deployment files using YAML

```
USAGE
  $ aio rt deploy sync [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [-m <value>] [-d <value>]

FLAGS
  -d, --deployment=<value>  the path to the deployment file
  -i, --insecure            bypass certificate check
  -m, --manifest=<value>    the manifest file location
  -u, --auth=<value>        whisk auth
  -v, --verbose             Verbose output
  --apihost=<value>         whisk API host
  --apiversion=<value>      whisk API version
  --cert=<value>            client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key=<value>             client key
  --version                 Show version

DESCRIPTION
  A tool to sync deployment and undeployment of Runtime packages using a manifest and optional deployment files using
  YAML

ALIASES
  $ aio rt deploy sync
```

## `aio rt deploy undeploy`

Undeploy removes Runtime assets which were deployed from the manifest and deployment YAML

```
USAGE
  $ aio rt deploy undeploy [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [-m <value>] [--projectname <value>]

FLAGS
  -i, --insecure          bypass certificate check
  -m, --manifest=<value>  the manifest file location
  -u, --auth=<value>      whisk auth
  -v, --verbose           Verbose output
  --apihost=<value>       whisk API host
  --apiversion=<value>    whisk API version
  --cert=<value>          client cert
  --debug=<value>         Debug level output
  --help                  Show help
  --key=<value>           client key
  --projectname=<value>   the name of the project to be undeployed
  --version               Show version

DESCRIPTION
  Undeploy removes Runtime assets which were deployed from the manifest and deployment YAML

ALIASES
  $ aio rt deploy undeploy
```

## `aio rt deploy version`

Prints the version number of aio runtime deploy

```
USAGE
  $ aio rt deploy version [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Prints the version number of aio runtime deploy

ALIASES
  $ aio rt deploy version
```

## `aio rt get`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio rt get [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json] [--name-sort] [-n]

FLAGS
  -i, --insecure        bypass certificate check
  -n, --name            sort results by name
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Get triggers, actions, and rules in the registry for namespace

ALIASES
  $ aio rt get
  $ aio runtime list
  $ aio rt list
  $ aio runtime ls
  $ aio rt ls
```

## `aio rt list`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio rt list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json] [--name-sort] [-n]

FLAGS
  -i, --insecure        bypass certificate check
  -n, --name            sort results by name
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Get triggers, actions, and rules in the registry for namespace

ALIASES
  $ aio rt get
  $ aio runtime list
  $ aio rt list
  $ aio runtime ls
  $ aio rt ls
```

## `aio rt log [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio rt log [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-d |  | [-a <value> | -m | -p <value>]] [-r] [--limit
    <value> | -l] [-t | -w | -o]

FLAGS
  -a, --action=<value>   Fetch logs for a specific action
  -d, --deployed         Fetch logs for all actions deployed under a specific package
  -i, --insecure         bypass certificate check
  -l, --last             retrieves the most recent activation logs
  -m, --manifest         Fetch logs for all actions in the manifest
  -o, --poll             Fetch logs continuously
  -p, --package=<value>  Fetch logs for a specific package in the manifest
  -r, --strip            strip timestamp information and output first line only
  -t, --tail             Fetch logs continuously
  -u, --auth=<value>     whisk auth
  -v, --verbose          Verbose output
  -w, --watch            Fetch logs continuously
  --apihost=<value>      whisk API host
  --apiversion=<value>   whisk API version
  --cert=<value>         client cert
  --debug=<value>        Debug level output
  --help                 Show help
  --key=<value>          client key
  --limit=<value>        return logs only from last LIMIT number of activations (min: 0, max: 50)
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime activation log
  $ aio runtime log
  $ aio runtime logs
  $ aio rt activation logs
  $ aio rt activation log
  $ aio rt log
  $ aio rt logs
```

## `aio rt logs [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio rt logs [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-d |  | [-a <value> | -m | -p <value>]] [-r] [--limit
    <value> | -l] [-t | -w | -o]

FLAGS
  -a, --action=<value>   Fetch logs for a specific action
  -d, --deployed         Fetch logs for all actions deployed under a specific package
  -i, --insecure         bypass certificate check
  -l, --last             retrieves the most recent activation logs
  -m, --manifest         Fetch logs for all actions in the manifest
  -o, --poll             Fetch logs continuously
  -p, --package=<value>  Fetch logs for a specific package in the manifest
  -r, --strip            strip timestamp information and output first line only
  -t, --tail             Fetch logs continuously
  -u, --auth=<value>     whisk auth
  -v, --verbose          Verbose output
  -w, --watch            Fetch logs continuously
  --apihost=<value>      whisk API host
  --apiversion=<value>   whisk API version
  --cert=<value>         client cert
  --debug=<value>        Debug level output
  --help                 Show help
  --key=<value>          client key
  --limit=<value>        return logs only from last LIMIT number of activations (min: 0, max: 50)
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime activation log
  $ aio runtime log
  $ aio runtime logs
  $ aio rt activation logs
  $ aio rt activation log
  $ aio rt log
  $ aio rt logs
```

## `aio rt ls`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio rt ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json] [--name-sort] [-n]

FLAGS
  -i, --insecure        bypass certificate check
  -n, --name            sort results by name
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Get triggers, actions, and rules in the registry for namespace

ALIASES
  $ aio rt get
  $ aio runtime list
  $ aio rt list
  $ aio runtime ls
  $ aio rt ls
```

## `aio rt namespace`

Manage your namespaces

```
USAGE
  $ aio rt namespace [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your namespaces

ALIASES
  $ aio runtime ns
  $ aio rt namespace
  $ aio rt ns
```

## `aio rt namespace lf`

Manage log forwarding settings

```
USAGE
  $ aio rt namespace lf [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage log forwarding settings

ALIASES
  $ aio runtime ns log-forwarding
  $ aio runtime ns lf
  $ aio runtime namespace lf
  $ aio rt namespace log-forwarding
  $ aio rt namespace lf
  $ aio rt ns log-forwarding
  $ aio rt ns lf
```

## `aio rt namespace lf errors`

Get log forwarding errors

```
USAGE
  $ aio rt namespace lf errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio runtime ns log-forwarding errors
  $ aio runtime ns lf errors
  $ aio runtime namespace lf errors
  $ aio rt namespace log-forwarding errors
  $ aio rt namespace lf errors
  $ aio rt ns log-forwarding errors
  $ aio rt ns lf errors
```

## `aio rt namespace lf get`

Get log forwarding destination configuration

```
USAGE
  $ aio rt namespace lf get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio runtime ns log-forwarding get
  $ aio runtime ns lf get
  $ aio runtime namespace lf get
  $ aio rt namespace log-forwarding get
  $ aio rt namespace lf get
  $ aio rt ns log-forwarding get
  $ aio rt ns lf get
```

## `aio rt namespace lf set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio rt namespace lf set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Configure log forwarding destination (interactive)

ALIASES
  $ aio runtime ns log-forwarding set
  $ aio runtime ns lf set
  $ aio runtime namespace lf set
  $ aio rt namespace log-forwarding set
  $ aio rt namespace lf set
  $ aio rt ns log-forwarding set
  $ aio rt ns lf set
```

## `aio rt namespace lf set adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio rt namespace lf set adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

ALIASES
  $ aio runtime ns log-forwarding set adobe-io-runtime
  $ aio runtime ns lf set adobe-io-runtime
  $ aio runtime namespace lf set adobe-io-runtime
  $ aio rt namespace log-forwarding set adobe-io-runtime
  $ aio rt namespace lf set adobe-io-runtime
  $ aio rt ns log-forwarding set adobe-io-runtime
  $ aio rt ns lf set adobe-io-runtime
```

## `aio rt namespace lf set azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio rt namespace lf set azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
    [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --customer-id=<value>  (required) Customer ID
  --debug=<value>        Debug level output
  --help                 Show help
  --key                  client key
  --log-type=<value>     (required) Log type
  --shared-key=<value>   (required) Shared key
  --version              Show version

DESCRIPTION
  Set log forwarding destination to Azure Log Analytics

ALIASES
  $ aio runtime ns log-forwarding set azure-log-analytics
  $ aio runtime ns lf set azure-log-analytics
  $ aio runtime namespace lf set azure-log-analytics
  $ aio rt namespace log-forwarding set azure-log-analytics
  $ aio rt namespace lf set azure-log-analytics
  $ aio rt ns log-forwarding set azure-log-analytics
  $ aio rt ns lf set azure-log-analytics
```

## `aio rt namespace lf set splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio rt namespace lf set splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
    [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --hec-token=<value>  (required) HEC token
  --help               Show help
  --host=<value>       (required) Host
  --index=<value>      (required) Index
  --key                client key
  --port=<value>       (required) Port
  --version            Show version

DESCRIPTION
  Set log forwarding destination to Splunk HEC

ALIASES
  $ aio runtime ns log-forwarding set splunk-hec
  $ aio runtime ns lf set splunk-hec
  $ aio runtime namespace lf set splunk-hec
  $ aio rt namespace log-forwarding set splunk-hec
  $ aio rt namespace lf set splunk-hec
  $ aio rt ns log-forwarding set splunk-hec
  $ aio rt ns lf set splunk-hec
```

## `aio rt namespace list`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio rt namespace list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Lists all of your namespaces for Adobe I/O Runtime

ALIASES
  $ aio runtime namespace ls
  $ aio runtime ns list
  $ aio runtime ns ls
  $ aio rt namespace list
  $ aio rt namespace ls
  $ aio rt ns list
  $ aio rt ns ls
```

## `aio rt namespace log-forwarding`

Manage log forwarding settings

```
USAGE
  $ aio rt namespace log-forwarding [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage log forwarding settings

ALIASES
  $ aio runtime ns log-forwarding
  $ aio runtime ns lf
  $ aio runtime namespace lf
  $ aio rt namespace log-forwarding
  $ aio rt namespace lf
  $ aio rt ns log-forwarding
  $ aio rt ns lf
```

## `aio rt namespace log-forwarding errors`

Get log forwarding errors

```
USAGE
  $ aio rt namespace log-forwarding errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio runtime ns log-forwarding errors
  $ aio runtime ns lf errors
  $ aio runtime namespace lf errors
  $ aio rt namespace log-forwarding errors
  $ aio rt namespace lf errors
  $ aio rt ns log-forwarding errors
  $ aio rt ns lf errors
```

## `aio rt namespace log-forwarding get`

Get log forwarding destination configuration

```
USAGE
  $ aio rt namespace log-forwarding get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio runtime ns log-forwarding get
  $ aio runtime ns lf get
  $ aio runtime namespace lf get
  $ aio rt namespace log-forwarding get
  $ aio rt namespace lf get
  $ aio rt ns log-forwarding get
  $ aio rt ns lf get
```

## `aio rt namespace log-forwarding set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio rt namespace log-forwarding set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Configure log forwarding destination (interactive)

ALIASES
  $ aio runtime ns log-forwarding set
  $ aio runtime ns lf set
  $ aio runtime namespace lf set
  $ aio rt namespace log-forwarding set
  $ aio rt namespace lf set
  $ aio rt ns log-forwarding set
  $ aio rt ns lf set
```

## `aio rt namespace log-forwarding set adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio rt namespace log-forwarding set adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

ALIASES
  $ aio runtime ns log-forwarding set adobe-io-runtime
  $ aio runtime ns lf set adobe-io-runtime
  $ aio runtime namespace lf set adobe-io-runtime
  $ aio rt namespace log-forwarding set adobe-io-runtime
  $ aio rt namespace lf set adobe-io-runtime
  $ aio rt ns log-forwarding set adobe-io-runtime
  $ aio rt ns lf set adobe-io-runtime
```

## `aio rt namespace log-forwarding set azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio rt namespace log-forwarding set azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
    [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --customer-id=<value>  (required) Customer ID
  --debug=<value>        Debug level output
  --help                 Show help
  --key                  client key
  --log-type=<value>     (required) Log type
  --shared-key=<value>   (required) Shared key
  --version              Show version

DESCRIPTION
  Set log forwarding destination to Azure Log Analytics

ALIASES
  $ aio runtime ns log-forwarding set azure-log-analytics
  $ aio runtime ns lf set azure-log-analytics
  $ aio runtime namespace lf set azure-log-analytics
  $ aio rt namespace log-forwarding set azure-log-analytics
  $ aio rt namespace lf set azure-log-analytics
  $ aio rt ns log-forwarding set azure-log-analytics
  $ aio rt ns lf set azure-log-analytics
```

## `aio rt namespace log-forwarding set splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio rt namespace log-forwarding set splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
    [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --hec-token=<value>  (required) HEC token
  --help               Show help
  --host=<value>       (required) Host
  --index=<value>      (required) Index
  --key                client key
  --port=<value>       (required) Port
  --version            Show version

DESCRIPTION
  Set log forwarding destination to Splunk HEC

ALIASES
  $ aio runtime ns log-forwarding set splunk-hec
  $ aio runtime ns lf set splunk-hec
  $ aio runtime namespace lf set splunk-hec
  $ aio rt namespace log-forwarding set splunk-hec
  $ aio rt namespace lf set splunk-hec
  $ aio rt ns log-forwarding set splunk-hec
  $ aio rt ns lf set splunk-hec
```

## `aio rt namespace ls`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio rt namespace ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Lists all of your namespaces for Adobe I/O Runtime

ALIASES
  $ aio runtime namespace ls
  $ aio runtime ns list
  $ aio runtime ns ls
  $ aio rt namespace list
  $ aio rt namespace ls
  $ aio rt ns list
  $ aio rt ns ls
```

## `aio rt ns`

Manage your namespaces

```
USAGE
  $ aio rt ns [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your namespaces

ALIASES
  $ aio runtime ns
  $ aio rt namespace
  $ aio rt ns
```

## `aio rt ns lf`

Manage log forwarding settings

```
USAGE
  $ aio rt ns lf [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage log forwarding settings

ALIASES
  $ aio runtime ns log-forwarding
  $ aio runtime ns lf
  $ aio runtime namespace lf
  $ aio rt namespace log-forwarding
  $ aio rt namespace lf
  $ aio rt ns log-forwarding
  $ aio rt ns lf
```

## `aio rt ns lf errors`

Get log forwarding errors

```
USAGE
  $ aio rt ns lf errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio runtime ns log-forwarding errors
  $ aio runtime ns lf errors
  $ aio runtime namespace lf errors
  $ aio rt namespace log-forwarding errors
  $ aio rt namespace lf errors
  $ aio rt ns log-forwarding errors
  $ aio rt ns lf errors
```

## `aio rt ns lf get`

Get log forwarding destination configuration

```
USAGE
  $ aio rt ns lf get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio runtime ns log-forwarding get
  $ aio runtime ns lf get
  $ aio runtime namespace lf get
  $ aio rt namespace log-forwarding get
  $ aio rt namespace lf get
  $ aio rt ns log-forwarding get
  $ aio rt ns lf get
```

## `aio rt ns lf set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio rt ns lf set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Configure log forwarding destination (interactive)

ALIASES
  $ aio runtime ns log-forwarding set
  $ aio runtime ns lf set
  $ aio runtime namespace lf set
  $ aio rt namespace log-forwarding set
  $ aio rt namespace lf set
  $ aio rt ns log-forwarding set
  $ aio rt ns lf set
```

## `aio rt ns lf set adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio rt ns lf set adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

ALIASES
  $ aio runtime ns log-forwarding set adobe-io-runtime
  $ aio runtime ns lf set adobe-io-runtime
  $ aio runtime namespace lf set adobe-io-runtime
  $ aio rt namespace log-forwarding set adobe-io-runtime
  $ aio rt namespace lf set adobe-io-runtime
  $ aio rt ns log-forwarding set adobe-io-runtime
  $ aio rt ns lf set adobe-io-runtime
```

## `aio rt ns lf set azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio rt ns lf set azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
    [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --customer-id=<value>  (required) Customer ID
  --debug=<value>        Debug level output
  --help                 Show help
  --key                  client key
  --log-type=<value>     (required) Log type
  --shared-key=<value>   (required) Shared key
  --version              Show version

DESCRIPTION
  Set log forwarding destination to Azure Log Analytics

ALIASES
  $ aio runtime ns log-forwarding set azure-log-analytics
  $ aio runtime ns lf set azure-log-analytics
  $ aio runtime namespace lf set azure-log-analytics
  $ aio rt namespace log-forwarding set azure-log-analytics
  $ aio rt namespace lf set azure-log-analytics
  $ aio rt ns log-forwarding set azure-log-analytics
  $ aio rt ns lf set azure-log-analytics
```

## `aio rt ns lf set splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio rt ns lf set splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
    [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --hec-token=<value>  (required) HEC token
  --help               Show help
  --host=<value>       (required) Host
  --index=<value>      (required) Index
  --key                client key
  --port=<value>       (required) Port
  --version            Show version

DESCRIPTION
  Set log forwarding destination to Splunk HEC

ALIASES
  $ aio runtime ns log-forwarding set splunk-hec
  $ aio runtime ns lf set splunk-hec
  $ aio runtime namespace lf set splunk-hec
  $ aio rt namespace log-forwarding set splunk-hec
  $ aio rt namespace lf set splunk-hec
  $ aio rt ns log-forwarding set splunk-hec
  $ aio rt ns lf set splunk-hec
```

## `aio rt ns list`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio rt ns list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Lists all of your namespaces for Adobe I/O Runtime

ALIASES
  $ aio runtime namespace ls
  $ aio runtime ns list
  $ aio runtime ns ls
  $ aio rt namespace list
  $ aio rt namespace ls
  $ aio rt ns list
  $ aio rt ns ls
```

## `aio rt ns log-forwarding`

Manage log forwarding settings

```
USAGE
  $ aio rt ns log-forwarding [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage log forwarding settings

ALIASES
  $ aio runtime ns log-forwarding
  $ aio runtime ns lf
  $ aio runtime namespace lf
  $ aio rt namespace log-forwarding
  $ aio rt namespace lf
  $ aio rt ns log-forwarding
  $ aio rt ns lf
```

## `aio rt ns log-forwarding errors`

Get log forwarding errors

```
USAGE
  $ aio rt ns log-forwarding errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio runtime ns log-forwarding errors
  $ aio runtime ns lf errors
  $ aio runtime namespace lf errors
  $ aio rt namespace log-forwarding errors
  $ aio rt namespace lf errors
  $ aio rt ns log-forwarding errors
  $ aio rt ns lf errors
```

## `aio rt ns log-forwarding get`

Get log forwarding destination configuration

```
USAGE
  $ aio rt ns log-forwarding get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio runtime ns log-forwarding get
  $ aio runtime ns lf get
  $ aio runtime namespace lf get
  $ aio rt namespace log-forwarding get
  $ aio rt namespace lf get
  $ aio rt ns log-forwarding get
  $ aio rt ns lf get
```

## `aio rt ns log-forwarding set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio rt ns log-forwarding set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Configure log forwarding destination (interactive)

ALIASES
  $ aio runtime ns log-forwarding set
  $ aio runtime ns lf set
  $ aio runtime namespace lf set
  $ aio rt namespace log-forwarding set
  $ aio rt namespace lf set
  $ aio rt ns log-forwarding set
  $ aio rt ns lf set
```

## `aio rt ns log-forwarding set adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio rt ns log-forwarding set adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

ALIASES
  $ aio runtime ns log-forwarding set adobe-io-runtime
  $ aio runtime ns lf set adobe-io-runtime
  $ aio runtime namespace lf set adobe-io-runtime
  $ aio rt namespace log-forwarding set adobe-io-runtime
  $ aio rt namespace lf set adobe-io-runtime
  $ aio rt ns log-forwarding set adobe-io-runtime
  $ aio rt ns lf set adobe-io-runtime
```

## `aio rt ns log-forwarding set azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio rt ns log-forwarding set azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
    [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --customer-id=<value>  (required) Customer ID
  --debug=<value>        Debug level output
  --help                 Show help
  --key                  client key
  --log-type=<value>     (required) Log type
  --shared-key=<value>   (required) Shared key
  --version              Show version

DESCRIPTION
  Set log forwarding destination to Azure Log Analytics

ALIASES
  $ aio runtime ns log-forwarding set azure-log-analytics
  $ aio runtime ns lf set azure-log-analytics
  $ aio runtime namespace lf set azure-log-analytics
  $ aio rt namespace log-forwarding set azure-log-analytics
  $ aio rt namespace lf set azure-log-analytics
  $ aio rt ns log-forwarding set azure-log-analytics
  $ aio rt ns lf set azure-log-analytics
```

## `aio rt ns log-forwarding set splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio rt ns log-forwarding set splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
    [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --hec-token=<value>  (required) HEC token
  --help               Show help
  --host=<value>       (required) Host
  --index=<value>      (required) Index
  --key                client key
  --port=<value>       (required) Port
  --version            Show version

DESCRIPTION
  Set log forwarding destination to Splunk HEC

ALIASES
  $ aio runtime ns log-forwarding set splunk-hec
  $ aio runtime ns lf set splunk-hec
  $ aio runtime namespace lf set splunk-hec
  $ aio rt namespace log-forwarding set splunk-hec
  $ aio rt namespace lf set splunk-hec
  $ aio rt ns log-forwarding set splunk-hec
  $ aio rt ns lf set splunk-hec
```

## `aio rt ns ls`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio rt ns ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Lists all of your namespaces for Adobe I/O Runtime

ALIASES
  $ aio runtime namespace ls
  $ aio runtime ns list
  $ aio runtime ns ls
  $ aio rt namespace list
  $ aio rt namespace ls
  $ aio rt ns list
  $ aio rt ns ls
```

## `aio rt package`

Manage your packages

```
USAGE
  $ aio rt package [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your packages

ALIASES
  $ aio runtime pkg
  $ aio rt package
  $ aio rt pkg
```

## `aio rt package bind PACKAGENAME BINDPACKAGENAME`

Bind parameters to a package

```
USAGE
  $ aio rt package bind PACKAGENAME BINDPACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --version                      Show version

DESCRIPTION
  Bind parameters to a package

ALIASES
  $ aio runtime pkg bind
  $ aio rt package bind
  $ aio rt pkg bind
```

## `aio rt package create PACKAGENAME`

Creates a Package

```
USAGE
  $ aio rt package create PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --shared=<option>              parameter to be passed to indicate whether package is shared or private
                                 <options: true|yes|false|no>
  --version                      Show version

DESCRIPTION
  Creates a Package

ALIASES
  $ aio runtime pkg create
  $ aio rt package create
  $ aio rt pkg create
```

## `aio rt package delete PACKAGENAME`

Deletes a Package

```
USAGE
  $ aio rt package delete PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [--json] [-r]

FLAGS
  -i, --insecure        bypass certificate check
  -r, --recursive       Deletes all associated actions (and rules & triggers associated with the actions)
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Deletes a Package

ALIASES
  $ aio runtime pkg delete
  $ aio rt package delete
  $ aio rt pkg delete
```

## `aio rt package get PACKAGENAME`

Retrieves a Package

```
USAGE
  $ aio rt package get PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Retrieves a Package

ALIASES
  $ aio runtime pkg get
  $ aio rt package get
  $ aio rt pkg get
```

## `aio rt package list [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio rt package list [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of packages from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Packages

ALIASES
  $ aio runtime package ls
  $ aio runtime pkg list
  $ aio runtime pkg ls
  $ aio rt package list
  $ aio rt package ls
  $ aio rt pkg list
  $ aio rt pkg ls
```

## `aio rt package ls [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio rt package ls [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of packages from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Packages

ALIASES
  $ aio runtime package ls
  $ aio runtime pkg list
  $ aio runtime pkg ls
  $ aio rt package list
  $ aio rt package ls
  $ aio rt pkg list
  $ aio rt pkg ls
```

## `aio rt package update PACKAGENAME`

Updates a Package

```
USAGE
  $ aio rt package update PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --shared=<option>              parameter to be passed to indicate whether package is shared or private
                                 <options: true|yes|false|no>
  --version                      Show version

DESCRIPTION
  Updates a Package

ALIASES
  $ aio runtime pkg update
  $ aio rt package update
  $ aio rt pkg update
```

## `aio rt pkg`

Manage your packages

```
USAGE
  $ aio rt pkg [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your packages

ALIASES
  $ aio runtime pkg
  $ aio rt package
  $ aio rt pkg
```

## `aio rt pkg bind PACKAGENAME BINDPACKAGENAME`

Bind parameters to a package

```
USAGE
  $ aio rt pkg bind PACKAGENAME BINDPACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --version                      Show version

DESCRIPTION
  Bind parameters to a package

ALIASES
  $ aio runtime pkg bind
  $ aio rt package bind
  $ aio rt pkg bind
```

## `aio rt pkg create PACKAGENAME`

Creates a Package

```
USAGE
  $ aio rt pkg create PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --shared=<option>              parameter to be passed to indicate whether package is shared or private
                                 <options: true|yes|false|no>
  --version                      Show version

DESCRIPTION
  Creates a Package

ALIASES
  $ aio runtime pkg create
  $ aio rt package create
  $ aio rt pkg create
```

## `aio rt pkg delete PACKAGENAME`

Deletes a Package

```
USAGE
  $ aio rt pkg delete PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [--json] [-r]

FLAGS
  -i, --insecure        bypass certificate check
  -r, --recursive       Deletes all associated actions (and rules & triggers associated with the actions)
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Deletes a Package

ALIASES
  $ aio runtime pkg delete
  $ aio rt package delete
  $ aio rt pkg delete
```

## `aio rt pkg get PACKAGENAME`

Retrieves a Package

```
USAGE
  $ aio rt pkg get PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Retrieves a Package

ALIASES
  $ aio runtime pkg get
  $ aio rt package get
  $ aio rt pkg get
```

## `aio rt pkg list [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio rt pkg list [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of packages from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Packages

ALIASES
  $ aio runtime package ls
  $ aio runtime pkg list
  $ aio runtime pkg ls
  $ aio rt package list
  $ aio rt package ls
  $ aio rt pkg list
  $ aio rt pkg ls
```

## `aio rt pkg ls [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio rt pkg ls [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of packages from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Packages

ALIASES
  $ aio runtime package ls
  $ aio runtime pkg list
  $ aio runtime pkg ls
  $ aio rt package list
  $ aio rt package ls
  $ aio rt pkg list
  $ aio rt pkg ls
```

## `aio rt pkg update PACKAGENAME`

Updates a Package

```
USAGE
  $ aio rt pkg update PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --shared=<option>              parameter to be passed to indicate whether package is shared or private
                                 <options: true|yes|false|no>
  --version                      Show version

DESCRIPTION
  Updates a Package

ALIASES
  $ aio runtime pkg update
  $ aio rt package update
  $ aio rt pkg update
```

## `aio rt prop`

Execute property commands

```
USAGE
  $ aio rt prop [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Execute property commands

ALIASES
  $ aio runtime prop
  $ aio rt prop
  $ aio rt property
```

## `aio rt prop get`

get property

```
USAGE
  $ aio rt prop get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace] [--all] [--apibuild] [--apibuildno] [--cliversion]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --all            all properties
  --apibuild       whisk API build version
  --apibuildno     whisk API build number
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --cliversion     whisk CLI version
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --namespace      whisk namespace
  --version        Show version

DESCRIPTION
  get property

ALIASES
  $ aio runtime prop get
  $ aio rt property get
  $ aio rt prop get
```

## `aio rt prop set`

set property

```
USAGE
  $ aio rt prop set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace <value>]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --key                client key
  --namespace=<value>  whisk namespace
  --version            Show version

DESCRIPTION
  set property

ALIASES
  $ aio runtime prop set
  $ aio rt property set
  $ aio rt prop set
```

## `aio rt prop unset`

unset property

```
USAGE
  $ aio rt prop unset [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --namespace      whisk namespace
  --version        Show version

DESCRIPTION
  unset property

ALIASES
  $ aio runtime prop unset
  $ aio rt property unset
  $ aio rt prop unset
```

## `aio rt property`

Execute property commands

```
USAGE
  $ aio rt property [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Execute property commands

ALIASES
  $ aio runtime prop
  $ aio rt prop
  $ aio rt property
```

## `aio rt property get`

get property

```
USAGE
  $ aio rt property get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace] [--all] [--apibuild] [--apibuildno] [--cliversion]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --all            all properties
  --apibuild       whisk API build version
  --apibuildno     whisk API build number
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --cliversion     whisk CLI version
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --namespace      whisk namespace
  --version        Show version

DESCRIPTION
  get property

ALIASES
  $ aio runtime prop get
  $ aio rt property get
  $ aio rt prop get
```

## `aio rt property set`

set property

```
USAGE
  $ aio rt property set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace <value>]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --key                client key
  --namespace=<value>  whisk namespace
  --version            Show version

DESCRIPTION
  set property

ALIASES
  $ aio runtime prop set
  $ aio rt property set
  $ aio rt prop set
```

## `aio rt property unset`

unset property

```
USAGE
  $ aio rt property unset [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --namespace      whisk namespace
  --version        Show version

DESCRIPTION
  unset property

ALIASES
  $ aio runtime prop unset
  $ aio rt property unset
  $ aio rt prop unset
```

## `aio rt route create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`

create a new api route

```
USAGE
  $ aio rt route create [BASEPATH] [RELPATH] [APIVERB] [ACTION] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i]
    [--debug <value>] [-v] [--version] [--help] [-n <value> | -c <value>] [-r html|http|json|text|svg|json | ]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb
  ACTION    The action to call

FLAGS
  -c, --config-file=<value>     file containing API configuration in swagger JSON format
  -i, --insecure                bypass certificate check
  -n, --apiname=<value>         Friendly name of the API; ignored when CFG_FILE is specified (default BASE_PATH)
  -r, --response-type=<option>  [default: json] Set the web action response TYPE.
                                <options: html|http|json|text|svg|json>
  -u, --auth                    whisk auth
  -v, --verbose                 Verbose output
  --apihost                     whisk API host
  --apiversion                  whisk API version
  --cert                        client cert
  --debug=<value>               Debug level output
  --help                        Show help
  --key                         client key
  --version                     Show version

DESCRIPTION
  create a new api route

ALIASES
  $ aio runtime api create
  $ aio rt route create
  $ aio rt api create
```

## `aio rt route delete BASEPATHORAPINAME [RELPATH] [APIVERB]`

delete an API

```
USAGE
  $ aio rt route delete BASEPATHORAPINAME [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i]
    [--debug <value>] [-v] [--version] [--help]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name
  RELPATH            The path of the api relative to the base path
  APIVERB            (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  delete an API

ALIASES
  $ aio runtime api delete
  $ aio rt route delete
  $ aio rt api delete
```

## `aio rt route get BASEPATHORAPINAME`

get API details

```
USAGE
  $ aio rt route get BASEPATHORAPINAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>]
    [-v] [--version] [--help]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  get API details

ALIASES
  $ aio runtime api get
  $ aio rt route get
  $ aio rt api get
```

## `aio rt route list [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio rt route list [BASEPATH] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
    <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--json]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  only return LIMIT number of triggers
  -s, --skip=<value>   exclude the first SKIP number of triggers from the result
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --version            Show version

DESCRIPTION
  list route/apis for Adobe I/O Runtime

ALIASES
  $ aio runtime route ls
  $ aio runtime api list
  $ aio runtime api ls
  $ aio rt route list
  $ aio rt route ls
  $ aio rt api list
  $ aio rt api ls
```

## `aio rt route ls [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio rt route ls [BASEPATH] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
    <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--json]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  only return LIMIT number of triggers
  -s, --skip=<value>   exclude the first SKIP number of triggers from the result
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --version            Show version

DESCRIPTION
  list route/apis for Adobe I/O Runtime

ALIASES
  $ aio runtime route ls
  $ aio runtime api list
  $ aio runtime api ls
  $ aio rt route list
  $ aio rt route ls
  $ aio rt api list
  $ aio rt api ls
```

## `aio rt rule`

Manage your rules

```
USAGE
  $ aio rt rule [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your rules

ALIASES
  $ aio rt rule
```

## `aio rt rule create NAME TRIGGER ACTION`

Create a Rule

```
USAGE
  $ aio rt rule create NAME TRIGGER ACTION [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>]
    [-v] [--version] [--help] [--json]

ARGUMENTS
  NAME     Name of the rule
  TRIGGER  Name of the trigger
  ACTION   Name of the action

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --json           output raw json
  --key            client key
  --version        Show version

DESCRIPTION
  Create a Rule

ALIASES
  $ aio rt rule create
```

## `aio rt rule delete NAME`

Delete a Rule

```
USAGE
  $ aio rt rule delete NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--json]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --json           output raw json
  --key            client key
  --version        Show version

DESCRIPTION
  Delete a Rule

ALIASES
  $ aio rt rule delete
```

## `aio rt rule disable NAME`

Disable a Rule

```
USAGE
  $ aio rt rule disable NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Disable a Rule

ALIASES
  $ aio rt rule disable
```

## `aio rt rule enable NAME`

Enable a Rule

```
USAGE
  $ aio rt rule enable NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Enable a Rule

ALIASES
  $ aio rt rule enable
```

## `aio rt rule get NAME`

Retrieves a Rule

```
USAGE
  $ aio rt rule get NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Retrieves a Rule

ALIASES
  $ aio rt rule get
```

## `aio rt rule list`

Retrieves a list of Rules

```
USAGE
  $ aio rt rule list [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of rules
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  Limit number of rules returned (min: 0, max: 50)
  -n, --name           sort results by name
  -s, --skip=<value>   Skip number of rules returned
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --name-sort          sort results by name
  --version            Show version

DESCRIPTION
  Retrieves a list of Rules

ALIASES
  $ aio runtime rule ls
  $ aio rt rule list
  $ aio rt rule ls
```

## `aio rt rule ls`

Retrieves a list of Rules

```
USAGE
  $ aio rt rule ls [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of rules
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  Limit number of rules returned (min: 0, max: 50)
  -n, --name           sort results by name
  -s, --skip=<value>   Skip number of rules returned
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --name-sort          sort results by name
  --version            Show version

DESCRIPTION
  Retrieves a list of Rules

ALIASES
  $ aio runtime rule ls
  $ aio rt rule list
  $ aio rt rule ls
```

## `aio rt rule status NAME`

Gets the status of a rule

```
USAGE
  $ aio rt rule status NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Gets the status of a rule

ALIASES
  $ aio rt rule status
```

## `aio rt rule update NAME TRIGGER ACTION`

Update a Rule

```
USAGE
  $ aio rt rule update NAME TRIGGER ACTION [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>]
    [-v] [--version] [--help] [--json]

ARGUMENTS
  NAME     Name of the rule
  TRIGGER  Name of the trigger
  ACTION   Name of the action

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --json           output raw json
  --key            client key
  --version        Show version

DESCRIPTION
  Update a Rule

ALIASES
  $ aio rt rule update
```

## `aio rt trigger`

Manage your triggers

```
USAGE
  $ aio rt trigger [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your triggers

ALIASES
  $ aio rt trigger
```

## `aio rt trigger create TRIGGERNAME`

Create a trigger for Adobe I/O Runtime

```
USAGE
  $ aio rt trigger create TRIGGERNAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>] [-a <value>] [-A <value>] [-f <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -f, --feed=<value>             trigger feed ACTION_NAME
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameter values in KEY VALUE format
  -u, --auth                     whisk auth
  -v, --verbose                  Verbose output
  --apihost                      whisk API host
  --apiversion                   whisk API version
  --cert                         client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --key                          client key
  --version                      Show version

DESCRIPTION
  Create a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger create
```

## `aio rt trigger delete TRIGGERPATH`

Delete a trigger for Adobe I/O Runtime

```
USAGE
  $ aio rt trigger delete TRIGGERPATH [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help]

ARGUMENTS
  TRIGGERPATH  The name of the trigger, in the format /NAMESPACE/NAME

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Delete a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger delete
```

## `aio rt trigger fire TRIGGERNAME`

Fire a trigger for Adobe I/O Runtime

```
USAGE
  $ aio rt trigger fire TRIGGERNAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -P, --param-file=<value>  FILE containing parameter values in JSON format
  -i, --insecure            bypass certificate check
  -p, --param=<value>...    parameter values in KEY VALUE format
  -u, --auth                whisk auth
  -v, --verbose             Verbose output
  --apihost                 whisk API host
  --apiversion              whisk API version
  --cert                    client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key                     client key
  --version                 Show version

DESCRIPTION
  Fire a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger fire
```

## `aio rt trigger get TRIGGERPATH`

Get a trigger for Adobe I/O Runtime

```
USAGE
  $ aio rt trigger get TRIGGERPATH [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help]

ARGUMENTS
  TRIGGERPATH  The name/path of the trigger, in the format /NAMESPACE/NAME

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger get
```

## `aio rt trigger list`

Lists all of your triggers for Adobe I/O Runtime

```
USAGE
  $ aio rt trigger list [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of triggers
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  [default: 30] only return LIMIT number of triggers (min: 0, max: 50)
  -n, --name           sort results by name
  -s, --skip=<value>   exclude the first SKIP number of triggers from the result
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --name-sort          sort results by name
  --version            Show version

DESCRIPTION
  Lists all of your triggers for Adobe I/O Runtime

ALIASES
  $ aio runtime trigger ls
  $ aio rt trigger list
  $ aio rt trigger ls
```

## `aio rt trigger ls`

Lists all of your triggers for Adobe I/O Runtime

```
USAGE
  $ aio rt trigger ls [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of triggers
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  [default: 30] only return LIMIT number of triggers (min: 0, max: 50)
  -n, --name           sort results by name
  -s, --skip=<value>   exclude the first SKIP number of triggers from the result
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --name-sort          sort results by name
  --version            Show version

DESCRIPTION
  Lists all of your triggers for Adobe I/O Runtime

ALIASES
  $ aio runtime trigger ls
  $ aio rt trigger list
  $ aio rt trigger ls
```

## `aio rt trigger update TRIGGERNAME`

Update or create a trigger for Adobe I/O Runtime

```
USAGE
  $ aio rt trigger update TRIGGERNAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>] [-a <value>] [-A <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameter values in KEY VALUE format
  -u, --auth                     whisk auth
  -v, --verbose                  Verbose output
  --apihost                      whisk API host
  --apiversion                   whisk API version
  --cert                         client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --key                          client key
  --version                      Show version

DESCRIPTION
  Update or create a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger update
```

## `aio runtime`

Execute runtime commands

```
USAGE
  $ aio runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Execute runtime commands

ALIASES
  $ aio rt
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/6.0.2/src/commands/runtime/index.js)_

## `aio runtime action`

Manage your actions

```
USAGE
  $ aio runtime action [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your actions

ALIASES
  $ aio rt action
```

## `aio runtime action create ACTIONNAME [ACTIONPATH]`

Creates an Action

```
USAGE
  $ aio runtime action create ACTIONNAME [ACTIONPATH] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost
    <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [--copy <value>] [-e <value>]
    [--web-secure <value> --web true|yes|false|no|raw] [-P <value>] [-E <value>] [-t <value>] [-m <value>] [-l <value>]
    [--kind <value>] [-a <value>] [-A <value>] [--sequence <value>] [--docker <value>] [--main <value>] [--binary]
    [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -E, --env-file=<value>         FILE containing environment variables in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -e, --env=<value>...           environment values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -l, --logsize=<value>          the maximum log size LIMIT in MB for the action (default 10, min: 0, max: 10)
  -m, --memory=<value>           the maximum memory LIMIT in MB for the action (default 256, min: 128, max: 4096)
  -p, --param=<value>...         parameter values in KEY VALUE format
  -t, --timeout=<value>          the timeout LIMIT in milliseconds after which the action is terminated (default 60000,
                                 min: 100, max: 3600000)
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --binary                       treat code artifact as binary
  --cert=<value>                 client cert
  --copy=<value>                 copy an existing action
  --debug=<value>                Debug level output
  --docker=<value>               [Restricted Access] use provided Docker image (a path on DockerHub) to run the action
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --kind=<value>                 the KIND of the action runtime (example: swift:default, nodejs:default)
  --main=<value>                 the name of the action entry point (function or fully-qualified method name when
                                 applicable)
  --sequence=<value>             treat ACTION as comma separated sequence of actions to invoke
  --version                      Show version
  --web=<option>                 treat ACTION as a web action or as a raw HTTP web action
                                 <options: true|yes|false|no|raw>
  --web-secure=<value>           secure the web action (valid values are true, false, or any string)

DESCRIPTION
  Creates an Action

ALIASES
  $ aio rt action create
```

## `aio runtime action del ACTIONNAME`

Deletes an Action

```
USAGE
  $ aio runtime action del ACTIONNAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Deletes an Action

ALIASES
  $ aio runtime action del
  $ aio rt action delete
  $ aio rt action del
```

## `aio runtime action delete ACTIONNAME`

Deletes an Action

```
USAGE
  $ aio runtime action delete ACTIONNAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Deletes an Action

ALIASES
  $ aio runtime action del
  $ aio rt action delete
  $ aio rt action del
```

## `aio runtime action get ACTIONNAME`

Retrieves an Action

```
USAGE
  $ aio runtime action get ACTIONNAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-r] [-c] [--save] [--save-as <value>]

FLAGS
  -c, --code            show action code (only works if code is not a zip file)
  -i, --insecure        bypass certificate check
  -r, --url             get action url
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --save                save action code to file corresponding with action name
  --save-as=<value>     file to save action code to
  --version             Show version

DESCRIPTION
  Retrieves an Action

ALIASES
  $ aio rt action get
```

## `aio runtime action invoke ACTIONNAME`

Invokes an Action

```
USAGE
  $ aio runtime action invoke ACTIONNAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-b] [-r]

FLAGS
  -P, --param-file=<value>  FILE containing parameter values in JSON format
  -b, --blocking            blocking invoke
  -i, --insecure            bypass certificate check
  -p, --param=<value>...    parameter values in KEY VALUE format
  -r, --result              blocking invoke; show only activation result (unless there is a failure)
  -u, --auth=<value>        whisk auth
  -v, --verbose             Verbose output
  --apihost=<value>         whisk API host
  --apiversion=<value>      whisk API version
  --cert=<value>            client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key=<value>             client key
  --version                 Show version

DESCRIPTION
  Invokes an Action

ALIASES
  $ aio rt action invoke
```

## `aio runtime action list [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio runtime action list [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of actions from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Actions

ALIASES
  $ aio runtime action ls
  $ aio runtime actions list
  $ aio runtime actions ls
  $ aio rt action list
  $ aio rt actions list
  $ aio rt action ls
  $ aio rt actions ls
```

## `aio runtime action ls [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio runtime action ls [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of actions from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Actions

ALIASES
  $ aio runtime action ls
  $ aio runtime actions list
  $ aio runtime actions ls
  $ aio rt action list
  $ aio rt actions list
  $ aio rt action ls
  $ aio rt actions ls
```

## `aio runtime action update ACTIONNAME [ACTIONPATH]`

Updates an Action

```
USAGE
  $ aio runtime action update ACTIONNAME [ACTIONPATH] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost
    <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [--copy <value>] [-e <value>]
    [--web-secure <value> --web true|yes|false|no|raw] [-P <value>] [-E <value>] [-t <value>] [-m <value>] [-l <value>]
    [--kind <value>] [-a <value>] [-A <value>] [--sequence <value>] [--docker <value>] [--main <value>] [--binary]
    [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -E, --env-file=<value>         FILE containing environment variables in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -e, --env=<value>...           environment values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -l, --logsize=<value>          the maximum log size LIMIT in MB for the action (default 10, min: 0, max: 10)
  -m, --memory=<value>           the maximum memory LIMIT in MB for the action (default 256, min: 128, max: 4096)
  -p, --param=<value>...         parameter values in KEY VALUE format
  -t, --timeout=<value>          the timeout LIMIT in milliseconds after which the action is terminated (default 60000,
                                 min: 100, max: 3600000)
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --binary                       treat code artifact as binary
  --cert=<value>                 client cert
  --copy=<value>                 copy an existing action
  --debug=<value>                Debug level output
  --docker=<value>               [Restricted Access] use provided Docker image (a path on DockerHub) to run the action
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --kind=<value>                 the KIND of the action runtime (example: swift:default, nodejs:default)
  --main=<value>                 the name of the action entry point (function or fully-qualified method name when
                                 applicable)
  --sequence=<value>             treat ACTION as comma separated sequence of actions to invoke
  --version                      Show version
  --web=<option>                 treat ACTION as a web action or as a raw HTTP web action
                                 <options: true|yes|false|no|raw>
  --web-secure=<value>           secure the web action (valid values are true, false, or any string)

DESCRIPTION
  Updates an Action

ALIASES
  $ aio rt action update
```

## `aio runtime actions list [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio runtime actions list [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of actions from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Actions

ALIASES
  $ aio runtime action ls
  $ aio runtime actions list
  $ aio runtime actions ls
  $ aio rt action list
  $ aio rt actions list
  $ aio rt action ls
  $ aio rt actions ls
```

## `aio runtime actions ls [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio runtime actions ls [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of actions from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Actions

ALIASES
  $ aio runtime action ls
  $ aio runtime actions list
  $ aio runtime actions ls
  $ aio rt action list
  $ aio rt actions list
  $ aio rt action ls
  $ aio rt actions ls
```

## `aio runtime activation`

Manage your activations

```
USAGE
  $ aio runtime activation [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your activations

ALIASES
  $ aio rt activation
```

## `aio runtime activation get [ACTIVATIONID]`

Retrieves an Activation

```
USAGE
  $ aio runtime activation get [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l] [-g]

FLAGS
  -g, --logs            emit only the logs, stripped of time stamps and stream identifier
  -i, --insecure        bypass certificate check
  -l, --last            retrieves the most recent activation
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Retrieves an Activation

ALIASES
  $ aio rt activation get
```

## `aio runtime activation list [ACTION_NAME]`

Lists all the Activations

```
USAGE
  $ aio runtime activation list [ACTION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations (min: 0, max: 50)
  -s, --skip=<value>    exclude the first SKIP number of activations from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --since=<value>       return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan
                        1970
  --upto=<value>        return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan
                        1970
  --version             Show version

DESCRIPTION
  Lists all the Activations

ALIASES
  $ aio runtime activations list
  $ aio runtime activation ls
  $ aio runtime activations ls
  $ aio rt activation list
  $ aio rt activation ls
  $ aio rt activations list
  $ aio rt activations ls
```

## `aio runtime activation log [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio runtime activation log [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-d |  | [-a <value> | -m | -p <value>]] [-r] [--limit
    <value> | -l] [-t | -w | -o]

FLAGS
  -a, --action=<value>   Fetch logs for a specific action
  -d, --deployed         Fetch logs for all actions deployed under a specific package
  -i, --insecure         bypass certificate check
  -l, --last             retrieves the most recent activation logs
  -m, --manifest         Fetch logs for all actions in the manifest
  -o, --poll             Fetch logs continuously
  -p, --package=<value>  Fetch logs for a specific package in the manifest
  -r, --strip            strip timestamp information and output first line only
  -t, --tail             Fetch logs continuously
  -u, --auth=<value>     whisk auth
  -v, --verbose          Verbose output
  -w, --watch            Fetch logs continuously
  --apihost=<value>      whisk API host
  --apiversion=<value>   whisk API version
  --cert=<value>         client cert
  --debug=<value>        Debug level output
  --help                 Show help
  --key=<value>          client key
  --limit=<value>        return logs only from last LIMIT number of activations (min: 0, max: 50)
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime activation log
  $ aio runtime log
  $ aio runtime logs
  $ aio rt activation logs
  $ aio rt activation log
  $ aio rt log
  $ aio rt logs
```

## `aio runtime activation logs [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio runtime activation logs [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-d |  | [-a <value> | -m | -p <value>]] [-r] [--limit
    <value> | -l] [-t | -w | -o]

FLAGS
  -a, --action=<value>   Fetch logs for a specific action
  -d, --deployed         Fetch logs for all actions deployed under a specific package
  -i, --insecure         bypass certificate check
  -l, --last             retrieves the most recent activation logs
  -m, --manifest         Fetch logs for all actions in the manifest
  -o, --poll             Fetch logs continuously
  -p, --package=<value>  Fetch logs for a specific package in the manifest
  -r, --strip            strip timestamp information and output first line only
  -t, --tail             Fetch logs continuously
  -u, --auth=<value>     whisk auth
  -v, --verbose          Verbose output
  -w, --watch            Fetch logs continuously
  --apihost=<value>      whisk API host
  --apiversion=<value>   whisk API version
  --cert=<value>         client cert
  --debug=<value>        Debug level output
  --help                 Show help
  --key=<value>          client key
  --limit=<value>        return logs only from last LIMIT number of activations (min: 0, max: 50)
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime activation log
  $ aio runtime log
  $ aio runtime logs
  $ aio rt activation logs
  $ aio rt activation log
  $ aio rt log
  $ aio rt logs
```

## `aio runtime activation ls [ACTION_NAME]`

Lists all the Activations

```
USAGE
  $ aio runtime activation ls [ACTION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations (min: 0, max: 50)
  -s, --skip=<value>    exclude the first SKIP number of activations from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --since=<value>       return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan
                        1970
  --upto=<value>        return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan
                        1970
  --version             Show version

DESCRIPTION
  Lists all the Activations

ALIASES
  $ aio runtime activations list
  $ aio runtime activation ls
  $ aio runtime activations ls
  $ aio rt activation list
  $ aio rt activation ls
  $ aio rt activations list
  $ aio rt activations ls
```

## `aio runtime activation result [ACTIVATIONID]`

Retrieves the Results for an Activation

```
USAGE
  $ aio runtime activation result [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l]

FLAGS
  -i, --insecure        bypass certificate check
  -l, --last            retrieves the most recent activation result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Retrieves the Results for an Activation

ALIASES
  $ aio rt activation result
```

## `aio runtime activations list [ACTION_NAME]`

Lists all the Activations

```
USAGE
  $ aio runtime activations list [ACTION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations (min: 0, max: 50)
  -s, --skip=<value>    exclude the first SKIP number of activations from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --since=<value>       return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan
                        1970
  --upto=<value>        return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan
                        1970
  --version             Show version

DESCRIPTION
  Lists all the Activations

ALIASES
  $ aio runtime activations list
  $ aio runtime activation ls
  $ aio runtime activations ls
  $ aio rt activation list
  $ aio rt activation ls
  $ aio rt activations list
  $ aio rt activations ls
```

## `aio runtime activations ls [ACTION_NAME]`

Lists all the Activations

```
USAGE
  $ aio runtime activations ls [ACTION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations (min: 0, max: 50)
  -s, --skip=<value>    exclude the first SKIP number of activations from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --since=<value>       return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan
                        1970
  --upto=<value>        return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan
                        1970
  --version             Show version

DESCRIPTION
  Lists all the Activations

ALIASES
  $ aio runtime activations list
  $ aio runtime activation ls
  $ aio runtime activations ls
  $ aio rt activation list
  $ aio rt activation ls
  $ aio rt activations list
  $ aio rt activations ls
```

## `aio runtime api`

Manage your routes

```
USAGE
  $ aio runtime api [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your routes

ALIASES
  $ aio runtime api
  $ aio rt api
```

## `aio runtime api create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`

create a new api route

```
USAGE
  $ aio runtime api create [BASEPATH] [RELPATH] [APIVERB] [ACTION] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i]
    [--debug <value>] [-v] [--version] [--help] [-n <value> | -c <value>] [-r html|http|json|text|svg|json | ]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb
  ACTION    The action to call

FLAGS
  -c, --config-file=<value>     file containing API configuration in swagger JSON format
  -i, --insecure                bypass certificate check
  -n, --apiname=<value>         Friendly name of the API; ignored when CFG_FILE is specified (default BASE_PATH)
  -r, --response-type=<option>  [default: json] Set the web action response TYPE.
                                <options: html|http|json|text|svg|json>
  -u, --auth                    whisk auth
  -v, --verbose                 Verbose output
  --apihost                     whisk API host
  --apiversion                  whisk API version
  --cert                        client cert
  --debug=<value>               Debug level output
  --help                        Show help
  --key                         client key
  --version                     Show version

DESCRIPTION
  create a new api route

ALIASES
  $ aio runtime api create
  $ aio rt route create
  $ aio rt api create
```

## `aio runtime api delete BASEPATHORAPINAME [RELPATH] [APIVERB]`

delete an API

```
USAGE
  $ aio runtime api delete BASEPATHORAPINAME [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i]
    [--debug <value>] [-v] [--version] [--help]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name
  RELPATH            The path of the api relative to the base path
  APIVERB            (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  delete an API

ALIASES
  $ aio runtime api delete
  $ aio rt route delete
  $ aio rt api delete
```

## `aio runtime api get BASEPATHORAPINAME`

get API details

```
USAGE
  $ aio runtime api get BASEPATHORAPINAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>]
    [-v] [--version] [--help]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  get API details

ALIASES
  $ aio runtime api get
  $ aio rt route get
  $ aio rt api get
```

## `aio runtime api list [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio runtime api list [BASEPATH] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
    <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--json]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  only return LIMIT number of triggers
  -s, --skip=<value>   exclude the first SKIP number of triggers from the result
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --version            Show version

DESCRIPTION
  list route/apis for Adobe I/O Runtime

ALIASES
  $ aio runtime route ls
  $ aio runtime api list
  $ aio runtime api ls
  $ aio rt route list
  $ aio rt route ls
  $ aio rt api list
  $ aio rt api ls
```

## `aio runtime api ls [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio runtime api ls [BASEPATH] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
    <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--json]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  only return LIMIT number of triggers
  -s, --skip=<value>   exclude the first SKIP number of triggers from the result
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --version            Show version

DESCRIPTION
  list route/apis for Adobe I/O Runtime

ALIASES
  $ aio runtime route ls
  $ aio runtime api list
  $ aio runtime api ls
  $ aio rt route list
  $ aio rt route ls
  $ aio rt api list
  $ aio rt api ls
```

## `aio runtime deploy`

The Runtime Deployment Tool

```
USAGE
  $ aio runtime deploy [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [-m <value>] [-d <value>] [--param <value>] [-P <value>]

FLAGS
  -P, --param-file=<value>  FILE containing parameter values in JSON format
  -d, --deployment=<value>  the path to the deployment file
  -i, --insecure            bypass certificate check
  -m, --manifest=<value>    the manifest file location
  -u, --auth=<value>        whisk auth
  -v, --verbose             Verbose output
  --apihost=<value>         whisk API host
  --apiversion=<value>      whisk API version
  --cert=<value>            client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key=<value>             client key
  --param=<value>...        parameter values in KEY VALUE format
  --version                 Show version

DESCRIPTION
  The Runtime Deployment Tool

ALIASES
  $ aio rt deploy
```

## `aio runtime deploy export`

Exports managed project assets from Runtime to manifest and function files

```
USAGE
  $ aio runtime deploy export -m <value> --projectname <value> [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure          bypass certificate check
  -m, --manifest=<value>  (required) the manifest file location
  -u, --auth=<value>      whisk auth
  -v, --verbose           Verbose output
  --apihost=<value>       whisk API host
  --apiversion=<value>    whisk API version
  --cert=<value>          client cert
  --debug=<value>         Debug level output
  --help                  Show help
  --key=<value>           client key
  --projectname=<value>   (required) the name of the project to be undeployed
  --version               Show version

DESCRIPTION
  Exports managed project assets from Runtime to manifest and function files

ALIASES
  $ aio rt deploy export
```

## `aio runtime deploy report`

Provides a summary report of Runtime assets being deployed/undeployed based on manifest/deployment YAML

```
USAGE
  $ aio runtime deploy report [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [-m <value>] [-d <value>]

FLAGS
  -d, --deployment=<value>  the deployment file location
  -i, --insecure            bypass certificate check
  -m, --manifest=<value>    the manifest file location
  -u, --auth=<value>        whisk auth
  -v, --verbose             Verbose output
  --apihost=<value>         whisk API host
  --apiversion=<value>      whisk API version
  --cert=<value>            client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key=<value>             client key
  --version                 Show version

DESCRIPTION
  Provides a summary report of Runtime assets being deployed/undeployed based on manifest/deployment YAML

ALIASES
  $ aio rt deploy report
```

## `aio runtime deploy sync`

A tool to sync deployment and undeployment of Runtime packages using a manifest and optional deployment files using YAML

```
USAGE
  $ aio runtime deploy sync [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [-m <value>] [-d <value>]

FLAGS
  -d, --deployment=<value>  the path to the deployment file
  -i, --insecure            bypass certificate check
  -m, --manifest=<value>    the manifest file location
  -u, --auth=<value>        whisk auth
  -v, --verbose             Verbose output
  --apihost=<value>         whisk API host
  --apiversion=<value>      whisk API version
  --cert=<value>            client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key=<value>             client key
  --version                 Show version

DESCRIPTION
  A tool to sync deployment and undeployment of Runtime packages using a manifest and optional deployment files using
  YAML

ALIASES
  $ aio rt deploy sync
```

## `aio runtime deploy undeploy`

Undeploy removes Runtime assets which were deployed from the manifest and deployment YAML

```
USAGE
  $ aio runtime deploy undeploy [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [-m <value>] [--projectname <value>]

FLAGS
  -i, --insecure          bypass certificate check
  -m, --manifest=<value>  the manifest file location
  -u, --auth=<value>      whisk auth
  -v, --verbose           Verbose output
  --apihost=<value>       whisk API host
  --apiversion=<value>    whisk API version
  --cert=<value>          client cert
  --debug=<value>         Debug level output
  --help                  Show help
  --key=<value>           client key
  --projectname=<value>   the name of the project to be undeployed
  --version               Show version

DESCRIPTION
  Undeploy removes Runtime assets which were deployed from the manifest and deployment YAML

ALIASES
  $ aio rt deploy undeploy
```

## `aio runtime deploy version`

Prints the version number of aio runtime deploy

```
USAGE
  $ aio runtime deploy version [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Prints the version number of aio runtime deploy

ALIASES
  $ aio rt deploy version
```

## `aio runtime list`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio runtime list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json] [--name-sort] [-n]

FLAGS
  -i, --insecure        bypass certificate check
  -n, --name            sort results by name
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Get triggers, actions, and rules in the registry for namespace

ALIASES
  $ aio rt get
  $ aio runtime list
  $ aio rt list
  $ aio runtime ls
  $ aio rt ls
```

## `aio runtime log [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio runtime log [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-d |  | [-a <value> | -m | -p <value>]] [-r] [--limit
    <value> | -l] [-t | -w | -o]

FLAGS
  -a, --action=<value>   Fetch logs for a specific action
  -d, --deployed         Fetch logs for all actions deployed under a specific package
  -i, --insecure         bypass certificate check
  -l, --last             retrieves the most recent activation logs
  -m, --manifest         Fetch logs for all actions in the manifest
  -o, --poll             Fetch logs continuously
  -p, --package=<value>  Fetch logs for a specific package in the manifest
  -r, --strip            strip timestamp information and output first line only
  -t, --tail             Fetch logs continuously
  -u, --auth=<value>     whisk auth
  -v, --verbose          Verbose output
  -w, --watch            Fetch logs continuously
  --apihost=<value>      whisk API host
  --apiversion=<value>   whisk API version
  --cert=<value>         client cert
  --debug=<value>        Debug level output
  --help                 Show help
  --key=<value>          client key
  --limit=<value>        return logs only from last LIMIT number of activations (min: 0, max: 50)
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime activation log
  $ aio runtime log
  $ aio runtime logs
  $ aio rt activation logs
  $ aio rt activation log
  $ aio rt log
  $ aio rt logs
```

## `aio runtime logs [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio runtime logs [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-d |  | [-a <value> | -m | -p <value>]] [-r] [--limit
    <value> | -l] [-t | -w | -o]

FLAGS
  -a, --action=<value>   Fetch logs for a specific action
  -d, --deployed         Fetch logs for all actions deployed under a specific package
  -i, --insecure         bypass certificate check
  -l, --last             retrieves the most recent activation logs
  -m, --manifest         Fetch logs for all actions in the manifest
  -o, --poll             Fetch logs continuously
  -p, --package=<value>  Fetch logs for a specific package in the manifest
  -r, --strip            strip timestamp information and output first line only
  -t, --tail             Fetch logs continuously
  -u, --auth=<value>     whisk auth
  -v, --verbose          Verbose output
  -w, --watch            Fetch logs continuously
  --apihost=<value>      whisk API host
  --apiversion=<value>   whisk API version
  --cert=<value>         client cert
  --debug=<value>        Debug level output
  --help                 Show help
  --key=<value>          client key
  --limit=<value>        return logs only from last LIMIT number of activations (min: 0, max: 50)
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime activation log
  $ aio runtime log
  $ aio runtime logs
  $ aio rt activation logs
  $ aio rt activation log
  $ aio rt log
  $ aio rt logs
```

## `aio runtime ls`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio runtime ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json] [--name-sort] [-n]

FLAGS
  -i, --insecure        bypass certificate check
  -n, --name            sort results by name
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Get triggers, actions, and rules in the registry for namespace

ALIASES
  $ aio rt get
  $ aio runtime list
  $ aio rt list
  $ aio runtime ls
  $ aio rt ls
```

## `aio runtime namespace`

Manage your namespaces

```
USAGE
  $ aio runtime namespace [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your namespaces

ALIASES
  $ aio runtime ns
  $ aio rt namespace
  $ aio rt ns
```

## `aio runtime namespace get`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio runtime namespace get [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json] [--name-sort] [-n]

FLAGS
  -i, --insecure        bypass certificate check
  -n, --name            sort results by name
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Get triggers, actions, and rules in the registry for namespace

ALIASES
  $ aio rt get
  $ aio runtime list
  $ aio rt list
  $ aio runtime ls
  $ aio rt ls
```

## `aio runtime namespace lf`

Manage log forwarding settings

```
USAGE
  $ aio runtime namespace lf [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage log forwarding settings

ALIASES
  $ aio runtime ns log-forwarding
  $ aio runtime ns lf
  $ aio runtime namespace lf
  $ aio rt namespace log-forwarding
  $ aio rt namespace lf
  $ aio rt ns log-forwarding
  $ aio rt ns lf
```

## `aio runtime namespace lf errors`

Get log forwarding errors

```
USAGE
  $ aio runtime namespace lf errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio runtime ns log-forwarding errors
  $ aio runtime ns lf errors
  $ aio runtime namespace lf errors
  $ aio rt namespace log-forwarding errors
  $ aio rt namespace lf errors
  $ aio rt ns log-forwarding errors
  $ aio rt ns lf errors
```

## `aio runtime namespace lf get`

Get log forwarding destination configuration

```
USAGE
  $ aio runtime namespace lf get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio runtime ns log-forwarding get
  $ aio runtime ns lf get
  $ aio runtime namespace lf get
  $ aio rt namespace log-forwarding get
  $ aio rt namespace lf get
  $ aio rt ns log-forwarding get
  $ aio rt ns lf get
```

## `aio runtime namespace lf set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio runtime namespace lf set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Configure log forwarding destination (interactive)

ALIASES
  $ aio runtime ns log-forwarding set
  $ aio runtime ns lf set
  $ aio runtime namespace lf set
  $ aio rt namespace log-forwarding set
  $ aio rt namespace lf set
  $ aio rt ns log-forwarding set
  $ aio rt ns lf set
```

## `aio runtime namespace lf set adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio runtime namespace lf set adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

ALIASES
  $ aio runtime ns log-forwarding set adobe-io-runtime
  $ aio runtime ns lf set adobe-io-runtime
  $ aio runtime namespace lf set adobe-io-runtime
  $ aio rt namespace log-forwarding set adobe-io-runtime
  $ aio rt namespace lf set adobe-io-runtime
  $ aio rt ns log-forwarding set adobe-io-runtime
  $ aio rt ns lf set adobe-io-runtime
```

## `aio runtime namespace lf set azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio runtime namespace lf set azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
    [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --customer-id=<value>  (required) Customer ID
  --debug=<value>        Debug level output
  --help                 Show help
  --key                  client key
  --log-type=<value>     (required) Log type
  --shared-key=<value>   (required) Shared key
  --version              Show version

DESCRIPTION
  Set log forwarding destination to Azure Log Analytics

ALIASES
  $ aio runtime ns log-forwarding set azure-log-analytics
  $ aio runtime ns lf set azure-log-analytics
  $ aio runtime namespace lf set azure-log-analytics
  $ aio rt namespace log-forwarding set azure-log-analytics
  $ aio rt namespace lf set azure-log-analytics
  $ aio rt ns log-forwarding set azure-log-analytics
  $ aio rt ns lf set azure-log-analytics
```

## `aio runtime namespace lf set splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio runtime namespace lf set splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
    [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --hec-token=<value>  (required) HEC token
  --help               Show help
  --host=<value>       (required) Host
  --index=<value>      (required) Index
  --key                client key
  --port=<value>       (required) Port
  --version            Show version

DESCRIPTION
  Set log forwarding destination to Splunk HEC

ALIASES
  $ aio runtime ns log-forwarding set splunk-hec
  $ aio runtime ns lf set splunk-hec
  $ aio runtime namespace lf set splunk-hec
  $ aio rt namespace log-forwarding set splunk-hec
  $ aio rt namespace lf set splunk-hec
  $ aio rt ns log-forwarding set splunk-hec
  $ aio rt ns lf set splunk-hec
```

## `aio runtime namespace list`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio runtime namespace list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Lists all of your namespaces for Adobe I/O Runtime

ALIASES
  $ aio runtime namespace ls
  $ aio runtime ns list
  $ aio runtime ns ls
  $ aio rt namespace list
  $ aio rt namespace ls
  $ aio rt ns list
  $ aio rt ns ls
```

## `aio runtime namespace log-forwarding`

Manage log forwarding settings

```
USAGE
  $ aio runtime namespace log-forwarding [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage log forwarding settings

ALIASES
  $ aio runtime ns log-forwarding
  $ aio runtime ns lf
  $ aio runtime namespace lf
  $ aio rt namespace log-forwarding
  $ aio rt namespace lf
  $ aio rt ns log-forwarding
  $ aio rt ns lf
```

## `aio runtime namespace log-forwarding errors`

Get log forwarding errors

```
USAGE
  $ aio runtime namespace log-forwarding errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio runtime ns log-forwarding errors
  $ aio runtime ns lf errors
  $ aio runtime namespace lf errors
  $ aio rt namespace log-forwarding errors
  $ aio rt namespace lf errors
  $ aio rt ns log-forwarding errors
  $ aio rt ns lf errors
```

## `aio runtime namespace log-forwarding get`

Get log forwarding destination configuration

```
USAGE
  $ aio runtime namespace log-forwarding get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio runtime ns log-forwarding get
  $ aio runtime ns lf get
  $ aio runtime namespace lf get
  $ aio rt namespace log-forwarding get
  $ aio rt namespace lf get
  $ aio rt ns log-forwarding get
  $ aio rt ns lf get
```

## `aio runtime namespace log-forwarding set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio runtime namespace log-forwarding set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Configure log forwarding destination (interactive)

ALIASES
  $ aio runtime ns log-forwarding set
  $ aio runtime ns lf set
  $ aio runtime namespace lf set
  $ aio rt namespace log-forwarding set
  $ aio rt namespace lf set
  $ aio rt ns log-forwarding set
  $ aio rt ns lf set
```

## `aio runtime namespace log-forwarding set adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio runtime namespace log-forwarding set adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

ALIASES
  $ aio runtime ns log-forwarding set adobe-io-runtime
  $ aio runtime ns lf set adobe-io-runtime
  $ aio runtime namespace lf set adobe-io-runtime
  $ aio rt namespace log-forwarding set adobe-io-runtime
  $ aio rt namespace lf set adobe-io-runtime
  $ aio rt ns log-forwarding set adobe-io-runtime
  $ aio rt ns lf set adobe-io-runtime
```

## `aio runtime namespace log-forwarding set azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio runtime namespace log-forwarding set azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
    [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --customer-id=<value>  (required) Customer ID
  --debug=<value>        Debug level output
  --help                 Show help
  --key                  client key
  --log-type=<value>     (required) Log type
  --shared-key=<value>   (required) Shared key
  --version              Show version

DESCRIPTION
  Set log forwarding destination to Azure Log Analytics

ALIASES
  $ aio runtime ns log-forwarding set azure-log-analytics
  $ aio runtime ns lf set azure-log-analytics
  $ aio runtime namespace lf set azure-log-analytics
  $ aio rt namespace log-forwarding set azure-log-analytics
  $ aio rt namespace lf set azure-log-analytics
  $ aio rt ns log-forwarding set azure-log-analytics
  $ aio rt ns lf set azure-log-analytics
```

## `aio runtime namespace log-forwarding set splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio runtime namespace log-forwarding set splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
    [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --hec-token=<value>  (required) HEC token
  --help               Show help
  --host=<value>       (required) Host
  --index=<value>      (required) Index
  --key                client key
  --port=<value>       (required) Port
  --version            Show version

DESCRIPTION
  Set log forwarding destination to Splunk HEC

ALIASES
  $ aio runtime ns log-forwarding set splunk-hec
  $ aio runtime ns lf set splunk-hec
  $ aio runtime namespace lf set splunk-hec
  $ aio rt namespace log-forwarding set splunk-hec
  $ aio rt namespace lf set splunk-hec
  $ aio rt ns log-forwarding set splunk-hec
  $ aio rt ns lf set splunk-hec
```

## `aio runtime namespace ls`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio runtime namespace ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Lists all of your namespaces for Adobe I/O Runtime

ALIASES
  $ aio runtime namespace ls
  $ aio runtime ns list
  $ aio runtime ns ls
  $ aio rt namespace list
  $ aio rt namespace ls
  $ aio rt ns list
  $ aio rt ns ls
```

## `aio runtime ns`

Manage your namespaces

```
USAGE
  $ aio runtime ns [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your namespaces

ALIASES
  $ aio runtime ns
  $ aio rt namespace
  $ aio rt ns
```

## `aio runtime ns lf`

Manage log forwarding settings

```
USAGE
  $ aio runtime ns lf [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage log forwarding settings

ALIASES
  $ aio runtime ns log-forwarding
  $ aio runtime ns lf
  $ aio runtime namespace lf
  $ aio rt namespace log-forwarding
  $ aio rt namespace lf
  $ aio rt ns log-forwarding
  $ aio rt ns lf
```

## `aio runtime ns lf errors`

Get log forwarding errors

```
USAGE
  $ aio runtime ns lf errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio runtime ns log-forwarding errors
  $ aio runtime ns lf errors
  $ aio runtime namespace lf errors
  $ aio rt namespace log-forwarding errors
  $ aio rt namespace lf errors
  $ aio rt ns log-forwarding errors
  $ aio rt ns lf errors
```

## `aio runtime ns lf get`

Get log forwarding destination configuration

```
USAGE
  $ aio runtime ns lf get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio runtime ns log-forwarding get
  $ aio runtime ns lf get
  $ aio runtime namespace lf get
  $ aio rt namespace log-forwarding get
  $ aio rt namespace lf get
  $ aio rt ns log-forwarding get
  $ aio rt ns lf get
```

## `aio runtime ns lf set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio runtime ns lf set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Configure log forwarding destination (interactive)

ALIASES
  $ aio runtime ns log-forwarding set
  $ aio runtime ns lf set
  $ aio runtime namespace lf set
  $ aio rt namespace log-forwarding set
  $ aio rt namespace lf set
  $ aio rt ns log-forwarding set
  $ aio rt ns lf set
```

## `aio runtime ns lf set adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio runtime ns lf set adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

ALIASES
  $ aio runtime ns log-forwarding set adobe-io-runtime
  $ aio runtime ns lf set adobe-io-runtime
  $ aio runtime namespace lf set adobe-io-runtime
  $ aio rt namespace log-forwarding set adobe-io-runtime
  $ aio rt namespace lf set adobe-io-runtime
  $ aio rt ns log-forwarding set adobe-io-runtime
  $ aio rt ns lf set adobe-io-runtime
```

## `aio runtime ns lf set azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio runtime ns lf set azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
    [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --customer-id=<value>  (required) Customer ID
  --debug=<value>        Debug level output
  --help                 Show help
  --key                  client key
  --log-type=<value>     (required) Log type
  --shared-key=<value>   (required) Shared key
  --version              Show version

DESCRIPTION
  Set log forwarding destination to Azure Log Analytics

ALIASES
  $ aio runtime ns log-forwarding set azure-log-analytics
  $ aio runtime ns lf set azure-log-analytics
  $ aio runtime namespace lf set azure-log-analytics
  $ aio rt namespace log-forwarding set azure-log-analytics
  $ aio rt namespace lf set azure-log-analytics
  $ aio rt ns log-forwarding set azure-log-analytics
  $ aio rt ns lf set azure-log-analytics
```

## `aio runtime ns lf set splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio runtime ns lf set splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
    [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --hec-token=<value>  (required) HEC token
  --help               Show help
  --host=<value>       (required) Host
  --index=<value>      (required) Index
  --key                client key
  --port=<value>       (required) Port
  --version            Show version

DESCRIPTION
  Set log forwarding destination to Splunk HEC

ALIASES
  $ aio runtime ns log-forwarding set splunk-hec
  $ aio runtime ns lf set splunk-hec
  $ aio runtime namespace lf set splunk-hec
  $ aio rt namespace log-forwarding set splunk-hec
  $ aio rt namespace lf set splunk-hec
  $ aio rt ns log-forwarding set splunk-hec
  $ aio rt ns lf set splunk-hec
```

## `aio runtime ns list`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio runtime ns list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Lists all of your namespaces for Adobe I/O Runtime

ALIASES
  $ aio runtime namespace ls
  $ aio runtime ns list
  $ aio runtime ns ls
  $ aio rt namespace list
  $ aio rt namespace ls
  $ aio rt ns list
  $ aio rt ns ls
```

## `aio runtime ns log-forwarding`

Manage log forwarding settings

```
USAGE
  $ aio runtime ns log-forwarding [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage log forwarding settings

ALIASES
  $ aio runtime ns log-forwarding
  $ aio runtime ns lf
  $ aio runtime namespace lf
  $ aio rt namespace log-forwarding
  $ aio rt namespace lf
  $ aio rt ns log-forwarding
  $ aio rt ns lf
```

## `aio runtime ns log-forwarding errors`

Get log forwarding errors

```
USAGE
  $ aio runtime ns log-forwarding errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio runtime ns log-forwarding errors
  $ aio runtime ns lf errors
  $ aio runtime namespace lf errors
  $ aio rt namespace log-forwarding errors
  $ aio rt namespace lf errors
  $ aio rt ns log-forwarding errors
  $ aio rt ns lf errors
```

## `aio runtime ns log-forwarding get`

Get log forwarding destination configuration

```
USAGE
  $ aio runtime ns log-forwarding get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio runtime ns log-forwarding get
  $ aio runtime ns lf get
  $ aio runtime namespace lf get
  $ aio rt namespace log-forwarding get
  $ aio rt namespace lf get
  $ aio rt ns log-forwarding get
  $ aio rt ns lf get
```

## `aio runtime ns log-forwarding set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio runtime ns log-forwarding set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Configure log forwarding destination (interactive)

ALIASES
  $ aio runtime ns log-forwarding set
  $ aio runtime ns lf set
  $ aio runtime namespace lf set
  $ aio rt namespace log-forwarding set
  $ aio rt namespace lf set
  $ aio rt ns log-forwarding set
  $ aio rt ns lf set
```

## `aio runtime ns log-forwarding set adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio runtime ns log-forwarding set adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

ALIASES
  $ aio runtime ns log-forwarding set adobe-io-runtime
  $ aio runtime ns lf set adobe-io-runtime
  $ aio runtime namespace lf set adobe-io-runtime
  $ aio rt namespace log-forwarding set adobe-io-runtime
  $ aio rt namespace lf set adobe-io-runtime
  $ aio rt ns log-forwarding set adobe-io-runtime
  $ aio rt ns lf set adobe-io-runtime
```

## `aio runtime ns log-forwarding set azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio runtime ns log-forwarding set azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
    [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --customer-id=<value>  (required) Customer ID
  --debug=<value>        Debug level output
  --help                 Show help
  --key                  client key
  --log-type=<value>     (required) Log type
  --shared-key=<value>   (required) Shared key
  --version              Show version

DESCRIPTION
  Set log forwarding destination to Azure Log Analytics

ALIASES
  $ aio runtime ns log-forwarding set azure-log-analytics
  $ aio runtime ns lf set azure-log-analytics
  $ aio runtime namespace lf set azure-log-analytics
  $ aio rt namespace log-forwarding set azure-log-analytics
  $ aio rt namespace lf set azure-log-analytics
  $ aio rt ns log-forwarding set azure-log-analytics
  $ aio rt ns lf set azure-log-analytics
```

## `aio runtime ns log-forwarding set splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio runtime ns log-forwarding set splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
    [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --hec-token=<value>  (required) HEC token
  --help               Show help
  --host=<value>       (required) Host
  --index=<value>      (required) Index
  --key                client key
  --port=<value>       (required) Port
  --version            Show version

DESCRIPTION
  Set log forwarding destination to Splunk HEC

ALIASES
  $ aio runtime ns log-forwarding set splunk-hec
  $ aio runtime ns lf set splunk-hec
  $ aio runtime namespace lf set splunk-hec
  $ aio rt namespace log-forwarding set splunk-hec
  $ aio rt namespace lf set splunk-hec
  $ aio rt ns log-forwarding set splunk-hec
  $ aio rt ns lf set splunk-hec
```

## `aio runtime ns ls`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio runtime ns ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help] [--json]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Lists all of your namespaces for Adobe I/O Runtime

ALIASES
  $ aio runtime namespace ls
  $ aio runtime ns list
  $ aio runtime ns ls
  $ aio rt namespace list
  $ aio rt namespace ls
  $ aio rt ns list
  $ aio rt ns ls
```

## `aio runtime package`

Manage your packages

```
USAGE
  $ aio runtime package [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your packages

ALIASES
  $ aio runtime pkg
  $ aio rt package
  $ aio rt pkg
```

## `aio runtime package bind PACKAGENAME BINDPACKAGENAME`

Bind parameters to a package

```
USAGE
  $ aio runtime package bind PACKAGENAME BINDPACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --version                      Show version

DESCRIPTION
  Bind parameters to a package

ALIASES
  $ aio runtime pkg bind
  $ aio rt package bind
  $ aio rt pkg bind
```

## `aio runtime package create PACKAGENAME`

Creates a Package

```
USAGE
  $ aio runtime package create PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --shared=<option>              parameter to be passed to indicate whether package is shared or private
                                 <options: true|yes|false|no>
  --version                      Show version

DESCRIPTION
  Creates a Package

ALIASES
  $ aio runtime pkg create
  $ aio rt package create
  $ aio rt pkg create
```

## `aio runtime package delete PACKAGENAME`

Deletes a Package

```
USAGE
  $ aio runtime package delete PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [--json] [-r]

FLAGS
  -i, --insecure        bypass certificate check
  -r, --recursive       Deletes all associated actions (and rules & triggers associated with the actions)
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Deletes a Package

ALIASES
  $ aio runtime pkg delete
  $ aio rt package delete
  $ aio rt pkg delete
```

## `aio runtime package get PACKAGENAME`

Retrieves a Package

```
USAGE
  $ aio runtime package get PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Retrieves a Package

ALIASES
  $ aio runtime pkg get
  $ aio rt package get
  $ aio rt pkg get
```

## `aio runtime package list [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio runtime package list [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of packages from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Packages

ALIASES
  $ aio runtime package ls
  $ aio runtime pkg list
  $ aio runtime pkg ls
  $ aio rt package list
  $ aio rt package ls
  $ aio rt pkg list
  $ aio rt pkg ls
```

## `aio runtime package ls [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio runtime package ls [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of packages from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Packages

ALIASES
  $ aio runtime package ls
  $ aio runtime pkg list
  $ aio runtime pkg ls
  $ aio rt package list
  $ aio rt package ls
  $ aio rt pkg list
  $ aio rt pkg ls
```

## `aio runtime package update PACKAGENAME`

Updates a Package

```
USAGE
  $ aio runtime package update PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --shared=<option>              parameter to be passed to indicate whether package is shared or private
                                 <options: true|yes|false|no>
  --version                      Show version

DESCRIPTION
  Updates a Package

ALIASES
  $ aio runtime pkg update
  $ aio rt package update
  $ aio rt pkg update
```

## `aio runtime pkg`

Manage your packages

```
USAGE
  $ aio runtime pkg [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your packages

ALIASES
  $ aio runtime pkg
  $ aio rt package
  $ aio rt pkg
```

## `aio runtime pkg bind PACKAGENAME BINDPACKAGENAME`

Bind parameters to a package

```
USAGE
  $ aio runtime pkg bind PACKAGENAME BINDPACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --version                      Show version

DESCRIPTION
  Bind parameters to a package

ALIASES
  $ aio runtime pkg bind
  $ aio rt package bind
  $ aio rt pkg bind
```

## `aio runtime pkg create PACKAGENAME`

Creates a Package

```
USAGE
  $ aio runtime pkg create PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --shared=<option>              parameter to be passed to indicate whether package is shared or private
                                 <options: true|yes|false|no>
  --version                      Show version

DESCRIPTION
  Creates a Package

ALIASES
  $ aio runtime pkg create
  $ aio rt package create
  $ aio rt pkg create
```

## `aio runtime pkg delete PACKAGENAME`

Deletes a Package

```
USAGE
  $ aio runtime pkg delete PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [--json] [-r]

FLAGS
  -i, --insecure        bypass certificate check
  -r, --recursive       Deletes all associated actions (and rules & triggers associated with the actions)
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Deletes a Package

ALIASES
  $ aio runtime pkg delete
  $ aio rt package delete
  $ aio rt pkg delete
```

## `aio runtime pkg get PACKAGENAME`

Retrieves a Package

```
USAGE
  $ aio runtime pkg get PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help]

FLAGS
  -i, --insecure        bypass certificate check
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --key=<value>         client key
  --version             Show version

DESCRIPTION
  Retrieves a Package

ALIASES
  $ aio runtime pkg get
  $ aio rt package get
  $ aio rt pkg get
```

## `aio runtime pkg list [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio runtime pkg list [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of packages from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Packages

ALIASES
  $ aio runtime package ls
  $ aio runtime pkg list
  $ aio runtime pkg ls
  $ aio rt package list
  $ aio rt package ls
  $ aio rt pkg list
  $ aio rt pkg ls
```

## `aio runtime pkg ls [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio runtime pkg ls [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages (min: 0, max: 50)
  -n, --name            sort results by name
  -s, --skip=<value>    exclude the first SKIP number of packages from the result
  -u, --auth=<value>    whisk auth
  -v, --verbose         Verbose output
  --apihost=<value>     whisk API host
  --apiversion=<value>  whisk API version
  --cert=<value>        client cert
  --debug=<value>       Debug level output
  --help                Show help
  --json                output raw json
  --key=<value>         client key
  --name-sort           sort results by name
  --version             Show version

DESCRIPTION
  Lists all the Packages

ALIASES
  $ aio runtime package ls
  $ aio runtime pkg list
  $ aio runtime pkg ls
  $ aio rt package list
  $ aio rt package ls
  $ aio rt pkg list
  $ aio rt pkg ls
```

## `aio runtime pkg update PACKAGENAME`

Updates a Package

```
USAGE
  $ aio runtime pkg update PACKAGENAME [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameters in key value pairs to be passed to the package
  -u, --auth=<value>             whisk auth
  -v, --verbose                  Verbose output
  --apihost=<value>              whisk API host
  --apiversion=<value>           whisk API version
  --cert=<value>                 client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --json                         output raw json
  --key=<value>                  client key
  --shared=<option>              parameter to be passed to indicate whether package is shared or private
                                 <options: true|yes|false|no>
  --version                      Show version

DESCRIPTION
  Updates a Package

ALIASES
  $ aio runtime pkg update
  $ aio rt package update
  $ aio rt pkg update
```

## `aio runtime prop`

Execute property commands

```
USAGE
  $ aio runtime prop [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Execute property commands

ALIASES
  $ aio runtime prop
  $ aio rt prop
  $ aio rt property
```

## `aio runtime prop get`

get property

```
USAGE
  $ aio runtime prop get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace] [--all] [--apibuild] [--apibuildno] [--cliversion]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --all            all properties
  --apibuild       whisk API build version
  --apibuildno     whisk API build number
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --cliversion     whisk CLI version
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --namespace      whisk namespace
  --version        Show version

DESCRIPTION
  get property

ALIASES
  $ aio runtime prop get
  $ aio rt property get
  $ aio rt prop get
```

## `aio runtime prop set`

set property

```
USAGE
  $ aio runtime prop set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace <value>]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --key                client key
  --namespace=<value>  whisk namespace
  --version            Show version

DESCRIPTION
  set property

ALIASES
  $ aio runtime prop set
  $ aio rt property set
  $ aio rt prop set
```

## `aio runtime prop unset`

unset property

```
USAGE
  $ aio runtime prop unset [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --namespace      whisk namespace
  --version        Show version

DESCRIPTION
  unset property

ALIASES
  $ aio runtime prop unset
  $ aio rt property unset
  $ aio rt prop unset
```

## `aio runtime property`

Execute property commands

```
USAGE
  $ aio runtime property [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Execute property commands

ALIASES
  $ aio runtime prop
  $ aio rt prop
  $ aio rt property
```

## `aio runtime property get`

get property

```
USAGE
  $ aio runtime property get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace] [--all] [--apibuild] [--apibuildno] [--cliversion]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --all            all properties
  --apibuild       whisk API build version
  --apibuildno     whisk API build number
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --cliversion     whisk CLI version
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --namespace      whisk namespace
  --version        Show version

DESCRIPTION
  get property

ALIASES
  $ aio runtime prop get
  $ aio rt property get
  $ aio rt prop get
```

## `aio runtime property set`

set property

```
USAGE
  $ aio runtime property set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace <value>]

FLAGS
  -i, --insecure       bypass certificate check
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --key                client key
  --namespace=<value>  whisk namespace
  --version            Show version

DESCRIPTION
  set property

ALIASES
  $ aio runtime prop set
  $ aio rt property set
  $ aio rt prop set
```

## `aio runtime property unset`

unset property

```
USAGE
  $ aio runtime property unset [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--namespace]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --namespace      whisk namespace
  --version        Show version

DESCRIPTION
  unset property

ALIASES
  $ aio runtime prop unset
  $ aio rt property unset
  $ aio rt prop unset
```

## `aio runtime route`

Manage your routes

```
USAGE
  $ aio runtime route [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your routes

ALIASES
  $ aio runtime api
  $ aio rt api
```

## `aio runtime route create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`

create a new api route

```
USAGE
  $ aio runtime route create [BASEPATH] [RELPATH] [APIVERB] [ACTION] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i]
    [--debug <value>] [-v] [--version] [--help] [-n <value> | -c <value>] [-r html|http|json|text|svg|json | ]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb
  ACTION    The action to call

FLAGS
  -c, --config-file=<value>     file containing API configuration in swagger JSON format
  -i, --insecure                bypass certificate check
  -n, --apiname=<value>         Friendly name of the API; ignored when CFG_FILE is specified (default BASE_PATH)
  -r, --response-type=<option>  [default: json] Set the web action response TYPE.
                                <options: html|http|json|text|svg|json>
  -u, --auth                    whisk auth
  -v, --verbose                 Verbose output
  --apihost                     whisk API host
  --apiversion                  whisk API version
  --cert                        client cert
  --debug=<value>               Debug level output
  --help                        Show help
  --key                         client key
  --version                     Show version

DESCRIPTION
  create a new api route

ALIASES
  $ aio runtime api create
  $ aio rt route create
  $ aio rt api create
```

## `aio runtime route delete BASEPATHORAPINAME [RELPATH] [APIVERB]`

delete an API

```
USAGE
  $ aio runtime route delete BASEPATHORAPINAME [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i]
    [--debug <value>] [-v] [--version] [--help]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name
  RELPATH            The path of the api relative to the base path
  APIVERB            (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  delete an API

ALIASES
  $ aio runtime api delete
  $ aio rt route delete
  $ aio rt api delete
```

## `aio runtime route get BASEPATHORAPINAME`

get API details

```
USAGE
  $ aio runtime route get BASEPATHORAPINAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>]
    [-v] [--version] [--help]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  get API details

ALIASES
  $ aio runtime api get
  $ aio rt route get
  $ aio rt api get
```

## `aio runtime route list [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio runtime route list [BASEPATH] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
    <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--json]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  only return LIMIT number of triggers
  -s, --skip=<value>   exclude the first SKIP number of triggers from the result
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --version            Show version

DESCRIPTION
  list route/apis for Adobe I/O Runtime

ALIASES
  $ aio runtime route ls
  $ aio runtime api list
  $ aio runtime api ls
  $ aio rt route list
  $ aio rt route ls
  $ aio rt api list
  $ aio rt api ls
```

## `aio runtime route ls [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio runtime route ls [BASEPATH] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
    <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--json]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

FLAGS
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  only return LIMIT number of triggers
  -s, --skip=<value>   exclude the first SKIP number of triggers from the result
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --version            Show version

DESCRIPTION
  list route/apis for Adobe I/O Runtime

ALIASES
  $ aio runtime route ls
  $ aio runtime api list
  $ aio runtime api ls
  $ aio rt route list
  $ aio rt route ls
  $ aio rt api list
  $ aio rt api ls
```

## `aio runtime rule`

Manage your rules

```
USAGE
  $ aio runtime rule [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your rules

ALIASES
  $ aio rt rule
```

## `aio runtime rule create NAME TRIGGER ACTION`

Create a Rule

```
USAGE
  $ aio runtime rule create NAME TRIGGER ACTION [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>]
    [-v] [--version] [--help] [--json]

ARGUMENTS
  NAME     Name of the rule
  TRIGGER  Name of the trigger
  ACTION   Name of the action

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --json           output raw json
  --key            client key
  --version        Show version

DESCRIPTION
  Create a Rule

ALIASES
  $ aio rt rule create
```

## `aio runtime rule delete NAME`

Delete a Rule

```
USAGE
  $ aio runtime rule delete NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [--json]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --json           output raw json
  --key            client key
  --version        Show version

DESCRIPTION
  Delete a Rule

ALIASES
  $ aio rt rule delete
```

## `aio runtime rule disable NAME`

Disable a Rule

```
USAGE
  $ aio runtime rule disable NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Disable a Rule

ALIASES
  $ aio rt rule disable
```

## `aio runtime rule enable NAME`

Enable a Rule

```
USAGE
  $ aio runtime rule enable NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Enable a Rule

ALIASES
  $ aio rt rule enable
```

## `aio runtime rule get NAME`

Retrieves a Rule

```
USAGE
  $ aio runtime rule get NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Retrieves a Rule

ALIASES
  $ aio rt rule get
```

## `aio runtime rule list`

Retrieves a list of Rules

```
USAGE
  $ aio runtime rule list [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of rules
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  Limit number of rules returned (min: 0, max: 50)
  -n, --name           sort results by name
  -s, --skip=<value>   Skip number of rules returned
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --name-sort          sort results by name
  --version            Show version

DESCRIPTION
  Retrieves a list of Rules

ALIASES
  $ aio runtime rule ls
  $ aio rt rule list
  $ aio rt rule ls
```

## `aio runtime rule ls`

Retrieves a list of Rules

```
USAGE
  $ aio runtime rule ls [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of rules
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  Limit number of rules returned (min: 0, max: 50)
  -n, --name           sort results by name
  -s, --skip=<value>   Skip number of rules returned
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --name-sort          sort results by name
  --version            Show version

DESCRIPTION
  Retrieves a list of Rules

ALIASES
  $ aio runtime rule ls
  $ aio rt rule list
  $ aio rt rule ls
```

## `aio runtime rule status NAME`

Gets the status of a rule

```
USAGE
  $ aio runtime rule status NAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

ARGUMENTS
  NAME  Name of the rule

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Gets the status of a rule

ALIASES
  $ aio rt rule status
```

## `aio runtime rule update NAME TRIGGER ACTION`

Update a Rule

```
USAGE
  $ aio runtime rule update NAME TRIGGER ACTION [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>]
    [-v] [--version] [--help] [--json]

ARGUMENTS
  NAME     Name of the rule
  TRIGGER  Name of the trigger
  ACTION   Name of the action

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --json           output raw json
  --key            client key
  --version        Show version

DESCRIPTION
  Update a Rule

ALIASES
  $ aio rt rule update
```

## `aio runtime trigger`

Manage your triggers

```
USAGE
  $ aio runtime trigger [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help]

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Manage your triggers

ALIASES
  $ aio rt trigger
```

## `aio runtime trigger create TRIGGERNAME`

Create a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime trigger create TRIGGERNAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>] [-a <value>] [-A <value>] [-f <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -f, --feed=<value>             trigger feed ACTION_NAME
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameter values in KEY VALUE format
  -u, --auth                     whisk auth
  -v, --verbose                  Verbose output
  --apihost                      whisk API host
  --apiversion                   whisk API version
  --cert                         client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --key                          client key
  --version                      Show version

DESCRIPTION
  Create a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger create
```

## `aio runtime trigger delete TRIGGERPATH`

Delete a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime trigger delete TRIGGERPATH [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help]

ARGUMENTS
  TRIGGERPATH  The name of the trigger, in the format /NAMESPACE/NAME

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Delete a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger delete
```

## `aio runtime trigger fire TRIGGERNAME`

Fire a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime trigger fire TRIGGERNAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -P, --param-file=<value>  FILE containing parameter values in JSON format
  -i, --insecure            bypass certificate check
  -p, --param=<value>...    parameter values in KEY VALUE format
  -u, --auth                whisk auth
  -v, --verbose             Verbose output
  --apihost                 whisk API host
  --apiversion              whisk API version
  --cert                    client cert
  --debug=<value>           Debug level output
  --help                    Show help
  --key                     client key
  --version                 Show version

DESCRIPTION
  Fire a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger fire
```

## `aio runtime trigger get TRIGGERPATH`

Get a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime trigger get TRIGGERPATH [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help]

ARGUMENTS
  TRIGGERPATH  The name/path of the trigger, in the format /NAMESPACE/NAME

FLAGS
  -i, --insecure   bypass certificate check
  -u, --auth       whisk auth
  -v, --verbose    Verbose output
  --apihost        whisk API host
  --apiversion     whisk API version
  --cert           client cert
  --debug=<value>  Debug level output
  --help           Show help
  --key            client key
  --version        Show version

DESCRIPTION
  Get a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger get
```

## `aio runtime trigger list`

Lists all of your triggers for Adobe I/O Runtime

```
USAGE
  $ aio runtime trigger list [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of triggers
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  [default: 30] only return LIMIT number of triggers (min: 0, max: 50)
  -n, --name           sort results by name
  -s, --skip=<value>   exclude the first SKIP number of triggers from the result
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --name-sort          sort results by name
  --version            Show version

DESCRIPTION
  Lists all of your triggers for Adobe I/O Runtime

ALIASES
  $ aio runtime trigger ls
  $ aio rt trigger list
  $ aio rt trigger ls
```

## `aio runtime trigger ls`

Lists all of your triggers for Adobe I/O Runtime

```
USAGE
  $ aio runtime trigger ls [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of triggers
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  [default: 30] only return LIMIT number of triggers (min: 0, max: 50)
  -n, --name           sort results by name
  -s, --skip=<value>   exclude the first SKIP number of triggers from the result
  -u, --auth           whisk auth
  -v, --verbose        Verbose output
  --apihost            whisk API host
  --apiversion         whisk API version
  --cert               client cert
  --debug=<value>      Debug level output
  --help               Show help
  --json               output raw json
  --key                client key
  --name-sort          sort results by name
  --version            Show version

DESCRIPTION
  Lists all of your triggers for Adobe I/O Runtime

ALIASES
  $ aio runtime trigger ls
  $ aio rt trigger list
  $ aio rt trigger ls
```

## `aio runtime trigger update TRIGGERNAME`

Update or create a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime trigger update TRIGGERNAME [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>] [-a <value>] [-A <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>...    annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>...         parameter values in KEY VALUE format
  -u, --auth                     whisk auth
  -v, --verbose                  Verbose output
  --apihost                      whisk API host
  --apiversion                   whisk API version
  --cert                         client cert
  --debug=<value>                Debug level output
  --help                         Show help
  --key                          client key
  --version                      Show version

DESCRIPTION
  Update or create a trigger for Adobe I/O Runtime

ALIASES
  $ aio rt trigger update
```

## `aio telemetry yes`

Allow the cli to collect anonymous usage data

```
USAGE
  $ aio telemetry yes
  $ aio telemetry off
  $ aio telemetry

ARGUMENTS
  STATE  (on|off|yes|no) set telemetry state

DESCRIPTION
  Allow the cli to collect anonymous usage data
```

_See code: [@adobe/aio-cli-plugin-telemetry](https://github.com/adobe/aio-cli-plugin-telemetry/blob/v1.2.0/src/commands/telemetry/index.js)_

## `aio templates`

Discover, install, or uninstall a new template into an existing Adobe Developer App Builder App

```
USAGE
  $ aio templates [-v]

FLAGS
  -v, --verbose  Verbose output

DESCRIPTION
  Discover, install, or uninstall a new template into an existing Adobe Developer App Builder App
```

_See code: [@adobe/aio-cli-plugin-app-templates](https://github.com/adobe/aio-cli-plugin-app-templates/blob/1.5.2/src/commands/templates/index.js)_

## `aio templates disco`

Discover App Builder templates to install

```
USAGE
  $ aio templates disco [-v] [-i] [-f publishDate|names|adobeRecommended] [-o asc|desc]

FLAGS
  -f, --sort-field=<option>  [default: adobeRecommended] which column to sort, use the sort-order flag to specify sort
                             direction
                             <options: publishDate|names|adobeRecommended>
  -i, --interactive          interactive install mode
  -o, --sort-order=<option>  [default: desc] sort order for a column, use the sort-field flag to specify which column to
                             sort
                             <options: asc|desc>
  -v, --verbose              Verbose output

DESCRIPTION
  Discover App Builder templates to install

ALIASES
  $ aio templates disco
```

## `aio templates discover`

Discover App Builder templates to install

```
USAGE
  $ aio templates discover [-v] [-i] [-f publishDate|names|adobeRecommended] [-o asc|desc]

FLAGS
  -f, --sort-field=<option>  [default: adobeRecommended] which column to sort, use the sort-order flag to specify sort
                             direction
                             <options: publishDate|names|adobeRecommended>
  -i, --interactive          interactive install mode
  -o, --sort-order=<option>  [default: desc] sort order for a column, use the sort-field flag to specify which column to
                             sort
                             <options: asc|desc>
  -v, --verbose              Verbose output

DESCRIPTION
  Discover App Builder templates to install

ALIASES
  $ aio templates disco
```

## `aio templates i PATH`

Install an Adobe Developer App Builder template

```
USAGE
  $ aio templates i PATH [-v] [-y] [--install] [--process-install-config] [--template-options <value>]

ARGUMENTS
  PATH  path to the template (npm package name, file path, url). See examples

FLAGS
  -v, --verbose                  Verbose output
  -y, --yes                      Skip questions, and use all default values
  --[no-]install                 [default: true] Run npm installation after files are created
  --[no-]process-install-config  [default: true] Process the template install.yml configuration file, defaults to true,
                                 to skip processing install.yml use --no-process-install-config
  --template-options=<value>     Additional template options, as a base64-encoded json string

DESCRIPTION
  Install an Adobe Developer App Builder template

ALIASES
  $ aio templates i

EXAMPLES
  $ aio templates install https://github.com/org/repo

  $ aio templates install git+https://github.com/org/repo

  $ aio templates install ssh://github.com/org/repo

  $ aio templates install git+ssh://github.com/org/repo

  $ aio templates install file:../relative/path/to/template/folder

  $ aio templates install file:/absolute/path/to/template/folder

  $ aio templates install ../relative/path/to/template/folder

  $ aio templates install /absolute/path/to/template/folder

  $ aio templates install npm-package-name

  $ aio templates install npm-package-name@tagOrVersion

  $ aio templates install @scope/npm-package-name

  $ aio templates install @scope/npm-package-name@tagOrVersion
```

## `aio templates info`

List all App Builder templates that are installed

```
USAGE
  $ aio templates info [-v] [-y | -j] [-s]

FLAGS
  -j, --json               output raw json
  -s, --required-services  includes services required by a template in the output
  -v, --verbose            Verbose output
  -y, --yml                output yml

DESCRIPTION
  List all App Builder templates that are installed
```

## `aio templates install PATH`

Install an Adobe Developer App Builder template

```
USAGE
  $ aio templates install PATH [-v] [-y] [--install] [--process-install-config] [--template-options <value>]

ARGUMENTS
  PATH  path to the template (npm package name, file path, url). See examples

FLAGS
  -v, --verbose                  Verbose output
  -y, --yes                      Skip questions, and use all default values
  --[no-]install                 [default: true] Run npm installation after files are created
  --[no-]process-install-config  [default: true] Process the template install.yml configuration file, defaults to true,
                                 to skip processing install.yml use --no-process-install-config
  --template-options=<value>     Additional template options, as a base64-encoded json string

DESCRIPTION
  Install an Adobe Developer App Builder template

ALIASES
  $ aio templates i

EXAMPLES
  $ aio templates install https://github.com/org/repo

  $ aio templates install git+https://github.com/org/repo

  $ aio templates install ssh://github.com/org/repo

  $ aio templates install git+ssh://github.com/org/repo

  $ aio templates install file:../relative/path/to/template/folder

  $ aio templates install file:/absolute/path/to/template/folder

  $ aio templates install ../relative/path/to/template/folder

  $ aio templates install /absolute/path/to/template/folder

  $ aio templates install npm-package-name

  $ aio templates install npm-package-name@tagOrVersion

  $ aio templates install @scope/npm-package-name

  $ aio templates install @scope/npm-package-name@tagOrVersion
```

## `aio templates remove NAME`

Remove an Adobe Developer App Builder template from the Template Registry

```
USAGE
  $ aio templates remove NAME [-v]

ARGUMENTS
  NAME  The name of the package implementing the template on npmjs.com

FLAGS
  -v, --verbose  Verbose output

DESCRIPTION
  Remove an Adobe Developer App Builder template from the Template Registry

ALIASES
  $ aio templates rm

EXAMPLES
  $ aio templates remove @adobe/app-builder-template
```

## `aio templates rm NAME`

Remove an Adobe Developer App Builder template from the Template Registry

```
USAGE
  $ aio templates rm NAME [-v]

ARGUMENTS
  NAME  The name of the package implementing the template on npmjs.com

FLAGS
  -v, --verbose  Verbose output

DESCRIPTION
  Remove an Adobe Developer App Builder template from the Template Registry

ALIASES
  $ aio templates rm

EXAMPLES
  $ aio templates remove @adobe/app-builder-template
```

## `aio templates rollback`

Clears all installed templates

```
USAGE
  $ aio templates rollback [-v] [-i] [-l] [-c]

FLAGS
  -c, --[no-]confirm  confirmation needed for clear (defaults to true)
  -i, --interactive   interactive clear mode
  -l, --list          list templates that will be uninstalled
  -v, --verbose       Verbose output

DESCRIPTION
  Clears all installed templates
```

## `aio templates sub NAME GITHUBREPOURL`

Submit an Adobe Developer App Builder template

```
USAGE
  $ aio templates sub NAME GITHUBREPOURL [-v]

ARGUMENTS
  NAME           The name of the package implementing the template on npmjs.com
  GITHUBREPOURL  A link to the Github repository containing the package's source code

FLAGS
  -v, --verbose  Verbose output

DESCRIPTION
  Submit an Adobe Developer App Builder template

ALIASES
  $ aio templates sub

EXAMPLES
  $ aio templates submit @adobe/app-builder-template https://github.com/adobe/app-builder-template
```

## `aio templates submit NAME GITHUBREPOURL`

Submit an Adobe Developer App Builder template

```
USAGE
  $ aio templates submit NAME GITHUBREPOURL [-v]

ARGUMENTS
  NAME           The name of the package implementing the template on npmjs.com
  GITHUBREPOURL  A link to the Github repository containing the package's source code

FLAGS
  -v, --verbose  Verbose output

DESCRIPTION
  Submit an Adobe Developer App Builder template

ALIASES
  $ aio templates sub

EXAMPLES
  $ aio templates submit @adobe/app-builder-template https://github.com/adobe/app-builder-template
```

## `aio templates un PACKAGE-NAME`

Uninstall an Adobe Developer App Builder template

```
USAGE
  $ aio templates un PACKAGE-NAME [-v]

ARGUMENTS
  PACKAGE-NAME  package name of the template

FLAGS
  -v, --verbose  Verbose output

DESCRIPTION
  Uninstall an Adobe Developer App Builder template

ALIASES
  $ aio templates un
```

## `aio templates uninstall PACKAGE-NAME`

Uninstall an Adobe Developer App Builder template

```
USAGE
  $ aio templates uninstall PACKAGE-NAME [-v]

ARGUMENTS
  PACKAGE-NAME  package name of the template

FLAGS
  -v, --verbose  Verbose output

DESCRIPTION
  Uninstall an Adobe Developer App Builder template

ALIASES
  $ aio templates un
```

## `aio update`

Update all installed plugins.

```
USAGE
  $ aio update [-i] [-l] [-c] [-v]

FLAGS
  -c, --[no-]confirm  confirmation needed for update (defaults to true)
  -i, --interactive   interactive update mode
  -l, --list          list plugins that will be updated
  -v, --verbose       Verbose output

DESCRIPTION
  Update all installed plugins.
  This command will only:
  - update user-installed plugins that are not core
```

_See code: [src/commands/update.ts](https://github.com/adobe/aio-cli/blob/9.2.0/src/commands/update.ts)_

## `aio where`

Show the currently selected Organization, Project and Workspace

```
USAGE
  $ aio where [--help] [-j | -y]

FLAGS
  -j, --json  Output json
  -y, --yml   Output yml
  --help      Show help

DESCRIPTION
  Show the currently selected Organization, Project and Workspace

ALIASES
  $ aio where
```
<!-- commandsstop -->
