# Research: Sober-Driver Death Rate Ranking

## Angle
A new LendingTree analysis of FARS 2024 data (published July 27, 2026) finds that 40-47% of fatal crashes involve aggressive, careless, or inattentive driving — not impairment. Our own FARS 2014-2023 cross-tabulation reveals that **80.1% of drivers killed in fatal crashes tested negative for alcohol and drugs**. Only 19.9% were impaired. The popular narrative fixates on drunk driving, but four out of five fatal-crash drivers were sober.

Original contribution: A "sober death rate" metric that strips impairment from each vehicle's fatality rate. This isolates the death toll attributable to everything ELSE — speed, distraction, aggressive driving, vehicle design, road type. Some vehicles kill sober drivers at 4-7x the class average.

## Key Data Points

### Aggregate
- 180,728 driver deaths in FARS sample (vehicles with 150+ deaths, 2014-2023)
- 144,831 estimated sober deaths (80.1%)
- 35,897 estimated impaired deaths (19.9%)
- Overall impairment rate across all vehicles: ~20%

### Top Sober Death Rates (per 100M VMT, sober-only)
1. Hyundai Veloster: 7.05 sober_rate (total 8.54, 17.4% impaired)
2. Chevrolet Tracker: 6.84 (total 7.83, 12.7% impaired)
3. Toyota Land Cruiser: 5.71 (total 6.27, 8.9% impaired)
4. Ford Mustang: 4.70 (total 6.02, 21.9% impaired)
5. Toyota Solara: 4.08 (total 4.25, 4.1% impaired)
6. Nissan Maxima: 4.04 (total 5.11, 20.9% impaired)

### Top Sober Death Counts (raw)
1. Chevrolet Silverado: ~7,615 sober deaths
2. Ford F-150: ~7,456
3. Honda Accord: ~5,682
4. Honda Civic: ~5,216
5. Toyota Camry: ~5,113

### LendingTree Aggressive Driving Rankings (FARS 2024)
1. Arkansas: 47.2% of fatal crashes involve aggressive/careless driving
2. Louisiana: 46.2%
3. New Jersey: 45.1%
4. Hawaii: 43.3%
5. Colorado: 39.7%
- Utah: 0% (reported no such crashes)

### NHTSA Context
- 2024 FARS: 39,254 fatalities (down 3.8% from 2023)
- Rate: 1.19 per 100M VMT (lowest since 2019)
- 11 consecutive quarterly declines
- Still 20.2% above 2014 levels

## Sources
1. LendingTree analysis of NHTSA/FARS 2024 data, via Colorado Sun/Coloradoan (July 27, 2026)
2. NHTSA FARS 2014-2023 bulk data (our fars_output.js)
3. NHTSA 2024 FARS annual release (April 2026)
4. NHTSA FARS toxicology data (our fars_output.js)

## Existing Coverage Check
- sober-majority.html — EXISTS, may overlap. Need to check.
- sober-killer-index.html — EXISTS
- sober-crash-frequency-paradox.html — EXISTS
- This angle is DIFFERENT: it introduces the "sober death rate" per-vehicle metric AND ties to the brand-new LendingTree aggressive-driving study.

## Kill Test
Is this genuinely newsworthy? YES.
- Timely news hook (LendingTree study published yesterday)
- Novel metric (sober-adjusted death rate per vehicle)
- Counterintuitive finding (80% of fatal crash drivers are sober)
- Actionable (which vehicles to avoid if you're a careful sober driver)
