import { INavigationItemContext } from '../../shared/interfaces/inavigation-item-context.interface';

/** Side-nav item context; retains the public interface while sharing navigation presentation contracts. */
export interface ISideNavItemContext extends INavigationItemContext {
  /** True in the effective desktop icon rail; search or inline nested browsing can temporarily expand it. */
  collapsed: boolean;
}
