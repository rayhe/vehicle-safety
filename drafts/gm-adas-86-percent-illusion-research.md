# Research: GM Says Its Safety Tech Prevents 86% of Crashes. The Math Says It Saves 3%.

## Angle
GM and UMTRI published a study on May 8, 2026, analyzing 12 million GM vehicles (MY 2020-2024) and 700,000+ police-reported crashes across 18 states. Headlines claim ADAS reduces crashes by "up to 86%." The 86% figure is real but misleading: it applies to **backing crashes only** — one of the rarest causes of traffic death. When you map GM's own numbers onto FARS fatality data, the technologies they tested address roughly 12% of the annual death toll at full fleet penetration, and about 3% at current fleet age.

## Kill Test
Is this genuinely newsworthy? **YES.** This is original analysis — nobody has cross-referenced GM's specific ADAS reduction percentages against FARS fatal crash type distributions to compute the actual lives-saved ceiling. Every outlet repeated the "86%" headline. Nobody did the subtraction.

## Journalist
**Vin Wreckage** — existential dread, cosmic absurdity. The paradox of a corporation proving its tech works while the math shows it barely dents the body count.

## Primary Sources (3+)

### Source 1: GM-UMTRI Study (May 8, 2026)
- Published by GM and University of Michigan Transportation Research Institute
- 12 million GM MY 2020-2024 vehicles, 700,000+ police-reported crashes across 18 states
- Key findings:
  - Rear camera/cross-traffic alert: **86% reduction** in backing crashes
  - Automatic Emergency Braking (forward): **57% reduction** in rear-end crashes  
  - Pedestrian AEB: **35% reduction** in pedestrian injury crashes
  - Lane Keep Assist: **14% reduction** in lane-change crashes
- Features now standard on GM vehicles under $30,000
- Covered police-reported crashes (injury + property damage), NOT specifically fatal crashes
- Source: Multiple outlets (GM Authority, Autoblog, Fleet Management Weekly, DesignNews, CollisionWeek)

### Source 2: NHTSA FARS Data (2014-2023)
From our fars_output.js dataset:
- Total deaths in dataset (337 models): 191,193 over 10 years = ~19,119/year in-dataset
- NHTSA total: ~38,000-42,000/year (our dataset covers roughly half — the high-volume models)
- GM brand deaths (Chevrolet, GMC, Buick, Cadillac, Pontiac, Saturn, Oldsmobile, Hummer): 51,687
- GM deaths from MY 2020+ vehicles: 1,055 (just 2.1% of GM's total)
- ALL vehicle deaths from MY 2020+ vehicles: 5,955 (just 3.2% of all deaths)
- **97.9% of GM's FARS body count comes from pre-ADAS vehicles**

### Source 3: NHTSA Fatal Crash Type Distribution (established published data)
Fatal crash type breakdown (approximate from NHTSA Traffic Safety Facts):
- Single-vehicle run-off-road/rollover/fixed object: ~53% of fatal crashes
- Angle/T-bone (intersections): ~16%
- Head-on: ~10%
- Rear-end: ~7% (~2,660 deaths/year at 38,000 total)
- Sideswipe: ~4%  
- Pedestrian/cyclist deaths: ~20% of total (~7,700/year)
- Backing/reversing fatal: ~0.5-1% (~200-300/year, mostly pedestrians — children and elderly)

### Source 4: NHTSA 2024/2025 Fatality Estimates
- 2024: ~39,345 fatalities (3.8% decline from 2023)
- 2025: ~36,640 fatalities (6-year low)
- 15 consecutive quarters of decline

## Original Analysis: The Ceiling Calculation

### Step 1: Map GM's reduction rates to fatal crash types

| ADAS Feature | GM's Claimed Reduction | Fatal Crash Type | % of Fatal Crashes | Annual Fatal Deaths | Theoretical Lives Saved |
|---|---|---|---|---|---|
| Rear camera/CTA | 86% | Backing | ~0.8% | ~300 | ~258 |
| Forward AEB | 57% | Rear-end | ~7% | ~2,660 | ~1,516 |
| Pedestrian AEB | 35% | Pedestrian | ~20% | ~7,600 | ~2,660 |
| Lane Keep Assist | 14% | Sideswipe/lane-change | ~4% | ~1,520 | ~213 |
| **Total** | | | **~32%** | **~12,080** | **~4,647** |

### Step 2: But wait — the asterisks

1. **These are police-reported crash reductions, not fatal crash reductions.** Fatal crashes involve higher speeds, more severe impacts. AEB tested at 25 mph parking lot speeds (IIHS test protocol). At 65 mph highway speed, AEB reduces closing speed by ~20-30 mph but does not prevent impact. The fatal crash reduction is almost certainly lower than the police-reported reduction.

2. **Single-vehicle crashes (53% of fatalities) are barely addressed.** Run-off-road, rollover, fixed-object impacts — the dominant cause of death — are not significantly impacted by rear cameras, AEB, or LKA in their current form. LKA might help with drowsy/distracted run-off-road, but at 14% effectiveness, it's marginal.

3. **Head-on crashes (10% of fatalities) are completely unaddressed.** No ADAS feature in GM's study targets head-on collisions.

### Step 3: Fleet penetration reality

- MY 2020+ vehicles represent about 25-30% of registered vehicles
- But in FARS fatality data, they represent only 3.2% of deaths (because newer vehicles are inherently safer AND have less exposure time)
- Even if ADAS is 100% effective at its claimed rates, it can only save lives in the crashes involving equipped vehicles

### Step 4: Actual current impact

Theoretical ceiling at 100% fleet: ~4,647 lives/year (12.2% of deaths)
At current fleet penetration (~25%): ~1,162 lives/year (3.1% of deaths)
Discounted for fatal vs police-reported difference (~50%): ~581 lives/year (1.5% of deaths)

**GM's "86% crash reduction" headline translates to roughly 1.5-3% of actual traffic deaths prevented.**

## Counterargument (at full strength)
GM would fairly argue: (1) The study proves these technologies WORK, and the fleet will eventually turn over; (2) preventing injury crashes matters too — not every safety win shows up in fatality stats; (3) the 86% backing crash reduction saves disproportionately vulnerable victims (children, elderly pedestrians); (4) this is just one study of one manufacturer — industry-wide deployment multiplies the impact. All of these are valid. The counterargument is about trajectory, not current state.

## Limitations
- FARS data is 2014-2023; the 2020+ cohort has limited exposure time (1-4 years vs 10+ for older vehicles), which compresses its death count
- GM's study covers police-reported crashes; our analysis uses fatal crashes — different populations
- Fatal crash type percentages are approximate (sourced from NHTSA Traffic Safety Facts, not our FARS dataset which lacks crash type coding)
- AEB effectiveness at fatal-crash speeds is estimated, not measured — the actual reduction could be higher or lower than the 50% discount applied
- Fleet penetration is approximate — exact percentage of ADAS-equipped vehicles on road is not precisely known

## Actionable Takeaway
If you drive a pre-2020 vehicle: these technologies cannot protect you. Your car lacks AEB, LKA, rear cross-traffic alert. The most impactful safety upgrade you can make is buying a newer vehicle with standard ADAS — the GM study proves they work. But don't kid yourself that the national death toll is about to plummet. Fleet turnover takes 12-15 years. We'll be stacking bodies into the 2030s from cars built in the 2000s.
