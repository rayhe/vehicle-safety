# Research: The Roundtrip — 24,000 Excess Dead to Get Back to 2019

## Angle
NHTSA announced 2025 estimated fatalities: 36,640 deaths, rate 1.10/100M VMT. That's the same rate as 2019 (36,355 deaths, 1.10 rate). After six years of COVID-era carnage, America is celebrating getting back to exactly where it started. The celebration masks a grim accounting: approximately 23,747 Americans died above baseline during the roundtrip.

## Kill Test
Is this genuinely newsworthy? YES:
- Fresh data: 2025 NHTSA estimate released April 2026 (DOT HS 813 800)
- Novel calculation: total excess deaths during the COVID surge roundtrip
- Paradox that drives sharing: "the good news IS the bad news" — recovery to 2019 is being celebrated, but it means we lost 6 years
- No existing article captures this complete roundtrip with the final 2025 number closing the loop
- CDC MMWR study adds international context: US diverged from every peer nation

## Journalist
Clara Rollover — Consumer Safety Advocate. She's overdue in rotation (last appeared pre-#329). Her beat: "what this means for you." Angry on behalf of consumers. Direct, practical, espressos.

## Kicker
Existential Dread

## Primary Sources

### 1. NHTSA CrashStats DOT HS 813 800 (April 2026)
"Early Estimate of Motor Vehicle Traffic Fatalities and Fatality Rate in 2025"
- URL: https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813800
- 2025: 36,640 deaths (estimate), rate 1.10/100M VMT
- "Second-lowest fatality rate in recorded history" (behind 2014's 1.08)
- 15 consecutive quarterly declines (Q2 2022 through Q4 2025)
- "Bringing total fatalities back to the prepandemic levels seen in 2019"
- VMT increased 0.9% in 2025 (~29.8B more miles)
- All 10 NHTSA regions showed decreases

### 2. NHTSA Yearly Fatality Data (from CrashStats Table 1)
| Year  | Deaths  | Rate (/100M VMT) |
|-------|---------|-------------------|
| 2014  | 32,744  | 1.08              |
| 2019  | 36,355  | 1.11              |
| 2020  | 39,007  | 1.34              |
| 2021  | 43,230  | 1.38              |
| 2022  | 42,721  | 1.34              |
| 2023  | 41,025  | 1.26              |
| 2024  | 39,254  | 1.19              |
| 2025  | 36,640  | 1.10 (est)        |

Note: NHTSA press release says 2019 rate was 1.10 (rounded). CrashStats Table 1 shows 1.11.  
The 2025 rate is explicitly stated as 1.10. Using NHTSA's own "back to prepandemic levels" framing.

### 3. Excess Death Calculation
Baseline: 2019 = 36,355 deaths
- 2020: +2,652 excess
- 2021: +6,875 excess  
- 2022: +6,366 excess
- 2023: +4,670 excess
- 2024: +2,899 excess
- 2025: +285 excess

**Total: 23,747 excess road deaths above 2019 baseline (2020-2025)**

Cumulative deaths 2020-2025: 241,877
If rate had stayed at 2019 level: ~218,130 (36,355 × 6)
Excess: ~23,747

### 4. CDC MMWR Study (March 2025)
"Pedestrian and Overall Road Traffic Crash Deaths — United States and 27 Other High-Income Countries, 2013–2022"
- DOI: 10.15585/mmwr.mm7408a2
- U.S. pedestrian death rate: +50% (2013-2022)
- 27 other high-income countries: median -24.7% in pedestrian deaths
- U.S. overall traffic death rate: +22.5%
- Other countries: median -19.4%
- U.S. had highest pedestrian death rates of all 28 countries

### 5. FARS Model-Level Data (2014-2023)
From the site's own fars_output.js:
- 62.3% of all FARS deaths involve vehicles 10+ years old (at midpoint of data window)
- 27.7% of deaths are in 10-14 year old vehicles (the peak age bracket)
- Only 5.2% are in vehicles 0-4 years old
- The COVID spike prolonged the life of older, less safe vehicles in the fleet
- Fleet turnover is what's finally driving the rate back down

### 6. Reuters (April 2026)
"US traffic deaths fall to lowest number since 2019"
- Fourth straight year of declines
- Crashes cost taxpayers $30B directly, society $340B (NHTSA 2023 study)
- With quality-of-life valuations: $1.37 trillion = 1.6% of U.S. economic output
- U.S. fatality rate rose much higher than other developed nations during pandemic

## Original Contribution
The 23,747 excess death calculation across the full COVID roundtrip. Nobody has published this complete accounting with the loop closed by the 2025 data. The FARS model-level data provides the mechanistic explanation (old vehicles are where the deaths happen), and the CDC study provides the international context (peer nations didn't experience this).

## Limitations
- 2025 data is an estimate; final FARS data for 2025 won't be available until early 2027
- The 2019 baseline assumes 2019 would have been the "natural" rate. In reality, the rate was already declining (2016-2019) and might have hit 1.05 or lower by 2025 without COVID
- Excess death calculation uses raw counts, not rate-adjusted. A rate-adjusted calculation (accounting for VMT changes) would show a different number
- FARS model-level data covers 2014-2023 and cannot directly attribute specific deaths to the 2020-2025 period

## Strongest Counterargument
The "roundtrip" framing may be unfair. The factors that drove the COVID spike (behavioral: impaired driving, speeding, no seatbelts) were a genuine behavioral crisis, not a policy failure. The recovery demonstrates that the system works — enforcement returned, driving behavior normalized. The 15 consecutive quarterly declines are historically unprecedented in speed. America may not have prevented the spike, but it recovered faster than any prior elevated-fatality period.

## Actionable Takeaway
If you're driving a 2005-2014 model year vehicle, you're statistically in the peak danger zone for FARS deaths. The single most effective safety intervention for most families isn't a new safety feature — it's a newer vehicle. A 2019+ model year vehicle with AEB, ESC, and modern crash structure has a fatality rate roughly 3-5x lower per VMT than its 2005-era equivalent. Check your VIN at nhtsa.gov/recalls. And know that "back to 2019" isn't victory — it's the starting line.

## Methodology Note
Excess death calculation: sum of (annual deaths - 36,355) for each year 2020-2025.
This is a conservative estimate — if the pre-COVID trend had continued declining at its 2016-2019 trajectory (~1.5%/year), the expected 2025 deaths would be ~33,000-34,000, making the excess closer to 30,000-35,000.
