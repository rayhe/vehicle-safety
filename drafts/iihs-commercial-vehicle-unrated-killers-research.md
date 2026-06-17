# Research: IIHS Finally Rates Commercial Vehicles

## News Hook
- IIHS launched commercial vehicle safety program June 9, 2026
- First-ever evaluations of cargo vans and Class 3 (10,001-14,000 lb GVWR) pickups
- Focus: driver protection (airbags, belt tech, belt reminders)
- 6,535 killed in 2023 in crashes involving heavy/medium trucks or light vans (16% of all fatalities)
- Source: https://www.iihs.org/news/detail/iihs-launches-evaluations-of-commercial-vehicles-starting-with-driver-protection

## Key IIHS Findings
- 4 of 9 vehicles meet all driver protection criteria
- Vehicles LACKING effective belt reminders: Ford Transit T250, Mercedes Sprinter 2500, Rivian Delivery 500, Chevy Express 2500
- Chevy Express 2500 also lacks standard force limiters
- Many commercial vehicles exempt from passenger vehicle safety standards
- IIHS plans to evaluate AEB and headlights for road user protection later

## FARS Data — Original Analysis

### Other-Kill Rate by Class
The "other-kill rate" = fraction of fatal crash involvements where the vehicle's own occupant survives (meaning someone ELSE died).

| Class | Deaths | Crashes | Other-Kill Rate |
|-------|--------|---------|----------------|
| Sedan | 89,127 | 138,154 | 35.5% |
| SUV | 46,442 | 88,568 | 47.6% |
| Van | 7,897 | 15,362 | 48.6% |
| Pickup | 41,593 | 85,128 | 51.1% |

### Commercial Vehicles Specifically (FARS 2014-2023)
| Vehicle | Crashes | Occupant Deaths | Other-Kill Rate |
|---------|---------|-----------------|----------------|
| Nissan NV | 77 | 13 | 83.1% |
| Ram 2500 | 748 | 153 | 79.5% |
| Ford Transit | 577 | 178 | 69.2% |
| Ford F-250 | 2,499 | 909 | 63.6% |
| Transit Connect | 162 | 61 | 62.3% |
| Ford E-250 | 206 | 79 | 61.7% |
| Ford E-350 | 1,892 | 776 | 59.0% |
| Ford E-150 | 173 | 73 | 57.8% |
| Nissan NV200 | 66 | 28 | 57.6% |
| Ford F-350 | 352 | 164 | 53.4% |
| Chevy Express | 975 | 475 | 51.3% |

### Asymmetric Lethality Index
For the Ram 2500: 748 fatal crash involvements, 153 occupant deaths.
Ratio: 748/153 = 4.9 crashes per occupant death.
Interpretation: For every Ram 2500 occupant who dies, the vehicle is involved in ~4 other fatal crashes where someone else died.

For the Ford Transit: 577/178 = 3.2 crashes per occupant death.
For the Ford F-250: 2,499/909 = 2.7 crashes per occupant death.

Compare to Chevy Cavalier (sedan): 1,429/1,225 = 1.17 crashes per occupant death (nearly every crash kills the sedan driver).

### The Irony
IIHS's initial commercial vehicle evaluations focus on DRIVER protection: airbags, belt tech, reminders. But the FARS data shows commercial vehicle drivers already have the best survival odds in any crash. The real carnage is external.

IIHS acknowledges this: "In the coming months, IIHS plans to evaluate these same vehicles for attributes that can protect other road users, including automatic emergency braking and headlights."

But the phasing tells you something: even in 2026, driver protection comes first. Other road users wait.

## Original Contribution
1. "Other-kill rate" metric applied to IIHS's newly-rated vehicle categories
2. The Ram 2500's 4.9:1 asymmetric lethality ratio (novel calculation)
3. Quantifying the gap between what IIHS is testing (driver protection) and what the data says kills people (these vehicles' impact on others)

## Strongest Counterargument
Commercial vehicles serve critical economic functions. Delivery vans, construction pickups, and fleet vehicles keep the economy running. Adding safety equipment increases costs that get passed to consumers. Fleet managers optimize for uptime and cost, and may resist features that add weight, complexity, or purchase price. The IIHS is starting with driver protection precisely because it's the achievable first step, and AEB/headlight evaluations are already planned.

## Limitations
- FARS "deaths" = occupant deaths for that specific vehicle model. The "other-kill" inference assumes deaths in multi-vehicle crashes are from the other party, but some FARS crash involvements may involve single-vehicle crashes with pedestrians/cyclists (the vehicle occupant survives, the pedestrian dies). This inflates the "other-kill" rate somewhat.
- Fleet size estimates for commercial vehicles may be less accurate than for passenger vehicles (commercial registrations vs consumer).
- The IIHS program is just launching; these are initial evaluations, not final verdicts.

## Sources
1. IIHS commercial vehicle program launch, June 9, 2026
2. NHTSA FARS 2014-2023 (fars_output.js)
3. IIHS 30x30 initiative (reduce fatalities 30% by 2030)
4. NHTSA AEB mandate (FMVSS No. 127, September 2029)

## Journalist
Rex Driverton (Senior Crash Correspondent) — investigation beat
