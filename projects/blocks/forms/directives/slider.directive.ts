import { afterEveryRender, afterNextRender, DestroyRef, Directive, ElementRef, HostListener, inject, NgZone } from '@angular/core';
import { observeGlassLighting, refreshGlassLighting } from '@filip.mazev/blocks/effects/runtime';
import { ThemingService } from '@filip.mazev/blocks/core';

/** Glass styling for a native range, including reactive forms and programmatic values. */
@Directive({ selector: 'input[type=range][bxSlider]', host: { class: 'bx-slider' } })
export class SliderDirective {
  private readonly element = inject<ElementRef<HTMLInputElement>>(ElementRef);
  private readonly theme = inject(ThemingService);
  private shell?: HTMLSpanElement;
  private thumb?: HTMLSpanElement;

  constructor() {
    afterEveryRender(() => this.sync());
    const zone = inject(NgZone);
    const destroy = inject(DestroyRef);
    afterNextRender(() => {
      const input = this.element.nativeElement;
      const shell = input.ownerDocument.createElement('span');
      shell.className = 'bx-slider-shell';
      const thumb = input.ownerDocument.createElement('span');
      thumb.className = 'bx-slider-thumb';
      thumb.setAttribute('aria-hidden', 'true');
      input.before(shell);
      shell.append(input, thumb);
      this.shell = shell;
      this.thumb = thumb;
      this.sync();
      const place = () => {
        shell.style.setProperty('--bx-slider-center-y', `${input.offsetTop + input.offsetHeight / 2}px`);
        shell.style.setProperty('--bx-slider-track-start', `${input.offsetLeft}px`);
        shell.style.setProperty('--bx-slider-track-width', `${input.offsetWidth}px`);
        refreshGlassLighting(thumb);
      };
      const resize = new ResizeObserver(place);
      zone.runOutsideAngular(() => {
        resize.observe(input);
        resize.observe(shell);
        place();
      });
      const stop = zone.runOutsideAngular(() =>
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
          },
          input
        )
      );
      destroy.onDestroy(() => {
        resize.disconnect();
        stop();
        shell.replaceWith(input);
        this.shell = this.thumb = undefined;
      });
    });
  }

  @HostListener('input')
  protected sync(): void {
    const input = this.element.nativeElement;
    const min = input.min === '' ? 0 : Number(input.min);
    const max = input.max === '' ? 100 : Number(input.max);
    const progress = max > min ? Math.max(0, Math.min(100, ((input.valueAsNumber - min) / (max - min)) * 100)) : 0;
    const value = `${Number.isFinite(progress) ? progress : 0}%`;
    if (input.style.getPropertyValue('--bx-slider-progress') !== value) input.style.setProperty('--bx-slider-progress', value);
    if (this.shell) {
      const position = String((input.matches(':dir(rtl)') ? 100 - (Number.isFinite(progress) ? progress : 0) : Number.isFinite(progress) ? progress : 0) / 100);
      if (this.shell.style.getPropertyValue('--bx-slider-position') !== position) {
        this.shell.style.setProperty('--bx-slider-position', position);
        if (this.thumb) refreshGlassLighting(this.thumb);
      }
      this.shell.classList.toggle('is-disabled', input.disabled);
    }
  }
}
