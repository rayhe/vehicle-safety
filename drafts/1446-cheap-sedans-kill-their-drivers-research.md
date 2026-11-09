# Research: 1446 — Cheap Sedans Kill Their Own Drivers

**Slug:** 1446-cheap-sedans-kill-their-drivers
**Journalist:** Vin Wreckage (paradox / existential-dread beat; least-recent in rotation, last #1426)
**Kicker:** Existential Dread
**Proposed headline:** When a Cavalier Crashes, Somebody Inside Dies. When a Ram 2500 Crashes, Somebody Else Does.

## Kill test
- **Proposed angle:** Rank all 337 models in NHTSA FARS 2014-2023 not by death rate per mile but by **deaths per fatal crash** — occupant deaths divided by the number of fatal crashes the model was involved in. The metric answers a different question than the rate: not "how often does this car crash fatally" but "when it does, who dies?" The answer splits the fleet in two. The most lethal-per-crash vehicles are the cheapest sedans GM and Chrysler ever sold: Cavalier 0.857, Neon 0.856, LeSabre 0.823, Cobalt 0.808. Twelve of the top 15 are sedans. The least lethal are heavy pickups and vans: Ram 2500 0.205, Transit 0.308, Ram 1500 0.341. A Cavalier in a fatal crash kills its own occupant 4.19x as often as a Ram 2500 does. The fleet average is 0.569.
- **Challenge:** Is this surprising after 1,445 articles? Yes, three ways. (1) Model-level lethality ranking has never been run — the brand-level version exists (Pontiac 0.738 worst, Ram 0.305 best) and class-level numbers exist in the death-rate-mirage piece, but nobody ranked the 337 models. (2) The paradox pair: the Pontiac Grand Am has one of the LOWEST death rates in the dataset (1.18 per 100M VMT, the subject of #1283) yet the 9th-HIGHEST lethality per crash (0.774) — it rarely crashes fatally, but when it does, someone inside dies. Its mirror image is the Toyota Land Cruiser: rate 6.27, among the highest in the dataset, yet lethality 0.347, among the lowest — it gets into fatal crashes constantly and its occupants usually walk away; the dead are in the other car. Rate and lethality measure different risks, and they point in opposite directions for these two cars. (3) Independent corroboration arrived four months ago: IIHS's July 30, 2026 driver death rate report, using 2021-2024 data on current models, finds the same split — small cars top the driver-death list (Kia Rio 170 per million registered vehicle years) while the Ram 3500 crew cab tops the other-driver-death list (204). Two datasets, two decades, same physics.
- **Verdict:** PROCEED. Killed angles this run: GM EV brake-software recall 26V717 (already #1387); GM Express/Savana steering-nut recall 26V718 (already #1391); Hyundai ACU recall 26V728 (already #1444); Waymo recall query RQ26006 (already #1445); Subaru 26V685 eight-car Do Not Drive (already #1288; duplicate #1446 removed from queue today); soberest/lowest-impairment ranking (Ascent covered #1241, Verano drug king #898, Corvette drunkest #1007); Mustang/Impala/Camaro rate stories (covered #1122, #1116).

## Primary sources
1. **NHTSA FARS 2014-2023, via fars_process.py aggregation (fars_output.js):** deaths = occupant deaths per model (FARS vehicle-file DEATHS column); crashes = vehicles of that model involved in fatal crashes; lethality = deaths / crashes. 191,193 deaths / 336,202 crash involvements across 337 models. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. **IIHS, "Driver death rates remain high for small cars, models with powerful engines," July 30, 2026:** Kia Rio highest driver death rate (170 per million registered vehicle years); Ram 3500 crew cab long bed 4WD highest other-driver death rate (204); average driver death rate 37, average other-driver death rate 53; minicars 158 driver / 55 other; very large pickups 24 driver / 110 other. https://www.iihs.org/news/detail/driver-death-rates-remain-high-for-small-cars-models-with-powerful-engines
3. **IIHS, vehicle size and weight topic:** mass and class shape outcomes in multi-vehicle crashes; mechanism for the sedan/pickup split. https://www.iihs.org/topics/vehicle-size-and-weight
4. **IIHS fatality statistics:** context on national totals. https://www.iihs.org/topics/fatality-statistics

## Key facts (all sourced above)
- Most lethal per fatal crash, crashes >= 300: Corvette 0.884 (320/362, sports car, small count, impairment 26.2% — excluded from the sedan thesis, disclosed); Cavalier 0.857 (1,225/1,429); Neon 0.856 (602/703); LeSabre 0.823 (1,344/1,633); Cobalt 0.808 (1,540/1,907); Town Car 0.805 (260/323); HHR 0.801; Sonoma 0.796; Grand Am 0.774 (713/921); Century 0.768; Grand Marquis 0.761; S-10 0.755; Sonic 0.754; Grand Prix 0.749; Spark 0.744. Twelve of the top 15 are sedans.
- Least lethal: Ram 2500 0.205 (153/748); Transit 0.308; Ram 1500 0.341 (714/2,095); Acadia 0.343; Land Cruiser 0.347 (343/988); X3 0.358; F-250 0.364; Renegade 0.381; Traverse 0.393; RX 0.410.
- Cavalier vs Ram 2500: 0.857 / 0.205 = 4.19x.
- Class lethality: Sports Car 0.682; Sedan 0.645; SUV 0.524; Van 0.514; Pickup 0.489. Fleet average 0.569.
- Paradox pair: Grand Am rate 1.18 (low) / lethality 0.774 (9th highest); Land Cruiser rate 6.27 (near-highest) / lethality 0.347 (5th lowest). Town Car repeats the Grand Am pattern: rate 0.86, lethality 0.805.
- Every model in the top 15 is discontinued. The newest nameplate on the list, the Spark, ended production in 2022; the rest died between 2004 and 2011. These cars are still on the road as $3,000 first cars.
- Ram 3500 shows 0 deaths / 1 crash in the FARS aggregation — a coding artifact, not a safety result. IIHS independently finds the Ram 3500 crew cab has the HIGHEST other-driver death rate of any current model (204), so the FARS zero reflects model-coding lumping, not zero risk. Disclosed in the article.
- Prior site context: #1283 Grand Am rate paradox; #1388 car-vs-light-truck side-impact 14x; #1138 large-truck deaths not in truck; brand-lethality ranking (Pontiac 0.738, Ram 0.305); death-rate-mirage (class lethality, NSC 1.01 rate).

## Original contribution
1. **The model-level lethality ranking nobody ran:** brand-level and class-level versions exist; the 337-model ranking is new, and it surfaces the sedan/pickup split at full strength.
2. **The rate-vs-lethality paradox pair:** Grand Am and Land Cruiser point in opposite directions on the two metrics — the first article to put both metrics on the same two cars and show they answer different questions.
3. **Cross-dataset corroboration:** FARS 2014-2023 lethality cross-checked against IIHS's July 2026 driver/other-driver death rates (2021-2024, current models) — same split, different decade, different method.

## Counterargument
Lethality per crash is not a pure crashworthiness measure. It mixes vehicle structure with who drives the car, where, and how fast: cheap old sedans are driven by younger, poorer, less-belted drivers on worse roads, and they are more often the struck vehicle in multi-car crashes. A Cavalier's 0.857 partly reflects its drivers, not just its steel. The IIHS report says the same about its own rates: driver death rates "reflect far more than crashworthiness." Also, single-vehicle crashes (run-off-road, fixed object) inflate lethality for small cars regardless of the other vehicle's mass. The honest claim is narrower: when these cars are in a fatal crash, someone inside dies far more often than in a heavy pickup — and that is still the number a used-car buyer should know.

## Limitations
- FARS covers 2014-2023 only; the newest models in the top 15 are 2004-2011 designs, so this is a story about the used fleet, not the showroom.
- Deaths = occupant deaths of the model (FARS vehicle-file DEATHS); pedestrian and other-vehicle deaths in the same crash are not in this numerator, which is exactly why the pickup numbers look low — the deaths they cause show up in other models' rows, or in no model's row at all.
- Per-model rates use VMT estimates with roughly ±15% uncertainty for low-volume models; lethality (deaths/crashes) does not depend on VMT estimates, which is a strength of this metric, but small-count models (Corvette, 362 crashes) are noisier.
- Ram 3500's 0 deaths / 1 crash is a FARS model-coding artifact; excluded from the ranking, disclosed.
- Impairment, belt use, and crash type are not controlled for in this ranking; the article states the confound plainly.

## Actionable takeaway
If you are shopping for a first car on a $3,000-5,000 budget, the cheapest sedans on the lot — Cavalier, Neon, Cobalt, LeSabre, Grand Am — are the cars whose fatal crashes most often kill the person inside. A same-price older SUV or pickup protects its own occupants far better, at the cost of endangering everyone else. There is no free lunch in the used market, only a choice about whose risk you are buying. Check any VIN at nhtsa.gov/recalls, and check the IIHS driver death rates before signing.
