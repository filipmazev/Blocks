# Breadcrumbs

A route-aware trail derived from Blocks navigation metadata, with configurable overflow for long paths.

## Import

```ts
import { Breadcrumbs, IBreadcrumbItem } from '@filip.mazev/blocks/navigation';
import { BX_BREADCRUMB_DEFAULTS, IBreadcrumbTrailConfig } from '@filip.mazev/blocks/primitives';
```

Add `Breadcrumbs` to your component's standalone imports.

## Usage

```html
<bx-breadcrumbs [minimumBreadcrumbs]="1" divider="chevron-right" [breadcrumbConfig]="{ maxVisibleItems: 3, openOnHover: true }" />
```

Long trails retain the first and last two entries: `Home › … › Layout › Page container`. Hover or activate the horizontal ellipsis icon to open the hidden
ancestors. Their entries retain their router destinations. Set `maxVisibleItems: null` to show the entire trail, or another number to change the visible count.
The count excludes the ellipsis and is clamped to at least two real entries.

For an application-owned trail, bind `[items]="trail"` with a `readonly IBreadcrumbItem[]` containing resolved `label` strings and `route` destinations.
Omission uses `NavigationService`; an empty array suppresses the trail.

## API

| Input                                      | Default                | Behavior                                                                   |
| ------------------------------------------ | ---------------------- | -------------------------------------------------------------------------- |
| `minimumBreadcrumbs`                       | `2`                    | Minimum complete-trail length before displaying; values below 1 clamp to 1 |
| `divider: IconName`                        | `chevron-right`        | Separator icon                                                             |
| `items?: readonly IBreadcrumbItem[]`       | Current route metadata | Optional explicit resolved trail                                           |
| `breadcrumbConfig: IBreadcrumbTrailConfig` | `{}`                   | Overflow limit, translated labels, hover behavior, and placement           |
| `label: ResolvableText`                    | `Breadcrumbs`          | Accessible name prefix; the complete path is appended                      |

`breadcrumbConfig` accepts `maxVisibleItems` (default 3; null disables truncation), `overflowLabel` (default Show hidden breadcrumbs), `overflowText` (optional
custom text instead of the horizontal ellipsis icon), `openOnHover` (default true), and `placement` (default bottom). Text settings accept `ResolvableText` and
react to the optional `BX_I18N` adapter's version signal. Plain strings work without an adapter; unresolved keys fall back to their keys.

Provide `BX_BREADCRUMB_DEFAULTS` once for application-wide defaults, also used by page containers and navigation paths. Instance settings win property by
property. See the [shared trail guide](../../../primitives/components/breadcrumb-trail/README.md) for the complete contracts.

## Appearance and customization

The overflow uses the existing Blocks menu surface and menu-item styling, including native route links. The horizontal ellipsis uses the `ellipsis` icon. Theme
inheritance, opaque presentation, reduced-motion behavior, focus outlines, viewport limits, and RTL separators use shared mechanisms. Labels wrap instead of
clipping essential content.

The shared trail CSS variables customize gaps, inline action padding, and overflow width, height, and font size. See the shared trail guide for names/defaults.

## Behavior and accessibility

The final item remains visible, noninteractive, and marked `aria-current="page"`. Normal ancestors and hidden ancestors remain links, including native
modified-click behavior. Native action buttons support browsing trails without route navigation.

The ellipsis supports hover, click/tap, Enter/Space, and Up/Down opening. Arrow keys and Home/End browse the menu; Escape restores the trigger's focus. Pointer
movement into the menu retains it. Changes to items, configuration, or translated content close stale overflow. Route-aware trails update after navigation.

Search-result context in side/top navigation deliberately uses a descriptive version of the trail: its labels and hidden entries do not navigate or consume
clicks, so the containing result remains one native page link.

## Playground

Open `/components/breadcrumbs` to change the visible count, disable truncation, toggle hover, and follow real hidden ancestor destinations. The page shows both
a five-entry explicit trail and the current route's trail. Page-container and sidenav demos expose the same overflow configuration through their public APIs.
