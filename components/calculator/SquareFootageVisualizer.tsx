'use client';

import React from 'react';

interface SquareFootageVisualizerProps {
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
  units: 'imperial' | 'metric';
}

export function SquareFootageVisualizer({
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
  units,
}: SquareFootageVisualizerProps) {
  const unitLabel = units === 'imperial' ? 'ft' : 'm';

  const displayLength = Number(length) || 15;
  const displayWidth = Number(width) || 12;
  const displayDiameter = Number(diameter) || 14;
  const displayHeight = Number(height) || 10;
  const displayBase1 = Number(base1) || 16;
  const displayBase2 = Number(base2) || 10;
  const displayLength2 = Number(length2) || 8;
  const displayWidth2 = Number(width2) || 6;

  const scaleFactor = 8;

  return (
    <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">
          Area Shape Visualizer ({quantity} area{quantity > 1 ? 's' : ''})
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {shape.charAt(0).toUpperCase() + shape.slice(1).replace('-', ' ')}
        </span>
      </div>

      <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-lg bg-white p-2 shadow-inner dark:bg-slate-950">
        <svg viewBox="0 0 500 280" className="h-full w-full select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="areaPattern" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect width="12" height="12" fill="#dbeafe" />
              <line x1="0" y1="12" x2="12" y2="0" stroke="#93c5fd" strokeWidth="0.5" />
            </pattern>
          </defs>

          {/* Grid Background */}
          <rect width="500" height="280" fill="transparent" />

          {/* Rectangle Shape */}
          {shape === 'rectangle' && (
            <g>
              <rect
                x={250 - (displayLength * scaleFactor) / 2}
                y={140 - (displayWidth * scaleFactor) / 2}
                width={displayLength * scaleFactor}
                height={displayWidth * scaleFactor}
                fill="url(#areaPattern)"
                stroke="#2563eb"
                strokeWidth="2.5"
                rx="3"
              />
              {/* Dimensions */}
              <line x1={250 - (displayLength * scaleFactor) / 2} y1={155 - (displayWidth * scaleFactor) / 2} x2={250 + (displayLength * scaleFactor) / 2} y2={155 - (displayWidth * scaleFactor) / 2} stroke="#ef4444" strokeWidth="1.5" />
              <line x1={250 - (displayLength * scaleFactor) / 2} y1={150 - (displayWidth * scaleFactor) / 2} x2={250 - (displayLength * scaleFactor) / 2} y2={160 - (displayWidth * scaleFactor) / 2} stroke="#ef4444" strokeWidth="1.5" />
              <line x1={250 + (displayLength * scaleFactor) / 2} y1={150 - (displayWidth * scaleFactor) / 2} x2={250 + (displayLength * scaleFactor) / 2} y2={160 - (displayWidth * scaleFactor) / 2} stroke="#ef4444" strokeWidth="1.5" />
              <text x="250" y={148 - (displayWidth * scaleFactor) / 2} textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[10px] font-bold">
                {displayLength} {unitLabel}
              </text>
              <line x1={240 - (displayLength * scaleFactor) / 2} y1={140 - (displayWidth * scaleFactor) / 2} x2={240 - (displayLength * scaleFactor) / 2} y2={140 + (displayWidth * scaleFactor) / 2} stroke="#10b981" strokeWidth="1.5" />
              <line x1={235 - (displayLength * scaleFactor) / 2} y1={140 - (displayWidth * scaleFactor) / 2} x2={245 - (displayLength * scaleFactor) / 2} y2={140 - (displayWidth * scaleFactor) / 2} stroke="#10b981" strokeWidth="1.5" />
              <line x1={235 - (displayLength * scaleFactor) / 2} y1={140 + (displayWidth * scaleFactor) / 2} x2={245 - (displayLength * scaleFactor) / 2} y2={140 + (displayWidth * scaleFactor) / 2} stroke="#10b981" strokeWidth="1.5" />
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
                fill="url(#areaPattern)"
                stroke="#2563eb"
                strokeWidth="2.5"
              />
              {/* Diameter Line */}
              <line x1={250 - (displayDiameter * scaleFactor) / 2} y1="140" x2={250 + (displayDiameter * scaleFactor) / 2} y2="140" stroke="#ef4444" strokeWidth="1.5" />
              <line x1={250 - (displayDiameter * scaleFactor) / 2} y1="135" x2={250 - (displayDiameter * scaleFactor) / 2} y2="145" stroke="#ef4444" strokeWidth="1.5" />
              <line x1={250 + (displayDiameter * scaleFactor) / 2} y1="135" x2={250 + (displayDiameter * scaleFactor) / 2} y2="145" stroke="#ef4444" strokeWidth="1.5" />
              <text x="250" y="130" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[10px] font-bold">
                {displayDiameter} {unitLabel}
              </text>
              {/* Center Dot */}
              <circle cx="250" cy="140" r="3" fill="#2563eb" />
            </g>
          )}

          {/* Triangle Shape */}
          {shape === 'triangle' && (
            <g>
              <polygon
                points={`250,${140 - (displayHeight * scaleFactor) / 2} ${250 - (displayLength * scaleFactor) / 2},${140 + (displayHeight * scaleFactor) / 2} ${250 + (displayLength * scaleFactor) / 2},${140 + (displayHeight * scaleFactor) / 2}`}
                fill="url(#areaPattern)"
                stroke="#2563eb"
                strokeWidth="2.5"
              />
              {/* Height Line */}
              <line x1="250" y1={140 - (displayHeight * scaleFactor) / 2} x2="250" y2={140 + (displayHeight * scaleFactor) / 2} stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 2" />
              <text x="258" y="145" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-bold">
                {displayHeight} {unitLabel}
              </text>
              {/* Base Dimension */}
              <line x1={250 - (displayLength * scaleFactor) / 2} y1={150 + (displayHeight * scaleFactor) / 2} x2={250 + (displayLength * scaleFactor) / 2} y2={150 + (displayHeight * scaleFactor) / 2} stroke="#ef4444" strokeWidth="1.5" />
              <text x="250" y={165 + (displayHeight * scaleFactor) / 2} textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[10px] font-bold">
                {displayLength} {unitLabel}
              </text>
            </g>
          )}

          {/* Trapezoid Shape */}
          {shape === 'trapezoid' && (
            <g>
              <polygon
                points={`250 - ${displayBase2 * scaleFactor / 2},${140 + (displayHeight * scaleFactor) / 2} ${250 + displayBase2 * scaleFactor / 2},${140 + (displayHeight * scaleFactor) / 2} ${250 + displayBase1 * scaleFactor / 2},${140 - (displayHeight * scaleFactor) / 2} ${250 - displayBase1 * scaleFactor / 2},${140 - (displayHeight * scaleFactor) / 2}`}
                fill="url(#areaPattern)"
                stroke="#2563eb"
                strokeWidth="2.5"
              />
              {/* Top Base */}
              <text x="250" y={135 - (displayHeight * scaleFactor) / 2} textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[9px] font-bold">
                Base 1: {displayBase1} {unitLabel}
              </text>
              {/* Bottom Base */}
              <text x="250" y={160 + (displayHeight * scaleFactor) / 2} textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-[9px] font-bold">
                Base 2: {displayBase2} {unitLabel}
              </text>
              {/* Height */}
              <text x={260 + (displayBase1 * scaleFactor) / 2} y="145" className="fill-emerald-600 dark:fill-emerald-400 text-[9px] font-bold">
                h={displayHeight}
              </text>
            </g>
          )}

          {/* L-Shape */}
          {shape === 'l-shape' && (
            <g>
              <polygon
                points={`${250 - (displayLength * scaleFactor) / 2},${140 - (displayWidth * scaleFactor) / 2} ${250 + (displayLength * scaleFactor) / 2},${140 - (displayWidth * scaleFactor) / 2} ${250 + (displayLength * scaleFactor) / 2},${140 - (displayWidth * scaleFactor) / 2 + (displayWidth2 * scaleFactor)} ${250 - (displayLength * scaleFactor) / 2 + (displayLength2 * scaleFactor)},${140 - (displayWidth * scaleFactor) / 2 + (displayWidth2 * scaleFactor)} ${250 - (displayLength * scaleFactor) / 2 + (displayLength2 * scaleFactor)},${140 + (displayWidth * scaleFactor) / 2} ${250 - (displayLength * scaleFactor) / 2},${140 + (displayWidth * scaleFactor) / 2}`}
                fill="url(#areaPattern)"
                stroke="#2563eb"
                strokeWidth="2.5"
              />
              {/* Section 1 Label */}
              <text x={250 - (displayLength * scaleFactor) / 4} y="145" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[8px]">
                {displayLength}×{displayWidth}
              </text>
              {/* Section 2 Label */}
              <text x={250 + (displayLength * scaleFactor) / 4} y={150 + (displayWidth * scaleFactor) / 4} textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[8px]">
                {displayLength2}×{displayWidth2}
              </text>
            </g>
          )}

          {/* Area Formula Display */}
          <rect x="30" y="230" width="160" height="35" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" className="dark:fill-slate-800 dark:stroke-slate-700" />
          <text x="40" y="245" className="fill-slate-600 dark:fill-slate-300 text-[9px] font-semibold">Shape: {shape.replace('-', ' ')}</text>
          <text x="40" y="257" className="fill-slate-500 dark:fill-slate-400 text-[8px]">Quantity: {quantity} area{quantity > 1 ? 's' : ''}</text>
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-300">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-blue-200 border border-blue-500" /> Area Coverage
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-red-400" /> Dimensions
        </span>
      </div>
    </div>
  );
}
