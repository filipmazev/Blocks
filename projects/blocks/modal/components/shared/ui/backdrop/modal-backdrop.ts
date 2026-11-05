import type { InputSignal, OutputEmitterRef, Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';

import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';

@Component({
  selector: 'bx-modal-backdrop',
  imports: [],
  templateUrl: './modal-backdrop.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./modal-backdrop.scss']
})
export class ModalBackdrop {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly resolvedLabel: Signal<string> = computed(() => resolveText(this.label(), this.i18n));

  /** Accessible dismissal label. Defaults to Close dialog; supports the shared translation adapter. */
  public readonly label: InputSignal<ResolvableText> = input<ResolvableText>('Close dialog');
  /** Backdrop tab order. Defaults to 0; drawer owners can use -1 when a close action is provided in the panel. */
  public readonly tabIndex: InputSignal<number> = input(0);
  public readonly isAnimated: InputSignal<boolean> = input(false);
  public readonly isOpen: InputSignal<boolean> = input(false);

  // eslint-disable-next-line @angular-eslint/no-output-native -- Preserve the existing modal backdrop click event.
  public readonly click: OutputEmitterRef<MouseEvent> = output<MouseEvent>();
}
