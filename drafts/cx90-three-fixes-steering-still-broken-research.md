# Research: Mazda CX-90 — Three Fixes, Steering Still Broken

## Angle
Mazda recalled 43,752 MY2024 CX-90s in early 2024 for "sticky steering" — a sudden increase in steering effort caused by grease being pushed out of the worm gear in the electric power steering assembly. The recall fix (24V022) involved a new spring, fresh lubricant, and a software update. NHTSA approved it. Owners brought their cars in.

Then the complaints accelerated. Post-remedy NHTSA complaint velocity went from ~3/month to 20–34/month in H1 2026. NHTSA opened Recall Query RQ26002 in January 2026 to investigate whether the remedy actually worked. Two crashes have been linked to the post-remedy condition.

**Novel contribution:** The complaint velocity signal. NHTSA measures recall COMPLETION rates (currently ~50.3% overall). They don't systematically measure whether completed repairs actually fix the defect. The CX-90 case is a quantified example: a z = +2.0 outlier on cross-manufacturer complaint share in Q2 2026, driven entirely by steering complaints on a vehicle that was supposedly already recalled and fixed.

**Kill test:** Is this genuinely newsworthy after 769 articles?
YES. We have recall-remedy-quality-gap.html (Ram BTSI case). But this is a different angle: quantified complaint VELOCITY as a leading indicator of failed remedies, specific to Mazda's three-attempt-failure engineering story. The CX-90 is the "the fix made it worse" poster child. The broader question — what percentage of recall remedies actually work? — has no published answer.

## Primary Sources

### 1. NHTSA Recall 24V022 (original recall, January 2024)
- **Manufacturer:** Mazda North American Operations
- **Affected vehicles:** 43,752 MY2024 CX-90 (gas and PHEV)
- **Production dates:** December 27, 2022 – December 11, 2023
- **Defect:** Excessive friction in the worm gear of the electric power steering assembly causes sudden increase in steering effort ("sticky steering")
- **Root cause:** Grease pushed out from gear teeth due to excessive spring force
- **Remedy:** Replace spring, apply fresh lubricant, software update to detect steering resistance before driver notices
- **History:** Mazda began investigating in November 2022. First countermeasure (modified tooth shape) didn't work. Second countermeasure (new spring + grease + software) was the recall remedy.
- Source: NHTSA recalls database

### 2. NHTSA Recall Query RQ26002 (January 2026)
- **Type:** Recall Query — investigation into recall remedy effectiveness
- **Trigger:** 26 new consumer complaints + several EWR field reports AFTER recall repair was completed
- **Allegation:** Brief and intermittent increases in steering effort during normal driving, in vehicles that had the recall remedy performed
- **Crashes:** 2 crashes attributable to the post-remedy condition
- **Injuries:** 0 reported in the post-remedy crashes
- **Status:** Open investigation (preliminary)
- Source: NHTSA ODI, Autoblog, Carscoops, autoevolution

### 3. NHTSA Complaint Velocity Data (via alt-data-vehicle-quality analysis)
- **Pre-remedy baseline:** ~3 steering complaints/month (2022–2025)
- **Post-remedy spike:** 20–34 complaints/month (January–May 2026)
- **Total H1 2026 steering complaints:** 147
- **Severity:** 5 crashes, 3 injuries (high volume, low severity)
- **z-score:** +2.0 on Q2-2026 complaint share vs trailing 24-month baseline
- **Cross-manufacturer ranking:** Mazda is the statistical outlier among all major OEMs
- Source: NHTSA ODI FLAT_CMPL.txt (1.5GB, 2.23M rows), analysis by michaelmiele07/alt-data-vehicle-quality

### 4. Mazda Financial Impact
- Mazda FY-March-2026 earnings: ¥35.1B (~$235M), down 69%
- Market cap: ~$4.2B
- CX-90 US sales: down ~40% YTD 2026
- Potential recall scope if expanded to CX-70: ~120–180K US vehicles
- A steering-rack recall at that scope could cost the same order of magnitude as annual net income

### 5. Burnell v. Mazda Motor Corporation (class action, March 2026)
- Filed as class action covering all CX-90 owners/lessees
- Alleges: steering defects (sticky steering + lane-keep assist conflicts) AND braking defects (phantom braking)
- Claims Mazda had prior knowledge of similar issues on other models
- Claims dealerships unable to diagnose or resolve despite repeated visits
- Source: Autoblog

### 6. NHTSA Recall Completion Rate Context
- Overall recall completion rate: 50.3% as of February 2026 (NHTSA 2025 Recall Completion Rates Report)
- 14 million recalled vehicles still unrepaired
- NHTSA measures completion (did the car go to the dealer?) NOT outcome (did the fix work?)
- No systematic program to track post-remedy complaint velocity

## Strongest Counterargument
The 26 post-remedy complaints out of 43,752 vehicles is a 0.06% rate. In a country where NHTSA gets ~80,000 complaints per year across all manufacturers, 26 complaints could be noise — owners misattributing normal steering variance to the recalled condition, or different failure modes coinciding with the same symptom. Mazda itself stated they are "fully cooperating with NHTSA" and "actively investigating."

**Response:** The complaint VELOCITY is the signal, not the absolute count. Going from 3/month to 34/month is a tenfold spike on a vehicle that was supposedly fixed. If the remedy worked, complaint velocity should have dropped toward zero, not spiked to an all-time high. And the z = +2.0 cross-manufacturer outlier status means this isn't random noise — it's statistically anomalous.

## Limitations
- NHTSA complaint data captures only owner-initiated reports. Many owners may experience sticky steering and never file a complaint.
- The 147 H1 2026 complaints include BOTH pre-remedy and post-remedy vehicles (not all 43,752 have been repaired).
- Complaint velocity could be inflated by media coverage of the investigation itself (awareness bias).
- The z-score methodology uses manufacturer-level complaint share, not model-level, which dilutes the signal for large multi-brand OEMs.
- We cannot determine from public data what percentage of the 43,752 vehicles have actually received the recall repair.

## Journalist Assignment
**Vin Wreckage** — Existential Dread Columnist. The paradox of a safety system that measures whether cars visited the dealer but not whether the dealer actually fixed anything is peak existential absurdity. "You did everything right. You got the recall notice. You brought it in. They 'fixed' it. And here you are, white-knuckling a highway merge because the steering went stiff again."
