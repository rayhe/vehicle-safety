# Research: The 12.5-Year Kill Zone

## Angle
The average vehicle involved in a fatal crash in the FARS 2014-2023 dataset is approximately **12.5 years old**. This nearly matches the average age of vehicles on US roads (~12.6 years per S&P Global/BTS data). The killing fleet isn't ancient junkers or brand-new cars — it's the middle-aged bulk of America's fleet.

## Novel Cross-Tabulation
FARS_MODEL_YEAR data cross-tabulated across all 323 vehicles to compute:
1. Average vehicle age at fatal crash: **12.5 years**
2. Death distribution by model year era:
   - Pre-2000: 28,036 (15.0%)
   - 2000-2004: 47,921 (25.6%)
   - 2005-2009: 46,369 (24.8%)
   - 2010-2014: 32,305 (17.3%)
   - 2015-2019: 26,472 (14.2%)
   - 2020+: 5,955 (3.2%)
3. Half of all FARS deaths (2014-2023) involve vehicles from MY 2000-2009 — the pre-ESC, pre-modern-crash-structure era
4. Vehicle "death concentration" — what fraction of a model's deaths come from its worst 5 model years:
   - Cobalt: 89% (5-year production run = 5 years of death)
   - Cavalier: 69%
   - Altima: 38%
   - Escape: 35%
   - Silverado: 32%
   - Corolla: 29%
   - Camry: 27%
   - Civic: 26%
   - Wrangler: 25%

## Original Contribution
Nobody has computed the fleet-wide average vehicle age at fatal crash from FARS model year data. This is a novel derivation that reveals:
- Safety mandates (ESC in 2012, better crash structures) take ~12+ years to reach the median killing vehicle
- The "deadliest vintage" (MY 2000-2009) accounts for 50.4% of all fatal crash deaths despite being just 10 model years out of 40+
- Short-production vehicles (Cobalt: 5 years) concentrate nearly ALL deaths in their production window
- Long-production vehicles (Silverado, Civic) spread deaths across decades

## Primary Sources
1. NHTSA FARS 2014-2023 (model year data, 323 vehicles, ~187K deaths)
2. S&P Global Mobility / BTS: Average vehicle age on US roads = 12.6 years (2024)
3. NHTSA ESC final rule (2007, mandate effective 2012 MY)
4. IIHS ESC effectiveness studies
5. NHTSA 2024 fatality projections (39,345 estimated fatalities)

## Kill Test
Is this genuinely newsworthy? YES.
- Original finding: 12.5-year average age at fatal crash, computed across the full FARS fleet
- Counterintuitive: people assume old cars or new cars are the problem. It's the huge bulge of 10-15 year old vehicles
- Policy implication: safety mandates don't save lives for over a decade due to fleet age
- The Cobalt 89% concentration is a stunning visual of how a bad car murders within its production window

## Strongest Counterargument
The model year distribution of fatal crash vehicles may simply mirror the model year distribution of the on-road fleet. If most cars on the road are 10-15 years old, then most fatal crashes will involve 10-15 year old cars. The finding may be less about "dangerous middle-aged cars" and more about "that's just how many of them there are." To truly isolate the age effect, you'd need per-year registration data to compute age-adjusted fatality rates — which FARS doesn't provide.

## Journalist
Axle McScatter — Data Visualization Editor. This is a pure numbers story about fleet-wide patterns, exactly his beat. "I ran the numbers. Then I ran them again. They didn't get better."
