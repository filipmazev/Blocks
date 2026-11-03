import type { BxAppearanceConfig, DeviceTheme } from '@filip.mazev/blocks/core';
import type { GlassinessMode } from '@filip.mazev/blocks/effects/runtime';
import type { IAppearanceChoice } from '../interfaces/iappearance-choice.interface';

export const APPEARANCE_MODES: readonly IAppearanceChoice<DeviceTheme | 'auto'>[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'auto', label: 'Auto' }
];

export const APPEARANCE_QUALITIES: readonly IAppearanceChoice<BxAppearanceConfig['quality']>[] = [
  { value: 'auto', label: 'Automatic' },
  { value: 'enhanced', label: 'Enhanced' },
  { value: 'baseline', label: 'Baseline' }
];

export const GLASSINESS_MODES: readonly IAppearanceChoice<GlassinessMode>[] = [
  { value: 'auto', label: 'Automatic' },
  { value: 'off', label: 'Off' },
  { value: 'on', label: 'Opt in on this browser' }
];
