# Research Notes: ADAS Repair Cost Simpson's Paradox

## Angle
IIHS/HLDI published an insight piece (Aug 11, 2026) by Matt Moore (Chief Insurance Operations Officer) showing that crash avoidance sensors are blamed for high repair costs, but the reality is a statistical paradox: ADAS makes individual repairs more expensive while making *overall* insurance losses lower.

The killer data point: PDL (property damage liability — damage to the OTHER car) claim severity is 15% higher for ADAS-equipped vehicles. But ADAS sensors on YOUR car don't affect the cost of fixing the OTHER car. What's actually happening is survivorship bias / Simpson's Paradox: ADAS eliminates cheap fender benders, concentrating the remaining claims at higher severity, inflating the average.

## Primary Sources

1. **IIHS Insight: "How crash avoidance tech simultaneously raises and slashes repair costs"** (Aug 11, 2026)
   - Author: Matt Moore, Chief Insurance Operations Officer, IIHS-HLDI
   - URL: https://www.iihs.org/news/detail/how-crash-avoidance-tech-simultaneously-raises-and-slashes-repair-costs
   - Key data (2017-22 model year vehicles):
     - Collision claim severity: ~10% higher for ADAS-equipped vehicles
     - PDL claim severity: ~15% higher for ADAS-equipped vehicles (this is the paradox)
     - Collision claim frequency: ~10% lower for ADAS-equipped
     - PDL claim frequency: ~40% lower for ADAS-equipped
     - Overall collision losses: ~5% lower for ADAS-equipped
     - Overall PDL losses: ~30% lower for ADAS-equipped
   - BLS: average vehicle repair prices up 40%+ since 2020, faster than inflation
   - Other cost drivers: SUV/truck dominance, luxury features in base models, 2/3 of new vehicles now AWD/4WD, half have turbo/hybrid/EV powertrains

2. **IIHS: Crash avoidance features improve safety but complicate repairs** (2023)
   - URL: https://www.iihs.org/news/detail/crash-avoidance-features-improve-safety-but-complicate-repairs
   - Survey of ~500 drivers about ADAS repair experiences
   - Windshield replacement: $250 basic → $1,000+ with sensor calibration
   - AEB cuts rear-end crashes by 50%

3. **BLS Consumer Price Index — Motor Vehicle Maintenance and Repair**
   - 40%+ increase since 2020

## Original Contribution
Simpson's Paradox framing applied to ADAS repair cost data. Nobody has connected the PDL severity anomaly to survivorship bias explicitly. The IIHS piece explains it but doesn't name the paradox. Naming it gives readers a conceptual tool to evaluate similar claims in other domains.

## Counterargument
The insurance math works out in aggregate, but individual crash victims don't experience averages. If you're the one in the crash that ADAS didn't prevent, your bill is 10-15% higher. ADAS redistributes costs: most people save (by not crashing), but the unlucky few pay more per incident. This is a regressive transfer if lower-income drivers are more likely to drive older ADAS-less vehicles and get hit BY newer ADAS-equipped vehicles.

## Limitations
- HLDI comparison is for 2017-22 models — the ADAS adoption curve was steep during this period, so equipped vs. unequipped vehicles may differ in other ways (newer models, different driver demographics)
- PDL severity gap could partially reflect other spec differences between equipped/unequipped trims
- "Overall losses" metric favors the insurance industry perspective; individual out-of-pocket with deductibles may tell a different story

## Journalist
Vin Wreckage — Existential Dread Columnist. Paradoxes and counterintuitive findings are his exact beat. Last appeared at #739.
