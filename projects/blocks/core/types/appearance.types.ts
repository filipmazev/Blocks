import type { IBxAppearanceConfig } from '@core/interfaces/ibx-appearance-config.interface';

/** Application-wide appearance configuration; retained under its existing public name. */
export type BxAppearanceConfig = IBxAppearanceConfig;

export { DEFAULT_APPEARANCE_CONFIG } from '@core/constants/appearance.constants';

export type BxThemeId = 'carbon-cobalt' | 'azure-ember' | 'violet-teal' | 'tangerine-indigo' | 'brick-rose-cyan' | 'lime-violet' | 'cyberpunk';
