# Research: Tesla's Hidden Autopilot/FSD Fatal Crashes

## Article #905 — The Crash Report

## Angle
Every fatal Tesla crash exists in two versions: the one the public is told about (a police report, a news story, "a single-vehicle wreck") and the one Tesla tells the federal government (driver-assist verified engaged at X mph). An ongoing Electrek investigation is matching them up one by one, and the pattern is damning: in at least eight fatal crashes, Tesla's own data says the automation was on and the public record never mentions it. The crash record is missing the robot.

## Journalist
Rex Driverton — Senior Crash Correspondent. Fatality-rate investigations, vehicle-specific deep dives, FARS and crash-data reporting. Deadpan dark humor, noir-detective-through-paperwork energy. This is a two-records-one-crash detective story: perfect Rex territory.

## News peg
Electrek's running investigation, launched September 1, 2026 and updated through at least September 10, 2026: "Tracking the fatal Tesla Autopilot and FSD crashes hidden in its data." Eight confirmed fatal cases and counting. Fresh, data-driven, investigative.

## Kill test (why this isn't a retread)
- Not covered before: grep of drafts for "vinemont," "pattonsburg," "kayleigh" returns nothing.
- Prior Tesla coverage hit suspension failures (#888/#778), Cybercab (#839/#848/#812), FSD probe-urging (#Sept-10 Krishnamoorthi piece), FSD engineering analysis context. None covered Electrek's SGO-vs-police-record matching methodology or any of these eight crashes.
- Thematically rhymes with #845 (IIHS/telematics phone-use undercount) but the mechanism is different: not drivers lying to surveys, but the official crash record missing automation engagement entirely, revealed only by the manufacturer's own confidential federal filings.

## Primary sources

### 1. Electrek investigation hub (Sept 1, 2026, ongoing)
"Tesla reports its Autopilot and Full Self-Driving crashes to the federal government, as it's required to — and then blacks out almost everything in those reports, so the public never learns what happened. Tesla always ends up blaming the driver." Method: match redacted SGO reports to real fatal crashes covered as ordinary accidents, two columns — everything Tesla told the government vs everything the public was told — plus public-records requests to investigating agencies, including whether police received Tesla's raw telemetry or only Tesla's own interpretation of it.
URL: https://electrek.co/2026/09/01/tesla-autopilot-fsd-crashes-hidden-data/

### 2. Electrek Vinemont case report (Sept 9, 2026)
Dec 7, 2025, ~7:40 p.m., Alabama Highway 157 near the Cullman County line (Morgan County): 2021 Tesla Model Y Long Range left the roadway, struck two trees, caught fire. Driver Kayleigh Page, 29, of Waterloo, dead at scene; her 7-month-old daughter (per hub: "infant daughter"; case report says 7-month-old) hurt, pulled from the burning car by a passerby, hospitalized in stable condition. State troopers worked it as a routine fatal wreck — no mention of Autopilot, FSD, or driver-assist. Tesla's data: driver-assist verified engaged at 55 mph, a road departure.
URL: https://electrek.co/2026/09/09/tesla-driver-assist-road-departure-vinemont/

### 3. The other confirmed cases (from the hub, as of Sept 10, 2026 update)
- **Clute, Texas** — Steven Alvarez, 23: Model 3 left the road, hit a park pool. Police called it a possible medical episode. Tesla data: driver-assist verified engaged at 104 mph — "a speed that appears nowhere in the public record."
- **Lake Mary, Florida** — 43-year-old man: Model 3 sat stopped in a live I-4 lane, rear-ended by a semi. Troopers couldn't explain why the car was stopped. Tesla data: driver-assist verified engaged, at 0 mph.
- **Mesa, Arizona** — 2020 Model 3 stopped at 0 mph on Loop 202 at 3 a.m., rear-ended, driver killed. Tesla data: driver-assist verified engaged. Tesla holds the video.
- **Batavia, Illinois** — Maggie Espinosa, 37, teacher and mother of five, killed as a passenger when a Model Y turning left struck a pickup. Tesla data: driver-assist verified engaged while making the turn (FSD signature). Kane County State's Attorney's Office reviewing; Tesla holds the video.
- **Moraine, Ohio** — Leonidas Davis, 55, motorcyclist killed at an intersection. Every outlet called it "a sedan" — the car was never identified as a Tesla. Tesla data: Model X with driver-assist verified engaged. Tesla holds the EDR, telematics, video, and the police report.
- **Buena Vista Township, New Jersey** — Model 3 ran a stop sign, killed 82-year-old Stephen Field turning left in his Honda Civic. Police: Tesla "failed to stop." Tesla data: driver-assist verified engaged, logged at 4 mph — a rolling-stop signature pointing to FSD.
- **Pattonsburg, Missouri** — 2024 Model Y left I-35, struck guardrail, killed its driver, a 64-year-old Raymore woman. Tesla data: driver-assist engaged at 73 mph. Troopers: "veered off."

### 4. NHTSA's Audit Query into Tesla's crash reporting (Aug 2025, per Electrek)
NHTSA opened an Audit Query after Tesla submitted crash reports late in a batch: "evaluate the cause of the potential delays in reporting, the scope of any such delays, and the mitigations that Tesla has developed." Tesla blamed an "error" in its data collection. Context: Tesla abuses NHTSA's confidential business-information process to redact most crash data, claiming it would "suffer financial harm" if its self-driving crash data became public. Tesla leads Level 2 ADAS reporting with 2,300+ crashes vs GM SuperCruise's 55.
URL: https://electrek.co/2025/08/21/tesla-nhtsa-probe-not-properly-reporting-crashes-involving-autopilot-fsd/

### 5. USA Today (Sept 10, 2026) — regulatory context
Rep. Krishnamoorthi urging NHTSA to investigate Tesla after asleep-at-wheel FSD videos. NHTSA opened its FSD investigation Oct 2024 (four crashes in reduced-visibility conditions, one fatal pedestrian strike), upgraded to engineering analysis March 2026, still ongoing. Six open Tesla-related probes.
URL: https://www.usatoday.com/story/cars/technology/2026/09/10/tesla-autopilot-investigation-demand/91689280007/

## Key facts to anchor the story
- Eight fatal crashes, zero public mentions of Autopilot/FSD, all with Tesla's own federal filings showing driver-assist engaged.
- The pattern of signatures: 104 mph road departure, 0-mph stopped-car rear-endings, left-turn FSD maneuvers, 4-mph rolling stops.
- Tesla holds the video, the EDR, the telematics — and releases almost none of it.
- The SGO (Standing General Order) reporting system is the only reason any of this is knowable, and Tesla fought to keep the reports redacted.

## Story structure (Rex voice)
1. Lede: Kayleigh Page — mother dead, baby pulled from burning car, police said "single-vehicle wreck," Tesla's federal filing says the robot was driving at 55 mph.
2. The two-column method: Electrek's matching of redacted SGO reports to police narratives.
3. The case list, compressed: Clute (medical episode → 104 mph), Lake Mary and Mesa (0-mph stopped cars), Batavia (teacher, mother of five, state attorney reviewing), Moraine (wasn't even identified as a Tesla), Buena Vista (82-year-old in a Civic), Pattonsburg.
4. Why it matters: the crash record is the foundation of recalls, regulation, and lawsuits. If automation involvement is systematically missing, every downstream number is wrong.
5. The kicker: Tesla always ends up blaming the driver, and the official record agrees, because the official record never learned the robot was there.

## Headline candidates
- "Tesla's Data Says the Robot Was Driving. The Police Report Says Nothing."
- "The Police Called It a Medical Episode. Tesla's Filing Said Autopilot at 104 mph."
- "Eight Fatal Crashes, One Missing Detail: The Robot Was Driving"

## Pull stat
8 fatal crashes, 0 police reports mentioning automation — Tesla's federal filings say it was engaged in all 8.
