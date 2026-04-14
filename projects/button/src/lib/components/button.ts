import { 
  Component, input, booleanAttribute, 
  HostListener
} from '@angular/core';
import { ButtonVariant, ButtonColor } from '../types/button.types';

@Component({
  selector: 'bx-button, button[bx-button], a[bx-button]',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
  host: {
    '[class]': '"bx-btn bx-btn-" + variant() + " bx-btn-color-" + color()',
    '[class.bx-btn-is-outlined]': 'outlined()',
    '[class.bx-btn-is-elevated]': 'elevated()',
    '[attr.disabled]': 'disabled() ? true : null',
    '[attr.aria-disabled]': 'disabled()',
    '[attr.tabindex]': 'disabled() ? "-1" : null',
  }
})
export class Button {
  public readonly variant = input<ButtonVariant>('text'); 
  public readonly color = input<ButtonColor>('primary');
  public readonly outlined = input<boolean>(false);
  public readonly elevated = input<boolean>(false);
  public readonly disabled = input<boolean, unknown>(false, { transform: booleanAttribute });

  @HostListener('click', ['$event'])
  protected onClick(event: Event) {
    if (this.disabled()) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}