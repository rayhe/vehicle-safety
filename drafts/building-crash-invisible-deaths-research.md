# Research: Vehicle-Into-Building Crashes — FARS's Invisible Dead

## Angle
FARS, the gold standard for US traffic fatality data, systematically undercounts vehicle-into-building deaths. NHTSA recorded just 210 such crashes in 2020. The Storefront Safety Council (validated by Lloyd's of London) estimates ~100 incidents PER DAY, up to 2,600 deaths and 16,000 injuries per year. That means the real number may be 12x+ what NHTSA reports. News hook: a Tesla at 73 mph just killed a 76-year-old woman inside her home in Katy, TX (June 19, 2026).

## Kill Test
Is this genuinely newsworthy? YES. 
- Novel angle: nobody has connected FARS data blind spots to vehicle-into-building deaths before on this site
- Data-driven: quantifiable gap between NHTSA's 210 and the Council's 2,600+ deaths
- News hook: the Katy TX Tesla crash happened 4 days ago
- Reader impact: if you live in a ground-floor structure near a road, this directly affects you

## Primary Sources

### Source 1: Storefront Safety Council
- Collecting data since 2014 from police reports, court documents, media reports, litigation data
- Validated by Lloyd's of London audit (2022)
- Estimates: up to 2,600 deaths/year, 16,000 injuries/year from vehicle-into-building crashes
- ~100 incidents per day in the US
- Captures only ~1 in 12 incidents (massive undercount even of their own data)
- Adds 200-250 crashes to database per month
- Las Vegas bus stops struck 27 times in a single year, only 2 made it into the database
- URL: storefrontsafety.org (crash statistics)

### Source 2: NHTSA FARS Methodology
- FARS excludes "crashes that occurred on private property, including parking lots and driveways" from year-end totals
- IIHS says NHTSA *does* record building crashes but only when deemed "most harmful event" — if driver struck another vehicle first, building crash may not be counted
- NHTSA reported just 210 vehicle-into-building crashes in ALL of 2020
- This means: 210 (NHTSA) vs. potentially 2,400-3,000+ (SSC) = ~90-93% undercount
- FARS data on this site covers 2014-2023 and inherits this blind spot

### Source 3: Katy TX Tesla Crash (June 19, 2026)
- Tesla Model 3 crashed into residential home at 73 mph in Katy, Texas
- Killed Maria Avila, 76, who was inside the home
- Driver reported FSD/Autopilot was engaged
- Tesla's Ashok Elluswamy (head of self-driving) says driver overrode by pressing accelerator to 100%
- Harris County Sheriff confirms high-rate-of-speed entry through brick residence
- NHTSA opened Special Crash Investigation (first Tesla SCI since July 2023)
- Source: Reuters, Fox News, Devdiscourse (June 22-23, 2026)

### Source 4: Streetsblog USA (June 2022)
- "Vehicle-Into-Building Crashes 40% Higher Than Previously Thought"
- 16,000 injuries/year (4x higher than 2020 estimate)
- Henry Grabar (Slate): "We don't even know how many times a day a car smashes into a building"
- Key point: "Not even clear when law enforcement officers are supposed to report collisions to federal agencies"

### Source 5: FARS Data (from our dataset)
- Our dataset tracks 337 models with 50+ deaths or >1k annual sales
- None of our fatality counts include building occupant deaths where the crash was classified as non-public-road or where building wasn't "most harmful event"
- This means: our death rates may undercount the TOTAL harm vehicles cause
- Heaviest vehicles (Silverado: 6,040 lbs, F-150: 5,500 lbs, Tahoe: 5,800 lbs) have more kinetic energy at speed → more lethal building penetration
- Kinetic energy = ½mv². A 6,000-lb Silverado at 30 mph carries ~119,000 ft-lbs of energy. A 3,000-lb Civic at 30 mph carries ~59,500 ft-lbs. The Silverado delivers 2x the energy into a building wall.

## Original Contribution
Cross-tabulating FARS methodology limitations with Storefront Safety Council estimates to quantify the "invisible dead" — people killed by vehicles who never appear in the dataset that drives every traffic safety conversation in America. Novel calculation: if 2,600 people die annually in vehicle-into-building crashes and only 210 are counted by FARS, approximately 2,390 Americans per year die in vehicle-related incidents that don't exist in the primary federal safety database.

## Journalist
**Axle McScatter** — Data Visualization Editor. This is fundamentally about what gets counted and what doesn't. A methodology story.

## Strongest Counterargument
The Storefront Safety Council's 2,600 death estimate has been questioned (Henry Grabar at Slate noted methodology concerns). The Council's data comes from anecdotal sources, not comprehensive government records. The true number could be much lower. Also, some FARS exclusions are defensible: parking lot fender-benders that clip a building facade are fundamentally different from high-speed penetration events. Not all 2,600 deaths (if accurate) represent FARS-eligible crashes on public roads.

## Limitations
- The Storefront Safety Council is an advocacy organization that sells bollard and barrier products; potential conflict of interest in inflating numbers
- We cannot independently verify the 2,600 death estimate or the 1-in-12 capture rate
- FARS's methodology may capture more building crashes than the 210 figure suggests, depending on how "most harmful event" is coded
- The Katy TX crash IS likely in FARS (public road departure into structure) — not all building crashes are invisible
- Our kinetic energy calculation assumes perpendicular impact; real-world angles vary dramatically
