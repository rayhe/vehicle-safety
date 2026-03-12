/* story-filters.js — category filter pills for the Findings story grid */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var grid = document.querySelector('.story-grid');
    if (!grid) return;

    var cards = Array.prototype.slice.call(grid.querySelectorAll('.story-card'));
    if (!cards.length) return;

    // Extract kicker from each card (handles both class names used in the codebase)
    var cardKickers = cards.map(function (card) {
      var el = card.querySelector('.story-card-kicker') || card.querySelector('.story-kicker');
      // Strip leading emoji to prevent duplicate filter pills
      return el ? el.textContent.trim().replace(/^[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE00}-\u{FEFF}\u{1F900}-\u{1F9FF}]\s*/u, '') : '';
    });

    // Count kickers for ordering
    var kickerCounts = {};
    cardKickers.forEach(function (k) {
      if (k) kickerCounts[k] = (kickerCounts[k] || 0) + 1;
    });

    // Sort categories by frequency descending
    var categories = Object.keys(kickerCounts).sort(function (a, b) {
      return kickerCounts[b] - kickerCounts[a];
    });

    if (categories.length < 2) return; // Not worth showing with <2 categories

    // Emoji map for visual flair
    var emojiMap = {
      'Investigation': '🔍',
      'The Gap': '📊',
      'Existential Dread': '💀',
      'Sobriety Report': '🍺',
      'Body Count': '💀',
      'Trend Watch': '📈',
      'By The Numbers': '🔢',
      'GM Platform Failures': '🏭'
    };

    // Build filter bar
    var bar = document.createElement('div');
    bar.className = 'story-filter-bar';

    var allBtn = document.createElement('button');
    allBtn.className = 'story-filter-pill active';
    allBtn.setAttribute('data-category', '');
    allBtn.innerHTML = 'All <span class="pill-count">' + cards.length + '</span>';
    bar.appendChild(allBtn);

    categories.forEach(function (cat) {
      var btn = document.createElement('button');
      btn.className = 'story-filter-pill';
      btn.setAttribute('data-category', cat);
      var emoji = emojiMap[cat] || '📋';
      btn.innerHTML = emoji + ' ' + cat + ' <span class="pill-count">' + kickerCounts[cat] + '</span>';
      bar.appendChild(btn);
    });

    // Insert between search bar and grid (or before grid if no search bar)
    var searchBar = document.querySelector('.story-search-bar');
    if (searchBar) {
      searchBar.parentNode.insertBefore(bar, searchBar.nextSibling);
    } else {
      grid.parentNode.insertBefore(bar, grid);
    }

    // State
    var activeCategory = '';

    // Filter function — works alongside text search
    function applyFilter(category) {
      activeCategory = category;

      // Update active pill
      var pills = bar.querySelectorAll('.story-filter-pill');
      for (var i = 0; i < pills.length; i++) {
        pills[i].classList.toggle('active', pills[i].getAttribute('data-category') === category);
      }

      // Get current search query (if search bar exists)
      var searchInput = document.querySelector('.story-search-input');
      var query = searchInput ? searchInput.value.trim().toLowerCase() : '';

      // When filtering or searching, disable pagination so all matches show
      var isFiltering = !!(category || query);
      if (isFiltering && typeof window._loadMoreDisable === 'function') {
        window._loadMoreDisable();
      } else if (!isFiltering && typeof window._loadMoreEnable === 'function') {
        window._loadMoreEnable();
      }

      // Get current search query (if search bar exists)
      var searchInput = document.querySelector('.story-search-input');
      var query = searchInput ? searchInput.value.trim().toLowerCase() : '';

      var visible = 0;
      for (var j = 0; j < cards.length; j++) {
        var matchCategory = !category || cardKickers[j] === category;

        // Also respect text search
        var matchSearch = true;
        if (query) {
          var title = (cards[j].querySelector('.story-card-title') || cards[j].querySelector('h3') || {}).textContent || '';
          var deck = (cards[j].querySelector('.story-card-deck') || cards[j].querySelector('.story-deck') || cards[j].querySelector('p') || {}).textContent || '';
          var kicker = cardKickers[j];
          var meta = (cards[j].querySelector('.story-card-meta') || cards[j].querySelector('.story-meta') || cards[j].querySelector('.story-card-date') || cards[j].querySelector('.story-date') || {}).textContent || '';
          var searchText = (title + ' ' + deck + ' ' + kicker + ' ' + meta).toLowerCase();
          matchSearch = searchText.indexOf(query) !== -1;
        }

        var show = matchCategory && matchSearch;
        cards[j].style.display = show ? '' : 'none';
        if (show) visible++;
      }

      // Update the search count if it exists
      var countEl = document.querySelector('.story-search-count');
      if (countEl) {
        if (!query && !category) {
          countEl.textContent = cards.length + ' stories';
          countEl.classList.remove('filtered');
        } else {
          countEl.textContent = visible + ' of ' + cards.length;
          countEl.classList.add('filtered');
        }
      }

      // Update empty message
      var emptyMsg = document.querySelector('.story-search-empty');
      if (emptyMsg) {
        emptyMsg.style.display = (visible === 0 && (query || category)) ? 'flex' : 'none';
      }
    }

    // Click handler on pills
    bar.addEventListener('click', function (e) {
      var pill = e.target.closest('.story-filter-pill');
      if (!pill) return;
      var cat = pill.getAttribute('data-category');
      applyFilter(cat);
    });

    // Hook into search input to reapply category filter when searching
    var searchInput = document.querySelector('.story-search-input');
    if (searchInput) {
      // Override the search's filter function to also respect our category
      searchInput.addEventListener('input', function () {
        applyFilter(activeCategory);
      });
    }

    // Expose for external use
    window._storyFilterActive = function () { return activeCategory; };
    window._storyFilterApply = function () { applyFilter(activeCategory); };
  });
})();
