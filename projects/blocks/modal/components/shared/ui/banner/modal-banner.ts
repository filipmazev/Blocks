import { Component, input, output } from '@angular/core';
import { ModalCloseMode } from '../../../../types/modal.types';
import { Icon } from '@filip.mazev/blocks/icons';
import { IModalHeaderConfig } from '@modal/interfaces/imodal-header-config.interface';

@Component({
  selector: 'bx-modal-banner',
  imports: [Icon],
  templateUrl: './modal-banner.html',
  styleUrl: './modal-banner.scss'
})
export class ModalBanner<D = unknown, R = unknown> {
  public readonly header = input.required<IModalHeaderConfig | undefined>();
  public readonly showCloseButton = input.required<boolean>();
  public readonly close = output<ModalCloseMode | undefined>();
}
