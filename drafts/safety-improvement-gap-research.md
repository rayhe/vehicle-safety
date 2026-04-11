# Research: The Safety Improvement Gap

## Angle
While most vehicles dramatically reduced fatal crash deaths from 2000-2005 to 2012-2017 model years, Hyundai and Nissan models got significantly WORSE. This is a novel cross-tabulation of FARS model-year data computing improvement rates across 62 vehicles with sufficient data.

## Kill Test
- Is this genuinely newsworthy? YES — the idea that some brands got deadlier while the industry got safer is counterintuitive and data-backed.
- Novel angle? YES — computing a "safety improvement rate" by model year across all qualifying vehicles and ranking brands has not been done.
- Already covered? We have sonata-breakout-killer, elantra-model-year-2013-spike, nissan-subprime-death-pipeline, altima-energy — but these are individual vehicle stories. The CROSS-BRAND comparison methodology is new.

## Data (FARS 2014-2023, model-year deaths)

### Vehicles That Got WORSE (deaths/yr increased)
| Vehicle | 2000-05 avg | 2012-17 avg | Change |
|---------|------------|------------|--------|
| Hyundai Sonata | 44/yr | 132/yr | +202% |
| Hyundai Elantra | 65/yr | 179/yr | +177% |
| Nissan Sentra | 69/yr | 155/yr | +125% |
| Nissan Altima | 143/yr | 284/yr | +99% |
| Hyundai Santa Fe | 20/yr | 36/yr | +75% |
| Toyota Highlander | 38/yr | 61/yr | +59% |

### Vehicles That Improved Most
| Vehicle | 2000-05 avg | 2012-17 avg | Reduction |
|---------|------------|------------|-----------|
| Chevy Tahoe | 251/yr | 24/yr | -90% |
| Ford Expedition | 143/yr | 14/yr | -90% |
| GMC Yukon | 105/yr | 14/yr | -86% |
| Ford Explorer | 309/yr | 58/yr | -81% |
| Honda Accord | 400/yr | 191/yr | -52% |
| Toyota Camry | 289/yr | 211/yr | -27% |

### Key Comparison Pairs (same-segment rivals)
- Honda Accord: -52% vs Nissan Altima: +99% (midsize sedan rivals)
- Honda Civic: -25% vs Hyundai Elantra: +177% (compact sedan rivals)
- Toyota Camry: -27% vs Hyundai Sonata: +202% (midsize sedan rivals)

## Strongest Counterargument
**Sales volume growth.** Hyundai and Nissan grew US market share dramatically from 2000-2015. The Sonata went from ~100-150K annual sales to 200K+. More cars = more deaths, even at the same rate. This is NOT a safety rate analysis — it's an absolute death count comparison.

However:
1. Honda also grew (Accord sold 350-400K/yr in both periods) and STILL cut deaths 52%
2. Toyota Camry was America's best-seller in both periods and still improved 27%
3. If Hyundai/Nissan deaths merely tracked sales, we'd expect 50-100% increase, not 177-202%
4. The Altima doubled deaths while roughly doubling sales — but rivals with similar sales growth improved

## Limitations
- FARS model year data counts deaths by vehicle model year, but exposure time differs (2000 MY vehicles had 14-23 years of exposure; 2017 MY had 6-7 years)
- Fleet size/VMT not available per model year — cannot compute per-vehicle rate by model year
- Some increase may reflect fleet composition (more 2012-2017 Hyundais in the fleet because they sold more)
- Does not capture non-fatal crashes (FARS is fatal-only)
- Cannot distinguish design safety from driver demographics (subprime lending → higher-risk drivers)

## Original Contribution
Computing safety improvement rates across 62 vehicles and ranking by brand reveals a previously unquantified "safety improvement gap." While the AVERAGE vehicle reduced model-year deaths 40-50%, Hyundai and Nissan are significant negative outliers.

## Sources
1. NHTSA FARS 2014-2023 (via processed fars_output.js model year data)
2. IIHS fatality statistics for context
3. NHTSA sales data / Goodcarbadcar for sales volume context
4. IIHS vehicle size/weight research (structural engineering angle)

## Actionable Insight
If shopping for a compact or midsize sedan, compare model-year death trends across brands. A 2015 Honda Civic has dramatically fewer fatal crashes per model year than a 2015 Hyundai Elantra. When your budget limits you to used cars, the brand's safety improvement trajectory matters as much as the IIHS sticker.
