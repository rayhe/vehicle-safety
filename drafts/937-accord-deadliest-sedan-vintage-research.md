# Research: 937 — The Accord Reputation Gap

## Angle (1-2 sentences)
The Honda Accord, America's default "safe family sedan" recommendation, posts a death rate 50% higher than the Toyota Camry in FARS 2014-2023, and the 2005 Accord is the single deadliest sedan model-year in the dataset (444 deaths). The twist: it is not the car that is dangerous, it is the third owner — 67% of Accord deaths are in 2007-or-older vintages, while 2018+ Accords (Honda Sensing standard) account for just 5%.

## Kill test
- Genuinely newsworthy? Yes — reputation-vs-reality paradox on the most trusted sedan nameplate in America, with a concrete mechanism and a consumer action.
- Novel angle after 936 articles? Yes. No Accord-specific article exists in drafts. The Alero beater-effect piece covered the general old-car mechanism; this is the first nameplate-level paradox (trusted car, deadly vintage) with the vintage decomposition.
- Verdict: PROCEED.

## Data (FARS 2014-2023, from fars_output.js; fleet/VMT estimated via fars_process.py: annual sales x 8.75 fleet multiplier, class-average annual miles)
- Honda ACCORD (Sedan): deaths=7,102; fleet=2,012,500; rate=3.07 deaths/100M VMT; impairment anyPct=20.0% (alc 15.3, drug 8.3)
- Toyota CAMRY (Sedan): deaths=6,328; fleet=2,712,500; rate=2.03; impaired 19.2%
- Honda CIVIC: rate=2.25; Toyota COROLLA: 1.85; Nissan ALTIMA: 2.88; Ford FUSION: 1.23; Hyundai SONATA: 1.56
- Accord rate vs peers: 1.51x Camry, 1.36x Civic, 1.66x Corolla, 2.49x Fusion
- Accord also leads in RAW body count among mainstream sedans: 7,102 > Camry 6,328 despite a smaller estimated fleet
- Deadliest single sedan model-years (FARS deaths 2014-2023): 2005 Accord 444, 2003 Accord 442, 2007 Camry 426, 2004 Accord 419, 2007 Accord 411, 2002 Accord 403 — five of the top six are Accords
- Accord vintage concentration: <=2007 model years = 67% of Accord deaths; 2008-2012 = 15%; 2013-2017 = 13%; 2018+ = 5%
- Camry vintage concentration: <=2007 = 57%; 2018+ = 8% (Accord skews older)
- Impairment is average (20.0% vs class mean ~20.4%) — this is NOT a drunk-driving story
- Methodology note: fleet estimates use a single annual-sales figure (Accord 230k, Camry 310k); mid-2000s sales booms are undercounted for both, directionally similar. All rates use identical class mileage, so cross-model comparison is apples-to-apples within the dataset's disclosed method.

## Mechanism (why)
1. Fleet age: Accord's sales peak (2003-2007, ~350-400k/yr) created a giant aging fleet that is now the archetypal hand-me-down/teen/first-car beater.
2. Driver demographics, not crashworthiness: IIHS driver-death-rate analyses have found Accord vs Camry differences statistically indistinguishable (confidence intervals overlap) — the FARS gap is exposure and driver age, not sheet metal.
3. Safety-tech generation gap: 2007-and-older Accords predate standard ESC maturity curves, side-curtain ubiquity, and any ADAS. Honda Sensing (auto emergency braking, lane keep, adaptive cruise) became standard on every 2018 Accord trim.

## External sources (3+ primary)
1. NHTSA FARS database 2014-2023 — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS driver death rates — midsize cars 67 deaths per million registered vehicle years, 2021-24 (via https://www.carscoops.com/2026/07/iihs-death-rate-study/); Accord-vs-Camry statistical indistinguishability (https://thecarcrashdetective.com/safer-camry-accord-fatalities/); IIHS fatality statistics hub https://www.iihs.org/topics/fatality-statistics
3. Honda Sensing standard on all 2018 Accord trims — https://www.autoblog.com/features/2018-honda-accord-first-drive-review
4. S&P Global Mobility: average US vehicle age 12.6 years in 2024 (AP) — https://www.wcia.com/news/national/ap-average-us-vehicle-age-hits-record-12-6-years-as-high-prices-force-people-to-keep-them-longer/amp/
5. NHTSA VIN recall check — https://www.nhtsa.gov/recalls

## Actionable takeaways (required)
- Shopping a used Accord: target 2018+ (Honda Sensing standard on every trim); the 2003-2007 generation is the statistical danger zone — 5 of the 6 deadliest sedan vintages.
- If you already own a 2003-2007 Accord: check the VIN at nhtsa.gov/recalls before the next oil change (Takata airbag era); never skip the timing-belt-era maintenance that keeps old cars' safety systems intact.
- Teen-driver guidance: the hand-me-down Accord is the default first car — put the new driver in the newest car the household owns, not the oldest.
- Explicit caveat: the data does not say the Accord is badly engineered; IIHS real-world driver death rates show Accord and Camry statistically tied. The gap is age of fleet + who drives the old ones.
