# Research #1616: The Safest Car in America Didn't Exist for Six of the Ten Years It Was Measured

**Slug:** 1616-safest-cars-barely-existed
**Journalist:** Axle McScatter (methodology beat — "I ran the numbers. Then I ran them again.")
**Kicker:** By The Numbers
**Date:** 2026-11-28

## Angle (1-2 sentences)
Every death rate on this site divides ten years of FARS deaths by ten years of assumed driving. The Tesla Model Y, the "safest car in America" at 0.03 deaths per 100M miles, was only on sale for four of those ten years. Correct for the calendar and its rate more than doubles — and the Kia K5 goes from looking safer than a CX-5 to nearly four times worse.

## Self-critique gate
- **Is this genuinely surprising after 1,600+ articles?** Yes. Story #52 (Vin Wreckage) exposed the fleet-bin denominator problem, but nobody has touched the *calendar* dimension: the denominator assumes a full decade of exposure for every model, including models launched in 2019-2020. The top four "safest" names are all post-2017 launches. This is a correction to the site's own headline numbers, quantified, with the established fix (IIHS registered vehicle years) as the contrast.
- **Verdict:** Proceed.

## The method (and the bug)
- Our rate = FARS deaths 2014-2023 / (fleet x 12,500 mi/yr x 10 yrs), expressed per 100M VMT.
- Verified against the raw data: Model Y, 57 deaths / (21,875M mi x 10) x 100 = 0.026, published as 0.03. The formula checks out — and it credits the Model Y with a decade of driving it never did.
- Correction: corrected rate = deaths / (VMT x exposure years) x 100, where exposure years = calendar years the model was actually on sale inside 2014-2023. Transparent, reproducible from the dataset plus launch dates.

## Corrected table (fleet > 250k, deaths > 0)
| Model | Raw rate | Years on sale | Corrected | Multiplier | Deaths |
|---|---|---|---|---|---|
| Tesla Model Y | 0.03 | 4 (2020-23) | 0.07 | x2.5 | 57 |
| Kia Telluride | 0.04 | 5 (2019-23) | 0.08 | x2.0 | 31 |
| Tesla Model 3 | 0.05 | 7 (2017-23) | 0.07 | x1.4 | 92 |
| Hyundai Palisade | 0.06 | 5 (2019-23) | 0.12 | x2.0 | 38 |
| Kia Seltos | 0.04 | 4 (2020-23) | 0.10 | x2.5 | 21 |
| Kia K5 | 0.18 | 4 (2020-23) | 0.45 | x2.5 | 54 |
| Hyundai Venue | 0.13 | 5 (2019-23) | 0.26 | x2.0 | 28 |
| VW Atlas | 0.06 | 7 (2017-23) | 0.08 | x1.4 | 26 |
| Ford EcoSport | 0.14 | 6 (2018-23) | 0.24 | x1.7 | 86 |
| Subaru Crosstrek | 0.08 | 10 (full window) | 0.08 | x1.0 | 86 |
| Mazda CX-5 | 0.12 | 10 (full window) | 0.12 | x1.0 | 162 |
| Honda HR-V | 0.13 | 9 (2015-23) | 0.14 | x1.1 | 142 |

## Key findings
1. **The top four raw rates are all calendar artifacts.** Model Y, Telluride, Model 3, Palisade — every one launched in 2017 or later. After correction, no model in the dataset sits below 0.07.
2. **The K5 is the biggest flip.** Raw 0.18 vs the CX-5's 0.12: the K5 looks 1.5x worse, a modest gap. Corrected 0.45 vs 0.12: it is nearly 4x worse. A shopper comparing the two on raw rates underestimates the gap by more than half.
3. **The Teslas are still genuinely the safest — just not by the claimed margin.** Corrected Model Y and Model 3 tie at 0.07. The honest headline is "safest by a bit," not "safest by a factor of four."
4. **The Crosstrek is the most impressive number in the table.** 0.08 earned over the full ten-year window, no correction needed. It never got to hide behind a short calendar.
5. **Fleet ramp is a second, unquantified bias in the same direction.** The fleet figure is a single snapshot; a model whose fleet grew from ~70k to ~1.9M during its window gets credited with the final fleet for every year. Linear-ramp sensitivity: the Model Y's true rate could be roughly double the corrected 0.07 again (~0.13). Labeled as a sensitivity check, not a measurement.
6. **IIHS already solved this.** IIHS divides deaths by *registered vehicle years* (one vehicle registered for one year), requires at least 100,000 registered vehicle years, and restricts counts to calendar years after the model year. Our site's method does none of that.

## Counterargument (strongest)
- The correction does not change any ranking that matters for a buyer: the corrected leaders (Model Y, Model 3 at 0.07) are still the leaders, and the raw extremes (Veloster 8.54, Tracker 7.83) are unaffected because those models had full-window exposure. The error is largest exactly where the numbers are smallest, i.e. where buyers are choosing between two already-safe cars. A skeptic can fairly say this is a second-decimal-place argument — and story #52 already made that point about fleet bins. The honest reply: the site publishes these numbers to two decimal places and ranks cars on them, so a 2.5x error on the headline number is worth correcting even if it does not flip the podium.

## Limitations
- Exposure years use launch dates, not month-by-month registration counts; a model launched in December counts as a full year. Sensitivity is roughly +/-15% on the correction factor, which does not change any conclusion.
- FARS model-year coding has quirks: the Palisade shows 6 deaths attributed to model year 2018, two years before launch — almost certainly misclassified Santa Fes. The Palisade correction uses the real 2019 launch, not the FARS first-model-year.
- Fleet estimates are the same binned estimates story #52 documented (52 unique values for 337 models); the exposure correction sits on top of that uncertainty, it does not fix it.
- FARS only counts fatal crashes; injury rates could rank these models differently.
- Small-number noise: Seltos (21 deaths) and Atlas (26 deaths) have wide confidence intervals; their corrected rates are order-of-magnitude, not precise.

## What this means for you (actionable)
- If you are shopping and comparing death rates: ignore any rate for a model launched after 2017 unless the source corrects for exposure. The raw number flatters every new model.
- The corrected leaderboard still favors the Model Y and Model 3 — but the Crosstrek and CX-5 earned their numbers over a full decade, which is the stronger evidence.
- Before buying a K5, Seltos, or Venue on the strength of a low published rate: the corrected numbers (0.45, 0.10, 0.26) are the ones to compare against the CX-5's 0.12.

## Sources
1. NHTSA FARS 2014-2023, via site dataset fars_output.js (337 models; deaths, fleet, VMT, model-year distributions). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS, "Driver death rates by make and model" — rates per million registered vehicle years; a registered vehicle year is one vehicle registered for one year; minimum 100,000 registered vehicle years. https://www.iihs.org/ratings/driver-death-rates-by-make-and-model
3. IIHS, "Procedure for calculating driver death rates by vehicle make and series" (July 2026 methodology) — registration counts restricted to calendar years later than the model year; deaths divided by registered vehicle years. https://iihs-staging.iihs.org/media/03583804-f7ac-425f-919b-1893af92cb34/6siIDg/Driver%20death%20rates/IIHS%20driver%20death%20rates%20methodology.pdf
4. Model Y first deliveries March 13, 2020 (Digital Trends / Electrek, March 2020). https://www.digitaltrends.com/cars/tesla-will-start-delivering-model-y-on-march-13-2020/
5. Site history: story #52, "Every Death Rate on This Site Is Built on 52 Guesses" (Vin Wreckage) — fleet-bin denominator problem; this piece is the calendar sequel.
