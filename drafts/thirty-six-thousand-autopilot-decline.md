# Research: 36,640 Dead — The Decline Running on Autopilot

## Angle
NHTSA released 2025 traffic fatality data on April 1, 2026: 36,640 people died — 6.7% fewer than 2024's 39,254. The fatality rate dropped to 1.10 per 100M VMT, the second-lowest in US history (behind 2014's 1.08). Fifteen consecutive quarters of decline. Fourth straight year of improvement. Pedestrian deaths also fell 11% in H1 2025 (GHSA data).

**Original contribution:** Cross-reference the macro decline with FARS fleet-composition data to estimate what fraction of the improvement is attributable to fleet turnover (old deadly vehicles leaving the road) vs. behavioral or technological improvements. If pre-2012 (pre-mandatory-ESC) vehicles dominated the FARS death count, and those vehicles are simply aging out of the fleet, then the decline is largely structural and will plateau once the old fleet is gone.

**Kill test:** Is this genuinely newsworthy? YES — the national fatality number is the biggest vehicle safety story of the year. Everyone is reporting the topline number. Nobody is decomposing WHY. Our FARS data lets us estimate the fleet-composition contribution, which no other outlet has.

## Primary Sources

### Source 1: NHTSA early estimate for 2025
- 36,640 traffic fatalities, 6.7% decline from 2024
- Fatality rate: 1.10 per 100M VMT (2nd lowest in US history, behind 1.08 in 2014)
- VMT increased 0.9% (29.8 billion more miles)
- Q4 2025 = 15th consecutive quarterly decline (trend started Q2 2022)
- 5th largest percentage decrease in FARS recorded history
- Fatalities decreased in 39 states, DC, and Puerto Rico
- Released April 1, 2026
- Source: NHTSA press release, AASHTO Journal, Reuters, Jalopnik

### Source 2: NHTSA final 2024 data
- 39,254 deaths in 2024 (revised down from 39,345 early estimate)
- Fatality rate: 1.19 per 100M VMT
- 2.42 million people injured
- Large truck fatalities decreased in 2024
- Source: NHTSA "Overview of Motor Vehicle Traffic Crashes In 2024"

### Source 3: FARS 2014-2023 model/fleet data (our data)
- Our FARS_BY_MODEL dataset covers 337 models with deaths, fleet estimates, and fatality rates
- Key insight from prior analysis (#article-306): 72% of deaths come from pre-2012 vehicles (our earlier article's finding)
- Pre-ESC vehicles (pre-2012 MY) continue to dominate the death count
- ESC reduces fatal single-vehicle crashes by 56% (IIHS study, iihs.org)

### Source 4: GHSA pedestrian data
- 3,024 pedestrians killed in H1 2025, 11% decline from H1 2024
- Largest year-over-year drop in 15 years of GHSA tracking
- Federal AEB mandate for pedestrian detection doesn't take effect until 2029

### Source 5: Fleet age data
- Average age of vehicles on US roads: ~12.6 years (S&P Global Mobility, 2024)
- In 2025, average vehicle was built ~2012 (right at the ESC mandate year)
- Pre-2012 vehicles are now 13+ years old — entering the scrappage curve's steepest decline

### Source 6: IIHS ESC effectiveness
- ESC reduces fatal single-vehicle crashes by 56%
- ESC reduces fatal multi-vehicle crashes by 32%
- ESC became mandatory for all new vehicles MY 2012 (FMVSS 126, effective Sept 2011)
- Source: https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue

### Source 7: International comparison
- US fatality rate: 1.10 per 100M VMT (2025)
- EU average: ~0.45 per 100M VMT (2024)
- UK: ~0.35 per 100M VMT
- Sweden/Norway: ~0.20 per 100M VMT
- US rate still 2-3x European peers

## The Math (Original Calculation)
1. In 2023 FARS data, vehicles MY 2011 and older accounted for ~72% of deaths (from our earlier analysis)
2. Those vehicles are now 14+ years old and scrapping at ~6-8% annually
3. Each year, ~5-7% of the old fleet disappears, replaced by ESC-equipped vehicles
4. A rough ESC dividend: if 7% of pre-ESC fleet scraps annually, and pre-ESC vehicles die at ~2.5x the rate of post-ESC vehicles, then fleet turnover alone yields a ~3-4% annual fatality decline
5. The actual 2025 decline was 6.7% — suggesting ~50-60% of the improvement is fleet turnover, with 40-50% attributable to other factors
6. Those other factors: AEB adoption, improved road design, enforcement, reduced impaired driving, behavioral normalization post-COVID

## Strongest Counterargument
The fleet-turnover thesis may overstate the case. ESC prevents rollovers and single-vehicle crashes, but the decline is also evident in multi-vehicle crashes and pedestrian deaths (where ESC is irrelevant). The 11% pedestrian death drop can't be explained by fleet age at all. Additionally, 2025 saw no major policy change — the AEB mandate isn't in effect yet, and enforcement budgets haven't meaningfully changed. The decline might be simpler than structural: COVID-era behavioral excess (speeding, impaired driving) is normalizing.

## Limitations
- FARS 2014-2023 data may not perfectly represent 2025 fleet composition
- Our fleet estimates use sales-based proxies, not actual registration data
- ESC attribution assumes linear scrappage rates, which may be concave
- Pedestrian data (GHSA) covers only H1 2025 and uses different methodology than FARS
- International rate comparisons use different VMT estimation methods

## Journalist
**Axle McScatter** — Data Visualization Editor. This is a numbers-first story with regression analysis, trend decomposition, and international comparison. Perfect for his "I ran the numbers" voice.

## Kicker
**By The Numbers**

## Headline candidates
1. "36,640 Dead. The Decline Is Real. Half of It Is Just Physics."
2. "The Biggest Drop in Traffic Deaths Since 2014 Was Already Baked In"
3. "Traffic Deaths Hit a 6-Year Low. The Cars Did Most of the Work."
4. "36,640 People Died on American Roads Last Year. We Calculated Why Fewer Didn't."
