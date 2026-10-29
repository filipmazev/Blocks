/** Application-wide material preferences, inherited by components and overlays. */
export interface BxAppearanceConfig {
  /** 0 is lightly blurred and nearly clear; 1 is richly tinted, retaining translucency. */
  glassiness: number;
  quality: 'auto' | 'baseline' | 'enhanced';
  reducedTransparency: boolean;
}

export const DEFAULT_APPEARANCE_CONFIG: Readonly<BxAppearanceConfig> = Object.freeze({
  glassiness: 0.5,
  quality: 'auto',
  reducedTransparency: false
});

export type BxThemeId = 'carbon-cobalt' | 'azure-ember' | 'violet-teal' | 'tangerine-indigo' | 'brick-rose-cyan' | 'lime-violet' | 'cyberpunk';

export const THEME_PALETTES: ReadonlyArray<{ id: BxThemeId; label: string; className: string; colors: readonly [string, string] }> = [
  { id: 'carbon-cobalt', label: 'Carbon / Cobalt', className: 'theme-carbon-cobalt', colors: ['#292a2d', '#356fe8'] },
  { id: 'azure-ember', label: 'Azure / Ember', className: 'theme-azure-ember', colors: ['#217eff', '#d85a1a'] },
  { id: 'violet-teal', label: 'Violet / Teal', className: 'theme-violet-teal', colors: ['#6d00ff', '#0d9488'] },
  { id: 'tangerine-indigo', label: 'Tangerine / Indigo', className: 'theme-tangerine-indigo', colors: ['#ff6900', '#4f78f5'] },
  { id: 'brick-rose-cyan', label: 'Brick Rose / Cyan', className: 'theme-brick-rose-cyan', colors: ['#b64a50', '#0891b2'] },
  { id: 'lime-violet', label: 'Lime / Violet', className: 'theme-lime-violet', colors: ['#c4f53d', '#6842a6'] },
  { id: 'cyberpunk', label: 'Cyberpunk', className: 'theme-cyberpunk', colors: ['#3e5669', '#e6da00'] }
];
