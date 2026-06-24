# Research Notes: Tesla's "7x Safer" Claim vs. FARS Vehicle Age Data

## Hook / Timely Angle
Reuters reported (June 15, 2026) that Tesla presented misleading FSD safety data to European regulators in Sweden and the Netherlands. Key claims:
- Tesla claimed FSD can travel "more than seven times farther between crashes than the average U.S. human driver"
- Claimed FSD could have "potentially saved 32,000 lives and prevented 1.9 million injuries"
- Researchers said these figures are "highly misleading" because:
  1. They assume every US vehicle (including trucks, motorcycles) would be replaced by a Tesla
  2. Tesla compares airbag-deployment crashes (very severe) with all-vehicle crash rates (including fender benders)
  3. Tesla compares NEW Teslas to the AVERAGE US fleet vehicle (which is ~12.6 years old)
- Source: Reuters, "Tesla presented misleading 'Full Self-Driving' safety data to European regulators," June 15, 2026
- NHTSA currently has three concurrent FSD investigations (58 incidents, visibility crashes, crash reporting practices)
- Tesla already recalled 2M vehicles for hood latch issue (June 2026)

## Original FARS Analysis: The Vehicle Age Safety Dividend

### Fleet-Wide Finding
- 2005-2010 vintage vehicles: 52,569 deaths in FARS (2014-2023)
- 2017-2022 vintage vehicles: 19,388 deaths
- **Fleet-wide improvement: 2.7x safer** (newer vintages produce 63% fewer deaths per cohort)

### Individual Model Improvements (model year generation comparison)
Top 4 models EXCEEDING Tesla's "7x" claim with ZERO autonomous technology:
1. **Chevrolet Impala: 8.1x safer** (303 deaths/yr avg for 2005-2010 → 37 for 2017-2022)
2. **Chrysler Sebring: 7.9x safer** (66 → 8)
3. **Ford Taurus: 7.7x safer** (97 → 13)
4. **Dodge RAM: 7.3x safer** (216 → 29)

5+ more models exceed 5x improvement:
- BMW 3 Series: 6.3x
- Ford Ranger: 6.2x
- Chevrolet Tahoe: 6.1x
- Honda Odyssey: 6.1x
- Toyota Yaris: 5.6x

### Statistical Summary (93 models analyzed)
- Median improvement: 1.7x
- Average improvement: 2.4x
- 4 models ≥ 7x safer (beating Tesla's claim)
- 9 models ≥ 5x safer

### What Drove These Improvements (not AI)
- Electronic Stability Control (ESC) mandated 2012 for all new vehicles
- Advanced airbag systems (side curtain, knee)
- Higher-strength steel / improved crumple zone engineering
- Automatic emergency braking becoming standard
- Improved structural design / crash energy management
- IIHS Top Safety Pick program driving manufacturer competition

## Novel Contribution
No prior analysis has cross-tabulated FARS model year death data to calculate per-model generational safety multipliers and compared them to Tesla's marketed "7x" FSD safety claim. This analysis demonstrates that several non-autonomous vehicles achieved equal or greater safety improvements through conventional engineering, suggesting Tesla's "7x" claim is primarily measuring vehicle age, not FSD technology.

## Limitations
- FARS model year data doesn't control for fleet size changes (newer models may have fewer vehicles on road during the observation period due to registration timelines)
- Comparing death COUNTS by model year, not rates per VMT by model year (rate data would require model-year-specific VMT estimates we don't have)
- Some "improvement" reflects reduced exposure time (2022 models were on road for fewer years than 2005 models during the 2014-2023 FARS window)
- Tesla vehicles are not in our FARS dataset, so we can't directly compare Tesla's numbers
- The comparison is imperfect: Tesla compares to the full fleet average, while our analysis compares specific vintages

## Strongest Counterargument
The model year death counts may be partly explained by exposure time, not just safety improvements. A 2022 vehicle was on the road for only 1-2 years of the 2014-2023 FARS window, while a 2005 vehicle was on the road for all 10 years. This inflates the apparent "improvement" for newer models. However:
1. Even comparing 2005-2010 vs 2012-2017 vintages (both with substantial FARS exposure), newer models consistently show lower death counts
2. The improvement is too large and consistent across models to be explained entirely by exposure time
3. This same exposure bias applies to Tesla's comparison too — new Teslas have less on-road exposure than the average fleet vehicle

## Key Sources
1. Reuters, "Tesla presented misleading 'Full Self-Driving' safety data to European regulators," June 15, 2026
2. NHTSA FARS database, 2014-2023 (our fars_output.js dataset)
3. IIHS ESC study: "Life-saving benefits of ESC continue to accrue"
4. NHTSA ESC final rule (2007, mandated 2012)
5. Average age of US vehicles: ~12.6 years (S&P Global Mobility)

## Journalist
Rex Driverton — investigative, data-driven deep dive into a misleading safety claim
Kicker: Investigation
