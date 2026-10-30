import { Component, input } from '@angular/core';
import { HintAlignment } from '../../components/shared/types/validation.types';

@Component({ selector: 'bx-hint', template: '<ng-content />', host: { '[style.margin-inline-start]': 'align() === "end" ? "auto" : null' } })
export class BxHint {
  public readonly align = input<HintAlignment>('start');
}
