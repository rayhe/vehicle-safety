# Research — #921 "Thirty Percent, Flat"

**Journalist:** Dale Impactor III (Toxicology Desk Chief; least-used voice at 14 stories)
**Kicker:** Sobriety Report
**Slug:** `921-thirty-percent-flat`
**News hook:** NHTSA launched its annual *Drive Sober or Get Pulled Over* Labor Day enforcement campaign (Aug 19–Sep 7, 2026), touting a "nearly 4%" decline in 2024 alcohol-impaired deaths (NHTSA press release, Sep 2026, Administrator Jonathan Morrison).

## The numbers (primary sources)

- **2024 alcohol-impaired fatalities: 11,904** — 30% of all U.S. traffic fatalities, down 3.9% from 12,382 in 2023. One every 44 minutes. Source: NHTSA *Traffic Safety Facts 2024 Data: Alcohol-Impaired Driving* (DOT HS 813 815, crashstats.nhtsa.dot.gov).
- **2023 alcohol-impaired fatalities: 12,382.** Source: same report, year-over-year table.
- **Total fatalities: 39,254 (2024) vs 41,025 (2023).** Source: NHTSA *Quick Facts 2024* (DOT HS 813 809): 36,297 fatal crashes, 39,254 fatalities in 2024; 41,025 in 2023.
- **Demographics (2024):** ages 21–24 had the highest share of alcohol-impaired drivers in fatal crashes (28%); males 22% vs females 16%. Source: TSF 2024.
- **Campaign framing:** "the largest demographic of alcohol-impaired drivers was men ages 21-34, and fatal collisions involving an alcohol-impaired driver occurred at a rate three times higher at night." Source: NHTSA Drive Sober Labor Day 2026 press release.
- **Context:** Jan–Sep 2025 early estimates: 27,365 deaths, down 6.4% vs 2024; rate 1.10/100M VMT. Source: NHTSA press release (Apr 2026, 2025 early estimates + 2024 annual).

## The original calculation (this is the story)

Alcohol-impaired *share* of all deaths:
- 2023: 12,382 / 41,025 = **30.18%**
- 2024: 11,904 / 39,254 = **30.32%**

The share moved 0.14 points. Alcohol deaths fell 3.9%; total deaths fell 4.3%. The tide went out for everyone, including the drunk drivers, at essentially the same rate. NHTSA's campaign framing ("nearly 12,000 lives lost... we are using every tool") treats a general decline as an enforcement win, but there is **zero evidence of impairment-specific progress** — the 30% slice of the pie is unchanged to one decimal place.

One every 44 minutes check: 365×24×60 = 525,600 min/yr ÷ 11,904 = 44.15 min. Correct.

## Kill test
- Newsworthy: Yes — national campaign launched two weeks ago, NHTSA headline stats in the news, Sept 2026 NSC data shows H1 2026 still elevated in 10+ states. The "victory lap is premature" framing is a genuine novel angle on current numbers.
- Novel: grep of 811 existing stories finds nothing on the flat impairment share or the 44-minute stat. Dale has done BAC-threshold, interlocks, DADSS, poly-impairment — not the share-decomposition.
- Data: 4+ primary NHTSA sources, all linked, all checkable.

## Counterargument (strongest form, stated honestly)
478 fewer alcohol-impaired deaths is 478 families not destroyed — the absolute decline is real and matters regardless of the share math. The overall death decline could plausibly include enforcement effects (interlocks, checkpoints, rideshare) that ARE working but being offset by other rising risks (speeding was a factor in 29% of fatalities per NSC 2024 data). A flat share doesn't prove enforcement failed; it proves we can't tell from the topline. Also: FARS alcohol data relies on multiple imputation for missing BAC values (Rubin & Schafer 1998) — both years' figures carry imputation uncertainty.

## Limitations
- Alcohol-impaired = BAC ≥ .08 involving at least one driver (FARS definition); drug-impaired deaths are a separate, larger and murkier bucket (NHTSA's 2022 drug-prevalence study found 69% of killed drivers positive for ≥1 drug category — different metric, different study, do not conflate).
- 2024 total 39,254 is the FARS Annual Report File figure; early estimate was 39,345. Share computed on final/ARF numbers.
- Cannot attribute the decline to any specific cause (enforcement, ADAS, fleet turnover, VMT mix) from these aggregates.

## Actionable takeaways (required)
- For drivers: the risk profile is brutally specific — men 21–34, at night (3× rate). Designate a sober driver or rideshare; that's the only intervention the data supports at the individual level.
- Policy: AAA (June 2026 state briefs): universal ignition-interlock laws cut fatal impaired-driving crashes up to 26%; lowering per-se BAC to 0.05 → ~11% fewer impaired-driving fatalities. The U.S. is at 0.08 while Utah already went 0.05.
- VIN check: nhtsa.gov/recalls (standard, not central to this piece).

## References to cite (inline + refs section)
1. NHTSA, *Traffic Safety Facts 2024 Data: Alcohol-Impaired Driving*, DOT HS 813 815 — https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813815
2. NHTSA, *Quick Facts 2024*, DOT HS 813 809 — https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813809
3. NHTSA press release, "Drive Sober or Get Pulled Over, Labor Day 2026" — https://www.nhtsa.gov/press-releases/drive-sober-or-get-pulled-over-labor-day-2026
4. NHTSA press release, "2025 Traffic Death Estimates & 2024 FARS" — https://www.nhtsa.gov/press-releases/traffic-deaths-2025-early-estimates-2024-annual
5. AAA Foundation, Impaired Driving State Briefs, June 2026 (Mississippi brief) — https://newsroom.aaa.com/wp-content/uploads/2026/08/Impaired-Driving-State-Briefs-Mississippi-June-2026.pdf
6. NHTSA FARS overview — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
