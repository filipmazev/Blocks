import { IsActiveMatchOptions } from '@angular/router';
import { INavigationViewConfig } from '../interfaces/inavigation-view-config.interface';

export const NAVIGATION_VIEW_DEFAULTS = {
  side: 'left',
  searchable: true,
  showItemIcons: true,
  showSectionIcons: true,
  backLabel: 'Back',
  pathLabel: 'Navigation path',
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
} satisfies INavigationViewConfig;

export const NAVIGATION_ACTIVE_OPTIONS: IsActiveMatchOptions = {
  paths: 'subset',
  queryParams: 'ignored',
  matrixParams: 'ignored',
  fragment: 'ignored'
};

export const NAVIGATION_CURRENT_OPTIONS: IsActiveMatchOptions = { ...NAVIGATION_ACTIVE_OPTIONS, paths: 'exact' };
