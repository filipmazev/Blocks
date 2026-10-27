import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bx-modal-backdrop',
  imports: [],
  templateUrl: './modal-backdrop.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./modal-backdrop.scss']
})
export class ModalBackdrop {
  public readonly isAnimated = input(false);
  public readonly isOpen = input(false);

  public readonly click = output<MouseEvent>();
}
