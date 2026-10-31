import { WindowDimensionsService } from '@filip.mazev/blocks/core';
import { INavigationViewConfig } from '../../shared/interfaces/inavigation-view-config.interface';

/** Application-wide or per-instance horizontal navigation. Instance settings override application settings, then library defaults. */
export interface ITopNavConfig extends Omit<INavigationViewConfig, 'side' | 'collapseLabel' | 'expandLabel'> {
  /** Optional leading item icons. Defaults to false in top navigation; icon-rail side navigation keeps its own defaults. */
  showItemIcons?: boolean;
  /** Optional section icons in the shared panel. Defaults to false. */
  showSectionIcons?: boolean;
  /** Optional positioning in the page. Defaults to sticky; inline is useful inside previews or application-owned headers. */
  position?: 'sticky' | 'inline';
  /** Optional sticky offset, as a CSS length. Defaults to 0px; ignored for inline presentation. */
  top?: string;
  /** Optional responsive breakpoint from Blocks dimensions. Defaults to lg. Content overflow also selects the compact menu. */
  compactBreakpoint?: keyof WindowDimensionsService['breakpoints'];
  /** Optional responsive override. True forces the compact menu; false bypasses the breakpoint, but content that does not fit still uses the compact menu. */
  compact?: boolean;
  /** Optional panel width as a CSS length. Defaults to 24rem; constrained to the available viewport. */
  panelWidth?: string;
  /** Optional panel maximum height as a CSS length. Defaults to 32rem; viewport bounds and available space take precedence. */
  panelMaxHeight?: string;
}
