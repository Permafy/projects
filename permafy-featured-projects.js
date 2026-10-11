/* global Promise, document, fetch */
(function () {
    try {
        const root = document.getElementById('featured-projects');
        if (!root) return;

        fetch('https://api.penguinmod.com/v1/projects/getfeaturedprojects?page=0')
            .then(response => (response.ok ? response.json() : Promise.reject(response)))
            .then(data => {
                const projects = Array.isArray(data) ? data : (data.projects || []);
                root.replaceChildren();
                projects.slice(0, 6).forEach((project, index) => {
                    if (index > 0) root.appendChild(document.createElement('br'));
                    const link = document.createElement('a');
                    link.href = project.url ||
                        `https://projects.permafy.org/projects/featured/${encodeURIComponent(project.id)}`;
                    link.target = '_blank';
                    link.rel = 'noreferrer noopener';
                    link.textContent = project.title || 'Featured project';
                    root.appendChild(link);
                });
            })
            .catch(() => {
                root.textContent = 'Featured projects unavailable';
            });
    } catch (error) {
        // Ignore loader failures silently.
    }
}());
