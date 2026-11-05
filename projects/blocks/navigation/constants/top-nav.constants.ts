import { ITopNavConfig } from '@navigation/interfaces/itop-nav-config.interface';

import { NAVIGATION_VIEW_DEFAULTS } from './navigation-view.constants';

export const TOP_NAV_DEFAULTS = {
  ...NAVIGATION_VIEW_DEFAULTS,
  position: 'sticky',
  top: '0px',
  compactBreakpoint: 'lg',
  panelWidth: '24rem',
  panelMaxHeight: '32rem',
  showItemIcons: false,
  showSectionIcons: false
} satisfies ITopNavConfig;
