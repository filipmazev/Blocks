import { injectComponentSurface } from '@filip.mazev/blocks/effects';
import {
  afterRenderEffect,
  Component,
  input,
  booleanAttribute,
  HostListener,
  inject,
  computed,
  ChangeDetectionStrategy,
  contentChild,
  ElementRef,
  signal
} from '@angular/core';
import { BxA11yService } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';
import { LoadingSpinner } from '@filip.mazev/blocks/primitives';
import { ButtonColor, ButtonVariant } from '../../types/form.types';
import { ButtonIconDirective } from './directives/button-icon.directive';

@Component({
  selector: 'bx-button, button[bx-button], a[bx-button]',
  standalone: true,
  imports: [LoadingSpinner],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '"bx-btn bx-btn-" + variant() + " bx-btn-color-" + color()',
    '[class.bx-btn-is-outlined]': 'outlined()',
    '[class.bx-btn-is-elevated]': 'elevated()',
    '[class.bx-btn-animated]': 'isAnimated()',
    '[class.bx-btn-non-interactive]': '!interactive()',
    '[attr.disabled]': 'isDisabled() ? true : null',
    '[attr.aria-disabled]': 'isDisabled()',
    '[attr.aria-busy]': 'loading() ? "true" : null',
    '[attr.tabindex]': 'isDisabled() ? "-1" : null'
  }
})
export class Button {
  private readonly appearance = injectComponentSurface(
    () => ({
      interactive: this.variant() === 'text' || !this.interactive() || this.isDisabled() ? false : undefined,
      emission:
        this.variant() !== 'text' && this.interactive() && !this.isDisabled()
          ? this.color() === 'primary' || this.color() === 'grayscale'
            ? 'var(--bx-primary)'
            : this.color() === 'accent'
              ? 'var(--bx-accent)'
              : `var(--bx-text-${this.color()})`
          : undefined
    }),
    () => this.surfaceEffects()
  );

  private readonly a11y = inject(BxA11yService);
  private readonly projectedIcon = contentChild(Icon);
  private readonly iconElement = contentChild(Icon, { read: ElementRef<HTMLElement> });
  private readonly customIcon = contentChild(ButtonIconDirective);
  protected readonly spinnerSize = signal(20);

  public readonly isAnimated = computed(() => {
    return !this.a11y.isReducedMotion();
  });

  public readonly variant = input<ButtonVariant>('text');
  public readonly color = input<ButtonColor>('primary');
  public readonly outlined = input<boolean>(false);
  public readonly elevated = input<boolean>(false);
  public readonly disabled = input<boolean, unknown>(false, { transform: booleanAttribute });
  public readonly loading = input<boolean, unknown>(false, { transform: booleanAttribute });
  public readonly isDisabled = computed(() => this.disabled() || this.loading());

  public readonly interactive = input<boolean, unknown>(true, { transform: booleanAttribute });
  /** Enable runtime glass lighting and deformation; defaults to true. Disable for dense collections while retaining button styling and semantics. */
  public readonly surfaceEffects = input<boolean, unknown>(true, { transform: booleanAttribute });

  constructor() {
    afterRenderEffect((onCleanup) => {
      const icon = this.customIcon()?.element.nativeElement ?? this.iconElement()?.nativeElement;
      const size = Number(this.projectedIcon()?.size());
      // Keep the spinner in CSS pixels; bounding rectangles include page zoom and surface transforms.
      const measured = icon?.offsetWidth;

      this.spinnerSize.set(measured || (Number.isFinite(size) && size > 0 ? size : 20));

      if (!icon || !this.loading()) return;

      const display = icon.style.display;
      icon.style.display = 'none';
      onCleanup(() => {
        icon.style.display = display;
      });
    });
  }

  @HostListener('click', ['$event'])
  protected onClick(event: Event) {
    if (this.isDisabled()) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}
