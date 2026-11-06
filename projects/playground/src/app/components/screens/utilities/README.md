# Utilities playground

Explore public Core utilities through focused interactive examples. Choose a utility from the overview or expand **Core → Utilities** in the sidenav. Each page
presents its demo first, then separate documentation and source tabs. The [Core guide](../../../../../../blocks/core/README.md) remains the entry-point
reference.

## Import

```typescript
import { DeviceTypeService, ScrollLockService, uuidv4, WindowDimensionsService } from '@filip.mazev/blocks/core';
```

Services are provided in root. Each utility guide documents its public imports, configuration, lifecycle, and supporting types.

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

### Coverage audit

| Utilities                                        | Interactive coverage                                                                               |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| `WindowDimensionsService`, `BREAKPOINTS`         | Live CSS-pixel dimensions, shared breakpoint tags, range queries, responsive columns               |
| `DeviceTypeService`, device/OS contracts         | Device identity, platform flags, orientation events, explicit refresh                              |
| `ScrollLockService`, `IScrollLockConfig`         | Independent owners, remaining-owner behavior, release actions, navigation cleanup                  |
| `uuidv4()`                                       | Regenerated UUID and stable instance ID comparison                                                 |
| Color-token helpers, `resolveThemeId()`          | Semantic/palette selection, CSS reference, complementary/inverted tokens, saved palette validation |
| `BxOverlayPositionService`, origin/theme helpers | Preferred placement, viewport fallback, tracked origin, inherited theme, teardown                  |

The [token catalog](../token-catalog/README.md) at `/tokens` covers `CSS_TOKEN_CATALOG`, CSS reference types, utility classes, foundation scales, and all color
companions. Focused color-helper examples live in the utilities section above.

Other public utilities retain their established guides:

| Utilities                                                       | Existing coverage                                                                                                                                                                                                                           |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ThemingService`, appearance/palette configuration              | [Appearance](../appearance/README.md), `/appearance`                                                                                                                                                                                        |
| `BxA11yService` and reduced motion                              | [Appearance accessibility preferences](../appearance/README.md#behavior-and-accessibility), `/appearance`                                                                                                                                   |
| `BxShortcutService`, shortcut helpers and contracts             | [Menu item](../../../../../../blocks/primitives/components/menu-item/README.md), `/components/menu-item`                                                                                                                                    |
| `BX_I18N`, `ResolvableText`, `resolveText()`, `isTextWithKey()` | [Core translation integration](../../../../../../blocks/core/README.md#translation-and-overlays) and [Forms](../../../../../../blocks/forms/README.md)                                                                                      |
| Form state/defaults, `BxBaseControl`, `FormSettingsService`     | [Forms](../../../../../../blocks/forms/README.md) and [Truncate](../../../../../../blocks/primitives/directives/truncate/README.md)                                                                                                         |
| Navigation, modal, notification and effects services            | Their [Navigation](../../../../../../blocks/navigation/README.md), [Modal](../../../../../../blocks/modal/README.md), [Toastr](../../../../../../blocks/toastr/README.md), and [Effects](../../../../../../blocks/effects/README.md) guides |

Internal coordination services, implementation classes, and type-only contracts do not receive separate playground pages.

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
