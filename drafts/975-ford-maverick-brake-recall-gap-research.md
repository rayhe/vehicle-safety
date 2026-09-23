# Research: #975 — 2024 Ford Maverick Hybrid brake recall gap

**Slug:** `975-ford-maverick-brake-recall-gap`
**Working title:** "15 Recalls, Zero for the Brakes: The 2024 Maverick Hybrid's Blind Spot"
**Journalist:** Axle McScatter (data census beat)
**Kicker:** By The Numbers
**Article number:** 975 | **Publish slot:** after #974 (2027-01-10)

## Kill test
Genuinely newsworthy: NHTSA's Office of Defects Investigation opened defect petition DP26007 on Aug 24, 2026 into intermittent loss of antilock + regenerative braking on the 2024 Ford Maverick Hybrid (82,040 vehicles estimated). Novel angle: nobody has run the numbers on what NHTSA's own databases say about the 2024 Maverick right now. The findings: (1) ODI's failure summary counts exactly 1 incident, but the agency's complaints API already returns 8 brake-mentioning complaints on the 2024 Maverick, including 3 crash-flagged reports; (2) the 2024 Maverick has been recalled 15 times and not one of those recalls touches the brake system; (3) the brake-control hardware sits in a recall boundary gap: 2022-only ABS-module recall (redone in 2025), a 2-vehicle 2025 booster recall, and a pending 2024 petition. Autowire (Sep 6) covered the "2 vs 82,040" framing; this article's original contribution is the complaints-database census and the 15-to-0 recall census.

## Primary sources (4)
1. **NHTSA ODI Resume DP26007** — opened 08/24/2026; investigator Jenna Marvel; subject "2024 Ford Maverick Hybrid Intermittent Loss of Braking"; population 82,040 (estimated); petition received July 20, 2026 (dated July 7); failure summary: 1 incident, 1 crash, 0 injury incidents, 0 fatality incidents. Petitioner alleges MY2024 improperly excluded from related brake-control software recalls. PDF: https://static.nhtsa.gov/odi/inv/2026/INOA-DP26007-17030.pdf (mirrored at https://oemdtc.com/investigation/DP26007/)
2. **NHTSA complaints API** (pulled 2026-09-23, raw archived in drafts/975-nhtsa-complaints-maverick2024.json): 2024 Ford Maverick, 72 complaints returned; 8 mention SERVICE BRAKES; 3 crash-flagged. Petitioner appears 3x: ODI 11715308 (original braking complaint), 11726612 (total electrical shutdown / brake-assist loss), 11731032 (supplemental filing referencing the petition). Other notable: 11667932 (pedal sank to floor at 470 miles, no warning lights), 11712661 (daughter rear-ended at ~35 mph, driver described brake-booster failure), 11619446 (rollback into parked car, pedal very low, hiss).
3. **NHTSA recalls API** (pulled 2026-09-23, archived): 2024 Maverick = 15 recalls (count from API), zero with a brake component. Related brake-control recalls on adjacent model years: 22V730000 (Sep 2022, 2022 Maverick ABS module illuminates brake lights without pedal, FMVSS 108); 25V124000 (Mar 2025, 2022 Maverick, incorrect prior repairs under same ABS-module issue); 25V787000 (report received 11/14/2025, 2025 Maverick + Escape electric brake booster ECU cover overheat -> loss of ABS/ESC/traction or brake power assist; 2-vehicle population per Auto Wire's Part 573 read).
4. **The Auto Wire**, Sep 6, 2026 (https://theautowire.com/2026/09/06/ford-maverick-hybrid-brake-recall-nhtsa-petition/): fault codes C052E and U0418, four repair attempts, 50+ days off road, petitioner's warranty denial letter, 2-vehicle 25V787 population. Also confirms the paper trail framing (2022 ABS recall, 2025 redo, shared hybrid transaxle architecture with Escape Hybrid / Lincoln Corsair).

Secondary coverage: Ford Authority (Aug 25, 2026), Carscoops (Aug 2026), Dow Jones via Morningstar (Aug 25, 2026) — all confirm petition dates and 82,040 estimate.

## Original calculations
- Complaints rate: 8 brake-mentioning / 72 total complaints = 11% of all 2024 Maverick complaints involve the brake system.
- Crash-flagged brake complaints: 3 of 8 (37.5%).
- Recall coverage: 0 of 15 2024 recalls touch service brakes (0%).
- Boundary census: 2022-only ABS recall -> 2025 redo (incorrect repairs) -> 2025 booster recall (2 vehicles) -> 2024 petition pending (82,040). Four separate actions across four model-year slices of the same brake-control hardware.
- Caveat on API counts: complaintsByVehicle returns the API's record set (72 rows for 2024 Maverick as of pull date); NHTSA may hold additional reports not exposed via this endpoint. State the date and method.

## Limitations (for the article)
- The ODI resume's 1-incident failure summary reflects ODI's screening cut, not necessarily the full complaints database; I did not prove ODI missed reports, only that its public resume summary predates/supersedes additional filed complaints visible in the API.
- Complaints are self-reported and unverified by NHTSA; correlation is not causation.
- Cannot distinguish hybrid vs gas complaints in the API (complaints list trim in text sometimes; several explicitly mention Hybrid).
- The 2-vehicle count for 25V787 comes from Auto Wire's read of the Part 573 filing, not my direct read.
- DP26007 is an open petition, not a finding; most petitions are denied.

## Strongest counterargument
Ford's recall boundaries are evidence-driven, not arbitrary: the 22V730 ABS-module fault was a brake-LIGHT illumination software error, not a braking-loss defect — different failure mode, so excluding 2024 from it is engineering-correct. The 2025 booster recall was a supplier-batch cover defect (2 vehicles), physically incapable of affecting 2024s. The petitioner's C052E/U0418 codes may reflect a single-vehicle wiring or module fault. One persistent owner does not make a defect population, and 8 complaints in the API is a small sample against ~130k+ 2024 Mavericks sold.

## Actionable takeaways
- Own a 2024 Maverick Hybrid? Nothing to schedule today (no recall), but: check your VIN at nhtsa.gov/recalls regularly; if you get ABS/traction warnings or a shudder during the regen-to-friction handoff, get it documented in writing at the dealer every time (the petitioner's paper trail was 4 repair attempts and 50+ days); file your own NHTSA complaint if a fault recurs — the complaints database is what ODI screens.
- Shopping used? The 2024 Maverick Hybrid carries an open federal defect petition on braking; factor that into the price.
