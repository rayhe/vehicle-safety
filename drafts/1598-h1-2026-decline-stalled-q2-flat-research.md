# Research — #1598: H1 2026 NHTSA early estimates — the decline stalled in Q2

**Slug:** 1598-h1-2026-decline-stalled-q2-flat
**Journalist:** Axle McScatter (Data Visualization Editor — statistical roundup beat)
**News peg:** NHTSA released DOT HS 813 875, "Early Estimates of Motor Vehicle Traffic Fatalities and Fatality Rate for the First Half (January–June) of 2026," November 10, 2026, with accompanying press release the same day.
**Dateline:** November 26, 2026

## Kill test
- **Genuinely newsworthy?** Yes. First NHTSA H1 2026 numbers, released Nov 10, 2026. Second-lowest H1 fatality rate on record.
- **Novel angle?** Yes. The headline (down 2.5%, rate 1.02) hides a stall: Q1 fell 5.0%, Q2 fell 0.2%, and May and June both rose year over year. The good news is decelerating, and the state map is a knife fight.
- **Duplicates?** Checked. #1053 covered NHTSA Q1 2026 only (7,770 deaths, rate 0.99). #861 covered the NSC H1 2026 series (18,460 deaths, different scope/methodology) with a state decomposition on NSC numbers. No prior article covers the NHTSA H1 2026 release, the Q1-to-Q2 deceleration, or these state figures. Thanksgiving pieces (#1280, #1384, #1553, #1578) cover a different story and were deliberately NOT reused.

## Core numbers (NHTSA DOT HS 813 875, November 2026)
- H1 2026 estimated deaths: **16,750**, down 2.5% from 17,175 projected for H1 2025.
- Fatality rate: **1.02 per 100M VMT**, down from 1.05. Second-lowest H1 rate ever; only H1 2014 (1.01) was lower.
- VMT rose 0.8% (+12.9 billion miles) in H1 2026. Deaths fell while driving rose.
- Q1 2026: 7,715 deaths, **-5.0%** vs Q1 2025. Q2 2026: 9,035 deaths, **-0.2%** vs Q2 2025.
- Monthly: Jan -8.4%, Feb -4.5%, Mar -2.4%, Apr -5.3%, **May +1.5%, Jun +3.0%**. Every month fell except the last two.
- 8 of 10 NHTSA regions down in both deaths and rate. 35 states + Puerto Rico down; 15 states + DC up.
- Context: H1 2021 peak was 20,055 deaths at a 1.33 rate. H1 2026 is 16.5% below that peak. Full-year 2025: 36,640 deaths, rate 1.10.

## Original calculations (verified by script, all from Table 1/2/3 of DOT HS 813 875)
1. **The stall, priced:** Q2 2025 was 9,055 deaths. Had Q2 2026 matched Q1's -5.0% pace, it would have been ~8,602. Actual: 9,035. Gap: **~433 deaths** that the Q1 pace would have saved and Q2 didn't. Labeled estimate, arithmetic only.
2. **The rate dividend:** H1 2026 VMT implied by the figures is ~1.642 trillion miles. At 2025's 1.05 rate, the same miles would have produced ~17,243 deaths. The rate improvement is worth **~493 fewer deaths**. Labeled estimate.
3. **State knife fight:** Top 5 improvers (IL -116, TN -50, AZ -44, MI -43, OK -42) sum to -295. Top 5 worseners (GA +60, PA +57, KY +52, NC +50, OH +37) sum to +256. Net of the ten biggest movers: -39. The other 41 jurisdictions delivered the other -386.
4. **Illinois carried the headline:** IL's -116 is **27.3%** of the entire national decline of -425. (NSC's H1 series had IL at -134 of -386; same story, different counting.)
5. **Small-denominator trap:** DC is +128.6%, the scariest percentage in the table. It is 7 deaths becoming 16. Nine people. Delaware +28.3% is 46 becoming 59. Percentages lie when the counts are small; the article will say so.
6. State table sums reconcile exactly to the national totals (17,175 -> 16,750, net -425), confirming the transcription.

## What this does NOT prove (limitations)
- These are **statistical projections**, not counted deaths. NHTSA says the 2025 and 2026 figures "will be slightly revised" when the FARS Annual Reporting File for 2025 and the Final File arrive. The 9-months estimate lands in late December and could move Q2.
- The state estimates are modeled, not counted: each state gets a share of its region's projection based on the latest Early Notification distribution. Small-state swings are noisy.
- The competing NSC series puts H1 2026 at **18,460 deaths**, ~10% higher than NHTSA's 16,750, because NSC counts differently (broader scope). Both series agree on direction (down ~2-2.5%); they disagree on level. Readers should know the gap exists.
- Nothing in this release attributes the decline to any policy, enforcement program, vehicle technology, or the Pathways to Safer Streets initiative. NHTSA's press release mentions the initiative; the data does not test it. Correlation is not in the report at all.
- No breakdown by crash type (pedestrian, motorcycle, impaired, speeding) in this release. The vulnerable-road-user backslide documented in #1053 (pedestrian deaths up since 2020) cannot be confirmed or denied from H1 2026 data yet.

## Strongest counterargument
"The 2.5% is noise and the rate is a rounding artifact." Fair, in part: these are projections with revision risk, Q2 was flat, and two of the six months got worse. But the rate has now fallen for four straight half-year readings from the 2021 peak (1.33 -> 1.29 -> 1.21 -> 1.15 -> 1.05 -> 1.02), and the H1 2014 record it nearly matched was set in a year with far fewer miles driven. A six-reading trend is not one noisy quarter. The honest version of the counterargument is narrower: the *pace* of improvement is stalling, and Q2 says the easy gains may be spent.

## Actionable takeaways
- If you drive in Georgia, Pennsylvania, Kentucky, North Carolina, or Ohio: your state went the wrong way while the country improved. That is worth asking your state DOT about, not just shrugging at.
- The May/June reversal means the summer driving season (when H2 data lands) is the number to watch; the 9-month estimate in late December is the next real checkpoint.
- Nothing here changes what a driver should do: the rate fell because of miles, enforcement, and vehicle tech in some unmeasured mix, not because any single road got safer on its own.

## Sources
1. NHTSA, National Center for Statistics and Analysis, "Early Estimates of Motor Vehicle Traffic Fatalities and Fatality Rate for the First Half (January–June) of 2026," DOT HS 813 875, November 2026. https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813875
2. NHTSA press release, "Trump's Transportation Department Reports Decline in Traffic Fatalities in First Half of 2026," November 10, 2026. https://www.nhtsa.gov/press-releases/decline-traffic-fatalities-first-half-2026
3. FHWA, Traffic Volume Trends, August 2026 (VMT source cited in DOT HS 813 875). https://www.fhwa.dot.gov/policyinformation/travel_monitoring/tvt.cfm
4. National Safety Council, Injury Facts, H1 2026 motor-vehicle fatality estimate (18,460 deaths, down ~2%) — competing series, cited for the scope gap. https://injuryfacts.nsc.org/
5. NHTSA FARS database (context: 2014–2024 final/ARF files cited in DOT HS 813 875). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
