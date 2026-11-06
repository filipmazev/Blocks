import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { IBxSelectOption } from '@filip.mazev/blocks/forms';
import type { IVirtualCollectionConfig, VirtualCollectionLayout, VirtualTrackBy } from '@filip.mazev/blocks/primitives';
import type { IVirtualExampleItem } from '@playground/components/screens/library-components/virtual-collection-examples/interfaces/ivirtual-example-item.interface';

import { Button, InputField, Select, SliderDirective } from '@filip.mazev/blocks/forms';
import { Card, VirtualCollection, VirtualItemDirective } from '@filip.mazev/blocks/primitives';

import { VIRTUAL_EXAMPLE_ITEMS } from '@playground/components/screens/library-components/virtual-collection-examples/constants/virtual-collection-examples.constants';

@Component({
  selector: 'app-virtual-collection-examples',
  imports: [FormsModule, Button, InputField, Select, SliderDirective, Card, VirtualCollection, VirtualItemDirective],
  templateUrl: './virtual-collection-examples.html',
  styleUrl: './virtual-collection-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtualCollectionExamples {
  protected readonly items: typeof VIRTUAL_EXAMPLE_ITEMS = VIRTUAL_EXAMPLE_ITEMS;
  protected readonly itemKey: VirtualTrackBy<IVirtualExampleItem> = (item) => item.id;
  protected readonly layouts: readonly IBxSelectOption<VirtualCollectionLayout>[] = [
    { label: 'Responsive grid', value: 'grid' },
    { label: 'Vertical list', value: 'list' }
  ];

  protected readonly layout: WritableSignal<VirtualCollectionLayout> = signal<VirtualCollectionLayout>('grid');

  protected readonly width: WritableSignal<number> = signal(100);
  protected readonly index: WritableSignal<number> = signal(1500);

  protected readonly expanded: WritableSignal<ReadonlySet<number>> = signal<ReadonlySet<number>>(new Set<number>());

  protected readonly config: Signal<IVirtualCollectionConfig> = computed(() => ({
    layout: this.layout(),
    minColumnWidth: '12rem',
    estimatedRowHeight: 200,
    overscan: 800
  }));

  protected toggle(id: number): void {
    this.expanded.update((previous) => {
      const next = new Set(previous);

      if (next.has(id)) next.delete(id);
      else next.add(id);

      return next;
    });
  }
}
