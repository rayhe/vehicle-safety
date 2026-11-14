# Research: #1498 — Lucid Recalled 5 Times in 2026. The Biggest One Was Every Air Ever Built.

**Number:** 1498
**Slug:** 1498-lucid-recall-census-5-every-air-ever-built
**Journalist:** Clara Rollover (Consumer Safety Advocate — rotation: Rex filed #1496, Mia filed #1497; Clara last filed a census at #1489, Audi)
**Kicker:** By The Numbers
**Date:** November 13, 2026
**Target ship_date:** 2028-08-19 (1 day after #1497's 2028-08-18)

## Angle (1-2 sentences)

The recall-census series reaches its twentieth brand, and Lucid counts **5 campaigns** filed in 2026 touching a 2026-model-year vehicle, more than Rivian (3) and Tesla (4), the most of any EV maker in the series. The count is not the story. The story is that the biggest campaign, 26V540, covers **27,185 Air sedans, essentially every Air ever built**, with Lucid estimating a **100 percent defect rate** and **3 fires already** on the record, and that three of the five recalls are paperwork for over-the-air fixes Lucid had already pushed, while thousands of owners had not installed them: 438 Gravity owners and 6,466 Air owners were still running the defective software on the day the filings landed.

## Kill test

- **Genuinely newsworthy?** Yes. First company-level census of Lucid's 2026 recalls on this site. The Rivian census at #1496 set up the comparison directly: the two American EV startups, one with 3 campaigns and 103,526 vehicles, the other with 5 campaigns and 50,004. Lucid filed more campaigns and covered fewer vehicles, and the shape is different in every dimension that matters: Rivian's recalls were all Rivian's own engineering, Lucid's two physical recalls were both supplier-caused (Camaco changed a weld process without telling Lucid; GKN/Bossard bolts lost torque during adhesive curing), and Lucid's biggest campaign is a fire recall with a park-outside advisory, which no Rivian campaign carried.
- **Novel on site?** Yes. No prior Lucid company-level census exists. Individual Lucid recalls were never covered as census entries, and the Gravity's seat belt recall is the first time a NHTSA filing has disclosed a Gravity production figure (4,476 units, all built before February 14, 2026, i.e., effectively the entire production run to that date). The original contribution is the corrected 5 census below (NHTSA recalls API, Nov 13, 2026, 14 queries, VPIC's complete 2026 model list is just two names), the 50,004 campaign-unit total with the Air/Gravity split (41,628 vs. 8,376), the software-vs-physical split (3 vs. 2) with both physical defects traced to suppliers, the already-fixed-before-filed pattern with the exact unpatched counts (438 and 6,466), and the twenty-brand table (total now 180).
- **Original contribution:** the corrected 5 census; the 14-query API run with the complete VPIC 2026 list (Air, Gravity) and the 400 semantics validated by the two 200s; the per-campaign populations with the 50,004 total and the 4.6x comparison against Lucid's 10,852 deliveries through Q3 2026; the 26V540 fire finding (27,185 vehicles, 100% defect estimate, 3 fires, 4 smoke incidents, park-outside advisory); the 26V192 production disclosure (4,476 Gravity, 97% defect estimate, every customer vehicle built before Feb 14, 2026, 29-day stop-sale); the 26V193 expansion story (225 units in Oct 2025 to 3,627 in Mar 2026 after 26 more half-shaft failures); and the twenty-brand table.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 13, 2026. Method: VPIC canonical 2026 model list for make "lucid" (exactly 2 names: Air, Gravity), queried make+model+modelYear=2026 for every canonical name plus Hybrid / Plug-In Hybrid / Electric / Recharge suffix variants plus targeted trims (pass 1: 14 queries, 12 HTTP 400, 2 HTTP 200, 5 campaigns). Kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. **Result: 5 campaigns.** Runner at drafts/1498-census-run.py; raw results at drafts/1498-lucid-recall-census-raw.json. https://www.nhtsa.gov/recalls
2. **API 400 semantics, documented:** the recalls API returns HTTP 400 when no recall records exist at all for a model-year, and 200 with rows when records exist. Proven across the series (see #1497's MY2025 controls). Lucid's case is the cleanest in the series: VPIC lists only two 2026 models, both returned 200 with real campaigns, and the twelve 400s are all suffix variants and trim spellings of those same two models, so there is no model left unqueried. No 2026 Lucid model sold in the US exists outside Air and Gravity.
3. **26V017 (Air rearview camera) — NHTSA Part 573 report + owner notice RCONL-26V017-1178 + EVmagz (Jan 30, 2026):** filed Jan 16, 2026; **10,816** vehicles, 2022–2026 Air with the AD02 (DreamDrive Pro) package, software versions 2.8.0 through 2.8.16. Defect: higher compute load when waking from a sleep state could prevent the Autonomous Control Unit from delivering a full-frame rearview image, so the screen shows blank or a "Camera Unavailable. Restart the vehicle" warning; fails FMVSS 111. Lucid found it in late 2025 through internal testing and a limited number of warranty claims, issued a stop-sale in November 2025, and released the fix (software 2.8.17) shortly after. By mid-January more than 9,000 vehicles had already been updated. Remedy: OTA software update, free. Owner letters Mar 13, 2026. Lucid number SR-26-01-0. https://static.nhtsa.gov/odi/rcl/2026/RCONL-26V017-1178.pdf
4. **26V018 (Gravity rearview camera) — NHTSA Part 573 report RCLRPT-26V018-6626 + owner notice RCONL-26V018-7628 + Kelley Blue Book (Feb 4, 2026):** filed Jan 16, 2026; **3,900** vehicles, 2025–2026 Gravity, software versions prior to 3.3.20. Defect: the software could intermittently mishandle vehicle power state and camera view signals, so the rearview image may not appear within two seconds of shifting into reverse, or a blank screen with a warning appears; fails FMVSS 111. Lucid engineers first observed it on internal test vehicles in October and November 2025. Remedy version 3.3.20 was released OTA on December 11, 2025, more than a month before the filing. Through vehicle telematics Lucid determined **3,462** Gravity customers had already updated by the filing date and **438** had not. Production fix in place: vehicles built after the OTA are updated before delivery. Owner letters Mar 13, 2026. Lucid number SR-26-02-0. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V018-6626.pdf
5. **26V192 (Gravity seat belt anchor welds) — NHTSA Part 573 report RCLRPT-26V192-7183 + USA Today (Apr 1, 2026) + EV (Apr 1, 2026):** filed Mar 26, 2026; **4,476** vehicles, 2025–2026 Gravity, production Dec 2, 2024–Feb 3, 2026. Defect: the second-row outboard lap belt anchor bracket weld was shorter than specified and not in the correct location, because the seat manufacturer Camaco altered the manufacturing process "without notice to or approval by Lucid." The bracket may not hold under load for the FMVSS-required time; fails FMVSS 207 and 210. NHTSA estimates **97 percent** of the population carries the defect. The population is **all customer vehicles manufactured before February 14, 2026**, which is effectively every Gravity built to that date, and the figure is the first Gravity production number Lucid has ever disclosed in any filing. Lucid found it on January 22, 2026, during testing for an unrelated issue, issued a **stop-sale on January 28**, and resumed assembling vehicles with seats built to the original specification on February 14. Trade press reported the stop-sale lasted 29 days, disrupting first-quarter deliveries. Remedy: inspect and install a reinforcement bracket with adhesive or replace the entire seat, free. Owner letters May 22, 2026. Lucid number SR-26-04-00. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V192-7183.pdf
6. **26V193 (Air half-shaft bolts) — NHTSA acknowledgment letter (Apr 9, 2026) + EV Report (Sep 19, 2026) + EV (Apr 13, 2026):** filed Mar 26, 2026; **3,627** vehicles, 2024–2026 Air Pure Rear-Wheel Drive, production Sep 13, 2023–Jul 25, 2025. Defect: improperly secured half-shaft bolts may allow the half-shaft to disconnect from the drive unit, causing an unwarned loss of drive power. Root cause: an interruption of torque operations during the adhesive curing window for half-shaft bolts, plus bolts with damaged adhesive, contaminated half-shafts, and reuse of bolts with cured adhesive. Half-shaft assemblies supplied by GKN Automotive (Villagran, Mexico); bolts and brackets by Bossard Inc. (Phoenix, Arizona). This is an **expansion**: Lucid's October 2025 recall SR-25-03-0 covered just 225 vehicles identified through a telematics-based lash detection algorithm, and Lucid's Product Safety Working Group then identified **26 half-shaft issues on customer vehicles between October 2025 and February 2026** attributed to the same root cause, forcing the widening to 3,627 units. Only the Air Pure RWD variant is included, because a single rear drive unit means a disengagement is a complete loss of motive power. Owner letters May 22, 2026.
7. **26V540 (Air exterior lighting eFuse, fire) — NHTSA Part 573 report RCLRPT-26V540-2255 + NHTSA acknowledgment letter (Aug 27, 2026) + EV Report (Aug 28, 2026):** filed Aug 20, 2026; **27,185** vehicles, 2022–2026 Air, production Oct 11, 2021–Jul 27, 2026. Defect: the software logic for the low-voltage exterior lighting circuits, implemented by an eFuse, may provide insufficient overcurrent protection by allowing continued circuit energization at an excess amperage level, so the circuit can overheat. Lucid estimates **100 percent** of the affected population carries the defect. **Three fires and four smoke incidents** are on the record. NHTSA's subject line reads "Park Outside: Exterior Lighting Circuit May Cause Fire," and Lucid issued a **park-outside advisory**: keep affected vehicles away from structures until the remedy software is installed (parking only, owners are not told to stop driving). Remedy version 2.10.0 was released OTA in July 2026, a month before the filing; it lowers the eFuse amperage threshold and disables retry logic that could re-energize a faulted circuit within the same key cycle. Through telematics Lucid determined **20,719** customers had already installed it and **6,466** had not. Owner letters Oct 16, 2026. Lucid number SR-26-06-0. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V540-2255.pdf
8. **Outside the census — 25V855 (Gravity seat backrest covers):** filed Dec 10, 2025, so outside the 2026 census; covers 66 model-year 2026 Gravity vehicles built Sep 8–22, 2025. Defect: front seat backrest covers mislabeled left/right by supplier Piston Interiors (via seat supplier Hyundai Transys), so the covers could be installed on the wrong side and the front seat side airbags could deploy incorrectly. Lucid estimates roughly 40 percent of the 66 actually carry the defect. The Gravity's first recall, filed when deliveries had barely begun. https://www.autoevolution.com/news/lucid-gravity-hit-with-first-recall-only-66-vehicles-affected-262850.html
9. **Outside the census — October 2025 half-shaft recall (SR-25-03-0):** filed October 2025; 225 Air Pure RWD vehicles identified through telematics-based lash detection. The original filing that 26V193 expanded sixteen-fold in March 2026. Same defect, same root cause, same suppliers.
10. **Denominators — Lucid production and deliveries (SEC Form 8-K, Oct 5, 2026; Q3 earnings Nov 9, 2026):** Q1 2026 deliveries **3,093**; Q2 2026 deliveries **3,953**, production 4,774; Q3 2026 deliveries **3,806**, production 2,954. **Total Jan–Sep 2026 deliveries: 10,852.** Production was deliberately cut in Q3 (down 38% sequentially) after Lucid eliminated the second shift at its Casa Grande AMP-1 factory in June, as part of an operating reset targeting $1.4 billion in cash flow improvements. Lucid does not disclose production or delivery figures by model, which is why the 26V192 population (4,476 Gravity) is the only public Gravity production figure. https://www.sec.gov/Archives/edgar/data/1811210/000162828026064910/q3fy26ex991-productionandd.htm

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 13, 2026)

| Campaign | Filed | Vehicle(s) | Defect | Population |
|---|---|---|---|---|
| 26V017 | Jan 16, 2026 | Air 2022–26 (AD02) | Rearview camera blank on reverse (FMVSS 111) | 10,816 |
| 26V018 | Jan 16, 2026 | Gravity 2025–26 | Rearview camera blank on reverse (FMVSS 111) | 3,900 |
| 26V192 | Mar 26, 2026 | Gravity 2025–26 | Seat belt anchor welds too short / misplaced (FMVSS 207/210) | 4,476 |
| 26V193 | Mar 26, 2026 | Air Pure RWD 2024–26 | Half-shaft bolts disconnect, loss of drive power | 3,627 |
| 26V540 | Aug 20, 2026 | Air 2022–26 | Exterior lighting eFuse overcurrent, fire risk, park outside | 27,185 |
| **Total** | | | | **50,004** |

### Splits that matter

| Split | Campaign-units |
|---|---|
| Air (26V017 + 26V193 + 26V540) | 41,628 |
| Gravity (26V018 + 26V192) | 8,376 |
| Software (26V017 + 26V018 + 26V540) | 41,901 |
| Physical (26V192 + 26V193) | 8,103 |
| Fire campaign (26V540) alone | 27,185 (54.4% of the total) |

The campaign-unit total (50,004) counts a vehicle once per campaign it appears in. The Air appears in three campaigns, so the 41,628 Air campaign-units are not 41,628 distinct cars: 26V540 alone covers 27,185 Airs, which is essentially every Air ever built (production Oct 11, 2021–Jul 27, 2026), so the distinct Air population is close to 27,185 plus the Air Pure RWD cars in 26V193 that fall outside 26V540's window, a small number. The Gravity's 8,376 campaign-units are likewise two overlapping populations of the same roughly 4,476 cars built before Feb 14, 2026.

### The denominator problem

Lucid delivered **10,852** vehicles in the first nine months of 2026. The 2026 recall campaign-unit total is **50,004**, or **4.6 times** the year's deliveries. That ratio is not a scandal on its own: the campaigns reach back to model year 2022, and Lucid has delivered roughly 46,000 vehicles in its entire history. But it is the shape of a startup's recall year. Ford's 41 campaigns in #1473 covered millions of vehicles against millions of deliveries; the ratio barely moved. Lucid's recall population is larger than its cumulative deliveries, which means the average Lucid on the road in 2026 was recalled at least once, and the average Air was recalled for a defect Lucid estimates affects 100 percent of the population.

### Per-model counts (2026 model year)

| Model | Campaigns | API evidence |
|---|---|---|
| Air | 3 | 200 — 26V017, 26V193, 26V540 |
| Gravity | 2 | 200 — 26V018, 26V192 |

Both models, every model Lucid sells, recalled in 2026. There is no clean sheet in this census.

### Outside the census (filed in 2025, touches 2026 vehicles)

| Campaign | Filed | Model(s) | Defect | Population |
|---|---|---|---|---|
| 25V855 | Dec 10, 2025 | Gravity 2026 | Seat backrest covers mislabeled, side airbags may deploy wrong | 66 (~40% defect estimate) |
| SR-25-03-0 | Oct 2025 | Air Pure RWD | Half-shaft bolts (original filing, expanded by 26V193) | 225 |

### Twenty-brand corrected table (same method family)

| Group | 2026 campaigns |
|---|---|
| Ford (+ Lincoln 10, company 44) | **41** |
| Stellantis | 27 |
| GM | 15 |
| Toyota | 15 |
| Hyundai | 15 |
| Volvo (cars 2 + trucks 10) | 12 |
| Mercedes | 8 |
| Nissan (+ Infiniti, company 7) | 7 |
| BMW | 7 |
| Subaru | 5 |
| **Lucid** | **5** |
| Honda | 4 |
| Kia | 4 |
| Volkswagen | 4 |
| Tesla | 4 |
| Genesis | 3 |
| Rivian | 3 |
| Audi | 1 |
| Porsche | 0 |
| Mazda | 0 |

Twenty-group total: **180 campaigns**. Lucid adds 5 and lands tied for tenth with Subaru, between BMW's 7 and Honda's 4. Lucid filed more campaigns than Tesla (4), Genesis (3), and Rivian (3), and its 50,004 campaign-units are the smallest population in the series for a brand with 5 or more campaigns, because Lucid's entire history is about 40,000 vehicles.

## Original contribution (Clara's math and synthesis)

1. **Every Air ever built.** 26V540's population is 27,185 Air sedans built between October 11, 2021 and July 27, 2026. That is not a model year or a trim. It is the whole production history of the Air, and Lucid estimates 100 percent of it carries the defect. No other campaign in the twenty-brand series covers a brand's entire history with a 100 percent defect estimate and fires already on the record. The three fires and four smoke incidents are the only fires attached to any campaign in the Lucid census, and they sit in the campaign that covers the most cars.
2. **The recall that was already fixed, twice over.** Three of the five campaigns are paperwork for over-the-air fixes Lucid had already released: 26V018's remedy went out December 11, 2025, a month before the January filing; 26V540's went out in July 2026, a month before the August filing; 26V017's went out shortly after the November 2025 stop-sale. That is the honest version of the OTA promise: the fix reaches the car before the letter does. The dishonest version is the unpatched count. At filing, 438 Gravity owners had not installed 3.3.20 and 6,466 Air owners had not installed 2.10.0. Those 6,904 owners are the actual risk pool, and they are the reason the recall exists at all: a fix that is available is not a fix that is installed. The NHTSA filing is the only mechanism that reaches them.
3. **Both physical recalls are supplier recalls.** 26V192's weld was changed by Camaco "without notice to or approval by Lucid." 26V193's bolts lost torque because of an interruption in the adhesive curing window, with damaged-adhesive bolts, contaminated half-shafts, and reused bolts with cured adhesive in the mix, from GKN and Bossard. Lucid designed neither failure. It bought both. The contrast with Rivian in #1496 is exact: Rivian's three campaigns were Rivian's own engineering, Lucid's two physical campaigns were its suppliers'. A startup that outsources its seats and its half-shafts inherits its suppliers' process changes, and the first Lucid learns about a changed weld is when its own compliance test fails.
4. **The Gravity was recalled before it existed as a volume car.** 26V192 covers all 4,476 customer Gravity vehicles manufactured before February 14, 2026, which is every Gravity built to that date. The model launched in late 2025, was recalled in December for 66 mislabeled seat covers, recalled again in January for a blank rearview camera, and recalled again in March for seat belt anchors that could fail in a crash, with a 29-day stop-sale in between. The Gravity's first year contains four recalls across two calendar years, three of them physical or safety-critical, and the seat belt recall is the one that stopped sales entirely. A buyer who took delivery of a Gravity in January 2026 owned a car under a stop-sale within weeks.
5. **The half-shaft recall is a recall of a recall, and the expansion is the story.** Lucid's October 2025 filing covered 225 Air Pure RWD vehicles found through a telematics lash-detection algorithm. Then 26 more half-shaft issues appeared on customer cars between October 2025 and February 2026, and the March filing widened the population sixteen-fold to 3,627. The algorithm found the first 225. The field found the rest. The 26 post-recall failures are the number that matters, because they are the failures that happened after Lucid thought it had the population contained.
6. **The two January camera recalls are one defect filed twice, and the timing tells you why.** 26V017 (Air) and 26V018 (Gravity) were filed the same day, January 16, for the same failure mode, a blank rearview image on reverse, under the same FMVSS 111, with the same remedy shape, an OTA software update. They are separate filings because the software stacks are separate: the Air's bug is a compute-load failure when waking from sleep, the Gravity's is a power-state and camera-view signal mishandling. Two platforms, two codebases, the same user-visible failure, the same day. That is the cost of building two cars on two software stacks, and it is also the reason the series counts them as two campaigns.

## Limitations

- The census counts NHTSA campaign filings, not defects fixed, not vehicles repaired, and not crashes caused. A campaign with a 100 percent defect estimate (26V540) and a campaign whose defect estimate is under 1 percent both count as one, and the population figures are upper bounds, not counts of broken vehicles.
- Campaign-unit totals count a vehicle once per campaign. The Air's 41,628 campaign-units are not 41,628 distinct cars; 26V540's 27,185 is close to the entire Air population, so the distinct-vehicle count is much lower than the campaign-unit total. The article states both and leads with the campaign-unit total because that is the series convention, with the overlap explained.
- The API's 400-means-no-records semantics is validated across the series, and Lucid's case is the cleanest: VPIC lists only two 2026 models, both returned 200. A 2026 Lucid model sold in the US under a name VPIC does not list would be missed; no such model exists. Lucid's third model, the midsize Cosmos, only begins small-volume production by the end of 2026.
- Populations are NHTSA "potential number of units affected" figures from Part 573 reports and acknowledgment letters, not counts of vehicles with the defect. Where the Part 573 gives a defect estimate (26V192: 97%; 26V540: 100%; 25V855: ~40%), it is stated; where it does not, the population is an upper bound.
- Delivery figures are Lucid's own SEC-filed quarterly totals (Q1 3,093, Q2 3,953, Q3 3,806), which Lucid does not break out by model. The Gravity production figure (4,476) comes from the 26V192 Part 573 report, not from Lucid's disclosures.
- The 26 half-shaft issues between October 2025 and February 2026 and the "29-day stop-sale" duration come from trade-press reporting (EV, EV Report) of the Part 573 chronology; the Part 573 itself gives the January 28 stop-sale date and the February 14 clean point. The article attributes the 29-day duration to EV's reporting and uses the filing's dates for the stop-sale and the clean point.

## Strongest counterargument

The honest reading is that Lucid had a competent, even exemplary, recall year. Five campaigns sounds like a lot until you look at what they are: three are software, and all three were fixed over the air before the filing, which is the recall system working as designed for a software-defined car. The two physical recalls were both caught by Lucid's own testing or telematics before any crash, the seat belt weld was found during an unrelated compliance test, and zero crashes or injuries attach to any of the five campaigns. The fire campaign's three fires produced no injuries, the park-outside advisory is precautionary, and 20,719 of 27,185 owners had already installed the fix before the filing. Lucid's delivery total is small, so any recall looks large against it, and the 4.6x ratio is an artifact of counting five model years of Airs against nine months of deliveries. The Gravity stop-sale lasted weeks, not months, and production resumed with corrected seats. By any danger ranking, Lucid had a quieter year than Ford, Stellantis, or GM, and the OTA pattern is the thing other automakers should copy. The article says so.

## Actionable takeaways

- **If you own a 2022–2026 Air:** check your VIN at nhtsa.gov/recalls for 26V540 first. It covers essentially every Air ever built, Lucid estimates 100 percent of the population carries the defect, and the remedy is software 2.10.0 or later. If your car is one of the 6,466 that had not installed it at filing, install it now and park outside away from structures until you do. Then check for 26V017 (rearview camera, software 2.8.17 or later) if your Air has the DreamDrive Pro package.
- **If you own a 2024–2026 Air Pure Rear-Wheel Drive:** check for 26V193 (half-shaft bolts). This is the one physical recall on the Air, and a disengagement means a complete, unwarned loss of drive power because the Pure RWD has a single rear drive unit. The October 2025 recall covered only 225 cars; the March expansion covers 3,627. If your car was outside the original 225, it is very likely inside the expansion.
- **If you own a 2025–2026 Gravity:** check for 26V018 (rearview camera, software 3.3.20 or later) and 26V192 (seat belt anchor welds). The seat belt recall is a physical inspection: the dealer installs a reinforcement bracket with adhesive or replaces the entire seat. If your Gravity was built before February 14, 2026, it is in the population, and that is effectively every Gravity delivered before March.
- **If your Lucid is running old software:** the pattern of this census is that the fix is already available and the risk is not installing it. Check the software version in the car, not just the recall letter: 2.8.17 or later for the Air camera, 3.3.20 or later for the Gravity camera, 2.10.0 or later for the Air lighting circuits. An OTA update you have not accepted is a recall you have not completed.
- **If you are shopping for a used Lucid:** there is no clean-sheet model in this census, so the VIN lookup is the whole story. Any 2022–2026 Air carries 26V540 until the software is updated, any Gravity built before February 14, 2026 carries the seat belt recall, and every fix is free. Ask the seller for the current software version before you ask about the price.
