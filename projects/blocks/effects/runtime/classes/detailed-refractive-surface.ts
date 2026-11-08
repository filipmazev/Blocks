import type { ReflectAvail, ReflectionMap, RefractionMap } from '@effects/runtime/types/refraction-maps.types';

import { AVAIL_STEP, BAKE_SETTLE_MS, BAKE_SLACK_DOWN, BAKE_SLACK_UP, REGION } from '@effects/runtime/constants/refraction.constants';
import { REFR_FOLD_DEPTH, SLOTS } from '@effects/runtime/constants/refraction-maps.constants';
import { rememberStyles } from '@effects/runtime/helpers/dom.helpers';
import { cachedRefraction, readRadius } from '@effects/runtime/helpers/refraction.helpers';
import { createRefractionFilter, layoutRefractionFilter } from '@effects/runtime/helpers/refraction-filter.helpers';
import { buildBevelArcs, buildReflection, reflectionPad, reflectionScale, sliceRect } from '@effects/runtime/helpers/refraction-maps.helpers';
import { buildField, el, layer, layField, packField, setAttr, setBackdrop, setFieldImages, setStyle } from '@effects/runtime/helpers/refraction-svg.helpers';

/** CSS backdrop refraction with SVG maps; shares Blocks tint, lighting and accessibility. */
export class DetailedRefractiveSurface {
  public readonly refresh: () => void;
  public readonly update: () => void;
  public readonly destroy: () => void;
  public readonly setVisible: (visible: boolean) => void;

  private static instances: number = 0;

  constructor(host: HTMLElement) {
    const doc = host.ownerDocument;
    const view = doc.defaultView;

    if (!view) throw new Error('Refraction must be mounted in a browser document.');

    const restore = rememberStyles(host, ['--bx-refraction-r']);

    let radius = readRadius(host);
    let borderWidths = '';

    const rim = 1.3,
      reflect = true,
      reflectStrength = 2.5;
    const uid = ++DetailedRefractiveSurface.instances;
    const refractId = `bx-refraction-refract-${uid}`;
    const reflectId = `bx-refraction-reflect-${uid}`;

    const root = doc.createDocumentFragment();

    /* --- The two filters, as real SVG in the document ---------------------- */

    const defs = el(root, 'svg', { class: 'bx-refraction-defs', width: 0, height: 0, 'aria-hidden': 'true', focusable: 'false' });

    const refraction = createRefractionFilter(defs, refractId);
    const { refrField, tiltTiles, tiltRamp } = refraction;

    const reflFilter = el(defs, 'filter', {
      id: reflectId,
      filterUnits: 'userSpaceOnUse',
      'color-interpolation-filters': 'sRGB',
      x: -REGION,
      y: -REGION
    });
    const reflField = buildField(reflFilter, 'f');
    const reflDisp = packField(reflFilter, 'fx', 'fy', 'fmap');
    // A curved mirror compresses its image and loses angular resolution.
    const reflBlur = el(reflFilter, 'feGaussianBlur', { in: 'bent' });

    /* --- The layers ---------------------------------------------------------

     Siblings, not nested: an element with backdrop-filter is a backdrop root,
     so a child of it would only see its parent, not the page. Order matters,
     a backdrop-filter sees what was painted before it. The reflection comes
     first so its backdrop is the page only (not the shadow and caustic below
     the pill); z-index lifts it above the pane when painting. */

    const reflectLayer = layer(root, 'bx-refraction-layer bx-refraction-reflect');

    reflectLayer.hidden = true;

    const causticWrap = layer(root, 'bx-refraction-layer bx-refraction-caustic');

    layer(causticWrap, 'bx-refraction-caustic-ring');

    const pane = layer(root, 'bx-refraction-layer bx-refraction-pane');
    const fold = layer(root, 'bx-refraction-layer bx-refraction-edge bx-refraction-fold');
    const glint = layer(root, 'bx-refraction-layer bx-refraction-edge bx-refraction-glint');
    const rimLayer = layer(root, 'bx-refraction-layer bx-refraction-edge bx-refraction-rim');

    host.prepend(root);

    const makeCover = () => {
      const c = doc.createElement('span');

      c.className = 'bx-refraction-cover';
      c.setAttribute('aria-hidden', 'true');
      c.style.position = 'absolute';
      layer(c, 'bx-refraction-layer bx-refraction-edge bx-refraction-spec');
      layer(c, 'bx-refraction-layer bx-refraction-underlay');

      return c;
    };

    const cover = makeCover();

    host.append(cover);

    const tick = doc.createElement('span');

    tick.className = 'bx-refraction-tick';
    tick.setAttribute('aria-hidden', 'true');
    // Out of the flow from the start, so it never becomes a flex or grid item.
    tick.style.position = 'absolute';
    host.prepend(tick);

    // Edge layers only change exposure, they never displace -- displacing in
    // more than one layer drags image parts to places they do not belong.
    // Set inline: CSS minifiers like to merge or drop backdrop-filter when the
    // prefixed and unprefixed versions sit next to each other.
    const bevel = (prop: string, exposure: number, sat: number) =>
      `brightness(var(--bx-refraction-${prop}-exp, ${exposure})) saturate(var(--bx-refraction-${prop}-sat, ${sat}))`;

    setBackdrop(fold, 'brightness(var(--bx-refraction-fold-exp, 1.08)) saturate(var(--bx-refraction-fold-sat, 1.3))');
    fold.style.setProperty('--bx-refraction-fold-k', String(REFR_FOLD_DEPTH));
    setBackdrop(glint, bevel('glint', 1.35, 3.1));
    setBackdrop(rimLayer, bevel('rim', 0.84, 2.2));

    const frost = ' blur(var(--bx-refraction-blur, 0.5px)) saturate(var(--bx-refraction-saturation, 1.15))';

    setBackdrop(pane, frost.trim());

    /* --- State --------------------------------------------------------------- */

    let disposed = false;
    let paused = false;
    let lastRefresh = 0;
    let w = 0;
    let h = 0;
    let baked = 0;
    let refr: RefractionMap | null = null;
    let refl: ReflectionMap | null = null;
    let reflSize = { w: 0, h: 0 };
    let avail: ReflectAvail | null = null;
    let bakeTimer = 0;
    let viewTimer = 0;
    let lastSpot = '';

    const measureAvail = (): ReflectAvail => {
      const r = host.getBoundingClientRect();
      const q = (v: number) => Math.max(0, Math.floor(v / AVAIL_STEP) * AVAIL_STEP);

      let top = 0,
        right = view.innerWidth,
        bottom = view.innerHeight,
        left = 0;

      for (let ancestor = host.parentElement; ancestor; ancestor = ancestor.parentElement) {
        const style = view.getComputedStyle(ancestor);
        const rect = ancestor.getBoundingClientRect();

        if (style.overflowX !== 'visible') {
          left = Math.max(left, rect.left);
          right = Math.min(right, rect.right);
        }

        if (style.overflowY !== 'visible') {
          top = Math.max(top, rect.top);
          bottom = Math.min(bottom, rect.bottom);
        }
      }

      // Measurements include CSS zoom/transforms; filter tiles use the host's local CSS pixels.
      const scaleX = r.width / Math.max(1, host.offsetWidth) || 1;
      const scaleY = r.height / Math.max(1, host.offsetHeight) || 1;

      return [q((r.top - top) / scaleY), q((right - r.right) / scaleX), q((bottom - r.bottom) / scaleY), q((r.left - left) / scaleX)];
    };

    /** Lays every tile into the current box. Never bakes. */
    const sync = () => {
      host.style.setProperty('--bx-refraction-r', `${Math.max(0.01, Math.min(radius, w / 2, h / 2))}px`);

      const style = view.getComputedStyle(host);

      for (const side of ['top', 'right', 'bottom', 'left']) {
        const inset = `${-(parseFloat(style.getPropertyValue(`border-${side}-width`)) || 0)}px`;

        for (const node of [causticWrap, pane, fold, glint, rimLayer, cover, tick]) setStyle(node, side, inset);
      }

      if (refr) layoutRefractionFilter(refraction, refr, w, h);

      if (refl) {
        const reflection = refl;
        const [pt, pr, pb, pl] = refl.pad;

        layField(reflField, refl.slice, w, h, pl, pt);
        setAttr(reflDisp, 'scale', reflectionScale(refl, w, h));
        setAttr(reflFilter, 'width', w + pl + pr + REGION * 2);
        setAttr(reflFilter, 'height', h + pt + pb + REGION * 2);

        const rects = SLOTS.map((slot) => sliceRect(slot, w, h, reflection.mask.r, reflection.mask.reach, pl, pt));
        const position = rects.map((r) => `${r.x}px ${r.y}px`).join(',');
        const size = rects.map((r) => `${r.w}px ${r.h}px`).join(',');

        setStyle(reflectLayer, 'mask-position', position);
        setStyle(reflectLayer, '-webkit-mask-position', position);
        setStyle(reflectLayer, 'mask-size', size);
        setStyle(reflectLayer, '-webkit-mask-size', size);
      }

      const arcs = buildBevelArcs(w, h);

      setStyle(glint, '--bx-refraction-arc-glint', arcs.glint);

      const spec = cover.querySelector<HTMLElement>('.bx-refraction-spec');

      if (spec) setStyle(spec, '--bx-refraction-arc-glint', arcs.glint);

      setStyle(rimLayer, '--bx-refraction-arc-rim', arcs.rim);
    };

    /** New reflection map: when the bake size or the free space around changes. */
    const rebuildReflection = () => {
      refl = reflect && avail ? buildReflection(reflSize.w, reflSize.h, radius, rim, reflectStrength, avail) : null;
      reflectLayer.hidden = !refl;

      if (!refl) return;

      const reflection = refl;

      setFieldImages(reflField, refl);
      setAttr(reflBlur, 'stdDeviation', refl.blur);

      const [pt, pr, pb, pl] = refl.pad;
      const style = view.getComputedStyle(host);
      const borders = ['top', 'right', 'bottom', 'left'].map((side) => parseFloat(style.getPropertyValue(`border-${side}-width`)) || 0);

      reflectLayer.style.inset = `${-pt - borders[0]}px ${-pr - borders[1]}px ${-pb - borders[2]}px ${-pl - borders[3]}px`;

      // Same shape as the mask, as a plain compositor clip: it keeps the filter
      // work to the outline instead of the whole overhang, and if the mask is
      // not rasterised yet for one frame, the overhang still cannot flash.
      const clip = `inset(${pt}px ${pr}px ${pb}px ${pl}px round var(--bx-refraction-r))`;

      setStyle(reflectLayer, 'clip-path', clip);
      setStyle(reflectLayer, '-webkit-clip-path', clip);

      const images = SLOTS.map((slot) => {
        const img = reflection.mask.img[slot];

        return img.startsWith('linear-gradient(') ? img : `url("${img}")`;
      }).join(',');

      setStyle(reflectLayer, 'mask-image', images);
      setStyle(reflectLayer, '-webkit-mask-image', images);
      setBackdrop(reflectLayer, `url(#${reflectId})`);
    };

    const bake = (short: number) => {
      baked = short;
      refr = cachedRefraction(short, radius);
      setFieldImages(refrField, refr);

      for (const slot of SLOTS) setAttr(tiltTiles[slot], 'href', refr.tilt.img[slot]);

      setAttr(tiltRamp, 'href', refr.tiltRamp);
      // The reflection depends on the full size, but only follows the bake --
      // otherwise it would rebuild on every frame of a width animation.
      reflSize = { w, h };
      rebuildReflection();
      setBackdrop(pane, `url(#${refractId})${frost}`);
    };

    const onResize = () => {
      if (paused) return;

      const nw = Math.round(host.offsetWidth);
      const nh = Math.round(host.offsetHeight);
      const nextRadius = readRadius(host);
      const style = view.getComputedStyle(host);
      const nextBorders = ['top', 'right', 'bottom', 'left'].map((side) => style.getPropertyValue(`border-${side}-width`)).join(' ');
      const bordersChanged = nextBorders !== borderWidths;

      borderWidths = nextBorders;

      if (nextRadius !== radius) {
        radius = nextRadius;
        refr = null;
      }

      if (disposed || nw < 8 || nh < 8) return;

      if (nw === w && nh === h && refr) {
        if (bordersChanged) {
          rebuildReflection();
          sync();
        }

        return;
      }

      w = nw;
      h = nh;

      const s = Math.min(w, h);

      if (!refr) {
        avail = measureAvail();
        bake(s);
      } else if (s > baked + BAKE_SLACK_UP) {
        view.clearTimeout(bakeTimer);
        bake(s);
      } else if (baked - s > BAKE_SLACK_DOWN) {
        view.clearTimeout(bakeTimer);
        bakeTimer = view.setTimeout(() => {
          const settled = Math.min(Math.round(host.offsetWidth), Math.round(host.offsetHeight));

          if (!disposed && Math.abs(settled - s) <= 1 && baked - settled > BAKE_SLACK_DOWN) {
            bake(settled);
            sync();
          }
        }, BAKE_SETTLE_MS);
      } else {
        view.clearTimeout(bakeTimer);
      }

      sync();
    };

    // Only the reflection depends on where the element sits. Re-measure once
    // the ELEMENT stands still (transitions fire no scroll events), and swap
    // nothing while it moves: a fresh mask is not rasterised for a frame.
    const onView = () => {
      view.clearTimeout(viewTimer);

      if (paused) return;

      viewTimer = view.setTimeout(function check() {
        if (disposed) return;

        const r = host.getBoundingClientRect();
        const spot = `${Math.round(r.top)}:${Math.round(r.left)}`;

        if (spot !== lastSpot) {
          lastSpot = spot;
          viewTimer = view.setTimeout(check, 120);

          return;
        }

        const next = measureAvail();

        if (!refr) return;

        // Only rebuild when the overhang actually changes: with room to spare
        // on every side, moving or resizing the element gives the same map.
        const short = Math.min(reflSize.w, reflSize.h);
        const before = avail && reflectionPad(short, avail);

        avail = next;

        if (!before || reflectionPad(short, next).some((v, i) => v !== before[i])) {
          rebuildReflection();
          sync();
        }
      }, 220);
    };

    // Chromium redraws the glass only when something changes under its own
    // outline. The reflection also reads the area around it, so while the page
    // scrolls past with nothing changing right underneath (one flat colour),
    // the reflection holds a stale picture and catches up in a jump: a flicker.
    const refresh = () => {
      // Theme geometry can change without a ResizeObserver notification.
      onResize();

      const now = view.performance.now();

      if (!disposed && !paused && now - lastRefresh >= 80) {
        lastRefresh = now;
        tick.toggleAttribute('data-tick');
      }
    };

    const onScroll = () => {
      if (paused) return;

      if (refl) refresh();

      onView();
    };

    const ro = new view.ResizeObserver(onResize);

    ro.observe(host);
    doc.addEventListener('scroll', onScroll, { passive: true, capture: true });
    view.addEventListener('resize', onView, { passive: true });
    onResize();
    // The first measurement may run before layout or fonts have settled.
    onView();

    this.refresh = refresh;
    this.setVisible = (visible) => {
      if (disposed || paused === !visible) return;

      paused = !visible;

      for (const node of [reflectLayer, causticWrap, pane, fold, glint, rimLayer, cover, tick]) node.style.display = visible ? '' : 'none';

      if (visible) {
        onResize();
        onView();
      } else {
        view.clearTimeout(bakeTimer);
        view.clearTimeout(viewTimer);
      }
    };

    this.update = () => {
      if (disposed) return;

      onResize();
      onView();
    };

    this.destroy = () => {
      if (disposed) return;

      disposed = true;
      ro.disconnect();
      view.clearTimeout(bakeTimer);
      view.clearTimeout(viewTimer);
      doc.removeEventListener('scroll', onScroll, true);
      view.removeEventListener('resize', onView);

      for (const node of [...host.children])
        if (node.matches('.bx-refraction-layer, .bx-refraction-defs, .bx-refraction-cover, .bx-refraction-tick')) node.remove();

      restore();
    };
  }
}
