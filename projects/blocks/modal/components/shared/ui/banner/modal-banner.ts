import { Component, input, output } from '@angular/core';
import { ModalConfig } from '../../../../classes/modal-config';
import { ModalCloseMode } from '../../../../types/modal.types';
import { Icon } from '@filip.mazev/blocks/icons';

@Component({
  selector: 'bx-modal-banner',
  imports: [Icon],
  templateUrl: './modal-banner.html',
  styleUrl: './modal-banner.scss'
})
export class ModalBanner<D = unknown, R = unknown> {
  public readonly config = input.required<ModalConfig<D, R> | undefined>();

  public readonly close = output<ModalCloseMode | undefined>();
}
