const fs = require('fs');
const path = require('path');

const sourceDirectory = path.resolve(__dirname, '../dashboard/public');
const outputDirectory = path.resolve(__dirname, '../dashboard-site');
const projectRoot = path.resolve(__dirname, '..');

if (!fs.existsSync(path.join(sourceDirectory, 'index.html'))) {
    throw new Error('Build the dashboard before preparing its standalone site.');
}

fs.rmSync(outputDirectory, {recursive: true, force: true});
fs.cpSync(sourceDirectory, outputDirectory, {recursive: true});
for (const filename of ['favicon.ico', 'favicon.png']) {
    fs.copyFileSync(path.join(projectRoot, filename), path.join(outputDirectory, filename));
}
fs.writeFileSync(path.join(outputDirectory, 'CNAME'), 'permafy.org\n');
fs.writeFileSync(path.join(outputDirectory, '.nojekyll'), '');
