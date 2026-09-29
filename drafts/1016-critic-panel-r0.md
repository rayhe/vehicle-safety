# Critic Panel — #1016 "Tesla Certified a Car With No Brake Pedal..." (Rex Driverton) — Round 0

Article: drafts/1016-cybercab-fmvss-self-certification-audit.html
Hero: drafts/1016-cybercab-fmvss-self-certification-audit.jpg (real JPEG 1920x1280, 525,324B, hash 5bb287d4, cache-busted ?v=5bb287d4)
Research: drafts/1016-cybercab-fmvss-self-certification-audit-research.md

## Hard gates (regex = source of truth)
- Em dashes (literal): 0 (entities only in title/footer) — PASS
- Banned phrases: 0 — PASS
- "The" sentence starters: 4/47 = 8.5% — PASS
- CSS: class="story" yes, ../style.css yes, story-hero img count = 1, og:image absolute — PASS
- Sentence rhythm (sentence-rhythm-check.py --json): variance 335.4 (target >=200), short 15.0% (<=15%), long 47.5% (>=15%) — PASS, exit 0

## 1. General Editor — 8.8
Structure is clean: kicker/headline/lede-bold-stat/pull-stat/4 body graphs/limitations/references/disclaimer. The deadline-tomorrow frame gives it a news peg most Crash Report pieces lack. Headline runs long at three clauses but each clause earns its place and it matches the site's sensationalist-backed-by-numbers house style. Deduct: paragraph 2's standards list is dense; a reader unfamiliar with FMVSS numbering may skim it.

## 2. Voice Coach — 8.8
Rex Driverton deadpan noir present throughout: "the paperwork fight," "see the homework," "Read that twice," "Tesla skipped the line." No banned phrases, no catchphrase collision ("The numbers don't lie" avoided per STORY_GUIDE ban). Rhythm metrics pass with margin (variance 335.4). Sentence lengths genuinely vary: fragments ("Read that twice.") against 40+ word builds. Not swappable with Vin Wreckage's column. Deduct: "in so many words" is a mild throat-clear.

## 3. Ethics Reviewer — 9.0
No private individuals named; Tesla-as-company treated fairly with a full-strength counterargument given its own paragraph. No victim content (no crash victims exist here). Does not cheerlead for deregulation or for the regulator; holds both readings. The "paperwork fight is theater" framing is attributed as conditional ("If the car itself is safe"). No moralizing.

## 4. Social/Shareability — 8.8
Pull stat "21" is clean and mysterious enough to earn the click; the $139,356,994 ceiling in the label is the real share bait. Headline has built-in urgency ("by Tomorrow"). Quotable line: "Tesla's gamble is that 'inapplicable' is a box the manufacturer gets to check on its own." Deduct: no single-sentence pull quote formatted for X; the pull-label carries the weight instead.

## 5. Legal Accuracy — 8.8
FMVSS 135 S5.3.1 quoted verbatim from eCFR primary text. FMVSS 111/203/204/208 characterizations are accurate at the summary level used. Special Order details (21 requests, Sept 30 deadline, Simshauser signature, $139,356,994 ceiling, 49 U.S.C. 30166, up-to-15-years criminal exposure) match WebProNews/TechTimes reporting; the "temporary controls during testing" question is hedged as "reportedly." Audit Query vs Special Order distinction is stated correctly, and "not a defect finding" appears twice. Deduct: the Special Order text itself was not independently reviewed (flagged in limitations); FMVSS 111 mirror language is summarized, not quoted.

## 6. Research Rigor — 9.0
Original contribution: the FMVSS-by-FMVSS collision accounting (135/111/203/204/208) plus the Zoox Part 555 contrast (4 years, 2,500/yr cap, July 30 2026 clearance) as the road-not-taken. 6 sources, all real URLs, primary legal text verified. Limitations paragraph is explicit (answers not public, order text via secondary reporting, FARS window, absence-of-reporting caveat). Counterargument given full strength in its own paragraph. Methodology for FARS numbers stated (raw counts, not exposure-adjusted).

## 7. Data Presentation — 8.8
Numbers are precise and contextualized: 21 requests, $139,356,994, Sept 3 / Sept 10 / Sept 30 timeline, ~1,000 vehicles, 45 registered, 2,500/yr Zoox cap, 278 FARS deaths / ~3.7M fleet. No chart needed; the pull-stat does the visual work. Deduct: the 278-deaths figure could use one more clause of context (window 2014-2023) inline rather than only in the reference.

## Verdict
Average: 8.86. All 7 critics >= 8.5. All hard gates pass. **SHIP** (queued SHIP_BLOCKED: 1/day slot consumed by #758 on 2026-09-29).
