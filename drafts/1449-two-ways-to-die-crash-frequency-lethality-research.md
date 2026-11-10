# Research — #1449: Two Ways to Die (Crash Frequency × Lethality)

**Slug:** 1449-two-ways-to-die-crash-frequency-lethality
**Journalist:** Rex Driverton (FARS deep dives, paradoxes)
**Kicker:** The Gap
**Date:** November 9, 2026

## The angle

A model's death rate is the product of two separate risks: how often it ends up in a fatal crash per mile driven (crash frequency), and how often somebody dies once it does (lethality). Nobody on this site has ever split the rate into its two factors and cross-tabulated them. #1446 ranked models by lethality alone. This piece runs the full two-axis decomposition over all 337 FARS models and sorts them into four quadrants.

## Original calculation (from fars_output.js, FARS 2014–2023)

Fleet baseline (337 models, 191,193 deaths / 336,202 fatal-crash involvements):
- Crash frequency: **1.6 fatal-crash involvements per 100M VMT**
- Lethality: **0.569 deaths per fatal-crash involvement**
- Fleet death rate: **0.91 deaths per 100M VMT** (1.6 × 0.569)

Method: crash frequency = crashes / VMT × 10 (VMT field is in 10M-mile units, verified: Silverado 9,591 deaths / 76,781 VMT-units × 10 = 1.25 rate, matches the file's rate field). Lethality = deaths / crashes. Quadrant thresholds: crash frequency >2× fleet AND lethality >1.1× fleet = "both bad"; <0.6× and <0.9× = "safest quadrant". Sample floor: 800+ fatal-crash involvements (91 models qualify) to keep small-sample noise out.

## Findings

**Both bad — 17 of 91 big-sample models crash often AND kill often:**
- Chevrolet Cobalt: cf 6.32 (4.0× fleet), leth 0.808 (1.42×), rate 5.10 — 1,540 deaths / 1,907 crashes. The worst combined profile with a big sample.
- Hyundai Veloster: cf 12.63 (7.9×), leth 0.676 (1.19×), rate 8.54 — the highest death rate in the dataset; 598 deaths / 884 crashes.
- Ford Mustang: cf 8.65 (5.4×), leth 0.696, rate 6.02 — 2,739 deaths / 3,938 crashes.
- Chevrolet Impala: cf 7.41 (4.6×), leth 0.675, rate 5.00 — 3,774 deaths / 5,594 crashes.
- Chevrolet S-10 Pickup: cf 6.40 (4.0×), leth 0.755 (1.33×), rate 4.83 — 1,427 deaths / 1,890 crashes.
- Nissan Maxima: cf 7.72 (4.8×), leth 0.662, rate 5.11 — 1,544 deaths / 2,331 crashes.
- Also in the quadrant: Toyota Solara (6.21 / 0.685), Chevrolet Camaro (5.49 / 0.627), Honda Accord (4.76 / 0.644 — 7,102 deaths, the largest body count in the quadrant), Nissan Altima (4.59 / 0.628), Ford Ranger (4.21 / 0.690), Chevrolet Trailblazer (4.12 / 0.686), Ford Taurus (4.06 / 0.676), Ford Focus (3.69 / 0.684), Honda Civic (3.30 / 0.681 — 6,553 deaths), GMC Envoy (3.39 / 0.667), Buick LeSabre (3.25 / 0.823).

**Lethality crown (separate axis):** Chevrolet Cavalier 0.857 deaths per fatal crash (1,225 deaths / 1,429 crashes, 1.51× fleet) — the most lethal car in the dataset with 500+ crashes. Dodge Neon 0.856, Buick LeSabre 0.823, Cobalt 0.808, Chevrolet HHR 0.801. Note: Cavalier/Neon/LeSabre crash at only ~1–2× fleet frequency, so their moderate rates (2.43 / 1.50 / 2.67) hide the fact that when they do crash, somebody dies ~85% of the time. (Cavalier lethality already noted in #1446; the quadrant framing and the full lethality ranking are new here.)

**The paradox quadrant — crashes constantly, rarely kills:** Toyota Land Cruiser cf 18.06 (11.3× fleet) but leth 0.347 (0.61×), rate 6.27 — 343 deaths / 988 crashes. Its terrible rate is entirely crash frequency, not lethality. Chevrolet Tracker cf 14.24 (8.9×), leth 0.549, rate 7.83. Ford E-350 cf 6.11, leth 0.410. GMC Yukon cf 5.35, leth 0.476. Chevrolet Tahoe cf 4.89, leth 0.510. Chrysler 300 cf 3.74, leth 0.498.

**The singleton — Kia Forte is the ONLY model (800+ crashes) in the low-crash/high-lethality quadrant:** cf 0.60 (0.37× fleet), leth 0.668 (1.17×), rate 0.40 — 604 deaths / 904 crashes. A car that almost never ends up in a fatal crash, but when it does, two out of three crashes kill someone.

**Safest quadrant (low crash frequency AND low lethality):** Ram 1500 cf 0.37 (0.23×), leth 0.341 (0.60×), rate 0.13 — the lowest death rate in the dataset; 714 deaths / 2,095 crashes. Toyota RAV4 cf 0.39, leth 0.498, rate 0.19 (914 deaths / 1,834 crashes). Kia Sorento 0.57 / 0.504 / 0.29. Honda Pilot 0.65 / 0.453 / 0.29. Hyundai Tucson 0.75 / 0.454 / 0.34. Hyundai Santa Fe 0.84 / 0.467 / 0.39. Jeep Compass 0.85 / 0.488 / 0.41. Toyota Highlander 0.93 / 0.454 / 0.42.

## Corroboration / primary sources

1. **NHTSA FARS 2014–2023** (fars_output.js, generated from FARS bulk CSV + NHTS miles + public sales data) — all rates, counts, and the decomposition. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. **IIHS, "Driver death rates remain high for small cars, models with powerful engines," July 30, 2026** — independent registration-based rates corroborate the pattern: Kia Rio highest driver death rate (170 per million registration years); Ram 3500 highest other-driver death rate (204); IIHS notes the other-driver rate runs higher than the driver rate partly because crash-partner vehicles were older and less protective — the same exposure/protection split this article decomposes. https://www.iihs.org/news/detail/driver-death-rates-remain-high-for-small-cars-models-with-powerful-engines
3. **IIHS, "Life-saving benefits of ESC continue to accrue"** — ESC reduces fatal single-vehicle crash risk; relevant to the crash-frequency axis (stability control prevents the crash from happening at all) vs the lethality axis (structure/airbags decide the outcome once it happens). https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue
4. **IIHS fatality statistics / vehicle size and weight** — mass and size drive the lethality axis: heavier vehicles protect their own occupants and endanger others. https://www.iihs.org/topics/fatality-statistics and https://www.iihs.org/topics/vehicle-size-and-weight

## Kill test / novelty

- Genuinely newsworthy? Yes. The decomposition is a real cross-tabulation nobody on this site ran: crash frequency and lethality as separate axes, 17-model both-bad quadrant, the Forte singleton, the Land Cruiser paradox quantified (11.3× crash frequency, 0.61× lethality).
- Not a duplicate: full queue + drafts/stories filename grep — zero slugs contain "two-ways", "quadrant", "crash-frequency", "lethality", "frequency". Adjacent coverage is not overlapping: #1446 ranked lethality (deaths per fatal crash) only and did not compute crash frequency or quadrants; #1435 noted the Veloster's 8.54 rate and the 71× Veloster/Kona spread but not the decomposition; #868/#1065 are toxicology rankings; the fleet-age pieces (twelve-year-safety-lag, recall-math-gap-82-percent-old, mandate-gap-pre-esc-body-count) are model-year distributions, not per-model two-axis rankings.
- 3+ primary sources? Yes: FARS bulk data, IIHS July 30, 2026 driver death rates, IIHS ESC study, IIHS fatality statistics.

## Limitations (must appear in the article)

- VMT estimates are shakiest for low-volume models: the Land Cruiser (988 crashes) and Tracker (1,558) sit atop the crash-frequency ranking partly because their estimated miles are small and uncertain; the ranking is most reliable for high-volume models (Accord, Civic, Impala, F-150 class). The article's headline claims rest on the big-sample models.
- "Crash frequency" here means *fatal*-crash involvements per mile, not all crashes. A model can have many fender-benders and few fatal involvements; FARS only sees the fatal ones. The two axes are therefore "how often this car is in a crash somebody dies in" and "how often somebody dies once it is."
- Both axes conflate driver and vehicle. Crash frequency is heavily driver behavior (Mustang, Veloster, Camaro drivers skew young and fast); lethality is heavily crash circumstance (speed, single-vehicle vs multi-vehicle, rural roads). The decomposition separates the arithmetic, not the causation.
- The Forte singleton may be a statistical edge case or a crash-mix artifact (e.g., a higher share of single-vehicle high-speed crashes). One model, 904 crashes — flag it as a curiosity, not a verdict.
- FARS 2014–2023 window: model-year mix shifts over the window; a model's rate blends its older and newer generations.

## Strongest counterargument (must appear at full strength)

The split is arithmetic, not destiny. A Cobalt's 0.808 lethality does not mean the Cobalt is built out of tissue paper; it means Cobalt fatal crashes disproportionately happen at high speed, on rural roads, with unbelted occupants, in single-vehicle events — the crash mix, not the metal, may be doing most of the killing. Likewise the Mustang's 5.4× crash frequency is a driver-selection effect as much as a vehicle effect: the car attracts the driver who will find the ditch. If you swapped the drivers, the quadrants would move. The honest reading is that the table measures the car-driver system, and the two axes are a better map of where the risk lives, not a verdict on the sheet metal.

## Actionable takeaways

- Shopping used: the safest quadrant (Ram 1500, RAV4, Pilot, Tucson, Santa Fe, Highlander, Sorento, Compass) is low on both axes — that is the combination to look for, not a single good crash-test score.
- If you own a both-bad-quadrant car (Cobalt, Veloster, Mustang, Impala, S-10, Maxima), the risk is doubled: it crashes more AND the crash is more likely to kill. The belt is the cheapest fix on the lethality axis; speed is the cheapest fix on the frequency axis.
- Kia Forte owners: the car is statistically unlikely to be in a fatal crash, but the crashes it does have are unusually deadly — same advice, sharper edge.
- Check your VIN at nhtsa.gov/recalls before your next oil change; recalls do not fix the quadrant, but an open airbag or brake recall makes a bad quadrant worse.
