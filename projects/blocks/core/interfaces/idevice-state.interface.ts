import { DesktopOS } from '@core/enums/desktop-os.enum';
import { MobileOS } from '@core/enums/mobile-os.enum';

/**
 * Describes the device state contract.
 */
export interface IDeviceState {
  /** Whether the current device is classified as a desktop. */
  isDesktop: boolean;
  /** Detected desktop operating system, or undefined when the device is not a recognized desktop. */
  desktopOS: DesktopOS | undefined;
  /** Whether the detected desktop operating system is Windows. */
  isWindowsDesktop: boolean;
  /** Whether the detected desktop operating system belongs to the Linux or Unix family. */
  isLinuxOrUnixDesktop: boolean;

  /** Whether the current device is classified as mobile. */
  isMobile: boolean;
  /** Detected mobile operating system, or undefined when it is not recognized. */
  mobileOS: MobileOS | undefined;
  /** Whether the detected mobile operating system is Android. */
  isAndroidDevice: boolean;
  /** Whether the detected mobile device uses an Apple operating system. */
  isAppleDevice: boolean;
  /** Whether the device is mobile but its operating system is not recognized. */
  isUnknownMobileDevice: boolean;

  /** Whether the current device is classified as a tablet. */
  isTablet: boolean;
  /** Returns whether the current viewport is wider than it is tall. */
  isLandscapeOrientation: () => boolean;
  /** Returns whether the current viewport is taller than it is wide. */
  isPortraitOrientation: () => boolean;
}
