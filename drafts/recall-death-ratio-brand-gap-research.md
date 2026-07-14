# Research Notes: Recall-to-Death Ratio by Brand

## Angle
The U.S. has recalled 25.2 million vehicles YTD 2026 — nearly double last year's pace. That's 1,319 vehicles recalled for every annual FARS death. But the ratio varies wildly by brand: Tesla recalls 8,403 vehicles per death, Nissan only 539 — a 15.6x gap. Yet deaths barely budge. The recall machine is running at full speed and missing the target.

## Kill Test
**Is this genuinely surprising after 494 articles?** YES. The "recalls per FARS death" metric by brand is a novel cross-tabulation. Nobody has published this. It exposes the gap between recall activity (which generates headlines) and crash outcomes (which generate funerals).

## Primary Sources

### Source 1: iSeeCars Recall Dashboard (as of Jul 14, 2026)
- YTD recalls: 25,215,447 vehicles
- Last year same period: 13,108,963 (93% increase YoY)
- Ford: 12,192,084 (104% YoY) — 48% of all recalls
- Honda: 2,943,259 (267% YoY)
- Hyundai: 1,776,299 (3,693% YoY!)
- Toyota: 1,341,325
- Nissan: 779,280
- Subaru: 701,761 (2,911% YoY)
- Tesla: 233,616
- BMW: 185,235

### Source 2: NHTSA FARS (2014-2023)
Annual deaths by brand (from FARS_BY_MODEL aggregation):
- Ford: 3,495 deaths/year (29 models)
- Toyota: 2,202 deaths/year (26 models)
- Honda: 1,784 deaths/year (11 models)
- Nissan: 1,446 deaths/year (19 models)
- Hyundai: 685 deaths/year (11 models)
- Subaru: 229 deaths/year (8 models)
- Volkswagen: 223 deaths/year (8 models)
- BMW: 220 deaths/year (9 models)
- Mitsubishi: 81 deaths/year (7 models)
- Tesla: 28 deaths/year (4 models)

### Source 3: BizzyCar Q1 2026 Recall Report
- Q1 2026: 11.6 million recalled (highest quarterly total in recent years)
- One Ford campaign = 4.3 million vehicles (40% of Q1 volume)
- Electrical system defects: 47% of all recalls
- "Park outside" advisories dropped from 14% (2023) to 3% (2026)
- "Do not drive" at just 0.1%

### Source 4: Today's Recalls (Jul 14, 2026)
- Subaru: 541,237 (wrong GAWR label — a STICKER fix)
- BMW: 29,119 (fire risk — engine starter relay corrosion)
- Tesla: 363,000 FSD (OTA software fix)
- Tesla: ~2M hood latch detection (OTA software fix)
- Ford: ~1M in past 2 weeks (Mach-E differential, Mustang wipers, Bronco fenders)

## Novel Calculation: Recall-to-Death Ratio

| Brand | Recalled YTD | Annual Deaths | Ratio | Interpretation |
|-------|-------------|--------------|-------|----------------|
| Tesla | 233,616 | 27.8 | 8,403:1 | Most recall-aggressive per death |
| Ford | 12,192,084 | 3,495.4 | 3,488:1 | Recall king, death king |
| Subaru | 701,761 | 229.2 | 3,062:1 | "Safest brand" recalls aggressively |
| Hyundai | 1,776,299 | 685.4 | 2,592:1 | YoY spike driven by airbag/braking recalls |
| Honda | 2,943,259 | 1,783.7 | 1,650:1 | Middle of pack |
| Mitsubishi | 108,046 | 81.3 | 1,329:1 | Low volume, low deaths |
| VW | 240,732 | 223.4 | 1,078:1 | Below average |
| BMW | 185,235 | 219.6 | 844:1 | Fire-focused recalls |
| Toyota | 1,341,325 | 2,201.9 | 609:1 | Low ratio despite high volume |
| Nissan | 779,280 | 1,445.6 | 539:1 | Least recall-aggressive per death |

**Key finding:** Tesla recalls 15.6x more vehicles per FARS death than Nissan. But Tesla's death rate is already the lowest in the industry (Model Y: 0.03 per 100M VMT). Nissan's fleet (Sentra: 2.13, Maxima: 5.11) kills at 10-170x Tesla's rate.

## Counterargument
The ratio is structurally flawed:
1. Recalls prevent FUTURE harm; FARS deaths are PAST events
2. A single vehicle can be recalled multiple times (double-counting)
3. OTA software recalls inflate Tesla/EV counts without physical risk
4. Many recalls are for compliance paperwork, not crash-causing defects
5. Low-death brands SHOULD have high ratios (they have fewer deaths to divide by)

The honest limitation: this metric reveals recall BEHAVIOR, not recall EFFECTIVENESS. A brand that recalls aggressively for minor issues inflates its ratio without preventing a single death. The question isn't who recalls the most — it's whether any of this is making us safer.

## Strongest Counterargument
The decline in "park outside" and "do not drive" recalls (from 14% to 3%) suggests the recall system is increasingly capturing LOW-severity issues while the genuinely dangerous defects — the kind that burn your house down or kill you at 65 mph — are becoming a smaller fraction of total recalls. The system is becoming more comprehensive in coverage but less focused on what actually kills people.

## Journalist Assignment
**Axle McScatter** — Data Visualization Editor. This is a pure "By The Numbers" piece: charts, ratios, tables. Axle's beat.

## Actionable Takeaway
Don't treat a recall notification as an indication of how dangerous your car is. A Subaru Ascent owner getting a label recall is in one of the safest vehicles on the road (8.2% impairment, 0.78 death rate). Meanwhile, a Nissan Maxima owner (5.11 death rate, 20.2% impairment) is in a far more dangerous vehicle but may never receive a recall notice. The recall system catches manufacturing defects and compliance issues — it does not measure how likely your car is to kill you.
