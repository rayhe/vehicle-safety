# Research: 1033 — Four Headlight Recalls in 14 Months. Zero Burned-Out Bulbs.

## Angle
On September 30, 2026, Ford recalled 41,748 Expeditions and Super Dutys because a contaminated LED chip can kill the daytime running lights, parking lights, high beams, or low beams. That's the news. The story is the pattern: cross-referencing four 2025-2026 NHTSA headlight recalls (Ford x2, Stellantis, Daimler Trucks), EVERY failure mode is in the electronics — contaminated chips, burnt diodes, unseated connector terminals, thermal-protection firmware bugs. Not one burned-out bulb, cracked lens, or bad filament in the bunch. The headlight has become a semiconductor device, and it's failing like one.

## Kill test
- Newsworthy? Yes: 41,748 brand-new Ford trucks/SUVs recalled yesterday (Sep 30). Timely peg.
- Novel? Yes: nobody has cross-tabulated the four 2025-2026 LED headlight recalls to show 100% of failure modes are electronic. The "single point of failure" observation (one chip/diode/connector kills multiple lighting functions at once) is an original design critique.
- Duplication check: #963 covered IIHS headlight performance RATINGS (different). #930 covered F-150 recalls (different vehicles). No existing story on the LED-electronics failure pattern. Queue search for rivian/headlight/ranger/26C43/contaminated-LED found no overlap.

## Primary sources
1. **NHTSA recall 26V606 / Ford 26C43** (announced Sep 30, 2026): 41,748 vehicles — 2025-2027 Ford Expedition, 2026 F-250/F-350/F-450/F-550 Super Duty. "Headlight assemblies may contain a contaminated LED chip, which can result in a loss of daytime running lights, parking lights, high beams or low beams." Dashboard indicator illuminates for inoperative low/high beams. Owner letters Oct 26. Ford: 1-866-436-7332. Source: USA Today, Sep 30, 2026 (Taylor Ardrey). https://www.usatoday.com/story/cars/recalls/2026/09/30/ford-recall-headlights-models/92019182007/
2. **NHTSA Part 573 Report 26E040** (filed Jul 1, 2026): Chrysler/FCA US equipment recall — 628 Mopar premium headlamp assemblies (2026 Ram 1500 LM6), supplier Marelli North America. Internal harness connector terminals not fully connected → parking lamps and/or DRLs turn off. FMVSS 108 S6.1.1 noncompliance (steady-burning requirement). Estimated 77% of the 628 have the defect. Build period Oct 29, 2025 - Feb 11, 2026. Owner notification ~Jul 30, 2026. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26E040-3187.pdf
3. **NHTSA Part 573 Report 25V519** (field action approved Aug 1, 2025): Ford Nautilus/Mach-E/Mustang LED Driver Module. Teardown traced loss of lighting to a burnt Schottky diode in the LDM; Tier-3 diode supplier quality issues across 3 diode lots. Nine plant quality reports + eight warranty claims (China). Five vehicles lost headlamp AND rear lamp concurrently — one diode, two ends of the car. No accidents/injuries reported. (NHTSA filing mirrored at lindseyresearch.com.) https://lindseyresearch.com/wp-content/uploads/2025/09/RCLRPT-25V519-1620-Ford-Motor-Company-Headlights-May-Fail.pdf
4. **NHTSA Part 573 Report 26V475**: Daimler Trucks North America — headlamp thermal protection logic contains a software error; low beams appear dim for several minutes after high-to-low switch at elevated ambient temps. One dealer report Jun 27, 2026; recall voted Jul 17, 2026. Supplier: Grote Industries. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V475-6062.pdf
5. **FMVSS No. 108** (49 CFR 571.108), Lamps, reflective devices, and associated equipment — the steady-burning and photometry requirements all four recalls violated or risked. https://www.nhtsa.gov/recalls (database); standard text via govinfo/ecfr.
6. Corroborating press: Money Talks News (USA Today Network), Sep 30, 2026 — same 41,748 figure, Oct 26 letter date. https://www.moneytalksnews.com/ford-recalls-k-cars-over-headlight-issue-see-models/

## Key numbers
- 41,748 vehicles in Ford 26V606 (Sep 30, 2026)
- 628 assemblies in Stellantis 26E040, 77% estimated defect rate
- 3 diode lots implicated in Ford 25V519
- 4 recalls, 14 months (Aug 2025 - Sep 2026), 0 bulb/lens/filament failures
- Owner notification lag: Ford letters Oct 26 (~26 days after announcement)

## The novel calculation/observation
Consolidation accounting: a sealed LED headlight assembly integrates DRL + parking + low + high beam into one unit driven by one LED driver module fed by one chip/diode lot. In all four recalls, a single electronic defect propagated to multiple lighting functions simultaneously (Ford 26V606: one chip → up to four functions; Ford 25V519: one diode → headlamp + rear lamp; Stellantis 26E040: one unseated terminal → parking + DRL). The old architecture (separate bulbs, separate circuits, separate fuses) had graceful degradation; the new architecture has single points of failure. That is the design critique.

## Limitations (for the article)
- Population counts for 25V519 and 26V475 not pulled; article will cite failure modes, not totals, for those two.
- "Contaminated LED chip" — Ford's Part 573 chronology (supplier, contamination vector) not yet in hand; article will stick to the published defect description.
- Cannot prove LEDs are less reliable than halogens overall — recall counts reflect reporting, not field failure rates. The claim is about failure MODE shift, not failure RATE.
- 26E040 is an equipment recall (628 assemblies, some possibly never installed), not a vehicle recall — will state this.

## Counterargument (strongest)
LED headlights are dramatically better at the actual job — IIHS data shows good-rated headlights correlate with fewer nighttime crashes, and LEDs enable adaptive driving beams. The electronics failures are manufacturing quality escapes (contamination, bad diode lots, unseated terminals), not indictments of LED technology. A halogen bulb burning out is also a single point of failure for that lamp. The honest frame: the failure modes moved up the stack from replaceable $8 bulbs to sealed $1,500 assemblies with semiconductor defects.

## Actionable insight
If you own a 2025-2027 Expedition or 2026 Super Duty: check your VIN at nhtsa.gov/recalls now, don't wait for the Oct 26 letter; the dashboard warning only illuminates AFTER the beams fail. General: when shopping, ask whether the headlight assembly is sealed-LED (replacement = full assembly, ~$1,000-2,000) vs. serviceable bulbs.

## Journalist
Mia Crumplezone (Safety Engineering Editor) — vehicle design analysis beat. Kicker: Trend Watch.
