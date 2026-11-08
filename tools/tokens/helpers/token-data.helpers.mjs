import { createThemePalettes } from './theme-palettes.helpers.mjs';

/** Builds the public constants and catalog from evaluated Sass and discovered CSS, validating every advertised foundation token. */
export function createTokenData({ values, variables, classes }) {
  const { PALETTES, SEMANTIC_KEYS, THEME_DEFINITIONS, ...constants } = values;
  const themePalettes = createThemePalettes(THEME_DEFINITIONS, PALETTES);
  const prefix = `--${constants.TOKEN_PREFIX}${constants.TOKEN_DELIMITER}`;
  const colorPrefix = `${prefix}${constants.TOKEN_COLOR_DELIMITER}${constants.TOKEN_DELIMITER}`;
  const names = (family, keys) => keys.map((key) => `${prefix}${family}${constants.TOKEN_DELIMITER}${key}`);

  constants.PALETTE_NAMES = ['primary', 'accent', ...Object.keys(PALETTES)];
  constants.THEME_PALETTE_IDS = themePalettes.map((palette) => palette.id);
  constants.THEME_PALETTE_ROLES = Object.fromEntries(
    Object.entries(THEME_DEFINITIONS).map(([id, definition]) => [id, { brand: definition.brand, accent: definition.accent }])
  );
  constants.SHADE_NUMBERS = Object.keys(Object.values(PALETTES)[0]).map(Number);
  constants.SEMANTIC_COLOR_TOKENS = SEMANTIC_KEYS.filter((key) => !key.startsWith('meta-'));
  constants.THEME_COLOR_TOKENS = constants.PALETTE_NAMES.flatMap((palette) =>
    constants.SHADE_NUMBERS.map((shade) => `${palette}${constants.TOKEN_DELIMITER}${shade}`)
  );
  constants.COLOR_TOKENS = [...constants.THEME_COLOR_TOKENS, ...constants.SEMANTIC_COLOR_TOKENS];

  for (const [name, palette] of Object.entries(PALETTES)) {
    if (Object.keys(palette).join() !== constants.SHADE_NUMBERS.join()) throw new Error(`Palette ${name} has inconsistent shades.`);
  }

  for (const [key, companion] of Object.entries(constants.SEMANTIC_PAIRS)) {
    if (!constants.SEMANTIC_COLOR_TOKENS.includes(key) || !constants.SEMANTIC_COLOR_TOKENS.includes(companion)) {
      throw new Error(`Invalid semantic pair: ${key} → ${companion}`);
    }
  }

  constants.BREAKPOINTS = Object.fromEntries(
    Object.entries(constants.BREAKPOINTS).map(([key, value]) => {
      if (!/^\d+(?:\.\d+)?px$/.test(value)) throw new Error(`Breakpoint ${key} must use pixels: ${value}`);

      return [key, Number.parseFloat(value)];
    })
  );
  constants.SEMANTIC_CSS_VARIABLES = constants.SEMANTIC_COLOR_TOKENS.map((key) => `${prefix}${key}`);
  constants.PALETTE_CSS_VARIABLES = constants.THEME_COLOR_TOKENS.map((key) => `${colorPrefix}${key}`);
  constants.GLASS_CSS_VARIABLES = [...variables.keys()].filter((name) => name.startsWith(`${prefix}glass-`)).sort();

  for (const [family, map, segment] of [
    ['SPACING', 'SPACING_VALUES', 'space'],
    ['RADIUS', 'RADIUS_VALUES', 'rounded'],
    ['SHADOW', 'SHADOW_VALUES', 'shadow'],
    ['BORDER', 'BORDER_VALUES', 'border'],
    ['Z_INDEX', 'Z_INDEX_VALUES', 'z']
  ]) {
    constants[`${family}_CSS_VARIABLES`] = names(segment, Object.keys(constants[map]));
  }

  const foundations = [
    ...constants.SEMANTIC_CSS_VARIABLES,
    ...constants.PALETTE_CSS_VARIABLES,
    ...constants.SPACING_CSS_VARIABLES,
    ...constants.RADIUS_CSS_VARIABLES,
    ...constants.SHADOW_CSS_VARIABLES,
    ...constants.BORDER_CSS_VARIABLES,
    ...constants.Z_INDEX_CSS_VARIABLES
  ];

  for (const name of foundations) {
    if (!variables.get(name)?.defaults.size) throw new Error(`Advertised CSS token is not emitted: ${name}`);
  }

  constants.CSS_VARIABLES = [...variables.keys()].sort();
  constants.THEME_CSS_VARIABLES = [
    ...constants.SEMANTIC_CSS_VARIABLES,
    ...constants.SPACING_CSS_VARIABLES.filter((name) => name !== `${prefix}space-0`),
    ...constants.RADIUS_CSS_VARIABLES.filter((name) => ![`${prefix}rounded-none`, `${prefix}rounded-pill`].includes(name)),
    ...constants.SHADOW_CSS_VARIABLES,
    ...constants.BORDER_CSS_VARIABLES
  ];
  constants.CSS_VARIABLE_REFERENCES = constants.CSS_VARIABLES.map((name) => `var(${name})`);
  constants.SPACING_UTILITY_CLASSES = classes.filter((name) => /^bx-(?:p|m)[trblxy]?-/.test(name));
  constants.RADIUS_UTILITY_CLASSES = classes.filter((name) => name.startsWith('bx-rounded-'));
  constants.SHADOW_UTILITY_CLASSES = classes.filter((name) => name.startsWith('bx-shadow-'));
  constants.Z_INDEX_UTILITY_CLASSES = classes.filter((name) => name.startsWith('bx-z-'));
  constants.PALETTE_UTILITY_CLASSES = classes.filter((name) =>
    Object.keys(PALETTES).some((palette) => ['bg', 'text', 'border'].some((role) => name.startsWith(`bx-${role}-${palette}-`)))
  );
  constants.ICON_UTILITY_CLASSES = classes.filter((name) => name.startsWith('bx-icon-pos-'));
  constants.UTILITY_CLASSES = classes.sort();

  const catalog = constants.CSS_VARIABLES.map((name) => {
    const entry = variables.get(name);
    const metadata = describeToken(name.slice(prefix.length), constants);
    const scope = entry.selectors.has('.blocks-catalog-theme')
      ? 'theme'
      : foundations.includes(name) || entry.selectors.has(':root')
        ? 'global'
        : entry.defaults.size || entry.fallbacks.size
          ? 'local'
          : 'runtime';

    return {
      name,
      reference: `var(${name})`,
      ...metadata,
      scope,
      themeEditable: constants.THEME_CSS_VARIABLES.includes(name),
      defaults: [...entry.defaults].sort(),
      fallbacks: [...entry.fallbacks].sort(),
      selectors: [...entry.selectors].sort(),
      sources: [...entry.scopes].sort()
    };
  });

  return { constants, catalog, themePalettes };
}

/** Assigns stable catalog categories and readable role groups without duplicating token values. */
function describeToken(key, constants) {
  if (constants.BORDER_CSS_VARIABLES.includes(`--${constants.TOKEN_PREFIX}${constants.TOKEN_DELIMITER}${key}`)) {
    return { category: 'borders', group: 'Border geometry', kind: 'value' };
  }

  if (key.startsWith(`${constants.TOKEN_COLOR_DELIMITER}-`)) {
    const palette = key.slice(constants.TOKEN_COLOR_DELIMITER.length + 1).replace(/-\d+$/, '');

    return { category: 'colors', group: `Palette · ${palette}`, kind: 'color' };
  }

  if (constants.SEMANTIC_COLOR_TOKENS.includes(key)) {
    const status = key.match(/(?:^|-)(danger|warn|info|success)(?:-|$)/)?.[1];
    const group = status
      ? { danger: 'Danger', warn: 'Warning', info: 'Information', success: 'Success' }[status]
      : /primary|brand/.test(key) && !key.startsWith('text-primary')
        ? 'Primary and brand'
        : key.includes('accent')
          ? 'Accent'
          : key.startsWith('bg-')
            ? 'Backgrounds and surfaces'
            : key.startsWith('text-')
              ? 'Text'
              : key.startsWith('border-')
                ? 'Borders'
                : 'Scrollbars';

    return { category: 'colors', group, kind: 'color' };
  }

  for (const [segment, category, group, kind] of [
    ['space-', 'spacing', 'Spacing scale', 'spacing'],
    ['rounded-', 'radii', 'Corner radii', 'radius'],
    ['shadow-', 'shadows', 'Elevation and shadows', 'shadow'],
    ['z-', 'layers', 'Stacking layers', 'number']
  ]) {
    if (key.startsWith(segment)) return { category, group, kind };
  }

  if (/^(?:glass-|refraction-|translucency)/.test(key)) {
    return { category: 'effects', group: key.startsWith('refraction-') ? 'Refraction' : 'Glass and appearance', kind: 'value' };
  }

  if (/reduced-motion/.test(key)) return { category: 'other', group: 'Accessibility', kind: 'value' };

  return { category: 'components', group: `Component · ${key.split('-')[0]}`, kind: 'value' };
}
