## Battery Backup Calculator — Technical Reference & Sizing Guide
*Engineering Methodology, Inverter Sizing, and Energy Storage Standards*

---

## What This Calculator Does

This **battery backup calculator** assists in estimating the required nominal battery capacity, continuous inverter rating, and optional solar recharge array for backup power and energy storage systems (ESS). Enter your critical appliance loads, target backup runtime, battery chemistry, and system voltage to evaluate:

- **Total Critical Continuous Load (W)** and energy demand (Wh / kWh)
- **Required Nominal Battery Capacity** in kilowatt-hours (kWh) and amp-hours (Ah) at your selected system DC voltage
- **Usable Battery Energy** accounting for usable Depth of Discharge (DoD)
- **Estimated AC Energy Delivered** accounting for full-load inverter conversion efficiency
- **Recommended Continuous Inverter Rating** with continuous-load planning margin
- **Solar Recharge Array Sizing** based on local peak sun hours
- **Planning Cost Estimates** with transparent component cost assumptions

---

## 1. Battery Backup Fundamentals

A battery backup system has four primary components working in sequence:

| Component | Function | Engineering Consideration |
|---|---|---|
| **Battery Bank** | Stores electrical energy as direct current (DC) | Usable capacity (Wh / Ah), cell chemistry, and DC bus voltage (12V, 24V, 48V) |
| **Inverter / Charger** | Converts DC battery power to 120V / 240V AC for connected loads | Continuous power rating, efficiency curve, and motor starting surge tolerance |
| **Charge Controller** | Regulates charging current from solar photovoltaic (PV) arrays | MPPT tracking efficiency, maximum open-circuit voltage (Voc) |
| **Transfer Switch (ATS)** | Safely transfers loads between utility and backup sources where applicable | Transfer time depends on the equipment and system design; sensitive electronics may require a UPS with an appropriate transfer-time specification |

Nominal battery bank capacity is defined in **Watt-hours (Wh)** or **kilowatt-hours (kWh)** — the product of ampere-hours and nominal DC voltage. For example, a 100 Ah battery module operating at 48V nominal stores 4,800 Wh = 4.8 kWh of nominal energy.

---

## 2. Depth of Discharge (DoD) & Cycle Life

**Depth of Discharge (DoD)** is the percentage of a battery's total nominal capacity that can be discharged before recharging is required. Operating within manufacturer-recommended DoD limits preserves cycle life:

```
Usable Battery Energy (Wh) = Nominal Capacity (Wh) × (Usable DoD % ÷ 100)
```

Discharging beyond the recommended DoD significantly accelerates capacity loss and reduces usable calendar life:

| Chemistry | Recommended DoD | Planning Cycle Life Range | In-Service Characteristics |
|---|---|---|---|
| **LiFePO₄ (Lithium Iron Phosphate)** | 80% – 90% | 3,500 – 6,000 cycles (planning range; manufacturer- and test-condition-dependent) | High thermal stability, flat discharge curve, long calendar life |
| **NMC Lithium-Ion** | 80% | 1,500 – 2,500 cycles | High gravimetric energy density, compact footprint |
| **AGM (Sealed Lead-Acid)** | 50% | 400 – 600 cycles | Maintenance-free, lower initial cost, limited cycle life |
| **Flooded Lead-Acid** | 50% | 300 – 500 cycles | Economical upfront, requires regular electrolyte maintenance & ventilation |

---

## 3. Engineering Sizing Methodology

The sizing calculation follows four sequential steps:

### Step 1 — Load Energy Demand

Multiply the total continuous running wattage by your target backup runtime:

```
Load Energy Required (Wh) = Continuous Load (W) × Desired Runtime (hours)
```

> **Motor Load Notice:** Motor-driven appliances can draw substantially more power during startup than during normal operation. Actual starting requirements vary by motor, compressor, appliance design, and operating conditions. For precise planning, manufacturer Locked Rotor Amps (LRA) or inrush measurements are preferred over generic multipliers.

### Step 2 — Account for Inverter Efficiency

Inverter conversion from DC to AC is not 100% efficient. Quality pure-sine inverters operate between 90% and 96% efficiency under typical operating loads (default planning value: 93%):

```
Energy Needed from Battery (Wh) = Load Energy Required (Wh) ÷ Inverter Efficiency
```

### Step 3 — Gross Nominal Battery Capacity

Account for the battery's usable Depth of Discharge and any environmental temperature derating:

```
Gross Battery Capacity (Wh) = Required Load Energy ÷ Inverter Efficiency ÷ Usable DoD × Temperature Factor
```

For example, a 350 W continuous load running for 8 hours with a 93% efficient inverter, 80% DoD LiFePO₄ battery, and no temperature derating requires:

```
2,800 Wh ÷ 0.93 ÷ 0.80 × 1.00 = 3,763 Wh (3.76 kWh nominal capacity)
```

This ensures that after reserving 20% capacity in the battery (80% DoD) and dissipating 7% conversion loss in the inverter, the full 2,800 Wh (2.80 kWh) reaches the AC loads.

### Step 4 — Battery Capacity in Amp-Hours

Convert nominal Watt-hours to Amp-hours at the battery bank's nominal DC voltage:

```
Battery Capacity (Ah) = Battery Capacity (Wh) ÷ System Voltage (V)
```

For the 3,763 Wh example at 48V:

```
3,763 Wh ÷ 48 V = 78.4 Ah @ 48V
```

### Step 5 — Recommended Inverter Rating

```
Recommended Continuous Inverter Rating = Continuous Load (W) × 1.25
```

The 1.25 multiplier provides a continuous-load planning margin to avoid operating the inverter at continuous maximum thermal capacity.

> **Surge Verification Requirement:** A 500 W continuous inverter may not provide sufficient startup power for refrigerators, pumps, compressors, or other motor-driven equipment. Always verify the inverter's peak surge rating against the manufacturer's startup requirement.

---

## 4. Battery Chemistry Characteristics

### LiFePO₄ — Lithium Iron Phosphate (Common Choice for Residential Battery Backup)

LiFePO₄ generally offers good thermal stability, long cycle life, and high usable capacity compared with many other lithium-ion chemistries. It still requires an appropriate Battery Management System (BMS), compatible charging equipment, overcurrent protection devices, and installation according to the manufacturer's requirements.
- **Cycle Life:** Typical manufacturer-rated cycle life can range widely; 3,500–6,000 cycles is used here as a planning range for qualifying LiFePO₄ products at specified test conditions. Cycle life is manufacturer- and test-condition-dependent.
- **Service Life:** Actual service life depends on cycling frequency, temperature, DoD, charge/discharge rates, calendar aging, and manufacturer specifications.
- **Usable DoD:** 80%–90% without severe degradation
- **Discharge Profile:** Maintains nearly constant voltage (~51.2V on 48V systems) throughout the discharge curve
- **Installation:** Indoor or temperature-managed enclosure. Many LiFePO₄ batteries use BMS protection to restrict or stop charging at low cell temperatures; some models include integrated heating. Follow the manufacturer's specified charging-temperature range.

### AGM (Absorbent Glass Mat) — Sealed Lead-Acid

AGM batteries are sealed, spill-proof lead-acid units suitable for standby emergency backup where cycling is infrequent:
- **Cycle Life:** 400–600 cycles at 50% DoD
- **Usable DoD:** 50% recommended maximum
- **Consideration:** Requires approximately double the nominal kWh capacity of lithium to provide equivalent usable energy

### Flooded Lead-Acid

Traditional wet-cell batteries with the lowest upfront cost per nameplate kWh. They require dedicated ventilation (due to hydrogen outgassing during charging), periodic distilled water replenishment, and routine equalization charging.

### NMC Lithium-Ion

Nickel Manganese Cobalt chemistry delivers high energy density per kilogram, making it common in electric vehicles and select compact commercial ESS cabinets. It requires rigorous thermal management and BMS cell supervision.

---

## 5. System Voltage Selection: 12V, 24V, and 48V

| System Voltage | Typical Application | Engineering Consideration |
|---|---|---|
| **12 V** | Small UPS, RV, portable/small backup systems (<1,000 W) | High current requires large copper conductor cross-sections |
| **24 V** | Medium-sized battery systems (1,000 W – 3,000 W) | Moderate conductor sizing and standard commercial balance-of-system parts |
| **48 V** | Larger residential, solar, and whole-home systems (>3,000 W) | Lower current simplifies wire sizing, reduces voltage drop, and cuts resistive losses |

**Engineering Principle:** Higher DC voltage reduces current for the same power ($I = P / V$), which simplifies conductor sizing and reduces resistive ($I^2R$) losses. Actual conductor size, overcurrent protection, voltage drop, and installation requirements must be calculated separately based on circuit length and local electrical codes.

---

## 6. Temperature Effects on Battery Capacity

Temperature adjustment in this calculator is an estimate. Actual low-temperature capacity and charging limits vary by battery chemistry and manufacturer:

```
Temperature adjustment is an estimate. Actual low-temperature capacity and charging limits
vary by battery chemistry and manufacturer. Always follow the battery manufacturer's
operating-temperature specifications.
```

> **Planning Assumption:** The following percentages are simplified planning assumptions, not universal battery performance specifications. Actual correction factors should come from the battery manufacturer's temperature/capacity data.

| Environment | Planning Derating | Practical Impact |
|---|---|---|
| Conditioned space (65–77°F / 18–25°C) | 0% | Optimal operating baseline |
| Unconditioned garage (50–65°F / 10–18°C) | +5% | Minor capacity reduction |
| Unheated shed / crawlspace (32–50°F / 0–10°C) | +15% | Measurable reduction in usable capacity |
| Outdoor / extreme cold (<32°F / 0°C) | +25% | Significant lead-acid capacity drop; LiFePO₄ charging may be restricted per manufacturer BMS settings |

**Cold-Weather Charging Distinction:** While LiFePO₄ batteries can discharge at sub-freezing temperatures with modest derating, standard cells **must not be charged below 32°F (0°C)** without internal heating elements, as lithium plating will permanently degrade the cell.

---

## 7. Solar Recharge Array Sizing

To configure a self-sustaining off-grid or extended-outage backup system, size your solar PV array using local peak sun hours:

```
Estimated PV Array Size (W) = Daily Energy Required (Wh) ÷ (Peak Sun Hours × Solar-System Efficiency)
```

The solar-system efficiency accounts for dust derating, temperature coefficients, wiring losses, and charge-controller conversion (typical planning range: **75% to 85%**; calculator default: 77%).

- **Peak Sun Hours (PSH):** Average equivalent hours per day at 1,000 W/m² irradiance (e.g., 5.5–7.0 hrs in the US Southwest; 3.5–5.0 hrs in temperate regions).
- **Module Sizing:** The calculator uses 400 W panels as a default planning assumption. Enter your actual panel wattage for a more accurate estimate.

---

## 8. Planning Cost Estimate & Assumptions

Actual installation costs vary significantly based on equipment tier, balance of system (BOS), subpanels, transfer switches, permitting, and labor rates:

| Component | Low Benchmark | Mid Benchmark | High Benchmark |
|---|---|---|---|
| **LiFePO₄ Battery Storage** | $400 / kWh | $600 / kWh | $800 / kWh |
| **AGM Battery Storage** | $200 / kWh | $300 / kWh | $400 / kWh |
| **Inverter / Charger** | $200 / kW | $350 / kW | $500 / kW |

*Illustrative planning range based on configurable battery and inverter cost assumptions. Actual equipment, installation, permitting, wiring, protection equipment, taxes, and labor can vary significantly by location and project.*

---

## 9. Code, Safety & Permitting

Electrical, fire-code, equipment-listing, permitting, and utility requirements vary by jurisdiction and system configuration. In the United States, applicable requirements may include the National Electrical Code (NFPA 70), NFPA 855, local fire and building codes, utility interconnection requirements, and product-specific installation instructions.

NEC Article 706 applies to energy storage systems within its scope; the NEC materials identify ESS above 1 kWh and reference NFPA 855 and UL 9540 among relevant standards.

UL 9540 is the product safety standard for applicable energy storage systems. **UL 9540A is a separate test method for evaluating thermal-runaway fire propagation — it is not the same thing as UL 9540 certification or listing.** UL explicitly distinguishes the two, and users should verify which standard applies to a given product or installation requirement.

The 2026 edition of NFPA 855 introduces significant large-scale fire-testing changes, and the sixth edition of UL 9540A was published in March 2026. These affect how certain ESS installations are evaluated for fire and thermal-runaway hazards.

This calculator provides planning estimates, not an electrical design or code-compliance determination. Consult the local Authority Having Jurisdiction (AHJ), utility, battery/inverter manufacturer, and a qualified electrical professional before installation.
