import type { ResolvableText } from '@filip.mazev/blocks/core';
import type { IBreadcrumbTrailConfig } from '@filip.mazev/blocks/primitives';
import type { NavigationSide } from '@navigation/types/navigation-view.types';

import { WindowDimensionsService } from '@filip.mazev/blocks/core';

/** Resolved resolvedConfig state used by SideNav. */
export interface ISideNavResolvedConfigState {
  /** Nested-level and search-path overflow overrides after merging application and instance settings. Optional; shared breadcrumb defaults fill omitted values. */
  breadcrumbConfig?: IBreadcrumbTrailConfig;
  /** Resolved position value. */
  position: 'fixed' | 'inline';
  /** Resolved width value. */
  width: string;
  /** Resolved collapsed Width value. */
  collapsedWidth: string;
  /** Whether collapsible is enabled in the resolved state. */
  collapsible: boolean;
  /** Whether collapsed is enabled in the resolved state. */
  collapsed: boolean;
  /** Resolved persistence Key value. */
  persistenceKey?: string;
  /** Resolved mobile Breakpoint value. */
  mobileBreakpoint: keyof WindowDimensionsService['breakpoints'];
  /** Whether mobile is enabled in the resolved state. */
  mobile?: boolean;
  /** Whether show Mobile Trigger is enabled in the resolved state. */
  showMobileTrigger: boolean;
  /** Resolved side value. */
  side: NavigationSide;
  /** Whether searchable is enabled in the resolved state. */
  searchable: boolean;
  /** Whether show Item Icons is enabled in the resolved state. */
  showItemIcons: boolean;
  /** Whether show Section Icons is enabled in the resolved state. */
  showSectionIcons: boolean;
  /** Whether show Search Guide is enabled in the resolved state. */
  showSearchGuide?: boolean;
  /** Resolved back Label value. */
  backLabel: ResolvableText;
  /** Resolved path Label value. */
  pathLabel: ResolvableText;
  /** Resolved aria Label value. */
  ariaLabel: ResolvableText;
  /** Resolved search Placeholder value. */
  searchPlaceholder: ResolvableText;
  /** Resolved search Label value. */
  searchLabel: ResolvableText;
  /** Resolved clear Search Label value. */
  clearSearchLabel: ResolvableText;
  /** Resolved empty Text value. */
  emptyText: ResolvableText;
  /** Resolved open Label value. */
  openLabel: ResolvableText;
  /** Resolved close Label value. */
  closeLabel: ResolvableText;
  /** Resolved collapse Label value. */
  collapseLabel: ResolvableText;
  /** Resolved expand Label value. */
  expandLabel: ResolvableText;
  /** Resolved submenu Label value. */
  submenuLabel: ResolvableText;
  /** Resolved result Label value. */
  resultLabel: ResolvableText;
}
