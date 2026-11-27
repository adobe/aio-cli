# Contributing

Thanks for choosing to contribute!

The following are a set of guidelines to follow when contributing to this project.

## Code Of Conduct

This project adheres to the Adobe [code of conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [Grp-opensourceoffice@adobe.com](mailto:Grp-opensourceoffice@adobe.com).

## Contributor License Agreement

All third-party contributions to this project must be accompanied by a signed contributor license agreement. This gives Adobe permission to redistribute your contributions as part of the project. [Sign our CLA](http://opensource.adobe.com/cla.html). You only need to submit an Adobe CLA one time, so if you have submitted one previously, you are good to go!

## Code Reviews

All submissions should come in the form of pull requests and need to be reviewed by project committers. Read [GitHub's pull request documentation](https://help.github.com/articles/about-pull-requests/) for more information on sending pull requests.

Lastly, please follow the [pull request template](PULL_REQUEST_TEMPLATE.md) when submitting a pull request!

## End-to-end tests

The `E2E tests` GitHub Actions workflow runs on pull requests to `master`, after each
push to `master` (including merged pull requests), and manually using `workflow_dispatch`.
It runs on Ubuntu with Node.js 20.17.0 (the minimum in `engines`), 22 and 24, and installs
dependencies from the committed lockfile.

The suite runs the real `bin/run` and checks that:

- errors render through oclif
- every bundled plugin is installed and every command module loads
- `aio certificate` and `aio config` work offline
- `aio app init` creates a project (needs network access)

To run the same suite locally:

```sh
npm ci --legacy-peer-deps
npm run e2e -- --ci --runInBand
```
