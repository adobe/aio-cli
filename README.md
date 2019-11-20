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



# aio cli health
Health badges for the aio-cli and its plugins and modules
<!--
DON'T GENERATE MANUALLY!
1. Modify the health.xslx file
2. Select the cells in Excel or Google Sheets
3. Paste here: https://thisdavej.com/copy-table-in-excel-and-paste-as-a-markdown-table/
-->
<!-- health -->
| Module                         | Version                                                                                                                                 | Downloads                                                                                                                                       | Build Status                                                                                                                                  | Coverage                                                                                                                                                                        | Issues                                                                                                                                              | Pull Requests                                                                                                                                                |
|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| @adobe/aio-cli                 | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli.svg)](https://npmjs.org/package/@adobe/aio-cli)                                 | [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli.svg)](https://npmjs.org/package/@adobe/aio-cli)                                 | [![Build Status](https://travis-ci.com/adobe/aio-cli.svg?branch=master)](https://travis-ci.com/adobe/aio-cli)                                 | [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli/)                                 | [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli.svg)](https://github.com/adobe/aio-cli/issues)                                 | [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli.svg)](https://github.com/adobe/aio-cli/pulls)                                 |
| @adobe/aio-cli-plugin-runtime  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-runtime.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-runtime)   | [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-runtime.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-runtime)   | [![Build Status](https://travis-ci.com/adobe/aio-cli-plugin-runtime.svg?branch=master)](https://travis-ci.com/adobe/aio-cli-plugin-runtime)   | [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-runtime/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-runtime/)   | [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-runtime.svg)](https://github.com/adobe/aio-cli-plugin-runtime/issues)   | [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-runtime.svg)](https://github.com/adobe/aio-cli-plugin-runtime/pulls)   |
| @adobe/aio-cli-plugin-config   | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-config.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-config)     | [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-config.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-config)     | [![Build Status](https://travis-ci.com/adobe/aio-cli-plugin-config.svg?branch=master)](https://travis-ci.com/adobe/aio-cli-plugin-config)     | [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-config/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-config/)     | [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-config.svg)](https://github.com/adobe/aio-cli-plugin-config/issues)     | [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-config.svg)](https://github.com/adobe/aio-cli-plugin-config/pulls)     |
| @adobe/aio-cli-plugin-console  | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-console.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-console)   | [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-console.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-console)   | [![Build Status](https://travis-ci.com/adobe/aio-cli-plugin-console.svg?branch=master)](https://travis-ci.com/adobe/aio-cli-plugin-console)   | [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-console/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-console/)   | [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-console.svg)](https://github.com/adobe/aio-cli-plugin-console/issues)   | [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-console.svg)](https://github.com/adobe/aio-cli-plugin-console/pulls)   |
| @adobe/aio-cli-plugin-jwt-auth | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-jwt-auth.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-jwt-auth) | [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-jwt-auth.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-jwt-auth) | [![Build Status](https://travis-ci.com/adobe/aio-cli-plugin-jwt-auth.svg?branch=master)](https://travis-ci.com/adobe/aio-cli-plugin-jwt-auth) | [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-jwt-auth/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-jwt-auth/) | [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-jwt-auth.svg)](https://github.com/adobe/aio-cli-plugin-jwt-auth/issues) | [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-jwt-auth.svg)](https://github.com/adobe/aio-cli-plugin-jwt-auth/pulls) |
| @adobe/aio-cli-plugin-app      | [![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-app.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-app)           | [![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-app.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-app)           | [![Build Status](https://travis-ci.com/adobe/aio-cli-plugin-app.svg?branch=master)](https://travis-ci.com/adobe/aio-cli-plugin-app)           | [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-app/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-app/)           | [![Github Issues](https://img.shields.io/github/issues/adobe/aio-cli-plugin-app.svg)](https://github.com/adobe/aio-cli-plugin-app/issues)           | [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/aio-cli-plugin-app.svg)](https://github.com/adobe/aio-cli-plugin-app/pulls)           |
<!-- healthstop -->

# Development
```sh-session
$ npm install
$ npm link
```

# Usage
<!-- usage -->

## Pre-requisites

- [NodeJS](https://nodejs.org/en/download/) (at least v10). It should also install npm together.
- A namespace in Adobe I/O Runtime. If you do not already have one, please [request trial access](https://github.com/AdobeDocs/adobeio-runtime/blob/master/overview/request_a_trial.md).  
- [Visual Studio Code (VSCode)](https://code.visualstudio.com/download) as the supported IDE for editor, debuggger, etc. You can use any other IDE as a code editor, but advanced usage e.g. debugger is not yet supported.
- [Docker Desktop](https://www.docker.com/get-started).
- [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/overview/index.html) (at least Java 11).

### Additional tools for debugging

- [Chrome debugger extension in VSCode](https://github.com/Microsoft/vscode-chrome-debug)

## Installing CLI tools

Firstly you need to install Adobe I/O CLI. It comes with all-batteries-included tools for building apps.

```bash
npm install -g @adobe/aio-cli
```

For debugging, you also need `wskdebug`.

```bash
npm install -g @adobe/wskdebug
```

## Bootstrapping an application

In order to create your first application, use the following command:

```bash
aio app init <app-name>
```

You will be prompted with a few questions about how you want your app to have:

1. select a starter template
- **hello**: a generic application with hello world flow
- **target**: including dependencies and examples of accessing the Adobe Target API
- **campaign**: including dependencies and examples of accessing the Adobe Campaign Standard (ACS) API
- **analytics**: including dependencies and examples of accessing the Adobe Analytics API

2. select components to include:
- **Actions: Deploy Runtime actions:** adding the boilerplate for backend serverless actions on I/O Runtime
- **Web Assets: Deploy hosted static assets:** adding the boilerplate for frontend react app and static assets

You can select either of the options, or both to have a full app for both back and frontend.

3. specify package name, actions directory and public directory in the next questions.

4. decide whether npm dependencies should be installed now or not.

5. Open the project in VSCode, either by entering the command `code <app-name>`, or opening VSCode -> Open... -> select project folder.

6. Open `.env` file, add your I/O Runtime credentials in the `AIO_RUNTIME_XXX` variables, uncomment out them.

## Main components of the App

- `actions`: backend source code for all serverless actions.
- `web-src`: frontend source code such as html templates, react components, JS, CSS.
- `test`: including unit tests and integration tests.
- `manifest.yml`: definition of I/O Runtime actions being deployed with the app
- `package.json`: project definition and metadata
- `.env`: containing environment variables that are useful for the app, e.g. I/O Runtime credentials and [Token Vending Machine (TVM)](https://github.com/adobe/aio-tvm) references.

## Local development

### Running the application

Before running the application locally for the first time, make sure that the required docker images are existing in the local machine.

```bash
docker pull openwhisk/action-nodejs-v10:latest
docker pull adobeapiplatform/adobe-action-nodejs-v10:3.0.21
```

To run the application locally, use the following command:

```bash
aio app run
```

This will deploy the actions to Adobe I/O Runtime, while running the UI part on the local machine. The app is accessible on the browser at `localhost:9080` (by default, but the port is configurable).

To have the application running completely locally, which means the actions run on a local deployment of (standalone) OpenWhisk, add the `--local` flag to the above run command.

### Debugging the application

Make sure that local dev environment is running, either with or without `--local`.

An example debugging flow:
- Set a breakpoint in your code
- Go to debugger mode in VSCode
- Select `Web and actions` profile for debugging
- Click on Run, the debugger will stop at the breakpoint and you can inspect your app execution

If the local development is run without `--local` flag, you debug the actions running directly on Adobe I/O Runtime. When the `--local` flag is set, the actions are debugged in the standalone OpenWhisk instance running locally. More about this can be found on the [wskdebug docs](https://www.npmjs.com/package/@adobe/wskdebug).

## Publishing the application

Once the application is in a good shape, it could be deployed to a dev environment. This is achievable with a single command.

```bash
aio app deploy
```

This will invoke:
- The actions defined in `manifest.yml` being updated on Adobe I/O Runtime
- The frontend built files and assets being uploaded to the CDN based on app config (e.g. S3, Azure Blob Store).

The deployment outputs a URL of the app which is publicly accessible.

## References

https://www.adobe.io/apis/experienceplatform/runtime.html

<!-- usagestop -->

# Commands
<!-- commands -->
Please refer to [COMMANDS.md](COMMANDS.md) for a full list of available commands.
<!-- commandsstop -->
