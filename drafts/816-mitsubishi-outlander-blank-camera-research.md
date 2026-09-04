# Research: #816 — Mitsubishi's 67,146-Vehicle Camera Recall (the blank backup camera)
Journalist: Mia Crumplezone | Kicker: Investigation | Date: 2026-09-04

## Angle (1-2 sentences)
Mitsubishi recalled 67,146 Outlanders and Outlander PHEVs because a software bug in the Alliance In-Vehicle Infotainment (A-IVI) system can blank the federally mandated backup camera. The recall covers roughly 19 months of US sales, and the fix requires a dealership visit because Mitsubishi flagged this module as non-OTA — a software-defined car without the software-defined fix.

## Kill test
- Newsworthy: YES. NHTSA campaign 26V549000 received Aug 25, 2026; owner letters go out Sep 24; VINs searchable Sep 9. Fresh, in the remedy window, actionable.
- Novel: YES. The novel contributions: (1) recall-to-sales ratio — 67,146 recalled vs 42,189 Outlander+Outlander PHEV sold in all of 2025 (1.59x a full sales year), meaning the recall sweeps essentially the entire current-generation fleet; (2) the NHTSA API record explicitly flags `overTheAirUpdate: false`, so this software defect requires a physical dealer visit — contrast with Lucid's OTA camera fix; (3) the defect is in A-IVI, the Alliance's shared infotainment stack, one software module spanning two nameplates and two model years.
- Distinct from: `rearview-camera-recall-wave` (Apr 2026, Ford+Toyota 1.9M, different wave), `stellantis-camera-recall-groundhog-day` (Stellantis 7x repeat bug), `lucid-air-third-power-loss-recall` (Lucid camera OTA). This one is Mitsubishi + A-IVI + dealer-only software remedy.
- Mia-appropriate: safety-tech failure mode, software-as-safety-device, gets judgmental about the dealer-visit fix. Proceed.

## Primary sources
1. NHTSA recalls API, campaign 26V549000 (Mitsubishi, received 08/25/2026): https://api.nhtsa.gov/recalls/recallsByVehicle?make=mitsubishi&model=outlander&modelYear=2026
   - Certain 2025-2026 Outlander and 2026 Outlander PHEV. Component: BACK OVER PREVENTION:SOFTWARE.
   - Cause: improper software programming in A-IVI system may fail to display rearview camera image in reverse; fails FMVSS 111 "Rear Visibility."
   - Consequence: reduced driver view behind vehicle, increased crash risk.
   - Remedy: dealers update A-IVI software, free. `overTheAirUpdate: false`. Owner letters mailed Sep 24, 2026. MMNA SR-26-002, 1-888-648-7820. VINs searchable on NHTSA.gov Sep 9, 2026.
2. USA Today, "Mitsubishi recalls 67K vehicles. See impacted models," Sep 1-2, 2026: https://www.usatoday.com/story/cars/recalls/2026/09/01/mitsubishi-recall-outlander-rearview-camera/91561832007/
   - 67,146 vehicles potentially affected. 2025-2026 Mitsubishi Outlander, 2026 Mitsubishi Outlander PHEV. Notification letters Sep 24.
3. Mitsubishi Motors North America Q4/full-year 2025 sales (PR Newswire, Jan 2026): Outlander 35,895 + Outlander PHEV 6,294 = 42,189 US sales in 2025.
4. Mitsubishi Motors North America Q1+Q2 2026 sales: Outlander 6,780+9,503 = 16,283; PHEV 1,144+770 = 1,914; H1 2026 combined = 18,197.
5. NHTSA FARS 2014-2023 per-model data (site's fars_output.js): Mitsubishi Outlander — 184 deaths, 0.37 deaths per 100M VMT, below the SUV median. The nameplate is not a crashworthiness problem; the recall is a mandated-safety-device problem.
6. FMVSS 111 context: backup cameras mandatory on all new vehicles since May 2018 (NHTSA rule). A blank camera = a required safety device failing.

## Original computation (the novel contribution)
- Recall-to-annual-sales ratio: 67,146 recalled / 42,189 (2025 US Outlander + Outlander PHEV sales) = 1.59x. The recall covers ~59% more vehicles than Mitsubishi sold in all of 2025.
- Time-coverage estimate: at the 2025 sales pace (42,189/yr), 67,146 vehicles ≈ 19 months of sales — essentially every current-generation Outlander on US roads.
- OTA gap: NHTSA API `overTheAirUpdate: false` — the fix is a dealer visit for a software flash, in an era when Lucid and Tesla push camera/software fixes over the air.
- FARS check: Outlander 0.37/100M VMT — not a deathtrap nameplate; this is a defect story, not a lethality story.

## What this article does NOT prove (limitations, for the draft)
- No public data on how often the blank screen occurs (intermittent vs permanent), nor any crash/injury count tied to this defect. MMNA/NHTSA documents do not cite crashes.
- The sales-ratio math assumes recalled units are US-market and roughly track US sales mix; fleet includes some carryover.
- A-IVI is the Alliance's shared stack by name; no source reviewed here claims Nissan or Renault vehicles are affected by this specific bug. Do not assert cross-brand impact.

## Strongest counterargument
67,146 is a small recall by industry standards; the camera is a supplemental aid, not the primary control — mirrors still work, and the driver can turn their head. Most owners will get a free software flash and never know the difference. The panic-to-harm ratio here is low.
