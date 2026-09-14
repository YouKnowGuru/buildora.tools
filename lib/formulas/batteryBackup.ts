import { z } from 'zod';

// ---------------------------------------------------------------------------
// Input Schema
// ---------------------------------------------------------------------------

export const batteryBackupInputSchema = z.object({
  // Critical Loads (W)
  refrigeratorWatts:   z.number().min(0).max(5000).default(150),
  lightsWatts:         z.number().min(0).max(5000).default(200),
  wellPumpWatts:       z.number().min(0).max(10000).default(0),
  medicalDeviceWatts:  z.number().min(0).max(5000).default(0),
  otherWatts:          z.number().min(0).max(20000).default(0),

  // System Configuration
  desiredRuntimeHours: z.number().min(0.5).max(72).default(8),
  batteryChemistry:    z.enum(['lifepo4', 'agm', 'flooded-lead-acid', 'nmc-lithium']).default('lifepo4'),
  systemVoltage:       z.enum(['12v', '24v', '48v']).default('48v'),
  inverterEfficiency:  z.number().min(80).max(99).default(93),
  depthOfDischarge:    z.number().min(20).max(100).default(80),
  temperatureDerating: z.enum(['none', 'mild', 'moderate', 'severe']).default('none'),

  // Optional Solar Recharge
  includeSolarRecharge: z.boolean().default(false),
  peakSunHours:         z.number().min(1).max(10).default(5),

  // Optional Cost Inputs
  pricePerKwh:          z.number().min(0).max(5000).optional(),
  inverterCostEstimate: z.number().min(0).max(50000).optional(),

  units:    z.enum(['imperial', 'metric']).default('imperial'),
  currency: z.string().max(6).optional(),
});

export type BatteryBackupInput = z.infer<typeof batteryBackupInputSchema>;

// ---------------------------------------------------------------------------
// Output Interface
// ---------------------------------------------------------------------------

export interface BatteryBackupResult {
  // Load
  totalLoadWatts: number;
  totalLoadKw: number;

  // Energy
  energyRequiredWh: number;
  energyRequiredKwh: number;
  usableCapacityWh: number;
  usableCapacityKwh: number;
  deliveredAcEnergyWh: number;
  deliveredAcEnergyKwh: number;

  // Battery Sizing
  grossCapacityWh: number;
  grossCapacityKwh: number;
  batteryAh: number;           // at chosen system voltage
  systemVoltageV: number;

  // Inverter
  inverterSizeW: number;       // exact calc (load × 1.25)
  recommendedInverterSizeW: number; // rounded up to nearest standard size
  inverterEfficiencyUsed: number;   // %

  // Runtime
  estimatedRuntimeHours: number;  // at total load given gross capacity

  // Solar Recharge (optional)
  solarPanelWatts: number;    // 0 if not selected
  numberOfSolarPanels: number; // at 400 W standard panel

  // Chemistry Info (for display)
  chemistryLabel: string;
  cycleLife: number;           // cycles
  recommendedDod: number;      // % recommended by chemistry
  actualDodUsed: number;       // % as entered

  // Cost Estimates
  batteryBankCostLow: number;
  batteryBankCostMid: number;
  batteryBankCostHigh: number;
  totalSystemCostLow: number;
  totalSystemCostHigh: number;
  costPerKwhUsed: number;      // mid-point $/kWh used in calc
  costAssumptions: {
    batteryLow: number;
    batteryMid: number;
    batteryHigh: number;
    inverterLowPerKw: number;
    inverterHighPerKw: number;
  };

  // Flags
  temperatureDeratingFactor: number;
  isDodWarning: boolean;       // true if user set DoD > chemistry recommendation
  isUndersized: boolean;       // true if total load > 3000 W and voltage is 12V

  // For visualizer scenarios
  runtimeAtHalfLoad: number;
  runtimeAtDoubleLoad: number;
}

// ---------------------------------------------------------------------------
// Chemistry Lookup
// ---------------------------------------------------------------------------

interface ChemistrySpec {
  label: string;
  cycleLife: number;
  recommendedDod: number;
  costPerKwhLow: number;
  costPerKwhMid: number;
  costPerKwhHigh: number;
  inverterCostLow: number;  // per kW inverter size
  inverterCostHigh: number;
}

const CHEMISTRY: Record<BatteryBackupInput['batteryChemistry'], ChemistrySpec> = {
  'lifepo4': {
    label: 'LiFePO₄ (Lithium Iron Phosphate)',
    cycleLife: 3500,
    recommendedDod: 80,
    costPerKwhLow: 400, costPerKwhMid: 600, costPerKwhHigh: 800,
    inverterCostLow: 200, inverterCostHigh: 500,
  },
  'agm': {
    label: 'AGM (Sealed Lead-Acid)',
    cycleLife: 500,
    recommendedDod: 50,
    costPerKwhLow: 200, costPerKwhMid: 300, costPerKwhHigh: 400,
    inverterCostLow: 150, inverterCostHigh: 350,
  },
  'flooded-lead-acid': {
    label: 'Flooded Lead-Acid',
    cycleLife: 350,
    recommendedDod: 50,
    costPerKwhLow: 100, costPerKwhMid: 175, costPerKwhHigh: 250,
    inverterCostLow: 100, inverterCostHigh: 300,
  },
  'nmc-lithium': {
    label: 'NMC Lithium-Ion',
    cycleLife: 2000,
    recommendedDod: 80,
    costPerKwhLow: 500, costPerKwhMid: 700, costPerKwhHigh: 900,
    inverterCostLow: 250, inverterCostHigh: 600,
  },
};

// Standard inverter sizes (W)
const STANDARD_INVERTER_SIZES = [500, 1000, 1500, 2000, 3000, 4000, 5000, 6000, 8000, 10000, 12000, 15000, 20000];

function roundUpInverter(watts: number): number {
  for (const size of STANDARD_INVERTER_SIZES) {
    if (size >= watts) return size;
  }
  return STANDARD_INVERTER_SIZES[STANDARD_INVERTER_SIZES.length - 1]!;
}

const TEMPERATURE_DERATING: Record<BatteryBackupInput['temperatureDerating'], number> = {
  none:     1.00,
  mild:     1.05,  // +5% capacity needed
  moderate: 1.15,  // +15%
  severe:   1.25,  // +25% (cold climate / unheated space)
};

const VOLTAGE_MAP: Record<BatteryBackupInput['systemVoltage'], number> = {
  '12v': 12,
  '24v': 24,
  '48v': 48,
};

// ---------------------------------------------------------------------------
// Main Calculator
// ---------------------------------------------------------------------------

export function calculateBatteryBackup(input: BatteryBackupInput): BatteryBackupResult {
  const {
    refrigeratorWatts, lightsWatts, wellPumpWatts, medicalDeviceWatts, otherWatts,
    desiredRuntimeHours, batteryChemistry, systemVoltage,
    inverterEfficiency, depthOfDischarge, temperatureDerating,
    includeSolarRecharge, peakSunHours,
    pricePerKwh, inverterCostEstimate,
  } = input;

  const chem = CHEMISTRY[batteryChemistry];
  const voltageV = VOLTAGE_MAP[systemVoltage];
  const tempFactor = TEMPERATURE_DERATING[temperatureDerating];
  const effFrac = inverterEfficiency / 100;
  const dodFrac = depthOfDischarge / 100;

  // Step 1: Total Load
  const totalLoadWatts = refrigeratorWatts + lightsWatts + wellPumpWatts + medicalDeviceWatts + otherWatts;
  const totalLoadKw = round2(totalLoadWatts / 1000);

  // Step 2: Energy at load for desired runtime
  const energyRequiredWh = round2(totalLoadWatts * desiredRuntimeHours);
  const energyRequiredKwh = round2(energyRequiredWh / 1000);

  // Step 3: Gross battery capacity needed
  // grossCapacityWh = (load × runtime) / inverterEff / DoD × tempFactor
  const grossCapacityWh = totalLoadWatts === 0
    ? 0
    : round2((energyRequiredWh / effFrac / dodFrac) * tempFactor);
  const grossCapacityKwh = round2(grossCapacityWh / 1000);

  // Usable battery capacity at DoD and delivered AC energy
  const usableCapacityWh = round2(grossCapacityWh * dodFrac);
  const usableCapacityKwh = round2(usableCapacityWh / 1000);
  const deliveredAcEnergyWh = energyRequiredWh;
  const deliveredAcEnergyKwh = energyRequiredKwh;

  // Step 4: Ah at system voltage
  const batteryAh = round1(grossCapacityWh / voltageV);

  // Step 5: Inverter sizing
  const inverterSizeW = round0(totalLoadWatts * 1.25);
  const recommendedInverterSizeW = totalLoadWatts === 0 ? 1000 : roundUpInverter(inverterSizeW);

  // Step 6: Estimated runtime at full load (given gross capacity)
  // runtimeHrs = (grossCapacityWh × DoD × effFrac) / totalLoadWatts
  const estimatedRuntimeHours = totalLoadWatts === 0
    ? 0
    : round2((grossCapacityWh * dodFrac * effFrac) / totalLoadWatts);

  // Step 7: Solar recharge (optional)
  let solarPanelWatts = 0;
  let numberOfSolarPanels = 0;
  if (includeSolarRecharge && totalLoadWatts > 0) {
    // Size solar array to replenish daily consumption based on peak sun hours and planning system efficiency (77%, typical 75–85% range)
    const solarSystemEfficiency = 0.77;
    const dailyEnergyWh = energyRequiredWh;
    solarPanelWatts = round0(dailyEnergyWh / (peakSunHours * solarSystemEfficiency));
    numberOfSolarPanels = Math.ceil(solarPanelWatts / 400);
  }

  // Step 8: Cost estimates
  const midKwh = pricePerKwh ?? chem.costPerKwhMid;
  const costPerKwhUsed = midKwh;
  const batteryBankCostLow  = round0(grossCapacityKwh * chem.costPerKwhLow);
  const batteryBankCostMid  = round0(grossCapacityKwh * midKwh);
  const batteryBankCostHigh = round0(grossCapacityKwh * chem.costPerKwhHigh);

  const inverterKw = recommendedInverterSizeW / 1000;
  const invLow  = inverterCostEstimate ?? round0(inverterKw * chem.inverterCostLow);
  const invHigh = inverterCostEstimate ?? round0(inverterKw * chem.inverterCostHigh);

  const totalSystemCostLow  = round0(batteryBankCostLow + invLow);
  const totalSystemCostHigh = round0(batteryBankCostHigh + invHigh);

  // Scenario runtimes (for visualizer)
  const runtimeAtHalfLoad = totalLoadWatts === 0 ? 0 : round2((grossCapacityWh * dodFrac * effFrac) / (totalLoadWatts * 0.5));
  const runtimeAtDoubleLoad = totalLoadWatts === 0 ? 0 : round2((grossCapacityWh * dodFrac * effFrac) / (totalLoadWatts * 2));

  // Flags
  const isDodWarning = depthOfDischarge > chem.recommendedDod;
  const isUndersized = voltageV === 12 && totalLoadWatts > 3000;

  return {
    totalLoadWatts,
    totalLoadKw,
    energyRequiredWh,
    energyRequiredKwh,
    usableCapacityWh,
    usableCapacityKwh,
    deliveredAcEnergyWh,
    deliveredAcEnergyKwh,
    grossCapacityWh,
    grossCapacityKwh,
    batteryAh,
    systemVoltageV: voltageV,
    inverterSizeW,
    recommendedInverterSizeW,
    inverterEfficiencyUsed: inverterEfficiency,
    estimatedRuntimeHours,
    solarPanelWatts,
    numberOfSolarPanels,
    chemistryLabel: chem.label,
    cycleLife: chem.cycleLife,
    recommendedDod: chem.recommendedDod,
    actualDodUsed: depthOfDischarge,
    batteryBankCostLow,
    batteryBankCostMid,
    batteryBankCostHigh,
    totalSystemCostLow,
    totalSystemCostHigh,
    costPerKwhUsed,
    costAssumptions: {
      batteryLow: chem.costPerKwhLow,
      batteryMid: chem.costPerKwhMid,
      batteryHigh: chem.costPerKwhHigh,
      inverterLowPerKw: chem.inverterCostLow,
      inverterHighPerKw: chem.inverterCostHigh,
    },
    temperatureDeratingFactor: tempFactor,
    isDodWarning,
    isUndersized,
    runtimeAtHalfLoad,
    runtimeAtDoubleLoad,
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function round0(v: number) { return Math.round(v); }
function round1(v: number) { return Math.round(v * 10) / 10; }
function round2(v: number) { return Math.round(v * 100) / 100; }
