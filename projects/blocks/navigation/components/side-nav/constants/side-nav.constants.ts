import { ISideNavConfig } from '../interfaces/iside-nav-config.interface';
import { NAVIGATION_VIEW_DEFAULTS } from '../../shared/constants/navigation-view.constants';

export const SIDE_NAV_DEFAULTS = {
  ...NAVIGATION_VIEW_DEFAULTS,
  position: 'fixed',
  width: '17rem',
  collapsedWidth: '4.5rem',
  collapsible: true,
  collapsed: false,
  mobileBreakpoint: 'lg',
  submenuBreakpoint: 'xl',
  submenuMode: 'auto',
  showMobileTrigger: true
} satisfies ISideNavConfig;
