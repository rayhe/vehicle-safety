# Research: The Ignition Interlock Compliance Gap

## Thesis
Ignition interlocks — $70-150/month breath-test devices wired to the ignition — reduce alcohol-impaired fatal crashes by 16-26% where mandated. Thirty-four states now require them for all DUI offenders. But only 15-20% of offenders actually install them. The technology works. The enforcement doesn't. And once removed, re-arrest rates revert to baseline. The device is a leash, not a cure — and we're barely holding the leash.

## Key Data Points

### IIHS Studies (2018, revised)
- All-offender interlock laws reduce drivers with BAC ≥0.08 in fatal crashes by **26%** (revised from initial 16% estimate)
- Repeat-offender-only laws: **9%** reduction
- Repeat + high-BAC first offender laws: **20%** reduction
- If all states had all-offender laws in 2016: **714 deaths prevented** that year
- Source: Eric Teoh, IIHS senior statistician. Published in American Journal of Preventive Medicine.
- URL: https://www.iihs.org/news/detail/state-laws-mandating-interlocks-for-all-dui-offenders-save-lives

### GAO Report (GAO-14-559)
- **Only 15-20% of convicted DUI offenders actually install interlocks** even when mandated
- Once devices removed, DWI re-arrest rates return to pre-interlock levels
- Low installation due to: monitoring gaps, fees/penalties barriers, states lacking enforcement resources
- URL: https://www.gao.gov/products/gao-14-559

### MADD Data (2018-2019)
- Interlocks prevented **3.78 million drunk driving attempts** over 14 years
- In 2017 alone: **354,372 attempts blocked**
- **34 states** now have all-offender interlock laws (NJ became #34)
- Interlocks reduce repeat offenses by **67%**
- Source: https://madd.org

### Washington State Case Study (IIHS)
- Expanded interlock requirement to all offenders in 2004
- Recidivism dropped from expected 7.7% to 5.6% (with only 38% installation rate)
- If 100% compliance, recidivism could have dropped to **2%**
- Loophole: charges reduced to lesser offenses (negligent/reckless driving) that don't require interlocks
- When loophole excluded, installation rate rises from 38% to 54%

### Johns Hopkins Study (2017)
- Mandatory interlock laws reduced alcohol-involved fatal crashes by **7%**
- Prevented an estimated **1,250 fatal crashes** since 1993
- Published in American Journal of Preventive Medicine

### DOJ/NHTSA Data
- States with universal interlocks: **4.7 deaths per 100K**
- States without: **5.5 deaths per 100K**
- In 2021: **13,384 people died** in alcohol-impaired driving crashes (31% of all traffic deaths)
- 2025: traffic deaths dropped to 36,640 (6-year low, 1.10 per 100M VMT)

### Device Cost
- $70-150/month installation + monitoring
- Typically paid by offender
- DOT values a statistical life at $12.5 million
- Annual interlock cost: ~$1,200-1,800 per offender

## FARS Cross-Reference (our data)
- Our FARS_TOXICOLOGY data: alcohol impairment rates by vehicle model
- Overall: ~15-17% of fatal crash drivers have positive alcohol tests
- Sports cars: 17.1% alcohol rate (highest class)
- Vans: 13.4% (lowest class)
- If interlocks were universal and enforced at 100%: 26% reduction in BAC≥0.08 fatal crashes

## Original Calculation
- 2025: 36,640 traffic deaths
- ~31% alcohol-impaired: ~11,358 deaths
- If all states had all-offender interlock laws (26% reduction): ~2,953 fewer deaths
- But at 15-20% compliance: only ~443-591 actual lives saved
- Compliance gap cost: **~2,362-2,510 preventable deaths per year**
- Cost to close the gap: If ~1.5M DUI arrests per year, 100% interlock at $1,500/yr = $2.25B
- DOT value of 2,500 lives saved = $31.25B
- ROI: 13.9x return. Every dollar spent on interlocks saves $13.90 in statistical lives.

## Novel Contribution
The original calculation quantifies the "compliance gap" — the difference between what interlocks could save at full compliance vs. what they actually save at 15-20% installation. Nobody frames it this way. The standard narrative is "interlocks work." The real story is "interlocks work, and we're wasting 80% of their potential because nobody checks whether people actually install them."

## Limitations
- IIHS 26% figure is from 2018 revised study; landscape has changed (34 states now vs 28 then)
- 15-20% GAO compliance figure is from 2014; may have improved
- "Deaths prevented" assumes linear scaling, which may not hold
- Interlock bypass methods exist (having sober person blow)
- Doesn't account for unlicensed driving (offenders who drive without any license)
- ROI calculation uses DOT statistical life value, which is a policy tool, not a market price

## Strongest Counterargument
Interlocks only work while installed, and removal returns re-arrest rates to baseline. This means they're a temporary restraint, not a rehabilitation tool. Critics argue the real solution is treatment for alcohol use disorder, not mechanical breath-testing. Fair point — but treatment takes years and has its own compliance problems (only ~7.6% of people with AUD receive treatment). Interlocks are the tourniquet; treatment is the surgery. You need both, and right now we're not even applying the tourniquet.

## Angle
Dale Impactor III beat: toxicology, impairment, demographic analysis. This is his bread and butter — sarcastic, stat-heavy, treating the compliance gap like a sports team that has the best players but can't get them on the field.

## Sources
1. IIHS, "State laws mandating interlocks for all DUI offenders save lives," March 2018 (revised). https://www.iihs.org/news/detail/state-laws-mandating-interlocks-for-all-dui-offenders-save-lives
2. GAO, "Traffic Safety: Alcohol Ignition Interlocks Are Effective While Installed," GAO-14-559, 2014. https://www.gao.gov/products/gao-14-559
3. MADD, "Ignition Interlocks Prevented 354,372 Drunk Driving Attempts in 2017." https://madd.org
4. NHTSA, "Alcohol-Impaired Driving," 2021 data. https://www.nhtsa.gov/risky-driving/drunk-driving
5. NHTSA, FARS database 2014-2023. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
6. Johns Hopkins Bloomberg School of Public Health, 2017. https://publichealth.jhu.edu
7. NHTSA/NSC, 2025 preliminary traffic fatality data (36,640 deaths). https://www.nhtsa.gov
