# Research: Fleet Turnover as the Hidden Driver of the 2025 Death Decline

## Angle
NHTSA reported 36,640 traffic deaths in 2025, down 6.7% from 2024's 39,254 — the second-lowest fatality rate per mile in recorded history (1.10 per 100M VMT). The Trump administration claimed credit. IIHS pointed to enforcement. Nobody looked at the most obvious explanation: the deadliest generation of cars is finally dying off.

## Novel Finding (FARS Cross-Tabulation)
FARS 2014-2023 model year decomposition reveals:
- **65.4% of all fatal crash deaths** involved pre-2010 model year vehicles
- **50.4% of deaths** involved MY2000-2009 vehicles specifically — the pre-ESC, pre-AEB generation
- Peak death model year: **MY2005 with 11,363 deaths** (followed by MY2004 at 11,221)
- Post-ESC mandate vehicles (MY2012+): only **28.1% of deaths**
- MY2000-2009 vehicles are now 16-25 years old and scrapping at ~5-6%/year
- At average fleet attrition rates, ~30% of the MY2000-2009 fleet has scrapped since 2020

## Key Data Points
1. **36,640 deaths in 2025** — 6.7% decline from 39,254 in 2024 (NHTSA preliminary)
2. **1.10 fatalities per 100M VMT** — second lowest ever (lowest: 1.08 in 2014)
3. **VMT increased 29.8 billion miles (0.9%)** — people drove MORE, died less
4. **15 consecutive quarterly declines** beginning Q2 2022
5. **5th-largest annual decline** in FARS history
6. Fatalities decreased in **39 states + DC + Puerto Rico**

## FARS Model Year Death Distribution (2014-2023 window)
Total: 187,058 deaths across all model years
- Pre-2000: 28,036 (15.0%)
- 2000-2009: 94,290 (50.4%) ← THE KILLING GENERATION
- 2010-2015: 38,960 (20.8%)
- 2016+: 25,772 (13.8%)

## The Math
The MY2000-2009 generation contributed 94,290 deaths over the FARS 2014-2023 window = ~9,429/year average. If 30% of that fleet has scrapped since 2020, that's ~2,829 fewer deaths/year attributable to fleet turnover alone. The actual 2025 decline was ~2,614 deaths (39,254 → 36,640). Fleet turnover could account for MORE than the entire decline.

## Why These Cars Kill
- **No ESC mandate** — ESC became required for all new vehicles Sept 2011 (MY2012). IIHS estimates ESC prevents 1/3 of all fatal crashes. Pre-2012 vehicles may or may not have it.
- **No AEB** — Automatic emergency braking not even voluntary standard until 2022 agreement
- **Pre-IIHS small overlap test** — introduced 2012, exposed massive structural weaknesses in pre-2012 vehicles
- **Airbag generation gap** — side curtain airbags, knee airbags not standard until ~2010s
- **Physical degradation** — 15-25 year old vehicles have degraded bushings, worn brakes, corroded structural components

## Sources
1. NHTSA, "2025 Traffic Death Estimates & 2024 FARS," April 1, 2026. https://www.nhtsa.gov/press-releases/2025-traffic-death-estimates-2024-fars
2. NHTSA FARS 2014-2023 microdata (our fars_output.js cross-tabulation)
3. IIHS, "Life-saving benefits of ESC continue to accrue," 2011. https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue
4. NHTSA ESC final rule, 2007. https://www.govinfo.gov/content/pkg/FR-2007-06-22/html/E7-11965.htm
5. DOT/NHTSA preliminary fatality data. https://www.transportation.gov/briefing-room/trumps-transportation-department-announces-record-low-traffic-deaths-fatality-rates

## Strongest Counterargument
The decline could be behavioral:
- Post-COVID drunk driving spike may be unwinding
- Rideshare (Uber/Lyft) reducing impaired driving
- Police traffic enforcement recovering from pandemic-era 33% decline in stops
- Better trauma care keeping crash victims alive

These are real factors. But they don't explain the MODEL YEAR concentration in the FARS data. If the decline were behavioral, you'd expect it to be distributed across all model years. The fact that 65% of deaths involve pre-2010 vehicles — vehicles that are leaving the fleet through natural attrition — suggests fleet turnover is the structural driver.

## Limitations
- FARS microdata for 2025 won't be available until ~2027. We're using 2014-2023 data to infer the structural composition.
- Fleet attrition rate of ~5-6%/year is an estimate. Actual scrappage rates vary by vehicle condition, region, and economic conditions.
- Correlation ≠ causation. Multiple factors contribute simultaneously.
- FARS captures fatal crashes only, not the ~6.7M total crashes/year.

## Journalist: Vin Wreckage
Beat: Paradoxes, existential dread, counterintuitive findings
Kicker: Existential Dread
