import type { ResolvableText } from '@filip.mazev/blocks/core';

import { WindowDimensionsService } from '@filip.mazev/blocks/core';

/** Resolved resolvedConfig state used by TopNav. */
export interface ITopNavResolvedConfigState {
  /** Whether show Item Icons is enabled in the resolved state. */
  showItemIcons: boolean;
  /** Whether show Section Icons is enabled in the resolved state. */
  showSectionIcons: boolean;
  /** Resolved position value. */
  position: 'sticky' | 'inline';
  /** Resolved top value. */
  top: string;
  /** Resolved compact Breakpoint value. */
  compactBreakpoint: keyof WindowDimensionsService['breakpoints'];
  /** Whether compact is enabled in the resolved state. */
  compact?: boolean;
  /** Resolved panel Width value. */
  panelWidth: string;
  /** Resolved panel Max Height value. */
  panelMaxHeight: string;
  /** Whether searchable is enabled in the resolved state. */
  searchable: boolean;
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
  /** Resolved submenu Label value. */
  submenuLabel: ResolvableText;
  /** Resolved result Label value. */
  resultLabel: ResolvableText;
  /** Resolved side value. */
  side: 'left';
  /** Resolved collapse Label value. */
  collapseLabel: string;
  /** Resolved expand Label value. */
  expandLabel: string;
}
