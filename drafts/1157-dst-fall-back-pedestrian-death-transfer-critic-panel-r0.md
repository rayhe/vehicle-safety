# Critic Panel — Round 0: 1157-dst-fall-back-pedestrian-death-transfer

**Journalist:** Mia Crumplezone | **Kicker:** The Gap | **Date:** 2026-10-13 (17:30 run)
**Headline:** "Daylight Saving Ends November 1. Drivers Get Safer. Pedestrians Die."

## Hard gates (regex/script truth)
- Em dashes (raw U+2014, body): 0 (max 3) — PASS
- Banned phrases (body list + guide list): 0 — PASS
- "The" sentence starters: 6/51 = 11.8% (max 15%) — PASS
- Sentence rhythm (canonical script): variance 602.6 (≥200) PASS; short 10.0% (≤15%) PASS; long ≥15% PASS — PASS (was failing at 17.0% short on first check; fixed by merging 3 fragment pairs)
- CSS: `class="story"` ✓, `../style.css` ✓, no `story.css` — PASS
- Hero: real JPEG 1920x1280, 417,707 bytes — PASS
- Actionable insights: driver/pedestrian/parent/fleet blocks — PASS
- References + disclaimer sections — PASS

## Scores

### 1. General Editor — 8.7
Timely (DST ends Nov 1, 19 days out), lede carries the bolded key stat, pull-stat placement textbook, closing line lands. Headline is sensationalist-but-true, exactly the site's register. Knock: the rhetorical question "The 150 milliseconds I opened with?" is a slight register break, and the headline runs long for index cards.

### 2. Voice Coach — 8.8
Mia's engineering-forward voice is unmistakable: the 150ms frame, the optical math at 45 mph, "the practical engineering" close. Zero banned phrases, zero AI tells, rhythm gate passes on the canonical script after the fragment merges. Retained punches ("approximately a rumor") keep it hers. Knock: the headlight paragraph's middle sentences drift toward lecture cadence.

### 3. Ethics Reviewer — 9.0
Full-strength counterweight paragraph from the same institute that found the effect; limitations stated as a block, not hedges; duty placed on drivers and infrastructure, never on victims. Actionable without fear-mongering. No self-congratulation.

### 4. Social/Shareability — 8.6
"+13% / -7.1%" pull stat is built for screenshots; the "fatality transfer" frame is quotable; headline is a scroll-stopper. Knock: the IIHS-study-provenance nuance is inside baseball for casual sharers, and the headline is long for social cards.

### 5. Legal Accuracy — 9.0
Every factual claim traces to a cited source; Harkey quotes attributed to the April 10, 2025 Senate testimony; no invented data; disclaimer carries the FARS-period and Arizona/Hawaii caveats. The Journal of Safety Research article is paywalled, so secondary mirrors are cited alongside the IIHS parent topic page — the honest choice, stated nowhere falsely as primary.

### 6. Research Rigor — 8.7
Original contribution present: the transfer frame (no queue article framed the +13%/-7.1% asymmetry as one mechanism moving deaths between road-user classes), the 5-7 p.m. commute-window exposure arithmetic, and the compounding with #963's poor-headlight fleet finding. Limitations block explicit (2010-2019 window vs. 2026 volumes, relative vs. absolute effects, Arizona/Hawaii dilution, ambient-light association vs. causation). Counterargument stated at full strength. Knock: the "dozens of extra deaths" absolute translation from research is rightly left out of the article, but the article offers no bridge from +13% to any 2026-scale intuition at all.

### 7. Data Presentation — 8.8
Pull stat clean and labeled; inline stats each tied to a ref; the net 29/26 decade numbers correctly contextualized against 7,080 annual pedestrian deaths. Knock: the pull-label is wordy and could be two lines.

**Average: 8.79 — all 7 ≥ 8.5, all hard gates pass → SHIP (round 0).**

## Revision note (pre-panel, this run)
The 15:30 draft failed two gates at intake: "The" starters 16.4% (hard gate) and sentence-rhythm short-sentence 17.0% (guide gate). Fixed by: (1) rewording 3 "The"-starting sentences (IIHS expansion, five-week-window effect, clock/disease merge) and (2) merging 3 fragment pairs with colons (schedule change + crosswalk list; "Roughly a wash in total" + "who pays"; closing "Nobody changes their routine" + photons line). Mia's deliberate punches ("The 150 milliseconds I opened with?", "Arizona and Hawaii dilute the national signal.") were kept. No em dashes introduced.
