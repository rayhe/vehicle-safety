# Research: #1515 — VinFast's Recall Census: 4 Campaigns Ever, Zero in 2026, and One Steered the Car Itself

**Number:** 1515
**Slug:** 1515-vinfast-recall-census-4-zero-in-2026
**Journalist:** Vin Wreckage (Existential Dread Columnist — least-used journalist at 96 articles vs Rex 164 / Mia 147 / Clara 129; the absurdity of a car that steers itself into walls, then gets sold to its own sister company's taxi fleet, is pure Vin. Last 8 articles rotated Rex/Mia/Axle/Clara; Vin hasn't appeared recently.)
**Kicker:** Existential Dread
**Date:** November 15, 2026

## Angle (1-2 sentences)

VinFast has filed **4 recalls in its entire US history** — all of them on the VF 8, all with remedies available — and **zero in 2026**, which makes it the smallest census in the series and the only brand whose signature defect was a driver-assist system that steered the car itself, a defect NHTSA's own test center replicated before VinFast recalled 6,314 cars. Meanwhile the brand sold fewer than 400 cars to Americans in the first half of 2026 and is now putting its cars to work as taxis for Green SM, its own sister company, because retail buyers stopped buying.

## Kill test

- **Genuinely newsworthy?** Yes. First VinFast brand census on the site; completes the census series' coverage of every US-market EV startup (Tesla #1492, Rivian #1496, Lucid #1498, Polestar covered standalone #849). Fresh hooks: (1) the smallest census in the series — 4 lifetime campaigns, 0 in 2026; (2) NHTSA's Vehicle Research and Test Center replicated the lane-keep steering defect in its own testing, which is rare — ODI usually relies on complaints; (3) the PE24025 closing resume reviewed a fatal crash (VOQ #11585817) and could neither link it to the defect nor rule it out, because the event data recorder was destroyed by fire; (4) Transport Canada recalled the same VF 8 for a rollaway risk in January 2026 — a 2026 recall with no US counterpart; (5) the brand's US pivot from retail to its own sister company's taxi fleet (500 VF 8s in Los Angeles, October 2026) while selling under 400 cars in H1 2026.
- **Novel on site?** Yes. No prior VinFast article exists. The 4-count, the per-model table (VF 8: 4, VF 9: 0, VF 7: 0, VF 6: 0), the zero-in-2026 finding, the PE24025/VRTC replication detail, the fatal-crash/EDR finding, and the Canada-vs-US 2026 divergence are all new computations.
- **Killed angles this run (duplicate screen):** A Polestar census — killed, because #849 (published Nov 15, 2026) already covered the Polestar 2 camera saga in depth, and a census would re-cover the same three recalls as its headline finding. A Mini census — killed, because Mini files no recalls of its own; BMW files them, and the only 2026 campaign touching a Mini is 26V-422 (428 vehicles across BMW/Mini/Rolls-Royce), already counted in the BMW census #1483. The remaining uncensused brands (Alfa Romeo, Fiat, Maserati, Lotus, McLaren, Ferrari, Lamborghini, Bentley, Rolls-Royce, Karma, Fisker) are all sub-scale with near-zero 2026 US filings; VinFast is the last one with a real story.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 15, 2026. Method: VPIC canonical 2026 model list for make "vinfast" (VF 8, VF 9, VF 7, VF 6), queried make+model+modelYear for VF8/VF9/VF7/VF6 and "VF 8"/"VF 9"/"VF 7"/"VF 6" variants, model years 2022–2026. Raw results saved at drafts/1515-vinfast-recall-census-raw.json. **API gap:** the API returns only 3 of the 4 campaigns — 25V-559 (Aug 2025, lane-keep assist) does not appear in any model-year query, even though NHTSA's own ODI closing resume, TheChargePort, AnyRecalls, and CarComplaints all list it as a 2023–2025 VF 8 campaign. The API is not a complete census on its own; the 4th campaign is confirmed from the ODI resume and the aggregators. **Model-name trap:** the recalls API wants "VF8" (no space); "VF 8" returns zero results for every year. VPIC uses the spaced form.
2. **NHTSA ODI Closing Resume, PE24025** (Oct 21, 2025): https://static.nhtsa.gov/odi/inv/2024/INCLA-PE24025-86402.pdf — opened Sep 10, 2024 on 14 VOQs; 17 VOQs reviewed total; VRTC replicated the LKA behavior; VinFast filed 25V-559 on Aug 27, 2025; ODI closed the PE "with 25V559" and reserves the right to reopen. The fatal crash VOQ #11585817: roadway departure at high speed; crash conditions "not consistent with those observed during VRTC testing"; EDR sustained fire damage, data inaccessible; "ODI has no evidence linking this crash to the LKA behavior identified in PE24025 and will continue to monitor."
3. **NHTSA Part 573 Safety Recall Report, 24V-933** (submitted Dec 27, 2024): https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V933-4637.PDF — 4,888 model-year 2023–2025 VF 8s; driver center airbag replaced with redesigned airbag; production corrected Oct 6, 2024.
4. **TheChargePort, "VinFast VF 8 Reliability & Recalls 2026: NHTSA Record"** (updated Nov 6, 2026): https://thechargeport.com/ev/vinfast-vf-8/reliability — 4 recalls, all with remedy available; 67 owner complaints; no open investigations; 25V-559: 6,314 vehicles, ADAS "may activate during wide turns, causing unexpected steering wheel movements that are difficult for the driver to override"; owner letters mailed Oct 27, 2025.
5. **AnyRecalls, "VinFast Recalls"** (NHTSA data as of Nov 14, 2026): https://www.anyrecalls.com/vinfast — 4 recalls across 1 model (VF 8 only); newest filed Aug 28, 2025; 65 complaints; VF 9 has zero recalls.
6. **Transport Canada Recall 2026038** (published Jan 30, 2026; last updated Feb 6, 2026): https://recalls-rappels.canada.ca/en/alert-recall/transport-canada-recall-2026038-vinfast-auto-canada-inc — 2023–2025 VF 8: software problem could cause the electronic parking pawl to release on its own; electronic parking brake wiring harness could become damaged and/or corroded; if both happen, the vehicle could roll away when parked.
7. **InsideEVs, "Hundreds Of VinFast EVs Are Hitting U.S. Streets For A New Ride-Hailing Service"** (Oct 19, 2026): https://insideevs.com/news/812381/vinfast-hundreds-evs-los-angeles-ride-hailing-green-sm/ — VinFast "sold fewer than 400 cars in the United States in the first half of 2026"; Green SM (Vingroup-owned, same conglomerate as VinFast) launched a 500-VF 8 ride-hailing fleet in Los Angeles; 2027 VF 8 launched with updated driver assistance suite and a $40,400 starting price.
8. **CarComplaints, "VinFast VF 8 Lane Keep Assist Recall Closes Federal Investigation"** (Nov 4, 2025): https://www.carcomplaints.com/news/2025/vinfast-vf-8-lane-keep-assist-recall-investigation.shtml — reports four fatalities in the crash reviewed under VOQ #11585817; ODI found no evidence linking the crash to the LKA behavior.
9. **Carscoops, "Vinfast Owner Says Their EV Took Over Steering And Nearly Hit A Wall"** (Sep 6, 2025): https://www.carscoops.com/2025/09/vinfast-owner-says-their-ev-took-over-steering-and-nearly-hit-a-wall/ — owner reports the wheel jerking toward a concrete wall ~30 times since delivery; VinFast attributes the flaw to torque-ratio tuning across the ADAS system.

## The numbers

### Headline census (all US NHTSA campaigns ever filed by VinFast, through Nov 15, 2026)

| Brand | Lifetime campaigns | Filed in 2026 | Models (VPIC 2026) | Models with ≥1 campaign |
|---|---|---|---|---|
| **VinFast** | **4** | **0** | 4 (VF 8, VF 9, VF 7, VF 6) | 1 (VF 8) |
| Tesla (for comparison, #1492) | 4 (2026 only) | 4 | — | — |
| Lucid (for comparison, #1498) | 5 (lifetime) | — | — | — |
| Rivian (for comparison, #1496) | 3 (2026 only) | 3 | — | — |

### The 4 VinFast campaigns (all VF 8)

| Campaign | Filed | Component | What it is | Units |
|---|---|---|---|---|
| 23V-355 | May 18, 2023 | Electrical system: instrument cluster/panel | Display software update (VinFast VPAC-291) | 999 |
| 24V-369 | May 24, 2024 | Air bags | Airbags with inactive ignitors replaced | 225 |
| 24V-933 | Dec 17, 2024 | Air bags | Driver center airbag could strike the driver's arm; replaced with redesigned airbag | 4,888 |
| 25V-559 | Aug 28, 2025 | Lane departure / lane keep / automatic steering | ADAS may activate during wide turns, causing unexpected steering movements difficult to override; software update | 6,314 |

Campaign-vehicle incidences sum to 12,426 (999 + 225 + 4,888 + 6,314) — but the populations overlap heavily (the same early VF 8s appear in multiple campaigns), so this is not a count of distinct cars. VinFast sold so few cars in the US that the 6,314-car 25V-559 population is effectively every VF 8 it had sold here by then.

### Per-model campaign counts (lifetime)

| Model | Campaigns | Which |
|---|---|---|
| VF 8 | 4 | 23V-355, 24V-369, 24V-933, 25V-559 |
| VF 9 | 0 | — (on sale in the US; zero recalls) |
| VF 7 | 0 | — (2026 model; zero recalls) |
| VF 6 | 0 | — (2026 model; zero recalls) |

### PE24025: the investigation in numbers

- Opened Sep 10, 2024 on **14** VOQs; **17** VOQs reviewed by close.
- NHTSA's Vehicle Research and Test Center **replicated** the LKA misbehavior in its own testing — the defect was reproduced by the government, not just reported by owners.
- Recall 25V-559 filed Aug 27, 2025; PE closed Oct 21, 2025 — **13 months** from open to close.
- Fatal crash reviewed: VOQ #11585817, roadway departure at high speed, **four fatalities** (per CarComplaints). ODI: conditions not consistent with VRTC testing; EDR fire-damaged and unreadable; no evidence linking the crash to the LKA behavior; ODI "will continue to monitor."
- Owner letters for 25V-559 mailed Oct 27, 2025; remedy is a software update.

### The 2026 divergence: Canada recalled, the US did not

- Transport Canada recall 2026038 (Jan 30, 2026): 2023–2025 VF 8, electronic parking pawl could release on its own plus EPB wiring harness damage/corrosion — rollaway when parked.
- No US NHTSA campaign covers the parking-pawl/EPB defect as of Nov 15, 2026. The same cars, the same defect, one side of the border recalled and the other not.
- VinFast's US recall count for 2026 is zero either way. The Canada recall is not counted in the US census; it is reported as the divergence.

### US sales: the denominator that explains the census

- Fewer than **400 cars sold in the US in H1 2026** (InsideEVs, Oct 19, 2026); **389 registrations Jan–Jul 2026** (Automotive News, via AllMotorNews).
- Green SM, owned by Vingroup — the same conglomerate that owns VinFast — launched a **500-car VF 8 taxi fleet in Los Angeles** in October 2026. The fleet is larger than the brand's retail sales. The 2027 VF 8 starts at $40,400 with an updated driver assistance suite.
- 67 owner complaints on file for the VF 8 (TheChargePort, Nov 6, 2026); AnyRecalls counts 65. The 2-complaint gap is a counting-date difference between aggregators, not a dispute.

## Original contribution

The census itself: the 4-count, the 4-model VPIC list, the per-model table, the zero-in-2026 finding verified against both the NHTSA recalls API and two aggregators, the API's missing-25V-559 gap (documented here so future censuses don't trust the API alone), the 12,426 campaign-vehicle incidence sum with the overlap caveat, the PE24025 timeline (14 VOQs → 17 VOQs → VRTC replication → 13 months to close), the fatal-crash/EDR finding, the Canada-vs-US 2026 divergence, and the sales-denominator arithmetic (389 registrations vs a 500-car taxi fleet) — all computed from NHTSA filings, the ODI resume, and press, not quoted from any single source.

## Limitations

- The census counts campaigns, not vehicles: 25V-559's 6,314 cars overlap heavily with 24V-933's 4,888 and 23V-355's 999. The 12,426 sum is incidences, not distinct cars.
- **API gap (documented, not resolved):** the NHTSA recalls API does not return 25V-559 for any VF 8 model-year query. The campaign is confirmed by the ODI closing resume, the Part 573 record, and two independent aggregators. If the API is ever the sole source for a future census, this campaign would be silently dropped.
- **Complaint-count conflict (unresolved):** TheChargePort reports 67 complaints; AnyRecalls reports 65. Both are aggregator counts of NHTSA VOQs at different refresh dates. The article uses 67 with attribution.
- **Fatal-crash fatality count:** the ODI resume calls VOQ #11585817 "a fatal crash" without a death count; CarComplaints reports four fatalities. The article attributes the four-fatality figure to CarComplaints and the no-link finding to ODI.
- **Transport Canada scope:** the 2026038 population count was not stated in the notice excerpts reviewed; the article reports the defect and the model years, not a unit count.
- The census window closes Nov 15, 2026; campaigns filed Nov 16–Dec 31 are not counted.
- VF 9 US sales volume is not broken out in the sources reviewed; the zero-recall finding for the VF 9 stands on the NHTSA record, not on sales volume.

## Strongest counterargument

Four recalls is the smallest number in the census series, and zero in 2026 looks like a clean bill of health — but the count flatters VinFast in the wrong direction. A brand that sold fewer than 400 cars in six months can have a perfect recall record simply by having almost no cars on the road, and its one big recall covered effectively every car it had ever sold here. The counterargument is partly right: the 4-count is a function of a tiny denominator, and the "zero in 2026" headline is mostly a story about a brand that stopped selling cars to Americans. But the counterargument misses the shape of the four. Two are airbags, one is a display, and one is a driver-assist system that grabbed the steering wheel — and that last one is the only defect in the series that NHTSA's own test center had to drive a car to reproduce. A small census with a steering defect in it is not a clean bill of health. It is a small brand whose worst problem was the feature it advertised as the future.

## Actionable takeaways

- If you own a 2023–2025 VF 8: all four recalls apply to your car, and all four have remedies available. The one that matters most is 25V-559 — if your lane-keep assist has ever yanked the wheel in a sweeping turn, get the software update. Check your VIN at nhtsa.gov/recalls; the fix is free and over the air.
- If you own a 2023–2025 VF 8 and park on a slope: the Canadian recall 2026038 (parking pawl + parking-brake wiring, rollaway risk) has no US counterpart yet. Use the parking brake, park in gear if your model allows it, and watch for a US campaign.
- If you ride in a Green SM taxi in Los Angeles: you are riding in a 2023–2025 VF 8, the exact population of all four recalls. The fleet cars should have the 25V-559 update; the update is the difference between a lane-keep system that behaves and one that fights you in a turn.
- If you are shopping: the VF 9, VF 7, and VF 6 have zero US recalls — but also near-zero US sales history to judge by. The 2027 VF 8 ($40,400, updated ADAS) is the car VinFast is betting the brand on. A zero-recall record on a car almost nobody bought is not a safety rating.
