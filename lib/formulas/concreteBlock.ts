import { z } from 'zod';

/**
 * Concrete Block (CMU) Calculator
 *
 * Calculates concrete masonry units (CMU), mortar bags, core-fill grout,
 * rebar reinforcement, and project costs per National Concrete Masonry
 * Association (NCMA) TEK manuals and ASTM C90 specifications.
 *
 * Sizing principles:
 *  - Standard nominal CMU is 8" x 8" x 16" (actual 7-5/8" x 7-5/8" x 15-5/8" + 3/8" mortar joint).
 *  - 1 block face area = 8" x 16" = 128 sq in = 0.8889 sq ft.
 *  - Standard multiplier = 144 / 128 = 1.125 blocks per sq ft of net wall area.
 *  - Mortar: ~7.5 to 8 bags (80 lb Type S/N) per 100 blocks for face-shell bedded masonry.
 *  - Grout volume: Core void volume by block thickness and filling interval.
 */

export const concreteBlockInputSchema = z.object({
  wallLength: z.number().min(0.5).max(2000).default(20), // ft or m
  wallHeight: z.number().min(0.5).max(100).default(8), // ft or m
  blockSize: z.enum(['8x8x16', '6x8x16', '10x8x16', '12x8x16', '4x8x16']).default('8x8x16'),
  openingsArea: z.number().min(0).max(5000).default(0), // sq ft or m2 (doors, windows)
  waste: z.number().min(0).max(30).default(5), // %
  groutFill: z.enum(['none', 'solid', '16', '24', '32', '48']).default('none'),
  includeRebar: z.boolean().default(true),
  rebarSpacing: z.enum(['16', '24', '32', '48']).default('32'),
  includeBondBeam: z.boolean().default(true),
  pricePerBlock: z.number().min(0).optional(),
  mortarPricePerBag: z.number().min(0).optional(),
  groutPricePerCuYd: z.number().min(0).optional(),
  units: z.enum(['imperial', 'metric']).default('imperial'),
  currency: z.string().optional(),
});

export type ConcreteBlockInput = z.infer<typeof concreteBlockInputSchema>;

export interface ConcreteBlockResult {
  // Area & Geometry
  grossWallAreaSqFt: number;
  netWallAreaSqFt: number;
  metricGrossAreaM2: number;
  metricNetAreaM2: number;
  numberOfCourses: number;
  blocksPerCourse: number;

  // Block counts
  exactBlocks: number;
  totalBlocksWithWaste: number;
  wasteBlocksAdded: number;

  // Mortar
  mortarBags80lb: number;
  mortarBags60lb: number;
  masonrySandTons: number;

  // Grout Core-Fill
  groutVolumeCuYd: number;
  groutVolumeCuM: number;
  groutBags50lb: number;

  // Rebar Reinforcement
  verticalRebarPieces: number;
  verticalRebarLinearFt: number;
  horizontalRebarLinearFt: number;
  totalRebarLinearFt: number;
  rebar20FtSticks: number;

  // Costs (if prices entered)
  blockCost: number | null;
  mortarCost: number | null;
  groutCost: number | null;
  totalCost: number | null;
}

// Void volume per block in cubic feet for 100% solid core fill
const GROUT_CUFT_PER_BLOCK: Record<string, number> = {
  '4x8x16': 0.12,
  '6x8x16': 0.23,
  '8x8x16': 0.35,
  '10x8x16': 0.46,
  '12x8x16': 0.58,
};

export function calculateConcreteBlock(rawInput: ConcreteBlockInput): ConcreteBlockResult {
  const input = concreteBlockInputSchema.parse(rawInput);
  const isMetric = input.units === 'metric';

  // Normalize dimensions to Imperial feet for baseline math
  const lengthFt = isMetric ? input.wallLength * 3.28084 : input.wallLength;
  const heightFt = isMetric ? input.wallHeight * 3.28084 : input.wallHeight;
  const openingsSqFt = isMetric ? input.openingsArea * 10.7639 : input.openingsArea;

  const grossWallAreaSqFt = lengthFt * heightFt;
  const netWallAreaSqFt = Math.max(0, grossWallAreaSqFt - openingsSqFt);

  // ASTM C90 8x16 nominal face standard:
  // 1 block = 8" height x 16" length (with 3/8" mortar joint) = 1.125 blocks per sq ft
  const BLOCKS_PER_SQFT = 1.125;
  // 4x8x16 blocks have a 4" nominal course height; all other standard CMU use 8".
  const COURSE_HEIGHT_BY_SIZE: Record<string, number> = {
    '4x8x16': 4,
    '6x8x16': 8,
    '8x8x16': 8,
    '10x8x16': 8,
    '12x8x16': 8,
  };
  const COURSE_HEIGHT_INCHES = COURSE_HEIGHT_BY_SIZE[input.blockSize] ?? 8;
  const BLOCK_LENGTH_INCHES = 16;

  const numberOfCourses = Math.max(1, Math.round((heightFt * 12) / COURSE_HEIGHT_INCHES));
  const blocksPerCourse = Math.max(1, Math.round((lengthFt * 12) / BLOCK_LENGTH_INCHES));

  // Normalizing metric inputs can leave a tiny floating-point remainder
  // (e.g. 160.00000001 sq ft). Do not turn that rounding artifact into a
  // whole additional block at an otherwise exact boundary.
  const normalizedNetWallAreaSqFt = Math.round(netWallAreaSqFt * 10_000) / 10_000;
  const exactBlocks = Math.ceil((normalizedNetWallAreaSqFt * BLOCKS_PER_SQFT) - 0.0001);
  const wasteMultiplier = 1 + input.waste / 100;
  const totalBlocksWithWaste = Math.ceil(exactBlocks * wasteMultiplier);
  const wasteBlocksAdded = Math.max(0, totalBlocksWithWaste - exactBlocks);

  // Mortar estimates:
  // Industry standard: ~7.5 80-lb bags of pre-mixed Type S or N per 100 blocks (or 10 60-lb bags).
  // Sand from scratch: ~0.45 tons of sand per 100 blocks.
  const mortarBags80lb = Math.ceil((totalBlocksWithWaste * 7.5) / 100);
  const mortarBags60lb = Math.ceil((totalBlocksWithWaste * 10) / 100);
  const masonrySandTons = Number(((totalBlocksWithWaste * 0.45) / 100).toFixed(2));

  // Grout core fill:
  let groutVolumeCuFt = 0;
  const unitVoidCuFt = GROUT_CUFT_PER_BLOCK[input.blockSize] ?? 0.35;

  if (input.groutFill === 'solid') {
    groutVolumeCuFt = exactBlocks * unitVoidCuFt;
  } else if (input.groutFill === '16') {
    // 16" OC fills every vertical core (2 cores per 16" block)
    groutVolumeCuFt = exactBlocks * unitVoidCuFt * 0.5;
  } else if (input.groutFill === '24') {
    groutVolumeCuFt = exactBlocks * unitVoidCuFt * 0.333;
  } else if (input.groutFill === '32') {
    // 32" OC fills 1 core every 2 blocks (25% of cores)
    groutVolumeCuFt = exactBlocks * unitVoidCuFt * 0.25;
  } else if (input.groutFill === '48') {
    // 48" OC fills 1 core every 3 blocks (16.7% of cores)
    groutVolumeCuFt = exactBlocks * unitVoidCuFt * 0.167;
  }

  // Add bond beam course grout if enabled (standard 1 top course)
  if (input.includeBondBeam && numberOfCourses > 0) {
    const bondBeamBlocks = blocksPerCourse;
    const bondBeamCuFt = bondBeamBlocks * unitVoidCuFt;
    groutVolumeCuFt += bondBeamCuFt;
  }

  // Include 10% grout wastage factor for overfills/spillage
  const groutVolumeCuYdRaw = groutVolumeCuFt > 0
    ? (groutVolumeCuFt * 1.1) / 27
    : 0;
  const groutVolumeCuYd = Number(groutVolumeCuYdRaw.toFixed(2));
  const groutVolumeCuM = Number((groutVolumeCuYdRaw * 0.764555).toFixed(2));
  // 50lb pre-mixed core-fill grout bag yields ~0.45 cu ft
  const groutBags50lb = groutVolumeCuFt > 0 ? Math.ceil((groutVolumeCuFt * 1.1) / 0.45) : 0;

  // Rebar Reinforcement:
  let verticalRebarPieces = 0;
  let verticalRebarLinearFt = 0;
  let horizontalRebarLinearFt = 0;

  if (input.includeRebar) {
    const spacingInches = Number.parseInt(input.rebarSpacing, 10) || 32;
    // Spacing along wall length + 1 end bar + 2 corner bars
    verticalRebarPieces = Math.ceil((lengthFt * 12) / spacingInches) + 2;
    // Each vertical bar runs height + 2ft for footing dowel lap splice
    const verticalBarLengthFt = heightFt + 2;
    verticalRebarLinearFt = Math.round(verticalRebarPieces * verticalBarLengthFt);

    if (input.includeBondBeam) {
      // 2 continuous #4 or #5 bars in bond beam + 10% lap splices
      horizontalRebarLinearFt = Math.round(lengthFt * 2 * 1.1);
    }
  }

  const totalRebarLinearFt = verticalRebarLinearFt + horizontalRebarLinearFt;
  // Standard rebar comes in 20-foot sticks
  const rebar20FtSticks = Math.ceil(totalRebarLinearFt / 20);

  // Costs
  let blockCost: number | null = null;
  let mortarCost: number | null = null;
  let groutCost: number | null = null;
  let totalCost: number | null = null;

  if (input.pricePerBlock !== undefined && input.pricePerBlock > 0) {
    blockCost = Number((totalBlocksWithWaste * input.pricePerBlock).toFixed(2));
  }
  if (input.mortarPricePerBag !== undefined && input.mortarPricePerBag > 0) {
    mortarCost = Number((mortarBags80lb * input.mortarPricePerBag).toFixed(2));
  }
  if (input.groutPricePerCuYd !== undefined && input.groutPricePerCuYd > 0 && groutVolumeCuYd > 0) {
    // The input price follows the active unit toggle: $/cu yd in Imperial,
    // $/m³ in Metric.
    const groutVolumeInUserUnits = isMetric
      ? groutVolumeCuYdRaw * 0.764555
      : groutVolumeCuYdRaw;
    groutCost = Number((groutVolumeInUserUnits * input.groutPricePerCuYd).toFixed(2));
  }

  const costItems = [blockCost, mortarCost, groutCost].filter((c): c is number => c !== null);
  if (costItems.length > 0) {
    totalCost = Number(costItems.reduce((acc, curr) => acc + curr, 0).toFixed(2));
  }

  const areaMultiplier = isMetric ? 0.092903 : 1;
  const lengthMultiplier = isMetric ? 0.3048 : 1;
  const massMultiplier = isMetric ? 0.907185 : 1;
  const volumeInUserUnits = isMetric ? groutVolumeCuM : groutVolumeCuYd;

  return {
    // These legacy result keys drive labels that switch with the unit toggle,
    // so their numeric values must use that same active unit system.
    grossWallAreaSqFt: Number((grossWallAreaSqFt * areaMultiplier).toFixed(isMetric ? 2 : 1)),
    netWallAreaSqFt: Number((netWallAreaSqFt * areaMultiplier).toFixed(isMetric ? 2 : 1)),
    metricGrossAreaM2: Number((grossWallAreaSqFt * 0.092903).toFixed(2)),
    metricNetAreaM2: Number((netWallAreaSqFt * 0.092903).toFixed(2)),
    numberOfCourses,
    blocksPerCourse,
    exactBlocks,
    totalBlocksWithWaste,
    wasteBlocksAdded,
    mortarBags80lb,
    mortarBags60lb,
    masonrySandTons: Number((masonrySandTons * massMultiplier).toFixed(2)),
    groutVolumeCuYd: volumeInUserUnits,
    groutVolumeCuM,
    groutBags50lb,
    verticalRebarPieces,
    verticalRebarLinearFt: Number((verticalRebarLinearFt * lengthMultiplier).toFixed(2)),
    horizontalRebarLinearFt: Number((horizontalRebarLinearFt * lengthMultiplier).toFixed(2)),
    totalRebarLinearFt: Number((totalRebarLinearFt * lengthMultiplier).toFixed(2)),
    rebar20FtSticks,
    blockCost,
    mortarCost,
    groutCost,
    totalCost,
  };
}
