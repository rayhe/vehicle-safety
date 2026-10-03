# Research Notes — #1061: A Pallet Stopped Moving in Slovakia. Land Rover Is Recalling Every Defender It Fed.

**Number:** 1061 | **Journalist:** Mia Crumplezone (Safety Engineering Editor — technical but accessible, judgmental about bad design) | **Kicker:** Investigation | **Date:** 2026-10-03
**Slug:** `1061-defender-seatbelt-stitching-recall`
**Ship slot:** 2027-06-06 (queue holds 266 entries incl. #1060; 1/day rule; #1060 ships 2027-06-05)

## News peg

autoevolution, Sept 30, 2026: Jaguar Land Rover recalled 371 US-market 2024 Defenders (JLR campaign D130, NHTSA campaign **26V615**) for improperly stitched second-row seatbelt webbing. OffRoading.News daily briefings Sept 30 / Oct 1, 2026 confirm. Dealer briefing Oct 8, 2026; interim owner letters Nov 20, 2026.

## The event chain (verified)

1. **Aug 4, 2025:** Owner of a 2024 Defender files a VOQ with NHTSA: a second-row seatbelt "came unstitched." Photos attached. NHTSA describes the webbing stitching as "improperly formed." (autoevolution, citing the complaint; NHTSA ODI record PE25-019)
2. **Dec 2025:** NHTSA ODI opens **Preliminary Evaluation PE25-019** into Defender second-row seatbelt stitching. (autoevolution; corroborated by the static.nhtsa.gov INRL-PE25019 response document, Feb 20, 2026, in which JLR answers Question 20 on the alleged defect and notes Autoliv's investigation "still ongoing," file "JLRCC4690 VOQ 24MY Defender L663 Seatbelt stitching")
3. **Dec 2025 – Sept 2026 (~9 months, six months of active harvesting per autoevolution):** JLR's PSCC runs a parts-harvesting campaign — pulling second-row belts out of 2024 Defenders, checking serial numbers, finding nothing. Nothing, because the belts are **not sequenced to specific VINs** — there was no way to know which vehicles got belts from the suspect batch. (autoevolution, citing the NHTSA-published recall documentation / Part 573)
4. **Sept 10, 2026:** JLR determines the suspect batch had "unexpectedly paused its movement along the line" — in the Part 573 report's own words, the pallet holding the suspect batch **stopped moving lineside at the Nitra assembly plant in Slovakia**. Months of harvesting kept missing it because the bad batch was sitting still. (autoevolution, quoting Part 573)
5. **Late Sept 2026:** PSCC, treating the miss pattern as "an urgent review rather than a coincidence," recalls **every Defender built in the suspect production window**. JLR estimates **100%** of vehicles in that window carry a belt from the suspect batch.

## The recall (26V615 / D130)

- **Population:** 371 US-market 2024 Land Rover Defenders.
- **Build window:** Jan 31 – Feb 2, 2024 — three days. (~124 vehicles/day.)
- **Defect:** improperly stitched webbing on second-row seatbelts, supplier batch from **Autoliv Switzerland (Zug)**; subject part LR190158 (second-row seatbelt assembly).
- **Consequence:** in a crash the belt "can easily come apart instead of restraining the occupants" (autoevolution's paraphrase of the defect; NHTSA standard phrasing: increased risk of injury).
- **Estimated % with defect:** 100% of the population (window-based recall; every vehicle built in the window is presumed to carry a suspect-batch belt).
- **Remedy:** dealers inspect the belt's serial number; replace belts from the suspect batch; free. Not a stop-ride. Interim owner letters Nov 20, 2026; follow-up letters when the final remedy is sorted. Dealer briefing Oct 8, 2026. Owner contact: Land Rover customer service 800-637-6837. VIN check at nhtsa.gov/recalls.
- **Casualties:** none reported in connection with this defect (no crashes/injuries in the coverage to date; say so, not "zero ever").

## Why it matters (the stakes, with a real number)

- NHTSA: seat belts saved an estimated **14,955 lives in 2017** (NHTSA "Seat Belts" fact page / Traffic Safety Facts). The single most effective safety device in the car, per DOT. A seatbelt that comes apart is the safety equivalent of a fire extinguisher full of sand.
- Second-row seating: the seatbelt hardware story matters disproportionately for the back seat (see the site's #972 rear-seat coverage: rear occupants in 2007+ vehicles face a HIGHER fatal-injury risk in frontal crashes than front occupants, because front belt hardware improved and rear hardware lagged).

## Kill test verdict: PASS

- **Newsworthy?** A seatbelt that can disassemble itself in a crash is the most viscerally alarming defect class there is. One customer's photo triggered a federal investigation. Yes.
- **Novel angle?** Queue grep: zero hits for 26V615, D130, stitching, unstitched, Nitra, harvesting. The closest stories: the Stellantis two-seatbelt-recalls piece (Ram buckle-anchor assembly error; Hornet/Tonale retractor design flaw — both different failure modes), #843's defect-spread census (0.5%→100% framing; this recall is another 100% data point, reference not rebuild), #1021 (rear seatbelt alarm rule 2027), #914 (wireless reminder). None cover stitching, the pallet-stopped-moving root cause, or the six-months-of-harvesting-nothing supply-chain archaeology.
- **Novel contribution (labeled arithmetic):**
  1. **The miss math:** six months of harvesting found zero defective belts, because the suspect pallet was sitting still. The failure wasn't in the belt inspection — it was in the assumption that the bad batch was flowing. Traceability, not inspection, was the broken system.
  2. **3 days / 371 vehicles / 100%:** the smallest population story with the largest defect estimate this year — 100% estimated-affected (compare #843: Ram 239,131 at 100%). A 3-day production window became a federal recall because belts aren't sequenced to VINs.
  3. **One photo → federal PE → 371-car recall:** the VOQ pipeline working exactly as designed — consumer complaint with photos (Aug 2025) → ODI preliminary evaluation (Dec 2025) → recall (Sept 2026), 14 months. Worth stating what that pipeline does right, not just wrong.

## Strongest counterargument (full strength)

This is the recall system working, not failing. A single owner complaint with photos became a federal investigation, the manufacturer spent months actively hunting defective parts, and when the hunt revealed a traceability hole instead of a defective population, it recalled the entire production window at 100% — the maximally cautious outcome. No crashes, no injuries, no deaths were ever reported with this defect. The 371-car recall is a paperwork-and-parts exercise for a failure mode that may never have hurt anyone. And the "pallet stopped moving" narrative, while colorful, may simply be logistics noise: a stalled pallet is not a scandal, and widening the net to the full window is exactly what a responsible PSCC should do when it can't sequence parts to VINs. One could argue the honest headline is "Land Rover recalled 371 cars as a precaution," and that treating it as a systemic exposé punishes transparency. The article's answer: that IS the story — the traceability gap (belts not sequenced to VINs) is the systemic point, and JLR's response was correct precisely because the gap is real.

## Limitations

- Root-cause detail (the stalled pallet at Nitra, six months of harvesting, the non-sequenced belts) comes from autoevolution's reading of the NHTSA-published Part 573 report; I did not independently verify the full 573 PDF text. Frame as "per the recall documentation as reported."
- The 14,955-lives figure is NHTSA's 2017 estimate; do not present it as current-year.
- Defect estimate of 100% is JLR's filing estimate for the window population (suspect-batch sourcing), not a measured failure rate — none of the harvested belts actually showed the defect.
- No crash, injury, or fatality figures attach to this defect in any source; do not imply otherwise.
- Autoliv's investigation status after Feb 2026 is unknown.

## Actionable insights

- Own a 2024 Defender built in the Jan 31–Feb 2, 2024 window: check your VIN at nhtsa.gov/recalls now (the definitive check; the year alone isn't enough). Letters go out Nov 20; don't wait — the fix is free.
- Any 2024 Defender owner: the defect is visible — look at your second-row belt stitching. If webbing stitching looks loose, uneven, or is coming apart, file a VOQ at nhtsa.gov. One photo started this recall.
- General: if you buy used, open recalls travel with the car, not the owner. Check the VIN before money changes hands.

## Sources (4 primary verified)

1. **NHTSA ODI PE25-019 investigation record** (government primary) — JLR's Feb 20, 2026 response to Question 20 on the alleged defect (VOQ: 2024 Defender second-row seatbelt stitching); Autoliv investigation ongoing at that date. https://static.nhtsa.gov/odi/inv/2025/INRL-PE25019-37706P2.pdf
2. **autoevolution, "Land Rover Is Recalling Certain Defender SUVs Over Stitching Defect," Sept 30, 2026** — D130 / 26V615; 371 units; Jan 31–Feb 2, 2024 window; 100% estimate; pallet paused lineside at Nitra; belts not sequenced to VINs; Autoliv Switzerland, Zug; part LR190158; dealer briefing Oct 8, 2026; interim letters Nov 20, 2026; 800-637-6837. https://www.autoevolution.com/news/land-rover-is-recalling-certain-defender-suvs-over-stitching-defect-276372.html
3. **OffRoading.News Daily Briefing, Oct 1, 2026** — confirms 26V-615 / D130, second-row belt, inspect-serial-and-replace remedy, interim letters Nov 20, not a stop-ride, 800-637-6837. https://offroading.news/briefing/2026-10-01
4. **OffRoading.News Daily Briefing, Sept 30, 2026** — confirms the same campaign pair (26V-599 / 26V-615) and timing. https://offroading.news/briefing/2026-09-30
5. NHTSA recalls database (VIN lookup) — https://www.nhtsa.gov/recalls
6. NHTSA seat-belt lives-saved figure — https://www.nhtsa.gov/risky-driving/seat-belts (standard "seat belts saved 14,955 lives in 2017" figure; verify page wording at publish).
