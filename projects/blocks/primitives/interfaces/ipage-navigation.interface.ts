import { ResolvableText } from '@filip.mazev/blocks/core';

import { IPageBreadcrumb } from './ipage-breadcrumb.interface';

/** Reactive navigation metadata consumed by page layouts without requiring the navigation entry point. */
export interface IPageNavigation {
  /** Optional section label above the title. Defaults to no label when unavailable. */
  sectionTitle?: ResolvableText;
  /** Optional page title. Defaults to no heading when unavailable. */
  pageTitle?: ResolvableText;
  /** Ordered trail including the current page; a root normally contains one entry. */
  breadcrumbs: readonly IPageBreadcrumb[];
}
