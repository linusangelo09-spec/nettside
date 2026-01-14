// nav-active.js
// Adds "active" class and aria-current="page" to the nav link whose href matches the current file name
(function() {
  try {
    const links = document.querySelectorAll('nav a');
    if (!links || links.length === 0) return;

    // Get just the filename portion of the current URL (e.g., "Index.html")
    const path = window.location.pathname || window.location.href;
    const currentFile = path.split('/').pop().toLowerCase();

    links.forEach(link => {
      const href = (link.getAttribute('href') || '').split('/').pop().toLowerCase();
      if (!href) return;

      // Match exactly the filename, and also treat Index.html as the default when location ends with '/'
      if (href === currentFile || (href === 'index.html' && (currentFile === '' || currentFile === '/'))) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  } catch (e) {
    // Fail silently; script is tiny and non-critical
    console.error('nav-active.js error:', e);
  }
})();
