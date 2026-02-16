import { Component, input, output } from '@angular/core';
import { ModalConfig } from '../../../../classes/modal-config';
import { ModalCloseMode } from '../../../../types/modal.types';
import { ModalDefaultCloseButton } from '../default-close-button/default-close-button';

@Component({
  selector: 'app-modal-banner',
  imports: [ModalDefaultCloseButton],
  templateUrl: './modal-banner.html',
  styleUrl: './modal-banner.scss'
})
export class ModalBanner<D = unknown, R = unknown> {
  public readonly config = input.required<ModalConfig<D, R> | undefined>();

  public readonly close = output<ModalCloseMode | undefined>();
}
