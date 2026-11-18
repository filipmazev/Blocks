import type { InputSignal, InputSignalWithTransform, Signal, WritableSignal } from '@angular/core';

import {
  afterRenderEffect,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  DestroyRef,
  ElementRef,
  HostListener,
  inject,
  input,
  signal,
  viewChild
} from '@angular/core';

import type { GlassinessMode, IVisualPresence } from '@filip.mazev/blocks/effects/runtime';

import { BxA11yService } from '@filip.mazev/blocks/core';
import { BxVisualPresenceDirective, injectComponentSurface } from '@filip.mazev/blocks/effects';
import { createVisualPresence } from '@filip.mazev/blocks/effects/runtime';
import { Icon } from '@filip.mazev/blocks/icons';
import { LoadingSpinner } from '@filip.mazev/blocks/primitives';

import { ButtonIconDirective } from '@forms/directives/button-icon/button-icon.directive';
import { buttonEmissionStrength } from '@forms/helpers/button-material.helpers';
import { ButtonColor, ButtonShape, ButtonVariant } from '@forms/types/form.types';

@Component({
  selector: 'bx-button, button[bx-button], a[bx-button]',
  standalone: true,
  imports: [LoadingSpinner, BxVisualPresenceDirective],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '"bx-btn bx-btn-" + variant() + " bx-btn-color-" + color()',
    '[class.bx-btn-capsule]': 'shape() === "capsule"',
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
  private readonly bxA11yService = inject(BxA11yService);

  private readonly projectedIcon: Signal<Icon | undefined> = contentChild(Icon);
  private readonly iconElement: Signal<ElementRef<HTMLElement> | undefined> = contentChild(Icon, { read: ElementRef<HTMLElement> });
  private readonly customIcon: Signal<ButtonIconDirective | undefined> = contentChild(ButtonIconDirective);

  private readonly contentWrapper: Signal<ElementRef<HTMLElement>> = viewChild.required('contentWrapper');

  protected readonly hasProjectedIcon: Signal<boolean> = computed(() => !!this.customIcon() || !!this.projectedIcon());

  protected readonly spinnerSize: WritableSignal<number> = signal(20);

  protected readonly spinnerLeft: WritableSignal<number | null> = signal(null);

  protected readonly retainSpinner: WritableSignal<boolean> = signal(false);

  /** Whether decorative motion is enabled after applying shared reduced-motion preferences. */
  public readonly isAnimated: Signal<boolean> = computed(() => {
    return !this.bxA11yService.isReducedMotion();
  });
  /** Whether disabled or loading state blocks the button's native activation. */
  public readonly isDisabled: Signal<boolean> = computed(() => this.disabled() || this.loading());

  /** Visual presentation variant using the shared Blocks theme and component styles. Defaults to `'text'`. */
  public readonly variant: InputSignal<ButtonVariant> = input<ButtonVariant>('text');
  /** Geometry independent of variant. Defaults to 'default'; 'capsule' uses configurable pill-shaped icon-button dimensions. Supply an accessible name. */
  public readonly shape: InputSignal<ButtonShape> = input<ButtonShape>('default');
  /** Semantic color role applied to the component presentation. Defaults to `'primary'`. */
  public readonly color: InputSignal<ButtonColor> = input<ButtonColor>('primary');
  /** Whether the button renders an outline treatment. Defaults to `false`. */
  public readonly outlined: InputSignal<boolean> = input<boolean>(false);
  /** Whether the button uses the shared elevated surface treatment. Defaults to `false`. */
  public readonly elevated: InputSignal<boolean> = input<boolean>(false);
  /** Whether user interaction is disabled; disabled controls do not accept ordinary activation or edits. Defaults to `false`. */
  public readonly disabled: InputSignalWithTransform<boolean, unknown> = input<boolean, unknown>(false, { transform: booleanAttribute });
  /** Whether asynchronous work is in progress; the owning control renders its appropriate busy feedback. Defaults to `false`. */
  public readonly loading: InputSignalWithTransform<boolean, unknown> = input<boolean, unknown>(false, { transform: booleanAttribute });
  /** Whether the button enables decorative interaction feedback. Defaults to `true`. */
  public readonly interactive: InputSignalWithTransform<boolean, unknown> = input<boolean, unknown>(true, { transform: booleanAttribute });
  /** Enable runtime glass lighting and deformation; defaults to true. Disable for dense collections while retaining button styling and semantics. */
  public readonly surfaceEffects: InputSignalWithTransform<boolean, unknown> = input<boolean, unknown>(true, { transform: booleanAttribute });
  /** Opt this button into backdrop refraction. Omitted buttons retain the existing material and lighting. */
  public readonly glassiness: InputSignal<GlassinessMode | undefined> = input<GlassinessMode | undefined>();

  private presence: IVisualPresence | undefined;
  private presenceElement: HTMLElement | SVGElement | undefined;

  constructor() {
    injectComponentSurface(
      () => ({
        glassiness: this.glassiness(),
        emissionStrength: buttonEmissionStrength(this.variant(), this.outlined(), this.color()),
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
      const icon = this.customIcon()?.elementRef.nativeElement ?? this.iconElement()?.nativeElement;

      this.projectedIcon()?.size();
      this.measureSpinner(icon);

      if (!icon || typeof ResizeObserver === 'undefined') return;

      const resizeObserver = new ResizeObserver(() => this.measureSpinner(icon));

      resizeObserver.observe(this.contentWrapper().nativeElement);
      resizeObserver.observe(icon);
      onCleanup(() => resizeObserver.disconnect());
    });
    afterRenderEffect(() => {
      const icon = this.customIcon()?.elementRef.nativeElement ?? this.iconElement()?.nativeElement;
      const loading = this.loading();
      const reduced = this.bxA11yService.isReducedMotion();
      const changed = icon !== this.presenceElement;

      if (loading) this.retainSpinner.set(true);

      if (changed) {
        this.presence?.destroy();
        this.presenceElement = icon;
        this.presence = icon ? createVisualPresence(icon, { initiallyVisible: !loading }) : undefined;
      }

      this.presence?.update(!loading, reduced || changed);
    });
    inject(DestroyRef).onDestroy(() => this.presence?.destroy());
  }

  protected releaseSpinner(): void {
    if (!this.loading()) this.retainSpinner.set(false);
  }

  @HostListener('click', ['$event'])
  protected onClick(event: Event) {
    if (this.isDisabled()) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

  //#region Helpers

  private measureSpinner(icon: HTMLElement | SVGElement | undefined): void {
    const wrapper = this.contentWrapper().nativeElement;
    const wrapperRect = wrapper.getBoundingClientRect();
    const iconRect = icon?.getBoundingClientRect();
    const measured = icon ? ('offsetWidth' in icon ? icon.offsetWidth : icon.clientWidth) : 0;
    const requestedSize = Number(this.projectedIcon()?.size());
    const layoutWidth = Number.parseFloat(getComputedStyle(wrapper).width);
    const scaleX = layoutWidth > 0 ? wrapperRect.width / layoutWidth : 1;

    this.spinnerSize.set(measured || (Number.isFinite(requestedSize) && requestedSize > 0 ? requestedSize : 20));
    // SVG has no offsetLeft. Rect centers retain the anchor through local icon scaling, RTL and positioned custom wrappers.
    this.spinnerLeft.set(iconRect && scaleX > 0 ? (iconRect.left + iconRect.width / 2 - wrapperRect.left) / scaleX : null);
  }

  //#endregion
}
