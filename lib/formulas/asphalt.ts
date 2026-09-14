export interface AsphaltInput {
  length: number; // ft (imperial) or m (metric)
  width: number; // ft or m
  depth: number; // in (imperial) or cm (metric)
  density: number; // lb/ft³ (imperial) or kg/m³ (metric)
  waste: number; // percent, 0-20
  pricePerTon?: number;
  units: 'imperial' | 'metric';
}

export interface AsphaltResult {
  areaSqFt: number; // sq ft or sq m depending on units
  volumeCuYd: number; // cu yd (imperial) or cu m (metric)
  tonsExact: number; // tons (imperial) or kg... normalized to tons for both
  tonsWithWaste: number;
  totalCost: number | null;
}

const LB_PER_TON = 2000;
const CU_FT_PER_CU_YD = 27;

/**
 * All numeric inputs are expected to already be validated/clamped by
 * asphaltInputSchema (lib/validation/schemas.ts) before reaching this
 * function. This function does not re-validate — it assumes trusted,
 * in-range numbers so the math stays simple and side-effect free.
 */
export function calculateAsphalt(input: AsphaltInput): AsphaltResult {
  const { length, width, depth, density, waste, pricePerTon, units } = input;

  const area = length * width;

  if (units === 'imperial') {
    const depthFt = depth / 12;
    const volumeCuFt = area * depthFt;
    const volumeCuYd = volumeCuFt / CU_FT_PER_CU_YD;
    const weightLbs = volumeCuFt * density;
    const tonsExact = weightLbs / LB_PER_TON;
    const tonsWithWaste = tonsExact * (1 + waste / 100);
    const totalCost =
      pricePerTon !== undefined && pricePerTon > 0
        ? tonsWithWaste * pricePerTon
        : null;

    return {
      areaSqFt: round(area, 2),
      volumeCuYd: round(volumeCuYd, 3),
      tonsExact: round(tonsExact, 2),
      tonsWithWaste: round(tonsWithWaste, 2),
      totalCost: totalCost !== null ? round(totalCost, 2) : null,
    };
  }

  // metric — tonnage is reported in metric tonnes to match the UI's
  // "tonnes" unit label (the imperial path reports US short tons).
  const depthM = depth / 100;
  const volumeCuM = area * depthM;
  const weightKg = volumeCuM * density;
  const tonsExact = weightKg / 1000;
  const tonsWithWaste = tonsExact * (1 + waste / 100);
  const totalCost =
    pricePerTon !== undefined && pricePerTon > 0
      ? tonsWithWaste * pricePerTon
      : null;

  return {
    areaSqFt: round(area, 2), // sq m in metric mode
    volumeCuYd: round(volumeCuM, 3), // cu m in metric mode
    tonsExact: round(tonsExact, 2),
    tonsWithWaste: round(tonsWithWaste, 2),
    totalCost: totalCost !== null ? round(totalCost, 2) : null,
  };
}

function round(value: number, decimals: number): number {
  if (!Number.isFinite(value)) return 0; // never let NaN/Infinity leak to the UI
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

/**
 * Verification case: 20ft x 10ft x 4in @ 145 lb/ft³, 5% waste.
 *
 * NOTE: the original planning doc's §8 and build checklist claim this case
 * should equal "≈12.9 tons" — that figure does not match the doc's own
 * stated formula. Working the formula as written: 200 sq ft x (4/12) ft =
 * 66.67 cu ft; x145 lb/ft³ = 9,666.7 lb = 4.83 tons; x1.05 waste = 5.08
 * tons. That also matches real-world asphalt tonnage calculators for a
 * 20x10 driveway at 4in, so the formula (not the doc's stated check value)
 * is what's correct. Verifying against 5.08 tons here.
 */
export function __verify(): boolean {
  const result = calculateAsphalt({
    length: 20,
    width: 10,
    depth: 4,
    density: 145,
    waste: 5,
    units: 'imperial',
  });
  return Math.abs(result.tonsWithWaste - 5.08) < 0.05;
}
