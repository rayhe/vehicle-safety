# Critic Panel — Round 0 — #1539: Deadliest Model Year 2005, Pre-ESC Fleet

**Slug:** `1539-deadliest-model-year-2005-pre-esc-fleet`
**Journalist:** Mia Crumplezone
**Date:** November 19, 2026
**Verdict:** REVISE (round 1 required)

## Hard gates (verified by regex, not opinion)
- Em dashes (literal `—` in body): **0** — PASS (max 3)
- Banned phrases: **0** — PASS
- "The" sentence starters: **4.7%** — PASS (max 15%)
- CSS class: `class="story"` present, `../style.css` linked, no `story.css` — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): variance **420.0** (target ≥200), short **6.7%** (target ≤15%), long **48.9%** (target ≥15%) — PASS, exit 0
- Hero: real JPEG (FF D8), 1920x1280, 372KB, md5 `ef34371e`, in all 3 references — PASS
- Word count: 855 (body)

## Scores
| Critic | Score | Verdict |
|---|---|---|
| 1. General Editor | 8.5 | Pass |
| 2. Voice Coach | 8.0 | **FAIL** |
| 3. Ethics Reviewer | 9.0 | Pass |
| 4. Social / Shareability | 9.0 | Pass |
| 5. Legal Accuracy | 7.5 | **FAIL** |
| 6. Research Rigor | 8.5 | Pass |
| 7. Data Presentation | 8.0 | **FAIL** |
| **Average** | **8.36** | **REVISE** |

## 1. General Editor — 8.5/10
Structure is sound: human lede with the bolded number, pull stat early, the ESC explainer before the consequences, the nameplate table in prose, a full-strength counterargument, concrete actions. Mia's engineering register carries the piece. Deductions: 855 words runs well past the guide's 300–500 (recent shipped pieces run 600–700, so this is long even by that standard); the pull-label repeats the 71.9% figure that the body then restates two paragraphs later. Neither is structural, but both are slack in load-bearing spots.

## 2. Voice Coach — 8.0/10
Rhythm passes with room to spare (variance 420, short 6.7%, long 48.9%), banned phrases zero, "The" starters 4.7%. Mia's voice is present where it counts: the ESC explainer ("brakes one wheel at a time", "in the first 150 milliseconds") sounds like her and nobody else on the roster. Deduction, and it is a real one: the counterargument paragraph opens "Fairness first, because the other side has a real case", which is Rex Driverton's exact opening from #1538, shipped yesterday. Same sentence, same paragraph function, consecutive articles. If you can lift a line from another journalist's piece and it fits, the voice has collapsed. Rewrite the opening in Mia's register.

## 3. Ethics Reviewer — 9.0/10
No vulnerable-group targeting; the piece blames a regulatory timeline and an aging fleet, not the drivers of old cars, and it says so. Limitations are stated rather than buried. Advice is concrete and free (check ESC, check VIN). The lede's "driver who has no idea" is mildly shaming but fair: the ignorance it describes is the article's point, not a character judgment. No deduction beyond that note.

## 4. Social / Shareability — 9.0/10
Headline is the share: "The Deadliest Model Year on American Roads Is 2005." The pull stat (62.3%) is a clean number, and "more than every 2020-to-2023 car put together" is the line people will quote. The 2003–2007 cohort at 28.7% gives a second shareable stat for the comments. Deduction: no single sentence that tells a 2005 owner what to do in under 280 characters; the action paragraph is a block.

## 5. Legal Accuracy — 7.5/10
FMVSS 126 claims check out (phased from MY2009, 100% by MY2012; govinfo final-rule link verified in the guide). IIHS ESC figures are quoted as "about half" and "about a fifth", matching the source. FARS arithmetic is labeled as this site's calculation from the file, with inputs shown. Deduction, and it is the one that matters: reference [2] links to `https://www.spglobal.com/mobility/en/news/2025/05/average-age-of-vehicles-in-the-us-hits-12.8-years-in-2025.html`, a URL constructed from the headline, not verified. The domain is policy-blocked for direct fetch and no search result returned that exact URL. The actual release title per the S&P republication is "U.S. Vehicle Age Rises Again to 12.8 Years in 2025" (May 21, 2025). The figures themselves (12.8 years, 289M VIO, cars 14.5, trucks 11.9, scrappage 4.5%) are corroborated across motor.com, KBB, CollisionWeek, and AutoRemarketing, so the facts stand; the citation does not. Fix the link to a verified URL and the title to match.

## 6. Research Rigor — 8.5/10
Original contribution is real: the ESC-hinge decomposition (62.3 / 9.6 / 28.1), the single-year peak (2005, 11,363), and the median-model-year table are new arithmetic, and the research file discloses the overlap with twelve-year-kill-zone honestly (era buckets vs. regulatory hinge). Limitations get a dedicated paragraph plus the disclaimer: no VMT denominator, window truncation for 2020–2023, ESC availability before the mandate. Counterargument is stated at full strength and conceded where it bites. Deduction: the article never says in-text how this differs from "old cars kill", so a reader of kill-zone could feel they have read this one; one sentence tying the finding to the mandate date would close that gap.

## 7. Data Presentation — 8.0/10
Numbers are consistent throughout (62.3/9.6/28.1 sums to 100; 2003–2007 at 28.7% checks against the file; the 11,363 vs. 5,955 comparison is exact). Pull stat is clean and labeled. Deduction: the cohort split, the article's central finding, lives only in prose. A three-row table (cohort / deaths / share) would let the reader see the hinge at a glance instead of hunting it across two sentences. The per-model medians are likewise prose-listed; a compact table would serve them better.

## Required revisions (round 1)
1. Fix ref [2]: correct title ("U.S. Vehicle Age Rises Again to 12.8 Years in 2025") and replace the constructed spglobal.com URL with a verified link (motor.com republication of the S&P release, May 21, 2025).
2. Rewrite the counterargument opening ("Fairness first, because the other side has a real case") in Mia's voice; it is lifted from #1538.
3. Add a cohort table for the ESC-hinge split (pre-2009 / 2009–2011 / 2012+) so the central finding is visible, not just narrated.
4. Optional: trim ~100 words toward the recent 600–700 norm; do not cut the counterargument or limitations to do it.
