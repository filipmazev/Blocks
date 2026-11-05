import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { compile } from 'sass';

import { formatGeneratedStyle } from './helpers/generated-style.helpers.mjs';

// Keep the existing CSS import path available to Angular and native consumers.
const source = new URL('../projects/blocks/effects/effects.scss', import.meta.url);
const target = new URL('../projects/blocks/effects/effects.css', import.meta.url);
const result = compile(fileURLToPath(source), { style: 'expanded' });
await writeFile(target, await formatGeneratedStyle(`/* Generated from effects.scss by tools/build-effects-styles.mjs. */\n${result.css}\n`, target));
