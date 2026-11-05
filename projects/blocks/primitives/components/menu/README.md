# Menu

A shared surface for related menu actions.

## Import

```ts
import { Menu, MenuItem } from '@filip.mazev/blocks/primitives';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<bx-menu>
    <bx-menu-item label="Duplicate" icon="copy" (action)="duplicate()" />
    <bx-menu-item label="Archive" icon="archive" (action)="archive()" />
</bx-menu>
```

## API

`Menu` projects its children and provides the menu surface. Use `MenuItem` for consistent action styling. Place it in `bxDropdown` for positioned dismissal and
keyboard behavior.

## Keyboard shortcuts

Use `[shortcut]="['mod', 'shift', 'v']"` on a `MenuItem` to display a platform-aware hint: Command on Apple devices, Ctrl elsewhere. Explicit `mac`, `windows`,
`linux`, `ios` and `android` overrides are also supported with a required `default` fallback. Hints do not register actions.

Use `BxShortcutService.matches(event, definition)` in an application-owned keyboard handler, then call `MenuTriggerDirective.open(true)` to open a positioned
menu with focus. Use the same definition for the hint and handler, and apply the same disabled guards as pointer activation. The service also formats
aliases/symbols and supplies `aria-keyshortcuts` names.

Command/Ctrl+K followed by V is a sequence of two combinations, requiring application-owned state and cancellation. An array such as `['mod', 'k', 'v']` is only
a hint with three tokens. See the [menu item README](../menu-item/README.md) for complete aliases, fallback rules, the service API and a working handler
example. Both menu playground routes demonstrate a combination and a timed sequence opening an overlay.

## Appearance

Menus use an opaque themed backing with no container blur, reflections, or live lighting. Colors, spacing, radius, elevation and row interactions still follow
Blocks tokens. Trigger and row effects retain their application appearance settings.

`BxA11yService` controls reduced motion. Forced colors preserve native contrast and focus states.

## Behavior and accessibility

Keep menu labels action-oriented. The container provides one opaque backing for its items. Avoid nested interactive controls inside one item.

## Playground

Open `/components/menu` for a working example and its current value or action result.
