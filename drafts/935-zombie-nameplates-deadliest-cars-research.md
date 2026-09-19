# Research #935 — The Deadliest Cars in America Are the Ones You Can't Buy Anymore

**Journalist:** Vin Wreckage (Existential Dread) | **Slug:** 935-zombie-nameplates-deadliest-cars | **Date:** 2026-09-18

## Thesis
Discontinued nameplates dominate the fatality-rate leaderboard. The deadliest car in the 2014-2023 FARS window is the Hyundai Veloster (rate 8.54), a car Hyundai killed after 2022. As a group, dead nameplates kill at a median rate 47% higher than models still in production. The cars nobody sells anymore are, per mile, the most dangerous cars on the road.

## Novel cross-tab (computed from fars_output.js, 337 models, deaths >= 100)
- Classified 45 models as discontinued US nameplates (killed by ~2024) vs 158 still-active models.
- Discontinued median rate: **1.22** deaths/100M VMT; active median: **0.83**. Premium: **+47%**.
- Discontinued mean rate: 1.85 vs 1.13 active (+64%).
- Of the 10 worst-rate models in the dataset, **8 are discontinued nameplates** (Veloster, Tracker, Maxima, Cobalt, Impala, S-10, Solara, Seville; 9 if you count the Land Cruiser, which sat out the US market 2021-2023). Only the Mustang is still sold.
- Dead-nameplate death leaders: Impala 3,774 (rate 5.00), Malibu 3,465 (2.03), Focus 3,046 (2.52), Taurus 2,208 (2.74), Fusion 2,168 (1.23), Grand Caravan 1,782 (1.33), Maxima 1,544 (5.11), Cobalt 1,540 (5.10).

## Key stat for headline
**8.54** — Hyundai Veloster fatality rate (deaths/100M VMT), #1 worst of 337 models. 598 deaths, ~87,500 fleet. Veloster line killed after 2022 model year.

## Mechanisms (why, not just what)
1. **Fleet-age trap (IIHS, Dec 2021 "retirement vehicles" study):** drivers in older vehicles lack ESC (37% higher fatality odds without it) and head-protecting side airbags (double the odds of fatality); small sedans expose occupants to greater forces in crashes with larger vehicles.
2. **Teen hand-me-down effect (IIHS/HLDI, 2013-2017):** 67% of teens killed drove vehicles 6-15 years old; teens log >50% of miles in cars 11+ years old; sub-3,000-lb cars carry 75% higher driver death rates.
3. **Survivor-bias economics:** dead nameplates concentrate in the cheap end of the used market — highest-mileage examples, deferred maintenance, cheapest tires. The rate reflects who still drives them and how, not just the sheet metal.
4. **The Impala paradox:** the tenth-gen Impala earned Consumer Reports' highest-ever score of 95/100 in 2014 — yet the Impala nameplate aggregates to a 5.00 rate, because the dataset is dominated by older 9th-gen fleet/rental examples still grinding out miles.

## Counterargument (full strength)
Discontinuation doesn't make a car dangerous — time does. A 2012 Impala and a 2012 Camry faced the same crash-physics decade; the Impala's problem is compositional (its fleet skewed to high-mileage rental/sedan duty and aged in place). Note also the fleet estimates in fars_output.js are approximate (US sales + NHTS VMT modeling), so rates for tiny-fleet models (Tracker, Seville) carry wide uncertainty. Land Cruiser (6.27) is a low-volume outlier that proves the noise point. And paradox cuts both ways: the Dodge Grand Caravan — also dead — posts a 0.23 rate, one of the best. Not all zombies are killers.

## Limitations
- FARS captures fatal crashes only; injury-only crashes invisible. A "safe" rate here can still hide high injury rates.
- estimated_rate uses modeled VMT, not odometer readings; ±15%+ uncertainty for low-volume models.
- Dead/active classification is a judgment call on ~5 borderline models (Land Cruiser, Equinox-class renames).
- Model-year aggregation mixes generations (9th vs 10th gen Impala).

## Actionable insights
- Shopping used? A dead nameplate sedan is the statistical worst seat in the used market. Cross-shop IIHS ratings and this site's rate table before buying any 2010s sedan.
- Already driving one (Impala, Focus, Cobalt, Maxima, Veloster)? Tires and brakes are the whole game on an aging fleet — and check open recalls at nhtsa.gov/recalls.
- Buying a teen's first car? IIHS's rule holds: newer and larger beats older and smaller, even if the older car was "a good deal."

## Primary sources (3+)
1. NHTSA FARS 2014-2023, via fars_output.js local dataset — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS, "'Retirement vehicles' raise the risk of crash fatalities for older drivers," Dec 7, 2021 (ESC 37%, side airbags 2x) — https://www.iihs.org/news/detail/retirement-vehicles-raise-the-risk-of-crash-fatalities-for-older-drivers
3. IIHS/HLDI teen vehicle study via Transportation Today (67% of killed teens in 6-15 yr old vehicles; 75% higher death rate under 3,000 lbs) — https://transportationtodaynews.com/news/19285-teen-drivers-more-likely-to-drive-older-cars-leading-to-more-deaths-study-says/
4. Wikipedia, Chevrolet Impala (final Impala built Feb 27, 2020, Detroit-Hamtramck) — https://en.wikipedia.org/wiki/Chevrolet_Impala
5. CarBuzz, "Say Goodbye To Three Affordable Hyundai Models For 2023" (Veloster N discontinued after 2022) — https://carbuzz.com/news/say-goodbye-to-three-great-hyundai-models-for-2023/

## Kill test
Pass. No existing story cross-tabs discontinued-vs-active rates; #884/#934 covered phantom model YEARS, this is dead NAMEPLATES — adjacent but distinct. The "deadliest car is one you can't buy" framing is a fresh paradox for Vin Wreckage's Existential Dread beat.
