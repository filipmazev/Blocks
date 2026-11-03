Blocks 1.5.2 alpha adds opt-in glassiness, selectable cards and a more focused appearance page, with shared lighting fixes for themed controls.

Package version: `1.5.2`. Distribution channel: npm's `alpha` tag.

## Glassiness and surface appearance

- Added SVG-backed refraction for explicitly selected surfaces on supported browsers, with the existing material as the fallback.
- Added `glassiness` policies (`auto`, `off`, `on`) to surface configuration and opt-in controls. Global Off, device budgets and accessibility preferences take precedence.
- Added Automatic rendering with one refraction pass and Enhanced rendering with reflection and bevel layers. Shared geometry caches, bounded reflection regions and paused offscreen work limit rendering costs.
- Kept glassiness opt-in for controls and cards that benefit from it, including the appearance preview, overview feature cards and toast surfaces.
- Renamed the numeric surface preference to `translucency`. Tint and blur use a nonlinear scale with a lighter default, a sharp minimum and a stronger finish at the maximum. Reduce transparency remains the fully opaque presentation.
- Kept text, placeholders and icons in their theme or component colors. A minimum tint backing provides readability without dynamic foreground switching.
- Persisted rendering, glassiness, translucency and reduced transparency together, including Enhanced rendering across refreshes. Glassiness Off returns Enhanced to Automatic.
- Baseline temporarily switches Glassiness to Off and disables its controls, including browser opt-in. Returning to Automatic or Enhanced restores the previous glassiness policy, including after a reload; an explicitly chosen Off stays Off. Enhanced remains available from Baseline when the remembered policy permits it.
- Preserved the material while scrolling under translucent surfaces and during overlay fades.

## Selectable cards

- Added clickable cards with controlled `selected` state, `selectedChange`, `activated`, disabled and readonly behavior.
- Added the native `button[bx-card]` variant alongside `bx-card`.
- Added configurable selection lighting through `highlightColor` and `--bx-card-highlight`, using the shared semantic lighting engine.
- Preserved keyboard activation, visible focus and nested action behavior. Disabled cards cannot activate; readonly cards remain focusable and preserve their selected state.

## Lighting and form controls

- Resolved emission colors in the source component's theme scope so accent-colored controls illuminate neighboring surfaces with the correct color.
- Kept active borders painted as surfaces cross viewport edges or pass behind sticky headers, avoiding a visible fade on re-entry.
- Kept surrounding light active while sources and receivers remain partly exposed, including inside clipped scrolling containers. A covered center or projected corner no longer removes the entire effect; fully covered surfaces remain excluded.
- Restored accent emission for form checkboxes, including checked and indeterminate states, hover and keyboard focus. Disabled and readonly checkboxes remain passive.
- Added the `Checkbox.emissive` input, defaulting to `true`, and the decorative `CheckboxIndicator.emissive` input, defaulting to `false`.
- Kept multiselect option and select-all indicators non-emissive while retaining their themed faces and selection marks.
- Aligned slide-toggle hints and errors with the control and added layout tokens for settings rows with labels and switches at opposite ends.

## Accordion and collapsible headers

- Matched hover highlights to the container's inner corner radius, including custom radius values.
- Kept expanded headers rounded at the top and square at the bottom, and removed the divider between the header and content.

## Appearance playground

- Organized preferences into Appearance, Surfaces, Theme and Accessibility sections.
- Added selectable Light, Dark and Auto preview cards built from Blocks components.
- On smaller screens, Light and Dark cards sit side by side with portrait previews and an Automatic slide toggle below. Automatic highlights the active system mode; choosing the other card switches to an explicit preference.
- Moved the translucency slider into a padded pill below the surface demo, with a separate description and a Reset action. Advanced settings use the Blocks collapsible component.
- Kept the disabled glassiness controls synchronized with Baseline and the remembered rendering preferences.
- Simplified the top bar to one Appearance action. Mode and palette controls live on the appearance page.
- Added alpha channel labeling to the playground and release-note selector while preserving earlier version URLs.
- Linked the overview's npm action to the newest version in the configured release channel.

## Migration and configuration

The numeric `glassiness` preference is now `translucency`; `glassiness` selects browser policy for refraction. Existing saved numeric preferences migrate automatically. Applications using the old numeric API should update these names:

| Previous numeric API | Replacement |
| --- | --- |
| `setAppearance({ glassiness: 0.5 })` | `setAppearance({ translucency: 0.5 })` |
| `bxSurfaceGlassiness` with a numeric value | `bxSurfaceTranslucency` |
| `--bx-glassiness` | `--bx-translucency` |

```ts
import { inject } from '@angular/core';
import { ThemingService } from '@filip.mazev/blocks/core';

const theme = inject(ThemingService);
theme.setAppearance({ translucency: 0.5, glassiness: 'auto' });
```

```html
<button bx-button variant="icon" glassiness="auto" aria-label="Open contents">…</button>
<bx-checkbox label="Receive updates" [emissive]="true" />
```

Register the effects stylesheet once through the existing Blocks setup. Custom material and foreground overrides remain application-owned. See the [appearance guide](../../appearance/README.md), [card documentation](../../../projects/blocks/primitives/components/card/README.md) and [checkbox documentation](../../../projects/blocks/forms/components/checkbox/README.md) for the complete APIs.
