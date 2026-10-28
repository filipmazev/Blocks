import { AmbientSampler } from './ambient';
import { configurationEvent } from './configuration';
import { finiteClamp } from './dom';
import { subscribeFrame } from './scheduler';
import { lightBoundarySelector, lightingVisibility } from './visibility';
import type { GlassLight, GlassReflector, GlassScene, GlassSceneOptions } from './types';

export interface LightContribution {
  key: string;
  x: number;
  y: number;
  color: string;
  strength: number;
  edgeStrength: number;
  ambient?: boolean;
  spread?: number;
}
export interface Lighting {
  x: number;
  y: number;
  strength: number;
  color: string;
  rim: string;
  contributions: LightContribution[];
  reflection: string;
  reflectionStrength: number;
  reflectionX: number;
  reflectionY: number;
}
interface SurfaceHooks {
  hitTarget?: HTMLElement;
  light(value: Lighting): void;
  interactive(): boolean;
  emission?(): string | undefined;
  focusEmission?(): string | undefined;
  emit?(active: boolean, color?: string): void;
  press(): void;
  release(): void;
  sync(): void;
}
interface Entry {
  id: number;
  element: HTMLElement;
  hooks: SurfaceHooks;
  visible: boolean;
  bounds?: DOMRect;
}
interface SceneEntry {
  id: number;
  root: HTMLElement;
  options: GlassSceneOptions;
}
export interface PointLight {
  key: string;
  bounds?: DOMRect;
  source?: HTMLElement;
  ambient?: boolean;
  spread?: number;
  excludeSource?: boolean;
  excludeElement?: HTMLElement;
  x: number;
  y: number;
  z: number;
  color: string;
  intensity: number;
  radius: number;
}
interface Reflection {
  source: HTMLElement;
  x: number;
  y: number;
  depth: number;
  color: string;
  intensity: number;
  radius: number;
}
const runtimes = new WeakMap<Document, SceneRuntime>();
const activeStateSelector =
  '[aria-pressed="true"], [aria-selected="true"], [aria-expanded="true"], [aria-current]:not([aria-current="false"]):not([aria-current=""])';
const disabledSelector = ':disabled, [aria-disabled="true"], .is-disabled, [inert]';

function runtimeFor(doc: Document): SceneRuntime {
  let runtime = runtimes.get(doc);
  if (!runtime) {
    runtime = new SceneRuntime(doc);
    runtimes.set(doc, runtime);
  }
  return runtime;
}

/** One delegated pointer stream and visibility observer per document, never per control. */
export function registerSurface(element: HTMLElement, hooks: SurfaceHooks): () => void {
  return runtimeFor(element.ownerDocument).register(element, hooks);
}

/** Receive scene lighting for a native pseudo-element without inserting decoration into its host. */
export function observeGlassLighting(element: HTMLElement, light: (value: Lighting) => void, hitTarget: HTMLElement = element): () => void {
  return registerSurface(element, { light, hitTarget, interactive: () => false, press() {}, release() {}, sync() {} });
}

/** Invalidate a receiver after an application changes its geometry. */
export function refreshGlassLighting(element: HTMLElement): void {
  runtimeFor(element.ownerDocument).refreshElement(element);
}

/** Light fields are explicit; surfaces also sample nearby visual sources for ambient edge color. */
export function mountGlassScene(root: HTMLElement, options: GlassSceneOptions = {}): GlassScene {
  return runtimeFor(root.ownerDocument).scene(root, options);
}

class SceneRuntime {
  private entries = new Map<HTMLElement, Entry>();
  private scenes = new Set<SceneEntry>();
  private observer?: IntersectionObserver;
  private stateObserver?: MutationObserver;
  private selected = new Set<Entry>();
  private pressed?: Entry;
  private hovered?: Entry;
  private focused?: Entry;
  private focusedTarget?: Element;
  private emitting = new Map<Entry, string>();
  private nextId = 0;
  private lightIds = new WeakMap<HTMLElement, number>();
  private queue = new Set<Entry>();
  private stopFrame?: () => void;
  private connected = false;
  private motion: MediaQueryList;
  private transparency: MediaQueryList;
  private view: Window;
  private ambient: AmbientSampler;
  private renderedStyles = new WeakMap<HTMLElement, string | null>();
  private assetLoad = (event: Event) => {
    const target = event.target as Element | null;
    if (target && /^(IMG|VIDEO)$/.test(target.tagName)) this.ambient.assetChanged(target);
  };

  private visibilityChange = () => {
    if (!this.doc.hidden) this.refresh();
    this.ambient.resume();
  };

  private down = (event: PointerEvent) => {
    this.pressed = this.find(event);
    this.pressed?.hooks.press();
    this.updateEmitter();
  };

  private up = () => {
    this.pressed?.hooks.release();
    this.pressed = undefined;
    this.updateEmitter();
  };

  private leave = () => {
    this.up();
    this.hovered = undefined;
    this.updateEmitter();
  };

  private blur = () => {
    this.up();
    this.hovered = this.focused = undefined;
    this.focusedTarget = undefined;
    this.updateEmitter();
  };

  private over = (event: Event) => {
    const found = this.find(event);
    const next = found?.hooks.emission?.() ? found : undefined;
    if (next !== this.hovered) {
      this.hovered = next;
      this.updateEmitter();
    }
  };

  private out = (event: PointerEvent) => {
    if (this.hovered && !this.hovered.element.contains(event.relatedTarget as Node | null)) {
      this.hovered = undefined;
      this.updateEmitter();
    }
  };

  private focus = (event: Event) => {
    const target = event.target as Element;
    const visual = target.matches('input[type="checkbox"], input[type="radio"]')
      ? target.closest('label')?.querySelector<HTMLElement>('[data-bx-surface]')
      : undefined;
    this.focused = visual ? this.entries.get(visual) : this.find(event);
    this.focusedTarget = target;
    this.updateEmitter();
  };

  private unfocus = () => {
    this.focused = undefined;
    this.focusedTarget = undefined;
    this.updateEmitter();
  };

  private sync = () => {
    for (const entry of this.entries.values()) {
      entry.hooks.sync();
      this.updateSelected(entry);
    }
    this.updateEmitter();
    this.refresh();
  };

  private refresh = () => {
    this.ambient.invalidate();
    for (const entry of this.entries.values()) {
      entry.bounds = undefined;
      if (entry.visible) this.queue.add(entry);
    }
    this.schedule();
  };

  constructor(private doc: Document) {
    const view = doc.defaultView;
    if (!view) throw new Error('Glass scenes require a browser document.');
    this.view = view;
    this.ambient = new AmbientSampler(
      doc,
      view,
      (entry) => {
        if (this.entries.get(entry.element) !== entry) return;
        this.queue.add(entry as Entry);
        this.schedule();
      },
      (root) => this.observeState(root)
    );
    this.motion = view.matchMedia('(prefers-reduced-motion: reduce)');
    this.transparency = view.matchMedia('(prefers-reduced-transparency: reduce)');
    if (typeof view.IntersectionObserver === 'function')
      this.observer = new view.IntersectionObserver(
        (records) => {
          for (const record of records) {
            const entry = this.entries.get(record.target as HTMLElement);
            if (!entry) continue;
            entry.visible = record.isIntersecting;
            this.ambient.invalidate(entry);
            if (entry.visible) {
              entry.bounds = undefined;
              this.queue.add(entry);
            }
          }
          this.schedule();
        },
        { rootMargin: '64px' }
      );
    // Watch semantic and visual source changes once per document. Lighting's
    // own decoration writes are excluded so sampling cannot trigger a loop.
    if (typeof view.MutationObserver === 'function')
      this.stateObserver = new view.MutationObserver((records) => {
        const changed = new Set<Entry>();
        let visualChanged = false;
        for (const record of records) {
          if (record.type === 'childList') {
            if ([...record.addedNodes, ...record.removedNodes].some((node) => !this.isLightingDecoration(node))) {
              visualChanged = true;
              this.ambient.sourcesChanged(record);
            }
            continue;
          }
          const target = record.target as HTMLElement;
          if (record.attributeName === 'style' && this.renderedStyles.get(target) === target.getAttribute('style')) continue;
          if (
            record.attributeName === 'class' ||
            record.attributeName === 'style' ||
            record.attributeName === 'hidden' ||
            /^(role|data-bx-light-scope|data-bx-surface|data-bx-reduced-transparency|data-bx-reduced-motion|src|srcset|width|height)$/.test(
              record.attributeName ?? ''
            )
          ) {
            if (!this.isLightingDecoration(target)) {
              visualChanged = true;
              if (/^(src|srcset|width|height)$/.test(record.attributeName ?? '')) this.ambient.assetChanged(target);
            }
            continue;
          }
          const entry = this.entries.get(target);
          if (entry) changed.add(entry);
          if (record.attributeName === 'data-bx-field-invalid') {
            for (const surface of target.querySelectorAll<HTMLElement>('[data-bx-surface]')) {
              const child = this.entries.get(surface);
              if (child) changed.add(child);
            }
          }
        }
        if (visualChanged) this.ambient.invalidate();
        if (!changed.size) return;
        for (const entry of changed) this.updateSelected(entry);
        this.updateEmitter();
      });
  }

  public register(element: HTMLElement, hooks: SurfaceHooks): () => void {
    this.connect();
    const entry: Entry = { id: this.nextId++, element, hooks, visible: true };
    const overlay = lightingVisibility(this.doc, this.view).boundary(element) !== this.doc.documentElement;
    this.entries.set(element, entry);
    this.ambient.add(entry);
    this.observer?.observe(element);
    this.updateSelected(entry);
    this.updateEmitter();
    this.queue.add(entry);
    this.schedule();
    // New overlays can cover receivers which already have highlights. Re-evaluate those as well.
    if (overlay) this.refresh();
    return () => {
      this.observer?.unobserve(element);
      this.entries.delete(element);
      this.ambient.remove(entry);
      this.queue.delete(entry);
      this.selected.delete(entry);
      if (this.pressed === entry) this.pressed = undefined;
      if (this.hovered === entry || this.focused === entry || this.emitting.has(entry)) {
        if (this.hovered === entry) this.hovered = undefined;
        if (this.focused === entry) this.focused = undefined;
        this.updateEmitter();
      }
      if (overlay) this.refresh();
      this.disconnectIfEmpty();
    };
  }

  public refreshElement(element: HTMLElement): void {
    const entry = this.entries.get(element);
    if (entry) this.updateSelected(entry);
    this.updateEmitter();
    if (entry) {
      this.ambient.invalidate(entry);
      entry.bounds = undefined;
      this.queue.add(entry);
      this.schedule();
    }
  }

  public scene(root: HTMLElement, options: GlassSceneOptions): GlassScene {
    this.connect();
    const entry = { id: this.nextId++, root, options };
    this.scenes.add(entry);
    this.refreshRoot(root);
    let disposed = false;
    return {
      update: (next) => {
        if (!disposed) {
          entry.options = next;
          this.refreshRoot(root);
        }
      },
      refresh: () => {
        if (!disposed) {
          this.ambient.invalidate();
          this.refreshRoot(root);
        }
      },
      destroy: () => {
        if (disposed) return;
        disposed = true;
        this.scenes.delete(entry);
        this.refreshRoot(root);
        this.disconnectIfEmpty();
      }
    };
  }

  private isLightingDecoration(node: Node): boolean {
    if (node.nodeType !== node.ELEMENT_NODE) return true;
    const element = node as Element;
    return element.matches('.bx-glass-decoration, .bx-glass-rim') || !!element.closest('.bx-glass-decoration, .bx-glass-rim');
  }

  private find(event: Event): Entry | undefined {
    for (const node of event.composedPath()) {
      const found = this.entries.get(node as HTMLElement);
      if (!found) continue;
      if (found.element.closest(disabledSelector)) return undefined;
      // A decorative surface inside a button/link is still part of that action.
      if (found.hooks.interactive()) return found;
    }
    return undefined;
  }

  private scope(element: HTMLElement): HTMLElement {
    return element.closest<HTMLElement>(`${lightBoundarySelector}, main, aside, nav`) ?? this.doc.body;
  }

  private updateEmitter(): void {
    const next = new Map<Entry, string>();
    const enabled = (entry: Entry) => entry.hooks.interactive() && !entry.element.closest(disabledSelector);
    for (const entry of [...this.selected, this.hovered, this.pressed]) {
      const color = entry && enabled(entry) ? entry.hooks.emission?.() : undefined;
      if (entry && color) next.set(entry, color);
    }
    const focusColor = this.focused?.hooks.focusEmission?.() ?? (this.focusedTarget?.matches(':focus-visible') ? this.focused?.hooks.emission?.() : undefined);
    if (this.focused && enabled(this.focused) && focusColor) next.set(this.focused, focusColor);
    const previous = this.emitting;
    if (previous.size === next.size && [...next].every(([entry, color]) => previous.get(entry) === color)) return;
    for (const entry of previous.keys()) if (!next.has(entry)) entry.hooks.emit?.(false);
    this.emitting = next;
    for (const [entry, color] of next) entry.hooks.emit?.(true, color);
    const sources = [...new Set([...previous.keys(), ...next.keys()])];
    for (const entry of this.entries.values()) {
      if (!entry.visible) continue;
      const affected = sources.some((source) => this.scope(source.element) === this.scope(entry.element));
      // A panel may have finished its opening animation since its surfaces were registered.
      if (affected) {
        entry.bounds = undefined;
        this.queue.add(entry);
      }
    }
    this.schedule();
  }

  private updateSelected(entry: Entry): void {
    if (entry.hooks.emission?.() && entry.element.matches(activeStateSelector)) this.selected.add(entry);
    else this.selected.delete(entry);
  }

  private refreshRoot(root: HTMLElement): void {
    for (const entry of this.entries.values()) {
      if (!root.contains(entry.element)) continue;
      entry.bounds = undefined;
      if (entry.visible) this.queue.add(entry);
    }
    this.schedule();
  }

  private observeState(root: Node): void {
    this.stateObserver?.observe(root, {
      subtree: true,
      attributes: true,
      childList: true,
      attributeFilter: [
        'aria-pressed',
        'aria-selected',
        'aria-expanded',
        'aria-current',
        'disabled',
        'aria-disabled',
        'aria-invalid',
        'data-bx-field-invalid',
        'class',
        'style',
        'hidden',
        'role',
        'data-bx-light-scope',
        'data-bx-surface',
        'data-bx-reduced-transparency',
        'data-bx-reduced-motion',
        'src',
        'srcset',
        'width',
        'height'
      ]
    });
  }

  private connect(): void {
    if (this.connected) return;
    this.connected = true;
    this.observeState(this.doc.documentElement);
    this.doc.addEventListener('pointerdown', this.down, { passive: true });
    this.doc.addEventListener('pointerover', this.over, { passive: true });
    this.doc.addEventListener('pointerout', this.out, { passive: true });
    this.doc.addEventListener('focusin', this.focus);
    this.doc.addEventListener('focusout', this.unfocus);
    this.view.addEventListener('pointerup', this.up, { passive: true });
    this.view.addEventListener('pointercancel', this.up, { passive: true });
    this.doc.addEventListener('pointerleave', this.leave, { passive: true });
    this.view.addEventListener('blur', this.blur);
    this.view.addEventListener('resize', this.refresh, { passive: true });
    this.doc.addEventListener('scroll', this.refresh, { passive: true, capture: true });
    this.doc.addEventListener('load', this.assetLoad, true);
    this.doc.addEventListener('loadeddata', this.assetLoad, true);
    this.doc.addEventListener('play', this.assetLoad, true);
    this.doc.addEventListener('pause', this.assetLoad, true);
    this.doc.addEventListener('seeked', this.assetLoad, true);
    this.doc.addEventListener('visibilitychange', this.visibilityChange);
    this.doc.addEventListener(configurationEvent, this.sync);
    this.motion.addEventListener('change', this.sync);
    this.transparency.addEventListener('change', this.sync);
  }

  private disconnectIfEmpty(): void {
    if (this.entries.size || this.scenes.size) return;
    this.ambient.destroy();
    this.stopFrame?.();
    this.stopFrame = undefined;
    this.queue.clear();
    this.observer?.disconnect();
    this.connected = false;
    this.stateObserver?.disconnect();
    this.selected.clear();
    this.doc.removeEventListener('pointerdown', this.down);
    this.doc.removeEventListener('pointerover', this.over);
    this.doc.removeEventListener('pointerout', this.out);
    this.doc.removeEventListener('focusin', this.focus);
    this.doc.removeEventListener('focusout', this.unfocus);
    this.view.removeEventListener('pointerup', this.up);
    this.view.removeEventListener('pointercancel', this.up);
    this.doc.removeEventListener('pointerleave', this.leave);
    this.view.removeEventListener('blur', this.blur);
    this.view.removeEventListener('resize', this.refresh);
    this.doc.removeEventListener('scroll', this.refresh, true);
    this.doc.removeEventListener('load', this.assetLoad, true);
    this.doc.removeEventListener('loadeddata', this.assetLoad, true);
    this.doc.removeEventListener('play', this.assetLoad, true);
    this.doc.removeEventListener('pause', this.assetLoad, true);
    this.doc.removeEventListener('seeked', this.assetLoad, true);
    this.doc.removeEventListener('visibilitychange', this.visibilityChange);
    this.doc.removeEventListener(configurationEvent, this.sync);
    this.motion.removeEventListener('change', this.sync);
    this.transparency.removeEventListener('change', this.sync);
  }

  private schedule(): void {
    if (this.stopFrame || !this.queue.size) return;
    this.stopFrame = subscribeFrame(() => {
      // Bound lighting work when hundreds of components become visible or a global setting changes.
      const batch = Array.from(this.queue).slice(0, 24);
      const visibility = lightingVisibility(this.doc, this.view);
      const emissions = [...this.emitting].map(([emitter, color]) => {
        const bounds = emitter.element.getBoundingClientRect();
        const exposed =
          visibility.exposed(emitter.element, bounds.x + bounds.width / 2, bounds.y + bounds.height / 2, bounds) && !emitter.element.closest(disabledSelector);
        return { emitter, color, exposed };
      });
      const activeLights = emissions
        .filter((source) => source.exposed)
        .map(({ emitter, color }) => ({
          emitter,
          light: this.lightPoint({ element: emitter.element, color, excludeSource: true, z: 24, intensity: 0.85, radius: 120 }, `hover:${emitter.id}`, true)
        }));
      const sceneData = new Map<SceneEntry, { lights: PointLight[]; reflections: Reflection[] }>();
      // Read only scenes used by this batch; avoid measuring offscreen or unrelated objects.
      const projections = batch
        .filter((entry) => entry.visible && entry.element.isConnected)
        .map((entry) => {
          entry.bounds ??= entry.element.getBoundingClientRect();
          let nearest: SceneEntry | undefined;
          for (const candidate of this.scenes)
            if (candidate.root.contains(entry.element) && (!nearest || nearest.root.contains(candidate.root))) nearest = candidate;
          if (nearest && !sceneData.has(nearest)) {
            const scene = nearest;
            sceneData.set(scene, {
              lights: (scene.options.lights ?? []).slice(0, 4).map((light, index) => this.lightPoint(light, `${scene.id}:${index}`)),
              reflections: (scene.options.reflectors ?? []).slice(0, 4).map((reflection) => this.reflectionPoint(reflection))
            });
          }
          const data = nearest ? sceneData.get(nearest) : undefined;
          const sceneRoot = nearest?.root ?? entry.element;
          // Explicit scene lights and an active semantic element share the same spatial model.
          const boundary = visibility.boundary(entry.element);
          const lights = (data?.lights ?? []).filter((light) => visibility.boundary(light.source ?? sceneRoot) === boundary);
          for (const { emitter, light } of activeLights) {
            if (
              this.scope(emitter.element) === this.scope(entry.element) &&
              visibility.layer(emitter.element) === visibility.layer(entry.element) &&
              !emitter.element.contains(entry.element) &&
              !entry.element.contains(emitter.element)
            )
              lights.push(light);
          }
          lights.push(...this.ambient.lights(entry));
          const reflections = (data?.reflections ?? []).filter((reflection) => visibility.boundary(reflection.source) === boundary);
          return [entry, this.project(entry, lights, reflections, visibility)] as const;
        });
      for (const entry of batch) this.queue.delete(entry);
      for (const { emitter, color, exposed } of emissions) emitter.hooks.emit?.(exposed, color);
      for (const [entry, lighting] of projections) {
        const before = entry.element.getAttribute('style');
        entry.hooks.light(lighting);
        const after = entry.element.getAttribute('style');
        // Native receivers (e.g. the slider thumb) paint on their host, not a decoration child.
        if (before !== after) this.renderedStyles.set(entry.element, after);
      }
      if (!this.queue.size) this.stopFrame = undefined;
      return this.queue.size > 0;
    });
  }

  private lightPoint(light: GlassLight, key: string, border = false): PointLight {
    const rect = light.element?.getBoundingClientRect();
    if (light.element && !border) {
      if (!this.lightIds.has(light.element)) this.lightIds.set(light.element, this.nextId++);
      key = `scene:${this.lightIds.get(light.element)}`;
    }
    return {
      key,
      bounds: rect && light.edge === 'bottom' ? new DOMRect(rect.left, rect.bottom, rect.width, 0) : border ? rect : undefined,
      source: light.element,
      excludeSource: light.excludeSource,
      excludeElement: light.excludeElement,
      x: rect ? rect.left + rect.width * finiteClamp(light.offsetX, 0, 1, 0.5) : finiteClamp(light.x, -1e6, 1e6, this.view.innerWidth * 0.25),
      y: rect ? rect.top + rect.height * finiteClamp(light.offsetY, 0, 1, 0.5) : finiteClamp(light.y, -1e6, 1e6, 0),
      z: finiteClamp(light.z, 1, 4000, 180),
      color: light.color ?? 'var(--bx-text-inverse, Canvas)',
      intensity: finiteClamp(light.intensity, 0, 4, 1),
      radius: finiteClamp(light.radius, 1, 4000, 640)
    };
  }

  private reflectionPoint(reflector: GlassReflector): Reflection {
    const rect = reflector.element.getBoundingClientRect();
    return {
      source: reflector.element,
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      depth: finiteClamp(reflector.depth, -2000, 2000, 80),
      color: reflector.color ?? this.view.getComputedStyle(reflector.element).backgroundColor,
      intensity: finiteClamp(reflector.intensity, 0, 1, 0.28),
      radius: Math.max(rect.width, rect.height, 160)
    };
  }

  private project(entry: Entry, lights: PointLight[], reflectors: Reflection[], visibility: ReturnType<typeof lightingVisibility>): Lighting {
    const b = (entry.bounds ??= entry.element.getBoundingClientRect());
    const cx = b.left + b.width / 2,
      cy = b.top + b.height / 2;
    let x = 25,
      y = 0,
      strength = 0.04,
      color = 'white';
    let strongest = 0,
      weightedX = 0,
      weightedY = 0,
      totalWeight = 0;
    const rims: string[] = [];
    const contributions: LightContribution[] = [];
    for (const light of lights) {
      if ((light.excludeSource && light.source === entry.element) || light.excludeElement === entry.element) continue;
      // Semantic borders emit from their closest edge, so large buttons still have a short reach.
      const lx = light.bounds ? Math.max(light.bounds.left, Math.min(cx, light.bounds.right)) : light.x;
      const ly = light.bounds ? Math.max(light.bounds.top, Math.min(cy, light.bounds.bottom)) : light.y;
      const dx = lx - cx,
        dy = ly - cy;
      const distance = Math.hypot(dx, dy, light.z);
      const weight = light.intensity * Math.pow(Math.max(0, 1 - distance / light.radius), 2) * (light.z / distance);
      // Project actual viewport coordinates into this surface, without a perspective speed-up.
      const localX = Math.max(0, Math.min(100, ((lx - b.left) / Math.max(1, b.width)) * 100));
      const localY = Math.max(0, Math.min(100, ((ly - b.top) / Math.max(1, b.height)) * 100));
      const edgeDistance = Math.hypot(Math.max(b.left - lx, 0, lx - b.right), Math.max(b.top - ly, 0, ly - b.bottom), light.z);
      const edgeWeight = Math.min(0.85, light.intensity * Math.pow(Math.max(0, 1 - edgeDistance / light.radius), 2));
      if (edgeWeight <= 0.01 && weight <= 0.001) continue;
      if (!light.ambient && !visibility.exposed(entry.hooks.hitTarget ?? entry.element, lx, ly, b)) continue;
      if (!light.ambient && light.source) {
        const source = light.source.closest<HTMLElement>('[data-bx-surface]') ?? light.source;
        if (!visibility.exposed(source, lx, ly, source.getBoundingClientRect())) continue;
      }
      if (edgeWeight > 0.01)
        rims.push(
          `radial-gradient(${light.spread ? `circle ${light.spread}px` : 'ellipse farthest-side'} at ${localX.toFixed(2)}% ${localY.toFixed(2)}%, color-mix(in srgb, ${light.color} ${(edgeWeight * 100).toFixed(2)}%, transparent), transparent 75%)`
        );
      if (edgeWeight > 0.01 || weight > 0.001)
        contributions.push({
          key: light.key,
          x: localX,
          y: localY,
          color: light.color,
          strength: light.ambient ? 0 : Math.min(0.25, weight * 0.4),
          edgeStrength: edgeWeight,
          ambient: light.ambient,
          spread: light.spread
        });
      if (!light.ambient) {
        weightedX += localX * weight;
        weightedY += localY * weight;
        totalWeight += weight;
        if (weight > strongest) {
          strongest = weight;
          color = light.color;
        }
      }
    }
    if (totalWeight > 0.001) {
      x = weightedX / totalWeight;
      y = weightedY / totalWeight;
      strength = Math.min(0.4, 0.04 + totalWeight * 0.4);
    }
    let reflectionStrength = 0,
      reflection = 'transparent',
      reflectionX = 50,
      reflectionY = 50;
    for (const reflector of reflectors) {
      if (!visibility.exposed(entry.hooks.hitTarget ?? entry.element, reflector.x, reflector.y, b)) continue;
      const distance = Math.hypot(reflector.x - cx, reflector.y - cy, reflector.depth);
      const weight = reflector.intensity * Math.max(0, 1 - distance / (reflector.radius * 2));
      if (weight > reflectionStrength) {
        reflectionStrength = weight;
        reflection = reflector.color;
        // Signed depth gives background and foreground proxies opposite parallax around the surface normal.
        const direction = reflector.depth < 0 ? 1 : -1;
        const perspective = Math.max(80, Math.abs(reflector.depth) + reflector.radius * 0.5);
        reflectionX = Math.max(0, Math.min(100, 50 + ((reflector.x - cx) / perspective) * 45 * direction));
        reflectionY = Math.max(0, Math.min(100, 50 + ((reflector.y - cy) / perspective) * 45 * direction));
      }
    }
    return { x, y, strength, color, rim: rims.join(', ') || 'none', contributions, reflection, reflectionStrength, reflectionX, reflectionY };
  }
}
