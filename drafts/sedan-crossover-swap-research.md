# Research: The Sedan-to-Crossover Swap That Would Save 3,925 Lives Per Year

## Thesis
If every driver of America's 11 best-selling sedans had bought their same brand's equivalent crossover SUV instead, **39,253 people would still be alive** over the 2014-2023 FARS period. That's 3,925 per year — more than 10% of annual traffic fatalities.

## Novel Contribution
A counterfactual "swap analysis" — holding manufacturer constant, comparing occupant death rates when sedan VMT is re-allocated to the equivalent crossover. This isolates the vehicle-class effect while controlling for brand engineering quality.

## Key Data Points

### Individual Swaps (10-year lives saved)
| Sedan | → Crossover | Rate Change | Lives Saved |
|-------|-------------|-------------|-------------|
| Honda Civic (2.25) | → HR-V (0.13) | 17.3x safer | 6,174 |
| Honda Accord (3.07) | → CR-V (0.53) | 5.8x safer | 5,875 |
| Toyota Camry (2.03) | → RAV4 (0.19) | 10.7x safer | 5,735 |
| Nissan Altima (2.88) | → Rogue (0.35) | 8.2x safer | 4,206 |
| Toyota Corolla (1.85) | → C-HR (0.40) | 4.6x safer | 3,878 |
| Chevy Impala (5.00) | → Traverse (0.20) | 25x safer | 3,623 |
| Chevy Malibu (2.03) | → Equinox (0.36) | 5.6x safer | 2,849 |
| Ford Focus (2.52) | → Escape (0.95) | 2.7x safer | 1,899 |
| Hyundai Elantra (1.50) | → Tucson (0.34) | 4.4x safer | 1,860 |
| Nissan Sentra (2.13) | → Kicks (0.69) | 3.1x safer | 1,738 |
| Hyundai Sonata (1.56) | → Santa Fe (0.39) | 4.0x safer | 1,416 |
| **TOTAL** | | | **39,253** |

### Fleet-level counterfactuals
- If every car in America were a RAV4 (rate 0.19): 151,247 lives saved (79% reduction)
- If every car were a CX-5 (rate 0.12): 165,964 lives saved (87% reduction)
- Overall weighted fleet rate: 0.91 per 100M VMT

### The "safety multiplier" by class
- Sports Car rate: 26.88 → 29x more dangerous than the safest class
- Sedan rate: 13.92 → 15x more dangerous
- Pickup rate: 8.86
- Van rate: 6.54
- SUV rate: 5.47 → the safest class overall

## Sources
1. NHTSA FARS 2014-2023 — all fatality data
2. IIHS — vehicle size and weight effects on crash survivability
3. IIHS — ESC effectiveness studies
4. NHTS — annual VMT estimates by vehicle type

## Strongest Counterargument
The FARS data tracks occupant deaths in the subject vehicle. It does NOT account for:
- **Aggressor effect**: Heavier crossovers transfer more crash energy to other road users. Mass incompatibility is a documented IIHS finding.
- **Pedestrian deaths**: Taller front-end geometry of crossovers kills pedestrians at higher rates than sedan front-ends. IIHS found vehicles with hood heights >40 inches are ~45% more likely to kill pedestrians.
- **Selection bias**: Crossover buyers may be systematically different from sedan buyers — older, suburban, family-oriented, less impairment-prone. The vehicle difference may partly be a driver difference.
- **Fleet age**: Many of these sedans are older designs. The Impala's 5.0 rate reflects a platform sold from 2006-2020. Modern sedans may be safer.

If the occupant safety gain is offset by increased pedestrian and other-vehicle deaths, the net lives saved could be much lower.

## Limitations
- VMT estimates are modeled, not measured (±15% uncertainty for low-volume models)
- FARS only captures fatal crashes (fraction of ~6.7M total annual crashes)
- Injury severity below fatal is not captured
- No multi-vehicle crash attribution (who killed whom)
- "Same brand crossover" assumes comparable use patterns, which may not hold

## Methodology
For each sedan-crossover pair within the same manufacturer:
1. Take the sedan's 10-year VMT (annual VMT × 10)
2. Compute hypothetical deaths if that VMT were driven at the crossover's death rate
3. Subtract from actual sedan deaths
4. Sum across all 11 pairs

Formula: lives_saved = sedan_deaths - (crossover_rate × sedan_vmt / 10)

## Kill Test
**Is this genuinely surprising after 104 articles?**
YES. We've covered the sedan death penalty in general terms, but nobody has computed the specific counterfactual: what if sedan buyers bought their brand's crossover instead? The answer — 39,253 lives in a decade — is shocking and actionable. It's not a data dump; it's a what-if with a precise dollar-and-cents (life-and-death) answer.

## Journalist
**Clara Rollover** — Consumer Safety Advocate. This is squarely in her beat: car-buying guidance with genuine anger on behalf of consumers. Last appeared recently enough to rotate.

## Slug
`crossover-swap-lives-saved`
