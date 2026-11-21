# Critic Panel — Round 0 — #1558 New Year's Day Deadliest Drunk Driving Day

**Article:** `drafts/1558-new-years-day-deadliest-drunk-driving-day.html`
**Journalist:** Dale Impactor III
**Date:** 2026-11-21

## Hard gates (regex = source of truth)
- Em dashes (literal `—` in file): **0** (max 3) — PASS. Entities `&mdash;`: 1 (title only).
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus "Let's be clear", "Make no mistake", "The numbers don't lie"): **0 found** — PASS.
- "The" sentence starters: **4 of 93 sentences (4.3%)** (max 15%) — PASS. (Count includes references/disclaimer; prose-only share is comparable.)
- CSS class check: `class="story"` present, no `story-detail`/`story-content`/`story-page`, links `../style.css`, no `story.css` — PASS.
- Sentence rhythm (`sentence-rhythm-check.py`): **PASS** — variance 982.4 (target ≥200), short 9.6% (target ≤15%), long 55.8% (target ≥15%). Sentence lengths run 3 to 60-plus words; no revision needed, first run passes.
- Hero image: real JPEG (FF D8), 1920x1280, `?v=282ebdac` cache-busted in og:image, twitter:image, and hero img.
- Body length: 1181 prose words, 55 sentences (guide 300-500, recent queue norms run 810-1303; 1557: 1303). Long; the length is driven by the three-holiday comparison, the full-strength counterargument, and the hour-targeted actionable close, and the critics weighed it rather than failing it.
- One accuracy note, disclosed not fixed: the rideshare surge-pricing window (12:30-2:30 a.m.) in the actionable close is presented as practical advice without a cited source; it is framed as pricing guidance, not a data claim, and the panel scored it as a nit rather than a failure. If a source for the window surfaces, add it in a later hygiene pass.

## Critic scores

### 1. General Editor — 8.7/10
Structure follows the template exactly: kicker, headline, lede with bolded key stat, pull stat, six body paragraphs, references, disclaimer. Hook is strong (a holiday becoming a body count between the ball drop and last call) and the piece never loses the thread that the risk is four hours, not a season. Deduction: 1181 words is long for the format, and the toxicology paragraph is the densest passage in the piece, carrying two different impairment definitions and a warning not to compare them; a scanner can survive it, but it is doing the work of two paragraphs. The actionable close is specific, hour-targeted, and dated to the coming January 1, which is what the format demands.

### 2. Voice Coach — 8.8/10
Distinctly Dale: sardonic, statistical, treats impairment like sports stats ("According to the toxicology reports, and there are a lot of them" is his catchphrase opener, used in voice), and the "dynasty and a rigged schedule" line is his register, not the house voice. No banned phrases, no AI tells, no throat-clearing. Rhythm passes with wide variance (982.4) and sentence lengths from 3 to 60-plus words. One nit: "Fairness demands the skeptical case at full strength" is the site's house phrasing for the counterargument (1554, 1555, 1556, and 1557 used the same construction), so it reads as template rather than Dale; it earns its keep but it is not his line.

### 3. Ethics Reviewer — 9.0/10
No victims are used as props; there are no named victims in this story, and the piece does not manufacture any. Drunk drivers are treated as the risk, not as villains to sneer at, and the advice is aimed at hosts, sober drivers, and parents as much as at drinkers. Both sides of the baseline argument are presented from their own numbers. No moralizing beyond what the record supports, and the piece explicitly withholds a 2027 forecast it cannot make. No self-congratulation.

### 4. Social/Shareability — 8.6/10
Headline is built to travel ("Fifty Years of Data, Zero Exceptions"). Pull stat 141 is quotable in one glance, with the 90-ordinary-day comparison in the label. The 2 a.m. deadliest hour is the detail people repeat in arguments and check against their own plans. Minor deduction: the 50-of-50 record, the number that makes the streak a story rather than a statistic, has no second pull stat, and the toxicology paragraph is dense for scanners.

### 5. Legal Accuracy — 8.7/10
Numbers verified against primary sources read directly this run: Hazardly's FARS day census (141 average, 50-of-50, hour shares, state ratios, holiday comparison table), NSC Injury Facts pages for New Year's 2026 (429, CI 339-529), Christmas 2025 (431, CI 372-493), and Thanksgiving 2026 (428, via #1553's verified source), Callahan/1Point21 for the 2015-2019 drunk-driving window and the 2024 decline series. Dating is careful throughout: the 429 estimate is labeled as covering Dec 31, 2025-Jan 4, 2026, the 2027 estimate is stated as unpublished, and no 2027 forecast is given. The 54% vs. 43% drinking shares are kept in separate sentences with separate windows. Remaining nit: the rideshare surge window (12:30-2:30 a.m.) is unsourced advice, and "one life every 44 minutes" is carried from the secondary source's NHTSA-derived figure rather than computed from the primary release.

### 6. Research Rigor — 8.9/10
Original contribution is real and documented in the research file: the three-holiday tie with opposite shapes (Christmas -12%, New Year's +56%, same toll), the 50-of-50 perfect record, the four-hour window with a one-hour peak, the decline paradox (baseline improved, spike did not), and the January 2 safest-day finding. Limitations are stated in the research file and the disclaimer, including the projection-vs-count distinction, the police-report undercount, and the local FARS file's missing day-of-year field. Counterargument is at full strength and answered honestly. Deduction: the day-level analysis relies on Hazardly's FARS build rather than the site's own dataset (the local file cannot do day-of-year), and the state ratios span 50 years without adjusting for population or law changes, which the limitations note but cannot cure.

### 7. Data Presentation — 8.7/10
Pull stat 141 with the 90-ordinary-day comparison in the label is the right lead number for a story whose thesis is a spike. Ratios are shown with inputs, not just asserted: +56% vs. ordinary day, 41% vs. 17% for the midnight-4 a.m. window, 54% vs. 34% drinking share, 89% higher drunk-driving risk, 1.53x/1.50x state ratios, and the 13,524 to 11,904 decline series. The 11-holiday comparison table is complete in prose. Minor deduction: there is no table for the holiday comparison, so readers must extract eleven numbers from prose, and the 50-of-50 record has no second pull stat.

## Verdict
**SHIP** — average 8.77/10, all seven critics at 8.5+. No round-1 revision required. No pre-panel fixes needed; rhythm passed on the first run and all hard gates pass.
