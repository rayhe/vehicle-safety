# Research: #983 — Honda's Sticky-Steering Recall Has a Model-Year Hole

## Angle (1-2 sentences)
Honda recalled ~1.7M vehicles (24V-744, Oct 2024) for "sticky steering." The 2021-2022 CR-V was excluded — but NHTSA's own complaint database shows steering is the #1 complaint on both model years (111 of 330 for 2021; 135 of 256 for 2022), owners describe identical symptoms, Honda's own TSB A24-011 covers the fix, and excluded owners are paying ~$2,200 out of pocket.

## Self-critique gate
- Surprising after 190 articles? YES — prior sticky-steering coverage (lawsuit #xxx, recall reporting) treated the recall as the end of the story. Nobody ran the excluded-model-years complaint data. The TSB-vs-recall two-tier finding (same symptom, same bulletin, no free repair) is original.
- Real data with sources? YES — NHTSA complaints API (primary, pulled 2026-09-24), NHTSA Part 573 recall report RCRIT-24V744-9041 (primary), TSB A24-011 via NHTSA manufacturer communications (primary via aggregators), owner complaint texts (primary).
- Verdict: PROCEED.

## Key facts (all verified 2026-09-24)

### The recall
- NHTSA 24V-744000, announced Oct 2024. ~1.69M US vehicles: 2022-2025 Civic (sedan/hatchback/hybrid/Type R), **2023-2025 CR-V** (std/hybrid/fuel cell), 2023-2025 HR-V, 2023-2025/2024-2025 Acura Integra/Integra Type S.
- Defect: improperly produced steering gearbox worm wheel swells with heat/moisture, reducing grease film; worm gear spring preload set too high. Combined: excessive internal friction → abnormal noise, increased steering effort, "sticky" steering.
- Remedy: replace worm gear spring + redistribute/add grease. Honda estimated 1% of recalled vehicles actually defective.
- NHTSA timeline: investigation opened March 2023 (145 Civic complaints), escalated to engineering analysis Nov 2023, recall Oct 2024, investigation closed early 2025. First confirmed complaint Sept 2021. 10,000+ warranty claims since 2021.
- Class action Burgos et al. v. American Honda still active into 2026 (plaintiffs say recall fix is a band-aid).

### The hole
- 2021-2022 CR-V (5th gen) NOT in recall. Different gearbox part numbers (53640-TLB-315 non-hybrid / 53640-TPG-315 hybrid, per parts catalog citing SB 24-011).
- Honda TSB A24-011 (Sep 2024): "Steering effort complaint while driving at moderate or highway speeds, with a possible complaint of a clicking noise at slow speeds while turning" — applies to 2021-2022 CR-V. A TSB is dealer repair guidance, NOT a recall: no owner notification, no free-remedy mandate.
- Original analysis (api.nhtsa.gov, pulled 2026-09-24):
  - 2021 CR-V: 330 complaints → 111 steering (33.6%), 4 crashes, 4 injuries, 0 deaths. Recalls on file: 4, ZERO steering.
  - 2022 CR-V: 256 complaints → 135 steering (52.7%), 103 mention "stick/sticky", 1 steering crash. ZERO steering recalls.
  - problemsbyvin (Sep 2026): 134 steering complaints (2022 CR-V), 53% of all complaints for the vehicle, avg repair ~$700, 1 crash.
- Owner voices (NHTSA complaints via carproblemzoo, failure dates 2026):
  - "The dealership wants to replace the steering gear... in accordance with Honda service bulletin 24-011 charging me a cost of $2,200." (2022 CR-V, 16,500 mi, 9 mo out of warranty)
  - "Please be advised that the 2021 model year... needs to be added to NHTSA recall #24V-744... currently not included." (2021 CR-V, 07/08/2026)
  - "Despite over 130 identical steering failure complaints logged by 2022 CR-V owners on NHTSA, the 2022 model year remains excluded... I am filing this report so NHTSA can evaluate expanding campaign coverage retroactively." (2022 CR-V, 09/05/2026)
  - $3,400 rack replacement, Honda covered ~$1,100 (2022 CR-V).
  - 2020 CR-V owners report the same ("similar to NHTSA recall 24V-744 and Honda TSB 24-011") — the hole may extend further back.

### 30-model sweep context (novel method)
Pulled complaints+recalls for 30 top sellers (2021-2022 MY) via NHTSA API (60 calls). The CR-V steering gap was the sharpest model-year-boundary finding: highest complaint-share-with-zero-recall-coverage among investigated components (52.7% for 2022 MY). Full table in /tmp/complaint_gap.json.

## Strongest counterargument (full strength)
Honda can reasonably say the 5th-gen CR-V uses a different steering gearbox from different supplier lots than the recalled 6th-gen units; the Part 573 report pins the defect to specific worm-wheel production, and symptom similarity is not root-cause identity. 111 complaints against hundreds of thousands of 2021 CR-Vs sold is a small absolute rate, TSB A24-011 proves Honda published a fix procedure (the system working, not failing), and NHTSA closed its investigation satisfied in early 2025. Some "sticky" reports may be lane-keep-assist torque, which one owner admitted mistaking it for. Only a Honda/NHTSA teardown of a failed 5th-gen gearbox settles it.

## Limitations
- Complaint counts are from NHTSA's public API as of 2026-09-24; owner-reported, unverified; counts are a lower bound (API may not return every filed complaint).
- Crash/injury counts in complaints are owner-reported, not NHTSA-verified.
- TSB A24-011's 2021-2022 CR-V applicability is per third-party aggregators of NHTSA manufacturer communications; full TSB text is dealer-distributed.
- Cannot prove identical root cause across generations — stated explicitly in article.

## Actionable takeaways
1. 2021-2022 CR-V owners: check VIN at nhtsa.gov/recalls (24V-744 will NOT appear — that is the point).
2. Symptom check: notchy/sticky wheel at highway speed, clicking at low speed, wheel not returning to center. Bring TSB A24-011 number to the dealer.
3. File at nhtsa.gov if affected — owners are explicitly doing this to push a recall expansion; complaint volume is what opened the original investigation (145 Civic complaints → March 2023 probe).
4. Keep receipts: Burgos class action is active; recall expansions can trigger reimbursement.

## Sources
1. NHTSA Part 573 recall report RCRIT-24V744-9041 (static.nhtsa.gov/odi/rcl/2024/RCRIT-24V744-9041.pdf)
2. NHTSA complaints API: api.nhtsa.gov/complaints/complaintsByVehicle (pulled 2026-09-24)
3. NHTSA recalls API: api.nhtsa.gov/recalls/recallsByVehicle
4. Honda TSB A24-011 via NHTSA manufacturer communications (problemsbyvin.com/2022-honda-cr-v/steering-problems/)
5. Owner complaints via carproblemzoo.com (NHTSA ODI-sourced)
6. Autoblog: "Lawsuit Claims Honda Knew About Steering Defect for Years" (Nov 30, 2025)
7. problemsbyvin.com 2022 CR-V steering stats (Sep 2026)
