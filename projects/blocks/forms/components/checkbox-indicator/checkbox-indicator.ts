import type { InputSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';

/** Decorative checkbox face; the owning control supplies semantics and interaction. */
@Component({
  selector: 'bx-checkbox-indicator',
  imports: [BxSurfaceDirective, Icon],
  templateUrl: './checkbox-indicator.html',
  styleUrl: './checkbox-indicator.scss',
  host: { 'aria-hidden': 'true', '[class.is-emissive]': 'emissive()' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxIndicator {
  /** Whether the owning control is checked. Defaults to false. */
  public readonly checked: InputSignal<boolean> = input(false);
  /** Displays the partial-selection mark in preference to checked. Defaults to false. */
  public readonly indeterminate: InputSignal<boolean> = input(false);
  /** Matches the owning control's validation appearance. Defaults to false. */
  public readonly invalid: InputSignal<boolean> = input(false);
  /** Suppresses the active surface finish when the owner is disabled. Defaults to false. */
  public readonly disabled: InputSignal<boolean> = input(false);
  /** Enables the owning control's interactive lighting. Defaults to false for decorative indicators, including multiselect options. */
  public readonly emissive: InputSignal<boolean> = input(false);
}
