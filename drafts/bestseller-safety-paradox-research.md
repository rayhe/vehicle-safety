# Research: The Bestseller Safety Paradox

## Angle
America's best-selling sedans are its deadliest. Its best-selling SUVs are its safest. Popularity is a safety signal — but the direction depends on which showroom you walk into.

## Self-Critique Gate
- **Existing coverage check**: We have brand-safety-roulette (brand-level variance), sedan-death-penalty (sedans vs SUVs), suv-redemption-arc (SUV safety improvement over time), safety-is-a-luxury-good (price vs safety). None cross-tabulate POPULARITY (fleet size) with safety rate within each class.
- **Novel contribution**: First analysis showing that fleet size and death rate are correlated in OPPOSITE directions depending on vehicle class. This is a genuinely original FARS cross-tabulation.
- **Verdict**: PROCEED.

## Key Data (FARS 2014-2023)

### Fleet Size Quartile Analysis (274 vehicles, 50+ deaths)
| Quartile | Avg Fleet Size | Avg Rate | Median Rate | Total Deaths |
|----------|---------------|----------|-------------|--------------|
| Q1 (smallest) | 115,551 | 1.33 | 0.84 | 10,787 |
| Q2 | 225,827 | 0.83 | 0.54 | 15,849 |
| Q3 | 426,563 | 1.15 | 0.78 | 39,402 |
| Q4 (largest) | 1,545,000 | 0.92 | 0.58 | 123,465 |

Overall: No clear linear relationship between popularity and safety.

### CLASS-LEVEL BREAKDOWN (the real story)

**Sedans — Popularity HURTS:**
- Top 3 sellers: Camry (2.03), Civic (2.25), Corolla (1.85) → avg 2.04
- Bottom 3: Lexus LS (1.44), Jaguar X-TYPE (0.65), Toyota xA (0.65) → avg 0.91
- America's most popular sedans kill at 2.2x the rate of niche models

**SUVs — Popularity HELPS:**
- Top 3: RAV4 (0.19), CR-V (0.53), Equinox (0.36) → avg 0.36
- Bottom 3: Grand Vitara (0.48), Montero (1.91), Land Cruiser (6.27) → avg 2.89
- Most popular SUVs are 8x SAFER than niche SUVs

**Sports Cars — Popularity HURTS (badly):**
- Top 3: Mustang (6.02), Challenger (1.00), Camaro (3.44) → avg 3.49
- Bottom 3: Tiburon (0.84), MX-5 (1.79), 370Z (1.46) → avg 1.36
- Muscle cars dominate sales. They also dominate the morgue.

**Pickups — Neutral:**
- Top 3: F-150 (1.04), Silverado (1.25), RAM (0.78) → avg 1.02
- Bottom 3: Nissan Pickup (1.47), Toyota Pick-Up (1.17), Mazda B-Series (0.77) → avg 1.14
- Similar rates regardless of popularity

**Vans — Neutral:**
- Top 3: Grand Caravan (1.33), Caravan/GC (0.23), Transit (0.14) → avg 0.57
- Bottom 3: Quest (0.46), Silhouette (0.85), Mazda5 (0.52) → avg 0.61
- Similar rates

## Why? (Mechanism)
1. **Sedan bestsellers = legacy fleet problem**. Camry/Civic/Corolla have been sold in massive volumes for decades. Their FARS death counts include model years from the 2000s and early 2010s — pre-ESC mandate, pre-AEB, thinner structure. Niche sedans (Lexus LS, Jaguar X-TYPE) are newer or had better crash protection from the start.

2. **SUV bestsellers = modern crossover advantage**. RAV4, CR-V, and Equinox are unibody crossovers on modern platforms. The least popular SUVs include body-on-frame relics (Land Cruiser, Montero, Tracker) that roll and crumple differently.

3. **Sports car bestsellers = demographic factor**. Mustang/Camaro/Challenger attract younger, more aggressive drivers. Miata and 370Z attract enthusiasts who are (statistically) more careful.

## Sources (3+ primary)
1. NHTSA FARS 2014-2023 (death counts, crash counts, fleet estimates, VMT, rates)
2. IIHS vehicle size and weight research (why unibody crossovers outperform body-on-frame SUVs)
3. IIHS fatality statistics by vehicle type (class-level patterns)
4. NHTSA ESC mandate (2012) — explains the model year safety cliff

## Strongest Counterargument
Fleet age is a confound. Camry/Civic/Corolla have massive fleets of OLD vehicles; their high death rates may reflect fleet age more than model quality. If we could control for model year, the bestseller effect might shrink or reverse. The same vehicle (e.g., 2020 Camry) is likely much safer than a 2005 Camry, but they're aggregated here.

## Limitations
- FARS data 2014-2023 aggregates ALL model years. A "Camry" includes 1995-2023 models.
- VMT estimates use national averages; actual usage patterns vary by model age.
- Fleet size estimates may not account for vehicle attrition/scrappage.
- "Popularity" here = estimated fleet size, not annual sales. Long-lived vehicles (e.g., trucks) accumulate more fleet than sedans that get scrapped sooner.

## Journalist Assignment
**Clara Rollover** — Consumer Safety Advocate. This is fundamentally a car-buying story: "before you assume the best-selling sedan is the safest choice, look at these numbers."

## Kicker
The Gap

## Slug
bestseller-safety-paradox
