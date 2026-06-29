# Research Notes: The Recall Exposure Math

## Hook (current events, week of June 23-29, 2026)
This week's recall activity:
- **New recalls:**
  - Hyundai Tucson (96,310) — dashboard blanks while driving (software)
  - Toyota/Lexus instrument panel (81,893) — combination meter fails to display warnings (software)
  - Toyota/Lexus/Subaru EVs (20,991) — two chips fight over same memory address, EV system shuts down (software)
  - Land Rover (250,857) — airbag clockspring corrosion, 100% defect rate, airbags may not deploy
  - Total new: ~449,000 vehicles

- **Investigations closed (probes resolved after prior recalls):**
  - Tesla Model 3/Y steering (376,241) — software fix via OTA
  - Honda Odyssey airbag (441,002) — side airbags deploying from potholes
  - Total resolved: ~817,000 vehicles

## Key Data Sources

### Recall Masters 2025 Annual Report
- 447 NHTSA-mandated recall campaigns in 2025
- 223 voluntary manufacturer recall notices
- Total: 670 campaigns affecting 28+ million passenger vehicles
- Software/Electronics: 119 campaigns, 8,192,000 vehicles (largest category)
- Powertrain: 87 campaigns, 7,985,863 vehicles
- Airbags: 19 campaigns, 404,337 vehicles (declining)
- First-year completion rate: ~50.3% repaired

### NHTSA 2025 Annual Recall Report
- Remedy available within 60 days: 80% of recalls (79% of vehicle count)
- 2-6 months: 15% of recalls (26% of vehicles)
- 6-12 months: 5% of recalls (17% of vehicles)
- >1 year: 1% of recalls (4% of vehicles)

### NHTSA ODI Quarterly Metrics (FY25)
- VOQ complaints: 16,055 → 18,427 → 18,421 → 20,196 (26% increase Q1→Q4)
- Recall count: 271 → 222 → 265 → 234 (roughly flat, ~240/quarter)
- Investigations opened: 10 → 8 → 5 → 10 (roughly flat)

### US Vehicle Fleet Context
- ~290 million registered vehicles in the US (per FHWA)
- ~36,000 annual traffic fatalities (FARS)

## The Math (novel contribution)

### Per-vehicle recall probability
- 28 million vehicles recalled per year / 290 million registered = 9.7% per year
- Average vehicle life: ~12 years
- Probability of NEVER being recalled over 12 years: (1 - 0.097)^12 = 0.903^12 = ~0.295
- Probability of being recalled AT LEAST ONCE: 1 - 0.295 = **~70.5%**
- Most vehicles will be recalled at least once in their lifetime

### The unrepaired gap
- 28 million recalled per year
- 50.3% fixed in year 1 → 13.9 million unrepaired after year 1
- Even at 80% eventual completion, 5.6 million per year NEVER get fixed
- Cumulative unrepaired fleet: hard to estimate, but NHTSA has estimated 50-70 million vehicles with outstanding recalls at any given time
- Per Carfax/other industry sources: roughly 1 in 4 vehicles on the road has an open recall

### This week in context
- ~449,000 new recalls this week
- Annualized: 449K × 52 = 23.3 million (close to annual average)
- 1 in 645 US vehicles recalled in a single week
- But: ~817,000 resolved this same week (investigations closed post-recall)

## Strongest Counterargument
Not all recalls are equal. A dashboard that blanks for 2 seconds (Hyundai) is qualitatively different from airbags that won't deploy (Land Rover). Lumping them together inflates the perceived risk. Also, the high annual recall volume partly reflects BETTER defect detection, not worse manufacturing.

## Limitations
- Recall Masters data is from 2025; 2026 data not yet annualized
- Fleet size is approximate
- The 50.3% completion rate is for first-year; long-term rates are higher but not 100%
- We cannot directly determine from FARS whether fatally crashed vehicles had outstanding recalls
- "1 in 4 with open recall" industry estimate is unverified

## Angle
"Your Car Has Almost Certainly Been Recalled. The Math Says You Didn't Fix It."
The probability that your vehicle has been recalled at least once over its lifetime is ~70%. The probability that you completed the repair is... lower. Every year, roughly 14 million vehicles join the unrepaired recall fleet. This is the math behind the headline.

## Journalist
Axle McScatter — data obsessive, loves probabilistic reasoning, treats numbers like sports stats.
Kicker: By The Numbers
