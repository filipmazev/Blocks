import { compile } from 'sass';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Keep the existing CSS import path available to Angular and native consumers.
const source = new URL('../projects/blocks/effects/effects.scss', import.meta.url);
const target = new URL('../projects/blocks/effects/effects.css', import.meta.url);
const result = compile(fileURLToPath(source), { style: 'expanded' });
await writeFile(target, `/* Generated from effects.scss by tools/build-effects-styles.mjs. */\n${result.css}\n`);
