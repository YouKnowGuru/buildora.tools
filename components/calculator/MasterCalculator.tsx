'use client';

import { useState, useId, useMemo, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import type { ToolConfig, InputField } from '@/lib/registry/types';
import { getFormula } from '@/lib/formulas';
import { asphaltInputSchema, demolitionInputSchema, basementWaterproofingInputSchema, gutterCleaningInputSchema, trenchInputSchema, warehouseInputSchema, snowInputSchema, squareFootageInputSchema, sidingInputSchema, stairInputSchema, sodInputSchema, insulationInputSchema, sprayFoamInputSchema, waterSoftenerInputSchema, electricalLoadInputSchema, deckFootingInputSchema, concreteBlockInputSchema, bathroomRemodelInputSchema, batteryBackupInputSchema, homeInspectionInputSchema } from '@/lib/validation/schemas';
import type { AsphaltFormValues } from '@/lib/validation/schemas';

import { UnitToggle } from './UnitToggle';
import { ShareButton } from './ShareButton';
import { PrintButton } from './PrintButton';
import { PdfExportButton } from './PdfExportButton';
import { ResultCard } from './ResultCard';
import { SidingVisualizer } from './SidingVisualizer';
import { StairVisualizer } from './StairVisualizer';
import { AsphaltVisualizer } from './AsphaltVisualizer';
import { DemolitionVisualizer } from './DemolitionVisualizer';
import { TrenchVisualizer } from './TrenchVisualizer';
import { WarehouseVisualizer } from './WarehouseVisualizer';
import { SnowLoadVisualizer } from './SnowLoadVisualizer';
import { SquareFootageVisualizer } from './SquareFootageVisualizer';
import { SodVisualizer } from './SodVisualizer';
import { InsulationVisualizer } from './InsulationVisualizer';
import { SprayFoamVisualizer } from './SprayFoamVisualizer';
import { WaterSoftenerVisualizer } from './WaterSoftenerVisualizer';
import { ElectricalLoadVisualizer } from './ElectricalLoadVisualizer';
import { DeckFootingVisualizer } from './DeckFootingVisualizer';
import { ConcreteBlockVisualizer } from './ConcreteBlockVisualizer';
import { BathroomRemodelVisualizer } from './BathroomRemodelVisualizer';
import { BatteryBackupVisualizer } from './BatteryBackupVisualizer';
import { HomeInspectionVisualizer } from './HomeInspectionVisualizer';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getLocalizedTool } from '@/lib/i18n/toolTranslations';
import {
  CURRENCIES,
  getCurrency,
  getDefaultCurrencyForLocale,
  type Currency,
} from '@/lib/i18n/currencies';
import { SlidersHorizontal, RotateCcw, ChevronDown } from 'lucide-react';

const DEBOUNCE_MS = 300;

// Units that require the Imperial ↔ Metric toggle to be visible.
// If none of a tool's inputs carry one of these units, the toggle is hidden
// (e.g. Battery Backup uses W/kWh/Ah/hrs — universal SI, no conversion needed).
const DIMENSIONAL_UNITS = new Set([
  'ft', 'm', 'in', 'cm', 'sq ft', 'm²', 'sq m',
  'cu yd', 'm³', 'lbs', 'kg', 'lb/ft³', 'kg/m³', 'psf', 'kPa',
]);

const PARAM_MAP: Record<string, string> = {
  // asphalt
  length: 'l',
  width: 'w',
  depth: 'd',
  density: 'den',
  waste: 'waste',
  pricePerTon: 'price',
  // demolition
  area: 'area',
  stories: 'st',
  structureType: 'stype',
  method: 'method',
  pricePerSqFt: 'psf',
  permitCost: 'permit',
  includeHaul: 'haul',
  includePermit: 'perm',
  // basement waterproofing
  basementArea: 'area',
  perimeter: 'per',
  waterIssue: 'issue',
  includeSumpPump: 'sump',
  includeCrackRepair: 'cracks',
  crackLength: 'crackft',
  includeExcavation: 'exc',
  // gutter cleaning
  gutterLength: 'glen',
  debris: 'debris',
  access: 'access',
  includeGuards: 'guards',
  includeDownspoutFlush: 'flush',
  // trench
  beddingMaterial: 'bed',
  beddingDepth: 'bd',
  includeSpoilHaul: 'haul',
  pricePerCuYd: 'price',
  // warehouse
  palletCount: 'p',
  rackingType: 'rack',
  rackLevels: 'lvl',
  aisleType: 'aisle',
  includeOpsArea: 'ops',
  rentPerSqFt: 'rent',
  // snow
  groundSnowLoad: 'pg',
  roofSlope: 'slope',
  exposureCategory: 'ce',
  thermalCategory: 'ct',
  riskCategory: 'is',
  roofArea: 'rarea',
  includeDrift: 'drift',
  upperRoofLength: 'lu',
  lowerToUpperHeight: 'hc',
  roofSurface: 'surf',
  driftType: 'dtype',
  winterWindParam: 'w2',
  // square footage
  shape: 'shape',
  diameter: 'dia',
  height: 'h',
  base1: 'b1',
  base2: 'b2',
  length2: 'l2',
  width2: 'w2',
  quantity: 'qty',
  coveragePerBox: 'box',
  // siding
  buildingLength: 'bl',
  buildingWidth: 'bw',
  wallHeight: 'wh',
  heightBasis: 'hb',
  gableShape: 'gs',
  gableWidth: 'gw',
  gableHeight: 'gh',
  gambrelLowerHeight: 'glh',
  gambrelBreakWidth: 'gbw',
  gableCount: 'gc',
  doorCount: 'dc',
  windowCount: 'wc',
  garageDoorCount: 'gdc',
  customDoorWidth: 'cdw',
  customDoorHeight: 'cdh',
  customDoorCount: 'cdc',
  customWindowWidth: 'cww',
  customWindowHeight: 'cwh',
  customWindowCount: 'cwc',
  customOpeningArea: 'coa',
  sidingMaterial: 'mat',
  panelLengthFt: 'pl',
  panelWidthInches: 'pw',
  // Stair Calculator
  totalRise: 'tr',
  targetRiserHeight: 'rh',
  targetTreadDepth: 'td',
  stairWidth: 'sw',
  buildingCode: 'code',
  mountingStyle: 'mount',
  nosingLength: 'nose',
  stringerSpacing: 'ss',
  floorJoistThickness: 'fjt',
  minHeadroom: 'hr',
  balusterSpacing: 'bs',
  // Sod Calculator
  sodType: 'stype',
  rollSize: 'roll',
  rollsPerPallet: 'rpp',
  includeSoilPrep: 'soil',
  soilDepth: 'sd',
  pricePerSoilCuYd: 'soilprice',
  irregularArea: 'ia',
  // Insulation Calculator
  application: 'app',
  framingSpacing: 'spacing',
  climateZone: 'zone',
  targetRValue: 'rval',
  existingRValue: 'existr',
  materialType: 'mat',
  coveragePerPack: 'pack',
  pricingMode: 'pmode',
  pricePerPack: 'ppack',
  pricePerBoardFoot: 'pbdft',
  pricePerUnit: 'price',
  includeVaporBarrier: 'vb',
  // Water Softener
  people: 'ppl',
  hardness: 'hard',
  hardnessUnit: 'hunit',
  iron: 'fe',
  manganese: 'mn',
  regenDays: 'regen',
  reservePercent: 'res',
  gallonsPerPersonPerDay: 'gpd',
  bathrooms: 'bath',
  saltType: 'salt',
  saltCostPerBag: 'saltcost',
  // Electrical Load
  squareFootage: 'sqft',
  smallApplianceCircuits: 'sabc',
  hasLaundryCircuit: 'laundry',
  cookingType: 'cook',
  rangeWatts: 'rangew',
  waterHeaterType: 'wh',
  waterHeaterWatts: 'whw',
  dryerType: 'dryer',
  dryerWatts: 'dryerw',
  hasDishwasher: 'dw',
  dishwasherWatts: 'dww',
  hasDisposal: 'disp',
  disposalWatts: 'dispw',
  hasMicrowave: 'mw',
  microwaveWatts: 'mww',
  evChargerAmps: 'ev',
  hasHotTubSpa: 'spa',
  hotTubWatts: 'spaw',
  hasWellPump: 'pump',
  wellPumpWatts: 'pumpw',
  otherFixedWatts: 'otherw',
  acType: 'ac',
  acWatts: 'acw',
  heatType: 'heat',
  heatWatts: 'heatw',
  existingPanelRating: 'panel',
  // deck footing
  deckLength: 'len',
  deckWidth: 'wid',
  deckShape: 'shape',
  liveLoad: 'live',
  deadLoad: 'dead',
  snowLoad: 'snow',
  soilBearing: 'soil',
  postRows: 'rows',
  postsPerRow: 'ppr',
  footingShape: 'fshape',
  footingDepth: 'fdepth',
  includeBeam: 'beam',
  // concrete block
  wallLength: 'wlen',
  blockSize: 'bsize',
  openingsArea: 'opn',
  groutFill: 'grout',
  includeRebar: 'rebar',
  rebarSpacing: 'rspc',
  includeBondBeam: 'bbeam',
  pricePerBlock: 'pblk',
  mortarPricePerBag: 'pmort',
  groutPricePerCuYd: 'pgrt',
  // bathroom remodel
  bathroomType: 'btype',
  roomLength: 'blen',
  roomWidth: 'bwid',
  finishTier: 'tier',
  layoutChange: 'layout',
  includeTileShower: 'shwr',
  includeFreestandingTub: 'tub',
  includeDoubleVanity: 'dvan',
  includeHeatedFloor: 'heat',
  diyDemolition: 'diyd',
  region: 'reg',
  // battery backup
  refrigeratorWatts: 'rfgw',
  lightsWatts: 'ltw',
  medicalDeviceWatts: 'mdw',
  otherWatts: 'otw',
  desiredRuntimeHours: 'rth',
  batteryChemistry: 'chem',
  systemVoltage: 'volt',
  inverterEfficiency: 'ieff',
  depthOfDischarge: 'dod',
  temperatureDerating: 'tdeg',
  includeSolarRecharge: 'sol',
  peakSunHours: 'psh',
  pricePerKwh: 'ppkwh',
  inverterCostEstimate: 'invC',
  // home inspection
  homeArea: 'harea',
  propertyType: 'hprop',
  homeAge: 'hage',
  foundation: 'hfnd',
  includeRadon: 'radon',
  includeMold: 'mold',
  includeSewerScope: 'sewer',
  includeTermite: 'wdi',
  includeWellWater: 'well',
  rushService: 'rush',
  priceOverride: 'hfee',
};

export interface MasterCalculatorProps {
  tool: ToolConfig;
  initialValues?: Partial<AsphaltFormValues>;
}

export function MasterCalculator({ tool, initialValues = {} }: MasterCalculatorProps) {
  const formShellId = useId();
  const pathname = usePathname();
  const { locale, t } = useLanguage();
  const localized = getLocalizedTool(tool.slug, locale);

  const [units, setUnits] = useState<'imperial' | 'metric'>(
    initialValues.units ?? tool.defaultUnits
  );

  const [currencyCode, setCurrencyCode] = useState<string>(() => {
    if (initialValues.currency) return initialValues.currency;
    return getDefaultCurrencyForLocale(locale).code;
  });

  const activeCurrency = useMemo(() => getCurrency(currencyCode), [currencyCode]);

  // When language changes, update default currency if user hasn't explicitly set one via URL
  useEffect(() => {
    if (!initialValues.currency) {
      setCurrencyCode(getDefaultCurrencyForLocale(locale).code);
    }
  }, [locale, initialValues.currency]);

  const [values, setValues] = useState<Record<string, number | string | boolean>>(() => {
    const defaults: Record<string, number | string | boolean> = {};
    tool.inputs.forEach((input: InputField) => {
      const fromUrl = (initialValues as any)[input.id];
      if (fromUrl !== undefined) {
        defaults[input.id] = fromUrl;
      } else if (input.type === 'toggle') {
        defaults[input.id] = Boolean(input.defaultValue);
      } else {
        defaults[input.id] = input.defaultValue;
      }
    });
    return defaults;
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Show the Imperial ↔ Metric toggle only for tools that have at least one
  // dimensional input (ft, m, in, cm, sq ft, etc.). Calculators like Battery
  // Backup and Water Softener use only universal units and don't need the toggle.
  const hasDimensionalInputs = tool.inputs.some(
    (input) => input.unit != null && DIMENSIONAL_UNITS.has(input.unit)
  );

  function syncUrl(currentValues: Record<string, number | string | boolean>, currentUnits: string, currentCurr: string) {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams();
      for (const [inputKey, paramKey] of Object.entries(PARAM_MAP)) {
        const v = currentValues[inputKey];
        if (v !== undefined && v !== '' && v !== null) {
          params.set(paramKey, String(v));
        }
      }
      params.set('units', currentUnits);
      params.set('curr', currentCurr);

      const qs = params.toString();
      const nextUrl = qs ? `${pathname}?${qs}` : pathname;
      window.history.replaceState(null, '', nextUrl);
    }, DEBOUNCE_MS);
  }

  function handleInputChange(id: string, raw: string) {
    const input = tool.inputs.find((i) => i.id === id);
    let nextValue: number | string | boolean;

    if (input?.type === 'select') {
      nextValue = raw;
    } else if (input?.type === 'toggle') {
      nextValue = raw === 'true';
    } else {
      nextValue = raw === '' ? '' : Number(raw);
    }

    const nextValues = { ...values, [id]: nextValue };
    setValues(nextValues);
    syncUrl(nextValues, units, currencyCode);
  }

  function handleCurrencyChange(code: string) {
    setCurrencyCode(code);
    syncUrl(values, units, code);
  }

  function handleUnitsChange(newUnits: 'imperial' | 'metric') {
    if (newUnits === units) return;
    setUnits(newUnits);

    const toMetric = newUnits === 'metric';
    const nextValues = { ...values };

    tool.inputs.forEach((input) => {
      const v = nextValues[input.id];
      if (typeof v !== 'number' || isNaN(v)) return;

      // Feet <-> Meters
      if (
        [
          'length', 'width', 'buildingLength', 'buildingWidth', 'wallHeight',
          'gableWidth', 'gableHeight', 'gambrelLowerHeight', 'gambrelBreakWidth',
          'customDoorWidth', 'customDoorHeight', 'customWindowWidth', 'customWindowHeight',
          'panelLengthFt', 'deckLength', 'deckWidth', 'upperRoofLength', 'lowerToUpperHeight',
          'roomLength', 'roomWidth', 'beddingDepth', 'diameter', 'height', 'base1', 'base2', 'length2', 'width2',
          'wallLength', 'gutterLength', 'perimeter', 'crackLength'
        ].includes(input.id) || (input.unit === 'ft' || input.unit === 'm')
      ) {
        nextValues[input.id] = toMetric
          ? Math.round(v * 0.3048 * 10) / 10
          : Math.round((v / 0.3048) * 10) / 10;
      }
      // Inches <-> Centimeters
      else if (
        [
          'depth', 'panelWidthInches', 'footingDepth', 'thickness', 'soilDepth',
          'totalRise', 'targetRiserHeight', 'targetTreadDepth', 'stairWidth',
          'nosingLength', 'stringerSpacing', 'floorJoistThickness', 'minHeadroom'
        ].includes(input.id) || (input.unit === 'in' || input.unit === 'cm')
      ) {
        nextValues[input.id] = toMetric
          ? Math.round(v * 2.54 * 10) / 10
          : Math.round((v / 2.54) * 10) / 10;
      }
      // Area: sq ft <-> m²
      else if (
        ['area', 'squareFootage', 'roofArea', 'coveragePerBox', 'customOpeningArea', 'coveragePerPack', 'openingsArea', 'homeArea', 'irregularArea', 'rollSize', 'basementArea'].includes(input.id) ||
        (input.unit === 'sq ft' || input.unit === 'm²' || input.unit === 'sq m')
      ) {
        nextValues[input.id] = toMetric
          ? Math.round(v * 0.092903 * 100) / 100
          : Math.round((v / 0.092903) * 100) / 100;
      }
      // Density: lb/ft³ <-> kg/m³
      else if (input.id === 'density' || input.unit === 'lb/ft³' || input.unit === 'kg/m³') {
        nextValues[input.id] = toMetric
          ? Math.round(v * 16.0185)
          : Math.round(v / 16.0185);
      }
      // Pressure / Load: psf <-> kPa
      else if (
        ['groundSnowLoad', 'liveLoad', 'deadLoad', 'snowLoad', 'soilBearing'].includes(input.id) ||
        (input.unit === 'psf' || input.unit === 'kPa')
      ) {
        nextValues[input.id] = toMetric
          ? Math.round(v * 0.04788 * 100) / 100
          : Math.round(v / 0.04788);
      }
      // Unit Price: $/sq ft <-> $/m²
      else if (['pricePerSqFt', 'laborCostPerSqFt'].includes(input.id)) {
        nextValues[input.id] = toMetric
          ? Math.round((v / 0.092903) * 100) / 100
          : Math.round(v * 0.092903 * 100) / 100;
      }
      // Unit Price: short ton <-> metric tonne
      else if (input.id === 'pricePerTon') {
        nextValues[input.id] = toMetric
          ? Math.round(v * 1.10231 * 100) / 100
          : Math.round((v / 1.10231) * 100) / 100;
      }
      // Unit Price: $/cu yd <-> $/m³
      else if (['pricePerSoilCuYd', 'pricePerCuYd', 'groutPricePerCuYd'].includes(input.id)) {
        nextValues[input.id] = toMetric
          ? Math.round((v / 0.764555) * 100) / 100
          : Math.round(v * 0.764555 * 100) / 100;
      }
    });

    setValues(nextValues);
    syncUrl(nextValues, newUnits, currencyCode);
  }

  function handleReset() {
    const defaults: Record<string, number | string | boolean> = {};
    tool.inputs.forEach((input: InputField) => {
      if (input.type === 'toggle') {
        defaults[input.id] = Boolean(input.defaultValue);
      } else {
        defaults[input.id] = input.defaultValue;
      }
    });
    setValues(defaults);
    setErrors({});
    setUnits(tool.defaultUnits);
    syncUrl(defaults, tool.defaultUnits, currencyCode);
  }

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const resultValues = useMemo(() => {
    const formula = getFormula(tool.formulaId);
    if (!formula) return {};

    try {
      if (tool.formulaId === 'asphalt') {
        const candidate = {
          length: Number(values.length ?? 0),
          width: Number(values.width ?? 0),
          depth: Number(values.depth ?? 0),
          density: Number(values.density ?? 145),
          waste: Number(values.waste ?? 0),
          pricePerTon:
            values.pricePerTon === '' || values.pricePerTon === undefined
              ? undefined
              : Number(values.pricePerTon),
          units,
          currency: currencyCode,
        };
        const parsed = asphaltInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'demolition') {
        const candidate = {
          structureType: values.structureType ?? 'house-wood-frame',
          area: Number(values.area ?? 1500),
          stories: Number(values.stories ?? 1),
          method: values.method ?? 'mechanical',
          includeHaul: values.includeHaul !== false && values.includeHaul !== 0,
          includePermit: values.includePermit !== false && values.includePermit !== 0,
          pricePerSqFt:
            values.pricePerSqFt === '' || values.pricePerSqFt === undefined
              ? undefined
              : Number(values.pricePerSqFt),
          permitCost:
            values.permitCost === '' || values.permitCost === undefined
              ? undefined
              : Number(values.permitCost),
          units,
          currency: currencyCode,
        };
        const parsed = demolitionInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'basement-waterproofing') {
        const candidate = {
          basementArea: values.basementArea !== '' && values.basementArea !== undefined ? Number(values.basementArea) : 1000,
          perimeter: values.perimeter !== '' && values.perimeter !== undefined ? Number(values.perimeter) : 130,
          method: (values.method as any) ?? 'interior-drain',
          waterIssue: (values.waterIssue as any) ?? 'active-leaks',
          includeSumpPump: Boolean(values.includeSumpPump && values.includeSumpPump !== 'false'),
          includeCrackRepair: Boolean(values.includeCrackRepair && values.includeCrackRepair !== 'false'),
          crackLength: values.crackLength !== '' && values.crackLength !== undefined ? Number(values.crackLength) : 0,
          includeExcavation: Boolean(values.includeExcavation && values.includeExcavation !== 'false'),
          units,
          currency: currencyCode,
        };
        const parsed = basementWaterproofingInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'gutter-cleaning') {
        const candidate = {
          gutterLength: values.gutterLength !== '' && values.gutterLength !== undefined ? Number(values.gutterLength) : 180,
          stories: values.stories !== '' && values.stories !== undefined ? Number(values.stories) : 2,
          debris: (values.debris as any) ?? 'moderate',
          access: (values.access as any) ?? 'standard',
          includeGuards: Boolean(values.includeGuards && values.includeGuards !== 'false'),
          includeDownspoutFlush: Boolean(values.includeDownspoutFlush && values.includeDownspoutFlush !== 'false'),
          units,
          currency: currencyCode,
        };
        const parsed = gutterCleaningInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'trench') {
        const candidate = {
          length: Number(values.length ?? 50),
          width: Number(values.width ?? 2),
          depth: Number(values.depth ?? 4),
          beddingMaterial: values.beddingMaterial ?? 'gravel',
          beddingDepth: Number(values.beddingDepth ?? 0.5),
          includeSpoilHaul: values.includeSpoilHaul !== false && values.includeSpoilHaul !== 0,
          pricePerCuYd:
            values.pricePerCuYd === '' || values.pricePerCuYd === undefined
              ? undefined
              : Number(values.pricePerCuYd),
          units,
          currency: currencyCode,
        };
        const parsed = trenchInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'warehouse') {
        const candidate = {
          palletCount: Number(values.palletCount ?? 500),
          rackingType: values.rackingType ?? 'selective',
          rackLevels: Number(values.rackLevels ?? 4),
          aisleType: values.aisleType ?? 'wide',
          includeOpsArea: values.includeOpsArea !== false && values.includeOpsArea !== 0,
          rentPerSqFt:
            values.rentPerSqFt === '' || values.rentPerSqFt === undefined
              ? undefined
              : Number(values.rentPerSqFt),
          units,
          currency: currencyCode,
        };
        const parsed = warehouseInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'snow') {
        const candidate = {
          groundSnowLoad:     Number(values.groundSnowLoad ?? 25),
          roofSlope:          Number(values.roofSlope ?? 0),
          roofSurface:        values.roofSurface ?? 'non-slippery',
          exposureCategory:   values.exposureCategory ?? 'partial',
          thermalCategory:    values.thermalCategory  ?? 'heated',
          riskCategory:       values.riskCategory     ?? 'cat2',
          roofArea:           Number(values.roofArea  ?? 1500),
          includeDrift: values.includeDrift === true || values.includeDrift === 1,
          upperRoofLength:
            values.upperRoofLength === '' || values.upperRoofLength === undefined
              ? undefined : Number(values.upperRoofLength),
          lowerToUpperHeight:
            values.lowerToUpperHeight === '' || values.lowerToUpperHeight === undefined
              ? undefined : Number(values.lowerToUpperHeight),
          winterWindParam:
            values.winterWindParam === '' || values.winterWindParam === undefined
              ? 1.0 : Number(values.winterWindParam),
          driftType:          values.driftType ?? 'leeward',
          units,
          currency: currencyCode,
        };
        const parsed = snowInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }


      if (tool.formulaId === 'square-footage') {
        const candidate = {
          shape: values.shape ?? 'rectangle',
          length: values.length === '' || values.length === undefined ? undefined : Number(values.length),
          width: values.width === '' || values.width === undefined ? undefined : Number(values.width),
          diameter: values.diameter === '' || values.diameter === undefined ? undefined : Number(values.diameter),
          height: values.height === '' || values.height === undefined ? undefined : Number(values.height),
          base1: values.base1 === '' || values.base1 === undefined ? undefined : Number(values.base1),
          base2: values.base2 === '' || values.base2 === undefined ? undefined : Number(values.base2),
          length2: values.length2 === '' || values.length2 === undefined ? undefined : Number(values.length2),
          width2: values.width2 === '' || values.width2 === undefined ? undefined : Number(values.width2),
          quantity: Number(values.quantity ?? 1),
          waste: Number(values.waste ?? 10),
          coveragePerBox:
            values.coveragePerBox === '' || values.coveragePerBox === undefined
              ? undefined : Number(values.coveragePerBox),
          pricePerSqFt:
            values.pricePerSqFt === '' || values.pricePerSqFt === undefined
              ? undefined : Number(values.pricePerSqFt),
          units,
          currency: currencyCode,
        };
        const parsed = squareFootageInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'siding') {
        const n = (k: string, def: number) => {
          const v = values[k];
          return v === '' || v === undefined ? def : Number(v);
        };
        const candidate = {
          buildingLength:     n('buildingLength', 40),
          buildingWidth:      n('buildingWidth', 30),
          wallHeight:         n('wallHeight', 9),
          heightBasis:        values.heightBasis ?? 'total-wall',
          stories:            n('stories', 1),
          outsideCorners:     n('outsideCorners', 4),
          gableShape:         values.gableShape ?? 'triangle',
          gableWidth:         values.gableWidth === '' || values.gableWidth === undefined ? undefined : n('gableWidth', 30),
          gableHeight:        values.gableHeight === '' || values.gableHeight === undefined ? undefined : n('gableHeight', 5),
          gambrelLowerHeight: values.gambrelLowerHeight === '' || values.gambrelLowerHeight === undefined ? undefined : n('gambrelLowerHeight', 3),
          gambrelBreakWidth:  values.gambrelBreakWidth === '' || values.gambrelBreakWidth === undefined ? undefined : n('gambrelBreakWidth', 22),
          gableCount:         n('gableCount', 2),
          doorCount:          n('doorCount', 0),
          windowCount:        n('windowCount', 0),
          garageDoorCount:    n('garageDoorCount', 0),
          customDoorWidth:    values.customDoorWidth === '' || values.customDoorWidth === undefined ? undefined : n('customDoorWidth', 0),
          customDoorHeight:   values.customDoorHeight === '' || values.customDoorHeight === undefined ? undefined : n('customDoorHeight', 0),
          customDoorCount:    values.customDoorCount === '' || values.customDoorCount === undefined ? undefined : n('customDoorCount', 0),
          customWindowWidth:  values.customWindowWidth === '' || values.customWindowWidth === undefined ? undefined : n('customWindowWidth', 0),
          customWindowHeight: values.customWindowHeight === '' || values.customWindowHeight === undefined ? undefined : n('customWindowHeight', 0),
          customWindowCount:  values.customWindowCount === '' || values.customWindowCount === undefined ? undefined : n('customWindowCount', 0),
          customOpeningArea:  values.customOpeningArea === '' || values.customOpeningArea === undefined ? undefined : n('customOpeningArea', 0),
          sidingMaterial:     values.sidingMaterial ?? 'vinyl',
          waste:              n('waste', 10),
          panelLengthFt:      values.panelLengthFt === '' || values.panelLengthFt === undefined ? undefined : n('panelLengthFt', 12),
          panelWidthInches:   values.panelWidthInches === '' || values.panelWidthInches === undefined ? undefined : n('panelWidthInches', 6),
          coveragePerBox:     values.coveragePerBox === '' || values.coveragePerBox === undefined ? undefined : n('coveragePerBox', 0),
          pricePerSqFt:       values.pricePerSqFt === '' || values.pricePerSqFt === undefined ? undefined : n('pricePerSqFt', 0),
          units,
          currency: currencyCode,
        };
        const parsed = sidingInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'stairs') {
        const n = (k: string, def: number) => {
          const v = values[k];
          return v === '' || v === undefined ? def : Number(v);
        };
        const candidate = {
          totalRise:           n('totalRise', 105),
          buildingCode:        values.buildingCode ?? 'irc-residential',
          mountingStyle:       values.mountingStyle ?? 'down-one-riser',
          targetRiserHeight:   values.targetRiserHeight === '' || values.targetRiserHeight === undefined ? undefined : n('targetRiserHeight', 7.5),
          targetTreadDepth:    values.targetTreadDepth === '' || values.targetTreadDepth === undefined ? undefined : n('targetTreadDepth', 10.5),
          stairWidth:          values.stairWidth === '' || values.stairWidth === undefined ? undefined : n('stairWidth', 36),
          nosingLength:        values.nosingLength === '' || values.nosingLength === undefined ? undefined : n('nosingLength', 1.0),
          treadThickness:      values.treadThickness === '' || values.treadThickness === undefined ? undefined : n('treadThickness', 1.0),
          stringerSpacing:     values.stringerSpacing === '' || values.stringerSpacing === undefined ? undefined : n('stringerSpacing', 16),
          floorJoistThickness: values.floorJoistThickness === '' || values.floorJoistThickness === undefined ? undefined : n('floorJoistThickness', 10.5),
          minHeadroom:         values.minHeadroom === '' || values.minHeadroom === undefined ? undefined : n('minHeadroom', 80),
          includeRailing:      values.includeRailing === true || values.includeRailing === 1,
          balusterSpacing:     values.balusterSpacing === '' || values.balusterSpacing === undefined ? undefined : n('balusterSpacing', 4),
          pricePerStep:        values.pricePerStep === '' || values.pricePerStep === undefined ? undefined : n('pricePerStep', 0),
          units,
          currency: currencyCode,
        };
        const parsed = stairInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'sod') {
        const n = (k: string, def: number) => {
          const v = values[k];
          return v === '' || v === undefined ? def : Number(v);
        };
        const candidate = {
          shape:               values.shape ?? 'rectangle',
          length:              values.length === '' || values.length === undefined ? undefined : Number(values.length),
          width:               values.width === '' || values.width === undefined ? undefined : Number(values.width),
          diameter:            values.diameter === '' || values.diameter === undefined ? undefined : Number(values.diameter),
          height:              values.height === '' || values.height === undefined ? undefined : Number(values.height),
          base1:               values.base1 === '' || values.base1 === undefined ? undefined : Number(values.base1),
          base2:               values.base2 === '' || values.base2 === undefined ? undefined : Number(values.base2),
          length2:             values.length2 === '' || values.length2 === undefined ? undefined : Number(values.length2),
          width2:              values.width2 === '' || values.width2 === undefined ? undefined : Number(values.width2),
          irregularArea:       values.irregularArea === '' || values.irregularArea === undefined ? undefined : Number(values.irregularArea),
          quantity:            n('quantity', 1),
          waste:               n('waste', 10),
          sodType:             values.sodType ?? 'fescue',
          rollSize:            values.rollSize === '' || values.rollSize === undefined ? undefined : Number(values.rollSize),
          rollsPerPallet:      values.rollsPerPallet === '' || values.rollsPerPallet === undefined ? undefined : Number(values.rollsPerPallet),
          pricePerSqFt:        values.pricePerSqFt === '' || values.pricePerSqFt === undefined ? undefined : Number(values.pricePerSqFt),
          includeSoilPrep:     values.includeSoilPrep === true || values.includeSoilPrep === 1,
          soilDepth:           values.soilDepth === '' || values.soilDepth === undefined ? undefined : Number(values.soilDepth),
          pricePerSoilCuYd:    values.pricePerSoilCuYd === '' || values.pricePerSoilCuYd === undefined ? undefined : Number(values.pricePerSoilCuYd),
          units,
          currency: currencyCode,
        };
        const parsed = sodInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'insulation') {
        const n = (k: string, def: number) => {
          const v = values[k];
          return v === '' || v === undefined ? def : Number(v);
        };
        const candidate = {
          application:         (values.application as any) ?? 'attic',
          area:                n('area', 1000),
          framingSpacing:      (values.framingSpacing as any) || (values.application === 'attic' ? 'continuous' : '16-oc'),
          climateZone:         (values.climateZone as any) ?? 'zone-4',
          targetRValue:        values.targetRValue === '' || values.targetRValue === undefined ? undefined : Number(values.targetRValue),
          existingRValue:      values.existingRValue === '' || values.existingRValue === undefined ? undefined : Number(values.existingRValue),
          materialType:        (values.materialType as any) ?? 'fiberglass-batt',
          waste:               n('waste', 8),
          coveragePerPack:     values.coveragePerPack === '' || values.coveragePerPack === undefined ? undefined : Number(values.coveragePerPack),
          pricingMode:         (values.pricingMode as any) ?? 'per-sqft',
          pricePerSqFt:        values.pricePerSqFt === '' || values.pricePerSqFt === undefined ? undefined : Number(values.pricePerSqFt),
          pricePerPack:        values.pricePerPack === '' || values.pricePerPack === undefined ? undefined : Number(values.pricePerPack),
          pricePerBoardFoot:   values.pricePerBoardFoot === '' || values.pricePerBoardFoot === undefined ? undefined : Number(values.pricePerBoardFoot),
          pricePerUnit:        values.pricePerUnit === '' || values.pricePerUnit === undefined ? undefined : Number(values.pricePerUnit),
          laborCostPerSqFt:    values.laborCostPerSqFt === '' || values.laborCostPerSqFt === undefined ? undefined : Number(values.laborCostPerSqFt),
          includeVaporBarrier: values.includeVaporBarrier === true || values.includeVaporBarrier === 1,
          units,
          currency: currencyCode,
        };
        const parsed = insulationInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'spray-foam') {
        const n = (k: string, def: number) => {
          const v = values[k];
          return v === '' || v === undefined ? def : Number(v);
        };
        const candidate = {
          application:                 (values.application as any) ?? 'roof-deck-attic',
          area:                        n('area', 1000),
          foamType:                    (values.foamType as any) ?? 'closed-cell-2lb',
          thickness:                   values.thickness === '' || values.thickness === undefined ? undefined : Number(values.thickness),
          targetRValue:                values.targetRValue === '' || values.targetRValue === undefined ? undefined : Number(values.targetRValue),
          framingSpacing:              (values.framingSpacing as any) ?? 'continuous',
          oversprayWaste:              n('oversprayWaste', 10),
          pricingMode:                 (values.pricingMode as any) ?? 'per-board-foot',
          pricePerBoardFoot:           values.pricePerBoardFoot === '' || values.pricePerBoardFoot === undefined ? undefined : Number(values.pricePerBoardFoot),
          pricePerSqFt:                values.pricePerSqFt === '' || values.pricePerSqFt === undefined ? undefined : Number(values.pricePerSqFt),
          pricePerKit:                 values.pricePerKit === '' || values.pricePerKit === undefined ? undefined : Number(values.pricePerKit),
          pricePerDrumSet:             values.pricePerDrumSet === '' || values.pricePerDrumSet === undefined ? undefined : Number(values.pricePerDrumSet),
          pricePerUnit:                values.pricePerUnit === '' || values.pricePerUnit === undefined ? undefined : Number(values.pricePerUnit),
          laborCostPerSqFt:            values.laborCostPerSqFt === '' || values.laborCostPerSqFt === undefined ? undefined : Number(values.laborCostPerSqFt),
          includeThermalBarrier:       values.includeThermalBarrier === true || values.includeThermalBarrier === 1,
          includeOldInsulationRemoval: values.includeOldInsulationRemoval === true || values.includeOldInsulationRemoval === 1,
          units,
          currency: currencyCode,
        };
        const parsed = sprayFoamInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'water-softener') {
        const n = (k: string, def: number) => {
          const v = values[k];
          return v === '' || v === undefined ? def : Number(v);
        };
        const candidate = {
          people:                 n('people', 4),
          hardness:               n('hardness', 25),
          hardnessUnit:           (values.hardnessUnit as any) ?? 'gpg',
          iron:                   n('iron', 0),
          manganese:              n('manganese', 0),
          bathrooms:              n('bathrooms', 2),
          regenDays:              n('regenDays', 7),
          reservePercent:         n('reservePercent', 20),
          gallonsPerPersonPerDay: n('gallonsPerPersonPerDay', 75),
          saltType:               (values.saltType as any) ?? 'evaporated-pellets',
          saltCostPerBag:         values.saltCostPerBag === '' || values.saltCostPerBag === undefined ? undefined : Number(values.saltCostPerBag),
          units,
          currency:               currencyCode,
        };
        const parsed = waterSoftenerInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'electrical-load') {
        const n = (k: string, def: number) => {
          const v = values[k];
          return v === '' || v === undefined ? def : Number(v);
        };
        const candidate = {
          squareFootage:          n('squareFootage', 2000),
          smallApplianceCircuits: n('smallApplianceCircuits', 2),
          hasLaundryCircuit:      values.hasLaundryCircuit !== false && values.hasLaundryCircuit !== 0,
          cookingType:            (values.cookingType as any) ?? 'electric-range',
          rangeWatts:             n('rangeWatts', 12000),
          waterHeaterType:        (values.waterHeaterType as any) ?? 'electric-tank',
          waterHeaterWatts:       n('waterHeaterWatts', 4500),
          dryerType:              (values.dryerType as any) ?? 'electric-dryer',
          dryerWatts:             n('dryerWatts', 5000),
          hasDishwasher:          values.hasDishwasher !== false && values.hasDishwasher !== 0,
          dishwasherWatts:        n('dishwasherWatts', 1200),
          hasDisposal:            values.hasDisposal !== false && values.hasDisposal !== 0,
          disposalWatts:          n('disposalWatts', 800),
          hasMicrowave:           values.hasMicrowave !== false && values.hasMicrowave !== 0,
          microwaveWatts:         n('microwaveWatts', 1200),
          evChargerAmps:          (values.evChargerAmps as any) ?? '48a-115kw',
          hasHotTubSpa:           values.hasHotTubSpa === true || values.hasHotTubSpa === 1,
          hotTubWatts:            n('hotTubWatts', 8000),
          hasWellPump:            values.hasWellPump === true || values.hasWellPump === 1,
          wellPumpWatts:          n('wellPumpWatts', 2000),
          otherFixedWatts:        values.otherFixedWatts === '' || values.otherFixedWatts === undefined ? 0 : Number(values.otherFixedWatts),
          acType:                 (values.acType as any) ?? 'central-ac-heatpump',
          acWatts:                n('acWatts', 5000),
          heatType:               (values.heatType as any) ?? 'heat-pump-electric-aux',
          heatWatts:              n('heatWatts', 10000),
          existingPanelRating:    (values.existingPanelRating as any) ?? '200a',
          units,
          currency:               currencyCode,
        };
        const parsed = electricalLoadInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'deck-footing') {
        const n = (k: string, def: number) => {
          const v = values[k];
          return v === '' || v === undefined ? def : Number(v);
        };
        const candidate = {
          deckLength:           n('deckLength', 16),
          deckWidth:            n('deckWidth', 12),
          deckShape:            (values.deckShape as any) ?? 'rectangle',
          liveLoad:             n('liveLoad', 40),
          deadLoad:             n('deadLoad', 10),
          snowLoad:             n('snowLoad', 0),
          soilBearing:          (values.soilBearing as any) ?? 'sandy-loam-2500',
          postRows:             n('postRows', 2),
          postsPerRow:          n('postsPerRow', 3),
          footingShape:         (values.footingShape as any) ?? 'round',
          footingDepth:         n('footingDepth', 12),
          includeBeam:          values.includeBeam === true || values.includeBeam === 1,
          units,
          currency:             currencyCode,
        };
        const parsed = deckFootingInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'concrete-block') {
        const n = (k: string, def: number) => {
          const v = values[k];
          return v === '' || v === undefined ? def : Number(v);
        };
        const candidate = {
          wallLength:        n('wallLength', 20),
          wallHeight:        n('wallHeight', 8),
          blockSize:         (values.blockSize as any) ?? '8x8x16',
          openingsArea:      n('openingsArea', 0),
          waste:             n('waste', 5),
          groutFill:         (values.groutFill as any) ?? 'none',
          includeRebar:      values.includeRebar !== false && values.includeRebar !== 0,
          rebarSpacing:      (values.rebarSpacing as any) ?? '32',
          includeBondBeam:   values.includeBondBeam !== false && values.includeBondBeam !== 0,
          pricePerBlock:     values.pricePerBlock ? Number(values.pricePerBlock) : undefined,
          mortarPricePerBag: values.mortarPricePerBag ? Number(values.mortarPricePerBag) : undefined,
          groutPricePerCuYd: values.groutPricePerCuYd ? Number(values.groutPricePerCuYd) : undefined,
          units,
          currency:          currencyCode,
        };
        const parsed = concreteBlockInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'bathroom-remodel') {
        const candidate = {
          bathroomType:           (values.bathroomType as any) ?? 'full',
          roomLength:             values.roomLength !== '' && values.roomLength !== undefined ? Number(values.roomLength) : 8,
          roomWidth:              values.roomWidth !== '' && values.roomWidth !== undefined ? Number(values.roomWidth) : 6,
          finishTier:             (values.finishTier as any) ?? 'mid-range',
          layoutChange:           (values.layoutChange as any) ?? 'none',
          includeTileShower:      values.includeTileShower !== false && values.includeTileShower !== 0 && values.includeTileShower !== 'false',
          includeFreestandingTub: Boolean(values.includeFreestandingTub && values.includeFreestandingTub !== 'false'),
          includeDoubleVanity:    Boolean(values.includeDoubleVanity && values.includeDoubleVanity !== 'false'),
          includeHeatedFloor:     Boolean(values.includeHeatedFloor && values.includeHeatedFloor !== 'false'),
          diyDemolition:          Boolean(values.diyDemolition && values.diyDemolition !== 'false'),
          region:                 (values.region as any) ?? 'us-national',
          units,
          currency:               currencyCode,
        };
        const parsed = bathroomRemodelInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'battery-backup') {
        const candidate = {
          refrigeratorWatts:    values.refrigeratorWatts !== '' && values.refrigeratorWatts !== undefined ? Number(values.refrigeratorWatts) : 150,
          lightsWatts:          values.lightsWatts !== '' && values.lightsWatts !== undefined ? Number(values.lightsWatts) : 200,
          wellPumpWatts:        values.wellPumpWatts !== '' && values.wellPumpWatts !== undefined ? Number(values.wellPumpWatts) : 0,
          medicalDeviceWatts:   values.medicalDeviceWatts !== '' && values.medicalDeviceWatts !== undefined ? Number(values.medicalDeviceWatts) : 0,
          otherWatts:           values.otherWatts !== '' && values.otherWatts !== undefined ? Number(values.otherWatts) : 0,
          desiredRuntimeHours:  values.desiredRuntimeHours !== '' && values.desiredRuntimeHours !== undefined ? Number(values.desiredRuntimeHours) : 8,
          batteryChemistry:     (values.batteryChemistry as any) ?? 'lifepo4',
          systemVoltage:        (values.systemVoltage as any) ?? '48v',
          inverterEfficiency:   values.inverterEfficiency !== '' && values.inverterEfficiency !== undefined ? Number(values.inverterEfficiency) : 93,
          depthOfDischarge:     values.depthOfDischarge !== '' && values.depthOfDischarge !== undefined ? Number(values.depthOfDischarge) : 80,
          temperatureDerating:  (values.temperatureDerating as any) ?? 'none',
          includeSolarRecharge: Boolean(values.includeSolarRecharge && values.includeSolarRecharge !== 'false'),
          peakSunHours:         values.peakSunHours !== '' && values.peakSunHours !== undefined ? Number(values.peakSunHours) : 5,
          pricePerKwh:          values.pricePerKwh !== '' && values.pricePerKwh !== undefined ? Number(values.pricePerKwh) : undefined,
          inverterCostEstimate: values.inverterCostEstimate !== '' && values.inverterCostEstimate !== undefined ? Number(values.inverterCostEstimate) : undefined,
          units,
          currency:             currencyCode,
        };
        const parsed = batteryBackupInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      if (tool.formulaId === 'home-inspection') {
        const candidate = {
          homeArea:          values.homeArea !== '' && values.homeArea !== undefined ? Number(values.homeArea) : 2000,
          propertyType:      (values.propertyType as any) ?? 'single-family',
          homeAge:           (values.homeAge as any) ?? 'age-11-25',
          foundation:        (values.foundation as any) ?? 'slab',
          region:            (values.region as any) ?? 'us-national',
          includeRadon:      Boolean(values.includeRadon && values.includeRadon !== 'false'),
          includeMold:       Boolean(values.includeMold && values.includeMold !== 'false'),
          includeSewerScope: Boolean(values.includeSewerScope && values.includeSewerScope !== 'false'),
          includeTermite:    Boolean(values.includeTermite && values.includeTermite !== 'false'),
          includeWellWater:  Boolean(values.includeWellWater && values.includeWellWater !== 'false'),
          rushService:       Boolean(values.rushService && values.rushService !== 'false'),
          priceOverride:     values.priceOverride !== '' && values.priceOverride !== undefined ? Number(values.priceOverride) : undefined,
          units,
          currency:          currencyCode,
        };
        const parsed = homeInspectionInputSchema.safeParse(candidate);
        if (!parsed.success) return {};
        return formula(parsed.data);
      }

      return {};
    } catch {
      return {};
    }
  }, [tool.formulaId, values, units, currencyCode]);

  return (
    <div id={formShellId} className="calc-shell-skeleton grid gap-8 lg:grid-cols-12 items-start">
      <div className="calc-print-area lg:col-span-7 rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 lg:p-8 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
              <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              {t.calculator.yourProject}
            </h2>
          </div>
          {hasDimensionalInputs && <UnitToggle value={units} onChange={handleUnitsChange} />}
        </div>

        {tool.formulaId === 'siding' && (
          <SidingVisualizer
            buildingLength={Number(values.buildingLength ?? 40)}
            buildingWidth={Number(values.buildingWidth ?? 30)}
            wallHeight={Number(values.wallHeight ?? 9)}
            gableShape={(values.gableShape as any) ?? 'triangle'}
            gableHeight={Number(values.gableHeight ?? 5)}
            doorCount={Number(values.doorCount ?? 2)}
            windowCount={Number(values.windowCount ?? 8)}
            garageDoorCount={Number(values.garageDoorCount ?? 1)}
            units={units}
            sidingMaterial={String(values.sidingMaterial ?? 'vinyl')}
          />
        )}

        {tool.formulaId === 'stairs' && (
          <StairVisualizer
            totalRise={Number(values.totalRise ?? 105)}
            riserCount={Number((resultValues as any).numberOfRisers ?? 14)}
            riserHeight={Number((resultValues as any).exactRiserHeight ?? 7.5)}
            treadDepth={Number((resultValues as any).exactTreadDepth ?? 10.5)}
            stairAngle={Number((resultValues as any).stairAngle ?? 35.5)}
            stringerLengthFeet={Number((resultValues as any).stringerLengthFeet ?? 14)}
            headroomOpening={Number((resultValues as any).headroomOpeningLength ?? 110)}
            blondelValue={Number((resultValues as any).blondelComfortValue ?? 24.5)}
            isCodeCompliant={Boolean((resultValues as any).isCodeCompliant ?? true)}
            units={units}
          />
        )}

        {tool.formulaId === 'asphalt' && (
          <AsphaltVisualizer
            length={Number(values.length ?? 20)}
            width={Number(values.width ?? 10)}
            depth={Number(values.depth ?? 4)}
            density={Number(values.density ?? 145)}
            waste={Number(values.waste ?? 5)}
            units={units}
          />
        )}

        {tool.formulaId === 'demolition' && (
          <DemolitionVisualizer
            structureType={String(values.structureType ?? 'house-wood-frame')}
            area={Number(values.area ?? 1500)}
            stories={Number(values.stories ?? 1)}
            method={String(values.method ?? 'mechanical')}
            includeHaul={Boolean(values.includeHaul ?? true)}
            dumpsterLoads={Number((resultValues as any).dumpsterLoads ?? 1)}
            units={units}
          />
        )}

        {tool.formulaId === 'trench' && (
          <TrenchVisualizer
            length={Number(values.length ?? 50)}
            width={Number(values.width ?? 2)}
            depth={Number(values.depth ?? 4)}
            beddingMaterial={String(values.beddingMaterial ?? 'gravel')}
            beddingDepth={Number(values.beddingDepth ?? 0.5)}
            includeSpoilHaul={Boolean(values.includeSpoilHaul ?? true)}
            truckLoads={Number((resultValues as any).truckLoads ?? 1)}
            units={units}
          />
        )}

        {tool.formulaId === 'warehouse' && (
          <WarehouseVisualizer
            palletCount={Number(values.palletCount ?? 500)}
            rackingType={String(values.rackingType ?? 'selective')}
            rackLevels={Number(values.rackLevels ?? 4)}
            aisleType={String(values.aisleType ?? 'wide')}
            includeOpsArea={Boolean(values.includeOpsArea ?? true)}
            groundPalletPositions={Number((resultValues as any).groundPalletPositions ?? 50)}
            utilizationRate={Number((resultValues as any).utilizationRate ?? 50)}
            units={units}
          />
        )}

        {tool.formulaId === 'snow' && (
          <SnowLoadVisualizer
            groundSnowLoad={Number(values.groundSnowLoad ?? 25)}
            roofSlope={Number(values.roofSlope ?? 0)}
            roofSurface={String(values.roofSurface ?? 'non-slippery')}
            exposureCategory={String(values.exposureCategory ?? 'partial')}
            thermalCategory={String(values.thermalCategory ?? 'heated')}
            riskCategory={String(values.riskCategory ?? 'cat2')}
            roofArea={Number(values.roofArea ?? 1500)}
            includeDrift={Boolean(values.includeDrift ?? false)}
            designSnowLoad={Number((resultValues as any).designSnowLoad ?? 20)}
            driftHeight={Number((resultValues as any).driftHeight ?? 0)}
            driftWidth={Number((resultValues as any).driftWidth ?? 0)}
            units={units}
          />
        )}

        {tool.formulaId === 'square-footage' && (
          <SquareFootageVisualizer
            shape={String(values.shape ?? 'rectangle')}
            length={Number(values.length ?? 15)}
            width={Number(values.width ?? 12)}
            diameter={Number(values.diameter ?? 14)}
            height={Number(values.height ?? 10)}
            base1={Number(values.base1 ?? 16)}
            base2={Number(values.base2 ?? 10)}
            length2={Number(values.length2 ?? 8)}
            width2={Number(values.width2 ?? 6)}
            quantity={Number(values.quantity ?? 1)}
            units={units}
          />
        )}

        {tool.formulaId === 'sod' && (
          <SodVisualizer
            shape={String(values.shape ?? 'rectangle')}
            length={Number(values.length ?? 30)}
            width={Number(values.width ?? 20)}
            diameter={Number(values.diameter ?? 20)}
            height={Number(values.height ?? 15)}
            base1={Number(values.base1 ?? 25)}
            base2={Number(values.base2 ?? 15)}
            length2={Number(values.length2 ?? 12)}
            width2={Number(values.width2 ?? 10)}
            quantity={Number(values.quantity ?? 1)}
            waste={Number(values.waste ?? 10)}
            rollCount={Number((resultValues as any).rollCount ?? 15)}
            palletCount={Number((resultValues as any).palletCount ?? 1)}
            sodType={String(values.sodType ?? 'fescue')}
            units={units}
          />
        )}

        {tool.formulaId === 'insulation' && (
          <InsulationVisualizer
            application={String(values.application ?? 'attic')}
            area={Number(values.area ?? 1000)}
            framingSpacing={String(values.framingSpacing ?? '16-oc')}
            materialType={String(values.materialType ?? 'fiberglass-batt')}
            targetRValue={Number((resultValues as any).effectiveTargetRValue ?? 38)}
            thickness={Number((resultValues as any).requiredThicknessInches ?? 11.2)}
            battPacks={Number((resultValues as any).battPacksNeeded ?? 0)}
            blownBags={Number((resultValues as any).blownBagsNeeded ?? 0)}
            boardFeet={Number((resultValues as any).sprayFoamBoardFeet ?? 0)}
            units={units}
            cavityWarning={(resultValues as any).cavityWarning}
          />
        )}

        {tool.formulaId === 'spray-foam' && (
          <SprayFoamVisualizer
            application={String(values.application ?? 'roof-deck-attic')}
            foamType={String(values.foamType ?? 'closed-cell-2lb')}
            thickness={Number((resultValues as any).appliedThicknessInches ?? values.thickness ?? 3.5)}
            achievedRValue={Number((resultValues as any).achievedRValue ?? 23.5)}
            boardFeet={Number((resultValues as any).boardFeetWithWaste ?? 3500)}
            drumSets={Number((resultValues as any).drumSetsNeeded ?? 1)}
            diyKits={Number((resultValues as any).diyKits600Needed ?? 6)}
            isVaporRetarder={Boolean((resultValues as any).isVaporRetarder)}
            vaporBarrierClass={String((resultValues as any).vaporBarrierClass ?? '')}
            hasThermalBarrier={values.includeThermalBarrier === true || values.includeThermalBarrier === 1}
            units={units}
          />
        )}

        {tool.formulaId === 'water-softener' && (
          <WaterSoftenerVisualizer
            recommendedGrainSize={Number((resultValues as any).recommendedGrainSize ?? 32000)}
            recommendedResinCuFt={Number((resultValues as any).recommendedResinCuFt ?? 1.0)}
            compensatedHardnessGPG={Number((resultValues as any).compensatedHardnessGPG ?? 25)}
            rawHardnessGPG={Number((resultValues as any).rawHardnessGPG ?? 25)}
            hardnessBadge={(resultValues as any).hardnessBadge ?? 'hard'}
            hardnessClassification={String((resultValues as any).hardnessClassification ?? 'Hard')}
            saltLbsPerYear={Number((resultValues as any).saltLbsPerYear ?? 300)}
            regenFrequencyPerYear={Number((resultValues as any).regenFrequencyPerYear ?? 52)}
            dailyWaterUsageGPD={Number((resultValues as any).dailyWaterUsageGPD ?? 300)}
            targetGrainCapacity={Number((resultValues as any).targetGrainCapacity ?? 25200)}
            peakFlowGPM={Number((resultValues as any).peakFlowGPM ?? 10)}
            units={units}
          />
        )}

        {tool.formulaId === 'electrical-load' && (
          <ElectricalLoadVisualizer
            squareFootage={Number(values.squareFootage ?? 2000)}
            calculatedAmperes={Number((resultValues as any).calculatedAmperes ?? 138.5)}
            recommendedServiceAmps={Number((resultValues as any).recommendedServiceAmps ?? 200)}
            totalCalculatedLoadVA={Number((resultValues as any).totalCalculatedLoadVA ?? 33240)}
            totalCalculatedLoadKW={Number((resultValues as any).totalCalculatedLoadKW ?? 33.24)}
            panelUtilizationPercent={Number((resultValues as any).panelUtilizationPercent ?? 69.3)}
            spareCapacityAmperes={Number((resultValues as any).spareCapacityAmperes ?? 61.5)}
            servicePanelStatus={(resultValues as any).servicePanelStatus ?? 'adequate'}
            serviceRecommendation={String((resultValues as any).serviceRecommendation ?? '200A Main Service (120/240V, 1-Phase)')}
            governingHvacType={(resultValues as any).governingHvacType ?? 'heating'}
            copperServiceConductor={String((resultValues as any).copperServiceConductor ?? '#2/0 AWG Cu (75°C)')}
            aluminumServiceConductor={String((resultValues as any).aluminumServiceConductor ?? '#4/0 AWG Al (75°C)')}
            evChargerAmps={String(values.evChargerAmps ?? '48a-115kw')}
            units={units}
          />
        )}

        {tool.formulaId === 'deck-footing' && (
          <DeckFootingVisualizer
            deckLength={Number(values.deckLength ?? 16)}
            deckWidth={Number(values.deckWidth ?? 12)}
            deckShape={(values.deckShape as any) ?? 'rectangle'}
            totalPosts={Number((resultValues as any).totalPosts ?? 6)}
            postRows={Number(values.postRows ?? 2)}
            postsPerRow={Number(values.postsPerRow ?? 3)}
            loadPerPostLbs={Number((resultValues as any).loadPerPostLbs ?? 3200)}
            footingDiameterIn={Number((resultValues as any).footingDiameterIn ?? 12)}
            footingSideIn={Number((resultValues as any).footingSideIn ?? 11)}
            footingShape={(values.footingShape as any) ?? 'round'}
            recommendedSonotubeDiameterIn={Number((resultValues as any).recommendedSonotubeDiameterIn ?? 12)}
            totalConcreteCuYd={Number((resultValues as any).totalConcreteCuYd ?? 1.8)}
            soilBearingPsf={Number((resultValues as any).soilBearingPsf ?? 2500)}
            tributaryAreaPerPostSqFt={Number((resultValues as any).tributaryAreaPerPostSqFt ?? 32)}
            units={units}
            codeNote={String((resultValues as any).codeNote ?? '')}
          />
        )}

        {tool.formulaId === 'concrete-block' && (
          <ConcreteBlockVisualizer
            wallLength={Number(values.wallLength ?? 20)}
            wallHeight={Number(values.wallHeight ?? 8)}
            blockSize={String(values.blockSize ?? '8x8x16')}
            openingsArea={Number(values.openingsArea ?? 0)}
            totalBlocksWithWaste={Number((resultValues as any).totalBlocksWithWaste ?? 189)}
            exactBlocks={Number((resultValues as any).exactBlocks ?? 180)}
            numberOfCourses={Number((resultValues as any).numberOfCourses ?? 12)}
            blocksPerCourse={Number((resultValues as any).blocksPerCourse ?? 15)}
            mortarBags80lb={Number((resultValues as any).mortarBags80lb ?? 15)}
            groutVolumeCuYd={Number((resultValues as any).groutVolumeCuYd ?? 0)}
            groutFill={String(values.groutFill ?? 'none')}
            includeRebar={values.includeRebar !== false && values.includeRebar !== 0}
            rebarSpacing={String(values.rebarSpacing ?? '32')}
            units={units}
          />
        )}

        {tool.formulaId === 'bathroom-remodel' && (
          <BathroomRemodelVisualizer
            bathroomType={(values.bathroomType as any) ?? 'full'}
            roomLength={Number(values.roomLength ?? 8)}
            roomWidth={Number(values.roomWidth ?? 6)}
            finishTier={(values.finishTier as any) ?? 'mid-range'}
            layoutChange={(values.layoutChange as any) ?? 'none'}
            includeTileShower={values.includeTileShower !== false && values.includeTileShower !== 0}
            includeFreestandingTub={Boolean(values.includeFreestandingTub)}
            includeDoubleVanity={Boolean(values.includeDoubleVanity)}
            includeHeatedFloor={Boolean(values.includeHeatedFloor)}
            diyDemolition={Boolean(values.diyDemolition)}
            region={(values.region as any) ?? 'us-national'}
            totalEstimatedCost={Number((resultValues as any).totalEstimatedCost ?? 14760)}
            estimatedCostLow={Number((resultValues as any).estimatedCostLow ?? 12546)}
            estimatedCostHigh={Number((resultValues as any).estimatedCostHigh ?? 17712)}
            costPerSqFt={Number((resultValues as any).costPerSqFt ?? 308)}
            squareFootage={Number((resultValues as any).squareFootage ?? 48)}
            laborCost={Number((resultValues as any).laborCost ?? 8266)}
            materialsCost={Number((resultValues as any).materialsCost ?? 6494)}
            plumbingCost={Number((resultValues as any).plumbingCost ?? 3100)}
            tileWaterproofingCost={Number((resultValues as any).tileWaterproofingCost ?? 3542)}
            vanityCountertopCost={Number((resultValues as any).vanityCountertopCost ?? 2214)}
            showerTubCost={Number((resultValues as any).showerTubCost ?? 1919)}
            electricalCost={Number((resultValues as any).electricalCost ?? 1328)}
            demoCost={Number((resultValues as any).demoCost ?? 1033)}
            paintingTrimCost={Number((resultValues as any).paintingTrimCost ?? 738)}
            permitsAndContingency={Number((resultValues as any).permitsAndContingency ?? 886)}
            estimatedWeeksMin={Number((resultValues as any).estimatedWeeksMin ?? 3)}
            estimatedWeeksMax={Number((resultValues as any).estimatedWeeksMax ?? 4)}
            currencySymbol={activeCurrency.symbol}
            units={units}
          />
        )}

        {tool.formulaId === 'battery-backup' && (
          <BatteryBackupVisualizer
            totalLoadWatts={Number((resultValues as any).totalLoadWatts ?? 350)}
            totalLoadKw={Number((resultValues as any).totalLoadKw ?? 0.35)}
            grossCapacityWh={Number((resultValues as any).grossCapacityWh ?? 3763)}
            grossCapacityKwh={Number((resultValues as any).grossCapacityKwh ?? 3.76)}
            usableCapacityKwh={Number((resultValues as any).usableCapacityKwh ?? 3.01)}
            deliveredAcEnergyKwh={Number((resultValues as any).deliveredAcEnergyKwh ?? 2.80)}
            batteryAh={Number((resultValues as any).batteryAh ?? 78.4)}
            systemVoltageV={Number((resultValues as any).systemVoltageV ?? 48)}
            recommendedInverterSizeW={Number((resultValues as any).recommendedInverterSizeW ?? 500)}
            inverterEfficiency={Number(values.inverterEfficiency ?? 93)}
            estimatedRuntimeHours={Number((resultValues as any).estimatedRuntimeHours ?? 8)}
            runtimeAtHalfLoad={Number((resultValues as any).runtimeAtHalfLoad ?? 16)}
            runtimeAtDoubleLoad={Number((resultValues as any).runtimeAtDoubleLoad ?? 4)}
            solarPanelWatts={Number((resultValues as any).solarPanelWatts ?? 602)}
            numberOfSolarPanels={Number((resultValues as any).numberOfSolarPanels ?? 2)}
            includeSolarRecharge={Boolean(values.includeSolarRecharge && values.includeSolarRecharge !== 'false')}
            chemistryLabel={String((resultValues as any).chemistryLabel ?? 'LiFePO₄')}
            cycleLife={Number((resultValues as any).cycleLife ?? 3500)}
            recommendedDod={Number((resultValues as any).recommendedDod ?? 80)}
            actualDodUsed={Number(values.depthOfDischarge ?? 80)}
            batteryBankCostLow={Number((resultValues as any).batteryBankCostLow ?? 1505)}
            batteryBankCostMid={Number((resultValues as any).batteryBankCostMid ?? 2258)}
            batteryBankCostHigh={Number((resultValues as any).batteryBankCostHigh ?? 3010)}
            totalSystemCostLow={Number((resultValues as any).totalSystemCostLow ?? 1605)}
            totalSystemCostHigh={Number((resultValues as any).totalSystemCostHigh ?? 3260)}
            costAssumptions={(resultValues as any).costAssumptions}
            isDodWarning={Boolean((resultValues as any).isDodWarning)}
            isUndersized={Boolean((resultValues as any).isUndersized)}
            temperatureDeratingFactor={Number((resultValues as any).temperatureDeratingFactor ?? 1)}
            currencySymbol={activeCurrency.symbol}
            batteryChemistry={String(values.batteryChemistry ?? 'lifepo4')}
          />
        )}

        {tool.formulaId === 'home-inspection' && (
          <HomeInspectionVisualizer
            homeArea={Number(values.homeArea ?? 2000)}
            propertyType={String(values.propertyType ?? 'single-family')}
            homeAge={String(values.homeAge ?? 'age-11-25')}
            foundation={String(values.foundation ?? 'slab')}
            region={String(values.region ?? 'us-national')}
            includeRadon={Boolean(values.includeRadon && values.includeRadon !== 'false')}
            includeMold={Boolean(values.includeMold && values.includeMold !== 'false')}
            includeSewerScope={Boolean(values.includeSewerScope && values.includeSewerScope !== 'false')}
            includeTermite={Boolean(values.includeTermite && values.includeTermite !== 'false')}
            includeWellWater={Boolean(values.includeWellWater && values.includeWellWater !== 'false')}
            rushService={Boolean(values.rushService && values.rushService !== 'false')}
            priceOverride={values.priceOverride !== '' && values.priceOverride !== undefined ? Number(values.priceOverride) : undefined}
            baseInspectionFee={Number((resultValues as any).baseInspectionFee ?? 340)}
            radonCost={Number((resultValues as any).radonCost ?? 0)}
            moldCost={Number((resultValues as any).moldCost ?? 0)}
            sewerScopeCost={Number((resultValues as any).sewerScopeCost ?? 0)}
            termiteCost={Number((resultValues as any).termiteCost ?? 0)}
            wellWaterCost={Number((resultValues as any).wellWaterCost ?? 0)}
            rushSurcharge={Number((resultValues as any).rushSurcharge ?? 0)}
            totalCostLow={Number((resultValues as any).totalCostLow ?? 289)}
            totalCostMid={Number((resultValues as any).totalCostMid ?? 340)}
            totalCostHigh={Number((resultValues as any).totalCostHigh ?? 425)}
            costPerSqFt={Number((resultValues as any).costPerSqFt ?? 0.17)}
            estimatedHours={Number((resultValues as any).estimatedHours ?? 2.5)}
            currencySymbol={activeCurrency.symbol}
            units={units}
          />
        )}

        <div className="space-y-5">
          {tool.inputs
            .filter((input: InputField) => {
              // showIf: conditionally show this field based on toggle value or select value (field=val1,val2)
              if (!input.showIf) return true;
              if (input.showIf.includes('=')) {
                const parts = input.showIf.split('=');
                const field = parts[0] ?? '';
                const allowed = parts[1] ?? '';
                const allowedValues = allowed.split(',');
                const currentVal = field ? String(values[field] ?? '') : '';
                return allowedValues.includes(currentVal);
              }
              const gateValue = values[input.showIf];
              return gateValue === true || gateValue === 1;
            })


            .map((input: InputField) => {
            const translatedLabel =
              (t.calculator.inputs as any)?.[input.id] ?? input.label;
            const translatedHelp =
              (localized?.helpTexts as Record<string, string | undefined>)?.[input.id] ?? input.helpText;
            const translatedOptions = localized?.options?.[input.id];

            return (
              <InputRow
                key={input.id}
                input={input}
                label={translatedLabel}
                helpText={translatedHelp}
                localizedOptions={translatedOptions}
                optionalLabel={t.calculator.optional}
                value={values[input.id] ?? input.defaultValue}
                unitLabel={resolveUnitLabel(input, units, activeCurrency)}
                error={errors[input.id]}
                activeCurrency={activeCurrency}
                units={units}
                onCurrencyChange={handleCurrencyChange}
                onChange={(raw) => handleInputChange(input.id, raw)}
              />
            );
          })}
        </div>

        <div className="no-print mt-8 flex flex-wrap items-center gap-2.5 border-t border-slate-100 pt-6 dark:border-slate-800">
          <ShareButton />
          <PrintButton />
          <PdfExportButton
            tool={tool}
            units={units}
            inputValues={values}
            resultValues={resultValues}
            currency={activeCurrency}
          />
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-600 shadow-sm transition-all duration-150 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 sm:text-sm"
          >
            <RotateCcw className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            <span>{t.calculator.reset || 'Reset'}</span>
          </button>
        </div>
      </div>

      <div className="lg:col-span-5 lg:sticky lg:top-24">
        <ResultCard
          resultLabels={tool.resultLabels}
          estimateRangeNote={tool.estimateRangeNote}
          values={resultValues}
          inputValues={values}
          currency={activeCurrency}
          units={units}
        />
      </div>
    </div>
  );
}

function resolveUnitLabel(
  input: InputField,
  units: 'imperial' | 'metric',
  currency: Currency
): string | undefined {
  const isMetric = units === 'metric';

  // Currency-based unit labels
  if (input.id === 'pricePerTon') return `${currency.symbol}/${isMetric ? 'tonne' : 'ton'}`;
  if (input.id === 'pricePerSqFt' || input.id === 'laborCostPerSqFt') return `${currency.symbol}/${isMetric ? 'm²' : 'sq ft'}`;
  if (input.id === 'pricePerSoilCuYd' || input.id === 'pricePerCuYd' || input.id === 'groutPricePerCuYd') return `${currency.symbol}/${isMetric ? 'm³' : 'cu yd'}`;
  if (input.id === 'rentPerSqFt') return `${currency.symbol}/${isMetric ? 'm²/yr' : 'sq ft/yr'}`;
  if (input.id === 'permitCost' || input.id === 'pricePerUnit' || input.id === 'priceOverride') return currency.symbol;
  if (input.id === 'pricePerPack') return `${currency.symbol}/pack`;
  if (input.id === 'pricePerBoardFoot') return `${currency.symbol}/bd ft`;
  if (input.id === 'pricePerKit') return `${currency.symbol}/kit`;
  if (input.id === 'pricePerDrumSet') return `${currency.symbol}/drum set`;
  if (input.id === 'pricePerStep') return `${currency.symbol}/step`;
  if (input.id === 'pricePerKwh') return `${currency.symbol}/kWh`;
  if (input.id === 'inverterCostEstimate') return currency.symbol;

  // Statically defined units on inputs take precedence
  if (input.unit === 'ft' || input.unit === 'm') return isMetric ? 'm' : 'ft';
  if (input.unit === 'in' || input.unit === 'cm') return isMetric ? 'cm' : 'in';

  // Specific dimension IDs that change unit
  if (
    [
      'length', 'width', 'buildingLength', 'buildingWidth', 'wallHeight',
      'gableWidth', 'gableHeight', 'gambrelLowerHeight', 'gambrelBreakWidth',
      'customDoorWidth', 'customDoorHeight', 'customWindowWidth', 'customWindowHeight',
      'panelLengthFt', 'deckLength', 'deckWidth', 'upperRoofLength', 'lowerToUpperHeight',
      'roomLength', 'roomWidth', 'beddingDepth', 'diameter', 'height', 'base1', 'base2', 'length2', 'width2',
      'wallLength', 'gutterLength', 'perimeter', 'crackLength'
    ].includes(input.id)
  ) {
    return isMetric ? 'm' : 'ft';
  }

  if (
    [
      'depth', 'panelWidthInches', 'footingDepth', 'thickness',
      'totalRise', 'targetRiserHeight', 'targetTreadDepth', 'stairWidth',
      'nosingLength', 'stringerSpacing', 'floorJoistThickness', 'minHeadroom'
    ].includes(input.id)
  ) {
    return isMetric ? 'cm' : 'in';
  }

  if (['area', 'squareFootage', 'roofArea', 'coveragePerBox', 'customOpeningArea', 'coveragePerPack', 'openingsArea', 'homeArea', 'irregularArea', 'rollSize', 'basementArea'].includes(input.id)) {
    return isMetric ? 'm²' : 'sq ft';
  }

  if (input.id === 'density') return isMetric ? 'kg/m³' : 'lb/ft³';
  if (['groundSnowLoad', 'liveLoad', 'deadLoad', 'snowLoad', 'soilBearing'].includes(input.id)) {
    return isMetric ? 'kPa' : 'psf';
  }

  // Generic unit fallback conversions
  if (input.unit === 'ft' || input.unit === 'm') return isMetric ? 'm' : 'ft';
  if (input.unit === 'in' || input.unit === 'cm') return isMetric ? 'cm' : 'in';
  if (input.unit === 'sq ft' || input.unit === 'm²' || input.unit === 'sq m') return isMetric ? 'm²' : 'sq ft';
  if (input.unit === 'cu yd' || input.unit === 'm³') return isMetric ? 'm³' : 'cu yd';
  if (input.unit === 'tons' || input.unit === 'tonnes') return isMetric ? 'tonnes' : 'tons';
  if (input.unit === 'lbs' || input.unit === 'kg') return isMetric ? 'kg' : 'lbs';
  if (input.unit === 'lb/ft³' || input.unit === 'kg/m³') return isMetric ? 'kg/m³' : 'lb/ft³';
  if (input.unit === 'psf' || input.unit === 'kPa') return isMetric ? 'kPa' : 'psf';

  return input.unit;
}


interface InputRowProps {
  input: InputField;
  label: string;
  helpText?: string;
  localizedOptions?: Record<string, string>;
  optionalLabel: string;
  value: number | string | boolean;
  unitLabel?: string;
  error?: string;
  activeCurrency?: Currency;
  units?: 'imperial' | 'metric';
  onCurrencyChange?: (code: string) => void;
  onChange: (raw: string) => void;
}

function InputRow({
  input,
  label,
  helpText,
  localizedOptions,
  optionalLabel,
  value,
  unitLabel,
  error,
  activeCurrency,
  units = 'imperial',
  onCurrencyChange,
  onChange,
}: InputRowProps) {
  const inputId = `calc-input-${input.id}`;
  const errorId = `calc-error-${input.id}`;
  const helpId = `calc-help-${input.id}`;

  // ── Toggle / switch input ──────────────────────────────────────────────────
  if (input.type === 'toggle') {
    const checked = value === true || value === 1;
    return (
      <div className="flex items-center justify-between rounded-xl border border-slate-200/90 bg-slate-50/60 p-4 transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800/40 dark:hover:bg-slate-800/60">
        <label htmlFor={inputId} className="cursor-pointer pr-4 text-sm font-medium text-slate-700 dark:text-slate-200">
          <span className="font-semibold text-slate-800 dark:text-slate-100">{label}</span>
          {helpText && <span className="block mt-0.5 text-xs text-slate-500 dark:text-slate-400">{helpText}</span>}
        </label>
        <button
          id={inputId}
          type="button"
          role="switch"
          aria-checked={checked}
          onClick={() => onChange(String(!checked))}
          className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
            checked ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'
          }`}
        >
          <span
            aria-hidden="true"
            className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
              checked ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    );
  }

  // ── Select / dropdown ──────────────────────────────────────────────────────
  if (input.type === 'select' && input.options) {
    return (
      <div>
        <label htmlFor={inputId} className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
          <span>{label}</span>
          {input.optional && <span className="font-normal text-slate-400 dark:text-slate-500">({optionalLabel})</span>}
        </label>
        <div className="relative mt-1.5">
          <select
            id={inputId}
            value={String(value)}
            onChange={(e) => onChange(e.target.value)}
            aria-describedby={helpText ? helpId : undefined}
            className="min-h-[44px] w-full appearance-none rounded-xl border border-slate-300/90 bg-white px-3.5 py-2.5 pr-10 text-sm font-medium text-slate-900 shadow-xs transition-all hover:border-slate-400 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-slate-600"
          >
            {input.options.map((opt) => {
              const optLabel = localizedOptions?.[opt.value] ?? opt.label;
              return (
                <option key={opt.value} value={opt.value}>
                  {optLabel}
                </option>
              );
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400">
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>
        {helpText && (
          <p id={helpId} className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
            {helpText}
          </p>
        )}
      </div>
    );
  }

  // ── Slider input ───────────────────────────────────────────────────────────
  if (input.type === 'slider') {
    return (
      <div>
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
          <label htmlFor={inputId}>
            {label}
            {input.optional && <span className="ml-1 font-normal text-slate-400 dark:text-slate-500">({optionalLabel})</span>}
          </label>
          <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary dark:bg-primary/20 dark:text-primary-foreground">
            {value}
            {unitLabel ? ` ${unitLabel}` : ''}
          </span>
        </div>
        <input
          id={inputId}
          type="range"
          min={resolveInputBound(input, input.min ?? 0, units)}
          max={resolveInputBound(input, input.max ?? 100, units)}
          step={input.step ?? 1}
          value={Number(value)}
          onChange={(e) => onChange(e.target.value)}
          aria-describedby={helpText ? helpId : undefined}
          className="mt-2.5 min-h-[44px] w-full accent-primary cursor-pointer"
        />
        {helpText && (
          <p id={helpId} className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {helpText}
          </p>
        )}
      </div>
    );
  }

  // ── Price / Cost / Rent inputs with Currency Dropdown Selector ───────────
  const isCurrencyInput =
    input.unit === '$' ||
    input.id === 'pricePerTon' ||
    input.id === 'pricePerSqFt' ||
    input.id === 'pricePerCuYd' ||
    input.id === 'pricePerSoilCuYd' ||
    input.id === 'pricePerPack' ||
    input.id === 'pricePerBoardFoot' ||
    input.id === 'pricePerUnit' ||
    input.id === 'pricePerStep' ||
    input.id === 'laborCostPerSqFt' ||
    input.id === 'permitCost' ||
    input.id === 'rentPerSqFt' ||
    input.id === 'pricePerBlock' ||
    input.id === 'mortarPricePerBag' ||
    input.id === 'groutPricePerCuYd';

  if (isCurrencyInput && activeCurrency && onCurrencyChange) {
    const isEmpty = value === '' || value === undefined || value === null || Number(value) === 0;
    const trailingUnit = unitLabel?.replace(activeCurrency.symbol, '').replace(/^\//, '').trim();

    return (
      <div>
        <label htmlFor={inputId} className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
          <span>
            {label}
            {input.optional && <span className="ml-1 font-normal text-slate-400 dark:text-slate-500">({optionalLabel})</span>}
          </span>
          {(input.id === 'pricePerSqFt' || input.id === 'pricePerCuYd') && isEmpty && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
              ✓ Using standard rate
            </span>
          )}
        </label>
        <div className="mt-1.5 flex rounded-xl shadow-xs">
          <div className="relative shrink-0">
            <select
              aria-label="Currency"
              value={activeCurrency.code}
              onChange={(e) => onCurrencyChange(e.target.value)}
              className="h-11 rounded-l-xl border border-r-0 border-slate-300/90 bg-slate-50 px-3 text-xs font-semibold text-slate-700 hover:bg-slate-100 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              {CURRENCIES.map((c: Currency) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code} ({c.symbol})
                </option>
              ))}
            </select>
          </div>
          <input
            id={inputId}
            type="number"
            inputMode="decimal"
            min={input.min === undefined ? undefined : resolveInputBound(input, input.min, units)}
            max={input.max === undefined ? undefined : resolveInputBound(input, input.max, units)}
            placeholder={input.optional ? optionalLabel : '0.00'}
            value={isEmpty ? '' : (value as string | number)}
            onChange={(e) => onChange(e.target.value)}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : helpText ? helpId : undefined}
            className={`min-h-[44px] w-full ${trailingUnit ? 'rounded-none' : 'rounded-r-xl'} border bg-white px-3.5 py-2 text-sm font-medium text-slate-900 transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white ${
              error ? 'border-red-400 dark:border-red-500' : 'border-slate-300/90'
            }`}
          />
          {trailingUnit && (
            <span className="inline-flex shrink-0 items-center rounded-r-xl border border-l-0 border-slate-300/90 bg-slate-50 px-3 text-xs font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
              /{trailingUnit}
            </span>
          )}
        </div>
        {error && (
          <p id={errorId} role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-red-600 dark:text-red-400">
            <span aria-hidden="true">⚠</span> {error}
          </p>
        )}
        {!error && helpText && (
          <p id={helpId} className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
            {helpText}
          </p>
        )}
      </div>
    );
  }

  const effectiveMin = input.min !== undefined
    ? resolveInputBound(input, input.min, units)
    : undefined;
  const effectiveMax = input.max !== undefined
    ? resolveInputBound(input, input.max, units)
    : undefined;

  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
        <label htmlFor={inputId}>
          {label}
          {input.optional && <span className="ml-1 font-normal text-slate-400 dark:text-slate-500">({optionalLabel})</span>}
        </label>
        {unitLabel && (
          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-400">
            {unitLabel}
          </span>
        )}
      </div>
      <div className="relative mt-1.5">
        <input
          id={inputId}
          type="number"
          inputMode="decimal"
          min={effectiveMin}
          max={effectiveMax}
          value={value as string | number}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : helpText ? helpId : undefined}
          className={`min-h-[44px] w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm font-medium text-slate-900 shadow-xs transition-all hover:border-slate-400 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 dark:border-slate-700 dark:bg-slate-800/90 dark:text-white dark:hover:border-slate-600 ${
            error ? 'border-red-400 dark:border-red-500' : 'border-slate-300/90'
          }`}
        />
      </div>
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-red-600 dark:text-red-400">
          <span aria-hidden="true">⚠</span> {error}
        </p>
      )}
      {!error && helpText && (
        <p id={helpId} className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
          {helpText}
        </p>
      )}
    </div>
  );
}

function resolveInputBound(
  input: InputField,
  value: number,
  units: 'imperial' | 'metric'
): number {
  if (units !== 'metric') return value;

  const id = input.id;
  if (
    [
      'length', 'width', 'buildingLength', 'buildingWidth', 'wallHeight',
      'gableWidth', 'gableHeight', 'gambrelLowerHeight', 'gambrelBreakWidth',
      'customDoorWidth', 'customDoorHeight', 'customWindowWidth', 'customWindowHeight',
      'panelLengthFt', 'deckLength', 'deckWidth', 'upperRoofLength', 'lowerToUpperHeight',
      'roomLength', 'roomWidth', 'beddingDepth', 'diameter', 'height', 'base1', 'base2',
      'length2', 'width2',
    ].includes(id) || input.unit === 'ft' || input.unit === 'm'
  ) {
    return roundUnitBound(value * 0.3048);
  }
  if (
    [
      'depth', 'panelWidthInches', 'footingDepth', 'thickness', 'soilDepth',
      'totalRise', 'targetRiserHeight', 'targetTreadDepth', 'stairWidth',
      'nosingLength', 'stringerSpacing', 'floorJoistThickness', 'minHeadroom',
    ].includes(id) || input.unit === 'in' || input.unit === 'cm'
  ) {
    return roundUnitBound(value * 2.54);
  }
  if (
    ['area', 'squareFootage', 'roofArea', 'coveragePerBox', 'coveragePerPack', 'irregularArea', 'customOpeningArea', 'openingsArea', 'homeArea', 'rollSize'].includes(id) ||
    input.unit === 'sq ft' || input.unit === 'm²' || input.unit === 'sq m'
  ) {
    return roundUnitBound(value * 0.092903);
  }
  if (id === 'density' || input.unit === 'lb/ft³' || input.unit === 'kg/m³') {
    return roundUnitBound(value * 16.0185);
  }
  if (['groundSnowLoad', 'liveLoad', 'deadLoad', 'snowLoad'].includes(id) || input.unit === 'psf' || input.unit === 'kPa') {
    return roundUnitBound(value * 0.04788);
  }
  if (['pricePerSqFt', 'laborCostPerSqFt'].includes(id)) return roundUnitBound(value / 0.092903);
  if (id === 'pricePerTon') return roundUnitBound(value * 1.10231);
  if (['pricePerSoilCuYd', 'pricePerCuYd', 'groutPricePerCuYd'].includes(id)) return roundUnitBound(value / 0.764555);
  return value;
}

function roundUnitBound(value: number): number {
  return Math.round(value * 1000) / 1000;
}
