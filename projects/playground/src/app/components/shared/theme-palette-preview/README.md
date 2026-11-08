# Theme palette preview

Six glass blocks form an aperture-like ring beside Theme Studio’s introduction. Equal angular spacing, a consistent overlap and an open center preserve the
structure of a lens while the rounded rectangular panels retain Blocks’ visual language.

## Import

Private playground component, imported from `@playground/components/shared/theme-palette-preview/theme-palette-preview`.

## Usage

```html
<app-theme-palette-preview />
```

## API

No inputs or controls. Semantic CSS variables update the illustration when the theme changes. Local motion state owns only decorative rotation, bobbing and
hover contraction.

## Appearance and customization

Each panel is a Blocks `Card` with `bxSurface`, selecting `bxSurfaceGlassiness="auto"`. The directive owns its surface renderer, with the card’s automatic
renderer disabled. Rendering quality is omitted to inherit the global Automatic, Enhanced or Baseline setting.

Primary and accent supply two panels. Info, success, warning and danger supply the remaining tints, each blended with the active primary or accent so palette
switches and live token edits affect every panel. Each panel advances by 60 degrees around one center, with an eight-degree rotation of the ring. Narrower
panels turn back by 14 degrees locally, exposing their individual ends instead of forming a continuous hexagonal perimeter. Overlaps retain visible refraction
and the central aperture. The composition is capped at 27rem and uses shared corner radii, with no surrounding card, badge or color legend. Its stage clips the
invisible rotated positioning bounds so the decoration cannot create horizontal page overflow.

When the Studio introduction’s container is narrow, the illustration shrinks to at most 11rem and becomes a faint backing beside the heading, without adding a
separate row. This also applies when the Studio sidebar constrains the page. The compact backing is hidden in forced-colors and increased-contrast modes.

## Behavior and accessibility

The illustration is decorative, hidden from assistive technology and has no focus targets or press feedback. The ring turns as one unit at two degrees per
second (one turn every three minutes). Each pane has a staggered 9–13-second bob, bounded to 0.3% sideways, 0.65% vertically and 0.25 degrees of tilt.

Hovering the stable outer stage with a fine pointer draws every pane inward by at most 9% of its height and turns it another four degrees, gently tightening the
aperture. Leaving or cancelling returns it to its resting position. The shared soft spring preserves velocity during interruptions; touch does not latch hover
feedback. This effect conveys no action or essential information and adds no keyboard stop.

The component uses the existing effects runtime’s shared frame scheduler, spring and geometry-aware style painting. Moving panels update their own lighting
geometry without invalidating unrelated surfaces. The runtime continues to own lighting and refraction rendering. Intersection and document visibility suspend
motion offscreen or in hidden tabs, resuming without elapsed-time catch-up. Live `BxA11yService` reduced motion stops all decorative movement, including hover
contraction, and restores the resting composition. Destruction removes the frame subscription, visibility listener and observer.

Unsupported glass rendering falls back to the standard Blocks material; reduced transparency and forced colors retain the shared accessible presentation.
Noninteractive surfaces remain available to lighting hit tests without responding to pointer presses.

## Playground

Open `/studio`. Edit the theme or change rendering quality in Appearance while the panels are visible to compare the live material.
