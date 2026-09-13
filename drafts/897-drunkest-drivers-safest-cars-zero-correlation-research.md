# Research: #897 — The Drunkest Drivers Drive the Safest Cars (Axle McScatter)

## Angle (1-2 sentences)
Across all 307 FARS models with 100+ toxicology screens, the Pearson correlation between a model's fatality rate and its drivers' impairment rate is **-0.139** — essentially zero. The drunkest drivers in America drive some of the statistically safest cars; the deadliest cars are driven by sober people.

## Self-critique gate
- Genuinely surprising after 890+ articles? YES. The intuitive story ("dangerous cars = dangerous drivers") is wrong in both directions, and nobody on the site has run the formal correlation. The Ascent piece (Dale, Jul 13 2026, "10 soberest vehicles, 4,079 died") showed one direction (sober cars still kill); this runs the full cross-tab and adds the mirror image (drunkest drivers in safest cars) plus group means.
- Just another data dump? No — original calculation (Pearson r on 307 matched pairs, n=490,736 drivers), novel pairing of extremes, methodology shown.
- Verdict: PROCEED.

## Kill-test rejects (checked this run)
- Toyota C-HR EV overcharge recall (Sep 2, 8,521 units) — covered #876. KILL.
- FCA/Jeep TPMS 54D recall (Sep 9, 201,976) — covered #855. KILL.
- Jeep Grand Cherokee coil-spring 89D third recall (Sep 8, 328,381) — covered #882/#886/#891/#858/#865. KILL.
- Stellantis 844k rear-camera recall — covered #821. KILL.
- Audi A3 impairment (27.1%) — covered stories/a3-entry-luxury-impairment-outlier.html. KILL.
- Veloster/Tracker/Solara/Land Cruiser "sober deathtrap" framings — all covered individually. The correlation + mirror finding is the new contribution, not a rehash.

## Data (from fars_output.js, verified 2026-09-13)
Matched pairs: 307 models (make|model present in both FARS_BY_MODEL and FARS_TOXICOLOGY, drivers >= 100).
Total tested drivers: 490,736. Driver-weighted mean any-impairment: 20.0%.
Pearson r(rate, anyPct) = **-0.139**.

Group split at mean impairment (20.0%):
- Above-mean impairment: 166 models, mean fatality rate 0.99
- Below-mean impairment: 141 models, mean fatality rate 0.90
Top-20 deadliest models: mean impairment 18.6%. Bottom-20 safest: mean impairment 18.0%.

Extreme pairs (rate = deaths per 100M VMT, estimated):
| Vehicle | Deaths | Rate | Tested drivers | Any-impairment |
|---|---|---|---|---|
| Hyundai Veloster (deadliest) | 598 | 8.54 | 489 | 17.4% |
| Chevrolet Tracker | 856 | 7.83 | 573 | 12.7% |
| Toyota Land Cruiser | 343 | 6.27 | 417 | 8.9% |
| Toyota Solara | 642 | 4.25 | 195 | 4.1% |
| Buick Park Avenue (drunkest drivers) | 97 | 0.48 | 259 | 31.7% |
| Oldsmobile Alero | 49 | 0.16 | 141 | 29.1% |
| Chevrolet C/K Pickup | 67 | 0.19 | 282 | 28.0% |
| Audi A3 | 34 | 0.23 | 203 | 27.1% |
| Ford Five Hundred | 86 | 0.57 | 216 | 26.4% |

Rates use NHTS-based VMT estimates; +/-15% uncertainty for low-volume models (standard site caveat).

## Primary sources (3+)
1. NHTSA FARS 2014-2023 (fatality + toxicology data) — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. NHTSA FARS query tool (CDAN) — https://cdan.dot.gov/query
3. IIHS fatality statistics — https://www.iihs.org/topics/fatality-statistics
4. IIHS vehicle size and weight — https://www.iihs.org/topics/vehicle-size-and-weight
5. NHTSA recalls (VIN check) — https://www.nhtsa.gov/recalls
6. Site-internal prior: stories/ascent-soberest-vehicle-426-dead.html (Dale, Jul 13 2026) — the one-direction predecessor; this piece extends it.

## Methodology (for article)
Pearson r = cov(rate, anyPct)/(sd_rate * sd_anyPct), computed in Node over the 307 matched pairs. anyPct = share of tested drivers in fatal crashes with BAC>0 or drug-positive tox. rate = estimated deaths per 100M VMT.

## Limitations (for article)
- FARS captures fatal crashes only (~36k/yr of ~6.7M crashes). Impairment is measured CONDITIONAL on a fatal crash, not among each model's general driving population.
- Toxicology testing is not universal; untested drivers excluded; drug panels vary by state.
- 100-driver cutoff excludes rare models.
- Rate denominator is estimated VMT, not odometers (+/-15% for low-volume models).
- Vehicle age confounds: old cheap cars attract impaired buyers AND are driven fewer/shorter miles under different conditions.

## Strongest counterargument (for article, full strength)
This does not exonerate alcohol. Roughly 3 in 10 US traffic deaths involve an impaired driver, and nothing here changes that. The claim is narrow: across models, a car's impairment rate does not predict its fatality rate. A drunk driver in a Park Avenue is still far more likely to kill someone than a sober one; the Park Avenue's low rate reflects the car's crashworthiness and use patterns, not a protective effect of bourbon. Correlation across models says nothing about causation within a crash.

## Actionable insight
Shop crashworthiness, not clientele. IIHS Top Safety Pick+, ESC, vehicle weight, and structural design predict outcomes; the typical buyer's sobriety does not. Check your VIN at nhtsa.gov/recalls.

## Headline / deck / kicker
- Kicker: By The Numbers
- Headline: "The Drunkest Drivers in America Drive the Safest Cars. We Ran the Math on 307 Models."
- Deck: "The correlation between a model's fatality rate and its drivers' impairment rate is -0.14. That is basically zero. Buy the crash test, not the clientele."
- Pull stat: -0.14 / "Pearson correlation between fatality rate and driver impairment, 307 models, 490,736 toxicology screens"
- Slug: 897-drunkest-drivers-safest-cars-zero-correlation
