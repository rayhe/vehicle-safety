# Research: #873 — America's Safest Pickup Is a Spreadsheet Error

**Slug:** ram-1500-safest-pickup-spreadsheet-error
**Journalist:** Axle McScatter (Data Visualization Editor)
**Kicker:** By The Numbers
**Date:** 2026-09-10

## Angle (1-2 sentences)

The Ram 1500's published fatality rate of 0.13 deaths per 100M VMT — the lowest of any full-size pickup, 8x better than the Ford F-150 — is a bookkeeping fiction: FARS codes the same trucks under two makes ("Dodge RAM" through MY2019 and "Ram 1500" from MY2013), and this site's own pipeline assigned the full 4.2M-vehicle Ram fleet to both rows. Combine the split rows and the true rate is 0.91 — right in the middle of the full-size pack, exactly where physics says it belongs.

## Kill test

- Newsworthy: YES. A 7x rate artifact on America's #3-selling pickup, visible in any per-model FARS ranking. Anyone citing the site's (or any FARS-derived) per-model rate table would crown the Ram 1500 impossibly safe. Data-integrity story with a concrete corrected number.
- Novel: YES. No outlet has published the combined 0.91 correction or identified the FARS dual-coding pattern. The site's own pipeline comment (`('Dodge', 'RAM'): 480000, # older FARS entries before Ram was separate make`) states the assumption the data disproves — FARS kept coding "Dodge RAM" through MY2019, a decade after the split. The same artifact hits the Grand Caravan (1.33 + 0.23 -> 1.56 combined). Self-critical: this is our own table being wrong, and we're fixing it in public.
- Axle-appropriate: methodology piece, denominator forensics, tables. Proceed.

## Original computations (the novel contribution)

From FARS_BY_MODEL (337 nameplates, FARS 2014-2023; fleet = annual sales x 8.75, VMT = fleet x class-average miles):

**The Ram split (identical denominator on both rows):**

| Row | Deaths | Crashes | Fleet | VMT | Rate |
|---|---|---|---|---|---|
| Dodge RAM | 4,407 | 10,110 | 4,200,000 | 56,700 | 0.78 |
| Ram 1500 | 714 | 2,095 | 4,200,000 | 56,700 | 0.13 |
| **Combined** | **5,121** | **12,205** | **4,200,000** | **56,700** | **0.91** |

- Model-year spans overlap: Dodge RAM covers MY1994-2019; Ram 1500 covers MY2013-2023. FARS coded post-rebrand trucks under both makes for seven model years (2013-2019).
- Mechanism in the pipeline's own code (`fars_process.py`): `('Dodge', 'RAM'): 480000` and `('Ram', '1500'): 480000` — the same 480k/yr sales estimate, hence the same 4.2M fleet, assigned to both rows. The Dodge-row comment says "older FARS entries before Ram was separate make" — wrong, per the MY2019 tail.
- The 0.13 made the Ram 1500 the lowest-rate full-size pickup in the dataset. Peers: Silverado 1.25, F-150 1.04, Sierra 1.01, Tundra 0.94, Titan 0.57. Combined 0.91 slots exactly into the pack.
- Second instance of the same artifact: Dodge GRAND CARAVAN (1,782 deaths, 1.33) + Dodge CARAVAN/GRAND CARAVAN (313 deaths, 0.23), same 1,137,500 fleet -> combined 2,095 deaths, **1.56**. The slash-variant row was hiding 313 deaths.

**Why FARS dual-codes:** the NHTSA FARS coding manual specifies vehicle make/model are taken from the accident report and verified against state registration data, with registration data taking precedence on inconsistency. After the Ram brand split (deed official Oct 5, 2009; 2011 model year per Wikipedia), registrations say "Ram" while crash reports still say "Dodge" — so both codings persist in the data indefinitely.

## Thesis

Per-model FARS fatality rates are only as trustworthy as the make/model coding underneath them, and rebrands break that coding silently. The Ram 1500's 0.13 was never a safety finding; it was a denominator counted twice. The fix is mechanical — merge the split rows before dividing — and the corrected 0.91 is almost boring, which is precisely the point: a body-on-frame full-size pickup landing at 0.91 among peers at 0.94-1.25 is what physics predicts. Extraordinary claims (8x safer than an F-150) demand extraordinary denominators.

## Strongest counterargument (state at full strength)

The 2013+ Ram 1500 genuinely IS a safer truck than the 1994-2012 Dodge Ram it replaced: the fourth generation brought standard ESC (federal mandate phased in 2009-2012), side-curtain airbags, and a stiffer frame. So part of the 0.13-vs-0.78 gap is real engineering progress, not pure artifact — and the combined 0.91 overstates the danger of the trucks actually on dealer lots today. The true post-2013 Ram 1500 rate is unknowable from FARS alone (no model-year fleet split exists in this data), and it sits somewhere between 0.13 and 0.91. But 7x safer than the segment via ESC and airbags alone strains credulity — ESC's measured benefit is ~30-50% for single-vehicle crashes, not 700% — and the overlapping 2013-2019 dual-coding means neither published row is a clean cohort anyway.

## Limitations

- Fleet denominators are estimates (annual sales x 8.75 fleet multiplier), not registrations; VMT uses class-average annual miles, not odometer readings. The site's own methodology note flags +/-15% uncertainty for low-volume models; the combined 0.91 inherits that.
- FARS captures fatal crashes only — injury and property-damage crashes are invisible here.
- The 0.91 combined rate blends 1994-2023 model years; it describes the nameplate's history, not the 2026 truck on the lot.
- The Grand Caravan correction (1.56) assumes the 130k/yr sales estimate covers the whole Caravan/Grand Caravan line — same assumption class as the Ram fix.
- Cannot rule out that a share of the gap reflects genuine post-2013 safety improvement (see counterargument).

## Primary sources

1. NHTSA FARS 2014-2023, processed in-repo as `fars_output.js` (FARS_BY_MODEL: deaths, fleet, VMT, rate per nameplate) + the processing code `fars_process.py` (SALES_DATA lines 413/533 showing the doubled 480k estimate). Query tool: https://cdan.dot.gov/query
2. NHTSA FARS coding manual: vehicle make/model/body type/model year "as shown on accident reports must be verified with registration data... registration data takes precedence" — https://crashstats.nhtsa.dot.gov/Api/Public/Publication/07CV
3. Ram brand split: spun off from Dodge, deed official Oct 5, 2009; separated "for the 2011 model year" — https://en.wikipedia.org/wiki/Ram_pickup ; https://www.autoblog.com/features/ram-trucks-10th-anniversary-standalone-brand
4. NHTSA FARS database home: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars

## Actionable insights

- Shopping for a full-size pickup? Do not trust per-model FARS rate leaderboards for rebranded nameplates — the Ram 1500 is not 8x safer than an F-150; its corrected 0.91 sits with the Tundra (0.94), Sierra (1.01), and F-150 (1.04). Compare IIHS ratings (iihs.org/ratings) instead, where the test vehicle is unambiguous.
- Researchers and journalists reusing FARS per-model rates: merge make/model rows split by rebrands (Dodge->Ram, and slash-variant duplicates like CARAVAN/GRAND CARAVAN) before dividing by fleet, or the denominator double-counts.
- Site correction: the Crash Report's own table carried both artifacts; the Ram rows should be presented combined (0.91) and the Caravan rows combined (1.56).
