import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DesktopOS } from '../enums/desktop-os.enum';
import { MobileOS } from '../enums/mobile-os.enum';
import { IDeviceState } from '../interfaces/idevice-state.interface';
import { DeviceOrientationType } from '../types/core.types';

@Injectable({
  providedIn: 'root'
})
export class DeviceTypeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private screenOrientation: DeviceOrientationType = 'portrait-primary';

  constructor() {
    if (this.isBrowser) {
      const win = this.document.defaultView;
      const screenObj = win?.screen as any;
      
      this.screenOrientation = 
        (screenObj?.orientation || {}).type ?? 
        screenObj?.mozOrientation ?? 
        screenObj?.msOrientation ?? 
        (!screenObj?.orientation && win?.matchMedia('(orientation: portrait)').matches ? 'portrait-primary' : 'landscape-primary');

      if (screenObj?.orientation) {
        screenObj.orientation.addEventListener('change', (ev: Event) => {
          const orientation = ev.target as ScreenOrientation | null;
          if (orientation?.type) {
            this.screenOrientation = orientation.type;
          }
        });
      }
    }
  }

  private get userAgent(): string {
    if (!this.isBrowser) return '';
    const win = this.document.defaultView as Window & { opera?: string };
    return win?.navigator?.userAgent || win?.navigator?.vendor || win?.opera || '';
  }

  private get isDesktopDevice(): boolean {
    return !this.isMobileDevice() && !this.isTabletDevice();
  }

  public isLandscapeOrientation(): boolean {
    return ['landscape-primary', 'landscape-secondary'].includes(this.screenOrientation);
  }

  public isPortraitOrientation(): boolean {
    return ['portrait-primary', 'portrait-secondary'].includes(this.screenOrientation);
  }

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

  private isMobileDevice(): boolean {
    const regexs = [/(Android)(.+)(Mobile)/i, /BlackBerry/i, /iPhone|iPod/i, /Opera Mini/i, /IEMobile/i];
    return regexs.some((regex) => regex.test(this.userAgent));
  }

  private isTabletDevice(): boolean {
    const regex = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i;
    return regex.test(this.userAgent);
  }

  private getMobileOS(): MobileOS | undefined {
    if (this.isMobileDevice()) {
      const ua = this.userAgent;
      if (/windows phone/i.test(ua)) return MobileOS.WindowsPhone;
      if (/android/i.test(ua)) return MobileOS.Android;
      if (/iPad|iPhone|iPod/.test(ua) && !(this.document.defaultView as any)?.MSStream) return MobileOS.iOS;

      return MobileOS.Unknown;
    }
    return undefined;
  }

  private getDesktopOS(): DesktopOS | undefined {
    if (this.isDesktopDevice) {
      const ua = this.userAgent;
      if (ua.includes('Win')) return DesktopOS.Windows;
      if (ua.includes('Mac')) return DesktopOS.MacOS;
      if (ua.includes('X11')) return DesktopOS.Unix;
      if (ua.includes('Linux')) return DesktopOS.Linux;

      return DesktopOS.Unknown;
    }
    return undefined;
  }
}