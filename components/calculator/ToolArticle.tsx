'use client';

import { useMemo } from 'react';
import { marked } from 'marked';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getLocalizedTool } from '@/lib/i18n/toolTranslations';
import { preprocessLatex } from '@/lib/markdown/latex';
import type { ToolConfig } from '@/lib/registry/types';
import { BookOpen, CheckCircle2 } from 'lucide-react';

interface ToolArticleProps {
  tool: ToolConfig;
  /**
   * The long-form guide for the current locale, already parsed on the server
   * by page.tsx (English from `lib/content/<file>.md`, everything else from
   * `lib/content/i18n/<locale>/<file>.md`).
   */
  localeHtml?: string;
}

const ARTICLE_I18N: Record<string, {
  guideCategory: string;
  costSuffix: string;
  specSuffix: string;
  transparentCost: string;
  verifiedStandards: string;
}> = {
  en: {
    guideCategory: 'Technical Guide & Methodology',
    costSuffix: 'Cost Methodology & Reference Guide',
    specSuffix: 'Specifications & Reference Guide',
    transparentCost: 'Transparent Cost Methodology',
    verifiedStandards: 'Verified Industry Standards',
  },
  es: {
    guideCategory: 'Guía técnica y metodología',
    costSuffix: 'Metodología de costes y guía de referencia',
    specSuffix: 'Especificaciones técnicas y guía de referencia',
    transparentCost: 'Metodología de costes transparente',
    verifiedStandards: 'Normas del sector verificadas',
  },
  fr: {
    guideCategory: 'Guide technique & méthodologie',
    costSuffix: 'Méthodologie des coûts & guide de référence',
    specSuffix: 'Spécifications techniques & guide de référence',
    transparentCost: 'Méthodologie de coût transparente',
    verifiedStandards: 'Normes de construction vérifiées',
  },
  de: {
    guideCategory: 'Technischer Leitfaden & Methodik',
    costSuffix: 'Kostenmethodik & Referenzleitfaden',
    specSuffix: 'Technische Spezifikationen & Leitfaden',
    transparentCost: 'Transparente Kostenmethodik',
    verifiedStandards: 'Geprüfte Baustandards',
  },
  pt: {
    guideCategory: 'Guia técnico e metodologia',
    costSuffix: 'Metodologia de custos e guia de referência',
    specSuffix: 'Especificações técnicas e guia prático',
    transparentCost: 'Metodologia de custos transparente',
    verifiedStandards: 'Padrões técnicos verificados',
  },
  it: {
    guideCategory: 'Guida tecnica e metodologia',
    costSuffix: 'Metodologia di calcolo e guida ai costi',
    specSuffix: 'Specifiche tecniche e guida di riferimento',
    transparentCost: 'Metodologia dei costi trasparente',
    verifiedStandards: 'Standard di settore verificati',
  },
  nl: {
    guideCategory: 'Technische gids & methodologie',
    costSuffix: 'Kostenmethodiek & referentiegids',
    specSuffix: 'Technische specificaties & richtlijnen',
    transparentCost: 'Transparante kostenmethodiek',
    verifiedStandards: 'Geverifieerde bouwnormen',
  },
  pl: {
    guideCategory: 'Przewodnik techniczny i metodyka',
    costSuffix: 'Metodyka kalkulacji kosztów i wytyczne',
    specSuffix: 'Specyfikacje techniczne i przewodnik',
    transparentCost: 'Przejrzysta metodyka kosztów',
    verifiedStandards: 'Sprawdzone standardy budowlane',
  },
  ru: {
    guideCategory: 'Техническое руководство и методология',
    costSuffix: 'Методология расчёта стоимости и нормативы',
    specSuffix: 'Технические спецификации и руководство',
    transparentCost: 'Прозрачная методика расчёта',
    verifiedStandards: 'Проверенные отраслевые стандарты',
  },
  tr: {
    guideCategory: 'Teknik Rehber ve Metodoloji',
    costSuffix: 'Maliyet Metodolojisi ve Referans Rehberi',
    specSuffix: 'Teknik Şartnameler ve Uygulama Rehberi',
    transparentCost: 'Şeffaf Maliyet Metodolojisi',
    verifiedStandards: 'Doğrulanmış İnşaat Standartları',
  },
  ar: {
    guideCategory: 'الدليل الفني والمنهجية الحسابية',
    costSuffix: 'منهجية التكاليف والدليل المرجعي',
    specSuffix: 'المواصفات الفنية والدليل الهندسي',
    transparentCost: 'منهجية تسعير شفافة',
    verifiedStandards: 'معايير بناء هندسية موثوقة',
  },
  hi: {
    guideCategory: 'तकनीकी गाइड और कार्यप्रणाली',
    costSuffix: 'लागत कार्यप्रणाली और संदर्भ गाइड',
    specSuffix: 'तकनीकी विनिर्देश और संदर्भ गाइड',
    transparentCost: 'पारदर्शी लागत कार्यप्रणाली',
    verifiedStandards: 'सत्यापित उद्योग मानक',
  },
  zh: {
    guideCategory: '技术指南与计算方法',
    costSuffix: '造价测算方法与参考指南',
    specSuffix: '技术规范与施工参考指南',
    transparentCost: '透明可追溯测算模型',
    verifiedStandards: '行业权威标准认证',
  },
  ja: {
    guideCategory: '技術仕様・積算基準ガイド',
    costSuffix: '工事積算方式・参考ガイド',
    specSuffix: '技術仕様・設計施工基準ガイド',
    transparentCost: '明朗な積算ロジック',
    verifiedStandards: '業界標準規格準拠',
  },
  ko: {
    guideCategory: '기술 시방 및 산출 기준 가이드',
    costSuffix: '공사비 산출 기준 및 적산 가이드',
    specSuffix: '기술 시방서 및 공정 참고 가이드',
    transparentCost: '투명한 견적 산출 모델',
    verifiedStandards: '검증된 건축 시방 기준',
  },
};

export function ToolArticle({ tool, localeHtml = '' }: ToolArticleProps) {
  const { locale } = useLanguage();
  const localized = getLocalizedTool(tool.slug, locale);
  const labels = ARTICLE_I18N[locale] ?? ARTICLE_I18N['en']!;

  const html = useMemo(() => {
    if (localeHtml) return localeHtml;
    if (!localized?.article) return '';
    return marked.parse(preprocessLatex(localized.article)) as string;
  }, [localeHtml, localized?.article]);

  if (!html) return null;

  const toolDisplayName = localized?.name ?? tool.name;

  return (
    <div className="mt-16 rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-8 lg:p-10 shadow-xs dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
            <BookOpen className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-primary-foreground">
              {labels.guideCategory}
            </span>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
              {tool.slug.includes('cost')
                ? `${toolDisplayName} — ${labels.costSuffix}`
                : `${toolDisplayName} — ${labels.specSuffix}`}
            </h2>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
          {tool.slug.includes('cost') ? labels.transparentCost : labels.verifiedStandards}
        </span>
      </div>
      <article
        className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline dark:prose-invert dark:prose-a:text-primary dark:prose-pre:border dark:prose-pre:border-slate-800 dark:prose-pre:bg-slate-950 [&_table]:block [&_table]:overflow-x-auto [&_table]:w-full [&_.katex-display]:overflow-x-auto [&_.katex-display]:pb-2"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
