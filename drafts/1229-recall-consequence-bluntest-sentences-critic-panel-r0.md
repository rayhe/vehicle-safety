# Critic Panel — 1229-recall-consequence-bluntest-sentences (round 0, post-table revision)

Slug: 1229-recall-consequence-bluntest-sentences
Title: "28,739 Recall Records Warn of a Crash. 3,341 Warn of Death."
Journalist: Axle McScatter | Kicker: By The Numbers | Dateline: November 23, 2027

## Hard gates (regex, source of truth)
- Em dashes: 0 (max 3) — PASS
- Banned phrases: 0 — PASS
- "The" sentence starters: 0% (max 15%) — PASS
- CSS: article class="story", ../style.css, no story.css — PASS
- Sentence rhythm (sentence-rhythm-check.py): variance 248.2 (>=200), short 7.4% (<=15%), long 44.4% (>=15%) — PASS

## Scores

### 1. General Editor — 8.5
Structure is correct: kicker, headline, lede with bolded stat, data table, pull stat, six paragraphs, references, disclaimer. Actionable takeaways are concrete (VIN check, fire = book this week, park-outside = driveway risk). Length ~390 words, in the 300-500 band. Headline is long but every number in it is cited. Minor deduction: the lede's third sentence ("It answers one question") is slightly throat-clearing, but Axle's voice tolerates setup when a table follows.

### 2. Voice Coach — 9.0
Distinctly Axle: "I pulled 74 recent campaigns from NHTSA's own API to check his math," "October 2026's files read like hazard haikus," the table-first instinct. Rhythm PASS with real variance (2-word to 34-word sentences). Zero banned phrases, zero em dashes. Cannot swap this byline with Clara Rollover or Rex Driverton without rewriting.

### 3. Ethics Reviewer — 9.0
No victim exploitation, no named tragedies used as props. Honest about what the numbers do NOT show (theoretical worst cases, not body counts). Serves the reader with genuinely useful next steps. No self-congratulation.

### 4. Social / Shareability — 8.5
Strong pull quotes: "A fire increases the risk of injury." / "five words, zero hedging" / "the bluntest safety writing in the industry is the fine print nobody reads." The 62% and 89% stats are screenshot-able. Data table renders the core finding at a glance. Deduct half a point: no single viral one-liner as strong as past #1 performers, but multiple shareable units.

### 5. Legal Accuracy — 9.0
All factual claims attributed. Campaign numbers (26V653000, 26V655000, 26V664000, 26V671000, 26V136000) are verifiable in the NHTSA recalls API. Part 573 reporting obligation described accurately (understatement creates liability exposure). No legal advice beyond "check your VIN." Park-outside interpretation is factual.

### 6. Research Rigor — 8.5
Original contribution: independent replication of ForCar's tabulation (74 campaigns, 89% crash / 11% fire / 0% death) plus October 2026 verbatim quotes plus the template taxonomy. Limitations stated (record-vs-campaign counting, recent-model skew, hand keyword matching). Counterargument stated at full strength (boilerplate, theoretical worst cases). Methodology shown with inputs. Deduct for the small sample (74) — disclosed, not hidden.

### 7. Data Presentation — 8.5
Full four-number table rendered after the lede, pull stat (89%) contextualized, inline numbers consistent with the table. Revision from round-0 draft: added the table after catching that a data-editor piece about a tabulation must show the tabulation. Deduct half a point: table has no inline source caption (source named in adjacent paragraph and references).

## VERDICT: SHIP — avg 8.71, all critics >= 8.5, all hard gates pass.
