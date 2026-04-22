# Research: The Metronome Killers

## Angle
Novel statistical analysis: Coefficient of Variation (CV) applied to per-model-year death counts in FARS data. Identifies vehicles whose fatality counts stay eerily consistent across 20+ model years, despite massive engineering improvements between generations.

## Kill Test
**Is this genuinely novel after 184 articles?** Yes. No existing article uses CV or any dispersion metric on model-year distributions. The closest are "deadliest-vintage" (peak years aggregate) and "safety-leaps" (specific improvements). This article asks: which vehicles DIDN'T improve, and why?

**Is it surprising?** Yes. The Honda CR-V improved from IIHS "Marginal" (2002) to "Good + TSP+" (2017+), yet deaths per model year barely moved. The Jeep Wrangler went from no side airbags (TJ) to full curtain airbags (JL), yet kills 31-103 per model year regardless.

## Novel Contribution
- Coefficient of Variation calculation on FARS_MODEL_YEAR data: stddev/mean of per-MY deaths
- Finding: 5 vehicles with CV < 0.35 (extremely flat kill curves) despite spanning 3+ vehicle generations
- Comparison: 5 vehicles with CV > 0.80 (dramatic improvement), showing the improvement IS possible
- The paradox: IIHS ratings improved → per-unit risk fell → but volume grew → aggregate deaths stayed flat

## Primary Data

### Metronome Killers (lowest CV)
| Vehicle | CV | Avg Deaths/MY | Range | Years | Total Deaths |
|---------|-----|---------------|-------|-------|--------------|
| Honda CR-V | 0.241 | 85 | 30-124 | 23 | 1,960 |
| Jeep Wrangler | 0.272 | 66 | 31-103 | 23 | 1,512 |
| Ford Crown Victoria | 0.275 | 53 | 23-78 | 14 | 737 |
| Honda Civic | 0.330 | 238 | 84-402 | 23 | 5,463 |
| Toyota Camry | 0.341 | 237 | 96-426 | 23 | 5,457 |

### Improved Vehicles (highest CV)
| Vehicle | CV | Avg Deaths/MY | Range | Years | Total Deaths |
|---------|-----|---------------|-------|-------|--------------|
| Chevy Tahoe | 1.018 | 101 | 12-311 | 23 | 2,316 |
| Ford Explorer | 1.017 | 137 | 13-503 | 23 | 3,144 |
| Ford Expedition | 1.001 | 62 | 5-198 | 23 | 1,421 |
| GMC Envoy | 0.930 | 77 | 6-209 | 12 | 919 |
| GMC Yukon | 0.917 | 45 | 7-136 | 23 | 1,037 |

## Methodology
- CV = σ/μ where σ is standard deviation and μ is mean of deaths across model years
- Filtered to vehicles with 10+ model years of data (1998-2020) and 500+ total deaths
- Low CV means deaths are evenly spread across model years (consistent killing)
- High CV means deaths cluster in certain model years (improvement or decline happened)

## Sources
1. NHTSA FARS 2014-2023 (per-model-year fatal crash data)
2. IIHS vehicle ratings (historical): iihs.org/ratings
3. TRB methodology appendix on NHTSA weight-fatality analysis: trb.org

## Limitations
- CV reflects death COUNTS not death RATES per unit. A vehicle selling 200K/yr in 2000 and 400K/yr in 2020 could have flat death counts even with halved per-unit risk.
- FARS captures only fatal crashes — injury rates may tell a different story.
- Model year ≠ calendar year: a 2004 MY vehicle appears in FARS data across 2014-2023 at different fleet ages.
- Low-volume model years at the tails (very old/very new) have more variance from small numbers.

## Counterargument
The strongest counter: flat CV could simply mean consistent sales volume + consistent fleet survivorship, not engineering failure. If Honda sold ~350K CR-Vs every year for 20 years, and each generation's per-unit fatality rate dropped 30%, but volume grew 30%, the aggregate death count stays flat. The engineering DID work — it just got swallowed by volume.

This IS the story. The headline implies engineering doesn't matter, but the article reveals it does — the gains just don't show up in aggregate statistics. That's the novel insight: FARS aggregate data systematically hides per-unit safety improvements for bestselling vehicles.

## Actionable Insights
- If you're shopping used: the SPECIFIC model year matters less for metronome vehicles (all years are roughly equally risky)
- For volatile vehicles (Explorer, Tahoe): avoid peak model years (2002-2005), buy the newest you can afford
- Don't assume IIHS rating improvements translate to fewer total deaths — that's a category error between individual and population risk

## Journalist
**Axle McScatter** — Data Visualization Editor. This is a methodology piece about statistical patterns in FARS data. His beat.
