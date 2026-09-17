'use client';

import React, { useState } from 'react';
import { Battery, Zap, Sun, BarChart3, SlidersHorizontal, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

interface BatteryBackupVisualizerProps {
  // Load
  totalLoadWatts?: number;
  totalLoadKw?: number;
  // Battery
  grossCapacityWh?: number;
  grossCapacityKwh?: number;
  usableCapacityKwh?: number;
  deliveredAcEnergyKwh?: number;
  batteryAh?: number;
  systemVoltageV?: number;
  // Inverter
  recommendedInverterSizeW?: number;
  inverterEfficiency?: number;
  // Runtime
  estimatedRuntimeHours?: number;
  runtimeAtHalfLoad?: number;
  runtimeAtDoubleLoad?: number;
  // Solar
  solarPanelWatts?: number;
  numberOfSolarPanels?: number;
  includeSolarRecharge?: boolean;
  // Chemistry
  chemistryLabel?: string;
  cycleLife?: number;
  recommendedDod?: number;
  actualDodUsed?: number;
  // Cost
  batteryBankCostLow?: number;
  batteryBankCostMid?: number;
  batteryBankCostHigh?: number;
  totalSystemCostLow?: number;
  totalSystemCostHigh?: number;
  costAssumptions?: {
    batteryLow: number;
    batteryMid: number;
    batteryHigh: number;
    inverterLowPerKw: number;
    inverterHighPerKw: number;
  };
  // Flags
  isDodWarning?: boolean;
  isUndersized?: boolean;
  temperatureDeratingFactor?: number;
  // UI
  currencySymbol?: string;
  batteryChemistry?: string;
}

const CHEMISTRY_COLORS: Record<string, { bar: string; badge: string; border: string }> = {
  'lifepo4':           { bar: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300', border: 'border-emerald-300 dark:border-emerald-700' },
  'agm':               { bar: 'bg-blue-500',    badge: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300',             border: 'border-blue-300 dark:border-blue-700' },
  'flooded-lead-acid': { bar: 'bg-amber-500',   badge: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300',         border: 'border-amber-300 dark:border-amber-700' },
  'nmc-lithium':       { bar: 'bg-violet-500',  badge: 'bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300',     border: 'border-violet-300 dark:border-violet-700' },
};

function formatHours(h: number): string {
  if (h >= 24) {
    const days = Math.floor(h / 24);
    const rem = h % 24;
    return rem > 0 ? `${days}d ${rem.toFixed(1)}h` : `${days} day${days > 1 ? 's' : ''}`;
  }
  return `${h.toFixed(1)} hrs`;
}

function formatWatts(w: number): string {
  return w >= 1000 ? `${(w / 1000).toFixed(1)} kW` : `${w} W`;
}

export function BatteryBackupVisualizer({
  totalLoadWatts = 350,
  totalLoadKw = 0.35,
  grossCapacityWh = 3763,
  grossCapacityKwh = 3.76,
  usableCapacityKwh = 3.01,
  deliveredAcEnergyKwh = 2.80,
  batteryAh = 78.4,
  systemVoltageV = 48,
  recommendedInverterSizeW = 500,
  inverterEfficiency = 93,
  estimatedRuntimeHours = 8,
  runtimeAtHalfLoad = 16,
  runtimeAtDoubleLoad = 4,
  solarPanelWatts = 0,
  numberOfSolarPanels = 0,
  includeSolarRecharge = false,
  chemistryLabel = 'LiFePO₄ (Lithium Iron Phosphate)',
  cycleLife = 3500,
  recommendedDod = 80,
  actualDodUsed = 80,
  batteryBankCostLow = 1505,
  batteryBankCostMid = 2258,
  batteryBankCostHigh = 3010,
  totalSystemCostLow = 1605,
  totalSystemCostHigh = 3260,
  costAssumptions = {
    batteryLow: 400,
    batteryMid: 600,
    batteryHigh: 800,
    inverterLowPerKw: 200,
    inverterHighPerKw: 500,
  },
  isDodWarning = false,
  isUndersized = false,
  temperatureDeratingFactor = 1.0,
  currencySymbol = '$',
  batteryChemistry = 'lifepo4',
}: BatteryBackupVisualizerProps) {
  const [activeTab, setActiveTab] = useState<'system' | 'calculation' | 'runtime' | 'chemistry'>('system');

  const chemColor = CHEMISTRY_COLORS[batteryChemistry] ?? CHEMISTRY_COLORS['lifepo4']!;

  // Calculations for step-by-step breakdown
  const effFrac = (inverterEfficiency || 93) / 100;
  const dodFrac = (actualDodUsed || 80) / 100;
  const loadEnergyDemandWh = totalLoadWatts * estimatedRuntimeHours;
  const energyAfterInverterWh = Math.round(loadEnergyDemandWh / effFrac);
  const calculatedGrossWh = Math.round(energyAfterInverterWh / dodFrac * temperatureDeratingFactor);

  // SVG arc gauge parameters
  const fillPct = actualDodUsed;
  const R = 72, cx = 100, cy = 100;
  const startAngle = -210;
  const sweepAngle = 240;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const arcPoint = (angle: number) => ({
    x: cx + R * Math.cos(toRad(angle)),
    y: cy + R * Math.sin(toRad(angle)),
  });
  const endAngle = startAngle + (sweepAngle * fillPct) / 100;
  const p0 = arcPoint(startAngle);
  const p1 = arcPoint(endAngle);
  const largeArc = (sweepAngle * fillPct) / 100 > 180 ? 1 : 0;
  const trackEnd = arcPoint(startAngle + sweepAngle);

  const chemCompare = [
    { key: 'lifepo4', label: 'LiFePO₄', dod: 80, cycles: 3500, costMid: '$400–$800/kWh', color: 'bg-emerald-500' },
    { key: 'agm', label: 'AGM', dod: 50, cycles: 500, costMid: '$200–$400/kWh', color: 'bg-blue-500' },
    { key: 'flooded-lead-acid', label: 'Flooded L-A', dod: 50, cycles: 350, costMid: '$100–$250/kWh', color: 'bg-amber-500' },
    { key: 'nmc-lithium', label: 'NMC Lithium', dod: 80, cycles: 2000, costMid: '$500–$900/kWh', color: 'bg-violet-500' },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-colors dark:border-slate-800 dark:bg-slate-900 mb-8">

      {/* Top Banner */}
      <div className="border-b border-slate-100 bg-slate-50/70 px-5 py-4 dark:border-slate-800 dark:bg-slate-800/40">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300">
              Required Nominal Battery Capacity
            </span>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mt-0.5">
              <span className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                {grossCapacityKwh.toFixed(2)} kWh
              </span>
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                {batteryAh.toFixed(1)} Ah @ {systemVoltageV} V
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {isDodWarning && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
                <AlertTriangle className="h-3.5 w-3.5" />
                DoD exceeds recommendation
              </span>
            )}
            {isUndersized && (
              <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">
                <AlertTriangle className="h-3.5 w-3.5" />
                Consider 48V for this load
              </span>
            )}
            {!isDodWarning && !isUndersized && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Calculation Complete
              </span>
            )}
          </div>
        </div>

        {/* Specification Summary Table */}
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-200/80 bg-white dark:border-slate-700 dark:bg-slate-900/60">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-3 py-2">Specification</th>
                <th className="px-3 py-2 text-right">Planning Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
              <tr>
                <td className="px-3 py-2 text-slate-600 dark:text-slate-300">Critical continuous load</td>
                <td className="px-3 py-2 text-right font-bold text-slate-900 dark:text-white">{formatWatts(totalLoadWatts)}</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-slate-600 dark:text-slate-300">Backup runtime requested</td>
                <td className="px-3 py-2 text-right font-bold text-slate-900 dark:text-white">{estimatedRuntimeHours} hours</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-slate-600 dark:text-slate-300">Load energy required (AC)</td>
                <td className="px-3 py-2 text-right font-bold text-slate-900 dark:text-white">{(loadEnergyDemandWh / 1000).toFixed(2)} kWh</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-slate-600 dark:text-slate-300">Inverter conversion efficiency</td>
                <td className="px-3 py-2 text-right font-bold text-slate-900 dark:text-white">{inverterEfficiency}%</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-slate-600 dark:text-slate-300">Usable DoD ({chemistryLabel.split('(')[0]?.trim()})</td>
                <td className="px-3 py-2 text-right font-bold text-slate-900 dark:text-white">{actualDodUsed}%</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-slate-600 dark:text-slate-300">Usable battery energy at {actualDodUsed}% DoD</td>
                <td className="px-3 py-2 text-right font-bold text-slate-900 dark:text-white">{usableCapacityKwh.toFixed(2)} kWh</td>
              </tr>
              <tr className="bg-slate-50/50 dark:bg-slate-800/30">
                <td className="px-3 py-2 font-semibold text-slate-800 dark:text-slate-200">Required nominal battery capacity</td>
                <td className="px-3 py-2 text-right font-extrabold text-primary dark:text-primary-foreground">{grossCapacityKwh.toFixed(2)} kWh ({batteryAh.toFixed(1)} Ah @ {systemVoltageV} V)</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-slate-600 dark:text-slate-300">Recommended continuous inverter rating</td>
                <td className="px-3 py-2 text-right font-bold text-slate-900 dark:text-white">{recommendedInverterSizeW} W</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-slate-600 dark:text-slate-300">Surge rating requirement</td>
                <td className="px-3 py-2 text-right font-semibold text-amber-600 dark:text-amber-400">Verify appliance startup / LRA specs</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Motor-start surge warning box */}
        <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-amber-200/80 bg-amber-50/70 p-3 text-xs text-amber-900 dark:border-amber-800/40 dark:bg-amber-950/30 dark:text-amber-200">
          <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div className="space-y-1.5 leading-relaxed">
            <p>
              <strong>Inverter surge verification required:</strong> The {recommendedInverterSizeW} W continuous rating is a minimum planning figure based on running load. It does not account for compressor or motor startup inrush. Verify the inverter&apos;s peak surge rating against the appliance manufacturer&apos;s starting/inrush (LRA) specification before selecting equipment.
            </p>
            {totalLoadWatts <= 500 && (
              <p className="text-amber-800 dark:text-amber-300">
                <strong>Architecture note:</strong> At {totalLoadWatts} W, a 24 V battery system may be worth considering as a simpler alternative to 48 V for loads at this scale.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 p-4 sm:px-5 sm:py-3 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
            <Battery className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">Battery Backup Technical Analysis</h3>
            <p className="text-xs text-slate-500 dark:text-slate-300">
              {grossCapacityKwh.toFixed(2)} kWh nominal • {chemistryLabel.split('(')[0]?.trim()} • {systemVoltageV} V system
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 rounded-xl bg-slate-100 p-1 dark:bg-slate-800 gap-1 w-full sm:w-auto">
          {([
            { key: 'system', label: 'System', icon: Zap },
            { key: 'calculation', label: 'Math', icon: Info },
            { key: 'runtime', label: 'Runtime', icon: BarChart3 },
            { key: 'chemistry', label: 'Chemistry', icon: SlidersHorizontal },
          ] as const).map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${
                activeTab === key
                  ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-700 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4 sm:p-6">

        {/* ── System Tab ── */}
        {activeTab === 'system' && (
          <div className="space-y-5">

            {/* Battery Gauge + System Diagram */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* SVG Gauge */}
              <div className="relative shrink-0">
                <svg viewBox="0 0 200 160" className="w-44 h-36 select-none" aria-label="Battery charge gauge">
                  <path
                    d={`M ${p0.x} ${p0.y} A ${R} ${R} 0 1 1 ${trackEnd.x} ${trackEnd.y}`}
                    fill="none"
                    strokeWidth="14"
                    strokeLinecap="round"
                    className="stroke-slate-200 dark:stroke-slate-700"
                  />
                  {fillPct > 0 && (
                    <path
                      d={`M ${p0.x} ${p0.y} A ${R} ${R} 0 ${largeArc} 1 ${p1.x} ${p1.y}`}
                      fill="none"
                      strokeWidth="14"
                      strokeLinecap="round"
                      className={`transition-all duration-700 ${
                        isDodWarning ? 'stroke-amber-500' : 'stroke-emerald-500'
                      }`}
                    />
                  )}
                  <text x={cx} y={cy - 10} textAnchor="middle" className="text-[24px] font-black fill-slate-900 dark:fill-white">{fillPct}%</text>
                  <text x={cx} y={cy + 14} textAnchor="middle" className="text-[10px] font-bold uppercase tracking-wider fill-slate-500 dark:fill-slate-400">Usable DoD</text>
                  <text x={cx} y={cy + 30} textAnchor="middle" className="text-[9px] fill-slate-400 dark:fill-slate-500">
                    {actualDodUsed > recommendedDod ? '⚠ Exceeds rec.' : `Rec. max: ${recommendedDod}%`}
                  </text>
                </svg>
                <div className="text-center -mt-1">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${chemColor.badge}`}>
                    {chemistryLabel.split('(')[0]?.trim()}
                  </span>
                </div>
              </div>

              {/* Power flow diagram */}
              <div className="flex-1 w-full">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-3">Power Flow Architecture</p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-center dark:border-slate-700 dark:bg-slate-800/60 min-w-[80px]">
                    <span className="text-lg">🏠</span>
                    <p className="text-[10px] font-bold text-slate-600 dark:text-slate-300 mt-1">Critical Loads</p>
                    <p className="text-[11px] font-extrabold text-slate-900 dark:text-white">{formatWatts(totalLoadWatts)}</p>
                  </div>
                  <span className="text-slate-400 font-bold text-sm">←</span>
                  <div className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2.5 text-center dark:border-blue-900 dark:bg-blue-950/30 min-w-[80px]">
                    <span className="text-lg">⚡</span>
                    <p className="text-[10px] font-bold text-blue-700 dark:text-blue-300 mt-1">Inverter</p>
                    <p className="text-[11px] font-extrabold text-blue-900 dark:text-blue-100">{formatWatts(recommendedInverterSizeW)}</p>
                  </div>
                  <span className="text-slate-400 font-bold text-sm">←</span>
                  <div className={`rounded-xl border px-3 py-2.5 text-center min-w-[80px] ${chemColor.border} bg-white dark:bg-slate-800`}>
                    <span className="text-lg">🔋</span>
                    <p className="text-[10px] font-bold text-slate-600 dark:text-slate-300 mt-1">Battery Bank</p>
                    <p className="text-[11px] font-extrabold text-slate-900 dark:text-white">{grossCapacityKwh.toFixed(2)} kWh</p>
                  </div>
                  {includeSolarRecharge && (
                    <>
                      <span className="text-slate-400 font-bold text-sm">←</span>
                      <div className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5 text-center dark:border-amber-900 dark:bg-amber-950/30 min-w-[80px]">
                        <span className="text-lg">☀️</span>
                        <p className="text-[10px] font-bold text-amber-700 dark:text-amber-300 mt-1">Solar Panels</p>
                        <p className="text-[11px] font-extrabold text-amber-900 dark:text-amber-100">{numberOfSolarPanels}× 400W</p>
                      </div>
                    </>
                  )}
                </div>

                <p className="mt-3 text-[11px] text-slate-500 dark:text-slate-300">
                  ⚡ Inverter converts {systemVoltageV}V DC → 120/240V AC at {inverterEfficiency}% inverter efficiency.
                  {temperatureDeratingFactor > 1 && (
                    <> Capacity uprated by {Math.round((temperatureDeratingFactor - 1) * 100)}% for cold temperature derating.</>
                  )}
                </p>
              </div>
            </div>

            {/* Cost Estimate Card with transparent methodology */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-800/50">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                Planning Cost Estimate
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-300 mb-3">
                Illustrative planning range based on configurable battery and inverter cost assumptions. Actual equipment, installation, permitting, wiring, protection equipment, taxes, and labor can vary significantly by location and project.
              </p>
              <div className="grid grid-cols-3 gap-3 text-center mb-3">
                {[
                  { tier: 'Low End', cost: totalSystemCostLow, color: 'text-emerald-600 dark:text-emerald-400' },
                  { tier: 'Mid Range', cost: Math.round((totalSystemCostLow + totalSystemCostHigh) / 2), color: 'text-primary dark:text-primary-foreground' },
                  { tier: 'High End', cost: totalSystemCostHigh, color: 'text-amber-600 dark:text-amber-400' },
                ].map(({ tier, cost, color }) => (
                  <div key={tier} className="rounded-lg border border-slate-200/80 bg-white p-2.5 dark:border-slate-700 dark:bg-slate-800">
                    <span className="block text-[10px] font-bold uppercase text-slate-400">{tier}</span>
                    <span className={`block text-base font-extrabold ${color}`}>
                      {currencySymbol}{cost.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <div className="overflow-hidden rounded-lg border border-slate-200/80 bg-white text-[11px] dark:border-slate-700 dark:bg-slate-800">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/80 font-semibold text-slate-500 border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="px-3 py-1.5">Component Assumption</th>
                      <th className="px-3 py-1.5 text-center">Low</th>
                      <th className="px-3 py-1.5 text-center">Mid</th>
                      <th className="px-3 py-1.5 text-center">High</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-600 dark:text-slate-300 font-medium">
                    <tr>
                      <td className="px-3 py-1.5">Battery Capacity ({chemistryLabel.split('(')[0]?.trim()})</td>
                      <td className="px-3 py-1.5 text-center">${costAssumptions.batteryLow}/kWh</td>
                      <td className="px-3 py-1.5 text-center">${costAssumptions.batteryMid}/kWh</td>
                      <td className="px-3 py-1.5 text-center">${costAssumptions.batteryHigh}/kWh</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-1.5">Inverter Hardware</td>
                      <td className="px-3 py-1.5 text-center">${costAssumptions.inverterLowPerKw}/kW</td>
                      <td className="px-3 py-1.5 text-center">${Math.round((costAssumptions.inverterLowPerKw + costAssumptions.inverterHighPerKw) / 2)}/kW</td>
                      <td className="px-3 py-1.5 text-center">${costAssumptions.inverterHighPerKw}/kW</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Solar Summary (if enabled) */}
            {includeSolarRecharge && (
              <div className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-4 dark:border-amber-800/40 dark:bg-amber-950/20">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                    Solar Recharge Sizing (77% System Efficiency Basis)
                  </h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                  <div>
                    <span className="text-xs text-slate-500">Panel Array Size</span>
                    <p className="font-extrabold text-slate-900 dark:text-white">{solarPanelWatts.toLocaleString()} W</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500">Panels (400W basis)</span>
                    <p className="font-extrabold text-slate-900 dark:text-white">{numberOfSolarPanels} panels</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500">Daily Replenish Energy</span>
                    <p className="font-extrabold text-slate-900 dark:text-white">
                      {(loadEnergyDemandWh / 1000).toFixed(2)} kWh/day
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Calculation Math Tab (User Point 19) ── */}
        {activeTab === 'calculation' && (
          <div className="space-y-4">
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">How We Calculate Your Battery Size</h4>
              <p className="text-xs text-slate-500 dark:text-slate-300 mt-0.5">
                Exact mathematical derivation based on your active load profile ({totalLoadWatts} W for {estimatedRuntimeHours} hrs):
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800/60">
                <p className="font-sans font-bold text-slate-700 dark:text-slate-200 mb-1">1. Calculate Load Energy Demand</p>
                <p className="text-slate-600 dark:text-slate-300">
                  {totalLoadWatts} W × {estimatedRuntimeHours} hours = <strong className="text-slate-900 dark:text-white">{loadEnergyDemandWh.toLocaleString()} Wh</strong> ({(loadEnergyDemandWh / 1000).toFixed(2)} kWh)
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800/60">
                <p className="font-sans font-bold text-slate-700 dark:text-slate-200 mb-1">2. Account for Inverter Conversion Losses ({inverterEfficiency}%)</p>
                <p className="text-slate-600 dark:text-slate-300">
                  {loadEnergyDemandWh.toLocaleString()} Wh ÷ {effFrac} = <strong className="text-slate-900 dark:text-white">{energyAfterInverterWh.toLocaleString()} Wh</strong> (energy needed from battery)
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800/60">
                <p className="font-sans font-bold text-slate-700 dark:text-slate-200 mb-1">3. Account for Usable Depth of Discharge ({actualDodUsed}% DoD)</p>
                <p className="text-slate-600 dark:text-slate-300">
                  {energyAfterInverterWh.toLocaleString()} Wh ÷ {dodFrac} {temperatureDeratingFactor > 1 ? `× ${temperatureDeratingFactor} (temp factor) ` : ''}= <strong className="text-slate-900 dark:text-white">{calculatedGrossWh.toLocaleString()} Wh</strong> ({grossCapacityKwh.toFixed(2)} kWh nominal)
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800/60">
                <p className="font-sans font-bold text-slate-700 dark:text-slate-200 mb-1">4. Convert to Amp-Hours at System DC Voltage ({systemVoltageV} V)</p>
                <p className="text-slate-600 dark:text-slate-300">
                  {calculatedGrossWh.toLocaleString()} Wh ÷ {systemVoltageV} V = <strong className="text-slate-900 dark:text-white">{batteryAh.toFixed(1)} Ah</strong>
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 dark:border-primary/40 dark:bg-primary/10">
              <p className="text-xs font-bold text-primary dark:text-primary-foreground uppercase tracking-wider mb-1">
                Final Result
              </p>
              <p className="text-xl font-black text-slate-900 dark:text-white">
                {grossCapacityKwh.toFixed(2)} kWh nominal battery capacity ({batteryAh.toFixed(1)} Ah @ {systemVoltageV} V)
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                Delivers {(loadEnergyDemandWh / 1000).toFixed(2)} kWh AC energy to loads, utilizing {usableCapacityKwh.toFixed(2)} kWh usable storage at {actualDodUsed}% DoD.
              </p>
            </div>
          </div>
        )}

        {/* ── Runtime Tab ── */}
        {activeTab === 'runtime' && (
          <div className="space-y-5">
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Runtime Scenarios</h4>
              <p className="text-xs text-slate-500 dark:text-slate-300 mt-0.5">
                How backup duration changes as load increases or decreases from your current {formatWatts(totalLoadWatts)} selection.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  label: 'Half Load',
                  load: totalLoadWatts / 2,
                  runtime: runtimeAtHalfLoad,
                  desc: 'Minimal essentials only',
                  color: 'text-emerald-600 dark:text-emerald-400',
                  border: 'border-emerald-200 dark:border-emerald-800/60',
                  bg: 'bg-emerald-50/50 dark:bg-emerald-950/20',
                  barColor: 'bg-emerald-500',
                  barWidth: Math.min(100, (runtimeAtHalfLoad / (runtimeAtHalfLoad + 1)) * 100),
                },
                {
                  label: 'Current Load',
                  load: totalLoadWatts,
                  runtime: estimatedRuntimeHours,
                  desc: 'Your active configuration',
                  color: 'text-primary dark:text-primary-foreground',
                  border: 'border-primary/40',
                  bg: 'bg-primary/5 dark:bg-primary/10',
                  barColor: 'bg-primary',
                  barWidth: Math.min(100, (estimatedRuntimeHours / runtimeAtHalfLoad) * 100),
                },
                {
                  label: 'Double Load',
                  load: totalLoadWatts * 2,
                  runtime: runtimeAtDoubleLoad,
                  desc: 'Added pump, microwave, or HVAC',
                  color: 'text-amber-600 dark:text-amber-400',
                  border: 'border-amber-200 dark:border-amber-800/60',
                  bg: 'bg-amber-50/50 dark:bg-amber-950/20',
                  barColor: 'bg-amber-500',
                  barWidth: Math.min(100, (runtimeAtDoubleLoad / runtimeAtHalfLoad) * 100),
                },
              ].map(({ label, load, runtime, desc, color, border, bg, barColor, barWidth }) => (
                <div key={label} className={`rounded-2xl border p-4 ${border} ${bg}`}>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300">{label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-300 mt-0.5">{desc}</p>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">{formatWatts(load)} continuous</p>
                  <p className={`text-2xl font-black mt-1 ${color}`}>{formatHours(runtime)}</p>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${barColor}`}
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] italic text-slate-500 dark:text-slate-300">
              ⚠️ Runtime estimates assume steady-state continuous loads. Actual run time varies with cycling duty cycles (refrigerators, pumps), battery age, cell temperature, and inverter operating efficiency curves.
            </p>
          </div>
        )}

        {/* ── Chemistry Tab ── */}
        {activeTab === 'chemistry' && (
          <div className="space-y-5">
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Battery Chemistry Characteristics</h4>
              <p className="text-xs text-slate-500 dark:text-slate-300 mt-0.5">
                Technical properties and planning characteristics across common battery technologies:
              </p>
            </div>

            <div className="space-y-3">
              {chemCompare.map((c) => {
                const isSelected = batteryChemistry === c.key;
                return (
                  <div
                    key={c.key}
                    className={`rounded-xl border p-3.5 transition-all ${
                      isSelected
                        ? 'border-primary/50 bg-primary/5 dark:border-primary/40 dark:bg-primary/10 shadow-sm'
                        : 'border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-2.5">
                        <span className={`h-2.5 w-2.5 rounded-full ${c.color}`} />
                        <span className={`text-sm font-bold ${isSelected ? 'text-primary' : 'text-slate-800 dark:text-slate-100'}`}>
                          {c.label}
                        </span>
                        {isSelected && (
                          <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">Active Selection</span>
                        )}
                      </div>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-300">{c.costMid}</span>
                    </div>
                    <div className="mt-2.5 grid grid-cols-2 gap-2 text-center">
                      {[
                        { label: 'Recommended DoD', value: `${c.dod}%`, good: c.dod >= 80 },
                        { label: 'Cycle Life (at rec. DoD)', value: `${c.cycles.toLocaleString()} cycles`, good: c.cycles >= 2000 },
                      ].map(({ label, value, good }) => (
                        <div key={label} className="rounded-lg bg-slate-50 dark:bg-slate-800/60 p-2">
                          <span className="block text-[10px] uppercase font-bold text-slate-400">{label}</span>
                          <span className={`text-sm font-extrabold ${good ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-900/60">
              <p className="text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                Technical Summary: LiFePO₄ (Lithium Iron Phosphate)
              </p>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                LiFePO₄ generally offers good thermal stability, long cycle life (3,500+ cycles at 80% DoD), and high usable capacity compared with many other lithium-ion chemistries. It still requires an appropriate BMS (Battery Management System), compatible charging equipment, overcurrent protection devices, and installation according to the manufacturer&apos;s requirements.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer Disclaimer */}
      <div className="border-t border-slate-100 bg-slate-50/60 px-5 py-3 text-[11px] leading-relaxed text-slate-500 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-300">
        <p>
          <strong className="text-slate-700 dark:text-slate-300">Code, Safety & Engineering Notice:</strong>{' '}
          This calculator provides planning estimates, not an electrical design or code-compliance determination. Electrical, fire-code, and permitting requirements vary by jurisdiction (including NEC NFPA 70 Article 706, 2026 NFPA 855, and UL 9540 / UL 9540A). Consult the local Authority Having Jurisdiction (AHJ), utility, and a qualified electrical professional before installation.
        </p>
      </div>
    </div>
  );
}
