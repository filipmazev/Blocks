import type { IBxSelectOption } from '@filip.mazev/blocks/forms';
import type { IThemeStudioRange } from '@playground/interfaces/itheme-studio-range.interface';
import type { StudioColorToken } from '@playground/types/theme-studio.types';

export const STUDIO_STYLE_OPTIONS: readonly IBxSelectOption<string>[] = ['Default', 'None', 'Small', 'Medium', 'Large'].map((label) => ({
  label,
  value: label.toLowerCase()
}));
export const STUDIO_BASE_OPTIONS: readonly IBxSelectOption<string>[] = [
  { label: 'Default neutral', value: 'default' },
  { label: 'Carbon', value: 'carbon' },
  { label: 'Slate', value: 'cyber-slate' }
];
export const STUDIO_MENU_OPTIONS: readonly IBxSelectOption<string>[] = [
  { label: 'Default', value: 'default' },
  { label: 'Neutral', value: 'neutral' },
  { label: 'Primary tint', value: 'primary' },
  { label: 'Accent tint', value: 'accent' }
];
export const STUDIO_DENSITY_OPTIONS: readonly IBxSelectOption<string>[] = [
  { label: 'Default', value: 'default' },
  { label: 'Compact', value: 'compact' },
  { label: 'Comfortable', value: 'comfortable' },
  { label: 'Spacious', value: 'spacious' }
];
export const STUDIO_SHADOW_TARGETS: readonly IBxSelectOption<string>[] = [
  { label: 'All resting shadows', value: 'all' },
  { label: 'Controls', value: 'control' },
  { label: 'Surfaces', value: 'surface' },
  { label: 'Cards', value: 'cards' },
  { label: 'Modals', value: 'modal' },
  { label: 'Toasts', value: 'toast' }
];
export const STUDIO_SHADOW_RANGES: readonly IThemeStudioRange[] = [
  { key: 'opacity', label: 'Shadow opacity', min: 0, max: 100, unit: '%' },
  { key: 'blur', label: 'Blur radius', min: 0, max: 64, unit: 'px' },
  { key: 'spread', label: 'Spread', min: -32, max: 32, unit: 'px' },
  { key: 'x', label: 'Offset X', min: -64, max: 64, unit: 'px' },
  { key: 'y', label: 'Offset Y', min: -64, max: 64, unit: 'px' }
];
export const STUDIO_BASE_SHADES: Readonly<Partial<Record<StudioColorToken, readonly [number, number]>>> = {
  '--bx-bg-canvas': [50, 1000],
  '--bx-bg-surface': [50, 1000],
  '--bx-bg-surface-alt': [50, 900],
  '--bx-bg-element': [100, 800],
  '--bx-bg-element-hover': [200, 700],
  '--bx-bg-element-active': [300, 600],
  '--bx-bg-neutral': [100, 900],
  '--bx-bg-neutral-hover': [50, 800],
  '--bx-bg-neutral-active': [200, 600],
  '--bx-text-heading': [900, 50],
  '--bx-text-primary': [700, 200],
  '--bx-text-secondary': [600, 400],
  '--bx-text-inverse': [100, 900],
  '--bx-border-subtle': [200, 900],
  '--bx-border-default': [300, 800],
  '--bx-border-strong': [400, 700],
  '--bx-scroll-bg': [100, 900]
};
export const STUDIO_COMMON_COLORS: readonly StudioColorToken[] = [
  '--bx-bg-canvas',
  '--bx-bg-surface',
  '--bx-text-primary',
  '--bx-text-secondary',
  '--bx-primary',
  '--bx-on-primary',
  '--bx-accent',
  '--bx-on-accent',
  '--bx-border-default',
  '--bx-text-success',
  '--bx-text-info',
  '--bx-text-warn',
  '--bx-text-danger'
];
