import type { IStepperMagnifier } from '@navigation/interfaces/istepper-magnifier.interface';

import { uuidv4 } from '@filip.mazev/blocks/core';

/**
 * Magnify live marker vectors and connectors while limiting raster refraction to the lens rim.
 * @param source - Rendered step list; native controls remain the sole interaction and accessibility targets.
 * @param lens - Persistent circular selection surface, positioned by the owning component's spring.
 * @returns A decorative controller whose updates reuse cached geometry and whose teardown restores the source.
 */
export function createStepperMagnifier(source: HTMLElement, lens: HTMLElement): IStepperMagnifier {
  const doc = source.ownerDocument;
  const view = doc.defaultView;
  const track = lens.parentElement;

  if (!view || !track) throw new Error('Stepper magnification requires a rendered track.');

  const prefix = `bx-step-lens-${uuidv4()}`;
  // Resolve SVG paint resources against this document even when an application sets a base href.
  const fragmentUrl = (id: string): string => `url("${doc.URL.split('#')[0]}#${id}")`;
  const originalMask = source.style.getPropertyValue('mask-image');
  const originalMaskPriority = source.style.getPropertyPriority('mask-image');
  const ownedIds = new Map<SVGSVGElement, string>();
  const container = doc.createElement('div');
  const rimClip = doc.createElement('div');
  const centerClip = doc.createElement('div');
  const svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const rimSvg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const vectors = doc.createElementNS('http://www.w3.org/2000/svg', 'g');
  const rimVectors = doc.createElementNS('http://www.w3.org/2000/svg', 'g');
  const node = <K extends keyof SVGElementTagNameMap>(parent: SVGElement, name: K, attrs: Readonly<Record<string, string>>): SVGElementTagNameMap[K] => {
    const element = doc.createElementNS('http://www.w3.org/2000/svg', name);

    for (const [key, value] of Object.entries(attrs)) element.setAttribute(key, value);

    parent.append(element);

    return element;
  };

  container.classList.add('step-vector-lens');
  container.setAttribute('aria-hidden', 'true');

  for (const element of [container, rimClip, centerClip, svg, rimSvg]) {
    Object.assign(element.style, {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      borderRadius: 'inherit',
      overflow: 'hidden',
      pointerEvents: 'none'
    });
  }

  container.style.zIndex = '2';
  centerClip.style.clipPath = 'ellipse(24% 24% at 50% 50%)';
  rimClip.style.maskImage = 'radial-gradient(ellipse 24% 24% at 50% 50%, transparent calc(100% - 0.5px), black 100%)';

  for (const element of [svg, rimSvg]) element.setAttribute('focusable', 'false');

  svg.append(vectors);
  rimSvg.append(rimVectors);
  centerClip.append(svg);
  rimClip.append(rimSvg);
  container.append(rimClip, centerClip);
  lens.append(container);

  let geometry: readonly number[] | null = null;
  let sourceX = 0;
  let sourceY = 0;
  let magnification = 1.3;
  let destroyed = false;
  let hasSpinner = false;

  const paint = (): void => {
    if (destroyed || !geometry) return;

    const [x, y, width, height, scaleX, scaleY] = geometry;
    const enabled = lens.dataset['bxRefraction'] === 'true' && !hasSpinner;

    container.style.display = enabled ? 'block' : 'none';

    if (!enabled) {
      if (originalMask) source.style.setProperty('mask-image', originalMask, originalMaskPriority);
      else source.style.removeProperty('mask-image');

      return;
    }

    source.style.setProperty(
      'mask-image',
      'radial-gradient(ellipse var(--bx-stepper-optic-rx) var(--bx-stepper-optic-ry) at var(--bx-stepper-optic-x) var(--bx-stepper-optic-y), transparent calc(100% - 0.5px), black 100%)'
    );

    const filter = lens.querySelector('filter')?.id;

    if (filter) rimClip.style.filter = fragmentUrl(filter);

    for (const element of [svg, rimSvg]) element.setAttribute('viewBox', `0 0 ${width} ${height}`);

    for (const group of [vectors, rimVectors]) {
      group.setAttribute('transform', `translate(${width / 2} ${height / 2}) scale(${magnification}) translate(${-x - width / 2} ${-y - height / 2})`);
    }

    source.style.setProperty('--bx-stepper-optic-x', `${x + width / 2 - sourceX}px`);
    source.style.setProperty('--bx-stepper-optic-y', `${y + height / 2 - sourceY}px`);
    source.style.setProperty('--bx-stepper-optic-rx', `${(width / 2) * scaleX}px`);
    source.style.setProperty('--bx-stepper-optic-ry', `${(height / 2) * scaleY}px`);
  };

  const refresh = (): void => {
    if (destroyed) return;

    const origin = track.getBoundingClientRect();
    const layoutWidth = parseFloat(view.getComputedStyle(track).width);
    const scale = origin.width > 0 && layoutWidth > 0 ? origin.width / layoutWidth : 1;
    const listBounds = source.getBoundingClientRect();
    const configured = parseFloat(view.getComputedStyle(lens).getPropertyValue('--bx-stepper-magnification'));

    magnification = Number.isFinite(configured) ? Math.max(1, Math.min(2, configured)) : 1.3;
    sourceX = (listBounds.x - origin.x) / scale;
    sourceY = (listBounds.y - origin.y) / scale;
    // Keep CSS-driven loading indicators live instead of replacing them with static vectors.
    hasSpinner = !!source.querySelector('bx-loading-spinner');
    vectors.replaceChildren();

    const elements = [...source.querySelectorAll<HTMLElement>('.step-connector, .step-connector-fill, .marker-content')];

    if (source.matches('.marker-content')) elements.unshift(source);

    for (const element of elements) {
      const bounds = element.getBoundingClientRect();
      const style = view.getComputedStyle(element);
      const x = (bounds.x - origin.x) / scale;
      const y = (bounds.y - origin.y) / scale;
      const width = bounds.width / scale;
      const height = bounds.height / scale;

      if (element.matches('.step-connector, .step-connector-fill')) {
        node(vectors, 'rect', { x: String(x), y: String(y), width: String(width), height: String(height), fill: style.backgroundColor });

        continue;
      }

      const visuals = Array.from(element.querySelectorAll<SVGSVGElement | HTMLElement>('svg, .marker-symbol:not(bx-icon)'));

      if (!visuals.length) visuals.push(element);

      for (const visual of visuals) {
        const visualBounds = visual.getBoundingClientRect();
        const visualStyle = view.getComputedStyle(visual);

        let opacity = 1;
        let visualScale = 1;

        for (let ancestor: Element | null = visual; ancestor; ancestor = ancestor.parentElement) {
          const ancestorStyle = view.getComputedStyle(ancestor);
          const localScale = Number.parseFloat(ancestorStyle.scale);

          opacity *= Number(ancestorStyle.opacity);

          if (Number.isFinite(localScale)) visualScale *= localScale;

          if (ancestor === element) break;
        }

        if (visual instanceof view.SVGSVGElement) {
          if (!visual.id) {
            const id = `${prefix}-icon-${ownedIds.size}`;

            ownedIds.set(visual, id);
            visual.id = id;
          }

          const use = node(vectors, 'use', {
            href: `#${visual.id}`,
            x: String((visualBounds.x - origin.x) / scale),
            y: String((visualBounds.y - origin.y) / scale),
            width: String(visualBounds.width / scale),
            height: String(visualBounds.height / scale),
            opacity: String(opacity)
          });

          use.style.color = visualStyle.color;
        } else {
          const text = node(vectors, 'text', {
            x: String((visualBounds.x + visualBounds.width / 2 - origin.x) / scale),
            y: String((visualBounds.y + visualBounds.height / 2 - origin.y) / scale),
            'text-anchor': 'middle',
            'dominant-baseline': 'central',
            opacity: String(opacity)
          });

          text.textContent = visual.textContent?.trim() ?? '';
          text.style.font = visualStyle.font;
          text.style.fontSize = `${Number.parseFloat(visualStyle.fontSize) * visualScale}px`;
          text.style.fill = visualStyle.color;
        }
      }
    }

    rimVectors.replaceChildren(...Array.from(vectors.children, (element) => element.cloneNode(true)));
    paint();
  };

  const content = new view.MutationObserver((records) => {
    // Only presence styles carry the crossfade; ignore mask writes and unrelated material animation.
    if (
      records.some(
        (record) =>
          record.type !== 'attributes' ||
          record.attributeName !== 'style' ||
          (record.target instanceof view.Element && record.target.classList.contains('bx-visual-layer'))
      )
    ) {
      refresh();
    }
  });
  const appearance = new view.MutationObserver(refresh);

  content.observe(source, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['class', 'style', 'data-status'] });
  appearance.observe(lens, { attributes: true, attributeFilter: ['data-bx-refraction'] });

  for (let ancestor = source.parentElement; ancestor; ancestor = ancestor.parentElement) {
    appearance.observe(ancestor, { attributes: true, attributeFilter: ['class', 'style', 'data-theme'] });
  }

  refresh();

  return {
    source,
    lens,
    refresh,
    update(x, y, width, height, scaleX, scaleY) {
      geometry = [x, y, width, height, scaleX, scaleY];
      paint();
    },
    destroy() {
      destroyed = true;
      content.disconnect();
      appearance.disconnect();
      container.remove();

      if (originalMask) source.style.setProperty('mask-image', originalMask, originalMaskPriority);
      else source.style.removeProperty('mask-image');

      for (const property of ['x', 'y', 'rx', 'ry']) source.style.removeProperty(`--bx-stepper-optic-${property}`);

      for (const [icon, id] of ownedIds) if (icon.id === id) icon.removeAttribute('id');

      ownedIds.clear();
    }
  };
}
