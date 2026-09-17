'use client';

import React from 'react';

interface SidingVisualizerProps {
  buildingLength: number;
  buildingWidth: number;
  wallHeight: number;
  gableShape: 'none' | 'triangle' | 'gambrel' | 'half-circle';
  gableHeight?: number;
  doorCount: number;
  windowCount: number;
  garageDoorCount: number;
  units: 'imperial' | 'metric';
  sidingMaterial?: string;
}

export function SidingVisualizer({
  buildingLength,
  buildingWidth,
  wallHeight,
  gableShape,
  gableHeight = 5,
  doorCount,
  windowCount,
  garageDoorCount,
  units,
  sidingMaterial = 'vinyl',
}: SidingVisualizerProps) {
  const unitLabel = units === 'imperial' ? 'ft' : 'm';
  const displayLength = Number(buildingLength) || 40;
  const displayWidth = Number(buildingWidth) || 30;
  const displayHeight = Number(wallHeight) || 9;
  const displayGableH = Number(gableHeight) || 5;

  // Material accent colors & pattern styles
  const materialStyles: Record<string, { wallBg: string; stroke: string; accent: string; label: string }> = {
    vinyl: {
      wallBg: 'fill-sky-50 dark:fill-sky-950/40',
      stroke: 'stroke-sky-400 dark:stroke-sky-500',
      accent: 'fill-sky-500/20 stroke-sky-500',
      label: 'Vinyl Lap Siding',
    },
    'fiber-cement': {
      wallBg: 'fill-slate-100 dark:fill-slate-900/60',
      stroke: 'stroke-slate-400 dark:stroke-slate-500',
      accent: 'fill-slate-500/20 stroke-slate-500',
      label: 'Fiber Cement Planks',
    },
    wood: {
      wallBg: 'fill-amber-50 dark:fill-amber-950/40',
      stroke: 'stroke-amber-500 dark:stroke-amber-600',
      accent: 'fill-amber-500/20 stroke-amber-500',
      label: 'Natural Wood Clapboard',
    },
    metal: {
      wallBg: 'fill-zinc-100 dark:fill-zinc-900/50',
      stroke: 'stroke-cyan-500 dark:stroke-cyan-400',
      accent: 'fill-cyan-500/20 stroke-cyan-500',
      label: 'Metal / Steel Panels',
    },
    'engineered-wood': {
      wallBg: 'fill-orange-50 dark:fill-orange-950/30',
      stroke: 'stroke-orange-400 dark:stroke-orange-500',
      accent: 'fill-orange-500/20 stroke-orange-500',
      label: 'LP® SmartSide® Wood',
    },
    'stone-brick-veneer-panels': {
      wallBg: 'fill-stone-100 dark:fill-stone-900/50',
      stroke: 'stroke-stone-500 dark:stroke-stone-400',
      accent: 'fill-stone-500/20 stroke-stone-500',
      label: 'Faux Stone & Brick Panels',
    },
  };

  const style = materialStyles[sidingMaterial] ?? materialStyles['vinyl']!;


  return (
    <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">
          Interactive Elevation & Facade Schematic
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {style.label}
        </span>
      </div>

      <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-lg bg-white p-2 shadow-inner dark:bg-slate-950">
        <svg
          viewBox="0 0 500 280"
          className="h-full w-full select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Siding Horizontal Lap Texture */}
            <pattern id="sidingLap" width="100" height="8" patternUnits="userSpaceOnUse">
              <line x1="0" y1="7" x2="100" y2="7" stroke="currentColor" strokeWidth="0.75" className="text-slate-300 dark:text-slate-700" />
            </pattern>
            {/* Starter Strip Pattern */}
            <pattern id="starterPattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 0 10 L 10 0 M 0 0 L 10 10" stroke="#f59e0b" strokeWidth="1" opacity="0.6" />
            </pattern>
          </defs>

          {/* Grid Background */}
          <rect width="500" height="280" fill="transparent" />

          {/* Ground Line */}
          <line x1="20" y1="240" x2="480" y2="240" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4" />
          <text x="25" y="258" className="fill-slate-400 text-[10px] font-mono">
            Ground / Sill Line
          </text>

          {/* House Main Body (Front Rectangular Facade) */}
          {/* Coordinates: X: 80 to 420, Y: 130 to 240 (Width 340, Height 110) */}
          <rect
            x="80"
            y="130"
            width="340"
            height="110"
            className={`${style.wallBg} ${style.stroke}`}
            strokeWidth="2.5"
            rx="2"
          />
          {/* Siding Planks Texture */}
          <rect x="80" y="130" width="340" height="110" fill="url(#sidingLap)" />

          {/* Gable End Top Geometry */}
          {gableShape === 'triangle' && (
            <g>
              <polygon
                points="80,130 250,45 420,130"
                className={`${style.wallBg} ${style.stroke}`}
                strokeWidth="2.5"
              />
              <polygon points="80,130 250,45 420,130" fill="url(#sidingLap)" />
              {/* Gable Peak Line & Dimension */}
              <line x1="250" y1="45" x2="250" y2="130" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="255" y="85" className="fill-sky-600 dark:fill-sky-400 text-[10px] font-bold">
                Gable: {displayGableH} {unitLabel}
              </text>
            </g>
          )}

          {gableShape === 'gambrel' && (
            <g>
              {/* Lower steep slope (80,130 -> 120,75 and 420,130 -> 380,75) then upper roof (120,75 -> 250,40 -> 380,75) */}
              <polygon
                points="80,130 125,80 250,45 375,80 420,130"
                className={`${style.wallBg} ${style.stroke}`}
                strokeWidth="2.5"
              />
              <polygon points="80,130 125,80 250,45 375,80 420,130" fill="url(#sidingLap)" />
              <line x1="125" y1="80" x2="375" y2="80" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
              <text x="250" y="75" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[9px] font-bold">
                Gambrel Slope Break
              </text>
            </g>
          )}

          {gableShape === 'half-circle' && (
            <g>
              <path
                d="M 80 130 A 170 85 0 0 1 420 130 Z"
                className={`${style.wallBg} ${style.stroke}`}
                strokeWidth="2.5"
              />
              <path d="M 80 130 A 170 85 0 0 1 420 130 Z" fill="url(#sidingLap)" />
            </g>
          )}

          {gableShape === 'none' && (
            <g>
              {/* Flat / Hip Roof Cap */}
              <line x1="70" y1="130" x2="430" y2="130" stroke="#64748b" strokeWidth="4" />
              <text x="250" y="122" textAnchor="middle" className="fill-slate-500 text-[10px] font-medium">
                Eave / Soffit Line (Hip or Flat Roof)
              </text>
            </g>
          )}

          {/* Starter Strip Accent (Base) */}
          <rect x="80" y="236" width="340" height="5" fill="#f59e0b" rx="1" />
          <text x="250" y="252" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[9px] font-medium">
            Starter Strip ({displayLength}×{displayWidth} {unitLabel} perimeter)
          </text>

          {/* Corner Posts (Left & Right Verticals) */}
          <rect x="78" y="130" width="5" height="110" fill="#3b82f6" rx="1" />
          <rect x="417" y="130" width="5" height="110" fill="#3b82f6" rx="1" />

          {/* Openings Render (Windows & Doors) */}
          {/* Garage Door (Right Side) */}
          {garageDoorCount > 0 && (
            <g>
              <rect x="300" y="165" width="95" height="75" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" rx="2" className="dark:fill-slate-800" />
              <line x1="300" y1="190" x2="395" y2="190" stroke="#cbd5e1" strokeWidth="1" />
              <line x1="300" y1="215" x2="395" y2="215" stroke="#cbd5e1" strokeWidth="1" />
              {/* J-channel frame highlight */}
              <rect x="298" y="163" width="99" height="77" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="347" y="205" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9px] font-bold">
                Garage (9×7)
              </text>
            </g>
          )}

          {/* Main Entry Door */}
          {doorCount > 0 && (
            <g>
              <rect x="110" y="175" width="36" height="65" fill="#e2e8f0" stroke="#475569" strokeWidth="2" rx="1" className="dark:fill-slate-700" />
              <circle cx="140" cy="208" r="2" fill="#f59e0b" />
              {/* J-channel highlight */}
              <rect x="108" y="173" width="40" height="67" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="128" y="210" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[8px] font-bold">
                Door
              </text>
            </g>
          )}

          {/* Windows */}
          {windowCount > 0 && (
            <g>
              <rect x="170" y="160" width="38" height="48" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" rx="1" className="dark:fill-sky-950/60" />
              <line x1="189" y1="160" x2="189" y2="208" stroke="#0284c7" strokeWidth="1" />
              <line x1="170" y1="184" x2="208" y2="184" stroke="#0284c7" strokeWidth="1" />
              {/* J-channel frame */}
              <rect x="168" y="158" width="42" height="52" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 2" />
            </g>
          )}

          {windowCount > 1 && (
            <g>
              <rect x="230" y="160" width="38" height="48" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" rx="1" className="dark:fill-sky-950/60" />
              <line x1="249" y1="160" x2="249" y2="208" stroke="#0284c7" strokeWidth="1" />
              <line x1="230" y1="184" x2="268" y2="184" stroke="#0284c7" strokeWidth="1" />
              <rect x="228" y="158" width="42" height="52" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 2" />
            </g>
          )}

          {/* Wall Dimension Indicator (Height) */}
          <g>
            <line x1="60" y1="130" x2="60" y2="240" stroke="#64748b" strokeWidth="1.5" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
            <line x1="55" y1="130" x2="65" y2="130" stroke="#64748b" strokeWidth="1.5" />
            <line x1="55" y1="240" x2="65" y2="240" stroke="#64748b" strokeWidth="1.5" />
            <text x="50" y="190" textAnchor="end" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-bold">
              {displayHeight} {unitLabel}
            </text>
          </g>

          {/* Wall Dimension Indicator (Length) */}
          <g>
            <line x1="80" y1="270" x2="420" y2="270" stroke="#64748b" strokeWidth="1.5" />
            <line x1="80" y1="265" x2="80" y2="275" stroke="#64748b" strokeWidth="1.5" />
            <line x1="420" y1="265" x2="420" y2="275" stroke="#64748b" strokeWidth="1.5" />
            <text x="250" y="278" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[10px] font-bold">
              Building Length: {displayLength} {unitLabel} × Width: {displayWidth} {unitLabel}
            </text>
          </g>
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-300">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-blue-500" /> Corner Posts
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-emerald-500" /> J-Channel & Casing
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-amber-500" /> Starter Strip
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm border border-sky-400 bg-sky-100 dark:bg-sky-950" /> Wall Siding Area
        </span>
      </div>
    </div>
  );
}
