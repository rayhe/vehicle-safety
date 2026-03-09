// Share Buttons — auto-injects social share bar after .dateline on story pages
(function() {
  var dateline = document.querySelector('.dateline');
  if (!dateline) return;

  var title = document.title.replace(/ — The Crash Report$/, '');
  var url = window.location.href;
  var enc = encodeURIComponent;

  var bar = document.createElement('div');
  bar.className = 'share-bar';
  bar.innerHTML =
    '<span class="share-label">Share</span>' +
    '<a href="https://twitter.com/intent/tweet?text=' + enc(title) + '&url=' + enc(url) + '" target="_blank" rel="noopener" title="Share on X/Twitter">𝕏</a>' +
    '<a href="https://www.linkedin.com/sharing/share-offsite/?url=' + enc(url) + '" target="_blank" rel="noopener" title="Share on LinkedIn">in</a>' +
    '<a href="https://www.facebook.com/sharer/sharer.php?u=' + enc(url) + '" target="_blank" rel="noopener" title="Share on Facebook">f</a>' +
    '<a href="https://www.reddit.com/submit?url=' + enc(url) + '&title=' + enc(title) + '" target="_blank" rel="noopener" title="Share on Reddit">r/</a>' +
    '<button class="copy-link-btn" title="Copy link">🔗 Copy</button>';

  dateline.parentNode.insertBefore(bar, dateline.nextSibling);

  // Copy link handler
  bar.querySelector('.copy-link-btn').addEventListener('click', function() {
    var btn = this;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(function() {
        btn.textContent = '✓ Copied!';
        setTimeout(function() { btn.textContent = '🔗 Copy'; }, 2000);
      });
    } else {
      var ta = document.createElement('textarea');
      ta.value = url; ta.style.position = 'fixed'; ta.style.left = '-9999px';
      document.body.appendChild(ta); ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      btn.textContent = '✓ Copied!';
      setTimeout(function() { btn.textContent = '🔗 Copy'; }, 2000);
    }
  });
})();
