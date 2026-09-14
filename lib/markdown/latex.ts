/**
 * LaTeX → readable-text preprocessing for `marked`, which has no math support.
 * Without this, raw `$$\text{...}$$` leaks into the rendered HTML.
 *
 * Converts display math ($$...$$) and inline math ($...$) into clean Unicode
 * text (×, ÷, ≥, Σ, a / b) that stays crawlable and copy-paste friendly with
 * zero dependencies. A future KaTeX/MathJax migration can replace
 * `latexToText` with `katex.renderToString` without touching call sites.
 *
 * Guard: $...$ is only treated as math when it contains a LaTeX command
 * (a backslash), so dollar amounts like "$45 to $60" in cost guides pass
 * through untouched.
 */

const SYMBOLS: Array<[RegExp, string]> = [
  [/\\left\b\s*/g, ''],
  [/\\right\b\s*/g, ''],
  [/\\times/g, '×'],
  [/\\div/g, '÷'],
  [/\\cdot/g, '·'],
  [/\\pm/g, '±'],
  [/\\approx/g, '≈'],
  [/\\neq/g, '≠'],
  [/\\leq/g, '≤'],
  [/\\le\b/g, '≤'],
  [/\\geq/g, '≥'],
  [/\\ge\b/g, '≥'],
  [/\\sum/g, 'Σ'],
  [/\\max\b/g, 'max'],
  [/\\min\b/g, 'min'],
  [/\\sqrt/g, '√'],
  [/\\pi\b/g, 'π'],
  [/\\%/g, '%'],
  [/\\quad/g, '  '],
  [/\\qquad/g, '  '],
  [/\\,/g, ' '],
  [/\\;/g, ' '],
];

export function latexToText(tex: string): string {
  let s = tex;
  // \text{...}, \mathbf{...} etc → inner content (repeat to unwrap nesting,
  // e.g. \mathbf{23,000\text{ VA}} → 23,000 VA)
  for (let i = 0; i < 4; i++) {
    s = s.replace(/\\(?:text|mathrm|mathbf|mathit|mathcal|operatorname)\{([^{}]*)\}/g, '$1');
  }
  // \frac{a}{b} → (a) / (b)
  s = s.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1) / ($2)');
  // Subscripts: N_{circuits} → N(circuits); superscripts: x^{2} → x^(2)
  s = s.replace(/_\{([^{}]*)\}/g, '($1)');
  s = s.replace(/\^\{([^{}]*)\}/g, '^($1)');
  for (const [re, rep] of SYMBOLS) s = s.replace(re, rep);
  // Drop any remaining LaTeX commands
  s = s.replace(/\\[a-zA-Z]+/g, ' ');
  // Escaped chars and leftover braces
  s = s.replace(/\\\$/g, '$');
  s = s.replace(/[{}]/g, '');
  // Collapse whitespace
  return s.replace(/[ \t]+/g, ' ').trim();
}

/** Preprocess a markdown string, converting LaTeX math to readable text before `marked` parses it. */
export function preprocessLatex(markdown: string): string {
  // Display math first: $$...$$ (may span lines). Two trailing spaces after each
  // block act as a markdown hard-break, so consecutive $$ lines stay on
  // separate lines instead of merging into one paragraph.
  let out = markdown.replace(/\$\$([\s\S]+?)\$\$/g, (match, tex: string) => {
    if (!tex.includes('\\')) return match; // not LaTeX — leave untouched
    return `${latexToText(tex)}  `;
  });
  // Inline math: $...$ on a single line, only when it contains a LaTeX command
  out = out.replace(/\$([^$\n]*\\[a-zA-Z][^$\n]*)\$/g, (_m, tex: string) => latexToText(tex));
  return out;
}
