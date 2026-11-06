import { ISideNavConfig } from '@navigation/interfaces/iside-nav-config.interface';

import { NAVIGATION_VIEW_DEFAULTS } from './navigation-view.constants';

export const SIDE_NAV_DEFAULTS = {
  ...NAVIGATION_VIEW_DEFAULTS,
  position: 'fixed',
  width: '17rem',
  collapsedWidth: '4.5rem',
  collapsible: true,
  collapsed: false,
  mobileBreakpoint: 'lg',
  showMobileTrigger: true
} satisfies ISideNavConfig;
