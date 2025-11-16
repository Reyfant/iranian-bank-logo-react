const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "../src/icons");
const outputFile = path.join(__dirname, "../src/iconMap.js");

const files = fs.readdirSync(iconsDir).filter(f => f.endsWith(".svg"));

const entries = files.map(f => {
    const name = path.basename(f, ".svg");
    return `  ${JSON.stringify(name)}: require("./icons/${f}")`;
});

const content = `export const iconMap = {\n${entries.join(",\n")}\n};\n`;

fs.writeFileSync(outputFile, content);

console.log(`iconMap.js generated with ${files.length} icons.`);