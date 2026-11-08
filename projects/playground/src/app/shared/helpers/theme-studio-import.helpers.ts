import type { IThemeStudioDocument } from '@playground/interfaces/itheme-studio-document.interface';

import { isStudioDocument, normalizeStudioValue } from './theme-studio-validation.helpers';

/** Parse a Studio JSON document or the supported SCSS exporter grammar without executing Sass or CSS.
 * @param source - Pasted or uploaded text, limited to 64 KiB.
 * @returns A validated document; malformed or unsupported input throws and must leave the current draft intact.
 */
export function importStudioTheme(source: string): IThemeStudioDocument {
  if (!source.trim() || source.length > 65536) throw new Error('Choose a Studio JSON or exported SCSS file smaller than 64 KiB.');

  if (source.trim().startsWith('{')) {
    const value: unknown = JSON.parse(source);

    if (!isStudioDocument(value)) throw new Error('Unsupported document version, palette, token or value.');

    return value;
  }

  const text = source.replace(/\/\/[^\n\r]*/g, '').trim();
  const wrapper = /^@use\s+'@filip\.mazev\/blocks'\s+as\s+bx;\s*@media\s*\(forced-colors:\s*none\)\s*\{([\s\S]*)\}$/.exec(text);

  if (!wrapper) throw new Error('SCSS import accepts the unmodified Blocks Theme Studio export format. Use Studio JSON for portable editing.');

  const blocks = [...wrapper[1].matchAll(/([^{}]+)\{([^{}]*)\}/g)];
  const expected = [':root:not(.high-contrast)', ":root:not([data-theme='dark']):not(.high-contrast)", ":root[data-theme='dark']:not(.high-contrast)"];

  if (blocks.length !== 3 || wrapper[1].replace(/[^{}]+\{[^{}]*\}/g, '').trim()) throw new Error('Unsupported theme selectors.');

  const maps: Record<string, string>[] = [];

  let palette = '';

  for (const [index, block] of blocks.entries()) {
    if (block[1].trim() !== expected[index]) throw new Error('Unsupported theme selectors.');

    let body = block[2].trim();

    if (index > 0) {
      const include = /^@include\s+bx\.bx-theme\(bx\.make-palette-theme\('([a-z-]+)'(,\s*true)?\)\);/.exec(body);

      if (!include || (index === 2) !== !!include[2] || (palette && palette !== include[1]))
        throw new Error('Both modes must use the same supported base palette.');

      palette = include[1];
      body = body.slice(include[0].length).trim();
    }

    const entries: Record<string, string> = {};

    const declarations = body
      .split(';')
      .map((part) => part.trim())
      .filter(Boolean);

    for (const declaration of declarations) {
      const match = /^(--bx-[a-z\d-]+):\s*([^{}]+)$/.exec(declaration);
      const value = match ? normalizeStudioValue(match[1], match[2]) : null;

      if (!match || value === null || Object.hasOwn(entries, match[1])) throw new Error('Unsupported or duplicate theme declaration.');

      entries[match[1]] = value;
    }

    maps.push(entries);
  }

  const result = { version: 1, palette, shared: maps[0], light: maps[1], dark: maps[2] };

  if (!isStudioDocument(result)) throw new Error('Unsupported document palette, token or value family.');

  return result;
}
