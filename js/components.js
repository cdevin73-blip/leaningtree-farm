// Shared nav HTML
const NAV_HTML = `
<nav>
  <a href="index.html" class="nav-brand">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 3 Q13 8 10 10 Q7 12 7 15 Q7 17 9 18 L7 22 L13 22 L13 26 Q13 27 14 27 L18 27 Q19 27 19 26 L19 22 L25 22 L23 18 Q25 17 25 15 Q25 12 22 10 Q19 8 16 3Z" fill="#7a9c7a"/>
      <path d="M16 3 Q14 9 11 12 Q9 14 9 16 L16 3Z" fill="#5c8060" opacity="0.4"/>
    </svg>
    Leaning Tree Farm of Oregon
  </a>
  <button class="nav-hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About us</a></li>
    <li><a href="forsale.html">For sale</a></li>
    <li><a href="photos.html">Photos</a></li>
    <li><a href="news.html">News &amp; stories</a></li>
    <li><a href="coopiverse.html">The Coopiverse</a></li>
    <li><a href="https://www.serenityfelting.com" target="_blank" rel="noopener" style="color:var(--amber);">Fiber shop ↗</a></li>
  </ul>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-brand">Leaning Tree Farm of Oregon</div>
  <div class="footer-sub">Gaston, Oregon · Registered Barbados Blackbelly Sheep</div>
  <div class="footer-email"><a href="mailto:leaningtreefarmoforegon@gmail.com">leaningtreefarmoforegon@gmail.com</a></div>
  <div style="margin-top:0.5rem;font-size:12px;color:var(--text-muted);">Fiber arts from the farm: <a href="https://www.serenityfelting.com" target="_blank" rel="noopener" style="color:var(--sage);">serenityfelting.com</a></div>
</footer>`;

document.addEventListener('DOMContentLoaded', function () {
  // Inject nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;

  // Mobile nav toggle
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // Active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });
});
