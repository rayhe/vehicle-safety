# Research: #1241 — Subaru's Soberest Car Is (Per-Mile) Its Deadliest

**Slug:** 1241-ascent-soberest-deadliest-subaru
**Journalist:** Dale Impactor III (toxicology desk chief; the inversion of the impairment data IS the story)
**Working title:** "The Soberest Drivers in America Die at Three Times the Rate of the Drunkest Hooligans"
**Kicker:** Sobriety Report

## The Angle (1-2 sentences)
The Subaru Ascent's drivers are the most sober of any vehicle in FARS 2014-2023 (8.2% impaired, the lowest impairment rate in the entire 307-model dataset). Yet the Ascent kills its occupants at 0.78 deaths per 100M VMT — 2.7x the WRX (0.29), the turbocharged hooligan car with Subaru's HIGHEST impairment rate (23.4%).

## Kill Test
- Genuinely newsworthy? YES. First-ever Subaru article in 448 queue entries (zero prior Subaru coverage). Inverts the site's own impairment-safety assumption.
- Novel angle on data? YES. Not "X has the most deaths" (body count) but "the soberest car kills the most per mile" (paradox with a recall news peg).
- News peg: July 2026 NHTSA recall 26V436000 (WRH-26) — 541,237 vehicles incl. 384,407 Ascents (2019-2026) with incorrect GAWR on certification label; overloading crash risk. Filed July 2026, owner letters Aug 25, 2026, remedy rollout Jan 2027.
- TSP+ paradox: 2024-25 Ascent earned IIHS Top Safety Pick+, 5-star NHTSA overall. Awards measure test-dummy physics, not real-world per-mile outcomes.

## FARS Data (primary source #1 — fars_output.js, NHTSA FARS 2014-2023 bulk CSV)
Methodology note: covers ALL occupant fatalities in vehicles involved in fatal crashes, all model years on the road. Rates use sales-based fleet estimates x NHTS class-average annual miles.

### Subaru lineup, by fatality rate
| Model | Deaths | Rate (/100M VMT) | anyPct | alcPct | drugPct | drivers (tox) |
|---|---|---|---|---|---|---|
| LEGACY | 287 | 0.95 | 22.8 | 18.2 | 8.8 | 1244 |
| ASCENT | 426 | 0.78 | **8.2** | 5.6 | 3.3 | 305 |
| IMPREZA | 288 | 0.52 | 21.9 | 16.6 | 9.8 | 1192 |
| OUTBACK | 707 | 0.45 | 19.7 | 14.8 | 8.4 | 1904 |
| WRX | 89 | 0.29 | **23.4** | 17.5 | 9.7 | 435 |
| FORESTER | 396 | 0.26 | 20.5 | 15.5 | 8.6 | 1989 |
| TRIBECA | 13 | 0.12 | n/a | n/a | n/a | n/a |
| CROSSTREK | 86 | 0.08 | 17.8 | 12.8 | 7.7 | 608 |

- Dataset median impairment (drivers>=30): 20.3%. Ascent's 8.2% is an extreme outlier — lowest of all 307 models (drivers>=200).
- Ascent rate 0.78 / WRX rate 0.29 = 2.7x. Ascent / Forester (0.26) = 3.0x. Ascent / Crosstrek (0.08) = 9.75x.
- Ascent impairment sample: 305 drivers (smaller than Forester 1989; note sample-size caveat).

### Ascent model-year deaths (FARS_MODEL_YEAR)
2019: 8 (launched MY2019; fleet estimate 437.5k sales-based — flag denominator noise)

## Primary sources
1. NHTSA FARS 2014-2023 bulk CSV via fars_output.js (dataset median impairment 20.3%, all rates above).
   - https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS 2024 Top Safety Picks — 2024-25 Subaru Ascent: Top Safety Pick+ (highest award).
   - https://www.iihs.org/ratings/top-safety-picks/2024?tspPlusOnly
3. NHTSA Recall 26V436000 (Subaru WRH-26): incorrect GAWR on Part 567 certification label; 541,237 vehicles; 2019-2026 Ascent = 384,407 units; decision June 30, 2026; filed July 2026; "may lead to vehicle overloading, increasing the risk of a crash"; remedy = corrective label overlay, rollout Jan 2027.
   - https://static.nhtsa.gov/odi/rcl/2026/RCMN-26V436-0830.pdf
   - https://www.nhtsa.gov/recalls
4. USA Today (July 14, 2026): Subaru recalled 541k+ vehicles, breakdown by model, Subaru contact 844-373-6614. Secondary, used for breakdown figures only.
   - https://www.usatoday.com/story/cars/recalls/2026/07/14/subaru-recall-ascent-forester-crosstrek-models/90912071007/
5. 2025 Ascent: NHTSA 5-star overall (5-star frontal, 5-star side, 4-star rollover); EyeSight standard; towing 5,000 lb; 7/8-seat layout.
   - https://www.motortrend.com/cars/subaru/ascent

## Counterarguments (full strength — do NOT soft-pedal)
1. **Occupant loading (strongest):** FARS rate counts occupant fatalities. The Ascent seats 8, the WRX 5. A single Ascent crash can yield multiple deaths; WRX crashes are mostly solo-driver. The rate gap may measure seat count, not crashworthiness.
2. **Who rides along:** Ascent carries children. Children are more vulnerable occupants; any multi-occupant family crash converts one bad decision into multiple deaths.
3. **Exposure mix:** Ascent is a family road-trip vehicle — more rural/highway miles, more night driving with a full car. The rate is per-VMT, but VMT is class-average (NHTS), not vehicle-specific.
4. **Denominator noise:** Ascent launched MY2019; sales-based fleet estimate (437.5k) over a short production run is noisier than 20-year nameplates. Small changes to the estimate swing the rate.
5. **The sober-drivers effect cuts both ways:** sober drivers are awake for their crashes; they also drive the high-mileage, high-risk family schedule. Impairment is one risk; exposure is another.
6. **Crash-test awards still mean something:** TSP+ means the Ascent's structure does what it's designed to do. The real-world rate captures everything else — physics of a 4,600-lb 3-row in rollovers (4-star rollover rating), loading, passengers.

## What the reader should DO (actionable — required)
1. If you own a 2019-2026 Ascent: check your VIN at nhtsa.gov/recalls for 26V436000 (free label fix; remedy available from Jan 2027). Don't guess your axle load when packing for trips — check the owner's manual.
2. If shopping 3-row SUVs: impairment stats describe the drivers, not the car. The soberest car in America still kills occupants at 0.78/100M VMT — 3x the Forester's rate in the same brand. Judge family haulers by per-VMT occupant fatality data, not crash-test trophies.

## Data disclaimer
NHTSA FARS 2014-2023. Rates estimated (sales-based fleet x NHTS class-average miles). Occupant fatalities only, all model years on the road. Ascent impairment sample (n=305 drivers) smaller than siblings; Tribeca sample too small to report.

## Voice note (Dale Impactor III)
Sardonic, statistical, treats impairment data like sports stats. "According to the toxicology reports — and there are a lot of them —" opener family. No preachiness about drunk driving; the joke is that sobriety didn't save these people. Actual opinions: crash-test awards are a participation trophy for dummies; the Ascent is a perfectly safe car that happens to carry the most valuable cargo into the worst situations.
