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
        this.scrollLockService.disableScroll(this.lockId, { handleTouchInput: false });
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
`enableScroll` is accepted but does not change final cleanup.

| `IScrollLockConfig` member  | Purpose                                                                                                                                                           |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `handleTouchInput`          | `false` preserves touch gestures; `true` enables touchmove prevention. Omission still applies `touch-action: none`, without adding a touchmove listener by itself |
| `allowTouchInputOn`         | Elements whose descendants may receive touch input; absent/empty lists permit targets through the touchmove handler                                               |
| `mobileOnlyTouchPrevention` | Limits the touchmove handler to detected mobile devices; tablets use their separate category                                                                      |
| `handleExtremeOverflow`     | Adds global wheel/scroll prevention listeners; leave unset for ordinary pages and panels                                                                          |
| `animationDuration`         | Milliseconds before installing prevention listeners, plus the service's 10 ms coordination delay; omitted means zero before that delay                            |

Any active owner requesting touch/extreme prevention keeps it enabled. Touch allow-list details follow the most recently inserted owner whose `handleTouchInput`
is not false; reacquiring an existing ID updates its options without changing its insertion order. The maximum active animation duration controls listener
installation. Original inline body overflow, right padding, touch action and priorities are restored after the final lock releases.

The demo uses `{ handleTouchInput: false }` for both owners so touch users can reach every action. It does not enable extreme overflow handling. Lock
acquisition and release are no-ops during SSR.

## Appearance and customization

The interactive example uses public Blocks components, semantic theme variables, and shared spacing and responsive helpers. It follows the active playground
appearance. Open the source tab for the component and template.

## Behavior and accessibility

The compact Blocks control panel exposes pressed-state buttons for both owner cards. Acquire both locks and release one to inspect remaining-owner behavior. The
shared status is announced politely.

Before acquiring the first lock, the demo brings its controls into view without animation or moving focus. The panel is constrained to the viewport and can
scroll internally when text is enlarged. Touch gestures remain enabled and release actions stay reachable. Navigating to another utility releases both demo
locks. Locks held by navigation or other overlays remain active.

## Playground

Open `/utilities/scroll-lock` from **Core → Utilities → Shared scroll locking**. The demo appears first, followed by separate documentation and code tabs.

Return to the [utilities overview](../../README.md) for the coverage audit and related feature guides.
