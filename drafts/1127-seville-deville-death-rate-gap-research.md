# Research: #1127 — The Seville Paradox (slug: 1127-seville-deville-death-rate-gap)

**Journalist:** Vin Wreckage (existential dread / paradox beat)
**Kicker:** The Gap
**Working headline:** "The Crash-Test Dummies Walked Away. The Drivers Didn't."

## Angle (1-2 sentences)
The 1998-2004 Cadillac Seville earned a Good rating in the IIHS moderate-overlap frontal test, yet FARS 2014-2023 records 391 occupant deaths at 3.89 per 100M VMT — more than 10x the rate of its showroom sibling the DeVille (0.38) and 4.5x the Lincoln Town Car (0.86). Its drivers were among the soberest in the dataset (10.5% impaired vs 20.4% sedan average), so this one is on the car, or on the math, and either answer is uncomfortable.

## Kill test
- **Genuinely new?** Seville appears zero times in 332 queued/published articles (full-queue grep). The intra-brand Cadillac gap (Seville 3.89 vs DeVille 0.38 vs DTS 0.40) has never been computed on this site.
- **Novel angle on data?** Yes: cross-tabulating the IIHS single-mode Good rating against the FARS per-mile death rate, plus the sober-driver signature (low impairment + high rate = "blame the car" pattern previously only run for the Veloster, a sports car — never for a luxury sedan).
- **Newsworthy?** It's a data paradox in the site's core genre: a "Good"-rated luxury car that kills at 10x the rate of its stablemate. Verdict: PROCEED.

## Data (FARS 2014-2023, from fars_output.js)
| Vehicle | Deaths | Crashes | Fleet (est) | Rate /100M VMT |
|---|---|---|---|---|
| Cadillac Seville | 391 | 563 | 87,500 | **3.89** |
| Cadillac DeVille | 114 | — | 262,500 | 0.38 |
| Cadillac DTS | 81 | — | 175,000 | 0.40 |
| Lincoln Town Car | 260 | — | 262,500 | 0.86 |
| Cadillac CTS | 265 | — | 175,000 | 1.32 |
| Lexus LS | 116 | — | 70,000 | 1.44 |
| BMW 7 Series | 80 | — | 87,500 | 0.80 |

- Seville/DeVille ratio: 3.89/0.38 = **10.2x**. Seville/Town Car: 4.5x.
- Implied mileage sanity check: 100.6B VMT over 10 yrs / 87,500 vehicles = ~11,500 mi/veh/yr. Plausible; not an obvious denominator artifact.
- Toxicology (fatal-crash drivers): Seville 171 drivers, any-impaired 10.5% (alc 7.6%, drug 4.7%) vs sedan average 20.4% (197,584 drivers). Soberest luxury-sedan cohort in the set.
- Model-year spread of Seville deaths: bulk in 1998-2004 (last generation), 227 of 391.

## Primary sources (3+)
1. NHTSA FARS 2014-2023 (via site dataset; cite https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars and query tool https://cdan.dot.gov/query)
2. IIHS ratings page, 2003 Cadillac Seville 4-door: Moderate overlap front = Good (test CF99021, applies to 2000-04; "redesigned for 1998, structurally modified for 2000"); side impact NOT tested; head restraints/seats = Poor. https://www.iihs.org/ratings/vehicle/cadillac/seville-4-door-sedan/2003
3. NHTSA recalls database (https://www.nhtsa.gov/recalls): Seville campaigns include 99V301000 (tie-rod separation, 2000 models, shared with LeSabre/Eldorado) and 04V110000 (fuel-rail fire, 1995). No open defect investigations per ODI records.
4. IIHS vehicle size/weight research (https://www.iihs.org/topics/vehicle-size-and-weight) for the mass-vs-outcome context.

## Strongest counterarguments (at full strength)
1. **The denominator is the weakest link.** Every Seville on the road in 2014-2023 was at least 10 years old; fleet-survival estimates for a discontinued car are the noisiest input in the pipeline. If the true surviving fleet is 2x the estimate, the rate halves to ~1.9 — still 5x the DeVille, but the "10x" headline softens. The DeVille/DTS fleets are estimated with the same method, so the *ranking* is more robust than the absolute numbers.
2. **A Good rating covers one crash mode.** IIHS never side-tested the Seville. The real world serves side impacts, rollovers, and rear-enders; the rating everyone remembers is a single 40-mph frontal into a barrier. A car can be Good at the test and ordinary everywhere else.
3. **Sober is not slow.** The Seville STS was Cadillac's "driver's car": 300-hp Northstar V8, marketed against BMW. FARS toxicology measures substances, not speed. Low impairment + high rate could mean fast sober drivers in an old structure, not a cursed chassis.
4. **Survivorship of the worst.** The Sevilles still registered in 2020 were the most worn, least maintained examples — the cream was scrapped years earlier.

## Limitations
- FARS captures fatal crashes only; injury-only crashes invisible.
- VMT is estimated, not odometer-measured (±15%+ for low-volume antique fleets).
- No driver-age or speed data in this cut; the STS-speed theory is untestable here.
- 391 deaths over 10 years = ~39/year; real but small absolute numbers.

## Actionable insight
If anyone you know still drives a Seville (they're cheap now): it carries a 1998-era safety design, was never side-impact tested, and IIHS rated its head restraints Poor. Run the VIN at nhtsa.gov/recalls — the tie-rod and fuel-rail campaigns are still open on affected cars. General lesson: a "Good" crash rating from 1999 is a time capsule, not a promise.

## Notes for draft
- Vin Wreckage voice: philosophical, slightly unhinged, cosmic absurdity. Distinct from Rex's noir and Dale's stats.
- Do NOT claim DeVille "replaced" the Seville (the STS did). Frame DeVille/DTS/Town Car as same-brand, same-buyer-pool comparators.
- Do NOT claim no ESC: 2003 Seville listed StabiliTrak. Frame as "safety design frozen in 2000."
- Em dashes: zero literal — in file. The-starters ≤15%. Banned phrases: none. Sentence rhythm: vary aggressively.
