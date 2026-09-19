# Research — #945: Six in Ten Deaths Are in Cars Built Before the Stability-Control Mandate

**Article #945** | Journalist: Mia Crumplezone (Safety Engineering Editor) | Kicker: Trend Watch

## Kill test
Is 62.3% of a decade's occupant deaths happening in vehicles built before a federal safety mandate newsworthy? Yes. Cross-tabulating `FARS_MODEL_YEAR` (187,058 deaths with known model year, 2014-2023 crashes) against the FMVSS 126 phase-in schedule shows 116,597 deaths — 62.3% — occurred in MY2008-or-older vehicles, i.e., the cohort built before the ESC mandate's phase-in even began. The top five deadliest model years are all mid-2000s (MY2003-MY2007). Nobody has run this cohort cut on the site's dataset; grep for "FMVSS 126" + "cohort" / "phase-in" across 800+ stories and drafts returns zero data stories. Pickups are the extreme: 75.5% of pickup occupant deaths are pre-mandate. This is genuinely novel, surprising (the average death car is MY2006), and actionable (buy 2012+, check for ESC).

## Novel contribution (original analysis)
- Binned `FARS_MODEL_YEAR` deaths into three FMVSS 126 cohorts: MY<=2008 (zero mandated ESC; phase-in began Sept 1, 2008), MY2009-2011 (55/75/95% phase-in), MY>=2012 (full mandate, all light vehicles manufactured on/after Sept 1, 2011).
- **Pre-mandate (MY<=2008): 116,597 deaths = 62.3%** of 187,058. Phase-in: 17,894 (9.6%). Full mandate: 52,567 (28.1%).
- Median model year of vehicles in fatal crashes: **2006** (10-year FARS window, 2014-2023).
- Top death model years: MY2005 (11,363), MY2004 (11,221), MY2003 (10,714), MY2006 (10,341), MY2007 (10,056).
- Class split (pre-mandate share of class deaths): **Pickup 75.5%**, Van 67.2%, SUV 60.8%, Sedan 57.0%, Sports Car 54.9%.
- ~11,660 deaths/year in the pre-mandate cohort (annual average, 2014-2023).
- Nameplate extremes (min 800 deaths): Pontiac Grand Prix, Chevrolet S-10, Chevrolet Cavalier, Buick LeSabre, Buick Century — 100% of their deaths are pre-mandate (discontinued nameplates, zombie fleets).

## Interpretation (the mandate worked; the fleet hasn't caught up)
- FMVSS 126 (final rule April 2007, phase-in Sept 2008-Sept 2011, full compliance Sept 1, 2011) requires ESC on all light vehicles. IIHS: ESC cuts fatal single-vehicle crashes ~56%, fatal multiple-vehicle ~32%. NHTSA (2011 update): 55% fewer fatal single-vehicle passenger-car crashes, 50% fewer for light trucks/vans, 56% of fatal car rollovers and 74% of fatal LTV rollovers preventable.
- The technology gap isn't a mandate failure — it's fleet age. S&P Global Mobility (2025): average U.S. light-vehicle age is a record **12.8 years**; passenger cars **14.5 years**. The average sedan on the road is roughly a 2010-2011 — built during the phase-in window.
- Pickups at 75.5% pre-mandate: work trucks are kept the longest (S&P: light trucks avg 11.9 years vs cars 14.5 — yet pickups' DEATH fleet skews older, consistent with high-mileage work use concentrating miles in older vehicles).

## Primary sources (3+ required)
1. NHTSA, *Fatality Analysis Reporting System (FARS)*, 2014-2023 — the dataset behind `fars_output.js` (NHTSA bulk CSV). Cohort cut computed in this run. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. NHTSA, FMVSS No. 126 final rule (72 FR 17236, April 6, 2007; phase-in 55/75/95%, full compliance Sept 1, 2011). https://www.govinfo.gov/content/pkg/FR-2007-06-22/html/E7-11965.htm
3. IIHS, "Life-saving benefits of ESC continue to accrue" (2011) — ESC effectiveness estimates: 56% fatal single-vehicle, 32% fatal multi-vehicle reduction. https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue
4. NHTSA, "Crash Prevention Effectiveness of Light-Vehicle Electronic Stability Control: An Update of the 2007 NHTSA Evaluation" (DOT HS 811 486, June 2011): 55% fatal single-vehicle passenger-car reduction, 50% LTV, 56% of fatal car rollovers / 74% of fatal LTV rollovers preventable. https://www.govinfo.gov/content/pkg/FR-2011-09-09/html/2011-23092.htm
5. S&P Global Mobility, May 21, 2025: average U.S. vehicle age 12.8 years (record); passenger cars 14.5 years; 289M vehicles in operation. Via AAPEX summary. https://www.aapexshow.com/blog/average-vehicle-age/

## Limitations (will be stated in the article)
1. **Pre-mandate ≠ no ESC.** IIHS (2006): ESC was standard on 40% of 2006 models and optional on another 15%. A large fraction of MY2004-2008 vehicles already had ESC voluntarily. The 62.3% figure is a share of deaths in the pre-mandate cohort, not a count of ESC-less vehicles.
2. **No exposure denominator.** We lack VMT by model year, so death SHARES cannot be read as per-mile risk. Older vehicles are driven fewer miles and by different driver mixes (rural, older, lower-income drivers). Cannot claim a 2006 car is X-times riskier per mile than a 2016 car from this number.
3. **FARS is fatal-only and occupant deaths here.** Injuries and non-fatal crashes invisible; deaths are own-occupant deaths per nameplate.
4. **Fleet estimates ±15% uncertainty for low-volume models** (per site methodology); zombie-nameplate 100% figures reflect discontinued fleets, not current sales.

## Strongest counterargument (must state at full strength)
This is arguably a story about survivorship, not safety: the mid-2000s were high-sales years (16M+ annual sales pre-2008), so of course MY2003-2007 vehicles dominate raw death counts — they were the biggest cohorts on the road during the 2014-2023 window, and older vehicles are also cheaper, drawing younger/riskier and lower-income drivers into exactly the cohort being measured. Without mileage and driver-age controls, the 62.3% could mostly reflect "there were a lot of mid-2000s cars" plus "old cars are cheap cars," not "old cars are dangerous cars." The IIHS ESC-effectiveness numbers are real, but this cross-tab cannot isolate how much of the cohort gap ESC explains versus who drives what.
