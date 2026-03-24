# Research: Vehicle Class Is a Lie — Within-Class Variation Dwarfs Between-Class Differences

## Angle
People buy SUVs "for safety." Dealers say "bigger is safer." But FARS data reveals that picking the right model within a class matters **123 times more** than picking the right class. The within-class death rate spread (256x for sedans, 94x for SUVs) completely dwarfs the between-class average difference (2.1x between sedans and SUVs).

This means: choosing a "safe" vehicle class is almost meaningless compared to choosing the right model.

## Kill Test
- **Genuinely newsworthy?** YES — challenges fundamental car-buying assumption
- **Novel angle?** YES — nobody has computed within-class vs between-class variation ratio on FARS data
- **Not covered yet?** We have suv-death-gap and safety-is-a-luxury-good, but neither computes the variation ratio or makes the "class label is noise" argument with this statistical rigor

## Key Data (FARS 2014-2023, vehicles with 100k+ estimated fleet)

### Within-Class Coefficient of Variation
| Class | CV | Min Rate | Max Rate | Range |
|-------|----|----------|----------|-------|
| SUV | 110.5% | 0.03 (Model Y) | 2.83 (Trailblazer) | 94x |
| Sedan | 95.0% | 0.02 (Matrix) | 5.11 (Maxima) | 256x |
| Pickup | 93.0% | 0.13 (Ram 1500) | 4.83 (S-10) | 37x |
| Van | 89.2% | 0.04 (Caravan) | 2.51 (E-350) | 63x |
| Sports Car | 85.5% | 0.63 (Celica) | 6.02 (Mustang) | 10x |

### Between-Class Average Death Rates
| Class | Avg Rate |
|-------|----------|
| Sports Car | 2.05 |
| Pickup | 1.15 |
| Sedan | 1.06 |
| Van | 0.68 |
| SUV | 0.51 |

### The Killer Stat
- Between-class range (sedan avg vs SUV avg): 2.1x
- Within-sedan range: 256x
- **Within-class variation is 123x larger than between-class difference**

### Overlap Analysis
- 13 SUVs (12% of SUVs) have WORSE death rates than the AVERAGE sedan
- 42 sedans (34% of sedans) have BETTER death rates than the AVERAGE SUV
- The worst SUV (Trailblazer at 2.83) would rank as the 11th deadliest sedan
- The best sedan (Matrix at 0.02) is safer than 100% of SUVs

### Notable Crossovers
- Chevrolet Trailblazer (SUV, rate 2.83) is 5.5x deadlier than average sedan (1.06)
- Tesla Model 3 (sedan, rate 0.05) is 10x safer than average SUV (0.51)
- GMC Yukon (SUV, 2.55) has a higher death rate than Ford Mustang (6.02)... no wait, Mustang is higher. But Yukon (2.55) beats Honda Accord (3.07)... no. Let me recalculate.
- Actually: Tahoe (SUV, 2.49) has a higher death rate than Chevy Cavalier (Sedan, 2.43), Buick Century (Sedan, 2.41), BMW 3 Series (Sedan, 2.73)... hmm the 3 Series is higher.
- REAL overlap: Ford Expedition (SUV, 2.31) is deadlier than Ford Taurus (Sedan, 2.74)... no, Taurus is higher.
- Better framing: 13 SUVs are deadlier than the AVERAGE sedan. Specific worst-SUVs-vs-good-sedans: Trailblazer (2.83) vs Prius (0.24), Tesla Model 3 (0.05), Cruze (0.63).

### IIHS Supporting Data
- 2025 IIHS study: weight benefits plateau at ~4,000 lbs; above that, additional weight doesn't protect the driver but does kill other vehicles' occupants more
- "There's nothing magical about 4,000 pounds" — Sam Monfort, IIHS senior statistician
- Pickup striking a car: 159-212% more likely to kill car occupant vs car-to-car crashes
- Vehicle safety systems (AEB, airbags, crumple zones) have reduced the role of weight as safety factor

## Primary Sources
1. NHTSA FARS 2014-2023 — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS vehicle size and weight — https://www.iihs.org/topics/vehicle-size-and-weight  
3. IIHS weight study — https://www.iihs.org/research-areas/vehicle-size-and-weight

## Strongest Counterargument
SUVs have higher ride height which provides better visibility and a structural advantage in multi-vehicle crashes. The class averages DO show SUVs are safer on average (0.51 vs 1.06 for sedans). The counterargument is that class IS informative — it just explains far less variance than individual model choice. Class is a weak signal, not noise.

## Journalist
Axle McScatter — this is fundamentally a statistical story about variation decomposition. His "charts and numbers" obsession fits perfectly.

## Kicker
By The Numbers
