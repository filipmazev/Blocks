import { readFileSync, writeFileSync } from 'fs';

const pkgPath = './projects/blocks/package.json';
const apiPath = './projects/blocks/src/public-api.ts';

const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
const version = pkg.version;

let existingContent = readFileSync(apiPath, 'utf8');

existingContent = existingContent.replace(
    /export const BLOCKS_VERSION = '.*';/g,
    `export const BLOCKS_VERSION = '${version}';`
);

writeFileSync(apiPath, existingContent);
