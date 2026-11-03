import type { IBxAppearanceConfig } from '../interfaces/ibx-appearance-config.interface';

export const DEFAULT_APPEARANCE_CONFIG: Readonly<IBxAppearanceConfig> = Object.freeze({
  translucency: 0.5,
  quality: 'auto',
  glassiness: 'auto',
  reducedTransparency: false
});
