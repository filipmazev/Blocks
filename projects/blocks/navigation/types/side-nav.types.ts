import { INavigationItem } from '@navigation/interfaces/inavigation-item.interface';
import { ISideNavConfig } from '@navigation/interfaces/iside-nav-config.interface';

export type SideNavSide = 'left' | 'right';
/** Auto uses one adjacent panel above the breakpoint; inline always browses inside the navigation. */
export type SideNavSubmenuMode = 'auto' | 'inline' | 'flyout';
/** Short public alias for the fully documented configuration interface. */
export type SideNavConfig = ISideNavConfig;
/** NavigationService's resolved route contract. Supply route metadata through withInAppNavigation. */
export type NavItem = INavigationItem;
