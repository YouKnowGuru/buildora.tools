/**
 * Bathroom Remodel Cost Calculator
 * --------------------------------
 * Industry-standard residential remodeling cost estimation based on NKBA
 * (National Kitchen & Bath Association) guidelines, RSMeans residential
 * repair & remodeling cost data, and regional trade labor rates.
 */

export type BathroomType = 'powder' | 'three-quarter' | 'full' | 'primary-master' | 'custom';
export type FinishTier = 'budget' | 'mid-range' | 'luxury';
export type LayoutChange = 'none' | 'minor' | 'major';
export type Region =
  | 'us-national'
  | 'us-northeast'
  | 'us-west'
  | 'us-midwest'
  | 'us-south'
  | 'canada'
  | 'uk'
  | 'australia';

export interface BathroomRemodelInput {
  bathroomType: BathroomType;
  roomLength: number; // ft
  roomWidth: number;  // ft
  finishTier: FinishTier;
  layoutChange: LayoutChange;
  includeTileShower: boolean;
  includeFreestandingTub: boolean;
  includeDoubleVanity: boolean;
  includeHeatedFloor: boolean;
  diyDemolition: boolean;
  region?: Region;
  units?: 'imperial' | 'metric';
  currency?: string;
}

export interface BathroomRemodelResult {
  totalEstimatedCost: number;       // Midpoint estimate
  estimatedCostLow: number;         // Low range (-15%)
  estimatedCostHigh: number;        // High range (+20%)
  costPerSqFt: number;
  squareFootage: number;
  laborCost: number;
  materialsCost: number;
  demoCost: number;
  plumbingCost: number;
  electricalCost: number;
  tileWaterproofingCost: number;
  vanityCountertopCost: number;
  showerTubCost: number;
  paintingTrimCost: number;
  permitsAndContingency: number;
  estimatedWeeksMin: number;
  estimatedWeeksMax: number;
  regionalMultiplier: number;
}

// Typical square footages if default dimensions used (Imperial in feet)
export const BATHROOM_DEFAULT_DIMS: Record<BathroomType, { length: number; width: number }> = {
  powder: { length: 5, width: 4 },           // 20 sq ft (Half Bath: toilet + sink)
  'three-quarter': { length: 7, width: 5 },  // 35 sq ft (Toilet, sink, standing shower)
  full: { length: 8, width: 6 },             // 48 sq ft (Standard Full Bath: tub/shower, vanity, toilet)
  'primary-master': { length: 12, width: 10 }, // 120 sq ft (Double vanity, walk-in shower, soaking tub)
  custom: { length: 10, width: 8 },          // 80 sq ft
};

// Typical metric dimensions (in meters)
export const BATHROOM_DEFAULT_DIMS_METRIC: Record<BathroomType, { length: number; width: number }> = {
  powder: { length: 1.5, width: 1.2 },           // ~1.8 m² (~19.4 sq ft)
  'three-quarter': { length: 2.1, width: 1.5 },  // ~3.2 m² (~34.4 sq ft)
  full: { length: 2.4, width: 1.8 },             // ~4.3 m² (~46.5 sq ft)
  'primary-master': { length: 3.7, width: 3.0 }, // ~11.1 m² (~119.5 sq ft)
  custom: { length: 3.0, width: 2.4 },          // ~7.2 m² (~77.5 sq ft)
};

export const REGIONAL_FACTORS: Record<Region, number> = {
  'us-national': 1.0,
  'us-northeast': 1.18,
  'us-west': 1.25,
  'us-midwest': 0.95,
  'us-south': 0.92,
  canada: 1.10,
  uk: 1.05,
  australia: 1.12,
};

export function calculateBathroomRemodel(input: BathroomRemodelInput): BathroomRemodelResult {
  const isMetric = input.units === 'metric';
  const defaultDims = isMetric ? BATHROOM_DEFAULT_DIMS_METRIC : BATHROOM_DEFAULT_DIMS;
  const dims = defaultDims[input.bathroomType] || (isMetric ? { length: 2.4, width: 1.8 } : { length: 8, width: 6 });

  const minDim = isMetric ? 0.9 : 3;
  const length = input.bathroomType === 'custom' ? Math.max(minDim, input.roomLength || dims.length) : dims.length;
  const width = input.bathroomType === 'custom' ? Math.max(minDim, input.roomWidth || dims.width) : dims.width;

  const areaM2 = Math.round(length * width * 10) / 10;
  const sqFt = isMetric ? Math.max(15, Math.round(areaM2 * 10.7639)) : Math.max(15, Math.round(length * width));

  // Base cost per sq ft by finish tier
  // Budget / Refresh: builder grade, prefab components, keep layout ($140/sqft base)
  // Mid-Range: custom tile shower, quartz/granite, upgraded fixtures ($220/sqft base)
  // Luxury: custom furniture double vanity, frameless glass, full marble/porcelain, high-end fixtures ($360/sqft base)
  let baseRatePerSqFt = 140;
  if (input.finishTier === 'mid-range') baseRatePerSqFt = 220;
  if (input.finishTier === 'luxury') baseRatePerSqFt = 360;

  // Layout reconfiguration multiplier on plumbing & electrical rough-ins
  let layoutAddon = 0;
  if (input.layoutChange === 'minor') {
    layoutAddon = input.finishTier === 'budget' ? 1200 : input.finishTier === 'mid-range' ? 2200 : 3800;
  } else if (input.layoutChange === 'major') {
    layoutAddon = input.finishTier === 'budget' ? 2800 : input.finishTier === 'mid-range' ? 4800 : 8500;
  }

  // Specific Feature Add-ons
  let tileShowerAddon = 0;
  if (input.includeTileShower && input.bathroomType !== 'powder') {
    tileShowerAddon = input.finishTier === 'budget' ? 2400 : input.finishTier === 'mid-range' ? 4200 : 7500;
  }

  let tubAddon = 0;
  if (input.includeFreestandingTub && input.bathroomType !== 'powder') {
    tubAddon = input.finishTier === 'budget' ? 1400 : input.finishTier === 'mid-range' ? 2800 : 5400;
  }

  let doubleVanityAddon = 0;
  if (input.includeDoubleVanity && input.bathroomType !== 'powder') {
    doubleVanityAddon = input.finishTier === 'budget' ? 700 : input.finishTier === 'mid-range' ? 1400 : 2800;
  }

  let heatedFloorAddon = 0;
  if (input.includeHeatedFloor) {
    const heatedArea = Math.max(10, Math.round(sqFt * 0.65));
    heatedFloorAddon = 600 + heatedArea * (input.finishTier === 'luxury' ? 24 : 18);
  }

  // Base raw calculated cost
  const baseCost = sqFt * baseRatePerSqFt;
  const rawSubtotal = baseCost + layoutAddon + tileShowerAddon + tubAddon + doubleVanityAddon + heatedFloorAddon;

  // DIY Demolition savings
  let demoDeduction = 0;
  if (input.diyDemolition) {
    demoDeduction = Math.round(Math.min(2200, Math.max(600, rawSubtotal * 0.075)));
  }

  const regionalFactor = REGIONAL_FACTORS[input.region || 'us-national'] ?? 1.0;
  const finalMidCost = Math.max(2500, Math.round((rawSubtotal - demoDeduction) * regionalFactor));

  // Labor vs Materials split
  const laborRatio = input.finishTier === 'luxury' ? 0.52 : input.finishTier === 'mid-range' ? 0.56 : 0.58;
  const laborCost = Math.round(finalMidCost * laborRatio);
  const materialsCost = finalMidCost - laborCost;

  // Trade breakdown allocation strictly generated from master total (Method A)
  // Demolition: 7% (or nominal dumpster/supplies fee if DIY)
  // Plumbing: 21%
  // Tile & Waterproofing: 24%
  // Vanity & Countertop: 15%
  // Shower / Tub & Fixtures: 13%
  // Electrical & Lighting: 9%
  // Painting, Trim & Finish: 5%
  // Permits & Contingency: balance to reconcile 100% of finalMidCost (~6%)
  let demoCost = Math.round(finalMidCost * 0.07);
  if (input.diyDemolition) {
    demoCost = Math.min(250, Math.round(finalMidCost * 0.015));
  }
  const plumbingCost = Math.round(finalMidCost * 0.21);
  const tileWaterproofingCost = Math.round(finalMidCost * 0.24);
  const vanityCountertopCost = Math.round(finalMidCost * 0.15);
  const showerTubCost = Math.round(finalMidCost * 0.13);
  const electricalCost = Math.round(finalMidCost * 0.09);
  const paintingTrimCost = Math.round(finalMidCost * 0.05);

  const subtotalTrades =
    demoCost +
    plumbingCost +
    tileWaterproofingCost +
    vanityCountertopCost +
    showerTubCost +
    electricalCost +
    paintingTrimCost;
  const permitsAndContingency = finalMidCost - subtotalTrades;

  // Low / High budget scenarios (-15% / +20%)
  const estimatedCostLow = Math.round(finalMidCost * 0.85);
  const estimatedCostHigh = Math.round(finalMidCost * 1.20);
  const costPerSqFt = Math.round(finalMidCost / sqFt);

  // Timeline estimate (in weeks)
  let weeksMin = 2;
  let weeksMax = 3;
  if (input.finishTier === 'mid-range') {
    weeksMin = 3;
    weeksMax = 4;
  } else if (input.finishTier === 'luxury') {
    weeksMin = 4;
    weeksMax = 7;
  }
  if (input.layoutChange === 'major') {
    weeksMin += 1;
    weeksMax += 2;
  }

  return {
    totalEstimatedCost: finalMidCost,
    estimatedCostLow,
    estimatedCostHigh,
    costPerSqFt: isMetric ? Math.round(finalMidCost / Math.max(1, areaM2)) : costPerSqFt,
    squareFootage: isMetric ? areaM2 : sqFt,
    laborCost,
    materialsCost,
    demoCost,
    plumbingCost,
    electricalCost,
    tileWaterproofingCost,
    vanityCountertopCost,
    showerTubCost,
    paintingTrimCost,
    permitsAndContingency,
    estimatedWeeksMin: weeksMin,
    estimatedWeeksMax: weeksMax,
    regionalMultiplier: regionalFactor,
  };
}
