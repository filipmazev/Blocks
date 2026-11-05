import type { InputSignal, InputSignalWithTransform, Signal, WritableSignal } from '@angular/core';

import {
  afterRenderEffect,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  ElementRef,
  HostListener,
  inject,
  input,
  signal
} from '@angular/core';

import type { GlassinessMode } from '@filip.mazev/blocks/effects/runtime';

import { BxA11yService } from '@filip.mazev/blocks/core';
import { injectComponentSurface } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { LoadingSpinner } from '@filip.mazev/blocks/primitives';

import { ButtonIconDirective } from '@forms/components/button/directives/button-icon.directive';
import { ButtonColor, ButtonVariant } from '@forms/types/form.types';

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
  private readonly a11y = inject(BxA11yService);

  private readonly projectedIcon: Signal<Icon | undefined> = contentChild(Icon);
  private readonly iconElement: Signal<ElementRef<HTMLElement> | undefined> = contentChild(Icon, { read: ElementRef<HTMLElement> });
  private readonly customIcon: Signal<ButtonIconDirective | undefined> = contentChild(ButtonIconDirective);

  protected readonly spinnerSize: WritableSignal<number> = signal(20);

  public readonly isAnimated: Signal<boolean> = computed(() => {
    return !this.a11y.isReducedMotion();
  });
  public readonly isDisabled: Signal<boolean> = computed(() => this.disabled() || this.loading());

  public readonly variant: InputSignal<ButtonVariant> = input<ButtonVariant>('text');
  public readonly color: InputSignal<ButtonColor> = input<ButtonColor>('primary');
  public readonly outlined: InputSignal<boolean> = input<boolean>(false);
  public readonly elevated: InputSignal<boolean> = input<boolean>(false);
  public readonly disabled: InputSignalWithTransform<boolean, unknown> = input<boolean, unknown>(false, { transform: booleanAttribute });
  public readonly loading: InputSignalWithTransform<boolean, unknown> = input<boolean, unknown>(false, { transform: booleanAttribute });
  public readonly interactive: InputSignalWithTransform<boolean, unknown> = input<boolean, unknown>(true, { transform: booleanAttribute });
  /** Enable runtime glass lighting and deformation; defaults to true. Disable for dense collections while retaining button styling and semantics. */
  public readonly surfaceEffects: InputSignalWithTransform<boolean, unknown> = input<boolean, unknown>(true, { transform: booleanAttribute });
  /** Opt this button into backdrop refraction. Omitted buttons retain the existing material and lighting. */
  public readonly glassiness: InputSignal<GlassinessMode | undefined> = input<GlassinessMode | undefined>();

  constructor() {
    injectComponentSurface(
      () => ({
        glassiness: this.glassiness(),
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
