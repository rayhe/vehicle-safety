# Critic Panel — Round 0 — #1445: Waymo's School Bus Fix Lasted 354 Days

**Slug:** `1445-waymo-recall-query-fix-failed`
**Title:** "Waymo's School Bus Fix Lasted 354 Days. Now 94% of the 'Fixed' Fleet Is Under Federal Review Again."
**Journalist:** Rex Driverton
**Kicker:** Investigation
**Date:** 2026-11-09
**Round:** 0

## Pre-panel fixes (before scoring)
Two citation gaps found on self-review and fixed before the panel ran:
1. The October 2026 fresh-probe sentence was cited to sources that did not directly support it. Added ref-9 (Startup Fortune, Oct 15, 2026) and re-cited.
2. The counterargument's "10,000 human violations a year" and "peer-reviewed comparisons" were unverified in the reference list. Verified and replaced with checkable numbers: Swiss Re 25.3M-mile study (88% fewer property-damage claims, 92% fewer bodily-injury claims) as ref-7, and School Transportation News March 2026 (8,000 human passes mid-Aug to Feb 10; 25 Waymo passes; per-vehicle 1-in-4 vs 1-in-263, 65x rate) as ref-8. The per-vehicle flip now appears in the article, cutting against the thesis — the counterargument is stronger for it.

## Hard gates (regex = source of truth, verified pre-panel)
- Em dashes (literal `—`): **0** (max 3) — PASS
- Banned phrases: **0** ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus STORY_GUIDE bans) — PASS
- "The" sentence starters: **7.0%** (4 of 57 sentences, max 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, no `story-detail`/`story-content`/`story-page`, no `story.css` — PASS
- Sentence rhythm: variance **3902.6** (>= 200), short **13.6%** (<= 15%), long **52.3%** (>= 15%) — PASS (script exit 0)
- Hero: real JPEG (magic FFD8), 1920x1280, 639,974 bytes, md5 `4ec4e46f`, `?v=4ec4e46f` on img + og:image + twitter:image — PASS
- Prose word count: **748** (recent shipped range 752–1016) — PASS
- References: 9 sources, all linked, NHTSA Part 573 + Reuters primary — PASS
- Actionable insights: treat stopped buses the same behind robotaxis, stop-arm camera citations go to the owner, "recall completed" is not "fix verified" — PASS

## 1. General Editor — 8.8/10
Lede lands in five sentences: fixed date, new file, agency quote, the count, the percentage. Structure is clean: lede, mechanism, timeline, cluster, counterargument, action. The "fix was installed before the recall existed" line earns its place. Deduction: mean sentence length 33.7 words is long, and the middle third runs dense with 31+ word sentences (9 of 44); one more short punch in the timeline paragraph would break up the density. Headline is long but in-style for this site.

## 2. Voice Coach — 8.9/10
Distinctly Rex: deadpan, paradox-loving, noir-adjacent. "Paper and pavement disagreed almost immediately." "A car company recalls a part. A robotaxi company recalls a behavior, then recalls the fix for the behavior, then gets asked whether the fix for the fix worked." Could not swap this byline with Mia or Dale without rewriting. Banned phrases zero, rhythm PASS with real variance. Deduction: "Zoom out" and "Fairness requires the other side" are stock transitions that appear across the site's articles; the closer ("In this case it did not. It opened a new one.") rescues the ending.

## 3. Ethics Reviewer — 8.8/10
Fair to Waymo where fairness is owed: zero collisions stated, aggregate safety record given at full strength with real numbers, Waymo's "material improvement" claim reported, and the per-vehicle stat that hurts Waymo's case is included rather than buried. No children named, no injuries sensationalized (none occurred in any bus incident). Deduction: the headline's emotional weight (school buses, children, a failed fix) slightly exceeds the documented harm, which is zero collisions; the article says so plainly, but the stakes are federal-process stakes, and the headline leans on kid-safety stakes.

## 4. Social/Shareability — 8.7/10
Headline carries two numbers (354 days, 94%) and a reversal, which is a strong share trigger. Pull stat 94.4% is concrete and small enough to feel personal. The quotable line is "A robotaxi company recalls a behavior, then recalls the fix for the behavior." Deduction: headline is long for social feeds; the 65x per-vehicle stat is the second-best hook in the piece and sits mid-counterargument rather than in a pull stat or the lede.

## 5. Legal Accuracy — 9.0/10
Every load-bearing claim traces to a cited source: Reuters for the query scope and timing, NHTSA 25E084 for the recall population and remedy date, Swiss Re for the claims data, STN for the Austin counts and per-vehicle math, Startup Fortune for the October probe. Caveats are stated, not buried: the RQ number is not public and is not invented, "most incidents after November 2025" is attributed as the agency's characterization, the NTSB account is flagged preliminary. Deduction: "the instrument the agency uses when it suspects a remedy was inadequate" is an explainer characterization of ODI practice, not a quoted agency statement; accurate in substance, but it should be read as explanation. The STN per-vehicle math is STN's own calculation, attributed as such.

## 6. Research Rigor — 9.0/10
Original contribution is real and checkable: 2,895/3,067 = 94.4% of the recalled fleet back under review; 354 days from remedy-complete to recall query; three federal actions in 385 days; six software recalls since Feb 2024 with three in eight months from Dec 2025. The per-vehicle flip (1-in-4 vs 1-in-263) is the strongest rigor move in the piece: a fact that complicates the article's own counterargument, included anyway. Limitations are explicit (RQ number/count not public, agency characterization vs. verified tally, no FARS robotaxi context, NTSB preliminary). Counterargument stated at full strength. Deduction: the 94.4% assumes the query population is a subset of the recall population (both are fifth-generation ADS units); near-certain given the shared system generation, but the article does not state that assumption explicitly.

## 7. Data Presentation — 8.8/10
Pull stat 94.4% with a tight label. Percentages shown with their inputs (2,895/3,067, 354 days, 8,000 vs ~24, 1-in-4 vs 1-in-263, 88%/92% claims). The escalation ladder (PE → recall → query) is dated at each step. Deduction: no table for the three-action timeline; a reader skimming for dates has to read the whole paragraph. The pull stat repeats the lede number rather than adding a second distinct number (the 65x would have been the stronger pull).

## Verdict
| Critic | Score |
|---|---|
| General Editor | 8.8 |
| Voice Coach | 8.9 |
| Ethics Reviewer | 8.8 |
| Social/Shareability | 8.7 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.0 |
| Data Presentation | 8.8 |
| **Average** | **8.86** |

**VERDICT: SHIP (round 0).** All 7 critics at 8.5+, all hard gates pass. No revision round required. Minor notes (long mean sentence length, stock transitions, the 94.4% subset assumption, the 65x stat deserving a pull stat) are polish, not blocks, and are recorded here for the record.
