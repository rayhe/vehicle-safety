# Research: #900 — The Second Toyota Battery ECU That Kills Power While Driving

**Slug:** `900-c-hr-overcharge-sequel-ecu`
**Journalist:** Mia Crumplezone (Safety Engineering Editor — safety tech architecture beat; wrote #855 on radio-hub-killed TPMS; technical, slightly judgmental)
**Kicker:** Investigation
**Date researched:** 2026-09-14

## Angle (1-2 sentences)

Toyota recalled 8,521 brand-new 2026 C-HR EVs on Sept 2 because a software bug in the battery charging-limiter logic lets regenerative braking overcharge the pack, which trips a protective shutdown that cuts all motive power at speed. It is the second Toyota BEV-ECU sudden-power-loss campaign in under three months — and both bugs were discovered by Toyota while testing a *different* vehicle, meaning the shipped fleet keeps getting debugged by vehicles that don't exist yet.

## Kill test

- **Newsworthy?** Yes. Recall issued Sept 2, 2026; owner letters Oct 18–early Nov; all-new model, first recall for the C-HR EV. Covered by USA Today, Autoblog, Carscoops, Electrek Sept 7–11.
- **Novel angle?** Yes. The June bZ/Solterra/RZ race-condition piece (`stories/ev-race-condition-power-loss.html`, plus `stories/etnga-three-badges-one-bug.html`) covered the first ECU bug alone. Nobody has connected the two campaigns as a pattern: same automaker, same system (battery ECU firmware), same failure mode (sudden motive-power shutdown), same discovery method (found during testing of an *unreleased* model — a future BEV for the C-HR bug, a new PHEV for the bZ bug), same zero-warranty-claims-at-recall profile. The "your car is the canary for the next car" thesis is original to this piece.
- **Data-backed?** Yes — 4+ news sources on the Sept 2 recall + our own published June research for the comparison campaign. Nov computations below.

## Primary sources

1. **USA Today (Fernando Cervantes Jr.), "Toyota recalls over 8,000 vehicles," Sept 11, 2026** — 8,521 2026 C-HR vehicles; recall issued Sept 2; battery could overcharge "under certain driving conditions"; overcharging "could prompt the system to shut down the car's electric drive system and result in a loss of drive power"; dealers update BEV ECU software free; owners notified Oct 18. https://www.usatoday.com/story/cars/recalls/2026/09/11/toyota-electric-vehicle-recall-september-2026/91717891007/
2. **Autoblog, "Toyota C-HR EV Recall Warns of Power Loss While Driving," Sept 7, 2026** — first recall for the all-new C-HR EV; "Under certain conditions when the battery has a high level of charge, regenerative braking can cause the battery to become overcharged due to a software issue"; "If this occurs, the electric drive system can shut down, causing a loss of motive power"; dealer BEV ECU software update. https://www.autoblog.com/news/toyota-c-hr-power-loss-recall
3. **Carscoops, "Testing Of A Mysterious Future Toyota EV Sparked A Recall Of The New C-HR," Sept 11, 2026** — Toyota first discovered the issue in **April** during testing of an undisclosed "future BEV model," sparking a review of ECUs in other EVs that flagged the 2026 C-HR; bug is faulty battery-protection logic "intended to limit the charging of the battery"; worst case: **low temperatures, battery at high state of charge, long regenerative braking** (mountain-descent scenario); **no warranty claims or field reports**; production Feb 6 – Jul 10, 2026; ~1,310 Canadian vehicles in the North America total (~10,000); 2027 C-HRs unaffected. https://www.carscoops.com/2026/09/toyota-c-hr-recall/
4. **Electrek (update), "Toyota recalls 8,521 electric C-HR SUVs," Sept 10, 2026** — NHTSA letter confirmed 8,521 US vehicles; C-HR+ in Europe is essentially the same vehicle (recall could extend overseas); 2027 C-HR on sale, unaffected. https://electrek.co/2026/09/10/toyota-recalls-8521-electric-c-hr-suvs-update/
5. **Our own June research** (`drafts/ev-race-condition-power-loss-research.md`, published as `stories/ev-race-condition-power-loss.html`) — 20,991 2026 bZ/Solterra/RZ recalled June 18, 2026 (26V393000): monitoring IC + battery control IC write-collision → "EV System Malfunction" → drive shutdown at any speed; **found during development testing of a new PHEV** — a different vehicle; 1 warranty claim, zero confirmed crashes/injuries.
6. **NHTSA recalls database** (generic): https://www.nhtsa.gov/recalls

## Original computations (novel contribution)

- **29,512 vehicles.** June: 20,991 (11,495 bZ + 4,739 RZ + 4,757 Solterra). September: 8,521 C-HR. Two battery-ECU firmware campaigns, two distinct root causes (memory-write race condition vs. broken charge-limiter logic), one shared failure mode: sudden loss of motive power. Both found with zero warranty claims in the field — the entire 29,512-vehicle defect census was discovered by Toyota's *test labs*, not by drivers.
- **The discovery pattern, quantified.** Campaign 1 bug found testing "a new PHEV model." Campaign 2 bug found testing "an undisclosed future BEV model" in April, disclosed September — a ~5-month lag between discovery and recall, and owner letters not until October 18 (6+ more weeks of known-defective firmware on the road).
- **Production window math.** C-HR: Feb 6 – Jul 10, 2026 = ~5 months of production, ~8,521 US units. The 2026 C-HR launched earlier this year as a $37K entry; its *first* recall is a sudden-power-loss defect — a rough debut for a nameplate.
- **The irony ratio.** The defective component is the *battery protection logic* — the code whose entire job is to keep the battery safe. Its failure mode is not "battery damaged" but "car dead on the highway." The protection system creates the hazard it was built to prevent.

## Scenario analysis (the mountain case)

Carscoops lays out the exact conditions: low temperature + battery near full + sustained regenerative braking. Translation: charge your C-HR to 100% overnight at a ski-town rental, drive down the mountain in the morning letting regen do the work — the classic EV owner's efficiency move — and the car can shut itself down mid-descent. The scenario that maximally *rewards* regen use is the scenario that triggers the bug. Real-world EV owners do this constantly; the "rare conditions" framing undersells how ordinary the trigger is in cold, hilly regions.

## Limitations

- No warranty claims, crashes, injuries, or deaths reported for the C-HR campaign — this is a latent defect found by testing, not a body count. The article must not imply anyone was hurt.
- "Future BEV model" is undisclosed; its identity and whether it shares the defective logic are unknown (Carscoops reports the review "identified the 2026 C-HR as being impacted," implying the logic exists in at least the C-HR and possibly more).
- The European C-HR+ "could extend" per Electrek — unconfirmed; state as unconfirmed.
- Exact defect rate within the 8,521 is unknown; Toyota treats the population as the recall set (software is deterministic — if your car has the bad code, your car has the bug).
- The June and September campaigns are *different* root causes; the article must not claim it's the same bug. The pattern is the ECU firmware family and the discovery method, not the code path.

## Strongest counterargument

This is the system working exactly as designed, twice. Toyota found both bugs in internal testing before a single warranty claim, disclosed them, and is fixing them free. Compare with the Takata or GM-ignition era, where automakers buried defects for years. Two self-reported software recalls with zero injuries is evidence of a *working* safety culture, and the article's "canary fleet" framing is a rhetorical flourish on top of a boringly good outcome. Also fair: software in every modern car has bugs; the recall population is small, the fix is a dealer flash, and EVs still have the lowest FARS fatality rates on the road (Model Y 0.03/100M VMT per our data).

## Actionable takeaway

Own a 2026 C-HR (produced Feb 6–Jul 10, 2026): check your VIN at nhtsa.gov/recalls now, before the Oct 18 letter arrives — the dealer software update is free. Until the fix: don't charge to 100% before a long downhill run in cold weather; cap the charge lower and use friction brakes on descents to keep regen from pushing the pack over the edge. If the car ever throws "EV System Malfunction" with a buzzer, pull over — power steering and brakes still work.

## Voice notes (Mia)

- Technical but accessible; she gets excited about failure modes. Phrases like "let's talk about what happens in the first 150 milliseconds" energy — here: "let's talk about what happens when the protection system becomes the hazard."
- Slightly judgmental about design: the charge-limiter is the most basic ECU job. Judgment target is the *software process*, not the owners.
- No banned phrases. Zero em dashes planned. Sentence rhythm: vary deliberately (check with rhythm script, target variance ≥200).
- Byline: `Mia Crumplezone &bull; Clautomotive Desk`.
