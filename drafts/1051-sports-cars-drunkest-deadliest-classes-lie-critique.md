# Critic Panel — #1051: Sports Cars Are the Drunkest, Deadliest Class on the Road. Your Sports Car Probably Isn't.

**Journalist:** Dale Impactor III | **Kicker:** By The Numbers | **Round:** 0 | **Date:** 2026-10-02

## Pre-panel fixes (applied before scoring)

1. **Rhythm repair:** draft failed the sentence-rhythm gate (short_pct 32.7% > 15%) and the The-starter gate (16.1% > 15%). Merged 10 short fragments into longer constructions; reworded 6 The-starters. Post-fix: variance 372.7, short 10.8%, long 54.1% (PASS); The-starters 7.9% (PASS).
2. **Methodology correction:** draft originally used unweighted mean-of-model-rates for class fatality rates (sports car 1.95). Corrected to VMT-weighted class rates (sports car 2.80, 5.2x the SUV rate), the epidemiological standard, consistent with the model-level sample's fleet≥50k filter. Class-level correlation recomputed: r = 0.912 (was 0.936). All in-article numbers, the og:description, and the research file updated. The correction strengthens the finding.

## Hard gates (mechanical, post-fix)

| Gate | Result |
|---|---|
| Em dashes (literal —) | 0 (max 3) PASS |
| Banned phrases | 0 PASS |
| The-starters | 7.9% (max 15%) PASS |
| CSS: class="story" / ../style.css | PASS |
| Sentence rhythm | variance 372.7 / short 10.8% / long 54.1% PASS |
| Hero JPEG valid (FF D8, 1920x1280) | PASS, ?v=d33b8740 |
| Actionable insight present | PASS |

## Critic scores

### 1. General Editor — 9.0
Hook lands in the lede's final clause ("the conclusion is also wrong") and the piece never lets go. Structure is clean: the lying chart, the model-level reversal, the within-class proof (Veloster/Corvette inversion), the named fallacy, the steelman, the limitations, the actionable close. The pull stat (-0.008) is one of the strongest this desk has run. Deductions: the chocolate/Nobel and storks/babies examples are the two most overused ecological-fallacy illustrations in existence; they work, but a fresher pair would have earned the half point back.

### 2. Voice Coach — 9.0
Unmistakably Dale: sardonic, statistical, treats toxicology like sports stats ("the statistical equivalent of a slam dunk", "turns into an airball"). Metaphors stay in-voice throughout (trench coat, bar tab nobody wants to claim, collapse like a bad alibi, demographics wearing a fender badge). Catchphrase opener adapted without the em dashes. No banned phrases, no AI tells, rhythm gate passes with real variance. Could not swap this byline with Rex or Clara without a rewrite.

### 3. Ethics Reviewer — 9.0
No moralizing about impaired drivers; they are treated as data points, which is the desk's remit and the honest frame. No self-congratulation. The limitations are genuinely honest (any-BAC->0 definition, cannabis metabolite persistence, fatal-only sample). The actionable advice is sound and doesn't overclaim. Minor: "priced your Corvette accordingly" assumes the reader's car; harmless.

### 4. Social/Shareability — 9.0
The -0.008 pull stat is a superb share trigger: a single number that overturns intuition. Headline paradox ("drunkest, deadliest class... your car probably isn't") creates the curiosity gap without clickbait lying. The Veloster/Corvette inversion is a strong "did you know" payload for quote-tweeting. Loses a point only because statistical-fallacy explainers have a ceiling with general audiences.

### 5. Legal Accuracy — 9.0
All four references are real, checkable sources: NHTSA FARS (with the exact extract and computation method documented), IIHS fatality statistics topic page, the NSC H1-2026 analysis via its published URL, Wikipedia for the ecological-fallacy concept. No persons named, no defamation surface. Computed claims (both correlations, class aggregates) are reproducible from fars_output.js in the repo. "Insurers already price this in" is general industry knowledge, not a factual claim about a named company.

### 6. Research Rigor — 9.2
Genuine original contribution: the model-level vs class-level correlation comparison has not been run on this site (verified against the queue). Methodology is fully stated (Pearson r, n=262 models with ≥200 drivers and fleet≥50k; VMT-weighted class rates). Counterargument stated at full strength (n=5 joke sample; pure-demographics alternative that would dissolve the paradox into a census table). Limitations are specific, not boilerplate. The VMT-weighting self-correction during drafting is documented rather than hidden. Deduction: the class-level n=5 means the 0.91 should be read as suggestive, which the piece does say, but a confidence interval would have been the fully rigorous move.

### 7. Data Presentation — 8.8
Key numbers are contextualized, not dumped: 5.2x vs SUV, 4.4-point impairment gap, n=262 vs n=5 sample sizes stated. The pull stat is the right number in the right place. The Veloster/Corvette/Mustang/Camaro within-class table-in-prose is readable. Deduction: a small inline class table would serve skimmers better than the prose ranking; the research file has it, the article doesn't.

## Verdict

**SHIP** — mean 9.00, all 7 critics ≥ 8.5, all hard gates pass. Round 0.
