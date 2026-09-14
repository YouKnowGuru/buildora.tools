export type GutterDebris = 'light' | 'moderate' | 'heavy';
export type AccessLevel = 'easy' | 'standard' | 'difficult';

export interface GutterCleaningInput {
  gutterLength: number;
  stories: number;
  debris: GutterDebris;
  access: AccessLevel;
  includeGuards: boolean;
  includeDownspoutFlush: boolean;
  units: 'imperial' | 'metric';
}

export interface GutterCleaningResult {
  totalCostLow: number;
  totalCostMid: number;
  totalCostHigh: number;
  cleaningCost: number;
  guardCleaningCost: number;
  downspoutFlushCost: number;
  costPerLinearFoot: number;
  serviceLength: number;
}

const FT_PER_M = 3.28084;
const STORY_FACTOR = [0, 1, 1.32, 1.68, 2.1] as const;
const MINIMUM_BY_STORIES = [0, 125, 175, 250, 325] as const;
const DEBRIS_FACTOR: Record<GutterDebris, number> = { light: 0.9, moderate: 1.15, heavy: 1.55 };
const ACCESS_FACTOR: Record<AccessLevel, number> = { easy: 0.9, standard: 1, difficult: 1.3 };

function round(value: number): number {
  return Math.round((Number.isFinite(value) ? value : 0) * 100) / 100;
}

export function calculateGutterCleaning(input: GutterCleaningInput): GutterCleaningResult {
  const lengthFt = input.units === 'metric' ? input.gutterLength * FT_PER_M : input.gutterLength;
  const stories = Math.max(1, Math.min(4, input.stories));
  const cleaningCost = Math.max(
    MINIMUM_BY_STORIES[stories]!,
    lengthFt * 1.1 * STORY_FACTOR[stories]! * DEBRIS_FACTOR[input.debris] * ACCESS_FACTOR[input.access],
  );
  const guardCleaningCost = input.includeGuards ? lengthFt * 0.55 * STORY_FACTOR[stories]! : 0;
  const downspoutFlushCost = input.includeDownspoutFlush ? 85 * ACCESS_FACTOR[input.access] : 0;
  const totalCostMid = cleaningCost + guardCleaningCost + downspoutFlushCost;
  const displayLength = input.gutterLength || 1;
  return {
    totalCostLow: round(totalCostMid * 0.85),
    totalCostMid: round(totalCostMid),
    totalCostHigh: round(totalCostMid * 1.25),
    cleaningCost: round(cleaningCost),
    guardCleaningCost: round(guardCleaningCost),
    downspoutFlushCost: round(downspoutFlushCost),
    costPerLinearFoot: round(totalCostMid / displayLength),
    serviceLength: round(displayLength),
  };
}
