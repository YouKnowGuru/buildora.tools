'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getLocalizedTool } from '@/lib/i18n/toolTranslations';
import type { ToolConfig } from '@/lib/registry/types';
import { ShieldCheck, Zap, Smartphone, Sparkles } from 'lucide-react';
import { LocaleLink as Link } from '@/components/layout/LocaleLink';

interface ToolHeaderProps {
  tool: ToolConfig;
}

const CATEGORY_NAMES: Record<string, string> = {
  'site-work': 'Site Work & Earthmoving',
  'roofing': 'Roofing & Framing',
  'concrete': 'Concrete & Masonry',
  'hvac': 'HVAC & Climate',
  'electrical': 'Electrical & Wiring',
  'flooring': 'Flooring & Tile',
  'framing': 'Framing & Lumber',
  'masonry': 'Masonry & Stone',
  'paint': 'Paint & Coatings',
  'solar': 'Solar & Renewable',
  'plumbing': 'Plumbing & Drainage',
  'structural': 'Structural Engineering',
  'exterior': 'Exterior & Siding',
  'landscaping': 'Landscaping & Turf',
  'services': 'Home Services & Inspections',
};

const COST_GUIDANCE_ONLY = new Set([
  'basement-waterproofing-cost-calculator',
  'gutter-cleaning-cost-calculator',
]);

const HEADER_I18N: Record<string, {
  formulas: string;
  instant: string;
  ready: string;
  costData: string;
  conversion: string;
  export: string;
}> = {
  en: {
    formulas: 'IRC / IBC Formulas',
    instant: 'Instant Calculation',
    ready: 'Job Site Ready',
    costData: '2026 Planning Cost & Code Guidance',
    conversion: 'Live Imperial & Metric Conversion',
    export: 'Instant PDF & Print Spec Export',
  },
  es: {
    formulas: 'Fórmulas IRC / IBC',
    instant: 'Cálculo instantáneo',
    ready: 'Listo para obra',
    costData: 'Datos de costes 2026 y normativa',
    conversion: 'Conversión imperial y métrica en vivo',
    export: 'Exportación instantánea en PDF e impresión',
  },
  fr: {
    formulas: 'Formules IRC / IBC',
    instant: 'Calcul instantané',
    ready: 'Prêt pour le chantier',
    costData: 'Données de coûts 2026 & normes',
    conversion: 'Conversion impériale & métrique en direct',
    export: 'Export PDF immédiat & impression des fiches',
  },
  de: {
    formulas: 'IRC / IBC Berechnungsnormen',
    instant: 'Sofortige Berechnung',
    ready: 'Baustellentauglich',
    costData: 'Kostendaten 2026 & Baunormen',
    conversion: 'Live Imperial- & Metrik-Umrechnung',
    export: 'Sofortiger PDF- & Druck-Export',
  },
  pt: {
    formulas: 'Fórmulas IRC / IBC',
    instant: 'Cálculo instantâneo',
    ready: 'Pronto para obra',
    costData: 'Custos 2026 e referências técnicas',
    conversion: 'Conversão métrica e imperial em tempo real',
    export: 'Exportação instantânea para PDF e impressão',
  },
  it: {
    formulas: 'Formule IRC / IBC',
    instant: 'Calcolo istantaneo',
    ready: 'Pronto per il cantiere',
    costData: 'Dati sui costi 2026 e riferimenti normativi',
    conversion: 'Conversione imperiale e metrica in tempo reale',
    export: 'Esportazione istantanea in PDF e stampa',
  },
  nl: {
    formulas: 'IRC / IBC Rekenformules',
    instant: 'Directe berekening',
    ready: 'Geschikt voor de bouwplaats',
    costData: 'Kostengegevens 2026 & bouwrichtlijnen',
    conversion: 'Directe omschakeling imperiaal en metrisch',
    export: 'Directe PDF- en printspecificatie export',
  },
  pl: {
    formulas: 'Normy i wzory IRC / IBC',
    instant: 'Natychmiastowe obliczenia',
    ready: 'Gotowy na budowę',
    costData: 'Cenniki 2026 i wytyczne budowlane',
    conversion: 'Przeliczanie jednostek imperialnych i metrycznych',
    export: 'Błyskawiczny eksport PDF i druk specyfikacji',
  },
  ru: {
    formulas: 'Стандарты и формулы IRC / IBC',
    instant: 'Мгновенный расчёт',
    ready: 'Удобно на стройплощадке',
    costData: 'Цены 2026 года и строительные нормы',
    conversion: 'Переключение метрической и имперской систем',
    export: 'Мгновенный экспорт в PDF и печать',
  },
  tr: {
    formulas: 'IRC / IBC Standartları',
    instant: 'Anında Hesaplama',
    ready: 'Şantiyeye Uygun',
    costData: '2026 Fiyat Verileri ve Standartlar',
    conversion: 'Canlı Metrik ve İngiliz Ölçü Dönüşümü',
    export: 'Anında PDF ve Yazıcı Çıktısı',
  },
  ar: {
    formulas: 'معادلات ومعايير IRC / IBC',
    instant: 'حساب فوري ومباشر',
    ready: 'جاهز للاستخدام في الموقع',
    costData: 'بيانات التكلفة والمعايير لعام 2026',
    conversion: 'تحويل فوري بين المتري والإمبراطوري',
    export: 'تصدير فوري لملف PDF والطباعة',
  },
  hi: {
    formulas: 'IRC / IBC मानक फॉर्मूले',
    instant: 'त्वरित गणना',
    ready: 'कार्यस्थल पर उपयोग योग्य',
    costData: '2026 लागत डेटा और कोड मार्गदर्शन',
    conversion: 'लाइव इंपीरियल और मेट्रिक रूपांतरण',
    export: 'त्वरित PDF और प्रिंट विनिर्देश निर्यात',
  },
  zh: {
    formulas: 'IRC / IBC 规范计算公式',
    instant: '实时即时测算',
    ready: '工地现场随时可用',
    costData: '2026 市场造价与规范指引',
    conversion: '公制与英制单位实时切换',
    export: '一键导出 PDF 及打印施工明细',
  },
  ja: {
    formulas: '建築基準準拠計算',
    instant: '即時自動計算',
    ready: '現場モバイル対応',
    costData: '2026年最新相場データ・基準準拠',
    conversion: 'メートル法・ヤードポンド法即時切替',
    export: 'PDF保存・印刷仕様書ワンクリック出力',
  },
  ko: {
    formulas: '건축 시방서 및 계산식 준수',
    instant: '실시간 자동 견적 산출',
    ready: '현장 모바일 최적화',
    costData: '2026 최신 단가 및 건축 기준',
    conversion: '미터법 및 인치/피트 실시간 단위 변환',
    export: 'PDF 저장 및 인쇄 시방서 즉시 출력',
  },
};

export function ToolHeader({ tool }: ToolHeaderProps) {
  const { locale } = useLanguage();
  const localized = getLocalizedTool(tool.slug, locale);

  const title = localized?.name ?? tool.name;
  const description = localized?.shortDescription ?? tool.shortDescription;
  const categoryLabel = CATEGORY_NAMES[tool.category] ?? tool.category.replace('-', ' ');
  const labels = HEADER_I18N[locale] ?? HEADER_I18N['en']!;
  const isCostOnlyTool = COST_GUIDANCE_ONLY.has(tool.slug);

  return (
    <div className="relative mb-8 overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50/70 to-blue-50/30 p-4 sm:p-6 lg:p-8 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:via-slate-900/90 dark:to-blue-950/20">
      {/* Subtle decorative glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

      {/* Badges strip */}
      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={`/calculators?category=${tool.category}`}
          className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs font-semibold text-primary transition hover:bg-primary/20 dark:bg-primary/20 dark:text-primary-foreground"
        >
          <Sparkles className="h-3 w-3" aria-hidden="true" />
          <span className="capitalize">{categoryLabel}</span>
        </Link>

        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-50 px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          <span>{labels.formulas}</span>
        </span>

        <span className="inline-flex items-center gap-1 rounded-full border border-blue-500/20 bg-blue-50 px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
          <Zap className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
          <span>{labels.instant}</span>
        </span>

        <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{labels.ready}</span>
        </span>
      </div>

      {/* Main Title */}
      <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 break-words dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h1>

      {/* Subtitle Description */}
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
        {description}
      </p>

      {/* Quick reassurance feature strip */}
      <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 border-t border-slate-200/80 pt-4 text-xs font-medium text-slate-500 dark:border-slate-800 dark:text-slate-300">
        <span className="flex items-center gap-1.5" title={isCostOnlyTool ? 'Uses planning cost data for estimating guidance.' : 'Uses construction-cost data and code references for estimating guidance.'}>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {isCostOnlyTool ? '2026 Planning Cost Guidance' : labels.costData}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {labels.conversion}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          {labels.export}
        </span>
      </div>
    </div>
  );
}
