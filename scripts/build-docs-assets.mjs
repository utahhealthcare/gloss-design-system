import { access, copyFile, cp, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assets = [
    { source: 'dist/css/gloss.css', destination: 'docs/assets/css/gloss.css' },
    { source: 'dist/css/gloss.css.map', destination: 'docs/assets/css/gloss.css.map' },
    { source: 'dist/js/gloss.js', destination: 'docs/assets/js/gloss.js' },
    { source: 'dist/js/gloss-icons.js', destination: 'docs/assets/js/gloss-icons.js' },
];

for (const asset of assets) {
    const sourcePath = path.join(projectDirectory, asset.source);
    const destinationPath = path.join(projectDirectory, asset.destination);

    try {
        await access(sourcePath);
    } catch (error) {
        throw new Error(`Missing ${sourcePath}. Run npm run build:docs first.`, { cause: error });
    }

    await mkdir(path.dirname(destinationPath), { recursive: true });
    await copyFile(sourcePath, destinationPath);
}

// Copy open-source fonts for docs preview
const directories = [{ source: 'dist/fonts', destination: 'docs/assets/fonts' }];

for (const dir of directories) {
    const src = path.join(projectDirectory, dir.source);
    const dest = path.join(projectDirectory, dir.destination);
    if (existsSync(src)) {
        await mkdir(dest, { recursive: true });
        await cp(src, dest, { recursive: true });
    }
}

console.log(`Copied ${assets.length} generated asset(s) and directories into docs/.`);
