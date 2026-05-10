import { Injectable, inject } from '@angular/core';
import { DeviceTypeService } from './device-type.service';
import { ResolvableShortcut, ShortcutKey, isOSShortcut } from '../types/core.types';

@Injectable({
  providedIn: 'root'
})
export class BxShortcutService {
  private readonly deviceTypeService = inject(DeviceTypeService);

  public resolve(shortcut: ResolvableShortcut | undefined): string[] | undefined {
    if (!shortcut) return undefined;

    let resolvedKey: ShortcutKey;

    if (isOSShortcut(shortcut)) {
      const state = this.deviceTypeService.getDeviceState();

      if (state.isAppleDevice && shortcut.mac) {
        resolvedKey = shortcut.mac;
      } else if (state.isWindowsDesktop && shortcut.windows) {
        resolvedKey = shortcut.windows;
      } else if (state.isLinuxOrUnixDesktop && shortcut.linux) {
        resolvedKey = shortcut.linux;
      } else {
        resolvedKey = shortcut.default;
      }
    } else {
      resolvedKey = shortcut;
    }

    return Array.isArray(resolvedKey) ? resolvedKey : [resolvedKey];
  }
}