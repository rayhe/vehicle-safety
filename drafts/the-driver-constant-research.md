# Research: The Driver Constant

## Thesis
Driver impairment rates are nearly identical across all vehicle models (~20% ± 2.4%), but death rates per 100M VMT vary by over 100x. Impairment explains less than 4% of death rate variance. The vehicle is the variable — not the driver.

## Kill Test
- **Novel?** YES. No prior Crash Report article has run a correlation analysis between impairment rates and death rates. Several articles note individual vehicles' impairment rates, but nobody has quantified the null correlation.
- **Surprising?** YES. The assumption is that "bad drivers buy bad cars." This proves the opposite: the same ~20% impairment rate appears whether you drive a Prius or a Cobalt, but one kills at 100x the rate of the other.
- **Shareable?** YES. "Driver behavior explains 4% of why some cars kill more" is a headline.

## Key Data

### The Constant
- Impairment rates by vehicle class:
  - Sedan: 20.4% (131 models, 197,584 drivers)
  - Pickup: 20.1% (25 models, 111,320 drivers)
  - SUV: 19.5% (115 models, 146,411 drivers)
  - Van: 18.1% (22 models, 21,360 drivers)
  - Sports Car: 22.5% (14 models, 14,061 drivers)
- Overall impairment coefficient of variation: 13.7%

### The Variable
- Death rate coefficient of variation: 99.2% (7.2x more variable than impairment)
- Death rate range: 0.03 (Tesla Model Y) to 8.54 (Hyundai Veloster) per 100M VMT
- That's a 285x spread

### The Null Correlation
- Pearson r = -0.1951 (slight NEGATIVE — higher impairment = slightly LOWER death rate)
- R² = 0.0381 (impairment explains 3.8% of death rate variance)
- By class:
  - Sedan: r = -0.27, R² = 0.07
  - SUV: r = -0.29, R² = 0.08
  - Pickup: r = -0.12, R² = 0.02
  - Sports Car: r = -0.52, R² = 0.27
- The negative correlation means vehicles with MORE impaired drivers tend to have LOWER death rates
- Explanation: newer, safer vehicles attract a normal cross-section of drivers (including impaired ones), while old deathtraps kill sober drivers

### Case Studies
- Toyota Solara: 4.25 death rate, only 4.1% impairment (sober deathtrap)
- Chevrolet Tracker: 7.83 death rate, only 12.7% impairment
- Cadillac CTS: 1.32 death rate, 25.9% impairment (drunk tank — safe car absorbing impaired drivers)
- Infiniti G37: 0.9 death rate, 25.0% impairment

### Within Midsize Sedans
All have ~20% impairment. Death rates:
- Honda Accord: 3.07 (7,102 deaths)
- Nissan Altima: 2.88 (4,787 deaths)
- Toyota Camry: 2.03 (6,328 deaths)
- Ford Fusion: 1.23 (2,168 deaths)
- Kia Optima: 0.58 (611 deaths)
- Same drivers, wildly different outcomes

## Sources
1. NHTSA FARS 2014-2023 (both BY_MODEL and TOXICOLOGY datasets)
2. IIHS fatality statistics for context on vehicle size/weight
3. NHTS for VMT estimation methodology
4. Statistical methodology: Pearson correlation, coefficient of variation

## Journalist
Axle McScatter — this is a numbers-and-methodology piece. Statistical roundup. "I ran the numbers" territory.

## Slug
the-driver-constant
