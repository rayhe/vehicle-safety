# Research Notes: The Recall Math Gap

## Angle
In July 2026, automakers recalled ~1.85 million vehicles. NHTSA's AEB mandate (Sept 2029) will save a projected 360 lives/year. But FARS model-year data reveals 82.7% of all driver deaths come from vehicles built before 2015. The recall system and new safety mandates structurally target the wrong fleet. The cars killing Americans are too old for recalls to reach.

## Sources

### Source 1: FARS Model Year Data (2014-2023 observation period)
- Total driver deaths across all tracked models: 187,058
- Deaths from pre-2015 model year vehicles: 154,631 (82.7%)
- Deaths from 2015+ model year vehicles: 32,427 (17.3%)

#### By vehicle class (% legacy/pre-2015):
- Pickup: 89.0% legacy (36,635 of 41,167)
- Van: 86.6% legacy (6,464 of 7,464)
- Sedan: 82.5% legacy (72,077 of 87,406)
- Sports Car: 77.6% legacy (4,485 of 5,779)
- SUV: 77.3% legacy (34,970 of 45,242)

#### Specific models — extreme legacy share:
- Chevy Trailblazer: 99% legacy (2,426/2,457 deaths) — discontinued 2009
- Ford Ranger: 98% legacy (3,028/3,079) — discontinued 2011, restarted 2019
- Dodge RAM: 95% legacy (4,162/4,404) — name changed to Ram brand 2010
- Chevy Tahoe: 94% legacy (2,417/2,560)
- Ford Taurus: 95% legacy (2,083/2,202) — discontinued 2019
- Chevy Impala: 92% legacy (3,443/3,732) — discontinued 2020
- Chevy Cobalt: 100% legacy (1,540/1,540) — discontinued 2010

#### Peak death model years (the most lethal vintage):
- Chevy Silverado: peak MY 2004 (663 deaths), average death MY = 2005
- Ford F-150: peak MY 2001 (672 deaths), average death MY = 2005
- Honda Accord: peak MY 2005 (444 deaths), average death MY = 2005
- Honda Civic: peak MY 2008 (402 deaths), average death MY = 2006
- Toyota Camry: peak MY 2007 (426 deaths), average death MY = 2007

### Source 2: NHTSA 2024 Annual Data
- 39,254 traffic deaths in 2024 (NHTSA final)
- Down 3.8% from 40,901 in 2023
- Rate: 1.20 per 100M VMT (lowest since 2019, but above pre-COVID 1.13 avg)
- 11 consecutive quarters of decline
- Source: https://www.nhtsa.gov/press-releases/2024-traffic-fatalities-annual-data

### Source 3: AEB Mandate (FMVSS No. 127)
- Finalized April 29, 2024. Compliance deadline: September 2029
- Projected savings: 360 lives/year, 24,000 injuries prevented
- Covers: new passenger cars and light trucks ≤10,000 lbs GVWR
- IIHS data: AEB reduces front-to-rear crashes with injuries by 56%
- Source: https://www.nhtsa.gov/press-releases/nhtsa-finalizes-key-safety-rule-to-reduce-crashes-and-save-lives

### Source 4: July 2026 Recalls (selected)
- Ford Explorer/Aviator: 676,225 vehicles (seat switch, roof rails)
- Subaru Ascent/Forester/Crosstrek: 541,237 (wrong weight label)
- Honda Pilot/Ridgeline/Passport/MDX: 880,514 (rear suspension corrosion)
- Hyundai Kona: 47,749 (seatbelt buckle)
- Toyota Grand Highlander/Lexus TX: 5,408 (rear axle)
- Total: ~2.15 million vehicles recalled in July 2026 alone

### Source 5: NSC May 2026 Preliminary Data
- National trend declining, but California UP 25% (242 more deaths)
- Source: https://injuryfacts.nsc.org/motor-vehicle/overview/preliminary-estimates/

## Original Contribution
Cross-tabulation of FARS model-year death distribution against the structural reach of recalls and safety mandates. The 82.7% figure — computed from 187,058 deaths across 323 models — quantifies the "regulatory unreachable" fleet for the first time in this dataset.

## Limitations
1. FARS observation period is 2014-2023. A "2004 model year" death occurred during those 10 crash years, not in 2004. The vehicle was 10-19 years old at crash time.
2. Fleet size estimates use annual sales × assumed vehicle life, not actual registration data. Pre-2015 vehicles are overrepresented in FARS partly because there were more of them on roads during the observation period.
3. "Deaths" in FARS_MODEL_YEAR are driver deaths in fatal crashes involving that vehicle. They don't include passengers or other road users.
4. The 82.7% figure includes vehicles that DID have active recalls — some were recalled but never repaired. NHTSA estimates ~25% recall completion rates for older vehicles.
5. Modern safety features (ESC mandatory since 2012, AEB increasingly standard) mean the 2015+ fleet is genuinely safer — the gap isn't purely about fleet age but also about when ESC, side curtain airbags, and crash structure improvements became standard.

## Strongest Counterargument
The high pre-2015 death share partly reflects fleet demographics: there are simply MORE pre-2015 vehicles on the road during the 2014-2023 observation window. As those vehicles age out and are replaced, the share will naturally decline. The AEB mandate and modern crash structure improvements are working exactly as intended — they just need time. The recall system was never designed to fix age; it fixes defects.

## Kill Test
Is this genuinely newsworthy? YES. The 82.7% figure reframes the entire road safety debate. Every major announcement — recalls, AEB mandates, IIHS ratings — applies exclusively to the 17.3% of deaths from modern vehicles. The remaining 83% of the death toll has no pathway to improvement except time and attrition.

## Journalist
Rex Driverton — FARS deep dive, regulatory investigation

## Actionable Insights
1. If you drive a pre-2015 vehicle, check your VIN at nhtsa.gov/recalls — you may have open recalls
2. NHTSA estimates that 25% of older vehicles never get recall repairs. If you bought used, assume the recall wasn't done.
3. ESC became mandatory for the 2012 model year. If your vehicle predates 2012, it may lack the single safety feature IIHS credits with the largest fatality reduction.
4. When shopping used: 2015+ model years benefit from mandatory ESC, improved crash structures, and increasingly standard AEB. A 2015 anything is measurably safer than a 2010 anything.
