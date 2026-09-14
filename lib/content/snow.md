## Snow Load Calculator — ASCE 7-22 Roof Snow Load & Engineering Guide

> ⚠️ **Engineering Notice:** This calculator implements selected structural snow load provisions from **ASCE/SEI 7-22 Chapter 7** (*Minimum Design Loads and Associated Criteria for Buildings and Other Structures*) and **IBC §1608**. It is intended for preliminary engineering estimates and educational analysis. All final structural roof designs must be verified by a licensed Professional Engineer (PE) and comply with the specific requirements of the local authority having jurisdiction (AHJ).

---

## What Is Roof Snow Load and Why Does It Matter?

Roof snow load is the downward gravity force that a roof framing system (rafters, trusses, purlins, and decking) must safely support when snow accumulates over winter. In cold climates, snow accumulation is one of the most critical environmental design loads in structural engineering.

Underestimating snow load can lead to excessive structural deflection, ceiling cracking, or catastrophic roof collapse. Freshly fallen snow weighs 5–20 lb/ft³, whereas wet, compacted snow and ice can reach 30–60 lb/ft³ — imposing enormous weight on roof structures over a matter of hours.

---

## ASCE 7-22 Snow Load Calculation Methodology

```
Ground Snow Load (pg)
        ↓
Exposure Factor (Ce) — Table 7.3-1
        ↓
Thermal Factor (Ct) — Table 7.3-3
        ↓
Importance Factor (Is) — Table 1.5-2
        ↓
Flat Roof Snow Load (pf = 0.7 × Ce × Ct × Is × pg) — §7.3
        ↓
Slope Reduction Factor (Cs) — §7.4 (Slippery vs Non-Slippery Curves)
        ↓
Sloped Roof Snow Load (ps = Cs × pf)
        ↓
Low-Slope Minimum Snow Load (pm) with pm,max Caps — §7.3.4
        ↓
Governing Design Snow Load = max(ps, pm)
        ↓
Total Structural Roof Load = Design Load × Roof Area
        ↓
Snow Drift Analysis (hd, pd, w) with Winter Wind Parameter (W2) — §7.7
```

---

## 1. Ground Snow Load (pg)

The ground snow load is a mapped value representing the 2% annual probability (50-year mean recurrence interval) of ground-level snow accumulation, obtained from **ASCE 7-22 hazard tools** or local building codes:

| Region (US) | Typical Ground Snow Load (pg) |
|---|---|
| Deep South & Southern Coastal Areas | 0 psf (no snow design required) |
| Mid-Atlantic & Ohio Valley | 20–30 psf (0.96–1.44 kPa) |
| Upper Midwest, New England & Great Lakes | 30–50 psf (1.44–2.39 kPa) |
| Northern Maine, Adirondacks & Upper Michigan | 60–100 psf (2.87–4.79 kPa) |
| Mountain West & High Elevations | Site-specific case study required (up to 150–300+ psf) |

---

## 2. Flat Roof Snow Load Formula (pf) — ASCE 7-22 §7.3

For flat roofs and low-slope roofs (slope ≤ 5° or approx. 1 on 12 pitch):

> **pf = 0.7 × Ce × Ct × Is × pg**

* **0.7 Factor:** Accounts for the fact that not all ground snow accumulates on an open roof due to wind scuffing, solar melt, and boundary layer thermodynamics.
* **Ce (Exposure Factor — Table 7.3-1):**
  * Fully Exposed Roof: **0.9** (wind sweeps snow off)
  * Partially Exposed: **1.0** (standard suburban/wooded setting)
  * Sheltered Roof: **1.2** (dense coniferous trees or surrounding taller structures)
* **Ct (Thermal Factor — Table 7.3-3):**
  * Standard Heated Buildings (kept above 65°F): **1.0**
  * Unheated Buildings / Cold Storage / Open Canopies: **1.2**
  * Continuously Freezing Structures (kept below 32°F): **1.3**
  * Greenhouses (continuously heated to prevent buildup): **0.85**
* **Is (Importance Factor — Table 1.5-2):**
  * Category I (Agricultural / Storage): **0.8**
  * Category II (Standard Residential & Commercial): **1.0**
  * Category III (Assembly > 300, Schools, Power Plants): **1.1**
  * Category IV (Essential Facilities: Hospitals, Fire Stations): **1.2**

---

## 3. Sloped Roof Snow Load (ps) & Slope Reduction Factor (Cs) — ASCE 7-22 §7.4

As roof slope increases, snow naturally slides off and is shed by gravity. ASCE 7-22 applies a **Slope Reduction Factor (Cs)** to reduce the flat roof snow load:

> **ps = Cs × pf**

### Thermal Factor & Surface Type Regimes:
1. **Warm Roofs (Ct ≤ 1.0):**
   * **Unobstructed Slippery Surfaces** (metal, glass, slate with cold eaves): Cs = 1.0 up to 5°, then decreases linearly to 0.0 at 70°.
   * **All Other Surfaces** (asphalt shingles, built-up, wood shakes): Cs = 1.0 up to 30°, then decreases linearly to 0.0 at 70°.
2. **Cold / Unheated Roofs (Ct ≥ 1.2):**
   * **Slippery Surfaces:** Cs = 1.0 up to 10°, dropping to 0.0 at 70°.
   * **Non-Slippery Surfaces:** Cs = 1.0 up to 45°, dropping to 0.0 at 70°.

---

## 4. Minimum Roof Snow Load (pm) — ASCE 7-22 §7.3.4

To protect low-slope roofs against heavy localized slush and ponding loads, ASCE 7-22 enforces a **minimum roof snow load (pm)** that overrides ps when slopes are below 15° (approx. 3.2 on 12 pitch):

* For pg ≤ 20 psf: **pm = Is × pg**
* For pg > 20 psf: **pm = Is × 20 psf** (with pm,max caps applied per building category)

---

## 5. Snow Drift Analysis — ASCE 7-22 §7.7

When wind blows over a higher upper roof or terrain obstruction, snow is transported aerodynamically and deposited on adjacent lower roofs, creating triangular **leeward or windward snow drifts**:

- **Snow Density (γ):** γ = min(30, 0.13 × pg + 14) in lb/ft³
- **Drift Height (hd):** hd = 0.43 × (lu)^(1/3) × (pg + 10)^(1/4) − 1.5 (in feet)
- **Peak Drift Surcharge (pd):** pd = hd × γ (in psf)
- **Drift Footprint Width (w):** w = 4 × hd (for leeward drifts)

---

## Worked Engineering Example

* **Building Parameters:**
  * Ground Snow Load (pg) = 35 psf (Burlington, VT)
  * Wind Exposure: Partially Exposed (Ce = 1.0)
  * Roof Thermal Condition: Standard Heated (Ct = 1.0)
  * Risk Category: II — Standard Residential (Is = 1.0)
  * Roof Pitch: 6 on 12 (approx. 26.57°) with Asphalt Shingles
  * Projected Horizontal Roof Area: 2,000 sq ft

* **Step 1: Flat Roof Snow Load**
  * pf = 0.7 × 1.0 × 1.0 × 1.0 × 35 = **24.5 psf**

* **Step 2: Slope Reduction Factor (Cs)**
  * For non-slippery warm roof at 26.57°: Cs = 1.0 (since slope ≤ 30°)
  * ps = 1.0 × 24.5 = **24.5 psf**

* **Step 3: Total Structural Roof Load**
  * Total Load = 24.5 psf × 2,000 sq ft = **49,000 lbs (24.5 tons)** of downward force on the roof framing.
