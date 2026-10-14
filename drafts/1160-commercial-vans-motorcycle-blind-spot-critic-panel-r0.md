# Critic Panel — Round 0: "IIHS Asked Delivery Vans to Stop for a Motorcycle. Most of Them Did Nothing."

**Journalist:** Axle McScatter (Data Visualization Editor)
**Round:** 0 (no revision needed; rhythm fix applied pre-panel from script feedback)

## Hard gates (regex/script, not opinion)

| Gate | Rule | Result |
|---|---|---|
| Em dashes | max 3 in body text | 0 PASS |
| Banned phrases | Here's the thing / The kicker / paradigm shift / game-changer / deep dive / unpack | 0 hits PASS |
| "The" sentence starters | max 15% | 4/38 = 10.5% PASS |
| CSS structure | class="story", ../style.css | PASS (verified in file) |
| Sentence rhythm | variance >= 200, short <= 15%, long >= 15% | exit 0: var 1998.7, short 27.9->fixed 12.3%, long 51.2% PASS |
| Hero image | real JPEG, not PNG | JPEG 1920x1280, magic bytes FF D8, ?v=5aebf0bb PASS |

Rhythm note: initial draft failed on short-sentence density (27.9%); merged 7 fragment pairs into longer constructions. Re-ran: PASS.

## Scores

### 1. General Editor — 9.0
Headline is sensationalist in the site's house style and fully backed by the data. Scoreboard table does the heavy lifting; prose around it doesn't repeat it. Lede delivers the key stat inside the first paragraph. The "violence by omission" line is the article's money quote. Title is long but every word earns its place.

### 2. Voice Coach — 8.8
Distinctly Axle: opens mid-thought after the ritual catchphrase, immediately reaches for the spreadsheet, and the table is the article's skeleton (he is the journalist who would forget prose and just present tables). "A fun way to discover that nobody currently sells a commercial van that is excellent at not hitting things" is dry in exactly his register. No banned phrases, no AI tells, sentence rhythm verified above. Docked slightly because "To be fair, and it pains me" leans confessional in a way his drier peers wouldn't attempt.

### 3. Ethics Reviewer — 8.7
No victim-blaming; the motorcycle advice is framed as defensive realism, not rider shaming. Fairness paragraphs give the engineering difficulty its full due before returning to the scoreboard. Limitations are explicit about what the test does NOT prove (track targets vs. real motorcycles, no crash attribution to specific AEB gaps). The 6,215-death figure is correctly scoped as all heavy/medium/light-van crashes, not AEB-preventable ones.

### 4. Social/Shareability — 9.2
The headline is built for shares. "0/6" is a two-character stat that travels. Motorcycle communities will spread it as validation; fleet buyers will forward it as ammunition; Rivian's own fanbase will argue about it, which is engagement. The table screenshots well as a card image.

### 5. Legal Accuracy — 8.9
All ratings attributed to IIHS via press coverage, with the IIHS ratings page linked for direct verification. NHTSA's June 2023 AEB cost-benefit numbers are attributed through the Advocates statement and the Free Press. No legal conclusions drawn; the federal-rule status ("still not finalized") is stated as fact from the Advocates' own framing. All URLs copied verbatim from search results.

### 6. Research Rigor — 9.0
Original contribution is real: the warning/braking divorce (ProMaster warns but doesn't brake; Rivian brakes for cars but is blind to motorcycles) exposes a composite-score blind spot, and the 7-of-11 Poor cross-tab with "zero Good in both tests" is a calculation nobody published. Limitations and strongest counterargument are full-strength. Methodology (2.1s warning threshold, 2/3 braking weighting) is stated. One honesty note is logged in Limitations: per-vehicle ratings are as reported by secondary press, not re-verified on iihs.org.

### 7. Data Presentation — 9.3
The scoreboard table is the best data presentation this desk has shipped in weeks: eleven vehicles, two tests, three ordered tiers, and the motorcycle column is where every reader's eye lands. Pull stat is clean. References are complete with six sources. Would have been a 10 with the actual IIHS rating-page URLs per vehicle; press-URL limitation is noted.

**Average: 8.99 (all 7 critics >= 8.5)** — SHIP.

## Verdict
Round-0 pass. All hard gates green, all critics at or above 8.5, average 8.99. Proceed to SHIP: ship_date = 2027-09-14 (1 day after latest queue ship_date 2027-09-13), phase=SHIP_BLOCKED.
