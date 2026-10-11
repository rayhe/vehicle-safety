# Research: Honda 26V332000 — The Seat Sensor That Lets the Airbag Fire at Your Kid

**Slug:** 1135-honda-cracked-capacitor-airbag-child-seat
**Journalist:** Mia Crumplezone (forensic engineering beat; airbag deployment angles)
**Run:** 2026-10-11 13:30 PDT (article-crashreport)
**Status:** RESEARCH complete → DRAFT

## Kill test: PASS

Genuinely newsworthy: a cracked capacitor inside the passenger seat weight sensor can
defeat the occupant-classification system, so the front passenger frontal AND knee
airbags may deploy in a crash despite an infant in a child seat, a child, or a
sub-AF5 adult sitting there — the exact occupants deployment is designed to suppress.
Novel angle: (1) the defect cause is a natural disaster at a tier-2 supplier that led
Aisin to temporarily swap PCB base material without sufficient verification — a
disaster-substitution supply-chain twist; (2) this is a recall EXPANSION after three
distinct bookkeeping errors left ~99K vehicles out of the 2024 24V064 recall;
(3) the warning sign owners can check today (SRS light on + passenger airbag
indicator off).

## Primary sources (3+)

1. **NHTSA Part 573 Safety Recall Report 26V332** (primary, filed 2026-05-21 by
   American Honda Motor Co.):
   https://www.ploymarket.com/proxy/https/static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V332-6150.pdf
   — 98,892 vehicles, 23 model entries (2016–2026 Honda/Acura), est. 1% with defect;
   defect = capacitor in PCB of front passenger seat weight sensor may crack from
   environmental humidity → internal short circuit; safety risk = frontal + knee
   airbags may deploy despite infant/child/sub-AF5 occupant; cause = natural disaster
   at tier-2 plant → tier-1 (Aisin Electronics Illinois) changed PCB base material
   without sufficient verification; 228 warranty claims, 0 injuries/deaths;
   remedy = replace seat weight sensor (original verified base material);
   production corrected 2022-01-07; dealer notice 5/22/2026, owner letters 7/6/2026.
2. **oemdtc.com recall 26V332000** (NHTSA filing summary):
   https://oemdtc.com/recall/26V332000/
   — component AIR BAGS:SENSOR:OCCUPANT CLASSIFICATION:FRONT PASSENGER; 98,892 units.
3. **autobodynews.com** (cites the Part 573 directly):
   https://www.autobodynews.com/news/honda-srs-recall-ford-do-not-drive-advisory-and-more-on-stellantis-chrysler-and-dodge-lineup
   — 23 Honda/Acura model entries; expands 2024 recall of 750,000+; warning sign =
   illuminated SRS indicator + passenger airbag indicator stays off; 228 warranty
   claims, no injuries.
4. **NewsNation via louisianafirstnews.com** (2026-06-01):
   https://www.louisianafirstnews.com/news/honda-recalls-nearly-100k-vehicles-over-airbag-issue/
   — full model list; weight sensor may crack/short after humidity exposure; airbags
   could deploy even below occupant size threshold incl. children/infants in car seats.

## Key numbers (all from Part 573 unless noted)

- 98,892 vehicles; estimated 1% actually defective
- 23 model entries: 2016–2022 Accord/Hybrid, 2016–2022 Civic (sedan/coupe/hatch/Type R),
  2017–2022 CR-V (+Hybrid), 2018–2020 Fit, 2019–2021 HR-V, 2019–2022 Insight,
  2018–2026 Odyssey, 2019–2021 Passport, 2017–2022 Pilot, 2017–2021/2023/2025
  Ridgeline, 2018–2021/2023 TLX, 2019–2024 RDX, 2017–2020/2022–2026 MDX
- 228 warranty claims; 0 injuries/deaths (US, 2021-02-04 through 2025-10-30)
- Expansion errors from the Part 573: (1) supplier miscalculated production end date;
  (2) inaccurate data correlating defective parts to vehicles; (3) inadequate
  verification of vehicles affected by defective SERVICE parts (replacement sensors
  sold over the counter)
- Chronology: 2024-01-25 defect determination (24V-064) → 2025-02-18 supplier flags
  additional units → 2025-03-10 vehicle repaired outside population → 2025-04 to
  2026-04 analysis → 2026-05-14 new defect determination
- Tier-1 supplier: Aisin Electronics Illinois, LLC; part 81167-T2F-L012-M1 /
  81168-T2F-L012-M1

## Differentiation from queue

- Full-queue keyword check (24v064, occupant classification, seat weight sensor,
  unintended airbag, airbag deploy): ZERO hits — never covered.
- #1101 (Kia EV9 child-sensing airbag) is a different maker, different mechanism
  (sensor logic vs. humidity-cracked capacitor), different outcome (wrong
  classification vs. suppression defeated by short circuit). Not a duplicate.
- Actionable: check SRS light + passenger airbag indicator; VIN lookup at
  nhtsa.gov/recalls; dealers replace the sensor free.

## Limitations / counterarguments (for the article)

- Only ~1% of the 98,892 estimated to have the defect; 228 warranty claims, zero
  injuries — this is a latent-risk recall, not a body-count story.
- A cracked sensor could ALSO fail the other way (suppress when it shouldn't); the
  Part 573 only describes the deploy-when-suppressed failure.
- FARS data is not directly used here; the article's original contribution is the
  forensic chain (disaster → material swap → strain → crack → short → child in the
  blast zone) plus the triple-error expansion accounting.
