# Research: #1474 — GM Recalled the Same Steering Nut Twice in Four Months. It Still Beats Ford 15 to 40.

**Number:** 1474
**Slug:** 1474-gm-recall-census-15-new-model-campaigns
**Journalist:** Rex Driverton (Senior Crash Correspondent; fatality-rate investigations, vehicle deep dives)
**Kicker:** Investigation
**Date:** November 11, 2026

## Angle (1-2 sentences)

Earlier today this site re-ran the Ford new-model recall census: 40 campaigns on 2026-model-year Fords filed in 2026, up from 25 in September. I ran the exact same method on General Motors. GM's brand-new 2026 vehicles carry **15 campaigns** — less than half of Ford's — but a third of them belong to one vehicle, the Express/Savana van, which GM recalled for the *same* steering-gear nut twice in four months.

## Kill test

- **Genuinely newsworthy?** Yes. Direct sequel to #1473 (Nov 11) and #815 (Sep 3), same method, new brand, same-day comparability: Ford 40, GM 15, Toyota 7, Honda 2. Fresh pegs inside the census: the 26V399/26V718 double steering-nut recall (June, then October re-inspection), the 26V289 transfer-case recall traced to 68 suspect assemblies and one engineer's Speak Up For Safety report, and a brake-software recall (26V717) with zero over-the-air flag.
- **Novel on site?** Yes. No prior GM brand-level census exists (only Ford #815/#1473, the rideshare census #1254, the tire census #1465, the ATV census #1137). The site's earlier GM piece ("GM Filed 19 Recalls This Year. Ford Filed 60") used all-model-year dashboard totals, a different cut; this is the first 2026-MY census for GM. No other draft covers 26V129, 26V289, 26V304, 26V494, 26V496, 26V612, or the 26V718 re-inspection.
- **Original contribution:** the full census below (NHTSA recalls API, Nov 11, 2026), per-model counts, component mix, and the double-recall finding — computed, not quoted.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 11, 2026. Method: for each GM brand's current US lineup (VPIC 2026 model list), queried make+model+modelYear=2026 plus trim variants (Silverado/Sierra 1500/2500/3500/EV, Suburban 1500, Blazer EV, Equinox EV, Escalade ESV, Yukon XL); kept campaigns with ReportReceivedDate in calendar 2026; deduped by NHTSA campaign number. Raw results saved at /tmp/rcl1474/census.json and campaigns15.json. https://www.nhtsa.gov/recalls
2. **#1473 research file** (drafts/1473-ford-recall-census-40-new-model-campaigns-research.md) — the Nov 11 Ford baseline this piece answers: Ford 40, Toyota 7, Honda 2; 0 of Ford's 40 flagged over-the-air.
3. **#815 research file** (drafts/815-ford-2026-model-year-recall-census-research.md) — the Sep 3, 2026 baseline: Ford 25, Toyota 5, Honda 2.
4. **NHTSA recall acknowledgement letter, 26V718** (Nov 3, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V718-9753.pdf — 12,715 Express/Savana vehicles; "Vehicles that were not properly inspected under recall 26V399 will need to be re-inspected under 26V718."
5. **NHTSA Part 573 Safety Recall Report, 26V289** (May 7, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V289-5674.pdf — transfer case: 68 suspect assemblies, 46 in 2026-MY US vehicles; an April 14, 2026 Speak Up For Safety report followed a 2026 Silverado 1500 wheel lock-up in a parking lot; a missing transfer-case component can lock wheels without warning.
6. **DataPorium, "Car Brands With the Most Recalls in 2026"** (NHTSA filings through Oct 6, 2026): https://dev.dataporium.tech/articles/car-brands-most-recalls-2026 — GM 25 campaigns (all model years), 825,094 units; Ford 77 campaigns; 699 recalls in 2026 covering 33.6M units.
7. **The Crash Report, "GM Filed 19 Recalls This Year. Ford Filed 60. Guess Who Has More Bodies."** — https://www.vehicle-safety.org/stories/gm-quiet-recall-chart-higher-body-count — prior all-model-year GM/Ford comparison; recalls measure detection, not danger.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 11, 2026)

| Brand | Nov 11, 2026 |
|---|---|
| Ford | **40** (#1473) |
| **GM** | **15** |
| Toyota | 7 (#1473) |
| Honda | 2 (#1473) |

Ford's new-model campaign count is 2.7x GM's; GM is 2.1x Toyota and 7.5x Honda. GM ran ~50 models across Chevrolet, GMC, Cadillac, and Buick to Ford's 14-model lineup.

### The 15 campaigns

| Campaign | Date | Component | What it is |
|---|---|---|---|
| 26V114 | Feb 26 | Equipment / owner's manual | Radio didn't download the electronic owner's manual; FMVSS 208 noncompliance. Touches ~35 GM nameplates. |
| 26V127 | Mar 5 | Tires | Express/Savana Cutaway tires with sidewall damage. |
| 26V129 | Mar 5 | Fuel system | Silverado/Sierra 3500 gas, dual tanks: rear fuel pump starves front tank, engine stalls. |
| 26V289 | May 7 | Power train / transfer case | Missing transfer-case component can lock wheels without warning. 68 suspect assemblies; 46 in 2026-MY vehicles. |
| 26V304 | May 14 | Wheels / hub | 24-inch-wheel Escalade/Suburban/Tahoe/Yukon: wrong hub bolts loosen or deform. |
| 26V345 | May 28 | Steering column | Express/Savana gear shifter gives wrong gear feedback. |
| 26V394 | Jun 18 | Seats | Vistiq third-row power seatback may not reverse on a person. |
| 26V399 | Jun 23 | Steering | Express/Savana steering-gear nut not properly tightened. |
| 26V494 | Jul 30 | Traction battery | Escalade IQ/IQL, Silverado EV, Sierra EV, Hummer EV: battery module component improperly secured. |
| 26V496 | Jul 30 | Wheels | Silverado EV / Sierra EV steel wheels may crack at vent holes; disc separation. |
| 26V539 | Aug 20 | Rearview camera | Encore GX / Trailblazer / Envista / Trax: camera shows distorted or blank image. |
| 26V612 | Sep 24 | Power windows | Optiq: key-fob express-up windows may not reverse on an obstruction. |
| 26V696 | Oct 21 | Seats | Traverse / Acadia: seat-back recliner welds may be insufficient. |
| 26V717 | Oct 29 | Brakes / ABS module | Lyriq / Celestiq / Blazer EV / Vistiq: brake control module software defect, loss of braking. |
| 26V718 | Oct 29 | Steering | Express/Savana steering-gear nut AGAIN: re-inspection of vehicles not properly inspected under 26V399. |

### Per-model campaign counts (2026 filings; multi-model campaigns count once per model)

| Models | Campaigns |
|---|---|
| Express, Savana | 4 (26V127, 26V345, 26V399, 26V718) |
| Escalade, Escalade ESV, Tahoe, Suburban 1500, Yukon, Yukon XL | 3 (26V114, 26V289, 26V304) |
| Silverado EV, Sierra EV | 3 (26V114, 26V494, 26V496) |
| Vistiq | 3 (26V114, 26V394, 26V717) |
| Silverado 1500, Sierra 1500 | 2 (26V114, 26V289) |
| Silverado 3500, Sierra 3500 | 2 (26V114, 26V129) |
| Blazer EV, Lyriq | 2 (26V114, 26V717) |
| Optiq | 2 (26V114, 26V612) |
| Escalade IQ, Escalade IQL | 2 (26V114, 26V494) |
| Traverse, Acadia | 2 (26V114, 26V696) |
| Silverado 2500, Sierra 2500 | 1 (26V114) |
| Equinox, Colorado, Canyon, Terrain, Enclave, Envision, CT5, Hummer EV Pickup, Hummer EV SUV, Equinox EV, Corvette | 1 (26V114) |
| Encore GX, Trailblazer | 1 (26V539) |
| Celestiq | 1 (26V717) |
| Trax, Blazer (gas), XT4, XT5, XT6, Envista (2026), CT4 | 0 |

### Component mix (15 distinct campaigns)

Steering 3, Wheels 2, Seats 2, Equipment/manual 1, Tires 1, Fuel system 1, Power train 1, Traction battery 1, Back-over prevention 1, Visibility 1, Service brakes 1. **0 of 15 flagged overTheAirUpdate=true** — same 0-for-40 result as Ford.

### Timing

- February: 1. March: 2. May: 3 (26V289, 26V304, 26V345). June: 2. July: 2. August: 1. September: 1. October: 3 — including two on Oct 29 (26V717 brakes, 26V718 steering nut, again).
- No September-style single-day cluster like Ford's six-campaign Sep 9; GM's filings spread evenly across the year.

### The steering-nut double

Three of GM's 15 campaigns are steering, and all three belong to the Express/Savana van: a column defect (26V345), a loose steering-gear nut (26V399, June 23), and then the same nut again (26V718, Oct 29) because vehicles "not properly inspected under recall 26V399 will need to be re-inspected." A recall of a recall, four months later, for the same nut on the same vans. The vans are GM's most-recalled 2026 vehicles at 4 campaigns each — and GM's only model line where the count is driven by repeat failures rather than one shared paperwork recall.

### The manual recall that inflates everything

26V114 — the radio didn't download the owner's manual — touches roughly 35 GM nameplates, from the Corvette to the Hummer EV. Strip it out and GM's real-defect count is 14, and eleven models drop to zero campaigns. Ford's census has no equivalent single campaign spanning its lineup; GM's headline number is flattered by paperwork in a way Ford's isn't. The honest comparison is 14 real-defect campaigns to Ford's 40.

### GM totals beyond new models

- 25 GM campaigns filed in 2026 (all model years) through Oct 6, 825,094 units (DataPorium). Ford: 77 campaigns in the same window.
- The site's earlier all-model-year piece had GM at 19 and Ford at 60 (mid-year dashboard totals); both have climbed since, Ford much faster.

## Strongest counterargument

Campaign counts are not severity scores, and GM's 15 flatters it twice over. First, 26V114 is a paperwork recall — a missing manual — that pads nearly every model's count by one while representing no mechanical danger. Second, GM's total is low partly because GM recalls less, not because GM builds better: the Express/Savana steering nut needed two bites, and the transfer-case recall (26V289) covers just 68 suspect assemblies, a needle found by one engineer's safety report rather than a systematic sweep. Ford's 40 includes aggressive early reporting under its November 2024 NHTSA consent order, which pushes Ford to file campaigns other makers would handle quietly. A low count can mean clean manufacturing or quiet reporting, and this census cannot tell which.

The counterargument weakens on breadth: GM's 15 spread across vans, full-size SUVs, heavy-duty pickups, EVs, and Cadillacs — steering, wheels, seats, brakes, batteries, fuel — with the vans' repeat steering failure as a genuine pattern, not a reporting artifact. And GM's 0-for-15 over-the-air result matches Ford's: neither company's new-model recalls are the software fixes their press releases describe.

## Limitations

- Campaign counts are not vehicle counts or severity scores (see counterargument). The manual recall (26V114) inflates per-model counts; the article states the ex-manual total (14) alongside the headline (15).
- NHTSA API vocabulary gaps: the bare model name sometimes 400s (Suburban, Trax, Blazer, Corvette, XT5, CT4, Envista) even when the model has campaigns under a trim name (Suburban 1500, Blazer EV). Mitigation: queried trim variants for every truck/SUV/EV line and cross-checked every campaign summary's model list; the 15-campaign total is confirmed two ways (per-model queries and campaign-summary model lists). Models returning 400 for 2026 but valid rows for 2025/2024 (Trax, Blazer, Corvette, XT5, XT4, XT6, Envista) are treated as zero 2026 campaigns; CT4 400s for all years and appears in none of the 15 summaries, treated as zero.
- Commercial chassis (4500HD/5500XD/6500XD, BrightDrop) return no 2026 campaigns in the API; the census covers GM's consumer lineup.
- NHTSA's overTheAirUpdate flag may undercount software remedies not flagged as such.
- Ford/Toyota/Honda counts are from #1473's same-day (Nov 11) census; the 2026 model year is still in progress and late filings will move all four counts.
