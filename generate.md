# generate.md — The Crash Report Content Generation

_How an autonomous AI agent produces, evaluates, and improves articles on The Crash Report (vehicle-safety.org)._

## Overview

The Crash Report runs a single content-generation cron on a 2-hour interval. Each cycle either drafts a new article, revises an in-progress draft, or performs a site improvement. The site focuses on vehicle safety data, FARS crash statistics, IIHS ratings, and NHTSA recalls. No human intervention between cycles.

## Cron Definition

### `crashreport-improve` — Article Drafting & Revision

**Schedule:** Every 2 hours (stagger offset: :00)
**Cron file:** `cron.d/hourly/crashreport-improve__interval@2h.md`
**Execution:** Isolated (no main session context)

**What it does:**
- Checks `drafts/status.json` for in-progress work
- If no draft exists: researches a new vehicle safety angle, writes a full draft to `drafts/current.html`
- If a draft exists: reads it, scores 1-10 on five dimensions, writes genuinely adversarial criticism, revises, updates status
- Every 3rd article day: does a site improvement instead
- Publishes only when: revisions ≥ 3 AND honest score ≥ 8/10

**Quality gates:**
- Self-critique gate: Propose → Challenge ("Is this genuinely surprising after 70+ articles, or just another data dump?") → Proceed, modify, or skip
- Scoring dimensions: Surprising angle? Real data with sources? Distinct journalist voice? Would a reader share this? Anti-AI voice clean?
- Must read `STORY_GUIDE.md` for journalist roster, voice rules, article template
- 6 journalist personas with distinct voices — if you can swap bylines, rewrite

**Anti-AI voice rules (site-specific):**
- Banned: "Here's the thing:" / "The kicker:" / "The uncomfortable truth:" / "Let's be clear" / "Make no mistake" / "And it's not even close" / "The [industry] is at an inflection point" / "X isn't about Y. It's about Z." / Starting with market size projections / "For comparison," starting every contrast / Uniform paragraph lengths
- Required: Inline attribution with specific names/dates/publications, `<section class="sources">` at article bottom with hyperlinked references
- Preferred data sources: FARS, IIHS ratings, NHTSA recalls

**File structure:**
```
vehicle-safety/
├── drafts/
│   ├── current.html          # Active draft
│   └── status.json           # Stage, revision count, criticism log
├── stories/                   # Published articles
├── STORY_GUIDE.md            # Journalist roster, voice rules, template
├── index.html                # Homepage (featured + grid)
├── sitemap.xml               # Sitemap
└── feed.xml                  # RSS feed (if present)
```

**The full cron prompt:**

```markdown
Improve The Crash Report editorial site at ~/workspace/vehicle-safety/

## Setup
git config, pull origin main

## Context — Read these first
- STORY_GUIDE.md — journalist roster, voice rules, article template
- Existing stories/ directory for article format reference
- Data source: FARS via embedded JS data

## Workflow: One Article Per Day, Polished Over Multiple Cycles

Check drafts/status.json in the repo root.

### If no draft exists (or draft was published today already):
- Every 3rd article day: Do a Site Improvement instead (track in status.json)
- Research a new angle, write a full draft, save to drafts/current.html
- Write drafts/status.json
- Do NOT publish yet. Just draft it.

### If a draft exists and stage is "draft" or "revising":
1. Read drafts/current.html and drafts/status.json
2. Evaluate harshly — score 1-10
3. Write criticism — be genuinely adversarial
4. Revise incorporating criticism
5. Update status.json
6. Publish decision: If revisions >= 3 AND honestly 8+/10:
   - Copy to stories/SLUG.html, update index.html, RSS, sitemap
   - **BEFORE pushing:** Verify images/{slug}.jpg exists. If missing, generate via imagine skill (landscape orientation, no text overlay). Do NOT push without a hero image.
   - Commit and push to main

## Self-Critique Gate
1. Propose your angle in 1-2 sentences
2. Challenge it — is this genuinely surprising after 70+ articles, or just another data dump?
3. Verdict: Proceed, modify, or skip to site improvement

## Anti-AI Voice Rules
### Banned Patterns
- "Here's the thing:" / "Here's where it gets interesting"
- "The kicker:" / "The uncomfortable truth:" / "The bottom line:"
- "Let's be clear" / "Make no mistake"
- "And it's not even close"
- "The [industry] is at an inflection point"
- "X isn't about Y. It's about Z."
- Starting with market size projections
- "For comparison," starting every contrast
- Uniform paragraph lengths

### Voice Differentiation
6 journalists with distinct voices — read STORY_GUIDE.md. If you can swap bylines, rewrite.

### Source Citations
- Inline attribution with specific names/dates/publications
- <section class="sources"> at article bottom with hyperlinked references
- FARS data, IIHS ratings, NHTSA recalls preferred
- Never fabricate citations

## Rules
- Push to main branch only when publishing
- Dates must be today's actual date
- Articles newest-first in index.html story grid
```

---

## How the Quality System Evolves

The quality system improves through:

1. **Iterative criticism.** Each article goes through 3+ adversarial revision cycles. The self-critique gate ("is this genuinely surprising after 70+ articles?") specifically fights against repetitive data dumps.

2. **Voice enforcement.** 6 distinct journalist personas prevent voice collapse. The critique cycle catches cross-contamination between voices.

3. **Data source discipline.** FARS, IIHS, and NHTSA data requirements ensure every claim is grounded in verifiable government sources.

What does NOT self-improve (yet): the cron prompt is static. The scoring threshold (8/10) hasn't been raised. The banned pattern list grows but isn't pruned.

---

## Current Stats (as of 2026-03-13)

- **74 articles** published
- **6 journalist personas** with distinct voices and beats
- **Article publish threshold:** 8/10 after 3+ revision cycles
- **Primary data source:** FARS (Fatality Analysis Reporting System)
- **Deployed via:** Cloudflare Pages (vehicle-safety.org)
