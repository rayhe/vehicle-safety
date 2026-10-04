# Research: 1069-altima-five-stars-triple-deaths
**Journalist:** Rex Driverton | **Kicker:** Investigation | **Date:** 2026-10-04

## Angle (1-2 sentences)
The Nissan Altima earned a 5-star NHTSA safety rating, yet FARS data shows it kills at 2.88 deaths per 100M miles — 56% higher than its direct competitor the Toyota Corolla (1.85) — and IIHS independently records ~3x the average driver death rate for it. Impairment doesn't explain it (20.0% vs 19.2%), one bad generation doesn't explain it (elevated across all model-year buckets), and the lab says the car is fine. A noir-detective elimination of the usual suspects.

## Kill test
- Genuinely newsworthy? Yes: two fully independent datasets (FARS 2014-2023, IIHS driver death rates) converge on the same verdict about a top-10-selling sedan. A daxstreet listicle touched the lab-vs-road paradox 5 days ago, but no FARS-based head-to-head with impairment control exists.
- Novel angle? Yes: the Corolla head-to-head controls for class, price tier, and era; the toxicology cross-tab rules out the impairment explanation; the model-year buckets rule out the single-bad-generation explanation. The mystery (no mechanism identified) IS the story — Rex's noir frame fits.
- Not previously covered? Confirmed: no Altima feature in queue or stories. Sentra (#750) was a driveshaft-recall piece; Maxima (#1002) was a rate piece. Neither is this.

## Primary sources (3+)
1. **NHTSA FARS 2014-2023** (via fars_output.js, derived from FARS bulk CSV + sales + NHTS VMT): Altima deaths=4,787, crashes=7,621, rate=2.88; Corolla deaths=4,945, crashes=7,713, rate=1.85. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars and https://cdan.dot.gov/query
2. **IIHS driver death rates** (2020-model study; summarized by Carscoops Jul 2026 and DaxStreet Oct 2026): Altima 105-113 driver deaths per million registered vehicle years vs ~38 study average (~3x). IIHS adjusts for driver age/sex, NOT speed/mileage/behavior. https://www.carscoops.com/2026/07/iihs-death-rate-study/ and https://www.iihs.org/topics/fatality-statistics
3. **NHTSA 5-star overall rating for the Altima** (4-star frontal, 5-star side, 5-star rollover) + NHTSA recalls database for the actionable VIN check. https://www.nhtsa.gov/recalls
4. Supporting: NHTSA "Speeding Catches Up With You" campaign data (speeding factor context, Oct 2026: 2025 speeding deaths est. 10,035, down 11%). https://www.nhtsa.gov/press-releases/trumps-transportation-department-reminds-drivers-that-speeding-catches-you

## Key numbers (verify before writing)
- Altima: 4,787 deaths / 7,621 fatal-crash involvements / rate 2.88 / 478.7 annual deaths
- Corolla: 4,945 deaths / 7,713 involvements / rate 1.85 / 494.5 annual deaths
- Rate gap: (2.88-1.85)/1.85 = 55.7% → **56% higher per mile**
- Raw body counts nearly identical (4,787 vs 4,945); Corolla fleet drives ~61% more miles (26,666M vs 16,603M VMT)
- Toxicology: Altima any-impaired 20.0% (alc 14.7%, drug 9.0%, n=10,185 drivers); Corolla 19.2% (alc 14.9%, drug 7.9%, n=10,287). **Impairment does not explain the gap.**
- Altima model-year buckets: 2000-09: 2,050 deaths; 2010-14: 1,367; 2015-23: 1,185. Persistently elevated across generations — not one bad redesign.
- Nissan sedan siblings: Maxima 5.11 (1,544 deaths), Sentra 2.13 (2,571), Versa 0.9 (722). Three of four run hot.
- IIHS: Altima 113 driver deaths/million registered vehicle years (2020 study; ~3x the 38 average); updated tables: 105.
- NHTSA lab: 5 stars overall for the Altima.

## Strongest counterargument (full strength)
IIHS itself warns these rates are not adjusted for speed, annual mileage, or driver behavior — only age and sex. IIHS President David Harkey attributes muscle cars' high rates to "how they're driven." The Altima is a value-priced midsize sedan that sells heavily to younger and subprime buyers and rental fleets; its drivers may simply crash more often for reasons that have nothing to do with the car's engineering. The FARS data cannot separate the car from the driver. The VMT estimates behind the per-mile rates carry roughly ±15% uncertainty for individual models. It is entirely possible the Altima is a perfectly average car driven by above-average-risk drivers.

## Limitations (dedicated accounting)
- FARS captures fatal crashes only (~40,000 deaths/yr vs ~6.7M total crashes); injury-only patterns are invisible.
- Rates use estimated VMT, not odometer readings (±15% uncertainty per model).
- No driver-age, income, or buyer-demographic data in this dataset — the leading alternative explanation (who buys Altimas) cannot be tested here.
- IIHS driver-death metric counts drivers only, uses registered-vehicle-years exposure — a different denominator than per-mile rates; the two agree directionally, not numerically.
- Correlation is not causation: nothing here proves the Altima's engineering causes the excess.

## Actionable takeaways (required)
- If you drive a 2013-2022 Altima: the car aces the lab but the road data is ugly on two independent datasets. Check your VIN at nhtsa.gov/recalls before your next oil change; the gap is in crash occurrence, not crashworthiness, so following distance and speed matter more than the star rating suggests.
- If you're shopping midsize sedans: the per-mile death-rate spread between the Altima (2.88) and Corolla (1.85) is 56%. Star ratings measure the lab. FARS and IIHS measure the road. Check both.
- The honest bottom line: nobody has proven WHY. Until someone does, treat the Altima's numbers as a real signal with an unknown cause.

## Methodology note
Rate gap computed as (2.88 − 1.85) / 1.85 = 0.557 → 56%. All FARS figures are 10-year aggregates (2014-2023); rates are annualized deaths per 100M VMT. Toxicology percentages are share of drivers in fatal crashes testing positive (BAC > 0 or drug-positive).
