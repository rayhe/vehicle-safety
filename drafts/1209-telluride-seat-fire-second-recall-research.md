# Research Notes — #1209: Kia Recalled the Telluride for Seat Fires. Then the Seats Caught Fire Anyway.
**Article #1209** | Clara Rollover (Consumer Safety Advocate) | Kicker: Investigation

## News peg
NHTSA campaign **26V430000** (Kia SC374), report received **July 2, 2026**: Kia recalls ~**462,869** model-year 2020-2024 Tellurides for front power seat motors that can overheat and start fires. The recall **replaces 24V407** (June 2024, Kia SC316) because the original remedy — a reinforcing bracket dealers were supposed to install — was frequently installed incorrectly, leaving the fire risk in place. Vehicles already "fixed" under 24V407 must come back.

## Core facts (all verified)
- **Population:** ~462,869 Tellurides, built Jan 9, 2019 – May 29, 2024, that were previously affected by SC316/24V407. (Kia advance dealer notice, static.nhtsa.gov)
- **Defect:** external impact to the front power seat side cover/slide knob can dislodge or misalign the power seat switch; a misaligned/damaged switch — **or an improper 24V407 repair** — lets a seat motor run continuously, overheating until it melts or ignites. Fire possible while driving OR parked.
- **Incident count:** 18 unique incidents received Oct 17, 2024 – Apr 24, 2026: **7 localized seat/under-seat fires, 11 melted seat motors.** No crashes, injuries, or fatalities. (Kia chronology report, static.nhtsa.gov)
- **Remedy:** dealers install an **electronic fuse assembly** that cuts power if the seat motor runs too long — a fundamentally different (electrical, not mechanical) fix. Free.
- **Interim guidance:** park outside and away from structures until repaired.
- **Timeline:** owner letters mailed ~Aug 13, 2026; VINs searchable from July 17, 2026; Kia customer care 1-800-333-4542.
- **Exclusions:** Telluride LX trim (manual front seats — no power motor to fail); Tellurides built from May 30, 2024 (reinforced switch installed at factory).
- **Warning signs (per Kia dealer notice):** seat slide knob sticking; seat keeps moving after knob released; burning/melting smell; smoke from under the seat.

## The forensic trail (from Kia's own chronology filing)
- July 31, 2025: Kia NA Safety Office inspects "Vehicle #3" — confirmed fire origin at the **driver-side tilt motor**, with NO observable seat-switch back-cover dislodgement. The 2024 bracket fix was present and the fire happened anyway.
- Aug 19-20, 2025: x-ray imaging + tear-down finds **tilt motor control shaft misalignment** with no internal back-plate dislodgement — i.e., the switch failed in a way the bracket couldn't prevent.
- Sep–Dec 2025: further evaluation; preliminary finding that an occupant striking the slide knob when entering can twist it with enough force to dislodge the switch.
- Dec 11, 2025 – Jun 5, 2026: continued monitoring; June 15-25, 2026 field analysis identifies the 18 incidents; Kia decides to re-recall.

## Original contribution: the 2026 campaign census context
Replicated the #1208 NHTSA API census method across ~64 high-volume model x MY (2024-2026) combos on 2026-10-18: **110 unique 2026 campaigns (26Vxxx)** found. Of the flagged subsets:
- **parkOutSide=true: 2 campaigns** in sample — 26V363 (Jeep Wrangler/Gladiator steering-pump wiring fire) and 26V430 (this Telluride recall).
- **doNotDrive (parkIt): 2** — 26V090 (Ford brake booster), 26V289 (GM transfer case).
- **"remedy under development": 1** — 26V605 (Ford Ranger backup display; already covered by #994/#1075/#1128).
- 26V430 is the **only re-recall in the park-outside set**: its defect description explicitly names the prior campaign's repair as a failure mode ("an improper recall SC316 (24V407) repair").

**The math that matters:** 24V407 (June 2024) → 26V430 (July 2026) = **25 months** between the failed fix and the replacement recall. In that window, 7 seat fires and 11 melted motors occurred on vehicles Kia had already "repaired." The original remedy was mechanical (bracket + knob); the real fix is electrical (fuse assembly that kills power on runaway). Kia spent two years reinforcing the wrong thing.

## Kill test
- Genuinely new on the site? **Yes.** telluride/recall keywords: only IIHS-award stories (#874, #906); 24v407/sc374/26v430: zero hits. The July 2026 recall predates my run but the site never covered it.
- Novel angle? Not another fire-recall story (#981 Jeep, #1134 Pacifica, #1173 Genesis, #1203 Seltos). This is the **repair-failed** frame: the manufacturer's own dealers installed the fix wrong, and Kia's chronology documents the company discovering — via x-ray tear-down of a burned car — that its fix couldn't have worked. The 25-month gap and 18-incident count are new numbers.
- Proceed.

## Actionable insight
- If you own a 2020-2024 Telluride (not LX, built before May 30, 2024): check your VIN at nhtsa.gov/recalls NOW — even if you already had the 2024 seat recall done. The old repair does not count. Park outside until the fuse assembly is installed.
- Warning signs to act on today: sticking slide knob, seat that keeps moving after you release the switch, any burning/melting smell, smoke from under the seat. Those are not quirks; they are the documented precursors.
- General lesson: a completed recall repair is not a guarantee — when a second recall supersedes the first, the first repair is void. Always re-check.

## Limitations
- Census is sample-based (~64 high-volume combos, 2024-2026 MY queries; ~37 queries returned HTTP 400 due to model-name mismatches), not an exhaustive flat-file census; smaller models/equipment recalls could hide additional park-outside campaigns. Stated explicitly.
- The 18 incidents are Kia's field-data count (received Oct 2024–Apr 2026); underreporting is likely (fires extinguished without a report, melted motors replaced out of warranty).
- No injuries/fatalities reported — the harm is property fire risk, stated explicitly; I do not inflate to bodily-injury framing.
- Population "approximately 462,869" is Kia's estimate; press rounds to 462,800.

## References (for the story)
- NHTSA FARS: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
- NHTSA recalls database: https://www.nhtsa.gov/recalls
- NHTSA VIN recall check: https://www.nhtsa.gov/recalls (same)
- Kia advance dealer notice SC374 (static.nhtsa.gov, 7/6/2026): https://static.nhtsa.gov/odi/rcl/2026/RCMN-26V430-6614.pdf
- Kia dealer parts/service notice (static.nhtsa.gov, 8/6/2026): https://static.nhtsa.gov/odi/rcl/2026/RCMN-26V430-4511.pdf
- Kia chronology report (static.nhtsa.gov): https://static.nhtsa.gov/odi/rcl/2026/RCHRN-26V430-7964.pdf
- NHTSA recalls API record 26V430000 (queried 2026-10-18)
- Autoblog (Karl Furlong): https://www.autoblog.com/news/kia-telluride-seat-recall-and-fire-risk
- How-To Geek explainer: https://www.howtogeek.com/kia-telluride-seat-fire-recall-july-2026/
