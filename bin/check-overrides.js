#!/usr/bin/env node

/**
 * Checks each npm override in package.json and reports whether it can be safely removed.
 *
 * For each override: temporarily removes it, re-resolves the lockfile (no actual install),
 * runs npm audit, then restores the original files.
 *
 * Usage: node bin/check-overrides.js [--markdown]
 */

const { spawnSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()
const PKG_PATH = path.join(ROOT, 'package.json')
const LOCK_PATH = path.join(ROOT, 'package-lock.json')
const MARKDOWN = process.argv.includes('--markdown')

// ── helpers ──────────────────────────────────────────────────────────────────

function npm(...args) {
  return spawnSync('npm', args, { cwd: ROOT, encoding: 'utf8' })
}

function auditVulnCount() {
  const { stdout } = npm('audit', '--json')
  try {
    const { metadata: { vulnerabilities: v } } = JSON.parse(stdout)
    return (v.critical || 0) + (v.high || 0) + (v.moderate || 0) + (v.low || 0)
  } catch {
    return 0
  }
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
const originalLock = fs.readFileSync(LOCK_PATH, 'utf8')
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
const baselineVulns = auditVulnCount()
process.stderr.write(`${baselineVulns} vulnerabilities\n\n`)

const results = []

for (const entry of entries) {
  process.stderr.write(`  Checking "${entry.label}"… `)

  const testPkg = JSON.parse(originalPkg)
  deleteAtDotPath(testPkg.overrides, entry.dotPath)

  fs.writeFileSync(PKG_PATH, JSON.stringify(testPkg, null, 2))

  try {
    const { status, stderr } = npm(
      'install', '--package-lock-only', '--ignore-scripts', '--no-audit', '--silent'
    )
    if (status !== 0) {
      results.push({ ...entry, canRemove: false, error: stderr?.trim() || 'npm install failed' })
      process.stderr.write('install failed\n')
      continue
    }

    const vulns = auditVulnCount()
    const newVulns = vulns - baselineVulns
    const canRemove = newVulns <= 0

    results.push({ ...entry, canRemove, newVulns })
    process.stderr.write(canRemove ? 'safe to remove\n' : `still needed (+${newVulns} vuln${newVulns !== 1 ? 's' : ''})\n`)
  } finally {
    fs.writeFileSync(PKG_PATH, originalPkg)
    fs.writeFileSync(LOCK_PATH, originalLock)
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
      console.log(`- \`${r.label}\` → \`${r.val}\``)
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
  const w = Math.max(...results.map(r => r.label.length)) + 2
  console.log('\nOverride Removal Report')
  console.log('='.repeat(60))
  for (const r of results) {
    const label = r.label.padEnd(w)
    if (r.error) {
      console.log(`  ERROR  ${label}${r.error}`)
    } else if (r.canRemove) {
      console.log(`  REMOVE ${label}no longer needed`)
    } else {
      console.log(`  KEEP   ${label}removing adds +${r.newVulns} vuln${r.newVulns !== 1 ? 's' : ''}`)
    }
  }
  console.log()
}

process.exit(exitCode)
