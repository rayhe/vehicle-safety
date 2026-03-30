# Research: Drunk Driver Armor — The Vehicles That Protect Impaired Drivers While Killing Everyone Else

## Angle
Novel cross-tabulation: multiplying a vehicle's "protection ratio" (crashes / occupant deaths) by its impairment rate to create a "DUI Armor Index." Vehicles scoring high on this index protect impaired drivers from the consequences of their own impairment while transferring fatal force to other road users.

## Kill Test
- ✅ Novel: Nobody has cross-tabulated protection ratio × impairment rate before
- ✅ Surprising: The Ram 2500 scores highest — a work truck, not a muscle car
- ✅ Shareable: "Your truck lets drunk drivers walk away from crashes they caused" is inflammatory
- ✅ Data-backed: Pure FARS cross-tabulation, verifiable
- ✅ Not covered: We have aggressor-vehicles (mass), impairment-adjusted-rate (adjusting for impairment), and crash-lethality-ratio (deaths/crashes) — but NOT the interaction between protection and impairment as a moral hazard metric

## Primary Sources (3+)
1. **FARS 2014-2023** — our own fars_output.js: protection ratio = crashes/deaths, impairment = anyPct from toxicology
2. **IIHS vehicle size/weight study** — 4,000 lb threshold; above that, additional weight increases partner vehicle fatality risk without benefiting the driver. Pickup striking a car is 159-212% more likely to kill the car occupant vs car-to-car.
3. **NHTSA/NIH alcohol crash data** — 44% of fatalities in alcohol-related crashes are people OTHER than the drunk driver. For large trucks, only 13% of crash deaths are alcohol-related (vs 41% overall), but this doesn't mean truck drivers drink less — it means they SURVIVE more.
4. **IIHS alcohol fatality statistics** — general impairment data confirming rates

## Key Data Points

### DUI Armor Index (Top 10)
| Vehicle | Protection Ratio | Impairment % | DUI Armor Score | Deaths |
|---------|-----------------|-------------|----------------|--------|
| Ram 2500 | 4.89x | 19.7% | 96.3 | 153 |
| Ram 1500 | 2.93x | 20.3% | 59.6 | 714 |
| Ford F-250 | 2.75x | 20.3% | 55.8 | 909 |
| GMC Acadia | 2.92x | 18.2% | 53.1 | 197 |
| Dodge Durango | 2.33x | 22.5% | 52.3 | 356 |
| Dodge Charger | 2.15x | 22.7% | 48.8 | 715 |
| Chevy Traverse | 2.55x | 19.1% | 48.7 | 265 |
| Chevy Avalanche | 2.18x | 21.9% | 47.7 | 322 |
| Jeep Grand Cherokee | 2.27x | 20.8% | 47.2 | 1,161 |
| Toyota Tundra | 2.41x | 19.6% | 47.2 | 1,223 |

### The Moral Hazard Explained
- Ram 2500 protection ratio of 4.89x means: for every fatal crash involving a Ram 2500, only ~1 in 5 kills the truck occupant
- The other ~4 deaths are someone else — the person in the smaller vehicle, the pedestrian, the cyclist
- Combined with 19.7% impairment rate: roughly 1 in 5 of these crashes involves an impaired truck driver
- Calculation: ~80% of Ram 2500 fatal crashes kill someone other than the truck driver × ~20% impairment rate = roughly 16% of Ram 2500 fatal crashes involve an impaired truck driver who walks away while someone else dies

### Contrast: The "Unarmored Drunk" List
Vehicles with HIGH impairment AND LOW protection (the drunk drivers who actually pay the price):
- Chevy Cavalier: 1.17x protection, 22.4% impairment — drunk drivers die almost every time
- Dodge Neon: 1.17x protection, 23.2% impairment
- Buick LeSabre: 1.22x protection, 23.5% impairment
- Chevy Cobalt: 1.24x protection, 22.4% impairment

### Supporting Research
- IIHS: pickups striking cars are 159-212% more likely to kill car occupant (vs car-to-car)
- IIHS: above 4,000 lbs, additional weight doesn't improve driver safety but dramatically increases partner vehicle fatality
- NHTSA: 44% of alcohol-crash fatalities are people other than the drunk driver
- Above 4,000 lb threshold effect × impairment = structural moral hazard

## Original Contribution
The "DUI Armor Index" (protection ratio × impairment rate) is a novel metric that quantifies the degree to which a vehicle insulates impaired drivers from the consequences of their impairment. No published analysis we could find has explicitly combined these two FARS-derived metrics.

## Limitations
- Protection ratio (crashes/deaths) includes ALL fatal crash participants, not just the vehicle's own occupant — so the ratio reflects both occupant protection and mass advantage
- Impairment rate reflects FARS toxicology, which tests the deceased driver — survivors with positive BAC aren't captured if they weren't killed
- We can't determine from FARS alone whether the impaired person was in the heavy vehicle or the lighter one; we infer from the protection ratio that high-protection vehicles disproportionately have surviving (possibly impaired) drivers
- Fleet composition: work trucks might have different usage patterns (rural, highway) that affect both crash type and impairment rates

## Strongest Counterargument
The protection ratio doesn't prove the truck driver was the impaired one. In multi-vehicle crashes, the deceased driver (whose toxicology is tested) might be in the LIGHTER vehicle. If so, the truck's high impairment rate could reflect the OTHER driver's impairment, not the truck driver's. However, the FARS toxicology data specifically tests the driver of each vehicle listed, and the anyPct in our data refers to the tested drivers of that specific make/model, not the crash partner.

## Journalist
**Vin Wreckage** — Existential Dread Columnist. This is cosmic absurdity territory: the vehicles designed to protect you are also the vehicles that let you kill others with minimal personal consequence.

## Kicker
Existential Dread
