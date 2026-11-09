# Research — #1440: NHTSA's Robotaxi Crash Database Just Set a Record. Half the Cars in It Were Parked.

**Slug:** `1440-half-the-robot-crashes-are-parked`
**Journalist:** Axle McScatter (Data Visualization Editor; statistical roundups, By The Numbers)
**Date:** November 8, 2026

## Angle (1-2 sentences)
NHTSA's robotaxi crash database just posted its biggest month ever, 145 ADS incidents in March 2026, and the count keeps climbing. But half the "crashes" in the file are vehicles that were stopped or parked, three-quarters were rolling under 10 mph, and Waymo's own per-mile crash rate fell tenfold over the same period. The database stopped measuring robot danger a while ago. It now measures fleet growth and humans rear-ending stationary robots.

## Kill test — PASS
- **Genuinely newsworthy?** Yes. Fresh data release: NHTSA's Standing General Order file through September 15, 2026, analyzed and published October 12, 2026 (updated Oct 21). March 2026 set the all-time monthly record for ADS crash reports since collection began in July 2021. The stopped/parked decomposition has never been run on this site.
- **Not a duplicate:** full queue + drafts + stories grep: zero slugs contain "standing-general-order", "crash-count", "rate-vs-count", "reporting-rule", or "delta-v". Prior coverage is adjacent, not overlapping: #1181 Avride SGO reporting audit; "NHTSA Tracked Every Robotaxi Crash for Four Years. On June 16, It Stops." (June 5, 2026, the rule change itself); "America Just Had Its Safest Quarter in a Decade. ADAS Crashes Hit an All-Time High. Both Are True." (July 23, 2026, the national paradox). None of them ran the stopped/parked speed decomposition, the March 2026 record month, or the two 2025-26 fatal cases in which the ADS vehicle was a bystander.
- **3+ primary sources?** Yes: (1) NHTSA Standing General Order crash-reporting page and data dictionary (primary, nhtsa.gov); (2) Reyes & Associates analysis of the Sept 15, 2026 SGO release, 1,538 distinct incidents (published Oct 12, 2026); (3) California Autonomous Vehicle Crash Dashboard data via Political.org, Oct 15, 2026 (Waymo LA County counts and per-mile rates); (4) ConsumerShield trend analysis of the same NHTSA file (monthly series through Sept 2026, 3 total ADS deaths); (5) IIHS finding cited in Political.org (68% fewer crashes per VMT vs human drivers; 71% lower in LA).
- **Killed this run (verified duplicates, do not re-propose):** SGO third-amendment rule change, June 16, 2025 (published story, June 5, 2026); Waymo school-bus recall (#1177); Avride SGO reporting audit (#1181); Waymo 100% defect-rate recall; Waymo 170M-mile cone story; Waymo sober-nighttime 39x risk (#1100); 2024 national deaths 39,345 (#1299 + two published stories); ADAS national paradox Q1 2026 (published July 23, 2026).

## Verified facts

### The file (NHTSA SGO release through Sept 15, 2026; Reyes analysis, Oct 12, 2026)
- **1,538 distinct ADS incidents** in the release window: 1,537 from June 2025 through August 2026, plus one from April 2025. September 2026 crashes excluded.
- Monthly counts, 2025: Jun 59, Jul 66, Aug 61, Sep 67, Oct 97, Nov 112, Dec 109. 2026: Jan 118, Feb 92, **Mar 145**, Apr 141, May 118, Jun 129, Jul 120, Aug 103.
- **March 2026 (145) is the highest monthly total since data collection began in July 2021.** ConsumerShield's parallel count puts March at 144; the one-incident wobble is a counting-method difference (deduplication timing). Disclosed in limitations.
- Quarterly: Q3 2025 194, Q4 2025 318, Q1 2026 355, Q2 2026 388. July-to-July rose 66 to 120, up about 82%.
- Waymo is the reporting entity for **1,273 incidents (82.8%)**. Next: Avride 81, Zoox 77, Tesla 36, May Mobility 20, Motional 13, Aurora 8, Nuro 7.
- Geography: California 802, Texas 321, Arizona 206, together 86%. Cities: San Francisco 394, Los Angeles 256, Austin 199, Phoenix 112, Dallas 75.
- 18 incidents involve ADS heavy trucks (Aurora 8, Gatik 3, PlusAI 2, Waabi 2, Stack AV 2, TORC 1). Median truck speed 34.5 mph; 8 at 55+ mph.

### The parked-car finding (Reyes analysis of the same file) — ORIGINAL DECOMPOSITION
- Companies described the ADS vehicle as **stopped or parked in 775 incidents (50.4%)** and traveling below 10 mph in **1,166 (75.8%)**.
- Speed distribution: 0 mph 785 (51.0%); 1-9 mph 381; 10-24 mph 256; 25-44 mph 96; **45+ mph only 20 (1.3%)**. Maximum 65 mph.
- Movement: stopped 657, parked 118, going straight 538, turning left 68, turning right 41, changing lanes 36, backing up 26.
- In 242 stopped-or-parked incidents the rear contact-area field was checked. That coding does not by itself prove a rear-end sequence, but it is consistent with humans hitting stationary robots from behind.
- Road setting: streets 1,071, intersections 303, **parking lots 127 (8.3%)**, highways/freeways 31.
- Crash partner: passenger cars 483, SUVs 364, pickups 170, heavy trucks 147, fixed objects 93, motorcycles 15, cyclists 14, pedestrians 4.
- Airbags deployed in a vehicle in 82 incidents, but in the ADS vehicle itself in only **29 of 1,538 (1.9%)**.

### Injury severity (same file)
- **154 incidents (10.0%) alleged an injury, including 2 fatal incidents.** 1,359 reported no injury, 25 unknown.
- Severity ladder: minor no hospitalization 97; minor with hospital visit 38; moderate no hospital 4; moderate with hospital 9; serious with hospitalization 4; fatal 2.
- ConsumerShield's full-series count (July 2021 through Sept 15, 2026): **3 ADS deaths total** across the entire five-year file. The third death predates the June 2025 window.

### The two fatal incidents — the robot was a bystander in both (Waymo's own reports, via Reyes)
- **Tempe, September 2025:** Waymo slowed to turn right while yielding to a pedestrian. A motorcycle hit the vehicle's rear-left corner at 8 mph; the rider fell into the road and a passing car struck the rider and left. Rider later died at a hospital.
- **Dallas, August 2026:** Waymo slowed for a pedestrian walking in the opposite lanes of Maple Avenue. An oncoming SUV struck the pedestrian, who hit the ground and then the Waymo's rear-left area. Waymo moving about 5 mph; alleged fatal injury.
- Both are company accounts, not findings of fault. In both, the ADS vehicle was moving at walking speed or yielding, and the fatal force came from another vehicle.

### The rate runs the other way (California AV Crash Dashboard via Political.org, Oct 15, 2026)
- Waymo LA County crashes: 69 in 2024, 219 in 2025, **186 so far in 2026**. Statewide California: 304 in 2024, **590+ in 2025**, nearly double.
- Waymo crash rate per million miles: **about 57 in 2023, 13.7 in 2024, 6.7 in 2025, below 6 so far in 2026**. Count roughly tripled in LA while the rate fell roughly tenfold.
- 82 of 2026's LA County incidents happened while the vehicle was stopped; 65 while traveling straight.
- Waymo: 67 million miles driven in Los Angeles, **zero crashes resulting in serious or fatal injuries**, vs 11 expected for human drivers over the same distance.
- In 40% of the vehicle-to-vehicle and single-vehicle collisions Waymo reported to NHTSA in LA through June 2026, the change in velocity was **under 1 mph**, typically light damage such as dents or scratches.
- IIHS: per vehicle mile traveled, Waymo driverless vehicles in San Francisco, Phoenix, Los Angeles and Austin were involved in **68% fewer crashes than human drivers, 71% lower in Los Angeles specifically**. IIHS notes around half of all human-driver crashes and a third of injury crashes go unreported, which flatters the human baseline.

### Why the count can't be a safety rate (NHTSA's own page)
- NHTSA states the file has **no miles-driven denominator** and counts "have not been normalized or adjusted by any measure of exposure." Reporting entities are not required to submit fleet size or miles traveled.
- The Third Amended SGO (effective June 16, 2025) added a property-damage threshold for less severe ADS crashes and eliminated duplicate reporting, so pre/post June 2025 comparisons are contaminated by the rule change itself. June 2025 is a reporting-regime transition month and a poor baseline.
- NHTSA warns a manufacturer with better telemetry "may report a higher number of crashes than a manufacturer with limited access, simply due to" awareness, not danger.

## Original contribution
- The stopped/parked decomposition: 50.4% of the file's vehicles were not moving, 51.0% were at exactly 0 mph, 75.8% under 10 mph, and only 1.3% at 45+ mph. Nobody has published this cut of the Sept 2026 release on this site.
- The count-vs-rate inversion quantified: LA County crash count up 3.2x (69 to 219) while the per-mile rate fell 8.5x (57 to 6.7) over the same two years. The database's growth is a fleet-growth artifact.
- The fatality audit: both fatal incidents in the 15-month window had the ADS vehicle as a bystander at 5-8 mph; the file's 2 fatal incidents out of 1,538 (0.13%) vs 3 ADS deaths in five years of the full file.

## Strongest counterargument
- The stopped/parked share does not prove the robots are innocent. A robotaxi that brakes hard for a phantom hazard and gets rear-ended still created the conflict, and "stopped" includes vehicles stopped in live traffic lanes where a human driver would have kept moving. Waymo's own data shows 40% of LA collisions under 1 mph delta-v, but that is Waymo's characterization of its own crashes. The per-mile rate improvement is real but measured in geofenced, fair-weather, well-mapped territory, and IIHS itself notes human crashes are underreported, which cuts both ways: it flatters the human baseline and it means the robot file, with its near-perfect telemetry, is the only dataset that actually counts its fender-benders. The honest read is not "robots are perfect" but "this particular database cannot tell you how dangerous robots are, in either direction."

## Limitations
- March 2026 monthly count differs by source: Reyes table 145, ConsumerShield 144. Counting-method wobble (deduplication timing, cutoff dates). Both agree it is the record month.
- The file is company-reported data, reproduced as submitted; NHTSA does not verify fault. Narratives are company accounts.
- No exposure denominator in the federal file. All per-mile rates come from Waymo's own reporting or the California dashboard, not from NHTSA.
- The June 2025 rule change (property-damage threshold, duplicate elimination) means the 2025-26 monthly series is not directly comparable to the 2021-24 series.
- The 1,538-incident window covers June 2025-August 2026 only. September 2026 crashes are excluded from this release.
- Waymo is 82.8% of the file, so file-wide statistics are mostly Waymo statistics. Avride, Zoox, and the rest are rounding errors in the aggregate.
- "Stopped or parked" is the reporting company's own movement coding; 242 rear-contact flags do not establish a rear-end crash sequence.

## Actionable takeaways
- If a headline tells you robotaxi crashes hit a record, ask for the denominator before believing it. Raw counts in this file track fleet size, not danger.
- The number that matters is crashes per million miles, and Waymo's fell from about 57 to under 6 in three years. Demand the same per-mile number from every operator before ranking them.
- If you drive near robotaxis: the most common "crash" in the federal file is a human driver hitting a stopped or slow-moving robotaxi, often from behind. The robot braking for something you cannot see is the scenario to watch for, not the robot speeding.
- The file's blind spot is the June 2025 reporting change. Anybody comparing 2024 robotaxi crash counts to 2026 counts without mentioning the threshold change is either sloppy or selling something.

## Sources
1. NHTSA, Standing General Order on Crash Reporting (Third Amended SGO 2021-01, effective June 16, 2025). https://www.nhtsa.gov/laws-regulations/standing-general-order-crash-reporting
2. Angel Reyes & Associates, "What NHTSA's Latest Robotaxi Crash Data Shows," Oct 12, 2026 (updated Oct 21, 2026). Analysis of NHTSA SGO release through Sept 15, 2026: 1,538 incidents. https://www.reyeslaw.com/blog/nhtsa-self-driving-robotaxi-crash-data/
3. Margaret Pierce, Political.org, "Waymo Crash Map Shows Hundreds of Driverless Car Collisions Across Los Angeles as Federal Reporting Rules Shift," Oct 15, 2026. California AV Crash Dashboard data; Waymo per-mile rates; IIHS 68%/71% findings. https://political.org/2026/10/15/waymo-crash-map-shows-hundreds-of-driverless-car-collisions-across-los-angeles-as-federal-reporting-rules-shift/
4. ConsumerShield, "Self Driving Car Accidents Trend Chart (2026)," updated Nov 8, 2026. Monthly ADS crash series July 2021-Sept 2026; 3 total ADS deaths; Waymo 2,380 cumulative ADS reports. https://www.consumershield.com/articles/self-driving-car-accidents-trends
5. NHTSA, Fatality Analysis Reporting System (FARS). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars

## Headline options
- "NHTSA's Robotaxi Crash Database Just Set a Record. Half the Cars in It Were Parked."
- "Robotaxi Crashes Hit an All-Time High. So Did the Number of Parked Cars Getting Hit."
- "March Was the Worst Month Ever for Robotaxi Crashes. The Robots Were Mostly Standing Still."
