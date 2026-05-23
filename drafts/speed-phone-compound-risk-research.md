# Research Notes: Speed + Phone Use Compound Risk

## Angle
IIHS study (April 28, 2026) using 600,000 telematics trips proves that speeding and phone use aren't independent risk factors — they compound. Drivers who speed are MORE likely to be on their phones, not less. NHTSA reports these as separate fatality categories (speed: 11,288 deaths/29% of all, distraction: 3,275 deaths/8%), but the IIHS data shows massive overlap. The two deadliest behaviors cluster in the same drivers.

## Kill Test
Is this genuinely newsworthy? YES. It flips the conventional assumption (fast = focused). It reveals a methodology problem in how NHTSA categorizes deaths. It comes from real telematics data (600K trips), not surveys. We've never done a piece on compound risk factors.

## Primary Sources

### 1. IIHS Study (April 28, 2026)
- **Authors:** Ian Reagan (senior research scientist), Sam Monfort (senior statistician)
- **Data:** ~600,000 trips, July-October 2024
- **Source provider:** Cambridge Mobile Telematics (CMT), insurance safe-driving apps
- **Methodology:** Phone gyroscope + unlocked screen = "handling"; GPS matched to speed-limit database
- **Exclusions:** Alaska, California, Hawaii, New York. Trips <18 min excluded. Time spent <5 mph below limit excluded.
- **Key findings:**
  - Limited-access roads: phone handling rises 12% per 5 mph over speed limit
  - Other roads (arterials, connectors): 3% per 5 mph over
  - 70 mph roads: 9% LARGER increase per 5 mph than 55 mph roads
  - 45/50 mph roads: 3% larger increase vs 25/30 mph roads
  - 55 mph roads: 7% larger increase vs 25/30 mph roads
- **URL:** https://www.iihs.org/news/detail/drivers-use-their-cellphones-more-when-speeding-telematics-data-show
- **Quote:** "Until now, safety experts believed drivers used their cellphones most at slower speeds. But data from safe-driving apps show that, in free-flowing traffic, the opposite is true." — David Harkey, IIHS President
- **Quote:** "It's alarming that the relationship between cellphone manipulation and speeding was the strongest on roads with the highest speed limits." — Ian Reagan

### 2. NHTSA Speed-Related Fatalities
- 2024: 11,288 speed-related deaths, 29% of all traffic fatalities
- Source: IIHS reporting / NHTSA FARS
- URL: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars

### 3. NHTSA Distracted Driving Fatalities
- 2023: 3,275 distracted driving deaths, 8% of fatal crashes
- Widely acknowledged as severely undercounted (no post-crash phone forensics mandate)
- Source: NHTSA
- URL: https://www.nhtsa.gov/risky-driving/distracted-driving

### 4. Total Traffic Deaths
- 2025: 36,640 (6-year low, 15-quarter decline)
- Source: NSC/NHTSA preliminary estimates

## Original Analysis

### Compounding calculation
At the 12% per 5 mph rate on limited-access roads:
- 5 mph over: 12% more phone use
- 10 mph over: ~26% more (1.12²)
- 15 mph over: ~40% more (1.12³)
- 20 mph over: ~57% more (1.12⁴)
- 25 mph over: ~76% more (1.12⁵)

Someone doing 95 in a 70 zone is 76% more likely to be on their phone than someone doing 70.

### The counting problem
NHTSA FARS codes crashes by contributing factors. Speed and distraction are separate codes. But if a driver is doing 85 while texting and rear-ends someone, which category absorbs the death? Often the most obvious factor (speed) gets coded. The phone stays in the pocket of a dead driver.

Unlike alcohol (BAC test exists for all fatal crash drivers in most states), there is no mandatory post-crash phone forensic in FARS. Distraction coding relies on police officer judgment at the scene. This means distraction as a contributing factor in speed-related crashes is almost certainly undercounted.

### The insurance data angle
The same insurance telematics apps that provided IIHS's data are being used to price premiums. If your insurer knows speeders are also phone users, your premium reflects compound risk — even if NHTSA doesn't count it that way.

## Counterargument (at full strength)
Correlation ≠ causation. The IIHS itself notes this could simply reflect risk-seeking personality: people who speed are the same people who use phones, not that speeding causes phone use. The behaviors may share a common cause (personality, stress, road conditions) rather than compounding mechanically. Additionally, the 12% figure is per 5 mph increment on limited-access roads specifically — on arterials it's only 3%, and on slower neighborhood streets the effect may be negligible.

## Limitations
- Data from insurance app users only (self-selected population, likely safer than average)
- Four states excluded (CA, NY, AK, HI — CA and NY are huge)
- Only measures phone "handling" (gyroscope rotation + unlocked screen), not visual distraction
- Can't distinguish types of phone use (texting vs GPS vs music)
- FARS doesn't capture distraction reliably, so cross-referencing at the individual crash level isn't possible

## Journalist Assignment
**Axle McScatter** — Data Visualization Editor. This is a statistical correlation story with methodology critique. His beat exactly.

## Kicker
By The Numbers
