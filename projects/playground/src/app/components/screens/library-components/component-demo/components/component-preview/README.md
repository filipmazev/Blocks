# Component catalog previews

The `/components` catalog shows themed, inert stills rendered by the actual Blocks components and directives. Typed recipes supply sample inputs; Angular
compositions supply slots and viewport context. Component fixes, theming changes and state styling therefore flow into the catalog automatically.

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

The generator parses the Angular template and discovers recipe keys and template cases automatically. Every composition must contain a real Blocks view or
directive (or the local adapter for actual toast views). It rejects placeholder-only cases, missing mappings, unknown kinds, duplicate registrations, and
duplicate renderers. Startup, watch, and playground builds already run generation. Check mode detects stale generated output without writing files.

## API

| API                                       | Purpose                                                                                                               |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `kind: ComponentPreviewKind`              | Required generated recipe or composition key.                                                                         |
| `defineComponentPreview(Component, data)` | Checks sample property names and values against signal inputs/models. Omitted data uses the component's own defaults. |
| `IComponentPreviewRecipe`                 | Standalone component plus input values passed through `NgComponentOutlet`.                                            |

Recipes must supply required inputs and deterministic sample data. Use fixed date values, explicit locale where needed, finite local options, and no request
handlers. Keep popup controls closed: opening a real overlay would escape the card and introduce focus, scroll-lock, and dismissal behavior.

## Appearance and customization

Real components inherit the current theme and application appearance settings. Recipe wrappers constrain width; the calendar is proportionally reduced to fit
its full month without recreating day cells. Do not copy field borders, option rows, tab indicators, or other component internals into preview styles.

For projected content, native-host directives, or input aliases, add a typed Angular template case in `component-preview.html` and import its dependencies in
`component-preview.ts`. Existing button groups, tabs, menus, disclosures, and form compositions follow this path. Template inputs are checked by Angular.

Layout previews use the real Container, PageContainer, Grid and Stack components. Navigation previews use inline SideNav and TopNav with local sample groups.
Collection previews mount InfiniteScrollDirective, LoadMoreDirective and VirtualCollection with finite local items and no request handlers. Resize previews use
ResizeHandleDirective between two file/preview panes, with the shared resize-grip Sass mixin. Loading previews render the real LoadingSpinner, LoadingIndicator
and Button loading state.

Modal previews use the public ModalCentered, ModalSide, ModalBottomSheet, ModalBanner and ModalBackdrop presentation views. A contained, scaled viewport keeps
fixed-position children inside their own catalog card without invoking ModalService, focus traps or page scroll locking. Header and footer examples use the
views' actual template slots. BottomDrawer uses its supported embedded, nonmodal mode. SidePanel uses a local push layout with autofocus and focus restoration
disabled. The [toast adapter](../toast-preview/README.md) mounts real SimpleToast and ToastCore views using a scoped ToastRef without an application queue.

Preview SCSS owns only composition, sample content layout, dimensions, containment and freezing motion. Do not reproduce a component's borders, materials, close
actions, spinners, scrollbars, selected navigation rows or footer styling in preview CSS. For a service-created component, use its public presentation view or a
small adapter to its public lifecycle contract.

## Behavior and accessibility

The preview host is `inert` and hidden from assistive technology. The card's separate title link provides its accessible name and full-card click target;
interactive preview descendants are siblings of that link. Keyboard users get one catalog destination per card with a visible focus ring.

A local `BxA11yService` preference forces reduced motion for preview descendants without changing document or application preferences. Scoped CSS also freezes
nested animations and transitions. Use static skeletons, determinate progress values, and the real loading components under the scoped reduced-motion
preference. Do not start autoplay, timers, requests, or overlays from recipes. Full interactions belong on each component's linked example page.

## Playground

Open `/components`, a category route, or `/components/layout`. Search and category filters share the same renderer. Review new recipes in light/dark themes,
opaque materials, constrained cards, and narrow layouts before committing them.

Each modal card demonstrates its own subject: the banner isolates heading/icon/close controls, the custom header uses its header template without footer
controls, the footer emphasizes its action row, the modal shell composes a workspace-access form, and the centered modal asks for discard confirmation. Side and
bottom presentations use member details and quick actions. Drawers use a transparent footer backing within their existing material so the actual footer reads as
part of the same surface. ToastCore shows a paused progress/loading stack; SimpleToast shows a separate success message. Do not replace these live compositions
with images or repeat the same scene for unrelated catalog titles.
