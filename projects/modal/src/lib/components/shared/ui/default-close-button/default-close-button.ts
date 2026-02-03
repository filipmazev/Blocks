import { Component, input, output } from '@angular/core';
import { ModalConfig, ModalCloseMode } from '../../../../../public-api';

@Component({
  selector: 'modal-default-close-button',
  imports: [],
  templateUrl: './default-close-button.html',
  styleUrl: './default-close-button.scss',
})
export class ModalDefaultCloseButton<D = unknown> {
  readonly config = input.required<ModalConfig<D> | undefined>();

  readonly close = output<ModalCloseMode | undefined>();
}