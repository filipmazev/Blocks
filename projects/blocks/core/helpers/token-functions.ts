import { Color, ThemeColorToken, ThemedColor } from '../types/tokens.types';
import { SemanticColorToken } from '../types/theme.types';
import * as tokenConsts from '../constants/tokens.constants';

/**
 * Type Guard: Detects if a token is a static palette shade (e.g., 'orange-500')
 */
export function isPaletteToken(token: Color): token is ThemeColorToken {
  return /-\d+$/.test(token);
}

/**
 * Type Guard: Detects if the provided color is a ThemedColor configuration object.
 */
export function isThemedColor(color: unknown): color is Extract<ThemedColor, object> {
  return color !== null && typeof color === 'object' && 'light' in color;
}

/**
 * Returns the correct CSS variable string based on the token type.
 */
export function resolveTokenToCssVar(token: Color): string {
  if (isPaletteToken(token)) {
    return `var(--${tokenConsts.TOKEN_PREFIX}${tokenConsts.TOKEN_DELIMITER}${tokenConsts.TOKEN_COLOR_DELIMITER}${tokenConsts.TOKEN_DELIMITER}${token})`;
  } else {
    return `var(--${tokenConsts.TOKEN_PREFIX}${tokenConsts.TOKEN_DELIMITER}${token})`;
  }
}

/**
 * Smartly resolves the complementary background token.
 */
export function getComplementaryToken(token: Color): Color {
  if (!isPaletteToken(token)) {
    return (tokenConsts.SEMANTIC_PAIRS[token as SemanticColorToken] as Color) || 'surface';
  }

  const parts = token.split(tokenConsts.TOKEN_DELIMITER);
  const shade = parts.pop();
  const palette = parts.join(tokenConsts.TOKEN_DELIMITER);

  const shadeNum = parseInt(shade || '500', 10);
  const bgShade = shadeNum > 400 ? 50 : 900;

  return `${palette}-${bgShade}` as Color;
}

/**
 * Provides the inverted value of a given token color
 */
export function invertPaletteToken(token: Color): Color {
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

  return `${base}-${finalShade}` as Color;
}
