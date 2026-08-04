# Research: Per-Mile Mirage — How the Denominator Reshuffles the Dead

## Angle
Every FARS safety ranking uses deaths per 100M vehicle miles traveled. This rewards high-mileage vehicles (daily commuter trucks) and punishes low-mileage vehicles (weekend sports cars). Switch to deaths per registered vehicle and the ranking reshuffles dramatically.

## Novel Computation
deaths_per_10K_registered = (deaths / fleet) × 10,000

Compare rank positions between per-VMT rate and per-car rate.

## Key Findings

### Sports cars INFLATED by per-mile metric:
- Corvette: VMT rank #50 → per-car rank #81 (drops 31 places). Rate=1.52 vs per_car=12.19
- Challenger: VMT rank #83 → per-car rank #108 (drops 25 places). Rate=1.00 vs per_car=8.00
- Camaro: VMT rank #11 → per-car rank #28 (drops 17 places). Rate=3.44 vs per_car=27.52
- Mustang: VMT rank #4 → per-car rank #9 (drops 5 places). Rate=6.02 vs per_car=48.16

### Pickups HIDDEN by per-mile metric:
- Silverado: VMT rank #66 → per-car rank #56 (climbs 10). Rate=1.25 vs per_car=16.86
- F-150: VMT rank #79 → per-car rank #69 (climbs 10). Rate=1.04 vs per_car=14.01
- Sierra: VMT rank #81 → per-car rank #71 (climbs 10). Rate=1.01 vs per_car=13.62
- Tundra: VMT rank #87 → per-car rank #78 (climbs 9). Rate=0.94 vs per_car=12.71
- RAM: VMT rank #101 → per-car rank #93 (climbs 8). Rate=0.78 vs per_car=10.49

### Why it happens
NHTS data: Average annual VMT for pickups ~15,500 miles. Sports cars ~5,000-7,000 miles. The denominator difference is 2-3x, which directly scales the rate.

## Sources
1. NHTSA FARS 2014-2023 (primary data)
2. NHTS (National Household Travel Survey) for VMT methodology
3. IIHS fatality statistics page (comparison methodology)
4. BTS vehicle registration statistics

## Journalist
Mia Crumplezone — Safety Engineering Editor. Beat: vehicle design analysis, methodology critique.
