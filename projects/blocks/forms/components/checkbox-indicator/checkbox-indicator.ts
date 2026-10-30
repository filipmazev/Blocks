import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';

/** Decorative checkbox face; the owning control supplies semantics and interaction. */
@Component({
  selector: 'bx-checkbox-indicator',
  imports: [BxSurfaceDirective, Icon],
  templateUrl: './checkbox-indicator.html',
  styleUrl: './checkbox-indicator.scss',
  host: { 'aria-hidden': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxIndicator {
  /** Whether the owning control is checked. Defaults to false. */
  public readonly checked = input(false);
  /** Displays the partial-selection mark in preference to checked. Defaults to false. */
  public readonly indeterminate = input(false);
  /** Matches the owning control's validation appearance. Defaults to false. */
  public readonly invalid = input(false);
  /** Suppresses the active surface finish when the owner is disabled. Defaults to false. */
  public readonly disabled = input(false);
}
