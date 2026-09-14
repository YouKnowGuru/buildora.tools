'use client';

import React, { useState } from 'react';
import { ClipboardCheck, Receipt, Clock, ListChecks, AlertTriangle, Info } from 'lucide-react';

interface HomeInspectionVisualizerProps {
  homeArea?: number;
  propertyType?: string;
  homeAge?: string;
  foundation?: string;
  region?: string;
  includeRadon?: boolean;
  includeMold?: boolean;
  includeSewerScope?: boolean;
  includeTermite?: boolean;
  includeWellWater?: boolean;
  rushService?: boolean;
  priceOverride?: number;
  baseInspectionFee?: number;
  radonCost?: number;
  moldCost?: number;
  sewerScopeCost?: number;
  termiteCost?: number;
  wellWaterCost?: number;
  rushSurcharge?: number;
  totalCostLow?: number;
  totalCostMid?: number;
  totalCostHigh?: number;
  costPerSqFt?: number;
  estimatedHours?: number;
  currencySymbol?: string;
  units?: 'imperial' | 'metric';
}

const PROPERTY_LABELS: Record<string, string> = {
  'single-family': 'Single-Family Detached',
  'condo-townhouse': 'Condo / Townhouse',
  'multi-family': 'Multi-Family (2–4 Units)',
  'manufactured': 'Manufactured / Mobile',
};

const AGE_LABELS: Record<string, string> = {
  'new': 'New Construction (< 1 yr)',
  'age-1-10': '1–10 years',
  'age-11-25': '11–25 years',
  'age-26-50': '26–50 years',
  'age-50-plus': '50+ years',
};

const FOUNDATION_LABELS: Record<string, string> = {
  'slab': 'Slab-on-Grade',
  'crawlspace': 'Crawlspace',
  'basement': 'Basement',
  'walkout-basement': 'Walkout Basement',
};

const REGION_LABELS: Record<string, string> = {
  'us-national': 'US National Average',
  'northeast': 'Northeast',
  'southeast': 'Southeast',
  'midwest': 'Midwest',
  'southwest': 'Southwest',
  'west-coast': 'West Coast',
};

export function HomeInspectionVisualizer({
  homeArea = 2000,
  propertyType = 'single-family',
  homeAge = 'age-11-25',
  foundation = 'slab',
  region = 'us-national',
  includeRadon = false,
  includeMold = false,
  includeSewerScope = false,
  includeTermite = false,
  includeWellWater = false,
  rushService = false,
  priceOverride,
  baseInspectionFee = 340,
  radonCost = 0,
  moldCost = 0,
  sewerScopeCost = 0,
  termiteCost = 0,
  wellWaterCost = 0,
  rushSurcharge = 0,
  totalCostLow = 289,
  totalCostMid = 340,
  totalCostHigh = 425,
  costPerSqFt = 0.17,
  estimatedHours = 2.5,
  currencySymbol = '$',
  units = 'imperial',
}: HomeInspectionVisualizerProps) {
  const [activeTab, setActiveTab] = useState<'breakdown' | 'calculation' | 'schedule' | 'scope'>('breakdown');

  const addOns = [
    { label: 'Radon testing', cost: radonCost, on: includeRadon },
    { label: 'Mold / air-quality testing', cost: moldCost, on: includeMold },
    { label: 'Sewer scope', cost: sewerScopeCost, on: includeSewerScope },
    { label: 'Termite / WDI inspection', cost: termiteCost, on: includeTermite },
    { label: 'Well & water testing', cost: wellWaterCost, on: includeWellWater },
  ].filter((a) => a.on);

  const addOnTotal = addOns.reduce((s, a) => s + a.cost, 0);
  const grandTotal = baseInspectionFee + addOnTotal + rushSurcharge;
  const areaLabel = units === 'metric' ? 'm²' : 'sq ft';
  const perUnitLabel = units === 'metric' ? 'per m²' : 'per sq ft';
  const displayArea = Math.round(homeArea);

  const fmt = (v: number) => `${currencySymbol}${v.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;

  const rangeWidth = Math.max(totalCostHigh - totalCostLow, 1);
  const midPct = Math.min(95, Math.max(5, ((totalCostMid - totalCostLow) / rangeWidth) * 100));

  const tabs = [
    { id: 'breakdown' as const, label: 'Cost Breakdown', icon: <Receipt className="h-3.5 w-3.5" /> },
    { id: 'calculation' as const, label: 'Calculation', icon: <ClipboardCheck className="h-3.5 w-3.5" /> },
    { id: 'schedule' as const, label: 'Schedule', icon: <Clock className="h-3.5 w-3.5" /> },
    { id: 'scope' as const, label: 'Scope', icon: <ListChecks className="h-3.5 w-3.5" /> },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-4 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">Home Inspection Cost Analysis</h3>
            <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {units === 'metric' ? 'Metric (m²)' : 'Imperial (sq ft)'}
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {PROPERTY_LABELS[propertyType] ?? propertyType} · {AGE_LABELS[homeAge] ?? homeAge} · {FOUNDATION_LABELS[foundation] ?? foundation} · {REGION_LABELS[region] ?? region}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Estimated Total</p>
          <p className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">{fmt(totalCostMid)}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-slate-100 px-3 pt-2 dark:border-slate-800" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex shrink-0 items-center gap-1.5 rounded-t-lg px-3 py-2 text-xs font-bold transition ${
              activeTab === tab.id
                ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-200'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4">
        {activeTab === 'breakdown' && (
          <div className="space-y-4">
            {/* Range bar */}
            <div>
              <div className="mb-1.5 flex items-baseline justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>{fmt(totalCostLow)} (low)</span>
                <span className="text-slate-700 dark:text-slate-200">typical range</span>
                <span>{fmt(totalCostHigh)} (high)</span>
              </div>
              <div className="relative h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className="absolute top-0 h-full w-1.5 rounded-full bg-primary shadow"
                  style={{ left: `${midPct}%` }}
                  title={fmt(totalCostMid)}
                />
              </div>
            </div>

            {/* Line items */}
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5 dark:bg-slate-800/50">
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Base inspection fee</p>
                    {priceOverride !== undefined && priceOverride > 0 && (
                      <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                        Custom quote
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {displayArea.toLocaleString()} {areaLabel} · {PROPERTY_LABELS[propertyType] ?? propertyType}
                  </p>
                </div>
                <p className="text-sm font-extrabold text-slate-900 dark:text-white">{fmt(baseInspectionFee)}</p>
              </div>

              {addOns.map((a) => (
                <div key={a.label} className="flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2.5 dark:border-slate-800">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{a.label}</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{fmt(a.cost)}</p>
                </div>
              ))}

              {rushService && (
                <div className="flex items-center justify-between rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5 dark:border-amber-800 dark:bg-amber-950/30">
                  <p className="text-sm font-medium text-amber-800 dark:text-amber-300">Rush scheduling (+25%)</p>
                  <p className="text-sm font-bold text-amber-900 dark:text-amber-200">{fmt(rushSurcharge)}</p>
                </div>
              )}

              <div className="flex items-center justify-between rounded-lg bg-primary/10 px-3 py-3 dark:bg-primary/20">
                <p className="text-sm font-bold text-primary dark:text-primary-foreground">Total</p>
                <p className="text-base font-black text-primary dark:text-primary-foreground">{fmt(grandTotal)}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'calculation' && (
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800/50">
              <p className="font-sans font-bold text-slate-700 dark:text-slate-200 mb-1">1. Base Fee by Size Tier</p>
              <p>
                {displayArea.toLocaleString()} {areaLabel}
                {units === 'metric' ? ` (≈ ${Math.round(homeArea * 10.7639).toLocaleString()} sq ft)` : ''} falls in the size tier that starts at{' '}
                <strong className="text-slate-900 dark:text-white">{fmt(baseInspectionFee)}</strong>
                {priceOverride !== undefined && priceOverride > 0
                  ? ' (using your custom quote override).'
                  : ' after the property-type, age, foundation, and regional adjustments are applied.'}
              </p>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800/50">
              <p className="font-sans font-bold text-slate-700 dark:text-slate-200 mb-1">2. Add-On Services</p>
              <p>
                {addOns.length === 0
                  ? 'No add-on services selected — the estimate covers the standard visual inspection only.'
                  : `${addOns.length} add-on service${addOns.length > 1 ? 's' : ''} selected: ${addOns.map((a) => a.label.toLowerCase()).join(', ')} — adding ${fmt(addOnTotal)}.`}
              </p>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800/50">
              <p className="font-sans font-bold text-slate-700 dark:text-slate-200 mb-1">3. Planning Range</p>
              <p>
                Low and high ends apply −15% / +25% around the midpoint to reflect competitive markets, travel fees,
                and high-cost metros. Per-unit cost: <strong className="text-slate-900 dark:text-white">{fmt(costPerSqFt)} {perUnitLabel}</strong>.
              </p>
            </div>
            <div className="flex gap-2 rounded-lg border border-blue-200 bg-blue-50 p-3 text-xs text-blue-800 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300">
              <Info className="h-4 w-4 shrink-0" />
              <p>Planning estimate only. Independent inspectors set their own fees — collect 2–3 written quotes before booking.</p>
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-100 p-4 text-center dark:border-slate-800">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Estimated On-Site Duration</p>
              <p className="mt-1 text-4xl font-black tracking-tight text-slate-900 dark:text-white">≈ {estimatedHours} hrs</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Based on {displayArea.toLocaleString()} {areaLabel}, {FOUNDATION_LABELS[foundation]?.toLowerCase() ?? foundation}, and selected add-ons
              </p>
            </div>
            <div className="grid gap-2 text-sm sm:grid-cols-2">
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800/50">
                <p className="font-bold text-slate-700 dark:text-slate-200">Report delivery</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Written report typically within 24–48 hours; some inspectors deliver same day.</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800/50">
                <p className="font-bold text-slate-700 dark:text-slate-200">Booking lead time</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Standard scheduling is 2–5 business days in most markets; rush adds a premium.</p>
              </div>
              {includeRadon && (
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 sm:col-span-2 dark:border-amber-800 dark:bg-amber-950/30">
                  <p className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                    <AlertTriangle className="h-4 w-4" /> Radon monitor dwell time
                  </p>
                  <p className="mt-1 text-xs text-amber-800/80 dark:text-amber-300/80">
                    The continuous monitor must remain in the lowest livable level for 48+ hours before results are read — schedule device placement 2–3 days before your deadline.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'scope' && (
          <div className="space-y-2 text-sm">
            {[
              'Roof, flashing, gutters & visible roof structure',
              'Exterior siding, trim, grading & drainage',
              'Foundation, basement/crawlspace & structure',
              'Attic, insulation & ventilation',
              'Electrical panel, wiring & GFCI sampling',
              'Plumbing supply, DWV & water heater',
              'HVAC equipment & ductwork (operation check)',
              'Interior walls, ceilings, floors, windows & doors',
              'Built-in appliances (basic operation)',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-lg border border-slate-100 px-3 py-2 dark:border-slate-800">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-black text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">✓</span>
                <span className="text-slate-700 dark:text-slate-300">{item}</span>
              </div>
            ))}
            <div className="mt-3 flex gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-400">
              <Info className="h-4 w-4 shrink-0" />
              <p>
                Follows the ASHI / InterNACHI Standards of Practice — a visual, non-invasive assessment. Destructive testing,
                code-compliance certification, and specialized services (radon, mold, sewer, termite, wells) are separate add-ons.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}