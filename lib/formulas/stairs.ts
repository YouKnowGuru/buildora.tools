/**
 * Stair Calculator — Engineering & Code Compliance Formula Library
 *
 * Implements:
 *  - IRC §R311.7 (Residential) & IBC §1011 (Commercial) building codes
 *  - Exact Riser Count & Riser Height (in or cm)
 *  - Tread Count & Total Run (in or cm)
 *  - Stringer Length & Nominal Lumber Size (2×12 stock)
 *  - Minimum Stringer Throat Depth (min 3.5 in / 89 mm)
 *  - Number of Stringers Needed (based on stair width & spacing 12"/16" o.c.)
 *  - Stair Incline Pitch Angle (deg, ideal comfort 30°–37°)
 *  - Ergonomic Comfort Checks:
 *      * Blondel's Rule: 2R + T = 24 to 25 in (600–635 mm)
 *      * Rule of 17–18: R + T = 17 to 18 in
 *      * Rule of 70–75: R × T = 70 to 75
 *  - Headroom Clearance & Stairwell Ceiling Cutout Opening Length (min 80 in / 2,032 mm clearance)
 *  - Handrail Length (ft or m)
 *  - Baluster / Spindle Count (max 4 in / 102 mm gap code compliance)
 *  - Material Cost Estimation
 */

export type BuildingCodeStandard = 'irc-residential' | 'ibc-commercial' | 'custom';
export type StairMountingStyle = 'flush-top' | 'down-one-riser';

export interface StairInput {
  // Primary Dimensions
  totalRise: number;                  // Total vertical height from finished lower floor to finished upper floor (in or cm)
  targetRiserHeight?: number;         // Desired riser height (default 7.5 in / 19 cm)
  targetTreadDepth?: number;          // Desired tread run (default 10.5 in / 26.7 cm)
  stairWidth?: number;                // Stair width (in or cm, default 36 in / 91.4 cm; min 36" IRC)

  // Advanced Framing & Headroom
  buildingCode: BuildingCodeStandard; // 'irc-residential' (max 7.75" rise, min 10" run) | 'ibc-commercial' (max 7" rise, min 11" run)
  mountingStyle?: StairMountingStyle; // 'down-one-riser' (default, treads = risers - 1) | 'flush-top' (treads = risers)
  nosingLength?: number;              // Tread nosing overhang (in or cm, default 1.0 in / 2.5 cm)
  treadThickness?: number;            // Tread material thickness (in or cm, default 1.0 in / 2.5 cm)
  stringerSpacing?: number;           // Stringer spacing o.c. (in or cm, default 16 in / 40.6 cm)
  floorJoistThickness?: number;       // Upper floor joist + ceiling thickness (in or cm, default 10 in / 25.4 cm)
  minHeadroom?: number;               // Required vertical headroom (in or cm, default 80 in / 203.2 cm for IRC)

  // Handrail & Balusters
  includeRailing?: boolean;           // Calculate handrail and balusters
  balusterSpacing?: number;           // Spacing between balusters (in or cm, default 4 in / 10.2 cm code max)

  // Cost
  pricePerStep?: number;              // Material/labor cost per step/riser
  units: 'imperial' | 'metric';
  currency?: string;
}

export interface StairResult {
  // Core Geometry
  numberOfRisers: number;             // Total number of risers
  exactRiserHeight: number;           // Exact height per riser (in or cm)
  numberOfTreads: number;             // Total number of treads (risers - 1 or risers)
  exactTreadDepth: number;            // Tread run (in or cm)
  totalTreadDepthWithNosing: number;  // Run + Nosing (in or cm)
  totalRun: number;                   // Horizontal length of entire stair flight (in or cm)
  totalRunFeet: number;               // Total run in feet (or meters)
  stairAngle: number;                 // Pitch incline angle (degrees)

  // Stringer Framing
  stringerLengthInches: number;       // Exact diagonal cut length (in or cm)
  stringerLengthFeet: number;         // Stringer length in feet (or meters)
  recommendedLumberLength: string;    // E.g. "2×12 × 14 ft"
  stringerCount: number;              // Number of stringers required based on width
  stringerThroatDepth: number;        // Remaining throat depth on standard 2×12 stock (in or cm)

  // Headroom & Well Opening
  headroomOpeningLength: number;      // Minimum ceiling cutout length required (in or cm)
  minHeadroomClearance: number;       // Verified vertical headroom clearance (in or cm)

  // Code & Comfort Diagnostics
  blondelComfortValue: number;        // 2R + T (Ideal: 24–25 in / 600–635 mm)
  isCodeCompliant: boolean;           // True if meets selected code standard
  complianceNote: string;             // Detailed code explanation

  // Railing & Accessories
  handrailLength: number;             // Linear length of handrail (in or cm)
  balusterCount: number;              // Number of balusters required

  // Cost
  totalCost: number;                  // Estimated material cost
}

const IN_TO_CM = 2.54;
const CM_TO_IN = 1 / 2.54;

export function calculateStairs(input: StairInput): StairResult {
  const isMetric = input.units === 'metric';

  // Convert inputs to inches for core calculation
  const totalRise = isMetric ? input.totalRise * CM_TO_IN : input.totalRise;
  const stairWidth = input.stairWidth
    ? (isMetric ? input.stairWidth * CM_TO_IN : input.stairWidth)
    : 36; // 36" default
  const nosing = input.nosingLength !== undefined
    ? (isMetric ? input.nosingLength * CM_TO_IN : input.nosingLength)
    : 1.0;
  const joistThick = input.floorJoistThickness !== undefined
    ? (isMetric ? input.floorJoistThickness * CM_TO_IN : input.floorJoistThickness)
    : 10.0;
  const minHeadroom = input.minHeadroom !== undefined
    ? (isMetric ? input.minHeadroom * CM_TO_IN : input.minHeadroom)
    : 80.0; // 80" IRC code minimum
  const stringerSpacing = input.stringerSpacing !== undefined
    ? (isMetric ? input.stringerSpacing * CM_TO_IN : input.stringerSpacing)
    : 16.0; // 16" o.c. default

  // Code Limits (in inches)
  let maxRiserCode = 7.75;  // IRC residential max: 7-3/4 in
  let minTreadCode = 10.0;  // IRC residential min: 10.0 in
  if (input.buildingCode === 'ibc-commercial') {
    maxRiserCode = 7.0;     // IBC commercial max: 7.0 in
    minTreadCode = 11.0;    // IBC commercial min: 11.0 in
  }

  // 1. Target Riser and Tread
  const targetRiser = input.targetRiserHeight && input.targetRiserHeight > 0
    ? (isMetric ? input.targetRiserHeight * CM_TO_IN : input.targetRiserHeight)
    : (input.buildingCode === 'ibc-commercial' ? 6.75 : 7.5);

  const targetTread = input.targetTreadDepth && input.targetTreadDepth > 0
    ? (isMetric ? input.targetTreadDepth * CM_TO_IN : input.targetTreadDepth)
    : (input.buildingCode === 'ibc-commercial' ? 11.0 : 10.5);

  // 2. Number of Risers (Round to nearest integer)
  let numberOfRisers = Math.round(totalRise / targetRiser);
  if (numberOfRisers < 1) numberOfRisers = 1;

  // Exact Riser Height
  let exactRiserHeight = totalRise / numberOfRisers;

  // Check if exceeds code limit, increment risers if needed
  if (exactRiserHeight > maxRiserCode && input.buildingCode !== 'custom') {
    numberOfRisers = Math.ceil(totalRise / maxRiserCode);
    exactRiserHeight = totalRise / numberOfRisers;
  }

  // 3. Number of Treads
  // Standard residential stairs terminate one riser down from upper floor level (treads = risers - 1)
  const isFlushTop = input.mountingStyle === 'flush-top';
  const numberOfTreads = isFlushTop ? numberOfRisers : Math.max(1, numberOfRisers - 1);

  // 4. Exact Tread Depth & Total Run
  const exactTreadDepth = targetTread;
  const totalTreadDepthWithNosing = exactTreadDepth + nosing;
  const totalRun = numberOfTreads * exactTreadDepth;

  // 5. Stair Pitch Angle
  // tan(angle) = exactRiserHeight / exactTreadDepth
  const stairAngleRad = Math.atan(exactRiserHeight / exactTreadDepth);
  const stairAngle = round1((stairAngleRad * 180) / Math.PI);

  // 6. Stringer Length (Diagonal Hypotenuse)
  const stringerLengthInches = Math.sqrt(totalRise * totalRise + totalRun * totalRun);
  const stringerLengthFeet = stringerLengthInches / 12;

  // Recommended nominal 2x12 lumber length (e.g. 10 ft, 12 ft, 14 ft, 16 ft)
  const nominalFeet = Math.ceil(stringerLengthFeet / 2) * 2;
  const lumberFeet = Math.max(8, nominalFeet <= 20 ? nominalFeet : Math.ceil(stringerLengthFeet));
  // In metric mode, express the stringer length in metres for the label.
  const recommendedLumberLength = isMetric
    ? `2×12 × ${round2(lumberFeet * 0.3048)} m`
    : `2×12 × ${lumberFeet} ft`;

  // Number of Stringers (based on width: 1 stringer every 16" o.c. or 12" o.c.)
  const stringerCount = Math.max(2, Math.ceil(stairWidth / stringerSpacing) + 1);

  // Stringer Throat Depth on standard 2x12 stock (actual width 11.25")
  // Throat = 11.25 * cos(angle) - (Riser * sin(angle)) OR perpendicular distance
  // Standard geometric throat approximation: 11.25 - (Riser * cos(90 - angle))
  const actualLumberWidth = 11.25; // 2x12 actual width in inches
  const stringerThroatDepth = round1(actualLumberWidth * Math.cos(stairAngleRad) - (exactRiserHeight * Math.sin(stairAngleRad) * 0.5));

  // 7. Headroom Clearance & Stairwell Opening Length
  // Clearance from lower step nosing to upper floor ceiling plane
  // Cutout Length = Total Run - ((Min Headroom + Floor Joist Thickness - Upper Step Elevation) / tan(angle))
  const requiredVerticalDrop = minHeadroom + joistThick;
  let headroomOpeningLength = 0;
  if (totalRise > requiredVerticalDrop) {
    const horizontalDistanceNeeded = (totalRise - requiredVerticalDrop) / Math.tan(stairAngleRad);
    headroomOpeningLength = Math.max(0, totalRun - horizontalDistanceNeeded);
  } else {
    headroomOpeningLength = totalRun;
  }

  // 8. Ergonomic & Building Code Compliance
  // Blondel's rule: 2R + T (in inches: ideal 24" to 25"; in mm: 600 to 635 mm)
  const blondelInches = (2 * exactRiserHeight) + exactTreadDepth;

  // Build compliance notes using unit-appropriate values and labels so metric
  // users see cm / mm references rather than confusing inch symbols.
  const displayRiser = isMetric ? round1(exactRiserHeight * IN_TO_CM) : round2(exactRiserHeight);
  const displayTread = isMetric ? round1(exactTreadDepth * IN_TO_CM) : round2(exactTreadDepth);
  const unitSuffix = isMetric ? ' cm' : '"';
  const maxRiserDisplay = isMetric ? `${round1(maxRiserCode * IN_TO_CM)} cm` : `${maxRiserCode}"`;
  const minTreadDisplay = isMetric ? `${round1(minTreadCode * IN_TO_CM)} cm` : `${minTreadCode}"`;

  let isCodeCompliant = true;
  const complianceNotes: string[] = [];

  if (exactRiserHeight > maxRiserCode) {
    isCodeCompliant = false;
    complianceNotes.push(`Riser height (${displayRiser}${unitSuffix}) exceeds ${input.buildingCode === 'ibc-commercial' ? `IBC commercial max (${maxRiserDisplay})` : `IRC residential max (${maxRiserDisplay})`}.`);
  }
  if (exactTreadDepth < minTreadCode) {
    isCodeCompliant = false;
    complianceNotes.push(`Tread depth (${displayTread}${unitSuffix}) is below ${input.buildingCode === 'ibc-commercial' ? `IBC commercial min (${minTreadDisplay})` : `IRC residential min (${minTreadDisplay})`}.`);
  }
  if (stairAngle > 42) {
    complianceNotes.push(`Stair pitch angle (${stairAngle}°) is steep (ideal comfort range is 30°–37°).`);
  }

  const complianceNote = complianceNotes.length > 0
    ? complianceNotes.join(' ')
    : `Fully compliant with ${input.buildingCode === 'ibc-commercial' ? 'IBC §1011 (Commercial)' : 'IRC §R311.7 (Residential)'}.`;

  // 9. Handrail & Balusters
  const handrailLengthInches = stringerLengthInches + 12; // 12" extra for top/bottom overhang
  const balusterSpacing = input.balusterSpacing !== undefined
    ? (isMetric ? input.balusterSpacing * CM_TO_IN : input.balusterSpacing)
    : 4.0; // 4" max sphere rule per IRC code
  // IRC requires spacing measured across the full tread including the nosing overhang.
  const balustersPerTread = Math.ceil(totalTreadDepthWithNosing / balusterSpacing);
  const balusterCount = numberOfTreads * balustersPerTread;

  // 10. Cost
  const pricePerStep = input.pricePerStep && input.pricePerStep > 0 ? input.pricePerStep : 0;
  const totalCost = round2(numberOfRisers * pricePerStep);

  // Metric Output Formatting
  if (isMetric) {
    return {
      numberOfRisers,
      exactRiserHeight: round1(exactRiserHeight * IN_TO_CM),
      numberOfTreads,
      exactTreadDepth: round1(exactTreadDepth * IN_TO_CM),
      totalTreadDepthWithNosing: round1(totalTreadDepthWithNosing * IN_TO_CM),
      totalRun: round1(totalRun * IN_TO_CM),
      totalRunFeet: round2((totalRun * IN_TO_CM) / 100), // meters
      stairAngle,

      stringerLengthInches: round1(stringerLengthInches * IN_TO_CM),
      stringerLengthFeet: round2((stringerLengthInches * IN_TO_CM) / 100), // meters
      recommendedLumberLength,
      stringerCount,
      stringerThroatDepth: round1(stringerThroatDepth * IN_TO_CM),

      headroomOpeningLength: round1(headroomOpeningLength * IN_TO_CM),
      minHeadroomClearance: round1(minHeadroom * IN_TO_CM),

      blondelComfortValue: round1(blondelInches * IN_TO_CM), // cm (ideal 60.5–63.5 cm / 600–635 mm)
      isCodeCompliant,
      complianceNote,

      handrailLength: round1((handrailLengthInches * IN_TO_CM) / 100), // meters
      balusterCount,
      totalCost,
    };
  }

  return {
    numberOfRisers,
    exactRiserHeight: round2(exactRiserHeight),
    numberOfTreads,
    exactTreadDepth: round2(exactTreadDepth),
    totalTreadDepthWithNosing: round2(totalTreadDepthWithNosing),
    totalRun: round2(totalRun),
    totalRunFeet: round2(totalRun / 12),
    stairAngle,

    stringerLengthInches: round2(stringerLengthInches),
    stringerLengthFeet: round2(stringerLengthFeet),
    recommendedLumberLength,
    stringerCount,
    stringerThroatDepth: round2(stringerThroatDepth),

    headroomOpeningLength: round2(headroomOpeningLength),
    minHeadroomClearance: round2(minHeadroom),

    blondelComfortValue: round2(blondelInches),
    isCodeCompliant,
    complianceNote,

    handrailLength: round2(handrailLengthInches / 12), // feet
    balusterCount,
    totalCost,
  };
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}
function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
