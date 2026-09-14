#!/usr/bin/env node
/**
 * Content coverage report.
 *
 *   npm run coverage          # matrix + summary
 *   npm run coverage -- --missing   # just the missing file paths
 *
 * Mirrors the indexability rule in lib/seo/locale-coverage.ts: a tool page is
 * indexable in a locale once its guide exists and clears MIN_GUIDE_BYTES.
 * Locale and tool lists are parsed from source rather than hardcoded, so this
 * report cannot drift out of sync when a tool or language is added.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_ROOT = path.join(ROOT, 'lib', 'content');
const I18N_ROOT = path.join(CONTENT_ROOT, 'i18n');
const MIN_GUIDE_BYTES = 1_200; // keep in sync with lib/seo/locale-coverage.ts
const THIN_LOCALIZED_GUIDES = new Set([
  'basementWaterproofing.md',
  'gutterCleaning.md',
]);

const read = (p) => fs.readFileSync(p, 'utf-8');

function parseLocales() {
  const src = read(path.join(ROOT, 'lib', 'i18n', 'translations.ts'));
  const block = src.slice(src.indexOf('export const LOCALES'));
  const codes = [...block.slice(0, block.indexOf('];')).matchAll(/code: '([a-z-]+)'/g)].map(
    (m) => m[1],
  );
  if (!codes.length) throw new Error('parsed 0 locales — LOCALES shape changed?');
  return codes;
}

function parseTools() {
  const src = read(path.join(ROOT, 'lib', 'registry', 'tools.ts'));
  const out = [];
  // Only uncommented entries count; the registry keeps some tools commented out.
  const slugRe = /^\s*slug: '([a-z0-9-]+)'/gm;
  const fileRe = /^\s*contentFile: '([^']+)'/gm;
  const slugs = [...src.matchAll(slugRe)].map((m) => ({ i: m.index, v: m[1] }));
  const files = [...src.matchAll(fileRe)].map((m) => ({ i: m.index, v: m[1] }));
  for (const s of slugs) {
    const f = files.find((f) => f.i > s.i);
    if (f) out.push({ slug: s.v, contentFile: f.v });
  }
  if (!out.length) throw new Error('parsed 0 tools — registry shape changed?');
  return out;
}

function guideSize(locale, contentFile, defaultLocale) {
  if (locale !== defaultLocale && THIN_LOCALIZED_GUIDES.has(contentFile)) return 0;

  const file =
    locale === defaultLocale
      ? path.join(CONTENT_ROOT, contentFile)
      : path.join(I18N_ROOT, locale, contentFile);
  try {
    return fs.statSync(file).size;
  } catch {
    return 0;
  }
}

const locales = parseLocales();
const tools = parseTools();
const DEFAULT_LOCALE = locales[0];
const missingOnly = process.argv.includes('--missing');

const missing = [];
const rows = locales.map((locale) => {
  let covered = 0;
  for (const tool of tools) {
    if (guideSize(locale, tool.contentFile, DEFAULT_LOCALE) >= MIN_GUIDE_BYTES) covered++;
    else missing.push(`lib/content/i18n/${locale}/${tool.contentFile}`);
  }
  return { locale, covered };
});

if (missingOnly) {
  for (const m of missing) console.log(m);
  process.exit(0);
}

const width = tools.length;
console.log(`\nContent coverage — ${tools.length} tools x ${locales.length} locales\n`);
for (const { locale, covered } of rows) {
  const bar = '#'.repeat(covered) + '.'.repeat(width - covered);
  const state = covered === width ? 'indexable' : covered === 0 ? 'noindex' : 'partial';
  console.log(
    `  ${locale.padEnd(3)} ${bar}  ${String(covered).padStart(2)}/${width}  ${state}`,
  );
}

const total = tools.length * locales.length;
const done = rows.reduce((n, r) => n + r.covered, 0);
// Home, calculators, about, and contact are fully translated. Privacy and
// terms currently have reviewed English content only and are intentionally
// excluded from non-English sitemap entries (see static-page-coverage.ts).
const staticSitemapEntries = 4 * locales.length + 2;
console.log(`\n  ${done}/${total} tool pages indexable (${Math.round((done / total) * 100)}%)`);
console.log(`  ${total - done} suppressed via noindex + excluded from sitemap`);
console.log(`\n  Sitemap size: ${staticSitemapEntries} static + ${done} tool = ${staticSitemapEntries + done} URLs`);
console.log(`  Run with --missing to list the files still to write.\n`);
