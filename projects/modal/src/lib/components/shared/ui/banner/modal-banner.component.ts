import { Component, input, output } from '@angular/core';
import { ModalConfig } from '../../../../classes/modal-config';
import { ModalCloseMode } from '../../../../types/modal.types';
import { IconComponent } from '@filip.mazev/icons';

@Component({
  selector: 'bx-modal-banner',
  imports: [IconComponent],
  templateUrl: './modal-banner.component.html',
  styleUrl: './modal-banner.component.scss'
})
export class ModalBanner<D = unknown, R = unknown> {
  public readonly config = input.required<ModalConfig<D, R> | undefined>();

  public readonly close = output<ModalCloseMode | undefined>();
}
