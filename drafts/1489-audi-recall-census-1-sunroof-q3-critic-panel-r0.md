# Critic Panel — Round 0 — #1489 Audi Recall Census (Clara Rollover)

**Article:** drafts/1489-audi-recall-census-1-sunroof-q3.html
**Hero:** drafts/1489-audi-recall-census-1-sunroof-q3.jpg (real JPEG 1920x1280, hash e8942b00)
**Date:** November 13, 2026

## Hard gates (regex = source of truth)

| Gate | Result | Status |
|---|---|---|
| Em dashes (`grep -o '—' ... \| wc -l`) | 0 | PASS (max 3) |
| Banned phrases (Here's the thing / The kicker / paradigm shift / game-changer / deep dive / unpack / Let's be clear / Make no mistake) | 0 | PASS |
| "The" sentence starters | 4 of 80 (5.0%) | PASS (max 15%) |
| CSS class `class="story"`, link `../style.css` | yes / yes | PASS |
| Sentence rhythm script | variance 1525.0 (≥200), short 2.7% (≤15%), long 57.3% (≥15%) | PASS |
| Hero image | real JPEG 1920x1280, ?v=e8942b00 | PASS |
| Word count (story-body) | 2,013 | n/a (census series precedent; #1488 was 2,137) |

**Rhythm fix applied pre-panel:** first pass failed short-sentence share (21.1%). Combined 20 fragment clusters into longer constructions (pull-label; "query a5"; "So here is the one"; "Twenty-four models / One touched"; "Audi sits 9.9 below it"; "Start with the fire"; "no permanent fix / interim letters"; "Then the camera"; "Letters went out"; "Nine days" cluster; "Eight cars / That is not a sales slump"; "None of this makes the count wrong"; "Say that plainly"; "One recall is a good year"; "It does not stop at the table"; "Both of those sentences are true"; "Limitations, stated plainly"). Re-run: PASS at 2.7% short. No content changed, only sentence joins, except the 80% advice was briefly dropped in one join and restored verbatim in the same pass.

**Factual corrections found in pre-panel verification:** the draft said 25V900 was filed "nine days" before the census window opened; Dec 19, 2025 to Jan 1, 2026 is thirteen days. Corrected in the article (og:description, body, and the "thirteen days being the entire distance" clause) and in the research file. The draft also said 25V900 was "the biggest Audi recall of the year by a factor of fifty"; 356,894 / 6,077 = 58.7, corrected to "nearly sixty". The draft also carried the unsourced flourish "its weakest nine months in years" for Audi's sales; cut, leaving only the sourced 16% decline. All other arithmetic re-verified by hand: fourteen-brand total 153, average 10.9, Audi 9.9 below average, 373,367 for the three numbered outside-census campaigns (356,894 + 9,048 + 7,425), China Q3 388,258 / 6,077 = 63.9x ("64 times"), Q5 share 33,509 / 107,667 = 31.1% ("a third").

## 1. General Editor — 9.0/10

Lede lands the census and its trap in one paragraph: one campaign, 6,077 vehicles, a sunroof, and then the pivot that the count is honest and a trap at the same time. Structure is the series standard (method, the one recall, table, the three hidden recalls, sales context, buyer guidance, counterargument, limitations) and it holds. The buyer-guidance paragraph is a long single block, but it is a deliberate per-owner checklist, and each clause is a different car, so the length is functional. Deduction: the "What to do" paragraph asks the reader to hold six owner scenarios in one breath; a subhead or a break after the third would help scannability. Minor. No structural rewrite needed.

## 2. Voice Coach — 8.5/10

Clara is audible and distinct from Mia and Rex: the consumer-advocate directness ("set the charge limit to 80 percent tonight, in the car or the app, because nobody else is going to set it for you") and the anger on behalf of owners ("Then the seat belts, which are the ones that should anger you") are hers. No banned phrases, no AI tells in the lede, rhythm gate passes after the fragment joins. Deduction: the rhythm fix overshot — short sentences fell to 2.7%, and several merged sentences now run 50-70 words, which makes the middle of the piece dense. The "No fires. No injuries." cluster survives as the only real punch. Acceptable at round 0; the density is a voice tax, not a failure.

## 3. Ethics Reviewer — 9.0/10

Fair to Audi throughout. The counterargument is stated at full strength and conceded as "mostly fair" before the rebuttal. The single recall is presented as the system working, not as a gotcha, and the zero-injury record is stated plainly. The Q4 fire paragraph is careful to say Audi knows of zero fires while noting the ID.4 sibling's 22 claims. No self-congratulation, no moralizing about luxury buyers, no invented victims. The headline is sensationalist in the site's house style but every word of it is true after the thirteen-day correction.

## 4. Social / Shareability — 8.5/10

Headline is the share: "The Fires and the Blind Cameras Don't Count." Pull stat (1) with the one-forty-first-of-Ford label is the second share. Best pull quotes: "A filing calendar is not a safety record, and the defects that hurt people do not check the calendar before they file" and "the Q4 e-tron sold eight cars in the entire third quarter." Deduction: no single-sentence kicker at the end; the article closes on the counterargument rather than a line that travels. The headline carries the share on its own, so this is not blocking.

## 5. Legal Accuracy — 9.0/10

All campaign numbers, dates, populations, and defect descriptions verified against NHTSA Part 573 PDFs, the NHTSA API record, or press coverage: 26V209 (6,077, FMVSS 118, Audi 57KS), 25V900 (356,894, FMVSS 111, Audi 90TV), 26V698 (9,048, Audi 93SK), 25V638 (rear ALR, Audi 69UM), 26V266 (7,425). FMVSS references are correct. The 1-800-253-2834 Audi number is correct. The thirteen-day and nearly-sixty corrections were caught in pre-panel verification and fixed before scoring; the score reflects the corrected draft. One soft spot, disclosed in the article: the 26V209 owner-letter dates differ between documents (API record: mailed Apr 22, 2026; Apr 9 filing: expected May 29, 2026), and the article uses the API record's date.

## 6. Research Rigor — 9.0/10

Original contribution is real and documented: the corrected 1 census from 190 API queries across three passes; the MY2025 control sweep proving the zeros are empty results rather than vocabulary failures (7 of 8 controls return 200 with real campaigns, and "q4 e-tron" MY2026 returns a clean 200-empty); the per-model zero confirmations across 24 models; the fourteen-brand table (total 153); the 26V209 chronology (found in testing early February, committee late March, filed April 1); the outside-census triad; the 107,667 sales denominator with the EV-collapse context (3,867 North American BEVs, down 87.8%). Limitations are explicit and honest, including the A3 vocabulary gap, the 26V209 date discrepancies, and the China figure being a media tally. Counterargument is full-strength. Methodology is transparent (query counts, 400 rates, control sweeps). Deduction: complaint counts were not collected for this census; the ID.4 incident claims and zero-known-Q4-fires from the filings substitute adequately.

## 7. Data Presentation — 9.0/10

Fourteen-brand table is clean, complete, and sorted descending. Pull stat carries the two numbers that matter (1 campaign; one forty-first of Ford). The "thirteen days" hook is the best single data moment in the piece. Per-model counts are in prose rather than a table, which costs a little scannability, but the clean/dirty pattern (Q3 touched, 23 lines clean) is stated plainly. All 11 references are linked, with Part 573 PDFs cited by campaign number.

## Verdict

**Average: 8.86/10 (9.0, 8.5, 9.0, 8.5, 9.0, 9.0, 9.0). All 7 critics at 8.5+, all hard gates pass. SHIP.**
