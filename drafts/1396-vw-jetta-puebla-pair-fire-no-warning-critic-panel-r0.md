# Critic Panel — #1396: Volkswagen Recalled the Same Jetta Twice in One Month. Once Because It Could Catch Fire. Once Because It Couldn't Tell You. (Round 0)

**Verdict: PASS, all 7 critics at 8.5+, all hard gates pass. Average 8.87. Proceed to SHIP.**

## Hard gates (regex counts are source of truth)
- Em dashes (literal U+2014 in file): 0 (max 3) — PASS
- Banned phrases (pipeline list + site list): 0 — PASS
- "The" sentence starters: 0 of 35 body sentences, 0.0% (max 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, no `story-detail`/`story-content`/`story-page`, no `story.css` — PASS
- Hero: real JPEG (FF D8), 1920x1280, md5 prefix 2e1ceebd — PASS
- Sentence rhythm: variance 2532.3 (target ≥200), short 9.4% (target ≤15%), long 62.5% (target ≥15%) — PASS (revised from 21.1% short by merging 5 fragments)
- Body words: 687 (guide 300–500; over range — noted as a General Editor deduction, not a gate failure)

## 1. General Editor — 8.7/10
Lede lands the pair framing in two sentences, pull stat (61,483) is the right number, and the arc runs fire → cluster → overlap → counterargument → action without wandering. Deduction: 687 words runs ~40% over the 300–500 guide, and paragraph 4 packs three distinct moves (overlap population, recall math, FARS context) into one block that would breathe better split. The length is earned by a two-recall story, but it is still long for the format. No revision required.

## 2. Voice Coach — 8.8/10
Distinctly Clara Rollover: direct, practical, angry on behalf of the buyer — "read the fine print, because it is the whole story" is her register, not a swappable byline. Rhythm passes after the fragment merge (variance 2532, short 9.4%, long 62.5%). No banned phrases, no throat-clearing. Small deduction: "the warning architecture collapses twice over" is the one abstract phrase in an otherwise concrete piece. No revision required.

## 3. Ethics Reviewer — 9.0/10
No victims, no crash porn, no speculation about any specific fire. The counterargument (voluntary recall, free fixes, nobody hurt, sub-1% rate, startup-visible cluster failure) is given at full strength in the body, not buried. Limitations are stated in the disclaimer. No revision required.

## 4. Social / Shareability — 8.7/10
Headline is a self-contained share unit with two hooks (fire + can't tell you), and "human error" plus "no warning indicators" are the details readers forward. Costs a little for headline length (truncates in some feeds) and the March 2026 news peg is eight months old, though the pair framing itself is new. No revision required.

## 5. Legal Accuracy — 9.0/10
Every load-bearing claim traces to a cited source: 48,165 US / 13,318 Canada / 61,483 total, <1% estimate, 6 claims with 3 melted harnesses and 3 engine fires, "human error" root cause, no-warning detail (Part 573 26V138; Fox Business; AutoEvolution); 75,323 US, 39,081 Jetta / 36,242 Taos, 100% estimate, Visteon NVM error, Oct 2024 claims to Feb 5, 2026 investigation (Part 573 26V185; AutoEvolution); production windows for the overlap claim; FARS Jetta 1,375 deaths at 1.71 vs Tiguan 0.14, 12x ratio. Mid-drive cluster dropout is correctly attributed to Autoblog reporting, not to the filing. No revision required.

## 6. Research Rigor — 8.9/10
Original contributions: the paired-recall cross-tab (same model, plant, month, opposite defect rates and failure modes), the overlap population derived from production windows (2025 Jettas built March 3–July 1, 2025 in both recalls), the warning paradox (fire defect gives no warning; cluster defect removes warnings), and the recall-math inversion against #951's Tiguan BCM (100% defective) versus this <1% fire defect. Limitations stated: FARS covers the nameplate's history, not these model years; defect estimates are VW's own; overlap size is windows-derived, not a VIN count; mid-drive dropout unconfirmed in the filing. Small deduction: overlap population is not quantified beyond the windows. No revision required.

## 7. Data Presentation — 9.0/10
Numbers are clean and sourced: 61,483 = 48,165 + 13,318 (arithmetic checks); 75,323 = 39,081 + 36,242; <1% vs 100% carried as VW's estimates, not facts; "at least six" claims with the seventh potentially-related claim noted via its source; 1.71/0.14 = 12.2x stated as "twelve times". No invented precision. No revision required.

## Round 0 result
All 7 critics ≥ 8.5, all hard gates pass → phase SHIP. No revision round needed.
