'use client';

import React from 'react';

interface SprayFoamVisualizerProps {
  application?: string;
  foamType?: string;
  thickness?: number;
  achievedRValue?: number;
  boardFeet?: number;
  drumSets?: number;
  diyKits?: number;
  isVaporRetarder?: boolean;
  vaporBarrierClass?: string;
  hasThermalBarrier?: boolean;
  units?: 'imperial' | 'metric';
}

export function SprayFoamVisualizer({
  application = 'roof-deck-attic',
  foamType = 'closed-cell-2lb',
  thickness = 3.5,
  achievedRValue = 23.5,
  boardFeet = 3500,
  drumSets = 1,
  diyKits = 6,
  isVaporRetarder = true,
  vaporBarrierClass = 'Class II Vapor Retarder (≤ 1.0 perm)',
  hasThermalBarrier = false,
  units = 'imperial',
}: SprayFoamVisualizerProps) {
  const isClosedCell = foamType === 'closed-cell-2lb';
  const isMetric = units === 'metric';

  // Normalize foam fill depth inside standard visual cavity (max 8" visual depth)
  const maxVisualInches = 8.0;
  const clampedDepth = Math.min(Math.max(thickness || 1, 0.5), maxVisualInches);
  const fillHeight = Math.round((clampedDepth / maxVisualInches) * 160);

  // App readable label
  const appLabels: Record<string, string> = {
    'roof-deck-attic': 'Attic Roof Deck / Rafters',
    'wall-2x4': 'Exterior 2×4 Wood Stud Wall',
    'wall-2x6': 'Exterior 2×6 Wood Stud Wall',
    'crawlspace-subfloor': 'Crawlspace / Floor Joists',
    'rim-joist': 'Rim Joist / Band Joist',
    'basement-wall': 'Basement Concrete Wall',
    'pole-barn-metal': 'Pole Barn / Metal Building',
    'custom': 'Custom Framing Assembly',
  };

  const currentAppLabel = appLabels[application] || 'Framing Assembly';

  return (
    <div className="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
            🧪
          </span>
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            {currentAppLabel}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
            isClosedCell 
              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300' 
              : 'bg-sky-100 text-sky-800 dark:bg-sky-950/70 dark:text-sky-300'
          }`}>
            <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
            {isClosedCell ? 'Closed-Cell 2.0 lb (R-6.7/in)' : 'Open-Cell 0.5 lb (R-3.7/in)'}
          </span>
        </div>
      </div>

      {/* Interactive SVG Diagram */}
      <div className="mt-4 flex justify-center">
        <svg
          viewBox="0 0 540 260"
          className="h-auto w-full max-w-lg select-none"
          aria-label="Spray foam insulation depth and assembly visualizer"
        >
          <defs>
            {/* Wood Stud Texture Gradient */}
            <linearGradient id="studWood" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="25%" stopColor="#b45309" />
              <stop offset="50%" stopColor="#92400e" />
              <stop offset="75%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>

            {/* Closed Cell Polyurethane Dense Gradient */}
            <linearGradient id="closedCellGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="50%" stopColor="#fde68a" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>

            {/* Open Cell Polyurethane Fluffy Gradient */}
            <linearGradient id="openCellGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f0f9ff" />
              <stop offset="50%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>

            {/* Thermal Barrier Fire Coating Gradient */}
            <linearGradient id="firePaint" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#dc2626" stopOpacity="0.85" />
            </linearGradient>

            {/* Cellular Bubble Texture Pattern */}
            <pattern id="cellPattern" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r={isClosedCell ? '1.2' : '2.5'} fill={isClosedCell ? '#d97706' : '#0284c7'} fillOpacity={isClosedCell ? '0.2' : '0.15'} />
              <circle cx="12" cy="12" r={isClosedCell ? '0.9' : '2.0'} fill={isClosedCell ? '#b45309' : '#38bdf8'} fillOpacity={isClosedCell ? '0.25' : '0.2'} />
            </pattern>
          </defs>

          {/* Exterior Sheathing / Roof Deck Substrate */}
          <rect x="60" y="30" width="420" height="16" rx="2" fill="#94a3b8" />
          <text x="270" y="42" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
            Exterior Sheathing / Roof Decking Substrate
          </text>

          {/* Left Wood Stud / Rafter (2x4 / 2x6) */}
          <rect x="60" y="46" width="36" height="190" rx="3" fill="url(#studWood)" stroke="#78350f" strokeWidth="1.5" />
          <text x="78" y="145" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" transform="rotate(-90 78 145)">
            FRAMING STUD
          </text>

          {/* Right Wood Stud / Rafter */}
          <rect x="444" y="46" width="36" height="190" rx="3" fill="url(#studWood)" stroke="#78350f" strokeWidth="1.5" />
          <text x="462" y="145" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" transform="rotate(90 462 145)">
            FRAMING STUD
          </text>

          {/* Empty Cavity Air Background */}
          <rect x="96" y="46" width="348" height="190" fill="#f1f5f9" className="dark:fill-slate-900/60" />

          {/* Applied Spray Foam Layer */}
          <rect
            x="96"
            y={46}
            width="348"
            height={fillHeight}
            fill={isClosedCell ? 'url(#closedCellGrad)' : 'url(#openCellGrad)'}
            stroke={isClosedCell ? '#d97706' : '#0284c7'}
            strokeWidth="1.5"
          />
          <rect
            x="96"
            y={46}
            width="348"
            height={fillHeight}
            fill="url(#cellPattern)"
          />

          {/* Foam Expansion Wave Texture Lines */}
          {fillHeight > 30 && (
            <g stroke={isClosedCell ? '#b45309' : '#0369a1'} strokeWidth="1" strokeDasharray="3 3" opacity="0.4">
              <path d={`M 96 ${46 + fillHeight * 0.33} Q 270 ${46 + fillHeight * 0.38} 444 ${46 + fillHeight * 0.33}`} fill="none" />
              <path d={`M 96 ${46 + fillHeight * 0.66} Q 270 ${46 + fillHeight * 0.71} 444 ${46 + fillHeight * 0.66}`} fill="none" />
            </g>
          )}

          {/* Thermal Barrier Fire Coating Layer (DC315) */}
          {hasThermalBarrier && fillHeight > 10 && (
            <g>
              <rect x="96" y={46 + fillHeight - 5} width="348" height="5" fill="url(#firePaint)" rx="1" />
              <text x="270" y={46 + fillHeight + 12} textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">
                🔥 DC315 Intumescent Thermal Barrier Fire Coating
              </text>
            </g>
          )}

          {/* Cavity Dimension Indicators */}
          <g transform="translate(10, 0)">
            {/* Dimension arrow */}
            <line x1="45" y1="46" x2="45" y2={46 + fillHeight} stroke="#0ea5e9" strokeWidth="2" />
            <polygon points={`41,50 45,46 49,50`} fill="#0ea5e9" />
            <polygon points={`41,${42 + fillHeight} 45,${46 + fillHeight} 49,${42 + fillHeight}`} fill="#0ea5e9" />

            {/* Depth label */}
            <text x="38" y={46 + fillHeight / 2 + 4} textAnchor="end" fill="#0284c7" fontSize="11" fontWeight="bold">
              {isMetric ? `${Math.round(thickness * 2.54 * 10) / 10} cm` : `${thickness}"`}
            </text>
          </g>

          {/* Achieved R-Value Callout Badge */}
          <g transform={`translate(270, ${46 + fillHeight / 2})`}>
            <rect x="-65" y="-14" width="130" height="28" rx="14" fill="#0f172a" fillOpacity="0.88" />
            <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">
              R-{achievedRValue} Rating
            </text>
          </g>
        </svg>
      </div>

      {/* Diagnostic Badges & Chemical Yield Info */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-lg border border-slate-200/80 bg-white/70 p-2.5 text-center dark:border-slate-800 dark:bg-slate-900/70">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Total Volume</span>
          <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
            {boardFeet?.toLocaleString()} <span className="text-xs font-normal text-slate-500">bd ft</span>
          </p>
        </div>

        <div className="rounded-lg border border-slate-200/80 bg-white/70 p-2.5 text-center dark:border-slate-800 dark:bg-slate-900/70">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">55-Gal Drum Sets</span>
          <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
            {drumSets} <span className="text-xs font-normal text-slate-500">{drumSets === 1 ? 'set' : 'sets'}</span>
          </p>
        </div>

        <div className="rounded-lg border border-slate-200/80 bg-white/70 p-2.5 text-center dark:border-slate-800 dark:bg-slate-900/70">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">600 bd ft DIY Kits</span>
          <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
            {diyKits} <span className="text-xs font-normal text-slate-500">{diyKits === 1 ? 'kit' : 'kits'}</span>
          </p>
        </div>

        <div className={`rounded-lg border p-2.5 text-center transition-colors ${
          isVaporRetarder
            ? 'border-emerald-300 bg-emerald-50/80 dark:border-emerald-800 dark:bg-emerald-950/40'
            : 'border-slate-200 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-900/70'
        }`}>
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Vapor Retarder</span>
          <p className={`mt-0.5 text-xs font-bold ${
            isVaporRetarder ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-700 dark:text-slate-300'
          }`}>
            {isVaporRetarder ? '✓ Class II Active' : 'Permeable'}
          </p>
        </div>
      </div>
    </div>
  );
}
