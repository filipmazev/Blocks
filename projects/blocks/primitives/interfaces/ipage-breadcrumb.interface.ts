import { ResolvableText } from '@filip.mazev/blocks/core';

/** A translated page breadcrumb and its application router destination. */
export interface IPageBreadcrumb {
  /** Visible label; accepts plain text or a translation key. */
  label: ResolvableText;
  /** Absolute application router path for this ancestor. */
  route: string;
}
