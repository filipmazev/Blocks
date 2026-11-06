import type { IVirtualExampleItem } from '@playground/components/screens/library-components/virtual-collection-examples/interfaces/ivirtual-example-item.interface';

export const VIRTUAL_EXAMPLE_ITEMS: readonly IVirtualExampleItem[] = Array.from({ length: 3000 }, (_, index) => ({
  id: index,
  title: `Item ${index + 1}`,
  description: 'Variable-height content wraps when the grid changes width. '.repeat(1 + (index % 5))
}));
