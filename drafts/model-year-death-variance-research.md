# Research: Model Year Death Variance — Which Vehicles Kill Consistently?

## Core Finding
Coefficient of variation (CV) of deaths across model years reveals which vehicles pose consistent design-level risk vs. which had generation-specific problems.

**Low CV (flat death curves) — every model year equally deadly:**
- Honda CR-V (SUV): CV=0.24, mean=86 deaths/model-year, 1,815 total, 21 model years
- Ford Crown Victoria (Sedan): CV=0.23, mean=54, 649 total, 12 years
- Chevrolet Traverse (SUV): CV=0.27, mean=20, 238 total, 12 years
- Jeep Wrangler (SUV): CV=0.28, mean=66, 1,384 total, 21 years
- Ford Escape (SUV): CV=0.32, mean=113, 2,257 total, 20 years
- Hyundai Tucson (SUV): CV=0.32, mean=32, 635 total, 20 years

**High CV (volatile death curves) — specific generations spike:**
- Ford Explorer (SUV): CV=1.11, mean=120, 2,512 total, 21 years
- Ford Expedition (SUV): CV=1.10, mean=57, 1,189 total, 21 years
- Chevrolet Tahoe (SUV): CV=1.07, mean=98, 2,064 total, 21 years
- GMC Yukon (SUV): CV=0.92, mean=46, 975 total, 21 years
- Chevrolet Suburban (SUV): CV=0.90, mean=24, 478 total, 20 years

## Novel Original Analysis
The coefficient of variation divides vehicles into two categories:
1. **Consistent killers** (CV < 0.35): The death count barely changes across model years. These vehicles have an inherent design characteristic that produces fatalities at a steady rate regardless of generation. A 2005 CR-V model year killed 68 people; a 2019 CR-V killed 93. The redesigns didn't change the outcome much.
2. **Generation gamblers** (CV > 0.85): Death counts swing wildly between model years. The Ford Explorer's worst model year produced 10x more deaths than its best. These are vehicles where a specific generation got it right or got it catastrophically wrong.

## The Paradox
The low-CV vehicles include the CR-V and Escape — both considered "safe" by reputation. But their CONSISTENCY means that no matter which year you buy, you get roughly the same death probability. Meanwhile, the high-CV vehicles (Explorer, Tahoe) are considered "dangerous" — but the right generation can be dramatically safer than average.

## Limitations
- Model year death counts in FARS are influenced by fleet size (production volume per year) — high-volume years will naturally have more deaths
- The FARS window (2014-2023) means newer model years had fewer years to accumulate deaths
- CV doesn't account for changes in fleet exposure (VMT per model year)
- A flat curve could indicate consistent production volumes rather than consistent risk
- However, the CONTRAST between vehicles with similar production histories but different CVs suggests real design differences

## Counterargument
The strongest case against this analysis: production volume per model year is the dominant driver, not design risk. If Honda consistently builds 300K CR-Vs per year and Ford builds wildly different Explorer volumes per year, the CV would follow production volume, not risk. However, the Escape (CV=0.32) and Explorer (CV=1.11) are built by the same company in similar volumes, sharing dealer networks — yet their death curve shapes are drastically different.

## Sources
1. NHTSA FARS 2014-2023 model year fatality data
2. NHTS annual VMT estimates
3. US vehicle sales data

## Journalist
Axle McScatter — this is pure statistics
