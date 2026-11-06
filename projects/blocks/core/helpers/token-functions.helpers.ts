import type { Color, CssVariableReference, ThemeColorToken, ThemedColor } from '@core/types/tokens.types';

import * as tokenConsts from '@core/constants/tokens.constants';

/**
 * Detects a supported palette shade, including the theme-dependent primary and accent palettes (e.g., 'orange-500').
 *
 * @param token - Candidate token checked against the supported palette-token format.
 */
export function isPaletteToken(token: Color): token is ThemeColorToken {
  return tokenConsts.THEME_COLOR_TOKENS.some((candidate) => candidate === token);
}

/**
 * Type Guard: Detects if the provided color is a ThemedColor configuration object.
 *
 * @param color - Candidate color checked against supported semantic/palette color contracts.
 */
export function isThemedColor(color: unknown): color is Extract<ThemedColor, object> {
  return color !== null && typeof color === 'object' && 'light' in color;
}

/**
 * Returns a typed CSS variable reference for a semantic role or palette shade. Values follow the nearest applied Blocks theme.
 *
 * @param token - Semantic or palette color token to map to its CSS variable.
 */
export function resolveTokenToCssVar(token: Color): CssVariableReference {
  const key = isPaletteToken(token) ? `${tokenConsts.TOKEN_COLOR_DELIMITER}${tokenConsts.TOKEN_DELIMITER}${token}` : token;

  return `var(--${tokenConsts.TOKEN_PREFIX}${tokenConsts.TOKEN_DELIMITER}${key})` as CssVariableReference;
}

/**
 * Resolves a companion using the semantic map, or shade 50 for palette shades above 400 and shade 900 otherwise.
 * Unmapped semantic roles use bg-surface. Companions describe component styling relationships, not guaranteed accessible text pairs.
 *
 * @param token - Color token whose complementary foreground/background role is requested.
 */
export function getComplementaryToken(token: Color): Color {
  if (!isPaletteToken(token)) {
    return Object.hasOwn(tokenConsts.SEMANTIC_PAIRS, token) ? tokenConsts.SEMANTIC_PAIRS[token as keyof typeof tokenConsts.SEMANTIC_PAIRS] : 'bg-surface';
  }

  const parts = token.split(tokenConsts.TOKEN_DELIMITER);
  const shade = parts.pop();
  const palette = parts.join(tokenConsts.TOKEN_DELIMITER);

  const shadeNum = parseInt(shade || '500', 10);
  const bgShade = shadeNum > 400 ? 50 : 900;

  return `${palette}${tokenConsts.TOKEN_DELIMITER}${bgShade}` as Color;
}

/**
 * Mirrors a supported palette shade, with special handling for 50 and 1000. Semantic roles remain unchanged.
 *
 * @param token - Palette token whose tonal shade is mirrored.
 */
export function invertPaletteToken(token: Color): Color {
  if (!isPaletteToken(token)) return token;

  const parts = token.split(tokenConsts.TOKEN_DELIMITER);

  if (parts.length < 2) return token;

  const shadeStr = parts.pop();
  const base = parts.join(tokenConsts.TOKEN_DELIMITER);
  const shade = Number(shadeStr);

  if (isNaN(shade)) return token;

  let invertedShade: number;

  if (shade === 50) invertedShade = 900;
  else if (shade === 1000) invertedShade = 50;
  else invertedShade = 1000 - shade;

  const finalShade = (tokenConsts.SHADE_NUMBERS as readonly number[]).includes(invertedShade) ? invertedShade : shade;

  return `${base}${tokenConsts.TOKEN_DELIMITER}${finalShade}` as Color;
}
