const fs = require('fs');
const file = process.argv[2];

if (file && fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    fs.writeFileSync(file, content.replace(/uk-/g, 'gls-'));
}
