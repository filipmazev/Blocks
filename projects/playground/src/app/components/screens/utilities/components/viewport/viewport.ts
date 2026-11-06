import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { WindowDimensionsService } from '@filip.mazev/blocks/core';
import { Alert, Card, Grid, Stack, Tag } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-viewport',
  imports: [Alert, Card, Grid, Stack, Tag],
  templateUrl: './viewport.html',
  styleUrl: '../../utility-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Viewport {
  protected readonly windowDimensionsService = inject(WindowDimensionsService);

  protected readonly breakpointEntries: [string, number][] = Object.entries(this.windowDimensionsService.breakpoints);
  protected readonly previewItems: readonly number[] = [1, 2, 3, 4, 5, 6];

  protected readonly columns: Signal<number> = computed(() => this.windowDimensionsService.resolveResponsiveValue({ md: 2, xl: 3 }, 1));
}
