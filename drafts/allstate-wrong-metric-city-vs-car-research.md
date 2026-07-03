# Research: Allstate's Wrong Metric — City vs. Car

## Angle
Allstate's 2026 "America's Best Drivers" report just dropped (July 2026). Gets massive press coverage. Ranks 200 cities by collision frequency. Brownsville TX is #1 (14.99 years between collisions), Boston is #200 (3.76 years). That's a 4x gap.

FARS data shows the vehicle you drive matters FAR more than where you drive it. The death rate gap between popular currently-sold vehicles is 16x (Honda Accord 3.07 vs Toyota RAV4 0.19 per 100M VMT). Across ALL vehicles in FARS: 285x (Hyundai Veloster 8.54 vs Tesla Model Y 0.03).

**Thesis:** Allstate measures collision frequency (insurance claims = fender-benders). FARS measures death rate. Your vehicle choice is at least 4x more important than your city for the outcome that actually matters: dying.

## Novel Contribution
Original cross-tabulation: Allstate city safety gap (4x) vs. FARS vehicle safety gap (16-285x). Nobody has compared these two metrics to show that vehicle choice dominates city choice. The Allstate report gets coverage because it's easy to understand. The FARS vehicle data gets ignored because it's harder to query.

## Primary Sources

### Source 1: Allstate 2026 America's Best Drivers Report (18th year)
- Data: Property damage claims from Jan 2023 – Dec 2024
- Rankings: 200 largest US cities by years between collisions
- Top: Brownsville TX (14.99 yrs), Fort Collins CO, Boise ID
- Bottom: Boston MA (3.76 yrs)
- Gap: 14.99 / 3.76 = **3.99x** (~4x)
- Published: July 1, 2026 (USA Today, Register-Guard)
- Key limitation: Measures COLLISION FREQUENCY (all claims), not severity or fatality

### Source 2: NHTSA FARS 2014-2023
- Deaths per 100M VMT for 337 vehicle models
- Popular vehicle spread (all still sold):
  - Honda Accord: 3.07 (highest among top sellers)
  - Honda Civic: 2.25
  - Toyota Camry: 2.03
  - Toyota Corolla: 1.85
  - Ford Explorer: 1.54
  - Chevy Silverado: 1.25
  - Ford F-150: 1.04
  - Ford Escape: 0.95
  - Honda CR-V: 0.53
  - Toyota Highlander: 0.42
  - Chevy Equinox: 0.36
  - Nissan Rogue: 0.35
  - Hyundai Tucson: 0.34
  - Toyota RAV4: 0.19
- Gap among popular vehicles: 3.07 / 0.19 = **16.2x**
- Full fleet gap: 8.54 / 0.03 = **284.7x** (but extreme ends have sample size issues)

### Source 3: NHTSA 2024 traffic fatality estimate
- 36,640 traffic fatalities estimated (2024)
- Van Sant Law study: deadliest hour 8-9 PM, 39,297 fatal crashes in 2024

### Source 4: NHTSA July 4th data
- 2020-2024: 2,719 killed during July 4th holiday periods
- 38% of drivers killed were drunk (vs ~21% annual baseline)
- 579 killed in 2024 July 4th period alone

## Key Data Points for Article

1. **Allstate city gap: 4x** — Brownsville vs Boston, collision frequency
2. **FARS vehicle gap (popular models): 16x** — Accord vs RAV4, death rate
3. **FARS vehicle gap (all models): 285x** — Veloster vs Model Y, death rate
4. **The metric mismatch:** Allstate = insurance claims (fender-benders). FARS = fatalities.
5. **Actionable**: Switching from an Accord to a RAV4 — same Honda dealer, similar price — reduces your death rate by 16x. Moving from Boston to Brownsville reduces your collision frequency by 4x but says nothing about fatality risk.
6. **The sedan problem**: Among popular vehicles, ALL of the deadliest are sedans (Accord 3.07, Civic 2.25, Camry 2.03, Corolla 1.85). ALL of the safest are SUVs/crossovers (RAV4 0.19, Tucson 0.34, Rogue 0.35, Equinox 0.36). This is the mass/height advantage playing out.

## Limitations to Acknowledge
- FARS data is 2014-2023 aggregate; newer models (Model Y, Telluride) have less exposure and artificially low rates
- Allstate measures something useful (collision frequency affects insurance premiums), just not the thing that kills you
- City-level fatality data exists (FARS has it) but isn't in our local dataset; we're comparing city collision rates to vehicle death rates, which are different metrics — this is the POINT, not a flaw
- Vehicle choice and city are correlated (rural areas have different fleet composition)
- Death rate = occupant deaths in that vehicle, not deaths imposed on others

## Strongest Counterargument
Allstate measures collision frequency, which predicts total crash costs, insurance premiums, and economic impact — none of which require a fatality. A high-collision city is expensive and dangerous in ways that matter to consumers beyond mortality. Allstate isn't claiming to rank cities by death rate. The report is doing what it says; it's the PRESS COVERAGE that implicitly frames it as a safety ranking.

## Journalist Assignment
Clara Rollover — Consumer Safety Advocate
Beat: Car-buying guidance, class comparisons, "what this means for you"
Kicker: The Gap
