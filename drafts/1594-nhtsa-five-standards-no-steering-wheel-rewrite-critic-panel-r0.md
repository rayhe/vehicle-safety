# Critic Panel — #1594 NHTSA Five Standards No-Steering-Wheel Rewrite
**Round 0 — November 26, 2026 — Vin Wreckage**

## Hard gates (regex/script, not opinion)
- Em dashes (literal): **0** (max 3) — PASS
- Banned phrases: **0** — PASS
- "The" sentence starters: **3.5%** (max 15%) — PASS
- CSS: `class="story"`, `../style.css`, no `story.css` — PASS
- Sentence rhythm script: **PASS** (variance 2014.7, short 12.7%, long 63.6%)
- Hero: real JPEG, 1920x1280, hash 770899ba — PASS
- Word count: 1442

## 1. General Editor — 8.6/10
Lede lands the premise in two sentences and the census structure (five proposals, two legal paths, five gaps) is the right skeleton for a package piece. The pull stat (160 comments) reframes a rulemaking story as a participation story. Weaknesses: 1,442 words is nearly double the recent shipped range (726-935) and triple the guide's 300-500; the piece earns most of it, but the FMVSS 110 paragraph and the gaps paragraph both carry a second idea that could be cut. The rhythm fixes merged away two of Vin's best punches ("Eight." and "All true." as standalones), a small voice cost paid for a gate pass. Headline is accurate but a mouthful. No structural fix required beyond the citation repair below.

## 2. Voice Coach — 8.7/10
Vin's voice holds: "the rulebook has not written yet" is the closer only this byline writes, and "the signal teaches the public a rule with built-in exceptions" is the kind of sentence that justifies the column. Rhythm script passes after the merges. Two nits: mean sentence length 33.6 words is on the long side even for Vin, and the merged sentences in paragraphs 2-3 read slightly committee-written where the originals punched. No banned phrases, no AI tells, no throat-clearing. Voice is distinct and could not be swapped to Mia or Axle without a rewrite.

## 3. Ethics Reviewer — 9.0/10
No victims, no injuries to exploit, no speculation about individuals. The counterargument gets a full paragraph at full strength rather than a strawman sentence. The actionable close is responsible: it tells readers to comment through the official docket, warns that absence of cyan means nothing, and states plainly that no federal rule requires a passenger stop control. Nothing to correct.

## 4. Social / Shareability — 8.6/10
Two shareable hooks: the cyan lamp ("cyan means robot, but no cyan means nothing at all") and the stop-button gap ("no federal rule requires it to give you a way to stop it"). The pull stat (160 comments) is a standalone share card. Weaknesses: the headline is too long to travel well, and the best pull-quote line ("One company waited eleven months for a leash while the other waited zero days and sealed the homework") is buried mid-article. Not worth a revision round on its own.

## 5. Legal Accuracy — 8.2/10
Every load-bearing Federal Register claim is verified and correctly cited: all five NPRM citations, dockets, RINs, comment counts, and the Zoox exemption terms check out against the Federal Register API records read this run, and the December 10 extension date correctly cites FR Doc. 2026-23239 over the stale November 25 date still shown in the API record. But three inline citations point at sources that do not support their claims, and that is a verifiability defect, not a nit: (a) the "701 complaints" figure in the FMVSS 110 paragraph is cited to ref-3, the FMVSS 110 NPRM, which says nothing about Honda; (b) the Tesla sealed-answers claims in the two-paths paragraph are cited to ref-6, the Zoox exemption, which says nothing about Tesla; (c) the Waymo RQ26006 claim in the gaps paragraph is cited to ref-7, the NHTSA H1 press release, which says nothing about Waymo. The underlying facts are all true (701 complaints per the EA26007 opening resume via MotorBiscuit/The Auto Wire; sealed answers per Electrek Nov 5; RQ26006 per Reuters/Claims Journal Nov 9), so this is a citation repair, not a factual one. Fix the three references before shipping.

## 6. Research Rigor — 8.3/10
Original contribution is real and fourfold: the five-proposal census with FR citations and comment counts, the 160-comment total, the Zoox-vs-Tesla two-paths comparison, and the five-gap inventory. Limitations are explicit and specific (proposals not final, comment counts are snapshots, secondary sourcing flagged for the "taking no position" quote and the Mercedes/survey figures, Waymo and Cybercab details reused from prior coverage). The counterargument is stated at full strength and conceded where it is right. The deduction is the citation mismatch above: a reader who checks ref-3, ref-6, or ref-7 for the claim it is attached to finds nothing, which breaks the site's verifiability rule even though the facts themselves check out. Fix the citations and this is an 8.8+.

## 7. Data Presentation — 8.5/10
The numbers mean something instead of decorating: 160 total comments, the 11/14/8/61/66 split, the 2,500-vs-1,000 fleet comparison, the five-car Mercedes validation, the 15-inch lamp height. The 701-vs-160 comparison turns an abstract participation gap into a scale argument. Minor: a compact table for the five proposals (standard, FR citation, comments, status) would scan faster than five prose paragraphs, but the prose already carries the same data and a table risks re-breaking the rhythm gate, so this is recorded as an accepted limitation, not a required fix. Length (1,442 words) is the main drag.

## Verdict
| Critic | Score |
|---|---|
| General Editor | 8.6 |
| Voice Coach | 8.7 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.6 |
| Legal Accuracy | 8.2 |
| Research Rigor | 8.3 |
| Data Presentation | 8.5 |
| **Average** | **8.56** |

**2/7 critics below 8.5 (Legal 8.2, Rigor 8.3). Hard gates pass. VERDICT: REVISE (round 1). Required fix: re-point the three mismatched inline citations to sources that support them — EA26007 701 complaints (MotorBiscuit Nov 17, 2026), Tesla sealed answers (Electrek Nov 5, 2026), Waymo RQ26006 (Claims Journal/Reuters Nov 9, 2026) — by adding refs 10-12 and correcting the inline markers. No other revision required.**
