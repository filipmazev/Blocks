import { SLOTS } from '@effects/runtime/constants/refraction-maps.constants';
import { rememberStyles } from '@effects/runtime/helpers/dom.helpers';
import { cachedRefraction, readRadius } from '@effects/runtime/helpers/refraction.helpers';
import { createRefractionFilter, layoutRefractionFilter } from '@effects/runtime/helpers/refraction-filter.helpers';
import { el, layer, setAttr, setBackdrop, setFieldImages, setStyle } from '@effects/runtime/helpers/refraction-svg.helpers';

/** One live backdrop pass; lighting stays in the existing shared Blocks decorations. */
export class RefractiveSurface {
  private readonly view: NonNullable<Document['defaultView']>;
  private readonly defs: SVGSVGElement;
  private readonly pane: HTMLElement;
  private readonly filter: ReturnType<typeof createRefractionFilter>;
  private readonly observer: ResizeObserver;
  private readonly restore: () => void;

  private static instances: number = 0;
  private visible: boolean = true;
  private disposed: boolean = false;
  private width: number = 0;
  private height: number = 0;
  private radius: number = -1;

  constructor(private readonly host: HTMLElement) {
    const doc = host.ownerDocument;
    const view = doc.defaultView;

    if (!view) throw new Error('Refraction must be mounted in a browser document.');

    this.view = view;
    this.restore = rememberStyles(host, ['--bx-refraction-r']);

    const root = doc.createDocumentFragment();
    const id = `bx-refraction-balanced-${++RefractiveSurface.instances}`;

    this.defs = el(root, 'svg', { class: 'bx-refraction-defs', width: 0, height: 0, 'aria-hidden': 'true', focusable: 'false' });
    this.filter = createRefractionFilter(this.defs, id);
    this.pane = layer(root, 'bx-refraction-layer bx-refraction-pane');
    host.prepend(root);
    setBackdrop(this.pane, `url(#${id}) blur(var(--bx-refraction-blur, 0.5px)) saturate(var(--bx-refraction-saturation, 1.15))`);
    this.observer = new view.ResizeObserver(() => this.update());
    this.observer.observe(host);
    this.update();
  }

  public refresh(): void {
    // Refraction samples only its own box, which the browser invalidates with the backdrop.
  }

  public setVisible(visible: boolean): void {
    if (this.disposed || this.visible === visible) return;

    this.visible = visible;
    this.pane.hidden = !visible;

    if (visible) this.update();
  }

  public update(): void {
    if (this.disposed || !this.visible) return;

    const width = this.host.offsetWidth;
    const height = this.host.offsetHeight;
    const radius = readRadius(this.host);

    if (width < 8 || height < 8 || (width === this.width && height === this.height && radius === this.radius)) return;

    this.width = width;
    this.height = height;
    this.radius = radius;

    const map = cachedRefraction(Math.min(width, height), radius);

    setFieldImages(this.filter.refrField, map);

    for (const slot of SLOTS) setAttr(this.filter.tiltTiles[slot], 'href', map.tilt.img[slot]);

    setAttr(this.filter.tiltRamp, 'href', map.tiltRamp);
    layoutRefractionFilter(this.filter, map, width, height);
    this.host.style.setProperty('--bx-refraction-r', `${Math.max(0.01, Math.min(radius, width / 2, height / 2))}px`);

    const style = this.view.getComputedStyle(this.host);

    for (const side of ['top', 'right', 'bottom', 'left']) {
      setStyle(this.pane, side, `${-(parseFloat(style.getPropertyValue(`border-${side}-width`)) || 0)}px`);
    }
  }

  public destroy(): void {
    if (this.disposed) return;

    this.disposed = true;
    this.observer.disconnect();
    this.pane.remove();
    this.defs.remove();
    this.restore();
  }
}
