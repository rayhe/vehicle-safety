#!/bin/bash
# Pre-push validation for Vehicle Safety (Crash Report) site
# Run before every push to catch missing images, meta tags, broken links, etc.

set -euo pipefail
cd "$(dirname "$0")/.."

ERRORS=0
WARNINGS=0

echo "🔍 Validating Vehicle Safety site..."
echo ""

# 1. Every story must have a hero <img> tag
echo "=== Hero Images in Stories ==="
for f in stories/*.html; do
    name=$(basename "$f")
    if ! grep -q '<img' "$f"; then
        echo "  ❌ MISSING hero image: $name"
        ERRORS=$((ERRORS + 1))
    fi
done
echo ""

# 2. Every story must have og:image meta tag
echo "=== og:image Meta Tags ==="
for f in stories/*.html; do
    name=$(basename "$f")
    if ! grep -q 'og:image' "$f"; then
        echo "  ❌ MISSING og:image: $name"
        ERRORS=$((ERRORS + 1))
    fi
done
echo ""

# 3. Every story must have twitter:card meta tag
echo "=== twitter:card Meta Tags ==="
for f in stories/*.html; do
    name=$(basename "$f")
    if ! grep -q 'twitter:card' "$f"; then
        echo "  ❌ MISSING twitter:card: $name"
        ERRORS=$((ERRORS + 1))
    fi
done
echo ""

# 4. Index cards must not have gradient placeholders
echo "=== Index Card Placeholders ==="
CARD_GRADIENTS=$(python3 -c "
import re
with open('index.html') as f:
    content = f.read()
cards = re.findall(r'<a [^>]*class=\"story-card\".*?</a>', content, re.DOTALL)
count = sum(1 for c in cards if 'background:linear-gradient' in c or 'background: linear-gradient' in c)
print(count)
" 2>/dev/null || echo "0")
if [ "$CARD_GRADIENTS" -gt 0 ]; then
    echo "  ❌ $CARD_GRADIENTS index cards still using gradient placeholders"
    ERRORS=$((ERRORS + CARD_GRADIENTS))
else
    echo "  ✅ All index cards have real images"
fi
echo ""

# 5. Every image referenced must exist on disk
echo "=== Image File References ==="
MISSING_FILES=0
grep -oP 'src="images/[^"]+' index.html 2>/dev/null | sed 's/src="//' | sort -u | while read -r img; do
    if [ ! -f "$img" ]; then
        echo "  ❌ MISSING file: $img"
        echo "1" >> /tmp/vs_validate_errors
    fi
done
for f in stories/*.html; do
    grep -oP 'src="[^"]*images/[^"]+' "$f" 2>/dev/null | sed 's/src="//' | sed 's|../||' | while read -r img; do
        if [ ! -f "$img" ]; then
            echo "  ❌ MISSING file in $(basename "$f"): $img"
            echo "1" >> /tmp/vs_validate_errors
        fi
    done
done
if [ -f /tmp/vs_validate_errors ]; then
    count=$(wc -l < /tmp/vs_validate_errors)
    ERRORS=$((ERRORS + count))
    rm /tmp/vs_validate_errors
else
    echo "  ✅ All referenced images exist"
fi
echo ""

# 6. Article count consistency
echo "=== Story Count ==="
FILE_COUNT=$(ls stories/*.html 2>/dev/null | wc -l)
INDEX_CARDS=$(python3 -c "
import re
with open('index.html') as f:
    content = f.read()
cards = re.findall(r'class=\"story-card\"', content)
print(len(cards))
" 2>/dev/null || echo "0")

echo "  Files: $FILE_COUNT | Index cards: $INDEX_CARDS"
if [ "$FILE_COUNT" -ne "$INDEX_CARDS" ]; then
    echo "  ⚠️  Story file count ($FILE_COUNT) != index card count ($INDEX_CARDS)"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

# 7. Sitemap check
echo "=== Sitemap ==="
if [ -f sitemap.xml ]; then
    SITEMAP_COUNT=$(grep -c '<loc>' sitemap.xml || true)
    echo "  Sitemap URLs: $SITEMAP_COUNT"
else
    echo "  ❌ sitemap.xml not found"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Summary
echo "================================"
if [ "$ERRORS" -gt 0 ]; then
    echo "❌ FAILED: $ERRORS errors, $WARNINGS warnings"
    exit 1
elif [ "$WARNINGS" -gt 0 ]; then
    echo "⚠️  PASSED with $WARNINGS warnings"
    exit 0
else
    echo "✅ ALL CHECKS PASSED"
    exit 0
fi
