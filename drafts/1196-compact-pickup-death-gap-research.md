# Research: America's Deadliest Trucks Are the Small Ones Nobody Remembers
**Article #1196 | Journalist: Rex Driverton | Date: 2026-10-17 | Kicker: The Gap**
**Slug:** `compact-pickup-death-gap`

## Kill test
Genuinely newsworthy? Yes. The four compact pickups (S-10, Ranger, Dakota, Sonoma) kill at 2.1–4.8 deaths/100M VMT — 2x to 4.6x the full-size trucks — with 6,131 combined FARS deaths. The twist that makes it novel: driver impairment is essentially identical across both segments (~20%), ruling out the behavior explanation and pointing at physics/design. No dedicated compact-pickup story exists in 840 published + queue.

## Core data (fars_output.js, FARS 2014–2023)
| Model | Rate | Deaths | Crashes | Impairment | Newest MY |
|---|---|---|---|---|---|
| Chevrolet S-10 | 4.83 | 1,427 | 1,890 | 20.5% | 2004 |
| Ford Ranger | 2.91 | 3,089 | 4,476 | 20.1% | 2022 |
| Dodge Dakota | 2.62 | 1,237 | 2,019 | 20.9% | 2011 |
| GMC Sonoma | 2.13 | 378 | 475 | 17.4% | 2003 |
| Chevrolet Silverado | 1.25 | 9,591 | 19,732 | 20.6% | 2022 |
| Ford F-150 | 1.04 | 9,194 | 20,066 | 18.9% | 2023 |
| GMC Sierra | 1.01 | 3,337 | 7,084 | 21.0% | 2021 |
| Toyota Tundra | 0.94 | 1,223 | 2,947 | 19.6% | 2021 |

- Compact-4 total deaths: 6,131. Full-size-6 total: 24,968.
- S-10 rate vs F-150: 4.6x. S-10 vs fleet median (0.54): 8.9x. Ranger vs F-150: 2.8x.
- Deaths per crash (lethality): S-10 0.755 vs F-150 0.458 — compacts kill more per crash too.
- Impairment: compact segment 17.4–20.9%, full-size 18.9–21.0% — statistically indistinguishable. The gap is not the drivers.

## Primary sources (3+)
1. NHTSA FARS database + query tool (https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars ; https://cdan.dot.gov/query) — deaths, crashes, VMT estimates, toxicology.
2. IIHS, vehicle size and weight (https://www.iihs.org/topics/vehicle-size-and-weight) — lighter vehicles fare worse in two-vehicle crashes; physics of the mismatch.
3. IIHS, "Driver death rates remain high for small cars, models with powerful engines," July 30, 2026 (https://www.iihs.org/news/detail/driver-death-rates-remain-high-for-small-cars-models-with-powerful-engines) — real-world death rates reflect vehicle attributes beyond crashworthiness; small vehicles fare poorly against large pickups/SUVs.
4. NHTSA recalls database (https://www.nhtsa.gov/recalls) — VIN check for open recalls on used trucks.

## Limitations
- estimated_rate uses VMT estimates, not odometer readings; ±15% uncertainty for low-volume models (Sonoma: 378 deaths). Compact pickups are often second vehicles with low annual mileage — if the fleet/VMT estimates overstate their exposure, rates skew high.
- Ranger's 2.91 blends two eras (1983–2011 classic + 2019+ revival); the revival's share of exposure is small but nonzero.
- FARS captures fatal crashes only; a model with low fatality rates could still have high injury rates.
- Lethality (deaths/crash) conflates single-vehicle and multi-vehicle crashes.

## Strongest counterargument
The obvious objection: these are old, cheap trucks driven by young, poor, rural drivers on bad roads at night — the rate gap is socioeconomic, not physical. The impairment data answers part of it (identical impairment), but age, belt use, road type, and speed are not controlled in this tabulation. A skeptic can fairly argue the S-10's 4.83 is a demographic artifact of who drives a $3,000 truck, not proof the truck itself is worse. Both mechanisms likely contribute; the data here cannot apportion them.

## Methodology transparency
- rate = deaths per 100M VMT (FARS deaths / estimated VMT), 2014–2023.
- Compact = S-10, Ranger, Dakota, Sonoma (the four sub-full-size pickups in the dataset). Full-size = Silverado, F-150, Sierra, Tundra, Ram 1500, F-250.
- Impairment = BAC>0 or drug-positive among tested drivers in fatal crashes.

## Actionable takeaways
- Buying a cheap used Ranger/S-10/Dakota as a first vehicle or teen truck: the bargain price is the trap. Same-era full-size trucks are 2–5x safer per mile.
- Prioritize ESC (standard from MY2012), check IIHS ratings for the specific model year, and run the VIN at nhtsa.gov/recalls before purchase.
- If you already own one: it is a daylight, belted, sober, defensive-driving vehicle now. The margin for error is thinner than the price suggests.
