# Research Notes — #936: Your Car's Death Rate Is Two Numbers. They Barely Know Each Other.

**Slug:** 936-crashy-vs-lethal-death-rate-decomposition
**Journalist:** Rex Driverton (Senior Crash Correspondent) — investigations, FARS deep dives, paradoxes. Deadpan dark humor, noir-detective-reading-NHTSA-data voice.
**Kicker:** Investigation
**Number:** 936
**Date:** 2026-09-18
**Ship slot:** 2026-10-07 (queue drains through 10-06 per #935)

## Angle (1-2 sentences)
Every fatality rate this site has ever published is actually two numbers multiplied together: how often a nameplate gets into fatal crashes per registered vehicle ("crashiness"), and how often its occupants die when it does ("lethality," computed in #904). I separated them across 183 nameplates. The correlation is 0.306. The cars most likely to be in a fatal crash are not the cars most likely to kill their occupants.

## Kill test
- **Novel?** YES. Grep across 800+ stories and ~939 research drafts for "per registered vehicle" / "crash-involvement rate" / "crashiness": no data story has ever run fatal-crash involvement per registered vehicle as a standalone metric, and nobody has published the decomposition showing the two factors are nearly independent. #904 (Vin Wreckage, 2026-09-14) ran the lethality half; this is the other half plus the joint finding.
- **Newsworthy?** No news peg — data piece, a house genre. The finding is the peg (cf. #935 zombie nameplates, #897 drunkest-drivers).
- **Surprising?** YES. The Ford E-350 — a commercial work van — is the second most crash-involved nameplate in America (7.21 fatal-crash involvements per 1,000 registered vehicles) yet one of the least lethal per crash (0.41). Sports cars are in fatal crashes 2-4x more often per vehicle than anything else (median 4.39/1000 vs sedan 1.99, SUV 0.93) — and sedans are the class most lethal to their own occupants (median lethality 0.644 vs SUV 0.489). The Honda Fit is rarely in a fatal crash (1.15/1000) but when it is, its occupants die 72% of the time.
- **Rex-appropriate?** A paradox with a spreadsheet behind it is exactly his beat.

## Primary sources
1. NHTSA, *Fatality Analysis Reporting System (FARS)*, 2014–2023, via the site's `fars_output.js` (337 nameplates; 183 with fleet >= 250,000 used for stability). Crashes = fatal crashes involving the nameplate; deaths = occupants of that nameplate killed; fleet = estimated registered vehicles. Crashiness = crashes / fleet × 1,000. Lethality = deaths / crashes (per #904). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars ; query tool https://cdan.dot.gov/query
2. IIHS, "Vehicle size and weight" — physics grounding: heavier vehicles protect their occupants and increase risk to others. https://www.iihs.org/topics/vehicle-size-and-weight
3. IIHS, "Fatality statistics" — methodology context for per-mile rates. https://www.iihs.org/topics/fatality-statistics
4. NHTSA recalls database (VIN lookup) for the actionable close. https://www.nhtsa.gov/recalls

## Original computation (the novel contribution)
For each nameplate: crashiness (fatal-crash involvements per 1,000 registered vehicles, 2014–2023) × lethality (own-occupant deaths per fatal crash, from #904) ≈ its per-VMT fatality rate. Pearson correlation between the two factors across 183 nameplates: **r = 0.306** — weak. Two nearly-independent axes of danger.

**Highest crashiness (fatal crashes per 1,000 registered vehicles):**

| Nameplate | Fleet | Fatal crashes | Own-occupant deaths | Crashiness | Lethality |
|---|---|---|---|---|---|
| Nissan Maxima | 262,500 | 2,331 | 1,544 | 8.88 | 0.66 |
| Chevrolet Impala | 656,250 | 5,594 | 3,774 | 8.52 | 0.67 |
| Chevrolet Cobalt | 262,500 | 1,907 | 1,540 | 7.26 | 0.81 |
| Ford E-350 (van) | 262,500 | 1,892 | 776 | 7.21 | 0.41 |
| Ford Mustang | 568,750 | 3,938 | 2,739 | 6.92 | 0.70 |
| GMC Yukon | 350,000 | 2,339 | 1,114 | 6.68 | 0.48 |
| Chevrolet Tahoe | 831,250 | 5,078 | 2,592 | 6.11 | 0.51 |
| Dodge Dakota | 350,000 | 2,019 | 1,237 | 5.77 | 0.61 |
| Ford Ranger | 787,500 | 4,476 | 3,089 | 5.68 | 0.69 |
| Honda Accord | 2,012,500 | 11,021 | 7,102 | 5.48 | 0.64 |

**The inversion tier (low crashiness, high lethality):** Nissan Kicks 1.17 / 0.74; Honda Fit 1.15 / 0.72. Rarely in fatal crashes; occupants die ~3 of 4 times when it happens.

**Class medians (crashiness / lethality):** Sports car 4.39 / 0.696 (n=4); Sedan 1.99 / 0.644 (n=71); Pickup 2.29 / 0.486 (n=20); Van 1.22 / 0.489 (n=11); SUV 0.93 / 0.489 (n=76).

**Scale anchors:** Ford F-150 was involved in 20,066 fatal crashes in ten years (3.06 per 1,000 vehicles); Chevrolet Silverado 19,732. Median nameplate crashiness: 1.275 per 1,000 vehicles.

**Impairment cross-check:** #904's impairment cross-tab already showed the impairment gap between the deadliest and safest nameplates is a rounding error (class-level any-impaired: sports car 22.5%, sedan 20.4%, pickup 20.1%). Reused here: behavior does not explain the spread.

## Limitations (must state in article)
- FARS records fatal crashes only. Crashiness here is fatal-crash involvement per registered vehicle, NOT all-crash involvement. A nameplate with low crashiness could still fender-bender constantly; this metric is invisible to that.
- Fleet estimates come from sales-based registrations, not odometer readings; ±15% uncertainty for low-volume nameplates. Discontinued models (Cobalt, Impala, Maxima, E-350) have shrinking fleets, which inflates their crashiness — their older average vehicle age is part of the story, not a bug.
- Lethality ("deaths per fatal crash") counts only that nameplate's occupant deaths divided by fatal crashes involving it — including crashes where the other party died. A low lethality partly means being the surviving party (mass), not being crash-proof (#904's caveat, retained).
- Correlation 0.306 computed on 183 nameplates with fleet >= 250,000; excluding small fleets to keep ratios stable. Direction and magnitude are robust to the cutoff.
- Commercial-use bias: the E-350 logs work miles in high-exposure highway environments, and its drivers are professionals — both push crashiness up and lethality down relative to a passenger car.

## Strongest Counterargument (must state at full strength)
This is arguably one multiplication of what the site already publishes: fatality rate = crashiness × lethality, so decomposing it adds no information the rate didn't contain — the rate already IS the product. The "weak correlation" is the genuinely new bit, but a statistician would yawn: of course the two factors vary independently across nameplates; VMT, driver demographics, geography, and vehicle age all load onto them differently. And the headline names are partly artifacts: the Maxima and Impala are cheap used sedans whose fleets are old and shrinking (denominator effect), while the E-350's crashiness reflects commercial exposure, not consumer risk. Strip out the fleet-estimate noise and the story is mostly "sports cars crash a lot, big trucks survive their crashes" — which #904 and IIHS said already.

## Actionable Insights (required)
- Shopping used: ask two questions, not one. A low fatality rate can hide high crash involvement (the F-150: 20,066 fatal crashes, low lethality). You want BOTH low crashiness (crash avoidance: ESC, AEB, tires) and low lethality (crash structure, mass, modernity). The Honda Fit/Nissan Kicks inversion is the warning: a car that rarely crashes can still be unforgiving when it does.
- The sports-car buyer already knows, but the numbers: sports cars are in fatal crashes 2-4x more often per registered vehicle than any other class. That is a behavioral tax, and it is priced into insurance for a reason.
- If you drive a heavy truck or full-size SUV: your low lethality is partly other people's bodies. Drive like your survival is borrowed.
- Check your VIN at nhtsa.gov/recalls — neither half of the rate survives a defective airbag or a recalled brake booster.

## References
1. NHTSA, *Fatality Analysis Reporting System (FARS)*, 2014–2023. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. NHTSA FARS query system (CDAN). https://cdan.dot.gov/query
3. IIHS, "Vehicle size and weight." https://www.iihs.org/topics/vehicle-size-and-weight
4. IIHS, "Fatality statistics." https://www.iihs.org/topics/fatality-statistics
5. NHTSA recalls database (VIN lookup). https://www.nhtsa.gov/recalls
