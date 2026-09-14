'use client';

import React from 'react';

interface StairVisualizerProps {
  totalRise: number;
  riserCount: number;
  riserHeight: number;
  treadDepth: number;
  stairAngle: number;
  stringerLengthFeet: number;
  headroomOpening: number;
  blondelValue: number;
  isCodeCompliant: boolean;
  units: 'imperial' | 'metric';
}

export function StairVisualizer({
  totalRise,
  riserCount = 14,
  riserHeight = 7.5,
  treadDepth = 10.5,
  stairAngle = 35.5,
  stringerLengthFeet = 14.2,
  headroomOpening = 110,
  blondelValue = 24.5,
  isCodeCompliant = true,
  units = 'imperial',
}: StairVisualizerProps) {
  const unitLabel = units === 'imperial' ? 'in' : 'cm';
  const smallUnit = units === 'imperial' ? 'in' : 'cm';
  const largeUnit = units === 'imperial' ? 'ft' : 'm';

  // Number of visible steps to draw (capped between 4 and 10 for clean SVG scaling)
  const drawSteps = Math.min(8, Math.max(4, riserCount || 6));
  const stepW = 260 / drawSteps;
  const stepH = 150 / drawSteps;

  // Build step polyline path
  let stepPath = `M 80 220 `;
  for (let i = 0; i < drawSteps; i++) {
    const curX = 80 + i * stepW;
    const curY = 220 - i * stepH;
    // Step up (riser) then step right (tread)
    stepPath += `L ${curX} ${curY - stepH} L ${curX + stepW} ${curY - stepH} `;
  }

  // Stringer bottom back slope line
  const topX = 80 + drawSteps * stepW;
  const topY = 220 - drawSteps * stepH;

  return (
    <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Interactive Stair Framing & Stringer Schematic
        </span>
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
              isCodeCompliant
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isCodeCompliant ? 'bg-emerald-500' : 'bg-amber-500'
              }`}
            />
            {isCodeCompliant ? 'Code Compliant' : 'Review Code Limits'}
          </span>
          <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
            {stairAngle}° Incline
          </span>
        </div>
      </div>

      <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-lg bg-white p-2 shadow-inner dark:bg-slate-950">
        <svg
          viewBox="0 0 500 280"
          className="h-full w-full select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="woodGrain" width="40" height="4" patternUnits="userSpaceOnUse">
              <line x1="0" y1="3" x2="40" y2="3" stroke="#d97706" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>

          {/* Lower Finished Floor */}
          <line x1="20" y1="220" x2="160" y2="220" stroke="#64748b" strokeWidth="3" />
          <text x="30" y="240" className="fill-slate-500 text-[10px] font-mono">
            Lower Finished Floor
          </text>

          {/* Upper Finished Floor Landing */}
          <line x1={topX} y1={topY} x2="480" y2={topY} stroke="#64748b" strokeWidth="3" />
          <text x="380" y={topY - 10} className="fill-slate-500 text-[10px] font-mono">
            Upper Floor Landing
          </text>

          {/* Upper Floor Ceiling & Floor Joist Header */}
          <rect x={topX - 30} y={topY - 35} width="140" height="25" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" className="dark:fill-slate-800" rx="2" />
          <text x={topX + 40} y={topY - 18} textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9px] font-medium">
            Upper Floor Joist
          </text>

          {/* Stringer Solid Wood Fill (Backing) */}
          <polygon
            points={`80,220 ${topX},${topY} ${topX},${topY + 35} 80,235`}
            fill="#fef3c7"
            stroke="#d97706"
            strokeWidth="2"
            className="dark:fill-amber-950/40"
          />
          <polygon
            points={`80,220 ${topX},${topY} ${topX},${topY + 35} 80,235`}
            fill="url(#woodGrain)"
          />

          {/* Cut Steps (Risers & Treads) */}
          <path
            d={stepPath}
            fill="none"
            stroke="#0284c7"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Highlight Single Tread & Riser Detail Callout */}
          {drawSteps >= 2 && (
            <g>
              {/* Riser Height Dimension Indicator */}
              <line
                x1={80 + stepW - 6}
                y1={220}
                x2={80 + stepW - 6}
                y2={220 - stepH}
                stroke="#ef4444"
                strokeWidth="1.5"
              />
              <line x1={80 + stepW - 10} y1={220} x2={80 + stepW - 2} y2={220} stroke="#ef4444" strokeWidth="1.5" />
              <line x1={80 + stepW - 10} y1={220 - stepH} x2={80 + stepW - 2} y2={220 - stepH} stroke="#ef4444" strokeWidth="1.5" />
              <text
                x={80 + stepW - 12}
                y={220 - stepH / 2 + 3}
                textAnchor="end"
                className="fill-red-600 dark:fill-red-400 text-[9px] font-bold"
              >
                Riser: {riserHeight} {smallUnit}
              </text>

              {/* Tread Depth Dimension Indicator */}
              <line
                x1={80 + stepW}
                y1={220 - stepH - 6}
                x2={80 + 2 * stepW}
                y2={220 - stepH - 6}
                stroke="#10b981"
                strokeWidth="1.5"
              />
              <line x1={80 + stepW} y1={220 - stepH - 10} x2={80 + stepW} y2={220 - stepH - 2} stroke="#10b981" strokeWidth="1.5" />
              <line x1={80 + 2 * stepW} y1={220 - stepH - 10} x2={80 + 2 * stepW} y2={220 - stepH - 2} stroke="#10b981" strokeWidth="1.5" />
              <text
                x={80 + 1.5 * stepW}
                y={220 - stepH - 10}
                textAnchor="middle"
                className="fill-emerald-600 dark:fill-emerald-400 text-[9px] font-bold"
              >
                Tread: {treadDepth} {smallUnit}
              </text>
            </g>
          )}

          {/* Headroom Clearance Arrow Line */}
          <g>
            <line x1={topX - 40} y1={topY - 35} x2={topX - 40} y2={220 - 2 * stepH} stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x={topX - 46} y={topY + 30} textAnchor="end" className="fill-purple-600 dark:fill-purple-400 text-[9px] font-bold">
              Min Headroom ≥ 80"
            </text>
          </g>

          {/* Total Rise (Vertical Dimension Bar) */}
          <g>
            <line x1="465" y1="220" x2="465" y2={topY} stroke="#64748b" strokeWidth="1.5" />
            <line x1="460" y1="220" x2="470" y2="220" stroke="#64748b" strokeWidth="1.5" />
            <line x1="460" y1={topY} x2="470" y2={topY} stroke="#64748b" strokeWidth="1.5" />
            <text x="475" y={topY + (220 - topY) / 2 + 4} className="fill-slate-700 dark:fill-slate-200 text-[10px] font-bold">
              Total Rise: {totalRise} {unitLabel}
            </text>
          </g>

          {/* Total Run (Horizontal Dimension Bar) */}
          <g>
            <line x1="80" y1="260" x2={topX} y2="260" stroke="#64748b" strokeWidth="1.5" />
            <line x1="80" y1="255" x2="80" y2="265" stroke="#64748b" strokeWidth="1.5" />
            <line x1={topX} y1="255" x2={topX} y2="265" stroke="#64748b" strokeWidth="1.5" />
            <text x={80 + (topX - 80) / 2} y="274" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[10px] font-bold">
              Total Run ({riserCount - 1} Treads)
            </text>
          </g>

          {/* Diagonal Stringer Cut Line Indicator */}
          <g>
            <line x1="80" y1="220" x2={topX} y2={topY} stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 2" />
            <text
              x={80 + (topX - 80) / 2 + 10}
              y={220 - (220 - topY) / 2 + 20}
              textAnchor="middle"
              className="fill-amber-700 dark:fill-amber-300 text-[9px] font-bold"
            >
              Stringer: {stringerLengthFeet} {largeUnit} (2×12 Stock)
            </text>
          </g>
        </svg>
      </div>

      {/* Comfort & Rule of Thumb Badges */}
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 text-center text-xs">
        <div className="rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-950">
          <span className="block text-[10px] text-slate-400">Total Steps</span>
          <span className="font-semibold text-slate-800 dark:text-slate-100">{riserCount} Risers</span>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-950">
          <span className="block text-[10px] text-slate-400">Riser Height</span>
          <span className="font-semibold text-slate-800 dark:text-slate-100">{riserHeight} {smallUnit}</span>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-950">
          <span className="block text-[10px] text-slate-400">Tread Depth</span>
          <span className="font-semibold text-slate-800 dark:text-slate-100">{treadDepth} {smallUnit}</span>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-950">
          <span className="block text-[10px] text-slate-400">Blondel (2R + T)</span>
          <span className="font-semibold text-primary">{blondelValue} {smallUnit}</span>
        </div>
      </div>
    </div>
  );
}
