# Research: America's Safest Quarter in a Decade — While ADAS Crashes Hit All-Time Highs

## Angle
Two federal NHTSA datasets released in July 2026 tell opposite stories about American road safety. The fatality data says Q1 2026 was the safest first quarter in over a decade. The SGO crash data says ADAS crashes are accelerating at 73% year-over-year, with Tesla logging 207 in a single month. Both numbers are real. And they can't be reconciled because the manufacturer behind 85% of the crash reports redacts 99.9% of the details.

## Self-Critique
- **Is this surprising after 587 articles?** Yes. No existing article juxtaposes the Q1 2026 fatality milestone (0.99 per 100M VMT) with the simultaneous SGO ADAS crash record (207 in May 2026). Existing stories cover ADAS reporting asymmetry and overall trends separately, never the specific paradox.
- **Novel contribution:** Connecting two simultaneous NHTSA data releases to show the denominator problem — we can't tell if ADAS makes roads safer or not because the dominant reporter redacts everything.
- **Kill test:** Would a reader share this? Yes — the "safest roads in a decade" framing makes people feel good, and the ADAS data undercuts that comfort in a data-literate way.

## Primary Sources (3+)

### 1. NHTSA Q1 2026 Early Estimates (DOT HS 813 829, July 2026)
- ~7,770 people killed in Q1 2026, down 4.3% from Q1 2025
- Fatality rate: 0.99 per 100 million VMT — lowest Q1 since 2014
- Just above all-time Q1 record of 0.98 (set 15 years ago)
- Americans drove 11 billion more miles than Q1 2025
- 30 states and Puerto Rico saw Q1 declines
- Source: https://www.nhtsa.gov/press-releases/trumps-transportation-department-reminds-drivers-that-speeding-catches-you
- Source: https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813829

### 2. NHTSA 2025 Full-Year Sub-Categories (DOT HS 813 829, July 2026)
- 36,640 deaths in 2025, down 6.7% from 39,254 in 2024
- Annual fatality rate: 1.10 per 100M VMT (second-lowest ever)
- Sub-category declines: urban interstates (-10%), urban arterials (-12%), nighttime (-8%), weekends (-7%), newer vehicles (-12%), rollovers (-11%), ejections (-13%)
- One exception: rural interstates UP 1%
- Speeding-related fatalities estimated down 11% to ~10,035
- Source: https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813829

### 3. NHTSA SGO ADAS Crash Data — Tesla's Record (Electrek analysis, July 22, 2026)
- Tesla logged 207 ADAS crashes in May 2026 — single-month record
- More than all of 2021 combined (157 total)
- H1 2026: 826 crashes, on pace to roughly double 2025's 1,043
- YoY comparison (Jan-Jun): 180 → 261 → 269 → 476 → 826 (73% jump)
- Tesla: 3,763 total unique ADAS crashes — ~85% of entire industry
- 99.9% of Tesla's 3,763 crash narratives redacted as "confidential business information"
- GM, Ford, Honda, Toyota redact "essentially none" of their narratives
- Software version also redacted — can't separate Autopilot from FSD
- May 2026 figure of 207 is a FLOOR due to reporting lag (prior month revised upward by 139)
- Source: https://electrek.co/2026/07/22/tesla-adas-crashes-record-207-one-month/

### 4. NHTSA Standing General Order (background)
- Requires ADAS/ADS crash reporting when system was engaged within ~30 sec of impact
- Severity threshold: airbag deployment, tow-away, injury, fatality, struck pedestrian/cyclist
- CBI (confidential business information) requests allowed for narrative, feature version, ODD status
- Source: https://www.nhtsa.gov/laws-regulations/standing-general-order-crash-reporting

### 5. Tesla Robotaxi (ADS) Unredaction Context (May 2026)
- Tesla DID eventually unredact its 17 ADS (Level 3-5 robotaxi) crash narratives
- BUT: all 3,763 Level 2 ADAS (Autopilot/FSD customer car) narratives remain fully redacted
- Tesla argued it would "suffer financial harm" if ADAS crash data became public
- Source: https://electrek.co/2026/05/15/tesla-unredacts-robotaxi-crash-narratives-nhtsa/

## Journalist
**Axle McScatter** — Data Visualization Editor. "Statistical roundups, national trends, methodology pieces." This is a data methodology story at its core.

## Key Data Points for Article
- 0.99 fatalities per 100M VMT (Q1 2026) vs. 207 ADAS crashes in one month (May 2026)
- 36,640 total deaths in 2025 vs. 826 Tesla ADAS crashes in H1 2026 alone
- 85% of all ADAS crash reports come from one manufacturer
- 99.9% of that manufacturer's reports are blacked out
- The denominator problem: Tesla doesn't disclose ADAS/FSD miles driven, so we can't compute a per-mile crash rate

## Actionable Insights
1. If shopping for a car with ADAS: NHTSA's public crash data is functionally useless for comparing Tesla's system to competitors because Tesla redacts everything while others don't
2. The 0.99 fatality rate milestone is real — roads ARE getting safer. But the ADAS crash surge is invisible to the fatality data because most ADAS crashes involve property damage, injuries, and tow-aways, not deaths
3. Check your VIN at nhtsa.gov/recalls regardless of what assist tech your car has
