/* story-search.js — real-time search/filter for the Findings story grid */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var grid = document.querySelector('.story-grid');
    if (!grid) return;

    // Build search bar UI
    var bar = document.createElement('div');
    bar.className = 'story-search-bar';
    bar.innerHTML =
      '<div class="story-search-wrap">' +
        '<span class="story-search-icon">🔍</span>' +
        '<input type="text" class="story-search-input" placeholder="Search stories — vehicle, brand, journalist…" aria-label="Search stories">' +
        '<span class="story-search-clear" title="Clear search">&times;</span>' +
      '</div>' +
      '<span class="story-search-count"></span>';

    // Insert between danger-widget and story-grid
    grid.parentNode.insertBefore(bar, grid);

    var input = bar.querySelector('.story-search-input');
    var clearBtn = bar.querySelector('.story-search-clear');
    var countEl = bar.querySelector('.story-search-count');
    var cards = Array.prototype.slice.call(grid.querySelectorAll('.story-card'));
    var total = cards.length;

    // Build searchable text index for each card
    var cardTexts = cards.map(function (card) {
      var title = (card.querySelector('.story-card-title') || card.querySelector('h3') || {}).textContent || '';
      var deck = (card.querySelector('.story-card-deck') || card.querySelector('p') || {}).textContent || '';
      var kicker = (card.querySelector('.story-card-kicker') || {}).textContent || '';
      var meta = (card.querySelector('.story-card-meta') || {}).textContent || '';
      var href = card.getAttribute('href') || '';
      return (title + ' ' + deck + ' ' + kicker + ' ' + meta + ' ' + href.replace(/[-_.\/]/g, ' ')).toLowerCase();
    });

    // No-results message
    var emptyMsg = document.createElement('div');
    emptyMsg.className = 'story-search-empty';
    emptyMsg.innerHTML = '<span class="story-search-empty-icon">🔎</span><p>No stories match your search.</p>';
    emptyMsg.style.display = 'none';
    grid.parentNode.insertBefore(emptyMsg, grid.nextSibling);

    function updateCount(visible) {
      if (!input.value.trim()) {
        countEl.textContent = total + ' stories';
        countEl.classList.remove('filtered');
      } else {
        countEl.textContent = visible + ' of ' + total;
        countEl.classList.add('filtered');
      }
    }

    function doFilter() {
      var q = input.value.trim().toLowerCase();
      clearBtn.style.opacity = q ? '1' : '0';
      clearBtn.style.pointerEvents = q ? 'auto' : 'none';

      // If story-filters.js is loaded, let it handle combined filtering
      if (typeof window._storyFilterActive === 'function') return;

      // When searching, disable pagination so all matches show
      if (q && typeof window._loadMoreDisable === 'function') {
        window._loadMoreDisable();
      } else if (!q && typeof window._loadMoreEnable === 'function') {
        window._loadMoreEnable();
      }

      var visible = 0;
      for (var i = 0; i < cards.length; i++) {
        var match = !q || cardTexts[i].indexOf(q) !== -1;
        cards[i].style.display = match ? '' : 'none';
        if (match) visible++;
      }

      emptyMsg.style.display = (q && visible === 0) ? 'flex' : 'none';
      updateCount(visible);
    }

    // Initial state
    clearBtn.style.opacity = '0';
    clearBtn.style.pointerEvents = 'none';
    updateCount(total);

    input.addEventListener('input', doFilter);

    clearBtn.addEventListener('click', function () {
      input.value = '';
      doFilter();
      // Re-trigger category filter if loaded
      if (typeof window._storyFilterApply === 'function') window._storyFilterApply();
      input.focus();
    });

    // Keyboard shortcut: "/" focuses search (only when not in another input)
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        // Only if stories tab is active
        var storiesPane = document.getElementById('tab-stories');
        if (storiesPane && storiesPane.classList.contains('active')) {
          e.preventDefault();
          input.focus();
          input.select();
        }
      }
      // Escape clears search
      if (e.key === 'Escape' && document.activeElement === input) {
        input.value = '';
        doFilter();
        if (typeof window._storyFilterApply === 'function') window._storyFilterApply();
        input.blur();
      }
    });
  });
})();
