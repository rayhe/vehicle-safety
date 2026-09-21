# Critique — #961: Grand Caravan vs Sienna Minivan Death Gap (Round 0)

**Article:** `drafts/961-grand-caravan-sienna-minivan-death-gap.html` (857 words)
**Journalist:** Axle McScatter

## Hard gates (all PASS, verified mechanically)

| Gate | Result |
|---|---|
| Em dashes (`grep -o '—'`) | 0 |
| Banned phrases (site + pipeline lists) | 0 found |
| "The" sentence starters | 5/44 = 11.4% (limit 15%) |
| Sentence rhythm script | PASS (variance 397.5, short 5.6%, long 55.6%) |
| CSS | `class="story"`, `../style.css`, no `story.css` |
| Hero image | Real JPEG (FFD8), 1920x1280, md5 95825400, `?v=` cache-busted |
| HTML structure | Balanced tags, disclaimer outside `</article>`, story-body closed before references |
| Actionable insights | Present (used-minivan shopping guidance, small-overlap over stars, second-row belts) |

## The 7 critics

### 1. General Editor — 9.0
Structure is exactly the house template: kicker, headline, bolded-stat lede, pull stat, inline data table, 7 paragraphs, references, disclaimer. The hook ("soberer drivers kill at nearly triple the rate") lands in paragraph two and the table makes the numbers checkable at a glance. Deduct one point: the inline table reuses the house borderless style, which is consistent with prior stories but the densest table the site has run; cell borders would help legibility. Also the og:title/title were initially stale after a headline change and had to be corrected.

### 2. Voice Coach — 9.0
Unmistakably Axle: "I ran the numbers, then ran them again because the first pass had to be a sorting error," "Blame-the-driver is off the table, and it is the table I eat at," "twelve years, one platform, two million family road trips." No AI tells, no banned phrases, rhythm PASS at first honest measure. Minor: "stare out the window" is the one stock image in the piece.

### 3. Ethics Reviewer — 9.2
The demographic counterargument ("price selects buyers") is handled without stereotyping: it names the mechanism (income, fleet age, maintenance, taxi use) rather than the people. No victim-blaming; the impairment data is used to exonerate drivers, not indict them. The actionable advice is honest and non-commercial.

### 4. Social/Shareability — 8.8
Headline is a share trigger for parent-group chats. Pull stat "2.7x" is screenshot-ready. The table is the piece's best viral asset (5-row minivan scorecard). Loses points only because minivan buyers skew less online-discursive than sports-car or EV audiences.

### 5. Legal Accuracy — 9.0
Every factual claim carries an inline ref; IIHS grades trace to IIHS releases via Automotive World and the mediaroom PDF; the April 2026 Top Safety Pick shutout traces to Autoblog; the 2020 discontinuation traces to The Drive. Harkey is paraphrased, not misquoted. No direct quotes requiring exact sourcing.

### 6. Research Rigor — 9.2
Original contribution: the FARS rate-vs-toxicology cross-tab for the minivan class, a calculation nobody published (the impairment inversion is the article's discovery). Methodology paragraph states the VMT-estimation caveat; limitations name the floors/ceilings honestly; the counterargument is stated at full strength before being answered with lab data. The Pacifica young-fleet artifact is disclosed rather than hidden.

### 7. Data Presentation — 9.0
Numbers are consistent everywhere: table, lede, prose, and pull-label all agree (1,782 / 1.33 / 15.3% vs 430 / 0.49 / 19.0%). The ratio 1.33/0.49 = 2.71 is stated as 2.7x, not rounded to triple. Units are stated per 100M VMT per the data file's documented definition. One nit: the disclaimer could restate the rate definition, but the methodology paragraph covers it.

## Verdict

Average: **9.03** — 7/7 critics at or above 8.5. All hard gates pass. **→ SHIP.**
Ship blocked by the 1/day rule (#819 published 2026-09-21); queued as SHIP_BLOCKED with ship_date 2026-12-28.
