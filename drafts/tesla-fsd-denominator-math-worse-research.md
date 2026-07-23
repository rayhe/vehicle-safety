# Research: Tesla FSD Denominator Math

## Thesis
Tesla disclosed 1.48M active FSD subscriptions in its Q2 2026 earnings report (July 22, 2026). Cross-referenced with NHTSA's Standing General Order crash data analyzed by Electrek, this is the first time anyone can compute a per-subscriber ADAS crash rate using Tesla's own numbers. The result: crashes are growing faster than subscribers, meaning the per-subscriber crash rate is rising, not falling.

## Primary Sources

### Source 1: Tesla Q2 2026 Earnings Report (July 22, 2026)
- Published via Tesla IR, compiled by StockTitan
- URL: https://www.stocktitan.net/news/TSLA/tesla-releases-second-quarter-2026-financial-opf5vkit2vhk.html
- Key data:
  - Active FSD subscriptions: 1.48 million (up 56% YoY)
  - Q2 2025 FSD subscribers (derived): ~949,000 (1.48M / 1.56)
  - NA attach rate: >55% of new deliveries
  - Vehicle deliveries Q2 2026: 480,126 (up 25% YoY)
  - GAAP operating income: $398M (down 57%)
  - Operating margin: 1.4% (was 4.1%)
  - Free cash flow: -$1.09B
  - CapEx: $5.79B (up 142%)
  - Cybercab production started, public road testing commenced
  - Robotaxi: 7 metros (Austin, Dallas, Houston, Miami, Orlando, Tampa unsupervised; SF Bay supervised)
  - FSD v14 lite began delivering to US customers

### Source 2: Electrek ADAS Crash Analysis (July 22, 2026)
- URL: https://electrek.co/2026/07/22/tesla-adas-crashes-record-207-one-month/
- Methodology: Merged NHTSA's latest SGO ADAS export with full archive back to 2019, deduplicated to latest version of each report, isolated Tesla Level 2 records
- Key data:
  - May 2026: 207 crashes (single-month record, larger than all of 2021 combined at 157)
  - H1 2026: 826 crashes (73% jump YoY from 476)
  - H1 historical trend: 180 (2022) → 261 (2023) → 269 (2024) → 476 (2025) → 826 (2026)
  - Total cumulative: 3,763 unique crashes (~85% of entire industry ADAS reports)
  - 99.9% of crash narratives REDACTED by Tesla
  - Software version field redacted (can't separate Autopilot from FSD crashes)
  - GM, Ford, Honda, Toyota redact "essentially none" of their narratives
  - 207 is a floor (reporting lag: latest export revised prior May figure upward by 139 crashes)
  - SGO threshold: airbag deployment, tow-away, injury, fatality, or struck pedestrian/cyclist

### Source 3: NHTSA SGO Background
- Standing General Order (SGO) requires automakers to report ADAS crashes meeting severity threshold
- Tesla accounts for 85% of all industry ADAS reports
- Tesla argued releasing data would cause "financial harm"
- Under separate NHTSA probe for crash reporting practices
- As of June 16, 2026: NHTSA discontinued the SGO crash reporting requirement

## Original Contribution: Per-Subscriber Crash Rate Calculation

### Method
- Denominator: Tesla's Q2 2026 disclosed FSD subscriber count (1.48M end-of-quarter)
- Numerator: NHTSA SGO data compiled by Electrek (826 H1 2026 crashes)
- YoY comparison using Q2 2025 implied subscriber count (1.48M / 1.56 ≈ 949K)

### Results
- H1 2025 per-subscriber crash rate: 476 / 949,000 = 0.5016 per 1,000 subscribers
- H1 2026 per-subscriber crash rate: 826 / 1,480,000 = 0.5581 per 1,000 subscribers  
- Change: +11.3% increase in per-subscriber crash rate
- Crash growth (73%) exceeds subscriber growth (56%) by 17 percentage points
- At the H1 2026 rate: approximately 1 severe ADAS crash per 1,792 active FSD subscribers per six months

### Conservative adjustment (using period-average subscribers)
- Estimated H1 2025 average: ~800K subscribers
- Estimated H1 2026 average: ~1.25M subscribers
- H1 2025 adjusted rate: 476 / 800K = 0.595 per 1,000
- H1 2026 adjusted rate: 826 / 1,250K = 0.661 per 1,000
- Change: +11.1% (consistent with end-of-quarter calculation)

## Limitations (must be addressed in article)

1. **Autopilot vs FSD conflation:** SGO data includes all ADAS crashes (both Autopilot and FSD). Tesla redacts software version, making separation impossible. Using FSD subscribers as the denominator understates the ADAS-active user base, which would LOWER the per-subscriber rate but wouldn't change the TREND (since Autopilot is being phased out in favor of FSD).

2. **Usage intensity:** Not all subscribers engage FSD equally. A subscriber who drives 500 FSD miles/month contributes more crash exposure than one who uses it 50 miles/month. If average usage per subscriber increased, that alone could explain the rate increase. Tesla does not disclose per-subscriber engagement miles.

3. **End-of-quarter vs period-average:** The 1.48M figure is a snapshot at quarter-end. The average active base during H1 was lower. This biases the per-subscriber rate downward, making the 11% increase a conservative estimate.

4. **Geographic expansion:** FSD expanded to new geographies (South Korea, Europe) and new road types (cities with complex intersections). More challenging driving environments could increase crash rates independent of software quality.

5. **Reporting lag:** Electrek notes that 207 is a floor for May 2026. When the latest export was added, it revised the prior May figure upward by 139 crashes. H1 2026 will likely be revised upward.

6. **Severity threshold:** SGO only captures severe crashes (airbag, tow-away, injury, fatality, pedestrian/cyclist). Minor incidents are excluded. This isn't a total crash count.

## Cross-Reference: Tesla's Robotaxi Safety Claims

Tesla Q2 2026 earnings call (via Fox Business):
- "Zero notable incidents over 380,000 miles" (Ashok Elluswamy, VP AI Software)
- Fleet: ~21 vehicles across Austin, Dallas, Tampa, Orlando (per Electrek)
- California operations: supervised (safety driver present)
- Incident caveat: "other actors impacting us when we were stationary"

Electrek analysis (via separate article July 22):
- Tesla's cumulative robotaxi miles (2.4M) = fraction of what Waymo does in weeks
- Austin fleet peaked ~25 cars, drifted to ~17
- Mileage growth was flat in Q2 despite adding cities

## Journalist: Vin Wreckage

## Notes
- This is a DATA kicker story
- The article should NOT editorialize about whether FSD is "unsafe" — the data shows the per-subscriber crash rate is rising, and that's the finding
- Must acknowledge Tesla's valid defense (more miles = more crashes) while noting the rate math doesn't support it
- Must note the timing: Q2 earnings released the day AFTER the Electrek 207-crash analysis
