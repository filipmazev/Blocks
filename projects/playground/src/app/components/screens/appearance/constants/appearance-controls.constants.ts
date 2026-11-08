import type { DeviceTheme } from '@filip.mazev/blocks/core';
import type { GlassinessMode } from '@filip.mazev/blocks/effects/runtime';
import type { IAppearanceChoice } from '@playground/components/screens/appearance/interfaces/iappearance-choice.interface';

export const APPEARANCE_MODES: readonly IAppearanceChoice<DeviceTheme | 'auto'>[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'auto', label: 'Auto' }
];

export const APPEARANCE_QUALITIES: readonly IAppearanceChoice<'auto' | 'baseline'>[] = [
  { value: 'auto', label: 'Automatic' },
  { value: 'baseline', label: 'Baseline' }
];

export const GLASSINESS_MODES: readonly IAppearanceChoice<GlassinessMode>[] = [
  { value: 'auto', label: 'Automatic' },
  { value: 'off', label: 'Off' },
  { value: 'on', label: 'Opt in on this browser' }
];
