import { IconData } from '@filip.mazev/blocks/icons';
import { NavText } from '../types/navigation.types';
import { INavTag } from './inav-tag.interface';

/** Route UI metadata. TSection restricts section IDs when used with defineNavigation. */
export interface INavMeta<TSection extends string = string> {
  /** Optional translated menu label, resolved again when the language changes. */
  label?: NavText;
  /** Optional breadcrumb label; defaults to label. */
  breadcrumb?: NavText;

  /** Optional leading icon. */
  icon?: IconData;
  /** Optional trailing icon, independent of the submenu disclosure. */
  endIcon?: IconData;
  /** Optional noninteractive Blocks tags. Defaults to no tags. */
  tags?: readonly INavTag[];
  /** Optional additional translated terms used by side-nav search. */
  keywords?: readonly NavText[];
  /** Optional disabled state. Prevents navigation and opening descendants. Defaults to false. */
  disabled?: boolean;
  /** Optional breadcrumb inclusion. Defaults to the section setting, then true. */
  showInBreadcrumbs?: boolean;
  /** Optional section ID. Nested entries inherit their parent's section. */
  section?: TSection;
  /** Whether to render this route in menus. Defaults to true; false promotes visible descendants. */
  menu?: boolean;
  /** Hides this route and its descendants from menus. Defaults to false. */
  hidden?: boolean;
  /** Optional ascending display order; unordered items sort by label. */
  order?: number;
  /** Marks the application's home route. Defaults to false. */
  root?: boolean;
  /** Optional reactive visibility predicate. False hides this route and its descendants. */
  visible?: () => boolean;
}
