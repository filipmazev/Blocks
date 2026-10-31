import { WindowDimensionsService } from '@filip.mazev/blocks/core';
import { INavigationViewConfig } from '../../shared/interfaces/inavigation-view-config.interface';
import { SideNavSubmenuMode } from '../types/side-nav.types';

/** Shared or per-instance side-nav configuration. Instance values override application defaults. */
export interface ISideNavConfig extends INavigationViewConfig {
  /** Fixed application rail or inline panel. Inline mobile drawers fill their positioned containing shell without locking page scroll. Defaults to fixed. */
  position?: 'fixed' | 'inline';
  /** Expanded width, as a CSS length. Defaults to 17rem; constrained to the viewport. */
  width?: string;
  /** Icon rail width, as a CSS length. Defaults to 4.5rem. */
  collapsedWidth?: string;
  /** Show the desktop collapse action. Defaults to true. */
  collapsible?: boolean;
  /** Initial desktop collapse state. Defaults to false; saved state wins unless the model is bound. */
  collapsed?: boolean;
  /** Optional localStorage key. Persists panel and section states; mobile openness and search are never saved. */
  persistenceKey?: string;
  /** Automatic mobile breakpoint from Blocks dimensions. Defaults to lg. */
  mobileBreakpoint?: keyof WindowDimensionsService['breakpoints'];
  /** Submenu layout breakpoint from Blocks dimensions. Defaults to xl; automatic mode uses inline levels at or below it. */
  submenuBreakpoint?: keyof WindowDimensionsService['breakpoints'];
  /** Optional submenu presentation. Defaults to auto, measuring the viewport and an inline panel's containing layout. Mobile always uses inline levels. */
  submenuMode?: SideNavSubmenuMode;
  /** Optional mobile override for embedded layouts and demos. Omit for automatic viewport detection. */
  mobile?: boolean;
  /** Show the built-in mobile hamburger. Defaults to true; false requires an application trigger calling open/toggle. */
  showMobileTrigger?: boolean;
}
