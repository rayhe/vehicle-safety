# Critic Panel — #1038 (Round 0) — VERDICT: SHIP

Article: `drafts/1038-toyota-prius-doors-open-twice.html`
Journalist: Clara Rollover | Kicker: Investigation
Hero: `drafts/1038-toyota-prius-doors-open-twice.jpg` (real JPEG 1920x1280, ?v=b7c1607f)

## Hard gates
- Em dashes: 0 (max 3) PASS
- Banned phrases: 0 PASS
- The-starters: 10.4% (max 15%) PASS
- CSS class: `story` + `../style.css`, no story.css PASS
- Story-hero: exactly 1 `<img class="story-hero">` after dateline PASS
- og:image absolute (`https://vehicle-safety.org/images/...`) PASS
- Sentence rhythm: variance 1070.5 / short 5.6% / long 50.0% PASS (fixed via 5 fragment merges)
- Actionable takeaways: present (VIN check 26V049/26TB03, auto-lock mitigation, used-car warning) PASS
- References section: 5 refs, all URLs verbatim from search results, no invented links PASS

## Scores

1. **General Editor — 9.0.** Kicker/headline/lede-with-bolded-stat/pull-stat/3-4 body paragraphs/references/disclaimer all present. ~420 words, punchy. Headline is sensationalist but every number in it traces to a cited filing. Opens mid-thought ("The fifth-generation Prius is the prettiest one Toyota has ever built"), has actual opinions ("A door should never be openable by weather, full stop"). -1 for the lede being slightly dense: three bolded claims stacked in paragraph one; acceptable, but a skim reader hits the pull stat fast enough.

2. **Voice Coach — 8.7.** Clara's register is present throughout: direct, consumer-first, controlled anger ("Read that again: the repair you sat in a waiting room for is being recalled"). No banned phrases, no "X isn't about Y. It's about Z" constructions. Distinct from Rex's noir and Mia's engineering enthusiasm; you could not swap this byline. -1.3 for "In fairness, and the fairness matters," which is self-conscious throat-clearing Clara would more likely just say "In fairness." Minor.

3. **Ethics Reviewer — 9.0.** No injury claims beyond what the filings support (none documented; article states this). The counterargument paragraph gives Toyota its best case at full strength (1% defect rate, voluntary recalls, millions of electronic latches industry-wide). No self-congratulation, no fear-mongering beyond the documented failure mode. Consumer positions are pro-owner without manufacturing outrage.

4. **Social/Shareability — 9.0.** Headline is built for sharing. Pull stat "55,700 → 141,286" with the subhead "The population more than doubled while the first 'fix' was in the field" is the share trigger. Quotable line: "the repair you sat in a waiting room for is being recalled." Prius ownership is enormous; the "check if you're affected" CTA travels.

5. **Legal Accuracy — 8.8.** Two primary documents (NHTSA RCAK-26V049-9972, Toyota 24TA06 dealer notice) read in full; ref-3 honestly labels itself as a secondary summary of the Transport Canada recall rather than pretending to be the government PDF. All URLs verbatim from search results. "Replaces" vs "supersedes" wording matches the RCAK letter. -1.2 because the February 2025 Japan half-latch field report is sourced only through DealershipGuy's summary of Toyota's chronology; the full Part 573 report was not located, and the article's disclaimer correctly says so.

6. **Research Rigor — 9.0.** Original contribution is real and threefold: (a) the 2.54x population math with the inference that Toyota kept building the vulnerable latch into new model years during an open investigation, (b) the remedy-escalation analysis (parts-level switch replacement → logic-level circuit modification) as Toyota's structural admission, (c) the electronic-latch architecture framing. Limitations are explicit and honest: no published count of post-2024-remedy failures, only Toyota's circumstantial replacement; 1% defect rate; no documented injuries. Methodology transparent: "Population counts and the 1% defect estimate are Toyota's figures."

7. **Data Presentation — 8.8.** All arithmetic checks out: 141,286/55,700 = 2.54x; April 2024 → January 2026 ≈ 21 months; 19,399 Canadian units reported separately, not blended. Numbers are contextualized in prose, not dumped. -1.2 because the pull stat's "2.5x" rounding is fine but the article never states the raw 2.54x figure inline; a rigor reader would appreciate it. Minor.

**Mean: 8.9. Floor: 8.7. All 7 critics ≥ 8.5, all hard gates pass → SHIP.**

## Novelty note (per AGENTS.md rule)
Duplicate sweeps performed before drafting: GM 26V539 camera (#980), Rivian camera (#977), Jeep coil spring (#847/#858/#865/#882/#886/#891), Jeep TPMS (#911/#1010), Ioniq 9 seats (#933), Comma openpilot (#978/#1015), Cybercab (#1016), Odyssey petition (#1012), BMW driveshaft (#777), VW steering bolt (#992), F-150 fuel tank (#923), Ranger camera (#994), VW Tiguan BCM (#951), Ford trailer module (#749), DTN inflators (#824/#957), NCAP delays (#863/#870), Nova bus (#1018). Prius rear-door recall had zero queue coverage (slug + title sweep for prius/26v049/rear-door all empty). The NCAP "on life support" angle was deliberately passed over: #863 and #870 already mine NCAP delays from adjacent angles.

## Blocker
1/day Pacific slot consumed by #760 (published 2026-10-01). → SHIP_BLOCKED, ship_date 2027-05-14 (next slot after #1037 at 2027-05-13).
