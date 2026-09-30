# Research: #1026 — NHTSA's 27-Month Audit of Honda's Backup-Camera Fix

**Working title:** "NHTSA Spent 27 Months Testing Honda's Repaired Backup Cameras. The Fix Held."
**Slug:** 1026-ridgeline-audit-finds-nothing
**Journalist:** Axle McScatter (methodology/numbers beat; least-used recently; this is a story about NHTSA's audit machinery)
**Date researched:** 2026-09-30

## Story summary

On Sept 22, 2026, NHTSA closed its Engineering Analysis of the rear-view camera
remedy on 2017-2019 Honda Ridgelines — without ordering a single new repair.
The probe ran 27 months (RQ opened June 26, 2024; upgraded to EA Feb 11, 2025;
closed Sept 22, 2026) and ended with NHTSA's Vehicle Research and Test Center
physically durability-testing the replacement wire harness and declaring it
sound.

The audit exists because Honda's fix shared parts with a KNOWN-bad part:
- 22V-867 (Nov 23, 2022, 117,445+ trucks / EA scope 129,092): RVC wire harness
  with insufficient corrugated-tubing protection and loose zip ties → fatigue
  break after repeated tailgate cycles. Remedy: longer tubing + tighter zip ties.
- 24V-321 (May 3, 2024, ~187,000 MY 2020-2024 Ridgelines): DIFFERENT root cause —
  harness material permeable to water/salt, freeze-thaw + bending → breakage.
  Remedy: new supplier, improved material.
- ODI opened RQ24011 specifically because the 22V-867 remedy parts and the
  24V-321 production parts used the same supplier/materials for critical
  components. At opening: 1 ODI allegation of remedy-harness failure; Honda
  aware of 14 total.

At closure: VRTC surveyed owners, inspected selected trucks, ran durability
testing. Result: zero camera failures attributable to wire-harness damage; part
"not expected to fail during a reasonable vehicle lifespan." Most complaints
received during the EA were OTHER camera/wire failure modes, not the
durability issue under investigation.

## Novel angle (kill test: PASS)

The site already covered the Polestar camera audit (#849) where NHTSA's recall
query CAUGHT a failed remedy (3 recalls, 275 complaints). This is the mirror
image: a recall audit that found NOTHING — and that's newsworthy because (a)
it shows the audit machinery (RQ → EA → VRTC testing) working as designed, and
(b) the closure has a bite: owners whose cameras failed AGAIN after the 22V-867
remedy now have no federal path — NHTSA says the repair holds, so the bill is
yours. The "who pays when the screen goes black" frame (per The Auto Wire).

Also newsworthy: the EA was opened because the FIX shared a supplier with a
part Honda had to recall separately. Audit by guilt of association.

## Primary sources (3+)

1. Reuters, Sept 22, 2026: "US closes rear-view camera probe into more than
   129,000 Honda vehicles"
   https://www.reuters.com/legal/litigation/us-closes-rear-view-camera-probe-into-more-than-129000-honda-vehicles-2026-09-22/
2. ODI investigation summary RQ24011 (oemdtc mirror of NHTSA ODI data): recall
   query opening summary — 22V-867 defect description, remedy description,
   24V-321 connection, 1 ODI allegation / 14 Honda-aware reports
   https://oemdtc.com/investigation/?number=RQ24011
3. ODI investigation summary PE24004 (oemdtc mirror): preliminary evaluation of
   2020-2023 Ridgeline camera failures, 50 complaints, closed on filing of
   24V-321
   https://oemdtc.com/investigation/?number=PE24004
4. The Auto Wire, Sept 22, 2026: "Honda Ridgeline Backup Camera: NHTSA Closes
   the File" — remedy-coverage analysis, 24V-321 still open
   https://theautowire.com/2026/09/22/honda-ridgeline-backup-camera-nhtsa-probe-closed/
5. Slashgear, Sept 2026: investigation timeline (RQ June 26, 2024; EA Feb 11,
   2025; 24V-321 filing May 2024)
   https://www.slashgear.com/2269452/us-honda-rear-view-camera-investigation-ends/
6. NHTSA recalls database (for VIN checks): https://www.nhtsa.gov/recalls

## Key data points

- 129,092 trucks in EA scope (2017-2019 Ridgeline)
- ~117,445 recalled under 22V-867 (original 2022 count; EA scope larger)
- ~187,000 MY 2020-2024 Ridgelines under 24V-321 (still open)
- 1 ODI remedy-failure allegation + 14 Honda-known reports → 27-month EA
- 0 harness-caused failures found by VRTC durability testing
- FMVSS 111 requires rear-view image display (camera safety system)

## Actionable insights (HARD GATE)

- Own a 2017-2019 Ridgeline with the 22V-867 remedy done? NHTSA says the repair
  holds. If your camera died AGAIN, it's likely a different failure mode —
  check your VIN at nhtsa.gov/recalls, but don't assume recall coverage.
- Own a 2020-2024 Ridgeline? 24V-321 is a SEPARATE recall, still open, free
  dealer repair. This closure does not touch it. Check your VIN now.
- Shopping a used 2017-2019 Ridgeline? Put it in reverse on the test drive.
  An intermittent black screen is easy to miss in ten minutes.

## Killed angles

- GMC Canyon IIHS failure → covered by #859
- Polestar RQ25004 closure → covered by #849
- GM eBoost EA26006 → covered by #979
- GM L87 EA26005 → covered by #1025
- Honda Ridgeline story NOT previously covered (grep: no "ridgeline" in queue)

## Duplicate check

grep of full queue (titles + notes): "ridgeline" → zero hits. Clear.
