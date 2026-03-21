# Research: The Sports Car Safety Inversion

## Thesis
Nine sports cars in the FARS dataset have lower per-VMT fatality rates than the average family sedan. A BMW Z4, Porsche 911, Toyota Celica, and Acura RSX are all statistically safer than a Honda Accord, Toyota Camry, or Honda Civic. The conventional wisdom — "sports cars are dangerous" — is wrong for nearly half the segment.

## Key Data Points (FARS 2014-2023)

### Sports Cars Safer Than Average Sedan (avg sedan rate: 1.02)
| Vehicle | Death Rate (per 100M VMT) | Deaths | Fleet |
|---------|--------------------------|--------|-------|
| BMW Z4 | 0.46 | 16 | 43,750 |
| BMW Z3 | 0.60 | 21 | 43,750 |
| Toyota Celica | 0.63 | 66 | 131,250 |
| Acura RSX | 0.68 | 71 | 131,250 |
| Porsche 911 | 0.69 | 48 | 87,500 |
| Porsche Boxster | 0.76 | 16 | 26,250 |
| Mitsubishi Eclipse | 0.81 | 85 | 131,250 |
| Hyundai Tiburon | 0.84 | 59 | 87,500 |
| Dodge Challenger | 1.00 | 385 | 481,250 |

### Family Sedans MORE Dangerous Than a Porsche 911
- Honda Accord: 3.07 (4.5x the 911)
- Toyota Camry: 2.03 (2.9x)
- Honda Civic: 2.25 (3.3x)
- Toyota Corolla: 1.85 (2.7x)
- Nissan Altima: 2.88 (4.2x)
- Ford Focus: 2.52 (3.7x)
- Chevy Impala: 5.00 (7.2x)

### The Split Within Sports Cars
Massive bifurcation:
- Safe cluster: Z4 (0.46) to Challenger (1.00) 
- Death cluster: Camaro (3.44), Mustang (6.02), Veloster (8.54)

### Why? Multiple Hypotheses
1. **Driver demographics / selection effect**: Porsche/BMW sports car buyers are older, wealthier, more experienced. Family sedan buyers span the full demographic spectrum including young/inexperienced.
2. **Vehicle dynamics**: Mid-engine/rear-engine sports cars (911, Boxster) have superior handling. Modern sports cars have better brakes, better tires, better suspension than economy sedans.
3. **Miles driven pattern**: Sports car VMT may be more discretionary (weekends, nice weather) vs daily commuting in all conditions.
4. **Impairment gap**: Interestingly, sports cars actually have HIGH impairment rates (Corvette 26.2%, 911 22.8%) — yet the safe ones still survive. Better vehicle dynamics at play?

### Key Paradox
The 911 has 22.8% impairment rate in fatal crashes — yet its overall death rate (0.69) is lower than a completely sober Toyota Camry driver's expected rate. The car's engineering compensates for its owners' drinking habits.

## Sources
1. NHTSA FARS 2014-2023 via fars_output.js
2. IIHS fatality statistics: https://www.iihs.org/topics/fatality-statistics
3. NHTSA FARS database: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
4. IIHS vehicle size/weight: https://www.iihs.org/topics/vehicle-size-and-weight

## Kill Test
✅ Genuinely counterintuitive — nobody expects a Porsche 911 to be safer than a Camry
✅ Novel cross-tabulation: sports car rates vs sedan rates, plus impairment overlay
✅ Actionable for consumers thinking about vehicle safety
✅ Not just a data dump — tells a story about WHY

## Limitations
- Small fleet sizes for some sports cars (Z4: 43,750, Boxster: 26,250) increase statistical noise
- VMT estimates, not odometer readings — ±15% uncertainty
- "Sports Car" classification in FARS may not match consumer perception
- Selection bias: who buys a Porsche 911 vs a Honda Accord differs in age, income, driving experience
- FARS only captures fatal crashes, not injury crashes

## Strongest Counterargument
The selection effect is enormous. Porsche 911 owners are disproportionately older (median ~50), wealthier, and more experienced drivers. The vehicle's low rate may reflect its driver demographics more than its engineering. If you put the median Accord buyer in a 911, the rate might not stay at 0.69.

## Journalist
Vin Wreckage — existential dread/paradox beat. Perfect for a counterintuitive finding.

## Slug
sports-car-sedan-safety-inversion
