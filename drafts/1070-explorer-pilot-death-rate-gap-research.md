# Research: 1070-explorer-pilot-death-rate-gap
**Journalist:** Clara Rollover | **Kicker:** The Gap | **Date:** 2026-10-04

## Angle (1-2 sentences)
The Ford Explorer and Honda Pilot carry identical lab credentials (NHTSA 5-star overall, IIHS Top Safety Pick+), yet FARS data shows the Explorer kills at 1.54 deaths per 100M miles against the Pilot's 0.29 — a 5.3x gap between the two three-row family SUVs shoppers cross-shop most. Impairment is a dead heat (19.5% vs 19.4%), so the usual excuse doesn't work; what does differ is everything the lab can't measure.

## Kill test
- Genuinely newsworthy? Yes: the two most cross-shopped three-row SUVs in America, same lab ratings, 5.3x per-mile death gap. The Explorer's 1.54 rate is worse than the Silverado (1.25) and F-150 (1.04) — a family SUV that kills per mile like a pickup truck.
- Novel angle? Yes: head-to-head with toxicology control (impairment ruled out); segment context table (Pilot 0.29, MDX 0.30, Highlander 0.42, Explorer 1.54, Tahoe 2.49) nobody has assembled; the police-interceptor confounder surfaced as the leading alternative explanation. The Autoblog "which is safest" comparison (June 2026) graded features and lab tests only — no real-world death data.
- Not previously covered? Confirmed: 8 existing Explorer stories are all recall-focused (ghost seat, roof rails, seat displacement, FSA shadow recall, clips, 676k recall week, recall subscription, transformation); no Explorer death-rate piece exists. No Pilot feature exists. Grand Cherokee (#) and Pathfinder were single-model pieces.

## Primary sources (3+)
1. **NHTSA FARS 2014-2023** (via fars_output.js, derived from FARS bulk CSV + sales + NHTS VMT): Explorer deaths=3,797, crashes=6,626, rate=1.54, vmt=24,609; Pilot deaths=514, crashes=1,135, rate=0.29, vmt=17,500; segment rates (Highlander 0.42, MDX 0.30, RX 0.43, Grand Cherokee 0.51, Pathfinder 0.93, Aviator 1.15, Tahoe 2.49). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars and https://cdan.dot.gov/query
2. **NHTSA 5-star overall ratings + IIHS Top Safety Pick+** for both current models: 2026 Explorer (IIHS TSP+, NHTSA 5-star overall) and 2026 Honda Pilot (IIHS TSP+ 2025-26, NHTSA 5 stars overall), via Autoblog three-way comparison, June 2026. https://www.autoblog.com/carbuying/honda-pilot-vs-hyundai-palisade-vs-ford-explorer-which-one-is-the-safest
3. **IIHS driver death rate methodology** (July 13, 2023, 2020-model study): rates adjusted for driver age and gender, NOT for speed or miles driven; President David Harkey: "a vehicle's image and how it is marketed can also contribute to crash risk" / "we can measure horsepower and weight and test for crashworthiness. However, the deadly record of these muscle cars suggests that their history and marketing may be encouraging more aggressive driving." July 2026 update (2023 models): same methodology, adjusted for age/gender, not behavioral factors. https://www.iihs.org/news/detail/latest-driver-death-rates-highlight-dangers-of-muscle-cars and https://www.iihs.org/topics/fatality-statistics
4. **NHTSA recalls database / VIN lookup** for the actionable check (Explorer carries an unusually deep recall bench — 8 prior Crash Report recall pieces). https://www.nhtsa.gov/recalls

## Key numbers (verify before writing)
- Explorer: 3,797 deaths / 6,626 fatal-crash involvements / 379.7 annual deaths / rate **1.54**
- Pilot: 514 deaths / 1,135 involvements / 51.4 annual deaths / rate **0.29**
- Gap: 1.54/0.29 = 5.31 -> **5.3x per mile**
- Toxicology: Explorer any-impaired 19.5% (alc 14.8%, drug 8.1%, n=7,298 drivers); Pilot 19.4% (alc 14.7%, drug 8.5%, n=2,748). **Impairment does not explain the gap.**
- Segment three-row rates: Pilot 0.29, Acura MDX 0.30, Toyota Highlander 0.42, Lexus RX 0.43, Jeep Grand Cherokee 0.51, Subaru Ascent 0.78, Nissan Pathfinder 0.93, Lincoln Aviator 1.15, Ford Explorer 1.54, Chevy Tahoe 2.49
- Explorer rate exceeds Silverado (1.25) and F-150 (1.04)
- Model-year death buckets (raw, NOT exposure-adjusted): Explorer 2000-10: 3,286 / 2011-15: 225 / 2016-19: 200 / 2020-23: 67 (total 3,778); Pilot 347 / 88 / 55 / 24 (total 514). Both skew old; no exposure adjustment possible on this cut.
- Lab: 2026 Explorer = NHTSA 5-star overall + IIHS TSP+; 2026 Pilot = NHTSA 5-star overall + IIHS TSP+ (2025-26). Identical credentials.

## Strongest counterargument (full strength)
The leading alternative explanation is who drives what. The Explorer nameplate includes Ford's Police Interceptor Utility, a police-spec vehicle that logs high-speed pursuit miles and aggressive-driving exposure no family SUV ever sees; fleet and police use is baked into the Explorer's death count in a way the Pilot largely avoids. Beyond that, Explorer buyers skew younger and more male than Pilot buyers (suburban family haulers), and IIHS itself warns its rates don't adjust for speed, mileage, or behavior — Harkey's own finding is that a vehicle's image can drive its death rate. The VMT estimates carry roughly +/-15% uncertainty per model. It is entirely plausible that the Explorer is a well-engineered vehicle purchased and deployed by higher-risk drivers and institutions, and that the Pilot's halo belongs to Honda's buyer base, not Honda's steel.

## Limitations (dedicated accounting)
- FARS captures fatal crashes only (~40,000 deaths/yr vs ~6.7M total crashes); injury-only patterns are invisible.
- Rates use estimated VMT, not odometer readings (+/-15% uncertainty per model).
- FARS does not separate police/fleet Explorer variants from retail ones; the Interceptor confounder cannot be quantified here.
- No driver-age, income, or buyer-demographic data in this dataset.
- Model-year buckets are raw death counts, not rates — older buckets dominate because of more vehicles and miles.
- Correlation is not causation: nothing here proves the Explorer's engineering causes the excess.

## Actionable takeaways (required)
- If you're shopping three-row SUVs: the per-mile death-rate spread runs from 0.29 (Pilot) to 2.49 (Tahoe) — a nearly 9x spread inside one segment. The Pilot, MDX (0.30), and Highlander (0.42) are the road-data leaders; the Explorer (1.54) and Tahoe (2.49) trail badly.
- If you already own an Explorer: the gap sits in crash occurrence, not crashworthiness (the lab says 5 stars). Speed, following distance, and the vehicle's long recall history matter more than the badge. Check your VIN at nhtsa.gov/recalls before your next oil change.
- Used-car buyers: 87% of Explorer deaths in this dataset are from 2000-2010 model years. Whatever the mechanism, the oldest Explorers carry the worst history; buy 2016+ or look elsewhere.
- The meta-lesson: star ratings and TSP+ grades measure the lab. FARS measures the road. Check both before you sign.

## Methodology note
Rate gap computed as 1.54 / 0.29 = 5.31 -> 5.3x. All FARS figures are 10-year aggregates (2014-2023); rates are annualized deaths per 100M VMT, derived from estimated fleet and VMT (see STORY_GUIDE data sources). Toxicology percentages are share of drivers in fatal crashes testing positive (BAC > 0 or drug-positive).
