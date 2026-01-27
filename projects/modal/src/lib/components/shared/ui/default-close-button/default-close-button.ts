import { Component, input, output } from '@angular/core';
import { GenericModalConfig, ModalCloseMode } from '../../../../../public-api';

@Component({
  selector: 'modal-default-close-button',
  imports: [],
  templateUrl: './default-close-button.html',
  styleUrl: './default-close-button.scss',
})
export class ModalDefaultCloseButton<D = unknown> {
  readonly config = input.required<GenericModalConfig<D> | undefined>();

  readonly close = output<ModalCloseMode | undefined>();
}