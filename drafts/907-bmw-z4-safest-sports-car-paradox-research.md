# #907 Research — The Safest Sports Car in America Is a BMW Roadster

**Slug:** 907-bmw-z4-safest-sports-car-paradox
**Journalist:** Rex Driverton (fatality-rate investigations, paradoxes)
**Kicker:** The Gap
**Date:** September 15, 2026

## Angle
The BMW Z4 roadster has the lowest death rate of any sports car in FARS 2014-2023: 0.46 deaths per 100M VMT. That is not just low for a sports car. It is lower than the Toyota Camry (2.03), the Honda Civic (2.25), and the Honda Accord (3.07). A two-seat convertible kills at roughly one-quarter the rate of America's default family sedan. At the other end of the same class, the Ford Mustang kills at 6.02 (13x the Z4) and the Hyundai Veloster at 8.54 (18.6x the Z4, worst in class).

## Kill test
Genuinely surprising? Yes. It inverts two intuitions at once: sports cars are death traps, and family sedans are safe. Nobody shopping a Z4 thinks "safest car in its dataset," and nobody in a Camry thinks they are in the riskier seat. Novel: the intra-class spread (18.6x) and the cross-class inversion (Z4 < Camry) are original calculations from the site's FARS dataset.

## Data (FARS_BY_MODEL, 2014-2023; FARS_TOXICOLOGY)

Sports cars by rate (deaths per 100M VMT):
| Model | Deaths | Rate | any-impaired % |
|---|---|---|---|
| BMW Z4 | 16 | 0.46 | n/a (too few deaths for tox reporting) |
| BMW Z3 | 21 | 0.60 | n/a |
| Toyota Celica | 66 | 0.63 | 22.0 |
| Porsche 911 | 48 | 0.69 | (see porsche-911-drunk-proof) |
| Chevrolet Corvette | 320 | 1.52 | 26.2 |
| Mazda MX-5 Miata | 100 | 1.79 | — |
| Scion tC | 242 | 2.30 | — |
| Chevrolet Camaro | 1,204 | 3.44 | — |
| Ford Mustang | 2,739 | 6.02 | 21.9 |
| Hyundai Veloster | 598 | 8.54 | 17.4 |

Reference family sedans: Toyota Camry 6,328 deaths, 2.03, 19.2% impaired. Honda Civic 6,553 deaths, 2.25. Honda Accord 7,102 deaths, 3.07.

Key calculations:
- Mustang / Z4 = 6.02 / 0.46 = 13.1x
- Veloster / Z4 = 8.54 / 0.46 = 18.6x (widest intra-class spread on the site's board)
- Camry / Z4 = 2.03 / 0.46 = 4.4x
- Z4 95% Poisson CI on 16 deaths: ~9-26 deaths, rate ~0.26-0.75. Still below Camry's CI (tight, ~1.98-2.08) at any plausible bound.

## Primary sources (3+)
1. NHTSA FARS 2014-2023 (via site dataset fars_output.js) — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS driver death rates report, July 30, 2026 — Harkey: sports/muscle cars post higher death rates "because of how they're driven"; small cars disadvantaged vs large pickups — http://www.iihs.org/news/detail/driver-death-rates-remain-high-for-small-cars-models-with-powerful-engines
3. NHTSA FARS query tool — https://cdan.dot.gov/query

## Strongest counterargument (full strength)
This is almost entirely driver selection, not engineering. Z4 buyers skew older, wealthier, and drive fewer miles, mostly in fair weather, often as second cars garaged in suburbs. The Mustang's buyer pool skews young; its fatal-crash drivers test 21.9% impaired. The IIHS said the quiet part out loud in July: sports cars are dangerous because of how they're driven. The Z4 is the same phenomenon in reverse. The chassis deserves little credit. Additionally, 16 deaths is a thin sample and the VMT estimate for a low-volume roadster carries wide error bars.

## Limitations
- FARS captures fatal crashes only; injury-only crashes invisible.
- estimated_rate uses estimated VMT, not odometer readings; ±15%+ uncertainty for low-volume models like the Z4.
- No driver-age or mileage-pattern data in this dataset; the demographics argument is inference, not measurement.
- Z4 has no toxicology row (too few fatal-crash drivers tested/reported).

## Actionable takeaways
- Shopping a sports car? The badge's typical driver pool predicts your risk better than the spec sheet. A Mustang's 6.02 rate is a young-driver-and-impairment story more than a chassis story.
- Do not use body style as a safety proxy in either direction: the "safe" sedan shape (Camry 2.03) out-kills the "dangerous" roadster shape (Z4 0.46) per mile.
- Check IIHS driver death rates (updated July 2026), not vibes, before buying.

## Why Rex Driverton
Deadpan paradox beat. "The numbers don't lie, but they do occasionally smirk." This is his story.
