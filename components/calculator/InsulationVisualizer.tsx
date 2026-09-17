'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getLocalizedTool } from '@/lib/i18n/toolTranslations';

interface InsulationVisualizerProps {
  application: string;
  area: number;
  framingSpacing: string;
  materialType: string;
  targetRValue: number;
  thickness: number; // inches or cm
  battPacks: number;
  blownBags: number;
  boardFeet: number;
  units: 'imperial' | 'metric';
  cavityWarning?: string;
}

export function InsulationVisualizer({
  application,
  area,
  framingSpacing,
  materialType,
  targetRValue,
  thickness,
  battPacks,
  blownBags,
  boardFeet,
  units,
  cavityWarning,
}: InsulationVisualizerProps) {
  const { locale } = useLanguage();
  const localized = getLocalizedTool('insulation-calculator', locale);
  const unitLabel = units === 'imperial' ? 'in' : 'cm';
  const displayThickness = Number(thickness) || 6.5;
  const displayArea = Number(area) || 500;
  const displayR = Number(targetRValue) || 38;

  // Material color styling
  let fillPattern = 'fiberglassPattern';
  let primaryColor = '#ec4899'; // pink for fiberglass
  let strokeColor = '#be185d';
  let materialName = 'Fiberglass Batts';

  if (materialType === 'rockwool-batt') {
    fillPattern = 'rockwoolPattern';
    primaryColor = '#a8a29e'; // stone gray
    strokeColor = '#57534e';
    materialName = 'Rockwool / Mineral Wool';
  } else if (materialType === 'cellulose-blown') {
    fillPattern = 'cellulosePattern';
    primaryColor = '#94a3b8'; // greyish cellulose
    strokeColor = '#475569';
    materialName = 'Blown-In Cellulose';
  } else if (materialType === 'fiberglass-blown') {
    fillPattern = 'blownFiberglassPattern';
    primaryColor = '#f472b6';
    strokeColor = '#db2777';
    materialName = 'Blown-In Fiberglass';
  } else if (materialType === 'sprayfoam-open') {
    fillPattern = 'sprayfoamOpenPattern';
    primaryColor = '#fef08a'; // soft yellow
    strokeColor = '#ca8a04';
    materialName = 'Open-Cell Spray Foam';
  } else if (materialType === 'sprayfoam-closed') {
    fillPattern = 'sprayfoamClosedPattern';
    primaryColor = '#ca8a04'; // amber/dense yellow
    strokeColor = '#854d0e';
    materialName = 'Closed-Cell Spray Foam';
  } else if (materialType === 'rigid-xps') {
    fillPattern = 'rigidXpsPattern';
    primaryColor = '#60a5fa'; // blue XPS foam
    strokeColor = '#2563eb';
    materialName = 'Rigid Foam (XPS)';
  } else if (materialType === 'rigid-polyiso') {
    fillPattern = 'polyisoPattern';
    primaryColor = '#fb923c'; // foil/orange polyiso
    strokeColor = '#ea580c';
    materialName = 'Polyisocyanurate (Polyiso)';
  }

  const isAttic = application === 'attic' || application === 'cathedral';
  const is24OC = framingSpacing === '24-oc';

  return (
    <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">
          {localized?.name || 'Insulation Visualizer'}
        </span>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
            R-{displayR} Rating
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            {materialName}
          </span>
        </div>
      </div>

      <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-lg bg-white p-2 shadow-inner dark:bg-slate-950">
        <svg viewBox="0 0 500 280" className="h-full w-full select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Fiberglass fluffy pattern */}
            <pattern id="fiberglassPattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="#fdf2f8" />
              <path d="M0,10 Q5,0 10,10 T20,10" fill="none" stroke="#f472b6" strokeWidth="1.5" opacity="0.7" />
              <path d="M0,15 Q5,5 10,15 T20,15" fill="none" stroke="#ec4899" strokeWidth="1.2" opacity="0.6" />
              <circle cx="5" cy="5" r="1.5" fill="#fbcfe8" />
              <circle cx="15" cy="8" r="1.2" fill="#f472b6" />
            </pattern>

            {/* Rockwool dense fibrous pattern */}
            <pattern id="rockwoolPattern" width="16" height="16" patternUnits="userSpaceOnUse">
              <rect width="16" height="16" fill="#f5f5f4" />
              <line x1="0" y1="4" x2="16" y2="4" stroke="#78716c" strokeWidth="1" strokeDasharray="3,2" />
              <line x1="0" y1="10" x2="16" y2="10" stroke="#57534e" strokeWidth="1.2" strokeDasharray="2,3" />
              <line x1="4" y1="0" x2="4" y2="16" stroke="#a8a29e" strokeWidth="0.8" opacity="0.5" />
            </pattern>

            {/* Cellulose granular pattern */}
            <pattern id="cellulosePattern" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect width="12" height="12" fill="#f1f5f9" />
              <circle cx="3" cy="3" r="1.2" fill="#64748b" />
              <circle cx="9" cy="4" r="1.5" fill="#94a3b8" />
              <circle cx="5" cy="9" r="1.3" fill="#475569" />
              <circle cx="10" cy="10" r="1.0" fill="#cbd5e1" />
            </pattern>

            {/* Spray foam pattern */}
            <pattern id="sprayfoamClosedPattern" width="16" height="16" patternUnits="userSpaceOnUse">
              <rect width="16" height="16" fill="#fefce8" />
              <circle cx="4" cy="4" r="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.5" />
              <circle cx="12" cy="6" r="2.5" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.5" />
              <circle cx="6" cy="12" r="3.2" fill="#fde047" stroke="#ca8a04" strokeWidth="0.5" />
              <circle cx="13" cy="13" r="2" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.5" />
            </pattern>

            {/* Wood stud pattern */}
            <pattern id="woodStudPattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="#fed7aa" />
              <line x1="0" y1="0" x2="20" y2="20" stroke="#f97316" strokeWidth="0.75" opacity="0.4" />
              <line x1="20" y1="0" x2="0" y2="20" stroke="#f97316" strokeWidth="0.75" opacity="0.4" />
            </pattern>
          </defs>

          {/* Background Structural Framing Frame */}
          <rect x="30" y="30" width="440" height="190" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" className="dark:fill-slate-900 dark:stroke-slate-800" />

          {/* Top Plate / Subfloor / Ceiling Sheathing */}
          <rect x="30" y="30" width="440" height="16" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          <text x="250" y="42" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9px] font-bold">
            {isAttic ? 'Attic Ceiling Drywall & Air Barrier Layer' : 'Exterior Wall Sheathing / Weather Barrier'}
          </text>

          {/* Bottom Plate */}
          <rect x="30" y="204" width="440" height="16" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          <text x="250" y="216" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9px] font-bold">
            {isAttic ? 'Upper Attic Truss / Joist Cord' : 'Interior 1/2" Drywall Finish Surface'}
          </text>

          {/* Stud / Joist Bays & Insulation Cavities */}
          {/* Stud 1 */}
          <rect x="30" y="46" width="24" height="158" fill="url(#woodStudPattern)" stroke="#d97706" strokeWidth="1" />
          <text x="42" y="130" textAnchor="middle" transform="rotate(-90 42 130)" className="fill-amber-900 text-[8px] font-bold">2×Stud</text>

          {/* Cavity 1 (Insulation Filled) */}
          <rect
            x="54"
            y={46}
            width={is24OC ? 180 : 120}
            height={158}
            fill={`url(#${fillPattern})`}
            stroke={strokeColor}
            strokeWidth="1.5"
          />
          <text x={is24OC ? 144 : 114} y="125" textAnchor="middle" className="fill-slate-800 dark:fill-slate-900 text-[12px] font-extrabold bg-white/80 px-1 rounded">
            R-{displayR}
          </text>
          <text x={is24OC ? 144 : 114} y="140" textAnchor="middle" className="fill-slate-700 dark:fill-slate-800 text-[9px] font-medium">
            {displayThickness} {unitLabel} Depth
          </text>

          {/* Stud 2 */}
          <rect x={is24OC ? 234 : 174} y="46" width="24" height="158" fill="url(#woodStudPattern)" stroke="#d97706" strokeWidth="1" />
          <text x={is24OC ? 246 : 186} y="130" textAnchor="middle" transform="rotate(-90 246 130)" className="fill-amber-900 text-[8px] font-bold">
            {is24OC ? '24" O.C.' : '16" O.C.'}
          </text>

          {/* Cavity 2 (Insulation Filled) */}
          <rect
            x={is24OC ? 258 : 198}
            y={46}
            width={is24OC ? 180 : 120}
            height={158}
            fill={`url(#${fillPattern})`}
            stroke={strokeColor}
            strokeWidth="1.5"
          />
          <text x={is24OC ? 348 : 258} y="125" textAnchor="middle" className="fill-slate-800 dark:fill-slate-900 text-[12px] font-extrabold">
            R-{displayR}
          </text>
          <text x={is24OC ? 348 : 258} y="140" textAnchor="middle" className="fill-slate-700 dark:fill-slate-800 text-[9px] font-medium">
            {materialName}
          </text>

          {/* Stud 3 */}
          {!is24OC && (
            <>
              <rect x="318" y="46" width="24" height="158" fill="url(#woodStudPattern)" stroke="#d97706" strokeWidth="1" />
              {/* Cavity 3 */}
              <rect
                x="342"
                y={46}
                width="104"
                height="158"
                fill={`url(#${fillPattern})`}
                stroke={strokeColor}
                strokeWidth="1.5"
              />
              <text x="394" y="130" textAnchor="middle" className="fill-slate-800 dark:fill-slate-900 text-[10px] font-bold">
                R-{displayR}
              </text>
            </>
          )}

          {/* Stud End */}
          <rect x="446" y="46" width="24" height="158" fill="url(#woodStudPattern)" stroke="#d97706" strokeWidth="1" />

          {/* Thermal Dimension Arrow on Right */}
          <g>
            <line x1="478" y1="46" x2="478" y2="204" stroke="#3b82f6" strokeWidth="1.5" />
            <polygon points="478,46 475,54 481,54" fill="#3b82f6" />
            <polygon points="478,204 475,196 481,196" fill="#3b82f6" />
            <text x="488" y="128" textAnchor="start" className="fill-blue-600 dark:fill-blue-400 text-[9px] font-bold">
              {displayThickness} {unitLabel}
            </text>
          </g>

          {/* Live Summary Bar on Bottom */}
          <rect x="30" y="235" width="440" height="34" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" className="dark:fill-slate-900 dark:stroke-slate-700" />
          <text x="45" y="250" className="fill-blue-900 dark:fill-blue-300 text-[9px] font-semibold">
            Coverage Area: {displayArea} {units === 'imperial' ? 'sq ft' : 'm²'}
          </text>
          <text x="45" y="262" className="fill-blue-800 dark:fill-blue-400 text-[8px]">
            Target Rating: R-{displayR} ({(displayR * 0.1761).toFixed(2)} RSI)
          </text>

          <text x="210" y="250" className="fill-blue-900 dark:fill-blue-300 text-[9px] font-semibold">
            Batt Packs: {battPacks > 0 ? battPacks : '—'}
          </text>
          <text x="210" y="262" className="fill-blue-800 dark:fill-blue-400 text-[8px]">
            Blown-In: {blownBags > 0 ? `${blownBags} bags` : '—'}
          </text>

          <text x="340" y="250" className="fill-blue-900 dark:fill-blue-300 text-[9px] font-semibold">
            Spray Foam: {boardFeet > 0 ? `${boardFeet} bd ft` : '—'}
          </text>
          <text x="340" y="262" className="fill-blue-800 dark:fill-blue-400 text-[8px]">
            Framing: {framingSpacing === '16-oc' ? '16" On-Center' : framingSpacing === '24-oc' ? '24" On-Center' : 'Continuous'}
          </text>
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-300">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: primaryColor }} />
          {materialName} Fill
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-amber-400 border border-amber-600" /> Framing Studs ({framingSpacing})
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-blue-500" /> Target Thermal Depth ({displayThickness} {unitLabel})
        </span>
      </div>

      {cavityWarning && (
        <div className="mt-3.5 flex items-start gap-2.5 rounded-lg border border-amber-300 bg-amber-50/90 p-3 text-xs text-amber-900 shadow-sm dark:border-amber-700/60 dark:bg-amber-950/40 dark:text-amber-200">
          <span className="shrink-0 text-base" aria-hidden="true">⚠️</span>
          <div>
            <span className="font-semibold">{cavityWarning}</span>
          </div>
        </div>
      )}
    </div>
  );
}
