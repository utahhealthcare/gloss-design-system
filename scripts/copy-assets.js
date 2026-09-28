const fs = require('fs');

console.log('Copying assets...');

try {
    // Ensure dist directories exist
    fs.mkdirSync('dist/fonts', { recursive: true });
    fs.mkdirSync('dist/images', { recursive: true });

    // Copy fonts recursively
    if (fs.existsSync('src/fonts')) {
        fs.cpSync('src/fonts', 'dist/fonts', { recursive: true });
        console.log('Fonts copied successfully.');
    } else {
        console.log('src/fonts directory not found.');
    }

    // Copy images recursively
    if (fs.existsSync('src/images')) {
        fs.cpSync('src/images', 'dist/images', { recursive: true });
        console.log('Images copied successfully.');
    } else {
        console.log('src/images directory not found.');
    }
} catch (err) {
    console.error('Error copying assets:', err);
    process.exit(1);
}
