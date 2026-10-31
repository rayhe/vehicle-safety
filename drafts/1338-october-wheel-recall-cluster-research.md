# Research: #1338 — October 2026 Wheel-Fastening Recall Cluster

**Journalist:** Axle McScatter (Data Visualization Editor — statistical roundup, "By The Numbers")
**Kicker:** By The Numbers
**Working title:** "The Wheels Came Loose in October: 589 Cars, 3 Recalls, and Porsche's 1-in-5 Miss"
**Date:** 2026-10-30

## Angle (1-2 sentences)
In October 2026, three NHTSA campaigns covered wheels and suspension fasteners coming loose: Porsche expanded its 2024 center-lock wheel-bolt recall after its first traceability investigation missed ~1 in 5 affected cars, and Hyundai filed twin recalls for under-torqued fasteners on brand-new 2026 models from the same plant and supplier. A tally nobody ran: the wheel is held on by the oldest fastener in the car, and in one month it failed across a $20K Hyundai and a $200K Porsche.

## Kill test
- Newsworthy? Wheels detaching at speed is viscerally newsworthy; a Do-Not-Drive recall on 911 GT3s is.
- Novel angle? Yes: the cluster framing (3 campaigns, one month, one failure family), the computed miss rate (~19.6% — nearly 1 in 5 affected Porsches slipped through the 2024 investigation), and the twin-Hyundai same-plant/same-supplier pattern. Not a repeat of #1333-#1337 (speedometer, drunk driving, tires, VW battery, PACCAR hose).
- **Verdict: PROCEED.**

## Facts (all from cited sources, verified across 2+ outlets where noted)

### Porsche 26V682 (filed Oct 16, 2026; VINs searchable Oct 20; owner letters Dec 15)
- 548 vehicles: 2024 911 (GT3, GT3 RS, Turbo, Turbo S, S/T, Carrera GTS) + 718 Cayman GT4 RS + 718 Spyder RS.
- Center-lock wheel bolt may fracture → wheel detaches. NHTSA "Do Not Drive" classification.
- Expands 24V809 (Oct 2024; after Dec 2024 amendment covered 2,251 vehicles: 2021-2024 911, 2024 718, 2025 Panamera). Original cause: single batch of out-of-spec bolts from German supplier Hirschvogel; 4 U.S. incidents incl. 2 crashes (wheel came off), no injuries reported then.
- Trigger for expansion: 2 additional fractured-center-lock incidents (May 2026, Aug 2026). Re-investigation with Hirschvogel found "previously unidentified material movements" — gaps in the 2024 traceability assessment. Updated supplier delivery-note matching identified more suspect locks from the same out-of-spec batch.
- Material analysis: "lead and bismuth contents outside the specification."
- Affected production window: June 7 - July 19, 2024 (six weeks).
- Porsche internal code ATA1. Per-model US split (MotorBiscuit via NHTSA report): Carrera GTS 168, Turbo S 94, Cayman GT4 RS 73, Spyder RS 70, GT3 50, GT3 RS 41, S/T 39, Turbo 13 = 548.
- **Original finding (computed):** 548 missed / (2,251 + 548) true population = 19.6% — nearly 1 in 5 affected cars missed by the first recall's traceability exercise. (Caveat: denominator uses the amended 24V809 population; if some 24V809 VINs were over-included, true miss rate differs. Methodology stated in article.)
- Notification lag: filed Oct 16 → letters Dec 15 (~2 months) while under do-not-drive instruction.

### Hyundai 26V693 (NHTSA received Oct 21, 2026; VINs searchable Oct 23; letters Dec 19)
- 17 vehicles: 8 Venue, 4 Elantra, 4 Elantra Hybrid, 1 Elantra N — all 2026 MY, built Aug 10-27, 2026 at Ulsan, South Korea.
- Wheel lug nuts may loosen → wheel may detach. Fix: inspect/retighten; replace hub bearing assembly as necessary.
- Root cause per filing: temporary manual torquing process at Ulsan. Supplier: Samjin Nut (Cheonan), part 52950-14140.
- Hyundai internal number 310.

### Hyundai 26V692 (companion, same plant/supplier/failure family)
- 24 vehicles: 20 Elantra, 4 Tucson Hybrid. Suspension strut fasteners improperly tightened (flange nut 62618-4D000); inadequate torque + incorrectly recorded torque data.
- Same Ulsan plant, same supplier (Samjin Nut). Hyundai implemented new torque monitoring/sign-off Sept 9, 2026.
- Companion fact: Hyundai's 22 recalls in 2026 so far (5th among major automakers; Ford at 81) — autoblog Oct 24, 2026.

### Cluster tally (original computation)
| Campaign | Vehicles | Component | Root cause |
|---|---|---|---|
| Porsche 26V682 | 548 | Center-lock wheel bolt (fracture) | Out-of-spec material batch (Pb/Bi) + traceability miss |
| Hyundai 26V693 | 17 | Wheel lug nuts (loosening) | Manual torquing lapse, Ulsan |
| Hyundai 26V692 | 24 | Strut fasteners (loosening) | Torque lapse + bad records, Ulsan/Samjin |
| **Total** | **589** | | |

## Sources (primary: NHTSA filings via trade/press reporting; cross-verified)
1. NHTSA campaign 26V682 record (via automotor.news: https://automotor.news/news/porsche-911-718-center-lock-wheel-bolt-recall-26v682/ ; filed Oct 16, 2026; expands 24V809)
2. NHTSA campaign 24V809 record (via octanedaily: https://octanedaily.com/news/porsche-center-lock-wheel-recall-expanded/ ; Oct 2024, amended Dec 2024, 2,251 vehicles, 4 incidents/2 crashes)
3. NHTSA campaign 26V693 record (via automotor.news: https://automotor.news/news/hyundai-venue-elantra-lug-nut-wheel-recall-26v693/ ; 17 units, received Oct 21, 2026; also europesays https://www.europesays.com/korea/201809/ for build dates + Samjin Nut detail)
4. NHTSA campaigns 26V692/26V693 (via autoblog: https://www.autoblog.com/news/hyundais-two-new-recalls-boil-down-to-loose-nuts ; Oct 24, 2026; same plant/supplier; 22 Hyundai recalls YTD, Ford 81)
5. Recall timeline/notification lag (via roadethos: https://roadethos.com/news/porsche-tells-548-more-owners-to-stop-driving-and-letters-are-two-months-away ; motorbiscuit https://www.motorbiscuit.com/porsche-owners-told-to-park-their-cars-as-recall-grows-over-fracturing-wheel-locks/ for per-model split + Pb/Bi cause)
6. NHTSA recalls database: https://www.nhtsa.gov/recalls (parent link for VIN checks)

## Limitations (for the article's dedicated section)
- Population counts are manufacturer-reported "potentially affected" figures, not confirmed defective counts.
- The 19.6% miss-rate computation treats the amended 24V809 population (2,251) as the true baseline; over-inclusion in 2024 would lower the miss rate, under-inclusion beyond the 548 would raise it.
- No injury data published for the two 2026 Porsche incidents; Hyundai reports no known crashes/injuries for 26V692/26V693.
- This tally covers campaigns announced in October 2026; wheel-separation defects announced earlier (e.g., 26V671 Volvo EX30 is head restraints, not wheels — excluded deliberately) are out of scope.

## Strongest counterargument (for the article)
The small counts cut both ways: 17 Hyundais and 548 Porsches is a rounding error against ~16M annual US vehicle sales, and both manufacturers caught the defects before mass casualties — the recall system working as designed. The Porsche expansion could be read as diligence (second investigation, broader traceability) rather than failure. The article must grant this at full strength.

## Actionable takeaways (HARD GATE — must appear in article)
- 2024 911/718 center-lock owners: check VIN at nhtsa.gov/recalls NOW (searchable since Oct 20); if affected, park it — Do Not Drive — don't wait for the Dec 15 letter.
- 2026 Elantra/Venue/Tucson Hybrid owners from Ulsan: check VIN (searchable since Oct 23); the fix is a free lug-nut/bolt re-torque.
- General: any recall filed in Oct 2026 won't have letters in your mailbox until December — check by VIN proactively; never wait for the letter.
