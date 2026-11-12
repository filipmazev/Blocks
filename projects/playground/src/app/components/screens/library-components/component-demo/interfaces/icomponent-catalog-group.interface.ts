import type { IComponentExample } from '@playground/components/screens/library-components/component-demo/interfaces/icomponent-example.interface';

/** A catalog section with the entries currently rendered for it. */
export interface IComponentCatalogGroup {
  /** Section title shared with the navigation category. */
  title: string;
  /** Entries rendered in this section for the current filters and pagination state. */
  entries: readonly IComponentExample[];
  /** Entries matching the current filters in this section, including the ones not rendered yet. */
  total: number;
}
