import type { InputSignal, OutputEmitterRef, Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';

import { BX_I18N, resolveText } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';
import { LoadingSpinner } from '@filip.mazev/blocks/primitives';

import { IModalHeaderConfig } from '@modal/interfaces/imodal-header-config.interface';
import { ModalCloseMode } from '@modal/types/modal.types';

@Component({
  selector: 'bx-modal-banner',
  imports: [Icon, LoadingSpinner],
  templateUrl: './modal-banner.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './modal-banner.scss'
})
export class ModalBanner {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly resolvedText: Signal<string> = computed(() => resolveText(this.header()?.text, this.i18n));
  protected readonly iconSize: Signal<number> = computed(() => {
    const size = Number(this.header()?.icon?.size ?? 24);

    return Number.isFinite(size) && size > 0 ? size : 24;
  });

  /** Modal heading text and optional semantic icon; undefined omits configured heading content. Required input. */
  public readonly header: InputSignal<IModalHeaderConfig | undefined> = input.required<IModalHeaderConfig | undefined>();
  /** Whether the overlay includes its built-in close action. Required input. */
  public readonly showCloseButton: InputSignal<boolean> = input.required<boolean>();

  /** Emits a requested modal close mode; the lifecycle host performs guarded dismissal. */
  // eslint-disable-next-line @angular-eslint/no-output-native -- Preserve the public modal close event name.
  public readonly close: OutputEmitterRef<ModalCloseMode | undefined> = output<ModalCloseMode | undefined>();
}
