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

Dropdown backing uses the classic blur and tint with 18 percentage points of extra opacity (about 63.6% at the default appearance). It does not use SVG
refraction. `--bx-dropdown-opacity` overrides the backing; shared opaque and accessibility preferences remain authoritative.

Menus share the translucent Blocks surface used by date/time pickers, Select, MultiSelect, Autocomplete and Popover. Theme changes update mounted overlays. Rows
retain their immediate semantic hover/pressed fills and visible keyboard focus. Reduced transparency, opaque appearance and forced colors retain their shared
accessible fallbacks.

`--bx-dropdown-opacity` overrides the shared material opacity; `--bx-dropdown-min-opacity` sets its minimum (default `0`). Omit both to follow the active Blocks
material. These variables apply consistently to the dropdown family.

`BxA11yService` controls reduced motion. Forced colors preserve native contrast and focus states.

## Behavior and accessibility

Keep menu labels action-oriented. The container provides one shared surface for its items. Avoid nested interactive controls inside one item.

### Motion and material response

Pointer hover paints the existing hover color immediately, including a clearly semantic danger hover. Keyboard focus may use the shared surface with bounded
settling. It does not change application selection or focus, enter the accessibility tree, or intercept pointer input. Danger items use their semantic surface.
The surface remains inside the menu's scrolling coordinate space and reacts to dynamic rows. Dropdown and context-menu wrappers share the overlay
materialization spring. Live reduced motion snaps movement; focus outlines remain available in forced colors. Inspect `/components/menu`,
`/components/dropdown`, and `/components/context-menu`.

## Playground

Open `/components/menu` for a working example and its current value or action result.
