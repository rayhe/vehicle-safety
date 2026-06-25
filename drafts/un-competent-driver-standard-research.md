# Research: The UN's "Competent Human Driver" Standard

## Hook
On June 24, 2026, the United Nations adopted the first global regulatory framework for fully autonomous vehicles. The key requirement: automated driving systems must "match or exceed" the performance of "a competent human driver." FARS data reveals what that bar actually means — and it's both harder and more absurd than it sounds.

## Primary Sources

### 1. UN UNECE Autonomous Driving Regulation (June 24, 2026)
- Source: news.un.org (accessed June 24, 2026)
- Key provision: ADS must demonstrate performance matching or exceeding "a competent human driver"
- Validation: simulation, track testing, real-world trials
- Support: Canada, China, EU, Japan, UK, US
- Expected to enter into force in ~1 month
- Also: must have data storage system for automated driving
- ADS handles ALL driving tasks: steering, accelerating, decelerating, signalling
- Also amended ~90 existing UN vehicle regulations for ADS compatibility

### 2. NHTSA 2025 Full Year Traffic Fatality Data
- Source: nhtsa.gov (June 2026 release)
- 36,640 fatalities in 2025 (down 6.7% from ~39,300 in 2024)
- Fatality rate: 1.10 per 100M VMT (second-lowest in recorded history)
- VMT increased by 29.8 billion miles (+0.9%)
- 12th consecutive quarterly decline (since Q2 2022)
- 39 states saw decreases

### 3. FARS Toxicology Data (2014-2023, our dataset)
- Overall: 20.0% of drivers in fatal crashes were impaired (any substance)
- Alcohol-positive: 15.2%
- Drug-positive: 8.7%
- By class: Sports Cars 22.5%, Sedans 20.4%, Pickups 20.1%, SUVs 19.5%, Vans 18.1%

### 4. NHTSA Impaired Driving Statistics (established)
- ~28% of all traffic fatalities involve alcohol impairment (BAC ≥ 0.08)
- ~30% involve any impairment (alcohol + drugs)
- 8-9% involve distracted driving
- ~29% are speed-related
- These categories overlap

## Novel Contribution: The "Competent Driver" Rate Calculation

The UN says AVs must beat a "competent" human driver. But the standard fatality rate (1.10/100M VMT) includes INCOMPETENT drivers — drunk, drugged, distracted, speeding. Strip those out:

- **Removing alcohol impairment (28% of fatalities):** Competent-driver rate = 0.79/100M VMT
- **Removing all impairment (30%):** Rate = 0.77/100M VMT  
- **Removing impairment + distraction + speed (~50%):** Rate ≈ 0.55/100M VMT

The bar for AVs is 28-50% HARDER than "beat the average driver."

Conversely: an AV company that compares its safety stats to the 1.10 blended rate is getting credit for not driving drunk. That's like a surgeon boasting a lower morbidity rate than all medical professionals combined, including the ones who lost their licenses.

## FARS Cross-Tab: The Impairment Tax by Vehicle Class

From our FARS toxicology data:
| Class | Drivers in Fatal Crashes | Any Impairment | Alcohol | Drug |
|-------|--------------------------|----------------|---------|------|
| Sports Car | 14,061 | 22.5% | 17.1% | 9.5% |
| Sedan | 197,584 | 20.4% | 15.4% | 8.9% |
| Pickup | 111,320 | 20.1% | 15.2% | 8.6% |
| SUV | 146,411 | 19.5% | 14.7% | 8.4% |
| Van | 21,360 | 18.1% | 13.4% | 8.1% |

If AVs replaced ALL van trips (lowest impairment class), they'd only eliminate the 18.1% impairment contribution — modest gain. If they replaced sports car trips (22.5%), the gain is larger.

## Strongest Counterargument

The "competent driver" rate isn't truly calculable by just removing impaired-driver fatalities, because:
1. Not all impaired-driver crashes are CAUSED by impairment — sometimes the drunk driver was hit by someone else
2. Removing drunk drivers from the road doesn't just remove drunk-driver-caused crashes; it also removes potential victims for sober drivers
3. The interaction effects are nonlinear — a road with zero drunk drivers changes crash dynamics for everyone

## Limitations

1. FARS captures fatal crashes only — a vehicle with low fatality rates might still have high injury/property damage rates
2. Impairment involvement ≠ impairment causation (attribution problem)
3. Our toxicology data doesn't distinguish BAC ≥ 0.08 (legal impairment) from BAC > 0 (any positive)
4. Speed involvement overlaps with impairment (drunk drivers often speed)
5. Distracted driving is vastly underreported in FARS (~8-9% reported, likely 25%+ actual)

## Angle

**Paradox:** The UN set a regulatory bar for robots that most humans can't clear either. A "competent human driver" — sober, attentive, obeying speed limits — has a fatality rate of ~0.55-0.77 per 100M VMT. The average American driver is at 1.10. The UN accidentally quantified how incompetent the average driver is: roughly twice as deadly as a competent one.

## Journalist: Dale Impactor III — Toxicology Desk Chief
- Beat: Impairment stories, driver behavior
- Matches: toxicology cross-tab, "competent driver" impairment analysis
- Kicker: Existential Dread (paradox)
- This is Dale's territory: impairment data as a lens on the AV question

## Actionable Takeaways

1. When AV companies cite their safety stats vs "the average driver" (1.10/100M VMT), check whether they're comparing to the competent-driver rate (0.55-0.77). They're almost certainly not.
2. The UN bar is effectively: don't cause the crashes that sober, attentive humans cause. That's the hardest 50% of the problem.
3. For regulators: define "competent" explicitly. The word carries enormous weight in this regulation.
4. For consumers: your biggest safety upgrade isn't a self-driving car — it's not driving impaired or distracted, which would cut your personal risk roughly in half.
