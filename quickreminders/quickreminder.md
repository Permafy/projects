## quick reminders so that i dont forget where are my files
hallo
# stage header controls
src/components/stage-header/stagecontrols/'
old PenguinMod controls are in /controlssssssss (there are exactly 7 "s" there, just if you wondered.)

# domain & title rules
- Studio/editor pages must be titled "Permafy - Studio".
- Dashboard/player pages must be titled "Permafy - A PenguinMod Fork".
- Redirect: studio.permafy.org -> permafy.github.io/editor
- Toggle script exact lines:

```js
(function () {
  const host = window.location.hostname.toLowerCase();
  const path = window.location.pathname || '/';
  const query = window.location.search || '';
  const hash = window.location.hash || '';
  const target = 'https://permafy.github.io/editor';

  if (host === 'studio.permafy.org') {
    const destination = new URL(path === '/' ? '/editor' : path, target);
    destination.search = query;
    destination.hash = hash;
    window.location.replace(destination.href);
    return;
  }

  if (host === 'permafy.github.io' && path === '/editor') {
    document.title = 'Permafy - Studio';
  }
})();
```

# featured projects quick loader
```js
(function () {
  const container = document.getElementById('featured-projects');
  if (!container) return;

  fetch('https://api.penguinmod.com/v1/projects/getfeaturedprojects?page=0')
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(data => {
      const projects = Array.isArray(data) ? data : (data.projects || []);
      container.innerHTML = projects.slice(0, 6).map(project => {
        const url = project.url || `https://permafy.github.io/?project=${project.id}`;
        return `<a href="${url}" target="_blank" rel="noreferrer noopener">${project.title || 'Featured project'}</a>`;
      }).join('<br>');
    })
    .catch(() => {
      container.textContent = 'Featured projects unavailable';
    });
})();
```

# toggle rule for exact host mapping
- studio.permafy.org = editor route
- permafy.github.io/editor = studio route
- dashboard/project player = "Permafy - A PenguinMod Fork"