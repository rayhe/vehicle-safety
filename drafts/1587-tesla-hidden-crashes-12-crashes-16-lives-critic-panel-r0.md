# Critic Panel — #1587: Tesla's Hidden Fatal-Crash File Doubled in Nine Weeks (Round 0)

**Slug:** `1587-tesla-hidden-crashes-12-crashes-16-lives`
**Journalist:** Rex Driverton
**Date:** November 25, 2026
**Draft:** drafts/1587-tesla-hidden-crashes-12-crashes-16-lives.html (1,382 body words)

## Hard gates (regex = source of truth)
- **Em dashes:** 0 (max 3) — PASS
- **Banned phrases:** 0 ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Let's be clear", "Make no mistake", "The numbers don't lie", "The uncomfortable truth", "And it's not even close") — PASS
- **"The" sentence starters:** 1 of 90 sentences, 1.1% (max 15%) — PASS
- **CSS class check:** `class="story"`, `../style.css`, zero occurrences of story-detail/story-content/story-page/story.css — PASS
- **Structure:** story-kicker, byline, dateline, pull-stat, pull-label, story-body, story-references, site-footer all present — PASS
- **Sentence rhythm:** variance 334.3 (target ≥ 200), short 13.6% (target ≤ 15%), long 45.5% (target ≥ 15%) — PASS
- **Hero:** real JPEG (FF D8), 2352x1008, hash 39b2fa53, `?v=39b2fa53` on all three references — PASS
- **Pre-score fixes:** (1) ref-6 URL was invented (`.../standing-general-order-crash-reporting-automated-driving-systems`, 404) — replaced with the verified NHTSA SGO page `https://www.nhtsa.gov/laws-regulations/standing-general-order-crash-reporting`. (2) "5-day urgent category / twenty times that" math removed: NHTSA's SGO requires specified crashes within one day of notice, so the draft now says "the rule is measured in days. Tesla took months." Research file corrected to match.

## 1. General Editor — 8.5/10
Lede does its job: September's file had eight names, November's has sixteen lives, and the reader knows the stakes in two sentences. The four-case structure is clean, each case gets its own paragraph block, and the piece earns its length with distinct facts per case rather than repetition. The one real knock is length: 1,382 body words against a guide that says 300-500. Recent shipped pieces run 900-1,200, so this is not an outlier, but it is the longest of the recent run and the El Dorado Hills and Vineland paragraphs could each lose a sentence without losing a fact. Not worth a revision round on its own; the rigor sections (limitations, counterargument, actionable) are load-bearing here and explain the word count. Headline is long but scans, and the pull stat ("8 of 16") is the article's best number.

## 2. Voice Coach — 9.0/10
Rex's voice is intact and unswappable: deadpan, noir-detective-through-paperwork, with the file-as-character framing ("the file holds twelve crashes") carried from #905. "Some error. It keeps happening to fatal crashes." lands. "A database that cannot place a fatal crash in the right month is a database that cannot be trusted to count" is the sentence the piece was built to deliver. No banned phrases, zero em dashes, rhythm PASS with real variance (334.3). Minor: "Then there is the filing itself" and "One more filing defect, because the pile is the point" are functional transitions rather than voice, but they read as Rex thinking out loud, not as scaffolding. No AI tells survive.

## 3. Ethics Reviewer — 9.0/10
The dead are named with age, role, and human detail (Garcia Arias the former Marine who stopped to help; Mills the bride-to-be visiting from Arizona; Eastman the school board member and youth hockey coach), and none of it is decorative: each detail is doing evidentiary work about who was in the car or on the road. No gore for its own sake; the burn and ejection facts are stated once and plainly. "Verified engaged" is repeated as a caveat, never upgraded to "caused." The surviving driver in Naples is not speculated about. The piece names Tesla's selective disclosure (Katy) without accusing the company of a crime it has not been charged with. The one line to watch is "the company keeps the sentences that matter" (research file) — the article itself stays on the softer, accurate version. Clean.

## 4. Social/Shareability — 9.0/10
Three share triggers, each self-contained: the Marine who stopped to help and was killed by a car at 71 mph; the bride-to-be in a burning Model Y; the crash filed under the wrong month because of a UTC timestamp. The headline carries the growth number (12 crashes, 16 lives), which is the kind of figure people quote without reading further, and the pull stat ("8 of 16") is built for screenshots. The I-75 paragraph is the excerpt that will travel. Weakest element is the og description, which is accurate but less punchy than the headline; acceptable.

## 5. Legal Accuracy — 9.0/10
Every load-bearing claim traces to a cited source, and the two factual hazards in the draft were caught and fixed before scoring: the invented SGO URL (replaced with the verified NHTSA page) and the "5-day" reporting claim (corrected to NHTSA's one-day rule for specified crashes, with Electrek's "5-Day report" characterization preserved only in the research file as attribution). "Verified engaged" is defined correctly as engagement within 30 seconds, and the disclaimer states it does not establish causation. The Audit Query (August 2025) and Tesla's "error in data collection" explanation are accurately attributed. The Joshua Brown / Jeremy Banner parallel is framed as geometry, not as a finding of identical cause. No defamation exposure: all criticism is of documented filings and the company's own statements.

## 6. Research Rigor — 9.0/10
Original contribution is real and checkable: the growth arithmetic (8/8 to 12/16 in nine weeks, +50% cases, +100% deaths), the filing-defect ledger (3+ month lag on an urgent filing, UTC month-shift, "Unknown" struck object, a case missing from the data entirely), the under-truck repeat (Brown 2016, Banner 2019, Naples 2026), and the record month (264 crashes in September). Limitations are stated at full strength in the disclaimer and in the counterargument paragraph, including that Electrek's matching is journalism rather than a federal finding and that the 12-case list is a floor. The strongest counterargument gets a full paragraph and is not strawmanned: the human-failure explanations, the mileage-base-rate point, the legality of redactions, and the Katy example all appear. Methodology is transparent: the hub's matching method (UTC conversion, city/vehicle/outcome) is described in the references.

## 7. Data Presentation — 9.0/10
Numbers are consistent throughout: 8 to 12 crashes, 8 to 16 lives, 8 of 16 in the update, 71 mph, 74 mph, 39 mph, 264 vs 236, 85%, 99.9%, 3+ months. The 16-life arithmetic reconciles exactly (1 Vineland + 3 I-75 + 3 El Dorado Hills + 1 Naples = 8 new lives; 8 + 8 = 16). Speeds are correctly presented as pre-crash telematics snapshots, and the disclaimer says so. The pull stat is the article's best number, placed after the lede where it belongs. No table, but the four cases are discrete enough in prose that a table would add chrome, not clarity. One nit: the article never states the 1.33 deaths-per-crash figure from the research file; that is fine, since the multi-fatality pattern is already visible in the case text.

## Verdict
**SHIP.** Average 8.93/10; all seven critics at or above 8.5. Round 0.

| Critic | Score |
|---|---|
| General Editor | 8.5 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 9.0 |
| Social/Shareability | 9.0 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.0 |
| Data Presentation | 9.0 |
| **Average** | **8.93** |

No revision round needed. The single sub-9 score (General Editor, length) is a judgment call the panel considered and declined to act on: trimming ~200 words would risk the rhythm gate (short-share already at 13.6% against a 15% ceiling) for no factual gain.
