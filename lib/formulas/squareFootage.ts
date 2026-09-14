/**
 * Square Footage Calculator — Formula Library (Upgraded Edition)
 *
 * Computes:
 *  1. Exact Area (sq ft or m²)
 *  2. Recommended Purchase Quantity (with waste/overage)
 *  3. Extra Waste Amount (+sq ft or +m²)
 *  4. Square Yards (yd² for carpet/turf)
 *  5. Dual Unit Equivalent (m² <-> sq ft)
 *  6. Total Linear Perimeter (ft or m for baseboards/trim)
 *  7. Boxes / Packages Required (flooring/tile boxes) + Leftover Coverage
 *  8. Estimated Material Cost (with waste) and Raw Material Cost
 */

export type ShapeType =
  | 'rectangle'
  | 'circle'
  | 'triangle'
  | 'trapezoid'
  | 'l-shape';

export interface SquareFootageInput {
  shape: ShapeType;
  length?: number;
  width?: number;
  diameter?: number;
  height?: number;
  base1?: number;
  base2?: number;
  length2?: number;
  width2?: number;
  quantity: number;
  waste: number;
  coveragePerBox?: number;   // e.g. 20 sq ft/box for flooring/tiles
  pricePerSqFt?: number;
  units: 'imperial' | 'metric';
  currency?: string;
}

export interface SquareFootageResult {
  area: number;             // Exact area without waste (sq ft or m²)
  wasteAmount: number;      // Extra area added for waste (+sq ft or +m²)
  areaWithWaste: number;    // Recommended purchase quantity (sq ft or m²)
  areaSqYards: number;      // Area in square yards (yd²)
  areaEquivalent: number;   // Opposite unit equivalent (m² if imperial, sq ft if metric)
  perimeter: number;        // Total linear edge length (ft or m)

  // Box / Pack Estimator
  boxesRequired: number;    // Math.ceil(areaWithWaste / coveragePerBox)
  actualCoverage: number;   // boxesRequired * coveragePerBox
  remainingArea: number;    // actualCoverage - areaWithWaste

  // Cost Estimates
  rawCost: number;          // Exact area × price
  totalCost: number;        // Recommended purchase quantity × price
}

export function calculateSquareFootage(input: SquareFootageInput): SquareFootageResult {
  const isMetric = input.units === 'metric';
  const qty = Math.max(1, Math.min(1000, input.quantity || 1));
  const wastePercent = Math.max(0, Math.min(100, input.waste || 0));

  let singleArea = 0;
  let singlePerimeter = 0;

  switch (input.shape) {
    case 'circle': {
      const d = Math.max(0, input.diameter ?? 0);
      const r = d / 2;
      singleArea = Math.PI * Math.pow(r, 2);
      singlePerimeter = Math.PI * d;
      break;
    }
    case 'triangle': {
      const b = Math.max(0, input.length ?? 0);
      const h = Math.max(0, input.height ?? 0);
      singleArea = 0.5 * b * h;
      const side = Math.sqrt(Math.pow(b / 2, 2) + Math.pow(h, 2));
      singlePerimeter = b + 2 * side;
      break;
    }
    case 'trapezoid': {
      const b1 = Math.max(0, input.base1 ?? 0);
      const b2 = Math.max(0, input.base2 ?? 0);
      const h = Math.max(0, input.height ?? 0);
      singleArea = 0.5 * (b1 + b2) * h;
      const leg = Math.sqrt(Math.pow(Math.abs(b1 - b2) / 2, 2) + Math.pow(h, 2));
      singlePerimeter = b1 + b2 + 2 * leg;
      break;
    }
    case 'l-shape': {
      const l1 = Math.max(0, input.length ?? 0);
      const w1 = Math.max(0, input.width ?? 0);
      const l2 = Math.max(0, input.length2 ?? 0);
      const w2 = Math.max(0, input.width2 ?? 0);
      singleArea = l1 * w1 + l2 * w2;
      singlePerimeter = 2 * (Math.max(l1, l2) + Math.max(w1, w2));
      break;
    }
    case 'rectangle':
    default: {
      const l = Math.max(0, input.length ?? 0);
      const w = Math.max(0, input.width ?? 0);
      singleArea = l * w;
      singlePerimeter = 2 * (l + w);
      break;
    }
  }

  const totalBaseArea = singleArea * qty;
  const totalAreaWithWaste = totalBaseArea * (1 + wastePercent / 100);
  const wasteAmount = totalAreaWithWaste - totalBaseArea;
  const totalPerimeter = singlePerimeter * qty;

  const areaSqYards = isMetric
    ? totalAreaWithWaste / 0.836127
    : totalAreaWithWaste / 9.0;

  const areaEquivalent = isMetric
    ? totalBaseArea * 10.7639
    : totalBaseArea * 0.092903;

  // Box Calculations
  let boxesRequired = 0;
  let actualCoverage = 0;
  let remainingArea = 0;

  if (input.coveragePerBox && input.coveragePerBox > 0) {
    boxesRequired = Math.ceil(totalAreaWithWaste / input.coveragePerBox);
    actualCoverage = boxesRequired * input.coveragePerBox;
    remainingArea = actualCoverage - totalAreaWithWaste;
  }

  // Cost calculations
  const price = input.pricePerSqFt && input.pricePerSqFt > 0 ? input.pricePerSqFt : 0;
  const rawCost = Math.round(totalBaseArea * price * 100) / 100;
  const totalCost = Math.round(totalAreaWithWaste * price * 100) / 100;

  return {
    area: round2(totalBaseArea),
    wasteAmount: round2(wasteAmount),
    areaWithWaste: round2(totalAreaWithWaste),
    areaSqYards: round2(areaSqYards),
    areaEquivalent: round2(areaEquivalent),
    perimeter: round2(totalPerimeter),
    boxesRequired,
    actualCoverage: round2(actualCoverage),
    remainingArea: round2(remainingArea),
    rawCost,
    totalCost,
  };
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
