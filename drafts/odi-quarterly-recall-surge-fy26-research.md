# Research Notes: NHTSA ODI Quarterly Recall Pipeline Surge

## News Peg (July 2026)
- NHTSA ODI Quarterly Metrics publicly released, showing FY26 Q2 data
- Q1 2026 fatality rate hit 0.99 per 100M VMT (released July 8, 2026)
- Ford recalled ~1M vehicles in a single week (July 27, 2026)

## Primary Source: NHTSA Office of Defects Investigation Quarterly Metrics
URL: https://www.nhtsa.gov/office-defects-investigation-quarterly-metrics

### Raw Data (4 quarters):

| Metric | FY25 Q3 | FY25 Q4 | FY26 Q1 | FY26 Q2 |
|--------|---------|---------|---------|---------|
| VOQs (complaints) | 18,421 | 20,196 | 17,425 | 20,262 |
| Equipment recalls | 19 | 21 | 25 | 16 |
| Vehicle recalls | 240 | 208 | 253 | 201 |
| Total recalls | 265 | 234 | 283 | 226 |
| Recall population | 8,068,300 | 9,412,504 | 9,528,595 | 12,625,383 |
| Investigations opened | 5 | 10 | 14 | 9 |

### Original Calculations:

1. **Average vehicles per recall:**
   - FY25 Q3: 8,068,300 / 265 = 30,446
   - FY25 Q4: 9,412,504 / 234 = 40,225
   - FY26 Q1: 9,528,595 / 283 = 33,671
   - FY26 Q2: 12,625,383 / 226 = 55,865
   → Q2 average is 83% higher than Q3. The average recall is getting MUCH larger.

2. **VOQs per investigation opened:**
   - FY25 Q3: 18,421 / 5 = 3,684
   - FY25 Q4: 20,196 / 10 = 2,020
   - FY26 Q1: 17,425 / 14 = 1,245
   - FY26 Q2: 20,262 / 9 = 2,251
   → Volatile but investigation count dropped from 14 to 9 as complaints surged

3. **Total 4-quarter recall volume:**
   - 8,068,300 + 9,412,504 + 9,528,595 + 12,625,383 = 39,634,782
   - US registered vehicles: ~283 million
   - Recall rate: 39.6M / 283M = 14.0% of fleet recalled per year
   - That's 1 in 7 vehicles

4. **Recall population trajectory (annualized):**
   - If Q2 pace continues: 12.6M × 4 = 50.5M/year = 17.8% of fleet
   - Prior year at Q3+Q4 pace: ~34-36M/year

5. **Deaths vs. recalls context:**
   - Q1 2026: 7,770 deaths (0.99 rate)
   - Q1 2026: 9.5M vehicles recalled
   - Ratio: ~1,222 vehicles recalled per death
   - But most recalls are for non-fatal defects (labels, software, display bugs)

## Supporting Sources:

1. NHTSA ODI Quarterly Metrics — https://www.nhtsa.gov/office-defects-investigation-quarterly-metrics
2. Q1 2026 fatality data — NHTSA CrashStats, July 8, 2026
3. Ford recall week — USA Today, July 27, 2026
4. Full-year 2025 deaths — lowest since 2019, rate 1.10 (2nd lowest ever)
5. FARS 2014-2023 dataset (embedded in site)

## Kill Test
Is this genuinely newsworthy? YES.
- The ODI quarterly data table exists on NHTSA's website but nobody has run these specific calculations
- 14% of the US fleet being recalled annually is a staggering number
- The average recall size nearly doubling in a year suggests platform-level defects in high-volume vehicles
- The inverse relationship between deaths declining and recalls surging is genuinely counterintuitive
- Novel angle: the recall pipeline is a VOLUME business, not a safety business

## Journalist: Axle McScatter
- Data obsessive, loves tables and regression lines
- Perfect for a numbers-heavy piece about quarterly trends
- Kicker: By The Numbers

## Strongest Counterargument
The quarterly variation could be noise — a single large recall (say, a 5M-vehicle Ford campaign) could spike Q2 without indicating a systemic trend. And more recalls could indicate BETTER defect detection, not worse quality. The investigation count is too small (5-14 per quarter) to draw trend conclusions.

## Limitations
- ODI quarterly data is only 4 quarters shown; longer trend would strengthen the analysis
- Recall population includes duplicates (same vehicle recalled for multiple defects)
- "Vehicle recalls" vs "equipment recalls" distinction may affect population count methodology
- Cannot determine from public data what fraction of recalls address defects that could actually cause fatalities vs. purely regulatory non-compliance
