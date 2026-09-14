import { calculateAsphalt, type AsphaltInput, type AsphaltResult } from './asphalt';
import { calculateDemolition, type DemolitionInput, type DemolitionResult } from './demolition';
import { calculateTrench, type TrenchInput, type TrenchResult } from './trench';
import { calculateWarehouse, type WarehouseInput, type WarehouseResult } from './warehouse';
import { calculateSnowLoad, type SnowLoadInput, type SnowLoadResult } from './snow';
import { calculateSquareFootage, type SquareFootageInput, type SquareFootageResult } from './squareFootage';
import { calculateSiding, type SidingInput, type SidingResult } from './siding';
import { calculateStairs, type StairInput, type StairResult } from './stairs';
import { calculateSod, type SodInput, type SodResult } from './sod';
import { calculateInsulation, type InsulationInput, type InsulationResult } from './insulation';
import { calculateSprayFoam, type SprayFoamInput, type SprayFoamResult } from './sprayFoam';
import { calculateWaterSoftener, type WaterSoftenerInput, type WaterSoftenerResult } from './waterSoftener';
import { calculateElectricalLoad, type ElectricalLoadInput, type ElectricalLoadResult } from './electricalLoad';
import { calculateDeckFooting, type DeckFootingInput, type DeckFootingResult } from './deckFooting';
import { calculateConcreteBlock, type ConcreteBlockInput, type ConcreteBlockResult } from './concreteBlock';
import { calculateBathroomRemodel, type BathroomRemodelInput, type BathroomRemodelResult } from './bathroomRemodel';
import { calculateBatteryBackup, type BatteryBackupInput, type BatteryBackupResult } from './batteryBackup';
import { calculateHomeInspection, type HomeInspectionInput, type HomeInspectionResult } from './homeInspection';
import { calculateBasementWaterproofing, type BasementWaterproofingInput, type BasementWaterproofingResult } from './basementWaterproofing';
import { calculateGutterCleaning, type GutterCleaningInput, type GutterCleaningResult } from './gutterCleaning';


export type CalculatorInput = AsphaltInput | DemolitionInput | TrenchInput | WarehouseInput | SnowLoadInput | SquareFootageInput | SidingInput | StairInput | SodInput | InsulationInput | SprayFoamInput | WaterSoftenerInput | ElectricalLoadInput | DeckFootingInput | ConcreteBlockInput | BathroomRemodelInput | BatteryBackupInput | HomeInspectionInput | BasementWaterproofingInput | GutterCleaningInput;
export type CalculatorResult = AsphaltResult | DemolitionResult | TrenchResult | WarehouseResult | SnowLoadResult | SquareFootageResult | SidingResult | StairResult | SodResult | InsulationResult | SprayFoamResult | WaterSoftenerResult | ElectricalLoadResult | DeckFootingResult | ConcreteBlockResult | BathroomRemodelResult | BatteryBackupResult | HomeInspectionResult | BasementWaterproofingResult | GutterCleaningResult;

const formulaMap: Record<string, (input: any) => any> = {
  asphalt: calculateAsphalt,
  demolition: calculateDemolition,
  trench: calculateTrench,
  warehouse: calculateWarehouse,
  snow: calculateSnowLoad,
  'square-footage': calculateSquareFootage,
  siding: calculateSiding,
  stairs: calculateStairs,
  sod: calculateSod,
  insulation: calculateInsulation,
  'spray-foam': calculateSprayFoam,
  'water-softener': calculateWaterSoftener,
  'electrical-load': calculateElectricalLoad,
  'deck-footing': calculateDeckFooting,
  'concrete-block': calculateConcreteBlock,
  'bathroom-remodel': calculateBathroomRemodel,
  'battery-backup': calculateBatteryBackup,
  'home-inspection': calculateHomeInspection,
  'basement-waterproofing': calculateBasementWaterproofing,
  'gutter-cleaning': calculateGutterCleaning,
};




export function getFormula(formulaId: string) {
  const fn = formulaMap[formulaId];
  if (!fn) {
    throw new Error(`No formula registered for formulaId "${formulaId}"`);
  }
  return fn;
}
