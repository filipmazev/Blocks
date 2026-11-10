import type { IBreadcrumbItem } from '@filip.mazev/blocks/navigation';

/** Real playground destinations forming a long explicit trail for overflow demonstrations. */
export const BREADCRUMB_EXAMPLE_ITEMS: readonly IBreadcrumbItem[] = [
  { label: 'Home', route: '/home' },
  { label: 'Components', route: '/components' },
  { label: 'Primitives', route: '/components/category/primitives' },
  { label: 'Layout', route: '/components/layout' },
  { label: 'Page container', route: '/components/layout/page-container' }
];
