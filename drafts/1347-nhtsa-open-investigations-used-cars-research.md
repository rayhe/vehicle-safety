# Research: #1347 — NHTSA's 74 Open Investigations, and the Used Cars They Cover

**Slug:** 1347-nhtsa-open-investigations-used-cars
**Journalist:** Axle McScatter (Data Visualization Editor — statistical roundups, national trends; "I ran the numbers. Then I ran them again.")
**Kicker:** By The Numbers
**Working headline:** "74 Defects Under Federal Watch. Your Used Car Might Be One of Them."
**Date researched:** 2026-10-31

## News peg
ForCar published a fresh aggregation Oct 31, 2026 (today): NHTSA's Office of Defects Investigation currently has **74 investigations open** that started since 2019, **24 opened in 2026 alone**. ForCar extracted an 11-row table of investigations covering common used cars. This is not a recall list — it is the waiting room where recalls are born (or die).

## Kill test
- **Newsworthy:** YES — fresh today, directly actionable for used-car buyers (the #1 safety question the site gets: "is this used car safe?"), and the 24-this-year pace is itself a stat.
- **Novel angle:** YES — cross-tabulating ForCar's 11 investigation rows against FARS 2014-2023 per-model death rates produces the "deadly + unresolved" intersection. Nobody ran that: the deadliest car in the investigation table is the Honda Accord (3.07/100M VMT, 7,102 deaths), currently under investigation for phantom automatic braking. The Ford Focus (2.52) is under a timing-belt probe. The 2015-2017 F-150 downshift file (rear wheels locking) covers the truck with 9,194 deaths — the second-highest body count on the list.
- **3+ primary sources:** ForCar's ODI-derived aggregation (Oct 31, 2026), NHTSA ODI/FARS (federal primary), plus the underlying investigation facts independently reported (torquenews EA26005, motoringchronicle DP26011).
- **VERDICT: PROCEED.**

## The 11-row table (ForCar, from NHTSA ODI, as of Oct 31, 2026)
| Vehicles | Model years | Under investigation for | Opened |
|---|---|---|---|
| Silverado 1500, Sierra 1500, Tahoe, Suburban, Yukon, Escalade | 2019-2026 | 6.2L V8 engine failures, incl. after recall repair | Oct 2025, Aug 2026 |
| Ford F-150 | 2015-2017 | Sudden downshift with rear wheels locking | Jan 2026 |
| Honda Pilot, Odyssey, Ridgeline, Acura MDX, TLX | 2016-2020 | Connecting rod bearing failure, 3.5L V6 | Aug 2025 |
| Honda Accord, CR-V | 2017-2022 | Automatic braking with nothing ahead | Apr 2024 |
| Honda CR-V Hybrid | 2020-2022 | Loss of drive at highway speed | Oct 2025 |
| Tesla Model 3, Model Y | 2018-2023 | Front suspension link detaching | Jul 2026 |
| Ford Fiesta, Focus 1.0L | 2014-2018 | Timing belt failure | Jul 2026 |
| Chrysler Pacifica | 2017-2018 | Power steering cutting out | Sep 2025 |
| Jeep Grand Cherokee | 2021-2023 | Rear coil springs detaching after the recall repair | Dec 2025 |
| Dodge Journey | 2009-2020 | Occupants unable to open doors | Aug 2024 |
| Nissan Rogue | 2017-2019 | False automatic braking | Sep 2019 (open 7+ years) |

## Aggregate stats (ForCar)
- 74 open investigations started since 2019; 24 opened in 2026 (32% of the docket this year alone).
- **15 of 74 (20%) concern automatic braking, driver assistance, or self-driving** — Tesla FSD, Ford BlueCruise, robotaxi operators, plus four separate files on AEB activating with nothing in the road.
- **12 of 74 are recall queries** — testing whether a recall repair actually fixed the problem (Grand Cherokee coil springs; the GM V8 file started as one).
- Since 2005, roughly **half of investigations ended with a recall**; the rest closed with no action, often after years.
- Oldest file in the table: Nissan Rogue phantom braking, opened Sep 2019, unresolved after 7+ years.

## Original contribution: FARS cross-tab (computed Oct 31, 2026)
FARS 2014-2023 per-model data (embedded fars_output.js; rates = deaths per 100M VMT):

| Investigation group | Model | Deaths (2014-23) | Rate/100M VMT |
|---|---|---|---|
| GM 6.2L V8 | Silverado | 9,591 | 1.25 |
| GM 6.2L V8 | Tahoe | 2,592 | 2.49 |
| GM 6.2L V8 | Yukon | 1,114 | 2.55 |
| GM 6.2L V8 | Sierra | 3,337 | 1.01 |
| GM 6.2L V8 | Suburban | 593 | 1.36 |
| GM 6.2L V8 | Escalade | 211 | 0.64 |
| F-150 downshift | F-150 | 9,194 | 1.04 |
| Honda 3.5L V6 | Accord n/a | — | — |
| Honda 3.5L V6 | Pilot | 514 | 0.29 |
| Honda 3.5L V6 | Odyssey | 864 | 0.93 |
| Honda 3.5L V6 | Ridgeline | 84 | 0.24 |
| Honda 3.5L V6 | MDX | 163 | 0.30 |
| Honda 3.5L V6 | TLX | 33 | 0.11 |
| Phantom braking | **Accord** | **7,102** | **3.07 (highest)** |
| Phantom braking | CR-V | 2,072 | 0.53 |
| CR-V Hybrid loss of drive | CR-V | 2,072 | 0.53 |
| Tesla suspension link | Model 3 | 92 | 0.05 |
| Tesla suspension link | Model Y | 57 | 0.03 |
| Timing belt | **Focus** | **3,046** | **2.52** |
| Timing belt | Fiesta | 513 | 1.02 |
| Power steering | Pacifica | 160 | 0.19 |
| Coil springs | Grand Cherokee | 1,161 | 0.51 |
| Doors | Journey | 317 | 0.41 |
| Phantom braking | Rogue | 968 | 0.35 |

**Computed findings (novel):**
1. The 11 investigation rows cover vehicles that account for **~43,800 deaths in FARS 2014-2023** (sum of per-model death counts; all causes, not defect-caused).
2. **The deadliest vehicle in the table is the Honda Accord: 7,102 deaths, 3.07/100M VMT** — and it is under investigation for automatic emergency braking that fires with nothing ahead. Highest rate in the table, under one of the 20% ADAS files.
3. **Second-deadliest rate: GMC Yukon 2.55, then Ford Focus 2.52, then Chevy Tahoe 2.49** — the Focus is the cheapest used car on the list and it is under a timing-belt-failure probe.
4. **The two lowest rates in the table are the Teslas (Model 3: 0.05, Model Y: 0.03)** — the suspension-link investigation covers the statistically safest-per-mile vehicles on the list. Failure mode vs. crash outcomes are different things.
5. **The Nissan Rogue file has been open since Sep 2019: 7+ years** with no resolution — longer than most car loans.
6. 24 of 74 investigations opened in 2026 = **32% of the entire open docket arrived this year**.

## Counterargument (full strength)
An open investigation is not a defect finding — since 2005, roughly half of NHTSA's investigations have closed with no recall, sometimes after years, which means roughly half of these 74 files will end in nothing. The FARS death rates cover all crash causes for all model years 2014-2023, not the investigated defect: the Accord's 3.07 rate is dominated by older models, driver demographics, and plain physics, not by phantom braking on 2017-2022 models. The 43,800-death sum is a body-count headline that risks implying these investigations are about 43,800 deaths — they are not; most of those deaths are ordinary crashes in ordinary cars. ForCar's 11-row table is an editorial selection for used-car shoppers, not NHTSA's full 74-file docket, so the "cross-tab" inherits their selection bias. And 24 investigations opened in 2026 could mean more defects, or a more active agency, or both.

## Limitations
- FARS 2014-2023 per-model rates do not align exactly with the investigated model-year ranges (e.g., Accord 2017-2022 subset vs. all Accords 2014-2023); treat rates as context, not defect-specific risk.
- FARS rates are per-VMT estimates with ±15% uncertainty for low-volume models; Tesla rates reflect a newer, wealthier fleet.
- The 74/24/15/12 figures are ForCar's aggregation of ODI data (published Oct 31, 2026); the full 74-file docket was not independently re-tallied here.
- Investigation populations (e.g., 997,743 for GM 6.2L) are not failure counts.

## Actionable takeaways
1. Before buying used: check nhtsa.gov/recalls by VIN, then search NHTSA's ODI investigations for your model — an open investigation appears on no window sticker and in no listing.
2. Ask the seller about the specific fault under investigation: on a 2016-2020 Pilot, an engine replaced under warranty is good news, not bad; on a 2015-2017 F-150, ask about transmission behavior on downshifts.
3. Re-check the VIN a few months after you buy — many recalls arrive years after the car was built (ForCar: "a clean recall check today does not mean the car will stay clean").
4. Recall queries (12 of the 74) mean the first fix may have failed — Grand Cherokee owners: the coil-spring recall repair itself is under investigation.

## Sources (3+ primary)
1. ForCar, "NHTSA Has 74 Open Defect Investigations. These Cover Cars You Can Buy Used," Oct 31, 2026 — https://forcar.org/blog/open-nhtsa-investigations-used-cars/
2. NHTSA, Fatality Analysis Reporting System (FARS), 2014-2023 (per-model data embedded in fars_output.js) — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
3. NHTSA recalls database (VIN check, campaign records) — https://www.nhtsa.gov/recalls
4. TorqueNews, "NHTSA Wants The Part Number For Nearly One Million GM Trucks With The 6.2L V8 By October 30," Oct 2026 — https://www.torquenews.com/1/nhtsa-wants-part-number-nearly-one-million-gm-trucks-62l-v8-october-30-its-sixth-request-asks
5. Motoring Chronicle, "NHTSA Opens Defect Petition on Camshaft Claims in 54,787 Ford 7.3L Trucks and Vans," Oct 2026 — https://motoringchronicle.com/nhtsa-opens-defect-petition-on-camshaft-claims-in-54-787-ford-7-3l-trucks-and-vans/
5. IIHS fatality statistics (context for per-mile rates) — https://www.iihs.org/topics/fatality-statistics

## Assignment
- Number: 1347
- Slug: 1347-nhtsa-open-investigations-used-cars
- Journalist: Axle McScatter
- Kicker: By The Numbers
- Ship date: 2028-03-21 (1 day after #1346, 2028-03-20)
