# Nested menu trigger

`MenuTriggerDirective` opens a `bx-menu` template using Blocks' overlay positioning and theme inheritance. Use it for arbitrary-depth opaque submenus; each descendant receives the containing trigger through `menuParent`.

```ts
import { Menu, MenuItem, MenuTriggerDirective } from '@filip.mazev/blocks/primitives';
```

```html
<button [bxMenuTrigger]="menu" menuLabel="Projects" #projects="bxMenuTrigger">Projects</button>
<ng-template #menu>
  <bx-menu>
    <bx-menu-item label="Overview" />
    <button role="menuitem" [bxMenuTrigger]="children" [menuParent]="projects" menuLabel="Design">Design</button>
  </bx-menu>
</ng-template>
<ng-template #children><bx-menu><bx-menu-item label="Tokens" /></bx-menu></ng-template>
```

`bxMenuTrigger` is required. Optional inputs are `menuOrigin` (the full row when the trigger is a separate disclosure), `menuParent`, physical `menuSide` (`right` by default), `menuHover` (true), `menuLabel` (trigger label fallback), and `menuPinned` (false; keeps a search-revealed path open during pointer movement). `menuOpened`/`menuClosed` report transitions. `isOpen()`, `open(focus?)`, `close(restoreFocus?)` and `toggle(event)` expose explicit controls. Selection owners call `MenuCascadeService.closeAll()` after activating an action; this preserves parent disclosure clicks in recursive menus.

Native trigger semantics supply Enter/Space. Arrow towards the menu and Up/Down open it with focus. Up/Down/Home/End navigate within an open menu; Escape/opposite arrow dismiss one layer, and Tab is trapped inside its surface. Click outside dismisses the entire path, including search-pinned menus. Hover close has a short pointer-crossing delay and retains focused descendants. Cascades reuse the shared origin tracker's native CSS anchoring, refreshing dependent descendants on geometry changes and using measured positions only as a fallback. Clipped or offscreen origins close their branch. Overlays, traps, listeners, subscriptions, and timers are cleaned up on destruction. The trigger honors `bxOverlayContext` for top-layer positioning, as dropdowns and context menus do; origins inside dialogs and existing top-layer overlays retain that context. Opening another branch closes siblings, and nested menus inherit live theme state. Surfaces use the ordinary opaque `bx-menu` appearance, without added motion or glass effects.

The side-navigation demo at `/components/side-nav` demonstrates nested hover, keyboard, and search-driven opening. Menu width and scroll constraints belong to the owner; the side-nav exposes `--bx-side-nav-menu-width`.

`bx-menu` accepts `--bx-menu-min-width` (default `12rem`). Constrained submenu owners set it to `0`, use border-box sizing, and reserve their vertical scrollbar gutter.
