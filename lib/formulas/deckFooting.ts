import { z } from 'zod';

/**
 * Deck Footing Calculator — sizes concrete footings and counts/pours for a
 * raised deck per the International Residential Code (IRC R507) and typical
 * prescriptive-load tables (e.g. the frost-depth / tributary-area method used
 * by most US building departments).
 *
 * The model:
 *  1. Deck area + shape → tributary load shared by the posts.
 *  2. Live load (40 psf residential) + dead load (10 psf) → total uniform load.
 *  3. Tributary area per post → total load carried by each post (lbs).
 *  4. Soil bearing capacity (psf) → required footing area = post load / soil.
 *  5. Footing diameter (round) or width (square) from required area.
 *  6. Concrete volume per footing + total yards for the whole deck.
 */

export const deckFootingInputSchema = z.object({
  // Deck geometry (ft/m depending on units — converted internally)
  deckLength: z.number().min(1).max(100).default(16), // ft or m, ledger-to-beam or post-to-post run
  deckWidth: z.number().min(1).max(100).default(12), // ft or m, parallel to house
  deckShape: z.enum(['rectangle', 'square', 'l-shape', 'freeform']).default('rectangle'),

  // Loads (psf or kPa depending on units — converted internally)
  liveLoad: z.number().min(1).max(100).default(40), // psf (residential 40 psf per IRC Table R301.5) or kPa
  deadLoad: z.number().min(0.5).max(40).default(10), // psf (decking + joists + railings) or kPa
  snowLoad: z.number().min(0).max(100).default(0), // psf or kPa ground snow load addition (optional)

  // Soil / bearing
  soilBearing: z.enum(['clay-1500', 'silt-2000', 'sandy-loam-2500', 'gravel-3000', 'compacted-4000']).default('sandy-loam-2500'),

  // Post grid
  postRows: z.number().int().min(1).max(10).default(2), // rows of posts parallel to the house
  postsPerRow: z.number().int().min(2).max(12).default(3), // posts per row (between beam supports)

  // Footing spec
  footingShape: z.enum(['round', 'square']).default('round'),
  footingDepth: z.number().min(5).max(200).default(12), // in or cm (pier/footing thickness; frost depth handled separately)

  // Options
  includeBeam: z.boolean().default(true),
  units: z.enum(['imperial', 'metric']).default('imperial'),
  currency: z.string().optional(),
});

export type DeckFootingInput = z.infer<typeof deckFootingInputSchema>;

export interface DeckFootingResult {
  // Geometry
  deckAreaSqFt: number;
  deckAreaSqM: number;
  totalPosts: number;

  // Loads
  totalUniformLoadPsf: number;
  totalDeckLoadLbs: number;
  tributaryAreaPerPostSqFt: number;
  loadPerPostLbs: number;

  // Soil
  soilBearingPsf: number;

  // Footing sizing
  requiredFootingAreaSqIn: number;
  requiredFootingAreaSqFt: number;
  footingDiameterIn: number; // round
  footingSideIn: number; // square
  footingDiameterFt: number;
  footingSideFt: number;

  // Concrete volume
  concretePerFootingCuFt: number;
  concretePerFootingCuYd: number;
  totalConcreteCuFt: number;
  totalConcreteCuYd: number;
  concretePerFootingCuM: number;
  totalConcreteCuM: number;

  // Reference / code
  recommendedSonotubeDiameterIn: number; // next standard tube size up
  codeNote: string;
}

// Soil bearing capacity (psf) per typical geotechnical reference tables.
const SOIL_BEARING_PSF: Record<string, number> = {
  'clay-1500': 1500,
  'silt-2000': 2000,
  'sandy-loam-2500': 2500,
  'gravel-3000': 3000,
  'compacted-4000': 4000,
};

// Standard sonotube / round footing diameters readily available at lumberyards.
const STANDARD_TUBE_SIZES = [8, 10, 12, 14, 16, 18, 20, 24] as const;

// Conversions (metric inputs are normalized to imperial for the core math,
// and results are converted back for metric display).
const FT_PER_M = 3.28084;
const PSF_PER_KPA = 20.8854;
const CM_PER_IN = 2.54;
const SQFT_PER_SQM = 10.7639;
const LBS_PER_KG = 2.2046226;
const CUFT_PER_CUM = 35.3147;
const CUYD_PER_CUM = 1.30795;

// Length × width is the enclosing rectangle. These factors provide a
// conservative planning-area estimate for the non-rectangular choices.
const DECK_SHAPE_AREA_FACTOR: Record<DeckFootingInput['deckShape'], number> = {
  rectangle: 1,
  square: 1,
  'l-shape': 0.75,
  freeform: 0.85,
};

export function calculateDeckFooting(input: DeckFootingInput): DeckFootingResult {
  const isMetric = input.units === 'metric';
  const u = isMetric ? FT_PER_M : 1;
  const p = isMetric ? PSF_PER_KPA : 1;

  const lengthFt = (input.deckLength ?? 16) * u;
  const widthFt = (input.deckWidth ?? 12) * u;

  const shapeFactor = DECK_SHAPE_AREA_FACTOR[input.deckShape ?? 'rectangle'];
  const deckAreaSqFt = Math.round(lengthFt * widthFt * shapeFactor);
  const deckAreaSqM = Math.round(deckAreaSqFt * 0.092903 * 10) / 10;

  const totalPosts = Math.max(1, (input.postRows ?? 2) * (input.postsPerRow ?? 3));

  // Total uniform load = live + dead + optional snow.
  const totalUniformLoadPsf = Math.round((input.liveLoad ?? 40) * p + (input.deadLoad ?? 10) * p + (input.snowLoad ?? 0) * p);
  const totalDeckLoadLbs = Math.round(deckAreaSqFt * totalUniformLoadPsf);

  // Tributary area per post = total deck area / number of posts (even split).
  const tributaryAreaPerPostSqFt = Math.round((deckAreaSqFt / totalPosts) * 10) / 10;
  const loadPerPostLbs = Math.round(deckAreaSqFt * totalUniformLoadPsf / totalPosts);

  const soilBearingPsf = SOIL_BEARING_PSF[input.soilBearing ?? 'sandy-loam-2500'] ?? 2500;

  // Required footing area (sq in) = post load (lbs) / bearing (lbs per sq in).
  const soilBearingPsi = soilBearingPsf / 144;
  const requiredFootingAreaSqIn = Math.round(loadPerPostLbs / soilBearingPsi);
  const requiredFootingAreaSqFt = Math.round((requiredFootingAreaSqIn / 144) * 100) / 100;

  // Round footing: area = π r² → diameter = 2·sqrt(area/π)
  const footingDiameterIn = Math.ceil(Math.sqrt((requiredFootingAreaSqIn * 4) / Math.PI));
  // Square footing: side = sqrt(area)
  const footingSideIn = Math.ceil(Math.sqrt(requiredFootingAreaSqIn));

  const footingDiameterFt = Math.round((footingDiameterIn / 12) * 100) / 100;
  const footingSideFt = Math.round((footingSideIn / 12) * 100) / 100;

  // Next standard sonotube size up from the required diameter.
  const recommendedSonotubeDiameterIn = STANDARD_TUBE_SIZES.find((s) => s >= footingDiameterIn) ?? STANDARD_TUBE_SIZES[STANDARD_TUBE_SIZES.length - 1]!;

  // Concrete volume per footing = area (sq ft) × depth (ft), in cu ft.
  // Use the ACTUAL form size you would pour into (recommended sonotube for
  // round, min side for square), not the raw minimum diameter.
  const depthFt = ((input.footingDepth ?? 12) * (isMetric ? 1 / CM_PER_IN : 1)) / 12;
  const volDiameterIn = input.footingShape === 'round' ? recommendedSonotubeDiameterIn : footingSideIn;
  const footingAreaSqFtForVol = input.footingShape === 'round'
    ? Math.PI * Math.pow(volDiameterIn / 24, 2)
    : Math.pow(footingSideIn / 12, 2);
  const concretePerFootingCuFt = Math.round(footingAreaSqFtForVol * depthFt * 1000) / 1000;
  const concretePerFootingCuYd = Math.round((concretePerFootingCuFt / 27) * 1000) / 1000;
  const concretePerFootingCuM = Math.round(concretePerFootingCuFt * 0.0283168 * 1000) / 1000;

  const totalConcreteCuFt = Math.round(concretePerFootingCuFt * totalPosts * 1000) / 1000;
  const totalConcreteCuYd = Math.round((totalConcreteCuFt / 27) * 100) / 100;
  const totalConcreteCuM = Math.round(totalConcreteCuFt * 0.0283168 * 1000) / 1000;

  const beamNote = input.includeBeam
    ? ' Assumes a beam or double header; confirm its span and connections separately.'
    : ' No beam/header is assumed; verify the framing path with local requirements.';
  const codeNote = totalPosts < 3
    ? 'IRC R507 requires footings sized for tributary load and frost protection; very few posts may need engineered sizing.'
    : 'Footings sized per IRC R507 tributary-load method. Depth must extend to local frost depth (typically 30–48 in) regardless of calculated thickness.';

  if (isMetric) {
    // Metric display values: area m², loads kPa, mass kg, lengths cm/m, volume m³.
    return {
      deckAreaSqFt: r1(deckAreaSqFt / SQFT_PER_SQM),
      deckAreaSqM,
      totalPosts,
      totalUniformLoadPsf: r2(totalUniformLoadPsf / PSF_PER_KPA),
      totalDeckLoadLbs: Math.round(totalDeckLoadLbs / LBS_PER_KG),
      tributaryAreaPerPostSqFt: r2(tributaryAreaPerPostSqFt / SQFT_PER_SQM),
      loadPerPostLbs: Math.round(loadPerPostLbs / LBS_PER_KG),
      soilBearingPsf: r1(soilBearingPsf / PSF_PER_KPA),
      requiredFootingAreaSqIn: r1(requiredFootingAreaSqIn * 6.4516), // cm²
      requiredFootingAreaSqFt: r2(requiredFootingAreaSqFt * 0.092903), // m²
      footingDiameterIn: r1(footingDiameterIn * CM_PER_IN), // cm
      footingSideIn: r1(footingSideIn * CM_PER_IN), // cm
      footingDiameterFt: r2((footingDiameterIn * CM_PER_IN) / 100), // m
      footingSideFt: r2((footingSideIn * CM_PER_IN) / 100), // m
      concretePerFootingCuFt: r3(concretePerFootingCuFt / CUFT_PER_CUM), // m³
      concretePerFootingCuYd: r3(concretePerFootingCuYd / CUYD_PER_CUM), // m³
      totalConcreteCuFt: r3(totalConcreteCuFt / CUFT_PER_CUM), // m³
      totalConcreteCuYd: r2(totalConcreteCuYd / CUYD_PER_CUM), // m³
      concretePerFootingCuM,
      totalConcreteCuM,
      recommendedSonotubeDiameterIn: r1(recommendedSonotubeDiameterIn * CM_PER_IN), // cm
      codeNote: `${codeNote}${beamNote}`,
    };
  }

  return {
    deckAreaSqFt,
    deckAreaSqM,
    totalPosts,
    totalUniformLoadPsf,
    totalDeckLoadLbs,
    tributaryAreaPerPostSqFt,
    loadPerPostLbs,
    soilBearingPsf,
    requiredFootingAreaSqIn,
    requiredFootingAreaSqFt,
    footingDiameterIn,
    footingSideIn,
    footingDiameterFt,
    footingSideFt,
    concretePerFootingCuFt,
    concretePerFootingCuYd,
    totalConcreteCuFt,
    totalConcreteCuYd,
    concretePerFootingCuM,
    totalConcreteCuM,
    recommendedSonotubeDiameterIn,
    codeNote: `${codeNote}${beamNote}`,
  };
}

function r1(n: number): number {
  return Math.round(n * 10) / 10;
}
function r2(n: number): number {
  return Math.round(n * 100) / 100;
}
function r3(n: number): number {
  return Math.round(n * 1000) / 1000;
}
