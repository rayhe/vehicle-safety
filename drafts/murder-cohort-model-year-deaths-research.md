# Research: The Murder Cohort — 6 Model Years, 59,284 Deaths

## Angle
Model year 2000-2005 vehicles account for 31.7% of all deaths in the FARS 2014-2023 dataset despite being just 6 production years out of 40+. These vehicles were 9-23 years old during the study period: cheap, ubiquitous, lacking ESC and modern crash structures. As they finally age off the road, America's traffic deaths are declining.

## Self-Critique Gate
- **Proposal:** Cross-tabulate FARS deaths by model year to reveal the "murder cohort" — a specific 6-year production window that dominates fatalities.
- **Challenge:** Is this just another way to say "older cars are more dangerous"? After 134 articles, is fleet age a novel angle?
- **Verdict:** PROCEED. The specific quantification — 59,284 deaths from exactly 6 model years, 31.7% of the total — is a novel calculation nobody has run. The class-level breakdown (pickups -63% but sports cars +4%) adds surprise. The connection to the recent 2024 decline below 40K gives it timeliness.

## Kill Test
✅ Genuinely newsworthy: quantifies the exact "generation of death" in the American fleet
✅ Novel cross-tabulation: deaths summed by model year across all vehicles
✅ Timely: NHTSA just released 2024 estimate (39,345, below 40K first time since 2020)
✅ Actionable: tells readers which vehicles to avoid on the used market

## Primary Sources (3+)

1. **FARS 2014-2023 (our dataset)** — model year death totals
   - Grand total: 187,058 deaths across all model years
   - 2000-2005 model years: 59,284 deaths (31.7%)
   - Peak: MY 2005 = 11,363 deaths; MY 2004 = 11,221
   - Source: NHTSA FARS bulk CSV via our fars_output.js

2. **IIHS ESC Effectiveness** — ESC reduces fatal single-vehicle crashes by 56%, rollovers by 77-80%
   - ESC mandate effective 2012 for all new US vehicles
   - NHTSA 2007 final rule (Federal Motor Vehicle Safety Standard No. 126)
   - Source: https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue

3. **S&P Global Mobility 2024** — US average vehicle age hit record 12.6 years
   - Passenger cars: 14.5 years average
   - 289 million vehicles in operation, 4.5% scrappage rate
   - Passenger cars dropped below 100M for first time since 1970s
   - Source: https://www.aapexshow.com/blog/average-vehicle-age/

4. **NHTSA 2024 Early Estimate** — 39,345 fatalities, -3.8% from 2023's 40,901
   - First time below 40K since 2020
   - 11th consecutive quarterly decrease
   - Source: https://www.nhtsa.gov/press-releases/nhtsa-estimates-39345-traffic-fatalities-2024

## Key Data Points

### Model Year Distribution (all vehicles, 2014-2023 FARS)
| Range | Deaths | Avg/Year | Share |
|-------|--------|----------|-------|
| 1990-1999 | 26,591 | 2,659 | 14.2% |
| 2000-2005 | 59,284 | 9,881 | 31.7% |
| 2006-2011 | 47,171 | 7,862 | 25.2% |
| 2012-2017 | 38,358 | 6,393 | 20.5% |
| 2018-2023 | 14,209 | 2,368 | 7.6% |

### By Class: 2000-2005 vs 2012-2017
| Class | 2000-2005 | 2012-2017 | Change |
|-------|-----------|-----------|--------|
| Pickup | 14,942 | 5,493 | -63% |
| Sedan | 24,134 | 20,720 | -14% |
| SUV | 15,886 | 9,195 | -42% |
| Sports Car | 1,477 | 1,534 | +4% |
| Van | 2,845 | 1,416 | -50% |

### Top 2000-2005 Killers
1. Chevy Silverado: 3,517
2. Ford F-150: 3,341
3. Honda Accord: 2,397
4. Ford Explorer: 1,852
5. Dodge RAM: 1,773
6. Chevy Trailblazer: 1,742
7. Toyota Camry: 1,734

### Generation Cliffs (biggest drops between consecutive model years)
- Chevy S-10: 2003→2004 = -89% (replaced by Colorado)
- Nissan Sentra: 2019→2020 = -83% (complete redesign)
- Chevy Tahoe: 2005→2006 = -81% (new platform)
- Chevy Malibu: 2018→2019 = -69%

### Novel Calculation: "Redesign Dividend"
If 2000-2005 vehicles had killed at the per-year rate of 2012-2017 vehicles:
- 2000-2005 actual: 59,284 / 6 years = 9,881 avg
- 2012-2017 actual: 38,358 / 6 years = 6,393 avg
- Difference: 3,488 fewer deaths per model year
- Over 6 model years: ~20,926 lives potentially saved by faster fleet turnover

## Limitations
- FARS only tracks fatal crashes, not injury crashes. Older vehicles may have higher injury-only rates that this analysis misses.
- Model year totals are affected by exposure (how many vehicles of that vintage were on the road during 2014-2023, and how many miles they drove).
- 2000-2005 vehicles had 9-23 years of exposure during the study period; 2018-2023 vehicles had 1-6 years. This exposure asymmetry inflates early model year totals.
- The "redesign dividend" calculation assumes equivalent exposure, which isn't the case. It's illustrative, not precise.

## Strongest Counterargument
The exposure asymmetry explains much of the gap. A 2003 Silverado had 10 years in the FARS 2014-2023 window to accumulate fatal crashes; a 2020 Silverado had 3 years. Even if both generations killed at identical per-VMT rates, the older one would show more deaths simply due to more years of exposure. The true per-VMT comparison — controlling for both fleet size and years in the dataset — would narrow the gap significantly. This article is measuring the cumulative damage of an aging fleet, not proving that 2000-2005 vehicles were designed to be more dangerous (though they were, due to lack of ESC and modern crash structures).

## Journalist
**Axle McScatter** — Data Visualization Editor. Perfect for this numbers-heavy, cross-tabulation piece. Kicker: **By The Numbers**.
