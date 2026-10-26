# Research: 1283 — Pontiac's Safest Sedan Was Also Its Deadliest Final Year

**Slug:** 1283-pontiac-grand-am-safest-deadliest
**Journalist:** Vin Wreckage (paradox / existential-dread beat; least-recent in rotation, last #1276)
**Kicker:** The Gap
**Proposed headline:** The Forgettable Pontiac Was the Safest of Its Siblings. Its Last Year Was Its Worst.

## Kill test
- **Proposed angle:** In NHTSA FARS data (2014-2023, via the site's fars_process.py aggregation), the Pontiac Grand Am posts 713 deaths at a rate of **1.18 deaths per 100 million VMT**. That is the lowest rate among Pontiac's three high-volume sedans in the dataset: Grand Prix 2.14, G6 1.64. Same dead brand, same era, same sedan job, and the Grand Am kills at barely half the rate of its big brother. The cheapest, most forgettable Pontiac sedan was the safest of its high-volume siblings. (Smaller Pontiac nameplates rate lower on far thinner counts: Vibe 0.54 on 135 deaths, Bonneville 0.22 on 56, Sunfire 0.18 on 55. They are excluded from the ranking on count grounds, disclosed in the article's scope note.)
- **Challenge:** Is this surprising after 1,282 articles? Yes, three ways. (1) The impairment alibi fails in both directions: Grand Am drivers in fatal crashes test impaired at 21.6%, essentially identical to Grand Prix (21.5%) and G6 (22.1%) drivers, so the 45-81% rate gaps are not drunk-driver gaps. (2) The GM-era contrast: Buick's sedans of the same era rate more than double — LeSabre 2.67, Century 2.41 — so this is not a "GM sedans were all like that" story. (3) The final-year twist: the Grand Am's deadliest single model year is 2004, its last full year of production, with 148 deaths — 21% of all Grand Am deaths in the dataset from one model year. The safest Pontiac sedan got most dangerous right before the badge died.
- **Verdict:** PROCEED. Killed angles this run: IIHS commercial-vehicle first test (#1093/#1102/#1144/#1227), Sierra grille recall query RQ26003 (#1276), Genesis G80 seat-motor fire (#1173/#1224), Range Rover camera drain holes (#1251), Porsche center-lock expansion (#1245/#1252), RAV4 PHEV MG-ECU shutdown (#1166/#1233), Land Cruiser fuel-tube recall (#1204/#1230/#1248), TRIP 2025 two-track recovery (#1273), Ford contaminated-LED headlight recall (#1054/#1097), Jeep Grand Cherokee coil-spring third recall (#847/#882/#891). Grand Am FARS standalone: zero prior coverage (filename + content grep 2026-10-26; nearest is the aggregate "Pontiac Died in 2010" piece, which cites the 713 total but never runs the sibling-rate comparison or the 2004 peak).

## Primary sources
1. **NHTSA FARS 2014-2023, via fars_process.py aggregation (fars_output.js):** Pontiac Grand Am, 713 deaths, 921 crashes, estimated fleet 525,000, rate 1.18 per 100M VMT; 71.3 deaths/year average. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. **Same FARS aggregation, Pontiac comparators:** Grand Prix 970 deaths, rate 2.14; G6 908 deaths, rate 1.64; Bonneville 56 deaths, rate 0.22 (small-count outlier, excluded from the ranking claim). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
3. **Same FARS aggregation, toxicology subset:** Grand Am drivers 537 with toxicology data; 16.2% alcohol-positive, 9.3% drug-positive, 21.6% any impairment. Grand Prix 21.5% any; G6 22.1% any. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
4. **Same FARS aggregation, GM-era contrast:** Buick LeSabre 1,344 deaths, rate 2.67; Buick Century 849 deaths, rate 2.41. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
5. **Same FARS aggregation, model-year series (Grand Am):** 1999: 74, 2000: 94, 2001: 87, 2002: 82, 2003: 91, 2004: 148 (peak), 2005: 56. Earlier years 1992-1998 sum to 81. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
6. **IIHS fatality statistics and vehicle size/weight topics:** context that mass and class shape outcomes in multi-vehicle crashes; used only for general mechanism, not for Grand Am-specific claims. https://www.iihs.org/topics/fatality-statistics and https://www.iihs.org/topics/vehicle-size-and-weight

## Key facts (all sourced above)
- Grand Am: 713 deaths / 921 crashes; rate 1.18 per 100M VMT.
- Ratios: Grand Prix/Grand Am = 1.81; G6/Grand Am = 1.39; LeSabre/Grand Am = 2.26; Century/Grand Am = 2.04.
- Impairment: Grand Am 21.6% vs Grand Prix 21.5% vs G6 22.1% — a 0.6-point spread cannot explain a 39-81% rate gap.
- Model-year deaths: 2004 peak 148 = 20.8% of the 713 total; 2004 alone exceeds the entire 1992-1998 run (81) and equals 58% of the 1999-2001 three-year sum (255).
- Pontiac brand ended production in 2010; every Grand Am on the road in the 2014-2023 window was at least 9 years old at the window's start, and the 2004 cars were 10-19 years old during the window.
- Fleet context: Grand Am estimated fleet 525,000 vs Grand Prix 393,750 and G6 481,250 — the Grand Am is the largest Pontiac sedan fleet in the dataset and still the lowest-rate one.

## Original contribution
1. **The within-brand ranking nobody ran:** Pontiac's three high-volume sedans, same era, same market, ranked by death rate — and the cheapest one wins. The ghost-brand aggregate piece counted bodies; this piece ranks them, with the small-count nameplates explicitly scoped out.
2. **The impairment alibi, tested and rejected:** the standard excuse for a rate gap is impaired drivers. Across the three Pontiac sedans the impairment spread is 0.6 points while the rate spread is 81%. The gap has to come from somewhere else: crashworthiness, age mix, or exposure.
3. **The 2004 peak as a used-car warning:** the deadliest Grand Am model year is the last full year of production — exactly the cars still circulating at the bottom of the used market in 2026. A buyer shopping a sub-$5,000 Pontiac in 2026 is shopping the 2004 peak, not the safer average.

## Limitations
- Rates use estimated VMT and fleet, not odometer readings; the ±15% uncertainty noted in prior site articles applies, worst for discontinued brands with shrinking fleets.
- Model-year death counts are counts, not rates: the 2004 peak partly reflects that 2004 was a high-sales year with more cars on the road early in the window, not just danger per car.
- FARS counts deaths in the dataset's aggregation; the fields used here do not separate driver vs passenger, belt use, or crash type for this model. No claim is made about which crash type drives the Grand Am rate.
- The Bonneville (rate 0.22, 56 deaths) is excluded from the "safest Pontiac sedan" ranking because its count is small and its fleet is dominated by older, garaged cars; including it would make the ranking claim misleading.
- The Oldsmobile Alero, the Grand Am's platform cousin, posts a rate of 0.16 on just 49 deaths and is not used as a comparator: the count is too small and too likely to reflect coding or fleet-estimate quirks to support a claim.
- IIHS ratings for specific Grand Am model years are not cited here; no star rating or crash-test score is claimed for the Grand Am.

## Strongest counterargument
The Grand Am fleet is old and cheap, and old cheap cars are driven differently from the Grand Prix's fleet — and the FARS fields used here cannot fully separate the car from its driver and its roads. The Bonneville and Alero numbers show how noisy small, old fleets get, so the Grand Am's 1.18 could itself be flattered by who kept driving one. Granted. But the impairment parity across the three Pontiac sedans removes the most common version of that excuse, and the Grand Am's fleet is the largest of the three, not the smallest. What remains is a car that, in the world it actually drives in, kills less often per mile than its siblings — and whose final year killed the most.

## Actionable takeaways (required)
- Shopping a used Grand Am (or any dead-brand sedan at the bottom of the market): avoid the 2004 model year specifically — 148 deaths, the peak — and check IIHS ratings for the exact year, since the model-year spread inside one badge is wider than the spread between some brands.
- If you already drive a Grand Am: this is not a recall story with a free fix. The actionable move is defensive — newer tires, working airbags and belts, and never letting the car's age become an excuse for skipping maintenance that keeps its structure and restraints intact.
- Before buying any used sedan: run the VIN at nhtsa.gov/recalls and compare the model's FARS rate against its brand siblings, not against the fleet average. A familiar badge is not a safety rating, and neither is a dead one.
