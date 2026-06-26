# Research Notes: The Override Defense

## The Hook
On June 19, 2026, a Tesla Model 3 crashed into a home in Katy, Texas at 73 mph, killing 76-year-old Martha Avila inside her own house. NHTSA and NTSB have both opened investigations. Tesla's defense: the driver "manually overrode self-driving by pressing the accelerator all the way to 100%."

This is the first time "override" has been used as a corporate defense in a fatal ADAS crash. It raises a question nobody in the industry wants to answer: if the driver can override the safety system using the same pedal input that causes the crash, what is the system actually protecting against?

## Primary Sources

### Source 1: NHTSA/NTSB Investigations
- NHTSA Special Crash Investigation opened June 23, 2026
- NTSB investigation opened June 25, 2026 (via X post)
- NHTSA has opened nearly 50 special crash investigations involving Teslas since 2016
- 3.2 million Tesla vehicles under expanded FSD/Autopilot probe (escalated March 2026)
- Harris County Sheriff's Office: driver (Michael Butler) stated he was using automated driving assistance
- Tesla VP AI Software Ashok Elluswamy (X post): driver pressed accelerator to 100%, reached 73 mph, kept accelerator pressed even after crash
- Wrongful death lawsuit filed by Avila family in Harris County, seeking >$1M + punitive damages

### Source 2: AEB Design Standards
- IIHS research: AEB reduces rear-end crashes by 50%
- Voluntary AEB commitment: standard on all light vehicles since Sept 2022
- NHTSA proposed AEB rule: requires full stop/avoidance up to 62 mph
- ALL AEB systems can be overridden by pressing accelerator — this is by design
- EU ISA (Intelligent Speed Assistance) mandatory since July 2024 — limits vehicle speed, can be overridden but provides friction

### Source 3: FARS Data — Tesla
- Tesla Model 3: 92 deaths, 212 FARS crashes, fleet 1,575,000, rate 0.05/100M VMT
  - Kill ratio: 0.434 (driver dies in 43.4% of fatal crashes — relatively low)
  - Toxicology: 765 drivers, 20.1% any impairment (14.8% alcohol, 9.2% drug)
- Tesla Model Y: 57 deaths, 112 crashes, fleet 1,750,000, rate 0.03
  - Kill ratio: 0.509
  - Toxicology: 455 drivers, 17.6% any impairment
- Tesla Model S: 100 deaths, 134 crashes, fleet 175,000, rate 0.50
  - Kill ratio: 0.746 (HIGH — driver dies in 74.6% of fatal crashes)
  - Toxicology: 204 drivers, 24.0% any impairment (highest of Tesla fleet)

### Source 4: Florida Precedent
- Prior Tesla crash case where Tesla told plaintiffs crash data "didn't exist"
- Independent researcher recovered "collision snapshot" auto-uploaded to Tesla servers
- Data showed system had detected the pedestrian
- Tesla accused of withholding data and misdirecting police
- Relevant: Tesla's self-serving data release on X is not the same as NHTSA/NTSB independent analysis

## Novel Analysis

### The Universal Override Problem
Every car with AEB has the same design choice: the driver can override automatic braking by pressing the accelerator. This is intentional — you don't want AEB to trap a driver who needs to accelerate to avoid a different hazard. But it means AEB provides zero protection against the exact scenario that killed Martha Avila: a driver pressing the accelerator when they shouldn't be.

### The Speed Gap
- NHTSA's proposed AEB rule covers up to 62 mph
- The Katy crash was at 73 mph — above AEB coverage even under the proposed rule
- Residential speed limits are typically 25-35 mph
- The delta between 35 mph (speed limit) and 73 mph (crash speed) is 38 mph — more than double
- No US regulation prevents a vehicle from exceeding the speed limit

### FARS Cross-Tab: Tesla Impairment and the Override
If 20.1% of Tesla Model 3 drivers in fatal crashes were impaired, the override creates a paradox:
- AEB exists to prevent crashes
- Impaired drivers are most likely to make dangerous pedal inputs
- But impaired drivers can override AEB with those same dangerous pedal inputs
- The safety system is least effective against the population that needs it most

### The Bystander Problem
Martha Avila was not in a vehicle. She was in her house. The FARS data captures vehicle occupant deaths primarily. Bystander deaths from vehicles crashing into structures are a separate category that traditional vehicle safety metrics don't adequately track. The override defense shifts liability but doesn't prevent the death.

## Counterargument (at full strength)
The strongest counterargument: AEB MUST be overridable. If the system incorrectly detects an obstacle (false positive) and brakes in traffic, the driver needs to override it to avoid a rear-end collision. Making AEB non-overridable could cause more crashes than it prevents. The alternative — speed limiters — would face massive consumer and political resistance in the US and could create their own safety hazards (e.g., inability to accelerate away from danger on a highway).

## Limitations
- FARS data covers 2014-2023 and doesn't track which ADAS features were active
- Tesla's FARS sample is relatively small compared to established brands
- The override defense is new — no statistical data on how often drivers override ADAS in pre-crash scenarios
- The Katy crash investigation is ongoing; final determination pending NHTSA/NTSB review
- We don't have access to Tesla's internal crash logs; our analysis uses public data only

## Actionable Takeaways
1. Know that your AEB can be overridden by the accelerator — it's a backup, not a failsafe
2. If you drive a Tesla with FSD, understand that pressing the accelerator overrides the system and puts full liability on you
3. If you're buying a new car, ask whether it has speed-limiting features in addition to AEB
4. Check your VIN at nhtsa.gov/recalls for any open recalls on your vehicle's ADAS systems

## Journalist: Clara Rollover
Consumer safety advocate angle. Direct, practical, slightly angry on behalf of consumers and bystanders. The angle is: the industry designed a backdoor into its own safety system, and the first major test case just proved it.
