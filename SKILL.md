---
name: aio-app-builder
description: Use the Adobe Developer Platform CLI (aio) to create, build, deploy, and run App Builder apps; manage auth and config; list console orgs/projects/workspaces. Use when working with Adobe App Builder, aio-cli, or when the user wants to init/build/deploy/run an Adobe App Builder app, login to Adobe IMS, or manage aio config.
license: Apache-2.0
metadata:
  author: Adobe
  version: "1.0"
---

# Adobe I/O CLI (aio) for App Builder

Use the `aio` CLI for Adobe App Builder: create apps, build, deploy, run locally, manage auth, and read/write config. Run commands from the **app root** (where `app.config.yaml` lives) for app commands.

**Install:** `npm i -g @adobe/aio-cli` then run `aio`.

**Agent-friendly:** Prefer `--json` (or `-j`) when a command supports it for scriptable output. Use `-y`/`--yes` and non-interactive flags when invoking from scripts or agents.

---

## When to use

- User wants to create, build, deploy, or run an Adobe App Builder app.
- User asks about logging in/out of Adobe I/O or managing aio config.
- User needs to list/select Console orgs, projects, or workspaces.
- User mentions App Builder, aio-cli, or Adobe I/O developer console.

---

## Core commands (from README)

### App lifecycle

| Command | Purpose | Key flags/args |
|--------|---------|----------------|
| `aio app init [PATH]` | Create a new Adobe I/O App | `PATH` default `.`. `-y` skip prompts, `--install` run npm install, `-t`/`--template`, `-e`/`--extension`, `-w`/`--workspace` (default Stage), `-i`/`--import` config file, `--login`, `--linter none\|basic\|adobe-recommended` |
| `aio app build` | Build actions and web assets | `-a`/`--action` build specific action(s), `-e`/`--extension`, `--no-actions`/`--no-web-assets`, `--force-build`, `--web-optimize` |
| `aio app deploy` | Deploy app (builds if needed) | `-a`/`--action`, `-e`/`--extension`, `--no-build`, `--force-build`, `--open` open browser, `--force-deploy`, `--force-publish`, `--no-publish` |
| `aio app run` | Run app locally | `--serve`, `--actions`, `--open`, `-e`/`--extension` |
| `aio app dev` | Run App Builder app locally (dev mode) | `-o`/`--open`, `-e`/`--extension` |
| `aio app clean` | Remove build artifacts | (no key flags) |
| `aio app info` | Show app config in use | `-j`/`-h`/`-y`, `--mask` hide private info |
| `aio app get-url [ACTION]` | Get action URLs | `--json`, `--cdn` |
| `aio app logs` | Fetch app logs | `-a`/`--action`, `-l`/`--limit`, `-t`/`--tail` continuous |
| `aio app list` | List app components | |
| `aio app list ext` | List extensions | `-j`/`-y` |
| `aio app state list` | List state keys | `--json`, `--region amer\|emea\|apac`, `-m`/`--match` |
| `aio app state get KEY` | Get state value | `--json` |
| `aio app state put KEY VALUE` | Put state | `--json`, `-t` TTL |
| `aio app undeploy` | Undeploy app | |

### Auth

| Command | Purpose | Key flags |
|--------|---------|-----------|
| `aio auth login` | Log in Adobe IMS, get access token | `-c`/`--ctx` context, `-f`/`--force` re-login, `-b`/`--bare` token only, `-o`/`--open` browser. Alias: `aio login` |
| `aio auth logout` | Log out context | `-c`/`--ctx`, `-f` invalidate refresh token. Alias: `aio logout` |
| `aio auth ctx` | Manage IMS contexts | `-s`/`--set` current context, `--list`, `--value`. Aliases: `aio ctx`, `aio context` |

### Config

| Command | Purpose | Key flags |
|--------|---------|-----------|
| `aio config list` | List config | `-l` local, `-g` global, `-j`/`-y`, `--verbose`. Alias: `aio config ls` |
| `aio config get KEY` | Get value | `-l`/`-g`, `-j`/`-y`/`-e` |
| `aio config set KEY VALUE` | Set value | `-l`/`-g`, `-f` value from file, `-j` value is JSON |
| `aio config del KEYS...` | Delete keys | `-l`/`-g`. Aliases: `config delete`, `config rm` |
| `aio config clear` | Clear all config | `-l`/`-g`, `-f` no prompt |

### Console (org / project / workspace)

| Command | Purpose | Key flags |
|--------|---------|-----------|
| `aio console where` | Show selected org/project/workspace | `-j`/`-y`. Alias: `aio where` |
| `aio console org list` | List organizations | `-j`/`-y`. Alias: `aio console org ls` |
| `aio console project list` | List projects | `-j`/`-y` |
| `aio console project select [IDORNAME]` | Select project | Alias: `aio console project sel` |
| `aio console workspace list` | List workspaces | `-j`/`-y`. Aliases: `aio console ws list`, `aio console ws ls` |
| `aio console workspace select [IDORNAME]` | Select workspace | Alias: `aio console ws sel` |
| `aio console open` | Open Developer Console in browser | Alias: `aio open` |

### Other

| Command | Purpose |
|--------|---------|
| `aio info` | Dev environment version info; `-j`/`-y` |
| `aio app use [CONFIG_FILE_PATH]` | Use a specific app config file |
| `aio app create [PATH]` | Create app with default params; `-i` import config |
| `aio plugins` | List plugins; `--json` |
| `aio discover` | Discover plugins to install |

---

## Instructions

1. **Creating an app:** Use `aio app init [PATH]`. For non-interactive/script use: `aio app init ./my-app -y --install`. Use `-t` or `--repo` for template/repo.
2. **Building:** From app root run `aio app build`. Use `-a <action>` to build specific actions, `-e <ext>` for specific extensions.
3. **Deploying:** From app root run `aio app deploy`. Use `--no-build` if already built; `--open` to open browser after deploy.
4. **Running locally:** Use `aio app run` (with `--serve`/`--open`) or `aio app dev` (with `-o` to open browser).
5. **Auth:** Use `aio auth login` (or `aio login`); for scripted token use `aio auth login --bare`. Use `aio auth ctx -s <label>` to switch context.
6. **Config:** Use `aio config get KEY` / `aio config set KEY VALUE` with `-j` for JSON. Use `-l` for project-local, `-g` for global.
7. **Console context:** Use `aio console where` to see current org/project/workspace; use `aio console org list`, `aio console project list`, `aio console workspace list` and `select`/`sel` to change them.
8. **Machine-readable output:** When parsing output in scripts or as an agent, append `--json` or `-j` (or `-y` for YAML) where the command supports it (e.g. `aio app state list --json`, `aio config get key -j`, `aio console where -j`, `aio info -j`).

---

## Examples

```bash
# Create app non-interactively
aio app init ./my-app -y --install

# Build then deploy
aio app build
aio app deploy --open

# Run locally and open browser
aio app dev -o

# Get app config as JSON
aio app info -j

# Auth (browser login)
aio auth login

# Get/set config as JSON
aio config get ims.config.current -j
aio config set my.key "value" -l

# List state keys as JSON
aio app state list --json

# See current console context
aio console where -j

# Environment check
aio info -j
```
