import type { InputSignal } from '@angular/core';

import { afterEveryRender, afterNextRender, DestroyRef, Directive, effect, ElementRef, HostListener, inject, input, NgZone } from '@angular/core';

import { BxA11yService, ThemingService } from '@filip.mazev/blocks/core';
import {
  createSpringMotion,
  GlassinessMode,
  ISpringMotion,
  MOTION_PRESETS,
  mountSurface,
  observeGlassLighting,
  paintMotionStyles,
  refreshGlassLighting
} from '@filip.mazev/blocks/effects/runtime';

/** Glass styling for a native range, including reactive forms and programmatic values. */
@Directive({ selector: 'input[type=range][bxSlider]', host: { class: 'bx-slider' } })
export class SliderDirective {
  private readonly elementRef = inject<ElementRef<HTMLInputElement>>(ElementRef);
  private readonly bxA11yService = inject(BxA11yService);

  /** Glass lens refraction override; omission defaults to auto. Application baseline, Off and accessibility preferences take precedence. */
  public readonly glassiness: InputSignal<GlassinessMode | undefined> = input<GlassinessMode>();
  /** Whether the slider snaps to its configured step values. Defaults to `false`. */
  public readonly discrete: InputSignal<boolean> = input(false);
  /** Formatter for the user-visible slider value; omission uses the default numeric presentation. */
  public readonly displayWith: InputSignal<(value: number) => string> = input<(value: number) => string>(String);
  /** Whether discrete slider tick marks are rendered. Defaults to `false`. */
  public readonly showTickMarks: InputSignal<boolean> = input(false);

  private shell?: HTMLSpanElement;
  private valueLabel?: HTMLSpanElement;
  private tickList?: HTMLDataListElement;
  private thumb?: HTMLSpanElement;
  private motion?: ISpringMotion;
  private opticSurface: ReturnType<typeof mountSurface> | undefined;
  private releaseGesture?: () => void;
  private pressed: boolean = false;
  private lastPosition: number = 0;
  private lastInputTime: number = 0;
  private trackWidth: number = 0;
  private thumbWidth: number = 0;
  private pointerId: number | null = null;

  constructor() {
    inject(ThemingService);
    effect(() => {
      const reducedMotion = this.bxA11yService.isReducedMotion();
      const glassiness = this.glassiness() ?? 'auto';

      this.opticSurface?.update({
        glassiness,
        quality: 'auto',
        localRefraction: true,
        interactive: false,
        emission: false,
        reducedMotion
      });

      if (reducedMotion) this.motion?.retarget([0, 0], true);
    });

    afterEveryRender(() => this.sync());

    const ngZone = inject(NgZone);
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const input = this.elementRef.nativeElement;
      const shell = input.ownerDocument.createElement('span');

      shell.className = 'bx-slider-shell';

      const thumb = input.ownerDocument.createElement('span');

      thumb.className = 'bx-slider-thumb';
      thumb.setAttribute('aria-hidden', 'true');

      const lens = input.ownerDocument.createElement('span');

      lens.className = 'bx-slider-lens';
      thumb.append(lens);

      const optic = input.ownerDocument.createElement('span');

      optic.className = 'bx-slider-optic';
      optic.hidden = true;
      thumb.append(optic);
      input.before(shell);
      shell.append(input, thumb);
      this.shell = shell;
      this.thumb = thumb;
      this.motion = createSpringMotion(
        [0, 0],
        ([pressure, stretch]) => {
          const reduced = this.bxA11yService.isReducedMotion();

          optic.hidden = pressure < 0.01;
          paintMotionStyles(thumb, {
            '--bx-slider-pressure': String(reduced ? 0 : pressure),
            '--bx-slider-stretch': String(reduced ? 0 : Math.max(0, stretch))
          });
        },
        MOTION_PRESETS.elastic
      );

      const release = (event?: Event): void => {
        if (event?.type === 'visibilitychange' && !input.ownerDocument.hidden) return;

        if (event && 'pointerId' in event && event.pointerId !== this.pointerId) return;

        this.pressed = false;
        this.pointerId = null;
        this.motion?.retarget([0, 0], this.bxA11yService.isReducedMotion());
        input.ownerDocument.defaultView?.removeEventListener('pointerup', release, true);
        input.ownerDocument.defaultView?.removeEventListener('pointercancel', release, true);
        input.ownerDocument.defaultView?.removeEventListener('blur', release);
        input.ownerDocument.removeEventListener('visibilitychange', release);
        this.releaseGesture = undefined;
      };

      const press = (event: PointerEvent): void => {
        if (!event.isPrimary || event.button !== 0) return;

        if (input.disabled || input.hasAttribute('readonly') || input.getAttribute('aria-readonly') === 'true') return;

        this.opticSurface ??= ngZone.runOutsideAngular(() =>
          mountSurface(optic, {
            glassiness: this.glassiness() ?? 'auto',
            quality: 'auto',
            localRefraction: true,
            interactive: false,
            emission: false,
            reducedMotion: this.bxA11yService.isReducedMotion()
          })
        );

        this.pressed = true;
        this.pointerId = event.pointerId;
        this.lastInputTime = 0;
        this.motion?.retarget([1, 0], this.bxA11yService.isReducedMotion());
        input.ownerDocument.defaultView?.addEventListener('pointerup', release, true);
        input.ownerDocument.defaultView?.addEventListener('pointercancel', release, true);
        input.ownerDocument.defaultView?.addEventListener('blur', release);
        input.ownerDocument.addEventListener('visibilitychange', release);
        this.releaseGesture = release;
      };

      input.addEventListener('pointerdown', press);
      input.addEventListener('blur', release);

      const valueLabel = input.ownerDocument.createElement('span');

      valueLabel.className = 'bx-slider-value-label';
      valueLabel.setAttribute('aria-hidden', 'true');
      shell.append(valueLabel);
      this.valueLabel = valueLabel;

      const tickList = input.ownerDocument.createElement('datalist');

      tickList.id = `bx-slider-ticks-${input.id || Math.random().toString(36).slice(2)}`;
      shell.append(tickList);
      this.tickList = tickList;
      this.sync();

      const place = () => {
        this.trackWidth = input.offsetWidth;
        this.thumbWidth = thumb.offsetWidth;
        shell.style.setProperty('--bx-slider-center-y', `${input.offsetTop + input.offsetHeight / 2}px`);
        shell.style.setProperty('--bx-slider-track-start', `${input.offsetLeft}px`);
        shell.style.setProperty('--bx-slider-track-width', `${input.offsetWidth}px`);
        refreshGlassLighting(thumb);
        this.sync();
      };

      const resize = new ResizeObserver(place);

      ngZone.runOutsideAngular(() => {
        resize.observe(input);
        resize.observe(shell);
        resize.observe(thumb);
        place();
      });

      const stop = ngZone.runOutsideAngular(() =>
        observeGlassLighting(
          thumb,
          (light) => {
            const reflected = light.reflectionStrength > light.strength;
            const strength = reflected ? light.reflectionStrength : light.strength;

            if (strength <= 0.04) {
              thumb.style.removeProperty('--bx-slider-light-color');
              thumb.style.removeProperty('--bx-slider-light-strength');
            } else {
              thumb.style.setProperty('--bx-slider-light-color', reflected ? light.reflection : light.color);
              thumb.style.setProperty('--bx-slider-light-strength', String(strength));
            }

            thumb.style.setProperty('--bx-slider-light-x', `${reflected ? light.reflectionX : light.x}%`);
            thumb.style.setProperty('--bx-slider-light-y', `${reflected ? light.reflectionY : light.y}%`);
            paintMotionStyles(shell, {
              '--bx-slider-light-color': reflected ? light.reflection : light.color,
              '--bx-slider-light-strength': String(Math.max(0.04, strength))
            });
          },
          input
        )
      );

      destroyRef.onDestroy(() => {
        resize.disconnect();
        stop();
        release();
        input.removeEventListener('pointerdown', press);
        input.removeEventListener('blur', release);
        this.motion?.destroy();
        this.opticSurface?.destroy();
        this.opticSurface = undefined;

        // Embedded views can detach their root input before destruction; never reinsert that removed control.
        if (input.parentNode === shell) shell.replaceWith(input);
        else shell.remove();

        this.shell = this.thumb = undefined;
      });
    });
  }

  @HostListener('input', ['$event'])
  protected onInput(event: Event): void {
    const input = this.elementRef.nativeElement;
    const span = (input.max === '' ? 100 : Number(input.max)) - (input.min === '' ? 0 : Number(input.min));
    const position = span > 0 ? input.valueAsNumber / span : 0;
    const elapsed = Math.max(0.008, (event.timeStamp - this.lastInputTime) / 1000);
    const stretch = this.pressed && this.lastInputTime > 0 ? Math.min(0.065, (Math.abs(position - this.lastPosition) / elapsed) * 0.015) : 0;

    this.lastPosition = position;
    this.lastInputTime = event.timeStamp;
    this.motion?.retarget([this.pressed ? 1 : 0, stretch], this.bxA11yService.isReducedMotion());
    this.sync();
  }

  protected sync(): void {
    const input = this.elementRef.nativeElement;

    if (input.disabled || input.hasAttribute('readonly') || input.getAttribute('aria-readonly') === 'true') this.releaseGesture?.();

    const min = input.min === '' ? 0 : Number(input.min);
    const max = input.max === '' ? 100 : Number(input.max);
    const progress = max > min ? Math.max(0, Math.min(100, ((input.valueAsNumber - min) / (max - min)) * 100)) : 0;

    if (this.shell && this.thumbWidth > 0 && this.trackWidth > 0) {
      const neighbor = input.hasAttribute('aria-valuemax')
        ? Number(input.getAttribute('aria-valuemax'))
        : input.hasAttribute('aria-valuemin')
          ? Number(input.getAttribute('aria-valuemin'))
          : null;

      if (neighbor !== null && Number.isFinite(neighbor) && max > min) {
        const distance = (Math.abs(neighbor - input.valueAsNumber) / (max - min)) * (this.trackWidth - this.thumbWidth);
        const limit = String(Math.max(0, Math.min(0.45, (distance * 2) / this.thumbWidth - 2)));

        if (this.shell.style.getPropertyValue('--bx-slider-neighbor-limit') !== limit) this.shell.style.setProperty('--bx-slider-neighbor-limit', limit);
      }
    }

    if (this.valueLabel) {
      this.valueLabel.hidden = !this.discrete();
      this.valueLabel.textContent = this.displayWith()(input.valueAsNumber);
    }

    if (this.tickList) {
      const count = Math.min(1000, Math.floor((max - min) / (Number(input.step) || 1)));
      const key = `${min}:${max}:${input.step}:${this.showTickMarks()}`;

      if (this.tickList.dataset['range'] !== key) {
        this.tickList.replaceChildren();
        this.tickList.dataset['range'] = key;

        if (this.showTickMarks() && count > 0) {
          for (let index = 0; index <= count; index++) {
            const option = input.ownerDocument.createElement('option');

            option.value = String(min + index * (Number(input.step) || 1));
            this.tickList.append(option);
          }
        }
      }

      if (this.showTickMarks()) input.setAttribute('list', this.tickList.id);
      else if (input.getAttribute('list') === this.tickList.id) input.removeAttribute('list');
    }

    const value = `${Number.isFinite(progress) ? progress : 0}%`;

    if (input.style.getPropertyValue('--bx-slider-progress') !== value) input.style.setProperty('--bx-slider-progress', value);

    if (this.shell) {
      const position = String((Number.isFinite(progress) ? progress : 0) / 100);

      if (this.shell.style.getPropertyValue('--bx-slider-position') !== position) {
        this.shell.style.setProperty('--bx-slider-position', position);

        if (this.thumb) refreshGlassLighting(this.thumb);
      }
    }
  }
}
