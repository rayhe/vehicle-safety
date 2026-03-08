#!/bin/bash
# generate_story.sh — Generate a new Crash Report article using Claude Code CLI
# Usage: ./generate_story.sh
# Requires: claude CLI installed and authenticated

set -e
cd "$(dirname "$0")"

DATE=$(date +"%B %-d, %Y")
EXISTING=$(ls stories/*.html 2>/dev/null | xargs -I{} basename {} .html | tr '\n' ', ')

claude -p "You are writing for The Crash Report (vehicle-safety.org).

Read these files:
1. STORY_GUIDE.md — voice, style, template, kicker categories
2. fars_output.js — the FARS data arrays (FARS_BY_MODEL, FARS_TOXICOLOGY, FARS_MODEL_YEAR)

Existing stories (do NOT repeat these angles): ${EXISTING}

Write ONE new article about an angle not yet covered. Use today's date: ${DATE}
Byline: Claude Brokenik

You must output EXACTLY two blocks:

BLOCK 1 — The full story HTML file (following the template in STORY_GUIDE.md exactly).
Write it between markers:
---STORY_HTML_START---
(html here)
---STORY_HTML_END---

BLOCK 2 — The teaser card HTML to insert into index.html.
Write it between markers:
---TEASER_HTML_START---
(teaser card html here)
---TEASER_HTML_END---

BLOCK 3 — The filename slug (no extension).
Write it between markers:
---SLUG_START---
(slug here)
---SLUG_END---

Every number in the article must come directly from the data arrays. Do not fabricate statistics."

echo ""
echo "Done. Review the output above, then:"
echo "  1. Save the story HTML to stories/SLUG.html"
echo "  2. Add the teaser card to index.html (before the story-disclaimer paragraph)"
echo "  3. git add && git commit && git push (auto-deploys)"
