# Research: The Junkyard Dividend

## Angle
NHTSA's 2025 preliminary data shows 36,640 traffic deaths — down 6.7% from 2024's 39,254, the lowest since 2019. NHTSA calls it a victory. But FARS model-year data reveals an underreported structural force: the deadliest vehicle vintages are aging off the road. The decline may be less about better driving and more about scrapyards.

## Novel Contribution
Cross-tabulating FARS 2014-2023 deaths by vehicle model year reveals that:
- **65% of all fatal crash vehicles are pre-2010 models**
- The single deadliest vintage — model year 2005 — accounts for 11,363 deaths
- Model years 2000-2008 collectively account for 84,171 deaths (44.9% of all FARS deaths)
- Those vehicles are now 18-26 years old. Average US vehicle lifespan is ~12.5 years (BTS). They're actively leaving the fleet.
- The 2009 recession dip (MY2009 = 5,729 deaths vs MY2005's 11,363) created a "death gap" — the most dangerous vintage is being replaced by inherently safer post-recession vehicles with standard ESC

## Key Data Points

### NHTSA 2025 Preliminary
- 36,640 deaths (estimated), down 6.7% from 39,254 in 2024
- Fatality rate: 1.10 per 100M VMT — lowest since 2014
- VMT increased by 29.8 billion miles (people drove MORE but died LESS)
- 39 states + DC + Puerto Rico saw declines
- 5th largest annual percentage decrease in FARS history
- Pedestrian deaths fell 11% YoY

### FARS Model Year Death Distribution (2014-2023 data)
Top 10 deadliest model year vintages:
1. MY 2005: 11,363 deaths
2. MY 2004: 11,221 deaths
3. MY 2003: 10,714 deaths
4. MY 2006: 10,341 deaths
5. MY 2007: 10,056 deaths
6. MY 2002: 9,759 deaths
7. MY 2008: 8,880 deaths
8. MY 2001: 8,324 deaths
9. MY 2000: 7,903 deaths
10. MY 2013: 6,903 deaths

**MY 2000-2008 total: 84,171 deaths**
These vehicles are 18-26 years old in 2026. Well past average scrappage age.

### Per-Crash Lethality by Class
- Sedans: 64.5% (occupant dies in 64.5% of fatal crashes)
- Sports Cars: 68.2%
- SUVs: 52.4%
- Vans: 51.4%
- Pickups: 48.9%

As sedans (highest occupant lethality) get replaced by SUVs (12+ point lethality advantage), per-crash survival improves.

### Pre-2010 Death Share by Class
- Pickups: 77.4% of all pickup deaths are pre-2010 models
- Vans: 69.5%
- SUVs: 62.6%
- Sedans: 61.4%
- Sports Cars: 56.9%

### ESC Mandate Timeline
- NHTSA mandated ESC for all new passenger vehicles starting MY 2012
- IIHS research: ESC reduces fatal single-vehicle crash risk by 56% for SUVs, 49% for cars
- Pre-2012 vehicles without ESC are disproportionately represented in fatal crashes

## Sources
1. NHTSA, "Early Estimate of Motor Vehicle Traffic Fatalities in 2025," April 2026. https://www.nhtsa.gov/press-releases
2. NHTSA FARS 2014-2023 data via our fars_output.js (337 models, 50+ deaths each)
3. AASHTO Journal, "NHTSA: Traffic Deaths Declined Significantly in 2025," April 2026
4. CollisionWeek, "NHTSA Projects 6.7% Drop in Traffic Deaths in 2025," April 2, 2026
5. Smart Cities Dive, "US traffic deaths in 2025 lowest since 2019"
6. IIHS, "Life-saving benefits of ESC continue to accrue" https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue
7. Bureau of Transportation Statistics, average vehicle age data
8. NHTSA ESC final rule (2007) https://www.govinfo.gov/content/pkg/FR-2007-06-22/html/E7-11965.htm

## Kill Test
Is this genuinely newsworthy? **YES.**
- Timely: NHTSA just released 2025 data (April 2026)
- Novel: nobody has cross-tabulated the 2025 decline with FARS model-year vintage attrition data
- Counterintuitive: the "safest year" framing implies human improvement; the data suggests mechanical fleet turnover
- Actionable: if you're driving a 2000-2008 vehicle, the data says you're in the fleet's deadliest cohort

## Strongest Counterargument
The decline could be driven by post-COVID driving normalization (fewer late-night/high-speed pandemic driving patterns), not fleet composition. VMT increased but the TYPE of driving matters — if pandemic-era reckless driving is abating, that would reduce fatalities independent of fleet age. Also, behavioral programs (NHTSA's "Pathways to Safer Streets") may be working.

## Limitations
- FARS data covers 2014-2023; the 2025 decline data is preliminary NHTSA estimates
- Our FARS extract doesn't track which CALENDAR year each death occurred in, only which MODEL YEAR vehicle was involved
- We can't directly prove causation between fleet attrition and the 2025 decline — only correlation
- VMT-based rate calculations have ±15% uncertainty for low-volume models
- The analysis assumes uniform scrappage rates across vehicle classes, which isn't true (trucks last longer)

## Journalist
**Clara Rollover** — Consumer Safety Advocate. Her beat is practical car-buying guidance. This piece lets her synthesize the macro trend into actionable advice: if you're driving a 2000-2008 vehicle, upgrade. The fleet data says your car is statistically the most dangerous vintage on the road.
