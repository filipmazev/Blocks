import type { InputSignal } from '@angular/core';

import { Component, input } from '@angular/core';

import { HintAlignment } from '@forms/types/validation.types';

@Component({ selector: 'bx-hint', template: '<ng-content />', host: { '[style.margin-inline-start]': 'align() === "end" ? "auto" : null' } })
export class BxHint {
  /** Position of this supporting hint at the start or end of its field. Defaults to `'start'`. */
  public readonly align: InputSignal<HintAlignment> = input<HintAlignment>('start');
}
