import { SemanticColorToken } from './theme.types';
import * as tokenConsts from '../constants/tokens.constants';

export type ThemePalette = (typeof tokenConsts.PALETTE_NAMES)[number];
export type ThemeShade = (typeof tokenConsts.SHADE_NUMBERS)[number];

export type ThemeColorToken = `${ThemePalette}-${ThemeShade}`;
export type Color = ThemeColorToken | SemanticColorToken;
export type ThemedColor = Color | { light: Color; dark?: Color };
