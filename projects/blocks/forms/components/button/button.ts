import { Component, input, booleanAttribute, HostListener, inject, computed } from '@angular/core';
import { BxA11yService } from '@filip.mazev/blocks/core';
import { ButtonColor, ButtonVariant } from '../../types/form.types';

@Component({
  selector: 'bx-button, button[bx-button], a[bx-button]',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
  host: {
    '[class]': '"bx-btn bx-btn-" + variant() + " bx-btn-color-" + color()',
    '[class.bx-btn-is-outlined]': 'outlined()',
    '[class.bx-btn-is-elevated]': 'elevated()',
    '[class.bx-btn-animated]': 'isAnimated()',
    '[attr.disabled]': 'disabled() ? true : null',
    '[attr.aria-disabled]': 'disabled()',
    '[attr.tabindex]': 'disabled() ? "-1" : null'
  }
})
export class Button {
  private readonly a11y = inject(BxA11yService);

  public readonly isAnimated = computed(() => {
    return !this.a11y.isReducedMotion();
  });

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