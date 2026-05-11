# Research: NHTSA Rated the Future. The Death Fleet Is Stuck in 2006.

## Slug: adas-death-fleet-gap

## Journalist: Axle McScatter (Data Visualization Editor)

## Kicker: The Gap

## Thesis
NHTSA just certified the 2026 Tesla Model Y as the first vehicle to pass its new ADAS tests (pedestrian AEB, lane keeping, blind spot). But FARS data reveals the vehicles actually killing people are too old for any of these features to matter. The median model year in fatal crashes is 2006. Only 3.2% of fatal crash deaths involve 2020+ vehicles. The safety features being tested today won't reach the death fleet for 15-20 years.

## Novel Contribution
Cross-tabulating FARS model-year death distributions against ADAS adoption timelines to compute the "ADAS reachable fraction" of the fatal crash fleet. No existing publication computes this metric.

## Primary Sources

### 1. FARS Model-Year Death Distribution (our dataset, 2014-2023)
- 185,613 total deaths across model years 1990-2023
- **Median death model year: 2006**
- Pre-2010 MY: 120,881 deaths (65.1%)
- 2010+ MY: 64,732 (34.9%)
- 2015+ MY: 32,427 (17.5%)
- 2020+ MY: 5,955 (3.2%)
- Peak death model year: 2005 (11,363 deaths, 6.1%)
- Distribution peaks 2002-2007 with ~10,000+ deaths per MY

### 2. NHTSA NCAP ADAS Test (May 7, 2026)
- 2026 Tesla Model Y first vehicle to pass 4 new ADAS tests
- Tests added to New Car Assessment Program: pedestrian AEB, lane keeping assist, blind spot warning, blind spot intervention
- Tests use contracted labs; mandatory testing begins 2027
- Source: TechCrunch, Electrek, NHTSA

### 3. FMVSS 127 - AEB Mandate (May 2024, frozen)
- Required AEB in all new passenger cars/light trucks by September 2029
- Estimated savings: 360 lives/year, 24,000 injuries prevented
- Must detect collisions at up to 62 mph, pedestrians in daylight/darkness
- **Currently FROZEN** under Trump administration regulatory freeze
- Litigation ongoing; OEMs in limbo
- Source: NHTSA, Nelson Mullins analysis

### 4. US Fleet Age (S&P Global Mobility, 2025)
- Average US vehicle age: 12.8 years in 2025 (up from 12.6 in 2024)
- Passenger cars: 14.5 years average
- 289 million light vehicles in operation
- Passenger cars fell below 100 million for first time since 1970s
- Source: S&P Global Mobility via motor.com, Carscoops

## Key Calculations

### ADAS Reachable Fraction
- Voluntary AEB commitment (2016): 20 OEMs agreed to make AEB standard by 2022
- By 2022, ~95% of new vehicles had forward-collision warning + AEB (IIHS)
- So AEB standard on new vehicles since ~2022
- FARS data runs 2014-2023 crash years. In that window, only MY 2020+ vehicles had widespread AEB
- 2020+ MY deaths: 5,955 of 185,613 = 3.2%
- Even if ALL 2015+ vehicles had AEB (they didn't): only 17.5% of deaths
- At current fleet turnover rate (12.8-year average age), it will take until ~2037-2042 before AEB-equipped vehicles represent the MAJORITY of the death fleet

### Time-to-Majority Estimate
- If AEB became universal on new vehicles in 2022
- And the median death vehicle is ~18 years old (2006 MY in crashes occurring 2014-2023)
- Then AEB-majority death fleet = 2022 + 18 = ~2040
- That's 14 years from now
- NHTSA estimates AEB saves 360 lives/year. But the death fleet recycles at ~40,000 deaths/year
- By 2040, ~5,000-7,000 cumulative deaths prevented. Against ~560,000 total in that window: ~1%

### The Irony
- NHTSA is rating vehicles that represent <3% of the death pool
- The 65% of deaths from pre-2010 vehicles have no AEB, no lane keeping, no blind spot warning, no pedestrian detection
- No amount of new-car testing can address the existing fleet
- And the AEB mandate (FMVSS 127) that would have mandated it in ALL new vehicles by 2029 is frozen

## Strongest Counterargument
New vehicles DO exist in the fleet even if they're a small fraction of deaths. As fleet turns over naturally, the ADAS-equipped fraction grows every year. Testing and rating accelerates consumer demand for these features. The rating system is forward-looking by design. Also, newer vehicles have much lower per-vehicle fatality rates, so the comparison isn't purely deaths-by-model-year—it's also about exposure-adjusted risk.

## Limitations
- FARS only captures fatal crashes, not all crashes or all injuries. AEB may prevent more non-fatal crashes that FARS doesn't see.
- Our dataset is 337 models with 50+ deaths. Low-volume luxury vehicles (which adopt ADAS earliest) are underrepresented.
- "Model year" in FARS reflects the crash victim's vehicle, not necessarily the at-fault vehicle. AEB on the OTHER vehicle could also prevent crashes.
- Fleet age varies by region; the 12.8-year average conceals significant geographic variation.
- The AEB mandate freeze may be lifted. Its status is in litigation.

## Actionable Takeaways
1. Check your vehicle's model year. If it's pre-2017, it almost certainly has no pedestrian AEB, no lane keeping, no blind spot intervention.
2. If buying used: prioritize 2020+ model years with confirmed ADAS suite. Check IIHS vehicle ratings.
3. The VIN lookup at nhtsa.gov/recalls won't tell you about missing safety tech—only about defects in what you already have.
4. Political action: the AEB mandate (FMVSS 127) is frozen. If it takes effect by 2029, the death fleet benefits ~2045. If it stays frozen, later.
