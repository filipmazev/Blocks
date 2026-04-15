import { readFileSync, writeFileSync } from 'fs';

const pkgPath = './projects/blocks/package.json';
const apiPath = './projects/blocks/src/public-api.ts';

const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
const version = pkg.version;

const content = `/* * Public API Surface of blocks
 * This file is auto-generated. Do not edit directly.
 */

export const BLOCKS_VERSION = '${version}';
`;

writeFileSync(apiPath, content);