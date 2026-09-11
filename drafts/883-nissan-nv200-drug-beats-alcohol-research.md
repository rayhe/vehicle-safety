# Research — #883: Nissan NV200 drug>alcohol inversion

## Story
Of 307 vehicle models in FARS toxicology data (n>=100 drivers), exactly **2** have drug-positive rates exceeding alcohol-positive rates. One is the Suzuki Grand Vitara (drug 12.7 / alc 11.4, n=158). The other is the **Nissan NV200 commercial delivery van: drug 12.7% vs alcohol 11.8%** (n=212 drivers). A work van where the drugs beat the alcohol.

## Data (FARS 2014-2023, via fars_output.js FARS_TOXICOLOGY)
- Nissan NV200 (Van): drivers=212, alc=25 (11.8%), drug=27 (12.7%), any=41 (19.3%)
- Only 2/307 models with n>=100 invert drug>alcohol; NV200 is the only commercial/work vehicle of the two
- Top drug-pct models for context: Alero 18.4, Park Avenue 16.6, BMW M5 15.6, Buick Verano 13.1, Ford Five Hundred 13.0, then NV200/Grand Vitara 12.7

## Novel contribution
The inversion count itself: 2 of 307. Nobody has run drug-vs-alcohol inversion across the FARS model table. Plus the honest pharmacological twist: FARS "drug-positive" is a toxicology hit, not proof of impairment at crash time — THC metabolites linger up to ~30 days, so the inversion may partly measure detectable cannabis use rather than drug-impaired driving. The scary-looking stat partially dissolves under its own methodology.

## Strongest counterargument
n=212 is small; the inversion is 27 vs 25 drivers — a 2-driver margin that could be noise (difference not statistically significant at this N). Also possible testing artifact: commercial/work-van drivers may be alcohol-tested more routinely (employer policies), suppressing the alcohol numerator. The "inversion" may be an artifact of denominators, not behavior.

## Limitations
- FARS drug-positive != impaired: includes prescription drugs and THC with long detection windows; cannot distinguish impairment at time of crash
- Small N (212 drivers, 27 vs 25); margin is within noise
- No occupation data: can't confirm drivers were working delivery shifts
- NV200 sold 2013-2021 in US; fleet aging; no model-year trend available in this table for tox
- FARS only captures fatal crashes

## Actionable takeaways
- Fleet managers: if you run NV200s (or any small delivery vans), your drug-testing panel matters more than you think; consider impairment-detection tech over schedule-based testing
- Consumers: drug-positive != drunk; don't read FARS tox tables as impairment rankings without the detection-window caveat
- The general lesson: always ask what a toxicology hit actually measures before citing it

## Sources
1. NHTSA FARS 2014-2023 via site fars_output.js (FARS_TOXICOLOGY array)
2. NHTSA FARS database — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
3. NHTSA FARS query tool (CDAN) — https://cdan.dot.gov/query
4. NHTSA drug-impaired driving resources — https://www.nhtsa.gov/risky-driving/drug-impaired-driving

## Kill test
Newsworthy? Yes — genuine paradox in the site's core dataset, uncovered on the site (nv200: zero queue/file hits). Novel angle? Yes — the 2-of-307 inversion count plus the detection-window dissolution. Proceed.
