# Research Notes: ADAS Misuse — Experts vs Data

## News Hook
Reuters, July 14, 2026: "Misuse of driver-assistance systems biggest risk to road safety, survey finds"
- Survey by Economist Enterprise (division of The Economist Group), financed by Brembo (Italian brake maker)
- 1,000+ transport specialists across 10 countries (FR, DE, IT, UK, CN, IN, BR, JP, KR, US)
- Specialists in policy, infrastructure, manufacturing, technology
- **30%** cited human misunderstanding or misuse of ADAS as the leading safety issue
- **24%** cited distracting in-vehicle features
- **66%** believe advertising overstates ADAS capabilities
- Also polled 5,000+ road users: 88% support tougher safety measures
- Quotes:
  - "The real risk is the interface between humans and machines" — Pratima Singh, Economist Enterprise
  - "We need to make sure that those systems are really explained to the end-user" — Ignacio Alvarez, Brembo R&D Chief

## Supporting Context
- NTSB July 15: Tesla driver in Katy, TX overrode FSD at 70+ mph in 30 mph zone, killed 76-year-old Martha Avila
- NHTSA has opened ~50 special Tesla investigations since 2016, ~24 deaths
- NHTSA escalated probe into 3.2M Teslas with FSD in March 2026
- Tesla just recalled 363K vehicles for FSD safety risks
- China considering tighter ADAS oversight after fatal Xiaomi crash
- Sweden recommending AGAINST Tesla FSD rollout in Europe
- UN approved new automated driving rules last month

## FARS Data — Brand Death Rates (deaths per 100M VMT)
Sorted by rate (lower = safer):
| Brand | Rate | Deaths | Fleet | Models | Notes |
|-------|------|--------|-------|--------|-------|
| Tesla | 0.63 | 278 | 3.7M | 4 | Newest fleet, most ADAS |
| Ram | 1.17 | 867 | 5.5M | 3 | Heavy trucks |
| Audi | 2.03 | 287 | 1.2M | 5 | Luxury, newer fleet |
| Mercedes | 3.31 | 835 | 2.1M | 8 | Luxury |
| Acura | 3.66 | 862 | 2.0M | 8 | |
| Kia | 3.77 | 3077 | 6.8M | 12 | Recent fleet expansion |
| Subaru | 3.80 | 2292 | 4.9M | 8 | EyeSight standard |
| Mazda | 4.23 | 1432 | 2.8M | 11 | |
| Lexus | 4.96 | 1256 | 2.1M | 8 | |
| Cadillac | 6.20 | 1389 | 1.9M | 10 | |
| Mitsubishi | 6.27 | 813 | 1.1M | 7 | |
| Infiniti | 6.96 | 792 | 1.0M | 5 | |
| VW | 7.12 | 2234 | 2.6M | 8 | |
| Lincoln | 7.30 | 1137 | 1.3M | 8 | |
| Dodge | 7.36 | 11076 | 12.3M | 17 | |
| Jeep | 7.92 | 6976 | 7.0M | 8 | |
| Hyundai | 8.18 | 6854 | 7.0M | 11 | |
| BMW | 8.99 | 2196 | 2.1M | 9 | |
| Toyota | 9.47 | 22019 | 19.0M | 26 | Huge fleet, all ages |
| GMC | 9.90 | 6758 | 5.3M | 9 | |
| Pontiac | 10.68 | 3038 | 2.5M | 9 | Dead brand, aging fleet |
| Buick | 10.47 | 3710 | 3.0M | 11 | |
| Chrysler | 10.89 | 4326 | 3.4M | 7 | |
| Ford | 11.68 | 34954 | 23.9M | 29 | |
| Honda | 12.43 | 17837 | 11.9M | 11 | |
| Mercury | 12.74 | 1840 | 1.2M | 5 | Dead brand |
| Nissan | 12.78 | 14456 | 9.3M | 19 | |
| Chevrolet | 13.75 | 35905 | 21.0M | 32 | |

## Original Contribution
The paradox: experts say ADAS misuse is the #1 risk, but brands with the most ADAS investment have death rates 5-22x lower than brands with older fleets. Both are true:
- ADAS makes the AVERAGE outcome much better
- But ADAS creates visible, catastrophic failure modes that shock the public and regulators

The 50 NHTSA Tesla investigations produced ~24 deaths. Tesla's overall fleet of 3.7M vehicles produces 27.8 deaths/year at 0.63/100M VMT. The investigations cover dramatic, identifiable failures. The 27.8 annual deaths are the statistical background rate. Both are real. The question is which number should drive policy.

## Key Limitation / Counterargument
1. Fleet age is the dominant confound. Tesla's oldest vehicle is ~14 years old. Chevrolet has vehicles from the 1980s. You cannot attribute the rate gap to ADAS alone.
2. Brembo funded the survey. Brembo makes mechanical braking components. They have a financial interest in emphasizing that ADAS isn't sufficient — because their products (brakes) ARE the alternative.
3. The survey measured expert PERCEPTION, not outcome data. Perception of risk ≠ actual risk.

## Journalist
Rex Driverton — Senior Crash Correspondent. Deadpan dark humor, loves paradoxes, writes like a noir detective covering NHTSA data.
