# Critic Panel — #1126: GM Builds the Same Truck Twice. The Cheap Badge Kills 24% More Per Mile. (Round 0)

**Journalist:** Clara Rollover | **Kicker:** The Gap | **Ship date:** 2027-08-10

## Hard Gates (regex = source of truth)
| Gate | Result |
|------|--------|
| Em dashes (literal) | 0 (max 3) PASS |
| Banned phrases | 0 hits PASS |
| "The" sentence starters | 4.2% (max 15%) PASS |
| CSS class | class="story", ../style.css, no story-detail/content/page, no story.css PASS |
| Sentence rhythm | variance 709.4 (>=200), short 7.4% (<=15%), long 44.4% (>=15%) PASS |
| Hero image | real JPEG 2048x1152 (FF D8), ?v=81fcfbb0, 3 hash refs PASS |
| Story body words | 542 (guideline 300-500; within shipped range 479-916) PASS |

## 1. General Editor — 8.8
Hook lands hard ("9,591 bodies," "Chevy sold fewer trucks and buried more people"), the comparison structure holds a clean arc (claim -> twin reveal -> excuses die -> buyer theory -> caveats -> action), and the pull stat is the article's thesis in six characters. Deductions: the Ram side-note is a fun aside but slightly dilutes the twin focus, and the lethality-per-crash paragraph is the densest read in the piece. Not round-worthy; ship.

## 2. Voice Coach — 9.0
Rhythm PASS on all three metrics. Zero banned phrases, zero literal em dashes. Distinct Clara voice: forensic, dry, numbers-first, conversational asides ("Park the two side by side," "A side note for your group chat") that the other journalists don't use. Lines like "Same steel, same booze, same old trucks" and "GM doesn't build two different trucks; it sells the same truck to two different lives" are unmistakably hers. Minor: the merged long sentences in the caveats paragraph are the piece's heaviest, but they carry required rigor content.

## 3. Ethics Reviewer — 8.7
Does not blame drivers or glorify the killing; the actionable advice is genuinely useful rather than moralizing. Treats work-truck buyers as a data population, not a punchline — the counterargument gives their exposure theory full strength. "Buried more people" is grim but honest, not sensationalist beyond the data. No vulnerable-group targeting.

## 4. Social/Shareability — 9.2
Truck-war tribalism is the highest-shareability fuel on this site and this piece pours it on: "GM doesn't build two different trucks; it sells the same truck to two different lives" is the pull quote. The 15.7%/15.7% identical-alcohol stat is a ready-made screenshot. The Ram aside gives Ford and Ram partisans a reason to engage. Strong viral surface.

## 5. Legal Accuracy — 8.8
Four real, checked references: FARS parent page, GM Authority (T1 platform quote), MotorTrend (badge-engineering/trim-mix quote), IIHS size/weight. The demographic mechanism is explicitly labeled inference, not fact. The VMT uncertainty caveat prevents overclaim. No defamation exposure — all claims are product-data comparisons, never accusations against named individuals.

## 6. Research Rigor — 9.1
Original contribution is real: the twin-badge rate gap (1.25 vs 1.01, ratio 1.238) with platform twinship, the identical-alcohol finding (15.7/15.7), the model-year shape match ruling out the old-fleet excuse, and full-size-segment lethality per crash. Limitations are stated as a dedicated paragraph with the ±15% VMT honesty including the worst-case reading. Strongest counterargument (exposure theory) gets full strength and is not dismissed. Methodology shows inputs. The one soft spot is acknowledged in the piece itself.

## 7. Data Presentation — 8.8
Units are clear everywhere (deaths per 100M miles, deaths per 1,000 vehicles, percentages with sample sizes implied by "n=23,675" in research). The sales-based ratio as a VMT-free robustness check is exactly the right secondary normalization. Could use a small comparison table for the segment, but the prose table works. Numbers trace to fars_output.js.

## Verdict
**Average: 8.91. All 7 critics >= 8.5. All hard gates PASS. → SHIP.**
