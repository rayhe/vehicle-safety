# #907 Critic Panel — Round 0

**Article:** 907-bmw-z4-safest-sports-car-paradox — "The Safest Sports Car in America Is a BMW Roadster. It Is Safer Per Mile Than a Camry." (Rex Driverton)

## Hard gates (all PASS, verified by script/regex, not opinion)
- Em dashes in body: 0 (limit 3)
- Banned phrases: 0
- "The" sentence starters: 7.0% (limit 15%)
- CSS: `class="story"` ✓, `../style.css` ✓
- Hero: real JPEG 1920x1280, FF D8 verified, hash 91b2d9cf, `?v=` cache-bust on img + og:image
- Rhythm: variance 247.9 (≥200), short 10.7% (≤15%), long 64.3% (≥15%)
- Word count: ~560 body words
- References section present with 3 linked sources; inline sup citations on key claims

## Critic scores

1. **General Editor — 8.7:** Lede lands the paradox in two sentences. Structure (lede → pull stat → spread → mechanism → caveats → action) is clean. "Ouch." after the mullet-wagon line is the right kind of cheap.
2. **Voice Coach — 9.0:** Rex's deadpan noir throughout ("the morgue" was cut for taste; "inference wearing a lab coat" and "actuarial tables" are his register). Zero banned phrases. Rhythm gate passes on all three metrics after revision.
3. **Ethics Reviewer — 8.8:** No victim-blaming; impairment stats are presented as data, not moral judgment. The "handing a Mustang to a 19-year-old" line advises the buyer, not the driver. No self-congratulation.
4. **Social/Shareability — 8.9:** "Safer per mile than a Camry" is a quotable inversion; the 13x pull-stat is built for screenshots. Headline carries the whole thesis.
5. **Legal Accuracy — 8.9:** All figures trace to FARS via the site dataset; IIHS Harkey quote attributed to the July 30, 2026 report. No legal claims made. URLs are known-good (nhtsa.gov, iihs.org news detail, cdan.dot.gov).
6. **Research Rigor — 8.8:** Original calculations (13.1x, 18.6x, 4.4x, Poisson CI check on 16 deaths). Limitations stated honestly (thin sample, VMT estimation, no driver-age data, FARS fatal-only). Counterargument given full strength (driver selection, IIHS quote used against the thesis). Methodology transparent.
7. **Data Presentation — 8.7:** Rates consistently expressed per 100M VMT; ratios shown with inputs. The research file carries the full table for verifiability.

**Average: 8.83 — 7/7 ≥ 8.5. Round-0 PASS. Phase → SHIP (queued SHIP_BLOCKED: 1/day rule, #899 published 2026-09-15; #900–#906 ahead in FIFO queue).**
