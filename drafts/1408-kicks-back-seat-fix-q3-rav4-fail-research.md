# Research — #1408: The Back Seat Test Nissan Passed and Audi, Toyota, and Chevy Failed

**Slug:** 1408-kicks-back-seat-fix-q3-rav4-fail
**Journalist:** Mia Crumplezone (Safety Engineering Editor — design analysis beat)
**Kicker:** The Gap
**Date:** November 6, 2026

## The news hook

IIHS released updated moderate overlap front crash test results on October 22 (Kicks award) and October 31, 2026, for five small crossovers. The test, revised in 2022 to put a dummy in the back seat, is the one that decides whether a vehicle can earn any IIHS safety award at all. A Good rating in it is a prerequisite for Top Safety Pick.

Results (updated moderate overlap front, rear-seat protection):

| Model | Rating |
|---|---|
| 2026–27 Nissan Kicks (built after June 2026) | Good |
| 2026 Toyota RAV4 (hybrid) | Acceptable |
| 2026 Toyota RAV4 Plug-in Hybrid | Marginal |
| 2026–27 Audi Q3 | Poor |
| 2026 Chevrolet Trailblazer | Poor |
| 2027 Volkswagen Jetta | Good |

Sources: Jalopnik, Oct 31, 2026; The Drive, Oct 24, 2026; Autoguide, Nov 5, 2026; Motor Biscuit / Apex News, Oct 26, 2026; WiseVoter, Oct 31, 2026.

**Discrepancy note:** Autoguide (Nov 5) lists the Trailblazer as "Marginal" in the test; Jalopnik, The Drive, WiseVoter, and Motor Biscuit all list it as "Poor." Majority rules: Poor. The Autoguide line looks like an error (it also contradicts itself by calling the Trailblazer's other-category results the problem). The article uses Poor.

## Why this is the story: the fix

The Kicks is the story. When the current generation debuted for model year 2025, it scored Poor in this same test. Nissan revised the rear seat belts and load limiters on vehicles built after June 2026. Retested, the Kicks jumped from Poor to Good and earned a 2026 Top Safety Pick award. A belt revision. Not a platform redesign, not a new structure. Belts and load limiters.

That makes the failures inexcusable in a specific, checkable way: the fix is cheap, fast, and proven on a $22,000 car. Audi's redesigned Q3 — a premium vehicle — scored Poor because its shoulder belt rides up toward the rear dummy's neck and its lap belt slides off the pelvis onto the abdomen. The RAV4, America's best-selling SUV in its class, has the same failure mode: shoulder belt toward the neck (hybrid, Acceptable), lap belt onto the abdomen (PHEV, Marginal). The Trailblazer failed the test and also scored low on headlights and front crash prevention.

The test dummy in the rear seat is the size of a fifth-percentile adult woman — roughly a 12-year-old child — belted in behind the driver. The car hits a barrier at 40 mph with partial front overlap.

## Original contribution: lab test vs. ten years of real deaths

Cross-referencing the five tested nameplates against FARS 2014–2023 (repo `fars_output.js`, FARS_BY_MODEL):

| Model | FARS deaths 2014–2023 | Fatality rate / 100M VMT |
|---|---|---|
| Chevrolet Trailblazer | 2,473 | 2.83 |
| Volkswagen Jetta | 1,375 | 1.71 |
| Nissan Kicks | 339 | 0.69 |
| Toyota RAV4 | 914 | 0.19 |
| Audi Q3 | not in dataset | — |

The Trailblazer is the worst of both worlds: Poor in the lab and a 2.83 real-world rate, nearly 15x the RAV4's 0.19. The RAV4 is the honest tension in this story: it stumbled in the rear-seat test and still has one of the lowest real-world fatality rates in the dataset. One test measures one failure mode; a decade of FARS measures everything — structure, crash avoidance, who buys the car, how it's driven. The article must say that plainly rather than pretending the lab test is the whole truth.

Caveats for the cross-tab: FARS rates cover all model years 2014–2023, so the Trailblazer number includes the older generation; the current Trailblazer is a 2021 redesign. The Q3 is absent from the repo dataset (low volume / below threshold), so no rate is claimed for it. Rates use VMT estimates, not odometer readings.

## Context: the back seat has been the neglected seat

- IIHS updated the moderate overlap test in 2022 specifically because rear-seat belts and airbags had fallen behind front-seat protection. It tightened scoring again in 2024.
- NHTSA finalized the rear seat-belt reminder rule (FMVSS 208 amendment) in December 2024: front-seat warning compliance September 1, 2026; rear seats September 1, 2027. NHTSA estimates it will save about 50 lives and prevent more than 500 injuries per year once fully implemented.
- Observed belt use, 2022: front seat 91.6%, rear seat 81.7% (NHTSA). In every year 2013–2022, rear use ran 9–14 points below front.
- About 50% of passenger vehicle occupants killed in 2022 were unbuckled (FARS). Unbelted rear-seat passengers are roughly 3x more likely to be killed and 8x more likely to be seriously injured than belted ones (GHSA-cited figures); an unbelted rear passenger can slam into the front seat and double the driver's risk of death.
- NHTSA's own framing: rear-seat reminder technology is the fix for the behavior gap; IIHS's test is the fix for the hardware gap. This article is about the hardware gap.

## Kill test

Genuinely newsworthy? Yes. Fresh IIHS results (Oct 22 / Oct 31), a proven cheap fix demonstrated on the cheapest car in the test, a premium-brand failure, and an original FARS cross-tab that both supports the story (Trailblazer) and complicates it (RAV4). Not covered before: no prior article on the Kicks/Q3/RAV4 rear-seat results (checked drafts/stories; prior IIHS award-gap piece is about award categories, not this test round).

## Actionable takeaways

- Shopping a 2026–27 Kicks: check the build date. Only Kicks built after June 2026 carry the revised rear belts and the Good rating. Earlier 2026 builds are the Poor-rated car.
- Shopping a RAV4, Q3, or Trailblazer: the back seat is where the protection gap lives. If kids ride back there, this one test matters more than the five-star overall scores.
- Check any vehicle at iihs.org/ratings before signing — the moderate overlap rating is the award gatekeeper.
- Rear-seat belt reminders arrive as standard equipment by September 1, 2027 (FMVSS 208). Until then, the chime gap is real: buckle the back seat yourself.

## Limitations / counterargument (for the article)

- The IIHS test measures restraint geometry for one dummy size in one crash mode. It is not a whole-vehicle safety verdict: the Q3 and RAV4 earned Good in every other IIHS category.
- The RAV4's 0.19 FARS rate is the strongest counterargument to any "these cars are unsafe" framing. The article must carry it, not bury it.
- FARS rates are nameplate-level across a decade and mix generations; they are not a rating of the 2026 redesign.
- The Kicks fix applies only to builds after June 2026; thousands of Poor-rated 2025–26 Kicks are already on the road with no retrofit announced.

## Sources (primary)

1. IIHS ratings pages — iihs.org/ratings (class summaries; moderate overlap front protocol)
2. Jalopnik, "2026 Audi Q3 And Toyota RAV4 PHEV Underperform In IIHS Updated Moderate Overlap Crash Test," Oct 31, 2026 — https://www.jalopnik.com/2300434/audi-q3-and-toyota-rav4-underperform-in-updated-iihs-test/
3. The Drive, "IIHS Put a Bunch of Crossovers Through Its Updated Crash Test. Only One Was 'Good'," Oct 24, 2026 — https://www.thedrive.com/news/iihs-put-a-bunch-of-crossovers-through-its-updated-crash-test-only-one-was-good
4. Autoguide, "Nissan Kicks Earns Safety Award as Audi, Toyota and Chevy Fall Short," Nov 5, 2026 — https://www.autoguide.com/auto/manufacturers/nissan/nissan-kicks-earns-safety-award-as-audi-toyota-and-chevy-fall-short-44641444
5. Motor Biscuit / Apex News, Oct 26, 2026 — https://www.motorbiscuit.com/5-small-suvs-took-iihss-tougher-back-seat-crash-test-only-the-nissan-kicks-aced-it/
6. NHTSA rear seat-belt reminder rule (FMVSS 208), Dec 2024 — https://www.electronicdesign.com/markets/automotive/article/55263768/electronic-design-nhtsa-finalizes-rear-passenger-seat-belt-reminder-rule
7. NHTSA FARS 2014–2023 via repo `fars_output.js` (FARS_BY_MODEL)
8. NHTSA FARS / IIHS fatality statistics — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars and https://www.iihs.org/topics/fatality-statistics
