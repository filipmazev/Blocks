import type { InputSignal, Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { LayoutGap } from '@primitives/types/layout.types';

@Component({
  selector: 'bx-grid',
  template: '<ng-content />',
  styleUrl: './grid.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.data-gap]': 'gap()',
    '[style.--bx-grid-columns]': 'columnTemplate()',
    '[style.--bx-grid-min-column]': 'minColumnWidth()'
  }
})
export class Grid {
  protected readonly columnTemplate: Signal<string | null> = computed(() => {
    const count = this.columns();

    return count !== undefined && Number.isFinite(count) ? 'repeat(' + Math.max(1, Math.min(24, Math.floor(count))) + ', minmax(0, 1fr))' : null;
  });

  /** Optional fixed column count, clamped to 1–24. Fixed grids stack below the shared sm breakpoint. */
  public readonly columns: InputSignal<number | undefined> = input<number | undefined>(undefined);
  /** Minimum auto-fit column size. Defaults to 16rem and never exceeds the container width. */
  public readonly minColumnWidth: InputSignal<string> = input('16rem');
  /** Shared spacing-scale step between grid cells. Defaults to `4`. */
  public readonly gap: InputSignal<LayoutGap> = input<LayoutGap>(4);
}
