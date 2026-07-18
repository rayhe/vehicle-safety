# Research Notes: FSD "Too Timid" Then 73 mph — The Aggressiveness Feedback Loop

## Slug: fsd-too-timid-then-73-mph
## Journalist: Rex Driverton
## Kicker: Investigation
## Date: July 18, 2026

## The Incident — Katy, Texas, June 19, 2026

- **Vehicle:** 2025 Tesla Model 3
- **Driver:** Michael Butler, 44, making DoorDash deliveries
- **Victim:** Martha Avila, 76, killed in her home
- **Location:** Rose Hollow Lane, Katy, Harris County, TX — residential two-lane road, 30 mph speed limit
- **Time:** ~8:03 PM CDT, clear weather, dry roadway, daylight
- **What happened:** Car departed roadway at intersection with Blooming Park Lane (where road required a right turn), went straight through, and crashed into residence at >70 mph
- **Driver status:** Minor injuries. No drugs, no alcohol, no medical condition found. Charged with manslaughter.

## NTSB Preliminary Report (HWY26FH014, released July 15, 2026)

Key finding: "Electronic data recovered from the vehicle indicated that before the crash, the driver manually overrode FSD (Supervised) by pressing the accelerator pedal to 100%, and the vehicle's speed was greater than 70 mph when the crash occurred."

- FSD (Supervised) was engaged — Tesla classifies this as SAE Level 2 ADAS
- SAE Level 2: driver must be "fully responsible for driving the vehicle while the system provides continuous assistance with both acceleration/braking and steering"
- NHTSA has also opened a special crash investigation
- Parties: Harris County Sheriff's Office, Tesla

Source: https://www.ntsb.gov/investigations/Pages/HWY26FH014.aspx

## The Google Searches (Court Records, per Electrek)

Driver had Googled:
- "Tesla fsd not aggressive enough 2026"
- "FSD is not aggressive enough for city driving"
- "Tesla fsd too timid"

These searches show frustration with FSD's conservative driving behavior — specifically its tendency to drive slowly in neighborhoods and be cautious at intersections. This is the OPPOSITE of the crash behavior.

## The Override Architecture Issue

Key detail from Forbes: pressing the accelerator while in FSD doesn't disengage FSD. The car takes the driver's acceleration input AND stays in FSD mode. This is different from braking, which does disengage some aspects.

This means:
1. FSD was technically still "active" even at 73 mph in a 30 mph zone
2. No speed limiter intervened
3. No emergency braking triggered against the driver's input
4. The system designed for "supervision" allowed a 43 mph overspeed without resistance

## The DoorDash Context

- Driver was making DoorDash deliveries with FSD engaged "in the hours and minutes leading up to the crash"
- He enabled FSD while changing music on the touchscreen
- He claimed he "passed out" — last thing he remembers is FSD on highway
- No medical explanation found for "passing out"
- Brakes were never applied "in the final minutes" before the crash

## Broader NHTSA Data

- Since 2016: NHTSA has opened ~50 special investigations of Tesla crashes with ADAS
- ~24 deaths reported in those investigations
- 273 crashes identified involving Tesla ADAS
- March 2026: NHTSA escalated probe into 3.2 million Teslas with FSD (visibility concerns)
- Earlier FSD recall: 363,000 vehicles for intersection behavior (traffic violations)

## FARS Data — Tesla Model 3

From fars_output.js:
- Deaths: 92 (2014-2023)
- Annual: 9.2
- Crashes: 212
- Fleet: 1,575,000
- VMT: 18,112 (100M VMT)
- Rate: 0.05 per 100M VMT (among the lowest in the database)
- Impairment: 20.1% (any), 14.8% alcohol, 9.2% drug

The low death rate partly reflects fleet age (Model 3 entered market in 2017, so mostly new cars in FARS period) and demographics. But 92 deaths is still 92 families.

## Original Contribution — The Aggressiveness Feedback Loop

1. FSD drives conservatively in neighborhoods (by design)
2. This frustrates drivers who want faster driving (e.g., delivery drivers with economic time pressure)
3. Drivers Google "FSD not aggressive enough" and learn that pressing the accelerator adds speed
4. When they override, FSD doesn't disengage — it stays in "supervised" mode
5. No speed limiter prevents 73 mph in a 30 mph zone
6. No AEB triggers against driver-initiated acceleration
7. The system's safety feature (conservative speed) becomes the trigger for the unsafe behavior it can't prevent

This is a genuine feedback loop: the more conservative FSD is, the more it trains users to override it. And the override path has no guardrails.

## Counterargument (stated at full strength)

The driver caused this crash, not FSD. The NTSB confirmed the driver pressed the accelerator to 100%. Tesla's system drove conservatively — exactly as designed — and the driver deliberately overrode it. Blaming FSD for this is like blaming cruise control when a driver floors it past a school zone. Personal responsibility matters, and 44-year-old adults are accountable for pressing the gas pedal in a neighborhood.

## Rebuttal

SAE Level 2 means "the system provides continuous assistance with both acceleration/braking and steering." A system that accepts a 73 mph driver override in a 30 mph zone without any resistance — no speed warning, no max speed cap, no progressive throttle reduction, no AEB — isn't providing "assistance." It's spectating. Commercial aircraft throttle override systems have been debated for decades precisely because the interaction between human input and automated systems creates failure modes neither would produce alone.

## Limitations

- FARS data for Tesla is limited (newer fleet, smaller numbers)
- We don't know exactly when the Google searches occurred relative to the crash
- Driver's "passing out" claim is unverified — could be post-hoc defense
- FSD behavior during the crash is still under investigation
- This is one crash — pattern analysis requires more data

## Actionable Takeaway

If you use Tesla FSD: know that pressing the accelerator doesn't disengage it. The car will go as fast as you tell it to, regardless of speed limits, while FSD remains "active." If you find FSD "too timid," that conservatism is the safety margin. Overriding it removes the only guardrail between you and a 73 mph crash in a 30 mph zone.

## Sources

1. NTSB Preliminary Report HWY26FH014 (July 15, 2026): https://www.ntsb.gov/investigations/Pages/HWY26FH014.aspx
2. NHTSA Special Crash Investigation (opened June 2026)
3. NHTSA FARS Database, Tesla Model 3 data (2014-2023)
4. NHTSA FSD Investigation, 3.2 million vehicles (escalated March 2026)
5. Court records re: Google searches (per Electrek, July 2026)
6. Forbes: FSD accelerator override behavior
7. SAE J3016_202104: Level 2 automation definition
