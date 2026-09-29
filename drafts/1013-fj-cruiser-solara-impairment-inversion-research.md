# Research Notes: #1013 — Toyota's Drunkest Drivers Survive, Its Soberest Drivers Die

**Date:** 2026-09-29
**Journalist:** Rex Driverton
**Kicker:** Investigation
**Slug:** 1013-fj-cruiser-solara-impairment-inversion

## Angle (1-2 sentences)
The Toyota FJ Cruiser has the brand's highest impairment rate (25.3% of drivers in fatal crashes, n=265) but one of its lowest fatality rates (0.43/100M VMT). The Toyota Solara has the lowest impairment rate in the entire FARS dataset (4.1%, n=195) but a fatality rate of 4.25 — 9.9x the FJ's. Same badge, inverted outcomes: impairment doesn't predict who dies. Physics does.

## Kill Test
- Genuinely newsworthy? Data-story, same as the site's daily cadence. The cross-tab is new.
- Novel angle? YES. Solara's sobriety was covered (solara-soberest-deathtrap, May 2026) but never paired with the FJ Cruiser, never with the impairment-fatality inversion, and never with the computed intra-brand spread ranking. Zero prior Crash Report coverage of the FJ Cruiser (verified: no stories or drafts mention it).
- Data? Real FARS numbers throughout, plus IIHS ratings and curb-weight specs.

## Novel Contribution
1. **Intra-brand impairment spread ranking** — computed max-min anyPct across all models with n>=100 drivers, per brand. Toyota's 21.2pp spread (Solara 4.1% to FJ Cruiser 25.3%) is the widest of any brand in the dataset. The badge predicts nothing about the driver.
2. **The impairment-fatality inversion** — FJ impairment 6.2x Solara's; Solara fatality rate 9.9x the FJ's. The two metrics point in opposite directions across the same manufacturer's lineup.
3. **Mechanism via IIHS + mass** — FJ Cruiser: ~4,300 lb curb weight, body-on-frame, IIHS Good in frontal-offset and side impact. Solara: ~3,400-lb coupe on the Camry platform, older fleet. Mass and structure absorb what sobriety can't prevent.

## Primary Data (FARS 2014-2023, from fars_output.js)

### Toyota FJ Cruiser (SUV)
- Deaths: 95 (annual 9.5); fatal crash involvements: 223; fleet: 175,000; VMT: 2,188; rate: **0.43**/100M VMT
- Deaths per crash: 0.426
- Impairment: **25.3%** (265 drivers tested; alc 19.6%, drug 10.9%) — Toyota's highest
- Model-year death skew: 2007: 44, 2008: 19 (early models dominate; side airbags optional until 2008, standard after)

### Toyota Solara (Sedan)
- Deaths: 642 (annual 64.2); fatal crash involvements: 937; fleet: 131,250; VMT: 1,509; rate: **4.25**/100M VMT
- Deaths per crash: 0.685
- Impairment: **4.1%** (195 drivers tested) — lowest of all 307 models with 100+ tested drivers

### Key Calculations
- Impairment ratio (FJ/Solara): 25.3/4.1 = **6.2x**
- Fatality-rate ratio (Solara/FJ): 4.25/0.43 = **9.9x**
- Fleet-average impairment: 20.0% (all models)
- Brand spread ranking (top 5): Toyota 21.2pp, Cadillac 15.4pp, Chevrolet 15.3pp, Subaru 15.2pp, Saturn 15.1pp

## External Sources
1. IIHS ratings, 2008 Toyota FJ Cruiser 4-door SUV: Good in frontal-offset and side impact (applies to 2008-14 models); Acceptable in roof strength. https://www.iihs.org/ratings/vehicle/toyota/fj-cruiser-4-door-suv/2008
2. FJ Cruiser curb weight 4,050-4,442 lb, body-on-frame, MY 2007-2014 North America. https://en.wikipedia.org/wiki/Toyota_FJ_Cruiser
3. IIHS vehicle size and weight research (mass protects in multi-vehicle crashes). https://www.iihs.org/topics/vehicle-size-and-weight
4. NHTSA FARS database documentation. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars

## Strongest Counterargument (stated at full strength)
The samples are small — 265 FJ drivers and 195 Solara drivers tested over a decade. The FJ's low fatality rate may reflect exposure, not engineering: FJ Cruisers are weekend toys and off-roaders with lower annual mileage in different crash environments, and its VMT estimates carry wide uncertainty for a low-volume model. The Solara's deaths skew toward an aging fleet of cheap used coupes driven by younger, risk-tolerant buyers — the prior Solara story made the demographic case. Impairment coding also varies by state and testing protocol, so a 4.1% vs 25.3% gap partly reflects where these cars crash, not just who's driving. If you normalized for miles, driver age, and crash type, the inversion might narrow. It might not vanish, though: 9.9x is a wide gap to explain away with exposure alone, and the IIHS Good ratings plus 4,300 lbs of body-on-frame mass are real.

## Limitations
- FARS captures fatal crashes only; injury-only crashes invisible. The FJ's 0.43 rate says nothing about its injury rate.
- estimated_rate uses VMT estimates, not odometer readings; ±15% uncertainty for low-volume models like the FJ.
- Toxicology testing is not uniform across states or years; impairment figures are "tested drivers in fatal crashes," not all drivers.
- Both models discontinued (FJ: 2014 NA, Solara: 2008); findings describe a historical fleet, not current showrooms.
- Correlation is not causation: mass correlates with the FJ's survival numbers, but driver selection (who buys a 4x4 toy vs. a cheap coupe) confounds the comparison.

## Actionable Takeaways
- Badge loyalty is not a safety strategy: Toyota's own lineup spans the full impairment and fatality spectrum. Shop the model, not the brand.
- Mass and modern structure matter: a 4,300-lb body-on-frame SUV with Good IIHS scores protects even impaired drivers better than a lighter coupe protects sober ones.
- Check IIHS ratings for the specific model year you're buying, especially for discontinued models aging into the used market — the FJ's early (2007) models predate standard side airbags.
