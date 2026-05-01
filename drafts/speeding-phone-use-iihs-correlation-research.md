# Research Notes: Speeding + Phone Use IIHS Correlation

## Angle
IIHS study (published April 29, 2026) analyzed 600,000 trips and found that phone manipulation INCREASES with speed — contradicting decades of assumption that distraction peaks at low speeds. On limited-access roads, phone handling rose 12% for every 5 mph over the limit. On 70 mph roads, the speed-phone correlation was 9% stronger than on 55 mph roads.

**Novel contribution:** Cross-referencing IIHS's new finding with FARS data showing 70-80% of fatal crash drivers were sober. If they weren't impaired, the "missing variable" in fatal crashes may be exactly what IIHS just quantified: phone use while speeding.

**Self-critique gate:** Is this genuinely novel after 211 articles? YES — no existing article ties the IIHS phone/speed correlation to the FARS sober-driver data. We've covered the sober majority (#sober-majority), but never connected it to quantified distraction data. The IIHS study is 1 day old.

## Primary Sources

### 1. IIHS Study (April 29, 2026)
- **Title:** Speeding Drivers On Cell Phones More
- **Authors:** Ian Reagan (Senior Research Scientist), Sam Monfort (Senior Statistician)
- **President quote:** David Harkey: "Until now, safety experts believed drivers used their cellphones most at slower speeds. But data from insurance companies' safe-driving apps show that, in free-flowing traffic, the opposite is true."
- **Data:** ~600,000 trips, July-October 2024, US excluding AK/CA/HI/NY
- **Source:** Cambridge Mobile Telematics (CMT) safe-driving apps
- **Method:** Smartphone GPS for speed/location; gyroscope for phone handling (screen unlocked + significant rotation); only trips ≥18 min with ≥2 min on interstate; excluded time below posted limit
- **Key findings:**
  - Limited-access roads: 12% more phone handling per 5 mph over limit
  - Other roads: 3% increase per 5 mph over
  - 70 mph roads: 9% larger correlation than 55 mph roads
  - 45-50 mph roads: 3% larger than 25-30 mph
  - 55 mph roads: 7% larger than 25-30 mph
- **Explanations:** Risk-taking personality overlap; stress (rush hour); lighter traffic/fewer pedestrians at highway speeds
- **URL:** https://www.iihs.org (study not yet individually linkable; use topic page)

### 2. FARS Data (2014-2023)
- FARS sober driver rate across all models: ~70-80% of fatal crash drivers were sober (no alcohol or drug impairment)
- Vehicles with highest sober death rates (soberIdx = rate × soberPct/100):
  - Hyundai Veloster: rate 8.54, 82.6% sober, soberIdx 7.05
  - Chevy Tracker: rate 7.83, 87.3% sober, soberIdx 6.84
  - Toyota Land Cruiser: rate 6.27, 91.1% sober, soberIdx 5.71
  - Toyota Solara: rate 4.25, 95.9% sober, soberIdx 4.08
  - Chevy Impala: rate 5.0, 78.6% sober, soberIdx 3.93
  - Honda Accord: rate 3.07, 80.0% sober, soberIdx 2.46
- Total sedan deaths: 87,406 | Total across all classes: ~186,000+
- The 80%/$800M figure from our existing sober-majority article

### 3. NHTSA Distraction Data
- NHTSA estimates 3,308 killed in distraction-affected crashes in 2022
- But this is a massive undercount — distraction is underreported in crash reports because there's no breathalyzer equivalent for phone use
- The actual distraction-involved fatal crash figure is likely 2-5x higher (AAA Foundation, NSC estimates)

## The Thesis
America has spent 50 years and hundreds of millions fighting drunk driving. Impairment is involved in ~20-30% of fatal crashes. The other 70-80% — the sober majority — die in crashes where NHTSA says "distraction" killed 3,308. But that's only the cases where a cop found a phone in the driver's hand. IIHS just proved that the fastest drivers are the most distracted, not the slowest. The existing enforcement model — school zones, residential speed traps, "put your phone down" PSAs — is designed for a problem that peaks at 25 mph. The actual problem peaks at 75.

## Journalist
**Axle McScatter** — Data Visualization Editor. Obsessed with charts and numbers. Beat: statistical roundups, national trends, methodology pieces.

## Limitations
- IIHS study excludes CA, NY, HI, AK (largest state + largest city + two tourist states)
- Gyroscope detection measures phone handling, not visual distraction (driver could be handing phone to passenger)
- "Safe-driving app" users are self-selected — likely more safety-conscious than average, meaning the phone use rates are probably understated for the general population
- FARS impairment ≠ FARS distraction; we're inferring distraction as the residual, not measuring it directly
- The "sober death index" metric is our creation, not a standard actuarial measure

## Counterargument
The strongest counterargument: the speed-phone correlation may not be causal. Drivers who speed AND use phones may simply be risk-takers doing both independently. The phone doesn't cause the speeding, and the speeding doesn't cause the phone use — they're both symptoms of risk tolerance. If true, the policy implication isn't "reduce phone use at speed" but "identify and intervene with high-risk-tolerance drivers." This is a harder, more expensive problem.

## Structure
- Kicker: By The Numbers
- Lede: IIHS 600,000-trip finding (12% per 5 mph)
- Pull stat: 12% (phone handling increase per 5 mph over limit)
- Body: Connect to FARS sober majority, enforcement mismatch, policy implications
- Actionable: Check your own phone screen time while driving, support hands-free laws, specific vehicle advice
- References: IIHS study, FARS, NHTSA distraction stats, AAA Foundation
