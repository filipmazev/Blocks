import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { createTokenData } from './helpers/token-data.helpers.mjs';
import { readTokenSources } from './helpers/token-sources.helpers.mjs';
import { printTokenConstants } from './helpers/token-writer.helpers.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));
const started = performance.now();

console.log('Reading Sass maps, compiling styles, and scanning CSS variable usage…');

const data = createTokenData(await readTokenSources(root));
const outputs = [
  ['projects/blocks/core/constants/tokens.constants.ts', data.constants],
  ['projects/blocks/core/constants/token-catalog.constants.ts', { CSS_TOKEN_CATALOG: data.catalog }],
  ['projects/blocks/core/constants/theme-palettes.constants.ts', { THEME_PALETTES: data.themePalettes }]
];

// Validate every output before replacing any generated file.
const formatted = [];

for (const [target, values] of outputs) {
  console.log(`Formatting and linting ${target}…`);
  formatted.push(await printTokenConstants(values, target));
}

for (const [index, [target]] of outputs.entries()) {
  const destination = new URL(`../../${target}`, import.meta.url);
  const previous = await readFile(destination, 'utf8').catch((error) => {
    if (error.code === 'ENOENT') return undefined;

    throw error;
  });

  if (previous === formatted[index]) {
    console.log(`Unchanged ${target}`);
  } else {
    await writeFile(destination, formatted[index]);
    console.log(`Updated ${target}`);
  }
}

console.log(
  `Generated ${data.catalog.length} CSS variables, ${data.constants.UTILITY_CLASSES.length} utility classes, and ${data.themePalettes.length} theme palettes in ${((performance.now() - started) / 1000).toFixed(2)}s.`
);
