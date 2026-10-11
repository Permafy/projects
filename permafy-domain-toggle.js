/* global document, window */
(function () {
    try {
        const host = window.location.hostname.toLowerCase();
        const path = window.location.pathname || '/';
        const query = window.location.search || '';
        const hash = window.location.hash || '';
        const projectBase = host === 'permafy.github.io' ? '/projects' : '';
        const editorPath = path.startsWith(`${projectBase}/`) ? path.slice(projectBase.length) : path;
        const editorMatch = editorPath.match(/^\/(?:projects\/featured\/|penguinmod\/|scratch\/)?(\d+)\/editor\/?$/);
        const isEditorHome = /^\/editor\/?$/.test(editorPath);

        if ((host === 'projects.permafy.org' || host === 'permafy.github.io') &&
            (editorMatch || isEditorHome)) {
            const editorRoute = editorMatch ? `/${editorMatch[1]}` : '/';
            const destination = new URL(editorRoute, 'https://studio.permafy.org');
            destination.search = query;
            destination.hash = hash;
            window.location.replace(destination.href);
            return;
        }

        if (host === 'studio.permafy.org') {
            document.title = 'Permafy - Studio';
        }
    } catch (error) {
        // Ignore redirect failures silently.
    }
}());
