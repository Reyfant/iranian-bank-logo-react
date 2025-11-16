const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'icons');
const outFile = path.join(__dirname, 'index.d.ts');

const files = fs.readdirSync(iconsDir)
    .filter(f => f.endsWith('.svg'))
    .map(f => path.basename(f, '.svg'));

const names = files.map(name => `"${name}"`).join(' | ');

const content = `declare module "iranian-bank-logo-react" {
    import * as React from "react";

    export interface IranianBankProps {
        name: ${names};
        size?: number;
        [key: string]: any;
    }

    export const IranianBank: React.FC<IranianBankProps>;
}
`;

fs.writeFileSync(outFile, content, 'utf8');
console.log(`✅ index.d.ts generated with ${files.length} icons.`);