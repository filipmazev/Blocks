# Blocks appearance

Glass is integrated into Blocks components and its existing theme engine. Surface colors, text, borders, radii and elevation come from Blocks tokens. Icons,
labels, validation messages and other structural content inherit their containing surface instead of adding redundant blurred boxes.

The `@filip.mazev/blocks/effects/runtime` entry point shipped inside Blocks provides the same material and motion primitives without Angular, CDK or RxJS.

## Import

```ts
import { ThemingService } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
```

Use the core service to configure the application and the standalone surface directive for custom Angular surfaces.

## Usage

Use an Angular 22 compatible Node version (22.22.3+, 24.15+, or 26+):

```sh
npm ci
npm start
```

Open <http://localhost:8080>. The component catalogue links each component to its own demonstration and README. `/appearance` provides application-wide material
controls and spatial-lighting and fade demonstrations. `/icon-catalog` provides searchable, paginated icons.

The playground defaults to Carbon / Cobalt (`#292a2d` / `#356fe8`) when no valid saved palette is present; Reset returns to Carbon / Cobalt.

The appearance preview is a scrollable national-parks article with English copy and photos adapted from EcoProject24. Independent glass search, bookmark,
contents, and navigation controls stay over the article while its images and text scroll beneath them. Search filters the featured places, and the contents and
navigation controls jump within the preview. The opening image uses the original mountain photograph; responsive WebP copies up to 2400 pixels wide are loaded
eagerly, with smaller versions for narrow screens. The preview sits above a separate translucency card. A short scroll down and back plays once when the preview
comes into view, stops on interaction, and is skipped when reduced motion is enabled.

```sh
npm run build:playground
npm run build:blocks
```

Documentation is generated automatically before serving/building the playground. After editing a README while the development server is already running, run
`npm run tools:build-docs` to regenerate its bundled content. Runtime documentation does not fetch Markdown files. Fenced README examples are highlighted during
generation with the same highlight.js engine used by live usage examples and configurator file tabs. Code blocks follow the active light/dark syntax theme and
support keyboard scrolling; short inline API names remain inline code.

Keep Angular packages, CLI, builder and ng-packagr on major 22 with TypeScript 6. The checked-in lockfile preserves compatible versions. Runtime Markdown and
Mermaid dependencies are no longer needed by the playground. Do not mix Angular 21 tooling with Angular 22.

The toolbar's [Theme Studio](../../shared/theme-studio/README.md) edits shared colors, borders, corners, spacing and resting shadows while previewing any page.
It exports SCSS with a named built-in base and separate light/dark colors. Material and accessibility preferences remain on this screen; high contrast and
forced colors suspend Studio overrides without erasing the draft.

## API

```ts
import { inject } from '@angular/core';
import { ThemingService } from '@filip.mazev/blocks/core';

export class Settings {
    readonly themingService = inject(ThemingService);

    setAppearance() {
        this.themingService.setAppearance({
            translucency: 0.5,
            quality: 'auto'
        });
    }
}
```

There is no global semantic-emission setting. Interactive lights use the color of the active control or status item; passive edge cues sample the surrounding
scene automatically. Neutral edges and restrained highlights define the material. Glass buttons follow the full translucency range; fields and filled actions
retain their own legibility constraints.

`themingService.appearance()` is the current typed configuration; `themingService.resetAppearance()` restores defaults. Changes apply to existing components and
open overlays. `translucency` is 0–1, defaulting to the balanced midpoint of 0.5. It adjusts tint and blur together: the minimum is nearly clear with light
blur, while the maximum caps tint near 72.5% to retain a glassy appearance. `reducedTransparency: true` supplies fully opaque surfaces and preserves the chosen
translucency for when transparency is restored. The playground offers `auto` and `baseline` rendering. Reduced motion continues through `BxA11yService`; system
transparency and contrast preferences remain respected. Previously saved tint preferences migrate to translucency, and a saved solid preference becomes reduced
transparency.

The global styles are required once. `ng add @filip.mazev/blocks` adds the distributed material stylesheet to the application build. For an existing
application, add `node_modules/@filip.mazev/blocks/effects/effects.css` to `angular.json` styles before the application stylesheet, or import
`@filip.mazev/blocks/effects/effects.css` globally. Continue including the usual Blocks Sass theme once. The playground already does this.

### Framework-independent API

```ts
import { configureAppearance, mountSurface, mountGlassScene, createGlassTransition } from '@filip.mazev/blocks/effects/runtime';
import '@filip.mazev/blocks/effects/effects.css';

const configuration = configureAppearance(document.documentElement, {
    translucency: 0.5,
    quality: 'auto'
});
const surface = mountSurface(button);
const scene = mountGlassScene(container, {
    lights: [{ element: lightMarker, z: 180, intensity: 1, radius: 640 }],
    reflectors: [{ element: foreground, depth: 80, intensity: 0.3 }]
});
// Mount and lay out the panel first.
const panelSurface = mountSurface(panel);
const transition = createGlassTransition(button, panel);
await transition.enter();
// Later: await transition.exit(), then remove the panel.
// Call scene.refresh() after changing registered objects' position or appearance.
// On teardown: transition.destroy(); panelSurface.destroy(); surface.destroy();
// scene.destroy(); configuration.destroy();
```

Transition promises resolve to `finished` or `cancelled`. Always guard asynchronous panel removal against a subsequent reopening. Controllers expose
update/refresh and destroy methods; dispose them with their owning view. The former transition export remains as a deprecated compatibility alias; new code uses
`createGlassTransition`.

The native example can be served without Angular:

```sh
npm run build:blocks
python3 -m http.server 8081
```

Open <http://localhost:8081/projects/blocks/effects/examples/>.

## Appearance and customization

### Palettes

Each palette combines two tonal families. Choose one under **Palettes** in Appearance; the two swatches show its anchors. The same palette supplies both light
and dark appearances.

| Palette            | Anchors               | `ng add --theme` value |
| ------------------ | --------------------- | ---------------------- |
| Carbon / Cobalt    | `#292a2d` / `#356fe8` | `carbon-cobalt`        |
| Azure / Ember      | `#217eff` / `#d85a1a` | `azure-ember`          |
| Violet / Teal      | `#6d00ff` / `#0d9488` | `violet-teal`          |
| Tangerine / Indigo | `#ff6900` / `#4f78f5` | `tangerine-indigo`     |
| Brick Rose / Cyan  | `#b64a50` / `#0891b2` | `brick-rose-cyan`      |
| Lime / Violet      | `#c4f53d` / `#6842a6` | `lime-violet`          |
| Cyberpunk          | `#3e5669` / `#e6da00` | `cyberpunk`            |

Primary roles identify main actions, links and field focus. Accent roles identify checked checkboxes, radios and switches, slider progress, selected options and
supporting actions. This follows Material's use of distinct color roles for emphasis while keeping broad surfaces neutral. For example, `color="accent"` selects
the second tone on buttons and tabs; `text-accent` follows it on icons. Documentation uses the primary role and Code Examples uses the accent role. Success,
warning, danger and information retain their status meanings across palettes.

Canvas backgrounds stay neutral white or black, leaving application background styling to the consuming app. Cards, toolbars, navigation and default controls
use neutral white/black/gray surfaces. Explicit primary and accent actions retain their palette roles. Scrollbars use a solid primary shade. The playground's
material sample places both tones behind a shared glass surface. Cyberpunk retains yellow actions and blue-slate supporting controls over neutral surfaces.

Carbon / Cobalt combines a deep neutral charcoal with a saturated cobalt-blue accent. Its dark appearance uses neutral off-white primary actions instead of a
pale colored tint. Azure / Ember pairs blue with burnt orange, while Brick Rose / Cyan pairs a muted rose-red with cyan. Their dark action shades are tuned
individually: Cobalt provides a clear blue accent, Ember stays orange, and Brick Rose stays deeper and more muted than the danger red. Status colors are
independent of these palette families.

```ts
const themingService = inject(ThemingService);
themingService.setPalette('violet-teal');
themingService.setApplicationTheme('dark');
```

Use the palette IDs above in `ThemingService.setPalette()` and `ng add --theme`. Sass exports follow the same names, such as `$carbon-cobalt-light-theme` and
`$carbon-cobalt-dark-theme`. High contrast overrides both expressive roles with contrast-first black/white values.

All light-mode accent fills use white text; semantic fill shades become darker where necessary to reach 4.5:1 contrast. Raw 500-level palette anchors and picker
swatches stay unchanged. Other filled-role foregrounds prefer white when it passes, with dark text on brighter fills that require it. Brand/accent and secondary
text also retain contrast on their supported neutral and normal/hover/active surfaces in both modes. High-contrast palettes and explicit theme overrides remain
supported.

### Glassiness and translucency

The **Translucency** slider controls tint and blur. It defaults to 50%; the preceding midpoint now falls around 70% on the slider, with both endpoints
preserved. The classic material retains its clear minimum and caps tint near 72.5%; active refraction adds the stronger readability floor below. Use **Reduce
transparency** for opaque surfaces.

**Glassiness** is a per-element enhancement on supported browsers. Ordinary components keep their existing material. Select individual controls:

```html
<button bx-button variant="icon" glassiness="auto" aria-label="Bookmark">…</button>
<section bxSurface bxSurfaceGlassiness="auto">…</section>
```

`themingService.setAppearance({ translucency: 0.5, glassiness: 'auto' })` sets the shared scale and browser policy. It does not select every component. Off
disables selected glassiness; browser opt-in allows testing future support. Automatic uses one refraction pass on selected surfaces. Device budgets, baseline
quality and accessibility preferences take precedence.

Text, placeholders and icons keep their theme or component foreground colors while scrolling. Active refraction retains a default minimum of 72% tint for
readability, increasing to about 74.9% tint at the slider midpoint and 89% at maximum. Blur starts at 0.5px, reaches about 0.8px at the midpoint and 9.2px at
maximum, keeping low settings sharper. Active, selected and open-popup controls have a stronger 90% minimum backing, and existing component opacity constraints
can demand more. The sampler supplies decorative edge lighting; it never chooses text or icon colors. Custom material and foreground overrides remain
application-owned. See the [effects README](../../../../../../blocks/effects/README.md#glassiness-and-translucency) for material variables and
browser/accessibility fallbacks.

The numeric `glassiness` API was renamed to `translucency`. The directive inputs are now `bxSurfaceTranslucency` and `bxSurfaceGlassiness`, and the scalar CSS
variable is `--bx-translucency`. Saved older preferences migrate automatically to the new names and curve.

### Existing components and custom surfaces

Blocks components receive glass automatically. The `BxSurfaceDirective` remains useful for your own containers and local overrides:

```html
<section bxSurface>
    <button bx-button [bxDropdown]="actions">Actions</button>
</section>
<ng-template #actions>
    <bx-menu>
        <bx-menu-item label="Edit"></bx-menu-item>
        <bx-menu-item label="Duplicate"></bx-menu-item>
    </bx-menu>
</ng-template>
```

Place custom surfaces on containers with measurable CSS boxes. Native replaced elements such as inputs and images need a wrapper for decoration; use the
dedicated `SliderDirective` (`input[type=range][bxSlider]`) for native ranges; Blocks form components already provide appropriate wrappers. Nested surfaces
retain tint and reflection while avoiding a second backdrop-filter pass.

### Overlay fades

The engine fades the material surface itself in and out while preserving its full dimensions, blur, and translucency. The positioning pane remains at full
opacity so it does not interrupt backdrop filtering. Reopening reverses from the current opacity. Dropdowns use `bxTransition="fade"` by default; the former
`emerge` value remains a compatibility alias.

Dropdowns expose `#actions="bxDropdown"`, `open()`, `close()`, `toggle()`, `isOpen()` and `state()`. The adapter keeps an exiting panel inert and disposes it
after motion settles, with revision guards for reopening. Focus and keyboard behavior remain native. No dragging or repositioning behavior was added in this
iteration.

The Theme picker includes a **Create a theme** action. It opens the existing Theme Studio sidebar beside Appearance, retaining the current palette and draft.
Customize and preview here, then export the theme from Studio. The action does not navigate or reset existing changes.

## Behavior and accessibility

Appearance updates propagate through the shared theme and effects services to mounted components and overlays. Reduced motion takes precedence over requested
animation. Reduced transparency, high contrast, and forced colors preserve opaque, readable presentation. Keep semantic labels, focus indicators, and control
state independent of decorative glass and lighting. Destroy custom runtime controllers with their owning view.

### Lighting and rendering limits

Lighting uses a bounded spatial model: up to four explicit lights and four foreground/background reflection proxies per scene. Every mounted glass surface also
samples a few points around its edge and picks up subtle color from nearby visible CSS backgrounds, images, video and canvas. Paint order separates foreground
from backdrop cues; depth and distance reduce their strength. Different sources retain localized edge colors, crossfading beneath existing semantic and explicit
lights. Real CSS backdrop filtering continues to display the pixels behind a surface.

These are deliberate optical approximations. Media sampling uses a small downscaled buffer at selected edge points; the engine does not capture arbitrary DOM
into a texture, ray trace the page, or infer a 3D scene. Refractive refraction and rim reflection use the browser's live backdrop pixels through SVG filters.
Register moving scene objects and call `scene.refresh()` when your application changes them; call `refreshGlassLighting(element)` after application-driven
changes around an automatically lit surface. Static scenes do no ongoing sampling. Layout changes are coalesced over 180 ms; visible live media shares the
existing adaptive polling loop and backs off when unchanged. Media pixels are cached and color-only changes reuse the existing edge positions without hit
testing. Hidden pages and reduced-motion receivers stop live media checks.

Baseline uses blur, tint and directional lighting. Automatic adapts material detail and refraction to CSS capability, coarse-pointer devices, reduced-cost
device signals and data-saving preference. Use Glassiness Off or Baseline when the added GPU cost is unsuitable. Reduced transparency, unsupported backdrop
filters and increased contrast provide opaque presentation.

Input and scene observation are shared per document. Scene updates batch a bounded number of visible surfaces; geometry reads precede writes. Animation frames
stop when springs settle. Background scrolling can still cause browser GPU work even while JavaScript is idle: measure the real target devices before choosing
high blur or putting glass over frequently changing content.

## Playground

The `/appearance` page separates color mode, surfaces, theme palettes, and accessibility. Light and Dark select an explicit mode. Auto follows live system
color-scheme changes, including after a reload. Clickable Blocks cards choose the mode; their inert previews use Blocks components in the selected palette. The
selected card uses the shared emissive highlight, and Auto joins its light/dark preview halves without inner corner rounding.

```ts
themingService.setApplicationTheme('dark');
themingService.setApplicationTheme(null); // Follow the system appearance.
```

The Surfaces section places its Surface Appearance title beside the scrolling journal on wide layouts and above it on smaller screens. The padded pill slider
sits below the demo, followed by its description; Reset restores surface preferences. Its Blocks Advanced settings disclosure contains rendering and glassiness
options. Automatic and Baseline are the available rendering choices. Rendering, glassiness, translucency and reduced transparency are saved together in
`blocks-appearance` and restored on refresh. Opening this page normalizes previously saved rendering choices that are no longer offered to Automatic, preserving
other appearance preferences. Baseline temporarily sets Glassiness to Off and disables all glassiness choices, including browser opt-in. Switching back to
Automatic restores the previous Automatic or browser opt-in policy; an explicitly chosen Off remains Off. `themingService.preferredGlassiness()` exposes the
requested policy while `themingService.appearance().glassiness` reflects the effective value. Theme palettes and accessibility preferences have independent
sections; resetting surfaces changes only surface preferences.

The top bar provides Appearance and Theme Studio actions; edited themes also expose a compact preview pause/resume action. On wide screens, selectable Blocks
cards offer Light, Dark and Auto. On screens at the shared `sm` breakpoint or narrower, Light and Dark appear side by side with portrait previews and an
Automatic slide toggle below. Automatic highlights the currently active mode and follows system changes; choosing the other card disables Auto, while choosing
the already active card keeps it enabled. Turning Auto off preserves the current mode. Mode and palette preferences remain available on this page and persist
across refreshes.

Open `/appearance` to adjust the live application preferences and preview the material over scrollable content. Use `/components` to inspect individual controls
and their colocated API documentation. The playground screen, its template/styles, and this guide live together.
