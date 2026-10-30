import { SideNavSide } from '../types/side-nav.types';

/** Resolved layout state for application shells and future top-bar integration. */
export interface ISideNavLayout {
  /** Physical panel edge. */
  side: SideNavSide;
  /** Space to reserve beside the application content; 0px for a mobile drawer. */
  offset: string;
  /** Whether the desktop panel is currently presented as an icon rail. */
  collapsed: boolean;
  /** Whether responsive drawer behavior is active. */
  mobile: boolean;
  /** Whether the mobile drawer is open. Desktop panels remain visible. */
  open: boolean;
}
