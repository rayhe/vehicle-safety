# Research: Excess Lethality vs Class Benchmark

## Angle
Every vehicle class has an average "lethality ratio" — the percentage of FARS crashes that result in occupant death. This varies dramatically by class:
- Sports Car: 0.682 (68.2% of crashes are lethal)
- Sedan: 0.645
- SUV: 0.524
- Van: 0.514
- Pickup: 0.489

**Original contribution:** Computing EXPECTED deaths for each vehicle (its crash count × its class average lethality), then comparing to ACTUAL deaths. The difference is the vehicle's "excess death" count — lives that would have been saved (or lost) if the vehicle had simply matched its class average.

## Key Findings

### Worst Excess (more lethal than class average, min 100 crashes)

**By absolute excess deaths:**
| Vehicle | Excess Deaths | Excess % | Actual | Expected | Crashes | Class |
|---------|--------------|----------|--------|----------|---------|-------|
| Ford Ranger | +902 | +41.2% | 3,089 | 2,187 | 4,476 | Pickup |
| Chevrolet Trailblazer | +583 | +30.9% | 2,473 | 1,890 | 3,604 | SUV |
| Chevrolet S-10 | +504 | +54.5% | 1,427 | 923 | 1,890 | Pickup |
| Chevrolet Cobalt | +310 | +25.2% | 1,540 | 1,230 | 1,907 | Sedan |
| Chevrolet Cavalier | +303 | +32.9% | 1,225 | 922 | 1,429 | Sedan |

**By percentage excess (how much MORE lethal than class):**
| Vehicle | Excess % | Excess Deaths | Crashes | Class |
|---------|----------|--------------|---------|-------|
| GMC Sonoma | +62.9% | +146 | Pickup |
| Mazda B-Series | +57.8% | +33 | Pickup |
| Chevrolet S-10 | +54.5% | +504 | Pickup |
| Saturn S Series | +43.2% | +51 | Sedan |
| Ford Ranger | +41.2% | +902 | Pickup |
| Nissan Kicks | +40.8% | +98 | SUV |

### Most Protective (fewer deaths than class average)

| Vehicle | Deaths Saved | Deficit % | Actual | Expected | Crashes | Class |
|---------|-------------|-----------|--------|----------|---------|-------|
| Ford F-150 | -610 | -6.2% | 9,194 | 9,804 | 20,066 | Pickup |
| Toyota Camry | -556 | -8.1% | 6,328 | 6,884 | 10,672 | Sedan |
| Dodge RAM | -533 | -10.8% | 4,407 | 4,940 | 10,109 | Pickup |
| Ford Fusion | -373 | -14.7% | 2,168 | 2,541 | 3,938 | Sedan |
| Ram 2500 | -212 | -58.1% | 153 | 365 | 748 | Pickup |

**By percentage deficit (how much MORE survivable than class):**
| Vehicle | Deficit % | Deaths Saved | Class |
|---------|-----------|-------------|-------|
| Ram 2500 | -58.1% | -212 | Pickup |
| Dodge Charger | -27.8% | -276 | Sedan |
| Ford Fiesta | -26.6% | -186 | Sedan |
| Ford F-250 | -25.6% | -312 | Pickup |
| Chrysler 300 | -22.8% | -221 | Sedan |

## Surprising Findings
1. **Compact pickups are death traps relative to their class.** Sonoma (+62.9%), S-10 (+54.5%), Ranger (+41.2%), Dakota (+25.4%). The entire compact pickup segment is dramatically more lethal per crash than full-size trucks.
2. **The Ford Fiesta — a subcompact — is 26.6% MORE survivable than the average sedan.** Defies the size=safety assumption.
3. **The F-150 — often blamed for pedestrian deaths — actually saves 610 occupant lives** vs class average.
4. **The Dodge Charger is 27.8% more survivable than the average sedan.** Despite being driven fast and hard.
5. **The Nissan Kicks — a modern crossover — is 40.8% MORE lethal than the SUV average.** Crossover≠SUV safety.

## Methodology
- FARS 2014-2023 data
- Lethality = deaths ÷ crashes per vehicle
- Expected deaths = crashes × class average lethality
- Excess deaths = actual deaths - expected deaths
- Minimum threshold: 100 crashes (statistical significance)
- Class averages computed from all vehicles in the class

## Limitations
- FARS only captures fatal crashes — a vehicle with few fatal crashes but many injury crashes would look "safe" here
- Class assignments may group dissimilar vehicles
- Expected deaths assume all vehicles in a class SHOULD have the same lethality — but age, weight, design generation all vary within class
- Fleet-weighted averages would be more precise but data available doesn't support per-model weighting

## Counterargument
The strongest counterargument: fleet AGE explains much of this. The Sonoma, S-10, and Ranger are old designs (discontinued 2004, 2003, 2012). Of course they're more lethal than the class average — the class includes modern trucks with side airbags and ESC. This isn't a vehicle-specific indictment; it's a fleet-age proxy. Counter-counter: Fleet age IS the point. Old vehicles disproportionately on the road are killing people at rates far above what modern engineering makes possible.

## Journalist
Axle McScatter — data viz editor. "I ran the numbers. Then I ran them again."

## Kicker
By The Numbers

## Sources
1. NHTSA FARS 2014-2023
2. Class average lethality computed from FARS_BY_MODEL dataset
