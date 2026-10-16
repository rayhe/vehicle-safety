# Critic Panel — Article #1180: "404 Million Miles, Three Dead, and the Code Says THIS IS NOT A PRODUCT"
**Journalist:** Vin Wreckage | **Round 0** | Date: 2026-10-15
**Files:** drafts/1180-comma-openpilot-federal-probe.html, drafts/1180-comma-openpilot-federal-probe.jpg

## Hard gates (regex, source of truth)
- Em dashes: 0 (max 3) — PASS
- Banned phrases: 0 — PASS
- "The" sentence starters: 12.2% (max 15%) — PASS
- CSS: `class="story"` ✓, `../style.css` ✓, no story-detail/story-content/story-page ✓ — PASS
- Sentence rhythm script: variance 246.8 (≥200) ✓, short 7.7% (≤15%) ✓, long 43.6% (≥15%) ✓ — PASS (exit 0)
- Hero: real JPEG (FF D8), 2048x1152, no text overlay — PASS
- References section: 5 entries, all URLs verbatim from search results — PASS
- Actionable insights: present (stopped-traffic protocol, fork disclosure, insurer call, docket watch) — PASS

## 1. General Editor — 8.7/10
Structure is textbook Crash Report: kicker, headline, bolded-stat lede, pull stat, four body movements (the probe, the engineering, the forks, the FARS blindness), action block, limitations block, references. Headline is the strongest asset — it contains the whole paradox. Deduction: the lede's second sentence runs 33 words and carries three ideas (toll, crash shape, GitHub disclaimer); it works but the "THIS IS NOT A PRODUCT" payoff lands softer than the headline promises because the reader already saw it up top. Minor.

## 2. Voice Coach — 8.6/10
Distinctly Vin: "the engineering reason is almost poetic," "Good luck assigning blame when the steering wheel was being shared by two robots and a sleeping human," "Funny how that works," "Sit with that for a second." No banned phrases. Rhythm gate passes with real variance (fragments + 66-word monsters). Deduction: "Here's the part that should bother readers of this site specifically" is throat-clearing adjacent to the banned "Here's the thing" family — kept because it earns its keep as a section pivot, but it's the weakest line in the piece. No swap-test failure: Rex couldn't have written the "philosophy problem" paragraph.

## 3. Ethics Reviewer — 9.0/10
No self-congratulation, no invented victims, no pre-judgment of comma's liability. The sleeping-driver fact is reported, not moralized. The piece explicitly refuses to declare a defect ("NHTSA has not found a defect" appears twice, in body and disclaimer). The fork discussion avoids blaming open-source as a concept. Clean.

## 4. Social/Shareability — 9.0/10
Three quotable lines: "Open-sourcing the steering wheel turns out not to open-source the liability," "We are counting the dead with instruments that cannot see the machines doing the driving," and the headline itself. The 82 mph pull stat is a scroll-stopper. High share potential in both car and tech circles.

## 5. Legal Accuracy — 8.8/10 (revised up from 8.6 after fix)
Every load-bearing claim is sourced: PE26007 date/scope (ODI resume), crash counts and the "may not have adequately detected" quote (ODI), fork-evaluation policy (resume via Auto Wire), "THIS IS NOT A PRODUCT" (GitHub repo), Louisiana/Missouri crash details (Electrek/Auto Wire). Fix applied in r0: comma's "404M miles / second behind Tesla" marketing now explicitly flagged "by the company's own count" so it can't read as independent verification. Remaining softness: none material. No defect is asserted; the PE process is described accurately (can close, escalate, or lead to recall push).

## 6. Research Rigor — 8.8/10
Original contribution: the FARS-blindness finding — a decade of fatal crash data with no ADAS/aftermarket-automation field, making these five crashes structurally invisible in the site's own dataset, with SGO reports as the only federal window. That's a genuine novel cross-tab (of absence). Limitations get a dedicated section, not hedging: FARS predates the crashes, engagement confirmed in only "multiple" not all five, fork attribution unresolved, no defect found. Counterargument stated at full strength (404M miles vs 5 crashes, alert-driver fine print, asleep driver as misuse). Verifiability: all five references hyperlinked with verbatim URLs.

## 7. Data Presentation — 8.7/10
Pull stat (82 mph) is perfectly contextualized — speed + vehicle + outcome + cause in two lines. Counts (5/3/11, 30,000, 404M, 11,400 forks, $999) are each introduced with their denominator or source. The FARS Accord (7,102) / RAV4 (897) counts live in the research notes; the article correctly keeps them out since they'd imply a causal link the data can't support. Deduction: the piece could have shown the per-mile math on comma's 404M claim, but doing so would launder a marketing number into analysis — the restraint is correct.

## Verdict
- Scores: 8.7, 8.6, 9.0, 9.0, 8.8, 8.8, 8.7 → **average 8.80/10**
- All 7 ≥ 8.5 ✓ | All hard gates pass ✓
- **CRITIQUE PASS at round 0 → phase SHIP**
