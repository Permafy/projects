(function () {
  try {
    const host = window.location.hostname.toLowerCase();
    const path = window.location.pathname || '/';
    const query = window.location.search || '';
    const hash = window.location.hash || '';
    const targetBase = 'https://permafy.github.io';

    if (host === 'studio.permafy.org') {
      const destination = new URL(path === '/' ? '/editor' : path, targetBase);
      destination.search = query;
      destination.hash = hash;
      if (window.location.href !== destination.href) {
        window.location.replace(destination.href);
      }
      return;
    }

    if (host === 'permafy.github.io' && path === '/editor') {
      document.title = 'Permafy - Studio';
    }
  } catch (error) {
    // Ignore redirect failures silently.
  }
})();
