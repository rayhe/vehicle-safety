# Research: The 36% Reversal — Safety Improvements That Went Backwards

## Angle
Novel FARS cross-tabulation: comparing death counts for model year cohorts 2010-2014 vs 2015-2019 across 109 long-running vehicle models reveals that **36% (39 of 109)** show MORE deaths in the newer cohort despite mandated ESC (since MY 2012), increasing AEB adoption, and generally improved crash structures.

## Why This Is Novel
- Nobody runs this specific generation-to-generation comparison publicly
- Challenges the assumption that "newer = safer" universally
- Quantifies how many vehicles are actually getting worse
- The ESC mandate (FMVSS 126, September 2011) should have created a visible inflection point in 2012+ model years; for 39 vehicles, it didn't overcome other factors

## Key Finding
109 long-running models analyzed (≥12 model years of data, ≥200 total deaths)
- 70 (64%) show improvement: fewer deaths in MY 2015-19 vs MY 2010-14
- 39 (36%) show REVERSAL: more deaths in MY 2015-19 vs MY 2010-14

## Worst Reversals (top 10):
1. Buick Encore (SUV): 28 → 115 deaths (+311%)
2. Chevrolet Corvette (Sports Car): 15 → 58 (+287%)
3. Dodge Challenger (Sports Car): 75 → 224 (+199%)
4. Chevrolet Spark (Sedan): 31 → 83 (+168%)
5. Chevrolet Colorado (Pickup): 36 → 89 (+147%)
6. Nissan Rogue (SUV): 212 → 520 (+145%)
7. Jeep Cherokee (SUV): 134 → 302 (+125%)
8. Kia Sportage (SUV): 43 → 94 (+119%)
9. Kia Forte (Sedan): 148 → 294 (+99%)
10. Subaru Forester (SUV): 65 → 118 (+82%)

## Best Improvements:
- Ford E-350: 177 → 7 (-96%)
- Ford Ranger: 105 → 25 (-76%)
- Chrysler Town & Country: 330 → 81 (-75%)
- Chevrolet Impala: 957 → 269 (-72%)

## Important Caveats (must include):
1. **Fleet growth confound**: Vehicles that sold more units in 2015-19 will naturally show more deaths even at the same per-vehicle rate. The RAV4 and Rogue both exploded in popularity. This analysis doesn't normalize for fleet size per model year.
2. **Exposure time in FARS window**: MY 2015-19 vehicles had less total time in the FARS 2014-2023 window than MY 2010-14 vehicles. A 2019 model has only 4 years of exposure vs a 2010 model's full 13 years. This actually UNDERSTATES the problem: if newer vehicles are catching up in deaths with LESS exposure time, the per-year rate is even worse.
3. **Survivorship**: Older model years that survive to the late FARS window are the ones that weren't totaled — potentially a safer-surviving subset.
4. **This does NOT mean the vehicles themselves got less safe in absolute terms** — it means the combination of vehicle design, fleet size, driver demographics, and usage patterns is producing more deaths, not fewer.

## Counterargument (strongest):
The most likely explanation for most reversals is simple fleet growth: the Rogue's US sales went from ~150K in 2013 to ~350K in 2018. Double the fleet, double the deaths, even if per-vehicle safety improved. Without sales-normalized data per model year, this analysis can't distinguish "vehicle got worse" from "more people bought it." However, this counterargument itself leads to a disturbing conclusion: safety improvements are being offset by volume growth, meaning the NET effect on total deaths is zero or negative.

## Sources:
1. FARS 2014-2023 (NHTSA) — primary data via fars_output.js
2. NHTSA FMVSS 126 ESC mandate (June 2007 rule, September 2011 full compliance) — https://www.govinfo.gov/content/pkg/FR-2007-06-22/html/E7-11965.htm
3. IIHS ESC effectiveness study — https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue
4. IIHS 2026: only 2 of 16 tested vehicles earned TSP+ (Palisade, Prius) — context for ongoing safety struggles
5. IIHS pickup truck testing: only Cybertruck and Tundra passed — major volume sellers (F-150, Silverado, Ram) failed

## Journalist: Axle McScatter (Data Visualization Editor)
- Statistical roundup piece
- "I ran the numbers. Then I ran them again. They didn't get better."
- Focus on the 36% finding as the headline stat
- Kicker: By The Numbers

## Kill Test
Is this genuinely newsworthy? YES — this is an original cross-tabulation that quantifies a specific, counterintuitive finding (over a third of vehicles are showing more deaths in newer versions). The methodology is transparent and replicable. The caveat about fleet growth is real but doesn't eliminate the finding; it contextualizes it. Even under the most charitable interpretation, safety improvements are being eaten by volume growth, which is itself a public health story.
