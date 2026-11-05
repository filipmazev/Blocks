import type { InputSignal, OutputEmitterRef, Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';

import { BX_I18N, isTextWithKey } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';

import { IModalHeaderConfig } from '@modal/interfaces/imodal-header-config.interface';
import { ModalCloseMode } from '@modal/types/modal.types';

@Component({
  selector: 'bx-modal-banner',
  imports: [Icon],
  templateUrl: './modal-banner.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './modal-banner.scss'
})
export class ModalBanner {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly resolvedText: Signal<string | undefined> = computed(() => {
    this.i18n?.version?.();

    const headerData = this.header();

    if (!headerData || !headerData.text) return undefined;

    if (isTextWithKey(headerData.text)) {
      return this.i18n?.translate(headerData.text.key) ?? headerData.text.key;
    }

    return headerData.text;
  });

  public readonly header: InputSignal<IModalHeaderConfig | undefined> = input.required<IModalHeaderConfig | undefined>();
  public readonly showCloseButton: InputSignal<boolean> = input.required<boolean>();

  // eslint-disable-next-line @angular-eslint/no-output-native -- Preserve the public modal close event name.
  public readonly close: OutputEmitterRef<ModalCloseMode | undefined> = output<ModalCloseMode | undefined>();
}
