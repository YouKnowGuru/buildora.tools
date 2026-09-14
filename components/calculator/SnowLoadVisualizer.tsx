'use client';

import React from 'react';

interface SnowLoadVisualizerProps {
  groundSnowLoad: number;
  roofSlope: number;
  roofSurface: string;
  exposureCategory: string;
  thermalCategory: string;
  riskCategory: string;
  roofArea: number;
  includeDrift: boolean;
  designSnowLoad: number;
  driftHeight: number;
  driftWidth: number;
  units: 'imperial' | 'metric';
}

export function SnowLoadVisualizer({
  groundSnowLoad,
  roofSlope,
  roofSurface,
  exposureCategory,
  thermalCategory,
  riskCategory,
  roofArea,
  includeDrift,
  designSnowLoad,
  driftHeight,
  driftWidth,
  units,
}: SnowLoadVisualizerProps) {
  const loadUnit = units === 'imperial' ? 'psf' : 'kPa';
  const unitLabel = units === 'imperial' ? 'ft' : 'm';
  const displayPg = Number(groundSnowLoad) || 25;
  const displaySlope = Number(roofSlope) || 0;
  const displayDesign = Number(designSnowLoad) || 20;
  const displayDriftH = Number(driftHeight) || 0;
  const displayDriftW = Number(driftWidth) || 0;

  const slopeRad = (displaySlope * Math.PI) / 180;
  const roofRun = 180;
  const roofRise = Math.tan(slopeRad) * roofRun;
  const snowDepth = Math.min(40, displayDesign * 1.5);

  const exposureLabels: Record<string, string> = {
    sheltered: 'Sheltered (Ce=1.3)',
    partial: 'Partial (Ce=1.0)',
    full: 'Fully Exposed (Ce=0.9)',
  };

  return (
    <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          ASCE 7-22 Snow Load Distribution
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {displayPg} {loadUnit} Ground
        </span>
      </div>

      <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-lg bg-white p-2 shadow-inner dark:bg-slate-950">
        <svg viewBox="0 0 500 280" className="h-full w-full select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="snowPattern" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect width="12" height="12" fill="#e0f2fe" />
              <circle cx="3" cy="3" r="1" fill="#bae6fd" opacity="0.6" />
              <circle cx="9" cy="8" r="0.8" fill="#bae6fd" opacity="0.5" />
            </pattern>
            <linearGradient id="driftGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Sky */}
          <rect x="0" y="0" width="500" height="50" fill="transparent" />

          {/* Snowflakes */}
          {Array.from({ length: 8 }).map((_, i) => (
            <text key={i} x={50 + i * 55} y={25 + (i % 3) * 10} className="fill-sky-300 dark:fill-sky-600 text-[10px]">❄</text>
          ))}

          {/* Roof Structure */}
          <polygon
            points={`150,${220 - roofRise} 330,${220 - roofRise} 350,220 130,220`}
            fill="#78716c"
            stroke="#57534e"
            strokeWidth="2"
          />

          {/* Roof Surface Line */}
          <line x1="150" y1={220 - roofRise} x2="330" y2={220 - roofRise} stroke="#1f2937" strokeWidth="3" />

          {/* Snow Layer on Roof */}
          {displaySlope < 70 && (
            <polygon
              points={`150,${220 - roofRise} 330,${220 - roofRise} 328,${220 - roofRise - snowDepth} 152,${220 - roofRise - snowDepth}`}
              fill="url(#snowPattern)"
              stroke="#0284c7"
              strokeWidth="1.5"
            />
          )}

          {/* Drift Surcharge (if enabled) */}
          {includeDrift && displayDriftH > 0 && (
            <g>
              <polygon
                points={`330,${220 - roofRise} 330,${220 - roofRise - snowDepth - displayDriftH * 5} ${330 + displayDriftW * 3},${220 - roofRise - snowDepth}`}
                fill="url(#driftGrad)"
                stroke="#1d4ed8"
                strokeWidth="1.5"
              />
              <text x={335 + displayDriftW * 1.5} y={220 - roofRise - snowDepth - displayDriftH * 2} textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[8px] font-bold">
                Drift
              </text>
            </g>
          )}

          {/* Building Walls */}
          <rect x="130" y="220" width="220" height="40" fill="#e7e5e4" stroke="#a8a29e" strokeWidth="1.5" className="dark:fill-slate-700 dark:stroke-slate-600" />
          <text x="240" y="245" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9px] font-semibold">Structure</text>

          {/* Slope Indicator */}
          <path d={`M 200,${215 - roofRise} A 30 30 0 0 1 ${200 + 25 * Math.cos(slopeRad)},${215 - roofRise - 25 * Math.sin(slopeRad)}`} fill="none" stroke="#ef4444" strokeWidth="1.5" />
          <text x="220" y={210 - roofRise - 10} className="fill-red-600 dark:fill-red-400 text-[9px] font-bold">
            {displaySlope}°
          </text>

          {/* Ground Snow Load Arrow */}
          <line x1="80" y1="60" x2="80" y2={220 - roofRise - snowDepth - 10} stroke="#0284c7" strokeWidth="2" strokeDasharray="4 2" />
          <text x="75" y="55" textAnchor="end" className="fill-sky-700 dark:fill-sky-400 text-[8px] font-bold">
            pg={displayPg}
          </text>

          {/* Design Load Arrow */}
          <line x1="420" y1="60" x2="420" y2={220 - roofRise - snowDepth - 10} stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 2" />
          <text x="425" y="55" className="fill-purple-700 dark:fill-purple-400 text-[8px] font-bold">
            pd={displayDesign}
          </text>

          {/* Info Panel */}
          <rect x="30" y="30" width="140" height="75" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-slate-800 dark:stroke-slate-700" />
          <text x="40" y="46" className="fill-slate-600 dark:fill-slate-300 text-[9px] font-semibold">Load Parameters</text>
          <text x="40" y="58" className="fill-slate-500 dark:fill-slate-400 text-[8px]">Surface: {roofSurface === 'slippery' ? 'Slippery' : 'Non-Slippery'}</text>
          <text x="40" y="70" className="fill-slate-500 dark:fill-slate-400 text-[8px]">Exposure: {exposureLabels[exposureCategory]?.split(' ')[0] || 'Partial'}</text>
          <text x="40" y="82" className="fill-slate-500 dark:fill-slate-400 text-[8px]">Risk: {riskCategory?.toUpperCase() || 'CAT II'}</text>
          <text x="40" y="94" className="fill-slate-500 dark:fill-slate-400 text-[8px]">Area: {Number(roofArea).toLocaleString()} {unitLabel}²</text>
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-sky-200 border border-sky-400" /> Snow Load
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-stone-500" /> Roof Structure
        </span>
        {includeDrift && displayDriftH > 0 && (
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-blue-300 border border-blue-500" /> Drift Surcharge
          </span>
        )}
      </div>
    </div>
  );
}
