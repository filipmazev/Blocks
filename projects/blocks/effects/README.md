# Appearance effects

Blocks components use glass through the existing theme system. The `BxSurfaceDirective` applies the same material to custom containers. Labels, inputs and icon paths retain their native rendering; decorative lighting and blur sit behind content.

## Global configuration

```ts
import { inject } from '@angular/core';
import { ThemingService } from '@filip.mazev/blocks/core';

private readonly theme = inject(ThemingService);

this.theme.setAppearance({
  material: 'glass',  // glass | frosted | solid
  blur: 10,           // 0–40 pixels
  tint: 0.4,         // 0–1 opacity
  quality: 'auto',    // auto | baseline | enhanced
  reducedTransparency: false
});

// Read the current configuration or return to defaults.
const current = this.theme.appearance();
this.theme.resetAppearance();
```

Global settings apply throughout the application, including mounted controls and overlays. Color comes from the active Blocks palette and semantic tokens; changing the palette does not require configuring a separate glass color scheme.

## Custom surfaces

```ts
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
```

```html
<section bxSurface class="custom-panel">
  <h2>Project settings</h2>
  <p>This surface inherits the global material.</p>
</section>
```

Provide layout and padding using the existing Blocks styling helpers. The directive supplies the material and token-based default border and radius. Controls and actionable surfaces get automatic hover/focus lighting; decorative containers receive nearby light without responding to hover themselves. Components can override the default border and radius with their existing tokens.

| Input | Default | Local override |
| --- | --- | --- |
| `bxSurface` | Global material | `glass`, `frosted`, `solid` |
| `bxSurfaceBlur` | Global blur | 0–40 pixels |
| `bxSurfaceTint` | Global tint | 0–1 |
| `bxSurfaceInteractive` | Automatic control/action detection | Boolean; explicitly enables or disables interaction lighting and press deformation |
| `bxSurfaceEmission` | Theme accent (error color in invalid fields) | Override the semantic color emitted on hover, press or an active state |
| `bxSurfaceFocusEmission` | Surface emission color | Override the color emitted while a contained or associated native control has focus |
| `bxReducedTransparency` | Global setting | Boolean |

Omit local inputs to keep the surface connected to application settings. A deliberate local override continues to take precedence until removed.

## Composition and motion

Use a single backing per physical surface. For example, a menu owns the backing while menu-item content shares it; a form-field label does not need an extra blurred card. Apply `bxTransition="fade"` on a dropdown to fade its menu without resizing its contents. Animated overlays keep a solid theme-colored backing throughout their lifetime, avoiding a blur/tint pop at the end of motion. Other surfaces remain translucent.

Buttons, links, native field surfaces and elements with actionable ARIA roles automatically illuminate their border and nearby surfaces on hover or focus. Active ARIA states keep the light enabled. Plain panels, sections and other decorative containers remain passive receivers. Give a custom clickable element its appropriate role (such as `role="button"`), or explicitly enable `bxSurfaceInteractive` for a custom interaction. Use `bxSurfaceEmission` only to override the semantic color. The source is the element’s geometry, never the mouse coordinates.

There is no drag-to-reposition interaction in this iteration. Spatial highlights are a lightweight lighting approximation, while backdrop blur uses browser compositing. These effects do not ray-trace arbitrary DOM content. Rendering quality can add supported enhancements, and baseline/solid modes remain available for constrained devices.

## Accessibility and lifecycle

`BxA11yService` controls reduced motion. Reduced transparency, unsupported backdrop filters and forced colors use opaque surfaces. Give controls visible or accessible labels independently of the glass decoration.

The directive initializes only in the browser, runs decorative updates outside Angular and tears down its resources when the host is destroyed. Do not directly mount a second engine surface on a host already owned by the directive or a Blocks component.

## Framework independent engine

The `@filip.mazev/blocks/effects/runtime` entry point included in Blocks exports the native DOM surface and transition APIs. Refer to its README for non-Angular use. The native runtime does not import Angular.

## Playground

Use `/appearance` to configure the entire application and `/components/surface` to inspect a custom surface.

Inputs, searches, selects, checkboxes, radio buttons and switches inherit automatic interaction lighting. Invalid fields use the error color. Projected native controls wrapped in `bxSurface` inside `bx-form-field` receive the same field material, focus outline and invalid glow as packaged inputs. All emitters respect overlay boundaries and occlusion; light does not pass through a modal into the page or another dialog.
