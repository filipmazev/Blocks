import { DesktopOS } from '../enums/desktop-os.enum';
import { MobileOS } from '../enums/mobile-os.enum';

export interface DeviceState {
  isDesktop: boolean;
  desktopOS: DesktopOS | undefined;
  isWindowsDesktop: boolean;
  isLinuxOrUnixDesktop: boolean;

  isMobile: boolean;
  mobileOS: MobileOS | undefined;
  isAndroidDevice: boolean;
  isAppleDevice: boolean;
  isUnknownMobileDevice: boolean;

  isTablet: boolean;
  isLandscapeOrientation: () => boolean;
  isPortraitOrientation: () => boolean;
}
