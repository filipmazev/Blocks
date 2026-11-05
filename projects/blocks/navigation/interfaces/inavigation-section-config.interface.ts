import { ResolvableText } from '@filip.mazev/blocks/core';
import { IIconData } from '@filip.mazev/blocks/icons';

/** Shared configuration for a named navigation section. */
export interface INavigationSectionConfig {
  /** Required unique ID referenced by withInAppNavigation metadata. */
  id: string;
  /** Optional translated heading. Defaults to id. */
  title?: ResolvableText;
  /** Optional ascending section order. Defaults to declaration order. */
  order?: number;
  /** Optional section icon; the side-nav falls back to folder. */
  icon?: IIconData;
  /** Whether users may collapse the section. Defaults to false. */
  collapsible?: boolean;
  /** Initial section state when no saved state exists. Defaults to false. */
  collapsed?: boolean;
  /** Default breadcrumb inclusion for this section's routes. Defaults to true. */
  showInBreadcrumbs?: boolean;
}
