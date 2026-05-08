#!/usr/bin/env node

/**
 * Checks each npm override in package.json and reports whether it can be safely removed.
 *
 * For each override: temporarily removes it, re-resolves the lockfile (no actual install),
 * runs npm audit, then cleans up. Original files are never modified.
 *
 * Exits 0 if all overrides are still needed, 1 if any can be removed.
 * Runs as part of prepack to prevent publishing with stale overrides.
 *
 * Note: npm audit makes network requests to the registry. In network-restricted
 * environments pass --prefer-offline to use only locally cached advisory data.
 *
 * Usage: node bin/check-overrides.js [--markdown] [--prefer-offline]
 */

const { spawnSync } = require('child_process')
const fs = require('fs')
const os = require('os')
const path = require('path')

const ROOT = process.cwd()
const PKG_PATH = path.join(ROOT, 'package.json')
const LOCK_PATH = path.join(ROOT, 'package-lock.json')
const MARKDOWN = process.argv.includes('--markdown')
const PREFER_OFFLINE = process.argv.includes('--prefer-offline')

// ── helpers ──────────────────────────────────────────────────────────────────

function npm(cwd, ...args) {
  return spawnSync('npm', args, { cwd, encoding: 'utf8' })
}

function auditVulnCount(cwd) {
  const args = ['audit', '--json']
  if (PREFER_OFFLINE) args.push('--prefer-offline')
  const { stdout, stderr, status } = npm(cwd, ...args)
  let parsed
  try {
    parsed = JSON.parse(stdout)
  } catch {
    throw new Error(`npm audit returned non-JSON output (exit ${status}):\n${stderr || stdout || '(no output)'}`)
  }
  if (!parsed?.metadata?.vulnerabilities) {
    throw new Error(`npm audit JSON missing expected metadata.vulnerabilities field:\n${stdout}`)
  }
  const v = parsed.metadata.vulnerabilities
  return (v.critical || 0) + (v.high || 0) + (v.moderate || 0) + (v.low || 0)
}

/**
 * Flattens nested overrides into dot-path entries, e.g.:
 *   { "foo": "^1", "bar": { "baz": "^2" } }
 * becomes:
 *   [ { dotPath: "foo", label: "foo" },
 *     { dotPath: "bar.baz", label: "bar > baz" } ]
 */
function flattenOverrides(overrides, prefix = '') {
  const entries = []
  for (const [key, val] of Object.entries(overrides)) {
    const dotPath = prefix ? `${prefix}.${key}` : key
    const label = prefix ? `${prefix} > ${key}` : key
    if (val !== null && typeof val === 'object') {
      entries.push(...flattenOverrides(val, dotPath))
    } else {
      entries.push({ dotPath, label, val })
    }
  }
  return entries
}

function deleteAtDotPath(obj, dotPath) {
  const parts = dotPath.split('.')
  let cur = obj
  for (let i = 0; i < parts.length - 1; i++) {
    cur = cur[parts[i]]
    if (cur == null) return
  }
  delete cur[parts.at(-1)]
  // prune empty parent objects
  if (parts.length > 1) {
    const parent = parts.slice(0, -1).reduce((o, k) => o[k], obj)
    if (parent && Object.keys(parent).length === 0) {
      deleteAtDotPath(obj, parts.slice(0, -1).join('.'))
    }
  }
}

// ── main ─────────────────────────────────────────────────────────────────────

const originalPkg = fs.readFileSync(PKG_PATH, 'utf8')
const pkg = JSON.parse(originalPkg)
const overrides = pkg.overrides || {}

if (Object.keys(overrides).length === 0) {
  console.log('No overrides found in package.json.')
  process.exit(0)
}

const entries = flattenOverrides(overrides)
if (entries.length === 0) {
  console.log('No scalar overrides found.')
  process.exit(0)
}

process.stderr.write('Checking baseline audit… ')
let baselineVulns
const baselineDir = fs.mkdtempSync(path.join(os.tmpdir(), 'check-overrides-baseline-'))
try {
  fs.writeFileSync(path.join(baselineDir, 'package.json'), originalPkg)
  fs.copyFileSync(LOCK_PATH, path.join(baselineDir, 'package-lock.json'))
  baselineVulns = auditVulnCount(baselineDir)
} catch (e) {
  process.stderr.write('failed\n')
  console.error(`Error: could not establish baseline — ${e.message}`)
  process.exit(2)
} finally {
  fs.rmSync(baselineDir, { recursive: true, force: true })
}
process.stderr.write(`${baselineVulns} vulnerabilities\n\n`)

const results = []

// ── signal handlers ──────────────────────────────────────────────────────────

const activeTmpDirs = new Set()

function cleanupTmpDirs() {
  for (const dir of activeTmpDirs) {
    try { fs.rmSync(dir, { recursive: true, force: true }) } catch {}
  }
}

process.on('SIGINT', () => { cleanupTmpDirs(); process.exit(130) })
process.on('SIGTERM', () => { cleanupTmpDirs(); process.exit(143) })

// ─────────────────────────────────────────────────────────────────────────────

for (const entry of entries) {
  process.stderr.write(`  Checking "${entry.label}"… `)

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'check-overrides-'))
  activeTmpDirs.add(tmpDir)
  try {
    const testPkg = JSON.parse(originalPkg)
    deleteAtDotPath(testPkg.overrides, entry.dotPath)
    fs.writeFileSync(path.join(tmpDir, 'package.json'), JSON.stringify(testPkg, null, 2))
    fs.copyFileSync(LOCK_PATH, path.join(tmpDir, 'package-lock.json'))

    const { status, stderr } = npm(
      tmpDir, 'install', '--package-lock-only', '--ignore-scripts', '--no-audit', '--silent'
    )
    if (status !== 0) {
      // stderr may be null if the process was killed by a signal
      results.push({ ...entry, canRemove: false, error: (stderr ?? '').trim() || 'npm install failed' })
      process.stderr.write('install failed\n')
      continue
    }

    let vulns
    try {
      vulns = auditVulnCount(tmpDir)
    } catch (e) {
      results.push({ ...entry, canRemove: false, error: `audit failed: ${e.message}` })
      process.stderr.write('audit failed\n')
      continue
    }
    const newVulns = vulns - baselineVulns
    const canRemove = newVulns <= 0

    results.push({ ...entry, canRemove, newVulns })
    if (canRemove) {
      const note = newVulns < 0 ? ` (removing reduces vulns by ${-newVulns})` : ''
      process.stderr.write(`safe to remove${note}\n`)
    } else {
      process.stderr.write(`still needed (+${newVulns} vuln${newVulns !== 1 ? 's' : ''})\n`)
    }
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true })
    activeTmpDirs.delete(tmpDir)
  }
}

// ── report ───────────────────────────────────────────────────────────────────

const removable = results.filter(r => r.canRemove)
const needed = results.filter(r => !r.canRemove)
const exitCode = removable.length > 0 ? 1 : 0

if (MARKDOWN) {
  console.log('# Override Removal Report\n')
  console.log(`Baseline: **${baselineVulns}** audit vulnerabilities with all overrides in place.\n`)

  if (removable.length) {
    console.log('## Safe to Remove\n')
    console.log('These overrides no longer affect the audit result and can be deleted from `package.json`:\n')
    for (const r of removable) {
      const note = r.newVulns < 0 ? ` _(removing this actually reduces vulns by ${-r.newVulns})_` : ''
      console.log(`- \`${r.label}\` → \`${r.val}\`${note}`)
    }
    console.log()
  }

  if (needed.length) {
    console.log('## Still Needed\n')
    console.log('Removing these overrides would introduce new vulnerabilities:\n')
    for (const r of needed) {
      if (r.error) {
        console.log(`- \`${r.label}\` — ⚠️ error during check: ${r.error}`)
      } else {
        console.log(`- \`${r.label}\` → \`${r.val}\` — removing adds **+${r.newVulns}** vuln${r.newVulns !== 1 ? 's' : ''}`)
      }
    }
  }
} else {
  const w = (results.length ? Math.max(...results.map(r => r.label.length)) : 0) + 2
  console.log('\nOverride Removal Report')
  console.log('='.repeat(60))
  for (const r of results) {
    const label = r.label.padEnd(w)
    if (r.error) {
      console.log(`  ERROR  ${label}${r.error}`)
    } else if (r.canRemove) {
      const note = r.newVulns < 0 ? ` (removing reduces vulns by ${-r.newVulns})` : 'no longer needed'
      console.log(`  REMOVE ${label}${note}`)
    } else {
      console.log(`  KEEP   ${label}removing adds +${r.newVulns} vuln${r.newVulns !== 1 ? 's' : ''}`)
    }
  }
  console.log()
}

process.exit(exitCode)
