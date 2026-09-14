/**
 * Warehouse Space Calculator — Formula Library
 *
 * Calculates square footage (or square metres), pallet storage capacity,
 * aisle requirements, staging/dock allowances, and lease costs for warehouses.
 *
 * Industry Standards:
 * - Standard GMA Pallet: 48" x 40" = 13.33 sq ft footprint (approx 15 sq ft with rack clearance).
 * - Euro Pallet: 1200mm x 800mm = 0.96 m² (approx 1.1 m² with clearance).
 * - Aisle Space Factors:
 *   - Wide Aisle (Counterbalance Forklift, 12–13 ft): ~42% aisle overhead
 *   - Narrow Aisle (Reach Truck, 9–10 ft): ~30% aisle overhead
 *   - Very Narrow Aisle (VNA Turret Truck, 5.5–6.5 ft): ~18% aisle overhead
 * - Staging & Operations Buffer: 25% (receiving, shipping, docks, office, battery rooms)
 */

export type RackingType =
  | 'selective'    // Standard single-deep pallet rack (100% selectivity)
  | 'floor-stack'   // Block stacking on the floor (bulk, no racks)
  | 'double-deep'   // 2-deep racking (50% selectivity, higher density)
  | 'drive-in';     // Drive-in / Push-back high density storage

export type AisleType =
  | 'wide'         // Standard counterbalance forklift (12–13 ft)
  | 'narrow'       // Reach truck (9–10 ft)
  | 'vna';         // Very Narrow Aisle turret truck (5.5–6.5 ft)

export interface WarehouseInput {
  palletCount: number;         // Total pallets to store (e.g. 500)
  rackingType: RackingType;
  rackLevels: number;          // Vertical levels (1 to 8)
  aisleType: AisleType;
  includeOpsArea: boolean;     // Add docks, staging & office buffer (+25%)
  rentPerSqFt?: number;        // Annual lease rate per sq ft (or per m²)
  units: 'imperial' | 'metric';
}

export interface WarehouseResult {
  // Area Breakdown (sq ft or sq m)
  totalAreaSqFt: number;       // Grand total recommended warehouse footprint
  storageAreaSqFt: number;     // Physical rack/pallet footprint on floor
  aisleAreaSqFt: number;       // Aisle and forklift maneuvering space
  opsAreaSqFt: number;         // Receiving, shipping docks, staging & office space
  
  // Capacity & Efficiency
  groundPalletPositions: number; // Floor positions required
  utilizationRate: number;     // % of total building area used directly for storage
  
  // Lease Estimates (if rent rate provided)
  estMonthlyRent: number;
  estAnnualRent: number;
}

// Footprint per pallet position including rack uprights and flute clearance
const PALLET_FOOTPRINT_SQFT = 15.0; // 48"x40" GMA pallet + clearance
const PALLET_FOOTPRINT_SQM  = 1.40; // 1200x800mm Euro pallet + clearance

// Storage method density multiplier (floor positions needed relative to selective single-deep)
const RACKING_DENSITY_FACTOR: Record<RackingType, number> = {
  'selective':   1.00,
  'floor-stack':  0.90, // tighter block stacking
  'double-deep':  0.65, // shares access aisle across 2 deep
  'drive-in':     0.45, // eliminates most internal aisles
};

// Aisle space allowance (% of raw storage footprint added for traffic and turning radius)
const AISLE_SPACE_FACTOR: Record<AisleType, number> = {
  'wide':   0.42, // 12-13 ft aisles (~42% overhead)
  'narrow': 0.30, // 9-10 ft aisles (~30% overhead)
  'vna':    0.18, // 5.5-6.5 ft aisles (~18% overhead)
};

// Receiving, shipping, staging, docks, and administrative office buffer
const OPS_AREA_FACTOR = 0.25; // 25% of storage + aisle area

export function calculateWarehouse(input: WarehouseInput): WarehouseResult {
  const isMetric = input.units === 'metric';

  const validLevels = Math.max(1, Math.min(8, input.rackLevels || 1));
  const validPallets = Math.max(1, input.palletCount || 1);

  // 1. Calculate floor pallet positions
  // For floor-stacking, cap stack height at rackLevels (e.g. 2-3 high)
  const densityFactor = RACKING_DENSITY_FACTOR[input.rackingType] ?? 1.0;
  const groundPositions = Math.ceil((validPallets / validLevels) * densityFactor);

  // 2. Pure storage footprint (floor area of racks/pallets)
  // Always calculate in sq ft first, then convert to m² if needed.
  // PALLET_FOOTPRINT_SQFT = 15.0 sq ft per position (GMA 48"x40" with rack clearance).
  const storageAreaSqFt = groundPositions * PALLET_FOOTPRINT_SQFT;

  // 3. Aisle area required for material handling equipment
  // (factor = aisle area as a share of the storage footprint, per the
  // documented aisle overhead percentages: wide ~42%, narrow ~30%, VNA ~18%)
  const aisleFactor = AISLE_SPACE_FACTOR[input.aisleType] ?? 0.35;
  // Drive-in racks eliminate most internal aisles (~50% reduction vs. selective)
  const adjustedAisleFactor = input.rackingType === 'drive-in' ? aisleFactor * 0.5 : aisleFactor;
  const aisleAreaSqFt = storageAreaSqFt * adjustedAisleFactor;

  // 4. Staging, dock doors, packing, and office area
  const storagePlusAislesSqFt = storageAreaSqFt + aisleAreaSqFt;
  const opsAreaSqFt = input.includeOpsArea ? storagePlusAislesSqFt * OPS_AREA_FACTOR : 0;

  // 5. Total required warehouse building area (all in sq ft)
  const totalAreaSqFt = storagePlusAislesSqFt + opsAreaSqFt;

  // 6. Utilization rate (% of total floor space dedicated to storage)
  const utilizationRate = totalAreaSqFt > 0 ? (storageAreaSqFt / totalAreaSqFt) * 100 : 0;

  // 7. Convert to m² if metric (1 sq ft = 0.092903 m²)
  const SQ_FT_TO_SQ_M = 0.092903;
  const areaMultiplier = isMetric ? SQ_FT_TO_SQ_M : 1;

  // 8. Lease costs — rate is per sq ft OR per m² depending on units toggle,
  //    so apply against the area in the user's chosen unit.
  const totalAreaInUserUnits = totalAreaSqFt * areaMultiplier;
  const annualRentRate = input.rentPerSqFt && input.rentPerSqFt > 0 ? input.rentPerSqFt : 0;
  const estAnnualRent = Math.round(totalAreaInUserUnits * annualRentRate);
  const estMonthlyRent = Math.round(estAnnualRent / 12);

  return {
    totalAreaSqFt:        round1(totalAreaSqFt * areaMultiplier),
    storageAreaSqFt:      round1(storageAreaSqFt * areaMultiplier),
    aisleAreaSqFt:        round1(aisleAreaSqFt * areaMultiplier),
    opsAreaSqFt:          round1(opsAreaSqFt * areaMultiplier),
    groundPalletPositions: groundPositions,
    utilizationRate:      round1(utilizationRate),
    estMonthlyRent,
    estAnnualRent,
  };
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}
