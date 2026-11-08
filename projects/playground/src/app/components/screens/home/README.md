# Playground home

Introduces Blocks with a short headline, two primary actions, a portfolio homage and the interactive light garden.

## Import

Home uses Blocks buttons, icons, tooltips and surfaces, plus the private [theme material preview](../../shared/theme-material-preview/README.md). There is no
external background renderer.

## Usage

Open `/`. A gently floating glass composition complements the introduction without requiring interaction. The hero has a brief description and generous spacing;
three compact feature links lead to Appearance, Theme Studio and the interaction demo. Theme Studio changes its colors and corners; Appearance changes its
translucency and glassiness. Updates flow through semantic CSS variables.

## API

Theme and appearance preferences remain owned by the existing shared services. Orby retains its existing wake, drag and keyboard interactions. Its lighting
scene and physics use the full Home content region, including the page gutters; no visible enclosure or nested padding is needed. The footer is separated with a
Blocks `Divider` rather than a CSS border.

## Appearance and customization

Two miniature pages recall the author’s first portfolio through its wave silhouette. A compact title and introduction sit behind the front glass; the second
page contains abstract shapes, gradients and short text. A readable Blocks glass card overlaps them with static text and theme color samples. It uses the same
shared glass defaults as Appearance’s search bar. All artwork is HTML, CSS and SVG, without imported image assets. The front samples use primary, accent and a
blend of both; the headline uses the readable accent color. Rendering quality follows global preferences. Only the front pane receives Orby’s light; the
background cards have surface effects disabled.

## Behavior and accessibility

The decorative illustration is hidden from assistive technology and adds no controls or keyboard stops. Reduced transparency, forced colors and material quality
use the shared Blocks behavior. The rear pages float independently using sideways and vertical CSS translation with gentle rocking, pausing when offscreen or
the document is hidden. Reduced motion stops decorative movement; observers and listeners are cleaned up on navigation. Home no longer resolves theme colors
through a canvas or runs a background rendering loop. The existing light orb remains a separate, user-activated demonstration. It bounces against the unframed
page bounds, which update on resize and content changes.

## Playground

Open `/`. See the [Theme Studio guide](../../shared/theme-studio/README.md) for editing, import and export behavior.
