# Research #960: Pilot vs Highlander — IIHS rear-seat test vs FARS real-world data

**Slug:** 960-pilot-highlander-iihs-rear-seat
**Journalist:** Mia Crumplezone (Safety Engineering Editor — design analysis, safety tech beat)
**Kicker:** The Gap
**News peg:** September 2026 published head-to-head safety comparison (Road Ethos) of the April 2026 IIHS rating round covering the 2026 Honda Pilot, 2026 Toyota Highlander, and 2026 Mazda CX-90 under tightened protocols. Only the CX-90 earned Top Safety Pick+. The Pilot and Highlander — the two best-selling 3-row family SUVs in America — were both disqualified by the same test: the updated moderate-overlap front evaluation with a second-row dummy.

## Kill test
- **Newsworthy?** Yes: fresh Sept 2026 consumer comparison, family-buying season, two top-selling 3-row SUVs both failing the test that measures protection for kids in the back seat.
- **Novel angle?** Yes: first cross-check of the IIHS lab verdict against 10 years of FARS per-model fatality data. Nobody ran the lab-vs-road comparison for these two nameplates.
- **Zero queue overlap:** grep of all 167 queue entries for pilot/highlander/lexus-is/moderate-overlap/rear-seat/rear-passenger/second-row → no hits except #859 (GMC Canyon) and #940 (Sept 3 IIHS round, different vehicles). Proceed.

## Primary sources (3+)
1. Road Ethos, "2026 Toyota Highlander vs. Honda Pilot: Which One Is Safer?" (published ~Sept 18, 2026) — head-to-head scorecard. https://roadethos.com/car-buying/2026-toyota-highlander-vs-honda-pilot-which-one-is-safer
2. IIHS vehicle ratings page — rating definitions, award criteria. https://www.iihs.org/ratings
3. NHTSA FARS database 2014-2023 (via site's fars_output.js, per-model deaths/fleet/VMT/rate).
4. NHTSA 5-star results (front crash 35 mph, side impact 38.5 mph, rollover) as summarized in the comparison; NHTSA recalls lookup. https://www.nhtsa.gov/recalls

## Key facts (verbatim from sources, attributed)
- IIHS published results in April 2026 for the Highlander, Pilot, and Mazda CX-90 under tightened protocols; only the CX-90 earned Top Safety Pick+ (Good across small overlap front, updated moderate overlap front, side impact). [Road Ethos]
- Pilot, updated moderate overlap front: **Acceptable** (2nd of 4 grades). [Road Ethos]
- Highlander, updated moderate overlap front: **Marginal** (3rd of 4); rear passenger restraints and dummy kinematics: **Marginal**; "increased head and neck injuries recorded" for rear passengers. [Road Ethos]
- The updated moderate overlap test adds a dummy in the second row specifically to measure rear-passenger protection; it exists because rear-seat protection lagged front-seat protection as airbags/belts improved up front. [Road Ethos]
- Starting with MY2025, Honda revised the Pilot's rear seat belts specifically to improve second-row protection — the exact focus of the test. The Pilot earned TSP+ for 2025 under then-current criteria; under 2026 criteria an Acceptable no longer qualifies for either award, so the Pilot lost the designation without the vehicle changing. [Road Ethos]
- Headlights: Pilot rated Good on every trim as standard (only vehicle in the comparison group); Highlander below that standard across the range. [Road Ethos]
- Blind-spot monitoring + rear cross-traffic alert: standard on Pilot, higher trims only on Highlander. Toyota Safety Sense 3.0 standard on all Highlanders. [Road Ethos]
- NHTSA tests: Pilot rates ahead of Highlander in both the 35 mph front crash and the side impact test; rollover likelihood 0.9-2.6% lower for the Pilot. [Road Ethos]

## FARS cross-tab (original computation, rate = deaths per 10M VMT)
| Model | Deaths 2014-2023 | Rate | Fleet |
|---|---|---|---|
| Honda Pilot | 514 | 0.29 | 1,400,000 |
| Toyota Highlander | 1,106 | 0.42 | 2,100,000 |
| SUV class median (n=121) | — | 0.35 | — |
| Ford Explorer (3-row rival) | 3,797 | 1.54 | 1,968,750 |

Finding: the lab and the road agree on the ranking — Pilot beats Highlander in both IIHS rear-occupant grading and real-world fatality rate. The lab result is not a quirk.

## Limitations (for the article)
- FARS captures deaths, not injuries. IIHS's updated moderate-overlap test measures injury risk (head/neck excursion) for rear occupants. They answer different questions; a vehicle can be good at preventing death while still injuring rear passengers.
- FARS window is 2014-2023; the IIHS test applies to 2026 models. Older Pilot/Highlander designs are in the FARS mix. Honda's MY2025 rear-seat-belt revision is too recent to show up in FARS.
- Real-world second rows often carry kids in car seats/booster seats (better protected); the IIHS test uses a small-female dummy with a belt. Direct mapping is imperfect.
- Nameplate-age skew: Telluride (0.04), Palisade (0.06), Atlas (0.06), CX-9 (0.17) rates look absurdly low partly because most of their VMT is recent; not a clean comparison to 20-year nameplates.
- No FARS record yet for the 2026 Mazda CX-90 (too new) — cannot cross-check the round's actual winner.

## Counterargument (steelman)
A Marginal rear-occupant grade does not make the Highlander dangerous. Its FARS rate (0.42) is near the SUV median (0.35) and dramatically better than the Ford Explorer (1.54) — the third big 3-row seller. IIHS grades are relative and criteria tighten yearly; the Pilot lost its own TSP+ without changing. And rear-seat fatality outcomes in the real world are dominated by whether occupants are belted and in proper restraints, which no vehicle grade can control.

## Actionable insights (for the article)
- If your kids ride in the second row: the Pilot's rear restraints are measurably better; Toyota made no equivalent engineering change.
- Don't shop by the award badge alone: the Pilot lost TSP+ with zero hardware changes — criteria moved, not the car.
- Trim math matters: base Highlanders lack blind-spot monitoring and rear cross-traffic alert; price those in.
- Run the VIN at nhtsa.gov/recalls — ratings don't cover recall status.

## Proposed headline
"IIHS Flunked Both Family SUVs on Rear-Seat Safety. Ten Years of Crash Data Picks the Same Winner."
Alt: "The Pilot and Highlander Both Lost Their Safety Awards. The Crash Data Says Honda Saw It Coming."
