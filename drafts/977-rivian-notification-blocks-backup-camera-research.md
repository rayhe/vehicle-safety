# Research: 977 Rivian backup-camera notification recall

**Slug:** 977-rivian-notification-blocks-backup-camera
**Journalist:** Mia Crumplezone (safety tech / display software angle)
**Date:** 2026-09-23

## The event
On Wednesday, September 23, 2026, Rivian recalled 98,828 U.S. vehicles because the rearview camera image could be obstructed by an on-screen notification when the vehicle is in reverse. (Reuters, Sept 23, 2026; USA Today, Sept 23, 2026.)

## Population (Rivian's Part 573 filing, via riviantrackr)
- 34,088 R1T pickups, model years 2022-2026
- 62,259 R1S SUVs, model years 2022-2027
- 2,481 R2 crossovers, model year 2027
- Total: 98,828. Rivian manufacturer recall code: FSAM-1866.
- AutoGuide frames it as "more than half of all EVs it has ever sold in America."

## The defect
Display software logic: an on-screen safety alert or notification prompt on the center infotainment display can overlap and obstruct the rearview camera feed when the vehicle is placed in reverse. Because the backup camera image can be partially hidden or overridden before the vehicle begins moving, the condition fails the visibility requirements of FMVSS No. 111, "Rear Visibility." (AutoGuide, citing NHTSA documents.) The safety report's identification note: a missing reverse image would be noticeable to the driver; selecting the camera page on the center display or the vehicle moving with non-zero speed makes the image reappear. (USA Today.)

## Casualties/complaints
Rivian says it is not aware of any accidents, injuries, or customer complaints tied to the issue. (riviantrackr, citing the filing; AutoGuide.) Zero-injury software recall.

## Remedy
Over-the-air software update, free of charge, provided the vehicle is connected to Wi-Fi or cellular. Rivian fixed it in software release 2026.23 for R1 and 2026.31 for R2, pushed before most owners will ever see a recall letter. (riviantrackr.) Owner notification letters expected mailed November 9, 2026. (USA Today.) Rivian contact: 1-888-748-4261. (USA Today.)

## Why this is novel (kill-test pass)
1. The defect is pure UI-layer: a notification covers a federally mandated safety display. The camera hardware is fine; the infotainment stack's z-order is the defect.
2. It covers the 2027 R2, a brand-new launch model, and essentially Rivian's entire cumulative U.S. fleet.
3. The fix beat the mail: OTA patch deployed before NHTSA paperwork and snail-mail letters (Nov 9) — the recall system built for service appointments meets cars that patch themselves overnight. (riviantrackr's editorial framing; usable as attributed opinion.)
4. No queue entry covers it (#877 was a Rivian turn-signal expansion; backup-camera entries cover GM/Mitsubishi/R1 hardware angles).

## Actionable takeaways (required)
- R1T/R1S/R2 owners: connect to Wi-Fi and confirm you are on software 2026.23 (R1) / 2026.31 (R2) or newer; if the reverse image ever goes missing, tap the camera page on the center display.
- Do not wait for the Nov 9 letter.
- VIN check at nhtsa.gov/recalls (recall code FSAM-1866).

## Sources (3+ primary, URLs verbatim from search)
1. Reuters, "Rivian recalls nearly 99,000 vehicles over rearview camera display issue," Sept 23, 2026. https://www.reuters.com/legal/litigation/rivian-recalls-nearly-99000-vehicles-over-rearview-camera-display-issue-2026-09-23/
2. USA Today (Taylor Ardrey), "Over 98K Rivian vehicles recalled. See impacted models," Sept 23, 2026. https://www.usatoday.com/story/cars/recalls/2026/09/23/rivian-recalls-vehicles-r1t-r1s-r2-models/91901010007/
3. riviantrackr, "Rivian Recalls 98,828 R1 and R2 Over Rearview Camera Bug," Sept 23, 2026 (per-model counts, software versions, filing details). https://riviantrackr.com/news/rivian-rearview-camera-recall/
4. AutoGuide, "Rivian Recalls More Than Half Of All EVs It Has Ever Sold In America," Sept 23, 2026 (FMVSS 111 framing, fleet math). https://www.autoguide.com/auto/manufacturers/rivian/rivian-recalls-more-than-half-of-all-evs-it-has-ever-sold-in-america-44639062
5. NHTSA recalls database (parent page, known-good URL). https://www.nhtsa.gov/recalls
6. FMVSS No. 111 "Rear Visibility" — via NHTSA standards page. https://www.nhtsa.gov/laws-regulations/federal-motor-vehicle-safety-standards
