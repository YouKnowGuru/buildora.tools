import { z } from 'zod';

// ---------------------------------------------------------------------------
// Input Schema
// ---------------------------------------------------------------------------

export const homeInspectionInputSchema = z.object({
  // Home profile
  homeArea:     z.number().min(20).max(25000).default(2000), // sq ft (imperial) or sq m (metric)
  propertyType: z.enum(['single-family', 'condo-townhouse', 'multi-family', 'manufactured']).default('single-family'),
  homeAge:      z.enum(['new', 'age-1-10', 'age-11-25', 'age-26-50', 'age-50-plus']).default('age-11-25'),
  foundation:   z.enum(['slab', 'crawlspace', 'basement', 'walkout-basement']).default('slab'),
  region:       z.enum(['us-national', 'northeast', 'southeast', 'midwest', 'southwest', 'west-coast']).default('us-national'),

  // Optional add-on services
  includeRadon:      z.boolean().default(false),
  includeMold:       z.boolean().default(false),
  includeSewerScope: z.boolean().default(false),
  includeTermite:    z.boolean().default(false),
  includeWellWater:  z.boolean().default(false),
  rushService:       z.boolean().default(false),

  // Optional cost override
  priceOverride: z.number().min(0).max(25000).optional(),

  units:    z.enum(['imperial', 'metric']).default('imperial'),
  currency: z.string().max(6).optional(),
});

export type HomeInspectionInput = z.infer<typeof homeInspectionInputSchema>;

// ---------------------------------------------------------------------------
// Output Interface
// ---------------------------------------------------------------------------

export interface HomeInspectionResult {
  // Itemized fees
  baseInspectionFee: number;   // size band × property × age × foundation × region (or price override)
  radonCost: number;           // 0 unless selected
  moldCost: number;
  sewerScopeCost: number;
  termiteCost: number;
  wellWaterCost: number;
  rushSurcharge: number;       // 0 unless rush scheduling selected

  // Totals
  totalCostLow: number;        // -15%
  totalCostMid: number;        // planning midpoint
  totalCostHigh: number;       // +25%

  // Per-unit & schedule
  costPerSqFt: number;         // total mid ÷ area (per sq ft, or per m² in metric)
  estimatedHours: number;      // estimated on-site inspection duration
}

// ---------------------------------------------------------------------------
// Planning cost model (2026 US national averages)
// Base fees follow the flat-fee tiers most ASHI/InterNACHI inspectors publish,
// with a linear per-sq-ft tail for very large homes.
// ---------------------------------------------------------------------------

const SQFT_PER_SQM = 10.7639;

const SIZE_BANDS: { max: number; fee: number }[] = [
  { max: 1000,  fee: 225 },
  { max: 2000,  fee: 325 },
  { max: 3000,  fee: 425 },
  { max: 4000,  fee: 525 },
  { max: Infinity, fee: 525 }, // plus per-sq-ft tail below
];
const TAIL_FEE_PER_SQFT_ABOVE_4000 = 0.09;

const PROPERTY_MULTIPLIER: Record<HomeInspectionInput['propertyType'], number> = {
  'single-family':    1.0,
  'condo-townhouse':  0.85,  // limited exterior & roof access, smaller footprint
  'multi-family':     1.45,  // 2–4 units: added kitchens, baths, panels, egress
  'manufactured':     0.95,
};

const AGE_MULTIPLIER: Record<HomeInspectionInput['homeAge'], number> = {
  'new':         1.10, // new-construction walkthroughs add punch-list verification
  'age-1-10':    1.00,
  'age-11-25':   1.05,
  'age-26-50':   1.12,
  'age-50-plus': 1.25, // obsolete wiring/plumbing, added inspection time
};

const FOUNDATION_MULTIPLIER: Record<HomeInspectionInput['foundation'], number> = {
  'slab':              1.00,
  'crawlspace':        1.06,
  'basement':          1.08,
  'walkout-basement':  1.12,
};

const REGION_INDEX: Record<HomeInspectionInput['region'], number> = {
  'us-national': 1.00,
  'northeast':   1.15,
  'southeast':   0.92,
  'midwest':     0.93,
  'southwest':   0.97,
  'west-coast':  1.22,
};

// National planning averages for add-on services (region-indexed)
const ADDON_COSTS = {
  radon:      175, // continuous radon monitor placement + reading (typ. $125–$275)
  mold:       375, // air + surface sampling with lab analysis (typ. $250–$650)
  sewerScope: 175, // camera inspection of the lateral line (typ. $125–$300)
  termite:    110, // WDI/WDO inspection letter (typ. $75–$150)
  wellWater:  160, // well flow + basic potability panel (typ. $100–$300)
};

const RUSH_MULTIPLIER = 0.25; // +25% for same-day / next-day scheduling

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function round(value: number, decimals: number): number {
  if (!Number.isFinite(value)) return 0;
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function baseFeeForArea(areaSqFt: number): number {
  if (areaSqFt > 4000) {
    return 525 + (areaSqFt - 4000) * TAIL_FEE_PER_SQFT_ABOVE_4000;
  }
  for (const band of SIZE_BANDS) {
    if (areaSqFt <= band.max) return band.fee;
  }
  return SIZE_BANDS[SIZE_BANDS.length - 1]!.fee;
}

function durationHours(input: HomeInspectionInput, areaSqFt: number): number {
  let hours: number;
  if (areaSqFt <= 1000)       hours = 2.0;
  else if (areaSqFt <= 2000)  hours = 2.5;
  else if (areaSqFt <= 3000)  hours = 3.0;
  else if (areaSqFt <= 4000)  hours = 3.5;
  else                        hours = 4.5;

  if (input.foundation === 'crawlspace')            hours += 0.5;
  else if (input.foundation === 'basement')         hours += 0.5;
  else if (input.foundation === 'walkout-basement') hours += 0.75;

  if (input.includeRadon)      hours += 0.25;
  if (input.includeMold)       hours += 0.5;
  if (input.includeSewerScope) hours += 0.5;
  if (input.includeTermite)    hours += 0.5;
  if (input.includeWellWater)  hours += 0.25;

  if (input.homeAge === 'age-50-plus') hours += 0.5;
  if (input.homeAge === 'new')         hours += 0.25;

  return round(hours, 2);
}

// ---------------------------------------------------------------------------
// Calculator
// ---------------------------------------------------------------------------

export function calculateHomeInspection(input: HomeInspectionInput): HomeInspectionResult {
  const {
    homeArea, propertyType, homeAge, foundation, region,
    includeRadon, includeMold, includeSewerScope, includeTermite,
    includeWellWater, rushService, priceOverride, units,
  } = input;

  // Normalize area to square feet
  const areaSqFt = units === 'metric' ? homeArea * SQFT_PER_SQM : homeArea;

  // ── Base fee ───────────────────────────────────────────────────────────────
  // Size band → property type → age → foundation → regional index.
  const regionFactor = REGION_INDEX[region];
  const computedBase =
    baseFeeForArea(areaSqFt) *
    PROPERTY_MULTIPLIER[propertyType] *
    AGE_MULTIPLIER[homeAge] *
    FOUNDATION_MULTIPLIER[foundation] *
    regionFactor;

  // The override input is quoted in the display currency and replaces the
  // region-adjusted base fee (add-ons and rush still apply on top).
  const baseInspectionFee = priceOverride !== undefined && priceOverride > 0
    ? priceOverride
    : computedBase;

  // ── Add-on services (region-indexed planning averages) ────────────────────
  const radonCost      = includeRadon      ? ADDON_COSTS.radon      * regionFactor : 0;
  const moldCost       = includeMold       ? ADDON_COSTS.mold       * regionFactor : 0;
  const sewerScopeCost = includeSewerScope ? ADDON_COSTS.sewerScope * regionFactor : 0;
  const termiteCost    = includeTermite    ? ADDON_COSTS.termite    * regionFactor : 0;
  const wellWaterCost  = includeWellWater  ? ADDON_COSTS.wellWater  * regionFactor : 0;

  // ── Rush scheduling ────────────────────────────────────────────────────────
  const preRushSubtotal = baseInspectionFee + radonCost + moldCost + sewerScopeCost + termiteCost + wellWaterCost;
  const rushSurcharge = rushService ? preRushSubtotal * RUSH_MULTIPLIER : 0;

  // ── Totals ─────────────────────────────────────────────────────────────────
  const totalCostMid = preRushSubtotal + rushSurcharge;
  const totalCostLow = totalCostMid * 0.85;   // competitive markets / small firms
  const totalCostHigh = totalCostMid * 1.25;  // high-cost metros / complex homes

  const costPerUnitArea = areaSqFt > 0
    ? totalCostMid / (units === 'metric' ? homeArea : areaSqFt)
    : 0;

  return {
    baseInspectionFee: round(baseInspectionFee, 2),
    radonCost: round(radonCost, 2),
    moldCost: round(moldCost, 2),
    sewerScopeCost: round(sewerScopeCost, 2),
    termiteCost: round(termiteCost, 2),
    wellWaterCost: round(wellWaterCost, 2),
    rushSurcharge: round(rushSurcharge, 2),
    totalCostLow: round(totalCostLow, 2),
    totalCostMid: round(totalCostMid, 2),
    totalCostHigh: round(totalCostHigh, 2),
    costPerSqFt: round(costPerUnitArea, 2),
    estimatedHours: durationHours(input, areaSqFt),
  };
}
