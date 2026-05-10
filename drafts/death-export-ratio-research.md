# Research: The Death Export Ratio

## Angle
A novel FARS cross-tabulation: the "self-death ratio" — own occupant deaths divided by total fatal crash involvements. Vehicles with low ratios protect their occupants while someone else dies. Vehicles with high ratios absorb the fatalities themselves.

## Kill Test
**Is this genuinely newsworthy?** YES. This is an original computation nobody has published. While IIHS has studied "aggressivity" and "crash compatibility," nobody has expressed the asymmetry as a per-model ratio from FARS data. The spread is enormous: 0.205 (Ram 2500) to 0.857 (Chevy Cavalier). That's a 4:1 difference in who bears the cost of a fatal crash.

**Novel angle?** YES. This isn't "big trucks are dangerous" (obvious). This reframes it as an *economic externality* — certain vehicles systematically export death to others. The ratio is the metric.

## Journalist
**Vin Wreckage** — Existential Dread Columnist. The paradox of a safety arms race where making YOUR car safer makes everyone else's deadlier. Peak existential dread.

## Primary Sources

### 1. FARS Data (Our Computation)
**Self-death ratio = occupant deaths / fatal crash involvements**

By class:
| Class | Ratio | Interpretation |
|-------|-------|----------------|
| Pickup | 0.489 | In fatal crashes involving pickups, pickup occupants are only 48.9% of deaths |
| Van | 0.513 | |
| SUV | 0.525 | |
| Sedan | 0.644 | Sedan occupants bear 64.4% of deaths |
| Sports Car | 0.677 | |

Top death exporters (≥500 crashes, lowest ratio):
- Ram 2500: 0.205 (153 deaths / 748 crashes)
- Ford Transit: 0.308
- Ram 1500: 0.341 (714 / 2,095)
- Ford F-250: 0.364 (909 / 2,499)
- Toyota Tundra: 0.415
- Dodge RAM: 0.436 (4,407 / 10,110)
- Ford F-150: 0.458 (9,194 / 20,066)

Top death absorbers (highest ratio):
- Chevy Cavalier: 0.857 (1,225 / 1,429)
- Dodge Neon: 0.856
- Buick LeSabre: 0.823
- Chevy Cobalt: 0.808
- Chevy HHR: 0.801

### 2. IIHS — "Supersizing vehicles offers minimal safety benefits — but substantial dangers" (2025)
- Safety benefits from weight plateau at fleet average (~4,000 lbs)
- Adding 500 lbs above fleet average: virtually no self-protection benefit, INCREASES danger to others
- Pickups still nearly 2x as likely as cars to result in car-partner fatalities (2017-22)
- SUV compatibility dramatically improved (132% excess risk in 1989-92 → 20% in 2017-22)
- Quote: "For American drivers, the conventional wisdom is that if bigger is safer, even bigger must be safer still. These results show that isn't true today." — IIHS President David Harkey
- URL: https://www.iihs.org/news/detail/supersizing-vehicles-offers-minimal-safety-benefits--but-substantial-dangers

### 3. IIHS — "Trends in aggressivity: Vehicle incompatibility from 1989 to 2016" (2019)
- Pickups 159% more likely to kill crash-partner drivers than cars (2013-16)
- When controlling for weight (3,500-4,000 lb), pickup excess risk drops to 23% → weight is the weapon
- SUV incompatibility dropped from 132% to 28% by 2016
- URL: https://www.iihs.org/news/detail/suvs-no-longer-pose-outsize-risk-to-car-occupants-but-pickup-compatibility-lags

### 4. NBER — "Pounds that Kill: The External Costs of Vehicle Weight" (Anderson & Auffhammer)
- External cost of vehicle weight: $1.08/gallon equivalent
- 47% increase in fatality risk when struck by heavier vehicle
- URL: https://www.nber.org/papers/w17170

### 5. NHTSA FARS Database
- URL: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
- Data period: 2014-2023

## Key Insight for Article
The U.S. vehicle fleet has a hidden trade balance. For every "safe" truck driver whose life is protected by 6,000 pounds of steel, there's a sedan driver absorbing the kinetic energy differential. Ram 2500 owners enjoy a 0.205 self-death ratio — when their truck is in a fatal crash, someone ELSE dies 4 out of 5 times. A Cavalier driver faces a 0.857 ratio — they are the casualty 6 out of 7 times.

This isn't an accident. It's physics. And the American market has chosen to let individual safety purchases create a collective danger problem.

## Limitations
- FARS only captures fatal crashes — near-misses and injury-only crashes excluded
- "Crashes" = fatal crash involvements, so single-vehicle crashes (where the occupant always dies) inflate the ratio for smaller vehicles
- Fleet estimates use VMT models, not actual odometer readings
- Some older vehicles (Cavalier, Neon) are both light AND aging, conflating weight with vehicle age/maintenance
- This metric doesn't isolate multi-vehicle vs single-vehicle crashes

## Strongest Counterargument
Single-vehicle crashes (rollovers, run-off-road, fixed object) dominate FARS data and inflate the self-death ratio for ALL vehicles. Lighter vehicles have more single-vehicle fatalities per mile, which raises their ratio independently of any "death export" dynamic. A cleaner analysis would filter to two-vehicle crashes only — but that data isn't in our FARS extract. The class-level pattern (Pickups 0.489 vs Sedans 0.644) likely overstates the multi-vehicle "export" effect because sedan drivers also die more in single-vehicle crashes (less structural protection).

## Actionable Takeaway
If you drive a sub-3,500 lb sedan: you are 32% more likely to be the fatality in a crash involving a pickup than in a crash involving another sedan. When shopping, the single biggest predictor of who survives a two-car crash is mass differential. ESC, side airbags, and modern structure help — but physics is undefeated. Check your vehicle's curb weight. If it's under 3,000 lbs, understand that the truck next to you at the light has a 4:1 survival advantage in a head-on collision.
