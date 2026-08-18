# Research: Stellantis Has Recalled the Same Backup Camera Bug Seven Times. It Keeps Shipping.

## Thesis
Stellantis has issued at least seven separate backup camera recall campaigns since 2022, all caused by the same architectural flaw: radio/infotainment software that can prevent the rearview camera image from displaying. Each time, an OTA software update patches the current model years. Each time, the NEXT generation of vehicles ships with the same design problem in new Uconnect software. The running total exceeds 2 million US vehicles. This isn't a bug — it's an architectural defect that Stellantis keeps patching rather than redesigning.

## Self-Critique Gate
**Is this genuinely novel after 773 articles?**
- We have `stellantis-848k-use-your-mirrors` (queued) focused on the mirrors-vs-cameras irony and child backover data
- We have `stellantis-recall-ratio-assembly-line-crisis` focused on recall-to-sales ratio and bolt defects
- We have `digital-dashboard-single-point-failure` about screen-as-SPOF
- We have `software-recall-epidemic-record` about software recalls as the #1 category
- NONE of these cover the SERIAL REPEAT PATTERN of the SAME Stellantis camera bug across 7+ campaigns. The original contribution is the cumulative count across campaigns and the ISO 26262 freedom-from-interference framework.

**Kill test:** 3+ primary sources? YES (see below)

**Verdict: PROCEED.**

## FARS Cross-Tab (Original Contribution)
Models affected by the camera recall in FARS (2014-2023):
- Jeep Cherokee: 2,276 deaths, rate 1.73, impairment 18.1%
- Jeep Wrangler: 1,842 deaths, rate 0.84, impairment 19.3%
- Jeep Grand Cherokee: 1,161 deaths, rate 0.51, impairment 20.8%
- Dodge Charger: 715 deaths, rate 0.75, impairment 22.7%
- Jeep Compass: 453 deaths, rate 0.41, impairment 20.3%
- Dodge Durango: 356 deaths, rate 0.54, impairment 22.5%
- Chrysler Pacifica: 160 deaths, rate 0.19, impairment 20.0%

**Total: 6,963 deaths = 29.9% of all Stellantis deaths in FARS.**
These are the models whose backup cameras keep failing due to Uconnect software bugs.

## Key Recall Campaigns (Documented)

### Campaign 1: 24V436 / 66B (Jun 2024)
- ~1,033,433 vehicles
- MY2021-2023 Pacifica, MY2021-2022 Durango, MY2022-2023 Compass/Grand Cherokee/Wagoneer/Grand Wagoneer, MY2021-2023 Grand Cherokee L, MY2022 Ram 1500/2500/3500, MY2022-2023 ProMaster
- Root cause: radio software prevents rearview image from displaying
- NHTSA report: https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V436-3057.PDF

### Campaign 2: ProMaster + Journey (May-Jul 2025)
- ~219,577 vehicles (141,906 ProMaster MY2019-2021 + 77,671 Journey MY2019-2020)
- NHTSA PE24-006 investigation opened Feb 2024
- Root cause: loss of rearview camera image
- Source: MoparInsiders

### Campaign 3: ProMaster (May 2025)
- ~235,000 Ram ProMaster MY2022-2025
- Rearview cameras blank
- Source: Beacon Journal / USA TODAY

### Campaign 4-6: Earlier campaigns (Consumer Reports listed 6 pre-2025 campaigns)
- Ram Pickup Trucks — faulty backup cameras
- Jeep Grand Cherokee/Wagoneer — camera may not work
- Ram 1500/2500/3500 — rearview image problems
- Ram Pickup Trucks — faulty backup cameras (separate)
- Chrysler/Dodge/Jeep/Ram — rearview display issues
Source: Consumer Reports, https://www.consumerreports.org/cars/car-recalls-defects/chrysler-dodge-jeep-ram-recall-backup-camera-may-fail-a7019256987/

### Campaign 7: Today (Aug 17, 2026)
- ~955,000 worldwide (848,511 US)
- MY2026-2027 Pacifica/Voyager, Charger, Cherokee, Compass, Gladiator, Grand Cherokee, Grand Cherokee L, Grand Wagoneer, Wrangler, Ram 1500/2500/ProMaster/ProMaster EV
- Root cause: radio software prevents rearview camera from displaying
- Sources: Reuters, Detroit Free Press, WSJ

## Primary Sources
1. Reuters, "Stellantis recalls 955,000 vehicles because radio software may disrupt rear-view camera," Aug 17, 2026: https://www.reuters.com/legal/litigation/stellantis-recalls-955000-vehicles-because-radio-software-may-disrupt-rear-view-2026-08-17/
2. Detroit Free Press / USA Today, "900,000 Chrysler, Dodge, Jeep, Ram vehicles recalled over camera bug," Aug 17, 2026: https://www.freep.com/story/money/cars/stellantis/2026/08/17/stellantis-recalls-900000-vehicles-over-camera-bug/91335554007/
3. Consumer Reports, "Chrysler, Dodge, Jeep, and Ram Vehicles Recalled Because Backup Camera May Fail" (lists 6 previous similar recalls): https://www.consumerreports.org/cars/car-recalls-defects/chrysler-dodge-jeep-ram-recall-backup-camera-may-fail-a7019256987/
4. MoparInsiders, "Stellantis Recalls Over 1 Million Vehicles For Rearview Camera Issue," Feb 10, 2026: https://moparinsiders.com/stellantis-recalls-over-1-million-vehicles-for-rearview-camera-issue/
5. Lemon Law Help, "FCA Backup Camera Recall: 1 Million Vehicles Affected": https://lemonlawhelp.com/blog/fca-backup-camera-problem-causes-recall-of-1-million-vehicles/
6. NHTSA Part 573 recall report (24V436): https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V436-3057.PDF
7. IBD, "Stellantis Recalls Almost 1 Million Cars; Stock Falls To All-Time Low" (3.9M recalled in 2026 as of Aug 10): https://www.investors.com/news/stellantis-recall-dodge-jeep-chrysler-ford-general-motors/
8. NHTSA FARS, Fatality Analysis Reporting System, 2014-2023: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars

## Strongest Counterargument
The camera bug is a display routing issue, not a camera hardware failure. No injuries have been reported across any of the campaigns. Stellantis fixes each batch via free OTA updates. The backup camera is a redundant safety system — mirrors still exist, and drivers are instructed to use them. Each recall affects different model years with different software versions, meaning it's technically a different bug each time even if the architectural pattern is similar. Software bugs are inevitable in complex systems; what matters is that Stellantis issues recalls and fixes them quickly.

## Proposed Journalist
**Mia Crumplezone** — Safety Engineering Editor. This is a vehicle design/architecture story. Her beat covers "Vehicle design analysis, safety tech" and she's "slightly judgmental about bad vehicle design."
