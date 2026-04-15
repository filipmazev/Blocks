import { DesktopOS } from '../enums/desktop-os.enum';
import { MobileOS } from '../enums/mobile-os.enum';

export type DeviceTheme = 'light' | 'dark';
export type DeviceOS = DesktopOS | MobileOS;
export type DeviceOrientationType = 'portrait-primary' | 'landscape-primary' | 'portrait-secondary' | 'landscape-secondary';

export type OperaCapableWindow = Window & { opera?: string };

export type LegacyScreenOrientation = Screen & {
  mozOrientation?: DeviceOrientationType;
  msOrientation?: DeviceOrientationType;
};

export type MSStreamWindow = Window & {
  MSStream?: unknown;
};
