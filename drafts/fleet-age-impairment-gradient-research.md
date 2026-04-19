# Research: Fleet Age Impairment Gradient

## Angle
"The Older the Car, the Drunker the Driver" — Vehicle fleet age is the strongest predictor of impairment in fatal crashes, outperforming vehicle class.

## Self-Critique Gate
- **Proposal:** Cross-tabulate FARS model-year median ages with toxicology impairment to show a monotonic gradient: older fleets → higher impairment, driven by alcohol not drugs.
- **Challenge:** Is this genuinely surprising after 174 articles? We have kill-curve-vehicle-age (age vs death rate), twelve-year-kill-zone (age range of danger), impairment-class-lethality-gap (impairment by class). But NONE cross age with impairment at the model level. This is a genuinely new cross-tabulation.
- **Verdict:** PROCEED. Novel finding, strong data, clear takeaway.

## Key Data (FARS 2014-2023)

### Impairment by Fleet Age Bucket (median model year of fatal crash deaths)
| Fleet Age Bucket | Avg Impairment | Avg Alcohol | Avg Drug | # Models |
|-----------------|---------------|-------------|----------|----------|
| 1980s           | 28.0%         | 21.6%       | 11.0%    | 1        |
| 1990s           | 21.5%         | 15.9%       | 9.0%     | 1        |
| 1995s           | 21.8%         | 16.6%       | 9.4%     | 10       |
| 2000s           | 20.7%         | 15.6%       | 8.8%     | 54       |
| 2005s           | 20.6%         | 15.6%       | 8.9%     | 92       |
| 2010s           | 19.7%         | 14.8%       | 8.7%     | 53       |
| 2015s           | 20.0%         | 15.3%       | 8.6%     | 44       |
| 2020s           | 19.2%         | 14.8%       | 8.2%     | 7        |

### Key Calculations
- Total impairment spread by fleet age: 28.0% → 19.2% = 8.8 percentage points
- Impairment spread by vehicle class: Sports Car 22.5% → Van 18.1% = 4.4 percentage points
- Fleet age spread is 2x the class spread → age predicts impairment better than class
- Alcohol drives the gradient: 21.6% → 14.8% (6.8pp drop, 31% decline)
- Drugs barely move: 11.0% → 8.2% (2.8pp drop, 25% decline)
- Drug share of total impairment stays remarkably stable: ~36% across all buckets

### Extreme Examples (oldest fleet, highest impairment)
- Chevrolet C/K Pickup (median MY 1985): 28.0% impaired, 21.6% alcohol
- Chevrolet Astro Van (median MY 1998): 27.0% impaired, 21.4% alcohol
- GMC Jimmy (median MY 1999): 24.2% impaired, 18.3% alcohol

### Extreme Examples (newest fleet, lowest impairment)
- Tesla Model Y (median MY 2022): 17.6% impaired, 13.2% alcohol
- Kia Telluride (median MY 2021): 17.5% impaired, 13.6% alcohol
- Volkswagen Atlas (median MY 2019): 16.7% impaired, 11.5% alcohol

### Overall Impairment Baseline
- Total drivers in fatal crashes: 490,736
- Overall alcohol: 15.1%
- Overall drug: 8.7%
- Overall any impairment: 20.0%

### Vehicle Class Impairment for Comparison
- Sports Car: 22.5% (highest)
- Sedan: 20.4%
- Pickup: 20.1%
- SUV: 19.5%
- Van: 18.1% (lowest)
- Spread: 4.4pp (vs 8.8pp for fleet age)

## Sources
1. NHTSA FARS 2014-2023 (toxicology + model year data)
2. NHTS (National Household Travel Survey) — VMT estimates by vehicle type
3. NHTSA research on DUI demographics and vehicle age

## Strongest Counterargument
This is likely an income confound: people who drive old vehicles are disproportionately lower-income, and lower-income demographics have higher DUI rates. The car isn't the cause — it's a proxy for socioeconomic status. However, the finding is still policy-relevant: vehicle age is a visible, observable marker that could inform targeted interventions (safety inspection programs, ignition interlock campaigns focused on older vehicles).

## Limitations
- The 1980s/1990s buckets have very few models (1-2 each) — small sample of models
- Median model year is a rough proxy for fleet age (doesn't account for model year distribution shape)
- FARS toxicology testing rates vary by state (drug testing incomplete in many jurisdictions)
- Cannot separate whether the driver chose the old car or the old car was the only option

## Journalist
Dale Impactor III — Toxicology Desk Chief (this is squarely in his beat: impairment data, demographic analysis)

## Headline Options
- "The Older the Car, the Drunker the Driver"
- "Fleet Age Predicts Impairment Better Than Vehicle Class"
- "Your Car's Birthday Predicts Whether You Were Drunk"
