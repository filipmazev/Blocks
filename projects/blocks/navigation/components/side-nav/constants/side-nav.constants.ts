import { IsActiveMatchOptions } from '@angular/router';
import { ISideNavConfig } from '../interfaces/iside-nav-config.interface';

export const SIDE_NAV_DEFAULTS = {
  side: 'left',
  position: 'fixed',
  width: '17rem',
  collapsedWidth: '4.5rem',
  searchable: true,
  showItemIcons: true,
  showSectionIcons: true,
  collapsible: true,
  collapsed: false,
  mobileBreakpoint: 'lg',
  showMobileTrigger: true,
  ariaLabel: 'Main navigation',
  searchPlaceholder: 'Search navigation…',
  searchLabel: 'Search navigation',
  clearSearchLabel: 'Clear search',
  emptyText: 'No matching pages.',
  openLabel: 'Open navigation',
  closeLabel: 'Close navigation',
  collapseLabel: 'Collapse navigation',
  expandLabel: 'Expand navigation',
  submenuLabel: 'Open submenu',
  resultLabel: 'Search result'
} satisfies ISideNavConfig;

export const SIDE_NAV_ACTIVE_OPTIONS: IsActiveMatchOptions = {
  paths: 'subset',
  queryParams: 'ignored',
  matrixParams: 'ignored',
  fragment: 'ignored'
};

export const SIDE_NAV_CURRENT_OPTIONS: IsActiveMatchOptions = { ...SIDE_NAV_ACTIVE_OPTIONS, paths: 'exact' };
