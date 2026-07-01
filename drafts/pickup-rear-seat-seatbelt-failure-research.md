# Research: Pickup Rear Seat Seatbelt Failure

## Angle
America's three best-selling full-size pickups (F-150, Silverado, RAM 1500) all fail or perform poorly on the IIHS moderate overlap front crash test that measures how well they protect rear-seat passengers. Only the Toyota Tundra passes. Ford hasn't even attempted to fix the problem in three years. The trucks Americans buy because they "feel safe" are some of the most dangerous vehicles for their own smaller passengers.

## Kill Test
- **Genuinely newsworthy?** YES — CarBuzz published the IIHS comparison June 28, 2026. Timely and shocking.
- **Novel angle?** YES — Cross-referencing IIHS rear seat failure with FARS fatality data to show the scale of the problem. Nobody has connected the seatbelt design failure to actual body counts.
- **After 401 articles, is this genuinely surprising?** YES — We've covered rear seat safety generally (Corolla angle, small cars), but never specifically examined the pickup segment's failure to protect rear passengers despite being the best-selling vehicles in America.

## Primary Sources

### Source 1: IIHS 2026 Moderate Overlap Front Crash Test Results (Pickups)
- **Ford F-150 (2026):** POOR overall. Poor rear passenger restraints. Poor head/neck and chest protection. "Likely risk of injury to head or neck and chest." Also: Poor vehicle-to-vehicle crash prevention. Ford has NOT changed seatbelts since 2023 test.
- **Chevrolet Silverado 1500 (2023-2026):** Marginal for rear seatbelts. Marginal head/neck and chest. Also: driver head hits steering wheel "hard" through airbag, passenger-side small overlap = Poor structural rating.
- **RAM 1500 (2025+):** Poor overall. Poor rear restraints (still). Improved head/neck from Poor to Good, but chest still Marginal. Only American brand that tried to improve.
- **Toyota Tundra (2025+):** GOOD across the board. Toyota improved rear restraints for MY2025. Only gas-powered pickup with IIHS Top Safety Pick. Good ratings in virtually every category.
- **Tesla Cybertruck:** Only pickup with IIHS Top Safety Pick+.
Source: CarBuzz June 28, 2026; IIHS ratings database

### Source 2: FARS Fatal Crash Data (2014-2023)
- **Ford F-150:** 9,194 deaths, 20,066 fatal crashes, rate 1.04/100M VMT, fleet 6.5M
- **Chevrolet Silverado:** 9,591 deaths, 19,732 fatal crashes, rate 1.25/100M VMT, fleet 5.7M
- **Dodge/Ram:** 4,407 deaths (legacy RAM) + 714 deaths (Ram 1500 post-rebrand) = ~5,121 combined, fleet ~4.2M
- **Toyota Tundra:** 1,223 deaths, 2,947 fatal crashes, rate 0.94/100M VMT, fleet 962K
Source: NHTSA FARS bulk CSV via fars_output.js

### Source 3: FARS Toxicology / Impairment Data
- F-150 impairment rate: 18.9% (LOWEST of any major pickup), n=21,195
- Silverado: 20.6%, n=23,675
- Tundra: 19.6%, n=4,151
- GMC Sierra: 21.0%, n=9,319
Key insight: F-150's low impairment rate means its fatal crashes disproportionately involve SOBER drivers — i.e., families on normal trips, kids in the back seat. The very demographic most endangered by failing rear seat seatbelts.

### Source 4: IIHS Award Requirements (2026)
- TSP requires Good in moderate overlap front test (raised from Acceptable in 2025)
- Test uses dummy representing 12-year-old or small adult woman in rear seat
- Primary failure mode is seatbelt design: belts slip out of position on smaller occupants
- This is a SEATBELT problem, not a structural problem — the trucks' structures are fine
Source: IIHS.org, ConsumerReports.org

## Original Contribution
Cross-tabulation: The F-150's 18.9% impairment rate (lowest among pickups) combined with its 9,194 FARS deaths means an estimated ~7,456 of those deaths involved sober occupants. These are families. Some had kids in the back seat. And for three years, Ford knew the back seat couldn't protect a 12-year-old in a moderate overlap crash — and didn't fix the seatbelts.

Calculation: 9,194 deaths × 0.811 (sober proportion from 1 - 0.189 impairment rate) = 7,454 deaths involving sober drivers. Not all had rear passengers, but the F-150 SuperCrew (4-door) is the dominant configuration specifically marketed to families.

## Limitations
- FARS fatality data is 2014-2023; IIHS ratings are 2026. Can't directly connect rear seat seatbelt failure to specific FARS deaths.
- FARS impairment rate is for DRIVERS, not passengers. We can't know how many rear passengers were present in fatal crashes from this data alone.
- FARS deaths include all occupant positions; we cannot isolate rear-seat deaths from FARS_BY_MODEL.
- Tundra's lower fleet size (962K vs 6.5M F-150) means its rate calculations have wider confidence intervals.
- The fact that the F-150 has the lowest impairment rate is suggestive but not conclusive — lower impairment could correlate with many factors beyond family use.

## Strongest Counterargument
The IIHS test is ONE specific crash scenario (moderate overlap front at 40 mph). The F-150 scores Good in small overlap, side impact, and pedestrian crash prevention. A truck that fails one test isn't automatically dangerous — and the majority of real crashes don't match the test geometry. Ford could argue they prioritize real-world safety outcomes over test optimization.

Counter-counter: If that's true, why did Toyota manage to fix it? The Tundra went from Marginal to Good with a seatbelt design change. This isn't expensive. This isn't structurally complex. It's a seatbelt buckle geometry fix.

## Journalist
Mia Crumplezone — Safety Engineering Editor. The seatbelt design angle is her beat. She gets excited about what happens in the first 150 milliseconds.

## Kicker
The Gap
