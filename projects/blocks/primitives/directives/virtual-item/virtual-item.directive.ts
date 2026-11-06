import type { InputSignal } from '@angular/core';

import { Directive, inject, input, TemplateRef } from '@angular/core';

import type { VirtualCollection } from '@primitives/components/virtual-collection/virtual-collection';
import type { IVirtualItemContext } from '@primitives/interfaces/ivirtual-item-context.interface';

/**
 * Typed item template for a virtual collection.
 * @typeParam T - Consumer item type inferred from the collection binding.
 */
@Directive({ selector: 'ng-template[bxVirtualItem]' })
export class VirtualItemDirective<T> {
  /** Item template captured for the collection's bounded render window. */
  public readonly templateRef = inject<TemplateRef<IVirtualItemContext<T>>>(TemplateRef);

  /** Owning collection, required for Angular's template type inference. */
  public readonly bxVirtualItem: InputSignal<VirtualCollection<T>> = input.required<VirtualCollection<T>>();

  /**
   * Infer item-template locals from the owning collection.
   * @param directive - Template directive carrying the item type.
   * @param context - Context Angular is checking.
   * @typeParam TItem - Consumer item type.
   * @returns True; the collection supplies this context contract.
   */
  public static ngTemplateContextGuard<TItem>(directive: VirtualItemDirective<TItem>, context: unknown): context is IVirtualItemContext<TItem> {
    void directive;
    void context;

    return true;
  }
}
