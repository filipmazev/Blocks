import type { GlassinessMode } from '@filip.mazev/blocks/effects/runtime';

/** Application-wide material preferences, inherited by components and overlays. */
export interface IBxAppearanceConfig {
  /** Translucency from 0 (lighter tint) to 1 (stronger tint). Defaults to 0.5. Refraction maintains a minimum backing for readable theme foregrounds. */
  translucency: number;
  /** Rendering budget. Defaults to 'auto'; 'baseline' temporarily sets glassiness to 'off', restoring the requested policy when leaving baseline. */
  quality: 'auto' | 'baseline' | 'enhanced';
  /** Browser policy for explicitly opted-in surfaces. Defaults to 'auto' on supported browsers; 'off' disables refraction and 'on' allows other engines. Never enables unselected surfaces. */
  glassiness?: GlassinessMode;
  /** Opaque surface preference. Defaults to false; system transparency and contrast preferences still take precedence. */
  reducedTransparency: boolean;
}
