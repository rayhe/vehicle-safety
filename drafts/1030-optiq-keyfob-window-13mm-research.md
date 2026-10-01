# Research: 1030 — Cadillac Optiq key-fob power window recall (26V612 / GM N262567230)

**Status:** FRESH — no Crash Report coverage of power windows (grep: 0 "window" hits in stories/ and queue titles).

## Story angle
GM recalled 29,347 Cadillac Optiq EVs (2025–2027) because the front windows may not stop and reverse when they hit something during the final 13 millimeters of upward travel — but only when the window is closed with the **express-up button on the key fob**. GM knew of zero complaints and zero injuries. The recall is a pure noncompliance filing against FMVSS 118. Novel angle: the anti-pinch rule has a 13mm dead zone at the top of window travel; the federal standard was written around an obstruction-detection test, and the key-fob remote-close path bypassed the logic that passes it. The takeaway is the check-VIN + OTA-fix one.

## Primary sources
1. NHTSA recall campaign 26V612; GM recall number N262567230 — reported Sept 24, 2026 via NHTSA; vehicle count 29,347. (nhtsa.gov/recalls)
2. USA Today, "GM recalls more than 29K Cadillac vehicles," Sept 30, 2026 — confirms per-model-year counts (2025: 12,558; 2026: 10,201; 2027: 6,588), build dates July 24, 2024–Sept 22, 2026, zero complaints known to GM, "increased risk of injury to a person in its path." (https://www.usatoday.com/story/cars/recalls/2026/09/30/gm-cadillac-vehicle-recall-september-2026/92025637007/)
3. FMVSS 118 (49 CFR 571.118) — federal standard for power-operated window, partition, and roof panel systems; stop-and-reverse / auto-reverse requirements for closing windows. (https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-571/subpart-B/section-571.118)
4. GM Authority, "Cadillac Optiq Recalled For Keyfob Operated Power Window Issue," Sept 2026 — campaign number 26V612, GM N262567230, remedy is BCM software calibration update (OTA or dealer), revised calibration in production Sept 22, 2026; dealers notified Sept 24; owner letters Nov 9. (https://gmauthority.com/blog/2026/09/cadillac-optiq-recalled-for-keyfob-operated-power-window-issue/)
5. problemsbyvin.com, "2025 Cadillac Optiq Recalled Over Electrical System" — root cause: body control module software logic fails to catch obstruction during key-fob express-up; not mechanical. Confirms OTA remedy path. (https://problemsbyvin.com/news/2025-cadillac-optiq-recalled-over-electrical-system/)

## Numbers (verified across 2+ sources)
- 29,347 vehicles (USA Today + GM Authority + moneytalksnews).
- 12,558 (2025) / 10,201 (2026) / 6,588 (2027).
- Build window: July 24, 2024 – Sept 22, 2026.
- Failure zone: final 13mm of upward travel, key-fob express-up only.
- GM: zero complaints known.
- Fix: BCM software calibration, free, OTA or dealer; owner notification letters Nov 9.

## Kill test
Genuinely newsworthy? YES, marginally: (a) first power-window story in 862 Crash Report articles; (b) a recall filed with zero complaints tests whether the system works; (c) the remote-close feature is one adults use with kids standing near the car — the exact hazard the standard exists for. Risk of thinness mitigated by FMVSS-118 regulatory framing + actionable takeaway.

## Journalist
Clara Rollover — consumer safety advocate. Beat match: direct consumer-guidance recall story. (Dale Impactor III is the rotation least-used but his beat is toxicology; assignment rules say beat-match.)

## Headline candidates
- "GM Recalled 29,347 Cadillacs Because a Key Fob Can Close the Window. Nobody Complained."
- "The 13 Millimeters Where Your Window Can't Feel Your Fingers"
- "GM's Recall Had Zero Complaints. That's the Point."

Kicker: **The Gap**.

## Counterargument (must include)
Zero complaints and zero injuries; the key-fob remote-close is an opt-in convenience feature nobody has to use; a software fix is already out. The strongest reading: this recall proves the compliance system catching a paperwork-grade defect, not a product killing people. If it never hurt anyone, the takeaway is vigilance theater, not a safety crisis.

## Limitations
- FARS captures only fatal crashes; a window-pinch injury story has no FARS signal — this article relies on NHTSA recall documents, not crash statistics.
- Cannot verify how often owners use key-fob express-up vs. door switches; actual exposure is unknown.
- GM's "not aware of any complaints" is a manufacturer statement; absence of complaints is not evidence of absence of injuries, but also not evidence of injuries.
- Did not independently verify FMVSS 118 test-zone language beyond the eCFR standard text.
