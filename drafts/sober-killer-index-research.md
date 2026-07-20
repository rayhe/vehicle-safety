# Research: Sober Killer Index

## Novel Contribution
Cross-tabulation of FARS impairment rates × kill ratios to create a "Sober Killer Index" (SKI): the probability that a vehicle involved in a fatal crash was driven by a sober driver AND killed someone OTHER than the driver. No publication has computed this specific composite metric.

**Formula:** SKI = (1 - impairmentRate) × (1 - killRatio)
- killRatio = deaths/crashes = P(vehicle's own occupant dies in fatal crash)
- (1 - killRatio) = P(someone else dies)
- (1 - impairmentRate) = P(driver is sober)
- SKI = P(sober) × P(kills someone else) = composite probability

## Primary Data Sources

1. **FARS 2013-2022 (NHTSA Fatality Analysis Reporting System)**
   - 337 vehicle models, crash/death/fleet/VMT data
   - Toxicology: blood alcohol and drug test results for 307 models
   - Minimum thresholds applied: ≥200 fatal crashes, ≥100K fleet, ≥50 toxicology samples

2. **NHTSA 2025 Annual Report** (published 2026)
   - 36,640 traffic deaths in 2025, rate 1.10/100M VMT
   - 6.7% decrease from 2024

## Key Findings

### Top 5 Sober Killer Index
| Rank | Vehicle | Class | SKI | Sober % | Other-Death % | Deaths | Kill Ratio |
|------|---------|-------|-----|---------|---------------|--------|------------|
| 1 | Ram 2500 | Pickup | 0.639 | 80.3% | 79.5% | 153 | 0.205 |
| 2 | Ford Transit | Van | 0.597 | 86.4% | 69.2% | 178 | 0.308 |
| 3 | GMC Acadia | SUV | 0.538 | 81.8% | 65.7% | 197 | 0.343 |
| 4 | Ram 1500 | Pickup | 0.525 | 79.7% | 65.9% | 714 | 0.341 |
| 5 | BMW X3 | SUV | 0.517 | 80.6% | 64.2% | 124 | 0.358 |

### Bottom 3 (vehicles that mostly kill their own driver)
| Rank | Vehicle | Class | SKI | Kill Ratio |
|------|---------|-------|-----|------------|
| Last | Corvette | Sports | 0.086 | 0.884 |
| 2nd last | Dodge Neon | Sedan | 0.110 | 0.856 |
| 3rd last | Chevy Cavalier | Sedan | 0.111 | 0.857 |

### Class Averages
- Vans: 0.397
- SUVs: 0.388
- Pickups: 0.382
- Sedans: 0.279
- Sports Cars: 0.238

### The Ram 2500 Paradox
- Lowest kill ratio of any vehicle in the FARS dataset: 0.205
- Only 20.5% of deaths in Ram 2500 fatal crashes are Ram occupants
- 79.5% of the dead are someone ELSE
- 80.3% of Ram 2500 drivers in fatal crashes are completely sober
- Combined: 63.9% probability that any Ram 2500 fatal crash is a sober driver killing someone else

### Notable Entries
- Tesla Model 3 (#20, SKI 0.452): a sedan that behaves like an SUV — its 4,000+ lb battery weight gives it the mass advantage typically reserved for trucks
- Honda Odyssey (#11, SKI 0.486): the quintessential family minivan is an "other-killer" — 84.6% sober drivers, 57.4% other-death rate

## Counterargument
The SKI conflates vehicle mass physics with driver behavior. Heavy vehicles protect their occupants by physics alone — the kill ratio is a function of mass differential, not intent. A Ram 2500 driver killing a Honda Civic driver is a physics problem, not a moral one. The "sober" component doesn't mean "responsible" — sober drivers in large vehicles may still be distracted, aggressive, or at fault. FARS doesn't encode fault attribution.

## Limitations
- FARS toxicology has variable testing rates by state; not all drivers are tested
- "Sober" means no detected alcohol or drugs — not necessarily "alert" or "not fatigued"
- Kill ratio captures death distribution, not causation — a vehicle could be the victim of a red-light runner and still score high if the other driver dies
- Fleet estimates have error margins for some models
- 10-year aggregation spans major design changes within some model lines

## Journalist
**Vin Wreckage** — existential dread beat. The paradox that responsibility and danger are decoupled.
