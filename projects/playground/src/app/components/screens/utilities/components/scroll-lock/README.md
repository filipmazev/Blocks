# Shared scroll locking

Coordinate page scroll locks across multiple owners without releasing another component's lock.

## Import

```typescript
import { ScrollLockService, uuidv4 } from '@filip.mazev/blocks/core';
```

## Usage

```typescript
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';

import { ScrollLockService, uuidv4 } from '@filip.mazev/blocks/core';
import { Button } from '@filip.mazev/blocks/forms';

@Component({
    selector: 'app-scroll-lock-example',
    imports: [Button],
    template: `
        <button bx-button type="button" (click)="lock()">Lock page</button>
        <button bx-button type="button" (click)="unlock()">Release my lock</button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollLockExample {
    private readonly scrollLockService = inject(ScrollLockService);
    private readonly lockId: string = uuidv4();

    constructor() {
        inject(DestroyRef).onDestroy(() => this.unlock());
    }

    protected lock(): void {
        this.scrollLockService.disableScroll(this.lockId, { handleTouchInput: true });
    }

    protected unlock(): void {
        this.scrollLockService.enableScroll(this.lockId);
    }
}
```

Keep release actions reachable while the page is locked. Release on close and presentation changes as well as destruction. Repeated acquisition with the same ID
updates that owner's lock. Releasing an unknown ID does nothing, and releasing your ID preserves other owners' locks.

## API

`isScrollDisabled()` is a readonly signal indicating that any owner holds a lock. Observe it instead of writing to the backing signal.
`disableScroll(id, config)` requires an owner ID and configuration; `enableScroll(id)` releases that owner. The legacy optional second argument to
`enableScroll` is accepted but does not change final cleanup. `registerScrollContainer(element)` freezes an application-owned scroll container, such as an
app-shell content area, for the duration of every lock and returns an unregister callback.

| `IScrollLockConfig` member  | Purpose                                                                                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `handleTouchInput`          | `false` opts this owner out of touch prevention; `true` or omission prevents touch gestures outside allowed and nested scrollers               |
| `allowTouchInputOn`         | Elements whose descendants may keep scrolling while locked; absent lists rely on nested-scroller detection                                     |
| `mobileOnlyTouchPrevention` | Limits touch prevention to narrow touch viewports instead of every device                                                                      |
| `handleExtremeOverflow`     | Also blocks input inside nested scroll containers, leaving only `allowTouchInputOn` elements usable; leave unset for ordinary pages and panels |
| `animationDuration`         | Presentation duration of the owning overlay; retained for existing callers, prevention starts together with the lock                           |

Touch rules follow the most recently inserted owner whose `handleTouchInput` is not false; reacquiring an existing ID updates its options without changing its
insertion order. Wheel, touch, and offset changes are blocked without rewriting page styles, so the page keeps its native scrollbar and width. WebKit on iOS
additionally receives the service's fixed-body presentation, and original inline body styles and priorities are restored after the final lock releases.

The demo uses `{ handleTouchInput: true }` for both owners and keeps both toggle groups reachable, so the whole page — including its scrollbar — stays visible
while input is blocked. It does not enable extreme overflow handling. Lock acquisition and release are no-ops during SSR.

## Appearance and customization

The interactive example uses public Blocks components, semantic theme variables, and shared spacing and responsive helpers. It follows the active playground
appearance. Open the source tab for the component and template.

## Behavior and accessibility

The compact Blocks control panel exposes pressed-state buttons for both owner cards. Acquire both locks and release one to inspect remaining-owner behavior. The
shared status is announced politely.

Before acquiring the first lock, the demo brings its controls into view without animation or moving focus. The page scrolls as a single surface: the control
panel is not a nested scroll region, so a lock freezes the whole content area rather than only the card. The playground scrolls inside its app-shell content
element instead of the document, so the shell registers that element with `registerScrollContainer()` — the same wiring a consumer application needs when its
page does not scroll on the document. The page keeps its scrollbar and width while locked, touch scrolling is prevented, and navigating to another utility
releases both demo locks. Locks held by navigation or other overlays remain active.

## Playground

Open `/utilities/scroll-lock` from **Core → Utilities → Shared scroll locking**. The demo appears first, followed by separate documentation and code tabs.

Return to the [utilities overview](../../README.md) for the coverage audit and related feature guides.
