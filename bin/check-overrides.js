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

const SEVERITIES = ['critical', 'high', 'moderate', 'low']

function auditVulnBreakdown(cwd) {
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
  const breakdown = {}
  for (const sev of SEVERITIES) breakdown[sev] = v[sev] || 0
  return breakdown
}

/**
 * Compares two severity breakdowns. An override is only safe to remove if NO
 * severity bucket gets worse — a moderate-vulnerability count dropping while an
 * equal number of highs appear must NOT be reported as "safe" just because the
 * flat total is unchanged (this under-reports real severity regressions).
 */
function compareBreakdowns(baseline, candidate) {
  const deltas = {}
  let regressed = false
  let totalDelta = 0
  for (const sev of SEVERITIES) {
    const d = candidate[sev] - baseline[sev]
    deltas[sev] = d
    totalDelta += d
    if (d > 0) regressed = true
  }
  return { regressed, deltas, totalDelta }
}

function formatDeltas(deltas) {
  const parts = SEVERITIES
    .filter(sev => deltas[sev] !== 0)
    .map(sev => `${deltas[sev] > 0 ? '+' : ''}${deltas[sev]} ${sev}`)
  return parts.length ? parts.join(', ') : 'no change'
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
let baselineBreakdown
const baselineDir = fs.mkdtempSync(path.join(os.tmpdir(), 'check-overrides-baseline-'))
try {
  fs.writeFileSync(path.join(baselineDir, 'package.json'), originalPkg)
  fs.copyFileSync(LOCK_PATH, path.join(baselineDir, 'package-lock.json'))
  baselineBreakdown = auditVulnBreakdown(baselineDir)
} catch (e) {
  process.stderr.write('failed\n')
  console.error(`Error: could not establish baseline — ${e.message}`)
  process.exit(2)
} finally {
  fs.rmSync(baselineDir, { recursive: true, force: true })
}
const baselineVulns = SEVERITIES.reduce((sum, sev) => sum + baselineBreakdown[sev], 0)
process.stderr.write(`${baselineVulns} vulnerabilities (${SEVERITIES.map(s => `${baselineBreakdown[s]} ${s}`).join(', ')})\n\n`)

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

    let breakdown
    try {
      breakdown = auditVulnBreakdown(tmpDir)
    } catch (e) {
      results.push({ ...entry, canRemove: false, error: `audit failed: ${e.message}` })
      process.stderr.write('audit failed\n')
      continue
    }
    const { regressed, deltas, totalDelta } = compareBreakdowns(baselineBreakdown, breakdown)
    const canRemove = !regressed

    results.push({ ...entry, canRemove, deltas, totalDelta })
    if (canRemove) {
      const note = totalDelta < 0 ? ` (${formatDeltas(deltas)})` : ''
      process.stderr.write(`safe to remove${note}\n`)
    } else {
      process.stderr.write(`still needed (${formatDeltas(deltas)})\n`)
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
    console.log('These overrides do not make any severity bucket worse and can be deleted from `package.json`:\n')
    for (const r of removable) {
      const note = r.totalDelta < 0 ? ` _(removing this actually improves the audit: ${formatDeltas(r.deltas)})_` : ''
      console.log(`- \`${r.label}\` → \`${r.val}\`${note}`)
    }
    console.log()
  }

  if (needed.length) {
    console.log('## Still Needed\n')
    console.log('Removing these overrides would make at least one severity bucket worse (even if the flat total looks unchanged):\n')
    for (const r of needed) {
      if (r.error) {
        console.log(`- \`${r.label}\` — ⚠️ error during check: ${r.error}`)
      } else {
        console.log(`- \`${r.label}\` → \`${r.val}\` — removing changes: **${formatDeltas(r.deltas)}**`)
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
      const note = r.totalDelta < 0 ? ` (${formatDeltas(r.deltas)})` : 'no longer needed'
      console.log(`  REMOVE ${label}${note}`)
    } else {
      console.log(`  KEEP   ${label}removing changes: ${formatDeltas(r.deltas)}`)
    }
  }
  console.log()
}

process.exit(exitCode)
