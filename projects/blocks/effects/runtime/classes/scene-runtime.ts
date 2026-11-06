import type { IEntry } from '@effects/runtime/interfaces/ientry.interface';
import type { ILightContribution } from '@effects/runtime/interfaces/ilight-contribution.interface';
import type { ILightProjection } from '@effects/runtime/interfaces/ilight-projection.interface';
import type { ILighting } from '@effects/runtime/interfaces/ilighting.interface';
import type { IPointLight } from '@effects/runtime/interfaces/ipoint-light.interface';
import type { IReflection } from '@effects/runtime/interfaces/ireflection.interface';
import type { ISceneEntry } from '@effects/runtime/interfaces/iscene-entry.interface';
import type { ISurfaceHooks } from '@effects/runtime/interfaces/isurface-hooks.interface';
import type { IGlassLight, IGlassReflector, IGlassScene, IGlassSceneOptions } from '@effects/runtime/types/runtime.types';

import { configurationEvent } from '@effects/runtime/constants/appearance-configuration.constants';
import { lightBoundarySelector } from '@effects/runtime/constants/lighting-visibility.constants';
import { disabledSelector } from '@effects/runtime/constants/scene.constants';
import { ACTIVE_SURFACE_STATE_SELECTOR } from '@effects/runtime/constants/surface-interaction.constants';
import { SURFACE_RENDERED_STYLES } from '@effects/runtime/constants/surface-style.constants';
import { finiteClamp } from '@effects/runtime/helpers/dom.helpers';
import { subscribeFrame } from '@effects/runtime/helpers/frame-scheduler.helpers';
import { projectLight } from '@effects/runtime/helpers/light-projection.helpers';
import { lightingOrigin, lightingVisibility } from '@effects/runtime/helpers/lighting-visibility.helpers';
import { isSurfaceActivationKey } from '@effects/runtime/helpers/surface-interaction.helpers';

import { AmbientSampler } from './ambient-sampler';
export class SceneRuntime {
  private readonly renderedStyles: WeakMap<HTMLElement, string | null> = SURFACE_RENDERED_STYLES;

  private entries: Map<HTMLElement, IEntry> = new Map<HTMLElement, IEntry>();
  private scenes: Set<ISceneEntry> = new Set<ISceneEntry>();
  private observer?: IntersectionObserver;
  private stateObserver?: MutationObserver;
  private selected: Set<IEntry> = new Set<IEntry>();
  private pressed?: IEntry;
  private pressedPointer?: number;
  private pressedKey?: string;
  private hovered?: IEntry;
  private focused?: IEntry;
  private focusedTarget?: Element;
  private emitting: Map<IEntry, string> = new Map<IEntry, string>();
  private nextId: number = 0;
  private lightIds: WeakMap<HTMLElement, number> = new WeakMap<HTMLElement, number>();
  private queue: Set<IEntry> = new Set<IEntry>();
  private stopFrame?: () => void;
  private connected: boolean = false;
  private motion: MediaQueryList;
  private transparency: MediaQueryList;
  private contrast: MediaQueryList;
  private view: Window;
  private ambient: AmbientSampler;
  private assetLoad: (event: Event) => void = (event: Event) => {
    const target = event.target as Element | null;

    if (target && /^(IMG|VIDEO)$/.test(target.tagName)) this.ambient.assetChanged(target);
  };
  private visibilityChange: () => void = () => {
    if (!this.doc.hidden) this.refresh();
    else this.blur();

    this.ambient.resume();
  };
  private down: (event: PointerEvent) => void = (event: PointerEvent) => {
    if (event.button !== 0 || !event.isPrimary) return;

    this.up();

    if (event.pointerType === 'touch') this.hovered = undefined;

    this.pressedPointer = event.pointerId;
    this.pressed = this.find(event);
    this.pressed?.hooks.press();
    this.updateEmitter();
  };
  private up: (event?: PointerEvent) => void = (event?: PointerEvent) => {
    if (event && event.pointerId !== this.pressedPointer) return;

    this.pressed?.hooks.release();
    this.pressed = undefined;
    this.pressedPointer = undefined;
    this.pressedKey = undefined;
    this.updateEmitter();
  };
  private keydown: (event: KeyboardEvent) => void = (event: KeyboardEvent) => {
    const target = event.target as Element | null;

    if (
      !target ||
      target.nodeType !== 1 ||
      event.defaultPrevented ||
      event.repeat ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      !isSurfaceActivationKey(target, event.key)
    )
      return;

    const entry = this.find(event);

    if (!entry) return;

    this.up();
    this.pressed = entry;
    this.pressedKey = event.key;
    entry.hooks.press();
    this.updateEmitter();
  };
  private keyup: (event: KeyboardEvent) => void = (event: KeyboardEvent) => {
    if (event.key === this.pressedKey) this.up();
  };
  private leave: () => void = () => {
    if (this.pressedPointer !== undefined) this.up();

    this.hovered = undefined;
    this.updateEmitter();
  };
  private blur: () => void = () => {
    this.up();
    this.hovered = this.focused = undefined;
    this.focusedTarget = undefined;
    this.updateEmitter();
  };
  private over: (event: PointerEvent) => void = (event: PointerEvent) => {
    if (event.pointerType === 'touch') return;

    const next = this.find(event);

    if (next !== this.hovered) {
      this.hovered = next;
      this.updateEmitter();
    }
  };
  private out: (event: PointerEvent) => void = (event: PointerEvent) => {
    const target = this.hovered?.element.closest('label') ?? this.hovered?.element;

    if (target && !target.contains(event.relatedTarget as Node | null)) {
      this.hovered = undefined;
      this.updateEmitter();
    }
  };
  private focus: (event: Event) => void = (event: Event) => {
    const target = event.target as Element;
    const visual = target.matches('input[type="checkbox"], input[type="radio"]')
      ? target.closest('label')?.querySelector<HTMLElement>('[data-bx-surface]')
      : undefined;

    this.focused = visual ? this.entries.get(visual) : this.find(event);
    this.focusedTarget = target;
    this.updateEmitter();
  };
  private unfocus: () => void = () => {
    if (this.pressedKey !== undefined) this.up();

    this.focused = undefined;
    this.focusedTarget = undefined;
    this.updateEmitter();
  };
  private change: () => void = () => {
    for (const entry of this.entries.values()) this.updateSelected(entry);

    this.updateEmitter();
  };
  private sync: () => void = () => {
    // Children inherit resolved material preferences from their nearest surface.
    // Angular mounts child surfaces first, so registration order is insufficient.
    const ordered = [...this.entries.values()].sort((a, b) => {
      const position = a.element.compareDocumentPosition(b.element);

      return position === 0 ? 0 : position & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });

    for (const entry of ordered) {
      entry.hooks.sync();
      this.updateSelected(entry);
    }

    this.updateEmitter();
    this.refresh();
  };
  private refresh: () => void = () => {
    this.refreshEntries([...this.entries.values()]);
  };
  private scroll: (event: Event) => void = (event: Event) => {
    const root = event.target as HTMLElement | null;

    if (root?.nodeType !== 1) {
      this.refresh();

      return;
    }

    const area = root.getBoundingClientRect();
    const nearby: IEntry[] = [];

    this.refreshEntries(
      [...this.entries.values()].filter((entry) => {
        if (!entry.visible) return false;

        if (root.contains(entry.element)) return true;

        const bounds = (entry.bounds ??= entry.element.getBoundingClientRect());

        // Prioritize controls over the scrolling pixels. Nearby surfaces still
        // refresh, but must not crowd those controls out of every sample batch.
        if (bounds.right > area.left && bounds.left < area.right && bounds.bottom > area.top && bounds.top < area.bottom) return true;

        if (bounds.right >= area.left - 160 && bounds.left <= area.right + 160 && bounds.bottom >= area.top - 160 && bounds.top <= area.bottom + 160)
          nearby.push(entry);

        return false;
      })
    );
    this.ambient.invalidate(nearby);
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

        this.queue.add(entry as IEntry);
        this.schedule();
      },
      (root) => this.observeState(root)
    );
    this.motion = view.matchMedia('(prefers-reduced-motion: reduce)');
    this.transparency = view.matchMedia('(prefers-reduced-transparency: reduce)');
    this.contrast = view.matchMedia('(prefers-contrast: more), (forced-colors: active)');

    if (typeof view.IntersectionObserver === 'function')
      this.observer = new view.IntersectionObserver(
        (records) => {
          for (const record of records) {
            const entry = this.entries.get(record.target as HTMLElement);

            if (!entry) continue;

            if (record.isIntersecting && !entry.visible) entry.resuming = true;

            entry.visible = record.isIntersecting;
            entry.hooks.visibility?.(entry.visible);
            this.ambient.invalidate(entry, true);

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
        const changed = new Set<IEntry>();

        let visualChanged = false;

        const themeChanged = records.some(
          (record) => record.target === this.doc.documentElement && (record.attributeName === 'class' || record.attributeName === 'data-theme')
        );

        for (const record of records) {
          if (record.type === 'childList') {
            if (record.target.nodeType === 1 && this.isLightingDecoration(record.target)) continue;

            if ([...record.addedNodes, ...record.removedNodes].some((node) => !this.isLightingDecoration(node))) {
              visualChanged = true;
              this.ambient.sourcesChanged(record);
            }

            continue;
          }

          const target = record.target as HTMLElement;

          if (record.attributeName === 'style' && this.renderedStyles.get(target) === target.getAttribute('style')) continue;

          if (record.attributeName === 'class') {
            const entry = this.entries.get(target);

            if (entry) changed.add(entry);
          }

          if (
            record.attributeName === 'class' ||
            record.attributeName === 'style' ||
            record.attributeName === 'hidden' ||
            record.attributeName === 'readonly' ||
            record.attributeName === 'aria-readonly' ||
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

          const visual = target.matches('input[type="checkbox"], input[type="radio"]')
            ? target.closest('label')?.querySelector<HTMLElement>('[data-bx-surface]')
            : undefined;
          const entry = this.entries.get(target) ?? (visual ? this.entries.get(visual) : undefined);

          if (entry) changed.add(entry);

          if (record.attributeName === 'data-bx-field-invalid') {
            for (const surface of target.querySelectorAll<HTMLElement>('[data-bx-surface]')) {
              const child = this.entries.get(surface);

              if (child) changed.add(child);
            }
          }
        }

        if (visualChanged) {
          for (const entry of this.entries.values()) {
            entry.bounds = undefined;
            entry.lastLighting = undefined;
          }

          this.ambient.invalidate();
        }

        // Angular can mount a child before its parent. Reconcile newly nested materials before the next paint.
        if (themeChanged || records.some((record) => record.attributeName === 'data-bx-surface')) this.sync();

        if (!changed.size && !visualChanged) return;

        for (const entry of changed) this.updateSelected(entry);

        this.updateEmitter();
      });
  }

  public register(element: HTMLElement, hooks: ISurfaceHooks): () => void {
    this.connect();

    const entry: IEntry = { id: this.nextId++, element, hooks, visible: true };
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

      if (this.pressed === entry) this.up();

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
      this.ambient.invalidate(entry, true);
      entry.bounds = undefined;
      entry.lastLighting = undefined;
      this.queue.add(entry);
      this.schedule();
    }
  }

  public scene(root: HTMLElement, options: IGlassSceneOptions): IGlassScene {
    this.connect();

    const entry = { id: this.nextId++, root, options };

    this.scenes.add(entry);
    this.refreshRoot(root);

    let disposed = false;

    return {
      update: (next) => {
        if (!disposed) {
          entry.options = next;
          this.refreshRoot(root, next.reuseGeometry !== true);
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

  //#region Helpers

  private refreshEntries(entries: IEntry[]): void {
    this.ambient.invalidate(entries, true);

    for (const entry of entries) {
      entry.bounds = undefined;

      if (entry.visible) this.queue.add(entry);
    }

    this.schedule();
  }

  private isLightingDecoration(node: Node): boolean {
    if (node.nodeType !== node.ELEMENT_NODE) return true;

    const element = node as Element;

    return !!element.closest('.bx-glass-decoration, .bx-glass-rim, .bx-refraction-layer, .bx-refraction-defs, .bx-refraction-cover, .bx-refraction-tick');
  }

  private find(event: Event): IEntry | undefined {
    for (const node of event.composedPath()) {
      const found = this.entries.get(node as HTMLElement);

      if (!found) continue;

      if (found.element.closest(disabledSelector)) return undefined;

      // A decorative surface inside a button/link is still part of that action.
      if (found.hooks.interactive()) return found;
    }

    const target = event.target as Element;
    const label = target.closest('label');
    const visual = label?.control?.matches('input[type="checkbox"], input[type="radio"]') ? label.querySelector<HTMLElement>('[data-bx-surface]') : undefined;
    const found = visual ? this.entries.get(visual) : undefined;

    if (found && !found.element.closest(disabledSelector) && !label?.control?.matches(disabledSelector) && found.hooks.interactive()) return found;

    return undefined;
  }

  private scope(element: HTMLElement): HTMLElement {
    return element.closest<HTMLElement>(`${lightBoundarySelector}, main, aside, nav`) ?? this.doc.body;
  }

  private updateEmitter(): void {
    const next = new Map<IEntry, string>();
    const enabled = (entry: IEntry) =>
      entry.hooks.interactive() && !entry.element.closest(disabledSelector) && !entry.element.closest('label')?.control?.matches(disabledSelector);

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

      const affected = sources.some(
        (source) =>
          this.scope(source.element) === this.scope(entry.element) || this.scope(source.element) === this.scope(lightingOrigin(entry.element) as HTMLElement)
      );

      // A panel may have finished its opening animation since its surfaces were registered.
      if (affected) {
        entry.bounds = undefined;
        entry.lastLighting = undefined;
        this.queue.add(entry);
      }
    }

    this.schedule();
  }

  private updateSelected(entry: IEntry): void {
    const control = entry.element.closest('label')?.control;
    const checked = control?.matches('input[type="checkbox"]:is(:checked, :indeterminate), input[type="radio"]:checked');

    if (entry.hooks.emission?.() && (entry.element.matches(ACTIVE_SURFACE_STATE_SELECTOR) || checked)) this.selected.add(entry);
    else this.selected.delete(entry);
  }

  private refreshRoot(root: HTMLElement, measure = true): void {
    for (const entry of this.entries.values()) {
      if (!root.contains(entry.element) && !root.contains(lightingOrigin(entry.element))) continue;

      if (measure) {
        entry.bounds = undefined;
        entry.lastLighting = undefined;
      }

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
        'aria-checked',
        'checked',
        'aria-selected',
        'aria-expanded',
        'aria-haspopup',
        'aria-current',
        'disabled',
        'aria-disabled',
        'readonly',
        'aria-readonly',
        'aria-invalid',
        'data-bx-field-invalid',
        'class',
        'style',
        'hidden',
        'role',
        'data-bx-light-scope',
        'data-bx-surface',
        'data-theme',
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
    this.doc.addEventListener('pointerdown', this.down, { passive: true, capture: true });
    this.doc.addEventListener('pointerover', this.over, { passive: true });
    this.doc.addEventListener('pointerout', this.out, { passive: true });
    this.doc.addEventListener('focusin', this.focus);
    this.doc.addEventListener('focusout', this.unfocus);
    this.doc.addEventListener('keydown', this.keydown, true);
    this.view.addEventListener('keyup', this.keyup, true);
    this.doc.addEventListener('change', this.change);
    this.view.addEventListener('pointerup', this.up, { passive: true, capture: true });
    this.view.addEventListener('pointercancel', this.up, { passive: true, capture: true });
    this.doc.addEventListener('pointerleave', this.leave, { passive: true });
    this.view.addEventListener('blur', this.blur);
    this.view.addEventListener('resize', this.refresh, { passive: true });
    this.doc.addEventListener('scroll', this.scroll, { passive: true, capture: true });
    this.doc.addEventListener('load', this.assetLoad, true);
    this.doc.addEventListener('loadeddata', this.assetLoad, true);
    this.doc.addEventListener('play', this.assetLoad, true);
    this.doc.addEventListener('pause', this.assetLoad, true);
    this.doc.addEventListener('seeked', this.assetLoad, true);
    this.doc.addEventListener('visibilitychange', this.visibilityChange);
    this.doc.addEventListener(configurationEvent, this.sync);
    this.motion.addEventListener('change', this.sync);
    this.transparency.addEventListener('change', this.sync);
    this.contrast.addEventListener('change', this.sync);
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
    this.doc.removeEventListener('pointerdown', this.down, true);
    this.doc.removeEventListener('pointerover', this.over);
    this.doc.removeEventListener('pointerout', this.out);
    this.doc.removeEventListener('focusin', this.focus);
    this.doc.removeEventListener('focusout', this.unfocus);
    this.doc.removeEventListener('keydown', this.keydown, true);
    this.view.removeEventListener('keyup', this.keyup, true);
    this.doc.removeEventListener('change', this.change);
    this.view.removeEventListener('pointerup', this.up, true);
    this.view.removeEventListener('pointercancel', this.up, true);
    this.doc.removeEventListener('pointerleave', this.leave);
    this.view.removeEventListener('blur', this.blur);
    this.view.removeEventListener('resize', this.refresh);
    this.doc.removeEventListener('scroll', this.scroll, true);
    this.doc.removeEventListener('load', this.assetLoad, true);
    this.doc.removeEventListener('loadeddata', this.assetLoad, true);
    this.doc.removeEventListener('play', this.assetLoad, true);
    this.doc.removeEventListener('pause', this.assetLoad, true);
    this.doc.removeEventListener('seeked', this.assetLoad, true);
    this.doc.removeEventListener('visibilitychange', this.visibilityChange);
    this.doc.removeEventListener(configurationEvent, this.sync);
    this.motion.removeEventListener('change', this.sync);
    this.transparency.removeEventListener('change', this.sync);
    this.contrast.removeEventListener('change', this.sync);
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

        return { emitter, color: exposed ? (emitter.hooks.resolveEmission?.(color) ?? color) : color, exposed };
      });
      const activeLights = emissions
        .filter((source) => source.exposed)
        .map(({ emitter, color }) => ({
          emitter,
          light: this.lightPoint({ element: emitter.element, color, excludeSource: true, z: 24, intensity: 0.85, radius: 120 }, `hover:${emitter.id}`, true)
        }));
      const sceneData = new Map<ISceneEntry, { lights: IPointLight[]; reflections: IReflection[] }>();
      // Read only scenes used by this batch; avoid measuring offscreen or unrelated objects.
      const projections = batch
        .filter((entry) => {
          if (!entry.visible || !entry.element.isConnected || (entry.resuming && this.ambient.isPending(entry))) return false;

          const bounds = (entry.bounds ??= entry.element.getBoundingClientRect());
          const visible = bounds.bottom > 0 && bounds.right > 0 && bounds.top < this.view.innerHeight && bounds.left < this.view.innerWidth;

          if (!visible) entry.resuming = true;

          return visible;
        })
        .map((entry) => {
          entry.bounds ??= entry.element.getBoundingClientRect();

          const origin = lightingOrigin(entry.element) as HTMLElement;
          const nearest = this.nearestScene(entry.element, origin);

          if (nearest && !sceneData.has(nearest)) {
            const scene = nearest;

            sceneData.set(scene, {
              lights: (scene.options.lights ?? []).map((light, index) => this.lightPoint(light, `${scene.id}:${index}`)),
              reflections: (scene.options.reflectors ?? []).slice(0, 4).map((reflection) => this.reflectionPoint(reflection))
            });
          }

          const data = nearest ? sceneData.get(nearest) : undefined;
          const sceneRoot = nearest?.root ?? entry.element;
          // Explicit scene lights and an active semantic element share the same spatial model.
          const boundary = visibility.boundary(entry.element);
          const inheritedBoundary = visibility.boundary(origin);
          const candidates = (data?.lights ?? []).filter((light) => {
            const sourceBoundary = visibility.boundary(light.source ?? sceneRoot);

            return sourceBoundary === boundary || sourceBoundary === inheritedBoundary;
          });
          const lights = this.selectSceneLights(entry, candidates, visibility);

          for (const { emitter, light } of activeLights) {
            // Context inheritance only receives light. Internal sources retain the overlay's physical boundary and stacking layer.
            const target = visibility.boundary(emitter.element) === boundary ? entry.element : origin;

            if (
              this.scope(emitter.element) === this.scope(target) &&
              visibility.layer(emitter.element) === visibility.layer(target) &&
              !emitter.element.contains(entry.element) &&
              (!entry.element.contains(emitter.element) || entry.element.matches('[role="menu"], [role="tablist"]'))
            )
              lights.push(light);
          }

          lights.push(...this.ambient.lights(entry));

          const reflections = (data?.reflections ?? []).filter((reflection) => {
            const sourceBoundary = visibility.boundary(reflection.source);

            return sourceBoundary === boundary || sourceBoundary === inheritedBoundary;
          });
          const lighting = this.project(entry, lights, reflections, visibility);

          lighting.immediate = entry.resuming || !entry.painted;
          entry.resuming = false;

          return [entry, lighting] as const;
        });

      for (const entry of batch) this.queue.delete(entry);

      // The browser clips each active border; source occlusion only gates light cast onto other surfaces.
      for (const { emitter, color } of emissions) emitter.hooks.emit?.(true, color);

      for (const [entry, lighting] of projections) {
        if (this.sameLighting(entry.lastLighting, lighting)) continue;

        entry.lastLighting = lighting;
        entry.painted = true;

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

  private sameLighting(previous: ILighting | undefined, next: ILighting): boolean {
    if (
      !previous ||
      previous.x !== next.x ||
      previous.y !== next.y ||
      previous.color !== next.color ||
      previous.strength !== next.strength ||
      previous.rim !== next.rim ||
      previous.reflection !== next.reflection ||
      previous.reflectionStrength !== next.reflectionStrength ||
      previous.reflectionX !== next.reflectionX ||
      previous.reflectionY !== next.reflectionY ||
      previous.contributions.length !== next.contributions.length
    )
      return false;

    return previous.contributions.every((light, index) => {
      const other = next.contributions[index];

      return (
        light.key === other.key &&
        light.x === other.x &&
        light.y === other.y &&
        light.color === other.color &&
        light.strength === other.strength &&
        light.edgeStrength === other.edgeStrength &&
        light.ambient === other.ambient &&
        light.spread === other.spread
      );
    });
  }

  private lightPoint(light: IGlassLight, key: string, border = false): IPointLight {
    const rect = light.element?.getBoundingClientRect();
    const radius = finiteClamp(light.radius, 1, 4000, 640);

    if (light.element && !border) {
      if (!this.lightIds.has(light.element)) this.lightIds.set(light.element, this.nextId++);

      key = `scene:${this.lightIds.get(light.element)}`;
    }

    return {
      key,
      bounds: rect && light.edge === 'bottom' ? new DOMRect(rect.left, rect.bottom, rect.width, 0) : border ? rect : undefined,
      source: light.element,
      spread: border ? radius : undefined,
      excludeSource: light.excludeSource,
      excludeElement: light.excludeElement,
      x: rect ? rect.left + rect.width * finiteClamp(light.offsetX, 0, 1, 0.5) : finiteClamp(light.x, -1e6, 1e6, this.view.innerWidth * 0.25),
      y: rect ? rect.top + rect.height * finiteClamp(light.offsetY, 0, 1, 0.5) : finiteClamp(light.y, -1e6, 1e6, 0),
      z: finiteClamp(light.z, 1, 4000, 180),
      color: light.color ?? 'var(--bx-text-inverse, Canvas)',
      intensity: finiteClamp(light.intensity, 0, 4, 1),
      radius
    };
  }

  private reflectionPoint(reflector: IGlassReflector): IReflection {
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

  private nearestScene(element: HTMLElement, origin: HTMLElement): ISceneEntry | undefined {
    for (const target of [element, origin]) {
      let nearest: ISceneEntry | undefined;

      for (const candidate of this.scenes) {
        if (target === element && origin !== element && candidate.root.contains(origin)) continue;

        if (candidate.root.contains(target) && (!nearest || nearest.root.contains(candidate.root))) nearest = candidate;
      }

      if (nearest) return nearest;
    }

    return undefined;
  }

  private visibleProjection(entry: IEntry, light: IPointLight, visibility: ReturnType<typeof lightingVisibility>): ILightProjection {
    const bounds = (entry.bounds ??= entry.element.getBoundingClientRect());
    const projection = projectLight(light, bounds);

    if (light.ambient) return projection;

    if (light.source) {
      const source = light.source.closest<HTMLElement>('[data-bx-surface]') ?? light.source;

      if (!visibility.exposed(source, projection.x, projection.y, source.getBoundingClientRect())) return { ...projection, weight: 0, edgeWeight: 0 };
    }

    const target = entry.hooks.hitTarget ?? entry.element;

    // Whole-element exposure keeps partly clipped sources active; each receiving location must still be uncovered.
    return {
      ...projection,
      weight: projection.weight > 0.001 && visibility.pointExposed(target, projection.x, projection.y, bounds) ? projection.weight : 0,
      edgeWeight: projection.edgeWeight > 0.01 && visibility.pointExposed(target, projection.edgeX, projection.edgeY, bounds) ? projection.edgeWeight : 0
    };
  }

  private selectSceneLights(entry: IEntry, lights: IPointLight[], visibility: ReturnType<typeof lightingVisibility>): IPointLight[] {
    return lights
      .filter((light) => !(light.excludeSource && light.source === entry.element) && light.excludeElement !== entry.element)
      .map((light) => ({ light, projection: this.visibleProjection(entry, light, visibility) }))
      .filter(({ projection }) => projection.edgeWeight > 0.01 || projection.weight > 0.001)
      .sort((a, b) => Math.max(b.projection.weight, b.projection.edgeWeight) - Math.max(a.projection.weight, a.projection.edgeWeight))
      .slice(0, 4)
      .map(({ light }) => light);
  }

  private project(entry: IEntry, lights: IPointLight[], reflectors: IReflection[], visibility: ReturnType<typeof lightingVisibility>): ILighting {
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
    const contributions: ILightContribution[] = [];

    for (const light of lights) {
      if ((light.excludeSource && light.source === entry.element) || light.excludeElement === entry.element) continue;

      // Semantic borders emit from their closest edge, so large buttons still have a short reach.
      const { x: lx, y: ly, weight, edgeWeight } = this.visibleProjection(entry, light, visibility);
      // Project actual viewport coordinates into this surface, without a perspective speed-up.
      const localX = Math.max(0, Math.min(100, ((lx - b.left) / Math.max(1, b.width)) * 100));
      const localY = Math.max(0, Math.min(100, ((ly - b.top) / Math.max(1, b.height)) * 100));

      if (edgeWeight <= 0.01 && weight <= 0.001) continue;

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

  //#endregion
}
