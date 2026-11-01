# Research: Jeep's Battery Fires Survived Two Recalls. The Third One Catches 320,065.

## Angle
Three waves of recalls for the same fire defect in Jeep's plug-in hybrids, and the middle wave's software remedy was defeated by a hardware defect it could not detect. Chrysler's own Part 573 chronology admits the previous fix was "ineffective in detecting certain abnormalities" — the abnormality being physical separator damage inside battery cells, which no software update can see. Nine of the 19 known fires happened in vehicles that had already received the second recall's fix.

## Self-Critique Gate
**Proposed angle:** The 25V741 recall (Oct 2025, 320,065 vehicles) is the third recall for Jeep 4xe battery fires (23V787 in Nov 2023, 24V-720 in Sep 2024). The novel finding: the second recall's remedy was pure software monitoring, and Chrysler's filing admits it could not detect the actual hardware defect. Nine fires in already-remedied vehicles is the receipt. The pipeline covered the Wrangler steering-pump fire recall (#981, #1055) but never this battery chronology.
**Challenge:** Is this genuinely surprising after 350+ articles, or just another recall story? PROCEED — the fix-defeated-by-hardware-it-couldn't-see pattern, with three Part 573 filings documenting the failure cascade, is a genuine structural finding, not a press-release rewrite. The actionable hook is strong: 320,065 owners told to park outside and NOT charge their plug-in hybrids, which defeats the entire point of owning one.
**Verdict:** Proceed.

## Primary Sources

### Source 1: NHTSA recall 25V741000 (verified live via NHTSA API, ReportReceivedDate 30/10/2025)
- 320,065 vehicles: 2020-2025 Jeep Wrangler 4xe + 2022-2026 Jeep Grand Cherokee 4xe
- "The high voltage battery may fail internally and lead to a vehicle fire while parked or driving"
- Remedy: "Owners are advised to park outside and away from structures and not to charge their vehicles until the remedy is completed. Dealers will update the high voltage battery software, and replace the high voltage battery, as necessary, free of charge."
- Chrysler internal number 68C; customer service 800-853-1403
- Vehicles previously recalled under 24V-720 and 23V787 must get the new remedy too

### Source 2: Chrysler Part 573 chronology via pickuptrucktalk.com (NHTSA ID 25V741000 page)
- Estimated percentage with defect: 5%
- Suspect population: Wrangler PHEV production Jul 1, 2020 - Aug 25, 2025; Grand Cherokee PHEV Jul 23, 2021 - Oct 15, 2025
- FCA TSRC opened investigation July 3, 2025 after fires in vehicles OUTSIDE the 24V-720 scope AND fires in vehicles that had RECEIVED the 24V-720 remedy
- As of Oct 13, 2025: 9 fires in vehicles that received the 24V-720 remedy software

### Source 3: zzdsport.com, published 2026-10-31 (recap of Oct 2026 announcement week)
- 19 total fires now associated with these vehicles; ONE injury
- 9 of the 19 fires occurred in vehicles that had received the 24V-720 fix
- Split: 228,221 Wrangler 4xe (2020-2025), 91,844 Grand Cherokee 4xe (2022-2026)
- September 2024 recall covered ~154,000 of the same vehicles; "previous fix (a software update) did not actually fix the problem"
- Owner notification letters starting Dec 2; VINs searchable on NHTSA.gov

### Source 4: NHTSA recall 23V787000 (verified live via NHTSA API, filed 22/11/2023)
- 2021-2023 Jeep Wrangler PHEV: "The high voltage battery may fail internally and lead to a vehicle fire while parked or driving"
- Remedy then: software update + replace battery pack assembly if necessary — same playbook, wave one
- Owner letters mailed March 2024

### Source 5: NHTSA recall 24V-720 (September 2024, ~154,000 Wrangler 4xe + Grand Cherokee 4xe)
- Software-update remedy for battery fire risk
- Later determined ineffective (per Chrysler's own 25V741 filing)

## Key Numbers
| Fact | Value |
|---|---|
| 25V741 population | 320,065 |
| Wrangler 4xe (2020-2025) | 228,221 |
| Grand Cherokee 4xe (2022-2026) | 91,844 |
| Estimated defect rate (Part 573) | 5% |
| Total known fires | 19 |
| Fires AFTER receiving 24V-720 fix | 9 (47%) |
| Injuries | 1 |
| Recall waves for same defect | 3 (23V787, 24V-720, 25V741) |

## Actionable Takeaways
- Own a 2020-2025 Wrangler 4xe or 2022-2026 Grand Cherokee 4xe: check your VIN at nhtsa.gov/recalls, park OUTSIDE away from structures, do NOT charge the battery until the 68C remedy is done — even if you already got the 2024 software fix.
- If you had the 2024 fix done: it does not count. You need the new 25V741 remedy (software + possible battery replacement).
- The unfixable-by-software point: separator damage is a physical defect inside the cell. No OTA update changes that. Demand the battery test, not just the software.

## Limitations
- Fire counts (19 total, 9 post-fix) come from Chrysler's self-reported Part 573 and press recap; the actual fire count may be higher (underreporting to NHTSA is routine).
- The 5% defect estimate is Chrysler's engineering estimate, not an independently verified rate.
- NHTSA's API does not publish the full Part 573 chronology PDF; timeline details rely on secondary reporting of the filing.
- This analysis covers the battery-separator defect only, not the separate June 2026 Wrangler/Gladiator steering-pump fire recall (26V363) — different defect, different fire pathway.

## Strongest Counterargument
Recalling more vehicles for a known defect is the system working, not failing. Chrysler expanded the population from 154,000 to 320,065 precisely because its investigation found fires outside the old scope — the third recall is evidence of diligence, not negligence. And software monitoring catches some defects; 10 of the 19 fires were in unremedied vehicles, meaning the old software plausibly prevented nothing or the fires predated it.
