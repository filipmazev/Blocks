import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

import { DesktopOS } from '@core/enums/desktop-os.enum';
import { MobileOS } from '@core/enums/mobile-os.enum';
import { IDeviceState } from '@core/interfaces/idevice-state.interface';
import { DeviceOrientationType } from '@core/types/core.types';

@Injectable({
  providedIn: 'root'
})
export class DeviceTypeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly isBrowser: boolean = isPlatformBrowser(this.platformId);

  private screenOrientation: DeviceOrientationType = 'portrait-primary';

  constructor() {
    if (this.isBrowser) {
      const win = this.document.defaultView;
      const screenObj = win?.screen as (Screen & { mozOrientation?: string; msOrientation?: string }) | undefined;

      const orientation = screenObj?.orientation?.type ?? screenObj?.mozOrientation ?? screenObj?.msOrientation;

      this.screenOrientation =
        this.toDeviceOrientation(orientation) ?? (win?.matchMedia('(orientation: portrait)').matches ? 'portrait-primary' : 'landscape-primary');

      if (screenObj?.orientation) {
        screenObj.orientation.addEventListener('change', (ev: Event) => {
          const eventOrientation = (ev.target as ScreenOrientation | null)?.type;
          const supportedOrientation = this.toDeviceOrientation(eventOrientation);

          if (supportedOrientation) this.screenOrientation = supportedOrientation;
        });
      }
    }
  }

  /** Return whether the tracked screen orientation is landscape. */
  public isLandscapeOrientation(): boolean {
    return ['landscape-primary', 'landscape-secondary'].includes(this.screenOrientation);
  }

  /** Return whether the tracked screen orientation is portrait. */
  public isPortraitOrientation(): boolean {
    return ['portrait-primary', 'portrait-secondary'].includes(this.screenOrientation);
  }

  /** Return the detected device/OS categories and accessors for the latest tracked screen orientation. */
  public getDeviceState(): IDeviceState {
    const isMobile = this.isMobileDevice();
    const isTablet = this.isTabletDevice();
    const isDesktop = this.isDesktopDevice;

    const mobileOS = this.getMobileOS();
    const desktopOS = this.getDesktopOS();
    const deviceOS = mobileOS ?? desktopOS;

    return {
      isDesktop,
      desktopOS,
      isWindowsDesktop: deviceOS === DesktopOS.Windows,
      isLinuxOrUnixDesktop: deviceOS === DesktopOS.Linux || deviceOS === DesktopOS.Unix,
      isMobile,
      mobileOS,
      isAndroidDevice: deviceOS === MobileOS.Android,
      isAppleDevice: deviceOS === MobileOS.iOS || deviceOS === DesktopOS.MacOS,
      isUnknownMobileDevice: deviceOS === MobileOS.Unknown,
      isTablet,
      isLandscapeOrientation: () => this.isLandscapeOrientation(),
      isPortraitOrientation: () => this.isPortraitOrientation()
    };
  }

  //#region Helpers

  private get userAgent(): string {
    if (!this.isBrowser) return '';

    const win = this.document.defaultView as Window & { opera?: string };

    return win?.navigator?.userAgent || win?.navigator?.vendor || win?.opera || '';
  }

  private toDeviceOrientation(value: string | undefined): DeviceOrientationType | undefined {
    return value === 'portrait-primary' || value === 'landscape-primary' || value === 'portrait-secondary' || value === 'landscape-secondary'
      ? value
      : undefined;
  }

  private get isDesktopDevice(): boolean {
    return !this.isMobileDevice() && !this.isTabletDevice();
  }

  private isMobileDevice(): boolean {
    const regexs = [/(Android)(.+)(Mobile)/i, /BlackBerry/i, /iPhone|iPod/i, /Opera Mini/i, /IEMobile/i];

    return regexs.some((regex) => regex.test(this.userAgent));
  }

  private isTabletDevice(): boolean {
    const regex = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i;
    const navigator = this.document.defaultView?.navigator;

    // iPadOS can request desktop sites and identify as a Mac while retaining touch hardware.
    return regex.test(this.userAgent) || (navigator?.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  private getMobileOS(): MobileOS | undefined {
    if (this.isMobileDevice() || this.isTabletDevice()) {
      const ua = this.userAgent;

      if (/windows phone/i.test(ua)) return MobileOS.WindowsPhone;

      if (/android/i.test(ua)) return MobileOS.Android;

      const view = this.document.defaultView as (Window & { MSStream?: unknown }) | null;

      if ((/iPad|iPhone|iPod/.test(ua) || (ua.includes('Mac') && this.isTabletDevice())) && !view?.MSStream) return MobileOS.iOS;

      return this.isMobileDevice() ? MobileOS.Unknown : undefined;
    }

    return undefined;
  }

  private getDesktopOS(): DesktopOS | undefined {
    if (!this.isMobileDevice() && !this.getMobileOS()) {
      const ua = this.userAgent;

      if (ua.includes('Win')) return DesktopOS.Windows;

      if (ua.includes('Mac')) return DesktopOS.MacOS;

      if (ua.includes('X11')) return DesktopOS.Unix;

      if (ua.includes('Linux')) return DesktopOS.Linux;

      return DesktopOS.Unknown;
    }

    return undefined;
  }

  //#endregion
}
