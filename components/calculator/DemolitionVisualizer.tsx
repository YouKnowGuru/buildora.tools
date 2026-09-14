'use client';

import React from 'react';

interface DemolitionVisualizerProps {
  structureType: string;
  area: number;
  stories: number;
  method: string;
  includeHaul: boolean;
  dumpsterLoads: number;
  units: 'imperial' | 'metric';
}

export function DemolitionVisualizer({
  structureType,
  area,
  stories,
  method,
  includeHaul,
  dumpsterLoads,
  units,
}: DemolitionVisualizerProps) {
  const unitLabel = units === 'imperial' ? 'sq ft' : 'm²';
  const displayStories = Math.min(Math.max(1, Number(stories) || 1), 3);
  const displayArea = Number(area) || 1500;
  const displayDumpsters = Number(dumpsterLoads) || 1;

  const structureLabels: Record<string, string> = {
    'house-wood-frame': 'Wood Frame House',
    'house-masonry': 'Masonry House',
    'garage-detached': 'Detached Garage',
    'commercial-light': 'Commercial (Light)',
    'commercial-heavy': 'Commercial (Heavy)',
    'interior-only': 'Interior Gut-Out',
    'shed': 'Shed / Outbuilding',
    'pool': 'Swimming Pool',
  };

  const methodLabels: Record<string, string> = {
    mechanical: 'Mechanical (Excavator)',
    manual: 'Manual (Hand Tools)',
    selective: 'Selective (Deconstruction)',
  };

  return (
    <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Demolition Scope & Debris Overview
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {methodLabels[method] || 'Mechanical'}
        </span>
      </div>

      <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-lg bg-white p-2 shadow-inner dark:bg-slate-950">
        <svg viewBox="0 0 500 280" className="h-full w-full select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="debrisPattern" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect width="12" height="12" fill="#78716c" />
              <rect x="1" y="1" width="4" height="3" fill="#a8a29e" opacity="0.5" />
              <rect x="6" y="5" width="5" height="4" fill="#57534e" opacity="0.4" />
              <rect x="2" y="7" width="3" height="3" fill="#a8a29e" opacity="0.3" />
            </pattern>
            <pattern id="wallPattern" width="20" height="10" patternUnits="userSpaceOnUse">
              <rect width="20" height="10" fill="#fbbf24" opacity="0.1" />
              <line x1="0" y1="9" x2="20" y2="9" stroke="#d97706" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>

          {/* Ground */}
          <line x1="20" y1="240" x2="480" y2="240" stroke="#94a3b8" strokeWidth="2" />
          <text x="25" y="258" className="fill-slate-400 text-[10px] font-mono">Ground Level</text>

          {/* Building Outline (before demolition) */}
          <rect x="60" y={240 - displayStories * 50} width="180" height={displayStories * 50} fill="url(#wallPattern)" stroke="#d97706" strokeWidth="2" strokeDasharray="4 2" rx="2" />
          <text x="150" y={235 - displayStories * 50} textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[9px] font-semibold">
            {structureLabels[structureType] || 'Structure'}
          </text>

          {/* Windows on building */}
          {displayStories >= 1 && (
            <>
              <rect x="80" y={230 - displayStories * 50} width="25" height="20" fill="#bae6fd" stroke="#0284c7" strokeWidth="1" opacity="0.7" />
              <rect x="160" y={230 - displayStories * 50} width="25" height="20" fill="#bae6fd" stroke="#0284c7" strokeWidth="1" opacity="0.7" />
            </>
          )}
          {displayStories >= 2 && (
            <>
              <rect x="80" y={185 - (displayStories - 2) * 50} width="25" height="20" fill="#bae6fd" stroke="#0284c7" strokeWidth="1" opacity="0.7" />
              <rect x="160" y={185 - (displayStories - 2) * 50} width="25" height="20" fill="#bae6fd" stroke="#0284c7" strokeWidth="1" opacity="0.7" />
            </>
          )}

          {/* Demolition arrows */}
          <line x1="250" y1={200 - displayStories * 20} x2="290" y2={200 - displayStories * 20} stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="250" y1={220 - displayStories * 20} x2="290" y2={220 - displayStories * 20} stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="270" y={190 - displayStories * 20} textAnchor="middle" className="fill-red-500 text-[9px] font-bold">DEMO</text>

          {/* Debris Pile */}
          <polygon
            points="300,240 340,200 380,195 420,200 460,240"
            fill="url(#debrisPattern)"
            stroke="#57534e"
            strokeWidth="2"
          />
          <text x="380" y="230" textAnchor="middle" className="fill-white text-[9px] font-bold">
            Debris
          </text>

          {/* Dumpster */}
          {includeHaul && (
            <g>
              <rect x="320" y="140" width="100" height="50" fill="#4ade80" stroke="#16a34a" strokeWidth="2" rx="3" />
              <text x="370" y="160" textAnchor="middle" className="fill-green-900 text-[8px] font-bold">30-YARD</text>
              <text x="370" y="172" textAnchor="middle" className="fill-green-900 text-[8px] font-bold">DUMPSTER</text>
              <line x1="325" y1="150" x2="325" y2="180" stroke="#16a34a" strokeWidth="1" />
              <line x1="335" y1="145" x2="335" y2="185" stroke="#16a34a" strokeWidth="1" />
              <line x1="415" y1="150" x2="415" y2="180" stroke="#16a34a" strokeWidth="1" />
              <line x1="405" y1="145" x2="405" y2="185" stroke="#16a34a" strokeWidth="1" />
              <text x="370" y="200" textAnchor="middle" className="fill-emerald-700 text-[9px] font-semibold">
                {displayDumpsters} Load{displayDumpsters > 1 ? 's' : ''}
              </text>
            </g>
          )}

          {/* Info Panel */}
          <rect x="30" y="30" width="160" height="70" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" className="dark:fill-slate-800 dark:stroke-slate-700" />
          <text x="40" y="48" className="fill-slate-600 dark:fill-slate-300 text-[9px] font-semibold">Project Summary</text>
          <text x="40" y="62" className="fill-slate-500 dark:fill-slate-400 text-[8px]">Area: {displayArea.toLocaleString()} {unitLabel}</text>
          <text x="40" y="74" className="fill-slate-500 dark:fill-slate-400 text-[8px]">Stories: {displayStories}</text>
          <text x="40" y="86" className="fill-slate-500 dark:fill-slate-400 text-[8px]">Method: {methodLabels[method]?.split(' ')[0] || 'Mechanical'}</text>

          {/* Arrow marker definition */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
            </marker>
          </defs>
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-amber-500/40 border border-amber-600 border-dashed" /> Structure
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-stone-500" /> Demolition Debris
        </span>
        {includeHaul && (
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-green-500" /> Dumpster ({displayDumpsters})
          </span>
        )}
      </div>
    </div>
  );
}
