# Research Notes: AWD SUV Saves, AWD Pickup Kills

## Angle
IIHS's June 2026 release of 2024 fatality statistics by vehicle type shows that AWD/4WD delivers opposite safety outcomes depending on vehicle class. For SUVs, 4WD cuts the fatality rate by 44% (22 vs 39 per million registered 1-3 year old vehicles). For pickups, 4WD is actually 6% DEADLIER (34 vs 32). The paradox deepens when you look at crash types: 4WD pickup owners die at 2.3x the rate of 2WD pickup owners in single-vehicle crashes (16 vs 7 per million) and 3x in rollovers (6 vs 2). The technology isn't what saves you — the trim level, safety feature bundling, and driver behavior that correlates with drivetrain choice is.

## Primary Sources

1. **IIHS Fatality Statistics — Passenger Vehicle Occupants, Posted June 2026**
   URL: https://www.iihs.org/research-areas/fatality-statistics/detail/passenger-vehicle-occupants
   Data: Driver deaths per million registered passenger vehicles 1-3 years old, 2024 FARS data
   
   Key table: "Driver deaths per million 1-3-year-old registered pickups and SUVs by crash type and 2WD/4WD, 2024"
   
   | | Multi-vehicle | | Single-vehicle | | Rollover | | All crashes | |
   | | 2WD Rate | 4WD Rate | 2WD Rate | 4WD Rate | 2WD Rate | 4WD Rate | 2WD Rate | 4WD Rate |
   | Pickups | 25 | 18 | 7 | 16 | 2 | 6 | 32 | 34 |
   | SUVs | 26 | 13 | 13 | 9 | 5 | 3 | 39 | 22 |

2. **IIHS Vehicle Size and Weight Research**
   URL: https://www.iihs.org/topics/vehicle-size-and-weight
   Establishes that AWD systems add 100-300 lbs to vehicle weight, improving crash energy absorption but also raising center of gravity.

3. **NHTSA FARS Database 2024**
   URL: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
   Underlying data source for the IIHS analysis.

4. **IIHS Status Report Vol. 59, No. 3 (2024)**
   Previous analysis of SUV fatality rates by vehicle size showing that smaller SUVs have higher death rates than larger ones, with 2WD trims concentrated in base models.

## Novel Contribution
Cross-referencing the IIHS 2WD/4WD data with crash-type breakdown reveals the paradox: AWD is not the safety feature — it's a PROXY for which trim level, safety package, and buyer demographic you're measuring. 4WD SUVs come with higher trims that bundle AEB, blind spot monitoring, and other active safety. 4WD pickups are bought by rural/off-road users who take on worse conditions and have higher single-vehicle/rollover exposure.

## Key Calculations
- SUV 4WD safety advantage: (39-22)/39 = 43.6% lower death rate
- Pickup 4WD penalty: (34-32)/32 = 6.3% HIGHER death rate
- Pickup 4WD single-vehicle penalty: 16/7 = 2.29x
- Pickup 4WD rollover penalty: 6/2 = 3.0x
- Pickup 4WD multi-vehicle advantage: (25-18)/25 = 28% lower (the only category where 4WD helps pickups)

## Limitations
- IIHS data covers only 1-3 year old vehicles (relatively new)
- "2WD" and "4WD" are registrations from state DMVs; some "4WD" vehicles may be part-time or AWD with different characteristics
- Cannot separate drivetrain effect from trim-level confound (higher trims = 4WD + more safety tech)
- Cannot separate from income/demographic confound (4WD buyers may differ from 2WD buyers)
- Per-million-registered normalizes for fleet size but not for miles driven per vehicle
- Single-year data (2024); year-to-year variation in small absolute numbers can create apparent patterns
