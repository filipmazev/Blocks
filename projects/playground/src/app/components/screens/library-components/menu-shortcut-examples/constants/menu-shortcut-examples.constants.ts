import { ResolvableShortcut, ShortcutPlatform } from '@filip.mazev/blocks/core';

export const MENU_OPEN_SHORTCUT: ResolvableShortcut = ['mod', 'shift', 'k'];
export const MENU_SEQUENCE_PREFIX: ResolvableShortcut = ['mod', 'k'];
export const MENU_VIEW_SHORTCUT: ResolvableShortcut = ['mod', 'shift', 'v'];
export const MENU_DUPLICATE_SHORTCUT: ResolvableShortcut = {
  mac: ['command', 'shift', 'd'],
  windows: ['ctrl', 'shift', 'd'],
  linux: ['alt', 'shift', 'd'],
  ios: ['command', 'shift', 'd'],
  android: ['ctrl', 'shift', 'd'],
  default: ['mod', 'alt', 'd']
};
export const MENU_SHORTCUT_PLATFORMS: readonly ShortcutPlatform[] = ['mac', 'windows', 'linux', 'ios', 'android', 'default'];
