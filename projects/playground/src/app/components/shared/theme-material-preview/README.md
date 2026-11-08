# Theme material preview

Two decorative miniature pages recall Filip Mazev’s first portfolio through its original wave silhouette, paired with abstract shapes and typography. A readable
Blocks glass card overlaps the pages with static typography and theme color samples.

## Import

Private playground component, imported from `@playground/components/shared/theme-material-preview/theme-material-preview`.

## Usage

```html
<app-theme-material-preview />
```

## API

No inputs. The decorative pages follow the active theme through semantic CSS variables. Visibility and the shared motion preference control their floating
animation.

## Appearance and customization

The miniature profile and portfolio project pages use Blocks cards and icons with container-relative typography. The wave silhouette comes from the author’s
first portfolio, with a gradient mixing primary and accent into the theme surface for readable overlaid text. The project composition uses a ring, a tilted
panel, gradients and short text; its strongest gradient sits below the text, while the text area uses muted surface tints. There are no image assets or project
footer. Material, text, borders and corners follow the live theme.

The rear pages are opaque Blocks cards with `surfaceEffects` disabled: they neither receive environmental or Orby lighting nor render glass or press effects.
The foreground Blocks card uses `bxSurfaceGlassiness="auto"` with the shared material defaults, matching Appearance’s search bar instead of adding a stronger
blur. Its own text stays crisp while the headings and abstract artwork cross its refractive edges. Rendering quality is omitted to follow the global setting.
Glassiness Off, Baseline quality, unsupported browsers and accessibility preferences retain the shared fallback.

The 6:5 composition is capped at 32rem. The “Design & code.” title and short introductions keep the previews recognizable as pages. The pages fan outward by six
degrees while overlapping, and a taller landscape Blocks pane (about 1.76:1) covers their shared center with extra internal spacing. The front samples use
accent, primary and a blend of both, so all three respond to palette changes and Theme Studio overrides instead of retaining status colors across palettes.

## Behavior and accessibility

The illustration is decorative, hidden from assistive technology and contains no buttons or focus stops. Only the stationary foreground pane participates in the
shared lighting engine, with pressure feedback explicitly disabled. The two rear pages follow small, repeating diagonal bobs over independent 8- and 9.5-second
CSS cycles. Each page’s translation and rotation share one cycle: travel is bounded to 0.7% horizontally and 1.5% vertically, with 0.6 degrees of rocking. There
is no separate wandering rotation, application frame loop or repeated lighting measurement.

An intersection observer and document visibility listener pause motion offscreen or in a hidden tab. `BxA11yService` and the system reduced-motion preference
provide a static composition and react to changes while mounted. Observers and listeners are removed on destruction; the shared surface runtime owns the
foreground filter, lighting and its teardown.

## Playground

Open `/`. Studio uses a separate [glass panel composition](../theme-palette-preview/README.md). Theme and appearance edits update both mounted illustrations.
