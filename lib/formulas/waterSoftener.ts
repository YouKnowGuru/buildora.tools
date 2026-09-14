import { z } from 'zod';

// ─── Zod Schema ────────────────────────────────────────────────────────────────

export const waterSoftenerInputSchema = z.object({
  people: z.number().int().min(1).max(20).default(4),
  hardness: z.number().min(0).max(150).default(25),
  hardnessUnit: z.enum(['gpg', 'ppm']).default('gpg'),
  iron: z.number().min(0).max(10).default(0),
  manganese: z.number().min(0).max(2).default(0),
  regenDays: z.number().int().min(3).max(21).default(7),
  reservePercent: z.number().min(10).max(30).default(20),
  gallonsPerPersonPerDay: z.number().min(20).max(200).default(75),
  waterPressure: z.number().min(20).max(120).optional(),
  bathrooms: z.number().int().min(1).max(10).default(2),
  saltType: z.enum(['evaporated-pellets', 'solar-crystals', 'potassium-chloride']).default('evaporated-pellets'),
  saltCostPerBag: z.number().min(0).max(100).optional(),
  units: z.enum(['imperial', 'metric']).default('imperial'),
  currency: z.string().optional(),
});

export type WaterSoftenerInput = z.infer<typeof waterSoftenerInputSchema>;

// ─── Result Interface ───────────────────────────────────────────────────────────

export interface WaterSoftenerResult {
  // Daily sizing
  dailyWaterUsageGPD: number;
  rawHardnessGPG: number;
  compensatedHardnessGPG: number;
  ironCompensationGPG: number;
  manganeseCompensationGPG: number;
  dailyGrainsToRemove: number;

  // Softener sizing
  targetGrainCapacity: number;
  recommendedGrainSize: number;
  recommendedResinCuFt: number;
  tankDimensions: string;
  systemTier: string;

  // Water classification
  hardnessClassification: string;
  hardnessBadge: 'soft' | 'moderate' | 'hard' | 'very-hard' | 'extreme';

  // Salt & water usage
  saltLbsPerRegen: number;
  regenFrequencyPerYear: number;
  saltLbsPerYear: number;
  saltBagsPerYear40Lb: number;
  saltBagsPerYear50Lb: number;
  annualSaltCost: number;
  gallonsWastedPerRegen: number;
  gallonsWastedPerYear: number;

  // Peak flow / plumbing
  peakFlowGPM: number;
  recommendedPortSize: string;

  // Dual unit equivalents
  metricDailyLiters: number;
  metricHardnessMgL: number;
  metricTankDimensions: string;
}

// ─── Constants ─────────────────────────────────────────────────────────────────

const GPG_TO_PPM = 17.118;  // 1 GPG = 17.118 ppm
const PPM_TO_GPG = 1 / GPG_TO_PPM;
const GPD_TO_LPD = 3.78541;
const IN_TO_CM   = 2.54;

// WQA standard system size tiers (grain capacity → resin cu ft → tank dimensions W×H inches)
const SOFTENER_TIERS = [
  { grains: 24000,  resinCuFt: 0.75, tank: '8" × 44"',  tier: '24,000 Grain'  },
  { grains: 32000,  resinCuFt: 1.00, tank: '9" × 48"',  tier: '32,000 Grain'  },
  { grains: 40000,  resinCuFt: 1.25, tank: '10" × 44"', tier: '40,000 Grain'  },
  { grains: 48000,  resinCuFt: 1.50, tank: '10" × 54"', tier: '48,000 Grain'  },
  { grains: 64000,  resinCuFt: 2.00, tank: '12" × 52"', tier: '64,000 Grain'  },
  { grains: 80000,  resinCuFt: 2.50, tank: '13" × 54"', tier: '80,000 Grain'  },
  { grains: 96000,  resinCuFt: 3.00, tank: '14" × 65"', tier: '96,000 Grain'  },
] as const;

// Salt dosage: lbs per cubic foot of resin at high-efficiency setting (~8 lbs/cu ft)
const SALT_LBS_PER_CUFT = 8;

// Regen water consumption (gallons per cu ft of resin)
const REGEN_GALLONS_PER_CUFT = 40;

// Peak service flow rate by bathroom count (WQA/IPC fixture unit table)
const PEAK_GPM_BY_BATHROOMS: Record<number, number> = {
  1: 7,
  2: 10,
  3: 13,
  4: 16,
  5: 19,
};

// ─── Hardness Classification (WQA) ────────────────────────────────────────────

function classifyHardness(gpg: number): { label: string; badge: WaterSoftenerResult['hardnessBadge'] } {
  if (gpg < 1)   return { label: 'Soft (< 1 GPG / < 17 ppm)',           badge: 'soft'       };
  if (gpg < 3.5) return { label: 'Slightly Hard (1 – 3.5 GPG / 17 – 60 ppm)',   badge: 'moderate'   };
  if (gpg < 7)   return { label: 'Moderately Hard (3.5 – 7 GPG / 60 – 120 ppm)', badge: 'moderate'  };
  if (gpg < 10.5)return { label: 'Hard (7 – 10.5 GPG / 120 – 180 ppm)',  badge: 'hard'       };
  if (gpg < 14)  return { label: 'Very Hard (10.5 – 14 GPG / 180 – 240 ppm)', badge: 'very-hard' };
  return           { label: 'Extremely Hard (> 14 GPG / > 240 ppm)',     badge: 'extreme'    };
}

// ─── Port / Valve Size ─────────────────────────────────────────────────────────

function recommendPortSize(peakGPM: number, bathrooms?: number): string {
  if (bathrooms && bathrooms > 5) {
    return '1-1/4"+ (DN32+) High-Flow Valve (Warning: >5 bathrooms exceed standard residential single-valve table; verify peak demand)';
  }
  if (peakGPM <= 7)  return '3/4" (DN20) Metered Control Valve';
  if (peakGPM <= 12) return '1" (DN25) Metered Control Valve';
  return '1-1/4" (DN32) High-Flow Metered Control Valve';
}

// ─── Main Formula ──────────────────────────────────────────────────────────────

export function calculateWaterSoftener(input: WaterSoftenerInput): WaterSoftenerResult {
  // 1. Water Hardness – Normalise to GPG
  let rawHardnessGPG: number;
  if (input.hardnessUnit === 'ppm') {
    rawHardnessGPG = Math.round(input.hardness * PPM_TO_GPG * 100) / 100;
  } else {
    rawHardnessGPG = input.hardness;
  }

  // 2. Compensated Hardness – add iron & manganese penalty
  // Per WQA: every 1 ppm dissolved iron (Fe²⁺) = 4 GPG effective hardness
  //          every 1 ppm manganese (Mn²⁺)      = 2 GPG effective hardness
  const ironGPG      = Math.round((input.iron ?? 0) * 4 * 100) / 100;
  const manganeseGPG = Math.round((input.manganese ?? 0) * 2 * 100) / 100;
  const compensatedHardnessGPG = Math.round((rawHardnessGPG + ironGPG + manganeseGPG) * 100) / 100;

  // 3. Daily Water Usage
  const gpd = Math.round(
    (input.people ?? 4) * (input.gallonsPerPersonPerDay ?? 75)
  );

  // 4. Daily Grains to Remove
  const dailyGrains = Math.round(gpd * compensatedHardnessGPG);

  // 5. Target Grain Capacity (with regeneration cycle + reserve)
  const regenDays     = input.regenDays ?? 7;
  const reserveFactor = 1 + (input.reservePercent ?? 20) / 100;
  const targetGrains  = Math.round(dailyGrains * regenDays * reserveFactor);

  // 6. Match to discrete softener tier (next size up)
  let selectedTier = SOFTENER_TIERS[SOFTENER_TIERS.length - 1]!;
  let isDualTank   = false;
  for (const tier of SOFTENER_TIERS) {
    if (targetGrains <= tier.grains) {
      selectedTier = tier;
      break;
    }
    if (tier === SOFTENER_TIERS[SOFTENER_TIERS.length - 1]) {
      isDualTank = true;
    }
  }

  const recommendedGrainSize = isDualTank ? 96000 : selectedTier.grains;
  const resinCuFt            = isDualTank ? 3.0   : selectedTier.resinCuFt;
  const tankDimensions        = isDualTank ? '14" × 65" (Dual-Tank Alternating)' : selectedTier.tank;
  const systemTier            = isDualTank ? 'Dual-Tank Alternating / Commercial System' : selectedTier.tier;

  // 7. Hardness Classification
  const { label: hardnessClassification, badge: hardnessBadge } = classifyHardness(rawHardnessGPG);

  // 8. Salt & Water Regen Usage (using full unrounded cycle frequency)
  const exactCyclesPerYear    = 365 / regenDays;
  const regenFrequencyPerYear = Math.round(exactCyclesPerYear * 10) / 10;

  const saltLbsPerRegen       = Math.round(resinCuFt * SALT_LBS_PER_CUFT * 10) / 10;
  const saltLbsPerYear        = Math.round(saltLbsPerRegen * exactCyclesPerYear * 10) / 10;
  const saltBagsPerYear40Lb   = Math.ceil(saltLbsPerYear / 40);
  const saltBagsPerYear50Lb   = Math.ceil(saltLbsPerYear / 50);

  const defaultSaltCostPerBag = input.saltType === 'potassium-chloride' ? 32 : 8;
  const saltCostPerBag        = (input.saltCostPerBag ?? 0) > 0 ? (input.saltCostPerBag!) : defaultSaltCostPerBag;
  const annualSaltCost        = Math.round(saltBagsPerYear40Lb * saltCostPerBag * 100) / 100;

  const gallonsWastedPerRegen = Math.round(resinCuFt * REGEN_GALLONS_PER_CUFT);
  const gallonsWastedPerYear  = Math.round(gallonsWastedPerRegen * exactCyclesPerYear);

  // 9. Peak Flow Rate & Port Size
  const rawBathrooms = input.bathrooms ?? 2;
  const clampedBathrooms = Math.max(1, Math.min(5, rawBathrooms));
  const peakFlowGPM = rawBathrooms > 5
    ? 19 + (rawBathrooms - 5) * 3
    : PEAK_GPM_BY_BATHROOMS[clampedBathrooms]!;
  const recommendedPortSize = recommendPortSize(peakFlowGPM, rawBathrooms);

  // 10. Metric Equivalents
  const metricDailyLiters  = Math.round(gpd * GPD_TO_LPD * 10) / 10;
  const metricHardnessMgL  = Math.round(rawHardnessGPG * GPG_TO_PPM * 10) / 10;
  // Convert tank dimensions to metric (rough: inches to cm)
  const tankMetricStr = isDualTank
    ? '36 cm × 165 cm (Dual-Tank)'
    : (() => {
        const match = selectedTier.tank.match(/(\d+)["″]\s*×\s*(\d+)["″]/);
        if (!match) return selectedTier.tank;
        const wCm = Math.round(Number(match[1]) * IN_TO_CM);
        const hCm = Math.round(Number(match[2]) * IN_TO_CM);
        return `${wCm} cm × ${hCm} cm`;
      })();

  return {
    dailyWaterUsageGPD:       gpd,
    rawHardnessGPG:           Math.round(rawHardnessGPG * 100) / 100,
    compensatedHardnessGPG,
    ironCompensationGPG:      ironGPG,
    manganeseCompensationGPG: manganeseGPG,
    dailyGrainsToRemove:      dailyGrains,
    targetGrainCapacity:      targetGrains,
    recommendedGrainSize,
    recommendedResinCuFt:     resinCuFt,
    tankDimensions,
    systemTier,
    hardnessClassification,
    hardnessBadge,
    saltLbsPerRegen,
    regenFrequencyPerYear,
    saltLbsPerYear,
    saltBagsPerYear40Lb,
    saltBagsPerYear50Lb,
    annualSaltCost,
    gallonsWastedPerRegen,
    gallonsWastedPerYear,
    peakFlowGPM,
    recommendedPortSize,
    metricDailyLiters,
    metricHardnessMgL,
    metricTankDimensions: tankMetricStr,
  };
}
