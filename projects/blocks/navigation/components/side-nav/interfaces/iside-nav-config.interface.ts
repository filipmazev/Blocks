import { ResolvableText, WindowDimensionsService } from '@filip.mazev/blocks/core';
import { SideNavSide } from '../types/side-nav.types';

/** Shared or per-instance side-nav configuration. Instance values override application defaults. */
export interface ISideNavConfig {
  /** Physical viewport side. Defaults to left, including in RTL. */
  side?: SideNavSide;
  /** Fixed application rail or inline panel. Inline mobile drawers fill their positioned containing shell without locking page scroll. Defaults to fixed. */
  position?: 'fixed' | 'inline';
  /** Expanded width, as a CSS length. Defaults to 17rem; constrained to the viewport. */
  width?: string;
  /** Icon rail width, as a CSS length. Defaults to 4.5rem. */
  collapsedWidth?: string;
  /** Optional search field. Defaults to true; searches all visible loaded descendants. */
  searchable?: boolean;
  /** Show leading icons in expanded item rows. Defaults to true; compact rows always retain an icon. */
  showItemIcons?: boolean;
  /** Show icons beside expanded section headings. Defaults to true; compact section triggers always retain an icon. */
  showSectionIcons?: boolean;
  /** Show the desktop collapse action. Defaults to true. */
  collapsible?: boolean;
  /** Initial desktop collapse state. Defaults to false; saved state wins unless the model is bound. */
  collapsed?: boolean;
  /** Optional localStorage key. Persists panel and section states; mobile openness and search are never saved. */
  persistenceKey?: string;
  /** Automatic mobile breakpoint from Blocks dimensions. Defaults to lg. */
  mobileBreakpoint?: keyof WindowDimensionsService['breakpoints'];
  /** Optional mobile override for embedded layouts and demos. Omit for automatic viewport detection. */
  mobile?: boolean;
  /** Show the built-in mobile hamburger. Defaults to true; false requires an application trigger calling open/toggle. */
  showMobileTrigger?: boolean;
  /** Optional accessible navigation name. Defaults to Main navigation. */
  ariaLabel?: ResolvableText;
  /** Optional search placeholder. Defaults to Search navigation…. */
  searchPlaceholder?: ResolvableText;
  /** Optional accessible search name. Defaults to Search navigation. */
  searchLabel?: ResolvableText;
  /** Optional accessible clear-search action. Defaults to Clear search. */
  clearSearchLabel?: ResolvableText;
  /** Optional no-results message. Defaults to No matching pages. */
  emptyText?: ResolvableText;
  /** Optional mobile open action name. Defaults to Open navigation. */
  openLabel?: ResolvableText;
  /** Optional mobile close/backdrop action name. Defaults to Close navigation. */
  closeLabel?: ResolvableText;
  /** Optional collapse action name. Defaults to Collapse navigation. */
  collapseLabel?: ResolvableText;
  /** Optional expand action name. Defaults to Expand navigation. */
  expandLabel?: ResolvableText;
  /** Optional submenu action prefix. Defaults to Open submenu; the item label is appended. */
  submenuLabel?: ResolvableText;
  /** Optional search target announcement prefix. Defaults to Search result; the target label is appended. */
  resultLabel?: ResolvableText;
}
