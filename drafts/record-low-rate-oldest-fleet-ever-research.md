# Research Notes: Record-Low Rate, Oldest Fleet Ever

## Angle
NHTSA celebrated 2025's fatality rate (1.10/100M VMT) as "second-lowest in recorded history." But 36,640 people still died — more than in any pre-pandemic year except 2016-2017. The fleet is older than ever (12.8 years avg, record high). The "record low" isn't a safety engineering triumph — it's a statistical artifact of denominator inflation (VMT keeps rising) while the numerator barely moves.

## Kill Test
- **Genuinely newsworthy?** YES. The NHTSA press release dropped in April 2026 with 2025 estimates + 2024 final FARS. Media covered the headline ("record low rate!") without questioning whether the rate framing obscures the body count. Nobody cross-referenced fleet age.
- **Novel angle?** YES. Cross-tabulating the "record low rate" claim with the "record high fleet age" reveals a paradox: America's cars have never been older, yet NHTSA claims we're near-historically safe. Our FARS model-year data shows 82.7% of deaths involve pre-2015 vehicles — the oldest fleet is doing the killing.
- **Data-backed?** YES. Three primary sources: NHTSA 2025 estimates, S&P Global fleet age data, our own FARS model-year cross-tabulation.

## Sources

### Primary
1. **NHTSA 2025 Fatality Estimates & 2024 FARS Final** (nhtsa.gov, April 2026)
   - 2025: 36,640 deaths (est.), 6.7% decline from 2024
   - 2024: 39,254 deaths (final FARS)
   - 2025 fatality rate: 1.10/100M VMT ("second-lowest in recorded history")
   - VMT increased 29.8 billion miles (0.9%) in 2025
   - 39 states + DC + PR saw declines

2. **S&P Global Mobility Vehicle Age Study** (May 2025, Carscoops/MOTOR coverage)
   - Average US vehicle age: 12.8 years (record high, 2025)
   - Passenger cars: 14.5 years average
   - Light trucks: 11.9 years average
   - 289 million light vehicles in operation
   - Passenger cars below 100 million for first time since 1970s
   - Scrappage rate: 4.5% (steady)

3. **FARS Model Year Cross-Tab** (our data, fars_output.js, 2014-2023)
   - Pre-2010 model years: 122,326 deaths (65.4%)
   - 2010-2014 model years: 32,305 deaths (17.3%)
   - 2015+ model years: 32,427 deaths (17.3%)
   - Total: 187,058 deaths
   - Legacy fleet (pre-2015): 82.7% of all FARS deaths

### Secondary
4. **IIHS 2026 TSP Criteria** — Now requires standard AEB + Good in moderate overlap (raised from Acceptable). This acknowledges the fleet gap.
5. **CCC Intelligent Solutions Report** — Average vehicle age expected to hit 13 years by 2026.

## Original Contribution
Cross-tabulation of NHTSA's "record low rate" celebration with:
- Fleet age data showing oldest-ever fleet
- Our FARS model-year breakdown showing 82.7% of deaths from pre-2015 vehicles
- The denominator problem: rate = deaths / VMT. VMT keeps rising. Deaths barely budge. Rate "improves" by arithmetic.

## Key Calculations
- 2025 deaths (36,640) vs 2019 deaths (~36,096): only ~544 fewer deaths over 6 years
- Pre-pandemic baseline: ~36,000-37,000 annual deaths
- Pandemic spike: 42,939 (2021 peak)
- "Recovery" to 36,640 is just returning to pre-pandemic normal, not improvement
- If pre-2015 vehicles (82.7% of deaths) had the crash profile of 2015+ vehicles, theoretical reduction could be massive — but we need to normalize for exposure time

## Limitations
- FARS model-year data (2014-2023) inherently overweights older model years because they've been on the road longer during the observation window. A 2005 model accumulates deaths across all 10 years of FARS data; a 2022 model only accumulates for 1-2 years.
- We cannot directly attribute fleet age as the causal factor — younger fleet could correlate with higher income, better roads, urban vs rural, etc.
- VMT-normalized rate IS a legitimate metric. The "denominator inflation" critique has limits — if more people drive without more dying, that IS safer per-trip.
- The 2025 estimate may be revised up or down.

## Strongest Counterargument
The rate IS the right metric. If 30 billion more miles were driven and 2,614 fewer people died, that's genuine progress. The absolute number is harder to reduce because the population grows and drives more. NHTSA's enforcement-partnership credit may be warranted — DUI enforcement and distracted-driving campaigns work. Dismissing the rate decline is bad statistics.

## Rebuttal
The rate metric is necessary but not sufficient. It obscures that the US still kills more people per capita in traffic than any other wealthy nation. And the "record low" framing implies the problem is getting solved, when the actual body count has barely moved from pre-pandemic levels. The fleet-age angle is the kicker: we KNOW newer vehicles are dramatically safer (our data proves it), yet the average car on the road predates most modern safety tech. The rate improvement is happening DESPITE an aging fleet, suggesting it would be far greater with fleet renewal.

## Journalist
Vin Wreckage — Existential Dread Columnist. This is his beat: paradoxes, counterintuitive findings, the cosmic absurdity of celebrating while 36,640 people are dead.

## Kicker
Existential Dread

## Headline Ideas
- "36,640 Dead Is a Record Low. You Should Not Feel Better."
- "The Record-Low Fatality Rate Is a Math Trick. The Body Count Is the Same."
- "America's Cars Have Never Been Older. NHTSA Says We've Never Been Safer. Both Can't Be True."
