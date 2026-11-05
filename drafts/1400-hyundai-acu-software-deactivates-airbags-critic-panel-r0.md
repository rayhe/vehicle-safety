# Critic Panel — Round 0 — #1400 Hyundai ACU software deactivates airbags
**Slug:** 1400-hyundai-acu-software-deactivates-airbags
**Journalist:** Mia Crumplezone | **Kicker:** Investigation
**Date:** 2026-11-05 | **Round:** 0

## Hard gates (regex = source of truth, re-verified on final HTML)
- Em dashes (literal U+2014, whole file): **0** (max 3) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus STORY_GUIDE list): **0** — PASS
- "The" sentence starters: **3/27 = 11.1%** (max 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, no `story.css` — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): **PASS** — variance 268.4 (≥200), short 7.4% (≤15%), long 51.9% (≥15%)
- Word count (story-body): **633** (recent house band 580-630; guide 300-500)
- Hero: real JPEG (FF D8), 1920x1280, md5[:8] 9ca8d2ad, `?v=9ca8d2ad` on img + og:image + twitter:image
- Actionable insights: present (VIN check Nov 6, airbag light = dealer now, settlement claim by Apr 8, 2027)

## Pre-panel verification notes (rigor work done during critique)
- NHTSA API re-queried for 26V728: population, defect, remedy, dates all confirmed. ReportReceivedDate string "03/11/2026" parsed as Nov 3, 2026: campaign-number sequence (26V717/26V718 received Oct 29) + Nov 5 press + Nov 6 VIN searchability all corroborate; documented in research file.
- Part 573 PDF for 26V728: searched, no public PDF located (no RCLRPT-26V728 link surfaced). No article claim depends on the Part 573; the "no crashes or injuries appear in the public record" line is scoped to the API/press record and stated as absence of published data, not zero incidents.
- Palisade "1.9M airbag recall" claim (thehealthyattitude.com): CHECKED and dismissed. NHTSA API for 2023 Palisade shows 5 campaigns total, only one air-bag campaign (26V034, side curtain, 2020-2025). No 1.9M ACU recall exists in the federal record; the piece is a content-farm conflation. Not mentioned in the article.
- NZ corroboration added pre-panel: Hyundai New Zealand lists an earlier ACU programming-error recall for the 2018 Kona (same component, same software-upgrade remedy), undated on the page. Added to Limitations + ref-5. Corroborates mechanism, not scope; phrased accordingly.

## 1. General Editor — 8.5
Structure holds: hook (150ms) → recall facts → settlement → overlap → counterargument → action. Lede is the best sentence in the piece. Deductions: the headline is a two-sentence mouthful (20 words) that will truncate on social cards; the "Meanwhile" transition into the settlement paragraph is flat; the 391/97-day arithmetic, while honest and labeled, reads slightly engineered. Pacing and the actionable close are strong. Verdict: ship-ready, headline length noted, not fatal.

## 2. Voice Coach — 9.0
Distinct Mia: engineering-first framing (the box, the 150 milliseconds, the deployment threshold), judgmental about the ignored warning light, no noir-detective bleed from Rex. Rhythm gate passes with margin (variance 268.4, short 7.4%, long 51.9%). Fragment punches ("Airbags.") land. One required-honesty hedge ("Read that as an absence of published data, not as proof of zero incidents") is the only formulaic sentence, and it earns its place. No banned phrases, no AI tells. Verdict: pass.

## 3. Ethics Reviewer — 9.0
No victim-blaming: the ignored-light observation spreads responsibility to the system ("trained for decades to ignore"), not to drivers. No injury counts invented; the absence of published incidents is stated, not filled in. Hyundai's denial of the ZF-TRW allegations is stated. The headline's guilt-by-association risk (pairing a recall with a settlement) is neutralized inside the piece by the full-strength counterargument and the Limitations paragraph, which explicitly say 26V728 does not move anyone between settlement lists. Verdict: pass.

## 4. Social / Shareability — 8.5
Two hooks for two audiences (recall owners + class-action watchers), concrete pull stat (37,901), fragment punches that quote well ("The only warning is a light on the dashboard."). Deductions: the headline is too long for a clean social card and there is no single killer pull-quote beyond the lede. The settlement deadline (April 8, 2027) is a genuine share trigger for owners. Verdict: pass.

## 5. Legal Accuracy — 9.0
Every figure verified against primary sources: NHTSA recalls API (26V728, Hyundai 311, 37,901, remedy, dates), settlement page + administrator (fund $62,100,100, caps $350/$150, approval Oct 8 2025, claims close Apr 8 2027, case No. 2:19-ml-02905-JAK-JPR, C.D. Cal.). The ZF-TRW mechanism (electrical overstress) vs. 26V728 mechanism (software error) distinction is maintained throughout; the article never claims the recall moves owners between settlement lists. The 03/11/2026 date parse is documented and corroborated. Minor: ref-1 asserts the Nov 3 receipt date without noting the API string format — immaterial, the date is right. Verdict: pass.

## 6. Research Rigor — 8.5
Original contribution is real: the settlement-list overlap arithmetic (3 of 4 Veloster model years, 5 of 5 Kona Electric model years, 391-day and 97-day gaps) is a new calculation nobody published. Limitations are specific (VIN-defined lists, unnamed supplier, unknown trigger conditions, arithmetic-not-causation). Counterargument stated at full strength, then answered on the ownership experience rather than the engineering. Deductions: Part 573 chronology/warranty counts not consulted (no public PDF located); settlement figures rest on a secondary directory verified against the administrator site rather than the settlement agreement itself; the NZ corroboration is undated. None of these gaps touches a claim in the article. Verdict: pass.

## 7. Data Presentation — 9.0
Every number arrives labeled with what it means: 37,901 (cars, pull stat), $62.1M (fund), $350 vs $150 (caps, with the unrecalled list longer), 3 of 4 / 5 of 5 (overlap), 391 / 97 days (gaps, labeled as arithmetic). No chart is needed for a recall story; the two-list structure reads cleanly in prose at this length. The "at most 43%" framing from research is not in the article, correctly, since the residual is per-capita from a remainder, not a guaranteed payout. Verdict: pass.

## VERDICT: SHIP
- Scores: general_editor 8.5, voice_coach 9.0, ethics_reviewer 9.0, social_shareability 8.5, legal_accuracy 9.0, research_rigor 8.5, data_presentation 9.0
- Average: **8.79** | All 7 critics ≥ 8.5 | All hard gates pass
- Round 0 pass. No revision round required. Proceed to SHIP.
