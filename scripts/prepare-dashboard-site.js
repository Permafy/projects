const fs = require('fs');
const path = require('path');

const sourceDirectory = path.resolve(__dirname, '../dashboard/public');
const outputDirectory = path.resolve(__dirname, '../dashboard-site');

if (!fs.existsSync(path.join(sourceDirectory, 'index.html'))) {
    throw new Error('Build the dashboard before preparing its standalone site.');
}

fs.rmSync(outputDirectory, {recursive: true, force: true});
fs.cpSync(sourceDirectory, outputDirectory, {recursive: true});
