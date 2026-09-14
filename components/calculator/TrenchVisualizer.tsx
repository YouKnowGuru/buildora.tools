'use client';

import React from 'react';

interface TrenchVisualizerProps {
  length: number;
  width: number;
  depth: number;
  beddingMaterial: string;
  beddingDepth: number;
  includeSpoilHaul: boolean;
  truckLoads: number;
  units: 'imperial' | 'metric';
}

export function TrenchVisualizer({
  length,
  width,
  depth,
  beddingMaterial,
  beddingDepth,
  includeSpoilHaul,
  truckLoads,
  units,
}: TrenchVisualizerProps) {
  const unitLabel = units === 'imperial' ? 'ft' : 'm';
  const displayLength = Number(length) || 50;
  const displayWidth = Number(width) || 2;
  const displayDepth = Number(depth) || 4;
  const displayBeddingDepth = Number(beddingDepth) || 0.5;
  const displayTrucks = Number(truckLoads) || 1;

  const beddingLabels: Record<string, string> = {
    none: 'No Bedding',
    gravel: 'Crushed Gravel',
    sand: 'Sand',
    concrete: 'Concrete Cradle',
  };

  const trenchWidthPx = Math.min(120, Math.max(40, displayWidth * 15));
  const trenchDepthPx = Math.min(100, Math.max(30, displayDepth * 8));
  const beddingHeightPx = Math.max(8, displayBeddingDepth * 12);

  return (
    <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Trench Cross-Section & Excavation
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {beddingLabels[beddingMaterial] || 'Gravel'}
        </span>
      </div>

      <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-lg bg-white p-2 shadow-inner dark:bg-slate-950">
        <svg viewBox="0 0 500 280" className="h-full w-full select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="soilBrown" width="16" height="16" patternUnits="userSpaceOnUse">
              <rect width="16" height="16" fill="#92400e" />
              <circle cx="4" cy="4" r="1.5" fill="#78350f" opacity="0.5" />
              <circle cx="12" cy="10" r="1" fill="#78350f" opacity="0.4" />
              <circle cx="6" cy="13" r="1.2" fill="#a16207" opacity="0.3" />
            </pattern>
            <pattern id="gravelPattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="#d6d3d1" />
              <circle cx="3" cy="3" r="1.5" fill="#a8a29e" />
              <circle cx="7" cy="6" r="1" fill="#78716c" />
              <circle cx="2" cy="8" r="0.8" fill="#a8a29e" />
            </pattern>
            <pattern id="sandPattern" width="8" height="8" patternUnits="userSpaceOnUse">
              <rect width="8" height="8" fill="#fde68a" />
              <circle cx="2" cy="2" r="0.5" fill="#f59e0b" opacity="0.3" />
              <circle cx="6" cy="5" r="0.6" fill="#f59e0b" opacity="0.2" />
            </pattern>
            <pattern id="concretePattern" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect width="12" height="12" fill="#9ca3af" />
              <line x1="0" y1="6" x2="12" y2="6" stroke="#6b7280" strokeWidth="0.5" />
              <line x1="6" y1="0" x2="6" y2="12" stroke="#6b7280" strokeWidth="0.5" />
            </pattern>
          </defs>

          {/* Sky */}
          <rect x="0" y="0" width="500" height="60" fill="transparent" />

          {/* Ground Surface */}
          <line x1="30" y1="100" x2="470" y2="100" stroke="#15803d" strokeWidth="3" />
          <text x="40" y="90" className="fill-green-700 dark:fill-green-500 text-[10px] font-mono">Ground Surface</text>

          {/* Left Soil */}
          <polygon points="30,100 180,100 180,260 30,260" fill="url(#soilBrown)" />
          {/* Right Soil */}
          <polygon points="320,100 470,100 470,260 320,260" fill="url(#soilBrown)" />

          {/* Trench Opening (top) */}
          <line x1="180" y1="100" x2="320" y2="100" stroke="#1f2937" strokeWidth="2" />

          {/* Trench Walls */}
          <line x1="180" y1="100" x2="180" y2={100 + trenchDepthPx} stroke="#1f2937" strokeWidth="2" />
          <line x1="320" y1="100" x2="320" y2={100 + trenchDepthPx} stroke="#1f2937" strokeWidth="2" />

          {/* Trench Bottom */}
          <line x1="180" y1={100 + trenchDepthPx} x2="320" y2={100 + trenchDepthPx} stroke="#1f2937" strokeWidth="2" />

          {/* Bedding Layer */}
          {beddingMaterial !== 'none' && (
            <rect
              x="180"
              y={100 + trenchDepthPx - beddingHeightPx}
              width="140"
              height={beddingHeightPx}
              fill={
                beddingMaterial === 'gravel' ? 'url(#gravelPattern)' :
                beddingMaterial === 'sand' ? 'url(#sandPattern)' :
                'url(#concretePattern)'
              }
              stroke="#57534e"
              strokeWidth="1"
            />
          )}

          {/* Pipe (if bedding exists) */}
          {beddingMaterial !== 'none' && (
            <ellipse cx="250" cy={100 + trenchDepthPx - beddingHeightPx - 10} rx="18" ry="12" fill="#6b7280" stroke="#4b5563" strokeWidth="1.5" />
          )}

          {/* Dimension: Width (top) */}
          <line x1="180" y1="80" x2="320" y2="80" stroke="#64748b" strokeWidth="1.5" />
          <line x1="180" y1="75" x2="180" y2="85" stroke="#64748b" strokeWidth="1.5" />
          <line x1="320" y1="75" x2="320" y2="85" stroke="#64748b" strokeWidth="1.5" />
          <text x="250" y="75" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[10px] font-bold">
            {displayWidth} {unitLabel}
          </text>

          {/* Dimension: Depth (vertical) */}
          <line x1="340" y1="100" x2="340" y2={100 + trenchDepthPx} stroke="#ef4444" strokeWidth="1.5" />
          <line x1="335" y1="100" x2="345" y2="100" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="335" y1={100 + trenchDepthPx} x2="345" y2={100 + trenchDepthPx} stroke="#ef4444" strokeWidth="1.5" />
          <text x="350" y={100 + trenchDepthPx / 2 + 4} className="fill-red-600 dark:fill-red-400 text-[10px] font-bold">
            {displayDepth} {unitLabel}
          </text>

          {/* Dimension: Length (bottom) */}
          <line x1="100" y1="250" x2="400" y2="250" stroke="#64748b" strokeWidth="1.5" />
          <line x1="100" y1="245" x2="100" y2="255" stroke="#64748b" strokeWidth="1.5" />
          <line x1="400" y1="245" x2="400" y2="255" stroke="#64748b" strokeWidth="1.5" />
          <text x="250" y="268" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[10px] font-bold">
            Trench Length: {displayLength} {unitLabel}
          </text>

          {/* Spoil Pile */}
          {includeSpoilHaul && (
            <g>
              <polygon points="30,100 80,60 130,100" fill="#a8a29e" stroke="#78716c" strokeWidth="1.5" />
              <text x="80" y="88" textAnchor="middle" className="fill-stone-700 text-[8px] font-bold">Spoil</text>
            </g>
          )}

          {/* Truck indicator */}
          {includeSpoilHaul && (
            <g>
              <rect x="350" y="50" width="80" height="35" rx="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
              <text x="390" y="65" textAnchor="middle" className="fill-white text-[7px] font-bold">DUMP TRUCK</text>
              <text x="390" y="77" textAnchor="middle" className="fill-blue-100 text-[7px]">{displayTrucks} Load{displayTrucks > 1 ? 's' : ''}</text>
            </g>
          )}
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-amber-800" /> Soil
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-stone-400 border border-stone-500" /> {beddingLabels[beddingMaterial] || 'Bedding'}
        </span>
        {beddingMaterial !== 'none' && (
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-gray-500 border border-gray-600" /> Pipe/Conduit
          </span>
        )}
      </div>
    </div>
  );
}
