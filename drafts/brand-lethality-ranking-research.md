# Research: Brand Crash Lethality Ranking

## Angle
Rank every major automaker not by total deaths (reflects fleet size) or deaths per VMT (reflects driving behavior), but by **deaths per crash** — the metric that isolates how survivable a crash is in that brand's vehicles.

## Key Data

### Brand-Level Lethality (deaths/crashes, 1000+ crashes minimum)
1. Pontiac: 0.7379 (73.8% of crashes kill)
2. Mercury: 0.7250 (72.5%)
3. Buick: 0.7209 (72.1%)
4. Infiniti: 0.6769 (67.7%)
5. Mitsubishi: 0.6273 (62.7%)
6. Honda: 0.6169 (61.7%)
7. Nissan: 0.6108 (61.1%)
8. Lincoln: 0.6054 (60.5%)
9. Mazda: 0.6042 (60.4%)
10. Kia: 0.5993 (59.9%)
11. Cadillac: 0.5969 (59.7%)
12. Chevrolet: 0.5884 (58.8%)
13. Subaru: 0.5750 (57.5%)
14. Hyundai: 0.5739 (57.4%)
15. Chrysler: 0.5670 (56.7%)
16. Toyota: 0.5623 (56.2%)
17. Volkswagen: 0.5538 (55.4%)
18. Ford: 0.5450 (54.5%)
19. BMW: 0.5367 (53.7%)
20. Acura: 0.5337 (53.4%)
21. Lexus: 0.5089 (50.9%)
22. Dodge: 0.5063 (50.6%)
23. GMC: 0.5061 (50.6%)
24. Jeep: 0.4962 (49.6%)
25. Mercedes-Benz: 0.4702 (47.0%)
26. Ram: 0.3049 (30.5%)

### Fleet average lethality: 0.5687 (56.9%)

### The spread: 2.42x
- Worst: Pontiac (73.8%) vs Best: Ram (30.5%)
- Among living brands: Honda (61.7%) vs Ram (30.5%) = 2.02x gap

### GM excess deaths
- 13 of 24 models with lethality >0.70 are GM
- GM high-lethality models: 2,972 excess deaths vs fleet average
- All GM brands combined: 2,128 excess deaths

## Novel Contributions
1. First brand-level crash lethality ranking in our dataset
2. Excess death calculation from above-average lethality
3. The Pontiac/Mercury ghost brand phenomenon — dead brands are the deadliest per crash
4. Honda surprise — the "safe" brand ranks 6th deadliest by crash lethality

## Counterarguments
- Fleet age is the elephant: dead brands (Pontiac, Mercury) have ONLY old cars. Old cars crumple worse. This isn't a fair fight.
- BUT: Even among living, active brands with modern fleet mixes, the gap is 2x (Honda 0.617 vs Ram 0.305)
- Vehicle class mix matters: Ram is all trucks (heavy, survivable). Honda is heavy on sedans (lighter, less survivable). Brand-level lethality partially reflects product mix.
- Crashes include all types. A brand that sells mostly pickups will have better occupant lethality simply from mass advantage in multi-vehicle crashes.

## Limitations
- FARS only captures fatal crashes, not all crashes. We're measuring deaths/FARS-involved-crashes, not deaths/all-crashes.
- Brand includes very different models (Spark to Corvette). Model-level analysis is more precise but brand-level reveals the portfolio effect.
- 2014-2023 window means the fleet age distribution varies by brand life stage.

## Sources
- NHTSA FARS 2014-2023
- FARS crash involvement and fatality counts per model
- Fleet estimates from industry sales data

## Journalist
Mia Crumplezone — forensic crash analysis. This is her wheelhouse.
