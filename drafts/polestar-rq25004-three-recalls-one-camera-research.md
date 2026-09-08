# Research — #849: Polestar RQ25004 (three recalls, one camera)

**Slug:** `polestar-rq25004-three-recalls-one-camera`
**Journalist:** Mia Crumplezone (safety engineering editor — mandated safety system implemented as software)
**Anchor event:** Sept 1, 2026 — NHTSA closed Recall Query RQ25004 on Polestar 2 rearview camera defect

## Kill test
- Newsworthy: yes. NHTSA closed a federal audit six days ago (Sept 1, 2026) that asked an unusual question: not "is there a defect?" but "did your fix actually fix it?"
- Novel angle: the recall query mechanism itself. Everyone knows recalls; almost nobody knows NHTSA has a tool for auditing whether a remedy worked. The deeper thesis: a software patch and a completed repair are not automatically the same thing, and mandated safety equipment (FMVSS 111 cameras) now lives or dies by code, not hardware.
- Not a data dump: it is a regulatory-forensics narrative with a tight timeline and a genuine systemic takeaway (software-remedy verification gap).
- No duplication: no Polestar-specific article exists in drafts/ or stories/ (camera-census pieces are different thesis — market-wide census, not remedy audit).

## Timeline (verified)
| Date | Event |
|---|---|
| May 2018 | FMVSS 111 rearview cameras mandated industry-wide (Cameron Gulbransen Kids Transportation Safety Act — named for a toddler killed in a driveway backover) |
| June 26, 2024 | Polestar Recall **24V-477**: MY 2021-2024 Polestar 2, memory allocation error in the infotainment head unit (IHU). Remedy: OTA software update — shorten camera-stream retry times, drop map rendering in driver display during backing events to free graphics memory |
| April 25, 2025 | Polestar Recall **25V-280**: MY 2021-2025 Polestar 2, synchronization fault between Parking Assist Camera (PAC) and IHU. Remedy: second OTA update — hold high-speed PAC-IHU signal instead of toggling, reset IHU video hardware on sync error instead of just logging an error |
| July 9, 2025 | NHTSA ODI opens **Recall Query RQ25004** (prompted by VOQ review; investigator Justin Smith) after 109 complaints of rearview camera failures in vehicles already remedied |
| July 18, 2025 | ODI sends Information Request RQ25004-01 (193 reports: blank, flickering, frozen images in reverse) |
| Sept 15, 2025 | Polestar files third recall **25V-615** (27,816 units, MY 2021-2025), acknowledging the second remedy failed; replaces 24V477 and 25V280 — vehicles previously repaired must be remedied again. Interim letters Nov 7, 2025; final remedy expected Q1-Q2 2026. Polestar recall number RP1069 |
| April 2026 | Third software update released |
| Sept 1, 2026 | **RQ25004 closed**: complaints fell from 275 to 3 (0.01% rate). "The Agency will continue to monitor the remedy and reserves the right to take additional action." |

## Key numbers
- 27,816 vehicles (whole US Polestar 2 fleet, MY 2021-2025)
- 275 pre-fix owner complaints → 3 post-fix
- 21 months from first recall to working fix
- 14 months of federal audit
- 3 recalls, all software, same camera hardware

## The novel thesis
1. A **recall query** is not a defect investigation — it is an audit of the remedy. NHTSA's ODI has this tool specifically for when "recall equals fix" fails.
2. The camera was never broken. Lens and sensor performed as designed through all three recalls. What failed was software deciding whether to trust the feed and display it fast enough in the ~2 seconds a driver has while reversing.
3. A backup camera is FMVSS 111 mandated equipment — same category as a brake light — delivered through code. Traditional recall replaces a part; the fix is physical and verifiable. A software recall pushes a patch; the only verification is waiting and counting complaints.
4. Scale note: 0.01% post-fix rate backs into ~30,000-vehicle population. Niche brand means a defect that is statistical noise at Ford can trigger a year-long federal audit for Polestar.

## Actionable insights (required)
- Own a 2021-2025 Polestar 2? Check your VIN at nhtsa.gov/recalls for **25V-615** (Polestar RP1069) — even if you already had the earlier camera recalls done, you need this one again.
- General rule: for ANY software-remedy recall, do not assume one update = fixed. Check for superseding recalls before assuming you are done.
- Backover risk: FMVSS 111 exists because of driveway backovers; if your camera is dark, do not reverse on a screen alone — walk the check.

## Primary sources (3+)
1. NHTSA ODI Resume, **RQ25004 opened 07/09/2025** (INOA-RQ25004-15762.pdf) — 109 complaints, population 27,816, subject "Loss of rearview camera image". https://static.nhtsa.gov/odi/inv/2025/INOA-RQ25004-15762.pdf
2. NHTSA ODI Information Request **RQ25004-01** (INIM-RQ25004-15916.pdf), July 18, 2025 — 193 reports of blank/flickering/frozen images post-25V-280 remedy. https://static.nhtsa.gov/odi/inv/2025/INIM-RQ25004-15916.pdf
3. NHTSA Recall Acknowledgement **25V615** (RCAK-25V615-7299.pdf), Sept 19, 2025 — 27,816 units, replaces 24V477 and 25V280, previously repaired vehicles must be remedied again. https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V615-7299.pdf
4. RQ25004 closure: "ODI is closing this RQ following manufacturer action in the form of Recall 25V-615" (oemdtc.com/investigation/RQ25004/ summary of closing resume)
5. The Autowire, "Polestar's Backup Camera Recall Took 3 Tries. Here's Why" (Sept 2, 2026) — closure date Sept 1, 2026; 275 → 3 complaints. https://theautowire.com/2026/09/02/polestar-camera-recall-nhtsa-query-closed/
6. Reuters, "EV maker Polestar recalls over 27,000 US vehicles due to rearview camera issue" (Sept 20, 2025). https://www.reuters.com/business/autos-transportation/ev-maker-polestar-recalls-over-27000-us-vehicles-over-rearview-camera-issue-2025-09-20/

## Voice notes (Mia Crumplezone)
- Technical but accessible; judgmental about design that treats safety systems as app features
- Open mid-thought: no throat-clearing
- Opinionated: a brake light delivered through code should still be held to brake-light standards
- Distinct from Rex (noir deadpan) — Mia gets excited about the engineering, scornful about the process failure
- Kicker options: "The Gap", "Investigation"
