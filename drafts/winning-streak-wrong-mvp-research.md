# Research: The Winning Streak's Wrong MVP

## Angle
NHTSA announced 2025 full-year data: 36,640 traffic deaths, down 6.7% from 2024, lowest fatality rate since 2014 (1.10 per 100M VMT). Twelve consecutive quarterly declines — the longest sustained improvement in modern FARS history. NHTSA credits law enforcement partnerships and cracking down on unqualified truckers.

**The thesis:** The FARS model-year data tells a different story. Pre-ESC-mandate vehicles (model year <2012) account for 71.9% of all deaths in the FARS dataset. Pre-2010 vehicles account for 65.4%. These zombie-fleet vehicles are aging out at approximately 6-8% per year through normal fleet attrition (scrapping, accidents, trade-ins). That attrition rate alone explains 4-5% annual fatality decline — close to the observed 6.7% drop. The "winning streak" isn't about cops pulling over more drunk drivers. It's about 1997 Silverados finally going to the crusher.

**Novel contribution:** A direct mathematical challenge to NHTSA's causal attribution, using model-year fatality data to estimate the "fleet turnover dividend" and compare it to the observed decline.

## Primary Sources

### 1. NHTSA 2025 Full-Year Data
- Source: https://nhtsa.gov (released June 2026)
- 36,640 traffic fatalities in 2025, down 6.7% from 2024 (~39,270 estimated)
- Fatality rate: 1.10 per 100M VMT (second-lowest in recorded history)
- VMT increased by ~29.8 billion miles (0.9%)
- 39 states + DC + PR saw decreases
- Secretary Duffy credits: law enforcement partnerships, removing "dangerous foreign truck drivers," Freedom Means Affordable Cars initiative
- NHTSA Administrator Morrison: "doubling down on safety strategies that reduce risky driving behaviors"

### 2. NHTSA Quarterly Data (2025)
- Q1 2025: 8,055 deaths (down 6.3%) — 12th consecutive quarterly decline
- H1 2025: 17,140 deaths (down 8.2%)
- Q1-Q3 2025: 27,365 deaths (down 6.4%)
- Q1 2025 rate: 1.05 per 100M VMT — lowest quarterly rate since Q1 2019

### 3. FARS Model-Year Death Distribution (2014-2023 dataset)
- Total deaths in dataset: 187,058
- Pre-ESC mandate (<2012 MY): 134,491 (71.9%)
- Post-ESC mandate (2012+ MY): 52,567 (28.1%)
- By era:
  - Pre-2005: 75,957 (40.6%)
  - 2005-2009: 46,369 (24.8%)
  - 2010-2014: 32,305 (17.3%)
  - 2015-2022: 32,427 (17.3%)

### 4. Zombie Fleet by Vehicle Class
- Pickups: 81.7% of deaths from pre-ESC vehicles (slowest fleet turnover — work trucks, rural, long-lived)
- Vans: 75.7% pre-ESC
- Sedans: 69.5% pre-ESC
- SUVs: 68.0% pre-ESC
- Sports Cars: 64.2% pre-ESC

### 5. ESC Effectiveness (IIHS/NHTSA research)
- ESC reduces single-vehicle crash fatalities by ~50% (IIHS)
- All fatal crash types: ~33% reduction (IIHS)
- FMVSS 126: ESC mandatory for all passenger vehicles, phased 2009-2012, full compliance 2012 MY
- By 2025, the median vehicle age is ~12.6 years (S&P Global Mobility) — meaning the median vehicle on the road is a ~2013 MY, right at the ESC mandate boundary

### 6. Fleet Attrition Rate
- US vehicle scrappage rate: ~6-7% of registered vehicles per year (BTS/R.L. Polk data)
- Oldest vehicles scrapped first (survivorship bias)
- In 2025, ~15-20 million pre-2010 vehicles were likely scrapped or permanently retired
- Each year, the share of pre-ESC vehicles in the active fleet drops by ~5-8 percentage points

## Calculation: Fleet Turnover Dividend

If pre-ESC vehicles (71.9% of deaths) are being removed from the fleet at ~7% per year:
- Expected annual reduction from fleet turnover alone: 0.719 × 0.07 ≈ 5.0%
- Observed decline: 6.7%
- Residual after fleet turnover: ~1.7% — could be behavioral, could be newer safety tech (lane keep, AEB on newer vehicles)

This is rough but directionally correct. The fleet turnover dividend alone explains ~75% of the observed decline.

## Counterarguments (at full strength)

1. **NHTSA's enforcement claim has SOME basis:** DUI checkpoints, campaigns like "Drive Sober or Get Pulled Over" and "Drive High, Get a DUI" are deployed nationally. NHTSA expanded these with Administrator Morrison. Some evidence suggests high-visibility enforcement reduces DUI fatalities by 10-15% in deployment areas.

2. **Fleet turnover alone doesn't explain quarterly variation:** The fleet turnover is a slow, steady process — it doesn't produce quarter-to-quarter swings. Q1 2025 rate (1.05) vs H1 2025 rate (1.06) vs full-year rate (1.10) suggests behavioral factors do contribute within-year variation.

3. **New vehicle sales mix matters too:** More Americans are buying crossovers/SUVs (better crash protection for occupants, worse for pedestrians). This shift provides occupant protection independent of ESC.

4. **Weather and economic cycles:** Mild winters reduce crashes. Economic conditions affect VMT patterns (more highway, less surface street → lower fatality rate per mile).

## Limitations

- FARS model-year data is 2014-2023; we're extrapolating to 2025 fleet composition
- Scrappage rates are estimates; actual fleet composition data lags 2-3 years
- VMT by vehicle age is estimated, not measured
- Impairment data is only available for fatal crashes (selection bias)
- The 6.7% decline could be partially driven by changes in crash reporting methodology

## Journalist: Vin Wreckage
- Beat: Paradoxes, counterintuitive findings, the big picture
- Voice: Philosophical, slightly unhinged. Cosmic absurdity in crash data.
- Kicker: Investigation

## Kill Test
- **Genuinely newsworthy?** YES — NHTSA just released 2025 full-year data showing the longest quarterly decline streak
- **Novel angle?** YES — directly challenging NHTSA's causal attribution with model-year data
- **3+ primary sources?** YES — NHTSA 2025 data, FARS model-year data, IIHS ESC effectiveness research, fleet attrition data
- **Would a reader share?** YES — "The government is taking credit for your car's birthday" is inherently shareable
- **Actionable?** YES — if you're driving a pre-2012 vehicle, the data says your car is statistically part of the problem. Check your vehicle's ESC status. Consider the age of your car as a safety factor.
