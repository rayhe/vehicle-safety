# Research: Conditional Survival Rate in Fatal Crashes

## Angle
A novel metric derived from FARS: the **conditional occupant survival probability** — given that your vehicle is involved in a fatal crash, what percentage of the time do YOU survive? Computed as `1 - (occupant_deaths / fatal_crash_involvements)`.

This is different from death rate (which measures how likely you are to BE in a fatal crash per mile driven). This measures what happens to you ONCE you're already in one. It's conditional probability: P(you die | fatal crash).

## Kill Test
- **Genuinely novel**: Nobody has framed FARS data as conditional survival probability per model. IIHS does crashworthiness from insurance claims. NHTSA does star ratings from lab tests. Neither computes "given a real-world fatal crash, what % of the time does the vehicle's occupant die?"
- **Surprising finding**: The range is staggering. Saturn S Series: 7.6% survival. Ram 2500: 79.5%. That's a 10x difference in conditional survival odds within the same road system.
- **Consumer actionable**: This is the metric that matters when you're buying a vehicle and wondering "if worst case happens, does this vehicle protect me?"
- **NOT covered by existing articles**: We have aggressor-vehicles.html (who kills others), safety-is-a-luxury-good.html (price vs. safety), crash-lethality-ratio.html (but that was about overall crash lethality, not per-model conditional). This is the inverse of aggressor — this is the "shield" question.

## Primary Sources (3+)
1. **FARS 2014-2023** — Occupant deaths and fatal crash involvements per make/model (our fars_output.js dataset, sourced from NHTSA FARS bulk CSV)
2. **IIHS crashworthiness research** — Vehicle size/weight studies confirm mass advantage in crashes (https://www.iihs.org/topics/vehicle-size-and-weight)
3. **NHTSA ESC effectiveness research** — Electronic Stability Control reduced fatal single-vehicle crash risk by 56% for SUVs (https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue)
4. **NHTSA New Car Assessment Program (NCAP)** — 5-star ratings from lab tests (complementary but different methodology)

## Key Findings

### By Class (aggregate)
| Class | Fatal Crash Survival Rate |
|-------|--------------------------|
| Pickup | 51.1% |
| Van | 48.6% |
| SUV | 47.6% |
| Sedan | 35.5% |
| Sports Car | 31.8% |

Sedan occupants survive fatal crashes at barely over a third. Pickup occupants survive more than half the time. 15.6pp gap.

### Top Survivors (≥50 fatal crash involvements)
- Nissan NV: 83.1% (commercial van, massive)
- Ram 2500: 79.5% (heavy-duty pickup)
- Range Rover Sport: 72.6%
- Porsche Cayenne: 70.5%
- Acura TLX: 69.7% (best sedan)
- Ford Transit: 69.2%
- Audi Q7: 68.5%

### Worst Survivors (≥50 fatal crash involvements)
- Saturn S Series: 7.6%
- Chevrolet Aveo: 11.0%
- Chevrolet Corvette: 11.6%
- Buick Park Avenue: 11.8%
- Ford Escort: 12.3%
- Toyota Echo: 14.1%
- Chevrolet Cavalier: 14.3%

### Within-Class Extremes (the real story)
**Sedans**: Acura TLX (69.7%) vs Saturn S Series (7.6%) — a 9x survival advantage
**SUVs**: Range Rover Sport (72.6%) vs GMC Jimmy (19.4%) — 3.7x
**Pickups**: Ram 2500 (79.5%) vs GMC Sonoma (20.4%) — 3.9x

## Counterargument (at full strength)
This metric conflates several confounding variables:
1. **Driver behavior**: Vehicle models with high conditional survival may attract more cautious drivers, or be involved in lower-speed crashes
2. **Multi-vehicle vs single-vehicle**: A Ram 2500 in a multi-vehicle crash kills the other person. That inflates its "survival" rate without reflecting superior engineering — it reflects superior mass weaponized against smaller vehicles
3. **Age of fleet**: Older vehicles (Saturn S Series, Cavalier) were built to earlier safety standards. Comparing them to modern vehicles is somewhat unfair
4. **Pedestrian/cyclist crashes**: Heavy vehicles involved in fatal pedestrian crashes have 0 own-occupant deaths, inflating their survival rate

## Limitations
- FARS only captures fatal crashes (someone died). We cannot assess how vehicles perform in non-fatal crashes from this data
- "Survival" here means the vehicle's occupants lived — it says nothing about injury severity. An occupant who survived with permanent disability is counted as a survivor
- Fleet age distribution matters enormously. Most vehicles at the bottom are 15-25 years old
- The metric does NOT distinguish single-vehicle from multi-vehicle crashes, which have very different physics
- VMT estimates introduce ±15% uncertainty for low-volume models

## Methodology
- Formula: Conditional Survival Rate = 1 - (deaths / crashes), where deaths = occupant fatalities in vehicles of this make/model, crashes = fatal crash involvements
- Minimum threshold: 50 fatal crash involvements (for statistical reliability)
- Data period: 2014-2023 (10 years)
- Source: NHTSA FARS bulk CSV processed through fars_process.py

## Proposed Headline
"You're Already In a Fatal Crash. Here Are Your Odds."

## Journalist
Rex Driverton — deadpan dark humor, fatality rate investigations. The conditional probability framing fits his noir detective style perfectly.

## Kicker
Investigation
