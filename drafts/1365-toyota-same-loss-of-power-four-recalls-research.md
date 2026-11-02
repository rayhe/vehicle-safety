# Research — #1365: Toyota's electrified lineup keeps shipping the same failure

**Article:** "Four Recalls, One Symptom: Toyota's Newest Cars Keep Losing Power at Speed"
**Journalist:** Axle McScatter (Data Visualization Editor — statistical roundup, cross-campaign timeline)
**Date:** 2026-11-02

## The pattern (verified across NHTSA filings + press)

Three 2026-campaign recalls, four months apart, three different Toyota electrified nameplates, one failure mode: uncommanded loss of motive power, fixed the same way (dealer software reflash, zero parts replaced). A 2023 precedent makes four campaigns total.

### Campaign 1 — 26V393 (filed June 18, 2026; recall decided June 12)
- **Population:** 20,991 US vehicles — 11,495 Toyota bZ, 4,739 Lexus RZ, 4,757 Subaru Solterra, all MY2026 (shared battery-electric architecture).
- **Defect:** Battery ECU memory addressing bug — the battery monitoring IC's address space overlaps the control IC's; under specific conditions (low state of charge raises CPU workload, stretching the memory-check cycle) the monitoring chip repeatedly overwrites the control chip's address. Pure firmware, nothing mechanical. DENSO-supplied ECU.
- **Consequence:** Dashboard lights up with system-malfunction warning; steering and braking stay functional; electric drive system shuts down. Toyota's own analysis: pre-collision system and vehicle stability control could also become inoperative.
- **Discovery (the detail):** First noticed Aug–Sep 2025 during software validation of a *new plug-in hybrid model still in development* — not in a bZ, RZ, or Solterra. Toyota investigated, ran vehicle tests, decided the condition was unlikely to occur in production vehicles. Then in April 2026, routine review of remote diagnostic data from cars already on the road showed the same signature. Bench testing confirmed real-world occurrence. Recall decided June 12.
- **Field data:** As of June 11, 2026: zero US field technical reports, 1 warranty claim. A 20,991-car recall triggered by lab data and one warranty claim.
- **Remedy:** Dealer reflash of battery ECU (no OTA — technician connects a diagnostic tool). Owner notification by mid-August 2026.

### Campaign 2 — 26V570 (filed Sept 2, 2026; owner letters Oct 18–Nov 1)
- **Population:** 8,521 US 2026 Toyota C-HR EVs (+ ~1,310 Canada), built Feb 6–Jul 10, 2026, Takaoka plant. Toyota recall 26TA17. Denso-supplied components.
- **Defect:** BEV ECU software error → traction battery can overcharge when state of charge is already high + ambient cold + regenerative braking active (common on long downhill descents). Overcharge detection triggers drive-system shutdown.
- **Consequence (NHTSA):** "An unexpected loss of drive power increases the risk of a crash" — particularly at highway speeds.
- **Discovery:** Toyota uncovered the vulnerability in April 2026 during routine development testing.
- **Remedy:** Dealer software update, free. Owner letters mailed starting Oct 19, 2026 (per Karmactive check of US recall records).

### Campaign 3 — 26V659 (filed Oct 7, 2026; owner letters late Nov / early Dec)
- **Population:** 30,978 US 2026 RAV4 Plug-in Hybrids (+ ~7,846 Canada, 5,925 Australia), built Jul 22, 2025–Aug 19, 2026. Toyota recall 26TA22.
- **Defect:** Motor generator ECU (MG-ECU) may not complete motor-initialization under certain startup conditions; at higher speeds the system requests the unavailable high-speed motor-control mode and either enters fail-safe (reduced-speed front-drive limp) or shuts the whole plug-in hybrid system down while moving.
- **Discovery:** A field technical report from Japan — one car lost AWD and entered reduced-speed fail-safe. Lab + drive testing Aug/Sept 2026 confirmed total loss of motive power possible.
- **Field data:** 38 field technical reports + 58 warranty claims as of Sept 30, 2026.
- **Remedy:** Dealer software update to MG-ECU, free.

### Campaign 4 — precedent (2023)
- **23V-041** (2023): previous-generation RAV4 Prime, loss-of-motive-power defect. (Per roadethos.com synthesis; NHTSA recall database.)

## The numbers
- US vehicles affected (2026 campaigns): 20,991 + 8,521 + 30,978 = **60,490**.
- Every affected vehicle is electrified. No conventional Toyota appears in the pattern.
- Every defect is a control-unit software fault. Every remedy is a dealer reflash. No hardware part has been replaced in any of the three campaigns.
- Time span: June 18 → Oct 7, 2026 = under 4 months for three campaigns.
- Discovery-to-recall lags: 26V393 ~9–10 months from first observation (Aug/Sep 2025 → June 2026), but only ~2 months from confirmation (April → June 12). 26V570 ~5–6 months (April → Sept). 26V659 ~3+ months from first Japan field report (investigation Aug/Sept, filed Oct 7).

## Kill test
- Newsworthy? Yes — 60,490 cars from the world's reliability champion, all its newest electrified launches, all dying the same way. And owner letters for the biggest one arrive in December, two months after filing.
- Novel angle? Yes — the site covered each recall individually (#876, #900 C-HR; #1130, #1166, #1233 RAV4 PHEV) but never the pattern. The original contribution: the discovery-timeline table (found in a *different* car, dismissed for a year), the opposite-ends-of-the-meter paradox (26V393 triggers at LOW charge, 26V570 at HIGH charge), and the zero-field-reports → 21k-car recall datapoint.
- **Verdict: PROCEED.**

## Primary sources (3+ required)
1. NHTSA Defect Information Report, campaign **26V393** (RMISC-26V393-3252.pdf, static.nhtsa.gov, June 18, 2026) — 20,991 units (bZ/RZ/Solterra breakdown), memory-overlap defect, Aug 2025 PHEV-testing discovery, April 2026 remote-diagnostics confirmation, 1 warranty claim / 0 field reports, dealer reflash remedy. https://static.nhtsa.gov/odi/rcl/2026/RMISC-26V393-3252.pdf
2. NHTSA recall acknowledgment letter, campaign **26V570** (RCAK-26V570, Sept 9, 2026) — 8,521 C-HR EVs, BEV ECU overcharge → drive shutdown, NHTSA consequence statement, Toyota 26TA17. https://www.autoevolution.com/pdf/news_attachements/toyota-recalls-2026-c-hr-ev-over-bev-ecu-software-issue-275564.pdf
3. NHTSA recall acknowledgment letter, campaign **26V659** (RCAK-26V659-0794.pdf, Oct 2026) — 30,978 RAV4 PHEVs, MG-ECU initialization defect, Japan field report trigger, 38 reports + 58 warranty claims, Toyota 26TA22. https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V659-0794.pdf
4. Toyota press release, Plano TX, June 18, 2026 — bZ + Lexus RZ recall, ~16,200 US vehicles, battery ECU error → drive shutdown at higher speed, dealer software update, owner notification mid-August. https://pressroom.toyota.com/?generate_pdf=115652
5. theautowire.com, "Toyota bZ Recall: EV Power-Loss Bug Found by Accident," Sept 22, 2026 — discovery timeline (Aug–Sep 2025 in unrelated PHEV validation, dismissed, rediscovered April 2026), DENSO ECU, no OTA, 20,991 population breakdown. https://theautowire.com/2026/09/22/toyota-found-its-ev-power-loss-bug-by-accident-while-testing-a-completely-different-car/
6. roadethos.com, "Toyota Keeps Recalling Its Newest Cars for the Same Loss of Power," Oct 18, 2026 — four-campaign synthesis (June bZ/RZ, Oct 2 C-HR, Oct 7 RAV4 PHEV, 2023 RAV4 Prime 23V-041); all electrified, all control-unit faults, all dealer software updates. https://roadethos.com/news/toyota-keeps-recalling-its-newest-cars-for-the-same-loss-of-power
7. Karmactive, "Toyota C-HR EV Recall 26TA17," Nov 1, 2026 — 26V570 owner letters mailed Oct 19, 2026; trigger conditions (cold + high charge + regen braking); Canada ~1,310. https://www.karmactive.com/toyota-c-hr-ev-recall-26ta17-battery-software/

## What this article does NOT prove (limitations)
- The three 2026 campaigns have *different root causes* (memory addressing vs. overcharge protection vs. initialization). "The same failure" is shorthand for the failure MODE (uncommanded loss of motive power) and fix TYPE (software) — not shared code. Say this explicitly.
- No crashes or injuries have been publicly tied to any of the three 2026 campaigns.
- 23V-041 (2023 RAV4 Prime) is included as roadethos-cited precedent; its defect details were not independently re-verified for this piece.
- 60,490 is the US filing count; Canada/Australia/Mexico add more, and recall populations may grow with expansion.

## Strongest counterargument
This is the recall system working as designed — arguably *better* than the mechanical-recall era. Toyota found 26V393 in a lab with zero field reports and recalled 21,000 cars anyway; software defects are patchable at scale; no hardware to manufacture, no months-long parts wait. A skeptic would say: four fast software recalls with no reported injuries is what a responsible electrification program looks like. The article must present this case at full strength before returning its verdict: that a recall is still a shipped defect, and four of them in the exact same failure mode across every new EV launch is a process problem, not four separate good-luck finds.
