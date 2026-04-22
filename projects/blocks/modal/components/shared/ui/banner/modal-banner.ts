import { Component, computed, inject, input, output } from '@angular/core';
import { ModalCloseMode } from '../../../../types/modal.types';
import { Icon } from '@filip.mazev/blocks/icons';
import { IModalHeaderConfig } from '@modal/interfaces/imodal-header-config.interface';
import { BX_I18N, isTextWithKey } from '@filip.mazev/blocks/core';

@Component({
  selector: 'bx-modal-banner',
  imports: [Icon],
  templateUrl: './modal-banner.html',
  styleUrl: './modal-banner.scss'
})
export class ModalBanner {
  private readonly i18n = inject(BX_I18N, { optional: true });

  public readonly header = input.required<IModalHeaderConfig | undefined>();
  public readonly showCloseButton = input.required<boolean>();
  public readonly close = output<ModalCloseMode | undefined>();

  protected readonly resolvedText = computed(() => {
    this.i18n?.version?.();
    
    const headerData = this.header();
    if (!headerData || !headerData.text) return undefined;

    if (isTextWithKey(headerData.text)) {
      return this.i18n?.translate(headerData.text.key) ?? headerData.text.key;
    }

    return headerData.text;
  });
}