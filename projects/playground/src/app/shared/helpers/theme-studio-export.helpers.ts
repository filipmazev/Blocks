import type { IThemeStudioDocument } from '@playground/interfaces/itheme-studio-document.interface';
import type { StudioValues } from '@playground/types/theme-studio.types';

import { THEME_CSS_VARIABLES } from '@filip.mazev/blocks/core';

import { isStudioDocument, normalizeStudioValue } from '@playground/shared/helpers/theme-studio-validation.helpers';

/** Serialize a complete built-in base with sparse overrides in stable generated-token order.
 * @param document - Valid versioned theme document; invalid data throws before serialization.
 * @returns SCSS using root data-theme and high-contrast conventions, with LF and a final newline.
 */
export function exportStudioScss(document: IThemeStudioDocument): string {
  if (!isStudioDocument(document)) throw new Error('The theme document contains unsupported values.');

  const declarations = (values: StudioValues) =>
    THEME_CSS_VARIABLES.filter((name) => values[name] !== undefined).map((name) => `        ${name}: ${normalizeStudioValue(name, values[name] ?? '')};`);
  const block = (selector: string, values: StudioValues, dark?: boolean) => [
    `    ${selector} {`,
    ...(dark === undefined ? [] : [`        @include bx.bx-theme(bx.make-palette-theme('${document.palette}'${dark ? ', true' : ''}));`, '']),
    ...declarations(values),
    '    }'
  ];

  return [
    "@use '@filip.mazev/blocks' as bx;",
    '',
    '// Merge this @use with your existing Blocks import; load global styles only once.',
    '// Place after existing palette rules. Keep your normal high-contrast theme installed.',
    '// Set data-theme="light" or "dark" and .high-contrast on the root element.',
    '@media (forced-colors: none) {',
    ...block(':root:not(.high-contrast)', document.shared),
    '',
    ...block(":root:not([data-theme='dark']):not(.high-contrast)", document.light, false),
    '',
    ...block(":root[data-theme='dark']:not(.high-contrast)", document.dark, true),
    '}',
    ''
  ].join('\n');
}
