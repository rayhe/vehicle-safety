# Research Notes: sentra-never-got-safer

## Angle
Model year trend analysis: While Toyota Corolla and Hyundai Elantra deaths dropped significantly from MY2015 to MY2019 (even after adjusting for fewer years of exposure), the Nissan Sentra's annualized death rate INCREASED 63% — from 21.2/yr to 34.6/yr. This pairs with 5 Sentra-touching recalls in 15 months (Nov 2025–Jul 2026).

**Self-Critique Gate:**
- **Propose:** The Sentra has already been covered (sentra-entry-level-killer.html, March 2026). But that article was about absolute death count and rate comparison. This is about the temporal trend — why newer model years didn't improve when every competitor did. It's an engineering story, not a body count story.
- **Challenge:** Is the annualized metric sound? The FARS data captures cumulative deaths across 2014-2023. MY2019 vehicles have 5 years of exposure vs MY2015's 9 years. Dividing by exposure years gives a rough annualized rate, but doesn't account for sales volume differences, fleet attrition, or driving pattern changes by vehicle age. This needs explicit limitations.
- **Verdict:** Proceed — the cross-manufacturer divergence is the novel finding, and it's robust even with the caveats. Nobody has run this comparison.

## FARS Data

### Raw Deaths by Model Year (from fars_output.js)
| MY   | Sentra | Corolla | Civic | Elantra |
|------|--------|---------|-------|---------|
| 2014 | 201    | 186     | 160   | 132     |
| 2015 | 191    | 248     | 214   | 138     |
| 2016 | 139    | 246     | 191   | 138     |
| 2017 | 175    | 175     | 136   | 199     |
| 2018 | 136    | 111     | 152   | 120     |
| 2019 | 173    | 75      | 106   | 67      |

### Annualized Deaths (deaths ÷ years in FARS window)
FARS window: 2014-2023. MY XXXX has (2024-XXXX) years of exposure.

| MY   | Sentra | Corolla | Civic | Elantra |
|------|--------|---------|-------|---------|
| 2014 | 20.1   | 18.6    | 16.0  | 13.2    |
| 2015 | 21.2   | 27.6    | 23.8  | 15.3    |
| 2016 | 17.4   | 30.8    | 23.9  | 17.3    |
| 2017 | 25.0   | 25.0    | 19.4  | 28.4    |
| 2018 | 22.7   | 18.5    | 25.3  | 20.0    |
| 2019 | 34.6   | 15.0    | 21.2  | 13.4    |

### Exposure-Adjusted Comparison (MY2015 → MY2019)
Expected decline factor: 5/9 = 0.556 (fewer years of exposure)

| Vehicle | MY2015 | Expected MY2019 | Actual MY2019 | vs Expected |
|---------|--------|-----------------|---------------|-------------|
| Sentra  | 191    | 106             | 173           | +63% more   |
| Corolla | 248    | 138             | 75            | -46% fewer  |
| Civic   | 214    | 119             | 106           | -11% fewer  |
| Elantra | 138    | 77              | 67            | -13% fewer  |

## July 2026 Recall Context

### Nissan Sentra Recalls (Nov 2025 – Jul 2026)
1. **25V807** (Nov 2025): Windshield air bubbles — 41,797 vehicles. Aguascalientes II plant, misaligned locator pins in glass molds.
2. **26V023** (Jan 2026): Door strikers improperly welded — 26,432 vehicles (multi-model incl. 6,988 Sentras). Doors could open while driving.
3. **26V145** (Mar 2026): Front seat frame welding — 15 vehicles (2026 Kicks/Sentra). Seats loose under crash load.
4. **~Apr 2026**: Front seat frames improperly welded, severe injury risk (per BlazesTrends). Distinct from Mar recall.
5. **26V410** (Jul 13, 2026): Driveshaft not fully seated — 946 vehicles (2025 Sentra). Supplier tooling error at Aguascalientes II. Loss of drive power, rollaway. Nissan logged 13 warranty claims.

## Sources
1. NHTSA FARS 2014-2023 (fars_output.js)
2. Autoblog, "Nissan's Second Sentra Recall in a Week," Jul 13 2026
3. BlazesTrends, "2025 Nissan Sentra Recall: Severe Drive Shaft Defect," Jul 2026
4. Autoevolution, "Nissan Recalls Altima, Sentra, Kicks, and Frontier," Jan 2026
5. NHTSA Recalls Database

## Limitations
- Annualized rate doesn't account for per-model-year sales volumes (could differ significantly)
- Fleet attrition not modeled (older MYs lose units to scrappage)
- Newer vehicles typically driven more VMT/year (inflates newer MY deaths)
- FARS captures fatal crashes only — injury crashes and non-fatal outcomes not reflected
- Estimated_rate in FARS_BY_MODEL uses VMT estimates with ±15% uncertainty
