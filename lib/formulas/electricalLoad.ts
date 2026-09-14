import { z } from 'zod';

export const electricalLoadInputSchema = z.object({
  // Dwelling Space
  squareFootage: z.number().min(100).max(50000).default(2000),
  smallApplianceCircuits: z.number().int().min(2).max(10).default(2), // min 2 per NEC 210.11(C)(1)
  hasLaundryCircuit: z.boolean().default(true), // 1500 VA per NEC 210.11(C)(2)

  // Cooking Appliances
  cookingType: z.enum(['electric-range', 'cooktop-oven', 'gas-cooking', 'none']).default('electric-range'),
  rangeWatts: z.number().min(0).max(30000).default(12000), // Standard 12 kW range

  // Water Heating
  waterHeaterType: z.enum(['electric-tank', 'heat-pump-hybrid', 'tankless-electric', 'gas-water-heater']).default('electric-tank'),
  waterHeaterWatts: z.number().min(0).max(40000).default(4500),

  // Clothes Dryer
  dryerType: z.enum(['electric-dryer', 'heat-pump-dryer', 'gas-dryer', 'none']).default('electric-dryer'),
  dryerWatts: z.number().min(0).max(15000).default(5000), // Min 5000 VA per NEC 220.54

  // Kitchen & Utility Appliances
  hasDishwasher: z.boolean().default(true),
  dishwasherWatts: z.number().min(0).max(3000).default(1200),
  hasDisposal: z.boolean().default(true),
  disposalWatts: z.number().min(0).max(2000).default(800),
  hasMicrowave: z.boolean().default(true),
  microwaveWatts: z.number().min(0).max(3000).default(1200),

  // High-Power Add-ons & Fastened Equipment
  evChargerAmps: z.enum(['none', '16a-38kw', '24a-58kw', '32a-77kw', '40a-96kw', '48a-115kw', '80a-192kw']).default('48a-115kw'),
  hasHotTubSpa: z.boolean().default(false),
  hotTubWatts: z.number().min(0).max(20000).default(8000),
  hasWellPump: z.boolean().default(false),
  wellPumpWatts: z.number().min(0).max(10000).default(2000),
  otherFixedWatts: z.number().min(0).max(50000).default(0),

  // Heating & Air Conditioning (Non-Coincident Load NEC 220.82(C))
  acType: z.enum(['central-ac-heatpump', 'ductless-mini-split', 'window-units', 'none']).default('central-ac-heatpump'),
  acWatts: z.number().min(0).max(30000).default(5000), // e.g. 3-4 ton AC compressor + fan ~4.5-5.5 kW
  heatType: z.enum(['heat-pump-electric-aux', 'central-electric-furnace', 'electric-baseboards', 'gas-furnace-boiler', 'none']).default('heat-pump-electric-aux'),
  heatWatts: z.number().min(0).max(60000).default(10000), // e.g. 10 kW heat strip

  // Existing / Target Panel
  existingPanelRating: z.enum(['100a', '125a', '150a', '200a', '400a', 'unknown']).default('200a'),
  units: z.enum(['imperial', 'metric']).default('imperial'),
  currency: z.string().optional(),
});

export type ElectricalLoadInput = z.infer<typeof electricalLoadInputSchema>;

export interface ElectricalLoadResult {
  // Step-by-Step Load Breakdown (VA)
  generalLightingVA: number;
  smallApplianceVA: number;
  laundryVA: number;
  baseGeneralLoadVA: number;
  fixedAppliancesTotalVA: number;
  totalGeneralLoadVA: number;
  first10kGeneralVA: number;
  remainderGeneralVA: number;
  netGeneralDemandVA: number;

  // HVAC Load (VA)
  coolingLoadVA: number;
  heatingLoadVA: number;
  governingHvacLoadVA: number;
  governingHvacType: 'cooling' | 'heating' | 'none';

  // Total Load & Current
  totalCalculatedLoadVA: number;
  calculatedAmperes: number;

  // Service Recommendation
  recommendedServiceAmps: number;
  serviceRecommendation: string;
  isServiceUpgradeRequired: boolean;
  servicePanelStatus: 'adequate' | 'near-capacity' | 'upgrade-required';
  panelUtilizationPercent: number;
  spareCapacityAmperes: number;
  spareCapacityVA: number;

  // Wire Gauge Recommendations (NEC Table 310.12)
  copperServiceConductor: string;
  aluminumServiceConductor: string;
  groundingElectrodeConductor: string;
  minimumConduitSize: string;

  // Metric Equivalents
  metricSquareMeters: number;
  totalCalculatedLoadKW: number;
}

// EV Charger Amperage to continuous rating in Volt-Amperes (Watts @ 240V)
const EV_CHARGER_VA: Record<string, number> = {
  'none': 0,
  '16a-38kw': 3840,   // 16A continuous @ 240V
  '24a-58kw': 5760,   // 24A continuous @ 240V
  '32a-77kw': 7680,   // 32A continuous @ 240V (40A breaker)
  '40a-96kw': 9600,   // 40A continuous @ 240V (50A breaker)
  '48a-115kw': 11520, // 48A continuous @ 240V (60A breaker) - Tesla Wall Connector standard
  '80a-192kw': 19200, // 80A continuous @ 240V (100A breaker) - Ford Charge Station Pro
};

// Standard residential service panel sizes (Amperes)
const STANDARD_SERVICE_SIZES = [100, 125, 150, 200, 225, 300, 400] as const;

// NEC Table 310.12 Service Conductor Sizing + NEC Table 250.66 Grounding Electrode Conductor
// for 120/240V 3-Wire Single-Phase Dwelling Services.
// GEC sizes per NEC 250.66 (based on largest ungrounded service-entrance conductor).
const CONDUCTOR_SIZES: Record<number, { copper: string; aluminum: string; ground: string; conduit: string }> = {
  100: { copper: '#4 AWG Cu (75°C)',      aluminum: '#2 AWG Al (75°C)',      ground: '#8 AWG Cu / #6 AWG Al',  conduit: '1-1/4" Rigid / PVC' },
  125: { copper: '#2 AWG Cu (75°C)',      aluminum: '#1/0 AWG Al (75°C)',    ground: '#8 AWG Cu / #6 AWG Al',  conduit: '1-1/4" Rigid / PVC' },
  150: { copper: '#1 AWG Cu (75°C)',      aluminum: '#2/0 AWG Al (75°C)',    ground: '#6 AWG Cu / #4 AWG Al',  conduit: '1-1/2" Rigid / PVC' },
  200: { copper: '#2/0 AWG Cu (75°C)',    aluminum: '#4/0 AWG Al (75°C)',    ground: '#4 AWG Cu / #2 AWG Al',  conduit: '2" Rigid / PVC' },
  225: { copper: '#3/0 AWG Cu (75°C)',    aluminum: '250 kcmil Al (75°C)',   ground: '#4 AWG Cu / #2 AWG Al',  conduit: '2" Rigid / PVC' },
  300: { copper: '250 kcmil Cu (75°C)',   aluminum: '350 kcmil Al (75°C)',   ground: '#2 AWG Cu / #1/0 AWG Al',conduit: '2-1/2" Rigid / PVC' },
  400: { copper: 'Dual 2/0 Cu (or 400 kcmil)', aluminum: 'Dual 4/0 Al (or 600 kcmil)', ground: '#1/0 AWG Cu / 3/0 AWG Al', conduit: 'Dual 2" or 3" Rigid / PVC' },
};

export function calculateElectricalLoad(input: ElectricalLoadInput): ElectricalLoadResult {
  const isMetric = input.units === 'metric';
  const rawSqFt = input.squareFootage ?? 2000;
  const sqFt = isMetric ? rawSqFt * 10.7639 : rawSqFt;

  // ── 1. General Lighting & Receptacle Load (NEC 220.82(B)(1)) ──
  // 3 VA per square foot of living area
  const generalLightingVA = Math.round(sqFt * 3);

  // ── 2. Small Appliance & Laundry Circuits (NEC 220.82(B)(2)) ──
  const sabcCircuits = Math.max(2, input.smallApplianceCircuits ?? 2);
  const smallApplianceVA = sabcCircuits * 1500; // 1,500 VA each
  const laundryVA = input.hasLaundryCircuit ? 1500 : 0; // 1,500 VA

  const baseGeneralLoadVA = generalLightingVA + smallApplianceVA + laundryVA;

  // ── 3. Fixed / Fastened Appliances (Nameplate Ratings) (NEC 220.82(B)(3)) ──
  let cookingVA = 0;
  if (input.cookingType === 'electric-range' || input.cookingType === 'cooktop-oven') {
    cookingVA = Math.max(0, input.rangeWatts ?? 12000);
  }

  let waterHeatingVA = 0;
  if (input.waterHeaterType === 'electric-tank' || input.waterHeaterType === 'tankless-electric') {
    waterHeatingVA = Math.max(0, input.waterHeaterWatts ?? 4500);
  } else if (input.waterHeaterType === 'heat-pump-hybrid') {
    waterHeatingVA = Math.max(0, Math.min(input.waterHeaterWatts ?? 1000, 4500));
  }

  let dryerVA = 0;
  if (input.dryerType === 'electric-dryer') {
    dryerVA = Math.max(5000, input.dryerWatts ?? 5000); // min 5,000 VA per NEC 220.54
  } else if (input.dryerType === 'heat-pump-dryer') {
    dryerVA = Math.max(0, input.dryerWatts ?? 1500);
  }

  const dishwasherVA = input.hasDishwasher ? Math.max(0, input.dishwasherWatts ?? 1200) : 0;
  const disposalVA   = input.hasDisposal   ? Math.max(0, input.disposalWatts ?? 800)    : 0;
  const microwaveVA  = input.hasMicrowave  ? Math.max(0, input.microwaveWatts ?? 1200)   : 0;
  const evChargerVA  = EV_CHARGER_VA[input.evChargerAmps ?? 'none'] ?? 0;
  const hotTubVA     = input.hasHotTubSpa  ? Math.max(0, input.hotTubWatts ?? 8000)     : 0;
  const wellPumpVA   = input.hasWellPump   ? Math.max(0, input.wellPumpWatts ?? 2000)   : 0;
  const otherFixedVA = Math.max(0, input.otherFixedWatts ?? 0);

  const fixedAppliancesTotalVA =
    cookingVA +
    waterHeatingVA +
    dryerVA +
    dishwasherVA +
    disposalVA +
    microwaveVA +
    evChargerVA +
    hotTubVA +
    wellPumpVA +
    otherFixedVA;

  // ── 4. Apply NEC 220.82(B) Demand Factor to General Load ──
  // 100% of the first 10,000 VA + 40% of the remainder above 10,000 VA
  const totalGeneralLoadVA = baseGeneralLoadVA + fixedAppliancesTotalVA;
  const first10kGeneralVA = Math.min(10000, totalGeneralLoadVA);
  const remainderGeneralVA = Math.max(0, totalGeneralLoadVA - 10000);
  const netGeneralDemandVA = Math.round(first10kGeneralVA + 0.40 * remainderGeneralVA);

  // ── 5. Non-Coincident HVAC Load (NEC 220.82(C)) ──
  // Compare cooling vs heating and take the LARGER of the two (100% demand factor)
  let coolingLoadVA = 0;
  if (input.acType !== 'none') {
    coolingLoadVA = Math.max(0, input.acWatts ?? 5000);
  }

  let heatingLoadVA = 0;
  if (input.heatType === 'heat-pump-electric-aux') {
    // Heat pump compressor (from acWatts or base) + supplemental electric resistance heat (NEC 220.82(C)(5))
    heatingLoadVA = Math.max(0, input.heatWatts ?? 10000) + Math.round(coolingLoadVA * 0.75);
  } else if (input.heatType === 'central-electric-furnace' || input.heatType === 'electric-baseboards') {
    // 65% of central electric space heating or 100% for ≤4 separately controlled units
    heatingLoadVA = Math.round(Math.max(0, input.heatWatts ?? 10000) * 0.65);
  } else if (input.heatType === 'gas-furnace-boiler') {
    // Gas heat only needs blower fan (~600-1000 VA)
    heatingLoadVA = 800;
  }

  let governingHvacLoadVA = 0;
  let governingHvacType: 'cooling' | 'heating' | 'none' = 'none';

  if (coolingLoadVA > 0 || heatingLoadVA > 0) {
    if (heatingLoadVA >= coolingLoadVA) {
      governingHvacLoadVA = heatingLoadVA;
      governingHvacType = 'heating';
    } else {
      governingHvacLoadVA = coolingLoadVA;
      governingHvacType = 'cooling';
    }
  }

  // ── 6. Total Calculated Service Load & Service Current ──
  const totalCalculatedLoadVA = netGeneralDemandVA + governingHvacLoadVA;
  // Standard single-phase 120/240V service calculation
  const calculatedAmperes = Math.round((totalCalculatedLoadVA / 240) * 10) / 10;

  // ── 7. Recommended Standard Service Panel Rating ──
  let recommendedServiceAmps: number = STANDARD_SERVICE_SIZES[STANDARD_SERVICE_SIZES.length - 1]!;
  for (const size of STANDARD_SERVICE_SIZES) {
    if (calculatedAmperes <= size) {
      recommendedServiceAmps = size;
      break;
    }
  }

  // Parse existing panel rating if known
  let existingAmps = 200;
  if (input.existingPanelRating === '100a') existingAmps = 100;
  else if (input.existingPanelRating === '125a') existingAmps = 125;
  else if (input.existingPanelRating === '150a') existingAmps = 150;
  else if (input.existingPanelRating === '200a') existingAmps = 200;
  else if (input.existingPanelRating === '400a') existingAmps = 400;

  const isServiceUpgradeRequired = calculatedAmperes > existingAmps;
  const panelUtilizationPercent = Math.round((calculatedAmperes / recommendedServiceAmps) * 1000) / 10;
  const spareCapacityAmperes = Math.round((recommendedServiceAmps - calculatedAmperes) * 10) / 10;
  const spareCapacityVA = Math.round(spareCapacityAmperes * 240);

  let servicePanelStatus: 'adequate' | 'near-capacity' | 'upgrade-required' = 'adequate';
  if (isServiceUpgradeRequired) {
    servicePanelStatus = 'upgrade-required';
  } else if (panelUtilizationPercent >= 80) {
    servicePanelStatus = 'near-capacity';
  }

  let serviceRecommendation = `${recommendedServiceAmps}A Main Service (120/240V, 1-Phase)`;
  if (recommendedServiceAmps >= 400) {
    serviceRecommendation = '400A Service (Class 320 Meter / Dual 200A Panels)';
  }

  // ── 8. Conductor Sizing (NEC Table 310.12) ──
  const wireLookup = CONDUCTOR_SIZES[recommendedServiceAmps] || CONDUCTOR_SIZES[200]!;

  return {
    generalLightingVA,
    smallApplianceVA,
    laundryVA,
    baseGeneralLoadVA,
    fixedAppliancesTotalVA,
    totalGeneralLoadVA,
    first10kGeneralVA,
    remainderGeneralVA,
    netGeneralDemandVA,
    coolingLoadVA,
    heatingLoadVA,
    governingHvacLoadVA,
    governingHvacType,
    totalCalculatedLoadVA,
    calculatedAmperes,
    recommendedServiceAmps,
    serviceRecommendation,
    isServiceUpgradeRequired,
    servicePanelStatus,
    panelUtilizationPercent,
    spareCapacityAmperes,
    spareCapacityVA,
    copperServiceConductor: wireLookup.copper,
    aluminumServiceConductor: wireLookup.aluminum,
    groundingElectrodeConductor: wireLookup.ground,
    minimumConduitSize: wireLookup.conduit,
    metricSquareMeters: Math.round(sqFt * 0.092903 * 10) / 10,
    totalCalculatedLoadKW: Math.round((totalCalculatedLoadVA / 1000) * 100) / 100,
  };
}
