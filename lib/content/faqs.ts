import type { Faq } from './types';

/**
 * Per-tool FAQ copy, English only.
 *
 * Rendered as visible on-page content AND as FAQPage JSON-LD on the English
 * routes. Google requires the marked-up Q&As to be visible on the page, so
 * these two must always come from this same source.
 */
export const TOOL_FAQS: Record<string, Faq[]> = {
  'gutter-cleaning-cost-calculator': [
    {
      question: 'How much does gutter cleaning cost?',
      answer: 'Professional gutter cleaning for a typical one- or two-story home often costs $125 to $350. Long runs, heavy debris, difficult ladder access, and taller homes can increase the price.',
    },
    {
      question: 'Are gutter guards maintenance-free?',
      answer: 'No. Gutter guards reduce the debris entering the channel, but leaves, pine needles, and roof grit can build up on top of or beneath them. They should still be inspected and cleaned when needed.',
    },
    {
      question: 'When should gutters be cleaned?',
      answer: 'Many homes benefit from cleaning after spring pollen and again after autumn leaf drop. Homes surrounded by mature trees may need more frequent service, especially before the rainy season.',
    },
  ],
  'basement-waterproofing-cost-calculator': [
    {
      question: 'How much does basement waterproofing cost?',
      answer: 'Many basement waterproofing projects fall between $3,000 and $12,000, while exterior systems with excavation, difficult access, or extensive restoration can cost more. A written local inspection is the best way to confirm scope and price.',
    },
    {
      question: 'Is interior or exterior basement waterproofing better?',
      answer: 'Interior drainage is often less disruptive and manages water at the footing. Exterior waterproofing can stop water before it reaches the foundation wall but typically requires excavation. The suitable method depends on the water source, wall condition, and site access.',
    },
    {
      question: 'Does a sump pump fix a wet basement?',
      answer: 'A sump pump removes collected groundwater, but it does not repair foundation cracks, improve exterior grading, or correct every drainage problem. It is commonly one component of a broader waterproofing system.',
    },
  ],
  'asphalt-calculator': [
    {
      question: 'How many tons of asphalt do I need for a 20x10 driveway?',
      answer:
        'For a 20 ft by 10 ft driveway at a standard 4-inch compacted depth (145 lb/ft³ density and 5% waste), you need approximately 5.1 tons of asphalt (approx. 2.47 cubic yards).',
    },
    {
      question: 'How many square feet does 1 ton of asphalt cover?',
      answer:
        'At 2 inches compacted depth, 1 ton of asphalt covers approximately 80–90 sq ft. At 3 inches it covers ~55–60 sq ft, and at 4 inches it covers ~40–45 sq ft.',
    },
    {
      question: 'How do you calculate asphalt tonnage from dimensions?',
      answer:
        'Multiply Length (ft) × Width (ft) × Depth (in) / 12 to get cubic feet. Multiply cubic feet by 145 lb/ft³ density, divide by 2,000 for tons, and add a 5% to 10% waste factor.',
    },
    {
      question: 'What is the standard asphalt thickness for a residential driveway?',
      answer:
        'Most residential asphalt driveways require a compacted thickness of 2 to 4 inches, installed over a well-compacted 4- to 8-inch crushed stone sub-base.',
    },
  ],
  'demolition-cost-calculator': [
    {
      question: 'How much does it cost to demolish a 1,500 sq ft house?',
      answer:
        'A 1,500 sq ft wood-frame house typically costs $10,000–$20,000 all-in, including labor ($8,000–$12,000), debris hauling ($1,500–$3,000), and a demolition permit ($300–$800).',
    },
    {
      question: 'What is the cheapest demolition method?',
      answer:
        'Mechanical demolition using an excavator or bulldozer is the cheapest per square foot because it greatly reduces labour hours. Manual demolition can cost 60–80% more.',
    },
    {
      question: 'Do I need a permit to demolish a house?',
      answer:
        'Yes — most US municipalities require a demolition permit costing $200–$1,000. Some also require an asbestos inspection before issuing the permit.',
    },
    {
      question: 'How many dumpster loads does a house demolition produce?',
      answer:
        'A typical 1,500 sq ft single-story wood-frame house produces approximately 195 cubic yards of debris, requiring 5–7 standard 30-CY roll-off dumpster loads.',
    },
    {
      question: 'How long does house demolition take?',
      answer:
        'A 1,500–2,000 sq ft wood-frame house can be mechanically demolished in 1 to 3 days. Manual or selective deconstruction may take 1 to 2 weeks.',
    },
  ],
  'trench-calculator': [
    {
      question: 'How do you calculate trench excavation volume?',
      answer:
        'Trench volume (cu yd) = Length (ft) × Width (ft) × Depth (ft) ÷ 27. For a 50 ft × 2 ft × 4 ft trench: 50 × 2 × 4 ÷ 27 = 14.81 cu yd of excavation.',
    },
    {
      question: 'How much does trench excavation cost per linear foot?',
      answer:
        'Shallow utility trenches (2–3 ft deep) typically cost $8–$15 per linear foot. Standard sewer/water trenches (4–6 ft) run $15–$35/lf. Deep trenches over 6 ft can cost $35–$80/lf depending on soil, shoring, and location.',
    },
    {
      question: 'How many cubic yards of soil does one dump truck hold?',
      answer:
        'A standard dump truck holds approximately 10–14 cubic yards of soil (14 tons). Our calculator uses a 14-CY capacity for truck load estimates. Actual capacity varies by truck size.',
    },
    {
      question: 'What is the swell factor for excavated soil?',
      answer:
        'Excavated soil expands 20–30% in volume when loosened (swell factor). We apply 25% as the standard. So 10 cu yd of in-situ soil becomes approximately 12.5 cu yd of loose spoil to haul away.',
    },
    {
      question: 'When do I need shoring for a trench?',
      answer:
        'OSHA 29 CFR 1926 Subpart P requires a protective system (sloping, benching, trench shield, or shoring) for any trench 5 feet or deeper. Trenches 20 feet or deeper require design by a registered PE.',
    },
  ],
  'warehouse-space-calculator': [
    {
      question: 'How much warehouse space do I need for 1,000 pallets?',
      answer:
        'Using standard 4-high selective pallet racking and narrow-aisle reach trucks, 1,000 pallets require approximately 6,500–7,500 sq ft (including aisles and dock staging). Floor stacking (2-high) requires 12,000–14,000 sq ft.',
    },
    {
      question: 'What is the standard square footage per pallet in a warehouse?',
      answer:
        'A standard GMA 48"x40" pallet footprint is 13.33 sq ft. With flue space and rack upright clearances, each pallet position requires approximately 15.0 sq ft on the ground level before adding aisle and staging allowances.',
    },
    {
      question: 'How much aisle space do forklifts need in a warehouse?',
      answer:
        'Standard counterbalance forklifts require 12–13 ft wide aisles (~40-45% of total floor area). Reach trucks require 9–10 ft aisles (~30% of floor area). Very Narrow Aisle (VNA) turret trucks require only 5.5–6.5 ft aisles (~18% of floor area).',
    },
    {
      question: 'How do you calculate monthly warehouse lease cost?',
      answer:
        'Multiply total warehouse square footage by your annual lease rate per sq ft (NNN), then divide by 12. For example, 10,000 sq ft at $9.00/sq ft/yr = $90,000/yr or $7,500/month base rent.',
    },
    {
      question: 'What percentage of a warehouse should be used for storage?',
      answer:
        'In a typical distribution center, pure storage racks occupy 40–50% of the building, aisles occupy 25–30%, and loading docks, staging, packing, and offices occupy the remaining 20–25%.',
    },
  ],
  'snow-load-calculator': [
    {
      question: 'What is the ASCE 7 formula for flat roof snow load?',
      answer:
        'Per ASCE 7-22 §7.3, the flat roof snow load is: pf = 0.7 × Ce × Ct × Is × pg. Where pg = ground snow load (psf), Ce = exposure factor (0.9–1.3), Ct = thermal factor (1.0–1.3), and Is = importance factor (0.8–1.2). The 0.7 coefficient accounts for the fact that not all ground snow accumulates on a roof.',
    },
    {
      question: 'How much snow load can a roof handle?',
      answer:
        'Most residential roofs in the US are designed for 20–40 psf of roof snow load (equivalent to 2–4 ft of fresh snow or 1.2–2 ft of wet/compacted snow). A 40 psf design load on a 2,000 sq ft house equals 80,000 lbs (40 tons) of total structural load. Roofs in mountain regions may be designed for 100–200 psf.',
    },
    {
      question: 'How do I convert ground snow load to roof snow load?',
      answer:
        'Multiply ground snow load (pg) by the ASCE 7 factors: pf = 0.7 × Ce × Ct × Is × pg. Example: pg = 30 psf, sheltered site (Ce = 1.3), heated building (Ct = 1.0), residential (Is = 1.0) gives pf = 0.7 × 1.3 × 1.0 × 1.0 × 30 = 27.3 psf. Always check against the minimum (Is × 20 psf).',
    },
    {
      question: 'What is a snow drift load?',
      answer:
        'Snow drift occurs when wind blows snow off higher roofs or terrain and piles it on adjacent lower roofs. Per ASCE 7-22 §7.7, drift height hd is calculated as 0.43 × lu^(1/3) × (pg + 10)^(1/4) − 1.5 (in ft). The drift surcharge pd = hd × γ (snow density). Drift loads can be 2–5× the balanced snow load directly at the wall.',
    },
    {
      question: 'Does roof slope reduce the design snow load?',
      answer:
        'Yes. ASCE 7-22 §7.4 applies a slope reduction factor Cs. For heated roofs (Ct ≤ 1.0): Cs = 1.0 for slopes ≤ 30°, decreasing linearly to 0.0 at 70°. For unheated/freezer roofs (Ct ≥ 1.2): Cs = 1.0 only up to 15°, then drops faster. The sloped load is ps = Cs × pf.',
    },
  ],
  'square-footage-calculator': [
    {
      question: 'What is the formula to calculate square footage?',
      answer:
        'For a rectangle or square, the formula is: Length (ft) × Width (ft) = Square Footage (sq ft). For circles: π × (diameter / 2)². For triangles: 0.5 × Base × Height. For trapezoids: 0.5 × (Base 1 + Base 2) × Height.',
    },
    {
      question: 'How do I convert inches to square footage?',
      answer:
        'Measure your length and width in inches, multiply them together to get square inches, then divide by 144. Example: 180 inches × 120 inches = 21,600 sq in ÷ 144 = 150 sq ft.',
    },
    {
      question: 'How much extra square footage should I buy for waste?',
      answer:
        'Industry recommendations: 5–10% for standard hardwood and carpet, 10–12% for ceramic tile, 7–10% for luxury vinyl plank (LVP), and 15–20% for diagonal, herringbone, or complex room layouts.',
    },
    {
      question: 'How many square feet are in a 10x10 and 12x12 room?',
      answer:
        'A 10x10 room is 100 square feet (order 110 sq ft with 10% waste). A 12x12 room is 144 square feet (order ~158–160 sq ft with 10% waste).',
    },
    {
      question: 'How do I convert square feet to square yards and square meters?',
      answer:
        'To convert square feet to square yards (used for carpet and sod), divide by 9 (sq ft ÷ 9 = sq yd). To convert square feet to square meters (m²), multiply by 0.092903 (sq ft × 0.092903 = m²).',
    },
  ],
  'siding-calculator': [
    {
      question: 'How do I calculate how much siding I need for a house?',
      answer:
        'Calculate total wall area: Perimeter (ft) × Wall Eave Height (ft). Add gable areas (0.5 × Base × Height for triangles, or trapezoid + triangle for gambrel roofs). Subtract door and window openings. Apply your chosen waste factor (typically 10%). Divide the total by 100 to get the required siding squares (1 square = 100 sq ft).',
    },
    {
      question: 'What is a "square" of siding?',
      answer:
        '1 square = exactly 100 square feet of surface area (10 ft × 10 ft). Siding materials (vinyl cartons, fiber cement pallets, cedar bundles) and contractor labor estimates are priced by the square.',
    },
    {
      question: 'How do I estimate siding for a 1,500 sq ft vs 2,500 sq ft house?',
      answer:
        'Siding square footage depends on exterior wall surface area, not interior floor area. A single-story 1,500 sq ft home (30×50 ft footprint, 9 ft eaves) has ~1,440 sq ft gross wall area (approx. 12–14 squares net with waste). A two-story 2,500 sq ft home (35×36 ft footprint, 18 ft total wall height) has ~2,550 sq ft gross wall area (approx. 24–27 squares net with waste).',
    },
    {
      question: 'How do I calculate gambrel (barn-style) roof siding?',
      answer:
        'A gambrel gable features two distinct pitches: a lower steep slope and an upper shallow slope. Calculate the lower section as a trapezoid: (Base + Break Width) / 2 × Lower Height, and the upper section as a triangle: 0.5 × Break Width × Upper Height. Our calculator computes gambrel geometry automatically.',
    },
    {
      question: 'How much waste should I add when ordering siding?',
      answer:
        'Add 5–10% for standard horizontal vinyl or metal siding on a simple rectangular house. Add 10–12% for fiber cement or engineered wood. Add 15–20% for wood shakes, complex facades, dormers, or multiple gable ends.',
    },
  ],
  'stair-calculator': [
    {
      question: 'How many steps do I need for an 8-foot ceiling?',
      answer:
        'A standard 8 ft (96 in) ceiling with typical floor joists and subfloor results in approximately 105 inches of total vertical rise. Dividing 105 in by an ideal 7.5 in riser height gives exactly 14 risers (13 treads) at 7.5 inches per step.',
    },
    {
      question: 'What is the maximum riser height and minimum tread depth allowed by code?',
      answer:
        'Under the International Residential Code (IRC §R311.7.5), the maximum riser height is 7¾ inches (197 mm) and the minimum tread depth is 10 inches (254 mm). For commercial buildings under IBC §1011, the maximum riser height is 7.0 inches (178 mm) and the minimum tread depth is 11.0 inches (279 mm).',
    },
    {
      question: 'What is the minimum stringer throat depth?',
      answer:
        'IRC §R311.7.10 requires a minimum remaining throat depth (the solid wood remaining after cutting tread and riser notches) of at least 3.5 inches (89 mm) on standard 2×12 nominal lumber.',
    },
    {
      question: 'What is Blondel\'s rule for stair comfort?',
      answer:
        'Blondel\'s ergonomic rule states that 2 × Riser Height + 1 × Tread Depth should equal 24 to 25 inches (600 to 635 mm). This formula matches the natural human walking stride when ascending and descending stairs.',
    },
    {
      question: 'How much vertical headroom is required for stairs?',
      answer:
        'IRC §R311.7.2 mandates a minimum vertical headroom clearance of 80 inches (6 ft 8 in / 2,032 mm) measured vertically from the leading edge (nosing) of each tread to the ceiling plane or joist above.',
    },
  ],
  'sod-calculator': [
    {
      question: 'How do I calculate how much sod I need?',
      answer:
        'Measure your lawn area by shape (rectangle, circle, triangle, trapezoid, L-shape, or irregular), multiply by the number of identical sections, then add 5–15% waste factor for cuts around obstacles. Our calculator does this automatically and converts to rolls and pallets.',
    },
    {
      question: 'How many rolls of sod are on a pallet?',
      answer:
        'A standard sod pallet contains 45 rolls covering approximately 450 sq ft. However, pallet sizes vary by supplier — some carry 40 rolls (400 sq ft) or 50 rolls (500 sq ft). Always confirm roll count with your local sod farm.',
    },
    {
      question: 'How much does sod cost per square foot?',
      answer:
        'Sod costs range from $0.20 to $0.80 per square foot depending on grass type. Bahia and Rye are the most economical ($0.20–$0.40/sq ft), while Zoysia and Kentucky Bluegrass are premium ($0.35–$0.80/sq ft). Professional installation adds $0.50–$1.50/sq ft.',
    },
    {
      question: 'How much waste factor should I add for sod?',
      answer:
        'Add 5% waste for simple rectangular lawns with no obstacles. Add 10% for standard residential yards with walkways, trees, and flower beds. Add 15% for complex curves, slopes, and irregular shapes requiring extensive cutting.',
    },
    {
      question: 'How long can sod sit on a pallet before installation?',
      answer:
        'Sod is perishable living grass and should be installed as soon as possible after delivery (ideally within 24 hours). Avoid leaving pallets exposed to direct sunlight and high heat.',
    },
  ],
  'insulation-calculator': [
    {
      question: 'How do I calculate how much insulation I need for an attic?',
      answer:
        'Measure your attic length and width to find gross square footage (e.g. 1,000 sq ft) and include planning waste (e.g. 8% = 1,080 sq ft). Determine your climate zone target R-value (e.g. R-38). For blown-in cellulose, divide total R-square-footage by 720 to calculate bags needed (1,000 × 38 ÷ 720 ≈ 53 net bags; with 8% waste allowance, 1,080 × 38 ÷ 720 ≈ 57 bags). For fiberglass batts, divide total purchase area by coverage per pack (~24–30 sq ft per R-38 pack).',
    },
    {
      question: 'What R-value is recommended for my climate zone?',
      answer:
        'Per IECC 2021 code: Southern warm zones (Zones 1–3) require R-30 to R-38 in attics, R-13 to R-20 in walls, and R-13 to R-19 in floors. Moderate and cold zones (Zones 4–8) require R-49 to R-60 in attics, R-20 to R-21+ in walls, and R-19 to R-38 in floors.',
    },
    {
      question: 'How many square feet does one bag of blown-in insulation cover?',
      answer:
        'A standard 25 lb bag of blown-in cellulose covers approximately 37–40 sq ft at R-19, 18–20 sq ft at R-38, 14–15 sq ft at R-49, and 11–12 sq ft at R-60. A standard 30 lb bag of blown fiberglass covers ~70 sq ft at R-19 and ~35 sq ft at R-38.',
    },
    {
      question: 'What is the difference between open-cell and closed-cell spray foam?',
      answer:
        'Open-cell spray foam (0.5 lb density) provides ~R-3.7 per inch, expands quickly to fill deep cavities, and acts as an air barrier but is vapor-permeable. Closed-cell spray foam (2.0 lb density) provides ~R-6.5 to R-7.0 per inch, adds structural rigidity, and acts as a Class II vapor retarder suitable for damp basements and flood-prone zones.',
    },
    {
      question: 'How do wood framing studs affect cavity insulation calculations?',
      answer:
        'Standard 2x4 and 2x6 wall studs spaced 16 inches on-center occupy approximately 10% to 12% of total wall surface area. Framing spaced 24 inches on-center occupies ~7%. Our calculator automatically deducts framing area for cavity batts so you purchase the exact material needed without overbuying.',
    },
  ],
  'spray-foam-insulation-cost-calculator': [
    {
      question: 'How many board feet of spray foam do I need?',
      answer:
        'Multiply your total surface area in square feet by the desired thickness in inches, then add a 10% to 15% overspray and trimming factor. For example, a 1,000 sq ft roof deck at 3.5 inches closed-cell foam requires 1,000 × 3.5 = 3,500 raw board feet, or 3,850 board feet with 10% waste allowance.',
    },
    {
      question: 'What is the difference between open-cell and closed-cell spray foam?',
      answer:
        'Open-cell foam (0.5 lb/cu ft, R-3.7/inch) is flexible, vapor-permeable, excellent for interior sound damping, and expands 100x. Closed-cell foam (2.0 lb/cu ft, R-6.7/inch) creates an air-tight barrier, qualifies as a Class II vapor retarder (0.1–1.0 perm at ≥1.5"), adds +250% structural racking strength, and resists flood damage.',
    },
    {
      question: 'How many board feet does a 55-gallon drum set yield?',
      answer:
        'A standard contractor 55-gallon chemical drum set (A-Side isocyanate + B-Side polyol resin) yields approximately 4,000 to 5,000 board feet for 2.0 lb closed-cell foam, and 16,000 to 20,000 board feet for 0.5 lb open-cell foam under standard ambient temperature and pressure conditions.',
    },
    {
      question: 'When is a DC315 thermal barrier coating required by building code?',
      answer:
        'Under IRC Section R316.4 and IBC Section 2603.4, spray foam plastic insulation must be separated from occupied spaces by an approved 15-minute thermal barrier (such as 1/2" drywall or DC315 intumescent fire paint). In attics and crawlspaces used for mechanical equipment or storage, an ignition barrier coating is required by IRC Section R316.5.3.',
    },
    {
      question: 'How is spray foam labor priced vs material volume?',
      answer:
        'Professional spray foam installation labor is typically priced per square foot of physical surface sprayed (typically $1.00 to $2.50/sq ft depending on access, masking, and height), whereas chemical material is purchased by the board foot or drum set. Overspray waste factors apply to chemical volume, not surface application labor.',
    },
    {
      question: 'What is the difference between board feet and square feet?',
      answer:
        'Square feet measures 2D surface area (Length × Width), while board feet measures 3D volume (Square Feet × Thickness in Inches). For example, 1,000 sq ft of surface insulated to 3.5 inches thickness equals 3,500 raw board feet, or 3,850 board feet with a standard 10% overspray allowance.',
    },
  ],
  'water-softener-size-calculator': [
    {
      question: 'What size water softener do I need for a family of 4?',
      answer:
        'For a family of 4 at 75 gallons per person per day (300 GPD) with 25 GPG hard water: 300 × 25 × 7 days × 1.20 reserve = 63,000 grains required. The next standard size up is a 64,000 grain system (2.0 cu ft resin, 12″ × 52″ tank). Higher hardness or dissolved iron will push the requirement to the next tier.',
    },
    {
      question: 'How do I calculate water softener grain capacity?',
      answer:
        'Multiply household members × gallons per person per day (typically 75 GPD) to get daily usage. Multiply daily usage × compensated hardness in GPG to get daily grains. Multiply daily grains × days between regenerations × 1.20 (20% reserve) to get required grain capacity. Select the next standard system size above that number.',
    },
    {
      question: 'What is the difference between GPG and PPM water hardness?',
      answer:
        '1 GPG (Grains per Gallon) equals 17.118 PPM (mg/L). Municipal water quality reports typically use PPM; water softener specifications use GPG. To convert: divide your PPM reading by 17.118 to get GPG. For example, 250 PPM ÷ 17.118 = 14.6 GPG (Extremely Hard).',
    },
    {
      question: 'How does dissolved iron affect water softener sizing?',
      answer:
        'Per WQA standards, each 1 ppm of dissolved clear-water iron (Fe²⁺) is equivalent to 4 GPG of additional hardness load on the resin. A well with 25 GPG hardness and 2 ppm iron has a compensated hardness of 25 + (2 × 4) = 33 GPG — requiring a significantly larger softener than hardness alone would suggest.',
    },
    {
      question: 'How much salt does a water softener use per year?',
      answer:
        'Salt consumption equals (resin volume in cu ft) × 8 lbs/cu ft per regeneration cycle × number of annual cycles. A 1.0 cu ft (32,000 grain) softener regenerating every 7 days uses 8 lbs per cycle × 52 cycles = approximately 416 lbs per year, or about 10–11 bags of 40-lb salt annually.',
    },
  ],
  'electrical-load-calculator': [
    {
      question: 'How do you calculate electrical service load for a house?',
      answer:
        'Under NEC Article 220.82 (Optional Method): (1) Multiply conditioned sq ft × 3 VA, (2) Add small appliance circuits (3,000 VA) and laundry (1,500 VA), (3) Add nameplate watts of all fixed appliances (range, dryer, water heater, EV charger), (4) Take the first 10,000 VA @ 100% and remainder @ 40%, (5) Add the larger of the cooling or heating load @ 100%, (6) Divide total VA by 240 Volts to get required service amperage.',
    },
    {
      question: 'What size electrical panel do I need for a 2,000 sq ft house?',
      answer:
        'A standard 2,000 sq ft modern all-electric home with central air conditioning, an electric range, electric water heater, and a Level 2 EV charger typically requires a 200 Amp electrical service panel (calculating between 120A and 165A demand load). Homes with gas heating and gas water heating may fit within a 100A or 125A service.',
    },
    {
      question: 'Can I add a 48A or 50A EV charger to a 100A electrical panel?',
      answer:
        'In most homes with central air conditioning or electric cooking/water heating, adding a 48A (11.5 kW) or 50A (9.6 kW) Level 2 EV charger will overload a 100A panel under NEC Article 220 calculations. A 200A service upgrade or an approved EV energy management system (EVEMS load shedder) is usually required.',
    },
    {
      question: 'What wire size is required for a 200 Amp electrical service?',
      answer:
        'Per NEC Table 310.12 for 120/240V single-phase dwelling services: 200 Amp service requires #2/0 AWG Copper (Cu) or #4/0 AWG Aluminum (Al) conductors rated at 75°C, installed in a minimum 2-inch conduit with a #4 AWG Copper grounding electrode conductor.',
    },
  ],
  'deck-footing-calculator': [
    {
      question: 'How many deck footings do I need?',
      answer:
        'Size support posts on roughly a 6–8 ft grid. A typical 16 ft × 12 ft deck uses 6 posts (2 rows of 3) plus the ledger bolted to the house. The calculator refines this from your actual load and soil: more posts mean smaller footings, fewer posts mean larger footings.',
    },
    {
      question: 'How big should deck footings be?',
      answer:
        'For a standard 40 psf live / 10 psf dead deck on 2,500 psf sandy loam, expect about a 12 in diameter round (sonotube) footing per post under a normal grid. Soft clay (1,500 psf) pushes to 14–16 in; compacted gravel (4,000 psf) drops to 8–10 in.',
    },
    {
      question: 'How deep do deck footings need to be?',
      answer:
        'The footing concrete is usually 8–12 in thick, but the excavated hole must reach the local frost depth (typically 30–48 in). Digging below the frost line prevents freeze–thaw heave. Confirm frost depth with your building department.',
    },
    {
      question: 'Can I use deck blocks instead of poured footings?',
      answer:
        'Pre-cast deck blocks work for low, freestanding, ground-level decks in some jurisdictions, but they sit at grade and are not frost-protected so they can heave in cold climates. Poured, frost-depth footings are required for attached decks and decks above the local railing-height threshold (commonly 30 in).',
    },
    {
      question: 'How much concrete do I need for deck footings?',
      answer:
        'Multiply the footing area by thickness by the number of posts, then divide by 27 for cubic yards. A 6-post deck with 12 in round footings 12 in thick needs well under 1 cubic yard — usually a few 60 lb bags (about 0.5–1 cu yd). The calculator gives the exact figure plus a metric equivalent.',
    },
  ],
  'concrete-block-calculator': [
    {
      question: 'How many 8x8x16 concrete blocks are in a 100 sq ft wall?',
      answer:
        'A 100 square foot wall requires exactly 112.5 blocks (nominal 8" × 16" face area covers 0.8889 sq ft, meaning 1.125 blocks per sq ft). Factoring in a standard 5% waste margin, you should order 118 blocks.',
    },
    {
      question: 'How many bags of mortar do I need for 100 concrete blocks?',
      answer:
        'For 100 standard 8x8x16 CMU blocks, you need approximately 7.5 to 8 pre-mixed 80 lb bags of Type S or Type N mortar with standard 3/8" face-shell bed and head joints. If using 60 lb bags, plan on 10 bags per 100 blocks.',
    },
    {
      question: 'What is the difference between nominal and actual concrete block size?',
      answer:
        'The nominal size includes the 3/8-inch (9.5 mm) mortar joint. An 8" × 8" × 16" nominal block actually measures 7-5/8" wide × 7-5/8" high × 15-5/8" long. When laid with a 3/8" bed joint and 3/8" head joint, it occupies exactly 8 inches in height and 16 inches in running length.',
    },
    {
      question: 'How much grout do I need to fill concrete block cores?',
      answer:
        'For 8x8x16 CMUs, 100% solid core fill requires roughly 1.30 cubic yards of grout per 100 blocks (0.35 cu ft of void per block). Filling cores at 32 inches on-center (every other block) requires approximately 0.33 cubic yards per 100 blocks, plus top bond beam grout.',
    },
    {
      question: 'How to calculate concrete blocks needed to build a wall?',
      answer:
        'Multiply the wall length by height to get total square footage, subtract any door or window openings, and multiply by 1.125 (for standard 8x8x16 inch blocks). Finally, add 5% to 10% for waste, cutting, and corners.',
    },
    {
      question: 'How many concrete blocks will I need for an 8-foot high wall?',
      answer:
        'An 8-foot high wall requires 12 vertical courses of standard 8-inch CMU blocks. Multiply your wall length in feet by 0.75 to find blocks per course, then multiply by 12 courses. For example, a 20-foot long by 8-foot high wall requires 15 blocks per course × 12 courses = 180 blocks (189 with 5% waste).',
    },
    {
      question: 'How much does a concrete block wall cost to build?',
      answer:
        'Standard 8x8x16 concrete blocks cost $2.00 to $3.50 per block for materials, while mortar and grout add $0.80 to $1.50 per block. Professional mason labor typically ranges from $10 to $20 per square foot, bringing the total installed cost of a concrete block wall to $15–$30 per square foot.',
    },
  ],
  'bathroom-remodel-cost-calculator': [
    {
      question: 'How much does it cost to remodel a bathroom?',
      answer:
        'Nationwide in the U.S., a standard bathroom remodel typically costs $10,000 to $22,000 for a mid-range full bathroom, with the national median around $14,500. A budget refresh (keeping the layout and replacing fixtures) starts at $4,500–$8,500. A comprehensive master bathroom remodel with custom tile, double vanity, and plumbing shifts generally runs $22,000–$45,000+. This calculator models these exact cost brackets by square footage and finish tier.',
    },
    {
      question: 'How much does a shower remodel cost compared to a full bathroom remodel?',
      answer:
        'A shower-only remodel typically costs $3,500–$8,500 for a prefabricated acrylic or fiberglass surround, and $6,500–$14,000+ for a custom tiled walk-in shower with a bonded waterproof membrane and frameless glass door. In contrast, a full bathroom remodel updates all trades — vanity, toilet, floor tile, electrical, plumbing trim, and paint — running $12,000–$25,000+ for standard sizes.',
    },
    {
      question: 'How much does it cost to add a new bathroom vs remodel an existing one?',
      answer:
        'Remodeling an existing bathroom typically costs $6,000–$20,000 because the plumbing supply lines, DWV soil stacks, and electrical branch circuits already exist. Adding a brand-new bathroom where none existed (e.g., in a basement, closet conversion, or new home addition) typically costs $22,000–$55,000+ because it requires trenching concrete or boring floor joists for a new 3" drain stack, running new hot and cold supply lines, framing walls, and municipal trade permits.',
    },
    {
      question: 'How much does a standard 5×8 bathroom remodel cost?',
      answer:
        'A standard 48 sq ft (5×8) full bathroom remodel typically costs $6,000–$10,000 for a budget refresh (prefab fixtures, existing layout kept), $12,000–$20,000 for a mid-range remodel (custom tile shower, quartz vanity, new plumbing trim), and $22,000–$34,000+ for a high-end full gut renovation. These are U.S. planning estimates — actual costs vary by location, contractor rates, and site conditions.',
    },
    {
      question: 'How much does a bathroom remodel cost per square foot?',
      answer:
        'U.S. bathroom remodel costs typically range from $120–$180 per sq ft for budget updates, $190–$280 per sq ft for mid-range renovations, and $320–$550+ per sq ft for luxury master suites. Small bathrooms often cost more per square foot than these averages suggest because licensed plumbing, GFCI electrical, waterproofing, and skilled-trade inspections are driven by fixture count and project scope — not floor area. A 48 sq ft bathroom with a custom tile shower can produce a relatively high calculated cost per square foot because fixed project costs are concentrated into a small area.',
    },
    {
      question: 'How much does a small bathroom remodel cost?',
      answer:
        'A small bathroom (under 40 sq ft) typically costs $4,500–$12,000 for a mid-range remodel in the U.S. Small bathrooms often have a higher cost per square foot than larger spaces because the fixed costs of licensed plumbing, electrical, waterproofing, and contractor mobilization are spread over fewer square feet.',
    },
    {
      question: 'How much does a bathroom remodel cost without moving plumbing?',
      answer:
        'Keeping your existing plumbing footprint is the single biggest cost-saving decision. With no fixture relocation, a mid-range full bathroom remodel typically runs $9,000–$14,000 for a standard 48 sq ft space. Moving even one fixture 2–4 feet adds $1,200–$2,200 in licensed plumbing costs. Relocating a toilet to a new wall adds $2,500–$4,500 because soil stack repositioning requires cutting through floor framing or concrete.',
    },
    {
      question: 'How much does it cost to move plumbing in a bathroom?',
      answer:
        'Drain and vent requirements depend on pipe size, fixture type, slope, and the adopted local plumbing code. As a general planning estimate: minor fixture shifts (2–4 ft) cost $1,200–$2,200; relocating a toilet or drain stack adds $2,500–$4,500; moving fixtures to an entirely new wall can add $2,800–$5,000+. Slab homes require concrete jackhammering, which increases both cost and project time.',
    },
    {
      question: 'How much does a luxury bathroom remodel cost?',
      answer:
        'A high-end or luxury bathroom remodel typically costs $320–$550+ per sq ft, putting a 48 sq ft full bathroom at $15,000–$26,000+ and a 120 sq ft master suite at $38,000–$80,000+. Luxury projects include curbless walk-in showers with frameless glass, custom furniture-grade double vanities, freestanding soaking tubs, radiant floor heating, and designer plumbing fixtures. Costs can exceed these ranges substantially when structural changes, custom stone, specialty glass, smart fixtures, or major plumbing changes are involved.',
    },
    {
      question: 'How long does a typical bathroom remodel take?',
      answer:
        'A standard full bathroom remodel often requires about 3–4 weeks of active on-site construction, although total project time is commonly longer due to permitting, material lead times, inspections, and contractor scheduling. A cosmetic refresh with no structural changes takes 1–2 weeks of active work. A custom master suite with radiant floor heating, frameless glass, and multiple inspection phases typically requires 5–8 weeks of active construction. Allow 2–3 weeks of lead time before demolition for tile, vanity, and fixture deliveries.',
    },
    {
      question: 'What percentage of bathroom remodel costs is labor vs materials?',
      answer:
        'This calculator models skilled trade labor at approximately 52%–58% of the project budget, depending on the selected configuration. The higher labor ratio reflects the multiple licensed trades required in tight physical quarters: licensed plumbers, electricians, tile setters, drywall tapers, and painters — all working in a confined space with inspection requirements. Published consumer data shows labor broadly at 40–65% depending on project complexity and location.',
    },
    {
      question: 'How much can I save by doing my own bathroom demolition?',
      answer:
        'Homeowners can typically save $800–$1,500 by handling tear-out and debris haul-off themselves. A 10-yard roll-off dumpster costs approximately $350–$450 to rent. Demolition includes removing tile, drywall, vanities, and fixtures with basic tools (sledgehammer, pry bars, reciprocating saw). The calculator reflects this saving in the DIY Demolition option.',
    },
    {
      question: 'Does bathroom size affect remodeling cost?',
      answer:
        'Yes, but not proportionally. Larger bathrooms cost more in total, but smaller bathrooms often cost more per square foot because licensed plumbing rough-in, GFCI electrical, waterproofing membranes, and contractor overhead are driven by project scope rather than floor area. A 20 sq ft powder room can cost $200–$300/sq ft while a 120 sq ft master suite may average $250–$400/sq ft.',
    },
  ],
  'battery-backup-calculator': [
    {
      question: 'How do I calculate what size battery backup I need?',
      answer:
        'Calculate required nominal battery capacity by dividing the load energy demand by inverter efficiency and usable Depth of Discharge: Gross Battery Capacity (Wh) = Required Load Energy ÷ Inverter Efficiency ÷ Usable DoD × Temperature Factor. For example, running a 350 W load for 8 hours with a 93% efficient inverter and 80% DoD LiFePO₄ battery requires 2,800 Wh ÷ 0.93 ÷ 0.80 = 3,763 Wh (3.76 kWh nominal capacity, or 78.4 Ah at 48V).',
    },
    {
      question: 'What is the difference between LiFePO4 and AGM lead-acid batteries for home backup?',
      answer:
        'LiFePO₄ generally offers good thermal stability, long cycle life, and high usable energy density. Manufacturer-rated cycle life varies; 3,500–6,000 cycles is a commonly cited planning range for qualifying LiFePO₄ products at specified test conditions. AGM lead-acid batteries have lower upfront acquisition costs but should be operated at ~50% DoD to prevent rapid degradation, delivering 400–600 cycles (2–4 years). Over an installation lifespan, LiFePO₄ provides substantially lower cost per cycle.',
    },
    {
      question: 'What size inverter do I need for my battery backup?',
      answer:
        'Recommended continuous inverter rating is calculated as Continuous Load × 1.25 to provide a continuous operating safety margin. Separately, verify the inverter surge rating against appliance manufacturer startup and Locked Rotor Amps (LRA) specifications for motor-driven equipment such as refrigerators, compressors, and well pumps.',
    },
    {
      question: 'How long will a 10 kWh battery backup power my home during an outage?',
      answer:
        'A 10 kWh nominal battery at 80% DoD provides 8 kWh before inverter losses. At 93% inverter efficiency, approximately 7.44 kWh reaches the AC loads. At an average 260 W critical load, that is about 28.6 hours. If powering heavy or cycling inductive loads such as a well pump or furnace blower, runtime decreases accordingly.',
    },
    {
      question: 'Should I choose a 12V, 24V, or 48V battery bank system?',
      answer:
        'Use 12V for small UPS or RV applications (<1,000 W), 24V for medium systems (1,000–3,000 W), and 48V for larger residential, solar, and whole-home systems (>3,000 W). Higher DC voltage reduces current for the same power, simplifying conductor sizing and reducing resistive losses. Conductor sizes and overcurrent protection must be engineered for each circuit.',
    },
    {
      question: 'How many solar panels do I need to recharge my battery backup daily?',
      answer:
        'Size the solar array using: Estimated PV Array Size = Daily Energy Required ÷ (Peak Sun Hours × Solar-System Efficiency). Using a 77% planning efficiency (within the typical 75–85% range) and 4.5 peak sun hours for a 2,800 Wh daily need: 2,800 ÷ (4.5 × 0.77) ≈ 808 W of PV is required. With 400 W panels, that means 3 panels (1,200 W) to meet or exceed the calculated array size — 2 × 400 W = 800 W would be slightly undersized for this example.',
    },
  ],
  'home-inspection-cost-calculator': [
    {
      question: 'How much does a home inspection cost in 2026?',
      answer:
        'The average U.S. home inspection costs roughly $325–$475 for a typical 1,500–2,500 sq ft single-family house, with the national planning average near $400. Small condos run about $225–$300, large homes over 4,000 sq ft commonly reach $600–$900, and each add-on (radon, mold, sewer scope) adds $75–$650. This calculator models the same flat-fee tiers most ASHI/InterNACHI inspectors publish.',
    },
    {
      question: 'How much does a radon test add to a home inspection?',
      answer:
        'A continuous radon monitor placed for 48+ hours typically adds $125–$275 to the inspection invoice, with $175 a reasonable national planning figure. The EPA recommends mitigation if the average radon level measures at or above 4.0 pCi/L. In EPA Zone 1 counties (high radon potential), testing is strongly advised on every purchase.',
    },
    {
      question: 'Is a sewer scope worth the extra cost?',
      answer:
        'For most homes 20+ years old, yes. A camera inspection of the main sewer lateral adds $125–$300, while repairing or replacing a failed clay or cast-iron lateral can cost $3,000–$25,000+. Tree-root intrusion, bellying, and collapsed lines are invisible during a standard visual inspection, which is why many agents recommend scoping every pre-purchase inspection on older homes.',
    },
    {
      question: 'Why do older homes cost more to inspect?',
      answer:
        'Homes 50+ years old often contain obsolete or modified systems — knob-and-tube or aluminum branch wiring, galvanized supply piping, asbestos-containing materials, and multiple layers of roofing — each of which takes extra time to evaluate and document. Inspectors commonly charge 15–25% more for pre-1950s housing stock, which this calculator reflects with its age multiplier.',
    },
    {
      question: 'What is included in a standard home inspection?',
      answer:
        'A standard inspection follows the ASHI or InterNACHI Standards of Practice: visually accessible roof, exterior, structure, attic, insulation, interior, electrical, plumbing, and HVAC systems, delivered as a written report (typically 24–48 hours later). It is a visual, non-invasive assessment — it does not include destructive testing, code-compliance certification, or specialized testing like radon, mold, or sewer scoping unless added.',
    },
    {
      question: 'Do I still need an inspection on a newly built home?',
      answer:
        'Yes — new construction inspections are common and often cost about 10% more than a resale inspection of the same size. Builder walkthroughs frequently miss punch-list items, mis-vented baths, untorqued panel lugs, or missing flashing. Many buyers stage them at pre-drywall and at final walkthrough before the builder orientation.',
    },
  ],
};
