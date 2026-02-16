import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal-backdrop',
  imports: [],
  templateUrl: './modal-backdrop.html',
  styleUrls: ['./modal-backdrop.scss']
})
export class ModalBackdrop {
  public readonly isAnimated = input(false);
  public readonly isOpen = input(false);

  public readonly click = output<MouseEvent>();
}
