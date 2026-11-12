# Utilities playground

Explore public Core utilities through focused interactive examples. Choose a utility from the overview or expand **Core → Utilities** in the sidenav. Each page
presents its demo first, then separate documentation and source tabs. The [Core guide](../../../../../../blocks/core/README.md) remains the entry-point
reference.

## Import

```typescript
import {
    DeviceTypeService,
    findScrollContainer,
    measureScrollBoundary,
    observeScrollBoundary,
    ScrollLockService,
    uuidv4,
    WindowDimensionsService
} from '@filip.mazev/blocks/core';
import { InfiniteScrollDirective } from '@filip.mazev/blocks/primitives';
```

Services are provided in root; import the standalone scroll detector where used. Each utility guide documents its public imports, configuration, lifecycle, and
supporting types.

## Usage

Search `/utilities` by utility or API name, then follow **Explore utility**. Direct URLs are supported, and the sidenav exposes the same six pages.

| Utility                  | Playground                       | Guide                                                     |
| ------------------------ | -------------------------------- | --------------------------------------------------------- |
| Viewport and breakpoints | `/utilities/viewport`            | [Viewport guide](components/viewport/README.md)           |
| Device detection         | `/utilities/device`              | [Device guide](components/device/README.md)               |
| Shared scroll locking    | `/utilities/scroll-lock`         | [Scroll-lock guide](components/scroll-lock/README.md)     |
| Stable identifiers       | `/utilities/identifiers`         | [Identifier guide](components/identifiers/README.md)      |
| Color-token helpers      | `/utilities/color-tokens`        | [Color-token guide](components/color-tokens/README.md)    |
| Overlay positioning      | `/utilities/overlay-positioning` | [Overlay guide](components/overlay-positioning/README.md) |

## API

### Scroll boundaries

The overview includes an interactive local scroll container with configurable batch size and height. It uses `InfiniteScrollDirective` to progressively expose
rows and reports boundary-event counts and measured overflow. The accompanying shared load-more demo shows asynchronous loading, retained-content failure, and
explicit retry through success. See the [detector guide](../../../../../../blocks/primitives/directives/infinite-scroll/README.md) and
`/components/infinite-scroll`.

| API                                                             | Behavior                                                                         |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `findScrollContainer(element)`                                  | Finds the nearest vertical scrolling ancestor or the document viewport           |
| `measureScrollBoundary(content, container?, endOffset?)`        | Returns distance, overflow, and viewport height without changing scroll position |
| `observeScrollBoundary(content, container, onScroll, onResize)` | Passive scroll/geometry observation; returns mandatory cleanup                   |
| `IScrollBoundary`                                               | Typed measurement contract in CSS pixels                                         |

The [virtual collection guide](../../../../../../blocks/primitives/components/virtual-collection/README.md) and `/components/virtual-collection` demonstrate
bidirectional list/grid rendering, dynamic heights, column changes, and programmatic scrolling. Scroll to top is available on Icons and Tokens, inside their own
content viewports.

### Coverage audit

| Utilities                                        | Interactive coverage                                                                                                  |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `WindowDimensionsService`, `BREAKPOINTS`         | Live CSS-pixel dimensions, shared breakpoint tags, range queries, responsive columns                                  |
| `DeviceTypeService`, device/OS contracts         | Device identity, platform flags, orientation events, explicit refresh                                                 |
| `ScrollLockService`, `IScrollLockConfig`         | Independent owners, remaining-owner behavior, page-wide freezing with the scrollbar intact, app-shell registration    |
| Scroll-boundary directive and helpers            | Local batch/height controls, overflow status, asynchronous fallback/retry example; linked virtual collection coverage |
| `BxDateTimeConfigService`, date/time helpers     | Conversion round-trips, strict and natural-language parsing, time display cycle/precision, DST duration               |
| `uuidv4()`                                       | Regenerated UUID and stable instance ID comparison                                                                    |
| Color-token helpers, `resolveThemeId()`          | Semantic/palette selection, CSS reference, complementary/inverted tokens, saved palette validation                    |
| `BxOverlayPositionService`, origin/theme helpers | Preferred placement, viewport fallback, tracked origin, inherited theme, teardown                                     |

The [token catalog](../token-catalog/README.md) at `/tokens` covers `CSS_TOKEN_CATALOG`, the curated `THEME_CSS_VARIABLES` theme contract, CSS reference types,
utility classes, foundation scales, and all color companions. Focused color-helper examples live in the utilities section above.

Other public utilities retain their established guides:

| Utilities                                                       | Existing coverage                                                                                                                                                                                                                           |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ThemingService`, appearance/palette configuration              | [Appearance](../appearance/README.md), `/appearance`                                                                                                                                                                                        |
| `BxA11yService` and reduced motion                              | [Appearance accessibility preferences](../appearance/README.md#behavior-and-accessibility), `/appearance`                                                                                                                                   |
| `BxShortcutService`, shortcut helpers and contracts             | [Menu item](../../../../../../blocks/primitives/components/menu-item/README.md), `/components/menu-item`                                                                                                                                    |
| `BX_I18N`, `ResolvableText`, `resolveText()`, `isTextWithKey()` | [Core translation integration](../../../../../../blocks/core/README.md#translation-and-overlays) and [Forms](../../../../../../blocks/forms/README.md)                                                                                      |
| Form state/defaults, `BxBaseControl`, `FormSettingsService`     | [Forms](../../../../../../blocks/forms/README.md) and [Truncate](../../../../../../blocks/primitives/directives/truncate/README.md)                                                                                                         |
| Navigation, modal, notification and effects services            | Their [Navigation](../../../../../../blocks/navigation/README.md), [Modal](../../../../../../blocks/modal/README.md), [Toastr](../../../../../../blocks/toastr/README.md), and [Effects](../../../../../../blocks/effects/README.md) guides |

The effects runtime's shared motion helpers (`createSpringMotion`, `GestureVelocity`, `projectMotion`, `subscribeFrame`, `mountSelectionMotion`,
`createGlassTransition`) retain their focused [Effects guide](../../../../../../blocks/effects/README.md) and
[runtime API guide](../../../../../../blocks/effects/runtime/README.md), with interactive coverage at `/components/tabs`, `/components/stepper`,
`/components/slider`, `/components/slide-toggle`, `/components/menu`, and the select/overlay pages.

Internal coordination services, implementation classes, and type-only contracts do not receive separate playground pages.

### Date and time utilities

Civil dates, time zones, parsing, formatting, presets and serialization live in `@filip.mazev/blocks/core` and work without the picker components. Use
`dateTimeToInstant` and `dateTimeFromInstant` for explicit zone conversion, `toDotNetOffsetIso`/`parseDotNetDateValue` for .NET round-trips, and
`parseNaturalDateTime` for opted-in, deterministic natural-language input. Date-only values remain canonical `yyyy-MM-dd` strings and must never be converted to
UTC midnight. Calendar adapter `getMonthLabel` accepts an optional `CalendarNameForm` (`long` by default); calendar controls use short month labels and narrow
weekday initials. The date/time utility demo displays these lengths and the full seven-day bounds of a week selection. See the interactive
`/utilities/date-time` demo and its colocated README for API details and sample conversions.

#### Date-time display conventions

`BxDateTimeConfigService.resolve()` keeps a picker's default time display aligned with its resolved 12/24-hour cycle and precision. For example,
`resolve({ hourCycle: 24, precision: 'second' })` uses `HH:mm:ss`, while a 12-hour millisecond display uses `hh:mm:ss.SSS a`. An explicitly configured
`timeFormat` or `dateTimeFormat` takes precedence. Locale changes preserve these explicit application formats. The Time Picker and Utilities demos show these
changes while controls are mounted. `parseTimeInput` also accepts an hour-only pattern such as `HH` when precision is `hour`.

## Appearance and customization

The overview uses Blocks search, cards, grids, stacks, tags, icons, links styled as buttons, and alerts. Every demo uses public Blocks controls and shared theme
styles. Layouts shrink and wrap for narrow containers, zoom, and long content. Semantic HTML remains in use for headings, descriptions, definition lists, and
outputs.

## Behavior and accessibility

Each utility loads independently. Leaving a demo tears down its owned listeners, scroll locks, and overlays. No demo changes global appearance preferences.
Interactive controls use Blocks keyboard and focus behavior, while status changes and generated identifiers use polite announcements. Viewport resizing avoids
repeated live announcements.

The overview and detail pages share `PageContainer` gutters and headings. Detail pages use automatic breadcrumbs to return to Utilities.

## Playground

Open `/utilities` from **Core → Utilities**. Expand its sidenav item for all six utility pages, or use the overview search and links. On each page, the
interactive example precedes the documentation and source tabs.
