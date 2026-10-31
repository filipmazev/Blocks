import { Injectable, inject } from '@angular/core';
import { DeviceTypeService } from './device-type.service';
import { MobileOS } from '../enums/mobile-os.enum';
import { ResolvableShortcut, ShortcutPlatform } from '../types/shortcut.types';
import { IShortcutMatchOptions } from '../interfaces/ishortcut-match-options.interface';
import { isOSShortcut, normalizeShortcutKey } from '../helpers/shortcut.helpers';
import { SHORTCUT_APPLE_LABELS, SHORTCUT_COMMON_LABELS, SHORTCUT_MODIFIERS } from '../constants/shortcut.constants';

/** Shares platform selection and key normalization between shortcut hints and application-owned keyboard handlers. */
@Injectable({ providedIn: 'root' })
export class BxShortcutService {
  private readonly deviceTypeService = inject(DeviceTypeService);

  /** Current platform; SSR/unknown platforms use default and resolve mod to Control. */
  public platform(): ShortcutPlatform {
    const state = this.deviceTypeService.getDeviceState();

    if (state.mobileOS === MobileOS.iOS) return 'ios';
    if (state.isAppleDevice) return 'mac';
    if (state.isAndroidDevice) return 'android';
    if (state.isWindowsDesktop) return 'windows';
    if (state.isLinuxOrUnixDesktop) return 'linux';

    return 'default';
  }

  /** Display tokens; strings remain one token, arrays describe a combination. Unknown labels are preserved. */
  public resolve(shortcut: ResolvableShortcut | undefined, platform = this.platform()): string[] | undefined {
    const keys = this.keys(shortcut, platform);
    const apple = platform === 'mac' || platform === 'ios';

    return keys?.map((key) => {
      if (apple && Object.hasOwn(SHORTCUT_APPLE_LABELS, key)) return SHORTCUT_APPLE_LABELS[key];
      if (key === 'Meta' && platform === 'windows') return 'Win';
      if (key === 'Meta' && platform === 'linux') return 'Super';
      if (Object.hasOwn(SHORTCUT_COMMON_LABELS, key)) return SHORTCUT_COMMON_LABELS[key];

      return key.length === 1 ? key.toUpperCase() : key;
    });
  }

  /** WAI-ARIA key names for a valid combination, or null for a display-only/custom hint. Does not register a binding. */
  public toAriaKeyshortcuts(shortcut: ResolvableShortcut | undefined, platform = this.platform()): string | null {
    const keys = this.keys(shortcut, platform);

    if (!keys || !this.isCombination(keys)) return null;

    const ordered = [...keys.filter((key) => SHORTCUT_MODIFIERS.includes(key)), ...keys.filter((key) => !SHORTCUT_MODIFIERS.includes(key))];

    return ordered.map((key) => (key === ' ' ? 'Space' : key === '+' ? 'plus' : key.length === 1 ? key.toUpperCase() : key)).join('+');
  }

  /** Match one combination exactly, ignoring handled, composing, AltGraph and (by default) repeat/editable events. */
  public matches(event: KeyboardEvent, shortcut: ResolvableShortcut | undefined, options: IShortcutMatchOptions = {}): boolean {
    if (event.defaultPrevented || event.isComposing || event.getModifierState('AltGraph') || (event.repeat && !options.allowRepeat)) return false;

    const target = event.composedPath()[0] ?? event.target;
    const element = target && 'nodeType' in target && target.nodeType === 1 ? (target as Element) : null;

    if (!options.allowInEditable && element?.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="textbox"]'))
      return false;

    const platform = options.platform ?? this.platform();
    const keys = this.keys(shortcut, platform);

    if (!keys || !this.isCombination(keys)) return false;
    if (event.ctrlKey !== keys.includes('Control') || event.metaKey !== keys.includes('Meta')) return false;
    if (event.altKey !== keys.includes('Alt') || event.shiftKey !== keys.includes('Shift')) return false;

    const key = keys.find((entry) => !SHORTCUT_MODIFIERS.includes(entry));

    return key?.toLowerCase() === normalizeShortcutKey(event.key, platform === 'mac' || platform === 'ios').toLowerCase();
  }

  //#region Helpers
  private keys(shortcut: ResolvableShortcut | undefined, platform: ShortcutPlatform): string[] | undefined {
    if (shortcut === undefined) return undefined;

    const selected = isOSShortcut(shortcut)
      ? ((platform === 'ios' ? (shortcut.ios ?? shortcut.mac) : platform === 'default' ? undefined : shortcut[platform]) ?? shortcut.default)
      : shortcut;
    const apple = platform === 'mac' || platform === 'ios';
    const keys = (typeof selected === 'string' ? [selected] : selected).map((key) => normalizeShortcutKey(key, apple)).filter(Boolean);

    return keys.length ? keys : undefined;
  }

  private isCombination(keys: string[]): boolean {
    const ordinary = keys.filter((key) => !SHORTCUT_MODIFIERS.includes(key));

    // Custom labels and arrays with several ordinary keys remain hints, never a misleading keyboard binding.
    return (
      new Set(keys).size === keys.length &&
      ordinary.length === 1 &&
      (ordinary[0].length === 1 ||
        /^(?:Arrow(?:Up|Down|Left|Right)|Escape|Enter|Tab|Backspace|Delete|Home|End|PageUp|PageDown|Insert|F(?:[1-9]|1[0-9]|2[0-4]))$/.test(ordinary[0]))
    );
  }
  //#endregion
}
