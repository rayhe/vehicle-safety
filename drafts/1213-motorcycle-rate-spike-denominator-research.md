# Research — #1213: Motorcycles Were the Only Vehicle Type That Got Deadlier Per Mile in 2023

**Journalist:** Vin Wreckage (Existential Dread columnist; paradoxes, counterintuitive findings)
**Kicker:** Existential Dread
**Slug:** `1213-motorcycle-rate-spike-denominator`
**Date:** 2026-10-18

## Angle (1-2 sentences)
NHTSA's final 2023 data shows every vehicle type's per-mile occupant fatality rate fell — except motorcycles, whose rate jumped 19.4% (26.30 to 31.39 per 100M VMT). The twist: motorcyclist deaths barely moved (+1.3%); the entire spike is a denominator artifact — FHWA's motorcycle VMT estimate swung ±20% year-to-year, meaning the famous "28x deadlier than cars" number rides on a wobbling ruler.

## Kill test
- Genuinely newsworthy? Yes. Final 2023 FARS data (released April 2025) is the newest complete census; the vehicle-type divergence is a real published finding nobody on the site has covered (checked: motorcycle-aeb-fleet-gap, motorcycle-safety-scissors, motorcycle-share-doubled-fifty-years, motorcycle-summer-surge-state-by-state, unlicensed-motorcycle-death-epidemic, 867-motorcycle-drunkest-operators — none address the 2023 rate spike).
- Novel angle? Yes. Two original calculations: (1) year-over-year decomposition of the 19.4% rate spike into +1.3% deaths and −15.1% VMT — the numerator barely moved, the denominator did all the work; (2) miles per registered motorcycle swung 2,084 → 2,587 → 2,120 (2021→2023), a ±20% annual swing no real riding population exhibits. The "28:1 ratio" the site itself has cited is hostage to this estimate.
- Not a data dump: it's a measurement-story — when the scariest number in traffic safety is mostly noise, what do we actually know about motorcycle risk?

## Verified facts (do not invent others)
From NHTSA Quick Facts 2023 (DOT HS 813 720, May 2025) — all verified live this run:

**Occupant fatality rate per 100M VMT (FARS/FHWA):**
| Vehicle type | 2021 | 2022 | 2023 | 2022→2023 change |
|---|---|---|---|---|
| Passenger cars | 1.27 | 1.20 | 1.13 | −5.8% |
| Light trucks | 0.76 | 0.72 | 0.66 | −8.3% |
| Large trucks | 0.31 | 0.33 | 0.29 | −12.1% |
| Motorcycles | 31.28 | 26.30 | 31.39 | **+19.4%** |

- Motorcyclist fatalities (FARS): 6,144 (2021) → 6,251 (2022) → 6,335 (2023). 2022→2023: **+1.3%** (84 deaths).
- Motorcycle VMT, millions of miles (FHWA): 19,642 → 23,765 → 20,181. 2022→2023: **−15.1%**. 2021→2022 was +21.0%.
- Consistency check: 1.0134 / 0.8492 = 1.1934 → +19.3% rate change. ✓ (matches the published 26.30→31.39)
- Registered motorcycles (FHWA): 9,424,769 → 9,186,256 → 9,516,910 — essentially flat (+0.97% over 2021→2023).
- **Miles per registered motorcycle (original calc):** 2,084 (2021) → 2,587 (2022) → 2,121 (2023). Swings of +24% then −18% year-to-year.
- Motorcycle-to-car occupant rate ratio: 24.6:1 (2021) → 21.9:1 (2022) → 27.8:1 (2023).
- Overall US fatality rate 2023: 1.26 per 100M VMT, down 6% from 1.34 in 2022; 40,901 deaths, down 4.3% from 42,721.
- Unhelmeted motorcyclist fatalities 2023: 2,162 (35% where helmet use known). 2022: 2,257 (37%).
- Motorcyclists with BAC ≥.08 in fatal crashes: 26% (2023), down from 28% (2021–2022).
- For contrast, the only age group whose deaths rose 2022→2023: 15–24 (up 3%, per NHTSA subcategory analysis) — the same "lone worsener" pattern in a different cut.

## Primary sources (3+)
1. **NHTSA, Quick Facts 2023 (DOT HS 813 720, May 2025)** — all rate, fatality, VMT, registration, helmet, and BAC numbers above. https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813720
2. **NHTSA, Fatality Analysis Reporting System (FARS)** — census behind the fatality counts. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
3. **IIHS, Fatality Statistics** — motorcycle deaths and rate context by year. https://www.iihs.org/topics/fatality-statistics
4. **NHTSA, Traffic Safety Facts: State Traffic Data 2023 (DOT HS 813 743)** — overall 1.26 rate, 40,901 deaths. https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813743

## Limitations
- FHWA motorcycle VMT is an estimate (traffic-count factoring + HPMS), not odometer data; the ±20% annual swings are the estimate's fingerprint, not necessarily real travel. I cannot apportion exactly how much of the 19.4% is noise vs. real risk change.
- If VMT had been flat in 2023, the rate change would have been ≈+1.3% (the death-count change) — but "flat VMT" is itself an assumption, not a measurement.
- FARS captures fatal crashes only; injury-rate changes by vehicle type are not in this table (CRSS has them; not analyzed here).
- The 2022 dip (31.28→26.30) is equally denominator-driven (VMT +21% that year), so 2022 was arguably the anomaly, not 2023. The honest read: the motorcycle per-mile rate has been roughly flat in the ~26–31 band while every other type improved.

## Counterargument (strongest, stated at full strength)
Maybe motorcycles really did get more dangerous in 2023: deaths rose for the third straight year (6,144 → 6,251 → 6,335), a genuine upward trend; speed, impairment, and unhelmeted riding remain elevated; and FHWA's estimate could be right that riding fell 15% (post-COVID boom fading, gas prices normalizing — fewer casual riders, leaving the risk-tolerant core). If exposure genuinely fell while deaths rose, the per-mile risk increase is real, not an artifact. The denominator-noise theory and the real-risk theory are both consistent with the published numbers — that ambiguity IS the story.

## Actionable insights
- Riders: the structural risks did not change — wear a helmet (35% of 2023 rider deaths were unhelmeted where known), get licensed, assume invisibility. The 19% "spike" is not a reason to panic or a reason to relax; the baseline (28x the car rate) was already the whole argument.
- Everyone else: when you see "X times deadlier per mile" quoted for motorcycles (including in this site's own earlier articles), know the denominator swings ±20% a year. Treat year-to-year rate moves as noise; trust multi-year death counts.
- Policymakers: NHTSA and FHWA need real motorcycle exposure data (odometer-based or registration-mileage linkage) before steering countermeasure funding off per-mile rates. You cannot fix what you cannot measure.
