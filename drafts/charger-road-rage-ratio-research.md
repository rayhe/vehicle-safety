# Research Notes — #502: LendingTree Fleet-Size Normalization

## News Hook
LendingTree published "Men Cause 78.6% of Unsafe Driving Fatal Crashes" (Jul 6, 2026) ranking vehicles by involvement in fatal crashes involving aggressive/careless driving, using 2024 FARS data. Media ran with "Silverado = road rage truck" angle.

## Source Data

### LendingTree Vehicle Rankings (2024 FARS, ~4,776 total aggressive driving crashes)
| Rank | Vehicle | Aggressive crashes | % of total |
|------|---------|-------------------|-----------|
| 1 | Chevy Silverado | 153 | 3.2% |
| 2 | Ford F-150 | 146 | 3.1% |
| 3 | Toyota Camry | 94 | 2.0% |
| 4 | Honda Accord | 92 | 1.9% |
| 5 | GMC Sierra | 74 | 1.5% |
| 6 | Dodge Ram | 70 | 1.5% |
| 7 | Honda Civic | 67 | 1.4% |
| 8 | Toyota Corolla | 64 | 1.3% |
| 9 | Nissan Altima | 57 | 1.2% |
| 11 | Dodge Charger | 50 | 1.0% |
| 14 | Ford Mustang | 44 | 0.9% |

### FARS 2014-2023 BY_MODEL (our data — 336,202 total crashes, 191,193 deaths)
| Vehicle | Crashes | % of all crashes | Deaths | % of all deaths |
|---------|---------|-----------------|--------|----------------|
| Silverado | 19,836 | 5.9% | 9,591 | 5.0% |
| F-150 | 20,172 | 6.0% | 9,194 | 4.8% |
| Camry | 10,758 | 3.2% | 6,328 | 3.3% |
| Accord | 11,095 | 3.3% | 7,102 | 3.7% |
| Civic | 9,751 | 2.9% | 6,553 | 3.4% |
| Charger | 1,536 | 0.46% | 715 | 0.37% |
| Mustang | 4,034 | 1.2% | 2,739 | 1.4% |

## Original Contribution — Fleet-Size Normalization Ratio
Aggressive-driving share ÷ All-crash share = "aggression ratio"
- Ratio < 1.0 = vehicle UNDERREPRESENTED in aggressive driving (calmer than average per crash)
- Ratio > 1.0 = vehicle OVERREPRESENTED (more aggressive than average per crash)

Results (using crash % as denominator):
| Vehicle | Aggr% | AllCrash% | Ratio | Finding |
|---------|-------|----------|-------|---------|
| Silverado | 3.2% | 5.9% | 0.54x | UNDER — calmer than average |
| F-150 | 3.1% | 6.0% | 0.52x | UNDER — calmer than average |
| Camry | 2.0% | 3.2% | 0.63x | UNDER |
| Accord | 1.9% | 3.3% | 0.58x | UNDER |
| Sierra | 1.5% | 2.1% | 0.71x | UNDER |
| Civic | 1.4% | 2.9% | 0.48x | UNDER |
| Charger | 1.05% | 0.46% | 2.28x | OVER — 2.3× more aggressive per crash |
| Equinox | 0.9% | 0.6% | 1.50x | OVER |
| Mustang | 0.9% | 1.2% | 0.75x | UNDER |

## Key Finding
The Dodge Charger — ranked #11 by LendingTree — is the ONLY vehicle in their top 15 that is significantly overrepresented in aggressive driving per crash. At 2.28× the expected rate, the Charger is the actual aggressive-driving outlier. Every vehicle LendingTree put in their headline (Silverado, F-150, Camry) is underrepresented at 0.52-0.63×.

LendingTree to their credit noted "one likely explanation is their prevalence on U.S. roads" but still headlined the Silverado and F-150 without normalizing.

## Limitations
- Our FARS crash data covers 2014-2023 (cumulative); LendingTree uses 2024 only. Fleet composition differs.
- The Charger was discontinued in 2023. Its 2024 aggressive-driving crashes involve the used fleet only.
- "Aggressive driving" FARS coding is wildly inconsistent across states (see our existing story: Utah=0, Arkansas=258). This affects both LendingTree's analysis and ours.
- LendingTree's denominator combines 5 categories (aggressive, careless, inattentive, improper, driving without due care) — a broader definition than pure "road rage."
- Our crash% includes crashes where the vehicle's occupant survived but others died — not a clean per-vehicle-unit metric.

## Strongest Counterargument
The Charger may attract MORE aggressive drivers BECAUSE of its brand identity (muscle car, Hellcat trim, police interceptor). This isn't a data artifact — it's selection bias that vehicle marketing intentionally cultivates. The Charger's 2.28× ratio may genuinely reflect that its buyers drive more aggressively. But that's exactly why normalizing matters: the raw count hides this signal under the Silverado's fleet size.

## Existing Story Check
- `aggressive-driving-coding-mirage.html` — covers state-level coding inconsistency. Different angle (states, not vehicles).
- `aggressor-vehicles.html` — covers F-150 "aggressor" dynamics (killing others vs own occupants). Different angle.
- Neither covers fleet-size normalization of vehicle-model aggressive driving rankings.

## Journalist
Dale Impactor III — Toxicology Desk Chief. Beat: driver behavior, demographic analysis. Sardonic, statistical.
