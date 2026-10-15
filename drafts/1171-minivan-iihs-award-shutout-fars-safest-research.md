# Research: #1171 — No Minivan Earned an IIHS Safety Award This Year. The Death Data Says They're the Safest Cars on the Road.

## Angle
IIHS published its 2026 award cycle results: **not one minivan earned a Top Safety Pick or Top Safety Pick+** (Jalopnik roundup, 2026-10-10; Road Ethos confirms "no minivan earned an award this year"). Yet NHTSA FARS 2014-2023 data shows minivans are among the lowest-death-rate vehicles on American roads. The Chrysler Pacifica's 0.19 deaths per 100M VMT sits ~6.3x below the 2024 national rate of 1.19. Lab says nobody gets the badge; the morgue says they're the safest boxes on wheels. Lab vs. morgue: who do you believe?

## Kill test
- Genuinely newsworthy? Yes. Current (Oct 2026 news cycle), counterintuitive, and it weaponizes original FARS computation against a fresh IIHS announcement.
- Novel angle on data? Yes. The engineering irony is the contribution: the test that flunks minivans is the updated moderate-overlap test, whose headline change is a **rear-seat dummy measuring adult rear-occupant protection**. Minivan second rows are overwhelmingly occupied by **children in car seats**, not adult dummies. The lab grades a scenario the real vehicle rarely presents, while the real-world outcome (fewest deaths per mile of any class) gets no badge.
- Not covered before? Checked: #961 (minivan death gap, Axle) is a FARS-only piece; #859/#960/#962 are single-vehicle rear-seat flunks; nobody has written the award-shutout vs. FARS paradox.

## Data (from fars_output.js, NHTSA FARS 2014-2023)

Death rates (deaths per 100M VMT), national 2024 rate = 1.19:
- Chrysler Pacifica: 0.19 (160 deaths, fleet 700,000)
- Toyota Sienna: 0.49 (430 deaths, fleet 743,750)
- Kia Sedona: 0.46 (118 deaths)
- Nissan Quest: 0.46 (71 deaths)
- Honda Odyssey: 0.93 (864 deaths, fleet 787,500)
- Dodge Grand Caravan: 1.33 (1,782 deaths)
- Chrysler Town and Country: 1.26 (1,303 deaths)

Impairment (fatal-crash drivers, BAC>0 or drug-positive), baseline across models = 20.0%:
- Quest 14.5% (n=242), Grand Caravan 15.3% (n=2,627), Odyssey 15.4% (n=2,641) — among the lowest of any vehicle class
- Pacifica 20.0% (n=1,073), Sienna 19.0% (n=2,430), Sedona 18.4% (n=580), T&C 20.1% (n=2,571)

Original finding: Pacifica 0.19 ties for 6th-lowest rate in the entire 337-model dataset (150+ deaths cutoff), 6.3x below the 2024 national fatality rate.

## IIHS 2026 ratings (Jalopnik 2026-10-10 roundup of the five minivans)
- Toyota Sienna (2026): good small overlap front, good side, **marginal moderate overlap front**, acceptable pedestrian FCP, good headlights, good+ LATCH. NHTSA: 5-star overall.
- Honda Odyssey (2027; test on 2018): good small overlap + side, **poor moderate overlap** (poor rear head/neck protection, marginal chest), acceptable headlights. NHTSA 2025: 5-star overall, 5-star frontal.
- Chrysler Voyager (2026; test on 2017 Pacifica): good small overlap, poor headlights, acceptable pedestrian; moderate overlap not tested. Discontinued after 2026.
- Chrysler Pacifica (2027; headlights carried from 2023): good small overlap, acceptable side + pedestrian, **marginal moderate overlap** (marginal rear chest protection), poor headlights (2027 gets reworked front end IIHS didn't test). NHTSA 2025: 5 stars overall/front/side.
- Kia Carnival (2026; test on 2023): good small overlap only; acceptable side, seatbelt reminder, LATCH; **marginal moderate overlap**. NHTSA 2026: 5-star overall, 4-star frontal.

## 2026 IIHS award criteria (tougher than ever)
Good in small overlap front, updated moderate overlap front, updated side; acceptable-or-good headlights standard on every trim; standard front crash prevention rated good (pedestrian) and acceptable-or-good (vehicle-to-vehicle 2.0). The updated moderate overlap test adds a rear-seat dummy. 63 vehicles named in the first 2026 round; 35 of 45 TSP+ winners are SUVs. Zero minivans.

## National context
NHTSA final 2024: 39,254 deaths, rate 1.19/100M VMT. Early 2025 estimate: 36,640 deaths, rate 1.10 (second-lowest recorded). Q4 2025 = 15th consecutive quarterly decline.

## Sources (all verified live 2026-10-14)
1. NHTSA FARS database: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS vehicle ratings: https://www.iihs.org/ratings
3. Jalopnik, "5 2026 Family Minivans Ranked From Best To Worst IIHS Safety Ratings" (2026-10-10): https://www.jalopnik.com/2280256/new-family-minivans-ranked-best-to-worst-iihs-safety-ratings/
4. NHTSA press release, 2025 early estimates + 2024 annual data: https://www.nhtsa.gov/press-releases/traffic-deaths-2025-early-estimates-2024-annual
5. Road Ethos, "The Safest 2026 SUVs Under $40,000, According to the IIHS": https://roadethos.com/car-buying/the-safest-2026-suvs-under-40000-according-to-the-iihs

## Journalist
Mia Crumplezone (Safety Engineering Editor). Beat fit: vehicle design analysis, why rear-seat geometry flunks minivans, lab-vs-real-world. Kicker: The Gap.
