import { z } from 'zod';

export const sprayFoamInputSchema = z.object({
  application: z.enum([
    'roof-deck-attic',
    'wall-2x4',
    'wall-2x6',
    'crawlspace-subfloor',
    'rim-joist',
    'basement-wall',
    'pole-barn-metal',
    'custom',
  ]).default('roof-deck-attic'),
  area: z.number().min(1).default(1000),
  foamType: z.enum(['closed-cell-2lb', 'open-cell-05lb']).default('closed-cell-2lb'),
  thickness: z.number().min(0.25).max(18).optional(),
  targetRValue: z.number().min(1).max(100).optional(),
  framingSpacing: z.enum(['16-oc', '24-oc', 'continuous']).default('continuous'),
  oversprayWaste: z.number().min(0).max(50).default(10),
  pricingMode: z.enum(['per-board-foot', 'per-sqft', 'per-kit-600', 'per-drum-set']).default('per-board-foot'),
  pricePerBoardFoot: z.number().min(0).optional(),
  pricePerSqFt: z.number().min(0).optional(),
  pricePerKit: z.number().min(0).optional(),
  pricePerDrumSet: z.number().min(0).optional(),
  pricePerUnit: z.number().min(0).optional(),
  laborCostPerSqFt: z.number().min(0).optional(),
  includeThermalBarrier: z.boolean().default(false),
  includeOldInsulationRemoval: z.boolean().default(false),
  units: z.enum(['imperial', 'metric']).default('imperial'),
  currency: z.string().optional(),
});

export type SprayFoamInput = z.infer<typeof sprayFoamInputSchema>;

export interface SprayFoamResult {
  // Core Board Feet & Surface Sizing
  grossArea: number;
  netArea: number;
  boardFeet: number;
  boardFeetWithWaste: number;
  wasteAmountBdFt: number;
  
  // Thermal Metrics
  appliedThicknessInches: number;
  achievedRValue: number;
  rValuePerInch: number;
  vaporBarrierClass: string;
  isVaporRetarder: boolean;

  // Equipment, Chemical Drums & DIY Kit Yields
  drumSetsNeeded: number;
  diyKits600Needed: number;
  diyKits200Needed: number;

  // Itemized Contractor Cost Breakdown
  appliedMaterialRate: number;
  appliedLaborRate: number;
  pricingUnitLabel: string;
  materialCost: number;
  laborCost: number;
  thermalBarrierCost: number;
  removalCost: number;
  totalCost: number;

  // Dual Metric Equivalents
  metricVolumeM3: number;
  metricRsiValue: number;
  metricAreaM2: number;
}

const SQ_FT_TO_M2 = 0.092903;
const M2_TO_SQ_FT = 10.7639;
const INCHES_TO_CM = 2.54;
const CM_TO_INCHES = 0.393701;
const CU_FT_TO_M3 = 0.0283168;

// Recommended standard application thickness presets (inches)
export const DEFAULT_THICKNESS_BY_APP: Record<string, { closed: number; open: number }> = {
  'roof-deck-attic':     { closed: 4.5, open: 10.0 }, // ~R-30 closed / ~R-37 open
  'wall-2x4':            { closed: 3.5, open: 3.5 },  // ~R-23.5 closed / ~R-13 open
  'wall-2x6':            { closed: 5.5, open: 5.5 },  // ~R-36.8 closed / ~R-20.4 open
  'crawlspace-subfloor': { closed: 3.0, open: 6.0 },  // ~R-20.1 closed / ~R-22.2 open
  'rim-joist':           { closed: 3.0, open: 3.5 },  // ~R-20.1 closed / ~R-13 open
  'basement-wall':       { closed: 2.0, open: 3.5 },  // ~R-13.4 closed / ~R-13 open
  'pole-barn-metal':     { closed: 2.0, open: 4.0 },  // ~R-13.4 closed / ~R-14.8 open
  'custom':              { closed: 2.0, open: 3.5 },
};

// Chemical properties
export const FOAM_SPECS = {
  'closed-cell-2lb': {
    name: 'Closed-Cell Spray Foam (2.0 lb/cu ft)',
    rPerInch: 6.7,
    drumSetYieldBdFt: 4500, // Standard 55-gallon A/B chemical set
    vaporBarrierMinThicknessInches: 1.5,
    defaultPricePerBdFt: 1.35,
    defaultPricePerKit600: 850,
    defaultPricePerDrumSet: 2600,
  },
  'open-cell-05lb': {
    name: 'Open-Cell Spray Foam (0.5 lb/cu ft)',
    rPerInch: 3.7,
    drumSetYieldBdFt: 18000, // Standard 55-gallon A/B chemical set
    vaporBarrierMinThicknessInches: 999, // Open cell is vapor permeable (not a vapor barrier)
    defaultPricePerBdFt: 0.55,
    defaultPricePerKit600: 600,
    defaultPricePerDrumSet: 2200,
  },
};

export function calculateSprayFoam(input: SprayFoamInput): SprayFoamResult {
  const isMetric = input.units === 'metric';
  const rawArea = Math.max(0, input.area || 0);
  const grossAreaSqFt = isMetric ? rawArea * M2_TO_SQ_FT : rawArea;
  const foamType = input.foamType ?? 'closed-cell-2lb';
  const app = input.application ?? 'roof-deck-attic';
  const framing = input.framingSpacing ?? 'continuous';
  const wastePercent = Math.max(0, Math.min(50, input.oversprayWaste ?? 10));

  // 1. Framing Area Deduction
  let framingDeduction = 0;
  if (framing === '16-oc') {
    framingDeduction = 0.10; // 10% framing stud deduction
  } else if (framing === '24-oc') {
    framingDeduction = 0.07; // 7% framing stud deduction
  } else {
    framingDeduction = 0.0;  // Continuous / open roof deck / un-framed metal
  }

  const netAreaSqFt = Math.round(grossAreaSqFt * (1 - framingDeduction) * 100) / 100;

  // 2. Thickness & R-Value Resolution
  const foamConfig = FOAM_SPECS[foamType];
  const rPerInch = foamConfig.rPerInch;

  let appliedThicknessInches = 0;
  if (input.targetRValue !== undefined && input.targetRValue > 0) {
    appliedThicknessInches = Math.round((input.targetRValue / rPerInch) * 10) / 10;
  } else if (input.thickness !== undefined && input.thickness > 0) {
    appliedThicknessInches = isMetric ? Math.round(input.thickness * CM_TO_INCHES * 10) / 10 : input.thickness;
  } else {
    const defaults = DEFAULT_THICKNESS_BY_APP[app] || DEFAULT_THICKNESS_BY_APP['custom'] || { closed: 2.0, open: 3.5 };
    appliedThicknessInches = foamType === 'closed-cell-2lb' ? defaults.closed : defaults.open;
  }

  const achievedRValue = Math.round(appliedThicknessInches * rPerInch * 10) / 10;

  // 3. Board Feet Volume Calculations
  // 1 Board Foot = 1 sq ft × 1 inch thick (1/12 cu ft)
  const baseAreaForFoam = framing === 'continuous' ? grossAreaSqFt : netAreaSqFt;
  const rawBoardFeet = Math.round(baseAreaForFoam * appliedThicknessInches);
  const wasteAmountBdFt = Math.round(rawBoardFeet * (wastePercent / 100));
  const boardFeetWithWaste = rawBoardFeet + wasteAmountBdFt;

  // 4. Vapor Barrier Physics & Classification (ASTM E96 / IRC Section R702.7)
  const isVaporRetarder = foamType === 'closed-cell-2lb' && appliedThicknessInches >= foamConfig.vaporBarrierMinThicknessInches;
  let vaporBarrierClass = 'Class III (Semi-Permeable, > 1.0 perm)';
  if (foamType === 'closed-cell-2lb') {
    if (appliedThicknessInches >= 2.0) {
      vaporBarrierClass = 'Class II Vapor Retarder (0.1 – 1.0 perm)';
    } else if (appliedThicknessInches >= 1.5) {
      vaporBarrierClass = 'Class II Vapor Retarder (0.8 – 1.0 perm Borderline)';
    } else {
      vaporBarrierClass = 'Semi-Permeable (> 1.0 perm - Requires Vapor Barrier in Cold Zones)';
    }
  } else {
    vaporBarrierClass = 'Vapor Permeable (> 10 perms - Air Barrier Only)';
  }

  // 5. Chemical Drum & DIY Kit Yields
  const drumSetsNeeded = Math.ceil(boardFeetWithWaste / foamConfig.drumSetYieldBdFt);
  const diyKits600Needed = Math.ceil(boardFeetWithWaste / 600);
  const diyKits200Needed = Math.ceil(boardFeetWithWaste / 200);

  // 6. Pricing & Contractor Cost Breakdown
  let materialCost = 0;
  let appliedMaterialRate = 0;
  let pricingUnitLabel = '/bd ft';
  const mode = input.pricingMode ?? 'per-board-foot';

  if (mode === 'per-sqft') {
    // Mode A: Price per Square Foot at specified thickness (per m² in metric).
    // Defaults are defined in $/sq ft — convert to $/m² in metric mode so the
    // rate matches the labeled pricing unit.
    pricingUnitLabel = isMetric ? '/m²' : '/sq ft';
    const defaultSqFtPrice = Math.round(appliedThicknessInches * foamConfig.defaultPricePerBdFt * 100) / 100;
    const metricRateFactor = isMetric ? M2_TO_SQ_FT : 1;
    appliedMaterialRate = input.pricePerSqFt && input.pricePerSqFt > 0 ? input.pricePerSqFt : (input.pricePerUnit || defaultSqFtPrice * metricRateFactor);
    const pricingArea = baseAreaForFoam * (1 + wastePercent / 100) * (isMetric ? SQ_FT_TO_M2 : 1);
    materialCost = Math.round(pricingArea * appliedMaterialRate * 100) / 100;
  } else if (mode === 'per-kit-600') {
    // Mode B: Price per 600 bd-ft DIY Froth-Pak Kit
    pricingUnitLabel = '/600 bd-ft kit';
    appliedMaterialRate = input.pricePerKit && input.pricePerKit > 0 ? input.pricePerKit : (input.pricePerUnit || foamConfig.defaultPricePerKit600);
    materialCost = Math.round(diyKits600Needed * appliedMaterialRate * 100) / 100;
  } else if (mode === 'per-drum-set') {
    // Mode C: Price per 55-Gallon Chemical Drum Set
    pricingUnitLabel = '/55-gal drum set';
    appliedMaterialRate = input.pricePerDrumSet && input.pricePerDrumSet > 0 ? input.pricePerDrumSet : (input.pricePerUnit || foamConfig.defaultPricePerDrumSet);
    materialCost = Math.round(drumSetsNeeded * appliedMaterialRate * 100) / 100;
  } else {
    // Mode D: Price per Board Foot ($/bd ft) — Default & Contractor Standard
    pricingUnitLabel = '/bd ft';
    appliedMaterialRate = input.pricePerBoardFoot && input.pricePerBoardFoot > 0 ? input.pricePerBoardFoot : (input.pricePerUnit || foamConfig.defaultPricePerBdFt);
    materialCost = Math.round(boardFeetWithWaste * appliedMaterialRate * 100) / 100;
  }

  // Labor / Installation Cost — strictly priced per square foot (or m²) of
  // physical surface sprayed (not inflated by overspray chemical waste)
  const unitLaborPrice = input.laborCostPerSqFt !== undefined && input.laborCostPerSqFt !== null && input.laborCostPerSqFt > 0 ? input.laborCostPerSqFt : 0;
  const laborPricingArea = isMetric ? baseAreaForFoam * SQ_FT_TO_M2 : baseAreaForFoam;
  const laborCost = Math.round(laborPricingArea * unitLaborPrice * 100) / 100;

  // Thermal Barrier Ignition Coating (IRC Section R316.4 / DC315 fire paint at ~$0.65/sq ft)
  const thermalBarrierCost = input.includeThermalBarrier
    ? Math.round(laborPricingArea * 0.65 * (isMetric ? M2_TO_SQ_FT : 1) * 100) / 100
    : 0;

  // Old Insulation Removal & Vacuuming (~$1.25/sq ft)
  const removalCost = input.includeOldInsulationRemoval
    ? Math.round(laborPricingArea * 1.25 * (isMetric ? M2_TO_SQ_FT : 1) * 100) / 100
    : 0;

  // Total Project Cost
  const totalCost = Math.round((materialCost + laborCost + thermalBarrierCost + removalCost) * 100) / 100;

  // 7. Metric Conversions
  const metricVolumeM3 = Math.round((boardFeetWithWaste / 12) * CU_FT_TO_M3 * 100) / 100;
  const metricRsiValue = Math.round(achievedRValue * 0.17611 * 100) / 100;
  const metricAreaM2 = Math.round(baseAreaForFoam * (1 + wastePercent / 100) * SQ_FT_TO_M2 * 100) / 100;

  if (isMetric) {
    return {
      grossArea: Math.round(rawArea * 100) / 100,
      netArea: Math.round(netAreaSqFt * SQ_FT_TO_M2 * 100) / 100,
      boardFeet: rawBoardFeet,
      boardFeetWithWaste,
      wasteAmountBdFt,
      appliedThicknessInches: Math.round(appliedThicknessInches * INCHES_TO_CM * 10) / 10, // display in cm
      achievedRValue,
      rValuePerInch: rPerInch,
      vaporBarrierClass,
      isVaporRetarder,
      drumSetsNeeded,
      diyKits600Needed,
      diyKits200Needed,
      appliedMaterialRate: Math.round(appliedMaterialRate * 100) / 100,
      appliedLaborRate: Math.round(unitLaborPrice * 100) / 100,
      pricingUnitLabel,
      materialCost,
      laborCost,
      thermalBarrierCost,
      removalCost,
      totalCost,
      metricVolumeM3,
      metricRsiValue,
      metricAreaM2: Math.round(rawArea * (1 + wastePercent / 100) * 100) / 100,
    };
  }

  return {
    grossArea: Math.round(grossAreaSqFt * 100) / 100,
    netArea: Math.round(netAreaSqFt * 100) / 100,
    boardFeet: rawBoardFeet,
    boardFeetWithWaste,
    wasteAmountBdFt,
    appliedThicknessInches: Math.round(appliedThicknessInches * 10) / 10,
    achievedRValue,
    rValuePerInch: rPerInch,
    vaporBarrierClass,
    isVaporRetarder,
    drumSetsNeeded,
    diyKits600Needed,
    diyKits200Needed,
    appliedMaterialRate: Math.round(appliedMaterialRate * 100) / 100,
    appliedLaborRate: Math.round(unitLaborPrice * 100) / 100,
    pricingUnitLabel,
    materialCost,
    laborCost,
    thermalBarrierCost,
    removalCost,
    totalCost,
    metricVolumeM3,
    metricRsiValue,
    metricAreaM2,
  };
}
