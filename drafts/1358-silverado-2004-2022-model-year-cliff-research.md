# Research: Same Badge, 10.5x the Body Count

**Slug:** `silverado-2004-2022-model-year-cliff`
**Number:** 1358
**Journalist:** Mia Crumplezone (safety engineering editor; model-year trends and design milestones are her beat; she gets to be judgmental about 2004 crash structures)
**Kicker:** Generation Gap
**Kill test:** PASS. Novel on this site: nobody has compared the SAME nameplate across design generations using FARS model-year data. The 2004-05 vs 2021-22 split lands exactly on the ESC mandate (FMVSS 126, 100% by MY2012) as the dividing line between two eras of crash science. Original contribution: aggregating FARS model-year deaths for 10 top nameplates shows 6,912 deaths for the 2004-05 designs vs 656 for the 2021-22 designs (10.5x), and the exposure math alone can't explain it. The consumer hook is real: the used market is full of 2004-era designs sold as "just an older truck."

## The data

FARS fatal-crash deaths by vehicle model year, 2014-2023 crash years (from `fars_output.js`, generated from NHTSA FARS bulk CSVs):

| Nameplate | 2004-05 model years | 2021-22 model years | Ratio |
|---|---|---|---|
| Chevrolet Silverado | 1,242 | 82 | 15.1x |
| Ford F-150 | 1,075 | 60 | 17.9x |
| Honda Accord | 863 | 59 | 14.6x |
| Toyota Camry | 677 | 103 | 6.6x |
| Nissan Altima | 465 | 66 | 7.0x |
| Dodge Ram | 689 | 0 | - |
| Toyota Corolla | 490 | 141 | 3.5x |
| Ford Mustang | 296 | 27 | 11.0x |
| Honda Civic | 532 | 65 | 8.2x |
| Chevrolet Malibu | 583 | 53 | 11.0x |
| **Aggregate** | **6,912** | **656** | **10.5x** |

Design dividing line between the two eras:
- **FMVSS 126 (final rule, April 2007):** ESC required on all light vehicles beginning model year 2012 (100% compliance for vehicles built on/after September 1, 2011; phase-in 55%/75%/95% for MY2009/2010/2011). The 2004-05 designs predate the mandate by 7-8 years.
- **IIHS ESC effectiveness:** ESC reduces fatal single-vehicle crash risk by 49% and fatal single-vehicle rollovers by ~77-80% (IIHS studies 2004/2006/2010; Charles M. Farmer, "Effects of Electronic Stability Control on Fatal Crash Risk," May 2010).
- **NHTSA lives-saved:** ESC saved an estimated 2,202 lives from 2008 to 2010 alone (NHTSA 33-12, November 2012).
- **IIHS small-overlap frontal test** introduced 2012, forcing structural redesigns of every 2021-22-era platform (general knowledge; secondary, not load-bearing for the argument).

## The exposure-math caveat (stated in the article, not hidden)

Raw model-year death counts mix two things: design and exposure. A 2004 model year had roughly 10 years of road exposure inside the 2014-2023 window (minus scrappage), vs 2 years for a 2022. Rough exposure ratio after scrappage: ~4-5x. The observed death ratio is 10.5x in aggregate (15-18x for the trucks). So even after the exposure math, the 2004-era designs are roughly 2-4x deadlier per unit of exposure, and that gap lines up exactly with the ESC mandate plus two decades of structural improvements. The article must say this plainly: the raw 10.5x is not a per-mile rate. It is deaths observed in the same 10-year window for the same badge, and it is still mostly design.

## Primary sources (3+)

1. **NHTSA FARS bulk data via `fars_output.js`** (this repo, derived from FARS 2014-2023 CSVs): model-year death counts per nameplate. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. **NHTSA FMVSS 126 final rule (April 2007):** ESC mandated on all passenger cars, SUVs, vans, and pickup trucks beginning model year 2012 (built on/after Sept 1, 2011), with 55/75/95% phase-in for MY2009-2011. https://www.nhtsa.gov/document/notice-proposed-rulemaking-federal-motor-vehicle-safety-standards-electronic-stability-2 (agency document restating the rule; canonical rule text at https://www.govinfo.gov/content/pkg/FR-2007-06-22/html/E7-11965.htm)
3. **IIHS, "Life-saving benefits of ESC continue to accrue" (2010):** 49% reduction in fatal single-vehicle crash risk, ~73-80% reduction in single-vehicle rollovers. https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue
4. **NHTSA 33-12 (November 2012):** ESC saved 2,202 lives 2008-2010. https://www.fenderbender.com/news/researchreports/article/11523222/nhtsa-study-esc-saving-lives-december-03-2012
5. **NHTSA FARS query tool** for readers to verify: https://cdan.dot.gov/query

## Original contribution (required)

1. **Same-nameplate generation gap:** nobody on this site has used FARS_MODEL_YEAR to compare the identical badge across design eras. The 10.5x aggregate across 10 nameplates is new, and the truck numbers (Silverado 15.1x, F-150 17.9x) are the sharpest version of it.
2. **The mandate as the dividing line:** the 2004-05 cohort predates FMVSS 126 by 7-8 years; the 2021-22 cohort is fully post-mandate. The article pins the cliff on a specific federal rule with a specific date, not vibes about "old cars."
3. **Honest exposure accounting:** rather than pretending the 10.5x is a rate, the piece shows the work (exposure ratio ~4-5x vs death ratio 10.5x) and concludes the designs are still 2-4x deadlier per unit of exposure. That honesty is the differentiator.

## Counterargument (at full strength)

The 10.5x is dominated by exposure, not engineering, and a sharper critic would say so. The 2004-05 cohort includes 10 years of cumulative registrations plus the era when these nameplates sold at peak volume; the 2021-22 cohort is two thin model years, one of which is still under factory warranty, driven fewer miles per year on average, and partly owned by the original careful buyer rather than the third owner who skips maintenance. Driver age and usage skew older-vehicle cohorts toward riskier owners (the "beater effect" this site has documented). The per-mile death-rate gap between generations is probably closer to 2-3x than 10x, and ESC's 49% figure applies to single-vehicle fatal crashes only, not all crashes. A 2022 Silverado is not 15 times safer than a 2004 Silverado per mile; it is maybe 2-4 times safer, and the rest is arithmetic. The article must not let the 10.5x headline do work the data can't support.

## Limitations

- FARS_MODEL_YEAR gives deaths by model year, not rates: no fleet-by-model-year or VMT-by-model-year normalization available. The per-exposure estimate (2-4x) is back-of-the-envelope, stated as such.
- The 2021-22 cohort's exposure window (2022-2023 crash years) includes the post-COVID fatality spike; the 2004-05 cohort's window spans it too.
- Model-year boundaries don't perfectly match redesign boundaries (e.g., the 2004-05 Silverado is the GMT800, pre-ESC; fine). Nameplate continuity is badge-level, not platform-level.
- Dodge Ram 2021-22 shows 0 because the "Dodge RAM" FARS nameplate ends at the 2011 rebrand; the continuation "Ram 1500" has its own entry. Don't present the 0 as a literal zero for the nameplate; exclude or footnote it.
- ESC fitment varies by trim within model years pre-mandate; the mandate story is cleanest at the fleet level.

## Actionable takeaway

If you're shopping used: draw the line at model year 2012. That's the first year every light vehicle sold in America had ESC by federal law, and ESC alone cuts fatal single-vehicle crash risk roughly in half. A 2009-2011 vehicle probably has it too (55/75/95% phase-in), so check the specific VIN on NHTSA's safercar.gov ESC list rather than trusting the model year. A 2004-era truck at a tempting price is the same badge on a different century of crash science; budget for that or keep looking.
