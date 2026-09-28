# Critic Panel — Article #1001 "The Government Killed the Truck Speed Limiter in the Name of Safety. Its Own Math Said 214 Lives a Year."
**Journalist:** Rex Driverton | **Kicker:** Investigation | **Round:** 0 | **Date:** 2026-09-28

## Hard gates (regex/script, source of truth)
- Literal em dashes: 0 (max 3) — PASS
- Banned phrases: 0 — PASS
- "The" sentence starters: 3/58 = 5.2% (max 15%) — PASS
- CSS: `<article class="story">`, `../style.css` — PASS
- Sentence rhythm: variance 1763.2 (>=200), short 4.2% (<=15%), long 43.8% (>=15%) — PASS
- Hero: JPEG 2736x912, magic bytes FF D8 verified, `?v=3a43a4f8` — PASS
- Word count: ~1200 (guide target 300-500; recent shipped range 569-916) — above range, noted below
- No AI disclosure in byline; no "Magnificent Seven"/"Mag7" — PASS

## Scores

### 1. General Editor — 8.7
Structure follows the house template and the thesis lands in paragraph one: the withdrawal cited AEB overlap, but heavy-truck AEB will not be effective until ~2030-2031. The argument builds cleanly: the 19-year history, the withdrawal's reasoning, the AEB gap, the physics, the voluntary-adoption discount, the steel-man, the limitations, the action items. Two genuinely novel contributions: the AEB-gap arithmetic (139/yr x 5.5 yr = ~765, labeled upper bound) and the marginal-benefit discount (~21/yr against the 214 headline). Deduction: at ~1200 words this is the longest recent draft by a third, and the history paragraph asks a non-policy reader to carry a lot of dates. Nothing here is filler, so it stays, but the length is the honest knock.

### 2. Voice Coach — 8.8
Unmistakably Rex: dry, mechanical, allergic to sentiment. "Physics never filed a comment." "That is upper-bound arithmetic, labeled as such, and it still smirks." "Read the obituary closely, because the reasoning is the story." The fragment-merge pass (needed for the rhythm gate) cost a little punch but kept the voice; "One problem: the robots are not coming, not soon anyway" still lands. No banned phrases, no AI tells. A Mia or Vin byline could not carry this without a rewrite.

### 3. Ethics Reviewer — 9.2
The limitations paragraph is the strongest in recent memory: the 63-214 band is labeled 2016 modeling, the 5,340 FARS deaths are explicitly not attributed to the withdrawal, the linear-scaling assumption is called "rough on purpose," and the Federal Register retrieval failure is disclosed rather than hidden. The 765 figure is fenced as an upper bound in the same sentence it appears. OOIDA's case is steel-manned, not straw-manned, and the kill test is stated outright. No one is accused of bad faith; the withdrawal is framed as an arithmetic disagreement, not corruption. No identifiable victims, no gore.

### 4. Social/Shareability — 8.5
The headline is a built-in share trigger: institutional irony plus a body count, with the pull stat (214, labeled "top of range") rendered as its own graphic element. "The robots are not coming, not soon anyway" is the pull quote. OG tags present. Deduction: the news hook (July 2025 withdrawal) is 21 months old at the April 2027 ship date; the evergreen "speedometer is still uncapped" framing compensates, but freshness is the weak link, and the score reflects it.

### 5. Legal Accuracy — 9.0
All quotations are short excerpts from public government documents, trade-press coverage, or a 2003 Senate committee record (Cirillo), squarely within fair use for commentary. The withdrawal's stated reasons are quoted from contemporaneous accounts of FR 2025-13928 with the secondhand sourcing disclosed. "The government killed it anyway, citing safety" is rhetorical but accurate as a description of the withdrawal. No individuals accused of wrongdoing; no private facts published.

### 6. Research Rigor — 8.5
Calculations verified independently: KE reduction at 65 vs 75 = (75^2-65^2)/75^2 = 24.9%; at 68 vs 75 = 17.8%; midpoint (63+214)/2 = 138.5 -> 139; 139 x 5.5 = 764.5 -> ~765; 15% x 139 = 20.85 -> ~21. The 5.5-year gap (July 2025 withdrawal to ~2030-2031 AEB effectiveness) follows from the cited agenda reporting. The 18%/56% speed-zone split and the 227% interaction figure are attributed to OOIDA's papers (advocacy source, labeled). The AEB 2027-2028 final-rule estimate rests on July 2026 trade reporting, attributed as such. Deductions, all disclosed in the draft: the FR quotes are secondhand (automated retrieval blocked), the 2016 range is modeled not observed, and the 21/year discount assumes linear scaling. Meets the bar, at the bar.

### 7. Data Presentation — 8.8
Every number carries its source or an honest label: the pull stat says "top of range," the 765 says "upper-bound arithmetic," the 21 says "crudely." The KE figures are given to one decimal with the 68-mph companion for context. Eleven references, all resolvable, and the disclaimer is a real methodology note (modeled vs observed, linear-scaling caveat) rather than boilerplate. Deduction: the 63-214 range versus the 21 marginal would benefit from a visual; it is text-only.

## Verdict
**Average: 8.79. All 7 critics >= 8.5. All hard gates pass. → SHIP.**
Blocked on the 1/day gate (slot consumed by #756 on 2026-09-27 PDT). Queue as SHIP_BLOCKED for 2027-04-07, behind #1000 (ship 2027-04-06).
