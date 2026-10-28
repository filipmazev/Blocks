# Blocks effects runtime

Framework independent glass surfaces, spatial lighting and overlay fades. Native DOM content keeps its layout, semantics and text rendering. This entry point imports no Angular code; it is bundled inside Blocks alongside the Angular adapter and application-wide theme controls.

## Install and use

```sh
npm install @filip.mazev/blocks
```

```ts
import '@filip.mazev/blocks/effects/effects.css';
import { configureAppearance, mountSurface, createGlassTransition } from '@filip.mazev/blocks/effects/runtime';

const config = configureAppearance(document.documentElement, {
  material: 'glass', blur: 10, tint: 0.5,
  quality: 'auto',
});
const buttonSkin = mountSurface(button);
const panelSkin = mountSurface(panel);

// The application or overlay library positions the panel before this call.
const transition = createGlassTransition(button, panel);
await transition.enter();
config.update({ tint: .45 }); // All existing surfaces and body-mounted overlays update.
const result = await transition.exit();
if (result === 'finished') panel.hidden = true;

// At component/application teardown:
transition.destroy(); buttonSkin.destroy(); panelSkin.destroy(); config.destroy();
```

`configureAppearance` owns one root scope, merges updates, and restores the attributes and inline properties it owned on destroy. Mount it on `document.documentElement` to include overlays. Per-surface options override the global configuration; omitted options inherit it. There must be only one configuration controller per root and one surface controller per element. `surface.update(options)` replaces that surface's local options so `{}` returns it to global settings.

## Global material and theme contract

The renderer defines no brand palette or spacing system. It uses the existing Blocks semantic tokens and preserves each component's border radius, size and layout. Load the glass CSS once after your theme CSS, and set border radius on your native element when using the package outside Blocks.

`mountSurface(element)` includes a default token-based border. Buttons, links, native field surfaces and actionable ARIA roles automatically illuminate their border and nearby surfaces on interaction or an active ARIA state. Decorative containers receive nearby light without their own hover effect. The default color is the theme accent, or the error color inside an invalid Blocks form field. Override `emission`/`focusEmission` for a different semantic color; `interactive` explicitly overrides automatic control/action detection.

| Setting | Values | Inherited CSS property |
| --- | --- | --- |
| `material` | `glass`, `frosted`, `solid` | root `data-bx-glass-material` |
| `blur` | 0–40 CSS pixels | `--bx-glass-blur` |
| `tint` | 0–1, larger means more opaque | `--bx-glass-opacity` |
| `quality` | `auto`, `baseline`, `enhanced` | root `data-bx-glass-quality` |
| `reducedTransparency` | boolean | root `data-bx-reduced-transparency` |
| `reducedMotion` | boolean | root `data-bx-reduced-motion` |

Local color aliases preserve component intent:

| Glass alias | Blocks fallback |
| --- | --- |
| `--bx-glass-surface` | `--bx-bg-surface` |
| `--bx-glass-text` | `--bx-text-primary` |
| `--bx-glass-edge` | `--bx-border-subtle` |
| `--bx-glass-accent` | `--bx-primary` |

For example, a success toast can set `--bx-glass-surface: var(--bx-bg-success)` and retain its established semantic appearance. Outside Blocks, system colors supply neutral fallbacks.

## Spatial lighting and reflections

```ts
import { mountGlassScene } from '@filip.mazev/blocks/effects/runtime';

const scene = mountGlassScene(document.documentElement, {
  lights: [{ element: lamp, z: 180, color: 'var(--bx-primary)', intensity: 1.2, radius: 640 }],
  reflectors: [
    { element: backgroundShape, depth: -100, intensity: .25 },
    { element: foregroundCard, depth: 70, intensity: .35 },
  ],
});

// After application code moves one of those elements:
scene.refresh();
// Or replace the scene configuration:
scene.update({ lights: [{ x: 300, y: 80, z: 220, intensity: 1 }] });
// On teardown:
scene.destroy();
```

Coordinates are viewport CSS pixels. An element supplies its live bounding-box center (`offsetX`/`offsetY`, from 0 to 1, can move the source within it); a reflector uses its computed background color unless `color` is supplied. Signed `depth` places foreground and background reflection proxies relative to the glass plane. Light distance, height and falloff affect the position and strength of the highlight. Scrolling, resizing, visibility changes and explicit refreshes invalidate the scene; call `refresh()` after application-driven transforms or layout changes.

Every mounted glass surface also gets subtle, localized edge colors from the visible layers around its perimeter. Different sources keep their own colors; ambient gradients crossfade beneath hover, focus, validation and explicit scene lights. The runtime samples nearby computed backgrounds and local pixels from visible images, video and canvas, including `pointer-events: none` backdrops. Hit-test order and stacking layers distinguish foreground from background; depth and distance reduce the contribution. CSS gradients are approximated from their color stops. If the browser blocks pixel access to cross-origin or tainted media, the runtime falls back to the element's computed CSS colors. Asset loads, layout/scroll changes, and visual class/style changes refresh the samples; call `refreshGlassLighting(element)` after application-driven changes to a custom surface's surroundings.

This is a bounded, stylized lighting model. The browser's backdrop filter still displays content behind glass. Raster sampling uses a shared 32-by-32 scratch buffer and caches each source across receivers and frames; the package does **not** capture or mirror the page or arbitrary DOM into a texture, implement ray tracing, or physically refract page pixels. Registered foreground/background objects remain available as explicit reflection proxies when a more deliberate scene is needed. Gradient-backed reflectors can supply an explicit representative color.

## Overlay fades

Overlays fade in over 180 ms and out over 140 ms. Their dimensions, clipping and text size remain unchanged. The backing stays opaque and theme-colored both during the fade and at rest, avoiding delayed backdrop blur. Other surfaces retain their normal glass material. Reversing an active fade continues from its current opacity; the interrupted promise resolves to `cancelled`.

The transition temporarily owns `opacity`, `visibility` and the backing’s `data-bx-motion-material` attribute. The overlay positioner retains all geometry and transforms. Supply an already positioned target and destroy the transition when its overlay is removed. Both endpoints must belong to the same document. `refresh()` remains a compatibility no-op because a fade requires no geometry measurements. Version 0.1’s `createLiquidTransition` and associated type names remain deprecated aliases for `createGlassTransition`.

## Performance and accessibility

- One lazy animation clock and delegated press, hover-boundary and focus handling per document. Moving the pointer within an element does not change lighting. Settled scenes schedule no animation frames.
- At most four explicit lights and four reflectors per scene, and 24 visible surface lighting updates per frame. Interaction and active-state emitters share one delegated event stream and semantic-attribute observer; there is no observer per control.
- Ambient geometry/style invalidations coalesce over 180 ms. A sampling frame handles at most four receivers, yielding after about 4 ms between receivers; a single receiver/readback remains atomic. Sixteen perimeter probes discover nearby colors, and media inventories update on insertion rather than on each frame.
- Static images and failed readbacks are cached until their assets change. Only media used by visible receivers is polled: live canvas/video checks begin at 500 ms and back off to 2 seconds while unchanged. Color-only changes reuse source bindings and geometry without hit testing; coverage or layout changes rediscover the layers. Unchanged samples do not repaint. Image/video samples respect object fit and position.
- Each surface uses two shared ambient edge layers for a 180 ms crossfade, instead of a DOM layer and animation per sample. Semantic lighting retains its independent contributions and immediate interaction updates. Hidden documents, reduced-motion receivers and unused media stop live polling; removing the last receiver tears down sampling. Static scenes schedule no polling or animation frames.
- Nested surfaces retain their tint and reflection but skip additional backdrop filters.
- `baseline` uses one backdrop pass and a dynamic highlight. Supported `enhanced` rendering adds a narrow specular edge and colored reflection overlay without another backdrop pass. `auto` chooses the baseline for coarse pointers, data saving or low reported CPU concurrency; capability checks guard enhancements. Hardware hints are conservative defaults, not measured frame-rate guarantees.
- Operating-system reduced motion/transparency, increased contrast and forced colors receive simpler rendering. A global `reducedTransparency: false` leaves the OS transparency preference enabled; explicit surface options can override it. An explicit reduced-motion setting takes precedence so Blocks can preserve its existing manual accessibility override; omit it to follow the OS. Reduced motion finishes transitions immediately. Unsupported backdrop filtering or color mixing produces an opaque fallback.
- Backdrop filters still have a cost. Use one outer material for large sections, avoid full-screen stacked filtered panels, and profile actual target devices before treating any frame-rate target as verified.

See `../examples/index.html` for a native DOM demo. Serve the repository over HTTP after building the workspace; no framework runtime is required. Build with `npm run build:blocks` at the workspace root; this builds all Blocks entry points and generates the native example’s design tokens from Blocks. Browser regressions live in `tools/browser`.

### Semantic lighting

`BxGlassLightingService` in the Angular adapter combines sources within a form or toast stack. Validation text illuminates nearby controls and removes its source when the error clears. Toast light is anchored to the rendered progress bar’s right edge, pauses with the toast, and illuminates adjacent notifications. Its own glow uses that same measured edge; it has no independent progress animation. `excludeSource` or `excludeElement` lets a source render its own glow separately. `observeGlassLighting` and `refreshGlassLighting` support custom decorative receivers, including the opaque circular slider thumb beside its native range input.

A surface can opt into semantic emission with `mountSurface(element, { emission: 'var(--bx-primary)' })`. Hover or keyboard focus activates that element as a source; its visible border and declared color determine the facing edges and corners of nearby surfaces. Hover light has a 120 CSS-pixel falloff radius and stays within the nearest main, aside, nav, dialog or overlay. Add `data-bx-light-scope` to isolate a custom region. Modal panels, native dialogs, popovers, fixed/sticky panels, CDK overlays and toast stacks form separate lighting boundaries. Positioned stacking layers also constrain hover/focus light. Receiver hit testing excludes covered surfaces, including rounded corners, and opening or removing overlays invalidates prior highlights. Each source fades independently over 200 ms, including the emitter’s own colored border. Borders can combine several sources; retiring contributions fade out rather than jumping to a new source. Reduced motion applies changes immediately. Source coordinates project directly into each receiver without a second position spring, pointer tracking, DOM capture, or a permanent hover animation loop.

Backdrop behavior follows the browser’s [backdrop-root rules](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter). Visual treatment follows [Apple’s material guidance](https://developer.apple.com/design/human-interface-guidelines/materials): restrained highlights and readable translucent layers.

Use `focusEmission` for a field that should emit while its native control has focus. Focused fields remain active when a different button is hovered. Decorative native-control receivers can pass their hit target as the third argument to `observeGlassLighting`.
