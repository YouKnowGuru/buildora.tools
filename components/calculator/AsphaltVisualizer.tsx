'use client';

import React from 'react';

interface AsphaltVisualizerProps {
  length: number;
  width: number;
  depth: number;
  density: number;
  waste: number;
  units: 'imperial' | 'metric';
}

export function AsphaltVisualizer({
  length,
  width,
  depth,
  density,
  waste,
  units,
}: AsphaltVisualizerProps) {
  const unitLabel = units === 'imperial' ? 'ft' : 'm';
  const depthLabel = units === 'imperial' ? 'in' : 'cm';
  const displayLength = Number(length) || 20;
  const displayWidth = Number(width) || 10;
  const displayDepth = Number(depth) || 4;

  const svgLength = Math.min(340, Math.max(200, displayLength * 8));
  const svgWidth = Math.min(160, Math.max(100, displayWidth * 6));
  const depthHeight = Math.min(40, Math.max(15, displayDepth * 4));

  return (
    <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">
          Asphalt Paving Cross-Section
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {density} {units === 'imperial' ? 'lb/ft³' : 'kg/m³'}
        </span>
      </div>

      <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-lg bg-white p-2 shadow-inner dark:bg-slate-950">
        <svg viewBox="0 0 500 280" className="h-full w-full select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="asphaltPattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="#374151" />
              <circle cx="5" cy="5" r="1" fill="#4b5563" opacity="0.5" />
              <circle cx="15" cy="12" r="1.2" fill="#4b5563" opacity="0.4" />
              <circle cx="8" cy="17" r="0.8" fill="#4b5563" opacity="0.6" />
            </pattern>
            <pattern id="soilPattern" width="15" height="15" patternUnits="userSpaceOnUse">
              <rect width="15" height="15" fill="#92400e" />
              <circle cx="3" cy="4" r="1.5" fill="#78350f" opacity="0.5" />
              <circle cx="10" cy="10" r="1" fill="#78350f" opacity="0.4" />
            </pattern>
          </defs>

          {/* Sky / Air */}
          <rect x="0" y="0" width="500" height="80" fill="transparent" />

          {/* Existing Ground / Subgrade */}
          <rect x="50" y="180" width="400" height="80" fill="url(#soilPattern)" />
          <line x1="50" y1="180" x2="450" y2="180" stroke="#78350f" strokeWidth="2" />
          <text x="460" y="195" className="fill-amber-700 dark:fill-amber-500 text-[10px] font-mono">
            Subgrade
          </text>

          {/* Asphalt Layer */}
          <rect
            x="80"
            y={180 - depthHeight}
            width={svgLength}
            height={depthHeight}
            fill="url(#asphaltPattern)"
            stroke="#1f2937"
            strokeWidth="2"
            rx="2"
          />

          {/* Aggregate Base Layer */}
          <rect
            x="80"
            y={180 - depthHeight - 12}
            width={svgLength}
            height="12"
            fill="#d1d5db"
            stroke="#9ca3af"
            strokeWidth="1"
          />
          <text x={85 + svgLength / 2} y={180 - depthHeight - 16} textAnchor="middle" className="fill-slate-500 text-[9px]">
            Aggregate Base (6-8")
          </text>

          {/* Dimension: Length */}
          <line x1="80" y1="210" x2={80 + svgLength} y2="210" stroke="#64748b" strokeWidth="1.5" />
          <line x1="80" y1="205" x2="80" y2="215" stroke="#64748b" strokeWidth="1.5" />
          <line x1={80 + svgLength} y1="205" x2={80 + svgLength} y2="215" stroke="#64748b" strokeWidth="1.5" />
          <text x={80 + svgLength / 2} y="224" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[10px] font-bold">
            {displayLength} {unitLabel}
          </text>

          {/* Dimension: Width (top view indicator) */}
          <line x1={80 + svgLength + 30} y1={180 - depthHeight} x2={80 + svgLength + 30} y2={180 - depthHeight + svgWidth * 0.5} stroke="#64748b" strokeWidth="1.5" />
          <line x1={80 + svgLength + 25} y1={180 - depthHeight} x2={80 + svgLength + 35} y2={180 - depthHeight} stroke="#64748b" strokeWidth="1.5" />
          <line x1={80 + svgLength + 25} y1={180 - depthHeight + svgWidth * 0.5} x2={80 + svgLength + 35} y2={180 - depthHeight + svgWidth * 0.5} stroke="#64748b" strokeWidth="1.5" />
          <text x={80 + svgLength + 35} y={180 - depthHeight + svgWidth * 0.25 + 4} className="fill-slate-700 dark:fill-slate-200 text-[10px] font-bold">
            {displayWidth} {unitLabel}
          </text>

          {/* Dimension: Depth (vertical) */}
          <line x1="60" y1="180" x2="60" y2={180 - depthHeight} stroke="#ef4444" strokeWidth="1.5" />
          <line x1="55" y1="180" x2="65" y2="180" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="55" y1={180 - depthHeight} x2="65" y2={180 - depthHeight} stroke="#ef4444" strokeWidth="1.5" />
          <text x="50" y={180 - depthHeight / 2 + 4} textAnchor="end" className="fill-red-600 dark:fill-red-400 text-[10px] font-bold">
            {displayDepth} {depthLabel}
          </text>

          {/* Waste Factor Badge */}
          <rect x="320" y="90" width="120" height="30" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
          <text x="380" y="102" textAnchor="middle" className="fill-amber-700 text-[9px] font-semibold">Waste Factor</text>
          <text x="380" y="115" textAnchor="middle" className="fill-amber-800 text-[12px] font-bold">{waste}%</text>

          {/* Surface Label */}
          <text x={80 + svgLength / 2} y={180 - depthHeight - 4} textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-semibold">
            Asphalt Surface ({displayLength} × {displayWidth} {unitLabel})
          </text>
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-300">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-gray-700" /> Asphalt Layer
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-gray-300 border border-gray-400" /> Aggregate Base
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-amber-800" /> Subgrade / Soil
        </span>
      </div>
    </div>
  );
}
