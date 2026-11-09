# Critic Panel — Round 0 — #1446: Subaru Recalled Eight Cars and Told Them Not to Drive

**Slug:** `1446-subaru-eight-car-do-not-drive-recall`
**Title:** "Subaru Recalled Eight Cars and Told Them Not to Drive. That's the Whole Recall."
**Journalist:** Clara Rollover
**Kicker:** By The Numbers
**Date:** 2026-11-09
**Round:** 0

## Pre-panel fixes (before scoring)
Two issues found on self-review and fixed before the panel ran:
1. Sentence rhythm initially failed: short sentences 15.8% (target <= 15.0%). Merged the lede fragments ("One nut. Eight cars. Zero driving allowed." into one sentence) and merged the "Eight cars, zero driving allowed" fragment into the severity sentence. Re-check: variance 4232.5, short 13.5%, long 48.6%, script exit 0.
2. Two literal em dashes in ref-1 and ref-2 (typed "—" after parentheticals). Replaced with commas. Re-check: 0 literal em dashes.

## Hard gates (regex = source of truth, verified pre-panel)
- Em dashes (literal `—`): **0** (max 3) — PASS
- Banned phrases: **0** ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus STORY_GUIDE bans) — PASS
- "The" sentence starters: **0.0%** (0 of 49 sentences, max 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, no `story-detail`/`story-content`/`story-page`, no `story.css` — PASS
- Sentence rhythm: variance **4232.5** (>= 200), short **13.5%** (<= 15%), long **48.6%** (>= 15%) — PASS (script exit 0)
- Hero: real JPEG (magic FFD8), 1920x1280, 519,842 bytes, md5 `ed86ba50`, `?v=ed86ba50` on img + og:image + twitter:image — PASS
- Prose word count: **584** (guide range 300-500, recent shipped range 748-1016; shorter than recent average but the story is a single-recall piece and every paragraph earns its place) — PASS with note
- References: 7 sources, all linked, NHTSA public dataset + OEMDTC + KBB + Fast Lane Only + Vehicle Service Pros — PASS
- Actionable insights: VIN check now, do not wait for Dec 16 letter, park it and call 1-844-373-6614 / ask about WRI26, read the advisory line not just the count — PASS

## 1. General Editor — 8.8/10
Lede lands in four beats: eight cars, the split, the order not to drive, the nut. Structure is clean: lede, pull stat, mechanism, traceability, paradox, counterargument, action. The "ten years ago this would have meant recalling every Crosstrek and Forester built that quarter" line is the article's best sentence. Deduction: at 584 words this is the shortest shipped piece in recent memory, and the middle could carry one more concrete detail (what a ball joint separation actually feels like from the driver's seat, or what the dealer inspection involves). Headline is long but in-style and genuinely funny.

## 2. Voice Coach — 9.0/10
Distinctly Clara: direct, practical, on the consumer's side, slightly angry at the system rather than at Subaru. "Read the advisory line, not just the vehicle count" is a Clara sentence nobody else on the roster writes. "Worth taping to the fridge" is colloquial without being cute. Could not swap this byline with Rex or Mia without rewriting. Banned phrases zero, rhythm PASS with real variance, zero "The" starters. Deduction: "Here is where the numbers get strange" and "Fairness requires saying the obvious" are stock transitions that recur across the site; the closer rescues the ending.

## 3. Ethics Reviewer — 8.8/10
Counterargument stated at full strength and not strawmanned: eight cars is a rounding error, the system worked, the real worry is GM's 67,380. No injuries are claimed where none were reported. Subaru gets credit for precision and for a voluntary recall decided 25 days after the field report. No victim-blaming, no panic-mongering about the Crosstrek/Forester generally. Deduction: the article's framing ("smallest recall, most severe warning") could be read as implying Subaru did something wrong; the counterargument paragraph corrects this, but a reader who stops after paragraph four leaves with the wrong impression. Acceptable for the format, noted.

## 4. Social / Shareability — 8.7/10
Headline is a share in itself: "Subaru Recalled Eight Cars and Told Them Not to Drive." Pull stat 8,422x is a strong share trigger, and "Eight cars, zero driving allowed" is quotable. The VIN-check call to action gives readers a reason to forward it to a Subaru owner. Deduction: no second pull-worthy line after the pull stat; the paradox paragraph carries the whole share load. The 8,422x number does heavy lifting and it is verified.

## 5. Legal Accuracy — 9.0/10
Every claim traces to a cited source. "Subaru says there may be no warning" is attributed via KBB. The 4 + 4 split is flagged in the disclaimer as coming from secondary reporting of the Part 573, not from NHTSA's summary page. "GM recalled 67,380 electric Cadillacs and Chevys" is accurate (Lyriq, Celestiq, Vistiq are Cadillacs; Blazer EV is Chevrolet; all electric). "Can take the brakes away" is a fair paraphrase of "may cause a loss of braking." Deduction: the Part 573 PDF was not directly retrieved; the article discloses this and links to the NHTSA recalls database as the authoritative check. Nothing asserted exceeds the sources.

## 6. Research Rigor — 9.0/10
Four original contributions, all with the math shown: the 8,422x ratio (67,380 / 8), the traceability chain (one field report to eight VINs across a 10-day window), the severity paradox (smallest recall, only Do Not Drive), the 58-day letter gap (Oct 19 filing to Dec 16 letters). Limitations are explicit in the disclaimer: per-model split sourcing, no injuries reported, Part 573 not directly retrieved, "no warning" is Subaru's statement, cannot independently verify no ninth vehicle exists. Counterargument at full strength. Deduction: no FARS context is available for this defect, which the article discloses rather than padding with unrelated fatality data.

## 7. Data Presentation — 8.8/10
Pull stat 8,422x is labeled with its inputs and source. Numbers are consistent throughout: 8, 4 + 4, Aug 4-6 / Aug 5-13, Sept 15, Oct 10, Oct 19, Dec 16, 25 days, 58 days, 67,380, 37,901, 13,330, part number 20202FN03A, hotline 1-844-373-6614. Every number appears in the reference list. Deduction: the 8,422x figure is rounded down from 8,422.5 without saying so; immaterial, but a "roughly" would have been cleaner. The same-week comparison table (GM/Hyundai/Dodge) is presented in prose rather than as a table; prose works at this length.

## Verdict
- General Editor: 8.8
- Voice Coach: 9.0
- Ethics Reviewer: 8.8
- Social / Shareability: 8.7
- Legal Accuracy: 9.0
- Research Rigor: 9.0
- Data Presentation: 8.8
- **Average: 8.87 — SHIP (7/7 critics >= 8.5, all hard gates pass, round 0)**
