# Research: Paccar Bunk Restraints Glued, Not Sewn (NHTSA 26V674 / 26PACH)

**Article #1361** | Journalist: Vin Wreckage | Kicker: Existential Dread | Ship: 2028-04-04

## The recall (primary facts)

- **NHTSA campaign:** 26V674000; **Paccar internal:** 26PACH
- **Filed:** October 14, 2026 (Transport Canada parallel 2026496, also published 2026-10-14)
- **Population:** 310 model-year 2027 trucks, built July-August 2026
  - Peterbilt: 567 (50), 579 (34), 589 (101)
  - Kenworth: T880 (81); T680, W900, W990 (remaining ~44)
- **Defect:** the belt restraint webbing for the sleeper bunk was glued in place but never sewn during manufacturing. Glue alone cannot hold the webbing in a crash; the restraint may fail to hold the occupant.
- **Paccar's own estimate:** only 0.6% of the 310 actually have the defect (about 2 trucks)
- **Remedy:** dealers inspect and replace bunk restraints as necessary, free of charge
- **Letters:** owner notifications mailed December 13, 2026
- **Paccar interim guidance (Transport Canada):** do not use the bunk restraints until the repair is completed

## Why this is a story

Team trucking means one person drives while the other sleeps in the bunk — at highway speed, in a moving vehicle, unrestrained except by a device that exists because 49 CFR 393.76 requires sleeper berths to have occupant restraints. The whole regulatory apparatus assumes the bunk has a working restraint. Paccar's supplier glued the webbing and skipped the stitching — the single cheapest possible fastener on the single cheapest possible step.

The trucks were built July-August 2026 and recalled October 14, 2026. They were barely out of the factory. This is not wear, corrosion, or software drift: it is a manufacturing step that simply did not happen.

Context pattern worth one line: this is Paccar's latest in a 2026 recall streak (Cummins L9 fuel hoses, 26V700; oil-contaminated power distribution centers, 26V485). The common thread is supplier QA escaping to the road.

## Novel contribution

1. Per-model concentration math: Peterbilt 589 alone accounts for 101 of 310 (32.6%); top two models (589 + T880) account for 182 of 310 (58.7%) — the defect population is concentrated in two models, both the largest sleepers in their lineups.
2. The counterintuitive regulatory gap: federal law mandates the restraint's existence (49 CFR 393.76) but the manufacturing verification apparently never confirmed the webbing was actually sewn.
3. First-pass timeline math: at most ~2 months between build and recall filing — the fastest recall turnaround in the Paccar 2026 recall set.

## Limitations (must appear in article)

- Paccar estimates only ~0.6% of the recalled population (about 2 trucks) actually has the defect. The 310 figure is the inspection population, not the defective population.
- No crashes, injuries, or field reports have been reported in connection with this defect (none appear in the filings as covered).
- Team-driving in the bunk while moving is legal and common, but bunk occupancy at the moment of a crash is the specific exposure window; the article should not imply all sleeper-cab drivers are at equal risk.
- The per-model counts (101/81/50/34) come from truckdrivernews.com's reading of the filing; treated as reported values.

## Strongest counterargument

"Two trucks. Paccar estimates 0.6% of 310 are actually defective — call it two trucks. This is the safest possible recall: huge inspection net, tiny real exposure, zero reported injuries, and the company told owners to just not use the restraints in the meantime. The Crash Report has covered six-car recalls, so this one clears the bar — but the honest scale is two cabs and a glue gun."

Response: the recall's importance is not the body count, it is the failure mode. A restraint that was glued but not sewn passed whatever end-of-line verification existed. The federal standard assumes stitching; the factory delivered adhesive. If the QA step can't catch a missing stitch on a safety belt, the question is what else it isn't catching — on trucks built in the same two months.

## Sources (primary)

1. NHTSA Part 573 filing for campaign 26V674000, via OverDrive Online (Oct 28, 2026) — recall population, defect description, Dec 13 letter date, Kenworth/Peterbilt contact numbers. https://www.overdriveonline.com/regulations/article/16050316/fmcsas-complaint-system-renamed-recall-hits-kws-petes-volvos
2. truckdrivernews.com (Oct 27, 2026) — per-model counts (589: 101, T880: 81, 567: 50, 579: 34), July-Aug 2026 build window, 0.6% defect estimate, filed Oct 14, 2026, 49 CFR 393.76 reference, "glued but not sewn" detail. https://truckdrivernews.com/paccar-now-recalls-310-trucks-over-faulty-bunk-restraints/
3. Fleet Maintenance (Oct 27, 2026) — confirms 26PACH, 310 vehicles, inspect-and-replace remedy, free of charge. https://www.fleetmaintenance.com/equipment/news/55414486/nhtsa-recall-roundup-covers-altec-autocar-ford-great-dane-and-volvo-trucks
4. Transport Canada recall 2026496 (published 2026-10-14) — parallel filing; Paccar advises not to use bunk restraints until repaired. https://recalls-rappels.canada.ca/en/alert-recall/transport-canada-recall-2026496-paccar
5. 49 CFR 393.76 (sleeper berth requirements) — cited via truckdrivernews.

## Duplicate check (2026-11-02)

- Grep of full queue: no hits for "bunk", "26v674", "26pach", "kenworth bunk", "sleeper restraint".
- Adjacent truck recalls covered (Paccar Cummins L9 26V700 #1337-era; Mack/Volvo tanker software 26V619/26V620 #1079/#1098) are different defects — no overlap.
- Kill test: PASS. Fresh (filed Oct 14, 2026), verifiable (Part 573 + Transport Canada), novel angle (a seatbelt for a bed, glued not sewn), no prior coverage.
