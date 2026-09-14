/**
 * Snow Load Calculator — Formula Library (ASCE 7-22 Compliant)
 *
 * Implements:
 * 1. Flat Roof Snow Load: pf = 0.7 * Ce * Ct * Is * pg (ASCE 7-22 §7.3)
 * 2. Roof Surface & Slope Reduction Factor: Cs curves for slippery vs non-slippery (ASCE 7-22 §7.4)
 * 3. Sloped Roof Snow Load: ps = Cs * pf
 * 4. Low-Slope Minimum Roof Snow Load (pm) with ASCE 7-22 pm,max risk-category caps (§7.3.4):
 *    - Cat I:  pm,max = 25 psf (1.20 kPa)
 *    - Cat II: pm,max = 30 psf (1.44 kPa)
 *    - Cat III:pm,max = 35 psf (1.68 kPa)
 *    - Cat IV: pm,max = 40 psf (1.92 kPa)
 * 5. Governing Design Snow Load: max(ps, pm)
 * 6. Total Structural Load: Governing Load * Roof Horizontal Area
 * 7. ASCE 7-22 Snow Drift Formulation (§7.7) with Winter Wind Parameter (W2) and Leeward/Windward checks.
 */

export type ExposureCategory = 'sheltered' | 'partial' | 'full';
export type ThermalCondition = 'greenhouse' | 'heated' | 'cold' | 'unheated' | 'freezer';
export type RiskCategory = 'cat1' | 'cat2' | 'cat3' | 'cat4';
export type RoofSurface = 'slippery' | 'non-slippery';

export interface SnowLoadInput {
  groundSnowLoad: number;         // pg in psf (Imperial) or kPa (Metric)
  roofSlope: number;              // Slope in degrees (0° = flat)
  roofSurface?: RoofSurface;      // Slippery (metal/glass) vs Non-slippery (shingles)
  exposureCategory: ExposureCategory; // Ce: sheltered=1.3, partial=1.0, full=0.9
  thermalCategory: ThermalCondition;  // Ct: greenhouse=0.85, heated=1.0, cold=1.1, unheated=1.2, freezer=1.3
  riskCategory: RiskCategory;     // Is: Cat I=0.8, Cat II=1.0, Cat III=1.1, Cat IV=1.2
  roofArea: number;               // Projected roof area in sq ft (or m²)
  includeDrift?: boolean;
  upperRoofLength?: number;       // lu in feet (or meters)
  lowerToUpperHeight?: number;    // hc clear height in feet (or meters)
  winterWindParam?: number;       // W2 parameter (default 1.0 for ASCE 7-22 standard)
  driftType?: 'leeward' | 'windward';
  units: 'imperial' | 'metric';
  currency?: string;
}

export interface SnowLoadResult {
  // Key calculation parameters
  ceValue: number;
  ctValue: number;
  isFactor: number;

  // Intermediate & governing loads
  flatRoofSnowLoad: number;       // pf (psf or kPa)
  slopeReductionFactor: number;   // Cs (0.0 to 1.0)
  slopedRoofSnowLoad: number;     // ps = Cs * pf (psf or kPa)
  minimumRoofSnowLoad: number;    // pm (psf or kPa)
  designSnowLoad: number;         // Governing load = max(ps, pm) (psf or kPa)
  totalRoofLoad: number;          // Total load in lbs (Imperial) or kN (Metric)

  // Drift analysis (if enabled)
  driftHeight: number;            // hd (ft or m)
  driftSurcharge: number;         // pd (psf or kPa)
  driftWidth: number;             // w (ft or m)
}

export function calculateSnowLoad(input: SnowLoadInput): SnowLoadResult {
  const isMetric = input.units === 'metric';

  // Native calculations are performed in Imperial psf/ft per ASCE 7-22 standard, then converted
  // 1 kPa = 20.8854 psf; 1 m = 3.28084 ft; 1 m² = 10.7639 sq ft
  const pg_psf = isMetric ? input.groundSnowLoad * 20.8854 : input.groundSnowLoad;
  const area_sqft = isMetric ? input.roofArea * 10.7639 : input.roofArea;

  // 1. Exposure Factor (Ce) — ASCE 7-22 Table 7.3-1
  let ce = 1.0;
  if (input.exposureCategory === 'sheltered') ce = 1.3;
  else if (input.exposureCategory === 'full') ce = 0.9;
  else ce = 1.0;

  // 2. Thermal Factor (Ct) — ASCE 7-22 Table 7.3-3
  let ct = 1.0;
  if (input.thermalCategory === 'greenhouse') ct = 0.85;
  else if (input.thermalCategory === 'cold') ct = 1.10;
  else if (input.thermalCategory === 'unheated') ct = 1.20;
  else if (input.thermalCategory === 'freezer') ct = 1.30;
  else ct = 1.00;

  // 3. Importance Factor (Is) — ASCE 7-22 Table 1.5-2 & §7.3.3
  let is = 1.0;
  let pm_max = 30.0; // Risk Cat II default pm,max
  if (input.riskCategory === 'cat1') {
    is = 0.8;
    pm_max = 25.0;
  } else if (input.riskCategory === 'cat2') {
    is = 1.0;
    pm_max = 30.0;
  } else if (input.riskCategory === 'cat3') {
    is = 1.1;
    pm_max = 35.0;
  } else if (input.riskCategory === 'cat4') {
    is = 1.2;
    pm_max = 40.0;
  }

  // 4. Flat Roof Snow Load (pf) — ASCE 7-22 §7.3
  const pf = 0.7 * ce * ct * is * pg_psf;

  // 5. Slope Factor (Cs) — ASCE 7-22 §7.4 & Figures 7.4-1 through 7.4-3
  // Distinguishes slippery (unobstructed metal/glass) from non-slippery surfaces
  const slope = Math.max(0, Math.min(90, input.roofSlope || 0));
  const isSlippery = input.roofSurface === 'slippery';
  let cs = 1.0;

  if (slope >= 70) {
    cs = 0.0;
  } else if (isSlippery) {
    // Slippery surfaces: snow slides at lower angles
    const threshold = ct <= 1.0 ? 15.0 : 10.0;
    if (slope <= threshold) {
      cs = 1.0;
    } else {
      cs = (70.0 - slope) / (70.0 - threshold);
    }
  } else {
    // Non-slippery surfaces:
    let threshold = 30.0;
    if (ct === 1.1) threshold = 37.5;
    else if (ct >= 1.2) threshold = 45.0;

    if (slope <= threshold) {
      cs = 1.0;
    } else {
      cs = (70.0 - slope) / (70.0 - threshold);
    }
  }
  cs = Math.max(0, Math.min(1.0, cs));

  // 6. Sloped Roof Snow Load (ps)
  const ps = cs * pf;

  // 7. Low-Slope Minimum Roof Snow Load (pm) — ASCE 7-22 §7.3.4
  // For roofs with slope <= 15°
  let pm = 0;
  if (slope <= 15.0) {
    if (pg_psf > 20.0) {
      pm = Math.min(pm_max, is * 20.0);
    } else {
      pm = Math.min(pm_max, is * pg_psf);
    }
  }

  // 8. Governing Design Snow Load
  const designLoad_psf = Math.max(ps, pm);

  // 9. Total Structural Roof Load (lbs or kN)
  const totalLoad_lbs = designLoad_psf * area_sqft;

  // 10. ASCE 7-22 Snow Drift Calculations (§7.7)
  let hd_ft = 0;
  let pd_psf = 0;
  let w_ft = 0;

  if (input.includeDrift && input.upperRoofLength && input.upperRoofLength > 0) {
    const lu_ft = isMetric ? input.upperRoofLength * 3.28084 : input.upperRoofLength;
    const hc_ft = input.lowerToUpperHeight
      ? (isMetric ? input.lowerToUpperHeight * 3.28084 : input.lowerToUpperHeight)
      : 10.0;

    // Winter wind parameter W2 (ASCE 7-22 §7.7.1, standard baseline = 1.0)
    const w2 = input.winterWindParam && input.winterWindParam > 0 ? input.winterWindParam : 1.0;

    // ASCE 7-22 Empirical Drift Height formulation
    // Leeward drift height with W2 wind factor
    let hd_calc = 0.43 * Math.pow(lu_ft, 1 / 3) * Math.pow(Math.max(1, pg_psf) + 10, 1 / 4) * w2 - 1.5;
    if (input.driftType === 'windward') {
      hd_calc = 0.75 * hd_calc;
    }
    hd_calc = Math.max(0, hd_calc);

    // Balanced snow height on lower roof: hb = pf / gamma
    const gamma = Math.min(30, 0.13 * pg_psf + 14); // Snow density in pcf (ASCE 7-22 §7.7.1)
    const hb = gamma > 0 ? pf / gamma : 0;

    // Clear height limit: drift cannot exceed hc - hb
    const max_hd = Math.max(0, hc_ft - hb);
    hd_ft = Math.min(hd_calc, max_hd);

    // Drift surcharge load
    pd_psf = hd_ft * gamma;

    // Drift footprint width
    w_ft = input.driftType === 'windward' ? 8 * hd_ft : 4 * hd_ft;
  }

  // Convert outputs for metric display if requested
  // 1 psf = 0.0478803 kPa; 1 lb = 0.00444822 kN; 1 ft = 0.3048 m
  if (isMetric) {
    return {
      ceValue: ce,
      ctValue: ct,
      isFactor: is,
      flatRoofSnowLoad: round2(pf * 0.0478803),
      slopeReductionFactor: round3(cs),
      slopedRoofSnowLoad: round2(ps * 0.0478803),
      minimumRoofSnowLoad: round2(pm * 0.0478803),
      designSnowLoad: round2(designLoad_psf * 0.0478803),
      totalRoofLoad: round2(totalLoad_lbs * 0.00444822), // kN
      driftHeight: round2(hd_ft * 0.3048),
      driftSurcharge: round2(pd_psf * 0.0478803),
      driftWidth: round2(w_ft * 0.3048),
    };
  }

  return {
    ceValue: ce,
    ctValue: ct,
    isFactor: is,
    flatRoofSnowLoad: round2(pf),
    slopeReductionFactor: round3(cs),
    slopedRoofSnowLoad: round2(ps),
    minimumRoofSnowLoad: round2(pm),
    designSnowLoad: round2(designLoad_psf),
    totalRoofLoad: Math.round(totalLoad_lbs),
    driftHeight: round2(hd_ft),
    driftSurcharge: round2(pd_psf),
    driftWidth: round2(w_ft),
  };
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

function round3(n: number): number {
  return Math.round(n * 1000) / 1000;
}
