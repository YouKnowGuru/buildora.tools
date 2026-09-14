export type WaterproofingMethod = 'interior-sealant' | 'interior-drain' | 'exterior-membrane' | 'exterior-drain' | 'full-system';
export type WaterIssue = 'minor-dampness' | 'active-leaks' | 'hydrostatic-pressure';

export interface BasementWaterproofingInput {
  basementArea: number;
  perimeter: number;
  method: WaterproofingMethod;
  waterIssue: WaterIssue;
  includeSumpPump: boolean;
  includeCrackRepair: boolean;
  crackLength: number;
  includeExcavation: boolean;
  units: 'imperial' | 'metric';
}

export interface BasementWaterproofingResult {
  totalCostLow: number;
  totalCostMid: number;
  totalCostHigh: number;
  waterproofingCost: number;
  drainageCost: number;
  sumpPumpCost: number;
  crackRepairCost: number;
  excavationCost: number;
  costPerSqFt: number;
  costPerLinearFoot: number;
  treatedPerimeter: number;
}

const SQFT_PER_SQM = 10.7639;
const FT_PER_M = 3.28084;

const METHOD_RATES: Record<WaterproofingMethod, { area: number; perimeter: number }> = {
  'interior-sealant': { area: 4.5, perimeter: 0 },
  'interior-drain': { area: 0, perimeter: 72 },
  'exterior-membrane': { area: 0, perimeter: 95 },
  'exterior-drain': { area: 0, perimeter: 125 },
  'full-system': { area: 2.5, perimeter: 155 },
};

const ISSUE_FACTOR: Record<WaterIssue, number> = {
  'minor-dampness': 0.9,
  'active-leaks': 1,
  'hydrostatic-pressure': 1.18,
};

function round(value: number, decimals = 2): number {
  const multiplier = 10 ** decimals;
  return Math.round((Number.isFinite(value) ? value : 0) * multiplier) / multiplier;
}

export function calculateBasementWaterproofing(input: BasementWaterproofingInput): BasementWaterproofingResult {
  const areaSqFt = input.units === 'metric' ? input.basementArea * SQFT_PER_SQM : input.basementArea;
  const perimeterFt = input.units === 'metric' ? input.perimeter * FT_PER_M : input.perimeter;
  const rates = METHOD_RATES[input.method];
  const factor = ISSUE_FACTOR[input.waterIssue];
  const waterproofingCost = areaSqFt * rates.area * factor;
  const drainageCost = perimeterFt * rates.perimeter * factor;
  const sumpPumpCost = input.includeSumpPump ? (input.method === 'full-system' ? 1450 : 1100) : 0;
  const crackRepairCost = input.includeCrackRepair ? Math.max(350, input.crackLength * (input.units === 'metric' ? FT_PER_M : 1) * 32) : 0;
  const excavationCost = input.includeExcavation && ['exterior-membrane', 'exterior-drain', 'full-system'].includes(input.method)
    ? perimeterFt * 38
    : 0;
  const totalCostMid = waterproofingCost + drainageCost + sumpPumpCost + crackRepairCost + excavationCost;
  const displayArea = input.basementArea || 1;
  const displayPerimeter = input.perimeter;
  return {
    totalCostLow: round(totalCostMid * 0.8),
    totalCostMid: round(totalCostMid),
    totalCostHigh: round(totalCostMid * 1.25),
    waterproofingCost: round(waterproofingCost),
    drainageCost: round(drainageCost),
    sumpPumpCost: round(sumpPumpCost),
    crackRepairCost: round(crackRepairCost),
    excavationCost: round(excavationCost),
    costPerSqFt: round(totalCostMid / displayArea),
    costPerLinearFoot: round(totalCostMid / (input.perimeter || 1)),
    treatedPerimeter: round(displayPerimeter, 1),
  };
}
