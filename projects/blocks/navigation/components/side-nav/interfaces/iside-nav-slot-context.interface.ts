/** Context supplied to header and footer templates. */
export interface ISideNavSlotContext {
  /** True when presenting the desktop icon rail. Search temporarily expands the rail. */
  $implicit: boolean;
  /** Named equivalent of $implicit. */
  collapsed: boolean;
  /** True while using the mobile drawer. */
  mobile: boolean;
}
