import type { GlassinessMode } from '@effects/runtime/types/refraction.types';
import type { IGlassSurface, ISurfaceOptions } from '@effects/runtime/types/runtime.types';
import type { SurfaceLayer } from '@effects/runtime/types/surface-layer.types';

import { DetailedRefractiveSurface } from '@effects/runtime/classes/detailed-refractive-surface';
import { RefractiveSurface } from '@effects/runtime/classes/refractive-surface';
import { Spring } from '@effects/runtime/classes/spring';
import { mounted } from '@effects/runtime/constants/surface.constants';

import type { ILightContribution, ILighting } from './scene.helpers';

import { inheritedAttribute } from './appearance-configuration.helpers';
import { finiteClamp, rememberAttributes, rememberStyles } from './dom.helpers';
import { subscribeFrame } from './frame-scheduler.helpers';
import { hasRefractionGeometry, supportsRefraction } from './refraction.helpers';
import { refreshGlassLighting, registerSurface } from './scene.helpers';
import { isFieldSurface, isSurfaceInteractionBlocked } from './surface-interaction.helpers';
import { rememberRenderedSurfaceStyles } from './surface-style.helpers';

/** Structural surfaces receive light; controls and actionable surfaces also emit it. */
function isActionSurface(element: HTMLElement): boolean {
  if (
    element.matches(
      'button, bx-button, [bx-button], a[href], summary, input:not([type="hidden"]), select, textarea, [role="button"], [role="link"], [role="checkbox"], [role="radio"], [role="switch"], [role="tab"], [role="menuitem"], [role="combobox"], [role="textbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [onclick]'
    ) ||
    typeof element.onclick === 'function'
  )
    return true;

  if (element.closest('label')?.control) return true;

  if (!element.closest('bx-form-field')) return false;

  const controls = element.querySelectorAll('input:not([type="hidden"]), select, textarea');

  return controls.length === 1 && controls[0].closest('[data-bx-surface]') === element;
}

/**
 * Enhance a native DOM element. Omitted options inherit configureAppearance() and Blocks theme tokens.
 *
 * @param element - Native host that receives decorative material state.
 * @param initial - Initial surface configuration; omitted settings inherit the appearance context. Defaults to `{}`.
 */
export function mountSurface(element: HTMLElement, initial: ISurfaceOptions = {}): IGlassSurface {
  if (mounted.has(element)) throw new Error('A glass surface is already mounted on this element.');

  const doc = element.ownerDocument;
  const view = doc.defaultView;

  if (!view) throw new Error('Glass surfaces must be mounted in a browser document.');

  const ownProperties = [
    'position',
    '--bx-glass-press',
    '--bx-translucency',
    '--bx-glass-lit-edge',
    '--bx-glass-lit-edge-top',
    '--bx-glass-lit-edge-right',
    '--bx-glass-lit-edge-bottom',
    '--bx-glass-lit-edge-left'
  ];
  const restoreStyles = rememberStyles(element, ownProperties);
  const attributes = ['data-bx-surface', 'data-bx-reduced-transparency', 'data-bx-reduced-motion', 'data-bx-glass-renderer', 'data-bx-refraction'];
  const originalAttributes = new Map(attributes.map((name) => [name, element.getAttribute(name)]));
  const restoreAttributes = rememberAttributes(element, attributes);
  const originals = new Map(
    ownProperties.map((property) => [
      property,
      {
        value: element.style.getPropertyValue(property),
        priority: element.style.getPropertyPriority(property)
      }
    ])
  );

  const decoration = doc.createElement('span');

  decoration.className = 'bx-glass-decoration';
  decoration.setAttribute('aria-hidden', 'true');

  const light = doc.createElement('span');

  light.className = 'bx-glass-light';

  const rim = doc.createElement('span');

  rim.className = 'bx-glass-rim';
  rim.setAttribute('aria-hidden', 'true');
  element.append(rim);

  const environment = doc.createElement('span');

  environment.className = 'bx-glass-contribution bx-glass-environment';
  rim.append(environment);

  let environmentImage = 'none';

  const environmentLayers = new Map<number, string>();
  const environmentColors = new Map<number, string>();

  const ambient = doc.createElement('span');

  ambient.className = 'bx-glass-ambient';

  const compression = doc.createElement('span');

  compression.className = 'bx-glass-pressure';
  decoration.append(light);
  element.append(decoration);
  decoration.append(ambient, compression);

  const motion = view.matchMedia('(prefers-reduced-motion: reduce)');
  const transparency = view.matchMedia('(prefers-reduced-transparency: reduce)');

  let options = { ...initial };
  let disposed = false;
  let unsubscribe: (() => void) | undefined;
  let reducedMotion = false;
  let unifiedLighting = false;
  let pressed = false;
  let paintedPressure: string | undefined;
  let refraction: RefractiveSurface | DetailedRefractiveSurface | undefined;
  let detailedRefraction = false;
  let visible = true;

  const interactive = () => (options.interactive ?? isActionSurface(element)) && !isSurfaceInteractionBlocked(element);

  let emitting = false;
  let emittingColor: string | undefined;
  let sourceColor: string | undefined;

  const layers = new Map<string, SurfaceLayer>();

  const removeLayer = (key: string, layer: SurfaceLayer) => {
    layer.animations.forEach((animation) => animation.cancel());
    layer.edge.remove();
    layer.glow.remove();
    layers.delete(key);
  };

  const fadeLayer = (key: string, layer: SurfaceLayer, visible: boolean) => {
    const opacity = view.getComputedStyle(layer.edge).opacity;

    layer.animations.forEach((animation) => animation.cancel());
    layer.leaving = !visible;

    for (const node of [layer.edge, layer.glow]) node.style.opacity = visible ? '1' : '0';

    if (reducedMotion) {
      if (!visible) removeLayer(key, layer);

      return;
    }

    layer.animations = [layer.edge, layer.glow].map((node) => node.animate([{ opacity }, { opacity: visible ? 1 : 0 }], { duration: 200, easing: 'ease-out' }));
    void Promise.all(layer.animations.map((animation) => animation.finished))
      .then(() => {
        if (layer.leaving && layers.get(key) === layer) removeLayer(key, layer);
      })
      .catch(() => {
        /* Interrupted fades continue from their rendered opacity. */
      });
  };

  const setLayer = (value: ILightContribution, source = false) => {
    let layer = layers.get(value.key);

    const fresh = !layer;

    if (!layer) {
      const edge = doc.createElement('span'),
        glow = doc.createElement('span');

      edge.className = glow.className = 'bx-glass-contribution';
      edge.dataset['bxLightSource'] = glow.dataset['bxLightSource'] = value.key;
      edge.style.opacity = glow.style.opacity = '0';
      rim.append(edge);
      ambient.append(glow);
      layer = { edge, glow, animations: [], leaving: false };
      layers.set(value.key, layer);
    }

    const at = `${value.x.toFixed(2)}% ${value.y.toFixed(2)}%`;

    const edgeColor = `color-mix(in srgb, ${value.color} ${(value.edgeStrength * 100).toFixed(2)}%, transparent)`;

    const edgeShape = value.spread ? `circle ${value.spread}px` : 'ellipse farthest-side';
    const glowShape = value.spread ? `circle ${value.spread}px` : 'ellipse';

    layer.edge.style.backgroundImage = source
      ? `linear-gradient(${edgeColor}, ${edgeColor})`
      : `radial-gradient(${edgeShape} at ${at}, ${edgeColor}, transparent 75%)`;
    layer.glow.style.backgroundImage = `radial-gradient(${glowShape} at ${at}, color-mix(in srgb, ${value.color} ${(value.strength * 100).toFixed(2)}%, transparent), transparent 68%)`;

    if (fresh || layer.leaving) fadeLayer(value.key, layer, true);

    if (layers.size > 8)
      for (const [key, old] of layers) {
        if (old.leaving) removeLayer(key, old);

        if (layers.size <= 8) break;
      }
  };

  const emissionColor = () =>
    options.emission === false
      ? undefined
      : (options.emission ??
        options.focusEmission ??
        (element.closest('[data-bx-field-invalid="true"]') || element.matches('[aria-invalid="true"]') ? 'var(--bx-text-danger)' : 'var(--bx-primary)'));

  const emit = (active: boolean, color = emissionColor()) => {
    emitting = active;
    emittingColor = color;

    if (active && color) setLayer({ key: 'emitter', color, x: 50, y: 50, strength: 0, edgeStrength: 0.8 }, true);
    else {
      const layer = layers.get('emitter');

      if (layer && !layer.leaving) fadeLayer('emitter', layer, false);
    }
  };

  const x = new Spring(25, { stiffness: 300, damping: 30 });
  const y = new Spring(0, { stiffness: 300, damping: 30 });
  const strength = new Spring(0.04, { stiffness: 300, damping: 30 });
  const pressure = new Spring(0, { stiffness: 440, damping: 25 });
  const globalValue = (name: string) => inheritedAttribute(element.parentElement ?? element, name);

  const paint = () => {
    decoration.style.setProperty('--bx-glass-light-x', `${x.value.toFixed(2)}%`);
    decoration.style.setProperty('--bx-glass-light-y', `${y.value.toFixed(2)}%`);
    decoration.style.setProperty('--bx-glass-light-strength', strength.value.toFixed(3));

    const value = finiteClamp(pressure.value, 0, 1.1, 0).toFixed(4);

    if (value !== paintedPressure) {
      element.style.setProperty('--bx-glass-press', value);
      rememberRenderedSurfaceStyles(element);
      paintedPressure = value;
    }
  };

  const animate = () => {
    if (disposed || unsubscribe) return;

    if (reducedMotion || typeof requestAnimationFrame !== 'function') {
      x.snap(x.target);
      y.snap(y.target);
      strength.snap(strength.target);
      pressure.snap(pressed && interactive() ? 1 : 0);
      paint();

      return;
    }

    unsubscribe = subscribeFrame((dt) => {
      if (disposed) return false;

      const moving = [x.step(dt), y.step(dt), strength.step(dt), pressure.step(dt)].some(Boolean);

      paint();

      if (!moving) unsubscribe = undefined;

      return moving;
    });
  };

  const lighting = (value: ILighting) => {
    x.snap(value.x);
    y.snap(value.y);
    strength.target = value.strength;

    if (unifiedLighting) {
      const sources = [...value.contributions].sort((a, b) => a.edgeStrength - b.edgeStrength).slice(-4);
      // Sample the same localized falloff used by the rim, rather than tinting
      // the entire silhouette. Small attached shapes can share a facing edge.
      const edgeAt = (x: number, y: number) => {
        let edge = 'var(--bx-border-default, GrayText)';

        for (const source of sources) {
          const distance = Math.hypot((x - source.x) / Math.max(1, source.x, 100 - source.x), (y - source.y) / Math.max(1, source.y, 100 - source.y));
          const strength = finiteClamp(source.edgeStrength, 0, 0.85, 0) * 0.35 * Math.max(0, 1 - distance / 0.75);

          if (strength > 0.001) edge = `color-mix(in srgb, ${source.color} ${(strength * 100).toFixed(2)}%, ${edge})`;
        }

        return edge;
      };

      element.style.setProperty('--bx-glass-lit-edge', edgeAt(50, 50));
      element.style.setProperty('--bx-glass-lit-edge-top', edgeAt(50, 0));
      element.style.setProperty('--bx-glass-lit-edge-right', edgeAt(100, 50));
      element.style.setProperty('--bx-glass-lit-edge-bottom', edgeAt(50, 100));
      element.style.setProperty('--bx-glass-lit-edge-left', edgeAt(0, 50));
    }

    const activeEnvironment = new Set<number>();

    for (const contribution of value.contributions) {
      if (!contribution.ambient) continue;

      const slot = Number(contribution.key.split(':').pop());

      if (!Number.isInteger(slot) || slot < 0 || slot >= 16) continue;

      activeEnvironment.add(slot);

      const property = `--bx-glass-environment-color-${slot}`;
      const color = `color-mix(in srgb, ${contribution.color} ${(contribution.edgeStrength * 100).toFixed(2)}%, transparent)`;

      if (environmentColors.get(slot) !== color) {
        environment.style.setProperty(property, color);
        environmentColors.set(slot, color);
      }

      environmentLayers.set(
        slot,
        `radial-gradient(circle ${contribution.spread}px at ${contribution.x.toFixed(2)}% ${contribution.y.toFixed(2)}%, var(${property}), transparent 75%)`
      );
    }

    for (const slot of environmentColors.keys()) {
      if (!activeEnvironment.has(slot) && environmentColors.get(slot) !== 'transparent') {
        environment.style.setProperty(`--bx-glass-environment-color-${slot}`, 'transparent');
        environmentColors.set(slot, 'transparent');
      }
    }

    const ambientImage = [...environmentLayers.values()].join(', ') || 'none';

    if (ambientImage !== environmentImage) {
      environmentImage = ambientImage;
      environment.style.backgroundImage = ambientImage;
    }

    // Finish only environmental transitions when an already-lit element returns.
    // During motion, typed colors retarget continuously from their rendered value.
    if (value.immediate || reducedMotion) for (const animation of environment.getAnimations()) animation.finish();

    const contributions = value.contributions.filter((contribution) => !contribution.ambient);
    const active = new Set(contributions.map((contribution) => contribution.key));

    for (const contribution of contributions) setLayer(contribution);

    for (const [key, layer] of layers) if (key !== 'emitter' && !active.has(key) && !layer.leaving) fadeLayer(key, layer, false);

    decoration.style.setProperty('--bx-glass-light-color', value.color);
    decoration.style.setProperty('--bx-glass-reflection-color', value.reflection);
    decoration.style.setProperty('--bx-glass-reflection-strength', String(value.reflectionStrength));
    decoration.style.setProperty('--bx-glass-reflection-x', `${value.reflectionX.toFixed(2)}%`);
    decoration.style.setProperty('--bx-glass-reflection-y', `${value.reflectionY.toFixed(2)}%`);
    refraction?.refresh();
    animate();
  };

  const sync = () => {
    if (element.getAttribute('data-bx-surface') !== 'glass') element.setAttribute('data-bx-surface', 'glass');

    const inheritedMotion = globalValue('data-bx-reduced-motion') ?? originalAttributes.get('data-bx-reduced-motion');
    const inheritedTransparency = globalValue('data-bx-reduced-transparency') ?? originalAttributes.get('data-bx-reduced-transparency');

    reducedMotion = options.reducedMotion ?? (inheritedMotion === null || inheritedMotion === undefined ? motion.matches : inheritedMotion === 'true');

    const reducedTransparency = options.reducedTransparency ?? (inheritedTransparency === 'true' || transparency.matches);

    element.setAttribute('data-bx-reduced-transparency', String(reducedTransparency));
    element.setAttribute('data-bx-reduced-motion', String(reducedMotion));

    const applicationQuality = inheritedAttribute(element, 'data-bx-glass-quality') ?? 'auto';
    const quality = applicationQuality === 'baseline' ? 'baseline' : (options.quality ?? applicationQuality);
    const supported =
      typeof CSS !== 'undefined' &&
      CSS.supports('background', 'color-mix(in srgb, white, black)') &&
      (CSS.supports('backdrop-filter', 'blur(1px)') || CSS.supports('-webkit-backdrop-filter', 'blur(1px)'));
    const connection = (view.navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const economical =
      connection?.saveData ||
      (view.navigator.hardwareConcurrency > 0 && view.navigator.hardwareConcurrency <= 4) ||
      view.matchMedia('(pointer: coarse)').matches;
    const enhanced = quality !== 'baseline' && supported && (quality === 'enhanced' || !economical);

    element.setAttribute('data-bx-glass-renderer', enhanced ? 'enhanced' : 'baseline');

    if (options.translucency !== undefined) element.style.setProperty('--bx-translucency', String(finiteClamp(options.translucency, 0, 1, 0.5)));
    else restoreProperty('--bx-translucency');

    // Absolutely positioned children use the padding box. Extend only across the
    // host's real border so their inherited outer radius describes the same curve.
    // Borderless and one-sided surfaces must never grow beyond their border box.
    const style = view.getComputedStyle(element);

    unifiedLighting = style.getPropertyValue('--bx-glass-unified-lighting').trim() === '1';

    const policy = (inheritedAttribute(element, 'data-bx-glassiness-mode') as GlassinessMode | null) ?? 'auto';
    const optedIn = options.glassiness !== undefined && options.glassiness !== 'off';
    const refractionMode = policy === 'off' || options.glassiness === 'off' ? 'off' : policy === 'on' || options.glassiness === 'on' ? 'on' : 'auto';
    const refractionEnabled =
      optedIn &&
      (!economical || applicationQuality === 'enhanced' || refractionMode === 'on') &&
      supported &&
      quality !== 'baseline' &&
      (enhanced || refractionMode === 'on') &&
      supportsRefraction(view, refractionMode) &&
      !reducedTransparency &&
      !view.matchMedia('(prefers-contrast: more), (forced-colors: active)').matches &&
      !element.closest('.high-contrast, .bx-high-contrast-scope') &&
      !element.parentElement?.closest('[data-bx-surface]') &&
      !element.matches('.bx-btn-text') &&
      parseFloat(style.getPropertyValue('--bx-glass-min-opacity')) !== 1 &&
      hasRefractionGeometry(element, style);

    if (refractionEnabled) {
      element.setAttribute('data-bx-refraction', 'true');

      const detailed = quality === 'enhanced';

      if (refraction && detailed !== detailedRefraction) {
        refraction.destroy();
        refraction = undefined;
      }

      detailedRefraction = detailed;

      if (refraction) refraction.update();
      else refraction = detailed ? new DetailedRefractiveSurface(element) : new RefractiveSurface(element);

      refraction.setVisible(visible);
    } else {
      refraction?.destroy();
      refraction = undefined;
      element.removeAttribute('data-bx-refraction');
    }

    for (const side of ['top', 'right', 'bottom', 'left']) {
      const width = style.getPropertyValue(`border-${side}-width`);
      const inset = `${-parseFloat(width || '0')}px`;

      for (const layer of [decoration, rim]) {
        if (layer.style.getPropertyValue(side) !== inset) layer.style.setProperty(side, inset);
      }
    }

    if (!interactive()) pressed = false;

    if (reducedMotion || !interactive()) {
      unsubscribe?.();
      unsubscribe = undefined;
      x.snap(x.target);
      y.snap(y.target);
      strength.snap(strength.target);
      pressure.snap(pressed ? 1 : 0);
      paint();
    }

    if (reducedMotion)
      for (const [key, layer] of layers) {
        if (layer.leaving) removeLayer(key, layer);
        else layer.animations.forEach((animation) => animation.cancel());
      }

    if (emitting) emit(true, emittingColor);
  };

  function restoreProperty(property: string): void {
    const original = originals.get(property);

    if (original?.value) element.style.setProperty(property, original.value, original.priority);
    else element.style.removeProperty(property);
  }

  paint();
  sync();

  // Apply the material before the first style read to avoid transitioning from legacy colors.
  if (view.getComputedStyle(element).position === 'static') element.style.position = 'relative';

  const unregister = registerSurface(element, {
    light: lighting,
    sync,
    visibility(value) {
      visible = value;
      refraction?.setVisible(value);
    },
    interactive,
    emission: emissionColor,
    resolveEmission(color) {
      // Reuse an existing decorative layer as a color probe. This resolves custom
      // properties, currentColor and theme-dependent functions in the emitter's scope.
      // Passing unresolved variables to another surface would use its tokens instead.
      if (sourceColor !== color) {
        rim.style.color = color;
        sourceColor = color;
      }

      return view.getComputedStyle(rim).color;
    },
    focusEmission: () => options.focusEmission ?? (isFieldSurface(element) ? emissionColor() : undefined),
    emit,
    press() {
      if (!interactive()) return;

      pressed = true;
      // Give even a quick tap visible compression before the shared spring returns to rest.
      pressure.snap(reducedMotion ? 1 : Math.max(0.4, pressure.value));
      pressure.target = 1;
      paint();
      animate();
    },
    release() {
      pressed = false;
      pressure.target = 0;
      animate();
    }
  });
  const controller: IGlassSurface = {
    update(next) {
      if (!disposed) {
        options = { ...next };
        sync();
        refreshGlassLighting(element);
      }
    },
    destroy() {
      if (disposed) return;

      disposed = true;
      unsubscribe?.();
      unregister();
      refraction?.destroy();
      decoration.remove();
      rim.remove();

      for (const [key, layer] of layers) removeLayer(key, layer);

      restoreStyles();
      restoreAttributes();
      mounted.delete(element);
    }
  };

  mounted.set(element, controller);

  return controller;
}
