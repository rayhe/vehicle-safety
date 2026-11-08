# Research — #1437: Bexar County Crashed More Than Dallas and Killed Fewer. Alcohol Killed One in Four.

**Slug:** `1437-bexar-county-less-lethal-dui-quarter`
**Journalist:** Axle McScatter (Data Visualization Editor; county-level statistical comparison is his beat — #1433 Denton, #1434 Dallas)
**Kicker:** The Gap
**Date researched:** November 8, 2026

## Story in one line
Bexar County, Texas recorded 46,744 crashes in 2025, more than Dallas County's 43,946, and killed fewer people (190 vs 274): a crash in Bexar was about 42% less likely to kill than the Texas average. The exception is drunk driving: alcohol-involved crashes were 3.5% of all crashes and 24.2% of all deaths.

## Kill test — PASS
- **Genuinely newsworthy?** Yes. Full-year 2025 TxDOT county tables published in a compiled report October 28, 2026. Deaths fell 11.6% (215 to 190) and suspected serious injuries fell 15.4% (897 to 759), both beating the statewide improvement (deaths -9.2%). A major metro county improving faster than the state, with a DUI share that runs the other way, is a real story.
- **Not a duplicate:** full queue + drafts + stories grep: zero slugs contain "bexar", "san-antonio", or "orsatti". No prior article has used TxDOT's annual county tables (the #1433/#1434 DFW pieces used 9-month CRIS exports, a different dataset). The lethality-per-1,000-crashes ranking across six large Texas counties is a new calculation. The Vision Zero High Injury Network stat (65% of fatalities and severe injuries on 3.8% of streets) is new to the site.
- **Novel angle on data?** Yes. (1) The six-county lethality table: deaths per 1,000 crashes, 2025. (2) The crash-share vs death-share gap: Bexar is 8.7% of Texas crashes but 5.0% of Texas deaths. (3) The DUI over-representation ratio: 3.5% of crashes, 24.2% of deaths, a 7.0x gap. (4) The Poisson check on the -25 death swing, which disciplines the good-news reading.
- **3+ primary sources?** Yes: TxDOT 2025 county crash tables (the underlying primary source); Ryan Orsatti Law's compiled Bexar report (Oct 28, 2026, reproduces the TxDOT rows with processing dates); NHTSA 2025 early estimates (national context); City of San Antonio Vision Zero SA High Injury Network study (2019-2023).
- **Actionable?** Yes. San Antonio drivers: the danger concentrates on 3.8% of streets (High Injury Network Explorer); DUI crashes are the lethal minority; check the Vision Zero maps before assuming your commute corridor is average.

## Verified facts (all from the Orsatti compilation of TxDOT tables, checked November 8, 2026)

### Bexar County, 2025 vs 2024 (TxDOT county tables; 2025 processed April 7, 2026; 2024 processed April 9, 2025)
| Measure | 2025 | 2024 | Change |
|---|---|---|---|
| Total reportable crashes | 46,744 | 48,522 | -1,778 (-3.7%) |
| Fatal crashes | 182 | 205 | -23 (-11.2%) |
| Traffic deaths | 190 | 215 | -25 (-11.6%) |
| Suspected serious injury crashes | 644 | 773 | -129 (-16.7%) |
| Suspected serious injuries | 759 | 897 | -138 (-15.4%) |
| Suspected minor injuries | 9,470 | — | — |
| Possible injuries | 9,534 | — | — |
| Total people reported injured | 19,763 | — | — |

- 182 fatal crashes produced 190 deaths: 8 crashes killed more than one person.
- 128.1 crashes per day; one death every 46 hours (8,760/190); one serious-injury crash every 13.6 hours; ~54 reported injuries per day.
- 11,962 people with injury status unknown to the reporting officer (not counted in the 19,763).

### Six large Texas counties, 2025 (TxDOT county tables via Orsatti)
| County | Deaths | Crashes | Deaths per 1,000 crashes |
|---|---|---|---|
| Harris | 503 | 107,472 | 4.68 |
| Dallas | 274 | 43,946 | 6.24 |
| Bexar | 190 | 46,744 | 4.06 |
| Tarrant | 190 | 30,433 | 6.24 |
| Travis | 143 | 15,939 | 8.97 |
| El Paso | 70 | 17,848 | 3.92 |
| **Texas statewide** | **3,769** | **538,860** | **6.99** |

- Bexar recorded MORE crashes than Dallas (46,744 vs 43,946) and 84 fewer deaths. Bexar tied Tarrant for third-most deaths in the state.
- Bexar: 8.7% of Texas crashes (46,744/538,860), 5.0% of Texas deaths (190/3,769).
- Travis is the lethality outlier at the top: 8.97 deaths per 1,000 crashes, more than double Bexar's 4.06. El Paso is the least lethal of the six at 3.92.
- Statewide deaths fell 4,150 to 3,769 (-9.2%) on the county-table editions; TxDOT's separate 2025 Crash Facts sheet uses a revised 2024 total of 4,159 and reports -9.38%. Bexar's -11.6% beats either statewide figure.

### Alcohol (TxDOT DUI-alcohol county table)
- 1,621 DUI-alcohol crashes in Bexar County in 2025: 46 deaths, 99 suspected serious injuries.
- Third-highest DUI crash count in Texas, behind Harris (3,090) and Dallas (1,986).
- DUI crashes: 3.5% of all Bexar crashes (1,621/46,744) but 24.2% of Bexar deaths (46/190). Over-representation ratio: 24.2/3.5 = 7.0x.
- Speed-involved table reports 72 deaths. Alcohol and speed overlap; do NOT add 46 + 72.

### Commercial vehicles (TxDOT CMV county table)
- 2,581 CMV-involved crashes (5.5% of county crashes), 16 deaths (8.4% of county deaths), 37 suspected serious injuries.

### San Antonio inside the county (City of San Antonio, Vision Zero SA)
- High Injury Network study (five years of CRIS data, 2019-2023): 65% of fatalities and severe injuries took place on just 3.8% of the streets in the network.
- Pedestrian network: 52.9% of serious crashes on 0.7% of the network.
- City tools: High Injury Network Explorer (interactive map), Vision Zero SA program page. County totals and city figures cover different geographies and windows and must not be compared head to head.

### National context
- NHTSA early estimate for 2025: 36,640 deaths, down 6.7% from 39,254 in 2024; fatality rate 1.10 per 100M VMT, second-lowest ever recorded. Bexar's -11.6% beats the national -6.7% too.

## Original calculations (method stated in the article)
- **Lethality per 1,000 crashes** = deaths / crashes x 1,000, computed for each county from the published table rows (shown above). Bexar 4.06 vs Texas 6.99: a Bexar crash was 41.9% less likely to kill than the statewide average crash ((6.99-4.06)/6.99).
- **Lethality improvement, Bexar:** 2024: 215/48,522 = 4.43 per 1,000; 2025: 4.06. Down 8.3% — so the death decline (-11.6%) outpaced the crash decline (-3.7%): crashes got less lethal, not just fewer.
- **DUI over-representation:** 24.2% of deaths / 3.5% of crashes = 7.0x. A DUI crash in Bexar was roughly 7 times as likely to kill as the average Bexar crash (as a share comparison, not a causal rate).
- **Poisson check on the good news:** a 25-death swing on a baseline of 215 has a Poisson standard deviation of about sqrt(215) = 14.7, so -25 is about 1.7 sigma: consistent with a real improvement but not proof of one on deaths alone. The serious-injury drop (-138 on a baseline of 897, sigma ~30, about 4.6 sigma) is much stronger evidence the improvement is real.
- **CMV lethality share:** 16/190 = 8.4% of deaths from 5.5% of crashes.

## Strongest counterargument
County totals are not exposure-adjusted: no VMT, no population, no road mix in these tables, and the Orsatti report says so explicitly. Bexar's low lethality could reflect that its crashes skew urban and low-speed (San Antonio surface streets) while Travis County's include high-speed rural highways, not that Bexar's roads or drivers are better. The 2024-to-2025 comparison also spans two different table editions processed a year apart, and late reports can revise counts. And the death decline, taken alone, is only ~1.7 sigma: a single bad pileup year could erase it. The serious-injury decline is the stronger signal, and the article must say which number carries the weight.

## Limitations
- No exposure adjustment (VMT, population, vehicle mix) — lethality per crash is not risk per driver or per mile.
- No breakdown by speed, impairment, belt use, or time of day for the fatal crashes in the county tables, so no cause is established for the improvement.
- No city-limits split in this edition; San Antonio-specific figures come from the separate Vision Zero study (different window, 2019-2023) and cannot be compared to the 2025 county numbers.
- Alcohol and speed factors overlap; do not add them. CMV totals include buses and delivery trucks, not just 18-wheelers.
- Counts are from tables processed April 7, 2026; TxDOT may revise as late reports arrive.

## Actionable for readers
- San Antonio drivers: the danger concentrates. The city's High Injury Network Explorer maps the 3.8% of streets where 65% of fatalities and severe injuries happen; check whether your commute runs on one before assuming your risk is average.
- The DUI arithmetic is the actionable core: 3.5% of crashes, 24.2% of deaths. A drunk driver is not a slightly worse driver; on these numbers a DUI crash is about 7 times as likely to kill as the average Bexar crash.
- Anyone comparing Texas counties: use deaths per 1,000 crashes, not raw death counts. Bexar "tied for third-most deaths" while its crashes were the least lethal of the big urban counties except El Paso.
- Check any Texas VIN or crash record through the TxDOT CRIS portal; county tables are public.

## Primary sources (3+)
1. Ryan Orsatti Law, "Bexar County Car Accident Statistics: 2025 Crash Report," updated October 28, 2026 — compiled from TxDOT's official annual crash tables, with processing dates and reproduce-the-math section. https://ryanorsattilaw.com/bexar-county-car-accident-statistics-2025-crash-data-report/
2. Texas Department of Transportation, "Crashes and Injuries by County 2025" (county crash tables; reportable CR-3 data received and processed as of April 7, 2026). https://www.txdot.gov/content/dam/docs/division/trf/crash-records/2025/2025-crashes-injuries-county.pdf
3. NHTSA, "2025 Traffic Death Estimates & 2024 FARS" (36,640 estimated deaths in 2025, down 6.7%; rate 1.10 per 100M VMT). https://www.nhtsa.gov/press-releases/traffic-deaths-2025-early-estimates-2024-annual
4. City of San Antonio, Vision Zero SA — High Injury Network study (2019-2023 CRIS data: 65% of fatalities and severe injuries on 3.8% of streets; pedestrians 52.9% on 0.7%), via the Orsatti report's City resources section. https://www.sa.gov
5. Texas Department of Transportation, Crash Records Information System (CRIS), public crash-data query portal (primary database behind refs 1-2). https://www.txdot.gov
