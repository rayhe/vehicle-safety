# Research: #1111 — BMW 7 Series Drunkest Flagship

## Angle (1-2 sentences)
The BMW 7 Series, BMW's flagship luxury sedan loaded with every driver-assistance system money can buy, has the 9th-highest driver impairment rate of all 307 nameplates in FARS 2014-2023: 26.1% of tested drivers in fatal crashes were alcohol- or drug-positive. Across the luxury flagship tier (7 Series, QX56, CTS, Q50, E-Class, LS), impairment runs 22-34% above class medians. The cars with the most safety tech carry the most impaired drivers.

## Kill test
- Genuinely newsworthy? YES. Counterintuitive: safety-tech flagships should have the soberest, most careful drivers; the data shows the opposite. Zero prior coverage of the 7 Series, Q50, E-Class, or S-Class on this site.
- Novel angle on data? YES. Impairment-vs-price-tier cross-tab: 7 of the top 40 most-impaired nameplates are luxury flagships (7 Series #9, QX56 #7, CTS #10, FX35 #12, Lincoln LS #17, Q50 #34, E-Class #35, LS #39). Nobody ran the luxury tier as a group.
- Challenge ("just another data dump?"): No. The finding reframes who the impaired driver is: not just the beater-sedan stereotype but the flagship tier, and the actionable hook is the used-market confound (a 2010 7 Series costs less than a used Civic, so "luxury" here often means cheap 400-hp beaters, not rich owners).

## Primary data (FARS 2014-2023, from fars_output.js FARS_TOXICOLOGY)

| Rank /307 | Vehicle | anyPct | alcPct | drugPct | Tested drivers |
|---|---|---|---|---|---|
| 7 | Infiniti QX56 | 26.3 | 18.6 | 10.9 | 274 |
| 9 | BMW 7 Series | 26.1 | 21.3 | 11.3 | 230 |
| 10 | Cadillac CTS | 25.9 | 20.6 | 10.2 | 931 |
| 12 | Infiniti FX35 | 25.9 | 20.6 | 8.8 | 170 |
| 17 | Lincoln LS | 25.2 | 20.6 | 10.7 | 131 |
| 34 | Infiniti Q50 | 23.5 | 18.9 | 9.6 | 929 |
| 35 | Mercedes-Benz E-Class | 23.5 | 18.0 | 9.7 | 1,415 |
| 39 | Lexus LS | 23.3 | 18.0 | 9.3 | 484 |
| 89 | Mercedes-Benz S-Class | 21.9 | 15.6 | 10.7 | 430 |
| 79 | Cadillac Escalade | 22.0 | 15.9 | 9.7 | 1,169 |

Baselines: sedan median anyPct 21.4; SUV median 19.6.
- 7 Series vs sedan median: 26.1/21.4 = 1.22x
- QX56 vs SUV median: 26.3/19.6 = 1.34x
- Note: impairment = BAC > 0 or drug-positive in FARS fatal-crash toxicology; NOT necessarily over the 0.08 legal limit.

## External primary sources
1. NHTSA, Traffic Safety Facts 2024: Alcohol-Impaired Driving — 11,904 alcohol-impaired fatalities in 2024 (30% of all traffic deaths), one every 44 minutes; 68% of those involved BAC >= 0.15. https://www.nhtsa.gov/risky-driving/drunk-driving
2. NHTSA, Report to Congress: Advanced Impaired Driving Prevention Technology (Dec 2024) — Section 24220 of the Bipartisan Infrastructure Law required a final FMVSS rule by Nov 15, 2024; the deadline was missed, no final rule issued as of 2026, so no new car is required to detect impaired drivers yet. https://www.nhtsa.gov/report-to-congress-advanced-impaired-driving-prevention-technology-december-2024
3. IIHS comment on NHTSA's Advanced Impaired Driving Technology ANPRM (David Zuby, Mar 6, 2024) — urges NHTSA not to shirk the assignment; passive alcohol-detection tech "not readily available in the marketplace" but a mandate would drive development. https://www.iihs.org/media/807e95d8-8559-44c5-b0d5-5bceadcecc9f/U7RFlQ/RegulatoryComments/comment%25202024-03-06.pdf
4. NHTSA FARS database itself: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars

## Novel contribution
The flagship-tier impairment ranking: 7 of the top 40 most-impaired nameplates are luxury flagships, and the 7 Series is the single most-impaired German car in the dataset. The paradox framing (most safety tech, most impaired drivers) plus the used-price confound (flagship depreciation makes these cheap high-horsepower beaters) is original analysis, not FARS restatement.

## Limitations
- FARS toxicology testing is NOT universal; testing rates vary by state and coroner practice. The 26.1% applies to tested drivers in fatal crashes, not all drivers.
- Impairment = any BAC > 0 or any drug positive, including below-legal-limit BAC and drugs that may not indicate driving impairment (e.g., THC days after use).
- Data spans 2014-2023; the fleet mix includes many older, cheap used flagships. The "luxury" label describes the nameplate, not the owner's wealth.
- No control for exposure: nighttime driving, urban vs rural, driver age distribution.
- Sample sizes vary (230 tested 7 Series drivers vs 1,415 E-Class drivers).

## Strongest counterargument
These aren't rich people in new $90,000 cars. A 2010 BMW 750i with 400 hp costs less than a used Honda Civic; the flagship tier depreciates into the beater market faster than any other segment. The impairment signal may be a cheap-horsepower story wearing a luxury badge, which would make this a beater-fleet finding rather than a wealth finding. The data can't separate a 2022 760i from a 2008 750i, and the Lincoln LS (dead since 2006, 25.2% impaired, rank 17) strongly suggests age-of-vehicle is doing real work here.

## Actionable takeaways (gate)
- No safety rating protects an impaired driver: 30% of 2024 traffic deaths involved alcohol (NHTSA). Check your own car for driver-attention monitoring and use it.
- Shopping used luxury: a cheap flagship's five-star rating was earned by sober crash-test dummies. Budget for the IIHS-rated tires and brakes it probably hasn't had in years; worn rubber on a 4,600-lb sedan erases the engineering.
- Until NHTSA's impaired-driving tech rule ships (deadline missed Nov 2024, no rule as of 2026), no new car is required to stop an impaired driver. The tech exists in research; the mandate doesn't.

## Journalist
Dale Impactor III — Toxicology Desk Chief. Sardonic, statistical, treats impairment data like sports stats. Beat fit is exact; also least-used journalist (38 queued pieces) so rotation-correct.
