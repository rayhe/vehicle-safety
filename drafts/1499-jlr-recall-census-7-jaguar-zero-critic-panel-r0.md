# Critic Panel — #1499 JLR recall census — Round 0

**Slug:** 1499-jlr-recall-census-7-jaguar-zero
**Journalist:** Rex Driverton
**Date:** November 13, 2026
**Draft:** drafts/1499-jlr-recall-census-7-jaguar-zero.html
**Hero:** drafts/1499-jlr-recall-census-7-jaguar-zero.jpg

## Hard gates (regex, source of truth)

- **Em dashes:** 0 (max 3) — PASS
- **Banned phrases:** 0 ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Let's be clear", "Make no mistake", "And it's not even close", "The numbers don't lie") — PASS
- **"The" sentence starters:** 2 of 77 prose sentences, 2.6% (max 15%) — PASS
- **CSS class:** `class="story"`, links `../style.css`, no `story-detail`/`story-content`/`story-page`/`story.css` — PASS
- **Hero:** real JPEG ff d8, 1920x1280, 689,221 bytes, hash fbbd8439 — PASS
- **Sentence rhythm script:** variance 964.2 (≥200), short 12.3% (≤15%), long 57.5% (≥15%) — PASS
- **Word count:** 1,616 prose words (excl. references), vs. 1,577 for #1497 and 1,917 for #1498 — in range for the census format
- **Pre-panel fix (caught in self-review, never shipped):** the draft originally stated Land Rover "had to add 84 vehicles in April" for 26V163. The Part 573 states only that a small number of vehicles were added Apr 22 with no count given; the 84 was my arithmetic (582 global total minus 498 US), which is the global-vs-US split, not the April addition. Fixed in both article and research file before the panel ran. A second wording fix in the same pass: "one digit away" for 24V678 vs 26V678 became "nearly identical", matching #1251's phrasing.

## The 7 critics

### 1. General Editor — 8.8/10
Lede lands the thesis in the first sentence (one company, two badges, seven recalls, Jaguar filed none of them) and the pull stat (345,704) is the article in one number. Structure is the series standard and it works: method, the two big campaigns as one story, the five small ones as the more interesting half, per-model counts, the ranking, action, limitations, counterargument. The 99.75% skew is stated three ways (counts, percentages, and the 850-vehicle remainder) without repeating itself. Deductions: the "What to do" paragraph is a single dense block of five VIN checks, the same note as #1496, #1497, and #1498 — a series-wide pattern at this point, not a defect in this draft alone. "Close, but a census counts filings, not feelings" is the kind of line that earns its keep; nothing here needs a revision round.

### 2. Voice Coach — 8.9/10
Rex's register is present and distinct from Clara's consumer anger, Mia's engineering enthusiasm, and Axle's chart-nerd: "One company. Two badges. Seven recalls.", "Gel.", "A census counts filings, not feelings.", "A $110,000 SUV that cannot survive weather gets fixed with a drill." Deadpan, paradox-hunting, no throat-clearing. No banned phrases, two "The" starters in 77 sentences, rhythm script passes with wide margins (variance 964.2). Deductions: "Then the five small ones, which are the more interesting half of the census" tells the reader what to find interesting instead of letting the numbers do it, and "So the two nameplates JLR sells on invincibility..." opens with a filler "So". Both are single-sentence nicks in an otherwise clean Rex voice.

### 3. Ethics Reviewer — 9.0/10
Limitations are stated plainly and specifically (filing census not danger ranking, campaign-units double-count vehicles, snapshot date, 2026-MY scope excludes the 170,169-unit converter recall, injury counts only where verified). Counterargument is granted at full strength and conceded ("All of that is fair, and this article grants it"). No self-congratulation, no victim-blaming (the VIN-check advice targets the manufacturer's own remedy and the NHTSA lookup, and the warning-lamp guidance quotes Land Rover's own engineering analysis). No kids, no real names on public pages. Deduction: none material; 9.0 is the ceiling for a census piece with no human subjects.

### 4. Social / Shareability — 8.9/10
Headline is a clean share hook ("Jaguar Had Zero Recalls in 2026. Land Rover Had All Seven."). Pull stat 345,704 is quotable, and the og:description adds a second hook (99.75% in two campaigns, 850 in the other five) instead of repeating the headline. Shareable nuggets: "A $110,000 SUV that cannot survive weather gets fixed with a drill", "Gel.", "One company. Two badges. Seven recalls." Deduction: the headline's split is the whole hook, so there is no second surprise for a reader who has already seen the headline; acceptable, not a revision trigger.

### 5. Legal Accuracy — 9.0/10
Campaign numbers, dates, populations, and defect estimates all trace to the NHTSA API records and Part 573 reports linked in the references (26V005: 8, label; 26V097: 178, 91 + 87, 100% estimate, 68 claims, 0 injuries; 26V163: 582 total, 498 US, 100% estimate, supplier contamination; 26V263: 6, fuel tank walls; 26V297: 76, 30 + 30 + 16, FMVSS 208; 26V389: 250,857, 97,552 + 83,620 + 69,685, gel remedy, 0 non-deployments; 26V678: 93,997, 2,295 claims, 0 injuries, interim letters Dec 11). Arithmetic verified: 8 + 178 + 582 + 6 + 76 + 250,857 + 93,997 = 345,704; 250,857 / 345,704 = 72.6%; 93,997 / 345,704 = 27.2%; 344,854 / 345,704 = 99.75%; 850 / 345,704 = 0.25%; per-model counts (Range Rover 4, Range Rover Sport 3, Defender 3, Discovery 1, Velar 1) check against the API query mapping. 25V705 filed Oct 16, 2025, is correctly described as missing the 2026 window by about two and a half months. Out-of-scope recalls (26V248, 170,169 units; Discovery camera, 15,535 units) are named with correct model-year ranges. Deduction: 9.0, not 9.5, because the 26V678 100% estimate rests on SlashGear's reading of the filing rather than a direct Part 573 pull, and the 26V389 100% rests on the site's own published clockspring story citing NHTSA D120 rather than a fresh PDF pull in this run. Both are cited; neither is a factual risk, but the paper trail is one step removed.

### 6. Research Rigor — 9.1/10
Original contribution is real: the 7-0 badge split (first shutout inside one company in the series), the skew math (99.75% / 0.25%), the per-model table, the 21-brand ranking with JLR tied at 7, the small-batch manufacturing-escape pattern versus the two design-level defects, and the Defender/Range Rover paradox. Methodology is transparent (48 queries, VPIC canonical list, 400-means-no-rows semantics, dedupe rule, raw JSON saved in drafts). Limitations and counterargument are dedicated paragraphs, not hedges. Verifiability: every number links to an API record, a Part 573 PDF, or named press. Deduction: the cross-brand table's counts come from the series' own research files rather than a fresh re-run of all twenty brands, which is the series' standing practice and is disclosed, but it means the ranking inherits each census's snapshot date. The "84 vehicles" inference was caught and fixed before the panel, which is the process working.

### 7. Data Presentation — 8.7/10
Numbers are presented cleanly in prose: pull stat, per-campaign populations, the campaign-unit vs. distinct-vehicle distinction, the ranking with both the campaign count and the unit total given so the reader sees they disagree. The full census table lives in the research file, consistent with series style (the Genesis and Lucid articles did the same). Deductions: a reader who wants the seven-campaign table in the article itself has to open the research file; the article's prose carries the same numbers, so this is a style choice, not a defect. The "What to do" block would breathe better as two paragraphs.

## Verdict

| Critic | Score |
|---|---|
| General Editor | 8.8 |
| Voice Coach | 8.9 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.9 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.1 |
| Data Presentation | 8.7 |
| **Average** | **8.91** |

All 7 critics at 8.5+ and all hard gates pass. **SHIP.** Round 0, no revision needed.
