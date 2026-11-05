import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';

import { FormField } from '@forms/components/form-field/form-field';
import { BxCheckedControl } from '@forms/components/shared/classes/bx-checked-control';

@Component({
  selector: 'bx-slide-toggle',
  imports: [BxSurfaceDirective, FormField],
  templateUrl: './slide-toggle.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './slide-toggle.scss'
})
export class SlideToggle extends BxCheckedControl {}
