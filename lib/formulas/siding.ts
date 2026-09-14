/**
 * Siding Calculator — Advanced Engineering Formula Library
 *
 * Computes:
 *  1. Gross wall surface area (perimeter walls + triangular, gambrel, or arched gables)
 *  2. Net siding area (after door, window, garage, and custom opening deductions)
 *  3. Siding area with material-specific waste factor
 *  4. Siding Squares (1 square = 100 sq ft / 9.29 m²)
 *  5. Product Packaging: Cartons / Boxes / Bundles required + leftover coverage
 *  6. True Panel / Board Count (based on both panel length and exposed face width)
 *  7. Complete Accessory & Trim Breakdown:
 *     - Starter Strip (linear ft / m)
 *     - Outside Corner Posts (linear ft / m)
 *     - J-Channel / Trim (linear ft / m around openings, eaves, and soffits)
 *  8. Cost Estimation: Net material cost and Total project cost (with waste)
 */

export type SidingMaterial =
  | 'vinyl'
  | 'fiber-cement'
  | 'wood'
  | 'metal'
  | 'engineered-wood'
  | 'stone-brick-veneer-panels';

export type GableShape = 'none' | 'triangle' | 'gambrel' | 'half-circle';
export type HeightBasis = 'total-wall' | 'per-story';

export interface SidingInput {
  // Building footprint & wall dimensions
  buildingLength: number;         // ft (or m)
  buildingWidth: number;          // ft (or m)
  wallHeight: number;             // ft (or m)
  heightBasis?: HeightBasis;      // 'total-wall' (default) or 'per-story'
  stories?: number;               // Number of above-grade stories (default 1)
  outsideCorners?: number;        // Default: 4 for rectangular building

  // Gable geometry
  gableShape: GableShape;         // 'none' | 'triangle' | 'gambrel' | 'half-circle'
  gableWidth?: number;            // Base width of gable (ft or m)
  gableHeight?: number;           // Height from eave to ridge peak (ft or m)
  gambrelLowerHeight?: number;    // For gambrel: height of lower steep section (ft or m)
  gambrelBreakWidth?: number;     // For gambrel: width at the slope break line (ft or m)
  gableCount?: number;            // Number of gable ends (default 2 for standard pitched roof)

  // Standard Openings
  doorCount?: number;             // Standard exterior doors (3 ft × 7 ft = 21 sq ft each)
  windowCount?: number;           // Standard windows (3 ft × 4 ft = 12 sq ft each)
  garageDoorCount?: number;       // Single garage doors (9 ft × 7 ft = 63 sq ft each)

  // Custom Openings (Dimensions)
  customOpeningArea?: number;     // Direct custom area deduction (sq ft or m²)
  customDoorWidth?: number;       // ft (or m)
  customDoorHeight?: number;      // ft (or m)
  customDoorCount?: number;       // count
  customWindowWidth?: number;     // ft (or m)
  customWindowHeight?: number;    // ft (or m)
  customWindowCount?: number;     // count

  // Siding specs
  sidingMaterial: SidingMaterial;
  waste: number;                  // Overage percentage (e.g. 10%)
  panelLengthFt?: number;         // Standard length of one siding plank/panel (ft or m, default 12 ft)
  panelWidthInches?: number;      // Exposed face width/height per panel (inches or cm, e.g. 4, 6, 7, 8 in)
  coveragePerBox?: number;        // Packaging coverage per carton/box/bundle (sq ft or m², e.g. 200 sq ft / 2 sq)

  // Cost
  pricePerSqFt?: number;          // Price per sq ft (or per m²) of material
  units: 'imperial' | 'metric';
  currency?: string;
}

export interface SidingResult {
  grossWallArea: number;          // Total wall area before deductions (sq ft or m²)
  openingArea: number;            // Total deducted openings (sq ft or m²)
  netSidingArea: number;          // Net wall area to side (sq ft or m²)
  wasteAmount: number;            // Extra area for waste / cuts (sq ft or m²)
  totalSidingArea: number;        // Purchase quantity with waste (sq ft or m²)
  sidingSquares: number;          // Industry squares (1 square = 100 sq ft)

  // Packaging & Panels
  boxesRequired: number;          // Cartons / Boxes / Bundles required
  actualBoxCoverage: number;      // Total coverage of purchased boxes
  leftoverArea: number;           // Extra leftover sq ft / m²
  panelCount: number;             // Individual siding planks / panels

  // Trim & Accessories Breakdown
  starterStripLinearFeet: number; // Base perimeter starter strip (linear ft or m)
  cornerPostsLinearFeet: number;  // Outside corner post length (linear ft or m)
  jChannelLinearFeet: number;     // J-channel & casing around openings & gables (linear ft or m)
  trimLinearFeet: number;         // Total combined trim linear feet (ft or m)

  // Dual Unit & Cost
  metricEquivalent: number;       // Opposite unit equivalent (m² if imperial, sq ft if metric)
  rawCost: number;                // Net area × price
  totalCost: number;              // Total area with waste × price
}

const SQ_FT_TO_M2 = 0.092903;
const M2_TO_SQ_FT = 10.7639;
const FT_TO_M = 0.3048;

// Standard opening specs (in feet & sq ft for imperial core math)
const STD_DOOR_W = 3;
const STD_DOOR_H = 7;
const STD_DOOR_AREA = 21;

const STD_WINDOW_W = 3;
const STD_WINDOW_H = 4;
const STD_WINDOW_AREA = 12;

const STD_GARAGE_W = 9;
const STD_GARAGE_H = 7;
const STD_GARAGE_AREA = 63;

export function calculateSiding(input: SidingInput): SidingResult {
  const isMetric = input.units === 'metric';

  // 1. Dimensions Conversion to Imperial for core math
  const l = isMetric ? input.buildingLength / FT_TO_M : input.buildingLength;
  const w = isMetric ? input.buildingWidth / FT_TO_M : input.buildingWidth;
  const rawH = isMetric ? input.wallHeight / FT_TO_M : input.wallHeight;
  const stories = Math.max(1, Math.round(input.stories ?? 1));

  // Multi-story height resolution
  const totalWallHeight = input.heightBasis === 'per-story' ? rawH * stories : rawH;
  const perimeter = 2 * (l + w);
  const corners = Math.max(0, input.outsideCorners ?? 4);

  // 2. Gross Rectangular Wall Area
  let grossArea = perimeter * totalWallHeight;

  // 3. Gable Ends Area
  const gableW = input.gableWidth
    ? (isMetric ? input.gableWidth / FT_TO_M : input.gableWidth)
    : w;
  const gableH = input.gableHeight
    ? (isMetric ? input.gableHeight / FT_TO_M : input.gableHeight)
    : 5;
  const gableCount = Math.max(0, Math.min(12, input.gableCount ?? 2));

  let gableArea = 0;
  let gableRakePerimeter = 0; // Length of angled roof edge for J-channel

  if (input.gableShape === 'triangle') {
    gableArea = 0.5 * gableW * gableH * gableCount;
    // Rake length = 2 * sqrt((W/2)^2 + H^2) per gable
    const halfBase = gableW / 2;
    const rakeSlope = Math.sqrt(halfBase * halfBase + gableH * gableH);
    gableRakePerimeter = 2 * rakeSlope * gableCount;
  } else if (input.gableShape === 'half-circle') {
    const r = gableW / 2;
    gableArea = (0.5 * Math.PI * r * r) * gableCount;
    // Arc length = pi * r per gable
    gableRakePerimeter = Math.PI * r * gableCount;
  } else if (input.gableShape === 'gambrel') {
    // Gambrel gable: lower steep trapezoid + upper shallow triangle
    const lowerH = input.gambrelLowerHeight
      ? (isMetric ? input.gambrelLowerHeight / FT_TO_M : input.gambrelLowerHeight)
      : gableH * 0.6;
    const upperH = Math.max(0.5, gableH - lowerH);
    const breakW = input.gambrelBreakWidth
      ? (isMetric ? input.gambrelBreakWidth / FT_TO_M : input.gambrelBreakWidth)
      : gableW * 0.75;

    // Lower trapezoid = (base + breakWidth) / 2 * lowerH
    const lowerTrapezoid = ((gableW + breakW) / 2) * lowerH;
    // Upper triangle = 0.5 * breakWidth * upperH
    const upperTriangle = 0.5 * breakW * upperH;
    gableArea = (lowerTrapezoid + upperTriangle) * gableCount;

    // Rake length: 2 * lower slope + 2 * upper slope
    const lowerRun = (gableW - breakW) / 2;
    const lowerSlope = Math.sqrt(lowerRun * lowerRun + lowerH * lowerH);
    const upperRun = breakW / 2;
    const upperSlope = Math.sqrt(upperRun * upperRun + upperH * upperH);
    gableRakePerimeter = 2 * (lowerSlope + upperSlope) * gableCount;
  }

  grossArea += gableArea;

  // 4. Opening Deductions & Perimeter for J-Channel
  const doorCnt = Math.max(0, input.doorCount ?? 0);
  const winCnt = Math.max(0, input.windowCount ?? 0);
  const garageCnt = Math.max(0, input.garageDoorCount ?? 0);

  let openingArea = (doorCnt * STD_DOOR_AREA) + (winCnt * STD_WINDOW_AREA) + (garageCnt * STD_GARAGE_AREA);
  let openingTrimPerimeter =
    doorCnt * (2 * STD_DOOR_H + STD_DOOR_W) + // Doors: 2 sides + top
    winCnt * (2 * (STD_WINDOW_W + STD_WINDOW_H)) + // Windows: all 4 sides
    garageCnt * (2 * STD_GARAGE_H + STD_GARAGE_W); // Garage: 2 sides + top

  // Custom Doors
  if (input.customDoorWidth && input.customDoorHeight && input.customDoorCount) {
    const cdw = isMetric ? input.customDoorWidth / FT_TO_M : input.customDoorWidth;
    const cdh = isMetric ? input.customDoorHeight / FT_TO_M : input.customDoorHeight;
    const cdc = input.customDoorCount;
    openingArea += (cdw * cdh * cdc);
    openingTrimPerimeter += cdc * (2 * cdh + cdw);
  }

  // Custom Windows
  if (input.customWindowWidth && input.customWindowHeight && input.customWindowCount) {
    const cww = isMetric ? input.customWindowWidth / FT_TO_M : input.customWindowWidth;
    const cwh = isMetric ? input.customWindowHeight / FT_TO_M : input.customWindowHeight;
    const cwc = input.customWindowCount;
    openingArea += (cww * cwh * cwc);
    openingTrimPerimeter += cwc * (2 * (cww + cwh));
  }

  // Direct Custom Opening Area
  if (input.customOpeningArea && input.customOpeningArea > 0) {
    const coa = isMetric ? input.customOpeningArea / SQ_FT_TO_M2 : input.customOpeningArea;
    openingArea += coa;
    // Estimate perimeter assuming 4:3 aspect ratio
    const estW = Math.sqrt(coa * (4 / 3));
    const estH = coa / estW;
    openingTrimPerimeter += 2 * (estW + estH);
  }

  const netArea = Math.max(0, grossArea - openingArea);

  // 5. Waste / Overage
  const wastePct = Math.max(0, Math.min(60, input.waste ?? 10));
  const wasteAmount = netArea * (wastePct / 100);
  const totalArea = netArea + wasteAmount;

  // 6. Siding Squares (1 square = 100 sq ft)
  const sidingSquares = round1(totalArea / 100);

  // 7. Product Packaging (Boxes / Cartons / Bundles)
  let boxesRequired = 0;
  let actualBoxCoverage = 0;
  let leftoverArea = 0;

  if (input.coveragePerBox && input.coveragePerBox > 0) {
    const boxCov = isMetric ? input.coveragePerBox / SQ_FT_TO_M2 : input.coveragePerBox;
    boxesRequired = Math.ceil(totalArea / boxCov);
    actualBoxCoverage = boxesRequired * boxCov;
    leftoverArea = Math.max(0, actualBoxCoverage - totalArea);
  }

  // 8. Panel / Board Count (Based on panel length and exposure width)
  let panelCount = 0;
  if (input.panelWidthInches && input.panelWidthInches > 0) {
    const pWidthFt = (isMetric ? input.panelWidthInches / 2.54 : input.panelWidthInches) / 12;
    const pLengthFt = input.panelLengthFt
      ? (isMetric ? input.panelLengthFt / FT_TO_M : input.panelLengthFt)
      : 12; // Default 12 ft standard panel length
    const singlePanelArea = pWidthFt * pLengthFt;
    if (singlePanelArea > 0) {
      panelCount = Math.ceil(totalArea / singlePanelArea);
    }
  }

  // 9. Trim & Accessories Breakdown
  const starterStripLF = perimeter;
  const cornerPostsLF = corners * totalWallHeight;
  const jChannelLF = openingTrimPerimeter + gableRakePerimeter + perimeter; // trim around openings, gables, and eave fascia
  const totalTrimLF = starterStripLF + cornerPostsLF + jChannelLF;

  // 10. Cost Calculations
  // Price is labeled $/m² in metric mode — apply against the area in the
  // user's unit so metric quotes are not inflated 10.76×.
  const pricePerSqFt = input.pricePerSqFt && input.pricePerSqFt > 0 ? input.pricePerSqFt : 0;
  const priceAreaFactor = isMetric ? SQ_FT_TO_M2 : 1;
  const rawCost = round2(netArea * priceAreaFactor * pricePerSqFt);
  const totalCost = round2(totalArea * priceAreaFactor * pricePerSqFt);

  // Output formatting based on unit mode
  if (isMetric) {
    return {
      grossWallArea: round2(grossArea * SQ_FT_TO_M2),
      openingArea: round2(openingArea * SQ_FT_TO_M2),
      netSidingArea: round2(netArea * SQ_FT_TO_M2),
      wasteAmount: round2(wasteAmount * SQ_FT_TO_M2),
      totalSidingArea: round2(totalArea * SQ_FT_TO_M2),
      sidingSquares: round1(totalArea / 100),

      boxesRequired,
      actualBoxCoverage: round2(actualBoxCoverage * SQ_FT_TO_M2),
      leftoverArea: round2(leftoverArea * SQ_FT_TO_M2),
      panelCount,

      starterStripLinearFeet: round2(starterStripLF * FT_TO_M),
      cornerPostsLinearFeet: round2(cornerPostsLF * FT_TO_M),
      jChannelLinearFeet: round2(jChannelLF * FT_TO_M),
      trimLinearFeet: round2(totalTrimLF * FT_TO_M),

      metricEquivalent: round2(totalArea), // sq ft equivalent
      rawCost,
      totalCost,
    };
  }

  return {
    grossWallArea: round2(grossArea),
    openingArea: round2(openingArea),
    netSidingArea: round2(netArea),
    wasteAmount: round2(wasteAmount),
    totalSidingArea: round2(totalArea),
    sidingSquares: round1(totalArea / 100),

    boxesRequired,
    actualBoxCoverage: round2(actualBoxCoverage),
    leftoverArea: round2(leftoverArea),
    panelCount,

    starterStripLinearFeet: round2(starterStripLF),
    cornerPostsLinearFeet: round2(cornerPostsLF),
    jChannelLinearFeet: round2(jChannelLF),
    trimLinearFeet: round2(totalTrimLF),

    metricEquivalent: round2(totalArea * SQ_FT_TO_M2), // m² equivalent
    rawCost,
    totalCost,
  };
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}
function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
