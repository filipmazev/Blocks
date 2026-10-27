/** Application-wide material preferences, inherited by components and overlays. */
export interface BxAppearanceConfig {
  material: 'glass' | 'frosted' | 'solid';
  blur: number;
  tint: number;
  quality: 'auto' | 'baseline' | 'enhanced';
  reducedTransparency: boolean;
}

export const DEFAULT_APPEARANCE_CONFIG: Readonly<BxAppearanceConfig> = Object.freeze({
  material: 'glass',
  blur: 10,
  tint: 0.4,
  quality: 'auto',
  reducedTransparency: false
});

export type BxThemeId = 'white' | 'purple' | 'orange' | 'red' | 'green' | 'cyberpunk' | 'high-contrast';
export const THEME_PALETTES: ReadonlyArray<{ id: BxThemeId; label: string; className: string }> = [
  { id: 'white', label: 'White', className: 'theme-white' },
  { id: 'purple', label: 'Purple', className: 'theme-purple' },
  { id: 'orange', label: 'Orange', className: 'theme-orange' },
  { id: 'red', label: 'Red', className: 'theme-red' },
  { id: 'green', label: 'Green', className: 'theme-green' },
  { id: 'cyberpunk', label: 'Cyberpunk', className: 'theme-cyberpunk' },
  { id: 'high-contrast', label: 'High contrast', className: 'high-contrast' }
];
