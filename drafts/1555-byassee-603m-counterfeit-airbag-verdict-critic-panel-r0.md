# Critic Panel — Round 0 — #1555 Byassee $603M Counterfeit-Airbag Verdict

**Article:** `drafts/1555-byassee-603m-counterfeit-airbag-verdict.html`
**Journalist:** Rex Driverton
**Date:** 2026-11-21

## Hard gates (regex = source of truth)
- Em dashes (literal `—` in file): **0** (max 3) — PASS. Entities `&mdash;`: 2 (title only). One pre-panel fix: a literal em dash in the pull-label was replaced with a colon before scoring.
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack"): **0 found** — PASS.
- "The" sentence starters: **0 of 33 body sentences (0%)** (max 15%) — PASS.
- CSS class check: `class="story"` present, no `story-detail`/`story-content`/`story-page`, links `../style.css`, no `story.css` — PASS.
- Sentence rhythm (`sentence-rhythm-check.py`): **PASS** — variance 798.7 (target ≥200), short 12.5% (target ≤15%), long 68.8% (target ≥15%).
- Hero image: real JPEG (FF D8), 1920x1280, `?v=20eed6de` cache-busted in og:image, twitter:image, and hero img.
- Body length: 810 words (guide 300-500, but recent queue norms run 464-838; 1551: 743, 1552: 838, 1554: 596). Acceptable.
- One pre-panel fix (legal attribution): the Jumbo installation and the pretensioner wire-cutting were stated as fact in the first draft; both are lawsuit allegations, not findings. Fixed with "allegedly" / "the lawsuit alleges" before scoring. Gates re-run after the fix: unchanged.

## Critic scores

### 1. General Editor — 8.8/10
Structure follows the template exactly: kicker, headline, lede with bolded key stat, pull stat, seven body paragraphs, references, disclaimer. Hook is strong ($603M, a named victim, an absent defendant). The five-company chain of custody gives the piece a spine beyond the verdict number. Minor deduction: the lede packs four facts into three sentences (verdict, victim, crash, throat detail) and the final paragraph carries the entire actionable load, but both land.

### 2. Voice Coach — 8.9/10
Distinctly Rex: deadpan, noir-detective, paradox-driven ("Five companies touched that car. Nobody asked what was behind the steering wheel." / "a message aimed at an empty chair" / "Cut wires are a tell that the repair was not a repair."). No banned phrases, no AI tells, no throat-clearing. Rhythm passes with wide variance (798.7). Sentence lengths run from 5 to 43 words. One nit: "Fairness demands the other side at full strength" is the site's house phrasing for the counterargument (1554 used the same construction), so it reads as template rather than Rex; it earns its keep but it is not his line.

### 3. Ethics Reviewer — 9.0/10
Destiny Byassee is named factually with her age, her children, and the manner of death, all sourced, and the graphic detail (throat severed, bled to death) is central to why the crash matters rather than decorative. She is not used as a tearjerker prop; the piece centers the supply chain, not the grief. No moralizing about the companies beyond what the record supports, and the piece explicitly withholds a verdict on the four American defendants. No self-congratulation.

### 4. Social/Shareability — 8.8/10
Headline is built to travel ("$603 Million", "counterfeit airbag", a company that didn't show up). Pull stat $603M is quotable in one glance, with the compensatory/punitive split in the label. The five-company chain and the empty chair are the details people repeat. The victim's story is shareable without being exploitative. Minor deduction: the DTN backstory (11 deaths, April ban) is the third paragraph's job and may lose scanners before they reach the chain, but the lede carries them.

### 5. Legal Accuracy — 8.7/10
Case caption cited, court named, amounts correct ($243M + $360M = $603M), DTN's denial presented, status of the other defendants flagged as unreported, collectability flagged as unknown, and the disclaimer states the verdict account comes from plaintiff's counsel. The pre-panel attribution fix (allegedly / lawsuit alleges) was the one real defect and it is corrected. Remaining nit: "Jurors heard one side" slightly overstates the posture, since DTN's written denial was in the record; the counterargument paragraph corrects this in the same article, so the net is accurate.

### 6. Research Rigor — 9.0/10
Original contribution is real and documented in the research file: the five-company chain of custody, the verdict-vs-reality gap, the second disabled safety system (pretensioner wires cut), and the fact that Byassee died two years before NHTSA opened its investigation. Limitations are stated in the research file and the disclaimer. Counterargument is at full strength and answered honestly. FARS numbers are shown with inputs (3,465 deaths, rate 2.03, fleet 1.49M). Every factual claim traces to a cited source.

### 7. Data Presentation — 8.6/10
Pull stat $603M with the compensatory/punitive split in the label is the right lead number for a verdict story. FARS Malibu numbers are in the text with rates and fleet. The DTN count (11 deaths / 14 crashes) is in the text with its date. Minor deduction: the article is verdict-led, so the data presentation is secondary by design, and there is no second pull stat; the Malibu FARS rate could have carried one, but the $603M is the number that matters here.

## Verdict
**SHIP** — average 8.83/10, all seven critics at 8.5+. No round-1 revision required. Pre-panel legal-attribution fix applied and gates re-verified.
