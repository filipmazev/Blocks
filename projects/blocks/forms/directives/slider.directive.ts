import { afterEveryRender, afterNextRender, DestroyRef, Directive, ElementRef, HostListener, inject, input, NgZone } from '@angular/core';
import { observeGlassLighting, refreshGlassLighting } from '@filip.mazev/blocks/effects/runtime';
import { ThemingService } from '@filip.mazev/blocks/core';

/** Glass styling for a native range, including reactive forms and programmatic values. */
@Directive({ selector: 'input[type=range][bxSlider]', host: { class: 'bx-slider' } })
export class SliderDirective {
  private readonly element = inject<ElementRef<HTMLInputElement>>(ElementRef);
  private readonly theme = inject(ThemingService);
  public readonly discrete = input(false);
  public readonly displayWith = input<(value: number) => string>(String);
  public readonly showTickMarks = input(false);

  private shell?: HTMLSpanElement;
  private valueLabel?: HTMLSpanElement;
  private tickList?: HTMLDataListElement;
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
      const lens = input.ownerDocument.createElement('span');
      lens.className = 'bx-slider-lens';
      thumb.append(lens);
      input.before(shell);
      shell.append(input, thumb);
      this.shell = shell;
      this.thumb = thumb;
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
