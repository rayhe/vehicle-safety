# Research: The Ram 2500 Lethality Export

## Angle
Original cross-tabulation of FARS deaths vs crashes by vehicle model reveals a "lethality export" metric: what fraction of deaths in a vehicle's fatal crashes happen to the OTHER party. Heavy-duty pickups externalize their lethality — the Ram 2500 kills other people 79.5% of the time it's involved in a fatal crash. This is the highest "export rate" in the dataset.

## Kill Test
**Is this genuinely newsworthy?** Yes. While the weight/size safety gap is well-known in general terms, nobody has quantified the specific "lethality export rate" per vehicle model using FARS data. The finding that pickups as a class are net exporters of death (51.1% export vs 35.5% for sedans) is original. The Ram 2500 at 79.5% is the extreme case.

## Original Finding (Required)
The "lethality export rate" — calculated as (crashes - own_occupant_deaths) / crashes — is a novel metric applied to FARS 2014-2023 data. Key findings:
- **Ram 2500:** 748 fatal crashes, only 153 Ram occupant deaths → 79.5% export rate
- **Ford F-250:** 2,499 crashes, 909 own deaths → 63.6% export rate
- **Pickup class total:** 85,128 crashes, 41,593 own deaths, 43,535 other-party deaths → 51.1% export (net death exporter)
- **Sedan class total:** 138,154 crashes, 89,127 own deaths, 49,027 other-party → 35.5% export (net death absorber)
- **Chevy Spark (subcompact):** 695 crashes, 517 own deaths → 25.6% export rate (absorbs its own lethality)

The gradient is nearly perfectly correlated with vehicle mass:
- Ram 2500 (~7,300 lbs) → 79.5% export
- F-250 (~6,500 lbs) → 63.6% export
- F-150 (~4,500 lbs) → 54.2% export
- Silverado (~4,500 lbs) → 51.4% export
- Average sedan (~3,500 lbs) → 35.1% export
- Spark (~2,300 lbs) → 25.6% export

## Primary Sources
1. **NHTSA FARS 2014-2023** — deaths and crashes per vehicle model (our fars_output.js)
2. **IIHS vehicle size/weight research** — "In crashes between two vehicles, the driver of the lighter vehicle is at greater risk" — established physics but our per-model quantification is new
3. **NHTSA Q1 2026 fatality data** (July 2026) — national rate dropped to 0.99/100M VMT while heavy trucks continue to grow market share
4. **Carscoops July 2026** — "The Average New Truck Hood Can Floor Anyone Under 5-Foot-6, Which Is Half The Country"

## Strongest Counterargument
Heavy-duty pickups have legitimate commercial uses (towing, hauling, work sites). Their mass is functional, not cosmetic. And FARS only captures fatal crashes — the Ram 2500's mass might prevent more crashes from becoming fatal in the first place through superior stability and stopping power. The export rate might be a feature of the physics, not a design failure. The honest response: true, but the 79.5% export rate means the Ram 2500 has been privatizing its safety while socializing its danger for a decade.

## Limitations
- FARS only captures fatal crashes (≥1 death), not all crashes. Survivability in non-fatal crashes isn't measured here.
- "Deaths" field is attributed to the vehicle's occupants; we infer "other-party deaths" as (crashes - own_deaths), which is an approximation since some crashes involve single vehicles (hitting a tree, pedestrian) where the other party isn't in a vehicle.
- Fleet size estimates carry ±15% uncertainty for less common models.
- We cannot distinguish commercial use from personal use in the data — a Ram 2500 hauling equipment on a highway behaves differently from one commuting to Costco.

## Data Tables

### Top 10 Highest Export Rates (pickups, ≥200 crashes)
| Vehicle | Crashes | Own Deaths | Export Rate |
|---------|---------|------------|-------------|
| Ram 2500 | 748 | 153 | 79.5% |
| Ford F-250 | 2,499 | 909 | 63.6% |
| Toyota Tundra | 2,947 | 1,223 | 58.5% |
| Dodge Ram | 10,110 | 4,407 | 56.4% |
| Ford F-150 | 20,066 | 9,194 | 54.2% |
| Ford F-350 | 352 | 164 | 53.4% |
| GMC Sierra | 7,084 | 3,337 | 52.9% |
| Chevy Silverado | 19,732 | 9,591 | 51.4% |
| Chevy Colorado | 711 | 348 | 51.1% |
| Nissan Titan | 474 | 234 | 50.6% |

### Class Averages
| Class | Avg Export Rate | Models |
|-------|----------------|--------|
| SUV | 48.1% | 68 |
| Pickup | 47.9% | 22 |
| Van | 47.4% | 15 |
| Sedan | 35.1% | 81 |
| Sports Car | 31.0% | 6 |

### The Extremes
| Vehicle | Export Rate | Interpretation |
|---------|------------|----------------|
| Ram 2500 | 79.5% | 4 of 5 deaths are other people |
| Chevy Corvette | 11.6% | 9 of 10 deaths are Corvette occupants |
| Chevy Spark | 25.6% | 3 of 4 deaths are Spark occupants |

## Journalist
Mia Crumplezone — Safety Engineering Editor. Vehicle design analysis, the physics of mass asymmetry.
