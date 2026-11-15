# Component catalog previews

The `/components` catalog shows themed, inert stills. Real Blocks components supply their own appearance; stylized vignettes explain layouts, viewport surfaces,
collections, and frozen loading states that do not fit naturally inside a small card.

## Import

This renderer belongs to the playground and is not exported by the library.

```typescript
import { ComponentPreview } from '@playground/components/screens/library-components/component-demo/components/component-preview/component-preview';
```

## Usage

```html
<app-component-preview kind="select" />
```

For a component that needs no projected content, add its public import and a recipe to
[`component-preview-recipes.constants.ts`](../../constants/component-preview-recipes.constants.ts):

```typescript
import { Select } from '@filip.mazev/blocks/forms';

import { defineComponentPreview } from '@playground/components/screens/library-components/component-demo/helpers/define-component-preview.helpers';

// Inside COMPONENT_PREVIEW_RECIPES:
select: defineComponentPreview(Select, {
    label: 'Color',
    value: 'accent',
    options: [
        { label: 'Accent', value: 'accent' },
        { label: 'Primary', value: 'primary' }
    ]
});
```

Then register the catalog ID and recipe key in [`component-preview.overrides.constants.ts`](../../constants/component-preview.overrides.constants.ts). Every
catalog entry needs an explicit mapping. A component generator can write these two registrations; it does not need to change the renderer, template, styles, or
generated union.

```bash
npm run tools:generate:component-previews
node tools/playground/generate-component-previews.mjs --check
```

The generator discovers recipe keys and template cases automatically. It rejects missing mappings, unknown kinds, duplicate registrations, and duplicate
renderers. Startup, watch, and playground builds already run generation. Check mode detects stale generated output without writing files.

## API

| API                                       | Purpose                                                                                                               |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `kind: ComponentPreviewKind`              | Required generated recipe or vignette key.                                                                            |
| `defineComponentPreview(Component, data)` | Checks sample property names and values against signal inputs/models. Omitted data uses the component's own defaults. |
| `IComponentPreviewRecipe`                 | Standalone component plus input values passed through `NgComponentOutlet`.                                            |

Recipes must supply required inputs and deterministic sample data. Use fixed date values, explicit locale where needed, finite local options, and no request
handlers. Keep popup controls closed: opening a real overlay would escape the card and introduce focus, scroll-lock, and dismissal behavior.

## Appearance and customization

Real components inherit the current theme and application appearance settings. Recipe wrappers constrain width; the calendar is proportionally reduced to fit
its full month without recreating day cells. Do not copy field borders, option rows, tab indicators, or other component internals into preview styles.

For projected content, native-host directives, or input aliases, add a typed Angular template case in `component-preview.html` and import its dependencies in
`component-preview.ts`. Existing button groups, tabs, menus, disclosures, and form compositions follow this path. Template inputs are checked by Angular.

Keep stylized vignettes when spatial context is the subject: page layouts, navigation shells, resizable regions, modal placement, drawers, and collection
scrolling. Use shared tokens and Sass surface helpers. Reuse real Blocks elements inside those compositions when they fit. Frozen spinner arcs represent
activity without instantiating continuously animated loading components.

## Behavior and accessibility

The preview host is `inert` and hidden from assistive technology. The card's separate title link provides its accessible name and full-card click target;
interactive preview descendants are siblings of that link. Keyboard users get one catalog destination per card with a visible focus ring.

A local `BxA11yService` preference forces reduced motion for preview descendants without changing document or application preferences. Scoped CSS also freezes
nested animations and transitions. Use static skeletons, determinate progress values, and decorative frozen spinners. Do not start autoplay, timers, requests,
or overlays from recipes. Full interactions belong on each component's linked example page.

## Playground

Open `/components`, a category route, or `/components/layout`. Search and category filters share the same renderer. Review new recipes in light/dark themes,
opaque materials, constrained cards, and narrow layouts before committing them.
