# Research: #1008 — Pontiac Grand Prix / W-body platform autopsy

## Angle (1-2 sentences)
The Pontiac Grand Prix — dead brand, 16 years gone — still kills 97 Americans a year (970 FARS deaths, rate 2.14/100M VMT). It rides on GM's W-body platform, and cross-tabulating the whole W-body family reveals something nobody ran: six platform-mates have near-identical impairment rates (19-22%) yet death rates spanning 7x (Impala 5.0 down to Monte Carlo 0.71). If drunk drivers explained the body count, the impairment rates would diverge. They don't. The platform autopsy kills the drunk-driver theory.

## Kill test
Genuinely newsworthy? YES. Novel cross-tab (platform-family death rates vs impairment rates) nobody ran; verified no W-body platform piece exists (only Tahoe/Suburban and T&C/Pacifica gap pieces). Inverts the standard frame: the same bones, wildly different outcomes, and impairment can't explain it. Consumer-actionable for used-car shoppers (same platform, 7x spread by badge). Passes.

## Primary sources (3+)
1. **NHTSA FARS 2014-2023**, via `fars_output.js` (FARS_BY_MODEL: all rows below; FARS_TOXICOLOGY: impairment rows below). NHTSA FARS: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. **GM discontinued Pontiac April 27, 2009**; last Pontiacs built late 2009, final dealer franchises expired Oct 31, 2010 — automotivehistory.org (http://automotivehistory.org/april-27-2009-gm-announces-end-of-pontiac/), autoevolution (https://www.autoevolution.com/news/the-last-pontiac-built-in-the-us-13810.html?upnext)
3. **IIHS ratings, 2004-2008 Pontiac Grand Prix**: moderate overlap front Good (all submeasures Good); side Marginal (with optional side airbags); rear Poor; small overlap not tested — https://www.iihs.org/ratings/vehicle/pontiac/grand-prix-4-door-sedan/2005
4. **NHTSA NCAP (via Edmunds)**: 2007 Grand Prix frontal 5-star driver / 4-star passenger; side 3-star both positions — https://www.edmunds.com/pontiac/grand-prix/2007/review/
5. GM W platform (background): Wikipedia "GM W platform" — shared by Impala, Grand Prix, Century, Regal, LaCrosse, Monte Carlo, Intrigue.

## Key numbers (W-body family, FARS 2014-2023)
| Model | Deaths | Annual | Rate/100M VMT | Fleet | Any impaired | Alc | Drug |
|---|---|---|---|---|---|---|---|
| Chevrolet Impala | 3,774 | 377.4 | **5.00** | 656,250 | 21.4% | 15.6% | 9.6% |
| Buick Century | 849 | 84.9 | **2.41** | 306,250 | 21.8% | 16.6% | 9.3% |
| Pontiac Grand Prix | 970 | 97.0 | **2.14** | 393,750 | 21.5% | 16.2% | 8.8% |
| Buick Regal | 153 | 15.3 | 1.01 | 131,250 | 19.3% | 15.2% | 6.8% |
| Buick LaCrosse | 291 | 29.1 | 0.72 | 350,000 | 20.1% | 15.4% | 8.4% |
| Chevrolet Monte Carlo | 178 | 17.8 | 0.71 | 218,750 | 21.3% | 16.8% | 8.9% |

- Rate spread: 5.00 / 0.71 = **7.0x** between Impala and Monte Carlo (same platform).
- Impairment spread: 21.8% / 19.3% = 1.13x. Effectively flat.
- Grand Prix lethality: 970 deaths / crashes — compute in draft from crashes field.
- Grand Prix production: 2004-2008 only (redesigned 2004, discontinued after 2008); every Grand Prix in the FARS window was 6-19 years old.
- Pontiac total: 3,038 deaths (Grand Prix 970 is the deadliest Pontiac per mile at 2.14; G6 908 at 1.64; Grand Am 713 at 1.18).
- Combined W-body (6 models): 6,215 deaths over the FARS window.

## Candidate mechanisms (state as hypotheses, not conclusions)
1. **Fleet composition**: Impala was a dominant fleet/rental/government sedan — high annual mileage, urban use, deferred maintenance. The Monte Carlo was an enthusiast coupe bought by individuals. Same bones, different lives.
2. **Generation mixing**: the Impala nameplate in the FARS window spans the W-body (2000-2013) AND the Epsilon II (2014-2020) generations; the Grand Prix is pure 2004-2008 W-body. Nameplate-level rates blend platforms — stated as limitation.
3. **Exposure, not impairment**: with impairment flat across the family, the 7x rate spread must come from who drives, how much, and where — not from the bottle. This is the article's thesis.

## Strongest counterargument
The Impala's 5.0 rate may be inflated by fleet/rental exposure patterns that the rate's VMT estimates undercount (VMT is estimated, not measured per vehicle; fleet cars rack up miles the estimates may miss, which would inflate the rate). If so, part of the 7x spread is measurement artifact, not real risk. State at full strength. BUT: even halving the Impala rate leaves a 3.5x spread against flat impairment — the core finding survives a large error bar.

## Limitations
- FARS covers 2014-2023 only; all W-body cars in the window were 6+ years old (survivorship/selection effects).
- Rate uses estimated fleet and estimated VMT (±uncertainty, especially for low-volume models like Regal/Intrigue).
- Impairment % is conditional on the crash being fatal (FARS selection bias) — it measures impairment among fatal-crash drivers, not all drivers.
- Nameplate-level aggregation mixes generations (Impala W-body + Epsilon; LaCrosse spans two generations).
- No driver-age, mileage, or urban/rural fields in the dataset — the "who and how" mechanism is inferred, not proven.
