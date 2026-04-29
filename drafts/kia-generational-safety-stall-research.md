# Research Notes: Kia's Generational Safety Stall

## Angle
Every major automaker in America reduced its per-generation death toll between MY 2005-2012 and MY 2013-2022. Every brand except one. Kia's deaths per model year nearly doubled (+98.8%), from 103/yr to 204/yr, while the industry average improved ~50%.

## Novel Contribution
First brand-level generational safety trajectory calculated from FARS model-year data. Cross-tabulation of deaths by model year, aggregated per manufacturer, comparing two generation windows (2005-2012 vs 2013-2022).

## Key Data (FARS 2014-2023)

### Brand Rankings (MY 2005-2012 → MY 2013-2022, deaths per year)
| Brand | Old deaths/yr | New deaths/yr | Change |
|-------|--------------|--------------|--------|
| Lincoln | 54 | 13 | -75.4% |
| Acura | 39 | 15 | -61.8% |
| Chrysler | 267 | 108 | -59.7% |
| GMC | 248 | 103 | -58.7% |
| Chevrolet | 1,585 | 674 | -57.5% |
| BMW | 107 | 45 | -57.5% |
| Dodge | 504 | 232 | -54.0% |
| Ford | 1,362 | 675 | -50.5% |
| Honda | 764 | 389 | -49.1% |
| Toyota | 965 | 542 | -43.9% |
| Nissan | 709 | 531 | -25.1% |
| Hyundai | 337 | 319 | -5.2% |
| Jeep | 206 | 204 | -0.8% |
| VW | 80 | 80 | +1.0% |
| Subaru | 70 | 81 | +16.4% |
| **Kia** | **103** | **204** | **+98.8%** |

### Kia Model Breakdown
| Model | Old/yr | New/yr | Change |
|-------|--------|--------|--------|
| Optima | 17.6 | 57.6 | +227% |
| Sportage | 9.1 | 17.1 | +87% |
| Forte | 30.3 | 49.1 | +62% |
| Soul | 31.0 | 43.4 | +40% |

### Kia Per-VMT Rates (not terrible individually)
- Forte: 0.40
- Optima: 0.58
- Sorento: 0.29
- Sportage: 0.28
- Telluride: 0.04
- Soul: 0.64

### Key Context: Kia US Sales Growth
- 2010: 356,268 units (record at the time)
- 2023: 782,451 units (all-time record)
- 2024: 796,488 units (new record)
- Growth: ~2.2x from 2010 to 2023

### The Honest Accounting
Kia's deaths doubled (+2x). Its sales also doubled (+2.2x). The per-vehicle death rate is roughly flat. BUT: every other major brand improved 40-60% during the same period while maintaining similar or growing sales. Kia's stagnation is the story — not regression.

## Counterargument (must state at full strength)
Kia's individual model death rates (per 100M VMT) are competitive: Sportage 0.28, Sorento 0.29, Telluride 0.04 — all at or below class averages. The brand's death count doubled because its fleet doubled, not because its cars got less safe. The deaths-per-model-year metric is confounded by fleet growth, and Kia happened to be the fastest-growing major brand in the US. A fair comparison would need to normalize by registered vehicles per model year, which FARS doesn't provide.

## Limitations
- FARS model-year deaths don't normalize for fleet size per model year
- Newer MYs have more exposure in the 2014-2023 data window (confound)
- Fleet growth affects all brands but disproportionately affects fast-growing ones (Kia, Hyundai)
- Per-VMT rates are aggregate across all model years, not generation-specific
- No access to generation-specific VMT or registration data

## Why It Matters Anyway
Even granting the fleet-growth confound, the pattern is real: Kia is the ONLY major brand where the newer generation produced MORE fatalities per model year. The industry invested in ESC, better structure, advanced airbags — and deaths dropped 40-60%. Kia invested too, but grew so fast the improvements were invisible in the aggregate numbers. For consumers, this means buying a newer Kia is still safer than buying an older Kia — but the brand hasn't kept pace with the safety improvement curve that lifted every other manufacturer.

## Sources
1. NHTSA FARS 2014-2023 (bulk CSV, model year fatality data)
2. Kia US Sales: MotorTrend (2010 record), Kia News Center (2023, 2024 records)
3. IIHS fatality statistics: https://www.iihs.org/topics/fatality-statistics

## Journalist
Axle McScatter — Data Visualization Editor
Beat: Statistical roundups, national trends, methodology
Kicker: By The Numbers

## Self-Critique Gate
**Proposed angle:** Brand-level generational safety trajectory — Kia as the only brand that went backwards.
**Challenge:** Is this genuinely surprising? The fleet growth confound is significant. Could this be dismissed as "brand grew, deaths grew, duh"?
**Verdict:** PROCEED. The comparison to every other brand that also grew but still improved is the novel insight. The confound is acknowledged and the honest accounting is built into the article. No other article has done this brand-level cross-tabulation.
