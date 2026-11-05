# Blocks effects runtime

Framework independent glass surfaces, spatial lighting and overlay fades. Native DOM content keeps its layout, semantics and text rendering. This entry point
imports no Angular code; it is bundled inside Blocks alongside the Angular adapter and application-wide theme controls.

## Install and use

```sh
npm install @filip.mazev/blocks
```

```ts
import '@filip.mazev/blocks/effects/effects.css';
import { configureAppearance, mountSurface, createGlassTransition } from '@filip.mazev/blocks/effects/runtime';

const config = configureAppearance(document.documentElement, {
    translucency: 0.5,
    quality: 'auto'
});
const buttonSkin = mountSurface(button);
const panelSkin = mountSurface(panel);

// The application or overlay library positions the panel before this call.
const transition = createGlassTransition(button, panel);
await transition.enter();
config.update({ translucency: 0.45 }); // All existing surfaces and body-mounted overlays update.
const result = await transition.exit();
if (result === 'finished') panel.hidden = true;

// At component/application teardown:
transition.destroy();
buttonSkin.destroy();
panelSkin.destroy();
config.destroy();
```

`configureAppearance` owns one root scope, merges updates, and restores the attributes and inline properties it owned on destroy. Mount it on
`document.documentElement` to include overlays. Per-surface options override the global configuration; omitted options inherit it. There must be only one
configuration controller per root and one surface controller per element. `surface.update(options)` replaces that surface's local options so `{}` returns it to
global settings.

Setting application `quality: 'baseline'` temporarily sets `glassiness: 'off'`, including during initialization and partial updates. Switching back to
`quality: 'auto'` or `'enhanced'` restores the requested glassiness policy. An explicit `glassiness` update replaces that preference, including while baseline
is selected. A previously requested `'off'` remains off and continues to prevent Enhanced rendering.

## Global material and theme contract

The renderer defines no brand palette or spacing system. It uses the existing Blocks semantic tokens and preserves each component's border radius, size and
layout. Load the glass CSS once after your theme CSS, and set border radius on your native element when using the package outside Blocks.

`mountSurface(element)` includes a default token-based border. Buttons, links, native field surfaces and actionable ARIA roles automatically illuminate their
border and nearby surfaces on interaction or an active ARIA state. Decorative containers receive nearby light without their own hover effect, even when they
contain a single input such as a slider. Only wrappers within `bx-form-field` infer interactivity from their input; other custom wrappers can opt in with
`interactive: true`. The default color is the theme accent, or the error color inside an invalid Blocks form field. Override `emission`/`focusEmission` for a
different semantic color; `interactive` explicitly overrides automatic control/action detection.

| Setting               | Values                         | Inherited CSS property                                                        |
| --------------------- | ------------------------------ | ----------------------------------------------------------------------------- |
| `translucency`        | 0–1, default 0.5               | `--bx-translucency`                                                           |
| `quality`             | `auto`, `baseline`, `enhanced` | root `data-bx-glass-quality`                                                  |
| `glassiness`          | `auto` (default), `off`, `on`  | root `data-bx-glassiness-mode`; only explicitly selected surfaces participate |
| `reducedTransparency` | boolean                        | root `data-bx-reduced-transparency`                                           |
| `reducedMotion`       | boolean                        | root `data-bx-reduced-motion`                                                 |

Translucency controls tint and blur together. Material strength is `m = 0.5 × translucency² + 0.35 × translucency⁴`. Tint is `0.06 + 1.02m − 0.28m²`,
existing-material blur is `4 + 24m²` px, and glassiness blur is `0.5 + 12m²` px. The default translucency is 0.5; the preceding midpoint falls around 70% on
this scale. Both endpoints stay unchanged, and maximum classic tint is about 72.5%. Reduced transparency provides opaque surfaces without losing that
preference.

Opt in per element with `mountSurface(element, { glassiness: 'auto' })`. Omitted surfaces keep their existing material.
`configureAppearance(root, { glassiness: 'auto' })` is a browser policy for selected surfaces, not a global opt-in. Automatic uses one refraction pass on
supported browsers; unsupported engines keep the previous look. `on` permits testing another engine, while `off` disables selected enhancements. Local
`quality: 'enhanced'` adds the full reflection/bevel treatment, subject to application baseline and device policy.

Foreground colors stay theme-owned. Refraction retains at least 72% tint for readable theme foregrounds. Blur ranges from 0.5px at the clearest setting to about
0.8px at the midpoint and 9.2px at maximum; low settings preserve sharper refraction while the tint supplies the backing. Component opacity constraints can
request more backing. No text-contrast sampling, foreground switching, grouping or per-control contrast subscriptions are mounted. The existing shared sampler
continues to supply decorative ambient edge lighting. See [appearance effects](../README.md#glassiness-and-translucency) for material variables and
browser/accessibility fallbacks.

Local color aliases preserve component intent:

| Glass alias          | Blocks fallback      |
| -------------------- | -------------------- |
| `--bx-glass-surface` | `--bx-bg-surface`    |
| `--bx-glass-text`    | `--bx-text-primary`  |
| `--bx-glass-edge`    | `--bx-border-subtle` |
| `--bx-glass-accent`  | `--bx-primary`       |

For example, a success toast can set `--bx-glass-surface: var(--bx-bg-success)` and retain its established semantic appearance. Outside Blocks, system colors
supply neutral fallbacks.

## Spatial lighting and reflections

`getGlassLightRoot(element)` resolves the existing overlay or `data-bx-light-scope` boundary for passive emitters. Angular integrations can register and update
their emitters through `BxGlassLightingService`.

```ts
import { mountGlassScene } from '@filip.mazev/blocks/effects/runtime';

const scene = mountGlassScene(document.documentElement, {
    lights: [{ element: lamp, z: 180, color: 'var(--bx-primary)', intensity: 1.2, radius: 640 }],
    reflectors: [
        { element: backgroundShape, depth: -100, intensity: 0.25 },
        { element: foregroundCard, depth: 70, intensity: 0.35 }
    ]
});

// After application code moves one of those elements:
scene.refresh();
// Or replace the scene configuration:
scene.update({ lights: [{ x: 300, y: 80, z: 220, intensity: 1 }] });
// On teardown:
scene.destroy();
```

Coordinates are viewport CSS pixels. An element supplies its live bounding-box center (`offsetX`/`offsetY`, from 0 to 1, can move the source within it); a
reflector uses its computed background color unless `color` is supplied. Signed `depth` places foreground and background reflection proxies relative to the
glass plane. Light distance, height and falloff affect the position and strength of the highlight. Scrolling, resizing, visibility changes and explicit
refreshes invalidate the scene; call `refresh()` after application-driven transforms or layout changes. For frequent updates that only move lights,
`reuseGeometry: true` in the scene options retains receiver measurements until those invalidations. Ordinary scene updates continue to remeasure receivers.

Every mounted glass surface also gets subtle, localized edge colors from the visible layers around its perimeter. Different sources keep their own colors;
ambient gradients crossfade beneath hover, focus, validation and explicit scene lights. The runtime samples nearby computed backgrounds and local pixels from
visible images, video and canvas, including `pointer-events: none` backdrops. Hit-test order and stacking layers distinguish foreground from background; depth
and distance reduce the contribution. CSS gradients are approximated from their color stops. If the browser blocks pixel access to cross-origin or tainted
media, the runtime falls back to the element's computed CSS colors. Asset loads, layout/scroll changes, and visual class/style changes refresh the samples; call
`refreshGlassLighting(element)` after application-driven changes to a custom surface's surroundings.

Portalled overlays can call `inheritGlassLighting(overlay, trigger)` before mounting their surfaces to receive light from the trigger's context. Call the
returned cleanup function after removing the overlay. Tooltips and menus use this connection to preserve dialog boundaries and receive nearby colors. Tooltips
remain transparent to pointer events.

For compound opaque shapes, `--bx-glass-unified-lighting: 1` exposes restrained samples of received lighting through `--bx-glass-lit-edge` and its `-top`,
`-right`, `-bottom`, and `-left` variants. Tooltip bodies retain their neutral backing and use a subtle spatial rim; arrows sample their facing side instead of
tinting the entire outline. Interior decorative lighting stays hidden to avoid coloring the fill or introducing seams.

This is a bounded, stylized lighting model. The browser's backdrop filter displays content behind glass; refraction rendering also displaces those pixels and
reflects surroundings into the edge. Raster lighting samples use a shared 32-by-32 scratch buffer cached across receivers and frames. The package does not
capture arbitrary DOM into a texture or implement ray tracing. Registered foreground/background objects remain available as explicit reflection proxies when a
more deliberate scene is needed. Gradient-backed reflectors can supply an explicit representative color.

## Overlay fades

Overlays fade in over 180 ms and out over 140 ms using the Web Animations API. Their dimensions, clipping and text size remain unchanged. The fade composites
the material surface itself, keeping its configured blur and tint throughout. The surrounding positioning pane stays opaque so it does not create a backdrop
root that cuts off the page behind the glass. Native opacity interpolation avoids per-frame style mutations and lighting invalidation. Reversing an active fade
continues from its current opacity; the interrupted promise resolves to `cancelled`.

The transition temporarily owns the first material surface’s `opacity` and the target’s `visibility`. If no material is present, it fades the target. The
overlay positioner retains all geometry and transforms. Supply an already positioned target and destroy the transition when its overlay is removed. Both
endpoints must belong to the same document. `refresh()` remains a compatibility no-op because a fade requires no geometry measurements.

## Press feedback

The delegated pointer and keyboard handlers drive the existing pressure spring, including a visible initial response for quick taps. A soft inset sheen sits
within the material’s fixed clipping box. `--bx-glass-press` on the host exposes the current pressure to component content; Blocks buttons use it for a small
compression without moving their hit area or overlay origin. Controller-owned pressure writes are excluded from scene invalidation, so a press does not resample
the entire document every frame.

Pointer cancellation, matching key release, focus loss during a keyboard press, document/window blur, disabled state, and teardown clear pressure. Touch does
not latch hover emission, typing in a field does not activate keyboard pressure, and Space on a native link keeps its normal scrolling behavior. Reduced motion
applies static pressure feedback immediately and removes it on release.

## Performance and accessibility

- One lazy animation clock and delegated press, hover-boundary and focus handling per document. Moving the pointer within an element does not change lighting.
  Settled scenes schedule no animation frames.
- Each receiver evaluates at most four explicit scene lights, chosen from all registered sources by visible contribution after exclusions, intensity and
  distance falloff. Registration order does not discard nearby sources. Each scene retains a maximum of four reflectors, and at most 24 visible surfaces update
  per frame. Interaction and active-state emitters share one delegated event stream and semantic-attribute observer; there is no observer per control.
- Ambient geometry/style invalidations coalesce over 180 ms. A sampling frame handles at most four receivers, yielding after about 4 ms between receivers; a
  single receiver/readback remains atomic. Sixteen perimeter probes discover nearby colors, and media inventories update on insertion rather than on each frame.
- Static images and failed readbacks are cached until their assets change. Only media used by visible receivers is polled: live canvas/video checks begin at 500
  ms and back off to 2 seconds while unchanged. Color-only changes reuse source bindings and geometry without hit testing; coverage or layout changes rediscover
  the layers. Unchanged samples do not repaint. Image/video samples respect object fit and position.
- Each surface uses two shared ambient edge layers for a 180 ms crossfade, instead of a DOM layer and animation per sample. Semantic lighting retains its
  independent contributions and immediate interaction updates. Hidden documents, reduced-motion receivers and unused media stop live polling; removing the last
  receiver tears down sampling. Static scenes schedule no polling or animation frames.
- Nested surfaces retain their tint and reflection but skip additional backdrop filters.
- `baseline` uses one backdrop pass and a dynamic highlight. Supported `enhanced` rendering adds a narrow specular edge and colored reflection overlay; active
  refraction adds SVG backdrop passes for refraction and rim reflection. `auto` chooses baseline for coarse pointers, data saving or low reported CPU
  concurrency; capability checks guard enhancements. Hardware hints are conservative defaults, not measured frame-rate guarantees.
- Operating-system reduced motion/transparency, increased contrast and forced colors receive simpler rendering. A global `reducedTransparency: false` leaves the
  OS transparency preference enabled; explicit surface options can override it. An explicit reduced-motion setting takes precedence so Blocks can preserve its
  existing manual accessibility override; omit it to follow the OS. Reduced motion finishes transitions immediately. Unsupported backdrop filtering or color
  mixing produces an opaque fallback.
- Backdrop filters still have a cost. Use one outer material for large sections, avoid full-screen stacked filtered panels, and profile actual target devices
  before treating any frame-rate target as verified.

See `../examples/index.html` for a native DOM demo. Serve the repository over HTTP after building the workspace; no framework runtime is required. Build with
`npm run build:blocks` at the workspace root; this builds all Blocks entry points and generates the native example’s design tokens from Blocks. Browser
regressions live in `tools/browser`.

### Semantic lighting

`BxGlassLightingService` in the Angular adapter combines sources within a form or toast stack. Validation text illuminates nearby controls and removes its
source when the error clears. Toast light is anchored to the rendered progress bar’s right edge, pauses with the toast, and illuminates adjacent notifications.
Its own glow uses that same measured edge; it has no independent progress animation. `excludeSource` or `excludeElement` lets a source render its own glow
separately. `observeGlassLighting` and `refreshGlassLighting` support custom decorative receivers, including the opaque circular slider thumb beside its native
range input.

A surface can opt into semantic emission with `mountSurface(element, { emission: 'var(--bx-primary)' })`. Hover, press, or keyboard focus activates that element
as a source; its visible border and declared color determine the facing edges and corners of nearby surfaces. Source colors are resolved in the emitting element
before projection, so local custom properties and scoped themes retain their color on other receivers. Hover light has a 120 CSS-pixel falloff radius and stays
within the nearest main, aside, nav, dialog or overlay. Add `data-bx-light-scope` to isolate a custom region. Modal panels, native dialogs, popovers,
fixed/sticky panels, CDK overlays and toast stacks form separate lighting boundaries. Positioned stacking layers also constrain hover/focus light. Receiver hit
testing excludes covered surfaces, including rounded corners, and opening or removing overlays invalidates prior highlights. Each source fades independently
over 200 ms, including the emitter’s own colored border. Borders can combine several sources; retiring contributions fade out rather than jumping to a new
source. Reduced motion applies changes immediately. Source coordinates project directly into each receiver without a second position spring, pointer tracking,
DOM capture, or a permanent hover animation loop.

Backdrop behavior follows the browser’s [backdrop-root rules](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter). Visual
treatment follows [Apple’s material guidance](https://developer.apple.com/design/human-interface-guidelines/materials): restrained highlights and readable
translucent layers.

Editable field surfaces emit while their native control has focus by default; action surfaces emit for keyboard focus only. An explicit `focusEmission` opts a
custom surface into illumination for any focus. Checked, pressed, selected, and current states retain emission. An expanded trigger retains emission when it
also declares `aria-haspopup`; ordinary layout expansion alone does not select a control. Focused fields remain active when a different button is hovered.
Decorative native-control receivers can pass their hit target as the third argument to `observeGlassLighting`.

Active borders stay painted when surfaces are partly clipped by the viewport, a scrolling container, or an overlapping header. Scrolling them back into view
preserves their lighting without a fade. Surrounding light also remains active while part of the source and receiver is exposed; a covered center or projected
corner alone does not remove it. Fully covered surfaces remain excluded. Exposure checks share a short-lived cache and use bounded fallback probes only when the
preferred point is covered.
