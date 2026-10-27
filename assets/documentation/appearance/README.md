# Blocks appearance

Glass is integrated into Blocks components and its existing theme engine. Surface colors, text, borders, radii and elevation come from Blocks tokens. Icons, labels, validation messages and other structural content inherit their containing surface instead of adding redundant blurred boxes.

The `@filip.mazev/blocks/effects/runtime` entry point shipped inside Blocks provides the same material and motion primitives without Angular, CDK or RxJS.

## Run and build

Use an Angular 22 compatible Node version (22.22.3+, 24.15+, or 26+):

```sh
npm ci
npm start
```

Open http://localhost:8080. The component catalogue links each component to its own demonstration and README. `/appearance` provides application-wide material controls and spatial-lighting and fade demonstrations. `/icon-catalog` provides searchable, paginated icons.

```sh
npm run build:playground
npm run build:blocks
```

Documentation is generated automatically before serving/building the playground. After editing a README while the development server is already running, run `npm run tools:build-docs` to regenerate its bundled content. Runtime documentation does not fetch Markdown files.

Keep Angular packages, CLI, builder and ng-packagr on major 22 with TypeScript 6. The checked-in lockfile preserves compatible versions. Runtime Markdown and Mermaid dependencies are no longer needed by the playground. Do not mix Angular 21 tooling with Angular 22.

## Global configuration through Blocks

```ts
import { inject } from '@angular/core';
import { ThemingService } from '@filip.mazev/blocks/core';

export class Settings {
  readonly theme = inject(ThemingService);

  setAppearance() {
    this.theme.setAppearance({
      material: 'glass',
      blur: 10,
      tint: 0.4,
      quality: 'auto',
    });
  }
}
```

There is no global emission setting. Light comes only from explicitly colored borders and items. Neutral edges and restrained highlights define the material; semantic color remains available for selected controls and status content. Floating surfaces enforce a minimum tint density for legibility.

`theme.appearance()` is the current typed configuration; `theme.resetAppearance()` restores defaults. Changes apply to existing components and open overlays. Material is `glass`, `frosted`, or `solid`; blur is 0–40 CSS pixels, tint is 0–1. Quality is `auto`, `baseline`, or `enhanced`. Reduced motion continues through `BxA11yService`; system transparency and contrast preferences remain respected.

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

The engine fades overlays in and out while preserving their full dimensions. Their backing stays solid and theme-colored throughout the fade and at rest, avoiding delayed blur. Reopening reverses from the current opacity. Dropdowns use `bxTransition="fade"` by default; the former `emerge` value remains a compatibility alias.

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
  material: 'glass', blur: 10, tint: 0.4, quality: 'auto',
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

Open http://localhost:8081/projects/blocks/effects/examples/.

## Lighting and rendering limits

Lighting uses a bounded spatial model: up to four lights and four foreground/background reflection proxies per scene. Element positions, depth, intensity and colors influence the highlight and reflected tint. Real CSS backdrop filtering responds to the pixels behind a surface.

These are deliberate optical approximations. The engine does not capture arbitrary DOM into a texture, ray trace the page, infer a 3D scene, or physically refract all foreground/background content. Register moving scene objects and call `scene.refresh()` when your application changes them; there is no perpetual polling loop.

Baseline uses one material layer and directional lighting. Enhanced rendering adds a colored reflection and a specular edge without another backdrop-filter pass. Auto mode considers CSS capability, coarse-pointer devices, reduced-cost device signals and data-saving preference. Explicit enhanced mode still requires the relevant CSS support. Solid, unsupported-backdrop, increased-contrast and reduced-transparency modes provide opaque material.

Input and scene observation are shared per document. Scene updates batch a bounded number of visible surfaces; geometry reads precede writes. Animation frames stop when springs settle. Background scrolling can still cause browser GPU work even while JavaScript is idle: measure the real target devices before choosing high blur or putting glass over frequently changing content.

## Packaging and review

All runtime and Angular effects code lives under `projects/blocks/effects` and is published in the single `@filip.mazev/blocks` package. Run `bash publish.sh` from the workspace root; it prompts for the npm token, bumps the patch version and builds before publishing. `npm run deploy:playground` builds and deploys to the existing GitHub Pages target.

White is the default palette. The Appearance page also includes color and light/dark mode. In code, use `theme.setPalette('white')` and `theme.setApplicationTheme('dark')`. `ng add @filip.mazev/blocks --theme=white` installs its light and dark Sass theme maps; omitting the theme uses White. White uses a charcoal accent in light mode to retain visible focus indicators and text contrast.

The root Playwright configuration and test-results folder have been removed. The regression scenarios remain under `tools/browser` as reference. See [VALIDATION.md](VALIDATION.md) for the checks and browser limitations.

See [DELIVERY-PLAN.md](DELIVERY-PLAN.md) for epics, stories, tasks and ownership; [ACCEPTANCE.md](ACCEPTANCE.md) for component coverage and review status; and [VALIDATION.md](VALIDATION.md) for executed checks and environment limitations.
