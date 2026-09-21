# Research Notes — #961: Grand Caravan vs Sienna Minivan Death Gap

**Slug:** `961-grand-caravan-sienna-minivan-death-gap`
**Journalist:** Axle McScatter (Data Visualization Editor — cross-tab story, least used in last 40)
**Kicker:** The Gap
**Working headline:** "The Deadliest Minivan in America Has Soberer Drivers Than the Safest One. Figure That Out."
**News peg:** April 8, 2026 — IIHS announces no minivan earned a 2026 Top Safety Pick award after updated rear-seat crash tests; Sept 2026 IIHS 3-row SUV rear-seat fallout still in the news cycle. Fresh FARS 2014-2023 cross-tab shows the lab result was already written in the body count.

## Original finding (the novel cross-tab)

FARS 2014-2023, per-model death rate (deaths per 100M VMT, estimated fleet x NHTS miles):

| Minivan | Deaths | Rate | Driver any-impaired % |
|---|---|---|---|
| Dodge Grand Caravan | 1,782 | 1.33 | 15.3% |
| Chrysler Town & Country | 1,303 | 1.26 | 20.1% |
| Honda Odyssey | 864 | 0.93 | 15.4% |
| Toyota Sienna | 430 | 0.49 | 19.0% |
| Chrysler Pacifica | 160 | 0.19 | 20.0% |

- Grand Caravan rate (1.33) / Sienna rate (0.49) = **2.71x**.
- The impairment inversion: Grand Caravan drivers test impaired at 15.3%, Sienna drivers at 19.0%. The van with the *soberer* drivers kills at 2.7x the rate. Blame-the-driver is off the table: Sienna's drivers drink more and die less.
- Both are the volume leaders of their era: Grand Caravan was America's best-selling minivan for years (122,648 sold in 2019; 36-year production run ended Aug 21, 2020 at Windsor). This isn't a low-volume fluke.

## Lab corroboration

- IIHS small-overlap front test, minivans (2015 round): Nissan Quest POOR, Chrysler Town & Country POOR, Dodge Grand Caravan POOR; Toyota Sienna Acceptable; Honda Odyssey Good (TSP+). Source: automotiveworld.com IIHS/HLDI release.
- IIHS updated moderate-overlap front (Sept 19, 2023 news release, embargoed): Pacifica, Carnival, Sienna Marginal; Odyssey Poor. None acceptable. David Harkey: "disappointing that automakers haven't acted faster to apply the best available technology to the second row."
- April 2026: no minivan on the IIHS Top Safety Pick roster at all. NHTSA: Sienna and Odyssey both 5-star overall (roadethos.com, Sept 2026).
- 2018 IIHS passenger-side small overlap: Sienna Marginal; Odyssey Good; Pacifica Acceptable. LATCH: Odyssey Good+, Sienna Acceptable.
- Only the Sienna has second-row seatbelt pretensioners + force limiters; only the Sienna kept a Good in the updated higher-speed side test (autoblog.com "safest minivan" roundup, ~107 days ago).

## Model-year trend (FARS deaths by vehicle model year)

- Grand Caravan 2008-2019 model years: steady ~60-90 deaths/year across a full decade of "current generation" (5th gen launched 2008). No improvement curve: 2014: 92, 2015: 71, 2016: 72, 2017: 67, 2018: 64, 2019: 63.
- Sienna same window: roughly 1/3 to 1/4 the count at comparable volumes (2014: 18, 2015: 25, 2016: 12, 2017: 22, 2019: 0).
- Interpretation: the Grand Caravan's 2008 platform aged 12 years without structural redesign; the gap is baked into the steel.

## Strongest counterargument

Demographics, not just engineering. The Grand Caravan was the cheapest minivan in America (from ~$26-27k MSRP vs ~$35k+ for Sienna) — a price gap that selected for lower-income buyers, older vehicles in the fleet, deferred maintenance, and heavy taxi/fleet use (the Grand Caravan was the default airport-shuttle van). Some of the 2.71x is socioeconomic, not structural. BUT: the IIHS small-overlap results show the structural gap is real and independent of drivers — Poor vs Acceptable/Good on identical test rigs. Both explanations coexist; neither alone explains everything.

## Limitations

- FARS captures only fatal crashes (2014-2023); injury-only crashes invisible.
- Rate uses estimated VMT (fleet size x NHTS annual miles), not odometer readings; uncertainty larger for small fleets, though both nameplates here are high-volume.
- Impairment testing isn't uniform across states; some FARS drivers are never tested, so any-impaired % is a floor, not a ceiling.
- Grand Caravan fleet skews older (production ended 2020); age-of-vehicle confounds the rate. The Pacifica rate (0.19) is partly an artifact of a young fleet.
- The Town & Country shares the Grand Caravan's structure (both 1.2x+), consistent with a platform-level story.

## Actionable insight

If you're shopping used minivans: the 2008-2019 Dodge Grand Caravan and Chrysler Town & Country are the statistical outliers — avoid or budget for defensive driving; the 2015+ Toyota Sienna and Honda Odyssey rate far better and the Sienna alone has second-row belt pretensioners. Check small-overlap ratings, not just the NHTSA star count (both carry 5 stars; the lab disagrees). Kids ride in the second row; demand rear belts that actually work.

## Primary sources (3+)

1. NHTSA FARS 2014-2023 bulk data (own cross-tab) — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS news release Sept 19, 2023 "Minivans don't make the grade when it comes to rear-seat safety" (mediaroom.iihs.org PDF) — http://mediaroom.iihs.org/download/IIHS-news-091923_emb.pdf
3. IIHS/HLDI small-overlap minivan results (Quest/Town & Country/Grand Caravan Poor; Sienna Acceptable; Odyssey Good) — https://staging.automotiveworld.com/news-releases/iihs-hldi-minivans-major-flaw-3-models-dire-small-overlap-results/
4. Autoblog Apr 8, 2026 "No Minivans Make IIHS Safety List as Rear-Seat Safety Falls Short" — https://www.autoblog.com/news/no-minivans-make-iihs-safety-list-as-rear-seat-safety-falls-short
5. TheDrive / Jalopnik: Grand Caravan production ended Aug 21, 2020, 36-year run, best-selling minivan — https://www.thedrive.com/news/33702/death-of-an-icon-dodge-grand-caravan-will-end-production-in-august
6. Consumer Reports IIHS minivan crash tests + LATCH ratings — https://www.consumerreports.org/car-safety/iihs-minivan-crash-tests-not-all-models-are-created-equal/
7. RoadEthos Sept 2026 Sienna vs Odyssey safety comparison (NHTSA 5-star both, IIHS updated tests) — https://roadethos.com/car-buying/2026-toyota-sienna-vs-honda-odyssey-which-one-is-safer

## Kill test verdict

PROCEED. Novel: nobody has published the FARS rate-vs-impairment cross-tab for minivans, and the impairment inversion (soberer drivers, 2.7x death rate) kills the default "it's the driver" dismissal. Ties April 2026 IIHS news to a 10-year body count.
