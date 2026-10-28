import { subscribeFrame } from './scheduler';
import { inheritedAttribute } from './configuration';
import { lightingVisibility } from './visibility';
import type { PointLight } from './scene';

export interface AmbientReceiver {
  id: number;
  element: HTMLElement;
  visible: boolean;
  bounds?: DOMRect;
}
interface VisualSource {
  element: Element;
  color: string;
}
interface Sample {
  lights: PointLight[];
  media: Set<Element>;
  rects: Map<Element, DOMRect>;
}
interface RasterSample {
  data: ImageData | null;
  stamp?: number;
}

const sampleInterval = 180;
const liveInterval = 500;
const rasterSize = 32;

/** Slow, shared environmental sampling stays independent of immediate semantic lighting. */
export class AmbientSampler {
  private samples = new Map<AmbientReceiver, Sample>();
  private dirty = new Set<AmbientReceiver>();
  private pending = new Set<AmbientReceiver>();
  private sources = new Set<Element>();
  private initialized = false;
  private media = new WeakMap<Element, RasterSample>();
  private dependencies?: Set<Element>;
  private sampleCanvas: HTMLCanvasElement;
  private sampleContext: CanvasRenderingContext2D | null;
  private timer?: number;
  private liveTimer?: number;
  private stopFrame?: () => void;
  private nextSample = 0;
  private liveDelay = liveInterval;
  private motion: MediaQueryList;

  constructor(
    private doc: Document,
    private view: Window,
    private changed: (entry: AmbientReceiver) => void,
    private observeRoot: (root: ShadowRoot) => void
  ) {
    this.sampleCanvas = doc.createElement('canvas');
    this.sampleCanvas.width = this.sampleCanvas.height = rasterSize;
    this.sampleContext = this.sampleCanvas.getContext('2d', { willReadFrequently: true });
    this.motion = view.matchMedia('(prefers-reduced-motion: reduce)');
  }

  public add(entry: AmbientReceiver): void {
    if (!this.initialized) {
      this.scan(this.doc);
      this.initialized = true;
    }
    const root = entry.element.getRootNode();
    if ('host' in root) this.scan(root as ShadowRoot);
    this.samples.set(entry, { lights: [], media: new Set(), rects: new Map() });
    this.invalidate(entry);
  }

  public remove(entry: AmbientReceiver): void {
    this.samples.delete(entry);
    this.dirty.delete(entry);
    this.pending.delete(entry);
    this.syncLive();
  }

  public lights(entry: AmbientReceiver): PointLight[] {
    return this.samples.get(entry)?.lights ?? [];
  }

  public invalidate(entry?: AmbientReceiver): void {
    for (const receiver of entry ? [entry] : this.samples.keys()) {
      if (receiver.visible && receiver.element.isConnected) this.dirty.add(receiver);
    }
    this.resume();
  }

  public assetChanged(element: Element): void {
    this.media.delete(element);
    this.invalidate();
  }

  public sourcesChanged(record: MutationRecord): void {
    for (const node of record.addedNodes) {
      if (node.nodeType === 1) this.scan(node as Element);
    }
    for (const source of this.sources) if (!source.isConnected) this.sources.delete(source);
  }

  public resume(): void {
    if (this.doc.hidden) {
      if (this.timer !== undefined) this.view.clearTimeout(this.timer);
      if (this.liveTimer !== undefined) this.view.clearTimeout(this.liveTimer);
      this.timer = this.liveTimer = undefined;
      this.stopFrame?.();
      this.stopFrame = undefined;
      for (const entry of this.pending) this.dirty.add(entry);
      this.pending.clear();
      return;
    }
    if (this.dirty.size && this.timer === undefined && !this.stopFrame) {
      this.timer = this.view.setTimeout(
        () => {
          this.timer = undefined;
          this.nextSample = this.view.performance.now() + sampleInterval;
          this.pending = this.dirty;
          this.dirty = new Set();
          this.stopFrame = subscribeFrame(() => this.sampleBatch());
        },
        Math.max(0, this.nextSample - this.view.performance.now())
      );
    }
    this.syncLive();
  }

  public destroy(): void {
    if (this.timer !== undefined) this.view.clearTimeout(this.timer);
    if (this.liveTimer !== undefined) this.view.clearTimeout(this.liveTimer);
    this.stopFrame?.();
    this.stopFrame = undefined;
    this.timer = this.liveTimer = undefined;
    this.samples.clear();
    this.dirty.clear();
    this.pending.clear();
    this.sources.clear();
    this.media = new WeakMap();
    this.initialized = false;
    this.nextSample = 0;
    this.liveDelay = liveInterval;
  }

  private scan(root: ParentNode): void {
    // Inventory only on insertion, including open shadow roots; never rescan the page on a tick.
    if ('host' in root) this.observeRoot(root as ShadowRoot);
    if ('tagName' in root && /^(IMG|VIDEO|CANVAS)$/.test(String(root.tagName))) this.sources.add(root as Element);
    const shadow = 'shadowRoot' in root ? (root as Element).shadowRoot : null;
    if (shadow) this.scan(shadow);
    for (const element of root.querySelectorAll('*')) {
      if (/^(IMG|VIDEO|CANVAS)$/.test(element.tagName)) this.sources.add(element);
      if (element.shadowRoot) this.scan(element.shadowRoot);
    }
  }

  private sampleBatch(): boolean {
    const start = this.view.performance.now();
    const visibility = lightingVisibility(this.doc, this.view);
    const rects = new Map<Element, DOMRect>();
    const rasterSamples = new Map<Element, ImageData | null>();
    const sources = [...this.sources];
    const completed: AmbientReceiver[] = [];
    for (const entry of this.pending) {
      this.pending.delete(entry);
      if (!entry.visible || !entry.element.isConnected || !this.samples.has(entry)) continue;
      entry.bounds = entry.element.getBoundingClientRect();
      this.dependencies = new Set();
      const lights = this.environmentLights(entry, sources, rasterSamples, rects, visibility);
      const mediaRects = new Map<Element, DOMRect>();
      for (const source of this.dependencies) mediaRects.set(source, this.rectFor(source, rects));
      this.samples.set(entry, { lights, media: this.dependencies, rects: mediaRects });
      completed.push(entry);
      // A receiver is atomic. Yield between receivers rather than block a frame with a whole page.
      if (completed.length >= 4 || this.view.performance.now() - start >= 4) break;
    }
    this.dependencies = undefined;
    for (const entry of completed) this.changed(entry);
    if (this.pending.size) return true;
    this.stopFrame = undefined;
    this.resume();
    return false;
  }

  private liveSources(): Map<Element, AmbientReceiver[]> {
    const sources = new Map<Element, AmbientReceiver[]>();
    for (const [entry, sample] of this.samples) {
      const motion = inheritedAttribute(entry.element, 'data-bx-reduced-motion');
      if (!entry.visible || !entry.element.isConnected || (motion === null ? this.motion.matches : motion === 'true')) continue;
      for (const source of sample.media) {
        if (!source.isConnected || !/^(CANVAS|VIDEO)$/.test(source.tagName) || this.media.get(source)?.data === null) continue;
        if (source.tagName === 'VIDEO' && (source as HTMLVideoElement).paused) continue;
        const entries = sources.get(source) ?? [];
        entries.push(entry);
        sources.set(source, entries);
      }
    }
    return sources;
  }

  private syncLive(): void {
    const active = !this.doc.hidden && this.liveSources().size > 0;
    if (!active && this.liveTimer !== undefined) {
      this.view.clearTimeout(this.liveTimer);
      this.liveTimer = undefined;
    }
    if (!active || this.liveTimer !== undefined) return;
    this.liveTimer = this.view.setTimeout(() => {
      this.liveTimer = undefined;
      let changed = false;
      const recolored = new Set<AmbientReceiver>();
      const visibility = lightingVisibility(this.doc, this.view);
      for (const [source, entries] of this.liveSources()) {
        const previous = this.media.get(source);
        const next = this.readRaster(source, true);
        // Compare quantized pixels, not just the fact that a canvas/video exists.
        if (previous?.data && next?.data && this.samePixels(previous.data, next.data)) continue;
        if (previous?.data === next?.data) continue;
        changed = true;
        const coverageChanged = !previous?.data || !next?.data || !this.samePixels(previous.data, next.data, true);
        for (const entry of entries) {
          const sample = this.samples.get(entry);
          if (!sample || coverageChanged || this.dirty.has(entry) || this.pending.has(entry)) {
            this.dirty.add(entry);
            continue;
          }
          // Animation changes pixels, not the hit-test stack. Reuse the source bindings and
          // geometry until a real layout/visibility invalidation, and repaint only changed taps.
          const pixels = new Map([[source, next?.data ?? null]]);
          sample.lights = sample.lights.map((light) => {
            if (light.source !== source) return light;
            const color = this.rasterColorAt(source, light.x, light.y, pixels, sample.rects, visibility);
            if (!color || color === light.color) return light;
            recolored.add(entry);
            return { ...light, color };
          });
        }
      }
      for (const entry of recolored) this.changed(entry);
      this.liveDelay = changed ? liveInterval : Math.min(2000, this.liveDelay * 2);
      this.resume();
    }, this.liveDelay);
  }

  private samePixels(first: ImageData, second: ImageData, alphaOnly = false): boolean {
    for (let index = alphaOnly ? 3 : 0; index < first.data.length; index += alphaOnly ? 4 : 1) {
      if (first.data[index] >> 3 !== second.data[index] >> 3) return false;
    }
    return true;
  }

  private readRaster(element: Element, refresh = false): RasterSample | undefined {
    const cached = this.media.get(element);
    if (cached && !refresh) return cached;
    const tag = element.tagName;
    let source: CanvasImageSource;
    let stamp: number | undefined;
    if (tag === 'IMG') {
      const image = element as HTMLImageElement;
      if (!image.complete || !image.naturalWidth) return undefined;
      source = image;
    } else if (tag === 'VIDEO') {
      const video = element as HTMLVideoElement;
      if (video.readyState < 2 || !video.videoWidth) return undefined;
      stamp = video.currentTime;
      if (cached?.stamp === stamp) return cached;
      source = video;
    } else {
      const canvas = element as HTMLCanvasElement;
      if (!canvas.width || !canvas.height) return undefined;
      source = canvas;
    }
    if (!this.sampleContext) return undefined;
    let data: ImageData | null = null;
    try {
      this.sampleContext.clearRect(0, 0, rasterSize, rasterSize);
      this.sampleContext.drawImage(source, 0, 0, rasterSize, rasterSize);
      data = this.sampleContext.getImageData(0, 0, rasterSize, rasterSize);
    } catch {
      // Cache failures too, and recover the shared buffer after a cross-origin source taints it.
      this.sampleCanvas.width = rasterSize;
      this.sampleContext = this.sampleCanvas.getContext('2d', { willReadFrequently: true });
    }
    const result = { data, stamp };
    this.media.set(element, result);
    return result;
  }

  private environmentLights(
    entry: AmbientReceiver,
    rasterSources: Element[],
    rasterSamples: Map<Element, ImageData | null>,
    rects: Map<Element, DOMRect>,
    visibility: ReturnType<typeof lightingVisibility>
  ): PointLight[] {
    const bounds = entry.bounds;
    if (
      !bounds ||
      bounds.width <= 0 ||
      bounds.height <= 0 ||
      entry.element.getAttribute('data-bx-surface') === 'solid' ||
      entry.element.getAttribute('data-bx-reduced-transparency') === 'true'
    )
      return [];
    const insetX = Math.min(3, bounds.width * 0.1);
    const insetY = Math.min(3, bounds.height * 0.1);
    const points = [
      { x: bounds.left + bounds.width * 0.24, y: bounds.top + insetY, side: 'inside' as const, edge: 0 },
      { x: bounds.left + bounds.width * 0.76, y: bounds.top + insetY, side: 'inside' as const, edge: 0 },
      { x: bounds.right - insetX, y: bounds.top + bounds.height * 0.24, side: 'inside' as const, edge: 1 },
      { x: bounds.right - insetX, y: bounds.top + bounds.height * 0.76, side: 'inside' as const, edge: 1 },
      { x: bounds.left + bounds.width * 0.76, y: bounds.bottom - insetY, side: 'inside' as const, edge: 2 },
      { x: bounds.left + bounds.width * 0.24, y: bounds.bottom - insetY, side: 'inside' as const, edge: 2 },
      { x: bounds.left + insetX, y: bounds.top + bounds.height * 0.76, side: 'inside' as const, edge: 3 },
      { x: bounds.left + insetX, y: bounds.top + bounds.height * 0.24, side: 'inside' as const, edge: 3 },
      ...[24, 96].flatMap((gap) => [
        { x: bounds.left + bounds.width / 2, y: bounds.top - gap, side: 'outside' as const, edge: 0 },
        { x: bounds.right + gap, y: bounds.top + bounds.height / 2, side: 'outside' as const, edge: 1 },
        { x: bounds.left + bounds.width / 2, y: bounds.bottom + gap, side: 'outside' as const, edge: 2 },
        { x: bounds.left - gap, y: bounds.top + bounds.height / 2, side: 'outside' as const, edge: 3 }
      ])
    ];
    const visibleX = Math.max(1, Math.min(this.view.innerWidth - 1, bounds.left + bounds.width / 2));
    const visibleY = Math.max(1, Math.min(this.view.innerHeight - 1, bounds.top + bounds.height / 2));
    if (!visibility.exposed(entry.element, visibleX, visibleY, bounds)) return [];
    const targetBoundary = visibility.ambientBoundary(entry.element);
    const passiveTooltip = visibility.style(entry.element).pointerEvents === 'none' && !!entry.element.closest('bx-tooltip, [role="tooltip"]');
    // Cull once per receiver, rather than walking every media element at every edge probe.
    rasterSources = rasterSources.filter((source) => {
      const rect = this.rectFor(source, rects);
      return (
        rect.width > 0 &&
        rect.height > 0 &&
        rect.right >= bounds.left - 96 &&
        rect.left <= bounds.right + 96 &&
        rect.bottom >= bounds.top - 96 &&
        rect.top <= bounds.bottom + 96 &&
        visibility.ambientBoundary(source) === targetBoundary
      );
    });
    const lights: PointLight[] = [];
    const sourcesByEdge = new Map<number, Set<Element>>();
    const colorsByEdge = new Map<number, Map<Element, Set<string>>>();

    points.forEach((point, index) => {
      if (point.x < 0 || point.y < 0 || point.x >= this.view.innerWidth || point.y >= this.view.innerHeight) return;
      const stack = visibility.elementsAt(point.x, point.y);
      const receiverIndex = stack.findIndex((element) => this.isInside(element, entry.element));
      let source: VisualSource | undefined;
      let foreground = false;

      if (point.side === 'inside' && receiverIndex >= 0) {
        source = this.findVisualSource(stack.slice(0, receiverIndex), entry, point.x, point.y, visibility, rasterSamples, rects, {
          skipAncestors: true,
          skipRoot: true
        });
        if (source) foreground = true;
        source ??= this.findRasterSource(rasterSources, entry, point.x, point.y, visibility, rasterSamples, rects, stack, receiverIndex, true, targetBoundary);
        source ??= this.findVisualSource(stack.slice(receiverIndex + 1), entry, point.x, point.y, visibility, rasterSamples, rects, {
          skipAncestors: true,
          skipRoot: true
        });
        source ??= this.findRasterSource(rasterSources, entry, point.x, point.y, visibility, rasterSamples, rects, stack, receiverIndex, false, targetBoundary);
        source ??= this.findVisualSource(stack.slice(receiverIndex + 1), entry, point.x, point.y, visibility, rasterSamples, rects, {
          skipAncestors: false,
          skipRoot: true
        });
        source ??= this.findVisualSource(stack.slice(receiverIndex + 1), entry, point.x, point.y, visibility, rasterSamples, rects, {
          skipAncestors: false,
          skipRoot: false
        });
      } else if (point.side === 'outside' || (receiverIndex < 0 && passiveTooltip)) {
        source = this.findVisualSource(stack, entry, point.x, point.y, visibility, rasterSamples, rects, {
          skipAncestors: true,
          skipRoot: true
        });
        source ??= this.findRasterSource(rasterSources, entry, point.x, point.y, visibility, rasterSamples, rects, stack, -1, undefined, targetBoundary);
        source ??= this.findVisualSource(stack, entry, point.x, point.y, visibility, rasterSamples, rects, {
          skipAncestors: false,
          skipRoot: true
        });
        source ??= this.findVisualSource(stack, entry, point.x, point.y, visibility, rasterSamples, rects, {
          skipAncestors: false,
          skipRoot: false
        });
      }

      if (!source || visibility.ambientBoundary(source.element) !== targetBoundary) return;
      const sourceRect = this.rectFor(source.element, rects);
      const gapX = Math.max(bounds.left - sourceRect.right, sourceRect.left - bounds.right, 0);
      const gapY = Math.max(bounds.top - sourceRect.bottom, sourceRect.top - bounds.bottom, 0);
      if (point.side === 'outside' && Math.hypot(gapX, gapY) > 160) return;
      if (source.element === entry.element || this.isInside(source.element, entry.element)) return;
      const edgeSources = sourcesByEdge.get(point.edge) ?? new Set<Element>();
      if (point.side === 'outside' && edgeSources.has(source.element)) return;
      const edgeColors = colorsByEdge.get(point.edge) ?? new Map<Element, Set<string>>();
      const sourceColors = edgeColors.get(source.element) ?? new Set<string>();
      if (point.side === 'outside' && sourceColors.has(source.color)) return;
      sourceColors.add(source.color);
      edgeColors.set(source.element, sourceColors);
      colorsByEdge.set(point.edge, edgeColors);
      if (point.side === 'inside') {
        edgeSources.add(source.element);
        sourcesByEdge.set(point.edge, edgeSources);
      }

      if (point.side === 'outside') {
        foreground = this.isAmbientForeground(source.element, entry.element, stack, -1, visibility);
      }
      const depth = foreground ? 24 : 52;
      const gap = Math.hypot(gapX, gapY);
      const edgeLength = point.edge % 2 === 0 ? bounds.width : bounds.height;
      lights.push({
        key: `environment:${entry.id}:${index}`,
        source: source.element.namespaceURI === 'http://www.w3.org/1999/xhtml' ? (source.element as HTMLElement) : undefined,
        ambient: true,
        x: point.x,
        y: point.y,
        z: depth,
        color: source.color,
        intensity: (point.side === 'inside' ? 0.38 : 0.48) * Math.pow(Math.max(0, 1 - gap / 160), 2),
        radius: 240,
        spread: Math.max(48, Math.min(240, edgeLength * 0.65))
      });
    });

    return lights;
  }

  private findVisualSource(
    elements: Element[],
    entry: AmbientReceiver,
    x: number,
    y: number,
    visibility: ReturnType<typeof lightingVisibility>,
    rasterSamples: Map<Element, ImageData | null>,
    rects: Map<Element, DOMRect>,
    options: { skipAncestors: boolean; skipRoot: boolean }
  ): VisualSource | undefined {
    for (const element of elements) {
      if (element === entry.element || this.isInside(element, entry.element)) continue;
      if (options.skipAncestors && this.isInside(entry.element, element)) continue;
      if (options.skipRoot && (element === this.doc.documentElement || element === this.doc.body)) continue;
      if (visibility.ambientBoundary(element) !== visibility.ambientBoundary(entry.element)) continue;
      const color = this.visualColorAt(element, x, y, visibility, rasterSamples, rects);
      if (color) return { element, color };
    }
    return undefined;
  }

  private findRasterSource(
    sources: Element[],
    entry: AmbientReceiver,
    x: number,
    y: number,
    visibility: ReturnType<typeof lightingVisibility>,
    rasterSamples: Map<Element, ImageData | null>,
    rects: Map<Element, DOMRect>,
    stack: Element[],
    receiverIndex: number,
    foreground: boolean | undefined,
    targetBoundary: HTMLElement
  ): VisualSource | undefined {
    const matches = sources
      .filter((element) => {
        if (this.isInside(element, entry.element) || visibility.ambientBoundary(element) !== targetBoundary) return false;
        const bounds = this.rectFor(element, rects);
        if (x < bounds.left || x >= bounds.right || y < bounds.top || y >= bounds.bottom) return false;
        return foreground === undefined || this.isAmbientForeground(element, entry.element, stack, receiverIndex, visibility) === foreground;
      })
      .sort((first, second) => this.rasterOrder(second, stack, entry.element, visibility) - this.rasterOrder(first, stack, entry.element, visibility));

    for (const element of matches) {
      const color = this.rasterColorAt(element, x, y, rasterSamples, rects, visibility);
      if (color) return { element, color };
    }
    return undefined;
  }

  private visualColorAt(
    element: Element,
    x: number,
    y: number,
    visibility: ReturnType<typeof lightingVisibility>,
    rasterSamples: Map<Element, ImageData | null>,
    rects: Map<Element, DOMRect>
  ): string | undefined {
    const raster = this.rasterColorAt(element, x, y, rasterSamples, rects, visibility);
    if (raster) return raster;
    const style = visibility.style(element);
    const gradient = this.gradientColorAt(style.backgroundImage, this.rectFor(element, rects), x, y);
    if (gradient) return gradient;
    if (!this.isTransparent(style.backgroundColor)) return style.backgroundColor;
    for (const side of ['top', 'right', 'bottom', 'left']) {
      const color = style.getPropertyValue(`border-${side}-color`);
      if (parseFloat(style.getPropertyValue(`border-${side}-width`)) > 0 && !this.isTransparent(color)) return color;
    }
    return undefined;
  }

  private rasterColorAt(
    element: Element,
    x: number,
    y: number,
    cache: Map<Element, ImageData | null>,
    rects: Map<Element, DOMRect>,
    visibility: ReturnType<typeof lightingVisibility>
  ): string | undefined {
    const tag = element.tagName;
    if (!/^(IMG|CANVAS|VIDEO)$/.test(tag)) return undefined;
    const bounds = this.rectFor(element, rects);
    if (bounds.width <= 0 || bounds.height <= 0) return undefined;
    const css = visibility.style(element);
    if (css.visibility !== 'visible' || Number(css.opacity) === 0) return undefined;
    this.dependencies?.add(element);
    let data = cache.get(element);
    if (data === undefined) {
      data = this.readRaster(element)?.data ?? null;
      cache.set(element, data);
    }
    if (!data) return undefined;

    let u = Math.max(0, Math.min(1, (x - bounds.left) / bounds.width));
    let v = Math.max(0, Math.min(1, (y - bounds.top) / bounds.height));
    if ((tag === 'IMG' || tag === 'VIDEO') && css.objectFit !== 'fill') {
      const width = tag === 'IMG' ? (element as HTMLImageElement).naturalWidth : (element as HTMLVideoElement).videoWidth;
      const height = tag === 'IMG' ? (element as HTMLImageElement).naturalHeight : (element as HTMLVideoElement).videoHeight;
      if (!width || !height) return undefined;
      const contain = Math.min(bounds.width / width, bounds.height / height);
      const scale =
        css.objectFit === 'cover'
          ? Math.max(bounds.width / width, bounds.height / height)
          : css.objectFit === 'none'
            ? 1
            : css.objectFit === 'scale-down'
              ? Math.min(1, contain)
              : contain;
      const [positionX = '50%', positionY = '50%'] = css.objectPosition.split(' ');
      const offset = (position: string, space: number) => {
        if (position.endsWith('%')) return (parseFloat(position) / 100) * space;
        if (position.endsWith('px')) return parseFloat(position);
        return position === 'left' || position === 'top' ? 0 : position === 'right' || position === 'bottom' ? space : space / 2;
      };
      u = (x - bounds.left - offset(positionX, bounds.width - width * scale)) / (width * scale);
      v = (y - bounds.top - offset(positionY, bounds.height - height * scale)) / (height * scale);
      // A letterbox is the element's CSS background, not a stretched image edge.
      if (u < 0 || u > 1 || v < 0 || v > 1) return undefined;
    }
    const px = Math.max(0, Math.min(data.width - 1, Math.floor(u * data.width)));
    const py = Math.max(0, Math.min(data.height - 1, Math.floor(v * data.height)));
    const offset = (py * data.width + px) * 4;
    const alpha = data.data[offset + 3] / 255;
    if (alpha < 0.08) return undefined;
    return `rgb(${data.data[offset]} ${data.data[offset + 1]} ${data.data[offset + 2]} / ${alpha.toFixed(2)})`;
  }

  private gradientColorAt(image: string, bounds: DOMRect, x: number, y: number): string | undefined {
    if (!image.includes('gradient(')) return undefined;
    const matches = image.match(
      /#[\da-f]{3,8}\b|(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch|color)\([^)]*\)|\b(?:transparent|black|white|red|green|blue|orange|yellow|purple|gray|grey|teal|cyan|magenta)\b/gi
    );
    const colors = (matches ?? []).filter((color) => !this.isTransparent(color));
    if (!colors.length) return undefined;

    let amount = 0.5;
    if (image.includes('linear-gradient(')) {
      const prelude =
        image
          .match(/linear-gradient\(\s*([^,]+)/i)?.[1]
          ?.trim()
          .toLowerCase() ?? '';
      let dx = 0,
        dy = 1;
      const angle = prelude.match(/^(-?[\d.]+)deg$/);
      if (angle) {
        const radians = (Number(angle[1]) * Math.PI) / 180;
        dx = Math.sin(radians);
        dy = -Math.cos(radians);
      } else if (prelude.startsWith('to ')) {
        dx = prelude.includes('right') ? 1 : prelude.includes('left') ? -1 : 0;
        dy = prelude.includes('bottom') ? 1 : prelude.includes('top') ? -1 : 0;
      }
      const range = Math.max(0.01, Math.abs(dx) + Math.abs(dy));
      const u = (x - bounds.left) / Math.max(1, bounds.width) - 0.5;
      const v = (y - bounds.top) / Math.max(1, bounds.height) - 0.5;
      amount = Math.max(0, Math.min(1, 0.5 + (u * dx + v * dy) / range));
    } else {
      const u = (x - (bounds.left + bounds.width / 2)) / Math.max(1, bounds.width / 2);
      const v = (y - (bounds.top + bounds.height / 2)) / Math.max(1, bounds.height / 2);
      amount = Math.max(0, Math.min(1, Math.hypot(u, v) / Math.SQRT2));
    }
    return colors[Math.min(colors.length - 1, Math.round(amount * (colors.length - 1)))];
  }

  private isTransparent(color: string): boolean {
    const value = color.trim().toLowerCase();
    if (!value || value === 'transparent') return true;
    const alpha = value.match(/\/\s*([\d.]+)%?\s*\)$/) ?? (/^rgba\(|^hsla\(/.test(value) ? value.match(/,\s*([\d.]+)\s*\)$/) : null);
    return !!alpha && Number(alpha[1]) <= 0.02;
  }

  private isInside(element: Element, ancestor: Element): boolean {
    let current: Element | null = element;
    while (current) {
      if (current === ancestor) return true;
      const root = current.getRootNode() as ShadowRoot;
      current = current.parentElement ?? root.host ?? null;
    }
    return false;
  }

  private layerElement(element: Element, visibility: ReturnType<typeof lightingVisibility>): HTMLElement {
    let current: Element | null = element;
    while (current && current.namespaceURI !== 'http://www.w3.org/1999/xhtml') {
      const root = current.getRootNode() as ShadowRoot;
      current = current.parentElement ?? root.host ?? null;
    }
    return current ? visibility.layer(current as HTMLElement) : this.doc.documentElement;
  }

  private zIndex(element: HTMLElement, visibility: ReturnType<typeof lightingVisibility>): number {
    const value = Number.parseFloat(visibility.style(element).zIndex);
    return Number.isFinite(value) ? value : 0;
  }

  private isAmbientForeground(
    source: Element,
    receiver: HTMLElement,
    stack: Element[],
    receiverIndex: number,
    visibility: ReturnType<typeof lightingVisibility>
  ): boolean {
    const sourceIndex = stack.indexOf(source);
    if (sourceIndex >= 0 && receiverIndex >= 0) return sourceIndex < receiverIndex;
    const sourceLayer = this.layerElement(source, visibility);
    const receiverLayer = visibility.layer(receiver);
    const depth = this.zIndex(sourceLayer, visibility) - this.zIndex(receiverLayer, visibility);
    if (depth !== 0) return depth > 0;
    return !!(source.compareDocumentPosition(receiver) & 2);
  }

  private rasterOrder(element: Element, stack: Element[], receiver: HTMLElement, visibility: ReturnType<typeof lightingVisibility>): number {
    const index = stack.indexOf(element);
    if (index >= 0) return 10000 - index;
    return this.zIndex(this.layerElement(element, visibility), visibility) - this.zIndex(visibility.layer(receiver), visibility);
  }

  private rectFor(element: Element, rects: Map<Element, DOMRect>): DOMRect {
    let rect = rects.get(element);
    if (!rect) {
      rect = element.getBoundingClientRect();
      rects.set(element, rect);
    }
    return rect;
  }
}
