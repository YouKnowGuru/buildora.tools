import { z } from 'zod';

/**
 * Asphalt calculator input. Mirrors the HTML min/max on the inputs, but this
 * is the real enforcement boundary — HTML attributes can be bypassed by
 * anyone editing the DOM or hitting an API route directly, so every value
 * that reaches calculateAsphalt() must pass through this schema first,
 * whether it came from client state or (in the future) a server request.
 */
export const asphaltInputSchema = z.object({
  length: z.number().min(1).max(5000),
  width: z.number().min(1).max(5000),
  depth: z.number().min(0.1).max(100),    // in (imperial) or cm (metric); max 100 cm
  density: z.number().min(1).max(5000),   // lb/ft³ (imperial) or kg/m³ (metric)
  waste: z.number().min(0).max(20),
  pricePerTon: z.number().min(0).max(1000).optional(),
  units: z.enum(['imperial', 'metric']),
  currency: z.string().max(6).optional(),
});

export type AsphaltFormValues = z.infer<typeof asphaltInputSchema>;

/**
 * Demolition Cost Calculator input schema.
 */
export const demolitionInputSchema = z.object({
  structureType: z.enum([
    'house-wood-frame',
    'house-masonry',
    'garage-detached',
    'commercial-light',
    'commercial-heavy',
    'interior-only',
    'shed',
    'pool',
  ]),
  area: z.number().min(1).max(500000),
  stories: z.number().min(1).max(5),
  method: z.enum(['mechanical', 'manual', 'selective']),
  includeHaul: z.boolean(),
  includePermit: z.boolean(),
  pricePerSqFt: z.number().min(0).max(500).optional(),
  permitCost: z.number().min(0).max(100000).optional(),
  units: z.enum(['imperial', 'metric']),
  currency: z.string().max(6).optional(),
});

export type DemolitionFormValues = z.infer<typeof demolitionInputSchema>;

export const basementWaterproofingInputSchema = z.object({
  basementArea: z.number().min(50).max(100000),
  perimeter: z.number().min(10).max(5000),
  method: z.enum(['interior-sealant', 'interior-drain', 'exterior-membrane', 'exterior-drain', 'full-system']),
  waterIssue: z.enum(['minor-dampness', 'active-leaks', 'hydrostatic-pressure']),
  includeSumpPump: z.boolean(),
  includeCrackRepair: z.boolean(),
  crackLength: z.number().min(0).max(1000),
  includeExcavation: z.boolean(),
  units: z.enum(['imperial', 'metric']),
  currency: z.string().max(6).optional(),
});

export type BasementWaterproofingFormValues = z.infer<typeof basementWaterproofingInputSchema>;

export function parseBasementWaterproofingQueryParams(searchParams: URLSearchParams): Partial<BasementWaterproofingFormValues> {
  const bool = (key: string) => searchParams.get(key) === '1' ? true : searchParams.get(key) === '0' ? false : undefined;
  const raw = {
    basementArea: numOrUndefined(searchParams.get('area')),
    perimeter: numOrUndefined(searchParams.get('per')),
    method: searchParams.get('method') ?? undefined,
    waterIssue: searchParams.get('issue') ?? undefined,
    includeSumpPump: bool('sump'),
    includeCrackRepair: bool('cracks'),
    crackLength: numOrUndefined(searchParams.get('crackft')),
    includeExcavation: bool('exc'),
    units: searchParams.get('units') === 'metric' ? 'metric' : 'imperial',
    currency: searchParams.get('curr') ?? undefined,
  };
  const result = basementWaterproofingInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}

export const gutterCleaningInputSchema = z.object({
  gutterLength: z.number().min(20).max(10000),
  stories: z.number().int().min(1).max(4),
  debris: z.enum(['light', 'moderate', 'heavy']),
  access: z.enum(['easy', 'standard', 'difficult']),
  includeGuards: z.boolean(),
  includeDownspoutFlush: z.boolean(),
  units: z.enum(['imperial', 'metric']),
  currency: z.string().max(6).optional(),
});

export type GutterCleaningFormValues = z.infer<typeof gutterCleaningInputSchema>;

export function parseGutterCleaningQueryParams(searchParams: URLSearchParams): Partial<GutterCleaningFormValues> {
  const bool = (key: string) => searchParams.get(key) === '1' ? true : searchParams.get(key) === '0' ? false : undefined;
  const raw = {
    gutterLength: numOrUndefined(searchParams.get('glen')),
    stories: numOrUndefined(searchParams.get('gst')),
    debris: searchParams.get('debris') ?? undefined,
    access: searchParams.get('access') ?? undefined,
    includeGuards: bool('guards'),
    includeDownspoutFlush: bool('flush'),
    units: searchParams.get('units') === 'metric' ? 'metric' : 'imperial',
    currency: searchParams.get('curr') ?? undefined,
  };
  const result = gutterCleaningInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}

/**
 * Trench Calculator input schema.
 */
export const trenchInputSchema = z.object({
  length:          z.number().min(0.1).max(50000),
  width:           z.number().min(0.1).max(100),
  depth:           z.number().min(0.1).max(50),
  beddingMaterial: z.enum(['none', 'gravel', 'sand', 'concrete']),
  beddingDepth:    z.number().min(0).max(10),
  includeSpoilHaul: z.boolean(),
  pricePerCuYd:    z.number().min(0).max(10000).optional(),
  units:           z.enum(['imperial', 'metric']),
  currency:        z.string().max(6).optional(),
});

export type TrenchFormValues = z.infer<typeof trenchInputSchema>;

/**
 * Warehouse Space Calculator input schema.
 */
export const warehouseInputSchema = z.object({
  palletCount:    z.number().min(1).max(500000),
  rackingType:    z.enum(['selective', 'floor-stack', 'double-deep', 'drive-in']),
  rackLevels:     z.number().min(1).max(8),
  aisleType:      z.enum(['wide', 'narrow', 'vna']),
  includeOpsArea: z.boolean(),
  rentPerSqFt:    z.number().min(0).max(1000).optional(),
  units:          z.enum(['imperial', 'metric']),
  currency:       z.string().max(6).optional(),
});

export type WarehouseFormValues = z.infer<typeof warehouseInputSchema>;

/**
 * Lead-gen form (/api/lead). Collects email + zip + project type per the
 * "3 local estimates" placeholder feature. Keep this schema in lockstep
 * with whatever fields the form actually renders.
 */
export const leadFormSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  zip: z
    .string()
    .trim()
    .regex(/^\d{5}(-\d{4})?$/, 'Enter a valid US ZIP code'),
  projectType: z.enum([
    'driveway',
    'parking-lot',
    'road-repair',
    'other',
  ]),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Consent is required to submit this form.' }),
  }),
  // Honeypot: real users never populate this — bots that autofill every
  // field will. Must arrive empty.
  companyWebsite: z.string().max(0).optional().or(z.literal('')),
  // Anti-bot timing check: milliseconds between form render and submit.
  // Anything under ~1.5s is almost certainly scripted.
  formRenderedAt: z.number(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

/**
 * Email capture (/api/subscribe) — homepage newsletter signup.
 */
export const subscribeFormSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  companyWebsite: z.string().max(0).optional().or(z.literal('')), // honeypot
  formRenderedAt: z.number(),
});

export type SubscribeFormValues = z.infer<typeof subscribeFormSchema>;

/**
 * Shared helper: reject a submission that was filled in implausibly fast.
 * Pair with the honeypot check in each route handler.
 */
export function failsTimingCheck(formRenderedAt: number, minMs = 1500): boolean {
  return Date.now() - formRenderedAt < minMs;
}

/**
 * Sanitizes query-string-driven calculator values before they're used to
 * pre-fill the form. Query params are untrusted input even though they only
 * drive numeric math today — never trust them without parsing through Zod.
 */
export function parseAsphaltQueryParams(
  searchParams: URLSearchParams
): Partial<AsphaltFormValues> {
  const raw = {
    length: numOrUndefined(searchParams.get('l')),
    width: numOrUndefined(searchParams.get('w')),
    depth: numOrUndefined(searchParams.get('d')),
    density: numOrUndefined(searchParams.get('den')),
    waste: numOrUndefined(searchParams.get('waste')),
    pricePerTon: numOrUndefined(searchParams.get('price')),
    units: searchParams.get('units') === 'metric' ? 'metric' : 'imperial',
    currency: searchParams.get('curr') ?? undefined,
  };

  const result = asphaltInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}

export function parseDemolitionQueryParams(
  searchParams: URLSearchParams
): Partial<DemolitionFormValues> {
  const raw = {
    structureType: searchParams.get('stype') ?? undefined,
    area: numOrUndefined(searchParams.get('area')),
    stories: numOrUndefined(searchParams.get('st')),
    method: searchParams.get('method') ?? undefined,
    includeHaul: searchParams.has('haul') ? searchParams.get('haul') !== 'false' && searchParams.get('haul') !== '0' : undefined,
    includePermit: searchParams.has('perm') ? searchParams.get('perm') !== 'false' && searchParams.get('perm') !== '0' : undefined,
    pricePerSqFt: numOrUndefined(searchParams.get('psf')),
    permitCost: numOrUndefined(searchParams.get('permit')),
    units: searchParams.get('units') === 'metric' ? 'metric' : 'imperial',
    currency: searchParams.get('curr') ?? undefined,
  };

  const result = demolitionInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}

export function parseTrenchQueryParams(
  searchParams: URLSearchParams
): Partial<TrenchFormValues> {
  const raw = {
    length:           numOrUndefined(searchParams.get('l')),
    width:            numOrUndefined(searchParams.get('w')),
    depth:            numOrUndefined(searchParams.get('d')),
    beddingMaterial:  searchParams.get('bed') ?? undefined,
    beddingDepth:     numOrUndefined(searchParams.get('bd')),
    includeSpoilHaul: searchParams.has('haul') ? searchParams.get('haul') !== 'false' && searchParams.get('haul') !== '0' : undefined,
    pricePerCuYd:     numOrUndefined(searchParams.get('price')),
    units:            searchParams.get('units') === 'metric' ? 'metric' : 'imperial',
    currency:         searchParams.get('curr') ?? undefined,
  };

  const result = trenchInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}

export function parseWarehouseQueryParams(
  searchParams: URLSearchParams
): Partial<WarehouseFormValues> {
  const raw = {
    palletCount:    numOrUndefined(searchParams.get('p')),
    rackingType:    searchParams.get('rack') ?? undefined,
    rackLevels:     numOrUndefined(searchParams.get('lvl')),
    aisleType:      searchParams.get('aisle') ?? undefined,
    includeOpsArea: searchParams.has('ops') ? searchParams.get('ops') !== 'false' && searchParams.get('ops') !== '0' : undefined,
    rentPerSqFt:    numOrUndefined(searchParams.get('rent')),
    units:          searchParams.get('units') === 'metric' ? 'metric' : 'imperial',
    currency:       searchParams.get('curr') ?? undefined,
  };

  const result = warehouseInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}

export const snowInputSchema = z.object({
  groundSnowLoad:     z.number().min(0).max(500),
  roofSlope:          z.number().min(0).max(90),
  roofSurface:        z.enum(['slippery', 'non-slippery']).optional(),
  exposureCategory:   z.enum(['sheltered', 'partial', 'full']),
  thermalCategory:    z.enum(['greenhouse', 'heated', 'cold', 'unheated', 'freezer']),
  riskCategory:       z.enum(['cat1', 'cat2', 'cat3', 'cat4']),
  roofArea:           z.number().min(1).max(1000000),
  includeDrift:       z.boolean().optional(),
  upperRoofLength:    z.number().min(0).max(2000).optional(),
  lowerToUpperHeight: z.number().min(0).max(200).optional(),
  winterWindParam:    z.number().min(0.5).max(3.0).optional(),
  driftType:          z.enum(['leeward', 'windward']).optional(),
  units:              z.enum(['imperial', 'metric']),
  currency:           z.string().max(6).optional(),
});

export type SnowFormValues = z.infer<typeof snowInputSchema>;

export function parseSnowQueryParams(
  searchParams: URLSearchParams
): Partial<SnowFormValues> {
  const raw = {
    groundSnowLoad:     numOrUndefined(searchParams.get('pg')),
    roofSlope:          numOrUndefined(searchParams.get('slope')),
    roofSurface:        (searchParams.get('surf') as any) ?? undefined,
    exposureCategory:   (searchParams.get('ce') as any) ?? undefined,
    thermalCategory:    (searchParams.get('ct') as any) ?? undefined,
    riskCategory:       (searchParams.get('is') as any) ?? undefined,
    roofArea:           numOrUndefined(searchParams.get('rarea')),
    includeDrift:       searchParams.has('drift') ? searchParams.get('drift') !== 'false' && searchParams.get('drift') !== '0' : undefined,
    upperRoofLength:    numOrUndefined(searchParams.get('lu')),
    lowerToUpperHeight: numOrUndefined(searchParams.get('hc')),
    winterWindParam:    numOrUndefined(searchParams.get('w2')),
    driftType:          (searchParams.get('dtype') as any) ?? undefined,
    units:              searchParams.get('units') === 'metric' ? 'metric' : 'imperial',
    currency:           searchParams.get('curr') ?? undefined,
  };
  const result = snowInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}

export const squareFootageInputSchema = z.object({
  shape:          z.enum(['rectangle', 'circle', 'triangle', 'trapezoid', 'l-shape']),
  length:         z.number().min(0).max(100000).optional(),
  width:          z.number().min(0).max(100000).optional(),
  diameter:       z.number().min(0).max(100000).optional(),
  height:         z.number().min(0).max(100000).optional(),
  base1:          z.number().min(0).max(100000).optional(),
  base2:          z.number().min(0).max(100000).optional(),
  length2:        z.number().min(0).max(100000).optional(),
  width2:         z.number().min(0).max(100000).optional(),
  quantity:       z.number().min(1).max(1000),
  waste:          z.number().min(0).max(100),
  coveragePerBox: z.number().min(0).max(100000).optional(),
  pricePerSqFt:   z.number().min(0).max(100000).optional(),
  units:          z.enum(['imperial', 'metric']),
  currency:       z.string().max(6).optional(),
});

export type SquareFootageFormValues = z.infer<typeof squareFootageInputSchema>;

export function parseSquareFootageQueryParams(
  searchParams: URLSearchParams
): Partial<SquareFootageFormValues> {
  const raw = {
    shape:          searchParams.get('shape') ?? undefined,
    length:         numOrUndefined(searchParams.get('l')),
    width:          numOrUndefined(searchParams.get('w')),
    diameter:       numOrUndefined(searchParams.get('dia')),
    height:         numOrUndefined(searchParams.get('h')),
    base1:          numOrUndefined(searchParams.get('b1')),
    base2:          numOrUndefined(searchParams.get('b2')),
    length2:        numOrUndefined(searchParams.get('l2')),
    width2:         numOrUndefined(searchParams.get('w2')),
    quantity:       numOrUndefined(searchParams.get('qty')),
    waste:          numOrUndefined(searchParams.get('waste')),
    coveragePerBox: numOrUndefined(searchParams.get('box')),
    pricePerSqFt:   numOrUndefined(searchParams.get('price')),
    units:          searchParams.get('units') === 'metric' ? 'metric' : 'imperial',
    currency:       searchParams.get('curr') ?? undefined,
  };
  const result = squareFootageInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}


export function parseToolQueryParams(
  slug: string,
  searchParams: URLSearchParams
): Record<string, any> {
  if (slug === 'asphalt-calculator') {
    return parseAsphaltQueryParams(searchParams);
  }
  if (slug === 'demolition-cost-calculator') {
    return parseDemolitionQueryParams(searchParams);
  }
  if (slug === 'basement-waterproofing-cost-calculator') {
    return parseBasementWaterproofingQueryParams(searchParams);
  }
  if (slug === 'gutter-cleaning-cost-calculator') {
    return parseGutterCleaningQueryParams(searchParams);
  }
  if (slug === 'trench-calculator') {
    return parseTrenchQueryParams(searchParams);
  }
  if (slug === 'warehouse-space-calculator') {
    return parseWarehouseQueryParams(searchParams);
  }
  if (slug === 'snow-load-calculator') {
    return parseSnowQueryParams(searchParams);
  }
  if (slug === 'square-footage-calculator') {
    return parseSquareFootageQueryParams(searchParams);
  }
  if (slug === 'siding-calculator') {
    return parseSidingQueryParams(searchParams);
  }
  if (slug === 'stair-calculator') {
    return parseStairQueryParams(searchParams);
  }
  if (slug === 'sod-calculator') {
    return parseSodQueryParams(searchParams);
  }
  if (slug === 'insulation-calculator') {
    return parseInsulationQueryParams(searchParams);
  }
  if (slug === 'spray-foam-insulation-cost-calculator') {
    return parseSprayFoamQueryParams(searchParams);
  }
  if (slug === 'water-softener-size-calculator') {
    return parseWaterSoftenerQueryParams(searchParams);
  }
  if (slug === 'electrical-load-calculator') {
    return parseElectricalLoadQueryParams(searchParams);
  }
  if (slug === 'deck-footing-calculator') {
    return parseDeckFootingQueryParams(searchParams);
  }
  if (slug === 'concrete-block-calculator') {
    return parseConcreteBlockQueryParams(searchParams);
  }
  if (slug === 'bathroom-remodel-cost-calculator') {
    return parseBathroomRemodelQueryParams(searchParams);
  }
  if (slug === 'battery-backup-calculator') {
    return parseBatteryBackupQueryParams(searchParams);
  }
  if (slug === 'home-inspection-cost-calculator') {
    return parseHomeInspectionQueryParams(searchParams);
  }
  return {};
}


export const sidingInputSchema = z.object({
  buildingLength:     z.number().min(1).max(10000),
  buildingWidth:      z.number().min(1).max(10000),
  wallHeight:         z.number().min(1).max(200),
  heightBasis:        z.enum(['total-wall', 'per-story']).optional(),
  stories:            z.number().min(1).max(10).optional(),
  outsideCorners:     z.number().min(0).max(50).optional(),
  gableShape:         z.enum(['none', 'triangle', 'gambrel', 'half-circle']),
  gableWidth:         z.number().min(0).max(10000).optional(),
  gableHeight:        z.number().min(0).max(200).optional(),
  gambrelLowerHeight: z.number().min(0).max(200).optional(),
  gambrelBreakWidth:  z.number().min(0).max(10000).optional(),
  gableCount:         z.number().min(0).max(12).optional(),
  doorCount:          z.number().min(0).max(100).optional(),
  windowCount:        z.number().min(0).max(200).optional(),
  garageDoorCount:    z.number().min(0).max(20).optional(),
  customDoorWidth:    z.number().min(0).max(50).optional(),
  customDoorHeight:   z.number().min(0).max(50).optional(),
  customDoorCount:    z.number().min(0).max(50).optional(),
  customWindowWidth:  z.number().min(0).max(50).optional(),
  customWindowHeight: z.number().min(0).max(50).optional(),
  customWindowCount:  z.number().min(0).max(50).optional(),
  customOpeningArea:  z.number().min(0).max(100000).optional(),
  sidingMaterial:     z.enum(['vinyl', 'fiber-cement', 'wood', 'metal', 'engineered-wood', 'stone-brick-veneer-panels']),
  waste:              z.number().min(0).max(60),
  panelLengthFt:      z.number().min(1).max(100).optional(),
  panelWidthInches:   z.number().min(1).max(48).optional(),
  coveragePerBox:     z.number().min(1).max(5000).optional(),
  pricePerSqFt:       z.number().min(0).max(1000).optional(),
  units:              z.enum(['imperial', 'metric']),
  currency:           z.string().max(6).optional(),
});

export type SidingFormValues = z.infer<typeof sidingInputSchema>;

export function parseSidingQueryParams(
  searchParams: URLSearchParams
): Partial<SidingFormValues> {
  const raw = {
    buildingLength:     numOrUndefined(searchParams.get('bl')),
    buildingWidth:      numOrUndefined(searchParams.get('bw')),
    wallHeight:         numOrUndefined(searchParams.get('wh')),
    heightBasis:        (searchParams.get('hb') as any) ?? undefined,
    stories:            numOrUndefined(searchParams.get('st')),
    outsideCorners:     numOrUndefined(searchParams.get('oc')),
    gableShape:         (searchParams.get('gs') as any) ?? undefined,
    gableWidth:         numOrUndefined(searchParams.get('gw')),
    gableHeight:        numOrUndefined(searchParams.get('gh')),
    gambrelLowerHeight: numOrUndefined(searchParams.get('glh')),
    gambrelBreakWidth:  numOrUndefined(searchParams.get('gbw')),
    gableCount:         numOrUndefined(searchParams.get('gc')),
    doorCount:          numOrUndefined(searchParams.get('dc')),
    windowCount:        numOrUndefined(searchParams.get('wc')),
    garageDoorCount:    numOrUndefined(searchParams.get('gdc')),
    customDoorWidth:    numOrUndefined(searchParams.get('cdw')),
    customDoorHeight:   numOrUndefined(searchParams.get('cdh')),
    customDoorCount:    numOrUndefined(searchParams.get('cdc')),
    customWindowWidth:  numOrUndefined(searchParams.get('cww')),
    customWindowHeight: numOrUndefined(searchParams.get('cwh')),
    customWindowCount:  numOrUndefined(searchParams.get('cwc')),
    customOpeningArea:  numOrUndefined(searchParams.get('coa')),
    sidingMaterial:     (searchParams.get('mat') as any) ?? undefined,
    waste:              numOrUndefined(searchParams.get('waste')),
    panelLengthFt:      numOrUndefined(searchParams.get('pl')),
    panelWidthInches:   numOrUndefined(searchParams.get('pw')),
    coveragePerBox:     numOrUndefined(searchParams.get('box')),
    pricePerSqFt:       numOrUndefined(searchParams.get('price')),
    units:              searchParams.get('units') === 'metric' ? 'metric' : 'imperial',
    currency:           searchParams.get('curr') ?? undefined,
  };
  const result = sidingInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}

export const stairInputSchema = z.object({
  totalRise:           z.number().min(1).max(5000),
  targetRiserHeight:   z.number().min(3).max(30).optional(),
  targetTreadDepth:    z.number().min(5).max(40).optional(),
  stairWidth:          z.number().min(10).max(500).optional(),
  buildingCode:        z.enum(['irc-residential', 'ibc-commercial', 'custom']),
  mountingStyle:       z.enum(['down-one-riser', 'flush-top']).optional(),
  nosingLength:        z.number().min(0).max(10).optional(),
  treadThickness:      z.number().min(0).max(10).optional(),
  stringerSpacing:     z.number().min(6).max(48).optional(),
  floorJoistThickness: z.number().min(1).max(50).optional(),
  minHeadroom:         z.number().min(40).max(200).optional(),
  includeRailing:      z.boolean().optional(),
  balusterSpacing:     z.number().min(1).max(12).optional(),
  pricePerStep:        z.number().min(0).max(10000).optional(),
  units:               z.enum(['imperial', 'metric']),
  currency:            z.string().max(6).optional(),
});

export type StairFormValues = z.infer<typeof stairInputSchema>;

export function parseStairQueryParams(
  searchParams: URLSearchParams
): Partial<StairFormValues> {
  const raw = {
    totalRise:           numOrUndefined(searchParams.get('tr')),
    targetRiserHeight:   numOrUndefined(searchParams.get('rh')),
    targetTreadDepth:    numOrUndefined(searchParams.get('td')),
    stairWidth:          numOrUndefined(searchParams.get('sw')),
    buildingCode:        (searchParams.get('code') as any) ?? undefined,
    mountingStyle:       (searchParams.get('mount') as any) ?? undefined,
    nosingLength:        numOrUndefined(searchParams.get('nose')),
    treadThickness:      numOrUndefined(searchParams.get('tt')),
    stringerSpacing:     numOrUndefined(searchParams.get('ss')),
    floorJoistThickness: numOrUndefined(searchParams.get('fjt')),
    minHeadroom:         numOrUndefined(searchParams.get('hr')),
    includeRailing:      searchParams.get('rail') === '1' ? true : undefined,
    balusterSpacing:     numOrUndefined(searchParams.get('bs')),
    pricePerStep:        numOrUndefined(searchParams.get('price')),
    units:               searchParams.get('units') === 'metric' ? 'metric' : 'imperial',
    currency:            searchParams.get('curr') ?? undefined,
  };
  const result = stairInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}

// ── Sod Calculator ──────────────────────────────────────────────────────

export const sodInputSchema = z.object({
  shape:              z.enum(['rectangle', 'circle', 'triangle', 'trapezoid', 'l-shape', 'irregular']),
  length:             z.number().min(0).max(100000).optional(),
  width:              z.number().min(0).max(100000).optional(),
  diameter:           z.number().min(0).max(100000).optional(),
  height:             z.number().min(0).max(100000).optional(),
  base1:              z.number().min(0).max(100000).optional(),
  base2:              z.number().min(0).max(100000).optional(),
  length2:            z.number().min(0).max(100000).optional(),
  width2:             z.number().min(0).max(100000).optional(),
  irregularArea:      z.number().min(0).max(1000000).optional(),
  quantity:           z.number().min(1).max(1000),
  waste:              z.number().min(0).max(100),
  sodType:            z.enum(['bermuda', 'kentucky-bluegrass', 'fescue', 'zoysia', 'st-augustine', 'centipede', 'bahia', 'rye']).optional(),
  rollSize:           z.number().min(0.01).max(1000).optional(),
  rollsPerPallet:     z.number().min(1).max(100).optional(),
  pricePerSqFt:       z.number().min(0).max(100).optional(),
  includeSoilPrep:    z.boolean().optional(),
  soilDepth:          z.number().min(0).max(100).optional(),
  pricePerSoilCuYd:   z.number().min(0).max(500).optional(),
  units:              z.enum(['imperial', 'metric']),
  currency:           z.string().max(6).optional(),
});

export type SodFormValues = z.infer<typeof sodInputSchema>;

export function parseSodQueryParams(
  searchParams: URLSearchParams
): Partial<SodFormValues> {
  const raw = {
    shape:              (searchParams.get('shape') as any) ?? undefined,
    length:             numOrUndefined(searchParams.get('l')),
    width:              numOrUndefined(searchParams.get('w')),
    diameter:           numOrUndefined(searchParams.get('d')),
    height:             numOrUndefined(searchParams.get('h')),
    base1:              numOrUndefined(searchParams.get('b1')),
    base2:              numOrUndefined(searchParams.get('b2')),
    length2:            numOrUndefined(searchParams.get('l2')),
    width2:             numOrUndefined(searchParams.get('w2')),
    irregularArea:      numOrUndefined(searchParams.get('ia')),
    quantity:           numOrUndefined(searchParams.get('qty')) ?? 1,
    waste:              numOrUndefined(searchParams.get('waste')) ?? 10,
    sodType:            (searchParams.get('type') as any) ?? undefined,
    rollSize:           numOrUndefined(searchParams.get('roll')),
    rollsPerPallet:     numOrUndefined(searchParams.get('rpp')),
    pricePerSqFt:       numOrUndefined(searchParams.get('price')),
    includeSoilPrep:    searchParams.get('soil') === '1' ? true : undefined,
    soilDepth:          numOrUndefined(searchParams.get('sd')),
    pricePerSoilCuYd:   numOrUndefined(searchParams.get('soilprice')),
    units:              searchParams.get('units') === 'metric' ? 'metric' : 'imperial',
    currency:           searchParams.get('curr') ?? undefined,
  };
  const result = sodInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}

// ── Insulation Calculator ──────────────────────────────────────────────────

export const insulationInputSchema = z.object({
  application:         z.enum(['attic', 'wall-2x4', 'wall-2x6', 'cathedral', 'floor-crawlspace', 'basement-wall', 'custom']),
  area:                z.number().min(0).max(1000000),
  framingSpacing:      z.enum(['16-oc', '24-oc', 'continuous']).optional(),
  climateZone:         z.enum(['zone-1', 'zone-2', 'zone-3', 'zone-4', 'zone-5', 'zone-6', 'zone-7', 'zone-8', 'zone-7-8', 'custom']).optional(),
  targetRValue:        z.number().min(0).max(120).optional(),
  existingRValue:      z.number().min(0).max(120).optional(),
  materialType:        z.enum(['fiberglass-batt', 'rockwool-batt', 'cellulose-blown', 'fiberglass-blown', 'sprayfoam-open', 'sprayfoam-closed', 'rigid-xps', 'rigid-polyiso']).optional(),
  waste:               z.number().min(0).max(100).optional(),
  coveragePerPack:     z.number().min(1).max(500).optional(),
  pricingMode:         z.enum(['per-sqft', 'per-pack', 'per-board-ft']).optional(),
  pricePerSqFt:        z.number().min(0).max(100).optional(),
  pricePerPack:        z.number().min(0).max(500).optional(),
  pricePerBoardFoot:   z.number().min(0).max(50).optional(),
  pricePerUnit:        z.number().min(0).max(500).optional(),
  laborCostPerSqFt:    z.number().min(0).max(100).optional(),
  includeVaporBarrier: z.boolean().optional(),
  units:               z.enum(['imperial', 'metric']),
  currency:            z.string().max(6).optional(),
});

export type InsulationFormValues = z.infer<typeof insulationInputSchema>;

export function parseInsulationQueryParams(
  searchParams: URLSearchParams
): Partial<InsulationFormValues> {
  const raw = {
    application:         (searchParams.get('app') as any) ?? undefined,
    area:                numOrUndefined(searchParams.get('area')),
    framingSpacing:      (searchParams.get('spacing') as any) ?? undefined,
    climateZone:         (searchParams.get('zone') as any) ?? undefined,
    targetRValue:        numOrUndefined(searchParams.get('rval')),
    existingRValue:      numOrUndefined(searchParams.get('existr')),
    materialType:        (searchParams.get('mat') as any) ?? undefined,
    waste:               numOrUndefined(searchParams.get('waste')) ?? 8,
    coveragePerPack:     numOrUndefined(searchParams.get('pack')),
    pricingMode:         (searchParams.get('pmode') as any) ?? undefined,
    pricePerSqFt:        numOrUndefined(searchParams.get('psqft')),
    pricePerPack:        numOrUndefined(searchParams.get('ppack')),
    pricePerBoardFoot:   numOrUndefined(searchParams.get('pbdft')),
    pricePerUnit:        numOrUndefined(searchParams.get('price')),
    laborCostPerSqFt:    numOrUndefined(searchParams.get('labor')),
    includeVaporBarrier: searchParams.get('vb') === '1' ? true : undefined,
    units:               searchParams.get('units') === 'metric' ? 'metric' : 'imperial',
    currency:            searchParams.get('curr') ?? undefined,
  };
  const result = insulationInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}

/**
 * Spray Foam Insulation Cost Calculator validation schema.
 */
export const sprayFoamInputSchema = z.object({
  application: z.enum([
    'roof-deck-attic',
    'wall-2x4',
    'wall-2x6',
    'crawlspace-subfloor',
    'rim-joist',
    'basement-wall',
    'pole-barn-metal',
    'custom',
  ]),
  area:                        z.number().min(1).max(500000),
  foamType:                    z.enum(['closed-cell-2lb', 'open-cell-05lb']),
  thickness:                   z.number().min(0.25).max(24).optional(),
  targetRValue:                z.number().min(1).max(100).optional(),
  framingSpacing:              z.enum(['16-oc', '24-oc', 'continuous']),
  oversprayWaste:              z.number().min(0).max(50),
  pricingMode:                 z.enum(['per-board-foot', 'per-sqft', 'per-kit-600', 'per-drum-set']),
  pricePerBoardFoot:           z.number().min(0).max(50).optional(),
  pricePerSqFt:                z.number().min(0).max(100).optional(),
  pricePerKit:                 z.number().min(0).max(10000).optional(),
  pricePerDrumSet:             z.number().min(0).max(50000).optional(),
  pricePerUnit:                z.number().min(0).max(50000).optional(),
  laborCostPerSqFt:            z.number().min(0).max(50).optional(),
  includeThermalBarrier:       z.boolean().optional(),
  includeOldInsulationRemoval: z.boolean().optional(),
  units:                       z.enum(['imperial', 'metric']),
  currency:                    z.string().max(6).optional(),
});

export type SprayFoamFormValues = z.infer<typeof sprayFoamInputSchema>;

export function parseSprayFoamQueryParams(
  searchParams: URLSearchParams
): Partial<SprayFoamFormValues> {
  const raw = {
    application:                 (searchParams.get('app') as any) ?? undefined,
    area:                        numOrUndefined(searchParams.get('area')),
    foamType:                    (searchParams.get('foam') as any) ?? undefined,
    thickness:                   numOrUndefined(searchParams.get('thick')),
    targetRValue:                numOrUndefined(searchParams.get('rval')),
    framingSpacing:              (searchParams.get('spacing') as any) ?? undefined,
    oversprayWaste:              numOrUndefined(searchParams.get('waste')) ?? 10,
    pricingMode:                 (searchParams.get('pmode') as any) ?? undefined,
    pricePerBoardFoot:           numOrUndefined(searchParams.get('pbdft')),
    pricePerSqFt:                numOrUndefined(searchParams.get('psqft')),
    pricePerKit:                 numOrUndefined(searchParams.get('pkit')),
    pricePerDrumSet:             numOrUndefined(searchParams.get('pdrum')),
    pricePerUnit:                numOrUndefined(searchParams.get('price')),
    laborCostPerSqFt:            numOrUndefined(searchParams.get('labor')),
    includeThermalBarrier:       searchParams.get('tb') === '1' ? true : undefined,
    includeOldInsulationRemoval: searchParams.get('rm') === '1' ? true : undefined,
    units:                       searchParams.get('units') === 'metric' ? 'metric' : 'imperial',
    currency:                    searchParams.get('curr') ?? undefined,
  };
  const result = sprayFoamInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}

function numOrUndefined(value: string | null): number | undefined {
  if (value === null || value === '') return undefined;
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
}



// ─── Water Softener Size Calculator ───────────────────────────────────────────

export const waterSoftenerInputSchema = z.object({
  people:                z.number().int().min(1).max(20).default(4),
  hardness:              z.number().min(0).max(150).default(25),
  hardnessUnit:          z.enum(['gpg', 'ppm']).default('gpg'),
  iron:                  z.number().min(0).max(10).default(0),
  manganese:             z.number().min(0).max(2).default(0),
  regenDays:             z.number().int().min(3).max(21).default(7),
  reservePercent:        z.number().min(10).max(30).default(20),
  gallonsPerPersonPerDay: z.number().min(20).max(200).default(75),
  waterPressure:         z.number().min(20).max(120).optional(),
  bathrooms:             z.number().int().min(1).max(10).default(2),
  saltType:              z.enum(['evaporated-pellets', 'solar-crystals', 'potassium-chloride']).default('evaporated-pellets'),
  saltCostPerBag:        z.number().min(0).max(100).optional(),
  units:                 z.enum(['imperial', 'metric']).default('imperial'),
  currency:              z.string().max(6).optional(),
});

export type WaterSoftenerFormValues = z.infer<typeof waterSoftenerInputSchema>;

export function parseWaterSoftenerQueryParams(
  searchParams: URLSearchParams
): Partial<WaterSoftenerFormValues> {
  const raw = {
    people:                 numOrUndefined(searchParams.get('ppl')),
    hardness:               numOrUndefined(searchParams.get('hard')),
    hardnessUnit:           (searchParams.get('hunit') as any) ?? undefined,
    iron:                   numOrUndefined(searchParams.get('fe')),
    manganese:              numOrUndefined(searchParams.get('mn')),
    regenDays:              numOrUndefined(searchParams.get('regen')),
    reservePercent:         numOrUndefined(searchParams.get('res')),
    gallonsPerPersonPerDay: numOrUndefined(searchParams.get('gpd')),
    bathrooms:              numOrUndefined(searchParams.get('bath')),
    saltType:               (searchParams.get('salt') as any) ?? undefined,
    saltCostPerBag:         numOrUndefined(searchParams.get('saltcost')),
    units:                  searchParams.get('units') === 'metric' ? 'metric' as const : 'imperial' as const,
    currency:               searchParams.get('curr') ?? undefined,
  };
  const result = waterSoftenerInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}

// ─── Electrical Load Calculator ───────────────────────────────────────────────

export const electricalLoadInputSchema = z.object({
  squareFootage:          z.number().min(100).max(50000).default(2000),
  smallApplianceCircuits: z.number().int().min(2).max(10).default(2),
  hasLaundryCircuit:      z.boolean().default(true),
  cookingType:            z.enum(['electric-range', 'cooktop-oven', 'gas-cooking', 'none']).default('electric-range'),
  rangeWatts:             z.number().min(0).max(30000).default(12000),
  waterHeaterType:        z.enum(['electric-tank', 'heat-pump-hybrid', 'tankless-electric', 'gas-water-heater']).default('electric-tank'),
  waterHeaterWatts:       z.number().min(0).max(40000).default(4500),
  dryerType:              z.enum(['electric-dryer', 'heat-pump-dryer', 'gas-dryer', 'none']).default('electric-dryer'),
  dryerWatts:             z.number().min(0).max(15000).default(5000),
  hasDishwasher:          z.boolean().default(true),
  dishwasherWatts:        z.number().min(0).max(3000).default(1200),
  hasDisposal:            z.boolean().default(true),
  disposalWatts:          z.number().min(0).max(2000).default(800),
  hasMicrowave:           z.boolean().default(true),
  microwaveWatts:         z.number().min(0).max(3000).default(1200),
  evChargerAmps:          z.enum(['none', '16a-38kw', '24a-58kw', '32a-77kw', '40a-96kw', '48a-115kw', '80a-192kw']).default('48a-115kw'),
  hasHotTubSpa:           z.boolean().default(false),
  hotTubWatts:            z.number().min(0).max(20000).default(8000),
  hasWellPump:            z.boolean().default(false),
  wellPumpWatts:          z.number().min(0).max(10000).default(2000),
  otherFixedWatts:        z.number().min(0).max(50000).default(0),
  acType:                 z.enum(['central-ac-heatpump', 'ductless-mini-split', 'window-units', 'none']).default('central-ac-heatpump'),
  acWatts:                z.number().min(0).max(30000).default(5000),
  heatType:               z.enum(['heat-pump-electric-aux', 'central-electric-furnace', 'electric-baseboards', 'gas-furnace-boiler', 'none']).default('heat-pump-electric-aux'),
  heatWatts:              z.number().min(0).max(60000).default(10000),
  existingPanelRating:    z.enum(['100a', '125a', '150a', '200a', '400a', 'unknown']).default('200a'),
  units:                  z.enum(['imperial', 'metric']).default('imperial'),
  currency:               z.string().max(6).optional(),
});

export type ElectricalLoadFormValues = z.infer<typeof electricalLoadInputSchema>;

export function parseElectricalLoadQueryParams(
  searchParams: URLSearchParams
): Partial<ElectricalLoadFormValues> {
  const raw = {
    squareFootage:          numOrUndefined(searchParams.get('sqft')),
    smallApplianceCircuits: numOrUndefined(searchParams.get('sabc')),
    hasLaundryCircuit:      searchParams.get('laundry') === '0' ? false : searchParams.get('laundry') === '1' ? true : undefined,
    cookingType:            (searchParams.get('cook') as any) ?? undefined,
    rangeWatts:             numOrUndefined(searchParams.get('rangew')),
    waterHeaterType:        (searchParams.get('wh') as any) ?? undefined,
    waterHeaterWatts:       numOrUndefined(searchParams.get('whw')),
    dryerType:              (searchParams.get('dryer') as any) ?? undefined,
    dryerWatts:             numOrUndefined(searchParams.get('dryerw')),
    hasDishwasher:          searchParams.get('dw') === '0' ? false : searchParams.get('dw') === '1' ? true : undefined,
    dishwasherWatts:        numOrUndefined(searchParams.get('dww')),
    hasDisposal:            searchParams.get('disp') === '0' ? false : searchParams.get('disp') === '1' ? true : undefined,
    disposalWatts:          numOrUndefined(searchParams.get('dispw')),
    hasMicrowave:           searchParams.get('mw') === '0' ? false : searchParams.get('mw') === '1' ? true : undefined,
    microwaveWatts:         numOrUndefined(searchParams.get('mww')),
    evChargerAmps:          (searchParams.get('ev') as any) ?? undefined,
    hasHotTubSpa:           searchParams.get('spa') === '1' ? true : searchParams.get('spa') === '0' ? false : undefined,
    hotTubWatts:            numOrUndefined(searchParams.get('spaw')),
    hasWellPump:            searchParams.get('pump') === '1' ? true : searchParams.get('pump') === '0' ? false : undefined,
    wellPumpWatts:          numOrUndefined(searchParams.get('pumpw')),
    otherFixedWatts:        numOrUndefined(searchParams.get('otherw')),
    acType:                 (searchParams.get('ac') as any) ?? undefined,
    acWatts:                numOrUndefined(searchParams.get('acw')),
    heatType:               (searchParams.get('heat') as any) ?? undefined,
    heatWatts:              numOrUndefined(searchParams.get('heatw')),
    existingPanelRating:    (searchParams.get('panel') as any) ?? undefined,
    units:                  searchParams.get('units') === 'metric' ? ('metric' as const) : ('imperial' as const),
    currency:               searchParams.get('curr') ?? undefined,
  };
  const result = electricalLoadInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}


// ─── Deck Footing Calculator ─────────────────────────────────────────────────

export const deckFootingInputSchema = z.object({
  deckLength:            z.number().min(0.5).max(1000).default(16),  // ft (imperial) or m (metric)
  deckWidth:             z.number().min(0.5).max(1000).default(12),  // ft (imperial) or m (metric)
  deckShape:             z.enum(['rectangle', 'square', 'l-shape', 'freeform']).default('rectangle'),
  // psf in imperial mode or kPa in metric mode. UI bounds provide the
  // unit-specific guardrails; this range accepts either representation.
  liveLoad:              z.number().min(0.1).max(100).default(40),
  deadLoad:              z.number().min(0.1).max(100).default(10),
  snowLoad:              z.number().min(0).max(100).default(0),
  soilBearing:           z.enum(['clay-1500', 'silt-2000', 'sandy-loam-2500', 'gravel-3000', 'compacted-4000']).default('sandy-loam-2500'),
  postRows:              z.number().int().min(1).max(10).default(2),
  postsPerRow:           z.number().int().min(2).max(12).default(3),
  footingShape:          z.enum(['round', 'square']).default('round'),
  footingDepth:          z.number().min(1).max(300).default(12),     // in (imperial) or cm (metric)
  includeBeam:           z.boolean().default(true),
  units:                 z.enum(['imperial', 'metric']).default('imperial'),
  currency:              z.string().max(6).optional(),
});

export type DeckFootingFormValues = z.infer<typeof deckFootingInputSchema>;

export function parseDeckFootingQueryParams(
  searchParams: URLSearchParams
): Partial<DeckFootingFormValues> {
  const raw = {
    deckLength:   numOrUndefined(searchParams.get('len')),
    deckWidth:    numOrUndefined(searchParams.get('wid')),
    deckShape:    (searchParams.get('shape') as any) ?? undefined,
    liveLoad:     numOrUndefined(searchParams.get('live')),
    deadLoad:     numOrUndefined(searchParams.get('dead')),
    snowLoad:     numOrUndefined(searchParams.get('snow')),
    soilBearing:  (searchParams.get('soil') as any) ?? undefined,
    postRows:     numOrUndefined(searchParams.get('rows')),
    postsPerRow:  numOrUndefined(searchParams.get('ppr')),
    footingShape: (searchParams.get('fshape') as any) ?? undefined,
    footingDepth: numOrUndefined(searchParams.get('fdepth')),
    includeBeam:  searchParams.get('beam') === '0' ? false : searchParams.get('beam') === '1' ? true : undefined,
    units:        searchParams.get('units') === 'metric' ? ('metric' as const) : ('imperial' as const),
    currency:     searchParams.get('curr') ?? undefined,
  };
  const result = deckFootingInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}

/**
 * Concrete Block (CMU) Calculator input schema.
 */
export const concreteBlockInputSchema = z.object({
  wallLength:        z.number().min(0.5).max(2000).default(20),
  wallHeight:        z.number().min(0.5).max(100).default(8),
  blockSize:         z.enum(['8x8x16', '6x8x16', '10x8x16', '12x8x16', '4x8x16']).default('8x8x16'),
  openingsArea:      z.number().min(0).max(5000).default(0),
  waste:             z.number().min(0).max(30).default(5),
  groutFill:         z.enum(['none', 'solid', '16', '24', '32', '48']).default('none'),
  includeRebar:      z.boolean().default(true),
  rebarSpacing:      z.enum(['16', '24', '32', '48']).default('32'),
  includeBondBeam:   z.boolean().default(true),
  pricePerBlock:     z.number().min(0).optional(),
  mortarPricePerBag: z.number().min(0).optional(),
  groutPricePerCuYd: z.number().min(0).optional(),
  units:             z.enum(['imperial', 'metric']).default('imperial'),
  currency:          z.string().max(6).optional(),
});

export type ConcreteBlockFormValues = z.infer<typeof concreteBlockInputSchema>;

export function parseConcreteBlockQueryParams(
  searchParams: URLSearchParams
): Partial<ConcreteBlockFormValues> {
  const raw = {
    wallLength:        numOrUndefined(searchParams.get('wlen')),
    wallHeight:        numOrUndefined(searchParams.get('wh')) ?? numOrUndefined(searchParams.get('wht')),
    blockSize:         (searchParams.get('bsize') as any) ?? undefined,
    openingsArea:      numOrUndefined(searchParams.get('opn')),
    // `waste` is the shared serializer key used by calculators with a waste factor.
    // Keep `wst` for previously distributed concrete-block links.
    waste:             numOrUndefined(searchParams.get('wst')) ?? numOrUndefined(searchParams.get('waste')),
    groutFill:         (searchParams.get('grout') as any) ?? undefined,
    includeRebar:      searchParams.get('rebar') === '0' ? false : searchParams.get('rebar') === '1' ? true : undefined,
    rebarSpacing:      (searchParams.get('rspc') as any) ?? undefined,
    includeBondBeam:   searchParams.get('bbeam') === '0' ? false : searchParams.get('bbeam') === '1' ? true : undefined,
    pricePerBlock:     numOrUndefined(searchParams.get('pblk')),
    mortarPricePerBag: numOrUndefined(searchParams.get('pmort')),
    groutPricePerCuYd: numOrUndefined(searchParams.get('pgrt')),
    units:             searchParams.get('units') === 'metric' ? ('metric' as const) : ('imperial' as const),
    currency:          searchParams.get('curr') ?? undefined,
  };
  const result = concreteBlockInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}

/**
 * Bathroom Remodel Cost Calculator input schema.
 */
export const bathroomRemodelInputSchema = z.object({
  bathroomType:           z.enum(['powder', 'three-quarter', 'full', 'primary-master', 'custom']).default('full'),
  roomLength:             z.number().min(0.5).max(200).default(8),   // min 0.5 to support metric (e.g. 1.2 m powder room)
  roomWidth:              z.number().min(0.5).max(200).default(6),   // max 200 to support metric (e.g. up to ~65 m)
  finishTier:             z.enum(['budget', 'mid-range', 'luxury']).default('mid-range'),
  layoutChange:           z.enum(['none', 'minor', 'major']).default('none'),
  includeTileShower:      z.boolean().default(true),
  includeFreestandingTub: z.boolean().default(false),
  includeDoubleVanity:    z.boolean().default(false),
  includeHeatedFloor:     z.boolean().default(false),
  diyDemolition:          z.boolean().default(false),
  region:                 z.enum(['us-national', 'us-northeast', 'us-west', 'us-midwest', 'us-south', 'canada', 'uk', 'australia']).default('us-national'),
  units:                  z.enum(['imperial', 'metric']).default('imperial'),
  currency:               z.string().max(6).optional(),
});

export type BathroomRemodelFormValues = z.infer<typeof bathroomRemodelInputSchema>;

export function parseBathroomRemodelQueryParams(
  searchParams: URLSearchParams
): Partial<BathroomRemodelFormValues> {
  const raw = {
    bathroomType:           (searchParams.get('btype') as any) ?? undefined,
    roomLength:             numOrUndefined(searchParams.get('blen')),
    roomWidth:              numOrUndefined(searchParams.get('bwid')),
    finishTier:             (searchParams.get('tier') as any) ?? undefined,
    layoutChange:           (searchParams.get('layout') as any) ?? undefined,
    includeTileShower:      searchParams.get('shwr') === '0' ? false : searchParams.get('shwr') === '1' ? true : undefined,
    includeFreestandingTub: searchParams.get('tub') === '1' ? true : searchParams.get('tub') === '0' ? false : undefined,
    includeDoubleVanity:    searchParams.get('dvan') === '1' ? true : searchParams.get('dvan') === '0' ? false : undefined,
    includeHeatedFloor:     searchParams.get('heat') === '1' ? true : searchParams.get('heat') === '0' ? false : undefined,
    diyDemolition:          searchParams.get('diyd') === '1' ? true : searchParams.get('diyd') === '0' ? false : undefined,
    region:                 (searchParams.get('reg') as any) ?? undefined,
    units:                  searchParams.get('units') === 'metric' ? ('metric' as const) : ('imperial' as const),
    currency:               searchParams.get('curr') ?? undefined,
  };
  const result = bathroomRemodelInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}

/**
 * Battery Backup / UPS Sizing Calculator input schema.
 */
export const batteryBackupInputSchema = z.object({
  // Critical Loads (W)
  refrigeratorWatts:    z.number().min(0).max(5000).default(150),
  lightsWatts:          z.number().min(0).max(5000).default(200),
  wellPumpWatts:        z.number().min(0).max(10000).default(0),
  medicalDeviceWatts:   z.number().min(0).max(5000).default(0),
  otherWatts:           z.number().min(0).max(20000).default(0),
  // System config
  desiredRuntimeHours:  z.number().min(0.5).max(72).default(8),
  batteryChemistry:     z.enum(['lifepo4', 'agm', 'flooded-lead-acid', 'nmc-lithium']).default('lifepo4'),
  systemVoltage:        z.enum(['12v', '24v', '48v']).default('48v'),
  inverterEfficiency:   z.number().min(80).max(99).default(93),
  depthOfDischarge:     z.number().min(20).max(100).default(80),
  temperatureDerating:  z.enum(['none', 'mild', 'moderate', 'severe']).default('none'),
  // Optional solar
  includeSolarRecharge: z.boolean().default(false),
  peakSunHours:         z.number().min(1).max(10).default(5),
  // Optional costs
  pricePerKwh:          z.number().min(0).max(5000).optional(),
  inverterCostEstimate: z.number().min(0).max(50000).optional(),
  units:    z.enum(['imperial', 'metric']).default('imperial'),
  currency: z.string().max(6).optional(),
});

export type BatteryBackupFormValues = z.infer<typeof batteryBackupInputSchema>;

export function parseBatteryBackupQueryParams(
  searchParams: URLSearchParams
): Partial<BatteryBackupFormValues> {
  const raw = {
    refrigeratorWatts:    numOrUndefined(searchParams.get('rfgw')),
    lightsWatts:          numOrUndefined(searchParams.get('ltw')),
    wellPumpWatts:        numOrUndefined(searchParams.get('pumpw') ?? searchParams.get('wpw')),
    medicalDeviceWatts:   numOrUndefined(searchParams.get('mdw')),
    otherWatts:           numOrUndefined(searchParams.get('otw')),
    desiredRuntimeHours:  numOrUndefined(searchParams.get('rth')),
    batteryChemistry:     (searchParams.get('chem') as any) ?? undefined,
    systemVoltage:        (searchParams.get('volt') as any) ?? undefined,
    inverterEfficiency:   numOrUndefined(searchParams.get('ieff')),
    depthOfDischarge:     numOrUndefined(searchParams.get('dod')),
    temperatureDerating:  (searchParams.get('tdeg') as any) ?? undefined,
    includeSolarRecharge: searchParams.get('sol') === '1' ? true : searchParams.get('sol') === '0' ? false : undefined,
    peakSunHours:         numOrUndefined(searchParams.get('psh')),
    pricePerKwh:          numOrUndefined(searchParams.get('ppkwh')),
    inverterCostEstimate: numOrUndefined(searchParams.get('invC')),
    units:    searchParams.get('units') === 'metric' ? ('metric' as const) : ('imperial' as const),
    currency: searchParams.get('curr') ?? undefined,
  };
  const result = batteryBackupInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}



/**
 * Home Inspection Cost Calculator input schema.
 */
export const homeInspectionInputSchema = z.object({
  // Home profile
  homeArea:     z.number().min(20).max(25000).default(2000), // sq ft (imperial) or sq m (metric)
  propertyType: z.enum(['single-family', 'condo-townhouse', 'multi-family', 'manufactured']).default('single-family'),
  homeAge:      z.enum(['new', 'age-1-10', 'age-11-25', 'age-26-50', 'age-50-plus']).default('age-11-25'),
  foundation:   z.enum(['slab', 'crawlspace', 'basement', 'walkout-basement']).default('slab'),
  region:       z.enum(['us-national', 'northeast', 'southeast', 'midwest', 'southwest', 'west-coast']).default('us-national'),
  // Optional add-on services
  includeRadon:      z.boolean().default(false),
  includeMold:       z.boolean().default(false),
  includeSewerScope: z.boolean().default(false),
  includeTermite:    z.boolean().default(false),
  includeWellWater:  z.boolean().default(false),
  rushService:       z.boolean().default(false),
  // Optional cost override
  priceOverride: z.number().min(0).max(25000).optional(),
  units:    z.enum(['imperial', 'metric']).default('imperial'),
  currency: z.string().max(6).optional(),
});

export type HomeInspectionFormValues = z.infer<typeof homeInspectionInputSchema>;

export function parseHomeInspectionQueryParams(
  searchParams: URLSearchParams
): Partial<HomeInspectionFormValues> {
  const bool = (key: string) =>
    searchParams.get(key) === '1' ? true : searchParams.get(key) === '0' ? false : undefined;
  const raw = {
    homeArea:          numOrUndefined(searchParams.get('harea')),
    propertyType:      (searchParams.get('hprop') as any) ?? undefined,
    homeAge:           (searchParams.get('hage') as any) ?? undefined,
    foundation:        (searchParams.get('hfnd') as any) ?? undefined,
    region:            (searchParams.get('reg') as any) ?? undefined,
    includeRadon:      bool('radon'),
    includeMold:       bool('mold'),
    includeSewerScope: bool('sewer'),
    includeTermite:    bool('wdi'),
    includeWellWater:  bool('well'),
    rushService:       bool('rush'),
    priceOverride:     numOrUndefined(searchParams.get('hfee')),
    units:    searchParams.get('units') === 'metric' ? ('metric' as const) : ('imperial' as const),
    currency: searchParams.get('curr') ?? undefined,
  };
  const result = homeInspectionInputSchema.partial().safeParse(raw);
  return result.success ? result.data : {};
}
