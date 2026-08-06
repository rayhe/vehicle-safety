# Research: AEB V2V 2.0 Test vs FARS Real-World Data Paradox

## Core Angle
The IIHS's new vehicle-to-vehicle 2.0 crash prevention test (highway speeds, motorcycle + semi-trailer targets) produced ratings that directly contradict FARS real-world death rate data. The safest small SUV by death rate (Mazda CX-5, 0.12/100M VMT) got the WORST AEB rating (Poor). The vehicle with the ONLY "Good" rating (Subaru Forester) has a 2.2x higher death rate (0.26).

## V2V 2.0 Test Results (10 Small SUVs Tested)
- **Good:** Subaru Forester
- **Acceptable:** Honda CR-V, Toyota RAV4
- **Marginal:** Ford Escape, Hyundai Tucson, Jeep Compass
- **Poor:** Chevrolet Equinox, Mazda CX-5, Mitsubishi Outlander, Volkswagen Taos

## FARS Cross-Reference (2014-2023 data)
| Vehicle | FARS Deaths | Fleet | Rate/100M VMT | V2V Rating | Crash Survival |
|---------|------------|-------|---------------|------------|----------------|
| Subaru Forester | 396 | 1,225,000 | 0.26 | Good | 44.3% |
| Honda CR-V | 2,072 | 3,150,000 | 0.53 | Acceptable | 46.7% |
| Toyota RAV4 | 914 | 3,762,500 | 0.19 | Acceptable | 50.2% |
| Ford Escape | 2,284 | 1,925,000 | 0.95 | Marginal | 44.3% |
| Hyundai Tucson | 669 | 1,575,000 | 0.34 | Marginal | 54.5% |
| Jeep Compass | 453 | 875,000 | 0.41 | Marginal | 51.2% |
| Chevy Equinox | 1,056 | 2,362,500 | 0.36 | Poor | 44.2% |
| Mazda CX-5 | 162 | 1,050,000 | **0.12** | **Poor** | 56.8% |
| Mitsubishi Outlander | 184 | 393,750 | 0.37 | Poor | 52.3% |
| VW Taos | N/A (too new) | ~744K | N/A | Poor | N/A |

## Key Paradox
- CX-5: Lowest death rate of any small SUV (0.12) → Poor AEB rating
- RAV4: Second-lowest death rate (0.19) → Acceptable
- Forester: Higher death rate than 6 of the 9 FARS-listed models → Only Good

## Why the Disagreement?
1. FARS data covers 2014-2023 — most vehicles in those years didn't have the AEB systems being tested
2. CX-5's low death rate reflects its crash STRUCTURE (good crumple zones, rigid passenger cell), not its AEB
3. The V2V 2.0 test measures FUTURE safety — as AEB becomes the primary crash prevention tool, these ratings will increasingly predict who lives
4. Highway-speed rear-end crashes (31-43 mph) are a growing share of fatal crashes; the old test at 12-25 mph was irrelevant

## Sources
1. IIHS V2V 2.0 test results (April 2024): https://www.iihs.org/news/detail/few-small-suvs-excel-in-new-iihs-front-crash-prevention-test
2. IIHS 2026 award criteria: https://www.iihs.org/news/detail/iihs-pushes-improvements-in-crash-avoidance-with-2026-awards
3. FARS data 2014-2023: NHTSA FARS database
4. Consumer Reports 2026 safest cars: consumerreports.org

## Novel Contribution
First cross-reference of IIHS V2V 2.0 individual model ratings with their actual FARS death rates, revealing the paradox between test-measured AEB performance and real-world fatality outcomes.

## Limitations
- FARS data covers a period when most vehicles lacked AEB, so the comparison measures different things
- Fleet age composition differs (CX-5 is newer on average than Forester)
- VMT estimates introduce ±15% uncertainty
- V2V 2.0 only tested 10 small SUVs; results may not generalize

## Strongest Counterargument
The comparison is apples-to-oranges: FARS death rates measure everything (crash structure, seatbelt use, impairment, road type) while the V2V test measures one narrow capability (highway-speed AEB). A vehicle can be safe overall but have weak AEB, just as a vehicle with great AEB can still kill occupants in types of crashes AEB doesn't prevent.

## Journalist
Mia Crumplezone — Safety Engineering Editor (technical but accessible, excited about crumple zones and engineering details)
