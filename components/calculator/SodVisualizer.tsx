'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getLocalizedTool } from '@/lib/i18n/toolTranslations';

interface SodVisualizerProps {
  shape: string;
  length: number;
  width: number;
  diameter: number;
  height: number;
  base1: number;
  base2: number;
  length2: number;
  width2: number;
  quantity: number;
  waste: number;
  rollCount: number;
  palletCount: number;
  sodType?: string;
  units: 'imperial' | 'metric';
}

export function SodVisualizer({
  shape,
  length,
  width,
  diameter,
  height,
  base1,
  base2,
  length2,
  width2,
  quantity,
  waste,
  rollCount,
  palletCount,
  sodType,
  units,
}: SodVisualizerProps) {
  const { locale } = useLanguage();
  const localized = getLocalizedTool('sod-calculator', locale);
  const unitLabel = units === 'imperial' ? 'ft' : 'm';

  const displayLength = Number(length) || 15;
  const displayWidth = Number(width) || 12;
  const displayDiameter = Number(diameter) || 14;
  const displayHeight = Number(height) || 10;
  const displayBase1 = Number(base1) || 16;
  const displayBase2 = Number(base2) || 10;
  const displayLength2 = Number(length2) || 8;
  const displayWidth2 = Number(width2) || 6;
  const displayRolls = Number(rollCount) || 15;
  const displayPallets = Number(palletCount) || 1;

  const currentSodLabel = (sodType && localized?.options?.sodType?.[sodType]) || sodType || 'Turf';

  const scaleFactor = 8;

  return (
    <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {localized?.name || 'Sod Calculator'}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {currentSodLabel}
        </span>
      </div>

      <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-lg bg-white p-2 shadow-inner dark:bg-slate-950">
        <svg viewBox="0 0 500 280" className="h-full w-full select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grassPattern" width="8" height="8" patternUnits="userSpaceOnUse">
              <rect width="8" height="8" fill="#4ade80" />
              <line x1="2" y1="6" x2="2" y2="2" stroke="#22c55e" strokeWidth="0.8" />
              <line x1="5" y1="6" x2="5" y2="3" stroke="#16a34a" strokeWidth="0.6" />
              <line x1="7" y1="6" x2="7" y2="4" stroke="#22c55e" strokeWidth="0.7" />
            </pattern>
            <pattern id="rollPattern" width="24" height="12" patternUnits="userSpaceOnUse">
              <rect width="24" height="12" fill="#4ade80" stroke="#16a34a" strokeWidth="0.5" />
              <line x1="0" y1="6" x2="24" y2="6" stroke="#22c55e" strokeWidth="0.3" />
              <line x1="12" y1="0" x2="12" y2="12" stroke="#16a34a" strokeWidth="0.3" />
            </pattern>
          </defs>

          {/* Sky background hint */}
          <rect x="0" y="0" width="500" height="40" fill="transparent" />

          {/* Rectangle Shape */}
          {shape === 'rectangle' && (
            <g>
              <rect
                x={250 - (displayLength * scaleFactor) / 2}
                y={140 - (displayWidth * scaleFactor) / 2}
                width={displayLength * scaleFactor}
                height={displayWidth * scaleFactor}
                fill="url(#grassPattern)"
                stroke="#15803d"
                strokeWidth="2"
                rx="3"
              />
              {/* Roll grid overlay */}
              {Array.from({ length: Math.min(6, Math.ceil(displayLength / 3)) }).map((_, i) => (
                <line
                  key={`vl-${i}`}
                  x1={250 - (displayLength * scaleFactor) / 2 + i * ((displayLength * scaleFactor) / Math.min(6, Math.ceil(displayLength / 3)))}
                  y1={140 - (displayWidth * scaleFactor) / 2}
                  x2={250 - (displayLength * scaleFactor) / 2 + i * ((displayLength * scaleFactor) / Math.min(6, Math.ceil(displayLength / 3)))}
                  y2={140 + (displayWidth * scaleFactor) / 2}
                  stroke="#15803d"
                  strokeWidth="0.5"
                  opacity="0.4"
                />
              ))}
              {/* Dimensions */}
              <line x1={250 - (displayLength * scaleFactor) / 2} y1={155 - (displayWidth * scaleFactor) / 2} x2={250 + (displayLength * scaleFactor) / 2} y2={155 - (displayWidth * scaleFactor) / 2} stroke="#ef4444" strokeWidth="1.5" />
              <text x="250" y={148 - (displayWidth * scaleFactor) / 2} textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[10px] font-bold">
                {displayLength} {unitLabel}
              </text>
              <line x1={240 - (displayLength * scaleFactor) / 2} y1={140 - (displayWidth * scaleFactor) / 2} x2={240 - (displayLength * scaleFactor) / 2} y2={140 + (displayWidth * scaleFactor) / 2} stroke="#10b981" strokeWidth="1.5" />
              <text x={238 - (displayLength * scaleFactor) / 2} y="145" textAnchor="end" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-bold">
                {displayWidth} {unitLabel}
              </text>
            </g>
          )}

          {/* Circle Shape */}
          {shape === 'circle' && (
            <g>
              <circle
                cx="250"
                cy="140"
                r={(displayDiameter * scaleFactor) / 2}
                fill="url(#grassPattern)"
                stroke="#15803d"
                strokeWidth="2"
              />
              {/* Diameter line */}
              <line x1={250 - (displayDiameter * scaleFactor) / 2} y1="140" x2={250 + (displayDiameter * scaleFactor) / 2} y2="140" stroke="#ef4444" strokeWidth="1.5" />
              <text x="250" y="130" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[10px] font-bold">
                {displayDiameter} {unitLabel}
              </text>
              <circle cx="250" cy="140" r="3" fill="#15803d" />
            </g>
          )}

          {/* Triangle Shape */}
          {shape === 'triangle' && (
            <g>
              <polygon
                points={`250,${140 - (displayHeight * scaleFactor) / 2} ${250 - (displayLength * scaleFactor) / 2},${140 + (displayHeight * scaleFactor) / 2} ${250 + (displayLength * scaleFactor) / 2},${140 + (displayHeight * scaleFactor) / 2}`}
                fill="url(#grassPattern)"
                stroke="#15803d"
                strokeWidth="2"
              />
              <text x="250" y={160 + (displayHeight * scaleFactor) / 2} textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[10px] font-bold">
                {displayLength} {unitLabel}
              </text>
            </g>
          )}

          {/* Trapezoid Shape */}
          {shape === 'trapezoid' && (
            <g>
              <polygon
                points={`${250 - (displayBase2 * scaleFactor) / 2},${140 + (displayHeight * scaleFactor) / 2} ${250 + (displayBase2 * scaleFactor) / 2},${140 + (displayHeight * scaleFactor) / 2} ${250 + (displayBase1 * scaleFactor) / 2},${140 - (displayHeight * scaleFactor) / 2} ${250 - (displayBase1 * scaleFactor) / 2},${140 - (displayHeight * scaleFactor) / 2}`}
                fill="url(#grassPattern)"
                stroke="#15803d"
                strokeWidth="2"
              />
              <text x="250" y={135 - (displayHeight * scaleFactor) / 2} textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[8px] font-bold">
                Base 1: {displayBase1}
              </text>
              <text x="250" y={160 + (displayHeight * scaleFactor) / 2} textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[8px] font-bold">
                Base 2: {displayBase2}
              </text>
            </g>
          )}

          {/* L-Shape */}
          {shape === 'l-shape' && (
            <g>
              <polygon
                points={`${250 - (displayLength * scaleFactor) / 2},${140 - (displayWidth * scaleFactor) / 2} ${250 + (displayLength * scaleFactor) / 2},${140 - (displayWidth * scaleFactor) / 2} ${250 + (displayLength * scaleFactor) / 2},${140 - (displayWidth * scaleFactor) / 2 + displayWidth2 * scaleFactor} ${250 - (displayLength * scaleFactor) / 2 + displayLength2 * scaleFactor},${140 - (displayWidth * scaleFactor) / 2 + displayWidth2 * scaleFactor} ${250 - (displayLength * scaleFactor) / 2 + displayLength2 * scaleFactor},${140 + (displayWidth * scaleFactor) / 2} ${250 - (displayLength * scaleFactor) / 2},${140 + (displayWidth * scaleFactor) / 2}`}
                fill="url(#grassPattern)"
                stroke="#15803d"
                strokeWidth="2"
              />
            </g>
          )}

          {/* Irregular Shape */}
          {shape === 'irregular' && (
            <g>
              <ellipse cx="250" cy="140" rx="120" ry="80" fill="url(#grassPattern)" stroke="#15803d" strokeWidth="2" />
              <text x="250" y="145" textAnchor="middle" className="fill-green-800 text-[10px] font-bold">
                Irregular Area
              </text>
            </g>
          )}

          {/* Sod Roll Detail (bottom right) */}
          <g>
            <rect x="350" y="40" width="120" height="50" rx="4" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5" />
            <text x="410" y="55" textAnchor="middle" className="fill-green-700 text-[8px] font-bold">Sod Roll (10 sq ft)</text>
            <rect x="365" y="60" width="90" height="20" fill="url(#rollPattern)" stroke="#16a34a" strokeWidth="1" rx="2" />
            <line x1="385" y1="60" x2="385" y2="80" stroke="#15803d" strokeWidth="0.5" opacity="0.5" />
            <line x1="405" y1="60" x2="405" y2="80" stroke="#15803d" strokeWidth="0.5" opacity="0.5" />
            <line x1="425" y1="60" x2="425" y2="80" stroke="#15803d" strokeWidth="0.5" opacity="0.5" />
            <line x1="445" y1="60" x2="445" y2="80" stroke="#15803d" strokeWidth="0.5" opacity="0.5" />
          </g>

          {/* Stats Panel */}
          <rect x="30" y="230" width="440" height="35" rx="4" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
          <text x="50" y="245" className="fill-green-700 text-[8px] font-semibold">Rolls: {displayRolls}</text>
          <text x="50" y="257" className="fill-green-700 text-[8px] font-semibold">Pallets: {displayPallets}</text>
          <text x="150" y="245" className="fill-green-700 text-[8px] font-semibold">Waste: {waste}%</text>
          <text x="150" y="257" className="fill-green-700 text-[8px] font-semibold">Qty: {quantity} area{quantity > 1 ? 's' : ''}</text>
          <text x="280" y="245" className="fill-green-700 text-[8px] font-semibold">Type: {currentSodLabel}</text>
          <text x="280" y="257" className="fill-green-700 text-[8px] font-semibold">1 Roll = 10 sq ft | 1 Pallet = 45 rolls</text>
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-green-400 border border-green-600" /> Sod Coverage
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-red-400" /> Dimensions
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-green-200 border border-green-400" /> Roll Grid
        </span>
      </div>
    </div>
  );
}
