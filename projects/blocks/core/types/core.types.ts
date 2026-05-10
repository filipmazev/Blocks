import { BxCustomValidators } from "../interfaces/ibx-custom-validators.interface";

export type DeviceTheme = 'light' | 'dark';
export type DeviceOrientationType = 'portrait-primary' | 'landscape-primary' | 'portrait-secondary' | 'landscape-secondary';

export type Strict<T, Expected> = T & {
  [K in keyof T]: K extends keyof Expected ? Expected[K] : never;
};

export type ResolvableText = string | { key: string };

export type BxPlacement = 'top' | 'bottom' | 'left' | 'right';

export type ShortcutKey = string | string[];

export interface OSShortcut {
  mac?: ShortcutKey;
  windows?: ShortcutKey;
  linux?: ShortcutKey;
  default: ShortcutKey;
}

export type ResolvableShortcut = ShortcutKey | OSShortcut;

export function isOSShortcut(val: unknown): val is OSShortcut {
  return (
    typeof val === 'object' && 
    val !== null && 
    !Array.isArray(val) && 
    'default' in val
  );
}

export type DefaultValidatorKey = 'required' | 'minlength' | 'maxlength' | 'email' | 'pattern' | 'min' | 'max';

export type ValidatorKey = DefaultValidatorKey | keyof BxCustomValidators;