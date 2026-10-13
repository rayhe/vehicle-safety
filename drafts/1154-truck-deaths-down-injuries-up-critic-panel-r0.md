# Critic Panel — Round 0 — #1154 "Truck Deaths Fell 2.5% in 2024. Injuries Rose 5. Somebody Needs to Explain the Math."

Article: drafts/1154-truck-deaths-down-injuries-up.html | Hero: drafts/1154-truck-deaths-down-injuries-up.jpg (JPEG 1920x1280, hash 70cbcddb)
Journalist: Rex Driverton | Kicker: Investigation | Date: 2026-10-13

## Hard Gates (regex, source of truth)
- Em dashes in body: 0 (max 3) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", + STORY_GUIDE extras): 0 hits — PASS
- "The" sentence starters (body): 3/26 = 11.5% (max 15%) — PASS
- CSS: class="story" present; 0 links to story.css; ../style.css linked — PASS
- Hero: real JPEG (FFD8), 1920x1280, ?v=70cbcddb on img + og:image, og:image absolute — PASS
- Sentence rhythm (sentence-rhythm-check.py): variance 1100.3 (>=200), short 13.6% (<=15%), long 40.9% (>=15%) — PASS
- Math spot-checks vs NHTSA DOT HS 813 816: 5,340/39,254=13.6% ✓; 161,201/153,486=+5.0% ✓; 116,475-107,666=8,809 ✓; 8,809/107,666=8.2% ✓; 153,486/5,478=28.0, 161,201/5,340=30.2, +7.7% ✓; 107,666/3,843=28.0, 116,475/3,753=31.0, +10.8% ✓; 53,603-44,540=9,063 ✓; registered trucks +8.0% ✓; fatal rate 1.63->1.58, injury rate 35->37 ✓; truck struck in rear 22.1%->22% ✓ — PASS

## 1. General Editor — 8.7/10
Kicker-headline-lede-pull-stat arc is textbook site structure. The paradox (deaths down, injuries up) is stated in the lede and paid off in the body. Paragraph 5 earns its keep: the boring mix-shift explanation is stated before the reader can raise it, and the actionable close is concrete. Deductions: the headline's "Somebody Needs to Explain the Math" mildly undercuts the article, which does explain the math — a one-word hedge ("Help" vs "Somebody") would fix it, but it reads as Rex's deadpan rather than a real gap. 514 words is 3% over the guide; not a fail.

## 2. Voice Coach — 8.8/10
Distinctly Rex: deadpan ("a polite way of saying a car drove into the back of it"), noir framing ("Filling your mirror on the residential cut-through"), paradox-hunting throughout. No AI tells, no banned phrases, rhythm passes with real variance (fragments next to 38-word builds). Could not swap this byline with Mia or Axle without rewriting. Deduction: "Then the exposure wrinkle:" is a slightly clunky transition, and the piece runs 14 words over the 500-word guide. Neither is below the bar.

## 3. Ethics Reviewer — 9.0/10
No victim-blaming; the injured are framed as "you, in the sedan," which implicates the reader without shaming anyone. Advice (following distance, don't cut off trucks) is standard defensive-driving guidance, not moralizing. The counterargument gets a full paragraph at strength. No self-congratulation. The one ethical risk — implying trucks got "more violent" — is explicitly hedged with the mix-shift reading and the CRSS caveat.

## 4. Social/Shareability — 8.7/10
Pull stat (8,809 more hurt while 90 fewer died) is the share trigger and it sits above the fold. Headline is a curiosity gap that the article actually closes — no clickbait debt. The "28.0 to 31.0 injuries per death" ratio is quotable. Deduction: no single-sentence pull quote as punchy as the pull stat; the og:description covers it adequately.

## 5. Legal Accuracy — 9.0/10
Every number traces to NHTSA DOT HS 813 816 (Table 1/2/3 spot-checked above) or the DOT 2024 annual release (39,254 / 1.19). Author-calculated ratios are labeled as such in the disclaimer. The CRSS-estimate caveat and ARF-revision caveat are both stated. No legal claims, no liability assertions, no misattributed quotes. The IIHS claim ("most big trucks rated marginal or poor") is sourced to the Free Press report on the Oct 8 ratings.

## 6. Research Rigor — 9.0/10
Original contribution: injuries-per-death ratios (28.0->30.2 overall, 28.0->31.0 for other-vehicle occupants), the medium-truck share shift (39%->44% of injury-crash trucks, +9,063), and the exposure paradox (registrations +8%, VMT flat, fatal rate down / injury rate up) — none in the queue, none in press coverage of the fact sheet. Limitations acknowledged (CRSS estimates vs FARS counts, ARF revision risk). Strongest counterargument stated at full strength (urban mix shift). Methodology shown (ratios with inputs). Verifiable links. Deduction: the ratio mixes a CRSS estimate numerator with a FARS count denominator — disclosed in the disclaimer, but a one-line flag in the body would be more honest. Not a gate fail.

## 7. Data Presentation — 8.7/10
Pull stat + label above the fold; inline superscript refs [1][2][3]; full references section with working links; every statistic either cited or labeled as author calculation. Deduction: the death/injury divergence would land harder as a small 2x2 table (2023 vs 2024 x deaths vs injuries), but the template is prose-first and the numbers are all present in text.

## VERDICT: SHIP
Mean: (8.7 + 8.8 + 9.0 + 8.7 + 9.0 + 9.0 + 8.7) / 7 = 61.9 / 7 = **8.84**. All 7 critics >= 8.5. All hard gates pass. Round 0, no revision needed.
