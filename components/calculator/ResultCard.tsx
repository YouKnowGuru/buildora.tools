'use client';

import { useState } from 'react';
import type { ResultLabel } from '@/lib/registry/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { type Currency, formatCurrencyAmount } from '@/lib/i18n/currencies';
import { Check, Copy, AlertTriangle, Calculator, Sparkles, Layers } from 'lucide-react';

interface ResultCardProps {
  resultLabels: ResultLabel[];
  estimateRangeNote?: string;
  values: Record<string, number | null>;
  inputValues: Record<string, number | string | boolean | undefined>;
  currency?: Currency;
  units?: 'imperial' | 'metric';
}

const ESTIMATION_NOTES: Record<string, { title: string; body: string }> = {
  en: {
    title: 'Estimation Note:',
    body: 'Code references are provided for educational context and do not determine whether a specific project complies with local requirements. Allow 10–15% contingency for site conditions and unforeseen issues.',
  },
  es: {
    title: 'Nota de estimación:',
    body: 'Las referencias a normativas se facilitan a título orientativo y no sustituyen las ordenanzas locales. Prevé un 10–15% de margen para imprevistos en obra.',
  },
  fr: {
    title: "Note d'estimation :",
    body: "Les références normatives sont fournies à titre indicatif et ne remplacent pas les règles d'urbanisme locales. Prévoyez 10 à 15 % d'imprévus pour le chantier.",
  },
  de: {
    title: 'Hinweis zur Schätzung:',
    body: 'Normverweise dienen der Orientierung und ersetzen keine örtlichen Bauvorschriften. Planen Sie 10–15 % Sicherheitsreserve für Unvorhergesehenes ein.',
  },
  pt: {
    title: 'Nota de estimativa:',
    body: 'As referências técnicas têm caráter informativo e não substituem o código de obras local. Reserve 10–15% para contingências e imprevistos na obra.',
  },
  it: {
    title: 'Nota di stima:',
    body: 'I riferimenti normativi sono forniti a scopo informativo e non sostituiscono i regolamenti edilizi locali. Considera un 10–15% per imprevisti di cantiere.',
  },
  nl: {
    title: 'Ramingstoelichting:',
    body: 'Normverwijzingen zijn indicatief en vervangen de lokale bouwverordening niet. Houd rekening met 10–15% reserve voor onvoorziene omstandigheden.',
  },
  pl: {
    title: 'Uwaga do kosztorysu:',
    body: 'Powołania na normy mają charakter poglądowy i nie zastępują lokalnych przepisów budowlanych. Uwzględnij 10–15% rezerwy na nieprzewidziane wydatki.',
  },
  ru: {
    title: 'Примечание к расчёту:',
    body: 'Нормативные ссылки носят ознакомительный характер и не заменяют требования местных СНиП. Закладывайте 10–15% резерва на непредвиденные расходы.',
  },
  tr: {
    title: 'Tahmin Notu:',
    body: 'Standart referansları bilgilendirme amaçlıdır ve yerel imar şartlarının yerine geçmez. Şantiye koşulları için %10–15 emniyet payı ayırınız.',
  },
  ar: {
    title: 'تنبيه تقديري:',
    body: 'المراجع الهندسية الواردة هي للاسترشاد التعليمي ولا تغني عن اللوائح والاشتراطات البلدية المحلية. خصص احتياطياً 10–15% للظروف غير المتوقعة.',
  },
  hi: {
    title: 'अनुमान नोट:',
    body: 'कोड संदर्भ शैक्षिक संदर्भ के लिए प्रदान किए गए हैं और यह निर्धारित नहीं करते हैं कि कोई विशिष्ट परियोजना स्थानीय आवश्यकताओं का अनुपालन करती है या नहीं। अप्रत्याशित समस्याओं के लिए 10–15% आकस्मिक बजट रखें।',
  },
  zh: {
    title: '测算说明：',
    body: '规范参考仅供工程参考，不能替代当地施工许可与验收要求。建议为现场突发情况预留 10–15% 的应急备用金。',
  },
  ja: {
    title: '積算に関する注意事項：',
    body: '記載の法規基準は参考用であり、自治体の建築基準法や条例の確認に代わるものではありません。現場状況に応じて10〜15%の予備費を見込んでください。',
  },
  ko: {
    title: '견적 유의사항:',
    body: '시방 기준 참조는 기술적 이해를 돕기 위한 것이며 지자체 건축 조례 적합성을 확정하지 않습니다. 현장 변수에 대비해 10~15%의 예비비를 확보하세요.',
  },
};

export function ResultCard({
  resultLabels,
  estimateRangeNote,
  values,
  inputValues,
  currency,
  units = 'imperial',
}: ResultCardProps) {
  const { t, locale } = useLanguage();
  const [copiedPrimary, setCopiedPrimary] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  const visibleLabels = resultLabels.filter((label) => {
    if (!label.showOnlyIfInputSet) return true;
    if (label.showOnlyIfInputSet.includes(':')) {
      const parts = label.showOnlyIfInputSet.split(':');
      const field = parts[0]?.trim() ?? '';
      const allowed = parts[1]?.trim() ?? '';
      const allowedList = allowed.split(',').map((s) => s.trim());
      const current = String(inputValues[field] ?? '');
      return allowedList.includes(current);
    }
    const fields = label.showOnlyIfInputSet.split(',');
    return fields.some((field) => {
      const gate = inputValues[field.trim()];
      if (typeof gate === 'boolean') return gate;
      return gate !== undefined && gate !== '' && Number(gate) > 0;
    });
  });

  const primaryHighlight = visibleLabels.find((l) => l.highlight) ?? visibleLabels[0];
  const secondaryLabels = visibleLabels.filter((l) => l.id !== primaryHighlight?.id && l.id !== 'cavityWarning');

  const primaryValue = primaryHighlight ? values[primaryHighlight.id] : null;
  const isReady = primaryValue !== null && primaryValue !== undefined;

  const rawPrimaryLabel = primaryHighlight
    ? (t.calculator.results as Record<string, string | undefined>)?.[primaryHighlight.id] ?? primaryHighlight.label
    : '';
  let primaryLabelText = rawPrimaryLabel
    .replace('(/sq ft)', currency ? `(${currency.symbol}/${units === 'metric' ? 'm²' : 'sq ft'})` : `($/${units === 'metric' ? 'm²' : 'sq ft'})`)
    .replace('($)', currency ? `(${currency.symbol})` : '($)');
  if (units === 'metric') {
    primaryLabelText = primaryLabelText.replace(/per sq ft/gi, 'per m²').replace(/sq ft/gi, 'm²');
  }

  const primaryFormatted = primaryHighlight && isReady
    ? formatValue(primaryValue as number, primaryHighlight.unit, currency, units, primaryHighlight.id)
    : '—';

  async function handleCopyPrimary() {
    if (!isReady || !primaryHighlight) return;
    try {
      await navigator.clipboard.writeText(`${primaryLabelText}: ${primaryFormatted}`);
      setCopiedPrimary(true);
      setTimeout(() => setCopiedPrimary(false), 2000);
    } catch {
      // Clipboard fallback
    }
  }

  async function handleCopySummary() {
    try {
      const lines = visibleLabels
        .filter((l) => l.id !== 'cavityWarning')
        .map((label) => {
          const val = values[label.id];
          const raw = (t.calculator.results as Record<string, string | undefined>)?.[label.id] ?? label.label;
          const formatted = val === null || val === undefined ? '—' : formatValue(val, label.unit, currency, units, label.id);
          return `• ${raw}: ${formatted}`;
        });
      const summaryText = `Buildora Calculation Summary:\n${lines.join('\n')}\nCalculated with Buildora (https://buildora.tools)`;
      await navigator.clipboard.writeText(summaryText);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } catch {
      // Clipboard fallback
    }
  }

  return (
    <div className="space-y-5">
      <div
        aria-live="polite"
        aria-atomic="true"
        className="calc-print-area overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 lg:p-7 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900"
      >
        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
              <Calculator className="h-4 w-4" aria-hidden="true" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              {t.calculator.resultsHeading}
            </h2>
          </div>

          {isReady && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              {t.calculator.ready}
            </span>
          )}
        </div>

        {/* Physical Cavity Depth Limit Warning Banner */}
        {Boolean((values as any).cavityWarning) && (
          <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50/95 p-4 text-xs text-amber-950 shadow-sm dark:border-amber-700/60 dark:bg-amber-950/50 dark:text-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-bold text-amber-950 dark:text-amber-100">
                  Physical Cavity Depth Limit Exceeded
                </h3>
                <p className="mt-1 leading-relaxed text-amber-900/90 dark:text-amber-200/90">
                  {String((values as any).cavityWarning)}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Hero Primary Result Banner */}
        {primaryHighlight && (
          <div className="relative mt-5 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 sm:p-6 transition-all">
            <div className="pointer-events-none absolute -right-8 -bottom-8 h-28 w-28 rounded-full bg-primary/15 blur-2xl" />

            <div className="flex items-start justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-foreground">
                {t.calculator.primaryMetric || 'Primary Metric'}
              </span>
              <button
                type="button"
                onClick={handleCopyPrimary}
                aria-label="Copy primary result"
                className="inline-flex items-center gap-1 rounded-lg border border-primary/20 bg-white/80 px-2 py-1 text-[11px] font-medium text-primary shadow-xs backdrop-blur-xs transition hover:bg-white dark:border-primary/40 dark:bg-slate-800/80 dark:text-primary-foreground dark:hover:bg-slate-800"
              >
                {copiedPrimary ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    <span>{t.calculator.copied || 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
              {primaryLabelText}
            </p>

            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                {primaryFormatted}
              </span>
            </div>
          </div>
        )}

        {/* Secondary / Breakdown Results */}
        {secondaryLabels.length > 0 && (
          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                {t.calculator.specificationBreakdown || 'Specification Breakdown'}
              </span>
            </div>

            <dl className="space-y-1">
              {secondaryLabels.map((label) => {
                const value = values[label.id];
                const rawLabel =
                  (t.calculator.results as Record<string, string | undefined>)?.[label.id] ??
                  label.label;
                let translatedLabel = rawLabel
                  .replace('(/sq ft)', currency ? `(${currency.symbol}/${units === 'metric' ? 'm²' : 'sq ft'})` : `($/${units === 'metric' ? 'm²' : 'sq ft'})`)
                  .replace('($)', currency ? `(${currency.symbol})` : '($)');
                if (units === 'metric') {
                  translatedLabel = translatedLabel.replace(/per sq ft/gi, 'per m²').replace(/sq ft/gi, 'm²');
                }

                const isCost = label.unit === '$' || label.unit.startsWith('$/');

                return (
                  <div
                    key={label.id}
                    className="flex items-baseline justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  >
                    <dt className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      {translatedLabel}
                    </dt>
                    <dd
                      className={`text-sm font-bold ${
                        isCost
                          ? 'text-emerald-700 dark:text-emerald-400'
                          : 'text-slate-900 dark:text-white'
                      }`}
                    >
                      {value === null || value === undefined
                        ? '—'
                        : formatValue(value, label.unit, currency, units, label.id)}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        )}

        {estimateRangeNote && (
          <p className="mt-4 rounded-xl border border-sky-200 bg-sky-50 px-3 py-2.5 text-xs leading-relaxed text-sky-900 dark:border-sky-900/60 dark:bg-sky-950/30 dark:text-sky-200">
            <strong>Estimate range:</strong> {estimateRangeNote}
          </p>
        )}

        {/* Copy All Summary Action */}
        <div className="no-print mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
          <button
            type="button"
            onClick={handleCopySummary}
            className="flex w-full min-h-[42px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-xs font-semibold text-slate-700 transition hover:border-primary/40 hover:bg-slate-100 hover:text-primary dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-primary"
          >
            {copiedAll ? (
              <>
                <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                <span className="text-emerald-600 dark:text-emerald-400">{t.calculator.copied || 'Calculation Summary Copied!'}</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-slate-400" aria-hidden="true" />
                <span>{t.calculator.copySummary || 'Copy Complete Calculation Summary'}</span>
              </>
            )}
          </button>
        </div>

        {/* Trust & EEAT Tolerance Note */}
        <div className="mt-4 rounded-xl bg-slate-50 p-3 text-[11px] leading-relaxed text-slate-500 dark:bg-slate-800/40 dark:text-slate-400">
          <div className="flex items-start gap-1.5">
            <span className="text-xs shrink-0">📐</span>
            <span>
              {(() => { const note = ESTIMATION_NOTES[locale] ?? ESTIMATION_NOTES['en']!; return <><strong>{note.title}</strong>{' '}{note.body}</>; })()}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile-only sticky bottom bar for quick reading on job sites */}
      {primaryHighlight && (
        <div
          aria-hidden="true"
          className="no-print fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between border-t border-slate-200 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 sm:hidden pb-safe"
        >
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 truncate max-w-[200px]">
              {primaryLabelText}
            </span>
            <span className="text-lg font-black text-primary">
              {primaryFormatted}
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopyPrimary}
            className="flex h-9 items-center gap-1.5 rounded-lg bg-primary px-3 text-xs font-semibold text-white shadow-sm transition hover:bg-primary/90 active:scale-95"
          >
            {copiedPrimary ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

function formatValue(
  value: number,
  rawUnit: string,
  currency?: Currency,
  units: 'imperial' | 'metric' = 'imperial',
  resultId?: string
): string {
  let unit = rawUnit;
  if (resultId === 'totalRoofLoad') {
    unit = units === 'metric' ? 'kN' : 'lbs';
  } else if (units === 'metric') {
    if (unit === 'sq ft') unit = 'm²';
    if (unit === 'cu yd') unit = 'm³';
    if (unit === 'tons') unit = 'tonnes';
    if (unit === 'lbs') unit = 'kg';
    if (unit === 'sq in') unit = 'cm²';
    if (unit === '$/sq ft') unit = '$/m²';
    if (unit === '$/lf') unit = '$/m';
    if (unit === 'ft') unit = 'm';
    if (unit === 'in') unit = 'cm';
    if (unit === 'lb/ft³') unit = 'kg/m³';
    if (unit === 'psf') unit = 'kPa';
  } else {
    if (unit === 'm²') unit = 'sq ft';
    if (unit === 'm³') unit = 'cu yd';
    if (unit === 'tonnes') unit = 'tons';
    if (unit === 'kg') unit = 'lbs';
    if (unit === 'cm²') unit = 'sq in';
    if (unit === '$/m²') unit = '$/sq ft';
    if (unit === '$/m') unit = '$/lf';
    if (unit === 'm') unit = 'ft';
    if (unit === 'cm') unit = 'in';
    if (unit === 'kg/m³') unit = 'lb/ft³';
    if (unit === 'kPa') unit = 'psf';
  }

  if (unit === '$') {
    if (currency) {
      return formatCurrencyAmount(value, currency);
    }
    const formatted = value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `$${formatted}`;
  }
  if (unit.startsWith('$/')) {
    const unitSuffix = unit.replace('$/', '/ ');
    if (currency) {
      return `${formatCurrencyAmount(value, currency)} ${unitSuffix}`;
    }
    const formatted = value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `$${formatted} ${unitSuffix}`;
  }
  const formatted = value.toLocaleString(undefined, { maximumFractionDigits: 2 });
  return `${formatted} ${unit}`;
}
