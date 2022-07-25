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
$ aio (--version)
@adobe/aio-cli/8.3.0 darwin-x64 node-v16.16.0
$ aio --help [COMMAND]
USAGE
  $ aio COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`aio app`](#aio-app)
* [`aio app:add`](#aio-appadd)
* [`aio app:add:action`](#aio-appaddaction)
* [`aio app:add:actions`](#aio-appaddactions)
* [`aio app:add:ci`](#aio-appaddci)
* [`aio app:add:event`](#aio-appaddevent)
* [`aio app:add:events`](#aio-appaddevents)
* [`aio app:add:ext`](#aio-appaddext)
* [`aio app:add:extension`](#aio-appaddextension)
* [`aio app:add:extensions`](#aio-appaddextensions)
* [`aio app:add:service`](#aio-appaddservice)
* [`aio app:add:services`](#aio-appaddservices)
* [`aio app:add:web-assets`](#aio-appaddweb-assets)
* [`aio app:build`](#aio-appbuild)
* [`aio app:config`](#aio-appconfig)
* [`aio app:config:get`](#aio-appconfigget)
* [`aio app:config:get:lf`](#aio-appconfiggetlf)
* [`aio app:config:get:lf:errors`](#aio-appconfiggetlferrors)
* [`aio app:config:get:log-forwarding`](#aio-appconfiggetlog-forwarding)
* [`aio app:config:get:log-forwarding:errors`](#aio-appconfiggetlog-forwardingerrors)
* [`aio app:config:set`](#aio-appconfigset)
* [`aio app:config:set:lf`](#aio-appconfigsetlf)
* [`aio app:config:set:log-forwarding`](#aio-appconfigsetlog-forwarding)
* [`aio app:create [PATH]`](#aio-appcreate-path)
* [`aio app:delete`](#aio-appdelete)
* [`aio app:delete:action [ACTION-NAME]`](#aio-appdeleteaction-action-name)
* [`aio app:delete:actions [ACTION-NAME]`](#aio-appdeleteactions-action-name)
* [`aio app:delete:ci`](#aio-appdeleteci)
* [`aio app:delete:event [EVENT-ACTION-NAME]`](#aio-appdeleteevent-event-action-name)
* [`aio app:delete:events [EVENT-ACTION-NAME]`](#aio-appdeleteevents-event-action-name)
* [`aio app:delete:ext`](#aio-appdeleteext)
* [`aio app:delete:extension`](#aio-appdeleteextension)
* [`aio app:delete:extensions`](#aio-appdeleteextensions)
* [`aio app:delete:service`](#aio-appdeleteservice)
* [`aio app:delete:services`](#aio-appdeleteservices)
* [`aio app:delete:web-assets`](#aio-appdeleteweb-assets)
* [`aio app:deploy`](#aio-appdeploy)
* [`aio app:get-url [ACTION]`](#aio-appget-url-action)
* [`aio app:info`](#aio-appinfo)
* [`aio app:init [PATH]`](#aio-appinit-path)
* [`aio app:list`](#aio-applist)
* [`aio app:list:ext`](#aio-applistext)
* [`aio app:list:ext-points`](#aio-applistext-points)
* [`aio app:list:extension`](#aio-applistextension)
* [`aio app:list:extension-points`](#aio-applistextension-points)
* [`aio app:list:extensions`](#aio-applistextensions)
* [`aio app:logs`](#aio-applogs)
* [`aio app:run`](#aio-apprun)
* [`aio app:test`](#aio-apptest)
* [`aio app:undeploy`](#aio-appundeploy)
* [`aio app:use [CONFIG_FILE_PATH]`](#aio-appuse-config_file_path)
* [`aio auth`](#aio-auth)
* [`aio auth:ctx`](#aio-authctx)
* [`aio auth:login`](#aio-authlogin)
* [`aio auth:logout`](#aio-authlogout)
* [`aio autocomplete [SHELL]`](#aio-autocomplete-shell)
* [`aio certificate`](#aio-certificate)
* [`aio certificate:generate`](#aio-certificategenerate)
* [`aio certificate:verify FILE`](#aio-certificateverify-file)
* [`aio config`](#aio-config)
* [`aio config:clear`](#aio-configclear)
* [`aio config:del KEYS...`](#aio-configdel-keys)
* [`aio config:delete KEYS...`](#aio-configdelete-keys)
* [`aio config:edit`](#aio-configedit)
* [`aio config:get KEY`](#aio-configget-key)
* [`aio config:list`](#aio-configlist)
* [`aio config:ls`](#aio-configls)
* [`aio config:rm KEYS...`](#aio-configrm-keys)
* [`aio config set key 'a value'       # set key to 'a value'`](#aio-config-set-key-a-value--------set-key-to-a-value)
* [`aio console`](#aio-console)
* [`aio console:org`](#aio-consoleorg)
* [`aio console:org:list`](#aio-consoleorglist)
* [`aio console:org:ls`](#aio-consoleorgls)
* [`aio console:org:sel [ORGCODE]`](#aio-consoleorgsel-orgcode)
* [`aio console:org:select [ORGCODE]`](#aio-consoleorgselect-orgcode)
* [`aio console:project`](#aio-consoleproject)
* [`aio console:project:list`](#aio-consoleprojectlist)
* [`aio console:project:ls`](#aio-consoleprojectls)
* [`aio console:project:sel [PROJECTIDORNAME]`](#aio-consoleprojectsel-projectidorname)
* [`aio console:project:select [PROJECTIDORNAME]`](#aio-consoleprojectselect-projectidorname)
* [`aio console:where`](#aio-consolewhere)
* [`aio console:workspace`](#aio-consoleworkspace)
* [`aio console:workspace:dl [DESTINATION]`](#aio-consoleworkspacedl-destination)
* [`aio console:workspace:download [DESTINATION]`](#aio-consoleworkspacedownload-destination)
* [`aio console:workspace:list`](#aio-consoleworkspacelist)
* [`aio console:workspace:ls`](#aio-consoleworkspacels)
* [`aio console:workspace:sel [WORKSPACEIDORNAME]`](#aio-consoleworkspacesel-workspaceidorname)
* [`aio console:workspace:select [WORKSPACEIDORNAME]`](#aio-consoleworkspaceselect-workspaceidorname)
* [`aio console:ws`](#aio-consolews)
* [`aio console:ws:dl [DESTINATION]`](#aio-consolewsdl-destination)
* [`aio console:ws:download [DESTINATION]`](#aio-consolewsdownload-destination)
* [`aio console:ws:list`](#aio-consolewslist)
* [`aio console:ws:ls`](#aio-consolewsls)
* [`aio console:ws:sel [WORKSPACEIDORNAME]`](#aio-consolewssel-workspaceidorname)
* [`aio console:ws:select [WORKSPACEIDORNAME]`](#aio-consolewsselect-workspaceidorname)
* [`aio context`](#aio-context)
* [`aio ctx`](#aio-ctx)
* [`aio discover`](#aio-discover)
* [`aio event`](#aio-event)
* [`aio event:eventmetadata`](#aio-eventeventmetadata)
* [`aio event:eventmetadata:create PROVIDERID`](#aio-eventeventmetadatacreate-providerid)
* [`aio event:eventmetadata:delete PROVIDERID [EVENTCODE]`](#aio-eventeventmetadatadelete-providerid-eventcode)
* [`aio event:eventmetadata:get PROVIDERID EVENTCODE`](#aio-eventeventmetadataget-providerid-eventcode)
* [`aio event:eventmetadata:list PROVIDERID`](#aio-eventeventmetadatalist-providerid)
* [`aio event:eventmetadata:ls PROVIDERID`](#aio-eventeventmetadatals-providerid)
* [`aio event:eventmetadata:update PROVIDERID EVENTCODE`](#aio-eventeventmetadataupdate-providerid-eventcode)
* [`aio event:provider`](#aio-eventprovider)
* [`aio event:provider:create`](#aio-eventprovidercreate)
* [`aio event:provider:delete PROVIDERID`](#aio-eventproviderdelete-providerid)
* [`aio event:provider:get PROVIDERID`](#aio-eventproviderget-providerid)
* [`aio event:provider:list`](#aio-eventproviderlist)
* [`aio event:provider:ls`](#aio-eventproviderls)
* [`aio event:provider:update PROVIDERID`](#aio-eventproviderupdate-providerid)
* [`aio event:reg:create BODYJSONFILE`](#aio-eventregcreate-bodyjsonfile)
* [`aio event:reg:delete REGISTRATIONID`](#aio-eventregdelete-registrationid)
* [`aio event:reg:get REGISTRATIONID`](#aio-eventregget-registrationid)
* [`aio event:reg:list`](#aio-eventreglist)
* [`aio event:reg:ls`](#aio-eventregls)
* [`aio event:registration`](#aio-eventregistration)
* [`aio event:registration:create BODYJSONFILE`](#aio-eventregistrationcreate-bodyjsonfile)
* [`aio event:registration:delete REGISTRATIONID`](#aio-eventregistrationdelete-registrationid)
* [`aio event:registration:get REGISTRATIONID`](#aio-eventregistrationget-registrationid)
* [`aio event:registration:list`](#aio-eventregistrationlist)
* [`aio event:registration:ls`](#aio-eventregistrationls)
* [`aio help [COMMAND]`](#aio-help-command)
* [`aio info`](#aio-info)
* [`aio login`](#aio-login)
* [`aio logout`](#aio-logout)
* [`aio plugins`](#aio-plugins)
* [`aio plugins:install PLUGIN...`](#aio-pluginsinstall-plugin)
* [`aio plugins:discover`](#aio-pluginsdiscover)
* [`aio plugins:inspect PLUGIN...`](#aio-pluginsinspect-plugin)
* [`aio plugins:install PLUGIN...`](#aio-pluginsinstall-plugin-1)
* [`aio plugins:link PLUGIN`](#aio-pluginslink-plugin)
* [`aio plugins:uninstall PLUGIN...`](#aio-pluginsuninstall-plugin)
* [`aio plugins:uninstall PLUGIN...`](#aio-pluginsuninstall-plugin-1)
* [`aio plugins:uninstall PLUGIN...`](#aio-pluginsuninstall-plugin-2)
* [`aio plugins:update`](#aio-pluginsupdate)
* [`aio report`](#aio-report)
* [`aio rollback`](#aio-rollback)
* [`aio rt`](#aio-rt)
* [`aio rt:action`](#aio-rtaction)
* [`aio rt:action:create ACTIONNAME [ACTIONPATH]`](#aio-rtactioncreate-actionname-actionpath)
* [`aio rt:action:del ACTIONNAME`](#aio-rtactiondel-actionname)
* [`aio rt:action:delete ACTIONNAME`](#aio-rtactiondelete-actionname)
* [`aio rt:action:get ACTIONNAME`](#aio-rtactionget-actionname)
* [`aio rt:action:invoke ACTIONNAME`](#aio-rtactioninvoke-actionname)
* [`aio rt:action:list [PACKAGENAME]`](#aio-rtactionlist-packagename)
* [`aio rt:action:ls [PACKAGENAME]`](#aio-rtactionls-packagename)
* [`aio rt:action:update ACTIONNAME [ACTIONPATH]`](#aio-rtactionupdate-actionname-actionpath)
* [`aio rt:actions:list [PACKAGENAME]`](#aio-rtactionslist-packagename)
* [`aio rt:actions:ls [PACKAGENAME]`](#aio-rtactionsls-packagename)
* [`aio rt:activation`](#aio-rtactivation)
* [`aio rt:activation:get [ACTIVATIONID]`](#aio-rtactivationget-activationid)
* [`aio rt:activation:list [ACTIVATION_NAME]`](#aio-rtactivationlist-activation_name)
* [`aio rt:activation:log [ACTIVATIONID]`](#aio-rtactivationlog-activationid)
* [`aio rt:activation:logs [ACTIVATIONID]`](#aio-rtactivationlogs-activationid)
* [`aio rt:activation:ls [ACTIVATION_NAME]`](#aio-rtactivationls-activation_name)
* [`aio rt:activation:result [ACTIVATIONID]`](#aio-rtactivationresult-activationid)
* [`aio rt:activations:list [ACTIVATION_NAME]`](#aio-rtactivationslist-activation_name)
* [`aio rt:activations:ls [ACTIVATION_NAME]`](#aio-rtactivationsls-activation_name)
* [`aio rt:api`](#aio-rtapi)
* [`aio rt:api:create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`](#aio-rtapicreate-basepath-relpath-apiverb-action)
* [`aio rt:api:delete BASEPATHORAPINAME [RELPATH] [APIVERB]`](#aio-rtapidelete-basepathorapiname-relpath-apiverb)
* [`aio rt:api:get BASEPATHORAPINAME`](#aio-rtapiget-basepathorapiname)
* [`aio rt:api:list [BASEPATH] [RELPATH] [APIVERB]`](#aio-rtapilist-basepath-relpath-apiverb)
* [`aio rt:api:ls [BASEPATH] [RELPATH] [APIVERB]`](#aio-rtapils-basepath-relpath-apiverb)
* [`aio rt:deploy`](#aio-rtdeploy)
* [`aio rt:deploy:export`](#aio-rtdeployexport)
* [`aio rt:deploy:report`](#aio-rtdeployreport)
* [`aio rt:deploy:sync`](#aio-rtdeploysync)
* [`aio rt:deploy:undeploy`](#aio-rtdeployundeploy)
* [`aio rt:deploy:version`](#aio-rtdeployversion)
* [`aio rt:get`](#aio-rtget)
* [`aio rt:list`](#aio-rtlist)
* [`aio rt:log [ACTIVATIONID]`](#aio-rtlog-activationid)
* [`aio rt:logs [ACTIVATIONID]`](#aio-rtlogs-activationid)
* [`aio rt:ls`](#aio-rtls)
* [`aio rt:namespace`](#aio-rtnamespace)
* [`aio rt:namespace:lf`](#aio-rtnamespacelf)
* [`aio rt:namespace:lf:errors`](#aio-rtnamespacelferrors)
* [`aio rt:namespace:lf:get`](#aio-rtnamespacelfget)
* [`aio rt:namespace:lf:set`](#aio-rtnamespacelfset)
* [`aio rt:namespace:lf:set:adobe-io-runtime`](#aio-rtnamespacelfsetadobe-io-runtime)
* [`aio rt:namespace:lf:set:azure-log-analytics`](#aio-rtnamespacelfsetazure-log-analytics)
* [`aio rt:namespace:lf:set:splunk-hec`](#aio-rtnamespacelfsetsplunk-hec)
* [`aio rt:namespace:list`](#aio-rtnamespacelist)
* [`aio rt:namespace:log-forwarding`](#aio-rtnamespacelog-forwarding)
* [`aio rt:namespace:log-forwarding:errors`](#aio-rtnamespacelog-forwardingerrors)
* [`aio rt:namespace:log-forwarding:get`](#aio-rtnamespacelog-forwardingget)
* [`aio rt:namespace:log-forwarding:set`](#aio-rtnamespacelog-forwardingset)
* [`aio rt:namespace:log-forwarding:set:adobe-io-runtime`](#aio-rtnamespacelog-forwardingsetadobe-io-runtime)
* [`aio rt:namespace:log-forwarding:set:azure-log-analytics`](#aio-rtnamespacelog-forwardingsetazure-log-analytics)
* [`aio rt:namespace:log-forwarding:set:splunk-hec`](#aio-rtnamespacelog-forwardingsetsplunk-hec)
* [`aio rt:namespace:ls`](#aio-rtnamespacels)
* [`aio rt:ns`](#aio-rtns)
* [`aio rt:ns:lf`](#aio-rtnslf)
* [`aio rt:ns:lf:errors`](#aio-rtnslferrors)
* [`aio rt:ns:lf:get`](#aio-rtnslfget)
* [`aio rt:ns:lf:set`](#aio-rtnslfset)
* [`aio rt:ns:lf:set:adobe-io-runtime`](#aio-rtnslfsetadobe-io-runtime)
* [`aio rt:ns:lf:set:azure-log-analytics`](#aio-rtnslfsetazure-log-analytics)
* [`aio rt:ns:lf:set:splunk-hec`](#aio-rtnslfsetsplunk-hec)
* [`aio rt:ns:list`](#aio-rtnslist)
* [`aio rt:ns:log-forwarding`](#aio-rtnslog-forwarding)
* [`aio rt:ns:log-forwarding:errors`](#aio-rtnslog-forwardingerrors)
* [`aio rt:ns:log-forwarding:get`](#aio-rtnslog-forwardingget)
* [`aio rt:ns:log-forwarding:set`](#aio-rtnslog-forwardingset)
* [`aio rt:ns:log-forwarding:set:adobe-io-runtime`](#aio-rtnslog-forwardingsetadobe-io-runtime)
* [`aio rt:ns:log-forwarding:set:azure-log-analytics`](#aio-rtnslog-forwardingsetazure-log-analytics)
* [`aio rt:ns:log-forwarding:set:splunk-hec`](#aio-rtnslog-forwardingsetsplunk-hec)
* [`aio rt:ns:ls`](#aio-rtnsls)
* [`aio rt:package`](#aio-rtpackage)
* [`aio rt:package:bind PACKAGENAME BINDPACKAGENAME`](#aio-rtpackagebind-packagename-bindpackagename)
* [`aio rt:package:create PACKAGENAME`](#aio-rtpackagecreate-packagename)
* [`aio rt:package:delete PACKAGENAME`](#aio-rtpackagedelete-packagename)
* [`aio rt:package:get PACKAGENAME`](#aio-rtpackageget-packagename)
* [`aio rt:package:list [NAMESPACE]`](#aio-rtpackagelist-namespace)
* [`aio rt:package:ls [NAMESPACE]`](#aio-rtpackagels-namespace)
* [`aio rt:package:update PACKAGENAME`](#aio-rtpackageupdate-packagename)
* [`aio rt:pkg`](#aio-rtpkg)
* [`aio rt:pkg:bind PACKAGENAME BINDPACKAGENAME`](#aio-rtpkgbind-packagename-bindpackagename)
* [`aio rt:pkg:create PACKAGENAME`](#aio-rtpkgcreate-packagename)
* [`aio rt:pkg:delete PACKAGENAME`](#aio-rtpkgdelete-packagename)
* [`aio rt:pkg:get PACKAGENAME`](#aio-rtpkgget-packagename)
* [`aio rt:pkg:list [NAMESPACE]`](#aio-rtpkglist-namespace)
* [`aio rt:pkg:ls [NAMESPACE]`](#aio-rtpkgls-namespace)
* [`aio rt:pkg:update PACKAGENAME`](#aio-rtpkgupdate-packagename)
* [`aio rt:prop`](#aio-rtprop)
* [`aio rt:prop:get`](#aio-rtpropget)
* [`aio rt:prop:set`](#aio-rtpropset)
* [`aio rt:prop:unset`](#aio-rtpropunset)
* [`aio rt:property`](#aio-rtproperty)
* [`aio rt:property:get`](#aio-rtpropertyget)
* [`aio rt:property:set`](#aio-rtpropertyset)
* [`aio rt:property:unset`](#aio-rtpropertyunset)
* [`aio rt:route:create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`](#aio-rtroutecreate-basepath-relpath-apiverb-action)
* [`aio rt:route:delete BASEPATHORAPINAME [RELPATH] [APIVERB]`](#aio-rtroutedelete-basepathorapiname-relpath-apiverb)
* [`aio rt:route:get BASEPATHORAPINAME`](#aio-rtrouteget-basepathorapiname)
* [`aio rt:route:list [BASEPATH] [RELPATH] [APIVERB]`](#aio-rtroutelist-basepath-relpath-apiverb)
* [`aio rt:route:ls [BASEPATH] [RELPATH] [APIVERB]`](#aio-rtroutels-basepath-relpath-apiverb)
* [`aio rt:rule`](#aio-rtrule)
* [`aio rt:rule:create NAME TRIGGER ACTION`](#aio-rtrulecreate-name-trigger-action)
* [`aio rt:rule:delete NAME`](#aio-rtruledelete-name)
* [`aio rt:rule:disable NAME`](#aio-rtruledisable-name)
* [`aio rt:rule:enable NAME`](#aio-rtruleenable-name)
* [`aio rt:rule:get NAME`](#aio-rtruleget-name)
* [`aio rt:rule:list`](#aio-rtrulelist)
* [`aio rt:rule:ls`](#aio-rtrulels)
* [`aio rt:rule:status NAME`](#aio-rtrulestatus-name)
* [`aio rt:rule:update NAME TRIGGER ACTION`](#aio-rtruleupdate-name-trigger-action)
* [`aio rt:trigger`](#aio-rttrigger)
* [`aio rt:trigger:create TRIGGERNAME`](#aio-rttriggercreate-triggername)
* [`aio rt:trigger:delete TRIGGERPATH`](#aio-rttriggerdelete-triggerpath)
* [`aio rt:trigger:fire TRIGGERNAME`](#aio-rttriggerfire-triggername)
* [`aio rt:trigger:get TRIGGERPATH`](#aio-rttriggerget-triggerpath)
* [`aio rt:trigger:list`](#aio-rttriggerlist)
* [`aio rt:trigger:ls`](#aio-rttriggerls)
* [`aio rt:trigger:update TRIGGERNAME`](#aio-rttriggerupdate-triggername)
* [`aio runtime`](#aio-runtime)
* [`aio runtime:action`](#aio-runtimeaction)
* [`aio runtime:action:create ACTIONNAME [ACTIONPATH]`](#aio-runtimeactioncreate-actionname-actionpath)
* [`aio runtime:action:del ACTIONNAME`](#aio-runtimeactiondel-actionname)
* [`aio runtime:action:delete ACTIONNAME`](#aio-runtimeactiondelete-actionname)
* [`aio runtime:action:get ACTIONNAME`](#aio-runtimeactionget-actionname)
* [`aio runtime:action:invoke ACTIONNAME`](#aio-runtimeactioninvoke-actionname)
* [`aio runtime:action:list [PACKAGENAME]`](#aio-runtimeactionlist-packagename)
* [`aio runtime:action:ls [PACKAGENAME]`](#aio-runtimeactionls-packagename)
* [`aio runtime:action:update ACTIONNAME [ACTIONPATH]`](#aio-runtimeactionupdate-actionname-actionpath)
* [`aio runtime:actions:list [PACKAGENAME]`](#aio-runtimeactionslist-packagename)
* [`aio runtime:actions:ls [PACKAGENAME]`](#aio-runtimeactionsls-packagename)
* [`aio runtime:activation`](#aio-runtimeactivation)
* [`aio runtime:activation:get [ACTIVATIONID]`](#aio-runtimeactivationget-activationid)
* [`aio runtime:activation:list [ACTIVATION_NAME]`](#aio-runtimeactivationlist-activation_name)
* [`aio runtime:activation:log [ACTIVATIONID]`](#aio-runtimeactivationlog-activationid)
* [`aio runtime:activation:logs [ACTIVATIONID]`](#aio-runtimeactivationlogs-activationid)
* [`aio runtime:activation:ls [ACTIVATION_NAME]`](#aio-runtimeactivationls-activation_name)
* [`aio runtime:activation:result [ACTIVATIONID]`](#aio-runtimeactivationresult-activationid)
* [`aio runtime:activations:list [ACTIVATION_NAME]`](#aio-runtimeactivationslist-activation_name)
* [`aio runtime:activations:ls [ACTIVATION_NAME]`](#aio-runtimeactivationsls-activation_name)
* [`aio runtime:api`](#aio-runtimeapi)
* [`aio runtime:api:create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`](#aio-runtimeapicreate-basepath-relpath-apiverb-action)
* [`aio runtime:api:delete BASEPATHORAPINAME [RELPATH] [APIVERB]`](#aio-runtimeapidelete-basepathorapiname-relpath-apiverb)
* [`aio runtime:api:get BASEPATHORAPINAME`](#aio-runtimeapiget-basepathorapiname)
* [`aio runtime:api:list [BASEPATH] [RELPATH] [APIVERB]`](#aio-runtimeapilist-basepath-relpath-apiverb)
* [`aio runtime:api:ls [BASEPATH] [RELPATH] [APIVERB]`](#aio-runtimeapils-basepath-relpath-apiverb)
* [`aio runtime:deploy`](#aio-runtimedeploy)
* [`aio runtime:deploy:export`](#aio-runtimedeployexport)
* [`aio runtime:deploy:report`](#aio-runtimedeployreport)
* [`aio runtime:deploy:sync`](#aio-runtimedeploysync)
* [`aio runtime:deploy:undeploy`](#aio-runtimedeployundeploy)
* [`aio runtime:deploy:version`](#aio-runtimedeployversion)
* [`aio runtime:list`](#aio-runtimelist)
* [`aio runtime:log [ACTIVATIONID]`](#aio-runtimelog-activationid)
* [`aio runtime:logs [ACTIVATIONID]`](#aio-runtimelogs-activationid)
* [`aio runtime:ls`](#aio-runtimels)
* [`aio runtime:namespace`](#aio-runtimenamespace)
* [`aio runtime:namespace:get`](#aio-runtimenamespaceget)
* [`aio runtime:namespace:lf`](#aio-runtimenamespacelf)
* [`aio runtime:namespace:lf:errors`](#aio-runtimenamespacelferrors)
* [`aio runtime:namespace:lf:get`](#aio-runtimenamespacelfget)
* [`aio runtime:namespace:lf:set`](#aio-runtimenamespacelfset)
* [`aio runtime:namespace:lf:set:adobe-io-runtime`](#aio-runtimenamespacelfsetadobe-io-runtime)
* [`aio runtime:namespace:lf:set:azure-log-analytics`](#aio-runtimenamespacelfsetazure-log-analytics)
* [`aio runtime:namespace:lf:set:splunk-hec`](#aio-runtimenamespacelfsetsplunk-hec)
* [`aio runtime:namespace:list`](#aio-runtimenamespacelist)
* [`aio runtime:namespace:log-forwarding`](#aio-runtimenamespacelog-forwarding)
* [`aio runtime:namespace:log-forwarding:errors`](#aio-runtimenamespacelog-forwardingerrors)
* [`aio runtime:namespace:log-forwarding:get`](#aio-runtimenamespacelog-forwardingget)
* [`aio runtime:namespace:log-forwarding:set`](#aio-runtimenamespacelog-forwardingset)
* [`aio runtime:namespace:log-forwarding:set:adobe-io-runtime`](#aio-runtimenamespacelog-forwardingsetadobe-io-runtime)
* [`aio runtime:namespace:log-forwarding:set:azure-log-analytics`](#aio-runtimenamespacelog-forwardingsetazure-log-analytics)
* [`aio runtime:namespace:log-forwarding:set:splunk-hec`](#aio-runtimenamespacelog-forwardingsetsplunk-hec)
* [`aio runtime:namespace:ls`](#aio-runtimenamespacels)
* [`aio runtime:ns`](#aio-runtimens)
* [`aio runtime:ns:lf`](#aio-runtimenslf)
* [`aio runtime:ns:lf:errors`](#aio-runtimenslferrors)
* [`aio runtime:ns:lf:get`](#aio-runtimenslfget)
* [`aio runtime:ns:lf:set`](#aio-runtimenslfset)
* [`aio runtime:ns:lf:set:adobe-io-runtime`](#aio-runtimenslfsetadobe-io-runtime)
* [`aio runtime:ns:lf:set:azure-log-analytics`](#aio-runtimenslfsetazure-log-analytics)
* [`aio runtime:ns:lf:set:splunk-hec`](#aio-runtimenslfsetsplunk-hec)
* [`aio runtime:ns:list`](#aio-runtimenslist)
* [`aio runtime:ns:log-forwarding`](#aio-runtimenslog-forwarding)
* [`aio runtime:ns:log-forwarding:errors`](#aio-runtimenslog-forwardingerrors)
* [`aio runtime:ns:log-forwarding:get`](#aio-runtimenslog-forwardingget)
* [`aio runtime:ns:log-forwarding:set`](#aio-runtimenslog-forwardingset)
* [`aio runtime:ns:log-forwarding:set:adobe-io-runtime`](#aio-runtimenslog-forwardingsetadobe-io-runtime)
* [`aio runtime:ns:log-forwarding:set:azure-log-analytics`](#aio-runtimenslog-forwardingsetazure-log-analytics)
* [`aio runtime:ns:log-forwarding:set:splunk-hec`](#aio-runtimenslog-forwardingsetsplunk-hec)
* [`aio runtime:ns:ls`](#aio-runtimensls)
* [`aio runtime:package`](#aio-runtimepackage)
* [`aio runtime:package:bind PACKAGENAME BINDPACKAGENAME`](#aio-runtimepackagebind-packagename-bindpackagename)
* [`aio runtime:package:create PACKAGENAME`](#aio-runtimepackagecreate-packagename)
* [`aio runtime:package:delete PACKAGENAME`](#aio-runtimepackagedelete-packagename)
* [`aio runtime:package:get PACKAGENAME`](#aio-runtimepackageget-packagename)
* [`aio runtime:package:list [NAMESPACE]`](#aio-runtimepackagelist-namespace)
* [`aio runtime:package:ls [NAMESPACE]`](#aio-runtimepackagels-namespace)
* [`aio runtime:package:update PACKAGENAME`](#aio-runtimepackageupdate-packagename)
* [`aio runtime:pkg`](#aio-runtimepkg)
* [`aio runtime:pkg:bind PACKAGENAME BINDPACKAGENAME`](#aio-runtimepkgbind-packagename-bindpackagename)
* [`aio runtime:pkg:create PACKAGENAME`](#aio-runtimepkgcreate-packagename)
* [`aio runtime:pkg:delete PACKAGENAME`](#aio-runtimepkgdelete-packagename)
* [`aio runtime:pkg:get PACKAGENAME`](#aio-runtimepkgget-packagename)
* [`aio runtime:pkg:list [NAMESPACE]`](#aio-runtimepkglist-namespace)
* [`aio runtime:pkg:ls [NAMESPACE]`](#aio-runtimepkgls-namespace)
* [`aio runtime:pkg:update PACKAGENAME`](#aio-runtimepkgupdate-packagename)
* [`aio runtime:prop`](#aio-runtimeprop)
* [`aio runtime:prop:get`](#aio-runtimepropget)
* [`aio runtime:prop:set`](#aio-runtimepropset)
* [`aio runtime:prop:unset`](#aio-runtimepropunset)
* [`aio runtime:property`](#aio-runtimeproperty)
* [`aio runtime:property:get`](#aio-runtimepropertyget)
* [`aio runtime:property:set`](#aio-runtimepropertyset)
* [`aio runtime:property:unset`](#aio-runtimepropertyunset)
* [`aio runtime:route`](#aio-runtimeroute)
* [`aio runtime:route:create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`](#aio-runtimeroutecreate-basepath-relpath-apiverb-action)
* [`aio runtime:route:delete BASEPATHORAPINAME [RELPATH] [APIVERB]`](#aio-runtimeroutedelete-basepathorapiname-relpath-apiverb)
* [`aio runtime:route:get BASEPATHORAPINAME`](#aio-runtimerouteget-basepathorapiname)
* [`aio runtime:route:list [BASEPATH] [RELPATH] [APIVERB]`](#aio-runtimeroutelist-basepath-relpath-apiverb)
* [`aio runtime:route:ls [BASEPATH] [RELPATH] [APIVERB]`](#aio-runtimeroutels-basepath-relpath-apiverb)
* [`aio runtime:rule`](#aio-runtimerule)
* [`aio runtime:rule:create NAME TRIGGER ACTION`](#aio-runtimerulecreate-name-trigger-action)
* [`aio runtime:rule:delete NAME`](#aio-runtimeruledelete-name)
* [`aio runtime:rule:disable NAME`](#aio-runtimeruledisable-name)
* [`aio runtime:rule:enable NAME`](#aio-runtimeruleenable-name)
* [`aio runtime:rule:get NAME`](#aio-runtimeruleget-name)
* [`aio runtime:rule:list`](#aio-runtimerulelist)
* [`aio runtime:rule:ls`](#aio-runtimerulels)
* [`aio runtime:rule:status NAME`](#aio-runtimerulestatus-name)
* [`aio runtime:rule:update NAME TRIGGER ACTION`](#aio-runtimeruleupdate-name-trigger-action)
* [`aio runtime:trigger`](#aio-runtimetrigger)
* [`aio runtime:trigger:create TRIGGERNAME`](#aio-runtimetriggercreate-triggername)
* [`aio runtime:trigger:delete TRIGGERPATH`](#aio-runtimetriggerdelete-triggerpath)
* [`aio runtime:trigger:fire TRIGGERNAME`](#aio-runtimetriggerfire-triggername)
* [`aio runtime:trigger:get TRIGGERPATH`](#aio-runtimetriggerget-triggerpath)
* [`aio runtime:trigger:list`](#aio-runtimetriggerlist)
* [`aio runtime:trigger:ls`](#aio-runtimetriggerls)
* [`aio runtime:trigger:update TRIGGERNAME`](#aio-runtimetriggerupdate-triggername)
* [`aio telemetry yes`](#aio-telemetry-yes)
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

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/index.ts)_

## `aio app:add`

Add a new component to an existing Adobe I/O App

```
USAGE
  $ aio app:add [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Add a new component to an existing Adobe I/O App
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/add/index.ts)_

## `aio app:add:action`

Add new actions

```
USAGE
  $ aio app:add:action [-y] [-e <value>] [-s] [--install] [-v] [--version]

FLAGS
  -e, --extension=<value>  Add actions to a specific extension
  -s, --skip-install       [deprecated] Please use --no-install
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add new actions

ALIASES
  $ aio app:add:actions
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/add/action.ts)_

## `aio app:add:actions`

Add new actions

```
USAGE
  $ aio app:add:actions [-y] [-e <value>] [-s] [--install] [-v] [--version]

FLAGS
  -e, --extension=<value>  Add actions to a specific extension
  -s, --skip-install       [deprecated] Please use --no-install
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add new actions

ALIASES
  $ aio app:add:actions
```

## `aio app:add:ci`

Add CI files

```
USAGE
  $ aio app:add:ci [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Add CI files
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/add/ci.ts)_

## `aio app:add:event`

Add a new Adobe I/O Events action

```
USAGE
  $ aio app:add:event [-y] [-e <value>] [-s] [--install] [-v] [--version]

FLAGS
  -e, --extension=<value>  Add actions to a specific extension
  -s, --skip-install       [deprecated] Please use --no-install
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add a new Adobe I/O Events action

ALIASES
  $ aio app:add:events
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/add/event.ts)_

## `aio app:add:events`

Add a new Adobe I/O Events action

```
USAGE
  $ aio app:add:events [-y] [-e <value>] [-s] [--install] [-v] [--version]

FLAGS
  -e, --extension=<value>  Add actions to a specific extension
  -s, --skip-install       [deprecated] Please use --no-install
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add a new Adobe I/O Events action

ALIASES
  $ aio app:add:events
```

## `aio app:add:ext`

Add new extensions or a standalone application to the project

```
USAGE
  $ aio app:add:ext [-y] [-e <value>] [-s] [--install] [-v] [--version]

FLAGS
  -e, --extension=<value>  Specify extensions to add, skips selection prompt
  -s, --skip-install       [deprecated] Please use --no-install
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add new extensions or a standalone application to the project

ALIASES
  $ aio app:add:ext
  $ aio app:add:extensions
```

## `aio app:add:extension`

Add new extensions or a standalone application to the project

```
USAGE
  $ aio app:add:extension [-y] [-e <value>] [-s] [--install] [-v] [--version]

FLAGS
  -e, --extension=<value>  Specify extensions to add, skips selection prompt
  -s, --skip-install       [deprecated] Please use --no-install
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add new extensions or a standalone application to the project

ALIASES
  $ aio app:add:ext
  $ aio app:add:extensions
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/add/extension.ts)_

## `aio app:add:extensions`

Add new extensions or a standalone application to the project

```
USAGE
  $ aio app:add:extensions [-y] [-e <value>] [-s] [--install] [-v] [--version]

FLAGS
  -e, --extension=<value>  Specify extensions to add, skips selection prompt
  -s, --skip-install       [deprecated] Please use --no-install
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add new extensions or a standalone application to the project

ALIASES
  $ aio app:add:ext
  $ aio app:add:extensions
```

## `aio app:add:service`

Subscribe to Services in the current Workspace

```
USAGE
  $ aio app:add:service [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Subscribe to Services in the current Workspace

ALIASES
  $ aio app:add:services
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/add/service.ts)_

## `aio app:add:services`

Subscribe to Services in the current Workspace

```
USAGE
  $ aio app:add:services [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Subscribe to Services in the current Workspace

ALIASES
  $ aio app:add:services
```

## `aio app:add:web-assets`

Add web assets support

```
USAGE
  $ aio app:add:web-assets [-y] [-e <value>] [-s] [--install] [-v] [--version]

FLAGS
  -e, --extension=<value>  Add web-assets to a specific extension
  -s, --skip-install       [deprecated] Please use --no-install
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --[no-]install           [default: true] Run npm installation after files are created
  --version                Show version

DESCRIPTION
  Add web assets support
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/add/web-assets.ts)_

## `aio app:build`

Build an Adobe I/O App

```
USAGE
  $ aio app:build [-v] [--version] [--skip-static] [--skip-web-assets] [--skip-actions] [--actions] [-a
    <value>] [--web-assets] [--force-build] [--content-hash] [--web-optimize] [-e <value>]

FLAGS
  -a, --action=<value>     Build only a specific action, the flags can be specified multiple times, this will set
                           --no-publish
  -e, --extension=<value>  Build only a specific extension point, the flags can be specified multiple times
  -v, --verbose            Verbose output
  --[no-]actions           [default: true] Build actions if any
  --[no-]content-hash      [default: true] Enable content hashing in browser code
  --[no-]force-build       [default: true] Force a build even if one already exists
  --skip-actions           [deprecated] Please use --no-actions
  --skip-static            [deprecated] Please use --no-web-assets
  --skip-web-assets        [deprecated] Please use --no-web-assets
  --version                Show version
  --[no-]web-assets        [default: true] Build web-assets if any
  --web-optimize           [default: false] Enable optimization (minification) of js/css/html

DESCRIPTION
  Build an Adobe I/O App

  This will always force a rebuild unless --no-force-build is set.
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/build.ts)_

## `aio app:config`

Manage app config

```
USAGE
  $ aio app:config [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Manage app config

ALIASES
  $ aio app:config
  $ aio app:config
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/config/index.ts)_

## `aio app:config:get`

Get app config

```
USAGE
  $ aio app:config:get [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Get app config

ALIASES
  $ aio app:config:get
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/config/get/index.ts)_

## `aio app:config:get:lf`

Get log forwarding destination configuration

```
USAGE
  $ aio app:config:get:lf [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio app:config:get:log-forwarding
  $ aio app:config:get:lf
```

## `aio app:config:get:lf:errors`

Get log forwarding errors

```
USAGE
  $ aio app:config:get:lf:errors [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio app:config:get:log-forwarding:errors
  $ aio app:config:get:lf:errors
```

## `aio app:config:get:log-forwarding`

Get log forwarding destination configuration

```
USAGE
  $ aio app:config:get:log-forwarding [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Get log forwarding destination configuration

ALIASES
  $ aio app:config:get:log-forwarding
  $ aio app:config:get:lf
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/config/get/log-forwarding.ts)_

## `aio app:config:get:log-forwarding:errors`

Get log forwarding errors

```
USAGE
  $ aio app:config:get:log-forwarding:errors [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Get log forwarding errors

ALIASES
  $ aio app:config:get:log-forwarding:errors
  $ aio app:config:get:lf:errors
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/config/get/log-forwarding/errors.ts)_

## `aio app:config:set`

Set app config

```
USAGE
  $ aio app:config:set [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Set app config

ALIASES
  $ aio app:config:set
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/config/set/index.ts)_

## `aio app:config:set:lf`

Set log forwarding destination configuration

```
USAGE
  $ aio app:config:set:lf [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Set log forwarding destination configuration

ALIASES
  $ aio app:config:set:log-forwarding
  $ aio app:config:set:lf
```

## `aio app:config:set:log-forwarding`

Set log forwarding destination configuration

```
USAGE
  $ aio app:config:set:log-forwarding [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Set log forwarding destination configuration

ALIASES
  $ aio app:config:set:log-forwarding
  $ aio app:config:set:lf
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/config/set/log-forwarding.ts)_

## `aio app:create [PATH]`

Create a new Adobe I/O App with default parameters

```
USAGE
  $ aio app:create [PATH] [-v] [--version] [-i <value>]

ARGUMENTS
  PATH  [default: .] Path to the app directory

FLAGS
  -i, --import=<value>  Import an Adobe I/O Developer Console configuration file
  -v, --verbose         Verbose output
  --version             Show version

DESCRIPTION
  Create a new Adobe I/O App with default parameters
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/create.ts)_

## `aio app:delete`

Delete a component from an existing Adobe I/O App

```
USAGE
  $ aio app:delete [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Delete a component from an existing Adobe I/O App
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/delete/index.ts)_

## `aio app:delete:action [ACTION-NAME]`

Delete existing actions

```
USAGE
  $ aio app:delete:action [ACTION-NAME] [-y] [-v] [--version]

ARGUMENTS
  ACTION-NAME  Action `pkg/name` to delete, you can specify multiple actions via a comma separated list

FLAGS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version

DESCRIPTION
  Delete existing actions

ALIASES
  $ aio app:delete:actions
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/delete/action.ts)_

## `aio app:delete:actions [ACTION-NAME]`

Delete existing actions

```
USAGE
  $ aio app:delete:actions [ACTION-NAME] [-y] [-v] [--version]

ARGUMENTS
  ACTION-NAME  Action `pkg/name` to delete, you can specify multiple actions via a comma separated list

FLAGS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version

DESCRIPTION
  Delete existing actions

ALIASES
  $ aio app:delete:actions
```

## `aio app:delete:ci`

Delete existing CI files

```
USAGE
  $ aio app:delete:ci [-y] [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version

DESCRIPTION
  Delete existing CI files
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/delete/ci.ts)_

## `aio app:delete:event [EVENT-ACTION-NAME]`

Delete existing Adobe I/O Events actions

```
USAGE
  $ aio app:delete:event [EVENT-ACTION-NAME] [-y] [-v] [--version]

ARGUMENTS
  EVENT-ACTION-NAME  Action `pkg/name` to delete, you can specify multiple actions via a comma separated list

FLAGS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version

DESCRIPTION
  Delete existing Adobe I/O Events actions

ALIASES
  $ aio app:delete:events
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/delete/event.ts)_

## `aio app:delete:events [EVENT-ACTION-NAME]`

Delete existing Adobe I/O Events actions

```
USAGE
  $ aio app:delete:events [EVENT-ACTION-NAME] [-y] [-v] [--version]

ARGUMENTS
  EVENT-ACTION-NAME  Action `pkg/name` to delete, you can specify multiple actions via a comma separated list

FLAGS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version

DESCRIPTION
  Delete existing Adobe I/O Events actions

ALIASES
  $ aio app:delete:events
```

## `aio app:delete:ext`

Add new extensions or a standalone application to the project

```
USAGE
  $ aio app:delete:ext [-y] [--skip-install] [-e <value>] [-v] [--version]

FLAGS
  -e, --extension=<value>  Specify extensions to delete, skips selection prompt
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --skip-install           Skip npm installation after files are created
  --version                Show version

DESCRIPTION
  Add new extensions or a standalone application to the project

ALIASES
  $ aio app:delete:ext
  $ aio app:delete:extensions
```

## `aio app:delete:extension`

Add new extensions or a standalone application to the project

```
USAGE
  $ aio app:delete:extension [-y] [--skip-install] [-e <value>] [-v] [--version]

FLAGS
  -e, --extension=<value>  Specify extensions to delete, skips selection prompt
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --skip-install           Skip npm installation after files are created
  --version                Show version

DESCRIPTION
  Add new extensions or a standalone application to the project

ALIASES
  $ aio app:delete:ext
  $ aio app:delete:extensions
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/delete/extension.ts)_

## `aio app:delete:extensions`

Add new extensions or a standalone application to the project

```
USAGE
  $ aio app:delete:extensions [-y] [--skip-install] [-e <value>] [-v] [--version]

FLAGS
  -e, --extension=<value>  Specify extensions to delete, skips selection prompt
  -v, --verbose            Verbose output
  -y, --yes                Skip questions, and use all default values
  --skip-install           Skip npm installation after files are created
  --version                Show version

DESCRIPTION
  Add new extensions or a standalone application to the project

ALIASES
  $ aio app:delete:ext
  $ aio app:delete:extensions
```

## `aio app:delete:service`

Delete Services in the current Workspace

```
USAGE
  $ aio app:delete:service [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Delete Services in the current Workspace

ALIASES
  $ aio app:delete:services
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/delete/service.ts)_

## `aio app:delete:services`

Delete Services in the current Workspace

```
USAGE
  $ aio app:delete:services [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  Delete Services in the current Workspace

ALIASES
  $ aio app:delete:services
```

## `aio app:delete:web-assets`

Delete existing web assets

```
USAGE
  $ aio app:delete:web-assets [-y] [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version

DESCRIPTION
  Delete existing web assets
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/delete/web-assets.ts)_

## `aio app:deploy`

Build and deploy an Adobe I/O App

```
USAGE
  $ aio app:deploy [-v] [--version] [--skip-build] [--skip-deploy] [--skip-static] [--skip-web-assets]
    [--skip-actions] [--actions] [-a <value>] [--web-assets] [--build] [--force-build] [--content-hash] [--open] [-e
    <value>] [--publish] [--force-publish] [--web-optimize] [--log-forwarding-update]

FLAGS
  -a, --action=<value>          Deploy only a specific action, the flags can be specified multiple times, this will set
                                --no-publish
  -e, --extension=<value>       Deploy only a specific extension, the flags can be specified multiple times
  -v, --verbose                 Verbose output
  --[no-]actions                [default: true] Deploy actions if any
  --[no-]build                  [default: true] Run the build phase before deployment
  --[no-]content-hash           [default: true] Enable content hashing in browser code
  --[no-]force-build            [default: true] Force a build even if one already exists
  --force-publish               Force publish extension(s) to Exchange, delete previously published extension points
  --[no-]log-forwarding-update  [default: true] Update log forwarding configuration on server
  --open                        Open the default web browser after a successful deploy, only valid if your app has a
                                front-end
  --[no-]publish                [default: true] Publish extension(s) to Exchange
  --skip-actions                [deprecated] Please use --no-actions
  --skip-build                  [deprecated] Please use --no-build
  --skip-deploy                 [deprecated] Please use 'aio app build'
  --skip-static                 [deprecated] Please use --no-web-assets
  --skip-web-assets             [deprecated] Please use --no-web-assets
  --version                     Show version
  --[no-]web-assets             [default: true] Deploy web-assets if any
  --web-optimize                [default: false] Enable optimization (minification) of web js/css/html

DESCRIPTION
  Build and deploy an Adobe I/O App

  This will always force a rebuild unless --no-force-build is set.
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/deploy.ts)_

## `aio app:get-url [ACTION]`

Get action URLs

```
USAGE
  $ aio app:get-url [ACTION] [-v] [--version] [--cdn] [-j] [-h] [-y] [--local]

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

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/get-url.ts)_

## `aio app:info`

Display settings/configuration in use by an Adobe I/O App

```
USAGE
  $ aio app:info [-v] [--version] [-j] [-h] [-y] [--mask]

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

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/info.ts)_

## `aio app:init [PATH]`

Create a new Adobe I/O App

```
USAGE
  $ aio app:init [PATH] [-s] [--install] [-v] [--version] [-y] [-i <value>] [--login] [--extensions] [-e
    <value>] [-w <value>] [--confirm-new-workspace]

ARGUMENTS
  PATH  [default: .] Path to the app directory

FLAGS
  -e, --extension=<value>  Extension point(s) to implement
  -i, --import=<value>     Import an Adobe I/O Developer Console configuration file
  -s, --skip-install       [deprecated] Please use --no-install
  -v, --verbose            Verbose output
  -w, --workspace=<value>  [default: Stage] Specify the Adobe Developer Console Workspace to init from, defaults to
                           Stage
  -y, --yes                Skip questions, and use all default values
  --confirm-new-workspace  Skip and confirm prompt for creating a new workspace
  --[no-]extensions        Use --no-extensions to create a blank application that does not integrate with Exchange
  --[no-]install           [default: true] Run npm installation after files are created
  --[no-]login             Login using your Adobe ID for interacting with Adobe I/O Developer Console
  --version                Show version

DESCRIPTION
  Create a new Adobe I/O App
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/init.ts)_

## `aio app:list`

List components for Adobe I/O App

```
USAGE
  $ aio app:list [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --version      Show version

DESCRIPTION
  List components for Adobe I/O App
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/list/index.ts)_

## `aio app:list:ext`

List implemented extensions

```
USAGE
  $ aio app:list:ext [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --version      Show version

DESCRIPTION
  List implemented extensions

ALIASES
  $ aio app:list:ext
  $ aio app:list:extensions
```

## `aio app:list:ext-points`

List all extension points for the selected org

```
USAGE
  $ aio app:list:ext-points [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --version      Show version

DESCRIPTION
  List all extension points for the selected org

ALIASES
  $ aio app:list:ext-points
  $ aio app:list:extension-points
```

## `aio app:list:extension`

List implemented extensions

```
USAGE
  $ aio app:list:extension [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --version      Show version

DESCRIPTION
  List implemented extensions

ALIASES
  $ aio app:list:ext
  $ aio app:list:extensions
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/list/extension.ts)_

## `aio app:list:extension-points`

List all extension points for the selected org

```
USAGE
  $ aio app:list:extension-points [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --version      Show version

DESCRIPTION
  List all extension points for the selected org

ALIASES
  $ aio app:list:ext-points
  $ aio app:list:extension-points
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/list/extension-points.ts)_

## `aio app:list:extensions`

List implemented extensions

```
USAGE
  $ aio app:list:extensions [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --version      Show version

DESCRIPTION
  List implemented extensions

ALIASES
  $ aio app:list:ext
  $ aio app:list:extensions
```

## `aio app:logs`

Fetch logs for an Adobe I/O App

```
USAGE
  $ aio app:logs [-v] [--version] [-l <value>] [-a <value>] [-r] [-t] [-w] [-o]

FLAGS
  -a, --action=<value>  Fetch logs for a specific action
  -l, --limit=<value>   [default: 1] Limit number of activations to fetch logs from ( 1-50 )
  -o, --poll            Fetch logs continuously
  -r, --strip           strip timestamp information and output first line only
  -t, --tail            Fetch logs continuously
  -v, --verbose         Verbose output
  -w, --watch           Fetch logs continuously
  --version             Show version

DESCRIPTION
  Fetch logs for an Adobe I/O App
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/logs.ts)_

## `aio app:run`

Run an Adobe I/O App

```
USAGE
  $ aio app:run [-v] [--version] [--local] [--serve] [--skip-actions] [--actions] [--open] [-e <value>]

FLAGS
  -e, --extension=<value>  Run only a specific extension, this flag can only be specified once
  -v, --verbose            Verbose output
  --[no-]actions           [default: true] Run actions, defaults to true, to skip actions use --no-actions
  --local                  Run/debug actions locally ( requires Docker running )
  --open                   Open the default web browser after a successful run, only valid if your app has a front-end
  --[no-]serve             [default: true] Start frontend server (experimental)
  --skip-actions           [deprecated] Please use --no-actions
  --version                Show version

DESCRIPTION
  Run an Adobe I/O App
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/run.ts)_

## `aio app:test`

Run tests for an Adobe I/O App

```
USAGE
  $ aio app:test [-e <value>] [-a <value>] [--all] [--e2e] [--unit]

FLAGS
  -a, --action=<value>     the action(s) to test
  -e, --extension=<value>  the extension(s) to test
  --all                    run both unit and e2e tests
  --e2e                    run e2e tests
  --unit                   run unit tests

DESCRIPTION
  Run tests for an Adobe I/O App

  If no flags are specified, by default only unit-tests are run.

  For the --action flag, it tries a substring search on the 'package-name/action-name' pair for an action.

  For the --extension flag, it tries a substring search on the 'extension-name' only.

  If the extension has a hook called 'test' in its 'ext.config.yaml', the script specified will be run instead.
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/test.ts)_

## `aio app:undeploy`

Undeploys an Adobe I/O App

```
USAGE
  $ aio app:undeploy [-v] [--version] [--skip-static] [--skip-web-assets] [--skip-actions] [--actions]
    [--web-assets] [-e <value>] [--unpublish] [--force-unpublish]

FLAGS
  -e, --extension=<value>  Undeploy only a specific extension, the flags can be specified multiple times
  -v, --verbose            Verbose output
  --[no-]actions           [default: true] Undeploy actions if any
  --force-unpublish        Force unpublish extension(s) from Exchange, will delete all extension points
  --skip-actions           [deprecated] Please use --no-actions
  --skip-static            [deprecated] Please use --no-web-assets
  --skip-web-assets        [deprecated] Please use --no-web-assets
  --[no-]unpublish         [default: true] Unpublish selected extension(s) from Exchange
  --version                Show version
  --[no-]web-assets        [default: true] Undeploy web-assets if any

DESCRIPTION
  Undeploys an Adobe I/O App
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/undeploy.ts)_

## `aio app:use [CONFIG_FILE_PATH]`

Import an Adobe Developer Console configuration file.

```
USAGE
  $ aio app:use [CONFIG_FILE_PATH] [-v] [--version] [--overwrite] [--merge] [-g] [-w <value>]
    [--confirm-new-workspace] [-w <value>] [--no-service-sync] [--confirm-service-sync] [--no-input]

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

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/8.6.0/src/commands/app/use.ts)_

## `aio auth`

Adobe IMS commands to login and logout.

```
USAGE
  $ aio auth

DESCRIPTION
  Adobe IMS commands to login and logout.

  The main commands are auth:login to get or create an access token and

  auth:logout to invalidate an access token and thus log out from Adobe IMS.

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

_See code: [@adobe/aio-cli-plugin-auth](https://github.com/adobe/aio-cli-plugin-auth/blob/2.6.0/src/commands/auth/index.ts)_

## `aio auth:ctx`

Manage Adobe IMS contexts.

```
USAGE
  $ aio auth:ctx [--debug <value>] [-v] [-l] [-g] [-c <value>] [--list] [--value] [-s <value>]

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

_See code: [@adobe/aio-cli-plugin-auth](https://github.com/adobe/aio-cli-plugin-auth/blob/2.6.0/src/commands/auth/ctx.ts)_

## `aio auth:login`

Log in with a certain Adobe IMS context and returns the access token.

```
USAGE
  $ aio auth:login [--debug <value>] [-v] [-l] [-g] [-c <value>] [-f] [-d] [-b] [-o]

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

_See code: [@adobe/aio-cli-plugin-auth](https://github.com/adobe/aio-cli-plugin-auth/blob/2.6.0/src/commands/auth/login.ts)_

## `aio auth:logout`

Log out the current or a named Adobe IMS context.

```
USAGE
  $ aio auth:logout [--debug <value>] [-v] [-l] [-g] [-c <value>] [-f]

FLAGS
  -c, --ctx=<value>  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -f, --force        Invalidate the refresh token as well as all access tokens.
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

_See code: [@adobe/aio-cli-plugin-auth](https://github.com/adobe/aio-cli-plugin-auth/blob/2.6.0/src/commands/auth/logout.ts)_

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

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.3.0/src/commands/autocomplete/index.ts)_

## `aio certificate`

Generate or verify a certificate for use with Adobe I/O

```
USAGE
  $ aio certificate

DESCRIPTION
  Generate or verify a certificate for use with Adobe I/O
```

_See code: [@adobe/aio-cli-plugin-certificate](https://github.com/adobe/aio-cli-plugin-certificate/blob/0.3.1/src/commands/certificate/index.js)_

## `aio certificate:generate`

Generate a new private/public key pair

```
USAGE
  $ aio certificate:generate [--keyout <value>] [--out <value>] [-n <value>] [-c <value>] [-s <value>] [-l <value>] [-o
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

_See code: [@adobe/aio-cli-plugin-certificate](https://github.com/adobe/aio-cli-plugin-certificate/blob/0.3.1/src/commands/certificate/generate.js)_

## `aio certificate:verify FILE`

Verify a certificate for use with Adobe I/O

```
USAGE
  $ aio certificate:verify [FILE] [--days <value>]

ARGUMENTS
  FILE  file path to certificate to verify

FLAGS
  --days=<value>  +- is certificate valid in --days

DESCRIPTION
  Verify a certificate for use with Adobe I/O

  Verifies that the certificate is valid, and/or will not expire in [--days] days from now.
```

_See code: [@adobe/aio-cli-plugin-certificate](https://github.com/adobe/aio-cli-plugin-certificate/blob/0.3.1/src/commands/certificate/verify.js)_

## `aio config`

list, get, set, delete, and edit persistent configuration data

```
USAGE
  $ aio config [-l] [-g] [-j] [-y] [-e] [--verbose]

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
  $ aio config:ls

EXAMPLES
  $ aio config:list

  $ aio config:get KEY

  $ aio config:set KEY VALUE

  $ aio config:delete KEY

  $ aio config:clear
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/3.0.1/src/commands/config/index.js)_

## `aio config:clear`

clears all persistent config values

```
USAGE
  $ aio config:clear [-l] [-g] [-f]

FLAGS
  -f, --force   do not prompt for confirmation
  -g, --global  global config
  -l, --local   local config

DESCRIPTION
  clears all persistent config values
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/3.0.1/src/commands/config/clear.js)_

## `aio config:del KEYS...`

deletes persistent config values

```
USAGE
  $ aio config:del [KEYS...] [-l] [-g]

FLAGS
  -g, --global  global config
  -l, --local   local config

DESCRIPTION
  deletes persistent config values

ALIASES
  $ aio config:del
  $ aio config:rm
```

## `aio config:delete KEYS...`

deletes persistent config values

```
USAGE
  $ aio config:delete [KEYS...] [-l] [-g]

FLAGS
  -g, --global  global config
  -l, --local   local config

DESCRIPTION
  deletes persistent config values

ALIASES
  $ aio config:del
  $ aio config:rm
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/3.0.1/src/commands/config/delete.js)_

## `aio config:edit`

edit config file

```
USAGE
  $ aio config:edit [-l] [-g]

FLAGS
  -g, --global  global config
  -l, --local   local config

DESCRIPTION
  edit config file
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/3.0.1/src/commands/config/edit.js)_

## `aio config:get KEY`

gets a persistent config value

```
USAGE
  $ aio config:get [KEY] [-l] [-g] [-j] [-y] [-e]

FLAGS
  -e, --env     environment variables
  -g, --global  global config
  -j, --json    output in json
  -l, --local   local config
  -y, --yaml    output in yaml

DESCRIPTION
  gets a persistent config value
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/3.0.1/src/commands/config/get.js)_

## `aio config:list`

lists all persistent config values

```
USAGE
  $ aio config:list [-l] [-g] [-j] [-y] [-e] [--verbose]

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
  $ aio config:ls
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/3.0.1/src/commands/config/list.js)_

## `aio config:ls`

list, get, set, delete, and edit persistent configuration data

```
USAGE
  $ aio config:ls [-l] [-g] [-j] [-y] [-e] [--verbose]

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
  $ aio config:ls

EXAMPLES
  $ aio config:list

  $ aio config:get KEY

  $ aio config:set KEY VALUE

  $ aio config:delete KEY

  $ aio config:clear
```

## `aio config:rm KEYS...`

deletes persistent config values

```
USAGE
  $ aio config:rm [KEYS...] [-l] [-g]

FLAGS
  -g, --global  global config
  -l, --local   local config

DESCRIPTION
  deletes persistent config values

ALIASES
  $ aio config:del
  $ aio config:rm
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

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/3.0.1/src/commands/config/set.js)_

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

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.4.2/src/commands/console/index.js)_

## `aio console:org`

Manage your Adobe I/O Console Organizations

```
USAGE
  $ aio console:org [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Manage your Adobe I/O Console Organizations
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.4.2/src/commands/console/org/index.js)_

## `aio console:org:list`

List your Organizations

```
USAGE
  $ aio console:org:list [--help] [-j] [-y]

FLAGS
  -j, --json  Output json
  -y, --yml   Output yml
  --help      Show help

DESCRIPTION
  List your Organizations

ALIASES
  $ aio console:org:ls
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.4.2/src/commands/console/org/list.js)_

## `aio console:org:ls`

List your Organizations

```
USAGE
  $ aio console:org:ls [--help] [-j] [-y]

FLAGS
  -j, --json  Output json
  -y, --yml   Output yml
  --help      Show help

DESCRIPTION
  List your Organizations

ALIASES
  $ aio console:org:ls
```

## `aio console:org:sel [ORGCODE]`

Select an Organization

```
USAGE
  $ aio console:org:sel [ORGCODE] [--help]

ARGUMENTS
  ORGCODE  Adobe Developer Console Org code

FLAGS
  --help  Show help

DESCRIPTION
  Select an Organization

ALIASES
  $ aio console:org:sel
```

## `aio console:org:select [ORGCODE]`

Select an Organization

```
USAGE
  $ aio console:org:select [ORGCODE] [--help]

ARGUMENTS
  ORGCODE  Adobe Developer Console Org code

FLAGS
  --help  Show help

DESCRIPTION
  Select an Organization

ALIASES
  $ aio console:org:sel
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.4.2/src/commands/console/org/select.js)_

## `aio console:project`

Manage your Adobe I/O Console Projects

```
USAGE
  $ aio console:project [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Manage your Adobe I/O Console Projects
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.4.2/src/commands/console/project/index.js)_

## `aio console:project:list`

List your Projects for the selected Organization

```
USAGE
  $ aio console:project:list [--help] [--orgId <value>] [-j] [-y]

FLAGS
  -j, --json       Output json
  -y, --yml        Output yml
  --help           Show help
  --orgId=<value>  OrgID for listing projects

DESCRIPTION
  List your Projects for the selected Organization

ALIASES
  $ aio console:project:ls
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.4.2/src/commands/console/project/list.js)_

## `aio console:project:ls`

List your Projects for the selected Organization

```
USAGE
  $ aio console:project:ls [--help] [--orgId <value>] [-j] [-y]

FLAGS
  -j, --json       Output json
  -y, --yml        Output yml
  --help           Show help
  --orgId=<value>  OrgID for listing projects

DESCRIPTION
  List your Projects for the selected Organization

ALIASES
  $ aio console:project:ls
```

## `aio console:project:sel [PROJECTIDORNAME]`

Select a Project for the selected Organization

```
USAGE
  $ aio console:project:sel [PROJECTIDORNAME] [--help] [--orgId <value>]

ARGUMENTS
  PROJECTIDORNAME  Adobe Developer Console Project id or Project name

FLAGS
  --help           Show help
  --orgId=<value>  Organization id of the Console Project to select

DESCRIPTION
  Select a Project for the selected Organization

ALIASES
  $ aio console:project:sel
```

## `aio console:project:select [PROJECTIDORNAME]`

Select a Project for the selected Organization

```
USAGE
  $ aio console:project:select [PROJECTIDORNAME] [--help] [--orgId <value>]

ARGUMENTS
  PROJECTIDORNAME  Adobe Developer Console Project id or Project name

FLAGS
  --help           Show help
  --orgId=<value>  Organization id of the Console Project to select

DESCRIPTION
  Select a Project for the selected Organization

ALIASES
  $ aio console:project:sel
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.4.2/src/commands/console/project/select.js)_

## `aio console:where`

Show the currently selected Organization, Project and Workspace

```
USAGE
  $ aio console:where [--help] [-j] [-y]

FLAGS
  -j, --json  Output json
  -y, --yml   Output yml
  --help      Show help

DESCRIPTION
  Show the currently selected Organization, Project and Workspace

ALIASES
  $ aio where
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.4.2/src/commands/console/where/index.js)_

## `aio console:workspace`

Manage your Adobe I/O Console Workspaces

```
USAGE
  $ aio console:workspace [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Manage your Adobe I/O Console Workspaces

ALIASES
  $ aio console:ws
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.4.2/src/commands/console/workspace/index.js)_

## `aio console:workspace:dl [DESTINATION]`

Downloads the configuration for the selected Workspace

```
USAGE
  $ aio console:workspace:dl [DESTINATION] [--help] [--orgId <value>] [--projectId <value>] [--workspaceId <value>]

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
  $ aio console:workspace:dl
  $ aio console:ws:download
  $ aio console:ws:dl
```

## `aio console:workspace:download [DESTINATION]`

Downloads the configuration for the selected Workspace

```
USAGE
  $ aio console:workspace:download [DESTINATION] [--help] [--orgId <value>] [--projectId <value>] [--workspaceId
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
  $ aio console:workspace:dl
  $ aio console:ws:download
  $ aio console:ws:dl
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.4.2/src/commands/console/workspace/download.js)_

## `aio console:workspace:list`

List your Workspaces for your selected Project

```
USAGE
  $ aio console:workspace:list [--help] [-j] [-y] [--orgId <value>] [--projectId <value>]

FLAGS
  -j, --json           Output json
  -y, --yml            Output yml
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspaces to list
  --projectId=<value>  Project id of the Console Workspaces to list

DESCRIPTION
  List your Workspaces for your selected Project

ALIASES
  $ aio console:workspace:ls
  $ aio console:ws:list
  $ aio console:ws:ls
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.4.2/src/commands/console/workspace/list.js)_

## `aio console:workspace:ls`

List your Workspaces for your selected Project

```
USAGE
  $ aio console:workspace:ls [--help] [-j] [-y] [--orgId <value>] [--projectId <value>]

FLAGS
  -j, --json           Output json
  -y, --yml            Output yml
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspaces to list
  --projectId=<value>  Project id of the Console Workspaces to list

DESCRIPTION
  List your Workspaces for your selected Project

ALIASES
  $ aio console:workspace:ls
  $ aio console:ws:list
  $ aio console:ws:ls
```

## `aio console:workspace:sel [WORKSPACEIDORNAME]`

Select a Workspace for the selected Project

```
USAGE
  $ aio console:workspace:sel [WORKSPACEIDORNAME] [--help] [--orgId <value>] [--projectId <value>]

ARGUMENTS
  WORKSPACEIDORNAME  Adobe Developer Console Workspace id or Workspace name

FLAGS
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspace to select
  --projectId=<value>  Project id of the Console Workspace to select

DESCRIPTION
  Select a Workspace for the selected Project

ALIASES
  $ aio console:workspace:sel
  $ aio console:ws:select
  $ aio console:ws:sel
```

## `aio console:workspace:select [WORKSPACEIDORNAME]`

Select a Workspace for the selected Project

```
USAGE
  $ aio console:workspace:select [WORKSPACEIDORNAME] [--help] [--orgId <value>] [--projectId <value>]

ARGUMENTS
  WORKSPACEIDORNAME  Adobe Developer Console Workspace id or Workspace name

FLAGS
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspace to select
  --projectId=<value>  Project id of the Console Workspace to select

DESCRIPTION
  Select a Workspace for the selected Project

ALIASES
  $ aio console:workspace:sel
  $ aio console:ws:select
  $ aio console:ws:sel
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.4.2/src/commands/console/workspace/select.js)_

## `aio console:ws`

Manage your Adobe I/O Console Workspaces

```
USAGE
  $ aio console:ws [--help]

FLAGS
  --help  Show help

DESCRIPTION
  Manage your Adobe I/O Console Workspaces

ALIASES
  $ aio console:ws
```

## `aio console:ws:dl [DESTINATION]`

Downloads the configuration for the selected Workspace

```
USAGE
  $ aio console:ws:dl [DESTINATION] [--help] [--orgId <value>] [--projectId <value>] [--workspaceId <value>]

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
  $ aio console:workspace:dl
  $ aio console:ws:download
  $ aio console:ws:dl
```

## `aio console:ws:download [DESTINATION]`

Downloads the configuration for the selected Workspace

```
USAGE
  $ aio console:ws:download [DESTINATION] [--help] [--orgId <value>] [--projectId <value>] [--workspaceId <value>]

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
  $ aio console:workspace:dl
  $ aio console:ws:download
  $ aio console:ws:dl
```

## `aio console:ws:list`

List your Workspaces for your selected Project

```
USAGE
  $ aio console:ws:list [--help] [-j] [-y] [--orgId <value>] [--projectId <value>]

FLAGS
  -j, --json           Output json
  -y, --yml            Output yml
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspaces to list
  --projectId=<value>  Project id of the Console Workspaces to list

DESCRIPTION
  List your Workspaces for your selected Project

ALIASES
  $ aio console:workspace:ls
  $ aio console:ws:list
  $ aio console:ws:ls
```

## `aio console:ws:ls`

List your Workspaces for your selected Project

```
USAGE
  $ aio console:ws:ls [--help] [-j] [-y] [--orgId <value>] [--projectId <value>]

FLAGS
  -j, --json           Output json
  -y, --yml            Output yml
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspaces to list
  --projectId=<value>  Project id of the Console Workspaces to list

DESCRIPTION
  List your Workspaces for your selected Project

ALIASES
  $ aio console:workspace:ls
  $ aio console:ws:list
  $ aio console:ws:ls
```

## `aio console:ws:sel [WORKSPACEIDORNAME]`

Select a Workspace for the selected Project

```
USAGE
  $ aio console:ws:sel [WORKSPACEIDORNAME] [--help] [--orgId <value>] [--projectId <value>]

ARGUMENTS
  WORKSPACEIDORNAME  Adobe Developer Console Workspace id or Workspace name

FLAGS
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspace to select
  --projectId=<value>  Project id of the Console Workspace to select

DESCRIPTION
  Select a Workspace for the selected Project

ALIASES
  $ aio console:workspace:sel
  $ aio console:ws:select
  $ aio console:ws:sel
```

## `aio console:ws:select [WORKSPACEIDORNAME]`

Select a Workspace for the selected Project

```
USAGE
  $ aio console:ws:select [WORKSPACEIDORNAME] [--help] [--orgId <value>] [--projectId <value>]

ARGUMENTS
  WORKSPACEIDORNAME  Adobe Developer Console Workspace id or Workspace name

FLAGS
  --help               Show help
  --orgId=<value>      Organization id of the Console Workspace to select
  --projectId=<value>  Project id of the Console Workspace to select

DESCRIPTION
  Select a Workspace for the selected Project

ALIASES
  $ aio console:workspace:sel
  $ aio console:ws:select
  $ aio console:ws:sel
```

## `aio context`

Manage Adobe IMS contexts.

```
USAGE
  $ aio context [--debug <value>] [-v] [-l] [-g] [-c <value>] [--list] [--value] [-s <value>]

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
  $ aio ctx [--debug <value>] [-v] [-l] [-g] [-c <value>] [--list] [--value] [-s <value>]

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
  $ aio plugins:discover
```

_See code: [src/commands/discover.ts](https://github.com/adobe/aio-cli/blob/8.3.0/src/commands/discover.ts)_

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

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/index.js)_

## `aio event:eventmetadata`

Manage your Adobe I/O Events Providers' Event Metadata

```
USAGE
  $ aio event:eventmetadata [--help] [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Manage your Adobe I/O Events Providers' Event Metadata
```

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/eventmetadata/index.js)_

## `aio event:eventmetadata:create PROVIDERID`

Create an Event Metadata for a Provider

```
USAGE
  $ aio event:eventmetadata:create [PROVIDERID] [--help] [-v] [--version] [-j] [-y]

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

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/eventmetadata/create.js)_

## `aio event:eventmetadata:delete PROVIDERID [EVENTCODE]`

Delete Event Metadata for a Provider

```
USAGE
  $ aio event:eventmetadata:delete [PROVIDERID] [EVENTCODE] [--help] [-v] [--version]

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

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/eventmetadata/delete.js)_

## `aio event:eventmetadata:get PROVIDERID EVENTCODE`

Get details of an Event Code of a Provider

```
USAGE
  $ aio event:eventmetadata:get [PROVIDERID] [EVENTCODE] [--help] [-v] [--version] [-j] [-y]

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

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/eventmetadata/get.js)_

## `aio event:eventmetadata:list PROVIDERID`

List all Event Metadata for a Provider

```
USAGE
  $ aio event:eventmetadata:list [PROVIDERID] [--help] [-v] [--version] [-j] [-y]

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
  $ aio event:eventmetadata:ls
```

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/eventmetadata/list.js)_

## `aio event:eventmetadata:ls PROVIDERID`

List all Event Metadata for a Provider

```
USAGE
  $ aio event:eventmetadata:ls [PROVIDERID] [--help] [-v] [--version] [-j] [-y]

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
  $ aio event:eventmetadata:ls
```

## `aio event:eventmetadata:update PROVIDERID EVENTCODE`

Update an Event Metadata for a Provider

```
USAGE
  $ aio event:eventmetadata:update [PROVIDERID] [EVENTCODE] [--help] [-v] [--version] [-j] [-y]

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

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/eventmetadata/update.js)_

## `aio event:provider`

Manage your Adobe I/O Events Providers

```
USAGE
  $ aio event:provider [--help] [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Manage your Adobe I/O Events Providers
```

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/provider/index.js)_

## `aio event:provider:create`

Create a new Provider

```
USAGE
  $ aio event:provider:create [--help] [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Create a new Provider
```

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/provider/create.js)_

## `aio event:provider:delete PROVIDERID`

Delete Provider by id

```
USAGE
  $ aio event:provider:delete [PROVIDERID] [--help] [-v] [--version]

ARGUMENTS
  PROVIDERID  The requested provider ID

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Delete Provider by id
```

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/provider/delete.js)_

## `aio event:provider:get PROVIDERID`

Get details of Provider by id

```
USAGE
  $ aio event:provider:get [PROVIDERID] [--help] [-v] [--version] [--fetchEventMetadata] [-j] [-y]

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

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/provider/get.js)_

## `aio event:provider:list`

Get list of all Providers for the Organization

```
USAGE
  $ aio event:provider:list [--help] [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Get list of all Providers for the Organization

ALIASES
  $ aio event:provider:ls
```

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/provider/list.js)_

## `aio event:provider:ls`

Get list of all Providers for the Organization

```
USAGE
  $ aio event:provider:ls [--help] [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  Get list of all Providers for the Organization

ALIASES
  $ aio event:provider:ls
```

## `aio event:provider:update PROVIDERID`

Update an existing Provider

```
USAGE
  $ aio event:provider:update [PROVIDERID] [--help] [-v] [--version] [-j] [-y]

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

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/provider/update.js)_

## `aio event:reg:create BODYJSONFILE`

Create a new Event Registration in your Workspace

```
USAGE
  $ aio event:reg:create [BODYJSONFILE] [--help] [-v] [--version] [-j] [-y]

ARGUMENTS
  BODYJSONFILE
      Path to a file in JSON format with the information to create a new Event Registration.
      The JSON should follow the following format:
      {
      "name": "<event registration name>",
      "description": "<event registration description>",
      "delivery_type": "WEBHOOK|WEBHOOK_BATCH|JOURNAL",
      "webhook_url": "<webhook URL responding to challenge>"
      "events_of_interest": [{
      "provider_id": "<event provider id>"
      "event_code": "<event provider event_code metadata>"
      }, { <...more events> }]
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
  $ aio event:reg:create
```

## `aio event:reg:delete REGISTRATIONID`

Delete Registration

```
USAGE
  $ aio event:reg:delete [REGISTRATIONID] [--help] [-v] [--version]

ARGUMENTS
  REGISTRATIONID  The requested registration ID

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Delete Registration

ALIASES
  $ aio event:reg:delete
```

## `aio event:reg:get REGISTRATIONID`

Get an Event Registration in your Workspace

```
USAGE
  $ aio event:reg:get [REGISTRATIONID] [--help] [-v] [--version] [-j] [-y]

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
  $ aio event:reg:get
```

## `aio event:reg:list`

List your Event Registrations in your Workspace

```
USAGE
  $ aio event:reg:list [--help] [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  List your Event Registrations in your Workspace

ALIASES
  $ aio event:registration:ls
  $ aio event:reg:list
  $ aio event:reg:ls
```

## `aio event:reg:ls`

List your Event Registrations in your Workspace

```
USAGE
  $ aio event:reg:ls [--help] [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  List your Event Registrations in your Workspace

ALIASES
  $ aio event:registration:ls
  $ aio event:reg:list
  $ aio event:reg:ls
```

## `aio event:registration`

Manage your Adobe I/O Events Registrations

```
USAGE
  $ aio event:registration [--help] [-v] [--version]

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Manage your Adobe I/O Events Registrations
```

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/registration/index.js)_

## `aio event:registration:create BODYJSONFILE`

Create a new Event Registration in your Workspace

```
USAGE
  $ aio event:registration:create [BODYJSONFILE] [--help] [-v] [--version] [-j] [-y]

ARGUMENTS
  BODYJSONFILE
      Path to a file in JSON format with the information to create a new Event Registration.
      The JSON should follow the following format:
      {
      "name": "<event registration name>",
      "description": "<event registration description>",
      "delivery_type": "WEBHOOK|WEBHOOK_BATCH|JOURNAL",
      "webhook_url": "<webhook URL responding to challenge>"
      "events_of_interest": [{
      "provider_id": "<event provider id>"
      "event_code": "<event provider event_code metadata>"
      }, { <...more events> }]
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
  $ aio event:reg:create
```

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/registration/create.js)_

## `aio event:registration:delete REGISTRATIONID`

Delete Registration

```
USAGE
  $ aio event:registration:delete [REGISTRATIONID] [--help] [-v] [--version]

ARGUMENTS
  REGISTRATIONID  The requested registration ID

FLAGS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

DESCRIPTION
  Delete Registration

ALIASES
  $ aio event:reg:delete
```

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/registration/delete.js)_

## `aio event:registration:get REGISTRATIONID`

Get an Event Registration in your Workspace

```
USAGE
  $ aio event:registration:get [REGISTRATIONID] [--help] [-v] [--version] [-j] [-y]

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
  $ aio event:reg:get
```

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/registration/get.js)_

## `aio event:registration:list`

List your Event Registrations in your Workspace

```
USAGE
  $ aio event:registration:list [--help] [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  List your Event Registrations in your Workspace

ALIASES
  $ aio event:registration:ls
  $ aio event:reg:list
  $ aio event:reg:ls
```

_See code: [@adobe/aio-cli-plugin-events](https://github.com/adobe/aio-cli-plugin-events/blob/v1.1.6/src/commands/event/registration/list.js)_

## `aio event:registration:ls`

List your Event Registrations in your Workspace

```
USAGE
  $ aio event:registration:ls [--help] [-v] [--version] [-j] [-y]

FLAGS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

DESCRIPTION
  List your Event Registrations in your Workspace

ALIASES
  $ aio event:registration:ls
  $ aio event:reg:list
  $ aio event:reg:ls
```

## `aio help [COMMAND]`

display help for aio

```
USAGE
  $ aio help [COMMAND] [--all]

ARGUMENTS
  COMMAND  command to show help for

FLAGS
  --all  see all commands in CLI

DESCRIPTION
  display help for aio
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.3.1/src/commands/help.ts)_

## `aio info`

Display dev environment version information

```
USAGE
  $ aio info [-j] [-y]

FLAGS
  -j, --json  output raw json
  -y, --yml   output yml

DESCRIPTION
  Display dev environment version information
```

_See code: [@adobe/aio-cli-plugin-info](https://github.com/adobe/aio-cli-plugin-info/blob/2.1.0/src/commands/info.js)_

## `aio login`

Log in with a certain Adobe IMS context and returns the access token.

```
USAGE
  $ aio login [--debug <value>] [-v] [-l] [-g] [-c <value>] [-f] [-d] [-b] [-o]

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
  $ aio logout [--debug <value>] [-v] [-l] [-g] [-c <value>] [-f]

FLAGS
  -c, --ctx=<value>  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -f, --force        Invalidate the refresh token as well as all access tokens.
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

## `aio plugins`

list installed plugins

```
USAGE
  $ aio plugins [--core]

FLAGS
  --core  show core plugins

DESCRIPTION
  list installed plugins

EXAMPLES
  $ aio plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.11/src/commands/plugins/index.ts)_

## `aio plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ aio plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

FLAGS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  installs a plugin into the CLI

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

## `aio plugins:discover`

Discover plugins to install

```
USAGE
  $ aio plugins:discover [-i] [-f date|name] [-o asc|desc]

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
  $ aio plugins:discover
```

## `aio plugins:inspect PLUGIN...`

displays installation properties of a plugin

```
USAGE
  $ aio plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] plugin to inspect

FLAGS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  displays installation properties of a plugin

EXAMPLES
  $ aio plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.11/src/commands/plugins/inspect.ts)_

## `aio plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ aio plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

FLAGS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  installs a plugin into the CLI

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.11/src/commands/plugins/install.ts)_

## `aio plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ aio plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  links a plugin into the CLI for development

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ aio plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.11/src/commands/plugins/link.ts)_

## `aio plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ aio plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  removes a plugin from the CLI

ALIASES
  $ aio plugins:unlink
  $ aio plugins:remove
```

## `aio plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ aio plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  removes a plugin from the CLI

ALIASES
  $ aio plugins:unlink
  $ aio plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.11/src/commands/plugins/uninstall.ts)_

## `aio plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ aio plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  removes a plugin from the CLI

ALIASES
  $ aio plugins:unlink
  $ aio plugins:remove
```

## `aio plugins:update`

update installed plugins

```
USAGE
  $ aio plugins:update [-h] [-v]

FLAGS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  update installed plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.11/src/commands/plugins/update.ts)_

## `aio report`

Report an issue with the CLI or submit a feature request

```
USAGE
  $ aio report [-b] [-f]

FLAGS
  -b, --bug      report an issue
  -f, --feature  request a feature

DESCRIPTION
  Report an issue with the CLI or submit a feature request
```

_See code: [@adobe/aio-cli-plugin-info](https://github.com/adobe/aio-cli-plugin-info/blob/2.1.0/src/commands/report.js)_

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

_See code: [src/commands/rollback.ts](https://github.com/adobe/aio-cli/blob/8.3.0/src/commands/rollback.ts)_

## `aio rt`

Execute runtime commands

```
USAGE
  $ aio rt [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help]

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
  Execute runtime commands

ALIASES
  $ aio rt
```

## `aio rt:action`

Manage your actions

```
USAGE
  $ aio rt:action [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help]

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
  Manage your actions

ALIASES
  $ aio rt:action
```

## `aio rt:action:create ACTIONNAME [ACTIONPATH]`

Creates an Action

```
USAGE
  $ aio rt:action:create [ACTIONNAME] [ACTIONPATH] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost
    <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [--copy <value>] [-e <value>]
    [--web true|yes|false|no|raw] [--web-secure <value>] [-P <value>] [-E <value>] [-t <value>] [-m <value>] [-l
    <value>] [--kind <value>] [-a <value>] [-A <value>] [--sequence <value>] [--docker <value>] [--main <value>]
    [--binary] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -E, --env-file=<value>         FILE containing environment variables in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -e, --env=<value>              environment values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -l, --logsize=<value>          the maximum log size LIMIT in MB for the action (default 10)
  -m, --memory=<value>           the maximum memory LIMIT in MB for the action (default 256)
  -p, --param=<value>            parameter values in KEY VALUE format
  -t, --timeout=<value>          the timeout LIMIT in milliseconds after which the action is terminated (default 60000)
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
  $ aio rt:action:create
```

## `aio rt:action:del ACTIONNAME`

Deletes an Action

```
USAGE
  $ aio rt:action:del [ACTIONNAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
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
  $ aio runtime:action:del
  $ aio rt:action:delete
  $ aio rt:action:del
```

## `aio rt:action:delete ACTIONNAME`

Deletes an Action

```
USAGE
  $ aio rt:action:delete [ACTIONNAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
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
  $ aio runtime:action:del
  $ aio rt:action:delete
  $ aio rt:action:del
```

## `aio rt:action:get ACTIONNAME`

Retrieves an Action

```
USAGE
  $ aio rt:action:get [ACTIONNAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
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
  $ aio rt:action:get
```

## `aio rt:action:invoke ACTIONNAME`

Invokes an Action

```
USAGE
  $ aio rt:action:invoke [ACTIONNAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-b] [-r]

FLAGS
  -P, --param-file=<value>  FILE containing parameter values in JSON format
  -b, --blocking            blocking invoke
  -i, --insecure            bypass certificate check
  -p, --param=<value>       parameter values in KEY VALUE format
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
  $ aio rt:action:invoke
```

## `aio rt:action:list [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio rt:action:list [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions
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
  $ aio runtime:action:ls
  $ aio runtime:actions:list
  $ aio runtime:actions:ls
  $ aio rt:action:list
  $ aio rt:actions:list
  $ aio rt:action:ls
  $ aio rt:actions:ls
```

## `aio rt:action:ls [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio rt:action:ls [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions
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
  $ aio runtime:action:ls
  $ aio runtime:actions:list
  $ aio runtime:actions:ls
  $ aio rt:action:list
  $ aio rt:actions:list
  $ aio rt:action:ls
  $ aio rt:actions:ls
```

## `aio rt:action:update ACTIONNAME [ACTIONPATH]`

Updates an Action

```
USAGE
  $ aio rt:action:update [ACTIONNAME] [ACTIONPATH] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost
    <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [--copy <value>] [-e <value>]
    [--web true|yes|false|no|raw] [--web-secure <value>] [-P <value>] [-E <value>] [-t <value>] [-m <value>] [-l
    <value>] [--kind <value>] [-a <value>] [-A <value>] [--sequence <value>] [--docker <value>] [--main <value>]
    [--binary] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -E, --env-file=<value>         FILE containing environment variables in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -e, --env=<value>              environment values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -l, --logsize=<value>          the maximum log size LIMIT in MB for the action (default 10)
  -m, --memory=<value>           the maximum memory LIMIT in MB for the action (default 256)
  -p, --param=<value>            parameter values in KEY VALUE format
  -t, --timeout=<value>          the timeout LIMIT in milliseconds after which the action is terminated (default 60000)
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
  $ aio rt:action:update
```

## `aio rt:actions:list [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio rt:actions:list [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions
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
  $ aio runtime:action:ls
  $ aio runtime:actions:list
  $ aio runtime:actions:ls
  $ aio rt:action:list
  $ aio rt:actions:list
  $ aio rt:action:ls
  $ aio rt:actions:ls
```

## `aio rt:actions:ls [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio rt:actions:ls [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions
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
  $ aio runtime:action:ls
  $ aio runtime:actions:list
  $ aio runtime:actions:ls
  $ aio rt:action:list
  $ aio rt:actions:list
  $ aio rt:action:ls
  $ aio rt:actions:ls
```

## `aio rt:activation`

Manage your activations

```
USAGE
  $ aio rt:activation [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help]

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
  Manage your activations

ALIASES
  $ aio rt:activation
```

## `aio rt:activation:get [ACTIVATIONID]`

Retrieves an Activation

```
USAGE
  $ aio rt:activation:get [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
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
  $ aio rt:activation:get
```

## `aio rt:activation:list [ACTIVATION_NAME]`

Lists all the Activations

```
USAGE
  $ aio rt:activation:list [ACTIVATION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations
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
  $ aio runtime:activations:list
  $ aio runtime:activation:ls
  $ aio runtime:activations:ls
  $ aio rt:activation:list
  $ aio rt:activation:ls
  $ aio rt:activations:list
  $ aio rt:activations:ls
```

## `aio rt:activation:log [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio rt:activation:log [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-a <value>] [-m] [-p <value>] [-d] [-l] [-r] [--limit
    <value>] [-t] [-w] [-o]

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
  --limit=<value>        return logs only from last LIMIT number of activations
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime:activation:log
  $ aio runtime:log
  $ aio runtime:logs
  $ aio rt:activation:logs
  $ aio rt:activation:log
  $ aio rt:log
  $ aio rt:logs
```

## `aio rt:activation:logs [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio rt:activation:logs [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-a <value>] [-m] [-p <value>] [-d] [-l] [-r] [--limit
    <value>] [-t] [-w] [-o]

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
  --limit=<value>        return logs only from last LIMIT number of activations
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime:activation:log
  $ aio runtime:log
  $ aio runtime:logs
  $ aio rt:activation:logs
  $ aio rt:activation:log
  $ aio rt:log
  $ aio rt:logs
```

## `aio rt:activation:ls [ACTIVATION_NAME]`

Lists all the Activations

```
USAGE
  $ aio rt:activation:ls [ACTIVATION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations
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
  $ aio runtime:activations:list
  $ aio runtime:activation:ls
  $ aio runtime:activations:ls
  $ aio rt:activation:list
  $ aio rt:activation:ls
  $ aio rt:activations:list
  $ aio rt:activations:ls
```

## `aio rt:activation:result [ACTIVATIONID]`

Retrieves the Results for an Activation

```
USAGE
  $ aio rt:activation:result [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
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
  $ aio rt:activation:result
```

## `aio rt:activations:list [ACTIVATION_NAME]`

Lists all the Activations

```
USAGE
  $ aio rt:activations:list [ACTIVATION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations
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
  $ aio runtime:activations:list
  $ aio runtime:activation:ls
  $ aio runtime:activations:ls
  $ aio rt:activation:list
  $ aio rt:activation:ls
  $ aio rt:activations:list
  $ aio rt:activations:ls
```

## `aio rt:activations:ls [ACTIVATION_NAME]`

Lists all the Activations

```
USAGE
  $ aio rt:activations:ls [ACTIVATION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations
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
  $ aio runtime:activations:list
  $ aio runtime:activation:ls
  $ aio runtime:activations:ls
  $ aio rt:activation:list
  $ aio rt:activation:ls
  $ aio rt:activations:list
  $ aio rt:activations:ls
```

## `aio rt:api`

Manage your routes

```
USAGE
  $ aio rt:api [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:api
  $ aio rt:api
```

## `aio rt:api:create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`

create a new api route

```
USAGE
  $ aio rt:api:create [BASEPATH] [RELPATH] [APIVERB] [ACTION] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i]
    [--debug <value>] [-v] [--version] [--help] [-n <value>] [-r html|http|json|text|svg|json] [-c <value>]

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
  $ aio runtime:api:create
  $ aio rt:route:create
  $ aio rt:api:create
```

## `aio rt:api:delete BASEPATHORAPINAME [RELPATH] [APIVERB]`

delete an API

```
USAGE
  $ aio rt:api:delete [BASEPATHORAPINAME] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i]
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
  $ aio runtime:api:delete
  $ aio rt:route:delete
  $ aio rt:api:delete
```

## `aio rt:api:get BASEPATHORAPINAME`

get API details

```
USAGE
  $ aio rt:api:get [BASEPATHORAPINAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>]
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
  $ aio runtime:api:get
  $ aio rt:route:get
  $ aio rt:api:get
```

## `aio rt:api:list [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio rt:api:list [BASEPATH] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
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
  $ aio runtime:route:ls
  $ aio runtime:api:list
  $ aio runtime:api:ls
  $ aio rt:route:list
  $ aio rt:route:ls
  $ aio rt:api:list
  $ aio rt:api:ls
```

## `aio rt:api:ls [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio rt:api:ls [BASEPATH] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
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
  $ aio runtime:route:ls
  $ aio runtime:api:list
  $ aio runtime:api:ls
  $ aio rt:route:list
  $ aio rt:route:ls
  $ aio rt:api:list
  $ aio rt:api:ls
```

## `aio rt:deploy`

The Runtime Deployment Tool

```
USAGE
  $ aio rt:deploy [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  --param=<value>           parameter values in KEY VALUE format
  --version                 Show version

DESCRIPTION
  The Runtime Deployment Tool

ALIASES
  $ aio rt:deploy
```

## `aio rt:deploy:export`

Exports managed project assets from Runtime to manifest and function files

```
USAGE
  $ aio rt:deploy:export -m <value> --projectname <value> [--cert <value>] [--key <value>] [--apiversion <value>]
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
  $ aio rt:deploy:export
```

## `aio rt:deploy:report`

Provides a summary report of Runtime assets being deployed/undeployed based on manifest/deployment YAML

```
USAGE
  $ aio rt:deploy:report [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio rt:deploy:report
```

## `aio rt:deploy:sync`

A tool to sync deployment and undeployment of Runtime packages using a manifest and optional deployment files using YAML

```
USAGE
  $ aio rt:deploy:sync [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio rt:deploy:sync
```

## `aio rt:deploy:undeploy`

Undeploy removes Runtime assets which were deployed from the manifest and deployment YAML

```
USAGE
  $ aio rt:deploy:undeploy [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio rt:deploy:undeploy
```

## `aio rt:deploy:version`

Prints the version number of aio runtime deploy

```
USAGE
  $ aio rt:deploy:version [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help]

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
  Prints the version number of aio runtime deploy

ALIASES
  $ aio rt:deploy:version
```

## `aio rt:get`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio rt:get [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio rt:get
  $ aio runtime:list
  $ aio rt:list
  $ aio runtime:ls
  $ aio rt:ls
```

## `aio rt:list`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio rt:list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio rt:get
  $ aio runtime:list
  $ aio rt:list
  $ aio runtime:ls
  $ aio rt:ls
```

## `aio rt:log [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio rt:log [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-a <value>] [-m] [-p <value>] [-d] [-l] [-r] [--limit
    <value>] [-t] [-w] [-o]

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
  --limit=<value>        return logs only from last LIMIT number of activations
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime:activation:log
  $ aio runtime:log
  $ aio runtime:logs
  $ aio rt:activation:logs
  $ aio rt:activation:log
  $ aio rt:log
  $ aio rt:logs
```

## `aio rt:logs [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio rt:logs [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-a <value>] [-m] [-p <value>] [-d] [-l] [-r] [--limit
    <value>] [-t] [-w] [-o]

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
  --limit=<value>        return logs only from last LIMIT number of activations
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime:activation:log
  $ aio runtime:log
  $ aio runtime:logs
  $ aio rt:activation:logs
  $ aio rt:activation:log
  $ aio rt:log
  $ aio rt:logs
```

## `aio rt:ls`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio rt:ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio rt:get
  $ aio runtime:list
  $ aio rt:list
  $ aio runtime:ls
  $ aio rt:ls
```

## `aio rt:namespace`

Manage your namespaces

```
USAGE
  $ aio rt:namespace [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help]

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
  Manage your namespaces

ALIASES
  $ aio runtime:ns
  $ aio rt:namespace
  $ aio rt:ns
```

## `aio rt:namespace:lf`

Manage log forwarding settings

```
USAGE
  $ aio rt:namespace:lf [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding
  $ aio runtime:ns:lf
  $ aio runtime:namespace:lf
  $ aio rt:namespace:log-forwarding
  $ aio rt:namespace:lf
  $ aio rt:ns:log-forwarding
  $ aio rt:ns:lf
```

## `aio rt:namespace:lf:errors`

Get log forwarding errors

```
USAGE
  $ aio rt:namespace:lf:errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:errors
  $ aio runtime:ns:lf:errors
  $ aio runtime:namespace:lf:errors
  $ aio rt:namespace:log-forwarding:errors
  $ aio rt:namespace:lf:errors
  $ aio rt:ns:log-forwarding:errors
  $ aio rt:ns:lf:errors
```

## `aio rt:namespace:lf:get`

Get log forwarding destination configuration

```
USAGE
  $ aio rt:namespace:lf:get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:get
  $ aio runtime:ns:lf:get
  $ aio runtime:namespace:lf:get
  $ aio rt:namespace:log-forwarding:get
  $ aio rt:namespace:lf:get
  $ aio rt:ns:log-forwarding:get
  $ aio rt:ns:lf:get
```

## `aio rt:namespace:lf:set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio rt:namespace:lf:set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:set
  $ aio runtime:ns:lf:set
  $ aio runtime:namespace:lf:set
  $ aio rt:namespace:log-forwarding:set
  $ aio rt:namespace:lf:set
  $ aio rt:ns:log-forwarding:set
  $ aio rt:ns:lf:set
```

## `aio rt:namespace:lf:set:adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio rt:namespace:lf:set:adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:set:adobe-io-runtime
  $ aio runtime:ns:lf:set:adobe-io-runtime
  $ aio runtime:namespace:lf:set:adobe-io-runtime
  $ aio rt:namespace:log-forwarding:set:adobe-io-runtime
  $ aio rt:namespace:lf:set:adobe-io-runtime
  $ aio rt:ns:log-forwarding:set:adobe-io-runtime
  $ aio rt:ns:lf:set:adobe-io-runtime
```

## `aio rt:namespace:lf:set:azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio rt:namespace:lf:set:azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
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
  $ aio runtime:ns:log-forwarding:set:azure-log-analytics
  $ aio runtime:ns:lf:set:azure-log-analytics
  $ aio runtime:namespace:lf:set:azure-log-analytics
  $ aio rt:namespace:log-forwarding:set:azure-log-analytics
  $ aio rt:namespace:lf:set:azure-log-analytics
  $ aio rt:ns:log-forwarding:set:azure-log-analytics
  $ aio rt:ns:lf:set:azure-log-analytics
```

## `aio rt:namespace:lf:set:splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio rt:namespace:lf:set:splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
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
  $ aio runtime:ns:log-forwarding:set:splunk-hec
  $ aio runtime:ns:lf:set:splunk-hec
  $ aio runtime:namespace:lf:set:splunk-hec
  $ aio rt:namespace:log-forwarding:set:splunk-hec
  $ aio rt:namespace:lf:set:splunk-hec
  $ aio rt:ns:log-forwarding:set:splunk-hec
  $ aio rt:ns:lf:set:splunk-hec
```

## `aio rt:namespace:list`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio rt:namespace:list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio runtime:namespace:ls
  $ aio runtime:ns:list
  $ aio runtime:ns:ls
  $ aio rt:namespace:list
  $ aio rt:namespace:ls
  $ aio rt:ns:list
  $ aio rt:ns:ls
```

## `aio rt:namespace:log-forwarding`

Manage log forwarding settings

```
USAGE
  $ aio rt:namespace:log-forwarding [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding
  $ aio runtime:ns:lf
  $ aio runtime:namespace:lf
  $ aio rt:namespace:log-forwarding
  $ aio rt:namespace:lf
  $ aio rt:ns:log-forwarding
  $ aio rt:ns:lf
```

## `aio rt:namespace:log-forwarding:errors`

Get log forwarding errors

```
USAGE
  $ aio rt:namespace:log-forwarding:errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:errors
  $ aio runtime:ns:lf:errors
  $ aio runtime:namespace:lf:errors
  $ aio rt:namespace:log-forwarding:errors
  $ aio rt:namespace:lf:errors
  $ aio rt:ns:log-forwarding:errors
  $ aio rt:ns:lf:errors
```

## `aio rt:namespace:log-forwarding:get`

Get log forwarding destination configuration

```
USAGE
  $ aio rt:namespace:log-forwarding:get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:get
  $ aio runtime:ns:lf:get
  $ aio runtime:namespace:lf:get
  $ aio rt:namespace:log-forwarding:get
  $ aio rt:namespace:lf:get
  $ aio rt:ns:log-forwarding:get
  $ aio rt:ns:lf:get
```

## `aio rt:namespace:log-forwarding:set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio rt:namespace:log-forwarding:set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:set
  $ aio runtime:ns:lf:set
  $ aio runtime:namespace:lf:set
  $ aio rt:namespace:log-forwarding:set
  $ aio rt:namespace:lf:set
  $ aio rt:ns:log-forwarding:set
  $ aio rt:ns:lf:set
```

## `aio rt:namespace:log-forwarding:set:adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio rt:namespace:log-forwarding:set:adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:set:adobe-io-runtime
  $ aio runtime:ns:lf:set:adobe-io-runtime
  $ aio runtime:namespace:lf:set:adobe-io-runtime
  $ aio rt:namespace:log-forwarding:set:adobe-io-runtime
  $ aio rt:namespace:lf:set:adobe-io-runtime
  $ aio rt:ns:log-forwarding:set:adobe-io-runtime
  $ aio rt:ns:lf:set:adobe-io-runtime
```

## `aio rt:namespace:log-forwarding:set:azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio rt:namespace:log-forwarding:set:azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
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
  $ aio runtime:ns:log-forwarding:set:azure-log-analytics
  $ aio runtime:ns:lf:set:azure-log-analytics
  $ aio runtime:namespace:lf:set:azure-log-analytics
  $ aio rt:namespace:log-forwarding:set:azure-log-analytics
  $ aio rt:namespace:lf:set:azure-log-analytics
  $ aio rt:ns:log-forwarding:set:azure-log-analytics
  $ aio rt:ns:lf:set:azure-log-analytics
```

## `aio rt:namespace:log-forwarding:set:splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio rt:namespace:log-forwarding:set:splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
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
  $ aio runtime:ns:log-forwarding:set:splunk-hec
  $ aio runtime:ns:lf:set:splunk-hec
  $ aio runtime:namespace:lf:set:splunk-hec
  $ aio rt:namespace:log-forwarding:set:splunk-hec
  $ aio rt:namespace:lf:set:splunk-hec
  $ aio rt:ns:log-forwarding:set:splunk-hec
  $ aio rt:ns:lf:set:splunk-hec
```

## `aio rt:namespace:ls`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio rt:namespace:ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio runtime:namespace:ls
  $ aio runtime:ns:list
  $ aio runtime:ns:ls
  $ aio rt:namespace:list
  $ aio rt:namespace:ls
  $ aio rt:ns:list
  $ aio rt:ns:ls
```

## `aio rt:ns`

Manage your namespaces

```
USAGE
  $ aio rt:ns [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help]

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
  Manage your namespaces

ALIASES
  $ aio runtime:ns
  $ aio rt:namespace
  $ aio rt:ns
```

## `aio rt:ns:lf`

Manage log forwarding settings

```
USAGE
  $ aio rt:ns:lf [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding
  $ aio runtime:ns:lf
  $ aio runtime:namespace:lf
  $ aio rt:namespace:log-forwarding
  $ aio rt:namespace:lf
  $ aio rt:ns:log-forwarding
  $ aio rt:ns:lf
```

## `aio rt:ns:lf:errors`

Get log forwarding errors

```
USAGE
  $ aio rt:ns:lf:errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:errors
  $ aio runtime:ns:lf:errors
  $ aio runtime:namespace:lf:errors
  $ aio rt:namespace:log-forwarding:errors
  $ aio rt:namespace:lf:errors
  $ aio rt:ns:log-forwarding:errors
  $ aio rt:ns:lf:errors
```

## `aio rt:ns:lf:get`

Get log forwarding destination configuration

```
USAGE
  $ aio rt:ns:lf:get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:get
  $ aio runtime:ns:lf:get
  $ aio runtime:namespace:lf:get
  $ aio rt:namespace:log-forwarding:get
  $ aio rt:namespace:lf:get
  $ aio rt:ns:log-forwarding:get
  $ aio rt:ns:lf:get
```

## `aio rt:ns:lf:set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio rt:ns:lf:set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:set
  $ aio runtime:ns:lf:set
  $ aio runtime:namespace:lf:set
  $ aio rt:namespace:log-forwarding:set
  $ aio rt:namespace:lf:set
  $ aio rt:ns:log-forwarding:set
  $ aio rt:ns:lf:set
```

## `aio rt:ns:lf:set:adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio rt:ns:lf:set:adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:set:adobe-io-runtime
  $ aio runtime:ns:lf:set:adobe-io-runtime
  $ aio runtime:namespace:lf:set:adobe-io-runtime
  $ aio rt:namespace:log-forwarding:set:adobe-io-runtime
  $ aio rt:namespace:lf:set:adobe-io-runtime
  $ aio rt:ns:log-forwarding:set:adobe-io-runtime
  $ aio rt:ns:lf:set:adobe-io-runtime
```

## `aio rt:ns:lf:set:azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio rt:ns:lf:set:azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
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
  $ aio runtime:ns:log-forwarding:set:azure-log-analytics
  $ aio runtime:ns:lf:set:azure-log-analytics
  $ aio runtime:namespace:lf:set:azure-log-analytics
  $ aio rt:namespace:log-forwarding:set:azure-log-analytics
  $ aio rt:namespace:lf:set:azure-log-analytics
  $ aio rt:ns:log-forwarding:set:azure-log-analytics
  $ aio rt:ns:lf:set:azure-log-analytics
```

## `aio rt:ns:lf:set:splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio rt:ns:lf:set:splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
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
  $ aio runtime:ns:log-forwarding:set:splunk-hec
  $ aio runtime:ns:lf:set:splunk-hec
  $ aio runtime:namespace:lf:set:splunk-hec
  $ aio rt:namespace:log-forwarding:set:splunk-hec
  $ aio rt:namespace:lf:set:splunk-hec
  $ aio rt:ns:log-forwarding:set:splunk-hec
  $ aio rt:ns:lf:set:splunk-hec
```

## `aio rt:ns:list`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio rt:ns:list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio runtime:namespace:ls
  $ aio runtime:ns:list
  $ aio runtime:ns:ls
  $ aio rt:namespace:list
  $ aio rt:namespace:ls
  $ aio rt:ns:list
  $ aio rt:ns:ls
```

## `aio rt:ns:log-forwarding`

Manage log forwarding settings

```
USAGE
  $ aio rt:ns:log-forwarding [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding
  $ aio runtime:ns:lf
  $ aio runtime:namespace:lf
  $ aio rt:namespace:log-forwarding
  $ aio rt:namespace:lf
  $ aio rt:ns:log-forwarding
  $ aio rt:ns:lf
```

## `aio rt:ns:log-forwarding:errors`

Get log forwarding errors

```
USAGE
  $ aio rt:ns:log-forwarding:errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:errors
  $ aio runtime:ns:lf:errors
  $ aio runtime:namespace:lf:errors
  $ aio rt:namespace:log-forwarding:errors
  $ aio rt:namespace:lf:errors
  $ aio rt:ns:log-forwarding:errors
  $ aio rt:ns:lf:errors
```

## `aio rt:ns:log-forwarding:get`

Get log forwarding destination configuration

```
USAGE
  $ aio rt:ns:log-forwarding:get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:get
  $ aio runtime:ns:lf:get
  $ aio runtime:namespace:lf:get
  $ aio rt:namespace:log-forwarding:get
  $ aio rt:namespace:lf:get
  $ aio rt:ns:log-forwarding:get
  $ aio rt:ns:lf:get
```

## `aio rt:ns:log-forwarding:set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio rt:ns:log-forwarding:set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:set
  $ aio runtime:ns:lf:set
  $ aio runtime:namespace:lf:set
  $ aio rt:namespace:log-forwarding:set
  $ aio rt:namespace:lf:set
  $ aio rt:ns:log-forwarding:set
  $ aio rt:ns:lf:set
```

## `aio rt:ns:log-forwarding:set:adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio rt:ns:log-forwarding:set:adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:set:adobe-io-runtime
  $ aio runtime:ns:lf:set:adobe-io-runtime
  $ aio runtime:namespace:lf:set:adobe-io-runtime
  $ aio rt:namespace:log-forwarding:set:adobe-io-runtime
  $ aio rt:namespace:lf:set:adobe-io-runtime
  $ aio rt:ns:log-forwarding:set:adobe-io-runtime
  $ aio rt:ns:lf:set:adobe-io-runtime
```

## `aio rt:ns:log-forwarding:set:azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio rt:ns:log-forwarding:set:azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
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
  $ aio runtime:ns:log-forwarding:set:azure-log-analytics
  $ aio runtime:ns:lf:set:azure-log-analytics
  $ aio runtime:namespace:lf:set:azure-log-analytics
  $ aio rt:namespace:log-forwarding:set:azure-log-analytics
  $ aio rt:namespace:lf:set:azure-log-analytics
  $ aio rt:ns:log-forwarding:set:azure-log-analytics
  $ aio rt:ns:lf:set:azure-log-analytics
```

## `aio rt:ns:log-forwarding:set:splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio rt:ns:log-forwarding:set:splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
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
  $ aio runtime:ns:log-forwarding:set:splunk-hec
  $ aio runtime:ns:lf:set:splunk-hec
  $ aio runtime:namespace:lf:set:splunk-hec
  $ aio rt:namespace:log-forwarding:set:splunk-hec
  $ aio rt:namespace:lf:set:splunk-hec
  $ aio rt:ns:log-forwarding:set:splunk-hec
  $ aio rt:ns:lf:set:splunk-hec
```

## `aio rt:ns:ls`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio rt:ns:ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio runtime:namespace:ls
  $ aio runtime:ns:list
  $ aio runtime:ns:ls
  $ aio rt:namespace:list
  $ aio rt:namespace:ls
  $ aio rt:ns:list
  $ aio rt:ns:ls
```

## `aio rt:package`

Manage your packages

```
USAGE
  $ aio rt:package [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help]

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
  Manage your packages

ALIASES
  $ aio runtime:pkg
  $ aio rt:package
  $ aio rt:pkg
```

## `aio rt:package:bind PACKAGENAME BINDPACKAGENAME`

Bind parameters to a package

```
USAGE
  $ aio rt:package:bind [PACKAGENAME] [BINDPACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>            parameters in key value pairs to be passed to the package
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
  $ aio runtime:pkg:bind
  $ aio rt:package:bind
  $ aio rt:pkg:bind
```

## `aio rt:package:create PACKAGENAME`

Creates a Package

```
USAGE
  $ aio rt:package:create [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>            parameters in key value pairs to be passed to the package
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
  $ aio runtime:pkg:create
  $ aio rt:package:create
  $ aio rt:pkg:create
```

## `aio rt:package:delete PACKAGENAME`

Deletes a Package

```
USAGE
  $ aio rt:package:delete [PACKAGENAME] [--json] [-r]

FLAGS
  -r, --recursive  Deletes all associated actions (and rules & triggers associated with the actions)
  --json           output raw json

DESCRIPTION
  Deletes a Package

ALIASES
  $ aio runtime:pkg:delete
  $ aio rt:package:delete
  $ aio rt:pkg:delete
```

## `aio rt:package:get PACKAGENAME`

Retrieves a Package

```
USAGE
  $ aio rt:package:get [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
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
  $ aio runtime:pkg:get
  $ aio rt:package:get
  $ aio rt:pkg:get
```

## `aio rt:package:list [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio rt:package:list [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages
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
  $ aio runtime:package:ls
  $ aio runtime:pkg:list
  $ aio runtime:pkg:ls
  $ aio rt:package:list
  $ aio rt:package:ls
  $ aio rt:pkg:list
  $ aio rt:pkg:ls
```

## `aio rt:package:ls [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio rt:package:ls [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages
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
  $ aio runtime:package:ls
  $ aio runtime:pkg:list
  $ aio runtime:pkg:ls
  $ aio rt:package:list
  $ aio rt:package:ls
  $ aio rt:pkg:list
  $ aio rt:pkg:ls
```

## `aio rt:package:update PACKAGENAME`

Updates a Package

```
USAGE
  $ aio rt:package:update [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>            parameters in key value pairs to be passed to the package
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
  $ aio runtime:pkg:update
  $ aio rt:package:update
  $ aio rt:pkg:update
```

## `aio rt:pkg`

Manage your packages

```
USAGE
  $ aio rt:pkg [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help]

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
  Manage your packages

ALIASES
  $ aio runtime:pkg
  $ aio rt:package
  $ aio rt:pkg
```

## `aio rt:pkg:bind PACKAGENAME BINDPACKAGENAME`

Bind parameters to a package

```
USAGE
  $ aio rt:pkg:bind [PACKAGENAME] [BINDPACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>            parameters in key value pairs to be passed to the package
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
  $ aio runtime:pkg:bind
  $ aio rt:package:bind
  $ aio rt:pkg:bind
```

## `aio rt:pkg:create PACKAGENAME`

Creates a Package

```
USAGE
  $ aio rt:pkg:create [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>            parameters in key value pairs to be passed to the package
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
  $ aio runtime:pkg:create
  $ aio rt:package:create
  $ aio rt:pkg:create
```

## `aio rt:pkg:delete PACKAGENAME`

Deletes a Package

```
USAGE
  $ aio rt:pkg:delete [PACKAGENAME] [--json] [-r]

FLAGS
  -r, --recursive  Deletes all associated actions (and rules & triggers associated with the actions)
  --json           output raw json

DESCRIPTION
  Deletes a Package

ALIASES
  $ aio runtime:pkg:delete
  $ aio rt:package:delete
  $ aio rt:pkg:delete
```

## `aio rt:pkg:get PACKAGENAME`

Retrieves a Package

```
USAGE
  $ aio rt:pkg:get [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
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
  $ aio runtime:pkg:get
  $ aio rt:package:get
  $ aio rt:pkg:get
```

## `aio rt:pkg:list [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio rt:pkg:list [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages
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
  $ aio runtime:package:ls
  $ aio runtime:pkg:list
  $ aio runtime:pkg:ls
  $ aio rt:package:list
  $ aio rt:package:ls
  $ aio rt:pkg:list
  $ aio rt:pkg:ls
```

## `aio rt:pkg:ls [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio rt:pkg:ls [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages
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
  $ aio runtime:package:ls
  $ aio runtime:pkg:list
  $ aio runtime:pkg:ls
  $ aio rt:package:list
  $ aio rt:package:ls
  $ aio rt:pkg:list
  $ aio rt:pkg:ls
```

## `aio rt:pkg:update PACKAGENAME`

Updates a Package

```
USAGE
  $ aio rt:pkg:update [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>            parameters in key value pairs to be passed to the package
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
  $ aio runtime:pkg:update
  $ aio rt:package:update
  $ aio rt:pkg:update
```

## `aio rt:prop`

Execute property commands

```
USAGE
  $ aio rt:prop [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:prop
  $ aio rt:prop
  $ aio rt:property
```

## `aio rt:prop:get`

get property

```
USAGE
  $ aio rt:prop:get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:prop:get
  $ aio rt:property:get
  $ aio rt:prop:get
```

## `aio rt:prop:set`

set property

```
USAGE
  $ aio rt:prop:set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:prop:set
  $ aio rt:property:set
  $ aio rt:prop:set
```

## `aio rt:prop:unset`

unset property

```
USAGE
  $ aio rt:prop:unset [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:prop:unset
  $ aio rt:property:unset
  $ aio rt:prop:unset
```

## `aio rt:property`

Execute property commands

```
USAGE
  $ aio rt:property [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:prop
  $ aio rt:prop
  $ aio rt:property
```

## `aio rt:property:get`

get property

```
USAGE
  $ aio rt:property:get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:prop:get
  $ aio rt:property:get
  $ aio rt:prop:get
```

## `aio rt:property:set`

set property

```
USAGE
  $ aio rt:property:set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:prop:set
  $ aio rt:property:set
  $ aio rt:prop:set
```

## `aio rt:property:unset`

unset property

```
USAGE
  $ aio rt:property:unset [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:prop:unset
  $ aio rt:property:unset
  $ aio rt:prop:unset
```

## `aio rt:route:create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`

create a new api route

```
USAGE
  $ aio rt:route:create [BASEPATH] [RELPATH] [APIVERB] [ACTION] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i]
    [--debug <value>] [-v] [--version] [--help] [-n <value>] [-r html|http|json|text|svg|json] [-c <value>]

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
  $ aio runtime:api:create
  $ aio rt:route:create
  $ aio rt:api:create
```

## `aio rt:route:delete BASEPATHORAPINAME [RELPATH] [APIVERB]`

delete an API

```
USAGE
  $ aio rt:route:delete [BASEPATHORAPINAME] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i]
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
  $ aio runtime:api:delete
  $ aio rt:route:delete
  $ aio rt:api:delete
```

## `aio rt:route:get BASEPATHORAPINAME`

get API details

```
USAGE
  $ aio rt:route:get [BASEPATHORAPINAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>]
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
  $ aio runtime:api:get
  $ aio rt:route:get
  $ aio rt:api:get
```

## `aio rt:route:list [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio rt:route:list [BASEPATH] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
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
  $ aio runtime:route:ls
  $ aio runtime:api:list
  $ aio runtime:api:ls
  $ aio rt:route:list
  $ aio rt:route:ls
  $ aio rt:api:list
  $ aio rt:api:ls
```

## `aio rt:route:ls [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio rt:route:ls [BASEPATH] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
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
  $ aio runtime:route:ls
  $ aio runtime:api:list
  $ aio runtime:api:ls
  $ aio rt:route:list
  $ aio rt:route:ls
  $ aio rt:api:list
  $ aio rt:api:ls
```

## `aio rt:rule`

Manage your rules

```
USAGE
  $ aio rt:rule [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio rt:rule
```

## `aio rt:rule:create NAME TRIGGER ACTION`

Create a Rule

```
USAGE
  $ aio rt:rule:create [NAME] [TRIGGER] [ACTION] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
    <value>] [-v] [--version] [--help] [--json]

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
  $ aio rt:rule:create
```

## `aio rt:rule:delete NAME`

Delete a Rule

```
USAGE
  $ aio rt:rule:delete [NAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [--json]

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
  $ aio rt:rule:delete
```

## `aio rt:rule:disable NAME`

Disable a Rule

```
USAGE
  $ aio rt:rule:disable [NAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help]

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
  $ aio rt:rule:disable
```

## `aio rt:rule:enable NAME`

Enable a Rule

```
USAGE
  $ aio rt:rule:enable [NAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help]

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
  $ aio rt:rule:enable
```

## `aio rt:rule:get NAME`

Retrieves a Rule

```
USAGE
  $ aio rt:rule:get [NAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help]

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
  $ aio rt:rule:get
```

## `aio rt:rule:list`

Retrieves a list of Rules

```
USAGE
  $ aio rt:rule:list [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of rules
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  Limit number of rules returned
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
  $ aio runtime:rule:ls
  $ aio rt:rule:list
  $ aio rt:rule:ls
```

## `aio rt:rule:ls`

Retrieves a list of Rules

```
USAGE
  $ aio rt:rule:ls [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of rules
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  Limit number of rules returned
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
  $ aio runtime:rule:ls
  $ aio rt:rule:list
  $ aio rt:rule:ls
```

## `aio rt:rule:status NAME`

Gets the status of a rule

```
USAGE
  $ aio rt:rule:status [NAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help]

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
  $ aio rt:rule:status
```

## `aio rt:rule:update NAME TRIGGER ACTION`

Update a Rule

```
USAGE
  $ aio rt:rule:update [NAME] [TRIGGER] [ACTION] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
    <value>] [-v] [--version] [--help] [--json]

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
  $ aio rt:rule:update
```

## `aio rt:trigger`

Manage your triggers

```
USAGE
  $ aio rt:trigger [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio rt:trigger
```

## `aio rt:trigger:create TRIGGERNAME`

Create a trigger for Adobe I/O Runtime

```
USAGE
  $ aio rt:trigger:create [TRIGGERNAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>] [-a <value>] [-A <value>] [-f <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -f, --feed=<value>             trigger feed ACTION_NAME
  -i, --insecure                 bypass certificate check
  -p, --param=<value>            parameter values in KEY VALUE format
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
  $ aio rt:trigger:create
```

## `aio rt:trigger:delete TRIGGERPATH`

Delete a trigger for Adobe I/O Runtime

```
USAGE
  $ aio rt:trigger:delete [TRIGGERPATH] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
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
  $ aio rt:trigger:delete
```

## `aio rt:trigger:fire TRIGGERNAME`

Fire a trigger for Adobe I/O Runtime

```
USAGE
  $ aio rt:trigger:fire [TRIGGERNAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -P, --param-file=<value>  FILE containing parameter values in JSON format
  -i, --insecure            bypass certificate check
  -p, --param=<value>       parameter values in KEY VALUE format
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
  $ aio rt:trigger:fire
```

## `aio rt:trigger:get TRIGGERPATH`

Get a trigger for Adobe I/O Runtime

```
USAGE
  $ aio rt:trigger:get [TRIGGERPATH] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
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
  $ aio rt:trigger:get
```

## `aio rt:trigger:list`

Lists all of your triggers for Adobe I/O Runtime

```
USAGE
  $ aio rt:trigger:list [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of triggers
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  [default: 30] only return LIMIT number of triggers
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
  $ aio runtime:trigger:ls
  $ aio rt:trigger:list
  $ aio rt:trigger:ls
```

## `aio rt:trigger:ls`

Lists all of your triggers for Adobe I/O Runtime

```
USAGE
  $ aio rt:trigger:ls [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of triggers
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  [default: 30] only return LIMIT number of triggers
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
  $ aio runtime:trigger:ls
  $ aio rt:trigger:list
  $ aio rt:trigger:ls
```

## `aio rt:trigger:update TRIGGERNAME`

Update or create a trigger for Adobe I/O Runtime

```
USAGE
  $ aio rt:trigger:update [TRIGGERNAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>] [-a <value>] [-A <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>            parameter values in KEY VALUE format
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
  $ aio rt:trigger:update
```

## `aio runtime`

Execute runtime commands

```
USAGE
  $ aio runtime [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help]

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
  Execute runtime commands

ALIASES
  $ aio rt
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/index.js)_

## `aio runtime:action`

Manage your actions

```
USAGE
  $ aio runtime:action [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help]

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
  Manage your actions

ALIASES
  $ aio rt:action
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/action/index.js)_

## `aio runtime:action:create ACTIONNAME [ACTIONPATH]`

Creates an Action

```
USAGE
  $ aio runtime:action:create [ACTIONNAME] [ACTIONPATH] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost
    <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [--copy <value>] [-e <value>]
    [--web true|yes|false|no|raw] [--web-secure <value>] [-P <value>] [-E <value>] [-t <value>] [-m <value>] [-l
    <value>] [--kind <value>] [-a <value>] [-A <value>] [--sequence <value>] [--docker <value>] [--main <value>]
    [--binary] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -E, --env-file=<value>         FILE containing environment variables in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -e, --env=<value>              environment values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -l, --logsize=<value>          the maximum log size LIMIT in MB for the action (default 10)
  -m, --memory=<value>           the maximum memory LIMIT in MB for the action (default 256)
  -p, --param=<value>            parameter values in KEY VALUE format
  -t, --timeout=<value>          the timeout LIMIT in milliseconds after which the action is terminated (default 60000)
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
  $ aio rt:action:create
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/action/create.js)_

## `aio runtime:action:del ACTIONNAME`

Deletes an Action

```
USAGE
  $ aio runtime:action:del [ACTIONNAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
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
  $ aio runtime:action:del
  $ aio rt:action:delete
  $ aio rt:action:del
```

## `aio runtime:action:delete ACTIONNAME`

Deletes an Action

```
USAGE
  $ aio runtime:action:delete [ACTIONNAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
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
  $ aio runtime:action:del
  $ aio rt:action:delete
  $ aio rt:action:del
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/action/delete.js)_

## `aio runtime:action:get ACTIONNAME`

Retrieves an Action

```
USAGE
  $ aio runtime:action:get [ACTIONNAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
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
  $ aio rt:action:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/action/get.js)_

## `aio runtime:action:invoke ACTIONNAME`

Invokes an Action

```
USAGE
  $ aio runtime:action:invoke [ACTIONNAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-b] [-r]

FLAGS
  -P, --param-file=<value>  FILE containing parameter values in JSON format
  -b, --blocking            blocking invoke
  -i, --insecure            bypass certificate check
  -p, --param=<value>       parameter values in KEY VALUE format
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
  $ aio rt:action:invoke
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/action/invoke.js)_

## `aio runtime:action:list [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio runtime:action:list [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions
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
  $ aio runtime:action:ls
  $ aio runtime:actions:list
  $ aio runtime:actions:ls
  $ aio rt:action:list
  $ aio rt:actions:list
  $ aio rt:action:ls
  $ aio rt:actions:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/action/list.js)_

## `aio runtime:action:ls [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio runtime:action:ls [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions
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
  $ aio runtime:action:ls
  $ aio runtime:actions:list
  $ aio runtime:actions:ls
  $ aio rt:action:list
  $ aio rt:actions:list
  $ aio rt:action:ls
  $ aio rt:actions:ls
```

## `aio runtime:action:update ACTIONNAME [ACTIONPATH]`

Updates an Action

```
USAGE
  $ aio runtime:action:update [ACTIONNAME] [ACTIONPATH] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost
    <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [--copy <value>] [-e <value>]
    [--web true|yes|false|no|raw] [--web-secure <value>] [-P <value>] [-E <value>] [-t <value>] [-m <value>] [-l
    <value>] [--kind <value>] [-a <value>] [-A <value>] [--sequence <value>] [--docker <value>] [--main <value>]
    [--binary] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -E, --env-file=<value>         FILE containing environment variables in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -e, --env=<value>              environment values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -l, --logsize=<value>          the maximum log size LIMIT in MB for the action (default 10)
  -m, --memory=<value>           the maximum memory LIMIT in MB for the action (default 256)
  -p, --param=<value>            parameter values in KEY VALUE format
  -t, --timeout=<value>          the timeout LIMIT in milliseconds after which the action is terminated (default 60000)
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
  $ aio rt:action:update
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/action/update.js)_

## `aio runtime:actions:list [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio runtime:actions:list [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions
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
  $ aio runtime:action:ls
  $ aio runtime:actions:list
  $ aio runtime:actions:ls
  $ aio rt:action:list
  $ aio rt:actions:list
  $ aio rt:action:ls
  $ aio rt:actions:ls
```

## `aio runtime:actions:ls [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio runtime:actions:ls [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of actions
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of actions
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
  $ aio runtime:action:ls
  $ aio runtime:actions:list
  $ aio runtime:actions:ls
  $ aio rt:action:list
  $ aio rt:actions:list
  $ aio rt:action:ls
  $ aio rt:actions:ls
```

## `aio runtime:activation`

Manage your activations

```
USAGE
  $ aio runtime:activation [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help]

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
  Manage your activations

ALIASES
  $ aio rt:activation
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/activation/index.js)_

## `aio runtime:activation:get [ACTIVATIONID]`

Retrieves an Activation

```
USAGE
  $ aio runtime:activation:get [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
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
  $ aio rt:activation:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/activation/get.js)_

## `aio runtime:activation:list [ACTIVATION_NAME]`

Lists all the Activations

```
USAGE
  $ aio runtime:activation:list [ACTIVATION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations
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
  $ aio runtime:activations:list
  $ aio runtime:activation:ls
  $ aio runtime:activations:ls
  $ aio rt:activation:list
  $ aio rt:activation:ls
  $ aio rt:activations:list
  $ aio rt:activations:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/activation/list.js)_

## `aio runtime:activation:log [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio runtime:activation:log [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-a <value>] [-m] [-p <value>] [-d] [-l] [-r] [--limit
    <value>] [-t] [-w] [-o]

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
  --limit=<value>        return logs only from last LIMIT number of activations
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime:activation:log
  $ aio runtime:log
  $ aio runtime:logs
  $ aio rt:activation:logs
  $ aio rt:activation:log
  $ aio rt:log
  $ aio rt:logs
```

## `aio runtime:activation:logs [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio runtime:activation:logs [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-a <value>] [-m] [-p <value>] [-d] [-l] [-r] [--limit
    <value>] [-t] [-w] [-o]

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
  --limit=<value>        return logs only from last LIMIT number of activations
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime:activation:log
  $ aio runtime:log
  $ aio runtime:logs
  $ aio rt:activation:logs
  $ aio rt:activation:log
  $ aio rt:log
  $ aio rt:logs
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/activation/logs.js)_

## `aio runtime:activation:ls [ACTIVATION_NAME]`

Lists all the Activations

```
USAGE
  $ aio runtime:activation:ls [ACTIVATION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations
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
  $ aio runtime:activations:list
  $ aio runtime:activation:ls
  $ aio runtime:activations:ls
  $ aio rt:activation:list
  $ aio rt:activation:ls
  $ aio rt:activations:list
  $ aio rt:activations:ls
```

## `aio runtime:activation:result [ACTIVATIONID]`

Retrieves the Results for an Activation

```
USAGE
  $ aio runtime:activation:result [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
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
  $ aio rt:activation:result
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/activation/result.js)_

## `aio runtime:activations:list [ACTIVATION_NAME]`

Lists all the Activations

```
USAGE
  $ aio runtime:activations:list [ACTIVATION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations
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
  $ aio runtime:activations:list
  $ aio runtime:activation:ls
  $ aio runtime:activations:ls
  $ aio rt:activation:list
  $ aio rt:activation:ls
  $ aio rt:activations:list
  $ aio rt:activations:ls
```

## `aio runtime:activations:ls [ACTIVATION_NAME]`

Lists all the Activations

```
USAGE
  $ aio runtime:activations:ls [ACTIVATION_NAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [--since <value>] [--upto
    <value>] [-c] [--json] [-f]

FLAGS
  -c, --count           show only the total number of activations
  -f, --full            include full activation description
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of activations
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
  $ aio runtime:activations:list
  $ aio runtime:activation:ls
  $ aio runtime:activations:ls
  $ aio rt:activation:list
  $ aio rt:activation:ls
  $ aio rt:activations:list
  $ aio rt:activations:ls
```

## `aio runtime:api`

Manage your routes

```
USAGE
  $ aio runtime:api [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:api
  $ aio rt:api
```

## `aio runtime:api:create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`

create a new api route

```
USAGE
  $ aio runtime:api:create [BASEPATH] [RELPATH] [APIVERB] [ACTION] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i]
    [--debug <value>] [-v] [--version] [--help] [-n <value>] [-r html|http|json|text|svg|json] [-c <value>]

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
  $ aio runtime:api:create
  $ aio rt:route:create
  $ aio rt:api:create
```

## `aio runtime:api:delete BASEPATHORAPINAME [RELPATH] [APIVERB]`

delete an API

```
USAGE
  $ aio runtime:api:delete [BASEPATHORAPINAME] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i]
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
  $ aio runtime:api:delete
  $ aio rt:route:delete
  $ aio rt:api:delete
```

## `aio runtime:api:get BASEPATHORAPINAME`

get API details

```
USAGE
  $ aio runtime:api:get [BASEPATHORAPINAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>]
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
  $ aio runtime:api:get
  $ aio rt:route:get
  $ aio rt:api:get
```

## `aio runtime:api:list [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio runtime:api:list [BASEPATH] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
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
  $ aio runtime:route:ls
  $ aio runtime:api:list
  $ aio runtime:api:ls
  $ aio rt:route:list
  $ aio rt:route:ls
  $ aio rt:api:list
  $ aio rt:api:ls
```

## `aio runtime:api:ls [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio runtime:api:ls [BASEPATH] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
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
  $ aio runtime:route:ls
  $ aio runtime:api:list
  $ aio runtime:api:ls
  $ aio rt:route:list
  $ aio rt:route:ls
  $ aio rt:api:list
  $ aio rt:api:ls
```

## `aio runtime:deploy`

The Runtime Deployment Tool

```
USAGE
  $ aio runtime:deploy [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  --param=<value>           parameter values in KEY VALUE format
  --version                 Show version

DESCRIPTION
  The Runtime Deployment Tool

ALIASES
  $ aio rt:deploy
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/deploy/index.js)_

## `aio runtime:deploy:export`

Exports managed project assets from Runtime to manifest and function files

```
USAGE
  $ aio runtime:deploy:export -m <value> --projectname <value> [--cert <value>] [--key <value>] [--apiversion <value>]
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
  $ aio rt:deploy:export
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/deploy/export.js)_

## `aio runtime:deploy:report`

Provides a summary report of Runtime assets being deployed/undeployed based on manifest/deployment YAML

```
USAGE
  $ aio runtime:deploy:report [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio rt:deploy:report
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/deploy/report.js)_

## `aio runtime:deploy:sync`

A tool to sync deployment and undeployment of Runtime packages using a manifest and optional deployment files using YAML

```
USAGE
  $ aio runtime:deploy:sync [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio rt:deploy:sync
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/deploy/sync.js)_

## `aio runtime:deploy:undeploy`

Undeploy removes Runtime assets which were deployed from the manifest and deployment YAML

```
USAGE
  $ aio runtime:deploy:undeploy [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio rt:deploy:undeploy
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/deploy/undeploy.js)_

## `aio runtime:deploy:version`

Prints the version number of aio runtime deploy

```
USAGE
  $ aio runtime:deploy:version [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help]

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
  Prints the version number of aio runtime deploy

ALIASES
  $ aio rt:deploy:version
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/deploy/version.js)_

## `aio runtime:list`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio runtime:list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio rt:get
  $ aio runtime:list
  $ aio rt:list
  $ aio runtime:ls
  $ aio rt:ls
```

## `aio runtime:log [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio runtime:log [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-a <value>] [-m] [-p <value>] [-d] [-l] [-r] [--limit
    <value>] [-t] [-w] [-o]

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
  --limit=<value>        return logs only from last LIMIT number of activations
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime:activation:log
  $ aio runtime:log
  $ aio runtime:logs
  $ aio rt:activation:logs
  $ aio rt:activation:log
  $ aio rt:log
  $ aio rt:logs
```

## `aio runtime:logs [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio runtime:logs [ACTIVATIONID] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>]
    [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-a <value>] [-m] [-p <value>] [-d] [-l] [-r] [--limit
    <value>] [-t] [-w] [-o]

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
  --limit=<value>        return logs only from last LIMIT number of activations
  --version              Show version

DESCRIPTION
  Retrieves the Logs for an Activation

ALIASES
  $ aio runtime:activation:log
  $ aio runtime:log
  $ aio runtime:logs
  $ aio rt:activation:logs
  $ aio rt:activation:log
  $ aio rt:log
  $ aio rt:logs
```

## `aio runtime:ls`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio runtime:ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio rt:get
  $ aio runtime:list
  $ aio rt:list
  $ aio runtime:ls
  $ aio rt:ls
```

## `aio runtime:namespace`

Manage your namespaces

```
USAGE
  $ aio runtime:namespace [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help]

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
  Manage your namespaces

ALIASES
  $ aio runtime:ns
  $ aio rt:namespace
  $ aio rt:ns
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/namespace/index.js)_

## `aio runtime:namespace:get`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio runtime:namespace:get [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio rt:get
  $ aio runtime:list
  $ aio rt:list
  $ aio runtime:ls
  $ aio rt:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/namespace/get.js)_

## `aio runtime:namespace:lf`

Manage log forwarding settings

```
USAGE
  $ aio runtime:namespace:lf [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding
  $ aio runtime:ns:lf
  $ aio runtime:namespace:lf
  $ aio rt:namespace:log-forwarding
  $ aio rt:namespace:lf
  $ aio rt:ns:log-forwarding
  $ aio rt:ns:lf
```

## `aio runtime:namespace:lf:errors`

Get log forwarding errors

```
USAGE
  $ aio runtime:namespace:lf:errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:errors
  $ aio runtime:ns:lf:errors
  $ aio runtime:namespace:lf:errors
  $ aio rt:namespace:log-forwarding:errors
  $ aio rt:namespace:lf:errors
  $ aio rt:ns:log-forwarding:errors
  $ aio rt:ns:lf:errors
```

## `aio runtime:namespace:lf:get`

Get log forwarding destination configuration

```
USAGE
  $ aio runtime:namespace:lf:get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:get
  $ aio runtime:ns:lf:get
  $ aio runtime:namespace:lf:get
  $ aio rt:namespace:log-forwarding:get
  $ aio rt:namespace:lf:get
  $ aio rt:ns:log-forwarding:get
  $ aio rt:ns:lf:get
```

## `aio runtime:namespace:lf:set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio runtime:namespace:lf:set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:set
  $ aio runtime:ns:lf:set
  $ aio runtime:namespace:lf:set
  $ aio rt:namespace:log-forwarding:set
  $ aio rt:namespace:lf:set
  $ aio rt:ns:log-forwarding:set
  $ aio rt:ns:lf:set
```

## `aio runtime:namespace:lf:set:adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio runtime:namespace:lf:set:adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:set:adobe-io-runtime
  $ aio runtime:ns:lf:set:adobe-io-runtime
  $ aio runtime:namespace:lf:set:adobe-io-runtime
  $ aio rt:namespace:log-forwarding:set:adobe-io-runtime
  $ aio rt:namespace:lf:set:adobe-io-runtime
  $ aio rt:ns:log-forwarding:set:adobe-io-runtime
  $ aio rt:ns:lf:set:adobe-io-runtime
```

## `aio runtime:namespace:lf:set:azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio runtime:namespace:lf:set:azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
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
  $ aio runtime:ns:log-forwarding:set:azure-log-analytics
  $ aio runtime:ns:lf:set:azure-log-analytics
  $ aio runtime:namespace:lf:set:azure-log-analytics
  $ aio rt:namespace:log-forwarding:set:azure-log-analytics
  $ aio rt:namespace:lf:set:azure-log-analytics
  $ aio rt:ns:log-forwarding:set:azure-log-analytics
  $ aio rt:ns:lf:set:azure-log-analytics
```

## `aio runtime:namespace:lf:set:splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio runtime:namespace:lf:set:splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
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
  $ aio runtime:ns:log-forwarding:set:splunk-hec
  $ aio runtime:ns:lf:set:splunk-hec
  $ aio runtime:namespace:lf:set:splunk-hec
  $ aio rt:namespace:log-forwarding:set:splunk-hec
  $ aio rt:namespace:lf:set:splunk-hec
  $ aio rt:ns:log-forwarding:set:splunk-hec
  $ aio rt:ns:lf:set:splunk-hec
```

## `aio runtime:namespace:list`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio runtime:namespace:list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio runtime:namespace:ls
  $ aio runtime:ns:list
  $ aio runtime:ns:ls
  $ aio rt:namespace:list
  $ aio rt:namespace:ls
  $ aio rt:ns:list
  $ aio rt:ns:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/namespace/list.js)_

## `aio runtime:namespace:log-forwarding`

Manage log forwarding settings

```
USAGE
  $ aio runtime:namespace:log-forwarding [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding
  $ aio runtime:ns:lf
  $ aio runtime:namespace:lf
  $ aio rt:namespace:log-forwarding
  $ aio rt:namespace:lf
  $ aio rt:ns:log-forwarding
  $ aio rt:ns:lf
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/namespace/log-forwarding/index.js)_

## `aio runtime:namespace:log-forwarding:errors`

Get log forwarding errors

```
USAGE
  $ aio runtime:namespace:log-forwarding:errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:errors
  $ aio runtime:ns:lf:errors
  $ aio runtime:namespace:lf:errors
  $ aio rt:namespace:log-forwarding:errors
  $ aio rt:namespace:lf:errors
  $ aio rt:ns:log-forwarding:errors
  $ aio rt:ns:lf:errors
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/namespace/log-forwarding/errors.js)_

## `aio runtime:namespace:log-forwarding:get`

Get log forwarding destination configuration

```
USAGE
  $ aio runtime:namespace:log-forwarding:get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:get
  $ aio runtime:ns:lf:get
  $ aio runtime:namespace:lf:get
  $ aio rt:namespace:log-forwarding:get
  $ aio rt:namespace:lf:get
  $ aio rt:ns:log-forwarding:get
  $ aio rt:ns:lf:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/namespace/log-forwarding/get.js)_

## `aio runtime:namespace:log-forwarding:set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio runtime:namespace:log-forwarding:set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:set
  $ aio runtime:ns:lf:set
  $ aio runtime:namespace:lf:set
  $ aio rt:namespace:log-forwarding:set
  $ aio rt:namespace:lf:set
  $ aio rt:ns:log-forwarding:set
  $ aio rt:ns:lf:set
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/namespace/log-forwarding/set.js)_

## `aio runtime:namespace:log-forwarding:set:adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio runtime:namespace:log-forwarding:set:adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:set:adobe-io-runtime
  $ aio runtime:ns:lf:set:adobe-io-runtime
  $ aio runtime:namespace:lf:set:adobe-io-runtime
  $ aio rt:namespace:log-forwarding:set:adobe-io-runtime
  $ aio rt:namespace:lf:set:adobe-io-runtime
  $ aio rt:ns:log-forwarding:set:adobe-io-runtime
  $ aio rt:ns:lf:set:adobe-io-runtime
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/namespace/log-forwarding/set/adobe-io-runtime.js)_

## `aio runtime:namespace:log-forwarding:set:azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio runtime:namespace:log-forwarding:set:azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
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
  $ aio runtime:ns:log-forwarding:set:azure-log-analytics
  $ aio runtime:ns:lf:set:azure-log-analytics
  $ aio runtime:namespace:lf:set:azure-log-analytics
  $ aio rt:namespace:log-forwarding:set:azure-log-analytics
  $ aio rt:namespace:lf:set:azure-log-analytics
  $ aio rt:ns:log-forwarding:set:azure-log-analytics
  $ aio rt:ns:lf:set:azure-log-analytics
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/namespace/log-forwarding/set/azure-log-analytics.js)_

## `aio runtime:namespace:log-forwarding:set:splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio runtime:namespace:log-forwarding:set:splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
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
  $ aio runtime:ns:log-forwarding:set:splunk-hec
  $ aio runtime:ns:lf:set:splunk-hec
  $ aio runtime:namespace:lf:set:splunk-hec
  $ aio rt:namespace:log-forwarding:set:splunk-hec
  $ aio rt:namespace:lf:set:splunk-hec
  $ aio rt:ns:log-forwarding:set:splunk-hec
  $ aio rt:ns:lf:set:splunk-hec
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/namespace/log-forwarding/set/splunk-hec.js)_

## `aio runtime:namespace:ls`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio runtime:namespace:ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio runtime:namespace:ls
  $ aio runtime:ns:list
  $ aio runtime:ns:ls
  $ aio rt:namespace:list
  $ aio rt:namespace:ls
  $ aio rt:ns:list
  $ aio rt:ns:ls
```

## `aio runtime:ns`

Manage your namespaces

```
USAGE
  $ aio runtime:ns [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help]

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
  Manage your namespaces

ALIASES
  $ aio runtime:ns
  $ aio rt:namespace
  $ aio rt:ns
```

## `aio runtime:ns:lf`

Manage log forwarding settings

```
USAGE
  $ aio runtime:ns:lf [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding
  $ aio runtime:ns:lf
  $ aio runtime:namespace:lf
  $ aio rt:namespace:log-forwarding
  $ aio rt:namespace:lf
  $ aio rt:ns:log-forwarding
  $ aio rt:ns:lf
```

## `aio runtime:ns:lf:errors`

Get log forwarding errors

```
USAGE
  $ aio runtime:ns:lf:errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:errors
  $ aio runtime:ns:lf:errors
  $ aio runtime:namespace:lf:errors
  $ aio rt:namespace:log-forwarding:errors
  $ aio rt:namespace:lf:errors
  $ aio rt:ns:log-forwarding:errors
  $ aio rt:ns:lf:errors
```

## `aio runtime:ns:lf:get`

Get log forwarding destination configuration

```
USAGE
  $ aio runtime:ns:lf:get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:get
  $ aio runtime:ns:lf:get
  $ aio runtime:namespace:lf:get
  $ aio rt:namespace:log-forwarding:get
  $ aio rt:namespace:lf:get
  $ aio rt:ns:log-forwarding:get
  $ aio rt:ns:lf:get
```

## `aio runtime:ns:lf:set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio runtime:ns:lf:set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:set
  $ aio runtime:ns:lf:set
  $ aio runtime:namespace:lf:set
  $ aio rt:namespace:log-forwarding:set
  $ aio rt:namespace:lf:set
  $ aio rt:ns:log-forwarding:set
  $ aio rt:ns:lf:set
```

## `aio runtime:ns:lf:set:adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio runtime:ns:lf:set:adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:set:adobe-io-runtime
  $ aio runtime:ns:lf:set:adobe-io-runtime
  $ aio runtime:namespace:lf:set:adobe-io-runtime
  $ aio rt:namespace:log-forwarding:set:adobe-io-runtime
  $ aio rt:namespace:lf:set:adobe-io-runtime
  $ aio rt:ns:log-forwarding:set:adobe-io-runtime
  $ aio rt:ns:lf:set:adobe-io-runtime
```

## `aio runtime:ns:lf:set:azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio runtime:ns:lf:set:azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
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
  $ aio runtime:ns:log-forwarding:set:azure-log-analytics
  $ aio runtime:ns:lf:set:azure-log-analytics
  $ aio runtime:namespace:lf:set:azure-log-analytics
  $ aio rt:namespace:log-forwarding:set:azure-log-analytics
  $ aio rt:namespace:lf:set:azure-log-analytics
  $ aio rt:ns:log-forwarding:set:azure-log-analytics
  $ aio rt:ns:lf:set:azure-log-analytics
```

## `aio runtime:ns:lf:set:splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio runtime:ns:lf:set:splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
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
  $ aio runtime:ns:log-forwarding:set:splunk-hec
  $ aio runtime:ns:lf:set:splunk-hec
  $ aio runtime:namespace:lf:set:splunk-hec
  $ aio rt:namespace:log-forwarding:set:splunk-hec
  $ aio rt:namespace:lf:set:splunk-hec
  $ aio rt:ns:log-forwarding:set:splunk-hec
  $ aio rt:ns:lf:set:splunk-hec
```

## `aio runtime:ns:list`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio runtime:ns:list [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio runtime:namespace:ls
  $ aio runtime:ns:list
  $ aio runtime:ns:ls
  $ aio rt:namespace:list
  $ aio rt:namespace:ls
  $ aio rt:ns:list
  $ aio rt:ns:ls
```

## `aio runtime:ns:log-forwarding`

Manage log forwarding settings

```
USAGE
  $ aio runtime:ns:log-forwarding [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding
  $ aio runtime:ns:lf
  $ aio runtime:namespace:lf
  $ aio rt:namespace:log-forwarding
  $ aio rt:namespace:lf
  $ aio rt:ns:log-forwarding
  $ aio rt:ns:lf
```

## `aio runtime:ns:log-forwarding:errors`

Get log forwarding errors

```
USAGE
  $ aio runtime:ns:log-forwarding:errors [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:errors
  $ aio runtime:ns:lf:errors
  $ aio runtime:namespace:lf:errors
  $ aio rt:namespace:log-forwarding:errors
  $ aio rt:namespace:lf:errors
  $ aio rt:ns:log-forwarding:errors
  $ aio rt:ns:lf:errors
```

## `aio runtime:ns:log-forwarding:get`

Get log forwarding destination configuration

```
USAGE
  $ aio runtime:ns:log-forwarding:get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:get
  $ aio runtime:ns:lf:get
  $ aio runtime:namespace:lf:get
  $ aio rt:namespace:log-forwarding:get
  $ aio rt:namespace:lf:get
  $ aio rt:ns:log-forwarding:get
  $ aio rt:ns:lf:get
```

## `aio runtime:ns:log-forwarding:set`

Configure log forwarding destination (interactive)

```
USAGE
  $ aio runtime:ns:log-forwarding:set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:set
  $ aio runtime:ns:lf:set
  $ aio runtime:namespace:lf:set
  $ aio rt:namespace:log-forwarding:set
  $ aio rt:namespace:lf:set
  $ aio rt:ns:log-forwarding:set
  $ aio rt:ns:lf:set
```

## `aio runtime:ns:log-forwarding:set:adobe-io-runtime`

Set log forwarding destination to Adobe I/O Runtime (Logs will be accessible via aio CLI)

```
USAGE
  $ aio runtime:ns:log-forwarding:set:adobe-io-runtime [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:ns:log-forwarding:set:adobe-io-runtime
  $ aio runtime:ns:lf:set:adobe-io-runtime
  $ aio runtime:namespace:lf:set:adobe-io-runtime
  $ aio rt:namespace:log-forwarding:set:adobe-io-runtime
  $ aio rt:namespace:lf:set:adobe-io-runtime
  $ aio rt:ns:log-forwarding:set:adobe-io-runtime
  $ aio rt:ns:lf:set:adobe-io-runtime
```

## `aio runtime:ns:log-forwarding:set:azure-log-analytics`

Set log forwarding destination to Azure Log Analytics

```
USAGE
  $ aio runtime:ns:log-forwarding:set:azure-log-analytics --customer-id <value> --shared-key <value> --log-type <value> [--cert] [--key] [--apiversion]
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
  $ aio runtime:ns:log-forwarding:set:azure-log-analytics
  $ aio runtime:ns:lf:set:azure-log-analytics
  $ aio runtime:namespace:lf:set:azure-log-analytics
  $ aio rt:namespace:log-forwarding:set:azure-log-analytics
  $ aio rt:namespace:lf:set:azure-log-analytics
  $ aio rt:ns:log-forwarding:set:azure-log-analytics
  $ aio rt:ns:lf:set:azure-log-analytics
```

## `aio runtime:ns:log-forwarding:set:splunk-hec`

Set log forwarding destination to Splunk HEC

```
USAGE
  $ aio runtime:ns:log-forwarding:set:splunk-hec --host <value> --port <value> --index <value> --hec-token <value> [--cert] [--key]
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
  $ aio runtime:ns:log-forwarding:set:splunk-hec
  $ aio runtime:ns:lf:set:splunk-hec
  $ aio runtime:namespace:lf:set:splunk-hec
  $ aio rt:namespace:log-forwarding:set:splunk-hec
  $ aio rt:namespace:lf:set:splunk-hec
  $ aio rt:ns:log-forwarding:set:splunk-hec
  $ aio rt:ns:lf:set:splunk-hec
```

## `aio runtime:ns:ls`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio runtime:ns:ls [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
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
  $ aio runtime:namespace:ls
  $ aio runtime:ns:list
  $ aio runtime:ns:ls
  $ aio rt:namespace:list
  $ aio rt:namespace:ls
  $ aio rt:ns:list
  $ aio rt:ns:ls
```

## `aio runtime:package`

Manage your packages

```
USAGE
  $ aio runtime:package [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help]

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
  Manage your packages

ALIASES
  $ aio runtime:pkg
  $ aio rt:package
  $ aio rt:pkg
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/package/index.js)_

## `aio runtime:package:bind PACKAGENAME BINDPACKAGENAME`

Bind parameters to a package

```
USAGE
  $ aio runtime:package:bind [PACKAGENAME] [BINDPACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>            parameters in key value pairs to be passed to the package
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
  $ aio runtime:pkg:bind
  $ aio rt:package:bind
  $ aio rt:pkg:bind
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/package/bind.js)_

## `aio runtime:package:create PACKAGENAME`

Creates a Package

```
USAGE
  $ aio runtime:package:create [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>            parameters in key value pairs to be passed to the package
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
  $ aio runtime:pkg:create
  $ aio rt:package:create
  $ aio rt:pkg:create
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/package/create.js)_

## `aio runtime:package:delete PACKAGENAME`

Deletes a Package

```
USAGE
  $ aio runtime:package:delete [PACKAGENAME] [--json] [-r]

FLAGS
  -r, --recursive  Deletes all associated actions (and rules & triggers associated with the actions)
  --json           output raw json

DESCRIPTION
  Deletes a Package

ALIASES
  $ aio runtime:pkg:delete
  $ aio rt:package:delete
  $ aio rt:pkg:delete
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/package/delete.js)_

## `aio runtime:package:get PACKAGENAME`

Retrieves a Package

```
USAGE
  $ aio runtime:package:get [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
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
  $ aio runtime:pkg:get
  $ aio rt:package:get
  $ aio rt:pkg:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/package/get.js)_

## `aio runtime:package:list [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio runtime:package:list [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages
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
  $ aio runtime:package:ls
  $ aio runtime:pkg:list
  $ aio runtime:pkg:ls
  $ aio rt:package:list
  $ aio rt:package:ls
  $ aio rt:pkg:list
  $ aio rt:pkg:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/package/list.js)_

## `aio runtime:package:ls [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio runtime:package:ls [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages
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
  $ aio runtime:package:ls
  $ aio runtime:pkg:list
  $ aio runtime:pkg:ls
  $ aio rt:package:list
  $ aio rt:package:ls
  $ aio rt:pkg:list
  $ aio rt:pkg:ls
```

## `aio runtime:package:update PACKAGENAME`

Updates a Package

```
USAGE
  $ aio runtime:package:update [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>            parameters in key value pairs to be passed to the package
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
  $ aio runtime:pkg:update
  $ aio rt:package:update
  $ aio rt:pkg:update
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/package/update.js)_

## `aio runtime:pkg`

Manage your packages

```
USAGE
  $ aio runtime:pkg [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u <value>] [-i]
    [--debug <value>] [-v] [--version] [--help]

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
  Manage your packages

ALIASES
  $ aio runtime:pkg
  $ aio rt:package
  $ aio rt:pkg
```

## `aio runtime:pkg:bind PACKAGENAME BINDPACKAGENAME`

Bind parameters to a package

```
USAGE
  $ aio runtime:pkg:bind [PACKAGENAME] [BINDPACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>]
    [--apihost <value>] [-u <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>            parameters in key value pairs to be passed to the package
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
  $ aio runtime:pkg:bind
  $ aio rt:package:bind
  $ aio rt:pkg:bind
```

## `aio runtime:pkg:create PACKAGENAME`

Creates a Package

```
USAGE
  $ aio runtime:pkg:create [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>            parameters in key value pairs to be passed to the package
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
  $ aio runtime:pkg:create
  $ aio rt:package:create
  $ aio rt:pkg:create
```

## `aio runtime:pkg:delete PACKAGENAME`

Deletes a Package

```
USAGE
  $ aio runtime:pkg:delete [PACKAGENAME] [--json] [-r]

FLAGS
  -r, --recursive  Deletes all associated actions (and rules & triggers associated with the actions)
  --json           output raw json

DESCRIPTION
  Deletes a Package

ALIASES
  $ aio runtime:pkg:delete
  $ aio rt:package:delete
  $ aio rt:pkg:delete
```

## `aio runtime:pkg:get PACKAGENAME`

Retrieves a Package

```
USAGE
  $ aio runtime:pkg:get [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
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
  $ aio runtime:pkg:get
  $ aio rt:package:get
  $ aio rt:pkg:get
```

## `aio runtime:pkg:list [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio runtime:pkg:list [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages
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
  $ aio runtime:package:ls
  $ aio runtime:pkg:list
  $ aio runtime:pkg:ls
  $ aio rt:package:list
  $ aio rt:package:ls
  $ aio rt:pkg:list
  $ aio rt:pkg:ls
```

## `aio runtime:pkg:ls [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio runtime:pkg:ls [NAMESPACE] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count           show only the total number of packages
  -i, --insecure        bypass certificate check
  -l, --limit=<value>   only return LIMIT number of packages
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
  $ aio runtime:package:ls
  $ aio runtime:pkg:list
  $ aio runtime:pkg:ls
  $ aio rt:package:list
  $ aio rt:package:ls
  $ aio rt:pkg:list
  $ aio rt:pkg:ls
```

## `aio runtime:pkg:update PACKAGENAME`

Updates a Package

```
USAGE
  $ aio runtime:pkg:update [PACKAGENAME] [--cert <value>] [--key <value>] [--apiversion <value>] [--apihost <value>] [-u
    <value>] [-i] [--debug <value>] [-v] [--version] [--help] [-p <value>] [-P <value>] [--shared true|yes|false|no] [-a
    <value>] [-A <value>] [--json]

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       parameter to be passed to the package for json file
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>            parameters in key value pairs to be passed to the package
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
  $ aio runtime:pkg:update
  $ aio rt:package:update
  $ aio rt:pkg:update
```

## `aio runtime:prop`

Execute property commands

```
USAGE
  $ aio runtime:prop [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:prop
  $ aio rt:prop
  $ aio rt:property
```

## `aio runtime:prop:get`

get property

```
USAGE
  $ aio runtime:prop:get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:prop:get
  $ aio rt:property:get
  $ aio rt:prop:get
```

## `aio runtime:prop:set`

set property

```
USAGE
  $ aio runtime:prop:set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:prop:set
  $ aio rt:property:set
  $ aio rt:prop:set
```

## `aio runtime:prop:unset`

unset property

```
USAGE
  $ aio runtime:prop:unset [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:prop:unset
  $ aio rt:property:unset
  $ aio rt:prop:unset
```

## `aio runtime:property`

Execute property commands

```
USAGE
  $ aio runtime:property [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:prop
  $ aio rt:prop
  $ aio rt:property
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/property/index.js)_

## `aio runtime:property:get`

get property

```
USAGE
  $ aio runtime:property:get [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:prop:get
  $ aio rt:property:get
  $ aio rt:prop:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/property/get.js)_

## `aio runtime:property:set`

set property

```
USAGE
  $ aio runtime:property:set [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:prop:set
  $ aio rt:property:set
  $ aio rt:prop:set
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/property/set.js)_

## `aio runtime:property:unset`

unset property

```
USAGE
  $ aio runtime:property:unset [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:prop:unset
  $ aio rt:property:unset
  $ aio rt:prop:unset
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/property/unset.js)_

## `aio runtime:route`

Manage your routes

```
USAGE
  $ aio runtime:route [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio runtime:api
  $ aio rt:api
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/route/index.js)_

## `aio runtime:route:create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`

create a new api route

```
USAGE
  $ aio runtime:route:create [BASEPATH] [RELPATH] [APIVERB] [ACTION] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i]
    [--debug <value>] [-v] [--version] [--help] [-n <value>] [-r html|http|json|text|svg|json] [-c <value>]

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
  $ aio runtime:api:create
  $ aio rt:route:create
  $ aio rt:api:create
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/route/create.js)_

## `aio runtime:route:delete BASEPATHORAPINAME [RELPATH] [APIVERB]`

delete an API

```
USAGE
  $ aio runtime:route:delete [BASEPATHORAPINAME] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i]
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
  $ aio runtime:api:delete
  $ aio rt:route:delete
  $ aio rt:api:delete
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/route/delete.js)_

## `aio runtime:route:get BASEPATHORAPINAME`

get API details

```
USAGE
  $ aio runtime:route:get [BASEPATHORAPINAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>]
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
  $ aio runtime:api:get
  $ aio rt:route:get
  $ aio rt:api:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/route/get.js)_

## `aio runtime:route:list [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio runtime:route:list [BASEPATH] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
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
  $ aio runtime:route:ls
  $ aio runtime:api:list
  $ aio runtime:api:ls
  $ aio rt:route:list
  $ aio rt:route:ls
  $ aio rt:api:list
  $ aio rt:api:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/route/list.js)_

## `aio runtime:route:ls [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio runtime:route:ls [BASEPATH] [RELPATH] [APIVERB] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
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
  $ aio runtime:route:ls
  $ aio runtime:api:list
  $ aio runtime:api:ls
  $ aio rt:route:list
  $ aio rt:route:ls
  $ aio rt:api:list
  $ aio rt:api:ls
```

## `aio runtime:rule`

Manage your rules

```
USAGE
  $ aio runtime:rule [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio rt:rule
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/rule/index.js)_

## `aio runtime:rule:create NAME TRIGGER ACTION`

Create a Rule

```
USAGE
  $ aio runtime:rule:create [NAME] [TRIGGER] [ACTION] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
    <value>] [-v] [--version] [--help] [--json]

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
  $ aio rt:rule:create
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/rule/create.js)_

## `aio runtime:rule:delete NAME`

Delete a Rule

```
USAGE
  $ aio runtime:rule:delete [NAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [--json]

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
  $ aio rt:rule:delete
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/rule/delete.js)_

## `aio runtime:rule:disable NAME`

Disable a Rule

```
USAGE
  $ aio runtime:rule:disable [NAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help]

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
  $ aio rt:rule:disable
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/rule/disable.js)_

## `aio runtime:rule:enable NAME`

Enable a Rule

```
USAGE
  $ aio runtime:rule:enable [NAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help]

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
  $ aio rt:rule:enable
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/rule/enable.js)_

## `aio runtime:rule:get NAME`

Retrieves a Rule

```
USAGE
  $ aio runtime:rule:get [NAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help]

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
  $ aio rt:rule:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/rule/get.js)_

## `aio runtime:rule:list`

Retrieves a list of Rules

```
USAGE
  $ aio runtime:rule:list [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of rules
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  Limit number of rules returned
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
  $ aio runtime:rule:ls
  $ aio rt:rule:list
  $ aio rt:rule:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/rule/list.js)_

## `aio runtime:rule:ls`

Retrieves a list of Rules

```
USAGE
  $ aio runtime:rule:ls [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of rules
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  Limit number of rules returned
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
  $ aio runtime:rule:ls
  $ aio rt:rule:list
  $ aio rt:rule:ls
```

## `aio runtime:rule:status NAME`

Gets the status of a rule

```
USAGE
  $ aio runtime:rule:status [NAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help]

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
  $ aio rt:rule:status
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/rule/status.js)_

## `aio runtime:rule:update NAME TRIGGER ACTION`

Update a Rule

```
USAGE
  $ aio runtime:rule:update [NAME] [TRIGGER] [ACTION] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug
    <value>] [-v] [--version] [--help] [--json]

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
  $ aio rt:rule:update
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/rule/update.js)_

## `aio runtime:trigger`

Manage your triggers

```
USAGE
  $ aio runtime:trigger [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
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
  $ aio rt:trigger
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/trigger/index.js)_

## `aio runtime:trigger:create TRIGGERNAME`

Create a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime:trigger:create [TRIGGERNAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>] [-a <value>] [-A <value>] [-f <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -f, --feed=<value>             trigger feed ACTION_NAME
  -i, --insecure                 bypass certificate check
  -p, --param=<value>            parameter values in KEY VALUE format
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
  $ aio rt:trigger:create
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/trigger/create.js)_

## `aio runtime:trigger:delete TRIGGERPATH`

Delete a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime:trigger:delete [TRIGGERPATH] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
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
  $ aio rt:trigger:delete
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/trigger/delete.js)_

## `aio runtime:trigger:fire TRIGGERNAME`

Fire a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime:trigger:fire [TRIGGERNAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -P, --param-file=<value>  FILE containing parameter values in JSON format
  -i, --insecure            bypass certificate check
  -p, --param=<value>       parameter values in KEY VALUE format
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
  $ aio rt:trigger:fire
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/trigger/fire.js)_

## `aio runtime:trigger:get TRIGGERPATH`

Get a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime:trigger:get [TRIGGERPATH] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
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
  $ aio rt:trigger:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/trigger/get.js)_

## `aio runtime:trigger:list`

Lists all of your triggers for Adobe I/O Runtime

```
USAGE
  $ aio runtime:trigger:list [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of triggers
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  [default: 30] only return LIMIT number of triggers
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
  $ aio runtime:trigger:ls
  $ aio rt:trigger:list
  $ aio rt:trigger:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/trigger/list.js)_

## `aio runtime:trigger:ls`

Lists all of your triggers for Adobe I/O Runtime

```
USAGE
  $ aio runtime:trigger:ls [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v] [--version]
    [--help] [-l <value>] [-s <value>] [-c] [--json] [--name-sort] [-n]

FLAGS
  -c, --count          show only the total number of triggers
  -i, --insecure       bypass certificate check
  -l, --limit=<value>  [default: 30] only return LIMIT number of triggers
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
  $ aio runtime:trigger:ls
  $ aio rt:trigger:list
  $ aio rt:trigger:ls
```

## `aio runtime:trigger:update TRIGGERNAME`

Update or create a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime:trigger:update [TRIGGERNAME] [--cert] [--key] [--apiversion] [--apihost] [-u] [-i] [--debug <value>] [-v]
    [--version] [--help] [-p <value>] [-P <value>] [-a <value>] [-A <value>]

ARGUMENTS
  TRIGGERNAME  The name of the trigger

FLAGS
  -A, --annotation-file=<value>  FILE containing annotation values in JSON format
  -P, --param-file=<value>       FILE containing parameter values in JSON format
  -a, --annotation=<value>       annotation values in KEY VALUE format
  -i, --insecure                 bypass certificate check
  -p, --param=<value>            parameter values in KEY VALUE format
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
  $ aio rt:trigger:update
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/5.4.0/src/commands/runtime/trigger/update.js)_

## `aio telemetry yes`

Help us improve the Adobe Developer CLI

```
USAGE
  $ aio telemetry yes
  $ aio telemetry off
  $ aio telemetry

ARGUMENTS
  STATE  (on|off|yes|no) set telemetry state

DESCRIPTION
  Help us improve the Adobe Developer CLI

  Allow the Adobe Developer CLI to collect anonymous usage data
```

_See code: [@adobe/aio-cli-plugin-telemetry](https://github.com/adobe/aio-cli-plugin-telemetry/blob/v0.4.0/src/commands/telemetry/index.js)_

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

_See code: [src/commands/update.ts](https://github.com/adobe/aio-cli/blob/8.3.0/src/commands/update.ts)_

## `aio where`

Show the currently selected Organization, Project and Workspace

```
USAGE
  $ aio where [--help] [-j] [-y]

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
