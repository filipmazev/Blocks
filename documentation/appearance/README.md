# Blocks appearance

Glass is integrated into Blocks components and its existing theme engine. Surface colors, text, borders, radii and elevation come from Blocks tokens. Icons, labels, validation messages and other structural content inherit their containing surface instead of adding redundant blurred boxes.

The `@filip.mazev/blocks/effects/runtime` entry point shipped inside Blocks provides the same material and motion primitives without Angular, CDK or RxJS.

## Run and build

Use an Angular 22 compatible Node version (22.22.3+, 24.15+, or 26+):

```sh
npm ci
npm start
```

Open <http://localhost:8080>. The component catalogue links each component to its own demonstration and README. `/appearance` provides application-wide material controls and spatial-lighting and fade demonstrations. `/icon-catalog` provides searchable, paginated icons.

The playground defaults to Graphite / Sky Blue (`#525252` / `#38bdf8`) when no saved palette is present; Reset returns to Graphite / Sky Blue. Saved palette preferences remain available.

The appearance preview is a scrollable national-parks article with English copy and photos adapted from EcoProject24. Independent glass search, bookmark, contents, and navigation controls stay over the article while its images and text scroll beneath them. Search filters the featured places, and the contents and navigation controls jump within the preview. The opening image uses the original mountain photograph; responsive WebP copies up to 2400 pixels wide are loaded eagerly, with smaller versions for narrow screens. The preview sits above a separate glassiness card. A short scroll down and back plays once when the preview comes into view, stops on interaction, and is skipped when reduced motion is enabled.

```sh
npm run build:playground
npm run build:blocks
```

Documentation is generated automatically before serving/building the playground. After editing a README while the development server is already running, run `npm run tools:build-docs` to regenerate its bundled content. Runtime documentation does not fetch Markdown files.

Keep Angular packages, CLI, builder and ng-packagr on major 22 with TypeScript 6. The checked-in lockfile preserves compatible versions. Runtime Markdown and Mermaid dependencies are no longer needed by the playground. Do not mix Angular 21 tooling with Angular 22.

## Palettes

Each palette combines two tonal families. Choose one under **Palettes** in Appearance; the two swatches show its anchors. The same palette supplies both light and dark appearances.

| Palette | Anchors | `ng add --theme` value |
| --- | --- | --- |
| Graphite / Sky Blue | `#525252` / `#38bdf8` | `graphite-sky-blue` |
| Azure / Coral | `#217eff` / `#f87763` | `azure-coral` |
| Violet / Teal | `#6d00ff` / `#0d9488` | `violet-teal` |
| Tangerine / Indigo | `#ff6900` / `#4f78f5` | `tangerine-indigo` |
| Scarlet / Cyan | `#e3241b` / `#0891b2` | `scarlet-cyan` |
| Lime / Violet | `#c4f53d` / `#6842a6` | `lime-violet` |
| Cyberpunk | `#3e5669` / `#e6da00` | `cyberpunk` |

Primary roles identify main actions, links and field focus. Accent roles identify checked checkboxes, radios and switches, slider progress, selected options and supporting actions. This follows Material's use of distinct color roles for emphasis while keeping broad surfaces neutral. For example, `color="accent"` selects the second tone on buttons and tabs; `text-accent` follows it on icons. Documentation uses the primary role and Code Examples uses the accent role. Success, warning, danger and information retain their status meanings across palettes.

Canvas backgrounds stay neutral white or black, leaving application background styling to the consuming app. Cards, toolbars, navigation and default controls use neutral white/black/gray surfaces. Explicit primary and accent actions retain their palette roles. Scrollbars use a solid primary shade. The playground's Oddity canvas uses subtle tints from both tones over the neutral canvas. Cyberpunk retains yellow actions and blue-slate supporting controls over neutral surfaces.

```ts
const theme = inject(ThemingService);
theme.setPalette('violet-teal');
theme.setApplicationTheme('dark');
```

Previous palette IDs (`white`, `blue`, `purple`, `orange`, `red`, `green`) and Sass theme variables remain compatibility aliases. Stored selections migrate to the paired IDs. High contrast overrides both expressive roles with contrast-first black/white values.

## Global configuration through Blocks

```ts
import { inject } from '@angular/core';
import { ThemingService } from '@filip.mazev/blocks/core';

export class Settings {
  readonly theme = inject(ThemingService);

  setAppearance() {
    this.theme.setAppearance({
      glassiness: 0.5,
      quality: 'auto',
    });
  }
}
```

There is no global semantic-emission setting. Interactive lights use the color of the active control or status item; passive edge cues sample the surrounding scene automatically. Neutral edges and restrained highlights define the material. Glass buttons follow the full glassiness range; fields and filled actions retain their own legibility constraints.

`theme.appearance()` is the current typed configuration; `theme.resetAppearance()` restores defaults. Changes apply to existing components and open overlays. `glassiness` is 0–1, defaulting to the balanced midpoint of 0.5. It adjusts tint and blur together: the minimum is nearly clear with light blur, while the maximum caps tint at 80% to retain a glassy appearance. There are no independent tint, blur, or material preset settings. `reducedTransparency: true` supplies fully opaque surfaces and preserves the chosen glassiness for when transparency is restored. Quality is `auto`, `baseline`, or `enhanced`. Reduced motion continues through `BxA11yService`; system transparency and contrast preferences remain respected. Previously saved tint preferences migrate to glassiness, and a saved solid preference becomes reduced transparency.

The global styles are required once. `ng add @filip.mazev/blocks` adds the distributed material stylesheet to the application build. For an existing application, add `node_modules/@filip.mazev/blocks/effects/effects.css` to `angular.json` styles before the application stylesheet, or import `@filip.mazev/blocks/effects/effects.css` globally. Continue including the usual Blocks Sass theme once. The playground already does this.

## Existing components and custom surfaces

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

Place custom surfaces on containers with measurable CSS boxes. Native replaced elements such as inputs and images need a wrapper for decoration; use the dedicated `SliderDirective` (`input[type=range][bxSlider]`) for native ranges; Blocks form components already provide appropriate wrappers. Nested surfaces retain tint and reflection while avoiding a second backdrop-filter pass.

## Overlay fades

The engine fades the material surface itself in and out while preserving its full dimensions, blur, and translucency. The positioning pane remains at full opacity so it does not interrupt backdrop filtering. Reopening reverses from the current opacity. Dropdowns use `bxTransition="fade"` by default; the former `emerge` value remains a compatibility alias.

Dropdowns expose `#actions="bxDropdown"`, `open()`, `close()`, `toggle()`, `isOpen()` and `state()`. The adapter keeps an exiting panel inert and disposes it after motion settles, with revision guards for reopening. Focus and keyboard behavior remain native. No dragging or repositioning behavior was added in this iteration.

## Framework-independent API

```ts
import {
  configureAppearance,
  mountSurface,
  mountGlassScene,
  createGlassTransition,
} from '@filip.mazev/blocks/effects/runtime';
import '@filip.mazev/blocks/effects/effects.css';

const configuration = configureAppearance(document.documentElement, {
  glassiness: 0.5, quality: 'auto',
});
const surface = mountSurface(button);
const scene = mountGlassScene(container, {
  lights: [{ element: lightMarker, z: 180, intensity: 1, radius: 640 }],
  reflectors: [{ element: foreground, depth: 80, intensity: 0.3 }],
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

Transition promises resolve to `finished` or `cancelled`. Always guard asynchronous panel removal against a subsequent reopening. Controllers expose update/refresh and destroy methods; dispose them with their owning view. The former transition export remains as a deprecated compatibility alias; new code uses `createGlassTransition`.

The native example can be served without Angular:

```sh
npm run build:blocks
python3 -m http.server 8081
```

Open <http://localhost:8081/projects/blocks/effects/examples/>.

## Lighting and rendering limits

Lighting uses a bounded spatial model: up to four explicit lights and four foreground/background reflection proxies per scene. Every mounted glass surface also samples a few points around its edge and picks up subtle color from nearby visible CSS backgrounds, images, video and canvas. Paint order separates foreground from backdrop cues; depth and distance reduce their strength. Different sources retain localized edge colors, crossfading beneath existing semantic and explicit lights. Real CSS backdrop filtering continues to display the pixels behind a surface.

These are deliberate optical approximations. Media sampling uses a small downscaled buffer at selected edge points; the engine does not capture or mirror the page or arbitrary DOM into a texture, ray trace the page, infer a 3D scene, or physically refract all foreground/background content. Register moving scene objects and call `scene.refresh()` when your application changes them; call `refreshGlassLighting(element)` after application-driven changes around an automatically lit surface. Static scenes do no ongoing sampling. Layout changes are coalesced over 180 ms; visible live media is checked every 500 ms, backing off to 2 seconds when unchanged. Media pixels are cached and color-only changes reuse the existing edge positions without hit testing. Hidden pages and reduced-motion receivers stop live media checks.

Baseline uses one material layer and directional lighting. Enhanced rendering adds a colored reflection and a specular edge without another backdrop-filter pass. Auto mode considers CSS capability, coarse-pointer devices, reduced-cost device signals and data-saving preference. Explicit enhanced mode still requires the relevant CSS support. Reduced transparency, unsupported backdrop filters, and increased contrast provide opaque presentation.

Input and scene observation are shared per document. Scene updates batch a bounded number of visible surfaces; geometry reads precede writes. Animation frames stop when springs settle. Background scrolling can still cause browser GPU work even while JavaScript is idle: measure the real target devices before choosing high blur or putting glass over frequently changing content.
