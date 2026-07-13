# Research Notes: Self-Protective Kill Ratio

## Concept
Novel FARS cross-tabulation: deaths-per-crash ratio by vehicle model. FARS tracks both "deaths" (occupant fatalities of the subject vehicle) and "crashes" (fatal crash involvements — crashes where at least one person died). When the ratio is low, it means the vehicle's occupants survive even when the crash kills someone. That "someone" is typically in the other vehicle, or a pedestrian/cyclist.

This is effectively a measure of **self-protection at others' expense** — the physics of mass and structural rigidity playing out across 337 vehicle models and 191,193 deaths over 2014-2023.

## Key Findings

### Highest death-per-crash ratio (worst occupant protection):
- Chevrolet Cavalier: 0.857 (1225 deaths in 1429 crashes)
- Dodge Neon: 0.856 (602 deaths in 703 crashes)  
- Buick LeSabre: 0.823 (1344 deaths in 1633 crashes)
- Chevrolet Cobalt: 0.808 (1540 deaths in 1907 crashes) — GM ignition switch recall vehicle
- Chevrolet HHR: 0.801 (534 deaths in 667 crashes)

Pattern: small, light sedans. Many discontinued. The Cavalier/Cobalt lineage is notable — GM knew about the ignition switch defect for years.

### Lowest death-per-crash ratio (best occupant protection):
- Ram 2500: 0.205 (153 deaths in 748 crashes)
- Ford Transit: 0.308 (178 deaths in 577 crashes)
- Ram 1500: 0.341 (714 deaths in 2095 crashes)
- GMC Acadia: 0.343 (197 deaths in 575 crashes)
- Toyota Land Cruiser: 0.347 (343 deaths in 988 crashes)

Pattern: heavy trucks, full-size SUVs, commercial vans. The Ram 2500 is in a fatal crash 748 times and its occupants die only 153 times — meaning in ~80% of those crashes, someone else died.

### Class breakdown:
- Sports Cars: 0.682 deaths/crash
- Sedans: 0.645 deaths/crash
- SUVs: 0.524 deaths/crash
- Vans: 0.514 deaths/crash
- Pickups: 0.489 deaths/crash

Sedan-to-pickup ratio: 1.32x (32% more likely to die in your own car if it's a sedan vs a pickup)

## Novel Analysis
Existing IIHS research covers vehicle "aggressivity" — the tendency to kill occupants in partner vehicles. But that research uses different methodology (matched-pair crashes) and isn't available at this per-model granularity from public data. This FARS cross-tabulation is new.

The counterargument: fleet age. Many high-ratio vehicles (Cavalier, Neon, LeSabre) are old and lack modern safety features. The low-ratio vehicles (Ram 2500, Transit) are often newer. But this doesn't fully explain it — the Honda Accord (0.644) and Toyota Camry (0.593) are modern, ubiquitous sedans that still have substantially higher ratios than similarly-aged pickups.

The uncomfortable conclusion: America's vehicle safety "improvement" is partly a weight arms race. If everyone drives a 6,000-lb truck, the individual driver is safer — but the system-level death toll doesn't decrease, it just shifts to whoever is lightest. This is a tragedy of the commons playing out at 45 mph.

## Sources
1. NHTSA FARS 2014-2023 (primary data)
2. IIHS vehicle size and weight research: https://www.iihs.org/topics/vehicle-size-and-weight
3. GM ignition switch recalls: https://en.wikipedia.org/wiki/General_Motors_ignition_switch_recalls
4. NHTSA FARS database: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars

## Angle
"The Kill Ratio" — Vin Wreckage existential dread piece. The moral question: when your safety comes at someone else's cost, is it really safety?

## Journalist
Vin Wreckage — Existential Dread Columnist
