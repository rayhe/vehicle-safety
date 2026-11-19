# Critic Panel — #1536: The Fastest-Growing Death Toll on American Roads Belongs to 35-to-44-Year-Olds
**Round:** 0 — November 19, 2026
**Journalist:** Axle McScatter
**Draft:** drafts/1536-35-to-44-deaths-up-33-percent-decade.html

## Hard Gates (regex = source of truth)
- Em dashes (literal U+2014 in file): **0** (max 3) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus STORY_GUIDE bans): **0** — PASS
- "The" sentence starters: **0 of 54 (0.0%)** (max 15%) — PASS
- CSS class: `class="story"` present; no `story-detail`/`story-content`/`story-page`; links `../style.css`, no `story.css` — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): **PASS** — variance 988.4 (target ≥200), short 6.6% (≤15%), long 55.7% (≥15%)
- Hero: real JPEG (FFD8), 1920×1280, hash dcd74f35, `?v=dcd74f35` on all three references — PASS
- Word count (story-body): 1,073 (above the 300–500 guide; in line with recent shipped investigations, #1535 was 1,237, #1534 was 1,027)

## 1. General Editor — 8.7/10
Structure holds: lede carries the news (3,770 more deaths in a decade, two groups own 88.2 percent of them), pull stat lands early, the age table is rendered in prose with deltas and shares, the bracket observation is the sharpest paragraph, the 65+ corrective is placed before the counterargument so the honesty check reads as structure rather than apology, and the actionable close is concrete. Deduction: 1,073 words is long for the format, and the "one year of data" paragraph is a slight detour that restates the 2024 direction the decade table already implies. The 65+ section, while necessary, repeats ground three prior articles covered. Not a fail.

## 2. Voice Coach — 8.7/10
Axle voice is present and distinct: chart-brained, dry, loves a table. "I ran the numbers, then I ran them again, and they did not get better" opens in his register. "Read that again, because the group with the biggest body count is treading water" is a proper Axle beat. Sentence rhythm passes with very high variance and a healthy long-sentence share. No banned phrases, no "The" starter clustering, no AI tells. Deduction: "Fairness demands the strongest case" and "What to do:" are house formulas that recur across articles; both do the job but neither sounds like Axle specifically. Minor.

## 3. Ethics Reviewer — 9.0/10
No safety verdict the evidence cannot support: the counts-vs-rates limitation is stated in the body, in the counterargument paragraph, and again in the disclaimer. The cohort-size explanation is labeled a hypothesis, not an answer. The 65+ increase is explicitly not presented as proof seniors got more dangerous; the fact sheet's own numbers cut the other way and the article says so. No private individuals named. The victim-age vs driver-age distinction is labeled rather than blurred. Clean.

## 4. Social/Shareability — 8.6/10
Pull stat 88.2% is the share trigger, original to this site, and the headline is built to travel. "The group with the biggest body count is treading water" and "a bad year does not last ten years" are the two most quotable beats, both placed where a skimmer finds them. The stereotype inversion (teens improved, 35-to-44 got worse) is the hook. Deduction: the middle is table-heavy and the 65+ corrective may read as a detour to a skimmer who came for the 35-to-44 surprise. Above the bar.

## 5. Legal Accuracy — 8.7/10
All six references are real, verified URLs: NHTSA DOT HS 813 791 (crashstats), NHTSA DOT HS 813 839 (crashstats), PlainRoadSafety age table, NHTSA 2025 estimates press release, NHTSA FARS + CDAN query tool, Book of Odds summary of the Older Population fact sheet. The 39,254 / 41,025 / 1.19 / 11,904 figures were read in the DOT HS 813 791 text itself. The age table was read in full from the PlainRoadSafety page. Deduction: the 15.60 per-100,000-licensed-drivers rate for 65+ comes via the Book of Odds summary of NHTSA Table 2 rather than the fact sheet text itself, and the reference discloses that hop. Also caught and fixed in revision: the lede originally implied the fatality rate fell over the decade, when it fell year-over-year (2023 to 2024) and is above the 2015 level; the shipped text says "fell for a third straight year," which is accurate. Minor.

## 6. Research Rigor — 8.7/10
Original contribution is real and checkable: the 88.2 percent decomposition (35-to-44 plus 65+), the 41.0 percent share of the increase, the share shifts (25-34 down, 35-44 up), and the improving bracket (21-24 and 45-54) are this site's arithmetic on a published table, with inputs shown in the references. Limitations are stated at full length: counts not rates, no exposure denominator for 35-to-44, victim age vs driver age, ARF subject to revision, cohort-size hypothesis unmeasured. The strongest counterargument (mostly demographics wearing a safety costume) is stated at full strength and conceded as half right. Deduction: the central question the article raises, whether 35-to-44 risk rose or only the headcount did, stays unanswered because the exposure data is not published; the article admits this, but it caps the finding's strength. Not a fail.

## 7. Data Presentation — 8.5/10
The table is rendered in prose with deltas, percentages, and shares; the pull stat is the single best number in the piece; share arithmetic is shown, not just asserted. Deduction: there is no actual table element, so a reader who wants the full ten-row table must go to the source, and two rows never reach the body at all (55-64, +390, appears only in the reference summary; unknown-age 80 to 196 appears only in the disclaimer). A compact table would serve the Axle persona better. At the bar.

## Verdict
Average 8.84/10. All seven critics at 8.5 or above. All hard gates pass. **SHIP.**
