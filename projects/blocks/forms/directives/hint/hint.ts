import type { InputSignal } from '@angular/core';

import { Component, input } from '@angular/core';

import { HintAlignment } from '@forms/components/shared/types/validation.types';

@Component({ selector: 'bx-hint', template: '<ng-content />', host: { '[style.margin-inline-start]': 'align() === "end" ? "auto" : null' } })
export class BxHint {
  public readonly align: InputSignal<HintAlignment> = input<HintAlignment>('start');
}
