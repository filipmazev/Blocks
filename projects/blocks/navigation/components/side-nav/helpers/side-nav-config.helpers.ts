import { ISideNavConfig } from '../interfaces/iside-nav-config.interface';

/** Ignore absent properties while preserving meaningful false, empty text and zero-valued CSS lengths. */
export function definedSideNavConfig(config: ISideNavConfig | undefined): ISideNavConfig {
  return Object.fromEntries(Object.entries(config ?? {}).filter(([, value]) => value !== undefined));
}
