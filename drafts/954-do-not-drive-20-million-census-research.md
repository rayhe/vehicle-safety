# Research: 954-do-not-drive-20-million-census

## Angle (1-2 sentences)
A September 15, 2026 census of NHTSA's do-not-drive recalls finds 108 active do-not-drive campaigns on cars and light trucks covering 20,752,140 vehicles, and 99.4% of those units are 10+ model years old. The government's strongest possible safety order, on the cheapest cars on the used market, with a repair that costs nothing. Almost nobody heard.

## Kill test
- Genuinely newsworthy: YES. First-of-its-kind census of the structured do-not-drive flag (NHTSA added the DO_NOT_DRIVE flat-file field in May 2025); data pull is 5 days old. Novel angle on a number (20.75M) nobody has framed as a used-car-affordability story.
- Not a data dump: the article discovers the campaign-count/unit inversion and the 15+-year-old-vehicle share, both original calculations.
- Queue check: "do-not-drive", "dtn", "do not drive", "zilocar" all grepped in queue titles/slugs/notes, 2026-09-20. No coverage. #824 covers DTN (different story: airbag mass tort, August death); #855/#911 cover the Jeep TPMS recall (different story).

## Primary sources (3+, all opened live 2026-09-20)
1. **Zilocar, "How Many Used Cars Are Under a Do-Not-Drive Recall? The 2026 Census"** (data pull 2026-09-15, max report date 2026-09-10). https://zilocar.com/vehicle-news/do-not-drive-stop-drive-recall-census-used-car-vin-check-2026 — every number in this article comes from here unless stated; method fully published, frozen CSV published.
2. **NHTSA ODI recalls flat file FLAT_RCL_POST_2010** (the census's source; DO_NOT_DRIVE = field 28, PARK_OUTSIDE = field 29, added May 2025; pinned via api.nhtsa.gov spot-checks 12V336000/13V103000 vs 15V335000/18V601000 vs 22V541000). Cited via nhtsa.gov/recalls parent page per URL-discipline rule.
3. **NHTSA VIN recall lookup** (nhtsa.gov/recalls) — the actionable step.
4. Corroborating news: USA Today Sept 14 (Ford 26S69/26V578000 fuel-tank recall is a *standard* recall, not do-not-drive); USA Today Sept 11 (Toyota C-HR EV 26V57x battery recall); LawyerTrend Sept 18 DTN briefing (April 29, 2026 forced recall order, 11 US fatalities) — establishes the census week context.

## Verified numbers (all from source 1, byte-for-byte)
- 108 active do-not-drive campaigns on cars & light trucks; 20,752,140 vehicles covered (launch-time potentially-affected, not cars-on-road-today).
- 202 campaigns / 20,908,823 units on NHTSA's whole "V" class (94 non-car/light-truck campaigns = 156,683 units, 0.75%).
- 99.4% of car/light-truck units (20,622,908) on vehicles 10+ model years old (MY 2016 or older).
- Airbag-component campaigns: 50 of 108, 19,820,917 units (95.5%), overwhelmingly Takata. Ex-airbag remainder: 58 campaigns, 931,223 units, still 86.1% on 10+ yr-old vehicles.
- Age buckets (newest affected MY) — WHOLE-VEHICLE-CLASS basis (202 campaigns), NOT cars-only; do not quote these absolutes as cars-only shares: 0-4 yrs (MY2022+): 127,461 units / 81 campaigns; 5-9 yrs (MY2017-2021): 148,135 / 41; 10-14 yrs (MY2012-2016): 10,537,713 / 44; 15+ yrs (MY2011 or older): 10,095,514 / 36.
- Manufacturers (Part 573 filer): Chrysler (FCA US) 10,958,409 (52.8%), Ford 5,455,681 (26.3%), BMW 2,011,206 (9.7%), Mazda 1,309,362 (6.3%), GM 386,698 (1.9%), Mercedes-Benz 366,795 (1.8%).
- Largest campaign: 16V352000, Chrysler/Dodge/Jeep/Ram/Mitsubishi MY2004-2012, 4,648,270 units, passenger inflator may rupture (Takata).
- Largest non-airbag: 21V473000, Cadillac/Saab MY2010-2016, 380,498, rear suspension arm may fracture. Next: 22V315000, Mercedes MY2006-2012, 350,294, brake-booster power-assist loss.
- Repair is free at a franchised dealer. Recalls do not expire.
- Methodology: text-matching defect/consequence/remedy fields for "do not drive" etc. finds 12 campaigns, overlaps the structured set on 5, misses 197 of 202.

## Original contribution (required)
1. **The campaign-count inversion.** 43 of the 108 campaigns (39.8%) sit on 0-9-year-old vehicles but hold just 0.6% of the units (per the census's cars-and-light-trucks basis statement); the 65 campaigns on 10+ year-old vehicles (60.2%) hold the other 99.4%. Translation: modern do-not-drive orders are surgical micro-campaigns; the mass is historical. Nobody drew this split. NOTE: the age-bucket table's absolute figures (e.g. 275,596 units for 0-9 yrs) are on NHTSA's whole-vehicle-class basis (202 campaigns / 20,908,823 units), NOT the 108 cars-only campaigns — do not mix bases.
2. **The units skew hard toward 15+ year-old vehicles.** The census's age table (whole-class basis) shows roughly half the covered units at 15+ years old; a cars-only 15+ share is not stated by the source and must not be asserted as one. These are not cars; they are artifacts that happen to still run.
3. **The free-repair paradox frame.** The repair costs $0 and the order is the strongest NHTSA has, yet the vehicles sit in the cheapest listings on every used-car marketplace. The binding constraint is information flow (second, third, fourth owners never get letters), not money.

## Counterargument (full strength)
- 20,752,140 is potentially-affected units at launch, not cars currently dangerous. Millions have been repaired, scrapped, or exported. The census states this; the article must too, prominently. A "one in 14 registered vehicles" claim would be fabrication; we do not make it.
- One vehicle can sit under several campaigns, so "vehicles" is really "vehicle-campaign pairs."
- Airbag dominance (95.5%) means this is largely the Takata story told with a new coat; the robustness split (86.1% old even ex-airbag) is the defense, and it is real.
- Do-not-drive does not always mean the car will kill you on the next drive; it means NHTSA's risk assessment says stop until repaired. Conflate carefully.

## Limitations (explicit)
- No VIN-level repair-completion data; we cannot say how many of the 20.75M are still unrepaired.
- Cannot support a model-level "worst car" ranking; we do not publish one.
- Vehicle-type classification (car/light-truck vs rest) is the census author's judgement; borderline cases disclosed.
- Recall remedies are free, but dealer capacity and parts availability vary; "free" is not "instant."

## Actionable insight (hard gate)
Before buying any used car, especially one 10+ model years old: run the VIN at nhtsa.gov/recalls (free), read the campaign page for do-not-drive language, and call a franchised dealer of that make with the VIN to confirm the repair status. Do not rely on the seller's word or a clean-looking dash.

## Journalist
Axle McScatter (Data Visualization Editor, By The Numbers). Fits: census/data methodology story, table-heavy source. Catchphrase opener: "I ran the numbers. Then I ran them again. They didn't get better."
