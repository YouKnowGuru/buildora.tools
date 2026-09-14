#!/usr/bin/env node
/**
 * Guide QA gate.
 *
 *   npm run validate:guides            # check every localized guide
 *   npm run validate:guides -- es fr   # check specific locales
 *
 * Generated content cannot be trusted on sight — a writer agent can silently
 * emit English into the wrong folder, re-introduce the `# ` heading that
 * duplicates the page h1, or stop short of the length that makes a page
 * indexable. Every check below corresponds to a real defect this project has
 * already hit at least once.
 *
 * Exits non-zero if any guide fails, so it can gate a commit or a build.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_ROOT = path.join(ROOT, 'lib', 'content');
const I18N_ROOT = path.join(CONTENT_ROOT, 'i18n');

const MIN_INDEXABLE_BYTES = 1_200; // must match lib/seo/locale-coverage.ts
const WARN_THIN_BYTES = 2_500; // clears the gate but is still light

/** Scripts a locale must actually be written in. */
const SCRIPT_RANGES = {
  ru: [[0x0400, 0x04ff]],
  ar: [[0x0600, 0x06ff]],
  hi: [[0x0900, 0x097f]],
  zh: [[0x4e00, 0x9fff]],
  ja: [
    [0x3040, 0x309f],
    [0x30a0, 0x30ff],
    [0x4e00, 0x9fff],
  ],
  ko: [
    [0xac00, 0xd7af],
    [0x1100, 0x11ff],
  ],
};

/**
 * Words that are decisive for English and are not shared with the Latin-script
 * target languages. "a", "per", "total" and friends are deliberately excluded
 * because they occur naturally in Spanish, Italian, and Portuguese.
 */
const ENGLISH_MARKERS =
  /\b(the|and|with|your|you|this|that|from|are|will|have|which|when|what|how)\b/gi;

// cp1252 round-trip mojibake detector. grep is unusable here: legitimate French
// ("à l'") and Portuguese text matches a loose pattern, so a run only counts if
// it actually re-encodes and decodes.
//
// The round-trip alone still over-reports. Portuguese "pé²·" (as in the genuine
// unit pé²·°F·h/BTU) re-encodes into a valid CJK codepoint purely by accident.
// So a run must ALSO decode into something the file could plausibly contain:
// Latin letters, punctuation, symbols, or the locale's own script. Real
// mojibake always does — Ã³ decodes to ó, â€" to —, Ð/Ñ runs to Cyrillic. A
// Portuguese file decoding into 鲷 is a coincidence, not corruption.
const PLAUSIBLE_DECODE = [
  [0x00a0, 0x024f], // Latin-1 Supplement + Latin Extended-A/B
  [0x02b0, 0x02ff], // spacing modifiers
  [0x2000, 0x206f], // general punctuation — – — ' ' " " …
  [0x2070, 0x209f], // super/subscripts
  [0x20a0, 0x20cf], // currency symbols — €
  [0x2100, 0x214f], // letterlike symbols — ™ №
  [0x2190, 0x22ff], // arrows + math operators
];
const byte2char = {};
for (let b = 0x80; b <= 0xff; b++) {
  try {
    byte2char[b] = Buffer.from([b]).toString('latin1');
  } catch {
    byte2char[b] = String.fromCharCode(b);
  }
}
const CP1252 = {
  0x80: '€', 0x82: '‚', 0x83: 'ƒ', 0x84: '„', 0x85: '…', 0x86: '†', 0x87: '‡',
  0x88: 'ˆ', 0x89: '‰', 0x8a: 'Š', 0x8b: '‹', 0x8c: 'Œ', 0x8e: 'Ž', 0x91: '‘',
  0x92: '’', 0x93: '“', 0x94: '”', 0x95: '•', 0x96: '–', 0x97: '—', 0x98: '˜',
  0x99: '™', 0x9a: 'š', 0x9b: '›', 0x9c: 'œ', 0x9e: 'ž', 0x9f: 'Ÿ',
};
const char2byte = new Map();
for (let b = 0x80; b <= 0xff; b++) {
  char2byte.set(CP1252[b] ?? String.fromCharCode(b), b);
}

function countMojibake(text, locale) {
  const expected = [...PLAUSIBLE_DECODE, ...(SCRIPT_RANGES[locale] ?? [])];
  const plausible = (s) =>
    [...s].every((c) => {
      const p = c.codePointAt(0);
      return p < 0x80 || expected.some(([lo, hi]) => p >= lo && p <= hi);
    });

  let hits = 0;
  const chars = [...text];
  for (let i = 0; i < chars.length; i++) {
    const lead = char2byte.get(chars[i]);
    if (lead === undefined || lead < 0xc2 || lead > 0xf4) continue;
    const need = lead < 0xe0 ? 1 : lead < 0xf0 ? 2 : 3;
    const bytes = [lead];
    let ok = true;
    for (let k = 1; k <= need; k++) {
      const c = char2byte.get(chars[i + k]);
      if (c === undefined || c < 0x80 || c > 0xbf) {
        ok = false;
        break;
      }
      bytes.push(c);
    }
    if (!ok) continue;
    const decoded = Buffer.from(bytes).toString('utf-8');
    if (!decoded.includes('�') && plausible(decoded)) {
      hits++;
      i += need;
    }
  }
  return hits;
}

function parseLocales() {
  const src = fs.readFileSync(path.join(ROOT, 'lib', 'i18n', 'translations.ts'), 'utf-8');
  const block = src.slice(src.indexOf('export const LOCALES'));
  return [...block.slice(0, block.indexOf('];')).matchAll(/code: '([a-z-]+)'/g)].map((m) => m[1]);
}

function scriptRatio(text, ranges) {
  let inScript = 0;
  let letters = 0;
  for (const ch of text) {
    const c = ch.codePointAt(0);
    if (c < 0x30) continue;
    letters++;
    if (ranges.some(([lo, hi]) => c >= lo && c <= hi)) inScript++;
  }
  return letters ? inScript / letters : 0;
}

function validate(locale, file, raw) {
  const errors = [];
  const warnings = [];
  const bytes = Buffer.byteLength(raw, 'utf-8');

  // Prose only — code blocks legitimately contain English identifiers and
  // would otherwise trip the language check.
  const prose = raw.replace(/```[\s\S]*?```/g, '');

  if (/^#\s/m.test(raw)) errors.push('contains a `# ` heading (duplicates the page h1)');
  if (!raw.startsWith('## ')) errors.push('does not start with `## `');
  if (bytes < MIN_INDEXABLE_BYTES)
    errors.push(`${bytes} bytes — below the ${MIN_INDEXABLE_BYTES} indexability gate`);
  else if (bytes < WARN_THIN_BYTES) warnings.push(`${bytes} bytes — thin`);

  // LaTeX must be matched narrowly. Spanish, French and Portuguese write the
  // currency sign after the amount ("9.000 $"), so a bare $...$ pair matches a
  // price range on one line. Require an actual TeX construct inside.
  const LATEX =
    /\\[([]|\$[^$\n]*(\\[a-zA-Z]{2,}|[\^_]\{)[^$\n]*\$|\\(frac|times|sqrt|cdot|approx)\b/;
  if (LATEX.test(raw)) errors.push('contains LaTeX');
  if (!/^\|.*\|/m.test(raw)) warnings.push('no markdown table');
  if (!/```/.test(raw)) warnings.push('no formula code block');

  const faqCount = (raw.match(/^### /gm) || []).length;
  if (faqCount < 2) warnings.push(`only ${faqCount} \`###\` FAQ headings`);

  const moji = countMojibake(raw, locale);
  if (moji) errors.push(`${moji} mojibake sequences`);

  if (locale !== 'en') {
    const ranges = SCRIPT_RANGES[locale];
    if (ranges) {
      const ratio = scriptRatio(prose, ranges);
      if (ratio < 0.25)
        errors.push(`only ${(ratio * 100).toFixed(0)}% of characters are in the ${locale} script`);
    } else {
      const hits = (prose.match(ENGLISH_MARKERS) || []).length;
      const words = prose.split(/\s+/).length;
      const density = words ? hits / words : 0;
      if (density > 0.03)
        errors.push(
          `reads as English (${hits} marker words, ${(density * 100).toFixed(1)}% density)`,
        );
    }
  }

  return { errors, warnings, bytes };
}

const only = process.argv.slice(2).filter((a) => !a.startsWith('-'));
const locales = parseLocales().filter((l) => l !== 'en' && (!only.length || only.includes(l)));

let failed = 0;
let checked = 0;
let warned = 0;

for (const locale of locales) {
  const dir = path.join(I18N_ROOT, locale);
  let files = [];
  try {
    files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  } catch {
    continue;
  }
  for (const file of files.sort()) {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { errors, warnings, bytes } = validate(locale, file, raw);
    checked++;
    if (errors.length) {
      failed++;
      console.log(`FAIL  ${locale}/${file}  (${bytes} B)`);
      for (const e of errors) console.log(`        ${e}`);
    } else if (warnings.length) {
      warned++;
      console.log(`warn  ${locale}/${file}  — ${warnings.join('; ')}`);
    }
  }
}

console.log(
  `\n${checked} guides checked · ${failed} failed · ${warned} with warnings · ` +
    `${checked - failed - warned} clean`,
);
process.exit(failed ? 1 : 0);
