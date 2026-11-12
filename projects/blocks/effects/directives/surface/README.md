# Custom appearance surfaces

Apply Blocks' shared decorative material to a custom container while preserving its native content and semantics.

## Import

```typescript
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
```

Add the directive to the consuming standalone component's imports.

## Usage

```html
<section bxSurface [bxSurfaceTranslucency]="0.5">
    <h2>Project settings</h2>
    <p>This panel inherits the active theme.</p>
</section>
```

## API

| Input                      | Purpose                                                                                                   |
| -------------------------- | --------------------------------------------------------------------------------------------------------- |
| `bxSurfaceTranslucency`    | Optional local translucency on the shared 0–1 scale.                                                      |
| `bxSurfaceLocalRefraction` | Boolean, default false. Allow an explicitly glassy lens to sample local content inside a parent material. |
| `bxSurfaceGlassiness`      | Optional `auto`, `off`, or `on` refraction policy.                                                        |
| `bxSurfaceQuality`         | Optional `auto`, `baseline`, or `enhanced` detail policy.                                                 |
| `bxSurfaceInteractive`     | Optional override of automatic interaction feedback.                                                      |
| `bxSurfaceEmission`        | Optional CSS color emitted toward nearby surfaces during interaction.                                     |
| `bxSurfaceFocusEmission`   | Optional CSS color emitted while a contained control has focus.                                           |
| `bxReducedTransparency`    | Optional opaque-material request; false cannot override application or OS reduced transparency.           |

Omitted inputs inherit application/runtime policy. Export the directive as `bxSurface` when a template reference is needed.

## Appearance and customization

Use shared semantic tokens and layout helpers for spacing, border, and radius. The [effects guide](../../README.md) describes material variables, global
configuration, browser policy, and refraction limits.

Small optical overlays such as TimeWheel lenses opt into local refraction with `bxSurfaceLocalRefraction` alongside `bxSurfaceGlassiness="auto"`. Ordinary
nested surfaces continue to share their parent material without adding refraction passes. Global Off, baseline rendering and accessibility preferences still
disable the lens pass.

## Behavior and accessibility

The directive mounts after browser rendering, updates when inputs or reduced-motion preferences change, and releases its controller on destruction. Decorative
feedback does not replace focus indicators or native control semantics. Global accessibility and rendering limits take precedence over requested effects.

## Playground

Visit `/appearance` to configure and compare shared materials.
