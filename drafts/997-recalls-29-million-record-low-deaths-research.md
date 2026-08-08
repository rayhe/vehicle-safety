# Research Notes: 997 Recalls, 29 Million Cars, Record Low Deaths

## Angle
In 2025, NHTSA issued 997 safety recalls covering 29+ million vehicles (~1 in 10 registered). Meanwhile, traffic deaths dropped to 36,640 (NHTSA estimate) — a 6.7% decline and the second-lowest fatality rate in recorded history at 1.10 per 100M VMT. Are recalls preventing deaths, or is something else driving the improvement?

## Primary Sources

### Source 1: NHTSA 2025 Early Estimates & 2024 FARS Annual Data
- URL: https://www.nhtsa.gov/press-releases/traffic-deaths-2025-early-estimates-2024-annual
- 2025 estimate: 36,640 deaths, 1.10 fatalities per 100M VMT (second-lowest ever)
- 2024 FARS final: 39,254 deaths, 1.19 per 100M VMT
- VMT increased 29.8 billion miles (~0.9%) in 2025
- Fatalities decreased in 39 states + DC + PR

### Source 2: NHTSA Recall Statistics (cited in Investors.com Aug 4 2026)
- In 2025, NHTSA issued 997 safety recalls affecting 29+ million vehicles
- Source: NHTSA March statement
- US registered vehicles: ~282 million (BTS data)
- Ratio: ~10.3% of all registered vehicles recalled in one year

### Source 3: FARS Vehicle-Level Data (local fars_output.js)
- 337 models tracked, 2014-2023 data
- Provides death rates per 100M VMT, fleet estimates, impairment data
- Can cross-reference recalled vehicles vs FARS death rates

### Source 4: NHTSA 2024 Sub-Category Data
- URL: https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813729
- Newer vehicles (<10 years) saw 8% fatality decrease
- Unrestrained occupants down 7%
- Speeding-related down 6%

## Novel Contribution
Cross-tabulation: How many of the 29 million recalled vehicles in 2025 belong to models that are already in the top quartile of FARS death rates? If high-death-rate vehicles are disproportionately recalled, the recall system is targeting the right cars. If low-death-rate vehicles are recalled more often (cosmetic/minor issues), the system may be creating compliance theater while the deadliest cars go unaddressed.

Additionally: the recall completion rate problem. NHTSA's own data shows recall completion rates average ~70-75% within 18 months. For the 29 million vehicles recalled in 2025, that implies ~7-9 million are still unrepaired. Are those unrepaired vehicles showing up in the FARS death data?

## Kill Test
Is this genuinely newsworthy? YES — the juxtaposition of "record recall volume" with "record low deaths" is counterintuitive and hasn't been directly examined. Most coverage treats these as separate stories. The original contribution is connecting them.

## Journalist Assignment
**Axle McScatter** — Data Visualization Editor. This is a pure numbers piece with charts-that-should-exist. His statistical roundup beat fits perfectly.

## Kicker
By The Numbers
