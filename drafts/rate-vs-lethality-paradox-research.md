# Research Notes: Rate vs. Lethality Paradox

## Angle
Death rate per 100M VMT is the standard vehicle safety metric. But it conflates two completely different things: how often a vehicle is INVOLVED in a fatal crash, and whether its OWN occupant dies when it is. A vehicle can have a low death rate because its drivers rarely crash — but when they DO crash, the occupant almost always dies. Conversely, a vehicle can have a high death rate because it's frequently in fatal crashes — but its own occupant often survives (because the OTHER person dies).

## Key Metric: Lethality
Lethality = own-occupant deaths / total fatal crashes involving this vehicle

This separates FREQUENCY from SEVERITY. Rate tells you frequency. Lethality tells you severity.

## Primary Data Sources
1. NHTSA FARS 2014–2023 (fars_output.js, FARS_BY_MODEL array)
2. All 252 models with 100+ fatal crashes in the dataset

## Key Findings

### The Paradox Pair: Saturn S Series vs Toyota Tundra
- Saturn S Series: rate 0.84, lethality 0.924 (170/184 crashes killed its own occupant)
- Toyota Tundra: rate 0.93, lethality 0.415 (1,223/2,947 — its own occupant died only 42% of the time)
- Same neighborhood by rate. Completely different survival odds.

### Lethality by Vehicle Class
| Class | Avg Rate | Avg Lethality | N |
|-------|----------|---------------|---|
| Sedan | 1.28 | 0.654 | 106 |
| Sports Car | 3.00 | 0.723 | 9 |
| Pickup | 1.14 | 0.535 | 25 |
| SUV | 0.78 | 0.513 | 92 |
| Van | 0.79 | 0.538 | 20 |

### Lethality Range
- Lowest: Ram 2500 at 0.205 (80% of the time, the OTHER person dies)
- Highest: Saturn S Series at 0.924 (92% of the time, the Saturn occupant dies)
- 4.5x spread

### More "Same Rate, Different Fate" Pairs
- Chevy Aveo (rate 0.69, lethality 0.890) vs Dodge Durango (rate 0.61, lethality 0.430): gap 0.460
- Saturn ION (rate 0.55, lethality 0.807) vs Ford F-250 (rate 0.43, lethality 0.364): gap 0.443
- Chevy Cavalier (rate 2.43, lethality 0.857) vs Ford E-350 (rate 2.51, lethality 0.410): gap 0.447

### Low-Rate, High-Lethality "Trap" Vehicles
Vehicles that LOOK safe by rate but are coffins when they crash:
- Buick Park Avenue: rate 0.48, lethality 0.882
- Mercury Milan: rate 0.41, lethality 0.820
- Saturn ION: rate 0.55, lethality 0.807
- Mercury Sable: rate 0.32, lethality 0.778
- Tesla Model S: rate 0.50, lethality 0.746

### High-Rate, Low-Lethality "Aggressor" Vehicles
Vehicles that LOOK dangerous by rate but mostly kill others:
- Toyota Land Cruiser: rate 6.27, lethality 0.347
- Chevy Tahoe: rate 2.49, lethality 0.510
- GMC Yukon: rate 2.55, lethality 0.476
- Ford Expedition: rate 2.31, lethality 0.574

## Why This Happens
Mass physics: in a collision between a 2,200-lb Saturn and a 5,800-lb Tundra, Newton's laws don't care about safety ratings. The lighter vehicle absorbs more energy. Small sedans driven by careful drivers → low crash frequency → low rate. But when they DO crash, it's a death sentence because the structure can't protect them.

## Original Contribution
Cross-tabulation of deaths/crashes to derive per-model lethality as a distinct metric from death rate. Nobody publishes this. IIHS publishes rates. NHTSA publishes total deaths. Nobody computes the conditional probability that when YOUR car is in a fatal crash, YOU die.

## Limitations
- FARS only captures fatal crashes (at least one death). Can't compute lethality for all crashes.
- "Deaths" counted per vehicle involvement — multi-fatality crashes counted differently
- Old/discontinued models dominate extremes (Saturn, Mercury, Oldsmobile) — survivorship bias in the dataset
- Fleet estimates introduce ±15% uncertainty for low-volume models
- Doesn't control for driver age, road type, or speed

## Strongest Counterargument
Many high-lethality vehicles are discontinued models from a less-safe era (Saturn, Mercury, Oldsmobile). Their high lethality may reflect 15-year-old crash structures, not an inherent physics paradox. Modern small cars (Civic, Corolla) may not show the same pattern because of crashworthiness improvements.

## Actionable
When shopping for a car, don't just check the death rate. Ask: when this vehicle IS in a crash, does it protect ME or does it protect the other person? IIHS vehicle-size-and-weight research confirms mass is the single strongest predictor of crash survival. A "safe" death rate can mask a vehicle that's fundamentally unable to protect you in the crashes that matter.
