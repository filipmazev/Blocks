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

export type BxThemeId = 'graphite-sky-blue' | 'azure-coral' | 'violet-teal' | 'tangerine-indigo' | 'scarlet-cyan' | 'lime-violet' | 'cyberpunk';

export const LEGACY_THEME_IDS = {
  white: 'graphite-sky-blue',
  blue: 'azure-coral',
  purple: 'violet-teal',
  orange: 'tangerine-indigo',
  red: 'scarlet-cyan',
  green: 'lime-violet'
} as const satisfies Record<string, BxThemeId>;

export type LegacyBxThemeId = keyof typeof LEGACY_THEME_IDS;

export const THEME_PALETTES: ReadonlyArray<{ id: BxThemeId; label: string; className: string; colors: readonly [string, string] }> = [
  { id: 'graphite-sky-blue', label: 'Graphite / Sky Blue', className: 'theme-graphite-sky-blue', colors: ['#525252', '#38bdf8'] },
  { id: 'azure-coral', label: 'Azure / Coral', className: 'theme-azure-coral', colors: ['#217eff', '#f87763'] },
  { id: 'violet-teal', label: 'Violet / Teal', className: 'theme-violet-teal', colors: ['#6d00ff', '#0d9488'] },
  { id: 'tangerine-indigo', label: 'Tangerine / Indigo', className: 'theme-tangerine-indigo', colors: ['#ff6900', '#4f78f5'] },
  { id: 'scarlet-cyan', label: 'Scarlet / Cyan', className: 'theme-scarlet-cyan', colors: ['#e3241b', '#0891b2'] },
  { id: 'lime-violet', label: 'Lime / Violet', className: 'theme-lime-violet', colors: ['#c4f53d', '#6842a6'] },
  { id: 'cyberpunk', label: 'Cyberpunk', className: 'theme-cyberpunk', colors: ['#3e5669', '#e6da00'] }
];
