# Critic Panel — #1373: One Bad Hose, Four More Recalls (round 0)

## Hard gates (regex, not opinion)
- Em dashes (literal U+2014): 0 (max 3) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus STORY_GUIDE bans): 0 — PASS
- "The" sentence starters: 0 of 61 body sentences (0.0%, max 15%) — PASS
- CSS: `class="story"`, `../style.css`, `story-body`, `story-kicker`, `byline`, `dateline`, `pull-stat`/`pull-label` — PASS, no story-detail/story-content/story-page/story.css
- Sentence rhythm (sentence-rhythm-check.py --json): variance 353.8 (≥200), short 14.6% (≤15%), long 51.2% (≥15%) — PASS (short share is close to the limit but passing; no rewrite forced)
- Hero: real JPEG 1920x1280, hash 86867609, og:image + img src cache-busted — PASS

## 1. General Editor — 9.0
Lede lands the thesis in one paragraph, the 3,179 pull stat frames the second wave before the detail flood, and the piece earns its length. The fire-truck irony line ("Read that last one twice") is the sharpest beat. Minor deduction: the "What to do" paragraph is long and list-like; acceptable for a consumer-advocate byline, but a line break structure would breathe better. Not worth a revision round on its own.

## 2. Voice Coach — 8.8
Clara Rollover is distinct from Rex: direct, practical, angry on behalf of readers rather than noir-deadpan. "That should not be the safety plan for a city bus" is a Clara sentence nobody else on the roster would write. No banned phrases, no AI tells, rhythm passes all three targets. Small deduction: "coda" is a slightly writerly word for this voice; the paragraph works anyway.

## 3. Ethics Reviewer — 9.0
No injuries are claimed anywhere, and the piece explicitly refuses to overstate the Nova link ("probable, not confirmed") even though a stronger claim would have made a better headline. The counterargument is stated at full strength, including the parts logistics explanation for the letter gaps. The fire-truck framing is irony about the vehicle class, not fear-mongering about incidents that did not happen.

## 4. Social/Shareability — 8.7
Headline carries the whole story and the "fire trucks recalled for a fire risk" hook is a natural share trigger. Pull stat 3,179 is quotable. Deduction: the article has no single-sentence pull quote as tight as the headline; the "your nose is the safety plan" line comes closest and sits mid-article rather than at the top.

## 5. Legal Accuracy — 8.8
Campaign numbers, counts, dates, contacts, and remedy part numbers all trace to cited NHTSA records or trade reporting checked against them. No liability finding is asserted against Cummins or any manufacturer; the MX-13 litigation from #1337 is deliberately not re-litigated here. Deduction: the DTNA 2,592 count rests on trade-press weekly lists rather than a Part 573 PDF reviewed firsthand; the reference attributes it honestly to RV News, and the limitation is noted in research.

## 6. Research Rigor — 9.0
Original contribution is real: the second-wave tally (3,179 confirmed, 3,632 with Nova), the full-cascade floor (68,960 / 69,413), the notification-gap arithmetic (43-60 days, Nova landing December 26), and the 3%-vs-100% denominator analysis, which correctly resolves an apparent contradiction instead of exploiting it. Limitations are stated in the disclaimer and the Nova caveat. Strongest counterargument is given a full paragraph, not a sentence.

## 7. Data Presentation — 8.6
Pull stats are used correctly (one framing number, prose tallies after). The 3%-vs-100% explanation is the best data writing in the piece. Deduction: the cascade tally paragraph is a dense run of numbers; a small table would scan better, but the site's article format favors prose and the arithmetic is shown inline, so this stays a nit.

## Verdict
Scores: 9.0, 8.8, 9.0, 8.7, 8.8, 9.0, 8.6. Average 8.84. All seven critics at 8.5+, all hard gates pass. SHIP, round 0, no revision.
