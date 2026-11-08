// Types derive from generated Sass data; maintain contracts here as ordinary TypeScript.

import type {
  BORDER_CSS_VARIABLES,
  BORDER_VALUES,
  BREAKPOINTS,
  COLOR_TOKENS,
  CSS_VARIABLE_REFERENCES,
  CSS_VARIABLES,
  GLASS_CSS_VARIABLES,
  ICON_UTILITY_CLASSES,
  PALETTE_CSS_VARIABLES,
  PALETTE_NAMES,
  PALETTE_UTILITY_CLASSES,
  RADIUS_CSS_VARIABLES,
  RADIUS_UTILITY_CLASSES,
  RADIUS_VALUES,
  SEMANTIC_COLOR_TOKENS,
  SEMANTIC_CSS_VARIABLES,
  SEMANTIC_PAIRS,
  SHADE_NUMBERS,
  SHADOW_CSS_VARIABLES,
  SHADOW_UTILITY_CLASSES,
  SHADOW_VALUES,
  SPACING_CSS_VARIABLES,
  SPACING_UTILITY_CLASSES,
  SPACING_VALUES,
  THEME_COLOR_TOKENS,
  THEME_CSS_VARIABLES,
  UTILITY_CLASSES,
  Z_INDEX_CSS_VARIABLES,
  Z_INDEX_UTILITY_CLASSES,
  Z_INDEX_VALUES
} from '@core/constants/tokens.constants';

export type ThemePalette = (typeof PALETTE_NAMES)[number];
export type ThemeShade = (typeof SHADE_NUMBERS)[number];

export type SemanticColorToken = (typeof SEMANTIC_COLOR_TOKENS)[number];
export type ThemeColorToken = (typeof THEME_COLOR_TOKENS)[number];
export type Color = (typeof COLOR_TOKENS)[number];

export type ThemedColor = Color | { light: Color; dark?: Color };

export type SemanticPairKey = keyof typeof SEMANTIC_PAIRS;
export type SemanticPairValue = (typeof SEMANTIC_PAIRS)[SemanticPairKey];

export type SpacingKey = keyof typeof SPACING_VALUES;
export type RadiusKey = keyof typeof RADIUS_VALUES;
export type ShadowKey = keyof typeof SHADOW_VALUES;
export type BorderKey = keyof typeof BORDER_VALUES;
export type ZIndexKey = keyof typeof Z_INDEX_VALUES;

export type SemanticCssVariable = (typeof SEMANTIC_CSS_VARIABLES)[number];
export type PaletteCssVariable = (typeof PALETTE_CSS_VARIABLES)[number];
export type GlassCssVariable = (typeof GLASS_CSS_VARIABLES)[number];

export type SpacingCssVariable = (typeof SPACING_CSS_VARIABLES)[number];
export type RadiusCssVariable = (typeof RADIUS_CSS_VARIABLES)[number];
export type ShadowCssVariable = (typeof SHADOW_CSS_VARIABLES)[number];
export type BorderCssVariable = (typeof BORDER_CSS_VARIABLES)[number];
/** Curated semantic color, spacing, radius, elevation, and border properties suitable for application theme overrides. */
export type ThemeCssVariable = (typeof THEME_CSS_VARIABLES)[number];
export type ZIndexCssVariable = (typeof Z_INDEX_CSS_VARIABLES)[number];

export type BreakpointKey = keyof typeof BREAKPOINTS;
export type BreakpointValue = (typeof BREAKPOINTS)[BreakpointKey];

export type CssVariable = (typeof CSS_VARIABLES)[number];
export type CssVariableReference = (typeof CSS_VARIABLE_REFERENCES)[number];

export type SpacingUtilityClass = (typeof SPACING_UTILITY_CLASSES)[number];
export type RadiusUtilityClass = (typeof RADIUS_UTILITY_CLASSES)[number];
export type ShadowUtilityClass = (typeof SHADOW_UTILITY_CLASSES)[number];
export type ZIndexUtilityClass = (typeof Z_INDEX_UTILITY_CLASSES)[number];
export type PaletteUtilityClass = (typeof PALETTE_UTILITY_CLASSES)[number];
export type IconUtilityClass = (typeof ICON_UTILITY_CLASSES)[number];

export type UtilityClass = (typeof UTILITY_CLASSES)[number];
