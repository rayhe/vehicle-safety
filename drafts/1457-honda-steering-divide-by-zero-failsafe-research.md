# Research — #1457: Honda's Steering Software Divides by Zero, and the "Failsafe" Kills the Assist

**Slug:** `1457-honda-steering-divide-by-zero-failsafe`
**Journalist:** Vin Wreckage (Existential Dread — paradoxes, counterintuitive findings; tied least-used in last 40: 4)
**Kicker:** Investigation
**Date researched:** 2026-11-10
**Target ship_date:** 2028-07-09 (1 day after #1456's 2028-07-08)

## Story in one line
Honda recalled 635,808 Pilots, MDXs and TLXs because the steering software can divide by zero — and when it does, the system responds to the math error by switching off the power steering entirely, on a straight road, at speed. The failsafe is the failure.

## Kill test
- **Genuinely newsworthy?** YES. Announced today, Nov 10, 2026 (Reuters, USA Today, Torque News all Nov 10). NHTSA 26V-721, 635,808 vehicles, steering loss. A divide-by-zero in production steering software is a news event on its own.
- **Novel angle on data?** YES. Full queue/drafts grep: zero prior coverage of 26V-721, of the Bosch EPS divide-by-zero, of the Driver Attention Monitor compensation error. Nearest neighbor #983 (sticky steering, 24V-744) is a different defect — a mechanical worm-gear swell on different models (Civic/CR-V/HR-V/Integra). This is pure software, different models, different mechanism. The 2025 RDX recall 25V582 (17,334 vehicles) shares the failsafe outcome but a different calibration error and was never covered as a standalone story.
- **3+ primary sources?** YES. (1) Honda Part 573 filing via Torque News (quotes the filing verbatim, incl. chronology and supplier); (2) Reuters Nov 10, 2026; (3) USA Today Nov 10, 2026 (injury count, owner letters Dec 14); (4) NHTSA complaints ODI 11698387 + 11668703 (owner accounts, unverified, used as illustration only).
- **Verdict:** PROCEED.

## Primary sources
1. **Honda Part 573 safety recall report, NHTSA 26V-721 (Honda KQB/TQA), received by NHTSA Oct 29, 2026** — via Torque News, Nov 10, 2026 (Noah Washington), which quotes the filing directly. https://www.TorqueNews.com/17998/honda-recalls-635808-pilot-acura-mdx-tlx-software-can-shut-off-power-steering-assist
2. **Reuters, "Honda to recall more than 600,000 US vehicles over issues with steering assist software," Nov 10, 2026.** https://www.reuters.com/legal/litigation/honda-recall-more-than-600000-us-vehicles-over-issues-with-steering-assist-2026-11-10/
3. **USA Today, "Honda recalls over 635K vehicles," Nov 10, 2026** — one injury, no deaths, May 2022–Oct 22, 2026; owner letters Dec 14. https://www.usatoday.com/story/cars/recalls/2026/11/10/honda-recalls-vehicles-acura-tlx-mdx-pilot-models/92703780007/
4. **NHTSA complaints (unverified owner accounts, illustration only):** ODI 11698387 (2025 Pilot, Nov 8, 2025 — steering failed straight at 25–30 mph, dash lit up); ODI 11668703 (2025 Pilot, Jun 23, 2025 — steering wheel "entirely unresponsive," restart restored assist temporarily).
5. **Background (site research #983):** Honda sticky-steering recall 24V-744 (Oct 2024, ~1.69M vehicles, mechanical worm-gear defect) — used for the pattern comparison only.

## Key verified facts (from the Part 573 filing, via Torque News)
- **Population:** 635,808 vehicles. 2023–2025 Honda Pilot: 383,110 (built Sep 13, 2022–Dec 23, 2025). 2022–2024 Acura MDX: 177,100 (built Dec 10, 2020–Jul 10, 2024). 2021–2025 Acura TLX: 75,598 (built Aug 11, 2020–Aug 18, 2025). Honda estimates **100%** of the population carries the software.
- **Supplier:** Robert Bosch Automotive Steering LLC, Florence, Kentucky; 42 power steering rack part numbers.
- **Mechanism (filing's words):** the supplier "developed incorrect EPS software containing an error in the Driver Attention Monitor road-condition compensation calculation and an improperly configured response to the resulting internal error." The software "may perform a floating-point division with a zero denominator, triggering an internal error. The EPS software was incorrectly configured to respond to this error by disabling power steering assist."
- **Trigger condition:** "only occurs under certain operating conditions when the vehicle is driving straight" (Honda, confirmed Feb 2026).
- **Driver experience (filing's words):** "If the EPS system enters failsafe mode, power steering assist is disabled, and the EPS warning indicators illuminate in the instrument cluster. Without power assist, steering effort increases, which may reduce vehicle controllability, increasing the risk of a crash or injury."
- **Body count:** 146 warranty claims, **1 injury, 0 deaths**, May 22, 2022–Oct 22, 2026.
- **Chronology (filing):** Nov 29, 2021 — first report. Aug 2023–Aug 2025 — more reports, worked with supplier, but "due to the deletion of error codes by the dealer or supplier, no issues were found with returned parts." Aug 22, 2025 — supplier identified the failure through market-return analysis. Dec 2025 — Honda recreated the issue by analyzing dashcam footage. Oct 22, 2026 — defect determination. Oct 29, 2026 — report to NHTSA.
- **Remedy:** dealer reprograms the EPS control unit with improved software, free. Dealer notification ~Oct 30, 2026; VINs searchable at nhtsa.gov/recalls from Nov 11, 2026; owner letters ~Dec 14, 2026. No park-outside or do-not-drive advisory; no interim owner notice. Honda customer service 1-866-784-1870; NHTSA Vehicle Safety Hotline 1-888-327-4236.
- **Open question (filing):** "The affected models are no longer in production" — yet Honda sells a 2026 Pilot, and the filing does not say whether it carries the corrected software.
- **Precedent in the same family:** 2025 Acura RDX recall 25V582 (17,334 vehicles) — same failsafe outcome (loss of assist), different calibration error, defect estimate 0.3%. The 2025 MDX and 2026 Pilot are NOT in the 26V-721 population.
- **Same three nameplates, different system:** Jan 2025 recall 25V031 (294,612 vehicles) — the same Pilot/MDX/TLX population had an FI-ECU software error that could stall the engine. Software is now Honda's repeat offender across systems on these models.

## Original contribution (Vin's math and synthesis)
1. **Two bugs, not one.** The filing names two distinct defects: the divide-by-zero in the Driver Attention Monitor compensation, AND the error handler that answers an internal error by disabling assist. A failsafe that fails unsafe. The first bug is an arithmetic edge case; the second is a design decision — someone chose "shut it all off" as the response to an error the software was never supposed to produce. The recall fixes both, but only the second one is a choice.
2. **The attention-monitor irony.** The calculation that divides by zero lives in the Driver Attention Monitor — the system that watches whether the driver is paying attention. The watcher loses track of the road, does impossible math, and the punishment lands on the driver: suddenly manual steering at speed. The safety system that monitors you is the one that stops helping you.
3. **The deleted-evidence gap.** Two full years (Aug 2023–Aug 2025) of investigation produced nothing because error codes were deleted by the dealer or the supplier before returned parts were examined. The filing reports the deletion without saying how many codes were deleted or why. The defect was only identified when the supplier analyzed market returns in Aug 2025 — four years after the first report. Timeline math: Nov 29, 2021 → Oct 22, 2026 is **1,788 days** from first report to defect determination.
4. **100% carry it, almost nobody hits it.** Honda estimates 100% of the 635,808 carry the software, but the failure needs specific straight-driving conditions: 146 warranty claims in 4.5 years against 635,808 vehicles is a 0.023% claim rate. Being on the list and losing assist are different events — but every one of the 635,808 is driving around with a steering system that contains a divide-by-zero and an error handler programmed to cut assist. Contrast the RDX recall's 0.3% defect estimate: different calibration, different math, same philosophical failure.
5. **Third steering failure mode in three years.** Honda steering has now failed three different ways: mechanical stick (24V-744, worm gear swells, Oct 2024, ~1.69M), calibration failsafe (25V582, RDX, 2025), divide-by-zero failsafe (26V-721, Nov 2026, 635,808). The pattern is the story: steering is no longer a mechanical system with a software assist. It is a software system with a mechanical fallback, and the software keeps finding new ways to quit.

## Strongest counterargument
One injury and zero deaths across 635,808 vehicles and four and a half years is, by any honest measure, a rare event — 146 warranty claims is a 0.023% rate, and most of those are probably not even this defect. The divide-by-zero needs specific straight-driving conditions that almost never align. Honda found it, reported it, and the fix is a free reprogram. The "failsafe kills the assist" framing is dramatic, but the failsafe exists precisely because an EPS system that doesn't know its own state is more dangerous than one that admits it: a wrong assist torque at highway speed could steer the car into the next lane, while no assist just makes the wheel heavy. Disabling assist on an internal error is a defensible engineering choice, not obviously a bug — the filing calls the response "improperly configured," but Honda's own words don't say what the correct response should have been. And the deleted error codes may be routine (dealers clear codes during diagnosis as a matter of course), not a cover-up. The story should not imply malice where the filing implies process.

## Limitations
- The Part 573 filing was read via Torque News's quotation, not the NHTSA PDF directly; exact filing language is as quoted by Torque News. Reuters and USA Today corroborate the headline numbers independently.
- NHTSA complaints (ODI 11698387, 11668703) are unverified owner accounts and are NOT tied to this recall's fault by NHTSA; used only to illustrate what sudden assist loss feels like from the driver's seat.
- Honda has not disclosed how many of the 146 warranty claims are confirmed instances of this defect vs. other steering complaints.
- The 2026 Pilot question (does it carry corrected software?) is unanswered in the filing; do not claim either way.
- No crash count is given in the filing beyond the 1 injury / 0 deaths figures.

## Actionable insights (hard gate)
- If you own a 2023–2025 Pilot, 2022–2024 MDX, or 2021–2025 TLX: check your VIN at nhtsa.gov/recalls starting Nov 11, 2026 — do not wait for the Dec 14 letter.
- The signature symptom: steering suddenly goes heavy while driving straight, with EPS warning lights on the dash. If it happens, the car is still steerable, just much harder — pull over when safe, restart (owners report assist can return temporarily), and call the dealer; do not keep driving at highway speed with a dead assist.
- The fix is a free dealer reprogram of the EPS control unit — no parts, no cost, no reason to delay.
- If you are shopping a used 2023–2025 Pilot or 2022–2024 MDX, verify the 26V-721 remedy is complete before signing; the recall applies to vehicles built as recently as Dec 2025.
