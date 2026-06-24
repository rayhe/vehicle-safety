# Research Notes: NHTSA 2026 Crash Test List vs. FARS Death Reality

## Angle
NHTSA published its 2026 5-Star Safety Ratings test vehicle list. Of 35 vehicles selected, only 2 are sedans (Nissan Sentra, Toyota Corolla). The remaining 28 are SUVs, 3 are pickups, and 2 are vans/hatchbacks. Cross-referencing against FARS 2014-2023 fatality data reveals a massive structural mismatch: sedans account for 46.6% of all fatalities in the dataset (89,127 deaths), yet receive just 6% of testing slots.

## Self-Critique Gate
**Proposed angle:** NHTSA's 2026 crash test allocation is structurally misaligned with where people actually die. 80% SUV testing for 24% of deaths; 6% sedan testing for 47% of deaths.

**Challenge:** Is this genuinely surprising? Yes — nobody is running this specific cross-tabulation (2026 test list vs. FARS class-level fatality data). The `nhtsa-adas-tests-wrong-fleet.html` story covered ADAS testing fleet mismatch, but this is about the 5-Star crash test list itself, which is a different program. The numbers are starker: the Hyundai Palisade (38 total deaths) gets a test slot while the Honda Accord (7,102 deaths) doesn't. That's a 187:1 death ratio.

**Verdict:** Proceed. The cross-tabulation is novel, the mismatch is quantifiable, and the counterargument (NHTSA tests new designs, not legacy fleet) is strong enough to engage honestly.

## Primary Sources
1. **NHTSA 2026 5-Star Safety Ratings vehicle test list** — nhtsa.gov, published June 2026. 35 vehicles selected for crash testing + 10 for ADAS verification testing.
2. **FARS 2014-2023 fatality data** — NHTSA FARS database (local: fars_output.js). 337 models, 191,193 total deaths tracked.
3. **IIHS fatality statistics** — iihs.org/topics/fatality-statistics. Vehicle type breakdown of crash fatalities. Supports sedan overrepresentation in deaths.

## Key Data Points
- **Test list composition:** 2 sedans (6%), 28 SUVs (80%), 3 pickups (9%), 2 other (6%)
- **FARS death share:** Sedans 89,127 (46.6%), SUVs 46,442 (24.3%), Pickups 41,593 (21.7%), Vans 7,897 (4.1%), Sports Cars 6,134 (3.2%)
- **Death rate per 100M VMT by class:** Sports Cars 18.70, Sedans 13.92, Pickups 10.40, Vans 6.71, SUVs 5.94
- **Coverage:** Tested models account for just 12.9% of all FARS fatalities (24,590 of 191,193)

## Spotlight Comparisons
| Tested Vehicle | Deaths | Rate | Untested Vehicle | Deaths | Rate |
|---|---|---|---|---|---|
| Hyundai Palisade | 38 | 0.06 | Honda Accord | 7,102 | 3.07 |
| Honda Passport | 33 | 0.10 | Honda Civic | 6,553 | 2.25 |
| Audi Q5 | 47 | 0.11 | Toyota Camry | 6,328 | 2.03 |
| Mazda CX-5 | 162 | 0.12 | Nissan Altima | 4,787 | 2.88 |
| Chevrolet Trax | 191 | 0.22 | Chevrolet Malibu | 3,465 | 2.03 |

## Strongest Counterargument
NHTSA tests NEW model-year vehicles. The sedan deaths in FARS are overwhelmingly from older model years (pre-2020). Current-generation Accords and Civics are dramatically safer than 2006 Accords and Civics. Many of the death-count leaders (Impala, Cobalt, Focus, Taurus) are discontinued. NHTSA can't test every vehicle every year — the list rotates. Manufacturers can also submit vehicles voluntarily for ratings. The program's goal is to inform new-car buyers, not retroactively rate legacy fleet.

But this counterargument actually reinforces the structural problem: the TESTING program looks at what's coming off the assembly line. The DYING happens in what's already on the road. The average vehicle on American roads is 12.6 years old. That's 2013-2014 vintage. NHTSA's program structurally cannot address where the bodies accumulate because it's designed to evaluate new products, not existing risk.

## Limitations
- FARS data spans 2014-2023. The 2026 test list evaluates MY2026 vehicles. Direct comparison conflates time periods.
- Sedan market share has collapsed from ~30% to ~15% of new sales. NHTSA's list reflects purchase patterns, not ownership patterns.
- Death rates for discontinued models may reflect obsolete design rather than an addressable testing gap.
- The 5-Star program is one of several (IIHS also tests sedans independently). Total testing across programs is broader than this list alone.

## Journalist Assignment
Axle McScatter — Data Visualization Editor. This is a methodology/data-alignment piece fitting his beat: "statistical roundups, national trends, methodology pieces."

## Kicker
The Gap
