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
global settings. Noninteractive surfaces receive environmental light without pointer pressure or the refractive active tint. Their resolved interaction state is
restored with other owned attributes on teardown.

Setting application `quality: 'baseline'` temporarily sets `glassiness: 'off'`, including during initialization and partial updates. Switching back to
`quality: 'auto'` or `'enhanced'` restores the requested glassiness policy. An explicit `glassiness` update replaces that preference, including while baseline
is selected. A previously requested `'off'` remains off and continues to prevent Enhanced rendering.

## Global material and theme contract

Per-surface `emissionOrigin` optionally names a descendant selector for the visible light source. `emissionStrength` is a local 0–2 multiplier, defaulting to
the historical strength of 1. It affects the emitted rim and neighboring illumination while leaving environmental reception and pressure feedback unchanged.
These local settings are not application-wide appearance configuration. Existing callers need no migration. Registered descendant origins also paint the emitted
rim through their existing surface controller; unregistered origins supply bounds and retain host rim painting. `refreshGlassLighting(element, true)` urgently
resamples and snaps environmental colors for committed semantic changes; the omitted second argument preserves smooth lighting updates.

The renderer defines no brand palette or spacing system. It uses the existing Blocks semantic tokens and preserves each component's border radius, size and
layout. Load the glass CSS once after your theme CSS, and set border radius on your native element when using the package outside Blocks.

Live radius and border-width token changes refresh both refraction renderers, even when the surface dimensions stay fixed. Optical maps retain their caches
until geometry changes; border-only changes update layer insets. Theme controls use Core's
[curated token contract](../../core/README.md#theme-token-audit-and-customization-contract); optical and animation properties remain advanced runtime state.

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

Translucency controls tint and blur together. Material strength is `m = 0.85 × (2 × translucency − translucency²)`. Tint is `0.06 + 1.02m − 0.28m²`,
existing-material blur is `4 + 24m²` px, and glassiness blur is `0.5 + 12m²` px. The default remains 0.5 (50% of the slider), now providing about 59.6% classic
tint and 13.8px blur. Both endpoints stay unchanged, and maximum classic tint is about 72.5%. Navigation, panels and modals add 10 opacity points to that global
material, with a 52% readability minimum and about 69.6% opacity at the default. Reduced transparency provides opaque surfaces without losing the preference.

Opt in per element with `mountSurface(element, { glassiness: 'auto' })`. Omitted surfaces keep their existing material.
`configureAppearance(root, { glassiness: 'auto' })` is a browser policy for selected surfaces, not a global opt-in. Automatic uses one refraction pass on
supported browsers; unsupported engines keep the previous look. `on` permits testing another engine, while `off` disables selected enhancements. Local
`quality: 'enhanced'` adds the full reflection/bevel treatment, subject to application baseline and device policy.

Foreground colors stay theme-owned. Refraction retains at least 72% tint for readable theme foregrounds. Blur ranges from 0.5px at the clearest setting to about
5.4px at the midpoint and 9.2px at maximum; low settings preserve sharper refraction while the tint supplies the backing. Component opacity constraints can
request more backing. No text-contrast sampling, foreground switching, grouping or per-control contrast subscriptions are mounted. The existing shared sampler
continues to supply decorative ambient edge lighting. See [appearance effects](../README.md#glassiness-and-translucency) for material variables and
browser/accessibility fallbacks.

Local color aliases preserve component intent:

| Glass alias                 | Blocks fallback            |
| --------------------------- | -------------------------- |
| `--bx-glass-surface`        | `--bx-bg-surface`          |
| `--bx-glass-opaque-surface` | local `--bx-glass-surface` |
| `--bx-glass-text`           | `--bx-text-primary`        |
| `--bx-glass-edge`           | `--bx-border-subtle`       |
| `--bx-glass-accent`         | `--bx-primary`             |

For example, a success toast can set `--bx-glass-surface: var(--bx-bg-success)` and retain its established semantic appearance. Outside Blocks, system colors
supply neutral fallbacks.

Use opaque semantic colors for `--bx-glass-surface` and let the material opacity control translucency. When a custom surface color contains alpha, supply an
opaque `--bx-glass-opaque-surface` on that element. The override also applies to increased contrast and unsupported backdrop filtering; it resolves locally on
each surface, so nested controls retain their own colors. For example, an accent wash can use
`--bx-glass-opaque-surface: color-mix(in srgb, var(--bx-accent) 22%, var(--bx-bg-surface))` to retain a soft tint without transparency.

Composite controls keep their opaque backing separate from their hit targets. Tabs paint the header and traveling selected surface, while the foreground
triggers remain unpainted so they cannot cover the highlight. Reduced transparency does not disable selection motion, direct manipulation, or lighting.

Reduced-transparency state review covers these shared patterns:

| Family                                            | Opaque state feedback                                                                                          |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Tabs and connected steppers                       | Separate selection backing; opaque tint stays distinct from the header and solid current marker.               |
| Buttons, cards and chips                          | Persistent selection contour; text buttons retain an underline.                                                |
| Menus, select/autocomplete options and navigation | Solid semantic hover/active colors on an opaque container; selected options retain their selection indicators. |
| Checkbox, radio and switch controls               | Opaque checked fill with a check, dot or thumb position.                                                       |
| Sliders and progress                              | Opaque thumb or filled track; value and progress geometry remain available.                                    |
| Alerts, tags, dialogs and toasts                  | Opaque semantic/content surfaces; borders, icons and text preserve meaning independently of decorative light.  |

Transparent foreground hit targets, hover washes and lighting over an opaque parent are intentional composition, not translucent windows into page content. When
customizing a state color with alpha, define its opaque counterpart and check selected, hovered, focused, disabled and readonly states in both themes.

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

Overlays use the shared retargetable spring for opacity and a restrained material scale, keeping layout dimensions and collision-aware positioning unchanged.
The first material surface animates its own opacity and scale; the positioning pane retains its transform. Controller-owned paint avoids invalidating unrelated
lighting receivers. Reversal preserves current position and velocity, and the interrupted promise resolves to `cancelled`.

The transition temporarily owns the skin's `opacity`, `scale`, and `transform-origin`, plus the target's `visibility`. Without a material skin it animates the
target. Supply an already positioned target and destroy the controller with its overlay. Both endpoints must belong to the same document. `refresh()` updates
the scale origin after an overlay-positioning flip. Reduced motion snaps to the requested state without a running spring.

## Press feedback

The delegated pointer and keyboard handlers drive the existing pressure spring, including a visible initial response for quick taps. A soft inset sheen sits
within the material’s fixed clipping box. `--bx-glass-press` exposes current pressure to decorative material. Button text and icons remain undistorted, and the
hit area and overlay origin stay fixed. Controller-owned pressure writes are excluded from scene invalidation, so a press does not resample the entire document
every frame.

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
  OS transparency preference enabled; local surface options cannot turn off an owning or OS transparency preference. An explicit reduced-motion setting takes
  precedence so Blocks can preserve its existing manual accessibility override; omit it to follow the OS. Reduced motion finishes transitions immediately.
  Unsupported backdrop filtering or color mixing produces an opaque fallback.
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
testing excludes covered surfaces, including rounded corners. Fully transparent CDK dismissal backdrops intercept input without occluding lighting; visible menu
panels and opaque backdrops still occlude. Opening or removing overlays invalidates prior highlights. Each source fades independently over 200 ms, including the
emitter’s own colored border. Borders can combine several sources; retiring contributions fade out rather than jumping to a new source. Reduced motion applies
changes immediately. Source coordinates project directly into each receiver without a second position spring, pointer tracking, DOM capture, or a permanent
hover animation loop. Hover contributions use a bounded circular spread, so a large receiver does not stretch a small source across its entire border. Edge
falloff uses the distance to the receiver's perimeter even when a source projects inside its bounds.

Use `mountSurface(element, { emission: false })` to disable automatic hover, press, active-state and keyboard-focus emission while keeping press deformation and
received lighting. An explicit `focusEmission` still enables focus-only emission. Omission retains the existing theme accent/error default. Blocks menu rows use
local hover/pressed fills and focus outlines without becoming light sources.

`inheritGlassLighting(overlay, origin)` shares incoming lighting with an overlay while retaining its physical boundary for outgoing sources. Controls inside an
overlay can illuminate nearby receivers in that overlay, but cannot cast light back into its trigger's page or parent overlay. This applies to dropdowns,
context menus, popovers, selection panels and passive tooltips. Theme inheritance remains independent of this direction of lighting.

Backdrop behavior follows the browser’s [backdrop-root rules](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter). Visual
treatment follows [Apple’s material guidance](https://developer.apple.com/design/human-interface-guidelines/materials): restrained highlights and readable
translucent layers.

Editable field surfaces emit while their native control has focus by default; action surfaces emit for keyboard focus only. An explicit `focusEmission` opts a
custom surface into illumination for any focus. Checked, pressed, selected, and current states retain emission. An expanded trigger retains emission when it
also declares `aria-haspopup`; ordinary layout expansion alone does not select a control. Focused fields remain active when a different button is hovered.
Decorative native-control receivers can pass their hit target as the third argument to `observeGlassLighting`.

Active borders stay painted when surfaces are partly clipped by the viewport, a scrolling container, or an overlapping header. Scrolling them back into view
preserves their lighting without a fade. A partly exposed source can still emit, but each receiving interior/edge location must be uncovered. A visible area
elsewhere on a receiver does not authorize light through an overlapping opaque panel. Fully covered surfaces remain excluded. Whole-source exposure checks share
a short-lived cache and use bounded fallback probes only when the preferred point is covered; projected receiver points use separate visibility checks.

## Retargetable selection motion

`createSpringMotion(initial, render, options?)` builds scalar channels over the existing exact damped spring and shared lazy frame clock. The callback receives
positions and velocities per second. `retarget(values, immediate = false)` preserves current velocity; `immediate: true` snaps, clears velocity and unsubscribes
from frames. The initial and target arrays must contain the same number of finite values; invalid targets throw `RangeError` before changing any channel.
`destroy()` stops animation permanently. Owners must destroy the controller and snap when their live reduced-motion preference changes. Without a browser
animation clock, targets paint immediately. Settled channels leave no running frame loop; the scheduler bounds frame deltas after stalls.

```ts
import { createSpringMotion, MOTION_PRESETS, paintMotionStyles } from '@filip.mazev/blocks/effects/runtime';

const motion = createSpringMotion(
    [0, 100],
    ([x, width]) => {
        paintMotionStyles(selection, { transform: `translateX(${x}px)`, width: `${width}px` }, true);
    },
    MOTION_PRESETS.fluid
);

motion.retarget([160, 140]);
// When reduced motion becomes active, snap the current destination:
motion.retarget([160, 140], true);
// When the owning view is destroyed:
motion.destroy();
```

`paintMotionStyles(element, styles, geometry = false)` writes decorative CSS properties without invalidating unrelated lighting receivers. Pass `true` when
moving/resizing a registered surface so its own lighting geometry is refreshed through the existing engine. The owner must restore any persistent element's
styles if it outlives its motion view. The pilots remove their decorative surfaces with their views.

`MOTION_PRESETS` exports `snappy`, `smooth`, `soft`, `elastic`, and `fluid` stiffness/damping/mass defaults, checked against `ISpringOptions`. Callers can
supply custom spring options. These are motion characteristics, not new CSS theme tokens. The pilots cap deformation separately and remove it under reduced
motion. Inspect `/components/stepper` and `/components/tabs`; use `/appearance` for accessibility and theme combinations. The same foundations serve sliders,
toggles, menus and overlays.

## Shared row and overlay motion

`mountSelectionMotion(root, { selector?, reducedMotion? })` adds one noninteractive surface behind an existing `role="menu"` or `role="listbox"` container. The
default selector is `[role="menuitem"], [role="option"]`. Disabled rows and nested lists are excluded. Pointer hover and exit restore the backing immediately;
pointer exit hides it when there is no selected or keyboard-focused row. Mouse-only focus does not keep a hover highlight after exit. Pointer
selection/deselection retains the hovered row without traveling to another selected option. Actual keyboard focus and `aria-selected` changes may spring without
changing selection. The controller remeasures dynamic/scrolling content, bounds stretch, and releases its observers and surface renderer on `destroy()`. Omitted
motion policy follows live inherited/system preferences; call `update({ reducedMotion })` to change an explicit application override. Use a div container with
unrestricted children. Set `--bx-selection-surface` to customize the backing; defaults use existing semantic hover/error surfaces. Focus rings and persistent
selection/checkmarks remain owned by the rows. Menus, selects, multi-selects, and autocomplete demonstrate this at their existing Playground routes.

`createGlassTransition` now uses the shared retargetable spring for opacity and restrained scale. `IGlassTransitionOptions.scale` is the closed scale, clamped
from 0.9 to 1 and defaulting to 0.985. Use 1 for opacity-only motion. The controller preserves the overlay's positioning transform, follows the opening side,
restores owned styles, cancels superseded promises, and snaps on live reduced motion. `refresh()` updates its scale origin after a positioning flip. Existing
enter/exit/destroy contracts remain available. Native CSS `motion-easing()` presets from `core/styles/helpers` supply restrained curves where continuous physics
is unnecessary, including large modal surfaces and toast stack collapse. These Sass curves add no CSS token scale or generator-owned token changes.

## Fluid interaction across Blocks

Blocks applies Apple's [motion guidance](https://developer.apple.com/design/human-interface-guidelines/motion),
[gesture guidance](https://developer.apple.com/design/human-interface-guidelines/gestures), and
[Designing Fluid Interfaces](https://developer.apple.com/videos/play/wwdc2018/803/) through the shared runtime. The web interaction contract remains native:
scrolling, zoom, keyboard activation, focus, disabled/readonly state and application guards take precedence over decorative motion.

| Interaction family                                               | Motion contract                                                                                                                                                  | Playground review                                                                                |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Buttons, chips, checkbox/radio controls and interactive surfaces | Immediate material pressure; stronger for touch, subtler for mouse/pen/keyboard. Repeated presses retain spring velocity. Labels and hit targets stay stable.    | `/components/button`, `/components/checkbox`, `/components/radio`, `/components/chip`            |
| Tabs                                                             | Native touch scrolling; hold to select by dragging. Actual position drives the preview; bounded velocity projection chooses the release destination.             | `/components/tabs`                                                                               |
| Sliders, range sliders and resize handles                        | Direct values and geometry follow actual input. No predicted value changes. Decorative feedback releases independently.                                          | `/components/slider`, `/components/range-slider`, `/components/resize-handle`                    |
| Toggles and stepper selection                                    | Retarget committed state without restarting springs. Stepper guards and application confirmation remain authoritative; separate cards use local feedback.        | `/components/slide-toggle`, `/components/stepper`                                                |
| Menus, select, multiselect and autocomplete                      | Pointer hover is immediate. Keyboard selection can settle spatially. A clipped decorative layer cannot create scroll overflow.                                   | `/components/menu`, `/components/select`, `/components/multi-select`, `/components/autocomplete` |
| Fields, errors and disclosures                                   | Brief feedback uses shared curves. Error text remains available; disclosure state changes immediately and can be reversed.                                       | `/components/input-field`, `/components/collapsible`                                             |
| Navigation, side panels and modal views                          | Large surfaces use restrained motion; dimensions and viewport constraints remain authoritative. Bottom-sheet releases use recent velocity and guarded dismissal. | `/components/side-nav`, `/components/side-panel`, `/modal`                                       |
| Dropdowns, popovers and tooltips                                 | Shared overlay springs preserve positioning and cancel superseded completion promises.                                                                           | `/components/dropdown`, `/components/popover`, `/components/tooltip`                             |
| Toasts, progress, loading and skeletons                          | Status and lifetime remain independent of decorative motion. Reduced motion retains static state, text and accessible feedback.                                  | `/toastr`, `/components/progress-bar`, `/components/loading-spinner`, `/components/skeleton`     |

Use live reduced-motion and reduced-transparency preferences independently. Reduced motion removes travel, deformation and transition delays, while direct
manipulation, focus, semantics and loading state remain available. Reduced transparency changes material opacity without disabling useful lighting. Check light
and dark themes, constrained widths, zoom, RTL, interrupted gestures and cancellation. Browser automation does not replace physical iOS Safari touch review.

### Gesture sampling and handoff

`GestureVelocity` samples recent scalar motion in coordinate units per second. `update(position, timestamp)` filters event samples, responds immediately to a
reversal and ignores stale timestamps. `velocity(timestamp)` returns zero after a 100 ms stationary pause. Coordinates must use the same space throughout a
gesture; scroll offsets must not masquerade as pointer velocity.

`projectMotion(position, velocity, limit, seconds = 0.16)` chooses a bounded prospective destination. It throws `RangeError` for nonfinite coordinates or
negative bounds. Use it to select a discrete snap destination or request dismissal; do not use prediction to change precise slider values or to bypass guards.
The projection horizon is Blocks tuning, not an Apple-prescribed constant.

`ISpringMotion.track(values, velocities?)` paints direct manipulation immediately, stops pending frames, and retains the supplied velocities for the next
`retarget()`. Omitted velocities are zero. Both arrays must contain finite values and match the initial channel count; invalid inputs throw `RangeError` without
partially changing the channels. Snap with `retarget(values, true)` under reduced motion, and call `destroy()` on teardown.

```ts
import { createSpringMotion, GestureVelocity, projectMotion } from '@filip.mazev/blocks/effects/runtime';

const velocity = new GestureVelocity(0, 0);
const motion = createSpringMotion([0], ([position]) => {
    selection.style.transform = `translateX(${position}px)`;
});

velocity.update(24, 32);
motion.track([24], [velocity.velocity(32)]);
const destination = projectMotion(24, velocity.velocity(32), 100);
// Resolve destination to an allowed snap point before committing application state.
motion.retarget([destination]);
// When the owning view is destroyed:
motion.destroy();
```

`subscribeFrame(callback)` exposes the existing shared lazy clock for coordinated work such as drag edge scrolling. Its `FrameCallback` receives bounded elapsed
seconds and an animation timestamp in milliseconds. Return `false` when settled or blocked; call the returned cleanup function on release, cancellation and
teardown. Without `requestAnimationFrame`, it schedules no work. It is not an automatic reduced-motion policy: callers must distinguish useful direct
interaction from optional decorative movement. Tabs demonstrate continuous edge scrolling with this clock.
