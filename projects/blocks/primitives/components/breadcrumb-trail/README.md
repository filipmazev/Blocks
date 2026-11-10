# Breadcrumb trail

A shared ordered trail for route links and browsing actions. Long trails retain their first entry and their most recent entries, with hidden ancestors in an
interactive menu: `Home › … › Layout › Page container`.

## Import

```ts
import { BreadcrumbTrail, BX_BREADCRUMB_DEFAULTS, IBreadcrumbTrailConfig, IBreadcrumbTrailItem } from '@filip.mazev/blocks/primitives';
```

## Usage

```ts
protected readonly trail: readonly IBreadcrumbTrailItem[] = [
  { label: 'Home', route: '/home' },
  { label: 'Projects', route: '/projects' },
  { label: 'Design', route: '/projects/design' },
  { label: 'Tokens', route: '/projects/design/tokens' },
  { label: 'Colors', route: '/projects/design/tokens/colors' }
];
```

```html
<bx-breadcrumb-trail [items]="trail" [config]="{ maxVisibleItems: 3 }" />
```

Set `action: true` on items and bind `selected` for browsing without route navigation. Set `[currentLast]="false"` when the last ancestor remains interactive.
The event contains the original input item, its index in the complete trail, and the native click event. Static items without a route or action remain text.

For shared application defaults, provide `{ provide: BX_BREADCRUMB_DEFAULTS, useValue: { maxVisibleItems: 4, openOnHover: false } }`. Resolution is instance
configuration, shared token, then library defaults. This token also applies to `Breadcrumbs`, `PageContainer`, and navigation browsing/search paths.

## API

| Input/output                             | Default       | Behavior                                                                  |
| ---------------------------------------- | ------------- | ------------------------------------------------------------------------- |
| `items: readonly IBreadcrumbTrailItem[]` | Required      | Complete trail; items are never mutated                                   |
| `config: IBreadcrumbTrailConfig`         | `{}`          | Overflow count, translated action text/name, hover behavior, placement    |
| `ariaLabel: ResolvableText`              | `Breadcrumbs` | Accessible navigation name                                                |
| `divider?: IconName`                     | Absent        | Icon separator; omission uses `separator`                                 |
| `separator: ResolvableText`              | `›`           | Text separator, hidden from assistive technology                          |
| `currentLast: boolean`                   | `true`        | Final item is noninteractive current-page text                            |
| `interactive: boolean`                   | `true`        | False renders descriptive labels and a noninteractive hidden-path tooltip |
| `menuParent?: MenuTriggerDirective`      | Absent        | Enclosing coordinated menu; retains its panel while overflow is open      |
| `selected`                               | Event         | Enabled unmodified primary activation, including keyboard clicks          |

`IBreadcrumbTrailItem` contains `label: ResolvableText`, optional `route`, `action`, and `disabled`. Actions take precedence over routes. Disabled entries
retain their labels and cannot activate. Modified route clicks keep native browser behavior.

| Configuration     | Default                    | Behavior                                                                                                                   |
| ----------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `maxVisibleItems` | `3`                        | Visible real entries, excluding ellipsis; finite values round down and clamp to 2; invalid numbers use 3; `null` shows all |
| `overflowLabel`   | `Show hidden breadcrumbs`  | `ResolvableText` accessible action/menu name                                                                               |
| `overflowText`    | Horizontal `ellipsis` icon | Optional `ResolvableText` replacing the icon                                                                               |
| `openOnHover`     | `true`                     | Pointer opening; click, touch, and keyboard remain available when false                                                    |
| `placement`       | `bottom`                   | Existing overlay placement with collision handling                                                                         |

When truncated, the first entry and last `maxVisibleItems - 1` entries remain visible. Hidden entries keep their original order and destinations/actions.

Compact presentation (`[compact]="true"`, default false) treats `maxVisibleItems` as a ceiling and may reduce the count further to fit available width. Null
removes the configured ceiling but compact layout still condenses the trail when necessary. It estimates label space from the rendered font size and responds to
container/viewport changes. Visible labels use single-line truncation and full-name tooltips on hover, keyboard focus, or touch-and-hold. Normal taps retain
their original actions; hidden ancestor labels wrap in the menu. Navigation-level headers use this mode so height stays stable across nesting and long
translations. Ordinary trails continue to wrap labels.

## Appearance and customization

Appearance uses semantic text, hover, focus, spacing, radius, and menu tokens. Set inherited CSS variables on the owning component:

| Variable                              | Default                                  |
| ------------------------------------- | ---------------------------------------- |
| `--bx-breadcrumb-gap`                 | Shared spacing 2                         |
| `--bx-breadcrumb-action-padding`      | Shared spacing 1 vertically, zero inline |
| `--bx-breadcrumb-overflow-min-width`  | `12rem`, constrained to the viewport     |
| `--bx-breadcrumb-overflow-max-width`  | `24rem`, constrained to the viewport     |
| `--bx-breadcrumb-overflow-max-height` | `20rem`, constrained to the viewport     |
| `--bx-breadcrumb-overflow-font-size`  | `0.875rem`                               |

Trails wrap long labels within constrained containers. Overflow menus inherit current theme, direction, top-layer context, and accessibility presentation using
the existing menu/overlay mechanisms. Changing items, language, or configuration closes stale overflow content.

## Behavior and accessibility

Interactive overflow uses the horizontal `ellipsis` icon in a native named menu button. Hover opens its interactive menu; pointer-crossing dismissal keeps it
reachable. Enter/Space, Down, or Up opens it with focus. Up/Down/Home/End browse actions, Escape returns focus to the trigger, and outside pointer activation
dismisses it. Hidden route entries remain native links; hidden browsing entries use Blocks MenuItem buttons. Route entries reuse the same shared menu-item
styling. The final current-page label stays visible and retains `aria-current="page"`.

Labels, separator text, and overflow text/names support `ResolvableText` through optional `BX_I18N`, including mounted language changes and key fallbacks
without an adapter. Existing menu cleanup, reduced-motion behavior, theme inheritance, and focus restoration remain authoritative.

When `interactive` is false, entries are plain descriptive text and the ellipsis reveals a standard noninteractive tooltip containing hidden labels. Neither
labels nor the ellipsis consume clicks. The full path remains in the navigation name for assistive technology. Navigation search uses this mode inside its
native result link.

## Playground

`/components/breadcrumbs` demonstrates long explicit trails, count changes, unlimited display, hover toggling, and real ancestor destinations.
`/components/layout/page-container` and `/components/side-nav` demonstrate the same API through public owners. See the
[Breadcrumbs guide](../../../navigation/components/breadcrumbs/README.md) and [PageContainer guide](../page-container/README.md).
