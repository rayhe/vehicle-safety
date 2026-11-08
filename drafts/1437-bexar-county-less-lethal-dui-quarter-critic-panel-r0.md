# Critic Panel — #1437: Bexar County Crashed More Than Dallas and Killed Fewer. Drunk Driving Was One in Four.

**Slug:** `1437-bexar-county-less-lethal-dui-quarter`
**Journalist:** Axle McScatter
**Date:** November 8, 2026

## Hard gates (regex = source of truth, re-checked after every revision)

| Gate | Round 0 | Limit |
|---|---|---|
| Em dashes (`grep -o '—'`) | 0 | max 3 |
| Banned phrases | 0 | 0 |
| "The" sentence starters | 0/26 (0.0%) | max 15% |
| CSS class `story` / `../style.css` | pass | exact |
| Sentence rhythm script (`sentence-rhythm-check.py --json`) | PASS (variance 1098.9, short 11.5%, long 57.7%) | variance ≥200, short ≤15%, long ≥15% |

Rhythm fixes applied pre-panel: three fragment merges (lede death counts, county lethality list, "Bexar beat both") plus one more merge ("Inside the county, the danger concentrates") after the script reported short_pct 15.4%; final run passes at 11.5%.

## Round 0 scores

### 1. General Editor — 8.7/10
Clean spine: more crashes, fewer deaths, then the DUI exception, then the discount. The lede lands the paradox in two sentences. Dings: 577 prose words against the 300-500 guide (the six-county paragraph and the Vision Zero paragraph both earn their keep, but the headline carries two clauses and reads long). Structure is sound and nothing restates itself.

### 2. Voice Coach — 9.0/10
Axle throughout: dry, actuarial, tables-first, no throat-clearing. "Bexar beat both" and "Sober is the cheapest safety feature in the county" are the kind of lines only this byline writes. Rhythm script passes with a wide margin (variance 1098.9 vs a 200 floor). No banned phrases, no "The" starters, no AI tells. Minor: "Give the good news its proper discount" is slightly self-conscious, but it reads like Axle policing his own arithmetic, which is in character.

### 3. Ethics Reviewer — 9.0/10
No named victims, no sensationalized individual deaths, no blame assigned without data. The article refuses to turn an 11.6% death decline into a victory lap and spends a full paragraph discounting its own good news with the Poisson check. The DUI framing describes crashes involving alcohol and explicitly says the share ratio is not a causal rate.

### 4. Social / Shareability — 8.6/10
Headline is contrast-driven and quotable ("crashed more, killed fewer"). The pull stat (4.06) is abstract, but the DUI pair (3.5% of crashes, 24.2% of deaths) is the shareable hook and it appears twice, including the closer. Best quotable: "3.5 percent of crashes, 24.2 percent of deaths."

### 5. Legal Accuracy — 9.0/10
Every claim traces to a cited, linked source; all numbers verified against the Orsatti compilation and recomputed from the published table rows (lethality figures, share percentages, DUI ratio). The secondary-source chain (law-firm compilation of public TxDOT tables) is disclosed in the disclaimer and in ref-1. Ref-4 links to sa.gov's homepage rather than a specific Vision Zero page, acceptable per the guide's parent-page rule.

### 6. Research Rigor — 8.8/10
Original contribution is real and multi-part: the six-county lethality table, the crash-share vs death-share gap (8.7% vs 5.0%), the DUI 7.0x over-representation ratio, the lethality improvement (4.43 to 4.06), and the Poisson check on the -25 death swing. Limitations and counterargument are stated at full strength, including the exposure-adjustment gap and the 1.7-sigma caveat. Minor: the Travis-at-8.97 comparison leans on raw county tables without exposure data, but the article says exactly that in the discount paragraph. Methodology is transparent (inputs and arithmetic shown in the research file).

### 7. Data Presentation — 8.8/10
Pull stat is the right number (4.06) with the statewide comparator in the label. The six-county comparison is clear in prose; the DUI percentages are the memorable pair. Minor: "deaths per 1,000 crashes" is defined implicitly by the lede's division sentence rather than stated as a definition; a first-time reader gets it from context, but one explicit sentence would have helped.

**Round 0 verdict: SHIP.** All 7 critics at 8.5+, all hard gates pass. Average 8.84.

| Critic | Round 0 |
|---|---|
| General Editor | 8.7 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.6 |
| Legal Accuracy | 9.0 |
| Research Rigor | 8.8 |
| Data Presentation | 8.8 |
| **Average** | **8.84** |
