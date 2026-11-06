# Research: #1412 — We Ranked Tesla the Safest Carmaker in America. The Math Was Wrong.

**Slug:** 1412-tesla-safest-ranking-correction
**Journalist:** Axle McScatter (statistical roundup beat; "I ran the numbers. Then I ran them again.")
**Kicker:** By The Numbers
**Date:** 2026-11-06

## The angle (1-2 sentences)
Two weeks ago this site ranked Tesla the safest carmaker in America at 0.06 deaths per 100M miles, 23x safer than Chevrolet. That ranking is wrong. The fleet estimate behind it uses 2018-2023 average sales applied to the whole 2014-2023 window, which credits Tesla with a 3.7-million-car fleet in years when it had barely sold 50,000 cars. Time-weighting the fleet by actual annual US sales puts Tesla at ~0.37, not 0.06. Audi, not Tesla, is the safest carmaker in America.

## Kill test
- Genuinely newsworthy? Yes. It reverses the site's own headline finding from #1258 (Oct 23, 2026), changes the #1 safest brand, and collapses a 23x gap to ~4x. A data site that won't correct its own ranking isn't a data site.
- Novel? Zero coverage in the archive of a time-corrected make ranking ("tesla-safest" follow-ups, "re-rank", "correction" all return nothing; #1258 itself is the only make-ranking piece). The time-weighted fleet calculation is an original contribution.
- Verdict: PROCEED.

## Primary sources (3+)
1. **NHTSA FARS 2014-2023** (via fars_output.js, 337 models): Tesla 278 deaths (Model S 100, Model 3 92, Model Y 57, Model X 29). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. **fars_process.py (this repo's own methodology)**: fleet = annual sales (avg ~2018-2023) x 8.75; VMT = fleet x class annual miles (Sedan 11,500; SUV 12,500) x 10 years. SALES_DATA: Model 3 180,000/yr, Model Y 200,000/yr, Model S 20,000/yr, Model X 18,000/yr. Implied Tesla fleet 3,657,500.
3. **Tesla global deliveries by year (Tesla 10-K / delivery releases, via YCharts/Fiscal.ai)**: 2014: 31,655; 2015: 50,698; 2016: 76,230; 2017: 103,181; 2018: 245,506; 2019: 367,656; 2020: 499,647; 2021: 936,222; 2022: 1,313,851; 2023: 1,808,581. Global sales grew 57x across the window. https://ycharts.com/indicators/tesla_inc_tsla_total_deliveries_currencys_currencys
4. **Cox Automotive / Kelley Blue Book US Tesla sales estimates**: 2023: 651,950-654,888; 2022: 522,000 ("more than 500,000"); 2021: ~342,000; 2020: ~206,000; 2019: ~192,000; 2018: ~191,000; 2017: ~48,000-50,000. 2023 Model Y 394,497 and Model 3 220,910 (KBB). https://www.kbb.com/car-news/america-hit-peak-tesla-in-february-2023/ and https://www.autoconnectedcar.com/2024/01/almost-1-2-million-evs-sold-in-us-in-2023-tesla-tops-list/
5. **#1258 research file** (drafts/1258-tesla-safest-carmaker-chevrolet-last-research.md): the ranking being corrected, including its own limitations section (fleet youth, demographics) which did NOT address the denominator-growth distortion.

## The numbers
### The error
- Site method: Tesla fleet = (180k + 200k + 20k + 18k) x 8.75 = **3,657,500 cars**.
- That fleet is sized to 2018-2023 sales. In 2014 Tesla sold ~17,500 cars in the US. In 2015, ~25,000. The 3.66M fleet never existed during most of the death window.
- Site-method VMT: 3,657,500 x ~12,000 mi/yr x 10 yr = 4,389 hundred-million miles. 278 deaths / 4,389 = **0.063**.

### The correction (time-weighted fleet)
US Tesla sales by year (Cox/KBB estimates) and cumulative registered fleet:
| Year | US sales | Cumulative fleet (year-end) |
|---|---|---|
| 2014 | 17,500 | 47,500 |
| 2015 | 25,000 | 72,500 |
| 2016 | 46,000 | 118,500 |
| 2017 | 50,000 | 168,500 |
| 2018 | 191,000 | 359,500 |
| 2019 | 192,000 | 551,500 |
| 2020 | 206,000 | 757,500 |
| 2021 | 342,000 | 1,099,500 |
| 2022 | 522,000 | 1,621,500 |
| 2023 | 652,000 | 2,273,500 |

- Sum of year-end fleets = 7,070,000 vehicle-years. At 90% survival (young fleet): 6,363,000.
- VMT at the site's own class-weighted ~11,810 mi/yr: 6,363,000 x 11,810 = 751 hundred-million miles.
- **Corrected Tesla rate: 278 / 751 = 0.37 deaths per 100M VMT.**
- Sensitivity: survival 0.85 -> 0.39; survival 1.00 -> 0.33. Robust range **0.33-0.39**. Correction factor vs published 0.06: **~5.8x**.
- Early-year sales uncertainty barely matters: 2014-2017 contribute only 5.8% of vehicle-years; even a 50% error there moves the rate by under 3%.

### Corrected top of the make ranking (fleet >= 1M)
| Rank | Make | Rate | Change |
|---|---|---|---|
| 1 | Audi | 0.20 | was #3, now #1 |
| 2 | Mercedes-Benz | 0.33 | flat sales, no material change |
| 3 | Tesla | ~0.37 | was #1 at 0.06 |
| 4 | Acura | 0.37 | flat sales, no material change |
| 5 | Kia | 0.38 | grew ~30%, distortion small |

- Gap vs Chevrolet (1.37, sales roughly flat ~2.0M/yr, distortion ~1.1x): **23x -> ~3.7x**.
- Control check: Chevrolet, Audi, Mercedes-Benz all had roughly flat US sales across 2014-2023, so their published rates stand. The distortion is specific to fast growers. Tesla is the extreme case (US sales up ~37x, 2014 to 2023).
- Within Tesla: Model S rate 0.50 (oldest, performance) vs Model Y 0.03 (newest, largest fleet share) shows the same growth distortion at model level. Model Y's 0.03 is the most distorted single number in the dataset.

## Original contribution
The time-weighted fleet correction itself: nobody has re-run the make ranking with year-by-year fleet exposure. It reverses the #1 spot and quantifies a systematic bias in estimated_rate that applies to every fast-growing brand in the dataset.

## Limitations (must state in article)
- US annual Tesla sales are Cox/KBB estimates; Tesla does not report country-level sales. The early-year figures (2014-2017) are the least certain, but they contribute under 6% of vehicle-years.
- Deaths are not broken out by year in the dataset, so the correction assumes deaths track fleet exposure proportionally. If Tesla deaths skewed even later than fleet growth (likely, given Model Y's 2020 launch), the true rate is slightly higher, not lower.
- Survival assumption (90%) is an estimate; the 0.33-0.39 range covers 85-100%.
- Annual miles (11,810) is the site's class-weighted estimate, not odometer data. Tesla owners may drive more or fewer miles than average; a 10% miles error moves the rate ~10%.
- FARS captures deaths, not injuries or crashes. The correction changes the rate, not the underlying death count.
- The make ranking still uses estimated VMT, not odometer readings; +/-15% uncertainty for low-volume models per methodology.

## Strongest counterargument (must state at full strength)
The correction does not make Tesla unsafe. At ~0.37 Tesla is still the third-safest make in America, ahead of 25 other brands, and its cars are young, with modern structures and standard active safety. The 23x headline was wrong, but the underlying story, that Tesla's fleet dies at a below-average rate, survives the correction. Also: a critic could argue the whole exercise is inside baseball, re-litigating a two-week-old ranking instead of finding a new story. The answer is that the ranking is the site's most-cited recent finding and it is wrong by a factor of six; leaving it uncorrected would be worse. Finally, Audi's 0.20 lead depends on the same estimated-VMT method; if Audi's fleet is overestimated for any reason, the #1 spot could move again.

## Actionable insight
Shopping by brand safety ranking? Ask how the rate was built. Any fatality rate that divides a decade of deaths by a fleet sized to recent sales flatters every fast-growing brand and punishes every shrinking one. Check the sales curve before trusting the ranking. And check any VIN at nhtsa.gov/recalls.

## Headline candidates
- "We Ranked Tesla the Safest Carmaker in America. The Math Was Wrong."
- "Tesla Isn't the Safest Carmaker. Audi Is. We Ran the Numbers Wrong."
- "The 23x Gap Was a Denominator Error. Tesla Is Still Safe, Just Not #1."
