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
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [aio cli health](#aio-cli-health)
* [Getting started](#getting-started)
* [Technical requirements](#technical-requirements)
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
| [@adobe/aio-cli](https://github.com/adobe/aio-cli)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli.svg)](https://npmjs.org/package/@adobe/aio-cli)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli.svg)](https://npmjs.org/package/@adobe/aio-cli)| [![Build Status](https://travis-ci.com/adobe/aio-cli.svg?branch=master)](https://travis-ci.com/adobe/aio-cli)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli.svg)](https://github.com/adobe/aio-cli/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli.svg)](https://github.com/adobe/aio-cli/pulls)|
| [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-config.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-config)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-config.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-config)| [![Build Status](https://travis-ci.com/adobe/aio-cli-plugin-config.svg?branch=master)](https://travis-ci.com/adobe/aio-cli-plugin-config)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-config/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-config/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-config.svg)](https://github.com/adobe/aio-cli-plugin-config/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-config.svg)](https://github.com/adobe/aio-cli-plugin-config/pulls)|
| [@adobe/aio-cli-plugin-jwt-auth](https://github.com/adobe/aio-cli-plugin-jwt-auth)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-jwt-auth.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-jwt-auth)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-jwt-auth.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-jwt-auth)| [![Build Status](https://travis-ci.com/adobe/aio-cli-plugin-jwt-auth.svg?branch=master)](https://travis-ci.com/adobe/aio-cli-plugin-jwt-auth)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-jwt-auth/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-jwt-auth/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-jwt-auth.svg)](https://github.com/adobe/aio-cli-plugin-jwt-auth/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-jwt-auth.svg)](https://github.com/adobe/aio-cli-plugin-jwt-auth/pulls)|
| [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-console.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-console)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-console.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-console)| [![Build Status](https://travis-ci.com/adobe/aio-cli-plugin-console.svg?branch=master)](https://travis-ci.com/adobe/aio-cli-plugin-console)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-console/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-console/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-console.svg)](https://github.com/adobe/aio-cli-plugin-console/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-console.svg)](https://github.com/adobe/aio-cli-plugin-console/pulls)|
| [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-runtime.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-runtime)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-runtime.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-runtime)| [![Build Status](https://travis-ci.com/adobe/aio-cli-plugin-runtime.svg?branch=master)](https://travis-ci.com/adobe/aio-cli-plugin-runtime)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-runtime/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-runtime/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-runtime.svg)](https://github.com/adobe/aio-cli-plugin-runtime/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-runtime.svg)](https://github.com/adobe/aio-cli-plugin-runtime/pulls)|
| [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-app.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-app)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-app.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-app)| [![Build Status](https://travis-ci.com/adobe/aio-cli-plugin-app.svg?branch=master)](https://travis-ci.com/adobe/aio-cli-plugin-app)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-app/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-app/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-app.svg)](https://github.com/adobe/aio-cli-plugin-app/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-app.svg)](https://github.com/adobe/aio-cli-plugin-app/pulls)|
| [@adobe/aio-cli-plugin-auth](https://github.com/adobe/aio-cli-plugin-auth)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-auth.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-auth)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-auth.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-auth)| [![Build Status](https://travis-ci.com/adobe/aio-cli-plugin-auth.svg?branch=master)](https://travis-ci.com/adobe/aio-cli-plugin-auth)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-auth/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-auth/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-auth.svg)](https://github.com/adobe/aio-cli-plugin-auth/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-auth.svg)](https://github.com/adobe/aio-cli-plugin-auth/pulls)|
| [@adobe/aio-cli-plugin-certificate](https://github.com/adobe/aio-cli-plugin-certificate)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-certificate.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-certificate)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-certificate.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-certificate)| [![Build Status](https://travis-ci.com/adobe/aio-cli-plugin-certificate.svg?branch=master)](https://travis-ci.com/adobe/aio-cli-plugin-certificate)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-certificate/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-certificate/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-certificate.svg)](https://github.com/adobe/aio-cli-plugin-certificate/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-certificate.svg)](https://github.com/adobe/aio-cli-plugin-certificate/pulls)|
| [@adobe/aio-cli-plugin-info](https://github.com/adobe/aio-cli-plugin-info)  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-info.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-info)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-info.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-info)| [![Build Status](https://travis-ci.com/adobe/aio-cli-plugin-info.svg?branch=master)](https://travis-ci.com/adobe/aio-cli-plugin-info)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-info/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-info/)| [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-info.svg)](https://github.com/adobe/aio-cli-plugin-info/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-info.svg)](https://github.com/adobe/aio-cli-plugin-info/pulls)|
| [@adobe/generator-aio-app](https://github.com/adobe/generator-aio-app)  | [![Version](https://img.shields.io/npm/v/@adobe/generator-aio-app.svg)](https://npmjs.org/package/@adobe/generator-aio-app)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/generator-aio-app.svg)](https://npmjs.org/package/@adobe/generator-aio-app)| [![Build Status](https://travis-ci.com/adobe/generator-aio-app.svg?branch=master)](https://travis-ci.com/adobe/generator-aio-app)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/generator-aio-app/master.svg?style=flat-square)](https://codecov.io/gh/adobe/generator-aio-app/)| [![Github Issues](https://img.shields.io/github/issues/adobe/generator-aio-app.svg)](https://github.com/adobe/generator-aio-app/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/generator-aio-app.svg)](https://github.com/adobe/generator-aio-app/pulls)|
<!-- healthstop -->

# Getting started

See the [Project Firefly docs](https://www.adobe.io/apis/experienceplatform/project-firefly/docs.html)

# Technical requirements

See the [Project Firefly `Setting up Your Environment` doc](https://www.adobe.io/apis/experienceplatform/project-firefly/docs.html#!AdobeDocs/project-firefly/master/getting_started/setup.md)

# Usage
<!-- usage -->
```sh-session
$ npm install -g @adobe/aio-cli
$ aio COMMAND
running command...
$ aio (-v|--version|version)
@adobe/aio-cli/7.1.0 win32-x64 node-v14.17.0
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
$ aio (-v|--version|version)
@adobe/aio-cli/7.0.0 darwin-x64 node-v14.16.0
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
* [`aio app:add:ci`](#aio-appaddci)
* [`aio app:add:event`](#aio-appaddevent)
* [`aio app:add:service`](#aio-appaddservice)
* [`aio app:add:web-assets`](#aio-appaddweb-assets)
* [`aio app:build`](#aio-appbuild)
* [`aio app:create [PATH]`](#aio-appcreate-path)
* [`aio app:delete`](#aio-appdelete)
* [`aio app:delete:action [ACTION-NAME]`](#aio-appdeleteaction-action-name)
* [`aio app:delete:ci`](#aio-appdeleteci)
* [`aio app:delete:event EVENT-ACTION-NAME`](#aio-appdeleteevent-event-action-name)
* [`aio app:delete:service`](#aio-appdeleteservice)
* [`aio app:delete:web-assets`](#aio-appdeleteweb-assets)
* [`aio app:deploy`](#aio-appdeploy)
* [`aio app:get-url [ACTION]`](#aio-appget-url-action)
* [`aio app:info`](#aio-appinfo)
* [`aio app:init [PATH]`](#aio-appinit-path)
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
* [`aio config:delete KEYS...`](#aio-configdelete-keys)
* [`aio config:edit`](#aio-configedit)
* [`aio config:get KEY`](#aio-configget-key)
* [`aio config:list`](#aio-configlist)
* [`aio config set key 'a value'       # set key to 'a value'`](#aio-config-set-key-a-value--------set-key-to-a-value)
* [`aio console`](#aio-console)
* [`aio console:org`](#aio-consoleorg)
* [`aio console:org:list`](#aio-consoleorglist)
* [`aio console:org:select [ORGCODE]`](#aio-consoleorgselect-orgcode)
* [`aio console:project`](#aio-consoleproject)
* [`aio console:project:list`](#aio-consoleprojectlist)
* [`aio console:project:select [PROJECTIDORNAME]`](#aio-consoleprojectselect-projectidorname)
* [`aio console:where`](#aio-consolewhere)
* [`aio console:workspace`](#aio-consoleworkspace)
* [`aio console:workspace:download [DESTINATION]`](#aio-consoleworkspacedownload-destination)
* [`aio console:workspace:list`](#aio-consoleworkspacelist)
* [`aio console:workspace:select [WORKSPACEIDORNAME]`](#aio-consoleworkspaceselect-workspaceidorname)
* [`aio discover`](#aio-discover)
* [`aio event`](#aio-event)
* [`aio event:eventmetadata`](#aio-eventeventmetadata)
* [`aio event:eventmetadata:create PROVIDERID`](#aio-eventeventmetadatacreate-providerid)
* [`aio event:eventmetadata:delete PROVIDERID [EVENTCODE]`](#aio-eventeventmetadatadelete-providerid-eventcode)
* [`aio event:eventmetadata:get PROVIDERID EVENTCODE`](#aio-eventeventmetadataget-providerid-eventcode)
* [`aio event:eventmetadata:list PROVIDERID`](#aio-eventeventmetadatalist-providerid)
* [`aio event:eventmetadata:update PROVIDERID EVENTCODE`](#aio-eventeventmetadataupdate-providerid-eventcode)
* [`aio event:provider`](#aio-eventprovider)
* [`aio event:provider:create`](#aio-eventprovidercreate)
* [`aio event:provider:delete PROVIDERID`](#aio-eventproviderdelete-providerid)
* [`aio event:provider:get PROVIDERID`](#aio-eventproviderget-providerid)
* [`aio event:provider:list`](#aio-eventproviderlist)
* [`aio event:provider:update PROVIDERID`](#aio-eventproviderupdate-providerid)
* [`aio event:registration`](#aio-eventregistration)
* [`aio event:registration:create BODYJSONFILE`](#aio-eventregistrationcreate-bodyjsonfile)
* [`aio event:registration:delete REGISTRATIONID`](#aio-eventregistrationdelete-registrationid)
* [`aio event:registration:get REGISTRATIONID`](#aio-eventregistrationget-registrationid)
* [`aio event:registration:list`](#aio-eventregistrationlist)
* [`aio help [COMMAND]`](#aio-help-command)
* [`aio info`](#aio-info)
* [`aio plugins`](#aio-plugins)
* [`aio plugins:inspect PLUGIN...`](#aio-pluginsinspect-plugin)
* [`aio plugins:install PLUGIN...`](#aio-pluginsinstall-plugin)
* [`aio plugins:link PLUGIN`](#aio-pluginslink-plugin)
* [`aio plugins:uninstall PLUGIN...`](#aio-pluginsuninstall-plugin)
* [`aio plugins:update`](#aio-pluginsupdate)
* [`aio report`](#aio-report)
* [`aio rollback`](#aio-rollback)
* [`aio runtime`](#aio-runtime)
* [`aio runtime:action`](#aio-runtimeaction)
* [`aio runtime:action:create ACTIONNAME [ACTIONPATH]`](#aio-runtimeactioncreate-actionname-actionpath)
* [`aio runtime:action:delete ACTIONNAME`](#aio-runtimeactiondelete-actionname)
* [`aio runtime:action:get ACTIONNAME`](#aio-runtimeactionget-actionname)
* [`aio runtime:action:invoke ACTIONNAME`](#aio-runtimeactioninvoke-actionname)
* [`aio runtime:action:list [PACKAGENAME]`](#aio-runtimeactionlist-packagename)
* [`aio runtime:action:update ACTIONNAME [ACTIONPATH]`](#aio-runtimeactionupdate-actionname-actionpath)
* [`aio runtime:activation`](#aio-runtimeactivation)
* [`aio runtime:activation:get [ACTIVATIONID]`](#aio-runtimeactivationget-activationid)
* [`aio runtime:activation:list [ACTIVATION_NAME]`](#aio-runtimeactivationlist-activation_name)
* [`aio runtime:activation:logs [ACTIVATIONID]`](#aio-runtimeactivationlogs-activationid)
* [`aio runtime:activation:result [ACTIVATIONID]`](#aio-runtimeactivationresult-activationid)
* [`aio runtime:deploy`](#aio-runtimedeploy)
* [`aio runtime:deploy:export`](#aio-runtimedeployexport)
* [`aio runtime:deploy:report`](#aio-runtimedeployreport)
* [`aio runtime:deploy:sync`](#aio-runtimedeploysync)
* [`aio runtime:deploy:undeploy`](#aio-runtimedeployundeploy)
* [`aio runtime:deploy:version`](#aio-runtimedeployversion)
* [`aio runtime:namespace`](#aio-runtimenamespace)
* [`aio runtime:namespace:get`](#aio-runtimenamespaceget)
* [`aio runtime:namespace:list`](#aio-runtimenamespacelist)
* [`aio runtime:package`](#aio-runtimepackage)
* [`aio runtime:package:bind PACKAGENAME BINDPACKAGENAME`](#aio-runtimepackagebind-packagename-bindpackagename)
* [`aio runtime:package:create PACKAGENAME`](#aio-runtimepackagecreate-packagename)
* [`aio runtime:package:delete PACKAGENAME`](#aio-runtimepackagedelete-packagename)
* [`aio runtime:package:get PACKAGENAME`](#aio-runtimepackageget-packagename)
* [`aio runtime:package:list [NAMESPACE]`](#aio-runtimepackagelist-namespace)
* [`aio runtime:package:update PACKAGENAME`](#aio-runtimepackageupdate-packagename)
* [`aio runtime:property`](#aio-runtimeproperty)
* [`aio runtime:property:get`](#aio-runtimepropertyget)
* [`aio runtime:property:set`](#aio-runtimepropertyset)
* [`aio runtime:property:unset`](#aio-runtimepropertyunset)
* [`aio runtime:route`](#aio-runtimeroute)
* [`aio runtime:route:create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`](#aio-runtimeroutecreate-basepath-relpath-apiverb-action)
* [`aio runtime:route:delete BASEPATHORAPINAME [RELPATH] [APIVERB]`](#aio-runtimeroutedelete-basepathorapiname-relpath-apiverb)
* [`aio runtime:route:get BASEPATHORAPINAME`](#aio-runtimerouteget-basepathorapiname)
* [`aio runtime:route:list [BASEPATH] [RELPATH] [APIVERB]`](#aio-runtimeroutelist-basepath-relpath-apiverb)
* [`aio runtime:rule`](#aio-runtimerule)
* [`aio runtime:rule:create NAME TRIGGER ACTION`](#aio-runtimerulecreate-name-trigger-action)
* [`aio runtime:rule:delete NAME`](#aio-runtimeruledelete-name)
* [`aio runtime:rule:disable NAME`](#aio-runtimeruledisable-name)
* [`aio runtime:rule:enable NAME`](#aio-runtimeruleenable-name)
* [`aio runtime:rule:get NAME`](#aio-runtimeruleget-name)
* [`aio runtime:rule:list`](#aio-runtimerulelist)
* [`aio runtime:rule:status NAME`](#aio-runtimerulestatus-name)
* [`aio runtime:rule:update NAME TRIGGER ACTION`](#aio-runtimeruleupdate-name-trigger-action)
* [`aio runtime:trigger`](#aio-runtimetrigger)
* [`aio runtime:trigger:create TRIGGERNAME`](#aio-runtimetriggercreate-triggername)
* [`aio runtime:trigger:delete TRIGGERPATH`](#aio-runtimetriggerdelete-triggerpath)
* [`aio runtime:trigger:fire TRIGGERNAME`](#aio-runtimetriggerfire-triggername)
* [`aio runtime:trigger:get TRIGGERPATH`](#aio-runtimetriggerget-triggerpath)
* [`aio runtime:trigger:list`](#aio-runtimetriggerlist)
* [`aio runtime:trigger:update TRIGGERNAME`](#aio-runtimetriggerupdate-triggername)
* [`aio update`](#aio-update)

## `aio app`

Create, run, test, and deploy Adobe I/O Apps

```
Create, run, test, and deploy Adobe I/O Apps

USAGE
  $ aio app

OPTIONS
  -v, --verbose  Verbose output
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/index.js)_

## `aio app:add`

Add a new component to an existing Adobe I/O App

```
Add a new component to an existing Adobe I/O App

USAGE
  $ aio app:add

OPTIONS
  -v, --verbose  Verbose output
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/add/index.js)_

## `aio app:add:action`

Add a new action

```
Add a new action


USAGE
  $ aio app:add:action

OPTIONS
  -v, --verbose   Verbose output
  -y, --yes       Skip questions, and use all default values
  --skip-install  Skip npm installation after files are created
  --version       Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/add/action.js)_

## `aio app:add:ci`

Add CI files

```
Add CI files


USAGE
  $ aio app:add:ci

OPTIONS
  -v, --verbose  Verbose output
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/add/ci.js)_

## `aio app:add:event`

Add a new Adobe I/O Events action

```
Add a new Adobe I/O Events action


USAGE
  $ aio app:add:event

OPTIONS
  -v, --verbose   Verbose output
  -y, --yes       Skip questions, and use all default values
  --skip-install  Skip npm installation after files are created
  --version       Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/add/event.js)_

## `aio app:add:service`

Subscribe to Services in the current Workspace

```
Subscribe to Services in the current Workspace


USAGE
  $ aio app:add:service

OPTIONS
  -v, --verbose  Verbose output
  --version      Show version

ALIASES
  $ aio app:add:services
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/add/service.js)_

## `aio app:add:web-assets`

Add web assets support

```
Add web assets support


USAGE
  $ aio app:add:web-assets

OPTIONS
  -v, --verbose   Verbose output
  -y, --yes       Skip questions, and use all default values
  --skip-install  Skip npm installation after files are created
  --version       Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/add/web-assets.js)_

## `aio app:build`

Build an Adobe I/O App

```
Build an Adobe I/O App

This will always force a rebuild unless --no-force-build is set.


USAGE
  $ aio app:build

OPTIONS
  -a, --action=action  Build only a specific action, the flags can be specified multiple times
  -v, --verbose        Verbose output
  --[no-]content-hash  Enable content hashing in browser code (default: true)
  --[no-]force-build   Forces a build even if one already exists (default: true)
  --skip-actions       Skip build of actions
  --skip-static        Skip build of static files
  --skip-web-assets    Skip build of web assets
  --version            Show version

DESCRIPTION
  This will always force a rebuild unless --no-force-build is set.
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/build.js)_

## `aio app:create [PATH]`

Create a new Adobe I/O App with default parameters

```
Create a new Adobe I/O App with default parameters


USAGE
  $ aio app:create [PATH]

ARGUMENTS
  PATH  [default: .] Path to the app directory

OPTIONS
  -i, --import=import  Import an Adobe I/O Developer Console configuration file
  -v, --verbose        Verbose output
  --version            Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/create.js)_

## `aio app:delete`

Delete a component from an existing Adobe I/O App

```
Delete a component from an existing Adobe I/O App

USAGE
  $ aio app:delete

OPTIONS
  -v, --verbose  Verbose output
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/delete/index.js)_

## `aio app:delete:action [ACTION-NAME]`

Delete an existing action

```
Delete an existing action


USAGE
  $ aio app:delete:action [ACTION-NAME]

ARGUMENTS
  ACTION-NAME  Action name to delete, if not specified you will choose from a list of actions

OPTIONS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/delete/action.js)_

## `aio app:delete:ci`

Delete existing CI files

```
Delete existing CI files


USAGE
  $ aio app:delete:ci

OPTIONS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/delete/ci.js)_

## `aio app:delete:event EVENT-ACTION-NAME`

Delete an existing Adobe I/O Events action

```
Delete an existing Adobe I/O Events action


USAGE
  $ aio app:delete:event EVENT-ACTION-NAME

ARGUMENTS
  EVENT-ACTION-NAME  Action name to delete

OPTIONS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/delete/event.js)_

## `aio app:delete:service`

Delete Services in the current Workspace

```
Delete Services in the current Workspace


USAGE
  $ aio app:delete:service

OPTIONS
  -v, --verbose  Verbose output
  --version      Show version

ALIASES
  $ aio app:delete:services
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/delete/service.js)_

## `aio app:delete:web-assets`

Delete existing web assets

```
Delete existing web assets


USAGE
  $ aio app:delete:web-assets

OPTIONS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/delete/web-assets.js)_

## `aio app:deploy`

Build and deploy an Adobe I/O App

```
Build and deploy an Adobe I/O App

This will always force a rebuild unless --no-force-build is set. 


USAGE
  $ aio app:deploy

OPTIONS
  -a, --action=action  Deploy only a specific action, the flags can be specified multiple times
  -v, --verbose        Verbose output
  --[no-]content-hash  Enable content hashing in browser code (default: true)
  --[no-]force-build   Forces a build even if one already exists (default: true)
  --open               Open the default web browser after a successful deploy, only valid if your app has a front-end
  --skip-actions       Skip action build & deploy
  --skip-build         Skip build phase
  --skip-deploy        Skip deploy phase
  --skip-static        Skip build & deployment of static files
  --skip-web-assets    Skip build & deployment of web assets
  --version            Show version

DESCRIPTION
  This will always force a rebuild unless --no-force-build is set.
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/deploy.js)_

## `aio app:get-url [ACTION]`

Get action URLs

```
Get action URLs

USAGE
  $ aio app:get-url [ACTION]

OPTIONS
  -h, --hson     Output human readable json
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --cdn          Display CDN based action URLs
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/get-url.js)_

## `aio app:info`

Display settings/configuration in use by an Adobe I/O App

```
Display settings/configuration in use by an Adobe I/O App



USAGE
  $ aio app:info

OPTIONS
  -h, --hson     Output human readable json
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --[no-]mask    Hide known private info
  --version      Show version

DESCRIPTION
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/info.js)_

## `aio app:init [PATH]`

Create a new Adobe I/O App

```
Create a new Adobe I/O App


USAGE
  $ aio app:init [PATH]

ARGUMENTS
  PATH  [default: .] Path to the app directory

OPTIONS
  -i, --import=import  Import an Adobe I/O Developer Console configuration file
  -s, --skip-install   Skip npm installation after files are created
  -v, --verbose        Verbose output
  -y, --yes            Skip questions, and use all default values
  --[no-]login         Login using your Adobe ID for interacting with Adobe I/O Developer Console
  --version            Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/init.js)_

## `aio app:logs`

Fetch logs for an Adobe I/O App

```
Fetch logs for an Adobe I/O App


USAGE
  $ aio app:logs

OPTIONS
  -a, --action=action  Fetch logs for a specific action
  -l, --limit=limit    [default: 1] Limit number of activations to fetch logs from ( 1-50 )
  -o, --poll           Fetch logs continuously
  -r, --strip          strip timestamp information and output first line only
  -t, --tail           Fetch logs continuously
  -v, --verbose        Verbose output
  -w, --watch          Fetch logs continuously
  --version            Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/logs.js)_

## `aio app:run`

Run an Adobe I/O App

```
Run an Adobe I/O App

USAGE
  $ aio app:run

OPTIONS
  -v, --verbose   Verbose output
  --local         run/debug actions locally ( requires Docker running )
  --open          Open the default web browser after a successful run, only valid if your app has a front-end
  --[no-]serve    start frontend server (experimental)
  --skip-actions  skip actions, only run the ui server
  --version       Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/run.js)_

## `aio app:test`

Run tests for an Adobe I/O App

```
Run tests for an Adobe I/O App


USAGE
  $ aio app:test

OPTIONS
  -e, --e2e      runs e2e tests.
  -u, --unit     runs unit tests (default).
  -v, --verbose  Verbose output
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/test.js)_

## `aio app:undeploy`

Undeploys an Adobe I/O App

```
Undeploys an Adobe I/O App


USAGE
  $ aio app:undeploy

OPTIONS
  -v, --verbose      Verbose output
  --skip-actions     Skip undeployment of actions
  --skip-static      Skip undeployment of static files
  --skip-web-assets  Skip undeployment of web assets
  --version          Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/undeploy.js)_

## `aio app:use [CONFIG_FILE_PATH]`

Import an Adobe Developer Console configuration file.

```
Import an Adobe Developer Console configuration file.

If the optional configuration file is not set, this command will retrieve the console org, project, and workspace settings from the global config.

To set these global config values, see the help text for 'aio console --help'.

To download the configuration file for your project, select the 'Download' button in the toolbar of your project's page in https://console.adobe.io


USAGE
  $ aio app:use [CONFIG_FILE_PATH]

ARGUMENTS
  CONFIG_FILE_PATH  path to an Adobe I/O Developer Console configuration file

OPTIONS
  -g, --global                         Use the global Adobe Developer Console Org / Project / Workspace configuration,
                                       which can be set via `aio console` commands

  -v, --verbose                        Verbose output

  -w, --workspace-name=workspace-name  Specify the Adobe Developer Console Workspace name to import the configuration
                                       from

  --confirm-service-sync               Skip the Service sync prompt and overwrite Service subscriptions in the new
                                       Workspace with current subscriptions

  --merge                              Merge any .aio and .env files during import of the Adobe Developer Console
                                       configuration file

  --no-input                           Skip user prompts by setting --no-service-sync and --merge. Requires one of
                                       config_file_path or --global or --workspace-name

  --no-service-sync                    Skip the Service sync prompt and do not attach current Service subscriptions to
                                       the new Workspace

  --overwrite                          Overwrite any .aio and .env files during import of the Adobe Developer Console
                                       configuration file

  --version                            Show version

  --workspace                          Prompt for selection of a Workspace in the same Project, and import the
                                       configuration for this Workspace

DESCRIPTION
  If the optional configuration file is not set, this command will retrieve the console org, project, and workspace 
  settings from the global config.

  To set these global config values, see the help text for 'aio console --help'.

  To download the configuration file for your project, select the 'Download' button in the toolbar of your project's 
  page in https://console.adobe.io
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.2/src/commands/app/use.js)_

## `aio auth`

Adobe IMS commands to login and logout.

```
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


USAGE
  $ aio auth

DESCRIPTION
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

EXAMPLE
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

_See code: [@adobe/aio-cli-plugin-auth](https://github.com/adobe/aio-cli-plugin-auth/blob/2.4.1/src/commands/auth/index.js)_

## `aio auth:ctx`

Manage Adobe IMS contexts.

```
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


USAGE
  $ aio auth:ctx

OPTIONS
  -c, --ctx=ctx  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -g, --global   global config
  -l, --local    local config
  -s, --set=set  Sets the name of the current local Adobe IMS context
  -v, --verbose  Verbose output
  --debug=debug  Debug level output
  --list         Names of the Adobe IMS contexts as an array
  --value        Prints named or current Adobe IMS context data

DESCRIPTION
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

_See code: [@adobe/aio-cli-plugin-auth](https://github.com/adobe/aio-cli-plugin-auth/blob/2.4.1/src/commands/auth/ctx.js)_

## `aio auth:login`

Log in with a certain Adobe IMS context and returns the access token.

```
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
  plugin will launch a Chromium browser to guide the user through the
  login process. The plugin itself will *never* see the user's
  password but only receive the authorization token after the
  user authenticated with Adobe IMS.


USAGE
  $ aio auth:login

OPTIONS
  -b, --bare     print access token only
  -c, --ctx=ctx  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -d, --decode   Decode and display access token data

  -f, --force    Force logging in. This causes a forced logout on the context first and makes sure to not use any cached
                 data when calling the plugin.

  -g, --global   global config

  -l, --local    local config

  -v, --verbose  Verbose output

  --debug=debug  Debug level output

DESCRIPTION
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
     plugin will launch a Chromium browser to guide the user through the
     login process. The plugin itself will *never* see the user's
     password but only receive the authorization token after the
     user authenticated with Adobe IMS.

ALIASES
  $ aio login
```

_See code: [@adobe/aio-cli-plugin-auth](https://github.com/adobe/aio-cli-plugin-auth/blob/2.4.1/src/commands/auth/login.js)_

## `aio auth:logout`

Log out the current or a named Adobe IMS context.

```
Log out the current or a named Adobe IMS context.

This command can be called multiple times on the same Adobe IMS context with
out causing any errors. The assumption is that after calling this command
without an error, the Adobe IMS context's access and refresh tokens have been
invalidated and removed from persistent storage. Repeatedly calling this
command will just do nothing.


USAGE
  $ aio auth:logout

OPTIONS
  -c, --ctx=ctx  Name of the Adobe IMS context to use. Default is the current Adobe IMS context

  -f, --force    Invalidate the refresh token as well as all access tokens.
                 Otherwise only the access token is invalidated. For Adobe IMS
                 contexts not supporting refresh tokens, this flag has no
                 effect.

  -g, --global   global config

  -l, --local    local config

  -v, --verbose  Verbose output

  --debug=debug  Debug level output

DESCRIPTION
  This command can be called multiple times on the same Adobe IMS context with
  out causing any errors. The assumption is that after calling this command
  without an error, the Adobe IMS context's access and refresh tokens have been
  invalidated and removed from persistent storage. Repeatedly calling this
  command will just do nothing.

ALIASES
  $ aio logout
```

_See code: [@adobe/aio-cli-plugin-auth](https://github.com/adobe/aio-cli-plugin-auth/blob/2.4.1/src/commands/auth/logout.js)_

## `aio autocomplete [SHELL]`

display autocomplete installation instructions

```
display autocomplete installation instructions

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

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.3.0/src/commands/autocomplete/index.ts)_

## `aio certificate`

Generate or verify a certificate for use with Adobe I/O

```
Generate or verify a certificate for use with Adobe I/O

USAGE
  $ aio certificate
```

_See code: [@adobe/aio-cli-plugin-certificate](https://github.com/adobe/aio-cli-plugin-certificate/blob/0.3.0/src/commands/certificate/index.js)_

## `aio certificate:generate`

Generate a new private/public key pair

```
Generate a new private/public key pair
Generate a self-signed certificate to enable https:// on localhost or signing jwt payloads for interacting with Adobe services.


USAGE
  $ aio certificate:generate

OPTIONS
  -c, --country=country            Country Name
  -l, --locality=locality          Locality, or city name

  -n, --name=name                  [default: selfsign.localhost] Common Name: typically a host domain name, like
                                   www.mysite.com

  -o, --organization=organization  Organization name

  -s, --state=state                State or Province

  -u, --unit=unit                  Organizational unit or department

  --days=days                      [default: 365] Number of days the certificate should be valid for. (Max 365)

  --keyout=keyout                  [default: private.key] file to send the key to

  --out=out                        [default: certificate_pub.crt] output file

DESCRIPTION
  Generate a self-signed certificate to enable https:// on localhost or signing jwt payloads for interacting with Adobe 
  services.
```

_See code: [@adobe/aio-cli-plugin-certificate](https://github.com/adobe/aio-cli-plugin-certificate/blob/0.3.0/src/commands/certificate/generate.js)_

## `aio certificate:verify FILE`

Verify a certificate for use with Adobe I/O

```
Verify a certificate for use with Adobe I/O
Verifies that the certificate is valid, and/or will not expire in [--days] days from now.


USAGE
  $ aio certificate:verify FILE

ARGUMENTS
  FILE  file path to certificate to verify

OPTIONS
  --days=days  +- is certificate valid in --days

DESCRIPTION
  Verifies that the certificate is valid, and/or will not expire in [--days] days from now.
```

_See code: [@adobe/aio-cli-plugin-certificate](https://github.com/adobe/aio-cli-plugin-certificate/blob/0.3.0/src/commands/certificate/verify.js)_

## `aio config`

list, get, set, delete, and edit persistent configuration data

```
list, get, set, delete, and edit persistent configuration data

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

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/2.3.0/src/commands/config/index.js)_

## `aio config:clear`

clears all persistent config values

```
clears all persistent config values

USAGE
  $ aio config:clear

OPTIONS
  -f, --force   do not prompt for confirmation
  -g, --global  global config
  -l, --local   local config
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/2.3.0/src/commands/config/clear.js)_

## `aio config:delete KEYS...`

deletes persistent config values

```
deletes persistent config values

USAGE
  $ aio config:delete KEYS...

OPTIONS
  -g, --global  global config
  -l, --local   local config

ALIASES
  $ aio config:del
  $ aio config:rm
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/2.3.0/src/commands/config/delete.js)_

## `aio config:edit`

edit config file

```
edit config file

USAGE
  $ aio config:edit

OPTIONS
  -g, --global  global config
  -l, --local   local config
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/2.3.0/src/commands/config/edit.js)_

## `aio config:get KEY`

gets a persistent config value

```
gets a persistent config value

USAGE
  $ aio config:get KEY

OPTIONS
  -e, --env     environment variables
  -g, --global  global config
  -j, --json    output in json
  -l, --local   local config
  -y, --yaml    output in yaml
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/2.3.0/src/commands/config/get.js)_

## `aio config:list`

lists all persistent config values

```
lists all persistent config values

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

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/2.3.0/src/commands/config/list.js)_

## `aio config set key 'a value'       # set key to 'a value'`

sets a persistent config value

```
sets a persistent config value

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

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/2.3.0/src/commands/config/set.js)_

## `aio console`

Console plugin for the Adobe I/O CLI

```
Console plugin for the Adobe I/O CLI

USAGE
  $ aio console

OPTIONS
  --help  Show help
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/index.js)_

## `aio console:org`

Manage your Adobe I/O Console Organizations

```
Manage your Adobe I/O Console Organizations

USAGE
  $ aio console:org

OPTIONS
  --help  Show help
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/org/index.js)_

## `aio console:org:list`

List your Organizations

```
List your Organizations

USAGE
  $ aio console:org:list

OPTIONS
  -j, --json  Output json
  -y, --yml   Output yml
  --help      Show help

ALIASES
  $ aio console:org:ls
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/org/list.js)_

## `aio console:org:select [ORGCODE]`

Select an Organization

```
Select an Organization

USAGE
  $ aio console:org:select [ORGCODE]

ARGUMENTS
  ORGCODE  Adobe Developer Console Org code

OPTIONS
  --help  Show help

ALIASES
  $ aio console:org:sel
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/org/select.js)_

## `aio console:project`

Manage your Adobe I/O Console Projects

```
Manage your Adobe I/O Console Projects

USAGE
  $ aio console:project

OPTIONS
  --help  Show help
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/project/index.js)_

## `aio console:project:list`

List your Projects for the selected Organization

```
List your Projects for the selected Organization

USAGE
  $ aio console:project:list

OPTIONS
  -j, --json     Output json
  -y, --yml      Output yml
  --help         Show help
  --orgId=orgId  OrgID for listing projects

ALIASES
  $ aio console:project:ls
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/project/list.js)_

## `aio console:project:select [PROJECTIDORNAME]`

Select a Project for the selected Organization

```
Select a Project for the selected Organization

USAGE
  $ aio console:project:select [PROJECTIDORNAME]

ARGUMENTS
  PROJECTIDORNAME  Adobe Developer Console Project id or Project name

OPTIONS
  --help         Show help
  --orgId=orgId  Organization id of the Console Project to select

ALIASES
  $ aio console:project:sel
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/project/select.js)_

## `aio console:where`

Show the currently selected Organization, Project and Workspace

```
Show the currently selected Organization, Project and Workspace

USAGE
  $ aio console:where

OPTIONS
  -j, --json  Output json
  -y, --yml   Output yml
  --help      Show help

ALIASES
  $ aio where
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/where/index.js)_

## `aio console:workspace`

Manage your Adobe I/O Console Workspaces

```
Manage your Adobe I/O Console Workspaces

USAGE
  $ aio console:workspace

OPTIONS
  --help  Show help

ALIASES
  $ aio console:ws
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/workspace/index.js)_

## `aio console:workspace:download [DESTINATION]`

Downloads the configuration for the selected Workspace

```
Downloads the configuration for the selected Workspace

USAGE
  $ aio console:workspace:download [DESTINATION]

ARGUMENTS
  DESTINATION  Output file name or folder name where the Console Workspace configuration file should be saved

OPTIONS
  --help                     Show help
  --orgId=orgId              Organization id of the Console Workspace configuration to download
  --projectId=projectId      Project id of the Console Workspace configuration to download
  --workspaceId=workspaceId  Workspace id of the Console Workspace configuration to download

ALIASES
  $ aio console:workspace:dl
  $ aio console:ws:download
  $ aio console:ws:dl
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/workspace/download.js)_

## `aio console:workspace:list`

List your Workspaces for your selected Project

```
List your Workspaces for your selected Project

USAGE
  $ aio console:workspace:list

OPTIONS
  -j, --json             Output json
  -y, --yml              Output yml
  --help                 Show help
  --orgId=orgId          Organization id of the Console Workspaces to list
  --projectId=projectId  Project id of the Console Workspaces to list

ALIASES
  $ aio console:workspace:ls
  $ aio console:ws:list
  $ aio console:ws:ls
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/workspace/list.js)_

## `aio console:workspace:select [WORKSPACEIDORNAME]`

Select a Workspace for the selected Project

```
Select a Workspace for the selected Project

USAGE
  $ aio console:workspace:select [WORKSPACEIDORNAME]

ARGUMENTS
  WORKSPACEIDORNAME  Adobe Developer Console Workspace id or Workspace name

OPTIONS
  --help                 Show help
  --orgId=orgId          Organization id of the Console Workspace to select
  --projectId=projectId  Project id of the Console Workspace to select

ALIASES
  $ aio console:workspace:sel
  $ aio console:ws:select
  $ aio console:ws:sel
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/workspace/select.js)_

## `aio discover`

Discover plugins to install

```
Discover plugins to install
To install a plugin, run 'aio plugins install NAME'


USAGE
  $ aio discover

OPTIONS
  -f, --sort-field=date|name  [default: date] which column to sort, use the sort-order flag to specify sort direction
  -i, --install               interactive install mode

  -o, --sort-order=asc|desc   [default: desc] sort order for a column, use the sort-field flag to specify which column
                              to sort

DESCRIPTION
  To install a plugin, run 'aio plugins install NAME'

ALIASES
  $ aio plugins:discover
```

_See code: [src/commands/discover.js](https://github.com/adobe/aio-cli/blob/7.1.0/src/commands/discover.js)_

## `aio event`

Manage your Adobe I/O Events

```
Manage your Adobe I/O Events

USAGE
  $ aio event

OPTIONS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version
```

## `aio event:eventmetadata`

Manage your Adobe I/O Events Providers' Event Metadata

```
Manage your Adobe I/O Events Providers' Event Metadata

USAGE
  $ aio event:eventmetadata

OPTIONS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version
```

## `aio event:eventmetadata:create PROVIDERID`

Create an Event Metadata for a Provider

```
Create an Event Metadata for a Provider

USAGE
  $ aio event:eventmetadata:create PROVIDERID

ARGUMENTS
  PROVIDERID  The requested eventmetadata event code

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version
```

## `aio event:eventmetadata:delete PROVIDERID [EVENTCODE]`

Delete Event Metadata for a Provider

```
Delete Event Metadata for a Provider

USAGE
  $ aio event:eventmetadata:delete PROVIDERID [EVENTCODE]

ARGUMENTS
  PROVIDERID  The requested provider ID
  EVENTCODE   The requested eventmetadata event code

OPTIONS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version
```

## `aio event:eventmetadata:get PROVIDERID EVENTCODE`

Get details of an Event Code of a Provider

```
Get details of an Event Code of a Provider

USAGE
  $ aio event:eventmetadata:get PROVIDERID EVENTCODE

ARGUMENTS
  PROVIDERID  The requested provider ID
  EVENTCODE   The requested eventmetadata event code

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version
```

## `aio event:eventmetadata:list PROVIDERID`

List all Event Metadata for a Provider

```
List all Event Metadata for a Provider

USAGE
  $ aio event:eventmetadata:list PROVIDERID

ARGUMENTS
  PROVIDERID  The requested provider ID

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

ALIASES
  $ aio event:eventmetadata:ls
```

## `aio event:eventmetadata:update PROVIDERID EVENTCODE`

Update an Event Metadata for a Provider

```
Update an Event Metadata for a Provider

USAGE
  $ aio event:eventmetadata:update PROVIDERID EVENTCODE

ARGUMENTS
  PROVIDERID  The requested provider ID
  EVENTCODE   The requested eventmetadata event code

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version
```

## `aio event:provider`

Manage your Adobe I/O Events Providers

```
Manage your Adobe I/O Events Providers

USAGE
  $ aio event:provider

OPTIONS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version
```

## `aio event:provider:create`

Create a new Provider

```
Create a new Provider

USAGE
  $ aio event:provider:create

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version
```

## `aio event:provider:delete PROVIDERID`

Delete Provider by id

```
Delete Provider by id

USAGE
  $ aio event:provider:delete PROVIDERID

ARGUMENTS
  PROVIDERID  The requested provider ID

OPTIONS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version
```

## `aio event:provider:get PROVIDERID`

Get details of Provider by id

```
Get details of Provider by id

USAGE
  $ aio event:provider:get PROVIDERID

ARGUMENTS
  PROVIDERID  The requested provider ID

OPTIONS
  -j, --json            Output json
  -v, --verbose         Verbose output
  -y, --yml             Output yml
  --fetchEventMetadata  Fetch event metadata with provider
  --help                Show help
  --version             Show version
```

## `aio event:provider:list`

Get list of all Providers for the Organization

```
Get list of all Providers for the Organization

USAGE
  $ aio event:provider:list

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

ALIASES
  $ aio event:provider:ls
```

## `aio event:provider:update PROVIDERID`

Update an existing Provider

```
Update an existing Provider

USAGE
  $ aio event:provider:update PROVIDERID

ARGUMENTS
  PROVIDERID  The requested provider ID

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version
```

## `aio event:registration`

Manage your Adobe I/O Events Registrations

```
Manage your Adobe I/O Events Registrations

USAGE
  $ aio event:registration

OPTIONS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version
```

## `aio event:registration:create BODYJSONFILE`

Create a new Event Registration in your Workspace

```
Create a new Event Registration in your Workspace

USAGE
  $ aio event:registration:create BODYJSONFILE

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

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

ALIASES
  $ aio event:reg:create
```

## `aio event:registration:delete REGISTRATIONID`

Delete Registration

```
Delete Registration

USAGE
  $ aio event:registration:delete REGISTRATIONID

ARGUMENTS
  REGISTRATIONID  The requested registration ID

OPTIONS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

ALIASES
  $ aio event:reg:delete
```

## `aio event:registration:get REGISTRATIONID`

Get an Event Registration in your Workspace

```
Get an Event Registration in your Workspace

USAGE
  $ aio event:registration:get REGISTRATIONID

ARGUMENTS
  REGISTRATIONID  The requested registration ID

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

ALIASES
  $ aio event:reg:get
```

## `aio event:registration:list`

List your Event Registrations in your Workspace

```
List your Event Registrations in your Workspace

USAGE
  $ aio event:registration:list

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

ALIASES
  $ aio event:registration:ls
  $ aio event:reg:list
  $ aio event:reg:ls
```

## `aio help [COMMAND]`

display help for aio

```
display help for <%= config.bin %>

USAGE
  $ aio help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `aio info`

Display dev environment version information

```
Display dev environment version information

USAGE
  $ aio info

OPTIONS
  -j, --json  output raw json
  -y, --yml   output yml
```

_See code: [@adobe/aio-cli-plugin-info](https://github.com/adobe/aio-cli-plugin-info/blob/2.0.0/src/commands/info.js)_

## `aio plugins`

list installed plugins

```
list installed plugins

USAGE
  $ aio plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ aio plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/index.ts)_

## `aio plugins:inspect PLUGIN...`

displays installation properties of a plugin

```
displays installation properties of a plugin

USAGE
  $ aio plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] plugin to inspect

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

EXAMPLE
  $ aio plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/inspect.ts)_

## `aio plugins:install PLUGIN...`

installs a plugin into the CLI

```
installs a plugin into the CLI
Can be installed from npm or a git url.

Installation of a user-installed plugin will override a core plugin.

e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in the CLI without the need to patch and update the whole CLI.


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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/install.ts)_

## `aio plugins:link PLUGIN`

links a plugin into the CLI for development

```
links a plugin into the CLI for development
Installation of a linked plugin will override a user-installed or core plugin.

e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' command will override the user-installed or core plugin implementation. This is useful for development work.


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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/link.ts)_

## `aio plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
removes a plugin from the CLI

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/uninstall.ts)_

## `aio plugins:update`

update installed plugins

```
update installed plugins

USAGE
  $ aio plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/update.ts)_

## `aio report`

Report an issue with the CLI or submit a feature request

```
Report an issue with the CLI or submit a feature request

USAGE
  $ aio report

OPTIONS
  -b, --bug      report an issue
  -f, --feature  request a feature
```

_See code: [@adobe/aio-cli-plugin-info](https://github.com/adobe/aio-cli-plugin-info/blob/2.0.0/src/commands/report.js)_

## `aio rollback`

Clears all installed plugins.

```
Clears all installed plugins.

USAGE
  $ aio rollback

OPTIONS
  -c, --[no-]confirm  confirmation needed for clear (defaults to true)
  -i, --interactive   interactive clear mode
  -l, --list          list plugins that will be cleared
  -v, --verbose       Verbose output
```

_See code: [src/commands/rollback.js](https://github.com/adobe/aio-cli/blob/7.1.0/src/commands/rollback.js)_

## `aio runtime`

Execute runtime commands

```
Execute runtime commands

USAGE
  $ aio runtime

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio rt
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/index.js)_

## `aio runtime:action`

Manage your actions

```
Manage your actions

USAGE
  $ aio runtime:action

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio rt:action
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/action/index.js)_

## `aio runtime:action:create ACTIONNAME [ACTIONPATH]`

Creates an Action

```
Creates an Action

USAGE
  $ aio runtime:action:create ACTIONNAME [ACTIONPATH]

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -E, --env-file=env-file                FILE containing environment variables in JSON format
  -P, --param-file=param-file            FILE containing parameter values in JSON format
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -e, --env=env                          environment values in KEY VALUE format
  -i, --insecure                         bypass certificate check
  -l, --logsize=logsize                  the maximum log size LIMIT in MB for the action (default 10)
  -m, --memory=memory                    the maximum memory LIMIT in MB for the action (default 256)
  -p, --param=param                      parameter values in KEY VALUE format

  -t, --timeout=timeout                  the timeout LIMIT in milliseconds after which the action is terminated (default
                                         60000)

  -u, --auth=auth                        whisk auth

  -v, --verbose                          Verbose output

  --apihost=apihost                      whisk API host

  --apiversion=apiversion                whisk API version

  --binary                               treat code artifact as binary

  --cert=cert                            client cert

  --debug=debug                          Debug level output

  --docker=docker                        [Restricted Access] use provided Docker image (a path on DockerHub) to run the
                                         action

  --help                                 Show help

  --json                                 output raw json

  --key=key                              client key

  --kind=kind                            the KIND of the action runtime (example: swift:default, nodejs:default)

  --main=main                            the name of the action entry point (function or fully-qualified method name
                                         when applicable)

  --sequence=sequence                    treat ACTION as comma separated sequence of actions to invoke

  --version                              Show version

  --web=true|yes|false|no|raw            treat ACTION as a web action or as a raw HTTP web action

  --web-secure=web-secure                secure the web action (valid values are true, false, or any string)

ALIASES
  $ aio rt:action:create
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/action/create.js)_

## `aio runtime:action:delete ACTIONNAME`

Deletes an Action

```
Deletes an Action

USAGE
  $ aio runtime:action:delete ACTIONNAME

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --json                   output raw json
  --key=key                client key
  --version                Show version

ALIASES
  $ aio runtime:action:del
  $ aio rt:action:delete
  $ aio rt:action:del
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/action/delete.js)_

## `aio runtime:action:get ACTIONNAME`

Retrieves an Action

```
Retrieves an Action

USAGE
  $ aio runtime:action:get ACTIONNAME

OPTIONS
  -c, --code               show action code (only works if code is not a zip file)
  -i, --insecure           bypass certificate check
  -r, --url                get action url
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --save                   save action code to file corresponding with action name
  --save-as=save-as        file to save action code to
  --version                Show version

ALIASES
  $ aio rt:action:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/action/get.js)_

## `aio runtime:action:invoke ACTIONNAME`

Invokes an Action

```
Invokes an Action

USAGE
  $ aio runtime:action:invoke ACTIONNAME

OPTIONS
  -P, --param-file=param-file  FILE containing parameter values in JSON format
  -b, --blocking               blocking invoke
  -i, --insecure               bypass certificate check
  -p, --param=param            parameter values in KEY VALUE format
  -r, --result                 blocking invoke; show only activation result (unless there is a failure)
  -u, --auth=auth              whisk auth
  -v, --verbose                Verbose output
  --apihost=apihost            whisk API host
  --apiversion=apiversion      whisk API version
  --cert=cert                  client cert
  --debug=debug                Debug level output
  --help                       Show help
  --key=key                    client key
  --version                    Show version

ALIASES
  $ aio rt:action:invoke
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/action/invoke.js)_

## `aio runtime:action:list [PACKAGENAME]`

Lists all the Actions

```
Lists all the Actions

USAGE
  $ aio runtime:action:list [PACKAGENAME]

OPTIONS
  -c, --count              show only the total number of actions
  -i, --insecure           bypass certificate check
  -l, --limit=limit        only return LIMIT number of actions from the collection (default 30)
  -n, --name               sort results by name
  -s, --skip=skip          exclude the first SKIP number of actions from the result
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --json                   output raw json
  --key=key                client key
  --name-sort              sort results by name
  --version                Show version

ALIASES
  $ aio runtime:action:ls
  $ aio runtime:actions:list
  $ aio runtime:actions:ls
  $ aio rt:action:list
  $ aio rt:actions:list
  $ aio rt:action:ls
  $ aio rt:actions:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/action/list.js)_

## `aio runtime:action:update ACTIONNAME [ACTIONPATH]`

Updates an Action

```
Updates an Action

USAGE
  $ aio runtime:action:update ACTIONNAME [ACTIONPATH]

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -E, --env-file=env-file                FILE containing environment variables in JSON format
  -P, --param-file=param-file            FILE containing parameter values in JSON format
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -e, --env=env                          environment values in KEY VALUE format
  -i, --insecure                         bypass certificate check
  -l, --logsize=logsize                  the maximum log size LIMIT in MB for the action (default 10)
  -m, --memory=memory                    the maximum memory LIMIT in MB for the action (default 256)
  -p, --param=param                      parameter values in KEY VALUE format

  -t, --timeout=timeout                  the timeout LIMIT in milliseconds after which the action is terminated (default
                                         60000)

  -u, --auth=auth                        whisk auth

  -v, --verbose                          Verbose output

  --apihost=apihost                      whisk API host

  --apiversion=apiversion                whisk API version

  --binary                               treat code artifact as binary

  --cert=cert                            client cert

  --debug=debug                          Debug level output

  --docker=docker                        [Restricted Access] use provided Docker image (a path on DockerHub) to run the
                                         action

  --help                                 Show help

  --json                                 output raw json

  --key=key                              client key

  --kind=kind                            the KIND of the action runtime (example: swift:default, nodejs:default)

  --main=main                            the name of the action entry point (function or fully-qualified method name
                                         when applicable)

  --sequence=sequence                    treat ACTION as comma separated sequence of actions to invoke

  --version                              Show version

  --web=true|yes|false|no|raw            treat ACTION as a web action or as a raw HTTP web action

  --web-secure=web-secure                secure the web action (valid values are true, false, or any string)

ALIASES
  $ aio rt:action:update
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/action/update.js)_

## `aio runtime:activation`

Manage your activations

```
Manage your activations

USAGE
  $ aio runtime:activation

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio rt:activation
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/activation/index.js)_

## `aio runtime:activation:get [ACTIVATIONID]`

Retrieves an Activation

```
Retrieves an Activation

USAGE
  $ aio runtime:activation:get [ACTIVATIONID]

OPTIONS
  -g, --logs               emit only the logs, stripped of time stamps and stream identifier
  -i, --insecure           bypass certificate check
  -l, --last               retrieves the most recent activation
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio rt:activation:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/activation/get.js)_

## `aio runtime:activation:list [ACTIVATION_NAME]`

Lists all the Activations

```
Lists all the Activations

USAGE
  $ aio runtime:activation:list [ACTIVATION_NAME]

OPTIONS
  -c, --count              show only the total number of activations
  -f, --full               include full activation description
  -i, --insecure           bypass certificate check

  -l, --limit=limit        only return LIMIT number of activations from the collection with a maximum LIMIT of 200
                           activations (default 30)

  -s, --skip=skip          exclude the first SKIP number of activations from the result

  -u, --auth=auth          whisk auth

  -v, --verbose            Verbose output

  --apihost=apihost        whisk API host

  --apiversion=apiversion  whisk API version

  --cert=cert              client cert

  --debug=debug            Debug level output

  --help                   Show help

  --json                   output raw json

  --key=key                client key

  --since=since            return activations with timestamps later than SINCE; measured in milliseconds since Th, 01,
                           Jan 1970

  --upto=upto              return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01,
                           Jan 1970

  --version                Show version

ALIASES
  $ aio runtime:activations:list
  $ aio runtime:activation:ls
  $ aio runtime:activations:ls
  $ aio rt:activation:list
  $ aio rt:activation:ls
  $ aio rt:activations:list
  $ aio rt:activations:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/activation/list.js)_

## `aio runtime:activation:logs [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
Retrieves the Logs for an Activation

USAGE
  $ aio runtime:activation:logs [ACTIVATIONID]

OPTIONS
  -a, --action=action      Fetch logs for a specific action
  -d, --deployed           Fetch logs for all actions deployed under a specific package
  -i, --insecure           bypass certificate check
  -l, --last               retrieves the most recent activation logs
  -m, --manifest           Fetch logs for all actions in the manifest
  -o, --poll               Fetch logs continuously
  -p, --package=package    Fetch logs for a specific package in the manifest
  -r, --strip              strip timestamp information and output first line only
  -t, --tail               Fetch logs continuously
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  -w, --watch              Fetch logs continuously
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --limit=limit            return the last `limit` activation logs. Max 50
  --version                Show version

ALIASES
  $ aio runtime:activation:log
  $ aio runtime:log
  $ aio runtime:logs
  $ aio rt:activation:logs
  $ aio rt:activation:log
  $ aio rt:log
  $ aio rt:logs
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/activation/logs.js)_

## `aio runtime:activation:result [ACTIVATIONID]`

Retrieves the Results for an Activation

```
Retrieves the Results for an Activation

USAGE
  $ aio runtime:activation:result [ACTIVATIONID]

OPTIONS
  -i, --insecure           bypass certificate check
  -l, --last               retrieves the most recent activation result
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio rt:activation:result
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/activation/result.js)_

## `aio runtime:deploy`

The Runtime Deployment Tool

```
The Runtime Deployment Tool

USAGE
  $ aio runtime:deploy

OPTIONS
  -P, --param-file=param-file  FILE containing parameter values in JSON format
  -d, --deployment=deployment  the path to the deployment file
  -i, --insecure               bypass certificate check
  -m, --manifest=manifest      the manifest file location
  -u, --auth=auth              whisk auth
  -v, --verbose                Verbose output
  --apihost=apihost            whisk API host
  --apiversion=apiversion      whisk API version
  --cert=cert                  client cert
  --debug=debug                Debug level output
  --help                       Show help
  --key=key                    client key
  --param=param                parameter values in KEY VALUE format
  --version                    Show version

ALIASES
  $ aio rt:deploy
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/deploy/index.js)_

## `aio runtime:deploy:export`

Exports managed project assets from Runtime to manifest and function files

```
Exports managed project assets from Runtime to manifest and function files

USAGE
  $ aio runtime:deploy:export

OPTIONS
  -i, --insecure             bypass certificate check
  -m, --manifest=manifest    (required) the manifest file location
  -u, --auth=auth            whisk auth
  -v, --verbose              Verbose output
  --apihost=apihost          whisk API host
  --apiversion=apiversion    whisk API version
  --cert=cert                client cert
  --debug=debug              Debug level output
  --help                     Show help
  --key=key                  client key
  --projectname=projectname  (required) the name of the project to be undeployed
  --version                  Show version

ALIASES
  $ aio rt:deploy:export
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/deploy/export.js)_

## `aio runtime:deploy:report`

Provides a summary report of Runtime assets being deployed/undeployed based on manifest/deployment YAML

```
Provides a summary report of Runtime assets being deployed/undeployed based on manifest/deployment YAML

USAGE
  $ aio runtime:deploy:report

OPTIONS
  -d, --deployment=deployment  the deployment file location
  -i, --insecure               bypass certificate check
  -m, --manifest=manifest      the manifest file location
  -u, --auth=auth              whisk auth
  -v, --verbose                Verbose output
  --apihost=apihost            whisk API host
  --apiversion=apiversion      whisk API version
  --cert=cert                  client cert
  --debug=debug                Debug level output
  --help                       Show help
  --key=key                    client key
  --version                    Show version

ALIASES
  $ aio rt:deploy:report
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/deploy/report.js)_

## `aio runtime:deploy:sync`

A tool to sync deployment and undeployment of Runtime packages using a manifest and optional deployment files using YAML

```
A tool to sync deployment and undeployment of Runtime packages using a manifest and optional deployment files using YAML

USAGE
  $ aio runtime:deploy:sync

OPTIONS
  -d, --deployment=deployment  the path to the deployment file
  -i, --insecure               bypass certificate check
  -m, --manifest=manifest      the manifest file location
  -u, --auth=auth              whisk auth
  -v, --verbose                Verbose output
  --apihost=apihost            whisk API host
  --apiversion=apiversion      whisk API version
  --cert=cert                  client cert
  --debug=debug                Debug level output
  --help                       Show help
  --key=key                    client key
  --version                    Show version

ALIASES
  $ aio rt:deploy:sync
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/deploy/sync.js)_

## `aio runtime:deploy:undeploy`

Undeploy removes Runtime assets which were deployed from the manifest and deployment YAML

```
Undeploy removes Runtime assets which were deployed from the manifest and deployment YAML

USAGE
  $ aio runtime:deploy:undeploy

OPTIONS
  -i, --insecure             bypass certificate check
  -m, --manifest=manifest    the manifest file location
  -u, --auth=auth            whisk auth
  -v, --verbose              Verbose output
  --apihost=apihost          whisk API host
  --apiversion=apiversion    whisk API version
  --cert=cert                client cert
  --debug=debug              Debug level output
  --help                     Show help
  --key=key                  client key
  --projectname=projectname  the name of the project to be undeployed
  --version                  Show version

ALIASES
  $ aio rt:deploy:undeploy
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/deploy/undeploy.js)_

## `aio runtime:deploy:version`

Prints the version number of aio runtime deploy

```
Prints the version number of aio runtime deploy

USAGE
  $ aio runtime:deploy:version

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio rt:deploy:version
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/deploy/version.js)_

## `aio runtime:namespace`

Manage your namespaces

```
Manage your namespaces

USAGE
  $ aio runtime:namespace

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio runtime:ns
  $ aio rt:namespace
  $ aio rt:ns
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/namespace/index.js)_

## `aio runtime:namespace:get`

Get triggers, actions, and rules in the registry for namespace

```
Get triggers, actions, and rules in the registry for namespace

USAGE
  $ aio runtime:namespace:get

OPTIONS
  -i, --insecure           bypass certificate check
  -n, --name               sort results by name
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --json                   output raw json
  --key=key                client key
  --name-sort              sort results by name
  --version                Show version

ALIASES
  $ aio rt:get
  $ aio runtime:list
  $ aio rt:list
  $ aio runtime:ls
  $ aio rt:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/namespace/get.js)_

## `aio runtime:namespace:list`

Lists all of your namespaces for Adobe I/O Runtime

```
Lists all of your namespaces for Adobe I/O Runtime

USAGE
  $ aio runtime:namespace:list

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --json                   output raw json
  --key=key                client key
  --version                Show version

ALIASES
  $ aio runtime:namespace:ls
  $ aio runtime:ns:list
  $ aio runtime:ns:ls
  $ aio rt:namespace:list
  $ aio rt:namespace:ls
  $ aio rt:ns:list
  $ aio rt:ns:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/namespace/list.js)_

## `aio runtime:package`

Manage your packages

```
Manage your packages

USAGE
  $ aio runtime:package

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio runtime:pkg
  $ aio rt:package
  $ aio rt:pkg
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/package/index.js)_

## `aio runtime:package:bind PACKAGENAME BINDPACKAGENAME`

Bind parameters to a package

```
Bind parameters to a package

USAGE
  $ aio runtime:package:bind PACKAGENAME BINDPACKAGENAME

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -P, --param-file=param-file            parameter to be passed to the package for json file
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -i, --insecure                         bypass certificate check
  -p, --param=param                      parameters in key value pairs to be passed to the package
  -u, --auth=auth                        whisk auth
  -v, --verbose                          Verbose output
  --apihost=apihost                      whisk API host
  --apiversion=apiversion                whisk API version
  --cert=cert                            client cert
  --debug=debug                          Debug level output
  --help                                 Show help
  --json                                 output raw json
  --key=key                              client key
  --version                              Show version

ALIASES
  $ aio runtime:pkg:bind
  $ aio rt:package:bind
  $ aio rt:pkg:bind
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/package/bind.js)_

## `aio runtime:package:create PACKAGENAME`

Creates a Package

```
Creates a Package

USAGE
  $ aio runtime:package:create PACKAGENAME

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -P, --param-file=param-file            parameter to be passed to the package for json file
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -i, --insecure                         bypass certificate check
  -p, --param=param                      parameters in key value pairs to be passed to the package
  -u, --auth=auth                        whisk auth
  -v, --verbose                          Verbose output
  --apihost=apihost                      whisk API host
  --apiversion=apiversion                whisk API version
  --cert=cert                            client cert
  --debug=debug                          Debug level output
  --help                                 Show help
  --json                                 output raw json
  --key=key                              client key
  --shared=true|yes|false|no             parameter to be passed to indicate whether package is shared or private
  --version                              Show version

ALIASES
  $ aio runtime:pkg:create
  $ aio rt:package:create
  $ aio rt:pkg:create
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/package/create.js)_

## `aio runtime:package:delete PACKAGENAME`

Deletes a Package

```
Deletes a Package

USAGE
  $ aio runtime:package:delete PACKAGENAME

OPTIONS
  --json  output raw json

ALIASES
  $ aio runtime:pkg:delete
  $ aio rt:package:delete
  $ aio rt:pkg:delete
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/package/delete.js)_

## `aio runtime:package:get PACKAGENAME`

Retrieves a Package

```
Retrieves a Package

USAGE
  $ aio runtime:package:get PACKAGENAME

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio runtime:pkg:get
  $ aio rt:package:get
  $ aio rt:pkg:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/package/get.js)_

## `aio runtime:package:list [NAMESPACE]`

Lists all the Packages

```
Lists all the Packages

USAGE
  $ aio runtime:package:list [NAMESPACE]

OPTIONS
  -c, --count              show only the total number of packages
  -i, --insecure           bypass certificate check
  -l, --limit=limit        only return LIMIT number of packages from the collection (default 30)
  -n, --name               sort results by name
  -s, --skip=skip          exclude the first SKIP number of packages from the result
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --json                   output raw json
  --key=key                client key
  --name-sort              sort results by name
  --version                Show version

ALIASES
  $ aio runtime:package:ls
  $ aio runtime:pkg:list
  $ aio runtime:pkg:ls
  $ aio rt:package:list
  $ aio rt:package:ls
  $ aio rt:pkg:list
  $ aio rt:pkg:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/package/list.js)_

## `aio runtime:package:update PACKAGENAME`

Updates a Package

```
Updates a Package

USAGE
  $ aio runtime:package:update PACKAGENAME

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -P, --param-file=param-file            parameter to be passed to the package for json file
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -i, --insecure                         bypass certificate check
  -p, --param=param                      parameters in key value pairs to be passed to the package
  -u, --auth=auth                        whisk auth
  -v, --verbose                          Verbose output
  --apihost=apihost                      whisk API host
  --apiversion=apiversion                whisk API version
  --cert=cert                            client cert
  --debug=debug                          Debug level output
  --help                                 Show help
  --json                                 output raw json
  --key=key                              client key
  --shared=true|yes|false|no             parameter to be passed to indicate whether package is shared or private
  --version                              Show version

ALIASES
  $ aio runtime:pkg:update
  $ aio rt:package:update
  $ aio rt:pkg:update
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/package/update.js)_

## `aio runtime:property`

Execute property commands

```
Execute property commands

USAGE
  $ aio runtime:property

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio runtime:prop
  $ aio rt:prop
  $ aio rt:property
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/property/index.js)_

## `aio runtime:property:get`

get property

```
get property

USAGE
  $ aio runtime:property:get

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --all           all properties
  --apibuild      whisk API build version
  --apibuildno    whisk API build number
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --cliversion    whisk CLI version
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --namespace     whisk namespace
  --version       Show version

ALIASES
  $ aio runtime:prop:get
  $ aio rt:property:get
  $ aio rt:prop:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/property/get.js)_

## `aio runtime:property:set`

set property

```
set property

USAGE
  $ aio runtime:property:set

OPTIONS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --debug=debug          Debug level output
  --help                 Show help
  --key                  client key
  --namespace=namespace  whisk namespace
  --version              Show version

ALIASES
  $ aio runtime:prop:set
  $ aio rt:property:set
  $ aio rt:prop:set
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/property/set.js)_

## `aio runtime:property:unset`

unset property

```
unset property

USAGE
  $ aio runtime:property:unset

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --namespace     whisk namespace
  --version       Show version

ALIASES
  $ aio runtime:prop:unset
  $ aio rt:property:unset
  $ aio rt:prop:unset
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/property/unset.js)_

## `aio runtime:route`

Manage your routes

```
Manage your routes

USAGE
  $ aio runtime:route

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio runtime:api
  $ aio rt:api
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/route/index.js)_

## `aio runtime:route:create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`

create a new api route

```
create a new api route

USAGE
  $ aio runtime:route:create [BASEPATH] [RELPATH] [APIVERB] [ACTION]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb
  ACTION    The action to call

OPTIONS
  -c, --config-file=config-file                     file containing API configuration in swagger JSON format
  -i, --insecure                                    bypass certificate check

  -n, --apiname=apiname                             Friendly name of the API; ignored when CFG_FILE is specified
                                                    (default BASE_PATH)

  -r, --response-type=html|http|json|text|svg|json  [default: json] Set the web action response TYPE.

  -u, --auth                                        whisk auth

  -v, --verbose                                     Verbose output

  --apihost                                         whisk API host

  --apiversion                                      whisk API version

  --cert                                            client cert

  --debug=debug                                     Debug level output

  --help                                            Show help

  --key                                             client key

  --version                                         Show version

ALIASES
  $ aio runtime:api:create
  $ aio rt:route:create
  $ aio rt:api:create
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/route/create.js)_

## `aio runtime:route:delete BASEPATHORAPINAME [RELPATH] [APIVERB]`

delete an API

```
delete an API

USAGE
  $ aio runtime:route:delete BASEPATHORAPINAME [RELPATH] [APIVERB]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name
  RELPATH            The path of the api relative to the base path
  APIVERB            (get|post|put|patch|delete|head|options) The http verb

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio runtime:api:delete
  $ aio rt:route:delete
  $ aio rt:api:delete
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/route/delete.js)_

## `aio runtime:route:get BASEPATHORAPINAME`

get API details

```
get API details

USAGE
  $ aio runtime:route:get BASEPATHORAPINAME

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio runtime:api:get
  $ aio rt:route:get
  $ aio rt:api:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/route/get.js)_

## `aio runtime:route:list [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
list route/apis for Adobe I/O Runtime

USAGE
  $ aio runtime:route:list [BASEPATH] [RELPATH] [APIVERB]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

OPTIONS
  -i, --insecure     bypass certificate check
  -l, --limit=limit  [default: 30] only return LIMIT number of triggers from the collection (default 30)
  -s, --skip=skip    exclude the first SKIP number of triggers from the result
  -u, --auth         whisk auth
  -v, --verbose      Verbose output
  --apihost          whisk API host
  --apiversion       whisk API version
  --cert             client cert
  --debug=debug      Debug level output
  --help             Show help
  --json             output raw json
  --key              client key
  --version          Show version

ALIASES
  $ aio runtime:route:ls
  $ aio runtime:api:list
  $ aio runtime:api:ls
  $ aio rt:route:list
  $ aio rt:route:ls
  $ aio rt:api:list
  $ aio rt:api:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/route/list.js)_

## `aio runtime:rule`

Manage your rules

```
Manage your rules

USAGE
  $ aio runtime:rule

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:rule
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/index.js)_

## `aio runtime:rule:create NAME TRIGGER ACTION`

Create a Rule

```
Create a Rule

USAGE
  $ aio runtime:rule:create NAME TRIGGER ACTION

ARGUMENTS
  NAME     Name of the rule
  TRIGGER  Name of the trigger
  ACTION   Name of the action

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --json          output raw json
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:rule:create
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/create.js)_

## `aio runtime:rule:delete NAME`

Delete a Rule

```
Delete a Rule

USAGE
  $ aio runtime:rule:delete NAME

ARGUMENTS
  NAME  Name of the rule

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --json          output raw json
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:rule:delete
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/delete.js)_

## `aio runtime:rule:disable NAME`

Disable a Rule

```
Disable a Rule

USAGE
  $ aio runtime:rule:disable NAME

ARGUMENTS
  NAME  Name of the rule

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:rule:disable
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/disable.js)_

## `aio runtime:rule:enable NAME`

Enable a Rule

```
Enable a Rule

USAGE
  $ aio runtime:rule:enable NAME

ARGUMENTS
  NAME  Name of the rule

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:rule:enable
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/enable.js)_

## `aio runtime:rule:get NAME`

Retrieves a Rule

```
Retrieves a Rule

USAGE
  $ aio runtime:rule:get NAME

ARGUMENTS
  NAME  Name of the rule

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:rule:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/get.js)_

## `aio runtime:rule:list`

Retrieves a list of Rules

```
Retrieves a list of Rules

USAGE
  $ aio runtime:rule:list

OPTIONS
  -c, --count        show only the total number of rules
  -i, --insecure     bypass certificate check
  -l, --limit=limit  [default: 30] Limit number of rules returned. Default 30
  -n, --name         sort results by name
  -s, --skip=skip    Skip number of rules returned
  -u, --auth         whisk auth
  -v, --verbose      Verbose output
  --apihost          whisk API host
  --apiversion       whisk API version
  --cert             client cert
  --debug=debug      Debug level output
  --help             Show help
  --json             output raw json
  --key              client key
  --name-sort        sort results by name
  --version          Show version

ALIASES
  $ aio runtime:rule:ls
  $ aio rt:rule:list
  $ aio rt:rule:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/list.js)_

## `aio runtime:rule:status NAME`

Gets the status of a rule

```
Gets the status of a rule

USAGE
  $ aio runtime:rule:status NAME

ARGUMENTS
  NAME  Name of the rule

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:rule:status
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/status.js)_

## `aio runtime:rule:update NAME TRIGGER ACTION`

Update a Rule

```
Update a Rule

USAGE
  $ aio runtime:rule:update NAME TRIGGER ACTION

ARGUMENTS
  NAME     Name of the rule
  TRIGGER  Name of the trigger
  ACTION   Name of the action

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --json          output raw json
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:rule:update
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/update.js)_

## `aio runtime:trigger`

Manage your triggers

```
Manage your triggers

USAGE
  $ aio runtime:trigger

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:trigger
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/trigger/index.js)_

## `aio runtime:trigger:create TRIGGERNAME`

Create a trigger for Adobe I/O Runtime

```
Create a trigger for Adobe I/O Runtime

USAGE
  $ aio runtime:trigger:create TRIGGERNAME

ARGUMENTS
  TRIGGERNAME  The name of the trigger

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -P, --param-file=param-file            FILE containing parameter values in JSON format
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -f, --feed=feed                        trigger feed ACTION_NAME
  -i, --insecure                         bypass certificate check
  -p, --param=param                      parameter values in KEY VALUE format
  -u, --auth                             whisk auth
  -v, --verbose                          Verbose output
  --apihost                              whisk API host
  --apiversion                           whisk API version
  --cert                                 client cert
  --debug=debug                          Debug level output
  --help                                 Show help
  --key                                  client key
  --version                              Show version

ALIASES
  $ aio rt:trigger:create
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/trigger/create.js)_

## `aio runtime:trigger:delete TRIGGERPATH`

Delete a trigger for Adobe I/O Runtime

```
Delete a trigger for Adobe I/O Runtime

USAGE
  $ aio runtime:trigger:delete TRIGGERPATH

ARGUMENTS
  TRIGGERPATH  The name of the trigger, in the format /NAMESPACE/NAME

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:trigger:delete
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/trigger/delete.js)_

## `aio runtime:trigger:fire TRIGGERNAME`

Fire a trigger for Adobe I/O Runtime

```
Fire a trigger for Adobe I/O Runtime

USAGE
  $ aio runtime:trigger:fire TRIGGERNAME

ARGUMENTS
  TRIGGERNAME  The name of the trigger

OPTIONS
  -P, --param-file=param-file  FILE containing parameter values in JSON format
  -i, --insecure               bypass certificate check
  -p, --param=param            parameter values in KEY VALUE format
  -u, --auth                   whisk auth
  -v, --verbose                Verbose output
  --apihost                    whisk API host
  --apiversion                 whisk API version
  --cert                       client cert
  --debug=debug                Debug level output
  --help                       Show help
  --key                        client key
  --version                    Show version

ALIASES
  $ aio rt:trigger:fire
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/trigger/fire.js)_

## `aio runtime:trigger:get TRIGGERPATH`

Get a trigger for Adobe I/O Runtime

```
Get a trigger for Adobe I/O Runtime

USAGE
  $ aio runtime:trigger:get TRIGGERPATH

ARGUMENTS
  TRIGGERPATH  The name/path of the trigger, in the format /NAMESPACE/NAME

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:trigger:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/trigger/get.js)_

## `aio runtime:trigger:list`

Lists all of your triggers for Adobe I/O Runtime

```
Lists all of your triggers for Adobe I/O Runtime

USAGE
  $ aio runtime:trigger:list

OPTIONS
  -c, --count        show only the total number of triggers
  -i, --insecure     bypass certificate check
  -l, --limit=limit  [default: 30] only return LIMIT number of triggers from the collection (default 30)
  -n, --name         sort results by name
  -s, --skip=skip    exclude the first SKIP number of triggers from the result
  -u, --auth         whisk auth
  -v, --verbose      Verbose output
  --apihost          whisk API host
  --apiversion       whisk API version
  --cert             client cert
  --debug=debug      Debug level output
  --help             Show help
  --json             output raw json
  --key              client key
  --name-sort        sort results by name
  --version          Show version

ALIASES
  $ aio runtime:trigger:ls
  $ aio rt:trigger:list
  $ aio rt:trigger:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/trigger/list.js)_

## `aio runtime:trigger:update TRIGGERNAME`

Update or create a trigger for Adobe I/O Runtime

```
Update or create a trigger for Adobe I/O Runtime

USAGE
  $ aio runtime:trigger:update TRIGGERNAME

ARGUMENTS
  TRIGGERNAME  The name of the trigger

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -P, --param-file=param-file            FILE containing parameter values in JSON format
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -i, --insecure                         bypass certificate check
  -p, --param=param                      parameter values in KEY VALUE format
  -u, --auth                             whisk auth
  -v, --verbose                          Verbose output
  --apihost                              whisk API host
  --apiversion                           whisk API version
  --cert                                 client cert
  --debug=debug                          Debug level output
  --help                                 Show help
  --key                                  client key
  --version                              Show version

ALIASES
  $ aio rt:trigger:update
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/trigger/update.js)_

## `aio update`

Update all installed plugins.

```
Update all installed plugins.
This command will only:
- update user-installed plugins that are not core


USAGE
  $ aio update

OPTIONS
  -c, --[no-]confirm  confirmation needed for update (defaults to true)
  -i, --interactive   interactive update mode
  -l, --list          list plugins that will be updated
  -v, --verbose       Verbose output

DESCRIPTION
  This command will only:
  - update user-installed plugins that are not core
```

_See code: [src/commands/update.js](https://github.com/adobe/aio-cli/blob/7.1.0/src/commands/update.js)_
<!-- commandsstop -->
* [`aio app`](#aio-app)
* [`aio app:add`](#aio-appadd)
* [`aio app:add:action`](#aio-appaddaction)
* [`aio app:add:ci`](#aio-appaddci)
* [`aio app:add:event`](#aio-appaddevent)
* [`aio app:add:service`](#aio-appaddservice)
* [`aio app:add:web-assets`](#aio-appaddweb-assets)
* [`aio app:build`](#aio-appbuild)
* [`aio app:create [PATH]`](#aio-appcreate-path)
* [`aio app:delete`](#aio-appdelete)
* [`aio app:delete:action [ACTION-NAME]`](#aio-appdeleteaction-action-name)
* [`aio app:delete:ci`](#aio-appdeleteci)
* [`aio app:delete:event EVENT-ACTION-NAME`](#aio-appdeleteevent-event-action-name)
* [`aio app:delete:service`](#aio-appdeleteservice)
* [`aio app:delete:web-assets`](#aio-appdeleteweb-assets)
* [`aio app:deploy`](#aio-appdeploy)
* [`aio app:get-url [ACTION]`](#aio-appget-url-action)
* [`aio app:info`](#aio-appinfo)
* [`aio app:init [PATH]`](#aio-appinit-path)
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
* [`aio config:delete KEYS...`](#aio-configdelete-keys)
* [`aio config:edit`](#aio-configedit)
* [`aio config:get KEY`](#aio-configget-key)
* [`aio config:list`](#aio-configlist)
* [`aio config set key 'a value'       # set key to 'a value'`](#aio-config-set-key-a-value--------set-key-to-a-value)
* [`aio console`](#aio-console)
* [`aio console:org`](#aio-consoleorg)
* [`aio console:org:list`](#aio-consoleorglist)
* [`aio console:org:select [ORGCODE]`](#aio-consoleorgselect-orgcode)
* [`aio console:project`](#aio-consoleproject)
* [`aio console:project:list`](#aio-consoleprojectlist)
* [`aio console:project:select [PROJECTIDORNAME]`](#aio-consoleprojectselect-projectidorname)
* [`aio console:where`](#aio-consolewhere)
* [`aio console:workspace`](#aio-consoleworkspace)
* [`aio console:workspace:download [DESTINATION]`](#aio-consoleworkspacedownload-destination)
* [`aio console:workspace:list`](#aio-consoleworkspacelist)
* [`aio console:workspace:select [WORKSPACEIDORNAME]`](#aio-consoleworkspaceselect-workspaceidorname)
* [`aio discover`](#aio-discover)
* [`aio event`](#aio-event)
* [`aio event:eventmetadata`](#aio-eventeventmetadata)
* [`aio event:eventmetadata:create PROVIDERID`](#aio-eventeventmetadatacreate-providerid)
* [`aio event:eventmetadata:delete PROVIDERID [EVENTCODE]`](#aio-eventeventmetadatadelete-providerid-eventcode)
* [`aio event:eventmetadata:get PROVIDERID EVENTCODE`](#aio-eventeventmetadataget-providerid-eventcode)
* [`aio event:eventmetadata:list PROVIDERID`](#aio-eventeventmetadatalist-providerid)
* [`aio event:eventmetadata:update PROVIDERID EVENTCODE`](#aio-eventeventmetadataupdate-providerid-eventcode)
* [`aio event:provider`](#aio-eventprovider)
* [`aio event:provider:create`](#aio-eventprovidercreate)
* [`aio event:provider:delete PROVIDERID`](#aio-eventproviderdelete-providerid)
* [`aio event:provider:get PROVIDERID`](#aio-eventproviderget-providerid)
* [`aio event:provider:list`](#aio-eventproviderlist)
* [`aio event:provider:update PROVIDERID`](#aio-eventproviderupdate-providerid)
* [`aio event:registration`](#aio-eventregistration)
* [`aio event:registration:create BODYJSONFILE`](#aio-eventregistrationcreate-bodyjsonfile)
* [`aio event:registration:delete REGISTRATIONID`](#aio-eventregistrationdelete-registrationid)
* [`aio event:registration:get REGISTRATIONID`](#aio-eventregistrationget-registrationid)
* [`aio event:registration:list`](#aio-eventregistrationlist)
* [`aio help [COMMAND]`](#aio-help-command)
* [`aio info`](#aio-info)
* [`aio plugins`](#aio-plugins)
* [`aio plugins:inspect PLUGIN...`](#aio-pluginsinspect-plugin)
* [`aio plugins:install PLUGIN...`](#aio-pluginsinstall-plugin)
* [`aio plugins:link PLUGIN`](#aio-pluginslink-plugin)
* [`aio plugins:uninstall PLUGIN...`](#aio-pluginsuninstall-plugin)
* [`aio plugins:update`](#aio-pluginsupdate)
* [`aio report`](#aio-report)
* [`aio rollback`](#aio-rollback)
* [`aio runtime`](#aio-runtime)
* [`aio runtime:action`](#aio-runtimeaction)
* [`aio runtime:action:create ACTIONNAME [ACTIONPATH]`](#aio-runtimeactioncreate-actionname-actionpath)
* [`aio runtime:action:delete ACTIONNAME`](#aio-runtimeactiondelete-actionname)
* [`aio runtime:action:get ACTIONNAME`](#aio-runtimeactionget-actionname)
* [`aio runtime:action:invoke ACTIONNAME`](#aio-runtimeactioninvoke-actionname)
* [`aio runtime:action:list [PACKAGENAME]`](#aio-runtimeactionlist-packagename)
* [`aio runtime:action:update ACTIONNAME [ACTIONPATH]`](#aio-runtimeactionupdate-actionname-actionpath)
* [`aio runtime:activation`](#aio-runtimeactivation)
* [`aio runtime:activation:get [ACTIVATIONID]`](#aio-runtimeactivationget-activationid)
* [`aio runtime:activation:list [ACTIVATION_NAME]`](#aio-runtimeactivationlist-activation_name)
* [`aio runtime:activation:logs [ACTIVATIONID]`](#aio-runtimeactivationlogs-activationid)
* [`aio runtime:activation:result [ACTIVATIONID]`](#aio-runtimeactivationresult-activationid)
* [`aio runtime:deploy`](#aio-runtimedeploy)
* [`aio runtime:deploy:export`](#aio-runtimedeployexport)
* [`aio runtime:deploy:report`](#aio-runtimedeployreport)
* [`aio runtime:deploy:sync`](#aio-runtimedeploysync)
* [`aio runtime:deploy:undeploy`](#aio-runtimedeployundeploy)
* [`aio runtime:deploy:version`](#aio-runtimedeployversion)
* [`aio runtime:namespace`](#aio-runtimenamespace)
* [`aio runtime:namespace:get`](#aio-runtimenamespaceget)
* [`aio runtime:namespace:list`](#aio-runtimenamespacelist)
* [`aio runtime:package`](#aio-runtimepackage)
* [`aio runtime:package:bind PACKAGENAME BINDPACKAGENAME`](#aio-runtimepackagebind-packagename-bindpackagename)
* [`aio runtime:package:create PACKAGENAME`](#aio-runtimepackagecreate-packagename)
* [`aio runtime:package:delete PACKAGENAME`](#aio-runtimepackagedelete-packagename)
* [`aio runtime:package:get PACKAGENAME`](#aio-runtimepackageget-packagename)
* [`aio runtime:package:list [NAMESPACE]`](#aio-runtimepackagelist-namespace)
* [`aio runtime:package:update PACKAGENAME`](#aio-runtimepackageupdate-packagename)
* [`aio runtime:property`](#aio-runtimeproperty)
* [`aio runtime:property:get`](#aio-runtimepropertyget)
* [`aio runtime:property:set`](#aio-runtimepropertyset)
* [`aio runtime:property:unset`](#aio-runtimepropertyunset)
* [`aio runtime:route`](#aio-runtimeroute)
* [`aio runtime:route:create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`](#aio-runtimeroutecreate-basepath-relpath-apiverb-action)
* [`aio runtime:route:delete BASEPATHORAPINAME [RELPATH] [APIVERB]`](#aio-runtimeroutedelete-basepathorapiname-relpath-apiverb)
* [`aio runtime:route:get BASEPATHORAPINAME`](#aio-runtimerouteget-basepathorapiname)
* [`aio runtime:route:list [BASEPATH] [RELPATH] [APIVERB]`](#aio-runtimeroutelist-basepath-relpath-apiverb)
* [`aio runtime:rule`](#aio-runtimerule)
* [`aio runtime:rule:create NAME TRIGGER ACTION`](#aio-runtimerulecreate-name-trigger-action)
* [`aio runtime:rule:delete NAME`](#aio-runtimeruledelete-name)
* [`aio runtime:rule:disable NAME`](#aio-runtimeruledisable-name)
* [`aio runtime:rule:enable NAME`](#aio-runtimeruleenable-name)
* [`aio runtime:rule:get NAME`](#aio-runtimeruleget-name)
* [`aio runtime:rule:list`](#aio-runtimerulelist)
* [`aio runtime:rule:status NAME`](#aio-runtimerulestatus-name)
* [`aio runtime:rule:update NAME TRIGGER ACTION`](#aio-runtimeruleupdate-name-trigger-action)
* [`aio runtime:trigger`](#aio-runtimetrigger)
* [`aio runtime:trigger:create TRIGGERNAME`](#aio-runtimetriggercreate-triggername)
* [`aio runtime:trigger:delete TRIGGERPATH`](#aio-runtimetriggerdelete-triggerpath)
* [`aio runtime:trigger:fire TRIGGERNAME`](#aio-runtimetriggerfire-triggername)
* [`aio runtime:trigger:get TRIGGERPATH`](#aio-runtimetriggerget-triggerpath)
* [`aio runtime:trigger:list`](#aio-runtimetriggerlist)
* [`aio runtime:trigger:update TRIGGERNAME`](#aio-runtimetriggerupdate-triggername)
* [`aio update`](#aio-update)

## `aio app`

Create, run, test, and deploy Adobe I/O Apps

```
USAGE
  $ aio app

OPTIONS
  -v, --verbose  Verbose output
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/index.js)_

## `aio app:add`

Add a new component to an existing Adobe I/O App

```
USAGE
  $ aio app:add

OPTIONS
  -v, --verbose  Verbose output
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/add/index.js)_

## `aio app:add:action`

Add a new action

```
USAGE
  $ aio app:add:action

OPTIONS
  -v, --verbose   Verbose output
  -y, --yes       Skip questions, and use all default values
  --skip-install  Skip npm installation after files are created
  --version       Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/add/action.js)_

## `aio app:add:ci`

Add CI files

```
USAGE
  $ aio app:add:ci

OPTIONS
  -v, --verbose  Verbose output
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/add/ci.js)_

## `aio app:add:event`

Add a new Adobe I/O Events action

```
USAGE
  $ aio app:add:event

OPTIONS
  -v, --verbose   Verbose output
  -y, --yes       Skip questions, and use all default values
  --skip-install  Skip npm installation after files are created
  --version       Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/add/event.js)_

## `aio app:add:service`

Subscribe to Services in the current Workspace

```
USAGE
  $ aio app:add:service

OPTIONS
  -v, --verbose  Verbose output
  --version      Show version

ALIASES
  $ aio app:add:services
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/add/service.js)_

## `aio app:add:web-assets`

Add web assets support

```
USAGE
  $ aio app:add:web-assets

OPTIONS
  -v, --verbose   Verbose output
  -y, --yes       Skip questions, and use all default values
  --skip-install  Skip npm installation after files are created
  --version       Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/add/web-assets.js)_

## `aio app:build`

Build an Adobe I/O App

```
USAGE
  $ aio app:build

OPTIONS
  -a, --action=action  Build only a specific action, the flags can be specified multiple times
  -v, --verbose        Verbose output
  --[no-]content-hash  Enable content hashing in browser code (default: true)
  --[no-]force-build   Forces a build even if one already exists (default: true)
  --skip-actions       Skip build of actions
  --skip-static        Skip build of static files
  --skip-web-assets    Skip build of web assets
  --version            Show version

DESCRIPTION
  This will always force a rebuild unless --no-force-build is set.
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/build.js)_

## `aio app:create [PATH]`

Create a new Adobe I/O App with default parameters

```
USAGE
  $ aio app:create [PATH]

ARGUMENTS
  PATH  [default: .] Path to the app directory

OPTIONS
  -i, --import=import  Import an Adobe I/O Developer Console configuration file
  -v, --verbose        Verbose output
  --version            Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/create.js)_

## `aio app:delete`

Delete a component from an existing Adobe I/O App

```
USAGE
  $ aio app:delete

OPTIONS
  -v, --verbose  Verbose output
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/delete/index.js)_

## `aio app:delete:action [ACTION-NAME]`

Delete an existing action

```
USAGE
  $ aio app:delete:action [ACTION-NAME]

ARGUMENTS
  ACTION-NAME  Action name to delete, if not specified you will choose from a list of actions

OPTIONS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/delete/action.js)_

## `aio app:delete:ci`

Delete existing CI files

```
USAGE
  $ aio app:delete:ci

OPTIONS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/delete/ci.js)_

## `aio app:delete:event EVENT-ACTION-NAME`

Delete an existing Adobe I/O Events action

```
USAGE
  $ aio app:delete:event EVENT-ACTION-NAME

ARGUMENTS
  EVENT-ACTION-NAME  Action name to delete

OPTIONS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/delete/event.js)_

## `aio app:delete:service`

Delete Services in the current Workspace

```
USAGE
  $ aio app:delete:service

OPTIONS
  -v, --verbose  Verbose output
  --version      Show version

ALIASES
  $ aio app:delete:services
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/delete/service.js)_

## `aio app:delete:web-assets`

Delete existing web assets

```
USAGE
  $ aio app:delete:web-assets

OPTIONS
  -v, --verbose  Verbose output
  -y, --yes      Skip questions, and use all default values
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/delete/web-assets.js)_

## `aio app:deploy`

Build and deploy an Adobe I/O App

```
USAGE
  $ aio app:deploy

OPTIONS
  -a, --action=action  Deploy only a specific action, the flags can be specified multiple times
  -v, --verbose        Verbose output
  --[no-]content-hash  Enable content hashing in browser code (default: true)
  --[no-]force-build   Forces a build even if one already exists (default: true)
  --open               Open the default web browser after a successful deploy, only valid if your app has a front-end
  --skip-actions       Skip action build & deploy
  --skip-build         Skip build phase
  --skip-deploy        Skip deploy phase
  --skip-static        Skip build & deployment of static files
  --skip-web-assets    Skip build & deployment of web assets
  --version            Show version

DESCRIPTION
  This will always force a rebuild unless --no-force-build is set.
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/deploy.js)_

## `aio app:get-url [ACTION]`

Get action URLs

```
USAGE
  $ aio app:get-url [ACTION]

OPTIONS
  -h, --hson     Output human readable json
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --cdn          Display CDN based action URLs
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/get-url.js)_

## `aio app:info`

Display settings/configuration in use by an Adobe I/O App

```
USAGE
  $ aio app:info

OPTIONS
  -h, --hson     Output human readable json
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --[no-]mask    Hide known private info
  --version      Show version

DESCRIPTION
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/info.js)_

## `aio app:init [PATH]`

Create a new Adobe I/O App

```
USAGE
  $ aio app:init [PATH]

ARGUMENTS
  PATH  [default: .] Path to the app directory

OPTIONS
  -i, --import=import  Import an Adobe I/O Developer Console configuration file
  -s, --skip-install   Skip npm installation after files are created
  -v, --verbose        Verbose output
  -y, --yes            Skip questions, and use all default values
  --[no-]login         Login using your Adobe ID for interacting with Adobe I/O Developer Console
  --version            Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/init.js)_

## `aio app:logs`

Fetch logs for an Adobe I/O App

```
USAGE
  $ aio app:logs

OPTIONS
  -a, --action=action  Fetch logs for a specific action
  -l, --limit=limit    [default: 1] Limit number of activations to fetch logs from ( 1-50 )
  -o, --poll           Fetch logs continuously
  -r, --strip          strip timestamp information and output first line only
  -t, --tail           Fetch logs continuously
  -v, --verbose        Verbose output
  -w, --watch          Fetch logs continuously
  --version            Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/logs.js)_

## `aio app:run`

Run an Adobe I/O App

```
USAGE
  $ aio app:run

OPTIONS
  -v, --verbose   Verbose output
  --local         run/debug actions locally ( requires Docker running )
  --open          Open the default web browser after a successful run, only valid if your app has a front-end
  --[no-]serve    start frontend server (experimental)
  --skip-actions  skip actions, only run the ui server
  --version       Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/run.js)_

## `aio app:test`

Run tests for an Adobe I/O App

```
USAGE
  $ aio app:test

OPTIONS
  -e, --e2e      runs e2e tests.
  -u, --unit     runs unit tests (default).
  -v, --verbose  Verbose output
  --version      Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/test.js)_

## `aio app:undeploy`

Undeploys an Adobe I/O App

```
USAGE
  $ aio app:undeploy

OPTIONS
  -v, --verbose      Verbose output
  --skip-actions     Skip undeployment of actions
  --skip-static      Skip undeployment of static files
  --skip-web-assets  Skip undeployment of web assets
  --version          Show version
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/undeploy.js)_

## `aio app:use [CONFIG_FILE_PATH]`

Import an Adobe Developer Console configuration file

```
USAGE
  $ aio app:use [CONFIG_FILE_PATH]

ARGUMENTS
  CONFIG_FILE_PATH  path to an Adobe I/O Developer Console configuration file

OPTIONS
  -g, --global                         Use the global Adobe Developer Console Org / Project / Workspace configuration,
                                       which can be set via `aio console` commands

  -v, --verbose                        Verbose output

  -w, --workspace-name=workspace-name  Specify the Adobe Developer Console Workspace name to import the configuration
                                       from

  --confirm-service-sync               Skip the Service sync prompt and overwrite Service subscriptions in the new
                                       Workspace with current subscriptions

  --merge                              Merge any .aio and .env files during import of the Adobe Developer Console
                                       configuration file

  --no-input                           Skip user prompts by setting --no-service-sync and --merge. Requires one of
                                       config_file_path or --global or --workspace-name

  --no-service-sync                    Skip the Service sync prompt and do not attach current Service subscriptions to
                                       the new Workspace

  --overwrite                          Overwrite any .aio and .env files during import of the Adobe Developer Console
                                       configuration file

  --version                            Show version

  --workspace                          Prompt for selection of a Workspace in the same Project, and import the
                                       configuration for this Workspace
```

_See code: [@adobe/aio-cli-plugin-app](https://github.com/adobe/aio-cli-plugin-app/blob/7.0.0/src/commands/app/use.js)_

## `aio auth`

Adobe IMS commands to login and logout.

```
USAGE
  $ aio auth

DESCRIPTION
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

EXAMPLE
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

_See code: [@adobe/aio-cli-plugin-auth](https://github.com/adobe/aio-cli-plugin-auth/blob/2.4.1/src/commands/auth/index.js)_

## `aio auth:ctx`

Manage Adobe IMS contexts.

```
USAGE
  $ aio auth:ctx

OPTIONS
  -c, --ctx=ctx  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -g, --global   global config
  -l, --local    local config
  -s, --set=set  Sets the name of the current local Adobe IMS context
  -v, --verbose  Verbose output
  --debug=debug  Debug level output
  --list         Names of the Adobe IMS contexts as an array
  --value        Prints named or current Adobe IMS context data

DESCRIPTION
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

_See code: [@adobe/aio-cli-plugin-auth](https://github.com/adobe/aio-cli-plugin-auth/blob/2.4.1/src/commands/auth/ctx.js)_

## `aio auth:login`

Log in with a certain Adobe IMS context and returns the access token.

```
USAGE
  $ aio auth:login

OPTIONS
  -b, --bare     print access token only
  -c, --ctx=ctx  Name of the Adobe IMS context to use. Default is the current Adobe IMS context
  -d, --decode   Decode and display access token data

  -f, --force    Force logging in. This causes a forced logout on the context first and makes sure to not use any cached
                 data when calling the plugin.

  -g, --global   global config

  -l, --local    local config

  -v, --verbose  Verbose output

  --debug=debug  Debug level output

DESCRIPTION
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
     plugin will launch a Chromium browser to guide the user through the
     login process. The plugin itself will *never* see the user's
     password but only receive the authorization token after the
     user authenticated with Adobe IMS.

ALIASES
  $ aio login
```

_See code: [@adobe/aio-cli-plugin-auth](https://github.com/adobe/aio-cli-plugin-auth/blob/2.4.1/src/commands/auth/login.js)_

## `aio auth:logout`

Log out the current or a named Adobe IMS context.

```
USAGE
  $ aio auth:logout

OPTIONS
  -c, --ctx=ctx  Name of the Adobe IMS context to use. Default is the current Adobe IMS context

  -f, --force    Invalidate the refresh token as well as all access tokens.
                 Otherwise only the access token is invalidated. For Adobe IMS
                 contexts not supporting refresh tokens, this flag has no
                 effect.

  -g, --global   global config

  -l, --local    local config

  -v, --verbose  Verbose output

  --debug=debug  Debug level output

DESCRIPTION
  This command can be called multiple times on the same Adobe IMS context with
  out causing any errors. The assumption is that after calling this command
  without an error, the Adobe IMS context's access and refresh tokens have been
  invalidated and removed from persistent storage. Repeatedly calling this
  command will just do nothing.

ALIASES
  $ aio logout
```

_See code: [@adobe/aio-cli-plugin-auth](https://github.com/adobe/aio-cli-plugin-auth/blob/2.4.1/src/commands/auth/logout.js)_

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

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.3.0/src/commands/autocomplete/index.ts)_

## `aio certificate`

Generate or verify a certificate for use with Adobe I/O

```
USAGE
  $ aio certificate
```

_See code: [@adobe/aio-cli-plugin-certificate](https://github.com/adobe/aio-cli-plugin-certificate/blob/0.3.0/src/commands/certificate/index.js)_

## `aio certificate:generate`

Generate a new private/public key pair

```
USAGE
  $ aio certificate:generate

OPTIONS
  -c, --country=country            Country Name
  -l, --locality=locality          Locality, or city name

  -n, --name=name                  [default: selfsign.localhost] Common Name: typically a host domain name, like
                                   www.mysite.com

  -o, --organization=organization  Organization name

  -s, --state=state                State or Province

  -u, --unit=unit                  Organizational unit or department

  --days=days                      [default: 365] Number of days the certificate should be valid for. (Max 365)

  --keyout=keyout                  [default: private.key] file to send the key to

  --out=out                        [default: certificate_pub.crt] output file

DESCRIPTION
  Generate a self-signed certificate to enable https:// on localhost or signing jwt payloads for interacting with Adobe 
  services.
```

_See code: [@adobe/aio-cli-plugin-certificate](https://github.com/adobe/aio-cli-plugin-certificate/blob/0.3.0/src/commands/certificate/generate.js)_

## `aio certificate:verify FILE`

Verify a certificate for use with Adobe I/O

```
USAGE
  $ aio certificate:verify FILE

ARGUMENTS
  FILE  file path to certificate to verify

OPTIONS
  --days=days  +- is certificate valid in --days

DESCRIPTION
  Verifies that the certificate is valid, and/or will not expire in [--days] days from now.
```

_See code: [@adobe/aio-cli-plugin-certificate](https://github.com/adobe/aio-cli-plugin-certificate/blob/0.3.0/src/commands/certificate/verify.js)_

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

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/2.3.0/src/commands/config/index.js)_

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

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/2.3.0/src/commands/config/clear.js)_

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

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/2.3.0/src/commands/config/delete.js)_

## `aio config:edit`

edit config file

```
USAGE
  $ aio config:edit

OPTIONS
  -g, --global  global config
  -l, --local   local config
```

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/2.3.0/src/commands/config/edit.js)_

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

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/2.3.0/src/commands/config/get.js)_

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

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/2.3.0/src/commands/config/list.js)_

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

_See code: [@adobe/aio-cli-plugin-config](https://github.com/adobe/aio-cli-plugin-config/blob/2.3.0/src/commands/config/set.js)_

## `aio console`

Console plugin for the Adobe I/O CLI

```
USAGE
  $ aio console

OPTIONS
  --help  Show help
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/index.js)_

## `aio console:org`

Manage your Adobe I/O Console Organizations

```
USAGE
  $ aio console:org

OPTIONS
  --help  Show help
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/org/index.js)_

## `aio console:org:list`

List your Organizations

```
USAGE
  $ aio console:org:list

OPTIONS
  -j, --json  Output json
  -y, --yml   Output yml
  --help      Show help

ALIASES
  $ aio console:org:ls
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/org/list.js)_

## `aio console:org:select [ORGCODE]`

Select an Organization

```
USAGE
  $ aio console:org:select [ORGCODE]

ARGUMENTS
  ORGCODE  Adobe Developer Console Org code

OPTIONS
  --help  Show help

ALIASES
  $ aio console:org:sel
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/org/select.js)_

## `aio console:project`

Manage your Adobe I/O Console Projects

```
USAGE
  $ aio console:project

OPTIONS
  --help  Show help
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/project/index.js)_

## `aio console:project:list`

List your Projects for the selected Organization

```
USAGE
  $ aio console:project:list

OPTIONS
  -j, --json     Output json
  -y, --yml      Output yml
  --help         Show help
  --orgId=orgId  OrgID for listing projects

ALIASES
  $ aio console:project:ls
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/project/list.js)_

## `aio console:project:select [PROJECTIDORNAME]`

Select a Project for the selected Organization

```
USAGE
  $ aio console:project:select [PROJECTIDORNAME]

ARGUMENTS
  PROJECTIDORNAME  Adobe Developer Console Project id or Project name

OPTIONS
  --help         Show help
  --orgId=orgId  Organization id of the Console Project to select

ALIASES
  $ aio console:project:sel
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/project/select.js)_

## `aio console:where`

Show the currently selected Organization, Project and Workspace

```
USAGE
  $ aio console:where

OPTIONS
  -j, --json  Output json
  -y, --yml   Output yml
  --help      Show help

ALIASES
  $ aio where
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/where/index.js)_

## `aio console:workspace`

Manage your Adobe I/O Console Workspaces

```
USAGE
  $ aio console:workspace

OPTIONS
  --help  Show help

ALIASES
  $ aio console:ws
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/workspace/index.js)_

## `aio console:workspace:download [DESTINATION]`

Downloads the configuration for the selected Workspace

```
USAGE
  $ aio console:workspace:download [DESTINATION]

ARGUMENTS
  DESTINATION  Output file name or folder name where the Console Workspace configuration file should be saved

OPTIONS
  --help                     Show help
  --orgId=orgId              Organization id of the Console Workspace configuration to download
  --projectId=projectId      Project id of the Console Workspace configuration to download
  --workspaceId=workspaceId  Workspace id of the Console Workspace configuration to download

ALIASES
  $ aio console:workspace:dl
  $ aio console:ws:download
  $ aio console:ws:dl
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/workspace/download.js)_

## `aio console:workspace:list`

List your Workspaces for your selected Project

```
USAGE
  $ aio console:workspace:list

OPTIONS
  -j, --json             Output json
  -y, --yml              Output yml
  --help                 Show help
  --orgId=orgId          Organization id of the Console Workspaces to list
  --projectId=projectId  Project id of the Console Workspaces to list

ALIASES
  $ aio console:workspace:ls
  $ aio console:ws:list
  $ aio console:ws:ls
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/workspace/list.js)_

## `aio console:workspace:select [WORKSPACEIDORNAME]`

Select a Workspace for the selected Project

```
USAGE
  $ aio console:workspace:select [WORKSPACEIDORNAME]

ARGUMENTS
  WORKSPACEIDORNAME  Adobe Developer Console Workspace id or Workspace name

OPTIONS
  --help                 Show help
  --orgId=orgId          Organization id of the Console Workspace to select
  --projectId=projectId  Project id of the Console Workspace to select

ALIASES
  $ aio console:workspace:sel
  $ aio console:ws:select
  $ aio console:ws:sel
```

_See code: [@adobe/aio-cli-plugin-console](https://github.com/adobe/aio-cli-plugin-console/blob/3.3.0/src/commands/console/workspace/select.js)_

## `aio discover`

Discover plugins to install

```
USAGE
  $ aio discover

OPTIONS
  -f, --sort-field=date|name  [default: date] which column to sort, use the sort-order flag to specify sort direction
  -i, --install               interactive install mode

  -o, --sort-order=asc|desc   [default: desc] sort order for a column, use the sort-field flag to specify which column
                              to sort

DESCRIPTION
  To install a plugin, run 'aio plugins install NAME'

ALIASES
  $ aio plugins:discover
```

_See code: [src/commands/discover.js](https://github.com/adobe/aio-cli/blob/7.0.0/src/commands/discover.js)_

## `aio event`

Manage your Adobe I/O Events

```
USAGE
  $ aio event

OPTIONS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version
```

## `aio event:eventmetadata`

Manage your Adobe I/O Events Providers' Event Metadata

```
USAGE
  $ aio event:eventmetadata

OPTIONS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version
```

## `aio event:eventmetadata:create PROVIDERID`

Create an Event Metadata for a Provider

```
USAGE
  $ aio event:eventmetadata:create PROVIDERID

ARGUMENTS
  PROVIDERID  The requested eventmetadata event code

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version
```

## `aio event:eventmetadata:delete PROVIDERID [EVENTCODE]`

Delete Event Metadata for a Provider

```
USAGE
  $ aio event:eventmetadata:delete PROVIDERID [EVENTCODE]

ARGUMENTS
  PROVIDERID  The requested provider ID
  EVENTCODE   The requested eventmetadata event code

OPTIONS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version
```

## `aio event:eventmetadata:get PROVIDERID EVENTCODE`

Get details of an Event Code of a Provider

```
USAGE
  $ aio event:eventmetadata:get PROVIDERID EVENTCODE

ARGUMENTS
  PROVIDERID  The requested provider ID
  EVENTCODE   The requested eventmetadata event code

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version
```

## `aio event:eventmetadata:list PROVIDERID`

List all Event Metadata for a Provider

```
USAGE
  $ aio event:eventmetadata:list PROVIDERID

ARGUMENTS
  PROVIDERID  The requested provider ID

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

ALIASES
  $ aio event:eventmetadata:ls
```

## `aio event:eventmetadata:update PROVIDERID EVENTCODE`

Update an Event Metadata for a Provider

```
USAGE
  $ aio event:eventmetadata:update PROVIDERID EVENTCODE

ARGUMENTS
  PROVIDERID  The requested provider ID
  EVENTCODE   The requested eventmetadata event code

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version
```

## `aio event:provider`

Manage your Adobe I/O Events Providers

```
USAGE
  $ aio event:provider

OPTIONS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version
```

## `aio event:provider:create`

Create a new Provider

```
USAGE
  $ aio event:provider:create

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version
```

## `aio event:provider:delete PROVIDERID`

Delete Provider by id

```
USAGE
  $ aio event:provider:delete PROVIDERID

ARGUMENTS
  PROVIDERID  The requested provider ID

OPTIONS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version
```

## `aio event:provider:get PROVIDERID`

Get details of Provider by id

```
USAGE
  $ aio event:provider:get PROVIDERID

ARGUMENTS
  PROVIDERID  The requested provider ID

OPTIONS
  -j, --json            Output json
  -v, --verbose         Verbose output
  -y, --yml             Output yml
  --fetchEventMetadata  Fetch event metadata with provider
  --help                Show help
  --version             Show version
```

## `aio event:provider:list`

Get list of all Providers for the Organization

```
USAGE
  $ aio event:provider:list

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

ALIASES
  $ aio event:provider:ls
```

## `aio event:provider:update PROVIDERID`

Update an existing Provider

```
USAGE
  $ aio event:provider:update PROVIDERID

ARGUMENTS
  PROVIDERID  The requested provider ID

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version
```

## `aio event:registration`

Manage your Adobe I/O Events Registrations

```
USAGE
  $ aio event:registration

OPTIONS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version
```

## `aio event:registration:create BODYJSONFILE`

Create a new Event Registration in your Workspace

```
USAGE
  $ aio event:registration:create BODYJSONFILE

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

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

ALIASES
  $ aio event:reg:create
```

## `aio event:registration:delete REGISTRATIONID`

Delete Registration

```
USAGE
  $ aio event:registration:delete REGISTRATIONID

ARGUMENTS
  REGISTRATIONID  The requested registration ID

OPTIONS
  -v, --verbose  Verbose output
  --help         Show help
  --version      Show version

ALIASES
  $ aio event:reg:delete
```

## `aio event:registration:get REGISTRATIONID`

Get an Event Registration in your Workspace

```
USAGE
  $ aio event:registration:get REGISTRATIONID

ARGUMENTS
  REGISTRATIONID  The requested registration ID

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

ALIASES
  $ aio event:reg:get
```

## `aio event:registration:list`

List your Event Registrations in your Workspace

```
USAGE
  $ aio event:registration:list

OPTIONS
  -j, --json     Output json
  -v, --verbose  Verbose output
  -y, --yml      Output yml
  --help         Show help
  --version      Show version

ALIASES
  $ aio event:registration:ls
  $ aio event:reg:list
  $ aio event:reg:ls
```

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `aio info`

Display dev environment version information

```
USAGE
  $ aio info

OPTIONS
  -j, --json  output raw json
  -y, --yml   output yml
```

_See code: [@adobe/aio-cli-plugin-info](https://github.com/adobe/aio-cli-plugin-info/blob/1.1.1/src/commands/info.js)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/index.ts)_

## `aio plugins:inspect PLUGIN...`

displays installation properties of a plugin

```
USAGE
  $ aio plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] plugin to inspect

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

EXAMPLE
  $ aio plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/inspect.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/install.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/link.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/uninstall.ts)_

## `aio plugins:update`

update installed plugins

```
USAGE
  $ aio plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/update.ts)_

## `aio report`

Report an issue with the CLI or submit a feature request

```
USAGE
  $ aio report

OPTIONS
  -b, --bug      report an issue
  -f, --feature  request a feature
```

_See code: [@adobe/aio-cli-plugin-info](https://github.com/adobe/aio-cli-plugin-info/blob/1.1.1/src/commands/report.js)_

## `aio rollback`

Clears all installed plugins.

```
USAGE
  $ aio rollback

OPTIONS
  -c, --[no-]confirm  confirmation needed for clear (defaults to true)
  -i, --interactive   interactive clear mode
  -l, --list          list plugins that will be cleared
  -v, --verbose       Verbose output
```

_See code: [src/commands/rollback.js](https://github.com/adobe/aio-cli/blob/7.0.0/src/commands/rollback.js)_

## `aio runtime`

Execute runtime commands

```
USAGE
  $ aio runtime

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio rt
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/index.js)_

## `aio runtime:action`

Manage your actions

```
USAGE
  $ aio runtime:action

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio rt:action
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/action/index.js)_

## `aio runtime:action:create ACTIONNAME [ACTIONPATH]`

Creates an Action

```
USAGE
  $ aio runtime:action:create ACTIONNAME [ACTIONPATH]

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -E, --env-file=env-file                FILE containing environment variables in JSON format
  -P, --param-file=param-file            FILE containing parameter values in JSON format
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -e, --env=env                          environment values in KEY VALUE format
  -i, --insecure                         bypass certificate check
  -l, --logsize=logsize                  the maximum log size LIMIT in MB for the action (default 10)
  -m, --memory=memory                    the maximum memory LIMIT in MB for the action (default 256)
  -p, --param=param                      parameter values in KEY VALUE format

  -t, --timeout=timeout                  the timeout LIMIT in milliseconds after which the action is terminated (default
                                         60000)

  -u, --auth=auth                        whisk auth

  -v, --verbose                          Verbose output

  --apihost=apihost                      whisk API host

  --apiversion=apiversion                whisk API version

  --binary                               treat code artifact as binary

  --cert=cert                            client cert

  --debug=debug                          Debug level output

  --docker=docker                        [Restricted Access] use provided Docker image (a path on DockerHub) to run the
                                         action

  --help                                 Show help

  --json                                 output raw json

  --key=key                              client key

  --kind=kind                            the KIND of the action runtime (example: swift:default, nodejs:default)

  --main=main                            the name of the action entry point (function or fully-qualified method name
                                         when applicable)

  --sequence=sequence                    treat ACTION as comma separated sequence of actions to invoke

  --version                              Show version

  --web=true|yes|false|no|raw            treat ACTION as a web action or as a raw HTTP web action

  --web-secure=web-secure                secure the web action (valid values are true, false, or any string)

ALIASES
  $ aio rt:action:create
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/action/create.js)_

## `aio runtime:action:delete ACTIONNAME`

Deletes an Action

```
USAGE
  $ aio runtime:action:delete ACTIONNAME

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --json                   output raw json
  --key=key                client key
  --version                Show version

ALIASES
  $ aio runtime:action:del
  $ aio rt:action:delete
  $ aio rt:action:del
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/action/delete.js)_

## `aio runtime:action:get ACTIONNAME`

Retrieves an Action

```
USAGE
  $ aio runtime:action:get ACTIONNAME

OPTIONS
  -c, --code               show action code (only works if code is not a zip file)
  -i, --insecure           bypass certificate check
  -r, --url                get action url
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --save                   save action code to file corresponding with action name
  --save-as=save-as        file to save action code to
  --version                Show version

ALIASES
  $ aio rt:action:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/action/get.js)_

## `aio runtime:action:invoke ACTIONNAME`

Invokes an Action

```
USAGE
  $ aio runtime:action:invoke ACTIONNAME

OPTIONS
  -P, --param-file=param-file  FILE containing parameter values in JSON format
  -b, --blocking               blocking invoke
  -i, --insecure               bypass certificate check
  -p, --param=param            parameter values in KEY VALUE format
  -r, --result                 blocking invoke; show only activation result (unless there is a failure)
  -u, --auth=auth              whisk auth
  -v, --verbose                Verbose output
  --apihost=apihost            whisk API host
  --apiversion=apiversion      whisk API version
  --cert=cert                  client cert
  --debug=debug                Debug level output
  --help                       Show help
  --key=key                    client key
  --version                    Show version

ALIASES
  $ aio rt:action:invoke
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/action/invoke.js)_

## `aio runtime:action:list [PACKAGENAME]`

Lists all the Actions

```
USAGE
  $ aio runtime:action:list [PACKAGENAME]

OPTIONS
  -c, --count              show only the total number of actions
  -i, --insecure           bypass certificate check
  -l, --limit=limit        only return LIMIT number of actions from the collection (default 30)
  -n, --name               sort results by name
  -s, --skip=skip          exclude the first SKIP number of actions from the result
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --json                   output raw json
  --key=key                client key
  --name-sort              sort results by name
  --version                Show version

ALIASES
  $ aio runtime:action:ls
  $ aio runtime:actions:list
  $ aio runtime:actions:ls
  $ aio rt:action:list
  $ aio rt:actions:list
  $ aio rt:action:ls
  $ aio rt:actions:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/action/list.js)_

## `aio runtime:action:update ACTIONNAME [ACTIONPATH]`

Updates an Action

```
USAGE
  $ aio runtime:action:update ACTIONNAME [ACTIONPATH]

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -E, --env-file=env-file                FILE containing environment variables in JSON format
  -P, --param-file=param-file            FILE containing parameter values in JSON format
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -e, --env=env                          environment values in KEY VALUE format
  -i, --insecure                         bypass certificate check
  -l, --logsize=logsize                  the maximum log size LIMIT in MB for the action (default 10)
  -m, --memory=memory                    the maximum memory LIMIT in MB for the action (default 256)
  -p, --param=param                      parameter values in KEY VALUE format

  -t, --timeout=timeout                  the timeout LIMIT in milliseconds after which the action is terminated (default
                                         60000)

  -u, --auth=auth                        whisk auth

  -v, --verbose                          Verbose output

  --apihost=apihost                      whisk API host

  --apiversion=apiversion                whisk API version

  --binary                               treat code artifact as binary

  --cert=cert                            client cert

  --debug=debug                          Debug level output

  --docker=docker                        [Restricted Access] use provided Docker image (a path on DockerHub) to run the
                                         action

  --help                                 Show help

  --json                                 output raw json

  --key=key                              client key

  --kind=kind                            the KIND of the action runtime (example: swift:default, nodejs:default)

  --main=main                            the name of the action entry point (function or fully-qualified method name
                                         when applicable)

  --sequence=sequence                    treat ACTION as comma separated sequence of actions to invoke

  --version                              Show version

  --web=true|yes|false|no|raw            treat ACTION as a web action or as a raw HTTP web action

  --web-secure=web-secure                secure the web action (valid values are true, false, or any string)

ALIASES
  $ aio rt:action:update
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/action/update.js)_

## `aio runtime:activation`

Manage your activations

```
USAGE
  $ aio runtime:activation

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio rt:activation
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/activation/index.js)_

## `aio runtime:activation:get [ACTIVATIONID]`

Retrieves an Activation

```
USAGE
  $ aio runtime:activation:get [ACTIVATIONID]

OPTIONS
  -g, --logs               emit only the logs, stripped of time stamps and stream identifier
  -i, --insecure           bypass certificate check
  -l, --last               retrieves the most recent activation
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio rt:activation:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/activation/get.js)_

## `aio runtime:activation:list [ACTIVATION_NAME]`

Lists all the Activations

```
USAGE
  $ aio runtime:activation:list [ACTIVATION_NAME]

OPTIONS
  -c, --count              show only the total number of activations
  -f, --full               include full activation description
  -i, --insecure           bypass certificate check

  -l, --limit=limit        only return LIMIT number of activations from the collection with a maximum LIMIT of 200
                           activations (default 30)

  -s, --skip=skip          exclude the first SKIP number of activations from the result

  -u, --auth=auth          whisk auth

  -v, --verbose            Verbose output

  --apihost=apihost        whisk API host

  --apiversion=apiversion  whisk API version

  --cert=cert              client cert

  --debug=debug            Debug level output

  --help                   Show help

  --json                   output raw json

  --key=key                client key

  --since=since            return activations with timestamps later than SINCE; measured in milliseconds since Th, 01,
                           Jan 1970

  --upto=upto              return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01,
                           Jan 1970

  --version                Show version

ALIASES
  $ aio runtime:activations:list
  $ aio runtime:activation:ls
  $ aio runtime:activations:ls
  $ aio rt:activation:list
  $ aio rt:activation:ls
  $ aio rt:activations:list
  $ aio rt:activations:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/activation/list.js)_

## `aio runtime:activation:logs [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ aio runtime:activation:logs [ACTIVATIONID]

OPTIONS
  -a, --action=action      Fetch logs for a specific action
  -d, --deployed           Fetch logs for all actions deployed under a specific package
  -i, --insecure           bypass certificate check
  -l, --last               retrieves the most recent activation logs
  -m, --manifest           Fetch logs for all actions in the manifest
  -o, --poll               Fetch logs continuously
  -p, --package=package    Fetch logs for a specific package in the manifest
  -r, --strip              strip timestamp information and output first line only
  -t, --tail               Fetch logs continuously
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  -w, --watch              Fetch logs continuously
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --limit=limit            return the last `limit` activation logs. Max 50
  --version                Show version

ALIASES
  $ aio runtime:activation:log
  $ aio runtime:log
  $ aio runtime:logs
  $ aio rt:activation:logs
  $ aio rt:activation:log
  $ aio rt:log
  $ aio rt:logs
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/activation/logs.js)_

## `aio runtime:activation:result [ACTIVATIONID]`

Retrieves the Results for an Activation

```
USAGE
  $ aio runtime:activation:result [ACTIVATIONID]

OPTIONS
  -i, --insecure           bypass certificate check
  -l, --last               retrieves the most recent activation result
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio rt:activation:result
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/activation/result.js)_

## `aio runtime:deploy`

The Runtime Deployment Tool

```
USAGE
  $ aio runtime:deploy

OPTIONS
  -P, --param-file=param-file  FILE containing parameter values in JSON format
  -d, --deployment=deployment  the path to the deployment file
  -i, --insecure               bypass certificate check
  -m, --manifest=manifest      the manifest file location
  -u, --auth=auth              whisk auth
  -v, --verbose                Verbose output
  --apihost=apihost            whisk API host
  --apiversion=apiversion      whisk API version
  --cert=cert                  client cert
  --debug=debug                Debug level output
  --help                       Show help
  --key=key                    client key
  --param=param                parameter values in KEY VALUE format
  --version                    Show version

ALIASES
  $ aio rt:deploy
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/deploy/index.js)_

## `aio runtime:deploy:export`

Exports managed project assets from Runtime to manifest and function files

```
USAGE
  $ aio runtime:deploy:export

OPTIONS
  -i, --insecure             bypass certificate check
  -m, --manifest=manifest    (required) the manifest file location
  -u, --auth=auth            whisk auth
  -v, --verbose              Verbose output
  --apihost=apihost          whisk API host
  --apiversion=apiversion    whisk API version
  --cert=cert                client cert
  --debug=debug              Debug level output
  --help                     Show help
  --key=key                  client key
  --projectname=projectname  (required) the name of the project to be undeployed
  --version                  Show version

ALIASES
  $ aio rt:deploy:export
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/deploy/export.js)_

## `aio runtime:deploy:report`

Provides a summary report of Runtime assets being deployed/undeployed based on manifest/deployment YAML

```
USAGE
  $ aio runtime:deploy:report

OPTIONS
  -d, --deployment=deployment  the deployment file location
  -i, --insecure               bypass certificate check
  -m, --manifest=manifest      the manifest file location
  -u, --auth=auth              whisk auth
  -v, --verbose                Verbose output
  --apihost=apihost            whisk API host
  --apiversion=apiversion      whisk API version
  --cert=cert                  client cert
  --debug=debug                Debug level output
  --help                       Show help
  --key=key                    client key
  --version                    Show version

ALIASES
  $ aio rt:deploy:report
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/deploy/report.js)_

## `aio runtime:deploy:sync`

A tool to sync deployment and undeployment of Runtime packages using a manifest and optional deployment files using YAML

```
USAGE
  $ aio runtime:deploy:sync

OPTIONS
  -d, --deployment=deployment  the path to the deployment file
  -i, --insecure               bypass certificate check
  -m, --manifest=manifest      the manifest file location
  -u, --auth=auth              whisk auth
  -v, --verbose                Verbose output
  --apihost=apihost            whisk API host
  --apiversion=apiversion      whisk API version
  --cert=cert                  client cert
  --debug=debug                Debug level output
  --help                       Show help
  --key=key                    client key
  --version                    Show version

ALIASES
  $ aio rt:deploy:sync
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/deploy/sync.js)_

## `aio runtime:deploy:undeploy`

Undeploy removes Runtime assets which were deployed from the manifest and deployment YAML

```
USAGE
  $ aio runtime:deploy:undeploy

OPTIONS
  -i, --insecure             bypass certificate check
  -m, --manifest=manifest    the manifest file location
  -u, --auth=auth            whisk auth
  -v, --verbose              Verbose output
  --apihost=apihost          whisk API host
  --apiversion=apiversion    whisk API version
  --cert=cert                client cert
  --debug=debug              Debug level output
  --help                     Show help
  --key=key                  client key
  --projectname=projectname  the name of the project to be undeployed
  --version                  Show version

ALIASES
  $ aio rt:deploy:undeploy
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/deploy/undeploy.js)_

## `aio runtime:deploy:version`

Prints the version number of aio runtime deploy

```
USAGE
  $ aio runtime:deploy:version

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio rt:deploy:version
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/deploy/version.js)_

## `aio runtime:namespace`

Manage your namespaces

```
USAGE
  $ aio runtime:namespace

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio runtime:ns
  $ aio rt:namespace
  $ aio rt:ns
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/namespace/index.js)_

## `aio runtime:namespace:get`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ aio runtime:namespace:get

OPTIONS
  -i, --insecure           bypass certificate check
  -n, --name               sort results by name
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --json                   output raw json
  --key=key                client key
  --name-sort              sort results by name
  --version                Show version

ALIASES
  $ aio rt:get
  $ aio runtime:list
  $ aio rt:list
  $ aio runtime:ls
  $ aio rt:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/namespace/get.js)_

## `aio runtime:namespace:list`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ aio runtime:namespace:list

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --json                   output raw json
  --key=key                client key
  --version                Show version

ALIASES
  $ aio runtime:namespace:ls
  $ aio runtime:ns:list
  $ aio runtime:ns:ls
  $ aio rt:namespace:list
  $ aio rt:namespace:ls
  $ aio rt:ns:list
  $ aio rt:ns:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/namespace/list.js)_

## `aio runtime:package`

Manage your packages

```
USAGE
  $ aio runtime:package

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio runtime:pkg
  $ aio rt:package
  $ aio rt:pkg
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/package/index.js)_

## `aio runtime:package:bind PACKAGENAME BINDPACKAGENAME`

Bind parameters to a package

```
USAGE
  $ aio runtime:package:bind PACKAGENAME BINDPACKAGENAME

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -P, --param-file=param-file            parameter to be passed to the package for json file
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -i, --insecure                         bypass certificate check
  -p, --param=param                      parameters in key value pairs to be passed to the package
  -u, --auth=auth                        whisk auth
  -v, --verbose                          Verbose output
  --apihost=apihost                      whisk API host
  --apiversion=apiversion                whisk API version
  --cert=cert                            client cert
  --debug=debug                          Debug level output
  --help                                 Show help
  --json                                 output raw json
  --key=key                              client key
  --version                              Show version

ALIASES
  $ aio runtime:pkg:bind
  $ aio rt:package:bind
  $ aio rt:pkg:bind
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/package/bind.js)_

## `aio runtime:package:create PACKAGENAME`

Creates a Package

```
USAGE
  $ aio runtime:package:create PACKAGENAME

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -P, --param-file=param-file            parameter to be passed to the package for json file
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -i, --insecure                         bypass certificate check
  -p, --param=param                      parameters in key value pairs to be passed to the package
  -u, --auth=auth                        whisk auth
  -v, --verbose                          Verbose output
  --apihost=apihost                      whisk API host
  --apiversion=apiversion                whisk API version
  --cert=cert                            client cert
  --debug=debug                          Debug level output
  --help                                 Show help
  --json                                 output raw json
  --key=key                              client key
  --shared=true|yes|false|no             parameter to be passed to indicate whether package is shared or private
  --version                              Show version

ALIASES
  $ aio runtime:pkg:create
  $ aio rt:package:create
  $ aio rt:pkg:create
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/package/create.js)_

## `aio runtime:package:delete PACKAGENAME`

Deletes a Package

```
USAGE
  $ aio runtime:package:delete PACKAGENAME

OPTIONS
  --json  output raw json

ALIASES
  $ aio runtime:pkg:delete
  $ aio rt:package:delete
  $ aio rt:pkg:delete
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/package/delete.js)_

## `aio runtime:package:get PACKAGENAME`

Retrieves a Package

```
USAGE
  $ aio runtime:package:get PACKAGENAME

OPTIONS
  -i, --insecure           bypass certificate check
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --key=key                client key
  --version                Show version

ALIASES
  $ aio runtime:pkg:get
  $ aio rt:package:get
  $ aio rt:pkg:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/package/get.js)_

## `aio runtime:package:list [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ aio runtime:package:list [NAMESPACE]

OPTIONS
  -c, --count              show only the total number of packages
  -i, --insecure           bypass certificate check
  -l, --limit=limit        only return LIMIT number of packages from the collection (default 30)
  -n, --name               sort results by name
  -s, --skip=skip          exclude the first SKIP number of packages from the result
  -u, --auth=auth          whisk auth
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --cert=cert              client cert
  --debug=debug            Debug level output
  --help                   Show help
  --json                   output raw json
  --key=key                client key
  --name-sort              sort results by name
  --version                Show version

ALIASES
  $ aio runtime:package:ls
  $ aio runtime:pkg:list
  $ aio runtime:pkg:ls
  $ aio rt:package:list
  $ aio rt:package:ls
  $ aio rt:pkg:list
  $ aio rt:pkg:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/package/list.js)_

## `aio runtime:package:update PACKAGENAME`

Updates a Package

```
USAGE
  $ aio runtime:package:update PACKAGENAME

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -P, --param-file=param-file            parameter to be passed to the package for json file
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -i, --insecure                         bypass certificate check
  -p, --param=param                      parameters in key value pairs to be passed to the package
  -u, --auth=auth                        whisk auth
  -v, --verbose                          Verbose output
  --apihost=apihost                      whisk API host
  --apiversion=apiversion                whisk API version
  --cert=cert                            client cert
  --debug=debug                          Debug level output
  --help                                 Show help
  --json                                 output raw json
  --key=key                              client key
  --shared=true|yes|false|no             parameter to be passed to indicate whether package is shared or private
  --version                              Show version

ALIASES
  $ aio runtime:pkg:update
  $ aio rt:package:update
  $ aio rt:pkg:update
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/package/update.js)_

## `aio runtime:property`

Execute property commands

```
USAGE
  $ aio runtime:property

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio runtime:prop
  $ aio rt:prop
  $ aio rt:property
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/property/index.js)_

## `aio runtime:property:get`

get property

```
USAGE
  $ aio runtime:property:get

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --all           all properties
  --apibuild      whisk API build version
  --apibuildno    whisk API build number
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --cliversion    whisk CLI version
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --namespace     whisk namespace
  --version       Show version

ALIASES
  $ aio runtime:prop:get
  $ aio rt:property:get
  $ aio rt:prop:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/property/get.js)_

## `aio runtime:property:set`

set property

```
USAGE
  $ aio runtime:property:set

OPTIONS
  -i, --insecure         bypass certificate check
  -u, --auth             whisk auth
  -v, --verbose          Verbose output
  --apihost              whisk API host
  --apiversion           whisk API version
  --cert                 client cert
  --debug=debug          Debug level output
  --help                 Show help
  --key                  client key
  --namespace=namespace  whisk namespace
  --version              Show version

ALIASES
  $ aio runtime:prop:set
  $ aio rt:property:set
  $ aio rt:prop:set
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/property/set.js)_

## `aio runtime:property:unset`

unset property

```
USAGE
  $ aio runtime:property:unset

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --namespace     whisk namespace
  --version       Show version

ALIASES
  $ aio runtime:prop:unset
  $ aio rt:property:unset
  $ aio rt:prop:unset
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/property/unset.js)_

## `aio runtime:route`

Manage your routes

```
USAGE
  $ aio runtime:route

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio runtime:api
  $ aio rt:api
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/route/index.js)_

## `aio runtime:route:create [BASEPATH] [RELPATH] [APIVERB] [ACTION]`

create a new api route

```
USAGE
  $ aio runtime:route:create [BASEPATH] [RELPATH] [APIVERB] [ACTION]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb
  ACTION    The action to call

OPTIONS
  -c, --config-file=config-file                     file containing API configuration in swagger JSON format
  -i, --insecure                                    bypass certificate check

  -n, --apiname=apiname                             Friendly name of the API; ignored when CFG_FILE is specified
                                                    (default BASE_PATH)

  -r, --response-type=html|http|json|text|svg|json  [default: json] Set the web action response TYPE.

  -u, --auth                                        whisk auth

  -v, --verbose                                     Verbose output

  --apihost                                         whisk API host

  --apiversion                                      whisk API version

  --cert                                            client cert

  --debug=debug                                     Debug level output

  --help                                            Show help

  --key                                             client key

  --version                                         Show version

ALIASES
  $ aio runtime:api:create
  $ aio rt:route:create
  $ aio rt:api:create
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/route/create.js)_

## `aio runtime:route:delete BASEPATHORAPINAME [RELPATH] [APIVERB]`

delete an API

```
USAGE
  $ aio runtime:route:delete BASEPATHORAPINAME [RELPATH] [APIVERB]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name
  RELPATH            The path of the api relative to the base path
  APIVERB            (get|post|put|patch|delete|head|options) The http verb

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio runtime:api:delete
  $ aio rt:route:delete
  $ aio rt:api:delete
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/route/delete.js)_

## `aio runtime:route:get BASEPATHORAPINAME`

get API details

```
USAGE
  $ aio runtime:route:get BASEPATHORAPINAME

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio runtime:api:get
  $ aio rt:route:get
  $ aio rt:api:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/route/get.js)_

## `aio runtime:route:list [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ aio runtime:route:list [BASEPATH] [RELPATH] [APIVERB]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

OPTIONS
  -i, --insecure     bypass certificate check
  -l, --limit=limit  [default: 30] only return LIMIT number of triggers from the collection (default 30)
  -s, --skip=skip    exclude the first SKIP number of triggers from the result
  -u, --auth         whisk auth
  -v, --verbose      Verbose output
  --apihost          whisk API host
  --apiversion       whisk API version
  --cert             client cert
  --debug=debug      Debug level output
  --help             Show help
  --json             output raw json
  --key              client key
  --version          Show version

ALIASES
  $ aio runtime:route:ls
  $ aio runtime:api:list
  $ aio runtime:api:ls
  $ aio rt:route:list
  $ aio rt:route:ls
  $ aio rt:api:list
  $ aio rt:api:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/route/list.js)_

## `aio runtime:rule`

Manage your rules

```
USAGE
  $ aio runtime:rule

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:rule
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/index.js)_

## `aio runtime:rule:create NAME TRIGGER ACTION`

Create a Rule

```
USAGE
  $ aio runtime:rule:create NAME TRIGGER ACTION

ARGUMENTS
  NAME     Name of the rule
  TRIGGER  Name of the trigger
  ACTION   Name of the action

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --json          output raw json
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:rule:create
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/create.js)_

## `aio runtime:rule:delete NAME`

Delete a Rule

```
USAGE
  $ aio runtime:rule:delete NAME

ARGUMENTS
  NAME  Name of the rule

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --json          output raw json
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:rule:delete
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/delete.js)_

## `aio runtime:rule:disable NAME`

Disable a Rule

```
USAGE
  $ aio runtime:rule:disable NAME

ARGUMENTS
  NAME  Name of the rule

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:rule:disable
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/disable.js)_

## `aio runtime:rule:enable NAME`

Enable a Rule

```
USAGE
  $ aio runtime:rule:enable NAME

ARGUMENTS
  NAME  Name of the rule

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:rule:enable
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/enable.js)_

## `aio runtime:rule:get NAME`

Retrieves a Rule

```
USAGE
  $ aio runtime:rule:get NAME

ARGUMENTS
  NAME  Name of the rule

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:rule:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/get.js)_

## `aio runtime:rule:list`

Retrieves a list of Rules

```
USAGE
  $ aio runtime:rule:list

OPTIONS
  -c, --count        show only the total number of rules
  -i, --insecure     bypass certificate check
  -l, --limit=limit  [default: 30] Limit number of rules returned. Default 30
  -n, --name         sort results by name
  -s, --skip=skip    Skip number of rules returned
  -u, --auth         whisk auth
  -v, --verbose      Verbose output
  --apihost          whisk API host
  --apiversion       whisk API version
  --cert             client cert
  --debug=debug      Debug level output
  --help             Show help
  --json             output raw json
  --key              client key
  --name-sort        sort results by name
  --version          Show version

ALIASES
  $ aio runtime:rule:ls
  $ aio rt:rule:list
  $ aio rt:rule:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/list.js)_

## `aio runtime:rule:status NAME`

Gets the status of a rule

```
USAGE
  $ aio runtime:rule:status NAME

ARGUMENTS
  NAME  Name of the rule

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:rule:status
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/status.js)_

## `aio runtime:rule:update NAME TRIGGER ACTION`

Update a Rule

```
USAGE
  $ aio runtime:rule:update NAME TRIGGER ACTION

ARGUMENTS
  NAME     Name of the rule
  TRIGGER  Name of the trigger
  ACTION   Name of the action

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --json          output raw json
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:rule:update
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/rule/update.js)_

## `aio runtime:trigger`

Manage your triggers

```
USAGE
  $ aio runtime:trigger

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:trigger
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/trigger/index.js)_

## `aio runtime:trigger:create TRIGGERNAME`

Create a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime:trigger:create TRIGGERNAME

ARGUMENTS
  TRIGGERNAME  The name of the trigger

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -P, --param-file=param-file            FILE containing parameter values in JSON format
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -f, --feed=feed                        trigger feed ACTION_NAME
  -i, --insecure                         bypass certificate check
  -p, --param=param                      parameter values in KEY VALUE format
  -u, --auth                             whisk auth
  -v, --verbose                          Verbose output
  --apihost                              whisk API host
  --apiversion                           whisk API version
  --cert                                 client cert
  --debug=debug                          Debug level output
  --help                                 Show help
  --key                                  client key
  --version                              Show version

ALIASES
  $ aio rt:trigger:create
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/trigger/create.js)_

## `aio runtime:trigger:delete TRIGGERPATH`

Delete a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime:trigger:delete TRIGGERPATH

ARGUMENTS
  TRIGGERPATH  The name of the trigger, in the format /NAMESPACE/NAME

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:trigger:delete
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/trigger/delete.js)_

## `aio runtime:trigger:fire TRIGGERNAME`

Fire a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime:trigger:fire TRIGGERNAME

ARGUMENTS
  TRIGGERNAME  The name of the trigger

OPTIONS
  -P, --param-file=param-file  FILE containing parameter values in JSON format
  -i, --insecure               bypass certificate check
  -p, --param=param            parameter values in KEY VALUE format
  -u, --auth                   whisk auth
  -v, --verbose                Verbose output
  --apihost                    whisk API host
  --apiversion                 whisk API version
  --cert                       client cert
  --debug=debug                Debug level output
  --help                       Show help
  --key                        client key
  --version                    Show version

ALIASES
  $ aio rt:trigger:fire
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/trigger/fire.js)_

## `aio runtime:trigger:get TRIGGERPATH`

Get a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime:trigger:get TRIGGERPATH

ARGUMENTS
  TRIGGERPATH  The name/path of the trigger, in the format /NAMESPACE/NAME

OPTIONS
  -i, --insecure  bypass certificate check
  -u, --auth      whisk auth
  -v, --verbose   Verbose output
  --apihost       whisk API host
  --apiversion    whisk API version
  --cert          client cert
  --debug=debug   Debug level output
  --help          Show help
  --key           client key
  --version       Show version

ALIASES
  $ aio rt:trigger:get
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/trigger/get.js)_

## `aio runtime:trigger:list`

Lists all of your triggers for Adobe I/O Runtime

```
USAGE
  $ aio runtime:trigger:list

OPTIONS
  -c, --count        show only the total number of triggers
  -i, --insecure     bypass certificate check
  -l, --limit=limit  [default: 30] only return LIMIT number of triggers from the collection (default 30)
  -n, --name         sort results by name
  -s, --skip=skip    exclude the first SKIP number of triggers from the result
  -u, --auth         whisk auth
  -v, --verbose      Verbose output
  --apihost          whisk API host
  --apiversion       whisk API version
  --cert             client cert
  --debug=debug      Debug level output
  --help             Show help
  --json             output raw json
  --key              client key
  --name-sort        sort results by name
  --version          Show version

ALIASES
  $ aio runtime:trigger:ls
  $ aio rt:trigger:list
  $ aio rt:trigger:ls
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/trigger/list.js)_

## `aio runtime:trigger:update TRIGGERNAME`

Update or create a trigger for Adobe I/O Runtime

```
USAGE
  $ aio runtime:trigger:update TRIGGERNAME

ARGUMENTS
  TRIGGERNAME  The name of the trigger

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -P, --param-file=param-file            FILE containing parameter values in JSON format
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -i, --insecure                         bypass certificate check
  -p, --param=param                      parameter values in KEY VALUE format
  -u, --auth                             whisk auth
  -v, --verbose                          Verbose output
  --apihost                              whisk API host
  --apiversion                           whisk API version
  --cert                                 client cert
  --debug=debug                          Debug level output
  --help                                 Show help
  --key                                  client key
  --version                              Show version

ALIASES
  $ aio rt:trigger:update
```

_See code: [@adobe/aio-cli-plugin-runtime](https://github.com/adobe/aio-cli-plugin-runtime/blob/4.0.0/src/commands/runtime/trigger/update.js)_

## `aio update`

Update all installed plugins.

```
USAGE
  $ aio update

OPTIONS
  -c, --[no-]confirm  confirmation needed for update (defaults to true)
  -i, --interactive   interactive update mode
  -l, --list          list plugins that will be updated
  -v, --verbose       Verbose output

DESCRIPTION
  This command will only:
  - update core plugins that are from the @adobe namespace
  - update all other user-installed plugins
```

_See code: [src/commands/update.js](https://github.com/adobe/aio-cli/blob/7.0.0/src/commands/update.js)_
<!-- commandsstop -->
