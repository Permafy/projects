const fs = require('fs');
const path = require('path');

const buildDirectory = path.resolve(__dirname, '../build');
const outputDirectory = path.resolve(__dirname, '../studio-site');
const editorHtml = path.join(buildDirectory, 'editor', 'index.html');

if (!fs.existsSync(editorHtml)) {
    throw new Error('Build the editor before preparing the Studio site.');
}

fs.rmSync(outputDirectory, {recursive: true, force: true});
fs.mkdirSync(outputDirectory, {recursive: true});

for (const entry of fs.readdirSync(buildDirectory, {withFileTypes: true})) {
    if (entry.isDirectory()) {
        if (['images', 'js', 'static'].includes(entry.name)) {
            fs.cpSync(path.join(buildDirectory, entry.name), path.join(outputDirectory, entry.name), {
                recursive: true
            });
        }
    } else if (!entry.name.endsWith('.html') && entry.name !== 'CNAME') {
        fs.copyFileSync(path.join(buildDirectory, entry.name), path.join(outputDirectory, entry.name));
    }
}

fs.copyFileSync(editorHtml, path.join(outputDirectory, 'index.html'));
fs.copyFileSync(editorHtml, path.join(outputDirectory, '404.html'));
fs.writeFileSync(path.join(outputDirectory, 'CNAME'), 'studio.permafy.org\n');
