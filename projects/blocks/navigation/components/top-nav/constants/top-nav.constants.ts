import { NAVIGATION_VIEW_DEFAULTS } from '../../shared/constants/navigation-view.constants';
import { ITopNavConfig } from '../interfaces/itop-nav-config.interface';

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
