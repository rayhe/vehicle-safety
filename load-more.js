/* load-more.js — paginate the Findings story grid (49+ stories) */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var grid = document.querySelector('.story-grid');
    if (!grid) return;

    var INITIAL = 12;   // show first 12 cards
    var PER_CLICK = 6;  // reveal 6 more per click

    var cards = Array.prototype.slice.call(grid.querySelectorAll('.story-card'));
    var total = cards.length;
    if (total <= INITIAL) return; // not enough to paginate

    var shown = INITIAL;

    // Build "Load More" button
    var wrap = document.createElement('div');
    wrap.className = 'load-more-wrap';
    var btn = document.createElement('button');
    btn.className = 'load-more-btn';
    var countBadge = document.createElement('span');
    countBadge.className = 'load-more-count';
    wrap.appendChild(btn);
    grid.parentNode.insertBefore(wrap, grid.nextSibling);

    function updateBtn() {
      var remaining = total - shown;
      if (remaining <= 0) {
        wrap.style.display = 'none';
        return;
      }
      wrap.style.display = 'flex';
      btn.innerHTML = 'Load More Stories <span class="load-more-count">' + remaining + ' remaining</span>';
    }

    function applyPagination() {
      for (var i = 0; i < cards.length; i++) {
        if (i < shown) {
          cards[i].removeAttribute('data-paginated');
        } else {
          cards[i].setAttribute('data-paginated', 'hidden');
        }
      }
      updateBtn();
    }

    // Initial hide
    applyPagination();

    btn.addEventListener('click', function () {
      shown = Math.min(shown + PER_CLICK, total);
      applyPagination();

      // Scroll to reveal new cards smoothly
      if (shown < total) {
        var firstNew = cards[shown - PER_CLICK];
        if (firstNew) {
          firstNew.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });

    // Expose API for search/filter integration
    // When search or filter is active, show all matching cards (disable pagination)
    // When cleared, re-enable pagination
    window._loadMoreReset = function () {
      shown = INITIAL;
      applyPagination();
    };

    window._loadMoreDisable = function () {
      // Remove pagination markers so search/filter can control visibility
      for (var i = 0; i < cards.length; i++) {
        cards[i].removeAttribute('data-paginated');
      }
      wrap.style.display = 'none';
    };

    window._loadMoreEnable = function () {
      shown = INITIAL;
      applyPagination();
    };
  });
})();
