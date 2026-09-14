/**
 * Sod Calculator — Formula Library
 *
 * Computes:
 *  1. Total lawn area by shape (rectangle, circle, triangle, trapezoid, L-shape, irregular)
 *  2. Adjusted area with waste/overage factor
 *  3. Sod roll count (standard roll sizes)
 *  4. Pallet count (based on rolls per pallet)
 *  5. Total material cost
 *  6. Soil preparation area (if applicable)
 */

export type SodShape =
  | 'rectangle'
  | 'circle'
  | 'triangle'
  | 'trapezoid'
  | 'l-shape'
  | 'irregular';

export type SodType =
  | 'bermuda'
  | 'kentucky-bluegrass'
  | 'fescue'
  | 'zoysia'
  | 'st-augustine'
  | 'centipede'
  | 'bahia'
  | 'rye';

export interface SodInput {
  shape: SodShape;
  length?: number;
  width?: number;
  diameter?: number;
  height?: number;
  base1?: number;
  base2?: number;
  length2?: number;
  width2?: number;
  irregularArea?: number;
  quantity: number;
  waste: number;
  sodType?: SodType;
  rollSize?: number; // sq ft per roll (standard = 10 sq ft)
  rollsPerPallet?: number; // standard = 45 rolls/pallet
  pricePerSqFt?: number;
  includeSoilPrep?: boolean;
  soilDepth?: number; // inches of topsoil
  pricePerSoilCuYd?: number;
  units: 'imperial' | 'metric';
  currency?: string;
}

export interface SodResult {
  // Area
  totalArea: number;           // Exact area (sq ft or m²)
  wasteAmount: number;         // Waste buffer (sq ft or m²)
  areaWithWaste: number;       // Purchase quantity (sq ft or m²)

  // Sod Packaging
  rollCount: number;           // Individual sod rolls needed
  palletCount: number;         // Full pallets needed
  actualCoverage: number;      // Total coverage from pallets
  leftoverArea: number;        // Extra sod area

  // Soil Prep
  soilVolumeCuYd: number;      // Topsoil needed (cu yd or m³)
  soilCost: number;            // Soil preparation cost

  // Cost
  sodCost: number;             // Sod material cost
  totalCost: number;           // Total with soil prep

  // Dual unit
  areaEquivalent: number;      // Opposite unit equivalent
}

const SQ_FT_TO_M2 = 0.092903;
const M2_TO_SQ_FT = 10.7639;
const STD_ROLL_SQFT = 10;      // Standard sod roll = 10 sq ft
const STD_ROLLS_PER_PALLET = 45; // Standard pallet = 45 rolls = 450 sq ft
const SOIL_CUFT_PER_CUYD = 27;

export function calculateSod(input: SodInput): SodResult {
  const isMetric = input.units === 'metric';
  const qty = Math.max(1, Math.min(1000, input.quantity || 1));
  // Explicit 0% waste must be honored — only fall back to 10% when unset.
  const wastePercent = Math.max(0, Math.min(100, input.waste ?? 10));

  // 1. Calculate base area based on shape
  let singleArea = 0;

  switch (input.shape) {
    case 'circle': {
      const d = Math.max(0, input.diameter ?? 0);
      const r = d / 2;
      singleArea = Math.PI * r * r;
      break;
    }
    case 'triangle': {
      const b = Math.max(0, input.length ?? 0);
      const h = Math.max(0, input.height ?? 0);
      singleArea = 0.5 * b * h;
      break;
    }
    case 'trapezoid': {
      const b1 = Math.max(0, input.base1 ?? 0);
      const b2 = Math.max(0, input.base2 ?? 0);
      const h = Math.max(0, input.height ?? 0);
      singleArea = 0.5 * (b1 + b2) * h;
      break;
    }
    case 'l-shape': {
      const l1 = Math.max(0, input.length ?? 0);
      const w1 = Math.max(0, input.width ?? 0);
      const l2 = Math.max(0, input.length2 ?? 0);
      const w2 = Math.max(0, input.width2 ?? 0);
      singleArea = l1 * w1 + l2 * w2;
      break;
    }
    case 'irregular': {
      singleArea = Math.max(0, input.irregularArea ?? 0);
      break;
    }
    case 'rectangle':
    default: {
      const l = Math.max(0, input.length ?? 0);
      const w = Math.max(0, input.width ?? 0);
      singleArea = l * w;
      break;
    }
  }

  // Convert to sq ft for core math if metric
  const singleAreaSqFt = isMetric ? singleArea * M2_TO_SQ_FT : singleArea;
  const totalAreaSqFt = singleAreaSqFt * qty;

  // 2. Apply waste factor
  const wasteAmountSqFt = totalAreaSqFt * (wastePercent / 100);
  const areaWithWasteSqFt = totalAreaSqFt + wasteAmountSqFt;

  // 3. Calculate sod rolls and pallets
  // The UI stores roll coverage in the active area unit. Normalize it before
  // comparing it with the internal square-foot calculation.
  const rollSizeSqFt = input.rollSize && input.rollSize > 0
    ? (isMetric ? input.rollSize * M2_TO_SQ_FT : input.rollSize)
    : STD_ROLL_SQFT;
  const rollsPerPallet = input.rollsPerPallet && input.rollsPerPallet > 0 ? input.rollsPerPallet : STD_ROLLS_PER_PALLET;
  const palletCoverageSqFt = rollsPerPallet * rollSizeSqFt;

  const rollCount = Math.ceil(areaWithWasteSqFt / rollSizeSqFt);
  const palletCount = Math.ceil(areaWithWasteSqFt / palletCoverageSqFt);
  const actualCoverageSqFt = palletCount * palletCoverageSqFt;
  const leftoverSqFt = Math.max(0, actualCoverageSqFt - areaWithWasteSqFt);

  // 4. Soil preparation
  let soilVolumeCuYd = 0;
  let soilCost = 0;

  if (input.includeSoilPrep) {
    // Soil depth is inches in imperial mode and centimetres in metric mode.
    const soilDepthFt = isMetric
      ? (input.soilDepth ?? 7.62) / 30.48
      : (input.soilDepth ?? 3) / 12;
    const soilVolumeCuFt = totalAreaSqFt * soilDepthFt;
    soilVolumeCuYd = soilVolumeCuFt / SOIL_CUFT_PER_CUYD;
    // Price is labeled $/m³ in metric mode — apply against m³ and convert
    // the $/cu yd default to the same unit basis.
    const soilVolumeUserUnits = isMetric ? soilVolumeCuYd * 0.764555 : soilVolumeCuYd;
    const soilPrice = input.pricePerSoilCuYd ?? (isMetric ? 35 / 0.764555 : 35);
    soilCost = Math.round(soilVolumeUserUnits * soilPrice * 100) / 100;
  }

  // 5. Cost calculations
  // Price is labeled $/m² in metric mode — apply against the area in the
  // user's unit so metric quotes are not inflated 10.76×.
  const pricePerSqFt = input.pricePerSqFt && input.pricePerSqFt > 0 ? input.pricePerSqFt : 0;
  const sodCost = Math.round(areaWithWasteSqFt * (isMetric ? SQ_FT_TO_M2 : 1) * pricePerSqFt * 100) / 100;
  const totalCost = Math.round((sodCost + soilCost) * 100) / 100;

  // 6. Output formatting
  if (isMetric) {
    return {
      totalArea: round2(totalAreaSqFt * SQ_FT_TO_M2),
      wasteAmount: round2(wasteAmountSqFt * SQ_FT_TO_M2),
      areaWithWaste: round2(areaWithWasteSqFt * SQ_FT_TO_M2),
      rollCount,
      palletCount,
      actualCoverage: round2(actualCoverageSqFt * SQ_FT_TO_M2),
      leftoverArea: round2(leftoverSqFt * SQ_FT_TO_M2),
      soilVolumeCuYd: round2(soilVolumeCuYd * 0.764555), // cu yd to m³
      soilCost,
      sodCost,
      totalCost,
      areaEquivalent: round2(areaWithWasteSqFt), // sq ft equivalent (with waste)
    };
  }

  return {
    totalArea: round2(totalAreaSqFt),
    wasteAmount: round2(wasteAmountSqFt),
    areaWithWaste: round2(areaWithWasteSqFt),
    rollCount,
    palletCount,
    actualCoverage: round2(actualCoverageSqFt),
    leftoverArea: round2(leftoverSqFt),
    soilVolumeCuYd: round2(soilVolumeCuYd),
    soilCost,
    sodCost,
    totalCost,
    areaEquivalent: round2(areaWithWasteSqFt * SQ_FT_TO_M2), // m² equivalent (with waste)
  };
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
