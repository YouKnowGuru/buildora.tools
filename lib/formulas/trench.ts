/**
 * Trench Calculator — Formula Library
 *
 * Calculates excavation volume, bedding material, backfill,
 * truck loads, and total cost for trench digging projects.
 *
 * Sources: OSHA excavation standards, APWA, RSMeans Site Work & Landscape Cost Data.
 */

export type TrenchPurpose =
  | 'utility-pipe'    // sewer / water / gas
  | 'drainage'        // French drain / storm drain
  | 'foundation'      // strip footing / grade beam
  | 'cable-conduit'   // electrical / telecom
  | 'irrigation';     // lawn irrigation system

export type BeddingMaterial =
  | 'none'
  | 'gravel'          // crushed stone / pea gravel
  | 'sand'
  | 'concrete';       // concrete cradle (expensive, very stable)

export interface TrenchInput {
  length: number;           // ft (imperial) or m (metric)
  width: number;            // ft or m
  depth: number;            // ft or m
  beddingMaterial: BeddingMaterial;
  beddingDepth: number;     // ft or m (thickness of bedding layer at bottom of trench)
  includeSpoilHaul: boolean; // haul spoil off-site?
  pricePerCuYd?: number;    // excavation cost per cu yd (optional override)
  units: 'imperial' | 'metric';
}

export interface TrenchResult {
  // Geometry
  trenchVolumeCuYd: number;    // total excavated volume (cu yd or m³)
  beddingVolumeCuYd: number;   // bedding material needed (cu yd or m³)
  backfillVolumeCuYd: number;  // backfill = trench − bedding (swell factor applied)
  spoilVolumeCuYd: number;     // loose spoil to haul away (cu yd or m³, with swell)

  // Truck loads
  truckLoads: number;          // 14-CY dump trucks (or 10 m³) needed for spoil

  // Costs
  excavationCost: number;
  beddingCost: number;
  haulCost: number;
  totalCostLow: number;
  totalCostMid: number;
  totalCostHigh: number;

  // Per-unit cost
  costPerLf: number;           // cost per linear foot (or metre)
}

// ─────────────────────────────────────────────────────────────────────────────
// Baseline excavation cost per cu yd (mechanical excavation, US averages)
// Source: RSMeans Site Work, HomeAdvisor, contractor survey 2024
// ─────────────────────────────────────────────────────────────────────────────
const BASE_EXCAVATION_COST_PER_CUYD = 12.00; // $12/cu yd ($15–$20 w/ shoring)
const BASE_EXCAVATION_COST_PER_M3   = 15.70; // ≈ $12 × 1.308 (m³ to cu yd)

// Haul cost: per truck load off-site (dump truck + labour + disposal)
const HAUL_COST_PER_TRUCK_IMPERIAL = 275; // per 14-CY load
const HAUL_COST_PER_TRUCK_METRIC   = 360; // per 10-m³ load

// Bedding material cost per cu yd (or m³)
const BEDDING_COST_PER_CUYD: Record<BeddingMaterial, number> = {
  none:     0,
  gravel:   35,  // $25–$45 / cu yd delivered & placed
  sand:     28,  // $20–$38 / cu yd
  concrete: 180, // $140–$220 / cu yd (mix + pour)
};

const BEDDING_COST_PER_M3: Record<BeddingMaterial, number> = {
  none:     0,
  gravel:   46,
  sand:     37,
  concrete: 235,
};

// Soil swell factor — compacted in-situ volume → loose haul volume
// 25% swell is industry standard for common soil; adjust for clay (35%) or rock (50%)
const SWELL_FACTOR = 1.25;

// Dump-truck payload capacity
const TRUCK_CAPACITY_CUYD = 14; // typical 14-CY soil capacity
const TRUCK_CAPACITY_M3   = 10; // ≈ 10 m³

export function calculateTrench(input: TrenchInput): TrenchResult {
  const isMetric = input.units === 'metric';

  // ── 1. Raw volumes ──────────────────────────────────────────────────────────
  // All intermediate math is done in the input unit system (ft→cu yd, m→m³)
  const trenchVolumeCuYd = isMetric
    ? input.length * input.width * input.depth               // m³
    : (input.length * input.width * input.depth) / 27;       // cu ft → cu yd

  const beddingVolumeCuYd = input.beddingMaterial === 'none'
    ? 0
    : isMetric
      ? input.length * input.width * input.beddingDepth
      : (input.length * input.width * input.beddingDepth) / 27;

  // Backfill: trench volume minus the space taken by bedding (no swell in backfill calc)
  const backfillVolumeCuYd = Math.max(0, trenchVolumeCuYd - beddingVolumeCuYd);

  // Loose spoil for hauling (apply swell: excavated volume expands when loose)
  const spoilVolumeCuYd = (trenchVolumeCuYd - beddingVolumeCuYd) * SWELL_FACTOR;

  // ── 2. Truck loads ──────────────────────────────────────────────────────────
  const truckCapacity = isMetric ? TRUCK_CAPACITY_M3 : TRUCK_CAPACITY_CUYD;
  const truckLoads = input.includeSpoilHaul
    ? Math.ceil(spoilVolumeCuYd / truckCapacity)
    : 0;

  // ── 3. Costs ────────────────────────────────────────────────────────────────
  const baseRatePerUnit = isMetric ? BASE_EXCAVATION_COST_PER_M3 : BASE_EXCAVATION_COST_PER_CUYD;
  const appliedRate = input.pricePerCuYd && input.pricePerCuYd > 0
    ? input.pricePerCuYd
    : baseRatePerUnit;

  const excavationCost = round2(trenchVolumeCuYd * appliedRate);

  const beddingRatePerUnit = isMetric
    ? BEDDING_COST_PER_M3[input.beddingMaterial]
    : BEDDING_COST_PER_CUYD[input.beddingMaterial];
  const beddingCost = round2(beddingVolumeCuYd * beddingRatePerUnit);

  const haulCostPerLoad = isMetric ? HAUL_COST_PER_TRUCK_METRIC : HAUL_COST_PER_TRUCK_IMPERIAL;
  const haulCost = round2(truckLoads * haulCostPerLoad);

  const totalCostMid = round2(excavationCost + beddingCost + haulCost);
  const totalCostLow = round2(totalCostMid * 0.80);   // −20%
  const totalCostHigh = round2(totalCostMid * 1.25);  // +25%

  // Cost per linear foot / metre
  const costPerLf = input.length > 0 ? round2(totalCostMid / input.length) : 0;

  return {
    trenchVolumeCuYd:   round2(trenchVolumeCuYd),
    beddingVolumeCuYd:  round2(beddingVolumeCuYd),
    backfillVolumeCuYd: round2(backfillVolumeCuYd),
    spoilVolumeCuYd:    round2(spoilVolumeCuYd),
    truckLoads,
    excavationCost,
    beddingCost,
    haulCost,
    totalCostLow,
    totalCostMid,
    totalCostHigh,
    costPerLf,
  };
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
