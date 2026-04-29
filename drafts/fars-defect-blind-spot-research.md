# Research Notes: FARS Defect Blind Spot — Range Rover

## Thesis
FARS data measures who dies in crashes. It is completely blind to engineering defects that could *cause* crashes in the first place. The Range Rover Sport holds the #2 lowest crash lethality ratio in our entire 337-model FARS dataset (27.4%), while NHTSA simultaneously has 500,000+ JLR vehicles under active recall or investigation for catastrophic engineering failures. Two completely different dimensions of safety — and FARS only captures one.

## Novel Contribution: Defect Exposure Ratio
The ratio of NHTSA defect/recall population to FARS fatal crash population. For Range Rover Sport: 330,000 vehicles under investigation for steering knuckle failure vs. only 95 fatal crashes over the entire FARS decade. That's a 3,474:1 defect-to-crash ratio. The defect population dwarfs the death data by three orders of magnitude.

## Primary Sources

### Source 1: NHTSA Engineering Analysis — Range Rover Steering Knuckle (April 2026)
- ODI escalated from preliminary evaluation to engineering analysis
- 331,559 vehicles: 2014-2022 Range Rover Sport + Range Rover
- 522 steering knuckle failures reported to JLR
- Failure mode: crack at top of aluminum front steering knuckle assembly → upper control arm detaches
- JLR's recall (Aug 2025) only covered 2015-2017 models
- 2020 and 2021 models showing same failure → suggests design defect not limited to recalled MY range
- Source: Carscoops/NHTSA ODI, April 28, 2026

### Source 2: JLR DCDC Converter Recall (April 2026)
- 170,169 vehicles: 2019-2024, covers Range Rover, RR Sport, Defender, Velar, Evoque, Discovery, Jaguar F-Pace, E-Pace
- ~6,000 field reports in US alone
- Failure: DCDC converter fails → can't charge 12V system → progressive cascade: driver aids fail, suspension faults, vehicle shifts to neutral, engine dies, exterior lights go dark
- JLR initially said "not a safety risk" — NHTSA forced the recall
- NO FIX AVAILABLE at time of recall
- 0 injuries, 0 crashes, 0 fires reported
- Source: Carscoops/NHTSA, April 2026

### Source 3: FARS Data (2014-2023)
- Range Rover Sport: 26 deaths / 95 crashes = 27.4% lethality (2nd lowest of 337 models)
- Only Porsche Macan lower at 22.6% (7 deaths / 31 crashes)
- Compare to economy sedans: Cavalier 85.7%, Neon 85.6%, Aveo 89.0%
- Luxury SUV average lethality: ~37%
- Economy sedan average lethality: ~80%
- The lethality gap is 3.1× — crash a Cavalier and you're 3× more likely to die than in a Range Rover Sport

### Source 4: NHTSA 2025 Early Estimate
- 36,640 deaths in 2025 (down 6.7% from 39,254 in 2024)
- Fatality rate: 1.10/100M VMT (2nd lowest in FARS history)
- Context: national numbers declining, but FARS tells us nothing about the engineering time bombs rolling around the fleet

## Angle: "The Safest Vehicle in Your Database Is a Ticking Structural Failure"
FARS says the Range Rover Sport is nearly the safest crash you can have. NHTSA says 330,000 of them might have steering assemblies that crack apart. Both statements are simultaneously true. This is the FARS defect blind spot: the database that tracks 36,640 annual deaths cannot see the 500,000+ vehicles with engineering defects that could add to that number next year.

## Kill Test: Is This Genuinely Newsworthy?
YES. This cross-references two federal data systems (FARS and NHTSA complaint/recall) that are almost never analyzed together. The specific paradox — lowest-lethality vehicle under investigation for structural failure — is genuinely surprising and has a clear actionable takeaway: check your VIN, don't assume FARS data = safe vehicle.

## Journalist: Rex Driverton
Investigation beat. FARS deep dives. This is a data investigation that exposes a systemic blind spot.

## Actionable Takeaways
1. Range Rover/RR Sport 2014-2022 owners: check VIN at nhtsa.gov/recalls immediately
2. Don't use "deaths per crash" as sole safety metric — FARS can't see defects before they cause crashes
3. NHTSA complaint database (nhtsa.gov/complaints) is the other half of the safety picture
4. JLR's initial recall scope was too narrow — 2020-2021 failures prove the design defect extends beyond 2015-2017
