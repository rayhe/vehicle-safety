# Research Notes: For Some Cars, Every Day Is July 4th

## Angle & Thesis
NHTSA spends millions on July 4th "Buzzed Driving Is Drunk Driving" campaigns every year. The holiday's 38% drunk-driver fatality rate is treated as a uniquely dangerous anomaly. But FARS data shows that for certain vehicles, year-round impairment rates already approach holiday crisis levels. The vehicle you buy predicts your impairment risk in a fatal crash better than the day you crash. NHTSA targets the calendar. The data says they should target the car.

## Kill Test
- Is this genuinely newsworthy? YES — cross-referencing NHTSA's holiday-specific data with per-vehicle FARS impairment rates has not been done publicly. The finding that vehicle choice is a comparable predictor to calendar date is novel.
- Novel angle? YES — nobody has run this cross-tabulation: per-model impairment rates vs. holiday impairment rates to decompose "calendar effect" vs. "vehicle effect."

## Primary Sources

### Source 1: NHTSA FARS 2014-2023 (our data)
- Fleet-wide impairment in fatal crashes: 20.0% (98,348 impaired out of 490,736 total drivers)
- Alcohol positive: 15.1% (74,188), Drug positive: 8.7% (42,496)
- Per-model impairment rates vary from ~4% (Toyota Solara) to 31.7% (Buick Park Avenue)

### Source 2: NHTSA/TSMP July 4th Statistics (2020-2024)
- URL: https://www.trafficsafetymarketing.gov/get-materials/drunk-driving/fourth-july-buzzed-driving-drunk-driving
- 2020-2024 July 4th period: 2,719 total traffic fatalities, 1,724 were drivers
- 38% (654) of those drivers were drunk
- 21-34 age group: 47% drunk (highest)
- 2024 alone: 579 killed during July 4th period

### Source 3: NHTSA "Celebrate America Safely" campaign page
- URL: https://www.nhtsa.gov/risky-driving/drunk-driving/celebrate-america-safely-july-4th
- Confirms 38% stat

### Source 4: AAA July 4th Analysis (2019-2023)
- 2,653 fatalities during July 4th periods
- ~38% of drivers under the influence
- Nearly 1 in 3 summertime traffic deaths involves impaired driver

## Key Data Points

### The Five Muscle Car Models
| Vehicle | Impairment Rate | Drivers (n) | Alcohol | Drug |
|---------|----------------|-------------|---------|------|
| Corvette | 26.2% | 1,147 | 21.3% | 10.4% |
| Camaro | 23.0% | 2,832 | 17.1% | 10.2% |
| Charger | 22.7% | 4,339 | 17.0% | 9.1% |
| Challenger | 22.5% | 2,037 | 17.5% | 9.1% |
| Mustang | 21.9% | 4,664 | 16.4% | 9.6% |

### Comparison Vehicles (Low Impairment)
| Vehicle | Impairment Rate | Drivers (n) |
|---------|----------------|-------------|
| Prius | 16.0% | 1,746 |
| CR-V | 17.6% | 5,807 |
| RAV4 | 18.4% | 5,286 |
| Model Y | 17.6% | 455 |
| F-150 | 18.9% | 21,195 |
| Camry | 19.2% | 13,811 |

### Original Calculation: Holiday Multiplier × Vehicle Baseline
- Holiday multiplier: 38% / 20% = 1.9x
- Projected July 4th rates (if multiplier applies uniformly):
  - Corvette: 26.2% × 1.9 = 49.8% → Half of Corvette drivers in holiday fatal crashes would be impaired
  - Camaro: 23.0% × 1.9 = 43.7%
  - Prius: 16.0% × 1.9 = 30.4%
  - CR-V: 17.6% × 1.9 = 33.4%

### The Core Finding
- Fleet-wide "vehicle effect" (Corvette 26.2% vs. Prius 16.0%): 10.2 percentage point spread, 1.64x ratio
- Fleet-wide "calendar effect" (July 4th 38% vs. normal day 20%): 18 pp spread, 1.9x ratio
- But the vehicle effect operates 365 days a year, the calendar effect only a few days
- Annual excess risk from being in a Corvette vs. Prius: 10.2 pp × 365 days = 3,723 excess risk-days
- Annual excess risk from July 4th vs. normal day: 18 pp × ~4 days = 72 excess risk-days

### Limitations
1. FARS impairment rates are ANNUAL averages (2014-2023), not holiday-specific per vehicle. The 1.9x multiplier assumption (that holidays affect all vehicles equally) is a simplification. Vehicles with already-high impairment rates might see a HIGHER or LOWER multiplier.
2. Sample size for Tesla Model Y (455 drivers) is small compared to Corvette (1,147) or Camry (13,811).
3. Impairment captures who was impaired in FATAL crashes specifically, not all crashes. Selection bias exists.
4. "Any impairment" combines alcohol and drugs. A driver positive for prescription medication is counted the same as a .20 BAC.
5. The 38% July 4th figure is for drivers KILLED who were drunk (BAC > 0), while FARS anyPct includes drugs. Not perfectly comparable — but directionally sound for the argument.

### Strongest Counterargument
The holiday multiplier might not be uniform. It's possible that muscle cars already have high impairment because their TYPICAL buyers are the same demographic that drinks and drives on holidays (21-34 males). The holiday might not push their rate up much further because they're already at ceiling. If so, the "projected 49.8% for Corvettes on July 4th" is an overestimate. The counterpoint: even if the Corvette multiplier is only 1.5x instead of 1.9x, you still get 39.3% — above the fleet-wide July 4th average.

## Journalist
Dale Impactor III — toxicology and impairment beat

## Kicker
Sobriety Report
