'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import type { Locale } from '@/lib/i18n/translations';

interface DeckFootingVisualizerProps {
  deckLength?: number; // ft
  deckWidth?: number; // ft
  deckShape?: 'rectangle' | 'square' | 'l-shape' | 'freeform';
  totalPosts?: number;
  postRows?: number;
  postsPerRow?: number;
  loadPerPostLbs?: number;
  footingDiameterIn?: number;
  footingSideIn?: number;
  footingShape?: 'round' | 'square';
  recommendedSonotubeDiameterIn?: number;
  totalConcreteCuYd?: number;
  soilBearingPsf?: number;
  tributaryAreaPerPostSqFt?: number;
  units?: 'imperial' | 'metric';
  codeNote?: string;
}

interface VisualizerText {
  title: string;
  largeBadge: string;
  standardBadge: string;
  houseWall: string;
  deckLabel: string;
  postsLabel: string;
  loadPerPost: string;
  footingSize: string;
  sonotube: string;
  concrete: string;
  soilBearing: string;
  tributary: string;
  roundDia: string;
  squareSize: string;
}

const VISUALIZER_TEXTS: Record<Locale, VisualizerText> = {
  en: {
    title: 'Deck Footing & Post Layout',
    largeBadge: 'Large Footing — Verify w/ Engineer',
    standardBadge: 'Standard Deck Footing Size',
    houseWall: 'HOUSE LEDGER WALL',
    deckLabel: 'Deck',
    postsLabel: 'Posts',
    loadPerPost: 'Load / Post',
    footingSize: 'Footing Size',
    sonotube: 'Sonotube',
    concrete: 'Concrete',
    soilBearing: 'Soil Bearing',
    tributary: 'Tributary',
    roundDia: 'in dia',
    squareSize: 'in × in',
  },
  es: {
    title: 'Disposición de Cimientos y Postes',
    largeBadge: 'Cimiento Grande — Verificar con Ingeniero',
    standardBadge: 'Tamaño Estándar de Cimiento',
    houseWall: 'PARED DE APOYO DE LA CASA',
    deckLabel: 'Terraza',
    postsLabel: 'Postes',
    loadPerPost: 'Carga / Poste',
    footingSize: 'Tamaño Cimiento',
    sonotube: 'Sonotubo',
    concrete: 'Concreto',
    soilBearing: 'Capacidad Portante',
    tributary: 'Área Tributaria',
    roundDia: 'pulg diám',
    squareSize: 'pulg × pulg',
  },
  fr: {
    title: 'Plan des Semelles et Poteaux',
    largeBadge: 'Grande Semelle — À vérifier avec ingénieur',
    standardBadge: 'Taille Standard de Semelle',
    houseWall: 'MUR D’APPUI DE LA MAISON',
    deckLabel: 'Terrasse',
    postsLabel: 'Poteaux',
    loadPerPost: 'Charge / Poteau',
    footingSize: 'Taille Semelle',
    sonotube: 'Sonotube',
    concrete: 'Béton',
    soilBearing: 'Portance Sol',
    tributary: 'Surface Tributaire',
    roundDia: 'po diam',
    squareSize: 'po × po',
  },
  de: {
    title: 'Fundament- & Pfostenanordnung',
    largeBadge: 'Großes Fundament — Statiker prüfen lassen',
    standardBadge: 'Standard-Fundamentgröße',
    houseWall: 'HAUSWAND-AUFLAGER',
    deckLabel: 'Terrasse',
    postsLabel: 'Pfosten',
    loadPerPost: 'Last / Pfosten',
    footingSize: 'Fundamentgröße',
    sonotube: 'Sonotube',
    concrete: 'Beton',
    soilBearing: 'Bodentragfähigkeit',
    tributary: 'Einzugsfläche',
    roundDia: 'Zoll Durchm.',
    squareSize: 'Zoll × Zoll',
  },
  pt: {
    title: 'Disposição de Sapatas e Pilares',
    largeBadge: 'Sapata Grande — Verificar com Engenheiro',
    standardBadge: 'Tamanho Padrão de Sapata',
    houseWall: 'PAREDE DE APOIO DA CASA',
    deckLabel: 'Deck',
    postsLabel: 'Pilares',
    loadPerPost: 'Carga / Pilar',
    footingSize: 'Tamanho Sapata',
    sonotube: 'Sonotubo',
    concrete: 'Concreto',
    soilBearing: 'Suporte do Solo',
    tributary: 'Área Tributária',
    roundDia: 'pol diâm',
    squareSize: 'pol × pol',
  },
  it: {
    title: 'Disposizione Plinti e Pali',
    largeBadge: 'Plinto Grande — Verificare con Ingegnere',
    standardBadge: 'Dimensione Standard Plinto',
    houseWall: 'MURO PORTANTE CASA',
    deckLabel: 'Deck',
    postsLabel: 'Pali',
    loadPerPost: 'Carico / Palo',
    footingSize: 'Misura Plinto',
    sonotube: 'Sonotube',
    concrete: 'Calcestruzzo',
    soilBearing: 'Portanza Terreno',
    tributary: 'Area Tributaria',
    roundDia: 'pollici diam',
    squareSize: 'pollici × pollici',
  },
  nl: {
    title: 'Poeren- & Palenplan',
    largeBadge: 'Grote Poer — Verifieer met Ingenieur',
    standardBadge: 'Standaard Poermaat',
    houseWall: 'GEVELBALK HUIS',
    deckLabel: 'Terras',
    postsLabel: 'Palen',
    loadPerPost: 'Last / Paal',
    footingSize: 'Poermaat',
    sonotube: 'Sonotube',
    concrete: 'Beton',
    soilBearing: 'Draagkracht Grond',
    tributary: 'Afdrachtvlak',
    roundDia: 'inch diam',
    squareSize: 'inch × inch',
  },
  pl: {
    title: 'Rozmieszczenie Stóp i Słupów',
    largeBadge: 'Duża Stopa — Skonsultuj z Konstruktorem',
    standardBadge: 'Standardowy Rozmiar Stopy',
    houseWall: 'ŚCIANA NOŚNA DOMU',
    deckLabel: 'Taras',
    postsLabel: 'Słupy',
    loadPerPost: 'Obciążenie / Słup',
    footingSize: 'Rozmiar Stopy',
    sonotube: 'Sonotube',
    concrete: 'Beton',
    soilBearing: 'Nośność Gruntu',
    tributary: 'Obszar Dopływu',
    roundDia: 'cali śr.',
    squareSize: 'cali × cali',
  },
  ru: {
    title: 'План Опор и Фундаментов',
    largeBadge: 'Крупный фундамент — Требуется расчёт инженера',
    standardBadge: 'Стандартный размер фундамента',
    houseWall: 'ОПОРНАЯ СТЕНА ДОМА',
    deckLabel: 'Терраса',
    postsLabel: 'Столбов',
    loadPerPost: 'Нагрузка / Столб',
    footingSize: 'Размер базы',
    sonotube: 'Sonotube',
    concrete: 'Бетон',
    soilBearing: 'Грунт',
    tributary: 'Грузовая зона',
    roundDia: 'дюйм диам.',
    squareSize: 'дюйм × дюйм',
  },
  tr: {
    title: 'Temel & Direk Yerleşimi',
    largeBadge: 'Geniş Temel — Mühendis Onayı Gerekli',
    standardBadge: 'Standart Temel Boyutu',
    houseWall: 'EV BAĞLANTI DUVARI',
    deckLabel: 'Deck',
    postsLabel: 'Direk',
    loadPerPost: 'Yük / Direk',
    footingSize: 'Temel Boyutu',
    sonotube: 'Sonotube',
    concrete: 'Beton',
    soilBearing: 'Zemin Taşıma',
    tributary: 'Yük Alanı',
    roundDia: 'inç çap',
    squareSize: 'inç × inç',
  },
  ar: {
    title: 'مخطط القواعد والأعمدة',
    largeBadge: 'قاعدة كبيرة — تتطلب استشارة مهندس',
    standardBadge: 'حجم قاعدة قياسي',
    houseWall: 'جدار تثبيت المنزل',
    deckLabel: 'السطح',
    postsLabel: 'أعمدة',
    loadPerPost: 'الحمل / عمود',
    footingSize: 'مقاس القاعدة',
    sonotube: 'Sonotube',
    concrete: 'خرسانة',
    soilBearing: 'تحمل التربة',
    tributary: 'المساحة التبعية',
    roundDia: 'بوصة قطر',
    squareSize: 'بوصة × بوصة',
  },
  hi: {
    title: 'फुटिंग एवं पोस्ट लेआउट',
    largeBadge: 'बड़ी फुटिंग — इंजीनियर से पुष्टि करें',
    standardBadge: 'मानक फुटिंग आकार',
    houseWall: 'घर की लेजर दीवार',
    deckLabel: 'डेक',
    postsLabel: 'पोस्ट',
    loadPerPost: 'लोड / पोस्ट',
    footingSize: 'फुटिंग आकार',
    sonotube: 'सोनोट्यूब',
    concrete: 'कंक्रीट',
    soilBearing: 'मिट्टी वहन',
    tributary: 'ट्रिब्यूटरी एरिया',
    roundDia: 'इंच व्यास',
    squareSize: 'इंच × इंच',
  },
  zh: {
    title: '基础与支柱平面布局',
    largeBadge: '大型基础 — 需工程师验算',
    standardBadge: '标准甲板基础尺寸',
    houseWall: '房屋连接承重墙',
    deckLabel: '甲板',
    postsLabel: '根立柱',
    loadPerPost: '单柱荷载',
    footingSize: '基础截面',
    sonotube: '管模规格',
    concrete: '混凝土方量',
    soilBearing: '地基承载力',
    tributary: '从属受荷区',
    roundDia: '英寸 直径',
    squareSize: '英寸 × 英寸',
  },
  ja: {
    title: '基礎フーチング＆柱 配置図',
    largeBadge: '大型基礎 — 構造計算の確認推奨',
    standardBadge: '標準デッキ基礎サイズ',
    houseWall: '住宅取付け壁面',
    deckLabel: 'デッキ',
    postsLabel: '本',
    loadPerPost: '支持荷重/柱',
    footingSize: '基礎サイズ',
    sonotube: 'ソノチューブ',
    concrete: 'コンクリート',
    soilBearing: '地盤支持力',
    tributary: '負担面積',
    roundDia: 'インチ径',
    squareSize: 'インチ × インチ',
  },
  ko: {
    title: '기초 푸팅 & 기둥 배치도',
    largeBadge: '대형 푸팅 — 구조 기술사 확인 필요',
    standardBadge: '표준 덱 푸팅 크기',
    houseWall: '집 외벽 고정면',
    deckLabel: '덱',
    postsLabel: '개 기둥',
    loadPerPost: '기둥당 하중',
    footingSize: '푸팅 크기',
    sonotube: '소노튜브',
    concrete: '콘크리트',
    soilBearing: '지반 지지력',
    tributary: '지류 면적',
    roundDia: '인치 직경',
    squareSize: '인치 × 인치',
  },
};

export function DeckFootingVisualizer({
  deckLength = 16,
  deckWidth = 12,
  deckShape = 'rectangle',
  totalPosts = 6,
  postRows = 2,
  postsPerRow = 3,
  loadPerPostLbs = 3200,
  footingDiameterIn = 12,
  footingSideIn = 11,
  footingShape = 'round',
  recommendedSonotubeDiameterIn = 12,
  totalConcreteCuYd = 1.8,
  soilBearingPsf = 2500,
  tributaryAreaPerPostSqFt = 32,
  units = 'imperial',
  codeNote = '',
}: DeckFootingVisualizerProps) {
  const { locale } = useLanguage();
  const txt = VISUALIZER_TEXTS[locale] ?? VISUALIZER_TEXTS.en;
  const isMetric = units === 'metric';

  // Determine grid for the top-down plan (house wall = bottom edge).
  const rows = Math.max(1, postRows);
  const cols = Math.max(2, postsPerRow);

  // Footing size label (result values are cm in metric mode, in otherwise)
  const footingSize = footingShape === 'round'
    ? isMetric
      ? `${footingDiameterIn} cm dia`
      : `${footingDiameterIn} ${txt.roundDia}`
    : isMetric
      ? `${footingSideIn} × ${footingSideIn} cm`
      : `${footingSideIn} × ${footingSideIn} ${txt.squareSize.split('×')[0]?.trim() ?? 'in'}`;

  // Badge status: if sonotube size > 24in (61cm), flag "engineered/large". Otherwise standard.
  const isOversized = recommendedSonotubeDiameterIn > (isMetric ? 61 : 24);
  const statusBadge = isOversized
    ? {
        badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-300 dark:border-amber-800',
        dotColor: '#f59e0b',
        text: txt.largeBadge,
      }
    : {
        badgeBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
        dotColor: '#10b981',
        text: txt.standardBadge,
      };

  const dimUnit = isMetric ? 'm' : 'ft';
  // deckLength/deckWidth props are raw input values, already in the user's unit
  const displayLength = deckLength;
  const displayWidth = deckWidth;

  return (
    <div className="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
            🔩
          </span>
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            {txt.title}
          </h3>
        </div>
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${statusBadge.badgeBg}`}>
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: statusBadge.dotColor }} />
          {statusBadge.text}
        </span>
      </div>

      {/* Top-down plan */}
      <div className="mt-4 flex justify-center">
        <svg
          viewBox="0 0 540 320"
          className="h-auto w-full max-w-lg select-none"
          aria-label="Top-down deck plan showing post and footing layout"
        >
          <defs>
            <linearGradient id="deckPlank" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>

          {/* House wall (bottom edge) */}
          <rect x="40" y="262" width="460" height="26" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
          <text x="270" y="280" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">
            {txt.houseWall}
          </text>

          {/* Deck surface */}
          <rect x="40" y="62" width="460" height="200" rx="4" fill="url(#deckPlank)" stroke="#cbd5e1" strokeWidth="1.5" className="dark:stroke-slate-700" />
          {/* Plank lines */}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={i} x1={40 + i * 51} y1="62" x2={40 + i * 51} y2="262" stroke="#cbd5e1" strokeWidth="0.7" className="dark:stroke-slate-700" />
          ))}

          {/* Posts + footings grid */}
          {Array.from({ length: rows }).map((_, r) =>
            Array.from({ length: cols }).map((_, c) => {
              const x = 70 + (c * (400 / Math.max(1, cols - 1)));
              const y = r === 0
                ? 90 // near house beam row
                : 90 + (172 / Math.max(1, rows)); // outer row(s)
              const r2 = ((footingDiameterIn / (isMetric ? 2.54 : 1)) / 12) * 9; // scale footing radius for display (cm→in when metric)
              return (
                <g key={`${r}-${c}`}>
                  {/* Footing */}
                  {footingShape === 'round' ? (
                    <circle cx={x} cy={y} r={Math.min(r2, 22)} fill="none" stroke="#0f766e" strokeWidth="3" />
                  ) : (
                    <rect x={x - Math.min(r2, 20)} y={y - Math.min(r2, 20)} width={Math.min(r2, 20) * 2} height={Math.min(r2, 20) * 2} fill="none" stroke="#0f766e" strokeWidth="3" />
                  )}
                  {/* Post */}
                  <circle cx={x} cy={y} r="4.5" fill="#0f172a" className="dark:fill-slate-100" />
                </g>
              );
            })
          )}

          <text x="270" y="50" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="600">
            {displayLength} {dimUnit} × {displayWidth} {dimUnit} {txt.deckLabel} · {totalPosts} {txt.postsLabel}
          </text>
        </svg>
      </div>

      {/* Diagnostic badges */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-lg border border-slate-200/80 bg-white/70 p-2.5 text-center dark:border-slate-800 dark:bg-slate-900/70">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-300">{txt.loadPerPost}</span>
          <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
            {loadPerPostLbs.toLocaleString()} <span className="text-xs font-normal text-slate-500">{isMetric ? 'kg' : 'lbs'}</span>
          </p>
        </div>
        <div className="rounded-lg border border-slate-200/80 bg-white/70 p-2.5 text-center dark:border-slate-800 dark:bg-slate-900/70">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-300">{txt.footingSize}</span>
          <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">{footingSize}</p>
        </div>
        <div className="rounded-lg border border-slate-200/80 bg-white/70 p-2.5 text-center dark:border-slate-800 dark:bg-slate-900/70">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-300">{txt.sonotube}</span>
          <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
            {isMetric ? `${recommendedSonotubeDiameterIn} cm dia` : `${recommendedSonotubeDiameterIn}" dia`}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200/80 bg-white/70 p-2.5 text-center dark:border-slate-800 dark:bg-slate-900/70">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-300">{txt.concrete}</span>
          <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
            {totalConcreteCuYd} <span className="text-xs font-normal text-slate-500">{isMetric ? 'm³' : 'cu yd'}</span>
          </p>
        </div>
      </div>

      {/* Note banner */}
      <div className="mt-3 rounded-lg border border-slate-200 bg-slate-100/80 p-3 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-semibold text-slate-900 dark:text-slate-100">
            🪨 {txt.soilBearing}: <strong className="text-slate-900 dark:text-white">{soilBearingPsf.toLocaleString()} {isMetric ? 'kPa' : 'psf'}</strong> · {txt.tributary}: <strong className="text-slate-900 dark:text-white">{tributaryAreaPerPostSqFt} {isMetric ? 'm²/post' : 'sq ft/post'}</strong>
          </span>
        </div>
        {codeNote && <p className="mt-1.5 text-[10px] text-slate-600 dark:text-slate-300">{codeNote}</p>}
      </div>
    </div>
  );
}
