(function () {
  try {
    const root = document.getElementById('featured-projects');
    if (!root) return;

    fetch('https://api.penguinmod.com/v1/projects/getfeaturedprojects?page=0')
      .then(response => (response.ok ? response.json() : Promise.reject(response)))
      .then(data => {
        const projects = Array.isArray(data) ? data : (data.projects || []);
        root.innerHTML = projects.slice(0, 6).map(project => {
          const url = project.url || `https://permafy.github.io/?project=${project.id}`;
          const title = project.title || 'Featured project';
          return `<a href="${url}" target="_blank" rel="noreferrer noopener">${title}</a>`;
        }).join('<br>');
      })
      .catch(() => {
        root.textContent = 'Featured projects unavailable';
      });
  } catch (error) {
    // Ignore loader failures silently.
  }
})();
