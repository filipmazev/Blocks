import { ResolvableText } from '@filip.mazev/blocks/core';
import { NavigationSide } from '../types/navigation-view.types';

/** Text, icons, and item presentation shared by Blocks navigation views. All properties are optional. */
export interface INavigationViewConfig {
  /** Physical side for a vertical navigation surface. Defaults to left; horizontal navigation resolves its own content direction. */
  side?: NavigationSide;
  /** Optional search field. Defaults to true; searches all visible loaded descendants. */
  searchable?: boolean;
  /** Show leading icons in expanded item rows. Defaults to true; compact rows always retain an icon. */
  showItemIcons?: boolean;
  /** Show icons beside expanded section headings. Defaults to true; compact section triggers always retain an icon. */
  showSectionIcons?: boolean;
  /** @deprecated Search guides have been removed. Retained for compatibility; this option has no effect. */
  showSearchGuide?: boolean;
  /** Optional translated back action for nested navigation. Defaults to Back. */
  backLabel?: ResolvableText;
  /** Optional accessible label for a nested item's parent path. Defaults to Navigation path. */
  pathLabel?: ResolvableText;
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
  /** Optional search result announcement prefix. Defaults to Search result; the best matching label is appended. */
  resultLabel?: ResolvableText;
}
