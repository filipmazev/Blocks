import type { ITokenCatalogEntry } from '@playground/components/screens/token-catalog/interfaces/itoken-catalog-entry.interface';

import {
  BREAKPOINTS,
  COLOR_TOKENS,
  CSS_TOKEN_CATALOG,
  getComplementaryToken,
  isPaletteToken,
  RADIUS_VALUES,
  resolveTokenToCssVar,
  SEMANTIC_PAIRS,
  SHADOW_VALUES,
  SPACING_VALUES,
  THEME_PALETTE_ROLES,
  THEME_PALETTES,
  UTILITY_CLASSES,
  Z_INDEX_VALUES
} from '@filip.mazev/blocks/core';

import { TOKEN_CATALOG_CATEGORIES, TOKEN_CATALOG_GROUP_ORDER } from '@playground/components/screens/token-catalog/constants/token-catalog.constants';

/** Builds every catalog view from the same public data and complementary-color helper used by Blocks components. */
export function createCatalogEntries(): readonly ITokenCatalogEntry[] {
  const variables: ITokenCatalogEntry[] = CSS_TOKEN_CATALOG.flatMap((token) => {
    const palette = token.group.startsWith('Palette · ') ? token.group.slice('Palette · '.length) : undefined;

    return catalogPaletteGroups(palette, false, token.group).map<ITokenCatalogEntry>((group) => ({
      id: token.name,
      name: token.name,
      reference: token.reference,
      category: token.category,
      group,
      kind: token.kind,
      scope: `${token.scope} · ${token.themeEditable ? 'Theme control' : 'Advanced inventory'}`,
      defaults: [...token.defaults, ...token.fallbacks.map((value) => `Fallback: ${value}`)],
      companion: '',
      companionReference: '',
      search: token.sources.join(' ')
    }));
  });
  const pairs: ITokenCatalogEntry[] = COLOR_TOKENS.flatMap((token) => {
    const companion = getComplementaryToken(token);
    const palette = isPaletteToken(token);

    return catalogPaletteGroups(palette ? token.replace(/-\d+$/, '') : undefined, true, 'Semantic pairs').map<ITokenCatalogEntry>((group) => ({
      id: `pair:${token}`,
      name: token,
      reference: resolveTokenToCssVar(token),
      companion,
      companionReference: resolveTokenToCssVar(companion),
      category: 'pairs',
      group,
      kind: 'pair',
      scope: palette ? 'Palette companion rule' : Object.hasOwn(SEMANTIC_PAIRS, token) ? 'Explicit semantic mapping' : 'Default surface companion',
      defaults: [],
      search: ''
    }));
  });
  const breakpoints: ITokenCatalogEntry[] = Object.entries(BREAKPOINTS).map(([key, value]) => ({
    id: `breakpoint:${key}`,
    name: key,
    reference: `@include respond-up(${key}) { /* styles */ }`,
    category: 'breakpoints',
    group: 'Responsive breakpoints',
    kind: 'breakpoint',
    scope: 'Sass only · not a CSS variable',
    defaults: [`${value}px`],
    companion: '',
    companionReference: '',
    search: ''
  }));
  const utilities: ITokenCatalogEntry[] = UTILITY_CLASSES.map((name) => ({
    id: `class:${name}`,
    name: `.${name}`,
    reference: name,
    category: 'utilities',
    group: /^bx-(bg|text|border)-/.test(name) ? 'Color utility classes' : 'Layout and accessibility utility classes',
    kind: 'utility',
    scope: 'CSS class',
    defaults: [],
    companion: '',
    companionReference: '',
    search: ''
  }));

  const categories = TOKEN_CATALOG_CATEGORIES.map((option) => option.value);
  const scales: Readonly<Record<string, readonly string[]>> = {
    spacing: Object.keys(SPACING_VALUES),
    radii: Object.keys(RADIUS_VALUES),
    shadows: Object.keys(SHADOW_VALUES),
    layers: Object.keys(Z_INDEX_VALUES)
  };
  const entries = [...variables, ...pairs, ...breakpoints, ...utilities].sort((first, second) => {
    const category = categories.indexOf(first.category) - categories.indexOf(second.category);
    const firstGroup = TOKEN_CATALOG_GROUP_ORDER.indexOf(first.group);
    const secondGroup = TOKEN_CATALOG_GROUP_ORDER.indexOf(second.group);

    const group = (firstGroup < 0 ? 100 : firstGroup) - (secondGroup < 0 ? 100 : secondGroup) || first.group.localeCompare(second.group);
    const scale = scales[first.category];
    const size = scale
      ? scale.indexOf(first.name.slice(first.name.lastIndexOf('-') + 1)) - scale.indexOf(second.name.slice(second.name.lastIndexOf('-') + 1))
      : 0;

    return category || group || size || first.name.localeCompare(second.name, 'en', { numeric: true });
  });

  return entries.map((entry) => ({
    ...entry,
    search: [
      entry.name,
      entry.search,
      entry.reference,
      entry.category,
      entry.group,
      entry.kind,
      entry.scope,
      entry.companion,
      entry.name.includes('bg-') ? 'background backgrounds' : '',
      ...entry.defaults
    ]
      .join(' ')
      .toLowerCase()
  }));
}

/** Groups palette shades and companions using the same brand/accent assignments as the Sass theme engine. */
export function catalogPaletteGroups(palette: string | undefined, pairs: boolean, fallback: string): readonly string[] {
  if (!palette) return [fallback];

  const themes = THEME_PALETTES.filter((theme) => {
    const roles = THEME_PALETTE_ROLES[theme.id];

    return roles.brand === palette || roles.accent === palette;
  });

  if (themes.length) return themes.map((theme) => `${pairs ? 'Theme companions' : 'Theme palettes'} · ${theme.label}`);

  if (palette === 'primary' || palette === 'accent') return [pairs ? 'Current theme companions · Primary / Accent' : 'Current theme · Primary / Accent'];

  return [`${pairs ? 'Palette companions' : 'Other palettes'} · ${palette}`];
}
