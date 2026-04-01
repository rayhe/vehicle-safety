# Research: The Fleet Retirement Dividend

## Thesis
NHTSA's 8.2% fatality decline in H1 2025 has a hidden compositional driver: the deadliest vehicle generation in American history (model years 2000–2006) is aging off the road. This one 7-year cohort accounts for 69,625 FARS deaths — more than any other era. At 19–25 years old in 2025, these vehicles are being scrapped at a 4.5% annual rate. The "fleet retirement dividend" may be doing what decades of enforcement spending couldn't.

## Primary Sources

### 1. FARS Data (2014–2023) — Our Dataset
- **Deaths by model year era:**
  - Pre-2000: 28,036 deaths
  - 2000–2006: 69,625 deaths (37.2% of all MY 1995+ deaths)
  - 2007–2011: 36,830 deaths
  - 2012–2016: 32,841 deaths
  - 2017+: 19,726 deaths
- **Peak single model-year:** MY 2005 with 11,363 deaths across all vehicles
- **Peak vehicle-year:** 2001 Ford F-150 with 672 deaths from a single model year

### 2. NHTSA Early Estimates (Sep 2025)
- H1 2025: 17,140 fatalities (down 8.2% from 18,680 in H1 2024)
- Fatality rate dropped to 1.06 per 100M VMT (down 8.6%, lowest since 2014)
- 13 consecutive quarterly declines since Q2 2022
- VMT actually INCREASED by 12.1 billion miles — so more driving, fewer deaths
- Source: https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813756

### 3. S&P Global Mobility / Fleet Age Data (May 2025)
- Average US vehicle age: 12.8 years (record high, up from 12.6 in 2024)
- Passenger cars average 14.5 years old
- Light trucks average 11.9 years old
- Total fleet: 289 million light vehicles
- Passenger cars dropped below 100 million units for first time since 1970s
- Annual scrappage rate: 4.5%
- Source: https://www.spglobal.com/automotive-insights/en/blogs/2025/05/average-age-of-vehicle-in-us

### 4. IIHS ESC Effectiveness
- ESC reduces single-vehicle fatal crashes by 56%
- ESC reduces fatal rollovers by 70–90%
- ESC mandate: FMVSS 126, phased in 2007–2012, mandatory for all new vehicles by Sept 2011 (full compliance 2012)
- IIHS estimated 10,000 fatal crashes per year could be avoided with universal ESC
- Source: https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue

## Novel Contribution: The Compositional Math

The 2000–2006 cohort's outsized death toll is the product of three factors:
1. **Volume:** Peak US auto sales years (~17M/year), creating the largest single-era fleet in history
2. **Pre-ESC:** None of these vehicles were required to have ESC (mandate didn't start until 2007)
3. **Exposure time:** Old enough to be cheap used cars driven by higher-risk demographics, but young enough (at crash time) to still be functional

### Scrappage estimate for MY 2000–2006 cohort:
- At 4.5% annual scrappage, a vehicle cohort halves every ~15 years
- MY 2000 vehicles in 2025: 25 years old → ~32% survival rate
- MY 2006 vehicles in 2025: 19 years old → ~42% survival rate
- Rough estimate: only 35–40% of the 2000–2006 cohort is still on the road in 2025
- Compare to ~5 years ago (2020): ~55–65% still on road
- Delta: ~20–25 percentage points of the deadliest cohort scrapped in the last 5 years

### The dividend calculation:
- If 2000–2006 cohort accounted for ~25% of VMT in 2020 and ~12% in 2025
- And their per-VMT death rate is ~2x the post-2012 fleet (due to lack of ESC, older designs)
- Then their departure alone could explain a 3–5% reduction in the national fatality rate
- This is a FLOOR estimate — it doesn't account for the replacement vehicles being dramatically safer

## Limitations
1. FARS data is 2014–2023; we don't have 2024–2025 data broken by model year
2. Scrappage estimates are rough — actual survival curves vary by vehicle type
3. We can't isolate the fleet composition effect from behavioral changes (seatbelt use, enforcement)
4. New vehicles are heavier (SUV shift) which creates aggressor-vehicle externalities not captured here
5. The 2025 decline could also reflect post-COVID driving pattern normalization

## Strongest Counterargument
The decline could be driven primarily by improved EMS response times, road engineering improvements, or behavioral shifts (increased seatbelt use, rideshare reducing drunk driving). Fleet composition is one variable among many. Also: the shift to larger SUVs and trucks means new vehicles may be safer for OCCUPANTS but deadlier for other road users, partially offsetting the gains.

## Journalist
**Axle McScatter** — Data Visualization Editor
- "I ran the numbers. Then I ran them again. They didn't get better."
- Beat: Statistical roundups, national trends, methodology pieces
- Kicker: By The Numbers

## Kill Test
Is this genuinely surprising? YES. The conventional narrative credits enforcement ("Drive Sober or Get Pulled Over"), technology (AEB, lane keep), and general awareness. Nobody is talking about fleet composition as a primary driver of the decline. The data showing that ONE 7-year model-year cohort produced 69,625 deaths — and is now leaving the road — is a novel FARS cross-tabulation that reframes the entire conversation.
