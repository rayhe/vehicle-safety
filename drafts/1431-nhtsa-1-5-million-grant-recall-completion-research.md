# Research — #1431: NHTSA Will Pay States $1.5 Million to Tell You Your Car Is Recalled

**Slug:** `1431-nhtsa-1-5-million-grant-recall-completion`
**Journalist:** Rex Driverton (Senior Crash Correspondent — investigations, deadpan paradox beat; last bylines: Clara Rollover #1428, Mia Crumplezone #1429, Axle McScatter #1430)
**Kicker:** Investigation
**Date researched:** 2026-11-08

## Angle
On November 5, 2026, NHTSA announced $1.5 million in grants to help states tell drivers about open recalls at vehicle registration. The money is real. The math is not flattering: $1.5 million divided by the 29 million vehicles recalled in 2025 is about five cents per recalled car. But the Maryland pilot the program is built on repaired 371,000 recalls for $222,300, sixty cents a repair, and DMV letters doubled and tripled repair rates versus manufacturer mail alone. The story is the tension between a laughably small number and a provably cheap lever.

## Kill test
- **Newsworthy:** Yes. Announced November 5, 2026 (three days old), at NHTSA's "Recalls Next" summit, by Administrator Jonathan Morrison. Fresh numbers: 68% completion for 3-year-old vehicles vs 18% for 15-year-old ones, ~900 recalls covering 29M+ vehicles in 2025, bulk VIN lookup tool (100 VINs at once), public docket open through December 5.
- **Novel angle:** No prior Crash Report story covers the grants program, the registration-renewal notification mechanism, or the Recalls Next summit (full-content grep for "grant", "registration renewal", "Recalls Next": zero hits). The site's recall-completion coverage (half-recalls-never-fixed, 50.3% aggregate completion, age-decay curve) is the background, not the story; this piece is the new federal response to it, with original per-vehicle and per-repair arithmetic nobody has run.
- **Killed this run:** Ford Godzilla camshaft petition DP26011 (#1295/#1326/#1430); GM L87 EA26005 Nov 13 deadline (#1025/#1344/#1367); Lincoln Nautilus anti-rust oil neutral shift 26V688 (#1321/#1356); Ford tailgate cable 26V689 (#1297); GM EV brake software 26V717 (#1387/#1421); Hyundai ACU 26V728 (#1429, just shipped); IIHS Oct 31 moderate-overlap wave (#1244/#1408); BorgWarner/Akasol battery recall query RQ26005 (#1386); Cybertruck 11 recalls / 71,000 trucks wind-down (#1422); 2025 traffic deaths early estimate (already published on site); GHSA pedestrian 2025 (#1374); Heartland/Ember RV power-seat cord (#1371); GM six-vehicle seat-weld recall 26V696 (#1357); most-recalled 2026 vehicles census (#1430, just shipped); FARS toxicology extremes (Park Avenue #868, Corvette #1007, Tracker #908, Astro #1115).

## Facts (verified Nov 8, 2026)
1. **The announcement (NHTSA press release, Nov 5, 2026):** NHTSA announced $1.5 million in grant funding to help states improve vehicle recall completion rates, announced at the "Recalls Next: Technological Innovations and Safety Recalls" event. States and eligible agencies have until February 4, 2027 to apply. Grants.gov listing: "State Process for Informing Consumers of Recalls Program," funding opportunity NHTSA-693JJ927R000007-FY27, $1,500,000 program funding, 5 expected awards, $300,000 award minimum, posted Nov 4, 2026. Program authorized by the Infrastructure Investment and Jobs Act (IIJA), Pub. L. 117-58, section 24103(4).
2. **The age cliff (Morrison, Recalls Next summit, Nov 5):** a new recall on a 3-year-old vehicle averages about 68% completion; the same kind of campaign on a 15-year-old vehicle averages about 18%. (Autoblog, Nov 7, 2026; Tesla North, Nov 5, 2026.)
3. **2025 scale:** NHTSA oversaw nearly 900 vehicle safety recalls in 2025 affecting more than 29 million vehicles. (Tesla North, Nov 5; Autoblog, Nov 7.)
4. **The Maryland pilot (NHTSA, 2017 agreement):** NHTSA entered a $222,300 cooperative agreement with Maryland in 2017. From April 2018 to January 2020, Maryland renewed 4.6 million vehicle registrations; 456,000 of those vehicles had 943,000 open recalls; 371,000 individual recalls were repaired; more than 32% of the recalls remedied were air bags.
5. **Earlier state grants (Morrison, Nov 5):** earlier grants in Maryland, California, Texas, and Ohio reached owners of about 9.5 million vehicles with open recalls, and nearly 2 million of those were repaired during the short grant windows. DMV letters sometimes led to repair rates two to three times higher than notices from manufacturers alone. (Tesla North / Not a Tesla App, Nov 5-6.)
6. **OTA framing (Morrison, Nov 5):** over-the-air recall fixes "generally deliver high completion rates because owners can skip a dealer visit"; the real scoreboard is "vehicles repaired, not mailers sent." NHTSA also launched a bulk VIN lookup tool that checks up to 100 VINs at once, and opened a public docket taking comments through December 5, 2026.
7. **2026 recall pace (Autoblog, Nov 7):** Ford leads the 2026 recall count among major automakers with 84, followed by Stellantis with 41, GM and Toyota with 28 each, and Hyundai with 23.
8. **Background (site's own prior coverage):** aggregate recall completion is about 50.3% (half-recalls-never-fixed, Feb 2026 data); NHTSA's own figure is that on average only about 60% of recalled vehicles are repaired (NHTSA press release).

## Original contribution
Three calculations nobody has published on this site:
- **Five cents per car:** $1,500,000 / 29,000,000 vehicles recalled in 2025 = $0.052 per recalled vehicle.
- **Sixty cents per repair:** $222,300 Maryland pilot / 371,000 recalls repaired = $0.60 per completed repair.
- **The leverage ratio:** the Maryland pilot found 943,000 open recalls on 456,000 vehicles (2.07 recalls per affected vehicle) and repaired 39.3% of them (371,000 / 943,000) inside a 21-month window, against an 18% baseline for old vehicles. The 2-3x DMV-letter multiplier is the mechanism.

## Limitations
- The $1.5M is a new tranche; earlier state grants (MD/CA/TX/OH) were separate funding, and their total spend is not public, so the "nearly 2 million repaired" figure cannot be turned into a per-repair cost the way Maryland's can.
- Completion percentages (68% / 18%) are NHTSA averages quoted at the summit, not published tables with confidence intervals; the underlying methodology was not released.
- The Maryland pilot ran 2018-2020, when the vehicle fleet was younger and Takata air bags dominated the open-recall pool (32% of remedies); results may not transfer one-to-one to today's fleet.
- The 29M figure counts vehicles per campaign; a vehicle with two recalls counts twice, so "vehicles recalled" overstates distinct vehicles.
- OTA completion rates were asserted by Morrison, not published as a number.

## Strongest counterargument
Five cents per car sounds like a rounding error, and it is. But the Maryland pilot is the rebuttal to the joke: $222,300 bought 371,000 repairs, and DMV letters beat manufacturer mail 2-3x. The grant is not meant to pay for the repairs (those are free by law); it pays for the envelope. The honest criticism is different: $1.5M spread across five states is a pilot dressed as a program, and the 18% completion rate on 15-year-old cars is a problem of owners who no longer visit dealers, not owners who never got a letter. If the letter arrives and the car still does not get fixed, the bottleneck was never postage.

## Actionable takeaways
- Check your VIN at nhtsa.gov/recalls right now; the new bulk tool checks 100 VINs at once, so fleets, families, and used-car shoppers can batch-check.
- If your state is not one of the five grant winners, registration renewal will not warn you. The letter is not coming. Check the VIN yourself.
- Owners of 10+ year old vehicles: your recall is the least likely to ever get fixed (18% completion at 15 years). The repair is free. The dealer visit is the only cost.
- The public docket on the Recalls Next changes takes comments through December 5, 2026.

## Sources
1. NHTSA, "NHTSA Announces Grant Program to Help States Inform Vehicle Owners About Safety Recalls," Nov 5, 2026. https://www.nhtsa.gov/press-releases/nhtsa-announces-grant-program-help-states-inform-vehicle-owners-about-safety-recalls
2. Grants.gov, "State Process for Informing Consumers of Recalls Program," NOFO NHTSA-693JJ927R000007-FY27, posted Nov 4, 2026, closing Feb 4, 2027. https://simpler.grants.gov/opportunity/aa81e9f0-a4bb-47d5-aa09-d26f0c2734fe
3. Autoblog (Rex Sanchez), "Government Wants to Make It Harder to Ignore Vehicle Recalls," Nov 7, 2026. https://www.autoblog.com/news/government-wants-to-make-it-harder-to-ignore-vehicle-recalls
4. Tesla North, "NHTSA Push Favors Tesla-Style Over-the-Air Recall Fixes," Nov 5, 2026. https://teslanorth.com/2026/11/05/nhtsa-ota-recalls-tesla/
5. Not a Tesla App, "NHTSA to Modernize Vehicle Recalls With a Focus on OTA Fixes," Nov 6, 2026. https://www.notateslaapp.com/news/4957/nhtsa-to-modernize-vehicle-recalls-with-a-focus-on-ota-fixes
6. Detroit Free Press, "Why NHTSA is offering big money to states to fix auto recall rates," Nov 6, 2026. https://www.freep.com/story/money/cars/2026/11/06/nhtsa-offering-money-to-states-in-quest-to-improve-auto-recall-rates/92628007007/
7. NHTSA, Fatality Analysis Reporting System (FARS) — methodology context. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
8. NHTSA recalls lookup (canonical VIN check). https://www.nhtsa.gov/recalls
