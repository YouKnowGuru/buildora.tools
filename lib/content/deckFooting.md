## Deck Footing Calculator — Complete Technical Guide
*Last Updated: 2026 Edition | International Residential Code (IRC R507) Deck Footing & Post Sizing*

---

## What This Calculator Does

This free **deck footing calculator** sizes concrete footings and support posts for a raised residential deck using the **IRC R507** tributary-load method. Enter your deck's dimensions, the live/dead loads, your soil's bearing capacity, and your post grid to determine:

- **Required footing area and diameter** (round) or **side length** (square) per post
- **Total number of support posts** and the **load each post carries** (lbs)
- **Recommended sonotube / pier diameter** from standard form sizes
- **Total concrete volume** in cubic yards (and cubic meters) for the whole deck
- **Code-sizing notes** (IRC R507, frost-depth requirements)

---

## 1. Deck Loads: Live, Dead, and Snow

A deck must be designed for the combined weight of everything on it. The two permanent loads are:

| Load Type | Typical Value | Source |
| :--- | :--- | :--- |
| **Live load** (people, furniture, grill) | 40 psf | IRC Table R301.5 (residential) |
| **Dead load** (decking, joists, railings) | 10 psf | Typical build-up |
| **Ground snow load** (optional) | 0–100 psf | Local amendment |

$$\text{Total Uniform Load (psf)} = \text{Live Load} + \text{Dead Load} + \text{Snow Load}$$

$$\text{Total Deck Load (lbs)} = \text{Deck Area (sq ft)} \times \text{Total Uniform Load (psf)}$$

> **Hot tubs, spa, or party decks:** bump live load to 60–100 psf. A 600-gallon hot tub adds roughly 5,000 lbs in a small footprint — it dominates the footing design and usually needs its own dedicated footings.

---

## 2. Step-by-Step Footing Sizing Pipeline (IRC R507)

The tributary-area method spreads the deck load evenly across its support posts, then sizes each footing to spread that post's load into the soil without exceeding the soil's allowable bearing pressure.

1. **Deck Area**: `Length (ft) × Width (ft)` → total square feet.
2. **Total Load**: `Deck Area × (Live + Dead + Snow) psf` → total pounds on the deck.
3. **Tributary Area per Post**: `Deck Area ÷ Total Posts` → square feet each post supports.
4. **Load per Post**: `Total Load ÷ Total Posts` → pounds carried by each footing.
5. **Required Footing Area**: `Load per Post ÷ Soil Bearing (psi)` → square inches (soil bearing psi = psf ÷ 144).
6. **Footing Diameter / Side**: round → `2 × √(Area / π)`; square → `√(Area)`. Round up to the next standard form size.

---

### Step 1 — Deck Area

$$\text{Deck Area (sq ft)} = \text{Length (ft)} \times \text{Width (ft)}$$

*For L-shape or freeform decks, enter the overall bounding length and width; the result is a conservative (slightly oversized) estimate.*

---

### Step 2 — Total Deck Load

$$\text{Total Deck Load (lbs)} = \text{Deck Area (sq ft)} \times (\text{Live} + \text{Dead} + \text{Snow}) \text{ psf}$$

---

### Step 3 — Tributary Area & Load per Post

$$\text{Tributary Area per Post (sq ft)} = \frac{\text{Deck Area}}{\text{Total Posts}}$$
$$\text{Load per Post (lbs)} = \frac{\text{Total Deck Load (lbs)}}{\text{Total Posts}}$$

*Total Posts = Post Rows × Posts Per Row. A 2-row × 3-post deck = 6 posts.*

---

### Step 4 — Required Footing Area

Soil has a maximum **allowable bearing pressure** (psf). Divide the post load by it to get the footing area that keeps soil stress within limits.

$$\text{Required Footing Area (sq in)} = \frac{\text{Load per Post (lbs)}}{\text{Soil Bearing (psf)} \div 144}$$

Typical allowable soil bearing values:

| Soil Classification | Allowable Bearing (psf) | Code Reference / Geotechnical Guidance |
| :--- | :--- | :--- |
| Soft Clay / Sandy Clay | 1,500 | IRC Table R401.4.1 (Clay, sandy clay, silty clay) |
| Silt / Loam / Silty Sand | 2,000 | IRC Table R401.4.1 (Sand, silty sand, clayey sand) |
| Sandy Loam / Mixed Granular | 2,500 | General geotechnical engineering guidance |
| Gravel / Sandy Gravel | 3,000 | IRC Table R401.4.1 (Sandy gravel and/or gravel) |
| Compacted Fill / Dense Sand | 4,000 | Geotechnical report / engineered fill |

> **IRC Code Note:** IRC Table R401.4.1 establishes presumptive soil-bearing capacities in the absence of a site-specific geotechnical soils investigation. Where unknown, most local building departments assume 1,500 psf or 2,000 psf by default for deck footing plan reviews.

---

### Step 5 — Footing Diameter (Round) or Side (Square)

$$\text{Round Footing Diameter (in)} = 2 \times \sqrt{\frac{\text{Required Area (sq in)}}{\pi}}$$
$$\text{Square Footing Side (in)} = \sqrt{\text{Required Area (sq in)}}$$

Round up to the nearest **standard sonotube** size (8, 10, 12, 14, 16, 18, 20, or 24 in).

---

### Step 6 — Concrete Volume

$$\text{Concrete per Footing (cu ft)} = \text{Footing Area (sq ft)} \times \text{Thickness (ft)}$$
$$\text{Total Concrete (cu yd)} = \frac{\text{Concrete per Footing (cu ft)} \times \text{Total Posts}}{27}$$

*Order 10% extra for spillage and grade variance.*

---

## 3. Worked Example: 16 ft × 12 ft Deck on Sandy Loam

Consider a **16 ft × 12 ft** ground-level deck (192 sq ft) on **sandy loam (2,500 psf)** with a **2-row × 3-post** grid (6 posts), 12 in thick footings:

1. **Deck Area**: $16 \times 12 = 192\text{ sq ft}$
2. **Total Load**: $192 \times (40 + 10 + 0) = 192 \times 50 = \mathbf{9,600\text{ lbs}}$
3. **Load per Post**: $9,600 \div 6 = \mathbf{1,600\text{ lbs}}$
4. **Required Footing Area**: $1,600 \div (2,500 \div 144) = 1,600 \div 17.36 = \mathbf{92\text{ sq in}}$
5. **Footing Diameter**: $2 \times \sqrt{92 / \pi} = 2 \times \sqrt{29.3} = 2 \times 5.41 = \mathbf{10.8\text{ in}} \rightarrow \text{round up to a 12 in sonotube}$
6. **Concrete per Footing**: $\pi \times (12 / 24)^2 \times 1\text{ ft} = \pi \times 0.25 \times 1 = 0.785\text{ cu ft}$; **Total**: $0.785 \times 6 \div 27 = \mathbf{0.17\text{ cu yd}}$ (about 4.6 × 60 lb bags, plus 10%).

---

## 4. Footing Depth & Frost Protection

Calculated **thickness** is only the concrete pier dimension — it is **not** the hole depth. Per IRC R403.1.4 / local amendment, footings must extend to the **local frost depth** (commonly 30–48 in across US climate zones) so freeze–thaw heave cannot lift the deck. Always call 811 before digging and confirm frost depth with your building department.

---

## 5. Frequently Asked Questions (FAQ)

### How many deck footings do I need?

A simple rule of thumb: size posts on roughly a 6–8 ft grid. A 16 ft × 12 ft deck typically needs **6 posts** (2 rows of 3) plus the ledger bolted to the house. The calculator refines this from your actual load and soil: more posts = smaller footings; fewer posts = larger footings.

### How big should deck footings be?

For a standard 40 psf live / 10 psf dead deck on 2,500 psf sandy loam, expect roughly a **12 in diameter** round footing (sonotube) per post under a normal post grid. Soft clay (1,500 psf) pushes that to 14–16 in; compacted gravel (4,000 psf) drops it to 8–10 in. Always verify against your post load above.

### How deep do deck footings need to be?

The concrete footing itself is usually 8–12 in thick, but the **excavated hole must reach local frost depth** (typically 30–48 in). Digging below the frost line prevents heaving. Check your municipality's frost-depth requirement before forming.

### Can I use deck blocks instead of poured footings?

Deck blocks (pre-cast pier blocks) are acceptable for **low, freestanding, ground-level decks** in many jurisdictions, but they sit at/above grade and are **not frost-protected** — they can heave in cold climates. Poured, frost-depth footings are required for attached decks and any deck above a certain height (commonly 30 in+ railing threshold per IRC R312).

### How much concrete do I need for deck footings?

Multiply the footing area by thickness by the number of posts, then divide by 27 for cubic yards. A typical 6-post deck with 12 in round footings 12 in thick needs well under 1 cubic yard — usually a few 60 lb bags (≈0.5–1 cu yd). The calculator gives the exact figure and a metric equivalent.

---

## Related Calculators

- **[Concrete Calculator](/calculators/concrete-calculator)** — convert footing volumes to bags, cubic yards, and cost for the whole pour.
- **[Square Footage Calculator](/calculators/square-footage-calculator)** — verify deck and site area measurements before sizing.
- **[Stair Calculator](/calculators/stair-calculator)** — size deck stairs and stringers to code when your deck has a step-down.
