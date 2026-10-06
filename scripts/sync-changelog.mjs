import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const destinationPath = path.join(projectDirectory, 'docs', 'changelog.md');
const source = await readFile(path.join(projectDirectory, 'CHANGELOG.md'), 'utf8');
const generated = [
    '---',
    'title: Changelog',
    'description: Fixes, additions, and changes in each Gloss release.',
    'permalink: /changelog/',
    'changelog: true',
    '---',
    '',
    '<!-- Generated from /CHANGELOG.md by npm run sync:changelog. Edit the root file instead. -->',
    '',
    source.trimEnd(),
    '',
].join('\n');

if (process.argv.includes('--check')) {
    const current = await readFile(destinationPath, 'utf8').catch(() => '');

    if (current !== generated) {
        throw new Error('docs/changelog.md is stale. Run npm run sync:changelog.');
    }

    console.log('Documentation changelog is up to date.');
} else {
    await writeFile(destinationPath, generated);
    console.log('Synced CHANGELOG.md to docs/changelog.md.');
}
