import { ISideNavConfig } from '../interfaces/iside-nav-config.interface';
import { INavigationItem } from '../../../interfaces/inavigation-item.interface';

export type SideNavSide = 'left' | 'right';
/** Short public alias for the fully documented configuration interface. */
export type SideNavConfig = ISideNavConfig;
/** NavigationService's resolved route contract. Supply route metadata through withNav. */
export type NavItem = INavigationItem;
