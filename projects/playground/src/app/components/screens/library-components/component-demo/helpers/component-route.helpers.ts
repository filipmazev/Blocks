import type { IComponentExample } from '@playground/components/screens/library-components/component-demo/interfaces/icomponent-example.interface';

/**
 * Resolve the canonical playground route, including the shared layout category.
 * @param entry - Catalog entry whose layout membership selects its route prefix.
 */
export function componentRoute(entry: IComponentExample): string[] {
  return entry.layout ? ['/components/layout', entry.id] : ['/components', entry.id];
}
