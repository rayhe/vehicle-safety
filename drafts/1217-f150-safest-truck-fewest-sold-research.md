# Research: 1217-f150-safest-truck-fewest-sold

**Journalist:** Rex Driverton (Senior Crash Correspondent — fatality rate investigations, deadpan noir)
**Kicker:** Investigation
**Headline (draft):** "The 2009 F-150 Was America's Safest Truck. It Was Also the One Ford Sold the Fewest Of."
**Slug:** 1217-f150-safest-truck-fewest-sold

## Thesis

The 2009 F-150 redesign was crowned America's safest full-size pickup: IIHS Top Safety Pick, NHTSA 5-star front and side, standard AdvanceTrac with Roll Stability Control — a first for the F-150. FARS appears to confirm it: per-model-year fatal crashes, normalized by years-on-road, plunge across the 2009 redesign window (-45.8% comparing MY2005-2008 to MY2009-2012).

But the Silverado — which was NOT redesigned in 2009 (its GMT900 generation launched in 2007) — shows the exact same drop: -45.5% across the same window. So do the Ram (-32.4%), Sierra (-43.0%), Tundra (-53.8%), and Titan (-56.6%). Every major pickup shows a 2009-2011 trough followed by a rebound, regardless of redesign timing.

The mechanism is production volume, not the high-strength chassis. Ford F-Series US sales collapsed from 690,589 (2007) to 413,625 (2009) during the Great Recession, then recovered to 763,402 by 2013. The "safest F-150 in the data" is the one Ford barely sold. Model-year death comparisons without sales normalization are junk science, and the industry's favorite safety narrative is the artifact.

## Kill test

- Genuinely newsworthy? Yes — myth-busts a canonical safety narrative (2009 F-150 = safest truck ever) with a controlled FARS analysis. Nobody in the queue ran per-MY normalization with cross-brand controls.
- Novel angle? Yes — difference-in-differences style: the Silverado control (no 2009 redesign) moves identically to the F-150 (redesigned 2009). Queue overlap check: zero hits for redesign/generation/2009/twelfth/aluminum-f150 across all 424 queued entries.

## Original calculation (from fars_output.js, FARS_MODEL_YEAR 2014-2023)

Method: for each model year, deaths in 2014-2023 fatal crashes / (2024 - model_year) years on road = normalized deaths per year-on-road. Compare mean of MY2005-2008 (pre) vs MY2009-2012 (post).

| Model | Pre (05-08) /yr | Post (09-12) /yr | Change | Redesigned in 2009? |
|---|---|---|---|---|
| Ford F-150 | 26.5 | 14.3 | -45.8% | YES (12th gen) |
| Chevrolet Silverado | 31.5 | 17.2 | -45.5% | NO (GMT900 = 2007) |
| GMC Sierra | 10.9 | 6.2 | -43.0% | NO (GMT900 = 2007) |
| Dodge Ram | 15.4 | 10.4 | -32.4% | YES (4th gen) |
| Toyota Tundra | 4.8 | 2.2 | -53.8% | NO |
| Nissan Titan | 1.7 | 0.7 | -56.6% | NO (small n, noisy) |
| Ford Ranger | 5.4 | 3.8 | -30.1% | NO |

F-150 per-MY detail (deaths / yrs-on-road = rate/yr): MY05 25.7, MY06 29.3, MY07 22.6, MY08 28.2, **MY09 10.1**, MY10 16.1, MY11 14.5, MY12 16.6, MY13 29.8, MY14 25.8, MY15 24.9, MY16 26.4, MY17 19.9, MY18 31.0.
Note: MY2013-2014 (still 12th gen!) rebound to ~26-30/yr — back at pre-redesign levels. The redesign generation's "safety" evaporated exactly as sales recovered.

Silverado per-MY detail: MY07 35.5, MY08 27.8, MY09 16.1, MY10 10.5, MY11 23.5, MY12 18.6, MY13 26.3, MY14 27.5, MY15 27.3. Same trough shape, one year before F-150's redesign year — wait, no: Silverado trough is MY2009-2010, same calendar trough. Consistent with sales collapse, not redesign.

Ford F-Series US annual sales (calendar year; F-Series ~ F-150 + Super Duty): 2005: 901,463; 2006: 796,039; 2007: 690,589; 2008: 515,513; 2009: 413,625; 2010: 528,349; 2011: 584,917; 2012: 645,316; 2013: 763,402; 2014: 753,851.

The trough years (2009-2011) are exactly the lowest-production years. Deaths per truck built didn't move much; trucks built did.

## Primary sources (3+)

1. NHTSA FARS 2014-2023, via repo fars_output.js (FARS_MODEL_YEAR; methodology at https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars)
2. IIHS, "Life-saving benefits of ESC continue to accrue," 2011 (ESC effectiveness — counterargument support) — https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue
3. NHTSA, FMVSS 126 ESC final rule (FR 2007-06-22) — https://www.govinfo.gov/content/pkg/FR-2007-06-22/html/E7-11965.htm
4. Ford press release (Jan 7, 2009): 2009 F-150 5-star NHTSA, IIHS Top Safety Pick, standard AdvanceTrac w/ RSC — https://www.thetorquereport.com/2009-ford-f-150-is-now-the-safest-full-size-pickup/ ; Ford release mirror https://ophelia.sdsu.edu:8443/ford/01-24-2009/about-ford/news-announcements/press-releases/press-releases-detail/pr-ford-extends-industry-lead-in-29477.html
5. Ford F-Series annual US sales table — https://en.wikipedia.org/wiki/Ford_F-Series (cites Ford sales reports)

## Strongest counterargument (full strength)

ESC genuinely works. IIHS research found electronic stability control cuts fatal single-vehicle crash risk by roughly half, and the 2009 F-150 was the first F-150 with standard AdvanceTrac + Roll Stability Control across every trim — a real, first-in-class safety improvement Ford deserved credit for. The data cannot separate "fewer trucks built" from "better trucks built": both moved at once. FARS captures only fatal crashes, so a redesign that traded deaths for injuries would be invisible here. And calendar-year sales are an imperfect proxy for model-year production (2009 model-year production started in 2008). The honest verdict: the trough is mostly volume, but the 2009 redesign's ESC standardization was real, and the two effects are confounded in a way no FARS-only analysis can fully untangle.

## Limitations (to include in article)

- FARS only captures fatal crashes (2014-2023 window); injury-only improvements invisible.
- Normalization divides by years-on-road, assuming uniform attrition and constant annual sales per model year — both false (recession production collapse is the confound under discussion; calendar-year sales used as proxy for model-year production).
- Older model years suffer survivor bias (scrapped trucks leave the fleet), which biases OLDER model years DOWN — working against the finding, i.e., the pre-window numbers are conservatively low.
- Titan/Tundra have small counts; their large percentage swings are noisy.
- Cannot establish causation: redesign + recession are perfectly confounded in 2009.

## Actionable insight

Don't pay a "safer generation" premium on a used truck based on raw model-year death counts — the 2010 F-150 isn't meaningfully safer than the 2008, there were just fewer of them. What actually predicts used-truck safety: ESC/RSC presence (mandatory Sept 2011 via FMVSS 126 — anything 2012+ has it), crash-test ratings for that generation, and open recalls (check your VIN at nhtsa.gov/recalls). A 2009+ truck gets you standard stability control; the rest of the "safest ever" halo was the recession.

## Voice notes (Rex Driverton)

Deadpan noir detective covering NHTSA data. Opener energy: "The numbers don't lie, but they do occasionally smirk." Loves paradoxes. Dry. No throat-clearing; start mid-thought.
