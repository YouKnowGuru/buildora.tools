export type StructureType =
  | 'house-wood-frame'
  | 'house-masonry'
  | 'garage-detached'
  | 'commercial-light'
  | 'commercial-heavy'
  | 'interior-only'
  | 'shed'
  | 'pool';

export type DemoMethod = 'mechanical' | 'manual' | 'selective';

export interface DemolitionInput {
  structureType: StructureType;
  area: number;           // sq ft (imperial) or sq m (metric)
  stories: number;        // 1–5
  method: DemoMethod;
  includeHaul: boolean;
  includePermit: boolean;
  pricePerSqFt?: number;  // override auto cost if user sets it
  permitCost?: number;    // flat permit fee
  units: 'imperial' | 'metric';
}

export interface DemolitionResult {
  totalFloorArea: number;     // Total floor area across all stories (sq ft or sq m)
  debrisVolumeCuYd: number;   // cubic yards of debris (or cu m in metric)
  debrisWeightTons: number;   // short tons (or tonnes in metric)
  dumpsterLoads: number;      // 30-CY roll-off dumpster loads needed

  // Cost breakdown
  laborCost: number;
  haulCost: number;
  permitCost: number;
  totalCostLow: number;       // low end (-15%)
  totalCostMid: number;       // midpoint estimate
  totalCostHigh: number;      // high end (+15%)

  // Per-unit cost
  costPerSqFt: number;        // mid cost per sq ft
}

// ─────────────────────────────────────────────────────────────────────────────
// Industry-standard baseline demolition labor & equipment cost per sq ft ($/sq ft)
// Based on RSMeans Construction Cost Data, HomeAdvisor, and Contractor Averages.
// ─────────────────────────────────────────────────────────────────────────────
const BASE_COST_PER_SQFT: Record<StructureType, number> = {
  'house-wood-frame':  6.00,  // $4.50 – $8.00 / sq ft
  'house-masonry':     9.50,  // $7.00 – $13.00 / sq ft
  'garage-detached':   4.75,  // $3.50 – $6.50 / sq ft
  'commercial-light':  7.50,  // $5.00 – $10.00 / sq ft
  'commercial-heavy': 13.00,  // $9.00 – $18.00 / sq ft
  'interior-only':     3.75,  // $2.50 – $5.50 / sq ft
  'shed':              2.80,  // $2.00 – $4.00 / sq ft
  'pool':              9.00,  // $6.00 – $14.00 / sq ft
};

// Debris volume factor (cu yd per sq ft of total floor area)
const DEBRIS_CUYD_PER_SQFT: Record<StructureType, number> = {
  'house-wood-frame':  0.13,
  'house-masonry':     0.19,
  'garage-detached':   0.09,
  'commercial-light':  0.15,
  'commercial-heavy':  0.24,
  'interior-only':     0.05,
  'shed':              0.07,
  'pool':              0.16,
};

// Debris weight factor (tons per cu yd of loose debris)
const DEBRIS_TONS_PER_CUYD: Record<StructureType, number> = {
  'house-wood-frame':  0.15, // ~300 lbs/cu yd
  'house-masonry':     0.45, // ~900 lbs/cu yd (heavy brick & mortar)
  'garage-detached':   0.14,
  'commercial-light':  0.20,
  'commercial-heavy':  0.55, // reinforced concrete
  'interior-only':     0.10, // drywall, trim
  'shed':              0.12,
  'pool':              0.60, // concrete shell
};

// Demolition method labor multipliers
const METHOD_MULTIPLIER: Record<DemoMethod, number> = {
  mechanical: 1.00, // Excavator/backhoe — baseline speed and efficiency
  manual:     1.50, // Manual / tight access — +50% labor hours
  selective:  1.35, // Selective deconstruction & salvage — +35% labor
};

// Average cost to rent, deliver, haul, and landfill a 30-yard roll-off dumpster (US average)
const HAUL_COST_PER_30YD_DUMPSTER = 550;

// Sq ft ↔ sq m conversion
const SQFT_PER_SQM = 10.7639;
const CUYD_PER_CUM = 1.30795;
const TONS_PER_TONNE = 1.10231;

function round(value: number, decimals: number): number {
  if (!Number.isFinite(value)) return 0;
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

export function calculateDemolition(input: DemolitionInput): DemolitionResult {
  const {
    structureType,
    area,
    stories,
    method,
    includeHaul,
    includePermit,
    pricePerSqFt,
    permitCost,
    units,
  } = input;

  // Normalized area in square feet
  const footprintSqFt = units === 'metric' ? area * SQFT_PER_SQM : area;

  // For multi-story buildings (except single-level structures), total area = footprint * stories.
  // interior-only is also treated as a single-floor scope — users price each floor separately.
  const effectiveStories = ['pool', 'shed', 'interior-only'].includes(structureType) ? 1 : Math.max(1, Math.min(stories, 5));
  const totalFloorAreaSqFt = footprintSqFt * effectiveStories;

  // ── Debris Calculations ───────────────────────────────────────────────────
  const debrisVolumeCuYd = totalFloorAreaSqFt * DEBRIS_CUYD_PER_SQFT[structureType];
  const debrisWeightTons = debrisVolumeCuYd * DEBRIS_TONS_PER_CUYD[structureType];
  const dumpsterLoads = Math.max(1, Math.ceil(debrisVolumeCuYd / 30));

  // ── Labor & Machinery Cost ────────────────────────────────────────────────
  // The price override is labeled $/m² in metric mode — normalize it to $/sq ft
  // so metric quotes are not inflated 10.76×. Default rates are $/sq ft.
  const overrideRatePerSqFt = pricePerSqFt !== undefined && pricePerSqFt > 0
    ? pricePerSqFt * (units === 'metric' ? 0.092903 : 1)
    : undefined;
  const baseRate = overrideRatePerSqFt ?? BASE_COST_PER_SQFT[structureType];
  const methodFactor = METHOD_MULTIPLIER[method];
  const laborCost = totalFloorAreaSqFt * baseRate * methodFactor;

  // ── Hauling & Disposal Cost ───────────────────────────────────────────────
  const haulCost = includeHaul ? dumpsterLoads * HAUL_COST_PER_30YD_DUMPSTER : 0;

  // ── Permits & Fees ────────────────────────────────────────────────────────
  const permitFlatCost = includePermit ? (permitCost !== undefined && permitCost >= 0 ? permitCost : 500) : 0;

  // ── Totals ────────────────────────────────────────────────────────────────
  const totalCostMid = laborCost + haulCost + permitFlatCost;
  const totalCostLow = totalCostMid * 0.85;
  const totalCostHigh = totalCostMid * 1.15;
  const costPerUnitArea = totalFloorAreaSqFt > 0 ? totalCostMid / (units === 'metric' ? (totalFloorAreaSqFt / SQFT_PER_SQM) : totalFloorAreaSqFt) : 0;

  if (units === 'metric') {
    return {
      totalFloorArea: round(totalFloorAreaSqFt / SQFT_PER_SQM, 1),
      debrisVolumeCuYd: round(debrisVolumeCuYd / CUYD_PER_CUM, 1), // cu meters
      debrisWeightTons: round(debrisWeightTons / TONS_PER_TONNE, 1), // metric tonnes
      dumpsterLoads,
      laborCost: round(laborCost, 2),
      haulCost: round(haulCost, 2),
      permitCost: round(permitFlatCost, 2),
      totalCostLow: round(totalCostLow, 2),
      totalCostMid: round(totalCostMid, 2),
      totalCostHigh: round(totalCostHigh, 2),
      costPerSqFt: round(costPerUnitArea, 2),
    };
  }

  return {
    totalFloorArea: round(totalFloorAreaSqFt, 0),
    debrisVolumeCuYd: round(debrisVolumeCuYd, 1),
    debrisWeightTons: round(debrisWeightTons, 1),
    dumpsterLoads,
    laborCost: round(laborCost, 2),
    haulCost: round(haulCost, 2),
    permitCost: round(permitFlatCost, 2),
    totalCostLow: round(totalCostLow, 2),
    totalCostMid: round(totalCostMid, 2),
    totalCostHigh: round(totalCostHigh, 2),
    costPerSqFt: round(costPerUnitArea, 2),
  };
}
