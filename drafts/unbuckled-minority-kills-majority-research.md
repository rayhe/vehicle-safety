# Research Notes: The Unbuckled 8%

## Thesis (1 sentence)
Approximately 8% of front-seat occupants refuse to wear seatbelts, yet they account for 44% of all passenger vehicle occupant fatalities — making seatbelt non-use the single deadliest behavioral choice on American roads, outpacing even drunk driving.

## Core FARS Cross-Tabulation
**Novel angle:** Cross-tabulate unrestrained fatalities by vehicle type (pickup vs. car vs. SUV), time of day (night vs. day), and alcohol involvement to build a composite profile of who dies unbuckled and why.

### Key data points from FARS/NHTSA/IIHS:
1. **2023 FARS:** Of 24,238 passenger vehicle occupant deaths, 10,484 (44%) were unrestrained at time of crash (Source: NHTSA Traffic Safety Facts 2023 via Georgia Highway Safety compilation)
2. **2022 FARS:** 45% (11,410) of unrestrained passenger vehicle occupants were killed (Source: NHTSA/CCJDIGITAL)
3. **2024 NOPUS Survey:** Front-seat seatbelt use rate = 91.2% (down from 91.9% in 2023) — meaning ~8.8% are unbelted
4. **Pickup trucks:** Lowest seatbelt usage rate at 86.4% compared to other vehicle classes (Source: NHTSA NOPUS)
5. **Seatbelt efficacy:** Reduces fatal injury risk by 45% for car occupants and 60% for light-truck occupants (Source: NHTSA)
6. **Ejection data:** Unbelted occupants have a 20% complete ejection rate vs. 0.03% for belted; ejected occupants face 91x fatality risk (Source: IIHS)
7. **Nighttime:** Unrestrained fatalities are 3x more frequent at night than during day
8. **Alcohol overlap:** Seatbelt use is 10% lower among alcohol-impaired drivers; drunk driving killed 13,524 in 2022 (31.8% of all crash deaths)
9. **Demographics:** Males 3x more likely than females to skip belts; 16-24 age group lowest use rate; rural residents 10% less likely than urban
10. **2023 total fatalities:** 40,901 traffic crash deaths total; 24,238 (59%) were passenger vehicle occupants

## FARS Query Methodology
- Years: 2014-2023 (10-year window for trend analysis)
- Key filters: Restraint use (RESTRAINT field: none used, shoulder belt only, lap belt only, etc.), vehicle body type (car/pickup/SUV), time of day (HOUR field), alcohol involvement (DRUNK_DR), rural/urban (ROUTE/ROAD_FNC)
- Cross-tabs: Unrestrained fatalities × vehicle type × time of day × alcohol involvement

## Primary Sources (5)
1. **NHTSA FARS 2023 Final File** — https://www-fars.nhtsa.dot.gov/ (primary crash data)
2. **IIHS Fatality Facts 2023: Passenger Vehicle Occupants** — https://www.iihs.org/research-areas/fatality-statistics/detail/passenger-vehicle-occupants (vehicle type breakdowns, rollover/ejection data)
3. **NHTSA NOPUS 2024 Survey** — https://rosap.ntl.bts.gov/view/dot/87711 (seatbelt use rates by vehicle type)
4. **NHTSA Traffic Safety Facts: Occupant Protection 2023** — via NHTSA NCSA (unrestrained fatality percentages)
5. **NHTSA "Characteristics and Predictors of Occasional Seat Belt Use"** — February 2020 report (demographic profile of non-users)

## Strongest Counterargument
Selection bias in the data: People who don't wear seatbelts are also more likely to engage in other risky behaviors (speeding, drunk driving, aggressive driving). The seatbelt isn't just a binary "belt on = safe"; it's a proxy for a risk-taking personality cluster. So the 44% figure overstates the causal effect of seatbelt non-use alone — some of these people would have died even if belted because they were going 95 mph drunk.

**Counter to the counterargument:** Even controlling for this, NHTSA estimates seatbelts saved 14,955 lives in 2017. The efficacy data (45% reduction for cars, 60% for trucks) comes from controlled studies that account for crash severity. The belt works even when the driver is an idiot — that's kind of the point.

## Proposed Journalist
**Lena Skidmark** — Data-forward voice, sharp edges, no patience for excuses. This story needs someone who can lay out the math without softening it.

## Story Structure (proposed)
1. **Hook:** The 8% minority that produces 44% of deaths
2. **The pickup truck problem:** 86.4% belt use (lowest) → disproportionate death toll
3. **The night shift of death:** 3x more unbelted fatalities after dark → the drinking-driving-not-buckling Venn diagram
4. **The ejection math:** 0.03% vs 20% ejection rate → 91x fatality multiplier
5. **The demographic portrait:** Young, male, rural, pickup, nighttime, often drunk
6. **FARS cross-tab:** Show the actual numbers by vehicle type × restraint status × alcohol
7. **The behavioral cluster:** Why seatbelt non-use is a sentinel marker for all risky driving
8. **The policy angle:** Primary vs secondary enforcement states; NH's adults-exempt approach
9. **Limitations + counterarguments:** Selection bias, FARS only captures fatalities, exposure data gaps

## Kill Test: PASS ✓
- 5 primary sources identified
- Novel FARS cross-tabulation (vehicle type × restraint × alcohol × time of day)
- Clear "holy shit" stat: 8% of occupants → 44% of deaths
- No existing site article covers this specific angle
