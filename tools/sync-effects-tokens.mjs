import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { compileString } from 'sass';

import { formatGeneratedStyle } from './helpers/generated-style.helpers.mjs';

// The standalone demo consumes a generated subset of the existing Blocks tokens.
const tokens = compileString(
  `@use 'variables' as *; :root {
  @each $key, $value in $radiuses { --bx-rounded-#{$key}: #{$value}; }
  @each $key, $value in $spacing { --bx-space-#{$key}: #{$value}; }
}`,
  { loadPaths: [fileURLToPath(new URL('../projects/blocks/core/styles', import.meta.url))] }
);
const target = new URL('../projects/blocks/effects/examples/tokens.css', import.meta.url);

await writeFile(target, await formatGeneratedStyle('/* Generated from Blocks core tokens by tools/sync-effects-tokens.mjs. */\n' + tokens.css + '\n', target));
