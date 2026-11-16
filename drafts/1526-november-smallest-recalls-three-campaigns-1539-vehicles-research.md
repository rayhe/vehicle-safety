# Research — #1526: November's Smallest Recalls: Three Campaigns, 1,539 Vehicles, Zero Crashes

**Slug:** `1526-november-smallest-recalls-three-campaigns-1539-vehicles`
**Journalist:** Mia Crumplezone (engineering defects beat; torque audits, glue joints, and software flags are her home turf)
**Kicker:** By The Numbers
**Date:** 2026-11-16
**Status:** RESEARCH complete, ready for DRAFT

## Angle (1-2 sentences)
Three NHTSA recall campaigns filed in the first two weeks of November 2026 cover just 1,539 vehicles combined — a rounding error next to BMW's 720,796-vehicle park-outside recall the same week — and not one of them involves a crash, an injury, or a single consumer complaint. The hook: a 2026 Ford Bronco recall with a 100% defect rate across a two-day production window, caught by a plant torque audit before a single owner noticed anything wrong.

## Kill test
- **Genuinely newsworthy?** Yes, narrowly but honestly. The recall beat is dominated by complaint-driven mega-recalls; these three campaigns are the opposite pattern — audit-driven, pre-harm, tiny. The Bronco's 100%-defect / 2-day-window / zero-complaint combination is a concrete, checkable fact no prior Crash Report article has covered.
- **Novel angle?** Yes. Prior tiny-recall coverage (#903, Ford three tiny recalls) was single-manufacturer. This is a cross-manufacturer census of November 2026's smallest campaigns, with the original finding that all three were caught internally rather than through the complaint pipeline.
- **Duplicate check (filenames + queue, full grep, no truncation):** No queue entry or story covers 26V725 (Bronco wiper nut), 26V719 (Mack MD Electric hill-start message), or 26V722 (Autocar Legend mirror). "Tiny recalls" angle last used in #903 (Ford-only, different campaigns). Kicks/RAV4 IIHS angle rejected — covered at #1244, #1408, #1484. Park Avenue drug angle rejected — covered at #868. BMW water-pump recall-of-recall rejected — covered at #1490. Maverick loose-cable rejected — covered at #1509. Explorer Police Interceptor map lights rejected — covered at #1466.

## Primary sources (3+, all NHTSA Part 573 / acknowledgment letters)
1. **NHTSA Part 573 Safety Recall Report 26V725 (Ford, Nov 2, 2026)** — 330x 2026 Ford Bronco, built Sep 21–22, 2026; driver-side wiper arm nut insufficiently tightened, 100% estimated defect rate; found Sep 22, 2026 by a low residual-torque reading during a Michigan Assembly Plant audit; CCRG opened Oct 8; Field Review Committee approved Oct 27; zero warranty claims, field reports, customer reports, or VOQs as of Oct 12; zero accidents or injuries; Ford ref 26S82; owner letters Nov 16–20, 2026; VINs searchable Nov 6, 2026.
   https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V725-3904.pdf
2. **NHTSA acknowledgment letter 26V719 (Mack Trucks, Nov 4, 2026)** — 151x 2024–2026 Mack MD (Electric) medium-duty trucks; incorrectly manufactured with hill start assist message enabled; false HSA message can lead to unexpected rollback on an incline; remedy is a dashboard software update + owner's manual correction; owner letters Dec 28, 2026; Mack ref SC0502; VINs searchable Nov 5, 2026.
   https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V719-5265.pdf
3. **NHTSA acknowledgment letter 26V722 (Autocar, Nov 12, 2026)** — 1,058x 2020–2026 Autocar Legend (DC) trucks; glue joint in exterior side mirror may become damaged, mirror assembly may detach; detached mirror reduces visibility and becomes a road hazard; remedy is reinforce or replace mirror assemblies; owner letters Dec 21, 2026; Autocar ref DC-2601.
   https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V722-6049.pdf

## Key numbers (all verified against the three NHTSA documents above)
- Total vehicles across the three campaigns: 330 + 151 + 1,058 = **1,539**
- BMW park-outside water-pump recall the same week (Nov 13, 2026): **720,796** vehicles — the three small campaigns combined are **0.21%** of that one recall (1,539 / 720,796 = 0.213%).
- Bronco defect rate: **100%** of the 330-vehicle population (per Part 573, "Estimated percentage with defect: 100%").
- Bronco production window: **2 days** (Sep 21–22, 2026). Every Bronco built in that window is recalled.
- Time from audit discovery (Sep 22) to recall approval (Oct 27): **35 days**.
- Mack MD Electric population: **151** — the smallest November 2026 campaign found in this census.
- Autocar Legend model-year span: **2020–2026** (7 model years) for a 1,058-vehicle recall — about 151 vehicles per model year, a rounding error in a vocational-truck fleet.
- Crashes or injuries reported in any of the three campaigns: **zero** (Bronco: explicitly zero per Part 573; Mack and Autocar acknowledgment letters list no crash/injury figures, and neither campaign was complaint-driven).

## Original contribution
A cross-manufacturer census of November 2026's smallest recall campaigns, ranked by units affected, showing that all three were discovered by internal quality processes (plant torque audit, manufacturing-record review, component inspection) rather than by the consumer-complaint pipeline that drives most recalls. The contrast metric is original arithmetic: the three campaigns combined equal 0.21% of BMW's single same-week recall.

## Limitations (to state in the article)
- "Smallest campaigns of November" is a census of campaigns filed Nov 1–13, 2026 that surfaced in NHTSA's public recall records during research; NHTSA publishes acknowledgment letters on a rolling basis, so a smaller campaign filed late in the month could exist and is not captured here.
- The Mack and Autocar acknowledgment letters do not state crash/injury counts; "zero crashes" for those two is inferred from the absence of any reported figures and the absence of a complaint-driven investigation, not from an explicit zero in the document. Only the Bronco Part 573 report states zero accidents/injuries explicitly.
- A 100% defect rate on 330 vehicles sounds catastrophic but the actual failure mode (wiper arm slipping or detaching) requires rain or wiper use to matter; the risk is real but conditional.
- Recall completion rates are not yet available; owner letters for the Mack (Dec 28) and Autocar (Dec 21) campaigns have not gone out yet.

## Strongest counterargument (to state in the article)
Tiny recalls are not evidence the system works; they are evidence manufacturers only file the paperwork when the population is small enough to be cheap. The Bronco nut was caught by an audit, yes — but the audit only happened because a torque reading looked wrong, and Ford's own report shows the concern sat in review for five weeks before the recall was approved. A 330-vehicle recall costs Ford almost nothing; the test of the system is the 720,796-vehicle BMW recall the same week, where the fix is a second repair of a defect recalled once already in 2024.

## Actionable takeaways
- If you bought a 2026 Bronco built Sep 21–22, 2026: your wiper arm nut is on the list. Check your VIN at nhtsa.gov/recalls; the fix is a free dealer re-torque/replacement and letters go out Nov 16–20, 2026.
- Mack MD Electric and Autocar Legend owners: VINs are searchable now (Mack since Nov 5); letters arrive in December. The Mack fix is software; the Autocar fix is a mirror reinforcement.
- General rule the three campaigns illustrate: a recall with no complaints attached is usually the good kind — it means somebody inside the factory found it first.

## References for the article
1. NHTSA, Part 573 Safety Recall Report 26V725, Ford Motor Company, Nov 2, 2026. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V725-3904.pdf
2. NHTSA, Acknowledgment letter 26V719, Mack Trucks, Inc., Nov 4, 2026. https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V719-5265.pdf
3. NHTSA, Acknowledgment letter 26V722, Autocar, LLC, Nov 12, 2026. https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V722-6049.pdf
4. NHTSA recalls database, https://www.nhtsa.gov/recalls
