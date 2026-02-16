import { Component, input, output } from '@angular/core';
import { ModalConfig, ModalCloseMode } from '../../../../../public-api';

@Component({
  selector: 'app-modal-default-close-button',
  imports: [],
  templateUrl: './default-close-button.html',
  styleUrl: './default-close-button.scss'
})
export class ModalDefaultCloseButton<D = unknown, R = unknown> {
  public readonly config = input.required<ModalConfig<D, R> | undefined>();

  public readonly close = output<ModalCloseMode | undefined>();
}
