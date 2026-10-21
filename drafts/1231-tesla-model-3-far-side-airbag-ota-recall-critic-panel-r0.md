# Critic Panel — #1231: Tesla Model 3 far-side airbag OTA recall (round 0)

**Article:** drafts/1231-tesla-model-3-far-side-airbag-ota-recall.html | **Journalist:** Mia Crumplezone

## Hard Gates (regex = source of truth)
- Em dashes in body text: 0 (max 3) — PASS
- Banned phrases: 0 — PASS
- "The" sentence starters: 5/63 = 7.9% (max 15%) — PASS
- CSS: `class="story"`, `../style.css` linked, no story.css / story-page / story-content / story-detail — PASS
- Hero: real JPEG, JFIF, 1920x1280 — PASS
- References block: `<section class="story-references">` with 5 numbered refs, all URLs verbatim from search results — PASS
- Actionable takeaways: VIN lookup + software version + install-today guidance — PASS

## 1. General — 8.8
Structure holds: kicker, headline, bolded key stat in lede, two pull stats, limitations, counterargument, references, disclaimer. Headline does real work ("nobody visited a dealer" is the story). Body 898 words vs the guide's 300-500 target; dinged lightly, but 1228 (962) and 1230 (838) shipped in this range, so the deviation matches site precedent rather than sloppiness.

## 2. Voice (Mia Crumplezone) — 8.7
Technical but accessible throughout: the pole-test numbers, the 3.0 kN = 306 kg conversion, the deployment-calibration-vs-hardware distinction. Genuinely engaged with the physics ("a beautiful piece of engineering", "grand piano dropped sideways"). Opinions present, not both-sides mush ("should make every safety engineer sit up", "keeps me up"). "Let's talk about what the far-side airbag actually does" matches her catchphrase-opening cadence. Not swappable with Rex's deadpan or Dale's sports-stats register.

## 3. Ethics — 9.0
Every hard claim attributed. Limitations and counterargument sections present and honest. No kids' names. Actionable advice is qualified (covered regions only, verify via Tesla VIN lookup). The type-approval paradox is framed as a question, not an accusation.

## 4. Social — 8.5
Headline is the shareable unit and carries the whole story in one line. Kicker "Trend Watch" fits Mia's beat. Hero alt text is descriptive for accessibility. OG tags present in head. Passes, barely, on the strength of the headline alone.

## 5. Legal — 9.2
No defamation surface: all defect claims cite the EU Safety Gate alert, KBA, and Auto Plus. "Failed it" tracks the regulator's own finding. Tesla's position (no crashes, OTA remedy) is represented. Musk's terminology complaint from the 2023 FSD recall is used only as context for OTA-recall norms, not as new allegation.

## 6. Rigor — 8.8
Five sources; every URL copied verbatim from search-tool output (no invented links). The 114,473 vs 131,726 filing discrepancy is flagged in limitations rather than smoothed over. FARS limitation stated explicitly (no EU coverage, no restraint-causation granularity). Software build numbers caveated as press-reported. The "grand piano" line is clearly marked as an analogy (3.0 kN is the precise claim; the piano is color).

## 7. Data Presentation — 8.6
Two pull stats, both sourced: 3.0 kN pole-test limit, 131,726 vehicles (with the Germany 12,680 breakout in the lede-adjacent pull label). Force conversion (306 kg) is correct for 3.0 kN under standard gravity. Inline superscript refs after each key claim. Ding: the "roughly the weight of a grand piano" aside could mislead by a factor of ~1.5 depending on the piano; it stays because it is framed as "roughly" and the exact figure sits beside it.

**Verdict:** 7/7 critics >= 8.5, all hard gates pass. Round 0. → SHIP.
