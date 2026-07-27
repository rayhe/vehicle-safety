# Research: NHTSA Speed Campaign vs. Vehicle Gap

## News Hook
NHTSA launched its July 2026 "Speeding Catches Up With You" campaign (July 6-31). Key stats:
- Speeding-related fatalities declined 11% in 2025: from 11,288 to 10,035 (back to pre-pandemic 2019 levels)
- Speeding accounts for 29% of all traffic fatalities (2024: 11,288 of 39,254)
- Q1 2026: fatality rate dropped to 0.99 per 100M VMT — first time below 1.0 in over a decade
- Source: https://www.nhtsa.gov/press-releases/trumps-transportation-department-reminds-drivers-that-speeding-catches-you

## Original Analysis: Sobriety-Adjusted Death Rate
Novel FARS cross-tabulation: strip impairment from each vehicle's death rate to isolate "sober factors" (speed, vehicle design, road design, human error).

Formula: Sober Death Rate = rate × (1 - anyPct/100)

### Key findings:
- **Fleet-weighted average rate: 1.80 per 100M VMT**
- **Fleet-weighted sober rate: 1.44 per 100M VMT**
- **Impairment explains only 19.9%** of the fleet-weighted death rate
- **68x gap** persists in sober death rate: Veloster (7.05) vs Ram 1500 (0.10)

### Top 10 highest sober death rates (deaths > 200):
1. Hyundai Veloster: 7.05 (total rate 8.54, 17.4% impaired)
2. Chevrolet Tracker: 6.84 (7.83, 12.7%)
3. Toyota Land Cruiser: 5.71 (6.27, 8.9%)
4. Ford Mustang: 4.70 (6.02, 21.9%)
5. Toyota Solara: 4.08 (4.25, 4.1%)
6. Nissan Maxima: 4.04 (5.11, 20.9%)
7. Chevrolet Cobalt: 3.96 (5.1, 22.4%)
8. Chevrolet Impala: 3.93 (5.0, 21.4%)
9. Chevrolet S-10: 3.84 (4.83, 20.5%)
10. Cadillac Seville: 3.48 (3.89, 10.5%)

### Bottom 5 (safest when sober):
1. Ram 1500: 0.10
2. Toyota RAV4: 0.16
3. Chevrolet Traverse: 0.16
4. Dodge Caravan: 0.18
5. Subaru Forester: 0.21

## Sources
1. NHTSA "Speeding Catches Up With You" campaign, July 2026
   - https://www.nhtsa.gov/press-releases/trumps-transportation-department-reminds-drivers-that-speeding-catches-you
2. NHTSA 2025 Traffic Death Estimates & 2024 FARS
   - https://www.nhtsa.gov/press-releases/traffic-deaths-2025-early-estimates-2024-annual
3. NHTSA FARS database 2014-2023 (our fars_output.js)
   - https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
4. IIHS fatality statistics
   - https://www.iihs.org/topics/fatality-statistics

## Angle
NHTSA's speed campaign addresses a behavioral factor (29% of deaths). But our FARS analysis shows impairment — the OTHER behavioral factor — explains only 20% of the death rate gap between vehicles. Combined: behavior (speed + impairment) explains ~49% of fatalities. The other half is structural: vehicle design, road design, fleet age. A 68x gap in sober death rates means your vehicle choice is as important as your decision to drive sober.

## Journalist: Axle McScatter (Data Visualization Editor)
## Kicker: By The Numbers
