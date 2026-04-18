# Research Notes: Crash Frequency vs Lethality Independence

## Thesis
Vehicle safety is actually two independent dimensions: how often a car appears in fatal crashes (frequency) and what percentage of those crashes kill the occupant (lethality). These are nearly uncorrelated (r = 0.18, r² = 3.3%), meaning traditional "death rate" metrics that multiply them together obscure whether a car's danger comes from exposure patterns or engineering failure.

## Novel Finding
- Pearson r between crash frequency (crashes per 10K fleet) and crash lethality (deaths per crash) = **0.1825**
- r² = 0.0333 → frequency explains only **3.3%** of lethality variance
- n = 272 vehicles with fleet >100K and crashes ≥50
- This is a cross-tabulation nobody has published: frequency and lethality as independent safety axes

## Primary Data
Source: NHTSA FARS 2014–2023 via fars_output.js
- FARS_BY_MODEL: 337 models, fields: make, model, cls, deaths, annual, crashes, fleet, vmt, rate
- Crash frequency = (crashes / fleet) × 10,000
- Crash lethality = deaths / crashes

## Key Data Points

### Crash Frequently, Survive (high freq, low leth)
- Ford E-350 Van: freq 72.1, lethality 41%, 776 deaths
- Lincoln Navigator: freq 31.3, lethality 42%, 209 deaths
- Toyota Tundra: freq 30.6, lethality 41%, 1,223 deaths
- Honda Odyssey: freq 25.8, lethality 43%, 864 deaths

### Crash Rarely, Die (low freq, high leth)
- Saturn S Series: freq 10.5, lethality 92%, 170 deaths
- Chevrolet Aveo: freq 8.9, lethality 89%, 138 deaths
- Chevrolet Corvette: freq 13.8, lethality 88%, 320 deaths
- Buick Park Avenue: freq 6.3, lethality 88%, 97 deaths
- Ford Escort: freq 2.5, lethality 88%, 57 deaths

### Worst of Both Worlds (high freq + high leth)
- Chevrolet S-10: freq 86.4, lethality 76%, combined 65.2
- Nissan Maxima: freq 88.8, lethality 66%, combined 58.8
- Chevrolet Cobalt: freq 72.6, lethality 81%, combined 58.7
- Chevrolet Impala: freq 85.2, lethality 67%, combined 57.5

### Best of Both Worlds (low freq + low leth)
- Kia Telluride: freq 1.4, lethality 36%, 31 deaths, fleet 612K
- Ford Bronco: freq 1.7, lethality 34%, 25 deaths
- Tesla Model 3: freq 1.3, lethality 43%, 92 deaths, fleet 1.575M
- Lexus NX: freq 1.8, lethality 35%, 28 deaths

### Class Averages
- Pickup: avg crash rate 26.8, avg lethality 52.5%
- Sedan: avg crash rate 21.6, avg lethality 65.4%
- SUV: avg crash rate 14.4, avg lethality 51.0%
- Sports Car: avg crash rate 29.3, avg lethality 70.7%
- Van: avg crash rate 17.8, avg lethality 52.4%

## External Sources
1. NHTSA FARS database — primary data source
2. IIHS fatality statistics — vehicle weight/size as lethality predictor
3. IIHS vehicle size and weight research — engineering factors in crash survivability
4. NHTSA ESC final rule (2007) — structural safety mandate context
5. NHTS travel survey — VMT estimates underlying rate calculations

## Original Contribution
- First computation of crash frequency vs lethality Pearson correlation across the full FARS dataset
- Quadrant analysis classifying 272 vehicles into four safety archetypes
- Demonstration that r² = 3.3% — traditional death rates conflate two independent risk factors
- Actionable: consumers should check BOTH dimensions, not just overall death rate

## Limitations
- FARS only captures fatal crashes — non-fatal crash frequency is unknown
- Fleet size estimates from sales data introduce uncertainty (±15% for low-volume models)
- Lethality includes all crash participants (not just occupants of the subject vehicle)
- Frequency is affected by driver demographics, usage patterns, and vehicle age distribution
- VMT estimates are class-level (NHTS), not model-specific

## Strongest Counterargument
The "independence" finding could be an artifact of confounders. Old, cheap cars (Saturn S, Aveo) have high lethality because they're structurally weak AND have low crash frequency because their elderly or low-income drivers drive fewer miles. New SUVs have low lethality because of modern engineering AND low frequency because of driver demographics (suburban families). Vehicle age and owner demographics could be driving both dimensions independently, making the low correlation a statistical artifact of third-variable confounding — not proof that the two dimensions are mechanically independent.

## Journalist
Mia Crumplezone — Safety Engineering Editor. Technical but accessible. This is her wheelhouse: vehicle design analysis with hard data.

## Kicker
Investigation
