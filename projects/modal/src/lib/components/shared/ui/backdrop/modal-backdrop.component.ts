import { Component, input, output } from '@angular/core';

@Component({
  selector: 'bx-modal-backdrop',
  imports: [],
  templateUrl: './modal-backdrop.component.html',
  styleUrls: ['./modal-backdrop.component.scss']
})
export class ModalBackdrop {
  public readonly isAnimated = input(false);
  public readonly isOpen = input(false);

  public readonly click = output<MouseEvent>();
}
