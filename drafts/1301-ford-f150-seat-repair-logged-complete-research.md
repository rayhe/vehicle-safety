# Research — #1301: Ford F-150 front seats improperly secured (26V655 / 26S74)

**Slug:** 1301-ford-f150-seat-repair-logged-complete
**Journalist:** Vin Wreckage (Existential Dread Columnist — paradoxes, counterintuitive findings; last Vin byline #1046, due in rotation; last three bylines were Rex #1297, Axle #1298, Clara #1299, Mia #1300)
**Kicker:** Investigation
**Date researched:** 2026-10-27

## Kill test
PASS. Not a parts failure story. A paperwork failure story, and the paperwork
is the safety system.

- Queue/drafts grep (2026-10-27): zero prior coverage of 26V655, 26S74,
  "F-150 seat bolts," or "front seats improperly secured." Ford F-Series
  neighbors are different defects: speedometer cluster #1223 (26V653),
  tailgate cable #1297, replacement ABS module #1294. Seat-bolt/seat-anchor
  angle is uncovered.
- Killed angles this run (all verified already queued, not re-covered):
  Cummins L9 fuel-hose vehicle recalls 26V660/26V661/26V662/26V699 (parent
  equipment recall 26E066 covered #1046); Ram 2500 ESC silent kill (covered
  #1228, expansion #1262); Land Cruiser Hybrid fuel tube (covered #1204,
  #1230, #1248); Volvo EX30 headrest (covered #1222); Hyundai 26V692/26V693
  loose nuts (covered #1291); IIHS Oct 8 commercial-vehicle ratings
  (covered #1093, #1110, #1121); IIHS Oct 24 Kicks/Q3 round (covered #1278);
  Porsche center-lock expansion (covered #1245); Thomas Built heater hose
  26V697 (covered #1293, researched 2026-10-27); Audi Q4 e-tron battery
  26V698 (covered #1268); Ford F-Series speedometer 26V653 (covered #1223);
  TRIP Sep 2026 2025-totals framing (covered #1299 and the
  forty-five-thousand-missing piece).
- Novel angle: the recall report's own root-cause chain. A worker could not
  secure a seat within the workstation cycle time, the line stopped, and a
  team leader marked the repair complete in the tracking system when the
  fix had not been done. The defect is not a bad bolt. It is a completed
  checkbox that was not true. Original contribution: the restraint-chain
  analysis (below) — the belt's buckle side bolts to the seat, so a seat
  that shifts takes its occupant's restraint geometry with it.

## Verified facts (3+ primary/primary-adjacent sources)
- **NHTSA campaign 26V655 / Ford 26S74.** NHTSA acknowledgement letter
  RCAK-26V655 (Oct 15, 2026): 2025–2027 Ford F-150, 2,276 units, component
  SEATS. "The front seats may have been improperly secured to the
  vehicle." Consequence: "An improperly secured seat may not adequately
  restrain the seat occupant, increasing the risk of injury during a
  crash." Remedy: dealers inspect and tighten, or replace the front seat
  bolts as necessary, free of charge. Owner letters expected mailed
  October 26, 2026. Report received Oct 6, 2026.
  (static.nhtsa.gov RCAK-26V655-9741.pdf)
- **Build window and VIN search:** 2025–2027 F-150s built August 25, 2025
  to September 23, 2026. VINs searchable on NHTSA.gov since October 9,
  2026. Ford customer service 1-866-436-7332. (Ford Authority Oct 17;
  CarPro weekly roundup; TopSpeed Oct 25.)
- **Root-cause chain (press accounts of Ford's Part 573 report):** a June 23
  warranty report flagged a truck with a missing front seat-to-body bolt
  and a front passenger seat bolt not fully seated. Investigators found a
  worker unable to secure the seat within the workstation cycle time;
  plant protocol stopped the line; a team leader marked the repair
  complete in the tracking system, but the fix had not been done.
  Investigators confirmed 62 VINs with improperly secured seats; the
  recall population is 2,276. (4wdtalk summary of the filing, citing the
  Detroit News.)
- **Report volume, no injuries:** Ford logged 56 warranty reports and 16
  field reports and knows of no crashes or injuries tied to the condition.
  Drivers may notice the seat moving or hear a noise from the seat base.
  (AutoPost Global, citing the NHTSA filing; Ford Authority: "not aware
  of any reports of accidents or injuries.")
- **Ford's year in context:** Ford reached 80 recalls in the US in 2026,
  more than any other automaker; the next-closest company, Stellantis,
  had 39. (AutoPost Global, Oct 2026.) 26V655 is a small recall inside a
  record year, which is the point: at this volume, the failure mode that
  matters is process, not parts.
- **Arithmetic (original):** 62 confirmed VINs out of 2,276 recalled =
  2.7% confirmed at filing. The other 97.3% are recalled on the strength
  of sharing the production window and the failed process, not on proof
  their own bolts are loose. That is how a tracking-system lie scales:
  one false checkbox, 2,276 trucks you can no longer vouch for.

## Original contribution
The restraint-chain argument. Crash safety discourse treats the seatbelt as
the restraint. It is only half of one. The buckle side of a front belt
bolts to the seat itself, and the seat bolts to the body. If the seat
shifts in a crash, the belt's geometry shifts with it: the lap belt rides
up, the shoulder belt loads the wrong anatomy, and the airbag timing
assumes an occupant who is no longer where the engineers put them. Ford's
recall language says exactly this in bureaucratic form ("may not
adequately restrain the seat occupant"). The plain-English version is
sharper: your seatbelt works. The thing it belts you to does not.

## Actionable takeaway
If you own a 2025–2027 F-150: do not wait for the letter (mailed Oct 26).
Check your VIN at nhtsa.gov/recalls now — VINs have been searchable since
Oct 9. Before the dealer visit, do the parking-lot test: with the truck
parked, grab the front seatback and shove it fore and aft, then listen
for a clunk or feel for movement at the base when you brake hard. Any
movement is not "trucks are like that." It is the symptom Ford lists.
The fix is an inspection plus retorque or replacement, free, and fast.

## Limitations
- The root-cause chain (cycle time, line stop, false completion mark)
  comes from press summaries of Ford's Part 573 filing (4wdtalk citing the
  Detroit News), not from the Part 573 PDF itself, which was not pulled
  in this run. The article attributes the chain to those accounts.
- 56 warranty + 16 field reports vs 62 confirmed VINs are different
  counts (reports vs vehicles); the article does not merge them into
  one number.
- Whether any individual recalled truck's seat would actually shift in
  a crash is unproven; the recall covers a production window sharing a
  failed process, not 2,276 proven-loose seats. The article says so.
- The restraint-geometry argument is engineering analysis, not a Ford
  or NHTSA finding; it is labeled as such in the article.

## Strongest counterargument
A 2,276-truck recall with zero crashes and zero injuries, caught by a
warranty report, is the system working: Ford found it, sized it, and
filed it before anyone got hurt. The false checkbox is embarrassing, but
the recall itself is evidence that the tracking system eventually
caught its own lie — the warranty trail led investigators back to the
line stop. Against that: the system caught it only after 62 trucks
shipped with loose seats and only because one owner complained. A
safety process that needs a customer to notice a wobbling seat is not
a process. It is a lottery with good odds.

## Sources
- NHTSA acknowledgement letter RCAK-26V655 (Oct 15, 2026):
  https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V655-9741.pdf
- Ford Authority, Oct 17, 2026 (2,276 units, build window, 26S74, no
  accidents/injuries known):
  https://fordauthority.com/2026/10/2025-2027-ford-f-150-recalled-over-improperly-secured-seats/
- TopSpeed, Oct 25, 2026 (26V-655, letters Oct 26–30, VIN search):
  https://www.topspeed.com/ford-f150-recall-loose-front-seat-bolts/
- CarPro weekly recalls roundup (26V655 summary, letters Oct 26, VINs
  searchable Oct 9):
  https://www.carpro.com/blog/weekly-recalls-ford-honda-jaguar-porsche-do-not-drive-ram-trucks-subaru-do-not-drive-toyota-fire-risk-volvo
- 4wdtalk F-150 seat recall explainer (root-cause chain, 62 VINs, Detroit
  News summary):
  https://www.4wdtalk.com/f-150-seat-recall/
- AutoPost Global (80 Ford recalls in 2026 vs Stellantis 39; 56 warranty
  + 16 field reports):
  https://autopostglobal.com/latest-scoops/photo-report/article/128626/
- NHTSA recalls database (canonical VIN lookup):
  https://www.nhtsa.gov/recalls
- IIHS vehicle ratings (context, not load-bearing):
  https://www.iihs.org/ratings

## Headline
"Ford Marked the Seat Repair Complete. The Bolt Was Still Missing."
