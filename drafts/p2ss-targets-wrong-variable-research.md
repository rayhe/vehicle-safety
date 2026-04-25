# Research Notes: P2SS Targets the Wrong Variable

## Angle
NHTSA announced "Pathways to Safer Streets" (P2SS) on April 21, 2026 — self-described as "the most comprehensive traffic safety initiative in NHTSA's history." It targets 8 driver-behavior strategies: law enforcement, impaired driving, seat belts, speeding, distraction, post-crash survival, federal partnerships, and data tools.

**The thesis:** P2SS focuses almost entirely on driver behavior (impairment, seatbelts, speeding, distraction). But FARS data shows that impairment rates are effectively constant across vehicle models (~20%), while death rates vary by 280x (0.03 to 8.54 per 100M VMT). The initiative addresses the ~20% impairment slice while ignoring the 280x engineering variable.

**Kill test:** This is genuinely newsworthy because:
1. P2SS was announced 4 days ago — extremely timely
2. We have FARS data that directly challenges the initiative's foundational assumption
3. It's a falsifiable policy argument, not a data dump
4. The $80M post-crash blood transfusion funding is interesting but doesn't address the root cause

## Key Data Points (from FARS cross-tabulation)

### Impairment is constant (~20%)
- Overall average impairment: 20.0% across 490,736 drivers in fatal crashes
- Range across 200+ vehicle models: roughly 8% (Subaru Ascent) to 32% (Buick Park Avenue)
- But most models cluster within 18-24% — a narrow band

### Death rates vary by 280x
- Tesla Model Y: 0.03 per 100M VMT
- Hyundai Veloster: 8.54 per 100M VMT
- Spread: 284x

### P2SS strategies vs data reality
1. **Impaired driving focus:** FARS shows impairment is ~20% everywhere regardless of vehicle. "Targeting" impairment helps the ~20% impaired fraction but ignores why the same 20% impairment rate produces death rates from 0.03 to 8.54.
2. **Seat belt focus:** "Nearly half of fatalities involve unbelted" — real issue, but some vehicles protect even unbelted occupants better than others protect belted ones.
3. **Speeding focus:** Vehicle engineering determines whether speed kills. A modern SUV at 70mph absorbs impacts that destroy a 2003 sedan at 45mph.
4. **Post-crash survival ($80M blood transfusions):** 37% mortality reduction sounds impressive, but only for those who survive long enough to receive care. Vehicle structure determines initial survival.

### What P2SS doesn't address
- Fleet age (vehicles with highest death rates are older designs still on the road)
- Vehicle engineering standards (crashworthiness improvements could shift the entire curve)
- Excess deaths from aging fleet: Honda Accord has 4,997 excess deaths above expected; Ram 1500 has 4,442 FEWER deaths than expected
- The $80M blood transfusion budget vs the billions in excess deaths from poor vehicle engineering

## Primary Sources (3+ required)

1. **NHTSA P2SS announcement** (April 21, 2026) — via DOT / GM Authority reporting
   - URL: https://gmauthority.com/blog/2026/04/nhtsa-announces-p2ss-road-safety-initiative-to-reduce-traffic-fatalities/
   
2. **IIHS Fatality Statistics — Alcohol** (2023 data, posted July 2025)
   - 31% of fatally injured passenger vehicle drivers had BAC ≥ 0.08%
   - URL: https://www.iihs.org/research-areas/fatality-statistics/detail/alcohol

3. **NHTSA FARS Database** (2014-2023) — our primary data source
   - URL: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
   
4. **NHTSA ANPRM on Advanced Impaired Driving Prevention Technology** (Dec 2023)
   - Bipartisan Infrastructure Law mandate
   - URL: https://www.nhtsa.gov/press-releases/drive-sober-campaign-launch-winter-2023

5. **IIHS Vehicle Size and Weight** — vehicle engineering vs outcomes
   - URL: https://www.iihs.org/topics/vehicle-size-and-weight

## Novel Contribution
Cross-tabulating FARS impairment rates with per-VMT death rates across 200+ vehicle models demonstrates that driver behavior variables (the P2SS focus) are relatively constant across the fleet, while vehicle engineering (which P2SS barely addresses) explains the dominant share of outcome variance. Policy conclusion: the single most effective safety intervention isn't better drivers — it's newer cars.

## Limitations
- FARS only captures fatal crashes — the 20% impairment rate may differ for non-fatal crashes
- Death rate calculations use VMT estimates, not actual odometer data (±15% uncertainty for low-volume models)
- P2SS may have additional details not in the public summary
- Comparing "impairment constant" across vehicles doesn't prove vehicle choice caused the rate difference — demographic confounders (age, income, geography) affect both vehicle choice and crash risk

## Strongest Counterargument
P2SS might argue that targeting the 20% impaired fraction prevents the crashes in the first place, not just the deaths. If impaired driving causes ~29% of fatalities (IIHS 2023), eliminating it prevents ~10,000-11,000 deaths/year. Vehicle engineering improvements work after the crash happens; behavioral interventions prevent the crash from occurring. Both matter — but P2SS argues (implicitly) that crash prevention is cheaper per life saved than crashworthiness mandates.

## Journalist
Dale Impactor III — Toxicology Desk Chief. Sardonic, statistical, loves treating impairment data like sports stats. This is directly his beat: NHTSA's impaired driving assumptions vs what the toxicology data actually shows.

## Kicker
Sobriety Report

## Headline Ideas
- "NHTSA's New Safety Plan Spends $80 Million on Blood. The Cars Cost More."
- "America's Biggest Safety Initiative Just Targeted the Wrong Variable."
- "Pathways to Safer Streets Paves Right Past the Cars."
