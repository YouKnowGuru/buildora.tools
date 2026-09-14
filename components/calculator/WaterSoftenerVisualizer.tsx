'use client';

import React from 'react';

interface WaterSoftenerVisualizerProps {
  recommendedGrainSize?: number;
  recommendedResinCuFt?: number;
  compensatedHardnessGPG?: number;
  rawHardnessGPG?: number;
  hardnessBadge?: 'soft' | 'moderate' | 'hard' | 'very-hard' | 'extreme';
  hardnessClassification?: string;
  saltLbsPerYear?: number;
  regenFrequencyPerYear?: number;
  dailyWaterUsageGPD?: number;
  targetGrainCapacity?: number;
  peakFlowGPM?: number;
  units?: 'imperial' | 'metric';
}

const BADGE_COLORS: Record<string, { bg: string; text: string; stroke: string; fill: string }> = {
  soft:      { bg: 'bg-sky-50 dark:bg-sky-950/40',     text: 'text-sky-700 dark:text-sky-300',     stroke: '#0284c7', fill: '#e0f2fe' },
  moderate:  { bg: 'bg-emerald-50 dark:bg-emerald-950/40', text: 'text-emerald-700 dark:text-emerald-300', stroke: '#059669', fill: '#d1fae5' },
  hard:      { bg: 'bg-amber-50 dark:bg-amber-950/40', text: 'text-amber-700 dark:text-amber-300', stroke: '#d97706', fill: '#fef3c7' },
  'very-hard': { bg: 'bg-orange-50 dark:bg-orange-950/40', text: 'text-orange-700 dark:text-orange-300', stroke: '#ea580c', fill: '#ffedd5' },
  extreme:   { bg: 'bg-red-50 dark:bg-red-950/40',    text: 'text-red-700 dark:text-red-300',     stroke: '#dc2626', fill: '#fee2e2' },
};

const GRAIN_TIER_LABEL: Record<number, string> = {
  24000: '24K',
  32000: '32K',
  40000: '40K',
  48000: '48K',
  64000: '64K',
  80000: '80K',
  96000: '96K',
};

export function WaterSoftenerVisualizer({
  recommendedGrainSize = 32000,
  recommendedResinCuFt = 1.0,
  compensatedHardnessGPG = 25,
  rawHardnessGPG = 25,
  hardnessBadge = 'hard',
  hardnessClassification = 'Hard',
  saltLbsPerYear = 300,
  regenFrequencyPerYear = 52,
  dailyWaterUsageGPD = 300,
  targetGrainCapacity = 25200,
  peakFlowGPM = 10,
  units = 'imperial',
}: WaterSoftenerVisualizerProps) {
  const isMetric = units === 'metric';
  const badge = BADGE_COLORS[hardnessBadge] ?? BADGE_COLORS['hard']!;

  // Salt bag fill level 0–100% based on lbs per year (max reference ~1200 lbs/yr)
  const saltFillPct = Math.min(100, Math.round((saltLbsPerYear / 800) * 100));
  const saltFillY   = 152 - Math.round(saltFillPct * 0.8); // within brine tank rect
  const saltFillH   = Math.round(saltFillPct * 0.8);

  // Hardness fill 0–100% based on compensated GPG (scale 0–50 GPG)
  const hardnessFillPct = Math.min(100, Math.round((compensatedHardnessGPG / 50) * 100));

  // Grain tier fill: which tier is selected (0–6)
  const tiers = [24000, 32000, 40000, 48000, 64000, 80000, 96000];
  const tierIndex = tiers.indexOf(recommendedGrainSize);
  const effectiveTierIndex = tierIndex >= 0 ? tierIndex : 6;

  return (
    <div className="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
            💧
          </span>
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            System Sizing Diagram
          </h3>
        </div>
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge.bg} ${badge.text}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {hardnessClassification.split(' (')[0]}
        </span>
      </div>

      {/* SVG Diagram */}
      <div className="mt-4 flex justify-center">
        <svg
          viewBox="0 0 560 280"
          className="h-auto w-full max-w-xl select-none"
          aria-label="Water softener system diagram showing mineral tank and brine tank"
        >
          <defs>
            {/* Resin bead pattern */}
            <pattern id="resinBeads" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="2" fill="#60a5fa" fillOpacity="0.35" />
              <circle cx="8" cy="8" r="1.5" fill="#3b82f6" fillOpacity="0.3" />
            </pattern>

            {/* Hard water gradient */}
            <linearGradient id="hardWaterGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            {/* Soft water gradient */}
            <linearGradient id="softWaterGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a7f3d0" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>

            {/* Salt gradient */}
            <linearGradient id="saltGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef9c3" />
              <stop offset="100%" stopColor="#fde047" />
            </linearGradient>

            {/* Tank body gradient */}
            <linearGradient id="tankBodyGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="40%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>

            {/* Control valve gradient */}
            <linearGradient id="valveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>

          {/* ── MINERAL TANK (left) ──────────────────────────────── */}
          {/* Tank body */}
          <rect x="60" y="50" width="130" height="190" rx="14" fill="url(#tankBodyGrad)" stroke="#94a3b8" strokeWidth="2" />

          {/* Resin bed fill (ion exchange zone) */}
          <rect x="68" y={230 - Math.round(160 * 0.70)} width="114" height={Math.round(160 * 0.70)} rx="0 0 10 10" fill="url(#resinBeads)" />
          <rect x="68" y={230 - Math.round(160 * 0.70)} width="114" height={Math.round(160 * 0.70)} fill="#3b82f6" fillOpacity="0.08" />

          {/* Hard water in-flow (top) */}
          <rect x="105" y="30" width="20" height="25" rx="4" fill="url(#hardWaterGrad)" stroke="#1d4ed8" strokeWidth="1.5" />
          <text x="125" y="23" textAnchor="start" fill="#1d4ed8" fontSize="8.5" fontWeight="600">HARD IN</text>

          {/* Distribution tube */}
          <rect x="122" y="50" width="6" height="180" rx="3" fill="#64748b" />

          {/* Resin label */}
          <text x="125" y="185" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="700" transform="rotate(-90 125 185)">
            ION EXCHANGE RESIN
          </text>

          {/* Control Valve (top) */}
          <rect x="80" y="28" width="60" height="28" rx="6" fill="url(#valveGrad)" stroke="#0f172a" strokeWidth="1.5" />
          <text x="110" y="45" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="700">CONTROL VALVE</text>

          {/* Soft water out-flow (bottom) */}
          <rect x="105" y="240" width="20" height="22" rx="4" fill="url(#softWaterGrad)" stroke="#059669" strokeWidth="1.5" />
          <text x="126" y="268" textAnchor="start" fill="#059669" fontSize="8.5" fontWeight="600">SOFT OUT</text>

          {/* Grain capacity label */}
          <rect x="72" y="88" width="86" height="30" rx="8" fill="#0f172a" fillOpacity="0.82" />
          <text x="115" y="107" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="800">
            {recommendedGrainSize >= 96000 && recommendedGrainSize > tiers[6]! ? 'Dual Tank' : `${(recommendedGrainSize / 1000).toFixed(0)}K Grains`}
          </text>

          {/* Resin cu ft badge */}
          <rect x="72" y="124" width="86" height="20" rx="6" fill="#1e3a5f" fillOpacity="0.8" />
          <text x="115" y="138" textAnchor="middle" fill="#93c5fd" fontSize="9.5" fontWeight="700">
            {recommendedResinCuFt} cu ft Resin
          </text>

          {/* Mineral tank label */}
          <text x="125" y="254" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="600">MINERAL TANK</text>

          {/* ── BRINE LINE ──────────────────────────────────────── */}
          <path d="M 200 180 Q 230 180 230 180 L 310 180" stroke="#94a3b8" strokeWidth="2.5" strokeDasharray="5 3" fill="none" />
          <text x="255" y="173" textAnchor="middle" fill="#64748b" fontSize="8.5" fontWeight="500">BRINE LINE</text>

          {/* Brine draw arrow */}
          <polygon points="308,176 314,180 308,184" fill="#94a3b8" />

          {/* ── BRINE TANK (right) ──────────────────────────────── */}
          {/* Tank body */}
          <rect x="314" y="90" width="110" height="150" rx="10" fill="url(#tankBodyGrad)" stroke="#94a3b8" strokeWidth="2" />

          {/* Salt fill level */}
          {saltFillH > 0 && (
            <rect x="322" y={saltFillY} width="94" height={saltFillH} rx="0 0 6 6" fill="url(#saltGrad)" opacity="0.9" />
          )}

          {/* Salt crystal texture */}
          {saltFillH > 15 && (
            <g opacity="0.5">
              <rect x="328" y={saltFillY + 4} width="8" height="8" rx="2" fill="#fef08a" />
              <rect x="342" y={saltFillY + 6} width="6" height="6" rx="1.5" fill="#fde047" />
              <rect x="356" y={saltFillY + 3} width="9" height="9" rx="2" fill="#fef9c3" />
              <rect x="370" y={saltFillY + 5} width="7" height="7" rx="1.5" fill="#fef08a" />
              <rect x="384" y={saltFillY + 4} width="8" height="8" rx="2" fill="#fde047" />
              <rect x="398" y={saltFillY + 6} width="5" height="5" rx="1" fill="#fef9c3" />
            </g>
          )}

          {/* Float valve indicator */}
          <circle cx="350" cy="105" r="7" fill="#94a3b8" stroke="#64748b" strokeWidth="1.5" />
          <line x1="350" y1="112" x2="350" y2="120" stroke="#64748b" strokeWidth="1.5" />
          <text x="363" y="109" fill="#64748b" fontSize="8" fontWeight="500">FLOAT</text>

          {/* Salt level label */}
          <text x="369" y={Math.max(saltFillY + saltFillH / 2 + 4, 145)} textAnchor="middle" fill="#854d0e" fontSize="9" fontWeight="700">
            {isMetric ? `${Math.round(saltLbsPerYear * 0.453592)} kg/yr` : `${saltLbsPerYear} lbs/yr`}
          </text>

          {/* Brine tank label */}
          <text x="369" y="255" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="600">BRINE TANK</text>

          {/* Annual salt cost badge */}
          <rect x="316" y="258" width="106" height="20" rx="5" fill="#422006" fillOpacity="0.85" />
          <text x="369" y="272" textAnchor="middle" fill="#fde68a" fontSize="8.5" fontWeight="700">
            {regenFrequencyPerYear.toFixed(0)} Regen Cycles/yr
          </text>

          {/* ── HARDNESS METER (right column) ──────────────────── */}
          {/* Meter background bar */}
          <rect x="456" y="50" width="22" height="190" rx="8" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Hardness fill */}
          <rect
            x="456"
            y={240 - Math.round(1.9 * hardnessFillPct)}
            width="22"
            height={Math.round(1.9 * hardnessFillPct)}
            rx="0 0 8 8"
            fill={badge.stroke}
            opacity="0.85"
          />
          {/* GPG label */}
          <text x="467" y="43" textAnchor="middle" fill="#475569" fontSize="8" fontWeight="600">GPG</text>
          <text x="467" y="255" textAnchor="middle" fill={badge.stroke} fontSize="10" fontWeight="800">
            {rawHardnessGPG}
          </text>
          {/* Scale ticks */}
          {[0, 7, 14, 21].map((gpg) => {
            const tickY = 240 - Math.round((gpg / 50) * 190);
            return (
              <g key={gpg}>
                <line x1="456" y1={tickY} x2="478" y2={tickY} stroke="#94a3b8" strokeWidth="0.75" />
                <text x="484" y={tickY + 3} fill="#64748b" fontSize="7">{gpg}</text>
              </g>
            );
          })}
          <text x="467" y="278" textAnchor="middle" fill="#64748b" fontSize="8">Hardness</text>

          {/* ── PIPE FLOW ARROWS ────────────────────────────────── */}
          {/* Flow direction indicators on pipes */}
          <text x="130" y="18" textAnchor="middle" fill="#1d4ed8" fontSize="9" fontWeight="500">
            {isMetric ? `${Math.round(dailyWaterUsageGPD * 3.78)} L/day` : `${dailyWaterUsageGPD} GPD`}
          </text>
        </svg>
      </div>

      {/* Info Badges */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-lg border border-slate-200/80 bg-white/70 p-2.5 text-center dark:border-slate-800 dark:bg-slate-900/70">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Softener Size</span>
          <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
            {recommendedGrainSize.toLocaleString()} <span className="text-xs font-normal text-slate-500">grains</span>
          </p>
        </div>

        <div className="rounded-lg border border-slate-200/80 bg-white/70 p-2.5 text-center dark:border-slate-800 dark:bg-slate-900/70">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Resin Volume</span>
          <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
            {recommendedResinCuFt} <span className="text-xs font-normal text-slate-500">cu ft</span>
          </p>
        </div>

        <div className={`rounded-lg border p-2.5 text-center ${badge.bg} border-current/20`}>
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Water Hardness</span>
          <p className={`mt-0.5 text-sm font-bold ${badge.text}`}>
            {compensatedHardnessGPG} <span className="text-xs font-normal">GPG</span>
          </p>
        </div>

        <div className="rounded-lg border border-slate-200/80 bg-white/70 p-2.5 text-center dark:border-slate-800 dark:bg-slate-900/70">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Peak Flow</span>
          <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
            {peakFlowGPM} <span className="text-xs font-normal text-slate-500">GPM</span>
          </p>
        </div>
      </div>

      {/* Grain Tier Progress */}
      <div className="mt-3 space-y-1.5">
        <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Grain Capacity Tier</p>
        <div className="flex gap-1">
          {tiers.map((t, i) => (
            <div
              key={t}
              className={`flex-1 rounded text-center py-1.5 text-[10px] font-bold transition-all ${
                i === effectiveTierIndex
                  ? 'bg-blue-600 text-white shadow-sm'
                  : i < effectiveTierIndex
                  ? 'bg-blue-200 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300'
                  : 'bg-slate-100 text-slate-400 dark:bg-slate-800/50'
              }`}
            >
              {GRAIN_TIER_LABEL[t]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
