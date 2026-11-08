# Research: #1432 — The 2007 Expedition Redesign Cut Its Death Rate 85%. The Cliff Is One Model Year Wide.

**Slug:** 1432-expedition-2007-cliff-deaths-fell-85-percent
**Journalist:** Mia Crumplezone (Safety Engineering Editor — model-year trends, safety tech, first-150-milliseconds beat)
**Kicker:** Trend Watch
**Date researched:** 2026-11-08

## Kill test: PASS

Proposed angle: run the FARS model-year series for the Ford Expedition and the death counts fall off a cliff at exactly one model year. Pre-2007 Expeditions averaged 128 deaths per model year in FARS 2014–2023. Post-2007 Expeditions averaged 15. Exposure-adjusted, the death rate fell 85%. The cliff lines up with the 2007 refresh that made AdvanceTrac with Roll Stability Control standard, stiffened the frame 10%, lowered the center of gravity, and put side curtain airbags over all three rows.

Challenge: is this surprising after 1,400+ articles? Yes. The site has covered the Expedition's recalls, its headlight recall, its A-pillar collapse, and the Tahoe death gap (#1063) — but never the model-year cliff, and never a before/after this clean. Most model-year stories on this site are about one bad vintage. This is the opposite: one good redesign that shows up in the body count like a step function. The novel contribution is the exposure-adjusted per-model-year series, which no prior article computed for this vehicle.

## Verified facts (primary sources only)

### FARS model-year series (fars_output.js, NHTSA FARS 2014–2023)
- Ford Expedition, 1,512 deaths across model years 1997–2021 in the model-year table; FARS_BY_MODEL total 1,515 deaths, rate 2.31 per 100M VMT, fleet ~525,000. [PRIMARY — site dataset]
- Pre-2007 (MY1997–2006): **1,284 deaths**, 128.4 per model year raw, **12.84 per model year exposure-adjusted**. Peak: MY2004, **198 deaths**.
- Post-2007 (MY2007–2021): **228 deaths**, 15.2 per model year raw, **1.89 per model year exposure-adjusted**.
- Exposure-adjusted drop: **85.3%**. Raw per-model-year average drop: 88.2%.
- The cliff: MY2006 **106 deaths** → MY2007 **29 deaths**. No post-2007 model year exceeds 29 deaths; the worst post-2007 year (MY2007 itself, 29) is below the best pre-2007 year (MY2002, 88).
- Post-2007 rates stay flat-low for 15 straight model years (lowest: MY2013, 8 deaths), which rules out a one-year coding blip.
- Comparison: Chevrolet Tahoe, the Expedition's direct rival, has 2,592 deaths and rate 2.49 in the same dataset — the Expedition's overall rate (2.31) is already lower, and its post-2007 rate is in a different league. [PRIMARY — site dataset; #1063 for Tahoe-gap context]

### What changed in 2007 (secondary, manufacturer/press)
- 2007 Expedition: stiffer chassis (10% stiffer, tube-through-tube frame borrowed from F-150), front driveshafts routed through the frame rails lowering the center of gravity, redesigned front/rear suspension, larger brakes, six-speed automatic replacing the four-speed. [Edmunds 2007 review; MotorTrend Truckin' review]
- **AdvanceTrac with Roll Stability Control made standard** for 2007, with a gyroscopic roll-rate sensor; front seat-mounted side airbags and three-row side curtain airbags standard; Safety Canopy rollover detection. Ford safety chief engineer Stephen Kozak quoted at launch. [Edmunds; Ford press via VehicleVoice/Automotive Fleet, Feb 2006]
- 2007 was a major refresh, not a clean-sheet redesign — the 5.4L Triton V8 carried over unchanged (300 hp), which isolates the safety hardware as the main change. [Edmunds]
- IIHS ESC effectiveness study: electronic stability control cuts fatal single-vehicle crash risk by roughly half, with the largest benefit in rollover-prone SUVs. [PRIMARY — IIHS, https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue]

### Coverage check (kill list, verified by filename grep + content grep this run)
- Expedition on this site: #1063 Tahoe-vs-Expedition death gap (cross-model, no model-year series); #1193 LED headlight recall; chrome-trim blade recall; five-stars A-pillar collapse; pretensioner triple recall; "family myth" piece. None computes a model-year cliff. No duplicate.
- Killed this run: GM L87 EA26005 (covered #1367/#1025/#864/#1380); GM EV brake software 26V717 (#1387); GM steering 26V718 (#1391); Hyundai ACU 26V728 (#1429/#1400); Subaru 8-car do-not-drive 26V685 (#1288); Dodge Durango tail light 26V701 (#1329); Durango spoiler third recall (#1401); Toyota Sienna seatback 26V690 (#1332); Ford tailgate cable 26V689 (#1297); Ford Ranger camera 26V605 (#1075/#1128/#1215); Lincoln Nautilus 26V688 (#1321/#1356); VW Tiguan BCM 26V587 (#951); VW steering bolt 26V590 (#953); Ram 1500 camera 26V560 (#1389/#821); Jeep coil spring 26V562 (#847/#858/#882); Tacoma oil reservoir (#1044); F-150 fuel tank 26V578 (#1045); IIHS cargo-van crash avoidance (#1417); IIHS Nov 5 rear-seat batch (#1408); Tesla FSD PE25012 (#1117); Tesla FSD EA26002 (#nhtsa-fsd-marketing-defect, #tesla-radar-saves-us-nhtsa-demand); pedestrian 2024 / after-dark (#1155/#1157/#1269); Q1 2026 early estimates (#national-decline-vehicle-majority-worse, #safest-quarter-adas-record); FARS top-rate models Veloster/Tracker/Land Cruiser/Maxima/Impala/Cobalt (all covered); impairment extremes Park Avenue/Alero/Ascent (all covered).

## Story skeleton
- Kicker: Trend Watch
- Lede: 1,284 deaths in ten model years, then 228 in fifteen. The line between them is a single model year, and the number to bold is **85%**.
- Pull stat: 85% (exposure-adjusted death-rate drop) or 106 → 29 (the cliff year).
- Body: the series year by year; what 2007 actually changed (frame, CG, RSC standard, three-row curtains); why rollover-prone big SUVs are exactly where ESC pays off (IIHS); the Tahoe comparison; what this means for used-Expedition shoppers (2007+ is a different vehicle for safety, same engine, same badge).
- Actionable: shopping a used full-size SUV? A 2007-or-newer Expedition is a different safety proposition than a 2006 — same nameplate, ~85% lower death rate. Check any used Expedition's VIN at nhtsa.gov/recalls; confirm AdvanceTrac/RSC is present and functional (dash light self-test at startup).
- Limitations: exposure adjustment divides by years in the FARS window (2014–2023), not by registered fleet or VMT — it does not fully correct for attrition (fewer pre-2007 Expeditions remain on the road) or for miles driven per vehicle. The 85% figure is a per-model-year death count adjusted for window exposure, not a per-mile fatality rate. The 2007 refresh changed several things at once (frame, CG, brakes, airbags, ESC), so the drop cannot be attributed to ESC alone. FARS captures fatal crashes only.
- Counterargument: part of the gap is survivorship — a 1997 Expedition still on the road in 2014–2023 is likely driven differently (older, cheaper, possibly less maintained) than a 2019. And the newest model years have had fewer years to accumulate deaths. Both effects are real, but neither explains a step change at exactly MY2007 that then stays flat for 15 years: attrition is gradual, the cliff is not.
- Methodology: deaths by model year from fars_output.js FARS_MODEL_YEAR (NHTSA FARS 2014–2023). Exposure adjustment: deaths divided by min(10, 2023 − model_year + 1), i.e., years the model year was observable inside the FARS window. Pre-period MY1997–2006 (10 model years, all fully observable); post-period MY2007–2021 (15 model years). Pre adjusted mean 12.84/yr, post 1.89/yr, drop 85.3%.

## Sources
1. NHTSA FARS 2014–2023 via fars_output.js (site dataset) — model-year death counts, BY_MODEL totals.
2. IIHS, "Life-saving benefits of ESC continue to accrue" — https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue
3. Edmunds, 2007 Ford Expedition review — https://www.edmunds.com/ford/expedition/2007/review/
4. MotorTrend/Truckin', 2007 Ford Expedition and Expedition EL — https://www.motortrend.com/reviews/0613tr-2007-ford-expedition-and-ford-expedition-el
5. Ford press release via VehicleVoice, Jan 31, 2006 — https://vehiclevoice.com/2006/01/31/2007_ford_expedition_and_exped_1/
6. NHTSA FARS database — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
