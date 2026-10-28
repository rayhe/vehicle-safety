# Critic Panel — Round 0: 1303-altec-bumper-bolts-repeat-camera-missing

Article: "Altec Recalled the Same Wrong Bumper Bolts Again. And 1,053 New Trucks Shipped With No Backup Camera."
Journalist: Axle McScatter. Hero: JPEG 1920x1280, drafts/1303-altec-bumper-bolts-repeat-camera-missing.jpg.

## Hard gates (regex counts, source of truth)
- Em dashes (grep -o '—'): 0 (max 3) — PASS. Title/footer use &mdash; entities only.
- Banned phrases (pipeline list + guide list): 0 — PASS.
- "The" sentence starters: 0 of 44 sentences, 0.0% (max 15%) — PASS.
- CSS: class="story" present, ../style.css linked, zero story-detail/story-content/story-page/story.css hits — PASS.
- Body word count: 808 (in line with shipped #1302 at 911).
- Hero: real JPEG, 1920x1280, md5 prefix e83d124f, referenced with ?v=e83d124f.

## Scores
1. **General Reviewer — 8.8.** Two genuine hooks in one filing week (repeat
   defect + device never installed) plus original streak arithmetic. Structure
   follows the template: lede with bolded stat, pull stat, actionable block,
   limitations, fair counter. Deduction: the bumper half is 45 trucks, so the
   headline leans on the camera half; the repeat-defect framing carries it.
2. **Voice Reviewer — 8.8.** Axle's counting voice is distinct and cannot be
   swapped with Rex or Vin: "I ran the numbers. Then I ran them again,"
   streak arithmetic, "Wear is forgivable." Sentence lengths vary. No banned
   phrasing, no throat-clearing. Deduction: one long paragraph in the bumper
   section could breathe more, but it reads as Axle piling evidence.
3. **Ethics Reviewer — 9.0.** Limitations paragraph is explicit: the
   repeat-vs-missed-slice question is left open, no injuries claimed, FMVSS
   caveat stated so readers do not mistake a visibility gap for a federal
   violation, and no campaign numbers invented. Counterargument is stated at
   full strength, not as a straw man.
4. **Social Reviewer — 8.7.** Highly shareable premises: a truck shipped
   with no backup camera, and the same wrong bolts recalled twice. Headline
   states both without overselling. Deduction: commercial-truck audience is
   narrower than passenger-car stories, which caps virality slightly.
5. **Legal Reviewer — 8.7.** Every factual claim traces to the Fleet
   Maintenance roundup, the NHTSA 25V529 letter, or the Part 573 report, all
   cited. Opinion lines ("a checklist that never got checked") are framed as
   commentary on cited facts, not as asserted facts. No defamation exposure:
   Altec self-reported both campaigns.
6. **Rigor Reviewer — 8.9.** Arithmetic verified: 45 + 1,053 = 1,098;
   6,780 + 143 + 45 + 1,053 = 8,021; Aug 2025 to Oct 2026 is fourteen months;
   CSN sequence 3370/3374/3375/3376 matches the filings. One softening edit
   applied pre-panel: "two consecutive roundups" corrected to "two roundups
   about two weeks apart" (Oct 12 week vs Oct 26 week are not strictly
   consecutive). Deduction: the Oct 12-week dating of CSN-3374/3370 rests on
   this site's #1161 research file plus the Oct 12 roundup, not a fresh
   primary pull this run.
7. **Data Presentation Reviewer — 8.8.** Pull stat 8,021 carries its full
   breakdown in the label so the number is auditable at a glance. All five
   references are linked except #1161, which is honestly flagged as queued
   rather than linked to a URL that does not exist yet. Deduction: no table
   for the four campaigns; the label arithmetic covers it.

## VERDICT: SHIP
Mean: (8.8 + 8.8 + 9.0 + 8.7 + 8.7 + 8.9 + 8.8) / 7 = 8.81. All 7 critics
>= 8.5, all hard gates pass. Round 0, no revision required. Proceed to SHIP:
queue as #1303, ship_date 2028-02-05 (one day after latest SHIP_BLOCKED,
#1302 at 2028-02-04).
