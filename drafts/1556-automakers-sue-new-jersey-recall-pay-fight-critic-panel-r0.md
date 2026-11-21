# Critic Panel — Round 0 — #1556 Automakers Sue NJ Over Recall Pay

**Article:** `drafts/1556-automakers-sue-new-jersey-recall-pay-fight.html`
**Journalist:** Clara Rollover
**Date:** 2026-11-21

## Hard gates (regex = source of truth)
- Em dashes (literal `—` in file): **0** (max 3) — PASS. Entities `&mdash;`: 2 (title only).
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack"): **0 found** — PASS.
- "The" sentence starters: **0 of 39 body sentences (0%)** (max 15%) — PASS.
- CSS class check: `class="story"` present, no `story-detail`/`story-content`/`story-page`, links `../style.css`, no `story.css` — PASS.
- Sentence rhythm (`sentence-rhythm-check.py`): **PASS** — variance 2106.9 (target ≥200), short 6.1% (target ≤15%), long 63.6% (target ≥15%). One pre-panel fix merged six short sentences (pull-label fragment, "It is the system", "Both sides are describing the same money", "Buying a used car in the state?", "Do not wait for the letter", "Both descriptions fit the same formula"); first run failed at short 20.0%, re-run passes at 6.1%.
- Hero image: real JPEG (FF D8), 1920x1280, `?v=475bce11` cache-busted in og:image, twitter:image, and hero img.
- Body length: 935 words (guide 300-500, recent queue norms run 464-838; 1555: 810, 1552: 838). Above the recent range; the length is driven by explaining the law, the lawsuit, the math, and the completion context in one piece, and the critics weighed it rather than failing it.
- Two pre-panel fixes (accuracy): (1) the lede originally said Honda and Toyota recalled "about 1.6 million vehicles" without a scope qualifier; that figure is worldwide (Toyota's 790,000 is global) while the article's 1.2M ledger is US-only. Rewritten to "more than 1.1 million US vehicles" (810,592 + 314,029 = 1,124,621). (2) The lede originally said "the four automakers sued the people who do the work on the same day they assigned them 1.2 million more jobs"; the four plaintiffs account for 893,435 of the 1,207,464 (Toyota, not a plaintiff, accounts for the rest). Rewritten to "dealers got 1.2 million more jobs on the same day four automakers sued them over what the work pays." Gates re-run after both fixes: unchanged.

## Critic scores

### 1. General Editor — 8.6/10
Structure follows the template exactly: kicker, headline, lede with bolded key stat, pull stat, six body paragraphs, references, disclaimer. Hook is strong (a lawsuit and 1.2 million recalled cars on the same day) and the piece never loses the thread that the pay fight and the recall volume are one story. Deduction: 935 words is long for the format, and the law-explainer paragraph is the densest passage in the piece; a scanner can survive it, but it is doing the work of two paragraphs. The actionable close is specific and dated, which is what the format demands.

### 2. Voice Coach — 8.8/10
Distinctly Clara: direct, practical, slightly angry on behalf of consumers ("Run the numbers before picking a side", "Pay is not a side issue in that system; it is the system", "Do not wait for the letter"). No banned phrases, no AI tells, no throat-clearing. Rhythm passes with wide variance (2106.9) and sentence lengths from 4 to 60-plus words. One nit: "Fairness demands the automakers' case at full strength" is the site's house phrasing for the counterargument (1554 and 1555 used the same construction), so it reads as template rather than Clara; it earns its keep but it is not her line.

### 3. Ethics Reviewer — 9.0/10
No victims are used as props; there are none in this story, and the piece does not manufacture any. Both sides are presented from their own words: the automakers' "blank check" and "windfall" language is quoted and attributed, and the dealers' position comes from NJ CAR and the statute itself. The $375 million figure is labeled as the automakers' estimate, not a fact. No moralizing about either side beyond what the record supports, and the piece explicitly withholds a verdict on who is right about the price. No self-congratulation.

### 4. Social/Shareability — 8.7/10
Headline is built to travel ("Four Automakers Sued New Jersey", "1.2 Million Cars", "Same Day"). Pull stat 1,207,464 is quotable in one glance, with the three-way breakdown in the label. The coincidence is the share trigger, and the 0.83% scale check is the detail people repeat in arguments. Minor deduction: the two math paragraphs are dense for scanners, and the piece has no second pull stat to carry the 50.3% completion figure, which is the number that makes the lawsuit a safety story.

### 5. Legal Accuracy — 8.7/10
Parties correct (Ford, Honda, FCA, Volkswagen), court correct (federal court in Trenton), law name and citation correct (S3309/A4380, Motor Vehicle Open Recall Notice and Fair Compensation Act), signed September 11, 2025, effective April 1, 2026. Provisions match NJ CAR and Lexology: retail-rate reimbursement mechanics, 1.5% monthly stop-sale compensation with cap, chargeback protections, MVC notice, used-car NHTSA check. The two pre-panel attribution fixes (1.6M scope, 893,435 plaintiffs' share) were the real defects and are corrected. Remaining nit: the headline's "Same Day" compresses a November 19-20 window (Honda filed November 19, the suit was filed November 20) into one day; the body and pull-label carry the precise dates, so the net is accurate.

### 6. Research Rigor — 8.9/10
Original contribution is real and documented in the research file: the same-day ledger (1,207,464), the plaintiffs' 74% share, the 0.83% scale check against New Jersey's $45.4 billion auto retail sector, and the stop-sale arithmetic ($450/month on a $30,000 car). Limitations are stated in the research file and the disclaimer. Counterargument is at full strength and answered honestly. Every number traces to a cited source, and the completion-rate-to-pay link is framed as a hypothesis, not a proven cause. Deduction: no FARS model-level data, which is justified for a legal story and stated as such, but it means the piece leans entirely on national aggregates rather than any vehicle-level finding.

### 7. Data Presentation — 8.6/10
Pull stat 1,207,464 with the three-campaign breakdown in the label is the right lead number for a story whose thesis is a same-day coincidence. The $375 million / 0.83% comparison and the $450-a-month stop-sale math are shown with inputs, not just asserted. Completion rates (50.3%, 44%, 29%, 25.8 million) are in the text with their sources and dates. Minor deduction: the piece is math-led, so the data presentation is the argument rather than a supplement, and there is no second pull stat; the 50.3% completion rate could have carried one, but the 1.2M is the number that matters here.

## Verdict
**SHIP** — average 8.76/10, all seven critics at 8.5+. No round-1 revision required. Two pre-panel accuracy fixes applied and gates re-verified.
