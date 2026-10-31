import { BxCustomValidators } from '../interfaces/ibx-custom-validators.interface';

export type DeviceTheme = 'light' | 'dark';
export type DeviceOrientationType = 'portrait-primary' | 'landscape-primary' | 'portrait-secondary' | 'landscape-secondary';

export type Strict<T, Expected> = T & {
  [K in keyof T]: K extends keyof Expected ? Expected[K] : never;
};

export type ResolvableText = string | { key: string };

export type BxPlacement = 'top' | 'bottom' | 'left' | 'right';

// Preserve existing deep imports while shortcut contracts live in dedicated files.
export type { ShortcutKey, OSShortcut, ResolvableShortcut } from './shortcut.types';
export { isOSShortcut } from '../helpers/shortcut.helpers';

export type DefaultValidatorKey = 'required' | 'minlength' | 'maxlength' | 'email' | 'pattern' | 'min' | 'max';

export type ValidatorKey = DefaultValidatorKey | keyof BxCustomValidators;
