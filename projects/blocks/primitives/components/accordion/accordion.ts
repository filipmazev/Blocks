import type { InputSignalWithTransform, Signal } from '@angular/core';

import { booleanAttribute, ChangeDetectionStrategy, Component, contentChildren, effect, forwardRef, input, untracked } from '@angular/core';

import { Collapsible } from '@primitives/components/collapsible/collapsible';
import { IAccordionCoordinator } from '@primitives/interfaces/iaccordion-coordinator.interface';
import { BX_ACCORDION_COORDINATOR } from '@primitives/tokens/accordion-coordinator.token';

@Component({
  selector: 'bx-accordion',
  template: '<ng-content />',
  styleUrl: './accordion.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: BX_ACCORDION_COORDINATOR, useExisting: forwardRef(() => Accordion) }],
  host: { '(keydown)': 'onKeydown($event)' }
})
export class Accordion implements IAccordionCoordinator {
  private readonly items: Signal<readonly Collapsible[]> = contentChildren(Collapsible);

  /** Whether several accordion panels may remain expanded simultaneously. Defaults to `false`. */
  public readonly multiple: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  private previousOpened: readonly Collapsible[] = [];

  constructor() {
    effect(() => {
      const opened = this.items().filter((item) => item.expanded());
      const multiple = this.multiple();

      if (!multiple && opened.length > 1) {
        const newest = opened.find((item) => !this.previousOpened.includes(item)) ?? opened[0];

        untracked(() => opened.filter((item) => item !== newest).forEach((item) => item.expanded.set(false)));
        this.previousOpened = [newest];
      } else this.previousOpened = opened;
    });
  }

  /**
   * Coordinate sibling expansion when a panel opens and multiple-open presentation is disabled.
   *
   * @param panelId - Stable ID of the panel requesting expansion.
   */
  public requestExpansion(panelId: string): void {
    if (this.multiple()) return;

    this.items()
      .filter((item) => item.panelId() !== panelId)
      .forEach((item) => item.expanded.set(false));
  }

  /** Collapse all registered accordion panels through their controlled expansion state. */
  public collapseAll(): void {
    this.items().forEach((item) => item.expanded.set(false));
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;

    const items = this.items().filter((item) => !item.disabled());
    const index = items.findIndex((item) => item.triggerId() === (event.target as HTMLElement).id);

    if (index < 0) return;

    const next =
      event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;

    event.preventDefault();
    event.stopPropagation();
    items[next].focus();
  }
}
