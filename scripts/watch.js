const fs = require('fs');
const { exec } = require('child_process');

console.log('Starting watch mode...');

// Debounce map to avoid double trigger
const debounces = {};

function debounce(key, delay, fn) {
    if (debounces[key]) {
        clearTimeout(debounces[key]);
    }
    debounces[key] = setTimeout(() => {
        delete debounces[key];
        fn();
    }, delay);
}

// Helper to run a command and log output
function runCommand(command, description) {
    console.log(`\n[watch] ${description}...`);
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`[watch] Error during ${description}:`, error.message);
            if (stderr) console.error(stderr);
            return;
        }
        if (stdout) console.log(stdout.trim());
        console.log(`[watch] ${description} completed.`);
    });
}

// Watch src recursively
fs.watch('src', { recursive: true }, (eventType, filename) => {
    if (!filename) return;

    // Ignore editor temporary files, etc.
    if (filename.startsWith('.') || filename.endsWith('~') || filename.includes('node_modules')) {
        return;
    }

    const normalizedFilename = filename.replace(/\\/g, '/');

    if (
        normalizedFilename.startsWith('styles/') ||
        normalizedFilename.startsWith('scss/') ||
        normalizedFilename.startsWith('css/') ||
        normalizedFilename.startsWith('tokens/')
    ) {
        debounce('css', 150, () => {
            runCommand(
                'npm run build:css && npm run build:css-min && npm run build:css-rtl',
                'Rebuilding CSS',
            );
        });
    } else if (normalizedFilename.startsWith('js/')) {
        debounce('js', 150, () => {
            runCommand('npm run build:js && npm run build:js-min', 'Rebuilding JS');
        });
    } else if (
        normalizedFilename.startsWith('fonts/') ||
        normalizedFilename.startsWith('images/')
    ) {
        debounce('assets', 150, () => {
            runCommand('npm run build:assets', 'Copying Assets');
            // If images change, CSS might need to be rebuilt to inline SVG changes
            if (normalizedFilename.startsWith('images/')) {
                debounce('css', 200, () => {
                    runCommand(
                        'npm run build:css && npm run build:css-min && npm run build:css-rtl',
                        'Rebuilding CSS for Image Updates',
                    );
                });
            }
        });
    }
});

// Run initial full build to ensure dist/ is up to date
runCommand('npm run build', 'Initial full build');

console.log('Watching for changes in src/ directory. Press Ctrl+C to stop.');
