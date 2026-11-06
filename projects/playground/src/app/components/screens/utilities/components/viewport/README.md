# Viewport and breakpoints

Build responsive layouts with live viewport signals and the shared Blocks breakpoint scale.

## Import

```typescript
import { WindowDimensionsService, BREAKPOINTS } from '@filip.mazev/blocks/core';
```

## Usage

```typescript
import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { WindowDimensionsService } from '@filip.mazev/blocks/core';

@Component({
    selector: 'app-responsive-summary',
    template: '<p>{{ width() }} CSS pixels · {{ columns() }} columns</p>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveSummary {
    private readonly windowDimensionsService = inject(WindowDimensionsService);

    protected readonly width: Signal<number> = computed(() => this.windowDimensionsService.dimensions().width);
    protected readonly columns: Signal<number> = computed(() => this.windowDimensionsService.resolveResponsiveValue({ md: 2, xl: 3 }, 1));
}
```

## API

| Member                                        | Behavior                                                                                                    |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `dimensions(): IWindowDimensions`             | Readonly signal with `width` and `height` in CSS pixels; resize updates are coalesced to animation frames   |
| `breakpoints` / `BREAKPOINTS`                 | Shared minimums: xs 360, sm 640, md 768, lg 1024, xl 1280, 2xl 1536, 3xl 1920, 4xl 2560                     |
| `currentBreakpoint()`                         | Largest matching breakpoint; widths below 360 still report `xs`; undefined during SSR                       |
| `currentBreakpointValue()`                    | Minimum for the reported breakpoint, not the actual viewport width; undefined during SSR                    |
| `isBelow(key)` / `isAtLeast(key)`             | Strict upper bound / inclusive lower bound                                                                  |
| `isBetween(min, max)`                         | Inclusive minimum and exclusive maximum                                                                     |
| `resolveResponsiveValue<T>(values, fallback)` | Value at the highest configured matching breakpoint, otherwise the fallback; always the fallback during SSR |
| `isBrowser`                                   | Whether browser viewport observation is available                                                           |

Convenience signals cover `isXsMobile` (below sm), `isSmMobile` (sm–md), `isMobile` (below md), `isTablet` (md–lg), `isSmallLaptop` (lg–xl), `isDesktop`
(xl–2xl), `isLargeDesktop` (2xl–3xl), and `isUltraWide` (3xl and above). Upper bounds are exclusive. `isTabletAndBelow`, `isSmallLaptopAndBelow`,
`isDesktopAndBelow`, and `isLargeDesktopAndBelow` are below lg, xl, 2xl, and 3xl respectively.

SSR dimensions are zero. Simple range predicates compare against zero there; do not interpret them as actual device detection. Responsive values describe
viewport width, even when the component occupies a smaller container. Browser zoom can change CSS-pixel dimensions.

## Appearance and customization

The interactive example uses public Blocks components, semantic theme variables, and shared spacing and responsive helpers. It follows the active playground
appearance. Open the source tab for the component and template.

## Behavior and accessibility

Resize the browser or change zoom to observe width, height, breakpoint tags, and the responsive preview. Values use CSS pixels. The preview uses Blocks cards,
grids, and tags.

Viewport changes derive from signals under OnPush and are not announced on every resize. SSR dimensions are zero; responsive values use the fallback.

## Playground

Open `/utilities/viewport` from **Core → Utilities → Viewport and breakpoints**. The demo appears first, followed by separate documentation and code tabs.

Return to the [utilities overview](../../README.md) for the coverage audit and related feature guides.
