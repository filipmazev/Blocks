import { BREAKPOINTS } from '@core/constants/window-dimension.constants';
import { BxCustomValidators } from '@core/interfaces/ibx-custom-validators.interface';

export type DeviceTheme = 'light' | 'dark';
export type DeviceOrientationType = 'portrait-primary' | 'landscape-primary' | 'portrait-secondary' | 'landscape-secondary';

export type Strict<T, Expected> = T & {
  [K in keyof T]: K extends keyof Expected ? Expected[K] : never;
};

export type ResolvableText = string | { key: string };

export type BxPlacement = 'top' | 'bottom' | 'left' | 'right';

// Preserve existing deep imports while shortcut contracts live in dedicated files.
export { isOSShortcut } from '@core/helpers/shortcut.helpers';
export type { OSShortcut, ResolvableShortcut, ShortcutKey } from './shortcut.types';

export type DefaultValidatorKey = 'required' | 'minlength' | 'maxlength' | 'email' | 'pattern' | 'min' | 'max';

export type ValidatorKey = DefaultValidatorKey | keyof BxCustomValidators;

export type BreakpointKey = keyof typeof BREAKPOINTS;
export type BreakpointValue = (typeof BREAKPOINTS)[BreakpointKey];
