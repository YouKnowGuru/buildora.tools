'use client';

import React, { useState } from 'react';
import { Bath, Sparkles, Layers, DollarSign, Clock, CheckCircle2, Flame, SlidersHorizontal } from 'lucide-react';
import type { BathroomType, FinishTier, LayoutChange, Region } from '@/lib/formulas/bathroomRemodel';
import { REGIONAL_FACTORS, calculateBathroomRemodel } from '@/lib/formulas/bathroomRemodel';

interface BathroomRemodelVisualizerProps {
  bathroomType?: BathroomType;
  roomLength?: number;
  roomWidth?: number;
  finishTier?: FinishTier;
  layoutChange?: LayoutChange;
  includeTileShower?: boolean;
  includeFreestandingTub?: boolean;
  includeDoubleVanity?: boolean;
  includeHeatedFloor?: boolean;
  diyDemolition?: boolean;
  region?: Region;
  totalEstimatedCost?: number;
  estimatedCostLow?: number;
  estimatedCostHigh?: number;
  costPerSqFt?: number;
  squareFootage?: number;
  laborCost?: number;
  materialsCost?: number;
  plumbingCost?: number;
  tileWaterproofingCost?: number;
  vanityCountertopCost?: number;
  showerTubCost?: number;
  electricalCost?: number;
  demoCost?: number;
  paintingTrimCost?: number;
  permitsAndContingency?: number;
  estimatedWeeksMin?: number;
  estimatedWeeksMax?: number;
  currencySymbol?: string;
  units?: 'imperial' | 'metric';
}

export function BathroomRemodelVisualizer({
  bathroomType = 'full',
  roomLength = 8,
  roomWidth = 6,
  finishTier = 'mid-range',
  layoutChange = 'none',
  includeTileShower = true,
  includeFreestandingTub = false,
  includeDoubleVanity = false,
  includeHeatedFloor = false,
  diyDemolition = false,
  region = 'us-national',
  totalEstimatedCost = 14760,
  estimatedCostLow = 12546,
  estimatedCostHigh = 17712,
  costPerSqFt = 308,
  squareFootage = 48,
  laborCost = 8266,
  materialsCost = 6494,
  plumbingCost = 3100,
  tileWaterproofingCost = 3542,
  vanityCountertopCost = 2214,
  showerTubCost = 1919,
  electricalCost = 1328,
  demoCost = 1033,
  paintingTrimCost = 738,
  permitsAndContingency = 886,
  estimatedWeeksMin = 3,
  estimatedWeeksMax = 4,
  currencySymbol = '$',
  units = 'imperial',
}: BathroomRemodelVisualizerProps) {
  const isMetric = units === 'metric';
  const areaUnit = isMetric ? 'm²' : 'sq ft';
  const costPerAreaLabel = isMetric ? 'Cost / m²' : 'Cost / Sq Ft';
  const dimUnit = isMetric ? 'm' : 'ft';
  const [activeTab, setActiveTab] = useState<'floorplan' | 'budget' | 'scenarios'>('floorplan');

  const tierColors: Record<FinishTier, { label: string; badge: string; border: string }> = {
    budget: {
      label: 'Budget Refresh',
      badge: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
      border: 'border-slate-300 dark:border-slate-700',
    },
    'mid-range': {
      label: 'Mid-Range Quality',
      badge: 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground',
      border: 'border-primary/40',
    },
    luxury: {
      label: 'Luxury Custom Suite',
      badge: 'bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300',
      border: 'border-amber-400 dark:border-amber-600',
    },
  };

  const currentTier = tierColors[finishTier] || tierColors['mid-range'];

  // Floor plan layout sizing
  const svgWidth = 620;
  const svgHeight = 360;
  const margin = 36;
  const planWidth = svgWidth - margin * 2;
  const planHeight = svgHeight - margin * 2;

  // Breakdown percentages for budget bar
  const safeTotal = Math.max(1, totalEstimatedCost);
  const tilePct = Math.round((tileWaterproofingCost / safeTotal) * 100);
  const plumbPct = Math.round((plumbingCost / safeTotal) * 100);
  const vanityPct = Math.round((vanityCountertopCost / safeTotal) * 100);
  const showerPct = Math.round((showerTubCost / safeTotal) * 100);
  const elecPct = Math.round((electricalCost / safeTotal) * 100);
  const demoPct = Math.round((demoCost / safeTotal) * 100);
  const paintPct = Math.round((paintingTrimCost / safeTotal) * 100);
  const permitPct = Math.max(0, 100 - (tilePct + plumbPct + vanityPct + showerPct + elecPct + demoPct + paintPct));

  // Dynamic Top Cost Drivers
  const potentialDrivers = [
    ...(layoutChange !== 'none'
      ? [{
          icon: '🔧',
          label: layoutChange === 'minor' ? 'Minor plumbing shift' : 'Major plumbing relocation',
          cost: layoutChange === 'minor' ? (finishTier === 'budget' ? 1200 : finishTier === 'mid-range' ? 2200 : 3800) : (finishTier === 'budget' ? 2800 : finishTier === 'mid-range' ? 4800 : 8500),
          isAddon: true,
        }]
      : []),
    ...(includeTileShower && bathroomType !== 'powder'
      ? [{
          icon: '🚿',
          label: 'Custom tile shower',
          cost: finishTier === 'budget' ? 2400 : finishTier === 'mid-range' ? 4200 : 7500,
          isAddon: true,
        }]
      : []),
    {
      icon: '🔧',
      label: 'Plumbing rough-in & trim',
      cost: plumbingCost,
      isAddon: false,
    },
    {
      icon: '🧱',
      label: 'Tile & waterproofing',
      cost: tileWaterproofingCost,
      isAddon: false,
    },
    {
      icon: '🪵',
      label: 'Vanity & countertop',
      cost: vanityCountertopCost,
      isAddon: false,
    },
    ...(includeFreestandingTub && bathroomType !== 'powder'
      ? [{
          icon: '🛁',
          label: 'Freestanding tub',
          cost: finishTier === 'budget' ? 1400 : finishTier === 'mid-range' ? 2800 : 5400,
          isAddon: true,
        }]
      : []),
    ...(includeHeatedFloor
      ? [{
          icon: '🔥',
          label: 'Radiant heated floor',
          cost: 600 + Math.max(10, Math.round(squareFootage * 0.65)) * (finishTier === 'luxury' ? 24 : 18),
          isAddon: true,
        }]
      : []),
  ];

  const topDrivers = potentialDrivers.sort((a, b) => b.cost - a.cost).slice(0, 3);

  // Computed Scenarios for comparison
  const scenarioKeepPlumbing = calculateBathroomRemodel({
    bathroomType,
    roomLength,
    roomWidth,
    finishTier,
    layoutChange: 'none',
    includeTileShower,
    includeFreestandingTub,
    includeDoubleVanity,
    includeHeatedFloor,
    diyDemolition,
    region,
  });

  const scenarioMovePlumbing = calculateBathroomRemodel({
    bathroomType,
    roomLength,
    roomWidth,
    finishTier,
    layoutChange: layoutChange === 'none' ? 'minor' : 'major',
    includeTileShower,
    includeFreestandingTub,
    includeDoubleVanity,
    includeHeatedFloor,
    diyDemolition,
    region,
    units,
  });

  const scenarioBudget = calculateBathroomRemodel({
    bathroomType,
    roomLength,
    roomWidth,
    finishTier: 'budget',
    layoutChange: 'none',
    includeTileShower: false,
    includeFreestandingTub: false,
    includeDoubleVanity: false,
    includeHeatedFloor: false,
    diyDemolition,
    region,
    units,
  });

  const scenarioLuxury = calculateBathroomRemodel({
    bathroomType,
    roomLength,
    roomWidth,
    finishTier: 'luxury',
    layoutChange: 'major',
    includeTileShower: true,
    includeFreestandingTub: true,
    includeDoubleVanity: true,
    includeHeatedFloor: true,
    diyDemolition: false,
    region,
    units,
  });

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-colors dark:border-slate-800 dark:bg-slate-900 mb-8">
      {/* Top Banner: Estimated Remodel Summary */}
      <div className="border-b border-slate-100 bg-slate-50/70 px-5 py-4 dark:border-slate-800 dark:bg-slate-800/40">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Likely Remodel Cost
            </span>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mt-0.5">
              <span className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                {currencySymbol}{totalEstimatedCost.toLocaleString()}
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Estimated Range: <strong className="text-slate-700 dark:text-slate-200">{currencySymbol}{estimatedCostLow.toLocaleString()} – {currencySymbol}{estimatedCostHigh.toLocaleString()}</strong>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              100% Reconciled Cost Model
            </span>
          </div>
        </div>

        {/* Top Cost Drivers Strip (Immediately Below Likely Cost) */}
        <div className="mt-3.5 flex flex-wrap items-center gap-2 border-t border-slate-200/70 pt-3 dark:border-slate-800">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Top Cost Drivers:
          </span>
          {topDrivers.map((driver) => (
            <span
              key={driver.label}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/90 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-2xs dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              <span aria-hidden="true">{driver.icon}</span>
              <span>{driver.label}:</span>
              <strong className="font-bold text-primary dark:text-primary-foreground">
                {driver.isAddon ? '+' : ''}{currencySymbol}{driver.cost.toLocaleString()}
              </strong>
            </span>
          ))}
        </div>
      </div>

      {/* Visualizer Tab Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 p-4 sm:px-5 sm:py-3 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
            <Bath className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">
              Architectural Floorplan &amp; Cost Model
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {squareFootage} {areaUnit} • {currentTier.label} • {estimatedWeeksMin}–{estimatedWeeksMax} Wks
            </p>
          </div>
        </div>

        {/* Tab Controls - Responsive on all screen widths */}
        <div className="grid grid-cols-3 sm:flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800 gap-1 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setActiveTab('floorplan')}
            className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${
              activeTab === 'floorplan'
                ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-700 dark:text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <Layers className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">Blueprint</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('budget')}
            className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${
              activeTab === 'budget'
                ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-700 dark:text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <DollarSign className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">Trades</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('scenarios')}
            className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${
              activeTab === 'scenarios'
                ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-700 dark:text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <SlidersHorizontal className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">Scenarios</span>
          </button>
        </div>
      </div>

      {/* Main Tab Views */}
      <div className="p-4 sm:p-6">
        {activeTab === 'floorplan' ? (
          <div className="relative flex flex-col items-center">
            {/* Top Indicator Badges */}
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
              <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${currentTier.badge}`}>
                {currentTier.label}
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300">
                {bathroomType === 'powder'
                  ? 'Half Bath / Powder Room'
                  : bathroomType === 'three-quarter'
                  ? '3/4 Bath w/ Standing Shower'
                  : bathroomType === 'primary-master'
                  ? 'Master Bathroom Suite'
                  : 'Standard Full Bathroom'}
              </span>
              {includeHeatedFloor && (
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
                  <Flame className="h-3 w-3 text-amber-500" />
                  In-Floor Radiant Heating Active
                </span>
              )}
            </div>

            {/* SVG Schematic Floor Plan */}
            <div className="w-full max-w-[620px] overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 p-2 shadow-inner dark:border-slate-800 dark:bg-slate-950/60">
              <svg
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                className="w-full h-auto drop-shadow-sm select-none"
                aria-label="Bathroom Remodel Blueprint Layout"
              >
                <defs>
                  <pattern id="floorTile" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path
                      d="M 24 0 L 0 0 0 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      className={
                        includeHeatedFloor
                          ? 'text-amber-300/40 dark:text-amber-500/20'
                          : 'text-slate-300/40 dark:text-slate-700/30'
                      }
                    />
                  </pattern>

                  <pattern id="radiantCoil" width="28" height="28" patternUnits="userSpaceOnUse">
                    <path
                      d="M 4 14 Q 14 4, 24 14 T 4 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeDasharray="2 2"
                      className="text-amber-500/30 dark:text-amber-400/20"
                    />
                  </pattern>

                  <linearGradient id="wetAreaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                {/* Exterior Wall Shell */}
                <rect
                  x={margin}
                  y={margin}
                  width={planWidth}
                  height={planHeight}
                  rx="10"
                  className="fill-white dark:fill-slate-900 stroke-slate-400 dark:stroke-slate-600"
                  strokeWidth="8"
                />

                {/* Interior Walkable Tile Surface */}
                <rect
                  x={margin + 4}
                  y={margin + 4}
                  width={planWidth - 8}
                  height={planHeight - 8}
                  rx="6"
                  fill="url(#floorTile)"
                />

                {/* Radiant Heating Glow Overlay if enabled */}
                {includeHeatedFloor && (
                  <rect
                    x={margin + 16}
                    y={margin + 16}
                    width={planWidth - 32}
                    height={planHeight - 32}
                    fill="url(#radiantCoil)"
                    rx="6"
                  />
                )}

                {/* Fixture 1: Vanity & Sink(s) (Left Wall) */}
                <g transform={`translate(${margin + 16}, ${margin + 16})`}>
                  <rect
                    x="0"
                    y="0"
                    width={includeDoubleVanity ? 220 : 130}
                    height="76"
                    rx="6"
                    className="fill-slate-100 stroke-slate-300 dark:fill-slate-800 dark:stroke-slate-700"
                    strokeWidth="2"
                  />
                  <ellipse
                    cx="48"
                    cy="38"
                    rx="28"
                    ry="22"
                    className="fill-white stroke-slate-400 dark:fill-slate-700 dark:stroke-slate-500"
                    strokeWidth="2"
                  />
                  <circle cx="48" cy="38" r="4" className="fill-slate-400 dark:fill-slate-500" />
                  <circle cx="48" cy="18" r="3" className="fill-primary" />

                  {includeDoubleVanity && (
                    <>
                      <ellipse
                        cx="165"
                        cy="38"
                        rx="28"
                        ry="22"
                        className="fill-white stroke-slate-400 dark:fill-slate-700 dark:stroke-slate-500"
                        strokeWidth="2"
                      />
                      <circle cx="165" cy="38" r="4" className="fill-slate-400 dark:fill-slate-500" />
                      <circle cx="165" cy="18" r="3" className="fill-primary" />
                    </>
                  )}
                  <text
                    x={includeDoubleVanity ? 110 : 65}
                    y="96"
                    textAnchor="middle"
                    className="text-[10px] font-bold uppercase tracking-wider fill-slate-500 dark:fill-slate-400"
                  >
                    {includeDoubleVanity ? 'Double Basin Vanity' : 'Vanity Cabinet'}
                  </text>
                </g>

                {/* Fixture 2: Water Closet / Toilet */}
                <g
                  transform={`translate(${
                    margin + (includeDoubleVanity ? 260 : 180)
                  }, ${margin + 16})`}
                >
                  <rect
                    x="0"
                    y="0"
                    width="62"
                    height="28"
                    rx="4"
                    className="fill-white stroke-slate-400 dark:fill-slate-800 dark:stroke-slate-600"
                    strokeWidth="2"
                  />
                  <ellipse
                    cx="31"
                    cy="48"
                    rx="22"
                    ry="28"
                    className="fill-white stroke-slate-400 dark:fill-slate-800 dark:stroke-slate-600"
                    strokeWidth="2"
                  />
                  <circle cx="31" cy="48" r="7" className="fill-slate-200 dark:fill-slate-700" />
                  <text
                    x="31"
                    y="96"
                    textAnchor="middle"
                    className="text-[10px] font-bold uppercase tracking-wider fill-slate-500 dark:fill-slate-400"
                  >
                    Toilet (WC)
                  </text>
                </g>

                {/* Fixture 3: Wet Zone / Shower or Tub/Shower */}
                {bathroomType !== 'powder' && (
                  <g transform={`translate(${margin + planWidth - 190}, ${margin + 16})`}>
                    <rect
                      x="0"
                      y="0"
                      width="174"
                      height={includeFreestandingTub ? 140 : planHeight - 32}
                      rx="6"
                      fill="url(#wetAreaGrad)"
                      className="stroke-sky-400 dark:stroke-sky-500"
                      strokeWidth="2"
                      strokeDasharray={includeTileShower ? 'none' : '4 2'}
                    />

                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2={includeFreestandingTub ? 140 : planHeight - 32}
                      className="stroke-sky-500 dark:stroke-sky-400"
                      strokeWidth="3.5"
                    />

                    <circle
                      cx="87"
                      cy={includeFreestandingTub ? 70 : 90}
                      r="7"
                      className="fill-slate-300 stroke-slate-500 dark:fill-slate-700 dark:stroke-slate-400"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="87"
                      cy={includeFreestandingTub ? 70 : 90}
                      r="2"
                      className="fill-slate-600 dark:fill-slate-300"
                    />
                    <path
                      d="M 87 18 L 87 32"
                      className="stroke-primary"
                      strokeWidth="3"
                    />
                    <text
                      x="87"
                      y={includeFreestandingTub ? 120 : planHeight - 50}
                      textAnchor="middle"
                      className="text-[10px] font-bold uppercase tracking-wider fill-sky-700 dark:fill-sky-300"
                    >
                      {includeTileShower ? 'Custom Tile Shower' : 'Tub / Shower Unit'}
                    </text>
                  </g>
                )}

                {/* Fixture 4: Optional Freestanding Tub */}
                {includeFreestandingTub && bathroomType !== 'powder' && (
                  <g transform={`translate(${margin + planWidth - 190}, ${margin + 180})`}>
                    <ellipse
                      cx="87"
                      cy="48"
                      rx="80"
                      ry="36"
                      className="fill-white stroke-slate-400 dark:fill-slate-800 dark:stroke-slate-600"
                      strokeWidth="2.5"
                    />
                    <ellipse
                      cx="87"
                      cy="48"
                      rx="66"
                      ry="26"
                      className="fill-slate-100 stroke-slate-300 dark:fill-slate-700 dark:stroke-slate-600"
                      strokeWidth="1.5"
                    />
                    <circle cx="87" cy="48" r="4" className="fill-slate-400" />
                    <circle cx="16" cy="48" r="3.5" className="fill-primary" />
                    <text
                      x="87"
                      y="100"
                      textAnchor="middle"
                      className="text-[10px] font-bold uppercase tracking-wider fill-slate-500 dark:fill-slate-400"
                    >
                      Freestanding Tub
                    </text>
                  </g>
                )}

                {/* Dimension Arrows */}
                <g className="stroke-slate-400 dark:stroke-slate-500">
                  <line x1={margin + 10} y1={margin - 14} x2={margin + planWidth - 10} y2={margin - 14} strokeWidth="1.5" />
                  <path d={`M ${margin + 14} ${margin - 18} L ${margin + 6} ${margin - 14} L ${margin + 14} ${margin - 10}`} fill="none" strokeWidth="1.5" />
                  <path d={`M ${margin + planWidth - 14} ${margin - 18} L ${margin + planWidth - 6} ${margin - 14} L ${margin + planWidth - 14} ${margin - 10}`} fill="none" strokeWidth="1.5" />
                </g>
                <text
                  x={svgWidth / 2}
                  y={margin - 18}
                  textAnchor="middle"
                  className="text-[11px] font-bold fill-slate-600 dark:fill-slate-300"
                >
                  Length: {roomLength} {dimUnit}
                </text>

                <g className="stroke-slate-400 dark:stroke-slate-500">
                  <line x1={margin - 14} y1={margin + 10} x2={margin - 14} y2={margin + planHeight - 10} strokeWidth="1.5" />
                  <path d={`M ${margin - 18} ${margin + 14} L ${margin - 14} ${margin + 6} L ${margin - 10} ${margin + 14}`} fill="none" strokeWidth="1.5" />
                  <path d={`M ${margin - 18} ${margin + planHeight - 14} L ${margin - 14} ${margin + planHeight - 6} L ${margin - 10} ${margin + planHeight - 14}`} fill="none" strokeWidth="1.5" />
                </g>
                <text
                  x={margin - 20}
                  y={svgHeight / 2}
                  textAnchor="middle"
                  transform={`rotate(-90, ${margin - 20}, ${svgHeight / 2})`}
                  className="text-[11px] font-bold fill-slate-600 dark:fill-slate-300"
                >
                  Width: {roomWidth} {dimUnit}
                </text>
              </svg>
            </div>

            {/* Layout Notes / Quick Stats */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full">
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-2.5 dark:border-slate-800 dark:bg-slate-800/40 text-center">
                <span className="block text-[10px] uppercase font-bold text-slate-400">Total Area</span>
                <span className="text-sm font-extrabold text-slate-800 dark:text-slate-100">{squareFootage} {areaUnit}</span>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-2.5 dark:border-slate-800 dark:bg-slate-800/40 text-center">
                <span className="block text-[10px] uppercase font-bold text-slate-400">{costPerAreaLabel} <span className="font-normal normal-case">(secondary)</span></span>
                <span className="text-sm font-extrabold text-slate-800 dark:text-slate-100">
                  {currencySymbol}{costPerSqFt}
                </span>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-2.5 dark:border-slate-800 dark:bg-slate-800/40 text-center">
                <span className="block text-[10px] uppercase font-bold text-slate-400">Labor Share</span>
                <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                  {Math.round((laborCost / safeTotal) * 100)}%
                </span>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-2.5 dark:border-slate-800 dark:bg-slate-800/40 text-center">
                <span className="block text-[10px] uppercase font-bold text-slate-400">Timeline</span>
                <span className="text-sm font-extrabold text-slate-800 dark:text-slate-100">
                  {estimatedWeeksMin}–{estimatedWeeksMax} Wks
                </span>
              </div>
            </div>
          </div>
        ) : activeTab === 'budget' ? (
          /* Budget & Trade Allocation Tab */
          <div className="space-y-5">
            {/* Visual Progress Stacked Bar */}
            <div>
              <div className="mb-2 flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-600 dark:text-slate-300">100% Reconciled Trade Distribution</span>
                <span className="font-bold text-primary">
                  {currencySymbol}{totalEstimatedCost.toLocaleString()} Total
                </span>
              </div>
              <div className="flex h-4 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div style={{ width: `${tilePct}%` }} className="bg-sky-500" title={`Tile: ${tilePct}%`} />
                <div style={{ width: `${plumbPct}%` }} className="bg-blue-600" title={`Plumbing: ${plumbPct}%`} />
                <div style={{ width: `${vanityPct}%` }} className="bg-indigo-500" title={`Vanity: ${vanityPct}%`} />
                <div style={{ width: `${showerPct}%` }} className="bg-teal-500" title={`Shower/Tub: ${showerPct}%`} />
                <div style={{ width: `${elecPct}%` }} className="bg-amber-500" title={`Electrical: ${elecPct}%`} />
                <div style={{ width: `${demoPct}%` }} className="bg-rose-500" title={`Demolition: ${demoPct}%`} />
                <div style={{ width: `${paintPct}%` }} className="bg-emerald-500" title={`Paint: ${paintPct}%`} />
                <div style={{ width: `${permitPct}%` }} className="bg-slate-400" title={`Permits/Contingency: ${permitPct}%`} />
              </div>
            </div>

            {/* Itemized Reconciled Cost Table */}
            <div className="overflow-hidden rounded-xl border border-slate-200/90 dark:border-slate-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="p-3">Trade Component</th>
                    <th className="p-3 text-right">Budget Share</th>
                    <th className="p-3 text-right">Estimated Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                  <tr>
                    <td className="p-3 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-sky-500" />
                      Tile & Waterproofing
                    </td>
                    <td className="p-3 text-right text-slate-500">{tilePct}%</td>
                    <td className="p-3 text-right font-bold text-slate-900 dark:text-white">
                      {currencySymbol}{tileWaterproofingCost.toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-600" />
                      Plumbing Rough-In & Trim
                    </td>
                    <td className="p-3 text-right text-slate-500">{plumbPct}%</td>
                    <td className="p-3 text-right font-bold text-slate-900 dark:text-white">
                      {currencySymbol}{plumbingCost.toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-indigo-500" />
                      Vanity, Countertop & Basin
                    </td>
                    <td className="p-3 text-right text-slate-500">{vanityPct}%</td>
                    <td className="p-3 text-right font-bold text-slate-900 dark:text-white">
                      {currencySymbol}{vanityCountertopCost.toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-teal-500" />
                      Shower Enclosure & Tub
                    </td>
                    <td className="p-3 text-right text-slate-500">{showerPct}%</td>
                    <td className="p-3 text-right font-bold text-slate-900 dark:text-white">
                      {currencySymbol}{showerTubCost.toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      Electrical, Ventilation & Lighting
                    </td>
                    <td className="p-3 text-right text-slate-500">{elecPct}%</td>
                    <td className="p-3 text-right font-bold text-slate-900 dark:text-white">
                      {currencySymbol}{electricalCost.toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-rose-500" />
                      Demolition & Haul-Off
                    </td>
                    <td className="p-3 text-right text-slate-500">{demoPct}%</td>
                    <td className="p-3 text-right font-bold text-slate-900 dark:text-white">
                      {currencySymbol}{demoCost.toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      Drywall, Paint & Trim
                    </td>
                    <td className="p-3 text-right text-slate-500">{paintPct}%</td>
                    <td className="p-3 text-right font-bold text-slate-900 dark:text-white">
                      {currencySymbol}{paintingTrimCost.toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-slate-400" />
                      Permits & Contingency Reserve
                    </td>
                    <td className="p-3 text-right text-slate-500">{permitPct}%</td>
                    <td className="p-3 text-right font-bold text-slate-900 dark:text-white">
                      {currencySymbol}{permitsAndContingency.toLocaleString()}
                    </td>
                  </tr>
                </tbody>
                <tfoot className="bg-slate-50 dark:bg-slate-800/80 border-t-2 border-slate-200 dark:border-slate-700 font-bold">
                  <tr>
                    <td className="p-3 text-slate-900 dark:text-white">Total Project Remodel</td>
                    <td className="p-3 text-right text-slate-700 dark:text-slate-300">100%</td>
                    <td className="p-3 text-right text-base text-primary">
                      {currencySymbol}{totalEstimatedCost.toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Contractor Labor vs Materials Split */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-800/50">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Labor vs Materials Split
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-xs text-slate-500">Skilled Trades Labor:</span>
                  <p className="font-extrabold text-slate-900 dark:text-white">
                    {currencySymbol}{laborCost.toLocaleString()}{' '}
                    <span className="text-xs font-normal text-slate-500">
                      ({Math.round((laborCost / safeTotal) * 100)}%)
                    </span>
                  </p>
                </div>
                <div>
                  <span className="text-xs text-slate-500">Materials &amp; Fixtures:</span>
                  <p className="font-extrabold text-slate-900 dark:text-white">
                    {currencySymbol}{materialsCost.toLocaleString()}{' '}
                    <span className="text-xs font-normal text-slate-500">
                      ({Math.round((materialsCost / safeTotal) * 100)}%)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* What's Driving Your Cost */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                What&apos;s Driving Your Estimate?
              </h4>
              <div className="space-y-2.5">
                {/* Top 3 cost drivers */}
                {[
                  { label: '🧱 Tile & Waterproofing', cost: tileWaterproofingCost, pct: tilePct },
                  { label: '🚿 Plumbing Rough-In & Trim', cost: plumbingCost, pct: plumbPct },
                  { label: '🪵 Vanity & Countertop', cost: vanityCountertopCost, pct: vanityPct },
                ]
                  .sort((a, b) => b.cost - a.cost)
                  .map(({ label, cost, pct }) => (
                    <div key={label} className="flex items-center justify-between text-sm">
                      <span className="text-slate-700 dark:text-slate-300">{label}</span>
                      <span className="font-bold text-slate-900 dark:text-white">
                        {currencySymbol}{cost.toLocaleString()} <span className="text-xs font-normal text-slate-400">({pct}%)</span>
                      </span>
                    </div>
                  ))}
              </div>
              {includeTileShower && (
                <p className="mt-3 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
                  💡 Your custom tile shower is adding approximately <strong className="text-slate-700 dark:text-slate-300">{currencySymbol}{finishTier === 'budget' ? '2,400' : finishTier === 'mid-range' ? '4,200' : '7,500'}</strong> to this project. Choosing a prefabricated surround would reduce the tile and waterproofing line significantly.
                </p>
              )}
              {includeHeatedFloor && (
                <p className="mt-2 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                  🔥 Radiant floor heating is included in this estimate. Removing it could save $600–$1,500+ depending on room size.
                </p>
              )}
              {layoutChange !== 'none' && (
                <p className="mt-2 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                  🔧 A plumbing layout change is included. Keeping fixtures in their existing positions could reduce costs by $1,200–$4,800.
                </p>
              )}
              <p className="mt-2 text-[11px] italic text-slate-400 dark:text-slate-500">
                ⚠️ Cost-per-sq-ft is a secondary metric for bathrooms. Small rooms can exceed broad per-sq-ft averages because plumbing, electrical, waterproofing, and permits are partly fixed costs, not purely area-based.
              </p>
            </div>

            {/* Compare Scenarios in Budget Tab */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Scenario Comparison
              </h4>
              <div className="overflow-x-auto -mx-1 px-1">
                <table className="w-full text-xs text-left min-w-[480px]">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-semibold">
                      <th className="pb-2 pr-3">Scenario</th>
                      <th className="pb-2 pr-3 text-right">Likely Total</th>
                      <th className="pb-2 pr-3 text-right">{currencySymbol}/{areaUnit}</th>
                      <th className="pb-2 pr-3 text-right">Labor</th>
                      <th className="pb-2 text-right">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                    <tr className="text-slate-600 dark:text-slate-300">
                      <td className="py-2 pr-3 font-medium">Budget / Keep Plumbing</td>
                      <td className="py-2 pr-3 text-right text-emerald-600 dark:text-emerald-400 font-semibold">
                        {currencySymbol}{scenarioBudget.totalEstimatedCost.toLocaleString()}
                      </td>
                      <td className="py-2 pr-3 text-right">{currencySymbol}{scenarioBudget.costPerSqFt}</td>
                      <td className="py-2 pr-3 text-right">{currencySymbol}{scenarioBudget.laborCost.toLocaleString()}</td>
                      <td className="py-2 text-right">{scenarioBudget.estimatedWeeksMin}–{scenarioBudget.estimatedWeeksMax} wks</td>
                    </tr>
                    <tr className="font-semibold text-primary bg-primary/5 dark:bg-primary/10">
                      <td className="py-2 pr-3 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Current Selection
                      </td>
                      <td className="py-2 pr-3 text-right font-bold">{currencySymbol}{totalEstimatedCost.toLocaleString()}</td>
                      <td className="py-2 pr-3 text-right">{currencySymbol}{costPerSqFt}</td>
                      <td className="py-2 pr-3 text-right">{currencySymbol}{laborCost.toLocaleString()}</td>
                      <td className="py-2 text-right">{estimatedWeeksMin}–{estimatedWeeksMax} wks</td>
                    </tr>
                    <tr className="text-slate-600 dark:text-slate-300">
                      <td className="py-2 pr-3 font-medium">
                        Move Plumbing ({layoutChange === 'none' ? '+ Relocation' : 'Current Layout'})
                      </td>
                      <td className="py-2 pr-3 text-right text-slate-800 dark:text-slate-200 font-semibold">
                        {currencySymbol}{scenarioMovePlumbing.totalEstimatedCost.toLocaleString()}
                      </td>
                      <td className="py-2 pr-3 text-right">{currencySymbol}{scenarioMovePlumbing.costPerSqFt}</td>
                      <td className="py-2 pr-3 text-right">{currencySymbol}{scenarioMovePlumbing.laborCost.toLocaleString()}</td>
                      <td className="py-2 text-right">{scenarioMovePlumbing.estimatedWeeksMin}–{scenarioMovePlumbing.estimatedWeeksMax} wks</td>
                    </tr>
                    <tr className="text-slate-600 dark:text-slate-300">
                      <td className="py-2 pr-3 font-medium">Luxury Custom Suite</td>
                      <td className="py-2 pr-3 text-right text-amber-600 dark:text-amber-400 font-semibold">
                        {currencySymbol}{scenarioLuxury.totalEstimatedCost.toLocaleString()}
                      </td>
                      <td className="py-2 pr-3 text-right">{currencySymbol}{scenarioLuxury.costPerSqFt}</td>
                      <td className="py-2 pr-3 text-right">{currencySymbol}{scenarioLuxury.laborCost.toLocaleString()}</td>
                      <td className="py-2 text-right">{scenarioLuxury.estimatedWeeksMin}–{scenarioLuxury.estimatedWeeksMax} wks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-2.5 text-[10px] text-slate-400 italic">
                Scenario estimates use identical room dimensions ({squareFootage} {areaUnit}) with standard configuration presets for transparent comparison.
              </p>
            </div>
          </div>
        ) : (
          /* Dedicated Scenario Comparison Tab View */
          <div className="space-y-6">
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Compare Project Scenarios ({squareFootage} {areaUnit})
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                See how keeping your existing plumbing footprint or adjusting finish levels shifts total costs, labor, and timeline.
              </p>
            </div>

            {/* 2-Column Responsive Grid (Prevents cramped 4-column distortion on medium/laptop screens) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Scenario 1: Budget / Keep Plumbing */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between transition-all hover:border-emerald-300 dark:hover:border-emerald-700/60 shadow-xs">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Budget Tier</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">Lowest Cost</span>
                  </div>
                  <h5 className="mt-2 font-bold text-slate-900 dark:text-white text-base">Budget / Keep Plumbing</h5>
                  <div className="mt-2.5 flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                      {currencySymbol}{scenarioBudget.totalEstimatedCost.toLocaleString()}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{currencySymbol}{scenarioBudget.costPerSqFt}/{areaUnit}</span>
                  </div>
                  <ul className="mt-3.5 space-y-1.5 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/80 pt-3">
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>Keep existing pipe layout ($0 surcharge)</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>Prefab acrylic surround &amp; stock vanity</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>Labor: {currencySymbol}{scenarioBudget.laborCost.toLocaleString()}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>Active Work: {scenarioBudget.estimatedWeeksMin}–{scenarioBudget.estimatedWeeksMax} weeks</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Scenario 2: Current Selection */}
              <div className="rounded-2xl border-2 border-primary/60 bg-gradient-to-b from-primary/5 to-transparent p-4 sm:p-5 dark:border-primary/50 dark:from-primary/10 dark:to-transparent flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Your Estimate</span>
                    <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">Active</span>
                  </div>
                  <h5 className="mt-2 font-bold text-slate-900 dark:text-white text-base">Current Selection</h5>
                  <div className="mt-2.5 flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                      {currencySymbol}{totalEstimatedCost.toLocaleString()}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{currencySymbol}{costPerSqFt}/{areaUnit}</span>
                  </div>
                  <ul className="mt-3.5 space-y-1.5 text-xs text-slate-600 dark:text-slate-300 border-t border-primary/10 dark:border-primary/20 pt-3">
                    <li className="flex items-start gap-1.5">
                      <span className="text-primary font-bold">•</span>
                      <span>Finish: {currentTier.label}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-primary font-bold">•</span>
                      <span>Labor: {currencySymbol}{laborCost.toLocaleString()}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-primary font-bold">•</span>
                      <span>Active Work: {estimatedWeeksMin}–{estimatedWeeksMax} weeks</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-primary font-bold">•</span>
                      <span>Tile Shower: {includeTileShower ? 'Included' : 'Not included'}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Scenario 3: Move Plumbing */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between transition-all hover:border-slate-300 dark:hover:border-slate-700 shadow-xs">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Layout Change</span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">Pipe Relocation</span>
                  </div>
                  <h5 className="mt-2 font-bold text-slate-900 dark:text-white text-base">Move Plumbing</h5>
                  <div className="mt-2.5 flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-100">
                      {currencySymbol}{scenarioMovePlumbing.totalEstimatedCost.toLocaleString()}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{currencySymbol}{scenarioMovePlumbing.costPerSqFt}/{areaUnit}</span>
                  </div>
                  <ul className="mt-3.5 space-y-1.5 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/80 pt-3">
                    <li className="flex items-start gap-1.5">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>Licensed plumber rough-in</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>Labor: {currencySymbol}{scenarioMovePlumbing.laborCost.toLocaleString()}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>Active Work: {scenarioMovePlumbing.estimatedWeeksMin}–{scenarioMovePlumbing.estimatedWeeksMax} weeks</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-amber-600 dark:text-amber-400 font-medium">
                      <span>•</span>
                      <span>{layoutChange === 'none' ? `Adds +${currencySymbol}${(scenarioMovePlumbing.totalEstimatedCost - totalEstimatedCost).toLocaleString()} for pipe shifts` : 'Includes relocation labor'}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Scenario 4: Luxury Finish */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between transition-all hover:border-amber-300 dark:hover:border-amber-700/60 shadow-xs">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">High-End Tier</span>
                    <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">Custom Finishes</span>
                  </div>
                  <h5 className="mt-2 font-bold text-slate-900 dark:text-white text-base">Luxury Custom Suite</h5>
                  <div className="mt-2.5 flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">
                      {currencySymbol}{scenarioLuxury.totalEstimatedCost.toLocaleString()}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{currencySymbol}{scenarioLuxury.costPerSqFt}/{areaUnit}</span>
                  </div>
                  <ul className="mt-3.5 space-y-1.5 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/80 pt-3">
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Custom curbless tile shower</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Freestanding tub + double vanity</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Radiant heated in-floor warming</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>Active Work: {scenarioLuxury.estimatedWeeksMin}–{scenarioLuxury.estimatedWeeksMax} weeks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-950/40 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                💡 <strong>Decision Guide:</strong> Keeping your existing plumbing layout is almost always the single most cost-effective decision. Moving a toilet drain stack or relocating supply lines across walls adds thousands of dollars in licensed plumbing labor and structural adjustments without increasing usable space.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Prominent Planning Disclaimer (Point 29) */}
      <div className="border-t border-slate-100 bg-slate-50/60 px-5 py-3 text-[11px] leading-relaxed text-slate-500 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-400">
        <p>
          <strong className="text-slate-700 dark:text-slate-300">Planning estimate:</strong> This calculator provides an approximate remodeling budget based on the inputs you provide. Actual costs vary by location, contractor rates, material selections, site conditions, permits and unforeseen construction issues. Get local contractor quotes before starting work.
        </p>
      </div>
    </div>
  );
}

