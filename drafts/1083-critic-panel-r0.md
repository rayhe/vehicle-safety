# Critic Panel — #1083 "NHTSA Wants Your Ideas on Recalls. It Just Won't Let You Watch." (Round 0)

## Hard gates (regex-verified, not opinion)
- Em dashes in body: 0 (max 3) — PASS
- Banned phrases: 0 — PASS
- "The" sentence starters: 4/38 = 10.5% (max 15%) — PASS
- CSS: `article class="story"`, links `../style.css` — PASS
- Sentence rhythm (sentence-rhythm-check.py): variance 380.5 (≥200) PASS; short 12.5% (≤15%) PASS; long 59.4% (≥15%) PASS — PASS
- Hero: real JPEG (FFD8), 1920x1280, hash 2bb43633 — PASS
- Body word count: 727

## Critic scores

### 1. General Editor — 8.8
Structure is clean: kicker, headline, lede, pull stat, eight body paragraphs, references, disclaimer. The arc builds from the hook (you cannot watch) through the asymmetries to the math to the honest defense. Minor deductions: the lede bolds a non-stat ("You cannot watch it.") where the house style bolds a key stat; the two-sentence headline is punchy but slightly tabloid for a policy story. A policy story on a crash-data site is off the usual beat, but the Existential Dread kicker earns the slot.

### 2. Voice Coach — 8.9
Unmistakably Vin Wreckage. "A meeting about the unreachable, unreachable to the unreachable" and "the institution gets the sealed envelope and the citizen gets the photocopier" are lines no other byline on this site would write. Sentence rhythm passes with real variance (fragments to 90-word sprawls). Zero banned phrases, zero em dashes. You cannot swap this byline onto Clara or Rex without rewriting. Small deduction: "Do the fleet math" is a workmanlike transition that any of the data bylines could own.

### 3. Ethics Reviewer — 9.0
Fair to its target. The piece punches at an institution, not people, and grants NHTSA its strongest defense at full strength (candor needs closed rooms; the docket is open; the typo is probably a typo). No victims, no exploited grief. The actionable close serves readers rather than the publication. No self-congratulation.

### 4. Social/Shareability — 8.6
Headline is highly quotable and the pull stat (29.2M) travels well. "The meeting about the unreachable is unreachable to the unreachable" is the pull quote. Deduction: policy-process stories share worse than crash stories; the audience came for crash data. The actionable close (VIN check, docket comment) gives it a second life as a utility piece.

### 5. Legal Accuracy — 8.8
FR Doc. 2026-19712, docket NHTSA-2026-2014, 49 CFR part 512, meeting date/time/venue all cited via The Auto Wire's reporting with a parent-page link to federalregister.gov per the no-invented-URLs rule — honest about the sourcing chain. "Most likely a one-day typo rather than a conspiracy" avoids overclaiming. The 282M registration figure rides on BTS via prior site research. Deduction: the FR Doc details were not verified against the primary document directly; the piece is transparent about this, but a primary read would be stronger.

### 6. Research Rigor — 8.7
Original contributions: fleet-ratio math (29.2M/~282M ≈ 1 in 10), the 5.8M illustrative non-completion sizing, the comment-window asymmetry (30 days to comment on material only the room saw), the procedure asymmetry (sealed envelope vs. photocopier), and the Oct 28/29 deadline mismatch. Limitations stated in a dedicated paragraph. Counterargument given at full strength, not strawmanned. Methodology shown (inputs and assumptions for the 5.8M figure). Deductions: the 282M registration figure is inherited from prior internal research, not re-verified this run; the completion-gap arithmetic is illustrative by design, which is fine but caps the score.

### 7. Data Presentation — 8.8
Pull stat (29.2 million) with a proper pull label attributing it to NHTSA's own notice. The 5.8M figure is explicitly labeled illustrative in both the paragraph and the limitations section — no false precision. The "1 in 10" ratio is derived with inputs shown. Deduction: the pull label could note the figure includes equipment/tire campaigns; that caveat lives in the limitations paragraph instead.

## Verdict
Average: 8.80. All 7 critics ≥ 8.5. All hard gates pass. **VERDICT: SHIP.**
No revision round needed. Proceed to SHIP phase: assign ship_date, append to queue as SHIP_BLOCKED.
