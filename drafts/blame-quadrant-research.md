# Research: The Blame Quadrant — Is It the Car or the Driver?

## Kill Test
**Angle:** Cross-tabulate death rate (per 100M VMT) against impairment rate (% of fatally-crashed drivers with BAC>0 or drug-positive tox) to build a 2×2 quadrant that classifies vehicles as structural deathtraps vs behavioral deathtraps vs forgiving machines vs genuinely safe.

**Novel?** YES. FARS data is typically analyzed along a single axis — death rates OR impairment rates. Nobody has cross-tabulated them to separate "the car kills sober people" from "drunk people choose this car to die in." This is an original contribution.

**Would a reader share?** Absolutely — "find your car" factor plus genuine insight about whether your vehicle's body count is engineering or behavior.

## Sources
1. NHTSA FARS (2014-2023) — per-model fatality data, 337 models with 50+ deaths
2. NHTSA FARS toxicology — per-model impairment rates (BAC>0 or drug-positive)
3. NHTS VMT estimates — vehicle miles traveled for rate normalization
4. IIHS vehicle size/weight research — structural crashworthiness context

## Key Findings

### Methodology
- 117 models with 300+ deaths AND toxicology data
- Median death rate: 1.26 per 100M VMT
- Median impairment rate: 20.0%
- Quadrants divided at median thresholds

### Quadrant Breakdown
| Quadrant | Name | Vehicles | Deaths | Description |
|----------|------|----------|--------|-------------|
| Q1 | Behavioral Deathtrap | 39 | 67,074 | High rate + high impairment — dangerous people in dangerous cars |
| Q2 | Structural Deathtrap | 20 | 35,135 | High rate + low impairment — sober people dying in bad cars |
| Q3 | Forgiving Machine | 25 | 26,423 | Low rate + high impairment — drunk drivers, but the car survives |
| Q4 | Genuinely Safe | 33 | 40,117 | Low rate + low impairment — good cars, good behavior |

### Killer finding
- Q2 (Structural Deathtraps) have the highest sober-driver fatality rates — Toyota Camry (rate 2.03, imp 19.2%), Toyota Corolla (1.85, 19.2%), Ford Focus (2.52, 19.4%). These are the cars killing sober, law-abiding drivers.
- Q3 (Forgiving Machines) are wild — Silverado (rate 1.25, imp 20.6%), Dodge Charger (0.75, imp 22.7%), Jeep Grand Cherokee (0.51, imp 20.8%). Higher-than-average impairment, but the mass/structure protects them anyway.
- Q1 standout: Honda Accord (3.07, 20%) — 7,102 deaths. Behavioral AND structural.
- The Mustang (6.02, 21.9%) is the ultimate Q1 vehicle: extremely high rate AND impairment.

### Structural Deathtrap paradox
- Toyota Camry and Corolla — America's "safe" cars — land in Q2. Their impairment rates are below median, meaning their drivers are relatively sober. Yet they die at above-median rates. The car itself is the problem — lightweight unibody sedans in a world of 5,000-lb trucks.

### Forgiving Machine paradox
- Silverado, Sierra, Charger, Grand Cherokee — above-median impairment, but below-median death rates. Mass absorbs consequences.

### Strongest counterargument
- Impairment ≠ cause. A sober driver might swerve to avoid a drunk one and die. Vehicle age confounds: Q2 includes many older sedans. The quadrant captures correlation, not causation.

## Journalist
Rex Driverton — this is an investigation, a FARS deep dive.

## Slug
blame-quadrant
