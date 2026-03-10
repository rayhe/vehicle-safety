/* reading-progress.js — Scroll progress bar for story pages
   Auto-injects a thin accent-colored bar at the top of the viewport
   that fills as the reader scrolls through the article. */
(function(){
  // Only activate on story pages (must have article.story)
  var article = document.querySelector('article.story');
  if (!article) return;

  // Create the progress bar
  var bar = document.createElement('div');
  bar.className = 'reading-progress-bar';
  bar.setAttribute('role', 'progressbar');
  bar.setAttribute('aria-label', 'Reading progress');
  bar.setAttribute('aria-valuemin', '0');
  bar.setAttribute('aria-valuemax', '100');
  bar.setAttribute('aria-valuenow', '0');
  document.body.appendChild(bar);

  // Create the percentage label (visible on hover)
  var label = document.createElement('div');
  label.className = 'reading-progress-label';
  label.textContent = '0%';
  document.body.appendChild(label);

  // Inject styles
  var style = document.createElement('style');
  style.textContent = [
    '.reading-progress-bar {',
    '  position: fixed; top: 0; left: 0; height: 3px; width: 0%;',
    '  background: linear-gradient(90deg, #D32F2F, #FF5252);',
    '  z-index: 9999; transition: width 0.1s linear;',
    '  box-shadow: 0 0 6px rgba(211,47,47,0.4);',
    '}',
    'html.dark .reading-progress-bar {',
    '  background: linear-gradient(90deg, #FF5252, #FF8A80);',
    '  box-shadow: 0 0 6px rgba(255,82,82,0.4);',
    '}',
    '.reading-progress-label {',
    '  position: fixed; top: 3px; right: 12px;',
    '  font-family: Inter, system-ui, sans-serif;',
    '  font-size: 11px; font-weight: 600;',
    '  color: #D32F2F; opacity: 0;',
    '  transition: opacity 0.3s ease;',
    '  z-index: 9999; pointer-events: none;',
    '  background: rgba(255,255,255,0.85);',
    '  padding: 2px 6px; border-radius: 3px;',
    '}',
    'html.dark .reading-progress-label {',
    '  color: #FF5252;',
    '  background: rgba(18,18,18,0.85);',
    '}',
    '.reading-progress-bar:hover ~ .reading-progress-label,',
    '.reading-progress-label.visible {',
    '  opacity: 1;',
    '}',
    /* Complete state */
    '.reading-progress-bar.complete {',
    '  background: linear-gradient(90deg, #4CAF50, #66BB6A);',
    '  box-shadow: 0 0 6px rgba(76,175,80,0.4);',
    '}',
    'html.dark .reading-progress-bar.complete {',
    '  background: linear-gradient(90deg, #66BB6A, #81C784);',
    '  box-shadow: 0 0 6px rgba(102,187,106,0.4);',
    '}',
    '.reading-progress-label.complete {',
    '  color: #4CAF50;',
    '}',
    'html.dark .reading-progress-label.complete {',
    '  color: #66BB6A;',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  var hideTimer = null;
  var ticking = false;

  function update() {
    ticking = false;
    var rect = article.getBoundingClientRect();
    var articleTop = rect.top + window.pageYOffset;
    var articleHeight = rect.height;
    var viewportH = window.innerHeight;
    var scrolled = window.pageYOffset - articleTop;
    var total = articleHeight - viewportH;

    if (total <= 0) {
      bar.style.width = '100%';
      bar.setAttribute('aria-valuenow', '100');
      label.textContent = '100%';
      return;
    }

    var pct = Math.max(0, Math.min(100, (scrolled / total) * 100));
    bar.style.width = pct.toFixed(1) + '%';
    bar.setAttribute('aria-valuenow', Math.round(pct).toString());
    label.textContent = Math.round(pct) + '%';

    // Show label briefly on scroll
    label.classList.add('visible');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function(){ label.classList.remove('visible'); }, 1500);

    // Complete state
    if (pct >= 99) {
      bar.classList.add('complete');
      label.classList.add('complete');
      label.textContent = '✓ Done';
    } else {
      bar.classList.remove('complete');
      label.classList.remove('complete');
    }
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });

  // Also update on resize
  window.addEventListener('resize', function() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });

  // Initial update
  update();
})();
