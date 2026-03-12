/* story-sort.js — sort controls for the Findings story grid */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var grid = document.querySelector('.story-grid');
    if (!grid) return;

    var cards = Array.prototype.slice.call(grid.querySelectorAll('.story-card'));
    if (cards.length < 2) return;

    // Extract date from meta text (e.g., "Dale Impactor III • March 11, 2026 • ☕ 5 min read")
    function extractDate(card) {
      var meta = card.querySelector('.story-card-meta');
      if (!meta) return new Date(0);
      var text = meta.textContent || '';
      // Try to find a date pattern like "March 11, 2026"
      var match = text.match(/([A-Z][a-z]+)\s+(\d{1,2}),?\s+(\d{4})/);
      if (match) return new Date(match[1] + ' ' + match[2] + ', ' + match[3]);
      return new Date(0);
    }

    // Extract death count from deck text (look for patterns like "9,591 deaths" or "killed 664")
    function extractDeaths(card) {
      var deck = card.querySelector('.story-card-deck');
      if (!deck) return 0;
      var text = deck.textContent || '';
      // Match patterns: "X,XXX deaths", "killed X,XXX", "X deaths"
      var matches = text.match(/(\d[\d,]*)\s*(?:deaths|dead|killed|fatalities|people died)/gi);
      if (matches && matches.length > 0) {
        // Take the largest number found
        var max = 0;
        for (var i = 0; i < matches.length; i++) {
          var numStr = matches[i].replace(/[^\d,]/g, '').replace(/,/g, '');
          var num = parseInt(numStr, 10);
          if (num > max) max = num;
        }
        return max;
      }
      return 0;
    }

    // Cache extracted data
    var cardData = cards.map(function (card) {
      return {
        el: card,
        date: extractDate(card),
        deaths: extractDeaths(card)
      };
    });

    // Build sort bar
    var sortBar = document.createElement('div');
    sortBar.className = 'story-sort-bar';
    sortBar.innerHTML =
      '<span class="story-sort-label">Sort:</span>' +
      '<button class="story-sort-btn active" data-sort="newest">Newest</button>' +
      '<button class="story-sort-btn" data-sort="oldest">Oldest</button>' +
      '<button class="story-sort-btn" data-sort="deadliest">Deadliest</button>';

    // Insert after the filter bar (if exists) or before the grid
    var filterBar = document.querySelector('.story-filter-bar');
    if (filterBar) {
      filterBar.parentNode.insertBefore(sortBar, filterBar.nextSibling);
    } else {
      var searchBar = document.querySelector('.story-search-bar');
      if (searchBar) {
        searchBar.parentNode.insertBefore(sortBar, searchBar.nextSibling);
      } else {
        grid.parentNode.insertBefore(sortBar, grid);
      }
    }

    var activeSort = 'newest';

    function sortCards(mode) {
      activeSort = mode;

      // Update button states
      var btns = sortBar.querySelectorAll('.story-sort-btn');
      for (var i = 0; i < btns.length; i++) {
        btns[i].classList.toggle('active', btns[i].getAttribute('data-sort') === mode);
      }

      // Sort
      var sorted = cardData.slice();
      if (mode === 'newest') {
        sorted.sort(function (a, b) { return b.date - a.date; });
      } else if (mode === 'oldest') {
        sorted.sort(function (a, b) { return a.date - b.date; });
      } else if (mode === 'deadliest') {
        sorted.sort(function (a, b) { return b.deaths - a.deaths; });
      }

      // Reorder DOM
      for (var j = 0; j < sorted.length; j++) {
        grid.appendChild(sorted[j].el);
      }
    }

    // Click handlers
    sortBar.addEventListener('click', function (e) {
      var btn = e.target.closest('.story-sort-btn');
      if (!btn) return;
      var mode = btn.getAttribute('data-sort');
      if (mode) sortCards(mode);
    });
  });
})();
