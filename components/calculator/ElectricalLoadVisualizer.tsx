'use client';

import React from 'react';

interface ElectricalLoadVisualizerProps {
  squareFootage?: number;
  calculatedAmperes?: number;
  recommendedServiceAmps?: number;
  totalCalculatedLoadVA?: number;
  totalCalculatedLoadKW?: number;
  panelUtilizationPercent?: number;
  spareCapacityAmperes?: number;
  servicePanelStatus?: 'adequate' | 'near-capacity' | 'upgrade-required';
  serviceRecommendation?: string;
  governingHvacType?: 'cooling' | 'heating' | 'none';
  copperServiceConductor?: string;
  aluminumServiceConductor?: string;
  evChargerAmps?: string;
  units?: 'imperial' | 'metric';
}

export function ElectricalLoadVisualizer({
  squareFootage = 2000,
  calculatedAmperes = 138.5,
  recommendedServiceAmps = 200,
  totalCalculatedLoadVA = 33240,
  totalCalculatedLoadKW = 33.24,
  panelUtilizationPercent = 69.3,
  spareCapacityAmperes = 61.5,
  servicePanelStatus = 'adequate',
  serviceRecommendation = '200A Main Service (120/240V, 1-Phase)',
  governingHvacType = 'heating',
  copperServiceConductor = '#2/0 AWG Cu (75°C)',
  aluminumServiceConductor = '#4/0 AWG Al (75°C)',
  evChargerAmps = '48a-115kw',
  units = 'imperial',
}: ElectricalLoadVisualizerProps) {
  const isOverloaded = panelUtilizationPercent > 100;
  // Three-state threshold: warning at 80% (NEC continuous-load limit), hard overload above 100%.
  const isAtOrOverEighty = panelUtilizationPercent >= 80 && !isOverloaded;

  // Gauge needle calculation (clamped from 0% to 120% mapped across 180-degree arc)
  const clampedPercent = Math.min(Math.max(panelUtilizationPercent, 0), 120);
  // -90 deg (0%) to +90 deg (100%), with 120% at +126 deg
  const needleAngle = -90 + (clampedPercent / 100) * 180;

  // Color theme for panel status.
  // Tier 1: 70–79% → "Approaching 80%" (early warning)
  // Tier 2: 80–100% → "At/Over 80% Continuous Limit" (NEC continuous-load threshold reached)
  // Tier 3: >100% → "Service Upgrade Required"
  const isApproachingEighty = panelUtilizationPercent >= 70 && !isAtOrOverEighty && !isOverloaded;

  let statusTheme = {
    badgeBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
    dotColor: '#10b981',
    statusText: 'Adequate Service Capacity',
    dialColor: '#10b981',
  };

  if (isOverloaded) {
    statusTheme = {
      badgeBg: 'bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300 border-rose-300 dark:border-rose-800',
      dotColor: '#ef4444',
      statusText: '⚠️ Service Upgrade Required',
      dialColor: '#ef4444',
    };
  } else if (isAtOrOverEighty) {
    statusTheme = {
      badgeBg: 'bg-orange-100 text-orange-800 dark:bg-orange-950/70 dark:text-orange-300 border-orange-300 dark:border-orange-800',
      dotColor: '#ea580c',
      statusText: '⚠️ At/Over 80% Continuous Limit',
      dialColor: '#ea580c',
    };
  } else if (isApproachingEighty) {
    statusTheme = {
      badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-300 dark:border-amber-800',
      dotColor: '#f59e0b',
      statusText: 'Approaching 80% Continuous Limit',
      dialColor: '#f59e0b',
    };
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
            ⚡
          </span>
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            Electrical Service Panel & Load Monitor
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${statusTheme.badgeBg}`}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: statusTheme.dotColor }} />
            {statusTheme.statusText}
          </span>
        </div>
      </div>

      {/* Interactive SVG Load Panel & Meter */}
      <div className="mt-4 flex justify-center">
        <svg
          viewBox="0 0 540 260"
          className="h-auto w-full max-w-lg select-none"
          aria-label="Electrical service panel load and amperage meter diagram"
        >
          <defs>
            {/* Panel Enclosure Metal Gradient */}
            <linearGradient id="panelEnclosure" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            {/* Copper Bus Bar Gradient */}
            <linearGradient id="copperBus" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>

            {/* Gauge Dial Arc Gradient */}
            <linearGradient id="dialGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="65%" stopColor="#3b82f6" />
              <stop offset="80%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>

          {/* ── Left: Service Panel Breaker Box Graphic ─────────── */}
          <rect x="25" y="15" width="170" height="230" rx="8" fill="url(#panelEnclosure)" stroke="#475569" strokeWidth="2" />

          {/* Panel Deadfront Bevel */}
          <rect x="35" y="25" width="150" height="210" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />

          {/* Main 2-Pole Disconnect Breaker */}
          <rect x="70" y="35" width="80" height="40" rx="3" fill="#090d16" stroke="#475569" strokeWidth="1.5" />
          <rect x="95" y="42" width="30" height="15" rx="2" fill="#ef4444" />
          <text x="110" y="53" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">ON</text>
          <text x="110" y="70" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold">
            {recommendedServiceAmps}A MAIN
          </text>

          {/* Dual Copper Bus Bars */}
          <rect x="92" y="85" width="12" height="135" fill="url(#copperBus)" rx="2" />
          <rect x="116" y="85" width="12" height="135" fill="url(#copperBus)" rx="2" />

          {/* Branch Circuit Breaker Rows (Left & Right Poles) */}
          {[0, 1, 2, 3, 4].map((row) => (
            <g key={row} transform={`translate(0, ${row * 24})`}>
              {/* Left Breaker */}
              <rect x="45" y="92" width="42" height="18" rx="2" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <circle cx="52" cy="101" r="3" fill={row === 0 ? '#38bdf8' : row === 1 ? '#a855f7' : row === 2 ? '#34d399' : '#94a3b8'} />
              <rect x="62" y="98" width="18" height="6" rx="1" fill="#475569" />

              {/* Right Breaker */}
              <rect x="133" y="92" width="42" height="18" rx="2" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <circle cx="168" cy="101" r="3" fill={row === 0 ? '#fbbf24' : row === 1 ? '#f87171' : row === 2 ? '#38bdf8' : '#94a3b8'} />
              <rect x="140" y="98" width="18" height="6" rx="1" fill="#475569" />
            </g>
          ))}

          {/* ── Right: Semicircular Amperage Dial Gauge ───────────── */}
          <g transform="translate(365, 125)">
            {/* Outer Gauge Bezel */}
            <circle cx="0" cy="0" r="105" fill="#f8fafc" className="dark:fill-slate-900" stroke="#cbd5e1" strokeWidth="1" />

            {/* Gauge Background Track Arc (180 degrees) */}
            <path
              d="M -80 0 A 80 80 0 0 1 80 0"
              fill="none"
              stroke="#e2e8f0"
              className="dark:stroke-slate-800"
              strokeWidth="16"
              strokeLinecap="round"
            />

            {/* Colored Gauge Indicator Arc */}
            <path
              d="M -80 0 A 80 80 0 0 1 80 0"
              fill="none"
              stroke="url(#dialGradient)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeDasharray="251.3"
              strokeDashoffset={251.3 * (1 - Math.min(panelUtilizationPercent, 100) / 100)}
            />

            {/* 80% Continuous Safe Threshold Tick Mark */}
            <g transform="rotate(54)">
              <line x1="0" y1="-70" x2="0" y2="-90" stroke="#f59e0b" strokeWidth="2.5" />
              <text x="0" y="-94" textAnchor="middle" fill="#d97706" fontSize="7.5" fontWeight="bold">80%</text>
            </g>

            {/* 0A and MaxA Labels */}
            <text x="-78" y="20" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600">0A</text>
            <text x="78" y="20" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600">{recommendedServiceAmps}A</text>

            {/* Needle */}
            <g transform={`rotate(${needleAngle})`}>
              <polygon points="-3,10 0,-76 3,10" fill="#0f172a" className="dark:fill-slate-100" />
              <circle cx="0" cy="0" r="8" fill="#0f172a" className="dark:fill-slate-100" />
              <circle cx="0" cy="0" r="4" fill="#38bdf8" />
            </g>

            {/* Digital Amps Readout Callout */}
            <rect x="-65" y="32" width="130" height="42" rx="8" fill="#0f172a" fillOpacity="0.95" />
            <text x="0" y="52" textAnchor="middle" fill="#38bdf8" fontSize="16" fontWeight="bold">
              {calculatedAmperes} A
            </text>
            <text x="0" y="67" textAnchor="middle" fill="#94a3b8" fontSize="8.5">
              {totalCalculatedLoadKW} kW ({panelUtilizationPercent}% Load)
            </text>
          </g>
        </svg>
      </div>

      {/* Diagnostic Badges */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-lg border border-slate-200/80 bg-white/70 p-2.5 text-center dark:border-slate-800 dark:bg-slate-900/70">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Total Demand</span>
          <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
            {totalCalculatedLoadVA.toLocaleString()} <span className="text-xs font-normal text-slate-500">VA</span>
          </p>
        </div>

        <div className="rounded-lg border border-slate-200/80 bg-white/70 p-2.5 text-center dark:border-slate-800 dark:bg-slate-900/70">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Service Current</span>
          <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
            {calculatedAmperes} <span className="text-xs font-normal text-slate-500">Amps</span>
          </p>
        </div>

        <div className="rounded-lg border border-slate-200/80 bg-white/70 p-2.5 text-center dark:border-slate-800 dark:bg-slate-900/70">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Service Size</span>
          <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
            {recommendedServiceAmps} <span className="text-xs font-normal text-slate-500">Amps</span>
          </p>
        </div>

        <div className={`rounded-lg border p-2.5 text-center ${
          isOverloaded 
            ? 'border-rose-300 bg-rose-50/80 dark:border-rose-800 dark:bg-rose-950/40' 
            : 'border-emerald-300 bg-emerald-50/80 dark:border-emerald-800 dark:bg-emerald-950/40'
        }`}>
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Spare Capacity</span>
          <p className={`mt-0.5 text-sm font-bold ${isOverloaded ? 'text-rose-700 dark:text-rose-300' : 'text-emerald-700 dark:text-emerald-300'}`}>
            {isOverloaded ? `-${Math.abs(spareCapacityAmperes)} A` : `+${spareCapacityAmperes} A`}
          </p>
        </div>
      </div>

      {/* Wire & Conduit Callout Banner */}
      <div className="mt-3 rounded-lg border border-slate-200 bg-slate-100/80 p-3 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-semibold text-slate-900 dark:text-slate-100">
            🔌 NEC 310.12 Service Entrance Conductors:
          </span>
          <span className="text-slate-600 dark:text-slate-400">
            Cu: <strong className="text-slate-900 dark:text-white">{copperServiceConductor}</strong> | Al: <strong className="text-slate-900 dark:text-white">{aluminumServiceConductor}</strong>
          </span>
        </div>
        <div className="mt-1.5 text-[10px] text-slate-500 dark:text-slate-400">
          Grounding Electrode Conductor (GEC) sized per NEC 250.66 — see results table below.
        </div>
      </div>
    </div>
  );
}
