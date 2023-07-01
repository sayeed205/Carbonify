const Scarbon = require('scarbon');
const fs = require('fs');

(async () => {
    const render = await new Scarbon({
        theme: 'Min Dark', // One of the default themes (Full list below)
        base: 'transparent', // Color behind the codeblock
        width: 2048, // Set the width of the image
        radius: 32, // Set the radius of the codeblock corner
    });

    const code = fs.readFileSync('./src/index.ts', 'utf8'); // Get current file contents
    const output = render.pretty(code); // Get file buffer

    fs.writeFileSync('code.png', output); // Write buffer to file
})();
