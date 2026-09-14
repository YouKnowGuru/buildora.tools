/**
 * Insulation Calculator — Formula Engine
 *
 * Implements:
 *  1. Estimated framing factor deduction (16" OC, 24" OC, Continuous)
 *  2. IECC 2021 & DOE Climate Zone (Zones 1-8) reference R-value standards
 *  3. Material thickness & R-value deficit calculation
 *  4. Batt / Roll packages sizing
 *  5. Blown-in Cellulose & Fiberglass bag estimates (ASTM coverage density)
 *  6. Spray Foam Board Feet (Open-cell & Closed-cell: 1 bd ft = 1 sq ft × 1 in)
 *  7. Vapor barrier roll calculation (6 mil poly 1000 sq ft rolls)
 *  8. Multi-model cost estimation & multiple pricing options:
 *     - Price per square foot ($/sq ft or €/m²)
 *     - Price per package or bag ($/pack or $/bag)
 *     - Price per board foot ($/bd ft)
 *     - Professional installation labor rate ($/sq ft)
 *  9. Metric (m², cm, RSI) / Imperial dual-unit output
 */

export type InsulationApplication =
  | 'attic'
  | 'wall-2x4'
  | 'wall-2x6'
  | 'cathedral'
  | 'floor-crawlspace'
  | 'basement-wall'
  | 'custom';

export type InsulationMaterial =
  | 'fiberglass-batt'
  | 'rockwool-batt'
  | 'cellulose-blown'
  | 'fiberglass-blown'
  | 'sprayfoam-open'
  | 'sprayfoam-closed'
  | 'rigid-xps'
  | 'rigid-polyiso';

export type FramingSpacing = '16-oc' | '24-oc' | 'continuous';

export type ClimateZone =
  | 'zone-1'
  | 'zone-2'
  | 'zone-3'
  | 'zone-4'
  | 'zone-5'
  | 'zone-6'
  | 'zone-7'
  | 'zone-8'
  | 'custom';

export type InsulationPricingMode = 'per-sqft' | 'per-pack' | 'per-board-ft';

export interface InsulationInput {
  application: InsulationApplication;
  area: number;                        // Gross area (sq ft or m²)
  framingSpacing?: FramingSpacing;     // 16" OC, 24" OC, or continuous
  climateZone?: ClimateZone;           // IECC Climate Zone (1-8)
  targetRValue?: number;               // Desired R-value (e.g. 13, 21, 38, 49, 60)
  existingRValue?: number;             // Existing R-value if retrofitting (default 0)
  materialType?: InsulationMaterial;   // Type of insulation
  waste?: number;                      // Waste allowance % (default 5-10%)
  coveragePerPack?: number;            // Optional custom sq ft per batt bag/pack
  pricingMode?: InsulationPricingMode; // Pricing selector: 'per-sqft' | 'per-pack' | 'per-board-ft'
  pricePerSqFt?: number;               // $/sq ft (or €/m²)
  pricePerPack?: number;               // $/pack (batts) or $/bag (blown-in)
  pricePerBoardFoot?: number;          // $/board-foot (spray foam)
  pricePerUnit?: number;               // Generic fallback
  laborCostPerSqFt?: number;           // Labor cost per sq ft
  includeVaporBarrier?: boolean;       // Calculate 6 mil poly rolls
  units: 'imperial' | 'metric';
  currency?: string;
}

export interface InsulationResult {
  // Area & Dimensions
  grossArea: number;                   // Gross surface area (sq ft or m²)
  netInsulationArea: number;           // Net cavity area after estimated framing deduction
  areaWithWaste: number;               // Total purchase area with waste (sq ft or m²)
  wasteAmount: number;                 // Waste allowance area

  // Thermal Performance & Cavity Depth Feasibility
  recommendedRValue: number;           // Model code reference R-value for application & zone
  effectiveTargetRValue: number;       // Target R-value applied
  rValueDeficit: number;               // Additional R-value needed (target - existing)
  requiredThicknessInches: number;     // Material thickness needed (inches or cm)
  maxCavityDepthInches: number;        // Physical cavity depth limit (3.5" for 2x4, 5.5" for 2x6, etc.)
  maxCavityRValue: number;             // Maximum R-value that physically fits in the cavity
  isExceedingCavityDepth: boolean;     // True if required thickness exceeds physical cavity depth
  cavityWarning?: string;              // Actionable building science warning if target exceeds cavity capacity

  // Material Sizing & Packaging
  battPacksNeeded: number;             // Packages of batts/rolls needed
  blownBagsNeeded: number;             // Estimated bags of blown-in loose-fill needed
  sprayFoamBoardFeet: number;          // Spray foam volume in Board Feet (1 bd ft = 1 sq ft × 1 in)
  vaporBarrierRolls: number;           // 1000 sq ft poly sheet rolls needed

  // Financial Estimation & Rate Breakdown
  appliedMaterialRate: number;         // Material unit rate applied ($/sq ft, $/pack, or $/bd ft)
  appliedLaborRate: number;            // Labor rate applied ($/sq ft or €/m²)
  pricingUnitLabel: string;            // Unit label for applied material price
  materialCost: number;                // Estimated insulation material cost
  laborCost: number;                   // Estimated installation labor cost
  vaporBarrierCost: number;            // Vapor barrier cost
  totalCost: number;                   // Total estimated project cost

  // Dual Unit Equivalents
  metricAreaEquivalent: number;        // Total area in m² (or sq ft if metric)
  rsiValueEquivalent: number;          // Metric RSI equivalent (R / 5.678)
}

const SQ_FT_TO_M2 = 0.092903;
const M2_TO_SQ_FT = 10.7639;
const INCHES_TO_CM = 2.54;
const R_TO_RSI = 0.17611; // 1 h·ft²·°F/Btu = 0.17611 m²·K/W (R-value ÷ 5.678)

// IECC 2021 Reference R-values by Climate Zone & Application
const IECC_RECOMMENDATIONS: Record<ClimateZone, Record<InsulationApplication, number>> = {
  'zone-1': {
    attic: 30,
    'wall-2x4': 13,
    'wall-2x6': 15,
    cathedral: 30,
    'floor-crawlspace': 13,
    'basement-wall': 0,
    custom: 30,
  },
  'zone-2': {
    attic: 38,
    'wall-2x4': 13,
    'wall-2x6': 20,
    cathedral: 38,
    'floor-crawlspace': 13,
    'basement-wall': 0,
    custom: 38,
  },
  'zone-3': {
    attic: 38,
    'wall-2x4': 15,
    'wall-2x6': 20,
    cathedral: 38,
    'floor-crawlspace': 19,
    'basement-wall': 5,
    custom: 38,
  },
  'zone-4': {
    attic: 49,
    'wall-2x4': 15,
    'wall-2x6': 21,
    cathedral: 49,
    'floor-crawlspace': 19,
    'basement-wall': 10,
    custom: 49,
  },
  'zone-5': {
    attic: 49,
    'wall-2x4': 15,
    'wall-2x6': 21,
    cathedral: 49,
    'floor-crawlspace': 30,
    'basement-wall': 15,
    custom: 49,
  },
  'zone-6': {
    attic: 60,
    'wall-2x4': 15,
    'wall-2x6': 21,
    cathedral: 60,
    'floor-crawlspace': 30,
    'basement-wall': 15,
    custom: 60,
  },
  'zone-7': {
    attic: 60,
    'wall-2x4': 15,
    'wall-2x6': 21,
    cathedral: 60,
    'floor-crawlspace': 38,
    'basement-wall': 15,
    custom: 60,
  },
  'zone-8': {
    attic: 60,
    'wall-2x4': 15,
    'wall-2x6': 21,
    cathedral: 60,
    'floor-crawlspace': 38,
    'basement-wall': 15,
    custom: 60,
  },
  custom: {
    attic: 38,
    'wall-2x4': 13,
    'wall-2x6': 21,
    cathedral: 38,
    'floor-crawlspace': 19,
    'basement-wall': 10,
    custom: 30,
  },
};

// R-Value per inch by material type
const MATERIAL_R_PER_INCH: Record<InsulationMaterial, number> = {
  'fiberglass-batt': 3.4,
  'rockwool-batt': 3.8,
  'cellulose-blown': 3.6,
  'fiberglass-blown': 2.5,
  'sprayfoam-open': 3.7,
  'sprayfoam-closed': 6.7,
  'rigid-xps': 5.0,
  'rigid-polyiso': 6.5,
};

const MAX_CAVITY_DEPTHS: Record<InsulationApplication, number> = {
  'wall-2x4': 3.5,
  'wall-2x6': 5.5,
  'floor-crawlspace': 9.25,
  'cathedral': 9.25,
  'basement-wall': 3.5,
  'attic': 24.0,
  'custom': 24.0,
};

export function calculateInsulation(input: InsulationInput): InsulationResult {
  const isMetric = input.units === 'metric';
  const rawArea = Math.max(0, input.area || 0);
  const grossAreaSqFt = isMetric ? rawArea * M2_TO_SQ_FT : rawArea;
  const wastePercent = Math.max(0, Math.min(100, input.waste ?? 8));
  const app = input.application ?? 'attic';
  const zone = (input.climateZone as any) === 'zone-7-8' ? 'zone-7' : (input.climateZone ?? 'zone-4');
  const mat: InsulationMaterial = input.materialType ?? 'fiberglass-batt';
  const framing = input.framingSpacing ?? (app.startsWith('wall') || app.includes('floor') ? '16-oc' : 'continuous');

  // 1. Framing factor deduction (strictly dependent ONLY on framing spacing selected)
  let framingDeductionFactor = 0;
  if (framing === '16-oc') {
    framingDeductionFactor = 0.10; // 16" on-center = strictly 10% stud/joist area deduction
  } else if (framing === '24-oc') {
    framingDeductionFactor = 0.07; // 24" on-center = strictly 7% stud/joist area deduction
  } else {
    framingDeductionFactor = 0.0;  // Continuous = 0% deduction
  }

  const netInsulationAreaSqFt = Math.round(grossAreaSqFt * (1 - framingDeductionFactor) * 100) / 100;

  // 2. Purchase area with waste allowance (calculated on net cavity area for cavities, gross for continuous)
  const isContinuous = framing === 'continuous' || mat === 'rigid-xps' || mat === 'rigid-polyiso';
  const baseAreaForPurchase = isContinuous ? grossAreaSqFt : netInsulationAreaSqFt;
  const wasteAmountSqFt = baseAreaForPurchase * (wastePercent / 100);
  const areaWithWasteSqFt = Math.round((baseAreaForPurchase + wasteAmountSqFt) * 100) / 100;

  // 3. Thermal R-value targets & deficit
  const recommendedRValue = IECC_RECOMMENDATIONS[zone]?.[app] ?? 38;
  const targetRValue = input.targetRValue && input.targetRValue > 0 ? input.targetRValue : recommendedRValue;
  const existingRValue = Math.max(0, input.existingRValue ?? 0);
  const rValueDeficit = Math.max(0, targetRValue - existingRValue);

  // 4. Thickness needed in inches
  const rPerInch = MATERIAL_R_PER_INCH[mat] ?? 3.4;
  const requiredThicknessInches = rValueDeficit > 0 ? Math.round((rValueDeficit / rPerInch) * 10) / 10 : 0;

  // 5. Physical Cavity Depth Feasibility & Building Science Warning
  const maxCavityDepthInches = MAX_CAVITY_DEPTHS[app] ?? 24.0;
  const maxCavityRValue = Math.round(maxCavityDepthInches * rPerInch * 10) / 10;
  const isExceedingCavityDepth = app !== 'attic' && app !== 'custom' && requiredThicknessInches > maxCavityDepthInches;
  let cavityWarning: string | undefined = undefined;

  if (isExceedingCavityDepth) {
    const cavityLabel = app === 'wall-2x4' ? '2×4 (3.5")' : app === 'wall-2x6' ? '2×6 (5.5")' : `${maxCavityDepthInches}"`;
    const maxBattsR = app === 'wall-2x4' ? 15 : app === 'wall-2x6' ? 21 : Math.floor(maxCavityRValue);
    const maxFoamR = Math.round(maxCavityDepthInches * 6.7);
    cavityWarning = `Physically Impossible Cavity Depth: Required thickness (${requiredThicknessInches.toFixed(1)}") exceeds standard ${cavityLabel} cavity space. A ${cavityLabel} cavity holds max R-${maxBattsR} batts (or ~R-${maxFoamR} closed-cell spray foam). Do not compress thicker batts into the cavity. To achieve R-${targetRValue}, add continuous exterior rigid foam (ci) or deepen framing.`;
  }

  // 6. Packaging Calculations

  // A. Batts & Rolls Packaging (Material-Specific Manufacturer Standards)
  let standardBattPackCoverage = 40;
  if (mat === 'rockwool-batt') {
    // Rockwool Comfortbatt standard pack coverage
    if (targetRValue >= 49) {
      standardBattPackCoverage = 14.5;
    } else if (targetRValue >= 38) {
      standardBattPackCoverage = 20.0;
    } else if (targetRValue >= 30) {
      standardBattPackCoverage = 29.8; // R-30 Comfortbatt (7.25")
    } else if (targetRValue >= 21) {
      standardBattPackCoverage = 39.8; // R-23 Comfortbatt (5.5")
    } else {
      standardBattPackCoverage = 59.7; // R-15 Comfortbatt (3.5")
    }
  } else {
    // Fiberglass Batts & Rolls standard pack coverage
    if (targetRValue >= 49) {
      standardBattPackCoverage = 18;
    } else if (targetRValue >= 38) {
      standardBattPackCoverage = 24;
    } else if (targetRValue >= 30) {
      standardBattPackCoverage = 30;
    } else if (targetRValue >= 21) {
      standardBattPackCoverage = 38;
    } else {
      standardBattPackCoverage = 40;
    }
  }

  // Custom coverage is entered in sq ft or m², while purchase-area math is
  // normalized to sq ft.
  const battPackCoverage = input.coveragePerPack && input.coveragePerPack > 0
    ? (isMetric ? input.coveragePerPack * M2_TO_SQ_FT : input.coveragePerPack)
    : standardBattPackCoverage;
  const battPacksNeeded = rValueDeficit > 0 ? Math.ceil(areaWithWasteSqFt / battPackCoverage) : 0;

  // B. Blown-in Bags Estimate
  let blownBagsNeeded = 0;
  if (mat === 'cellulose-blown') {
    const rSqFtPerBag = 720;
    blownBagsNeeded = rValueDeficit > 0 ? Math.ceil((areaWithWasteSqFt * rValueDeficit) / rSqFtPerBag) : 0;
  } else if (mat === 'fiberglass-blown') {
    const rSqFtPerBag = 1350;
    blownBagsNeeded = rValueDeficit > 0 ? Math.ceil((areaWithWasteSqFt * rValueDeficit) / rSqFtPerBag) : 0;
  } else {
    // Batt / board materials are not sold as blown-in bags — no bag estimate.
    blownBagsNeeded = 0;
  }

  // C. Spray Foam Board Feet (1 bd ft = 1 sq ft × 1 inch depth)
  const sprayFoamBoardFeet = Math.round(areaWithWasteSqFt * requiredThicknessInches);

  // D. Vapor Barrier Poly Sheets (1 standard roll = 1,000 sq ft)
  const vaporBarrierRolls = input.includeVaporBarrier ? Math.ceil(areaWithWasteSqFt / 1000) : 0;
  const vaporBarrierCost = vaporBarrierRolls * 85; // ~$85 per 1,000 sq ft 6-mil roll

  // 7. Multi-Model Material Cost Calculation with Explicit Multiple Pricing Modes
  let materialCost = 0;
  let appliedMaterialRate = 0;
  let pricingUnitLabel = isMetric ? '/m²' : '/sq ft';
  const mode = input.pricingMode ?? (input.pricePerBoardFoot ? 'per-board-ft' : input.pricePerPack ? 'per-pack' : 'per-sqft');

  if (mode === 'per-pack' || (input.pricePerPack !== undefined && input.pricePerPack > 0)) {
    // Mode A: Price per Package / Bag
    pricingUnitLabel = mat.includes('blown') ? '/bag' : '/pack';
    const defaultPackPrice = mat.includes('blown') ? (mat === 'cellulose-blown' ? 22 : 30) : (targetRValue >= 38 ? 65 : 45);
    appliedMaterialRate = input.pricePerPack && input.pricePerPack > 0 ? input.pricePerPack : (input.pricePerUnit || defaultPackPrice);
    const quantity = mat.includes('blown') ? blownBagsNeeded : battPacksNeeded;
    materialCost = Math.round(quantity * appliedMaterialRate * 100) / 100;
  } else if (mode === 'per-board-ft' || (input.pricePerBoardFoot !== undefined && input.pricePerBoardFoot > 0)) {
    // Mode B: Price per Board Foot (Spray Foam)
    pricingUnitLabel = '/bd ft';
    const defaultBdFtPrice = mat === 'sprayfoam-open' ? 0.55 : 1.35;
    appliedMaterialRate = input.pricePerBoardFoot && input.pricePerBoardFoot > 0 ? input.pricePerBoardFoot : (input.pricePerUnit || defaultBdFtPrice);
    materialCost = Math.round(sprayFoamBoardFeet * appliedMaterialRate * 100) / 100;
  } else {
    // Mode C: Price per Square Foot (or m²)
    pricingUnitLabel = isMetric ? '/m²' : '/sq ft';
    let defaultSqFtPrice = 0.65;
    if (mat === 'fiberglass-batt') {
      defaultSqFtPrice = targetRValue >= 38 ? 1.05 : targetRValue >= 21 ? 0.80 : 0.50;
    } else if (mat === 'rockwool-batt') {
      defaultSqFtPrice = targetRValue >= 30 ? 1.75 : targetRValue >= 21 ? 1.35 : 0.90;
    } else if (mat === 'cellulose-blown') {
      defaultSqFtPrice = targetRValue >= 49 ? 1.45 : targetRValue >= 38 ? 1.15 : 0.85;
    } else if (mat === 'fiberglass-blown') {
      defaultSqFtPrice = targetRValue >= 49 ? 1.60 : targetRValue >= 38 ? 1.25 : 0.90;
    } else if (mat === 'sprayfoam-open') {
      defaultSqFtPrice = Math.max(1.20, requiredThicknessInches * 0.55);
    } else if (mat === 'sprayfoam-closed') {
      defaultSqFtPrice = Math.max(1.75, requiredThicknessInches * 1.35);
    } else if (mat === 'rigid-xps') {
      defaultSqFtPrice = Math.max(0.90, requiredThicknessInches * 0.45);
    } else if (mat === 'rigid-polyiso') {
      defaultSqFtPrice = Math.max(1.10, requiredThicknessInches * 0.55);
    }
    // Defaults are defined in $/sq ft — convert to $/m² in metric mode so the
    // rate matches the labeled pricing unit.
    const metricRateFactor = isMetric ? M2_TO_SQ_FT : 1;
    appliedMaterialRate = input.pricePerSqFt && input.pricePerSqFt > 0 ? input.pricePerSqFt : (input.pricePerUnit || defaultSqFtPrice * metricRateFactor);
    // Price is per m² in metric mode — apply against the area in the user's unit.
    const pricingArea = isMetric ? areaWithWasteSqFt * SQ_FT_TO_M2 : areaWithWasteSqFt;
    materialCost = Math.round(pricingArea * appliedMaterialRate * 100) / 100;
  }

  // 8. Installation Labor Cost (laborCost = purchaseArea × laborCostPerSqFt)
  const unitLaborPrice = input.laborCostPerSqFt !== undefined && input.laborCostPerSqFt !== null && input.laborCostPerSqFt > 0 ? input.laborCostPerSqFt : 0;
  const purchaseAreaActive = isMetric ? (areaWithWasteSqFt * SQ_FT_TO_M2) : areaWithWasteSqFt;
  const laborCost = Math.round(purchaseAreaActive * unitLaborPrice * 100) / 100;

  const totalCost = Math.round((materialCost + laborCost + vaporBarrierCost) * 100) / 100;

  // 9. Output Formatting
  const rsiValueEquivalent = Math.round(rValueDeficit * R_TO_RSI * 100) / 100;

  if (isMetric) {
    return {
      grossArea: round2(rawArea),
      netInsulationArea: round2(netInsulationAreaSqFt * SQ_FT_TO_M2),
      areaWithWaste: round2(areaWithWasteSqFt * SQ_FT_TO_M2),
      wasteAmount: round2(wasteAmountSqFt * SQ_FT_TO_M2),
      recommendedRValue,
      effectiveTargetRValue: targetRValue,
      rValueDeficit,
      requiredThicknessInches: round2(requiredThicknessInches * INCHES_TO_CM), // cm in metric mode
      maxCavityDepthInches: round2(maxCavityDepthInches * INCHES_TO_CM),      // cm in metric mode
      maxCavityRValue,
      isExceedingCavityDepth,
      cavityWarning,
      battPacksNeeded,
      blownBagsNeeded,
      sprayFoamBoardFeet,
      vaporBarrierRolls,
      appliedMaterialRate: round2(appliedMaterialRate),
      appliedLaborRate: round2(unitLaborPrice),
      pricingUnitLabel,
      materialCost,
      laborCost,
      vaporBarrierCost,
      totalCost,
      metricAreaEquivalent: round2(areaWithWasteSqFt), // sq ft equivalent
      rsiValueEquivalent,
    };
  }

  return {
    grossArea: round2(grossAreaSqFt),
    netInsulationArea: round2(netInsulationAreaSqFt),
    areaWithWaste: round2(areaWithWasteSqFt),
    wasteAmount: round2(wasteAmountSqFt),
    recommendedRValue,
    effectiveTargetRValue: targetRValue,
    rValueDeficit,
    requiredThicknessInches: round2(requiredThicknessInches),
    maxCavityDepthInches: round2(maxCavityDepthInches),
    maxCavityRValue,
    isExceedingCavityDepth,
    cavityWarning,
    battPacksNeeded,
    blownBagsNeeded,
    sprayFoamBoardFeet,
    vaporBarrierRolls,
    appliedMaterialRate: round2(appliedMaterialRate),
    appliedLaborRate: round2(unitLaborPrice),
    pricingUnitLabel,
    materialCost,
    laborCost,
    vaporBarrierCost,
    totalCost,
    metricAreaEquivalent: round2(areaWithWasteSqFt * SQ_FT_TO_M2), // m² equivalent
    rsiValueEquivalent,
  };
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
