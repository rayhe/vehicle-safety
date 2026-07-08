# Research: Safe Drivers, Fragile Cars — Decomposing Vehicle Death Rates

## Core Thesis
A vehicle's death rate is the product of two independent factors:
1. **Crash frequency** (crashes per 100K registered vehicles) — primarily reflects DRIVER behavior and demographics
2. **Crash lethality** (deaths per crash) — primarily reflects VEHICLE design, mass, and structural integrity

Vehicles with identical death rates can have completely different safety profiles. Some are genuinely safe (low lethality). Others just attract careful drivers.

## Primary Data Source
FARS (Fatality Analysis Reporting System) 2014-2023, cross-referenced with R.L. Polk fleet registration estimates. All vehicles with ≥300K fleet and ≥150 fatal crashes in the period.

## Key Findings

### 1. The HR-V / Ram 2500 Twin Paradox
Both vehicles have identical death rates: **0.13 per 100M VMT**. But:
- Honda HR-V: 30.4 crashes per 100K fleet, 53.4% lethality
- Ram 2500: 85.5 crashes per 100K fleet, 20.5% lethality

The HR-V has 2.8× fewer crashes but 2.6× higher lethality. Same outcome, opposite mechanisms. If HR-V drivers crashed at the median rate (157.7 per 100K), the HR-V death toll would multiply 5×.

### 2. Class Averages Reveal the Design Floor
| Class | Avg Crashes/100K | Avg Lethality |
|-------|-----------------|---------------|
| Sedan | 262.3 | 63.6% |
| SUV | 160.8 | 50.6% |
| Van | 160.1 | 49.5% |
| Pickup | 249.9 | 46.6% |
| Sports Car | 428.2 | 61.5% |

Pickups crash nearly as often as sedans but kill 27% less often per crash. Pure mass advantage.

### 3. Safe Drivers, Fragile Cars (low crashes, high lethality)
- Chevy Blazer: 99 crashes/100K, **71.0% lethality** (highest of any modern SUV)
- Kia Forte: 68.9 crashes/100K, **66.8% lethality**
- Subaru Forester: 58.0 crashes/100K, **55.7% lethality**
- Subaru Outback: 95.0 crashes/100K, **58.7% lethality**
- Honda HR-V: 30.4 crashes/100K, **53.4% lethality**

Subarus are above the SUV class lethality average of 50.6%. Their "safety" reputation is primarily a driver-selection story.

### 4. Risky Drivers, Strong Cars (high crashes, low lethality)
- Ram 2500: 85.5 crashes/100K, **20.5% lethality** (lowest in dataset)
- Ford F-250: 158.7 crashes/100K, **36.4% lethality**
- Toyota Tundra: 306.2 crashes/100K, **41.5% lethality**
- Dodge Ram: 240.7 crashes/100K, **43.6% lethality**

### 5. Impairment Cross-Reference
HR-V impairment: 17.0% (low)
Subaru Forester impairment: 20.5% (average)
Ram 2500 impairment: 19.7% (average)
Chevy Blazer impairment: 20.4% (average)

The HR-V's low crash rate correlates with low impairment — these are sober suburban drivers. But the car itself offers no engineering advantage.

## Angle
Original FARS decomposition: death rate = crash frequency × crash lethality. First article to formally separate these components across the full dataset. The finding that the Honda HR-V and Ram 2500 share an identical 0.13 death rate while being safety opposites is the lede.

## Journalist
Mia Crumplezone (data specialist)

## Sources (3+ primary)
1. FARS 2014-2023 microdata (crash records, vehicle types, toxicology)
2. R.L. Polk fleet registration estimates
3. IIHS 2026 crashworthiness ratings (for cross-validation)
4. NHTSA VMT data (rate calculation basis)
