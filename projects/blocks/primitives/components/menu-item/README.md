# Menu item

A menu action with optional icons, a shortcut hint, and destructive intent.

## Import

```ts
import { MenuItem } from '@filip.mazev/blocks/primitives';
```

Add the standalone component or directive to your component's `imports`.

## Usage

```html
<bx-menu-item label="Delete" icon="trash-2" [danger]="true" (action)="remove()" />
```

## API

`label`, `icon`, `endIcon`, `shortcut`, `disabled`, `danger`, and `wrapLabel`. Set `wrapLabel` to `true` when a menu item should wrap long content instead of
truncating it. `action` emits the mouse event for enabled items. Clipped labels and projected text use the shared `TruncateDirective` and receive an automatic
tooltip. `[tooltipOnTruncate]="false"` disables that tooltip while retaining ellipsis, allowing application-owned feedback. `wrapLabel` disables truncation
itself.

## Shortcut definitions

`shortcut` accepts `ResolvableShortcut` from `@filip.mazev/blocks/core`:

```html
<!-- A portable combination: ⌘ ⇧ V on Apple, Ctrl Shift V elsewhere. -->
<bx-menu-item label="Open view" [shortcut]="['mod', 'shift', 'v']" (action)="openView()" />

<!-- Explicit OS differences; default is required. -->
<bx-menu-item label="Duplicate" [shortcut]="duplicateShortcut" (action)="duplicate()" />
```

```ts
import { ResolvableShortcut } from '@filip.mazev/blocks/core';

protected readonly duplicateShortcut: ResolvableShortcut = {
  mac: ['command', 'shift', 'd'],
  windows: ['ctrl', 'shift', 'd'],
  linux: ['alt', 'shift', 'd'],
  ios: ['command', 'shift', 'd'],
  android: ['ctrl', 'shift', 'd'],
  default: ['mod', 'shift', 'd']
};
```

A string is **one token**; use an array for a combination. `'Ctrl+K'` remains a single custom display token and is not parsed. `['mod', 'k', 'v']` displays
three tokens, but does not define a sequence or a valid single-event combination. To open a menu with Command/Ctrl+K followed by V, track two separate events;
the playground demonstrates application-owned sequence state with a two-second timeout, cancellation and cleanup.

| Input aliases (case insensitive)                         | macOS / iOS / iPadOS | Windows            | Linux / Unix       | Android / unknown / SSR |
| -------------------------------------------------------- | -------------------- | ------------------ | ------------------ | ----------------------- |
| `mod`, `primary`, `cmdorctrl`, `commandorcontrol`        | ⌘                    | Ctrl               | Ctrl               | Ctrl                    |
| `command`, `cmd`, `meta`, `super`, `win`, `windows`, `⌘` | ⌘                    | Win                | Super              | Meta                    |
| `ctrl`, `control`, `⌃`                                   | ⌃                    | Ctrl               | Ctrl               | Ctrl                    |
| `alt`, `option`, `opt`, `⌥`                              | ⌥                    | Alt                | Alt                | Alt                     |
| `shift`, `⇧`                                             | ⇧                    | Shift              | Shift              | Shift                   |
| `enter`, `return`                                        | ↩                    | Enter              | Enter              | Enter                   |
| `backspace` / `delete`                                   | ⌫ / ⌦                | Backspace / Delete | Backspace / Delete | Backspace / Delete      |
| `tab` / `escape`, `esc`                                  | ⇥ / ⎋                | Tab / Escape       | Tab / Escape       | Tab / Escape            |
| `up`, `down`, `left`, `right` (or `Arrow…`)              | ↑ ↓ ← →              | ↑ ↓ ← →            | ↑ ↓ ← →            | ↑ ↓ ← →                 |

Letters display in uppercase. `space` becomes Space, and `plus` becomes +. Existing symbol tokens and unknown custom labels remain usable. Explicit `ctrl`
always means Control, including on Mac; use `mod` for Command/Control adaptation. `ios` falls back to `mac`, then `default`; other absent overrides use
`default`. Mobile mappings apply to hardware keyboards. Unknown platforms and server rendering use `default`, where `mod` means Control.

## Handling keyboard activation

The component renders a hint and emits `action` for button activation. **It does not attach a global keyboard listener or open a menu automatically.**
`BxShortcutService` now shares platform selection, alias normalization, presentation, accessibility metadata and event matching, so the hint and application
handler use the same definition.

```ts
import { Component, inject } from '@angular/core';
import { BxShortcutService, ResolvableShortcut } from '@filip.mazev/blocks/core';
import { MenuItem } from '@filip.mazev/blocks/primitives';

@Component({
    selector: 'app-view-command',
    imports: [MenuItem],
    template: `<bx-menu-item label="Open view" [shortcut]="viewShortcut" (action)="openView()" />`,
    host: { '(document:keydown)': 'onKeydown($event)' }
})
export class ViewCommand {
    private readonly bxShortcutService = inject(BxShortcutService);
    protected readonly viewShortcut: ResolvableShortcut = ['mod', 'shift', 'v'];

    protected onKeydown(event: KeyboardEvent): void {
        if (!this.bxShortcutService.matches(event, this.viewShortcut)) return;

        event.preventDefault();
        this.openView();
    }

    protected openView(): void {
        // Run the same application action used by the menu item.
    }
}
```

For opening a menu, call the public `MenuTriggerDirective.open(true)` method after a successful match. It opens with focus on the first enabled item; Escape
restores focus to the trigger. Angular removes the host listener when this example's component is destroyed. Choose a handler scope appropriate to your
application and enforce the same disabled/permission guards for pointer and keyboard activation.

| Service API                                               | Purpose                                                                                                       |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `platform(): ShortcutPlatform`                            | Detect the platform through `DeviceTypeService`.                                                              |
| `resolve(shortcut, platform?): string[] \| undefined`     | Return display tokens; optionally preview another platform. Empty/absent shortcuts return undefined.          |
| `toAriaKeyshortcuts(shortcut, platform?): string \| null` | Return canonical names such as `Meta+Shift+V`; invalid/custom hints return null. Does not register a binding. |
| `matches(event, shortcut, options?): boolean`             | Match one ordinary key plus the exact requested modifiers. Does not prevent defaults or invoke actions.       |

`IShortcutMatchOptions` exposes `platform`, `allowInEditable` (false), and `allowRepeat` (false). Matching always ignores already-handled, composing and
AltGraph events. By default it ignores input, textarea, select, contenteditable and textbox targets, including readonly inputs. Modifiers alone, duplicate
modifiers, multiple ordinary keys and custom labels are display-only. Matching uses `KeyboardEvent.key` (case insensitive), so keyboard layout matters;
Option/Alt characters must match the actual produced key. The service does not track pressed keys, sequences, global registrations, priority, or conflict
resolution.

## Appearance

Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from `ThemingService`; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.

```ts
import { inject } from '@angular/core';
import { ThemingService } from '@filip.mazev/blocks/core';

private readonly themingService = inject(ThemingService);

// Application-wide, including open overlays.
this.themingService.setAppearance({ translucency: 0.5 });
// Opaque presentation retains the same layout and component API.
this.themingService.setAppearance({ reducedTransparency: true });
```

`BxA11yService` controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.

## Behavior and accessibility

Use `action` for activation and `disabled` for unavailable commands. Valid combinations expose `aria-keyshortcuts` on the internal button while visual keycaps
are hidden from its accessible name. Disabled items omit shortcut metadata; application handlers must also guard the disabled command. Only supply a binding
hint when the application actually implements it. Existing custom display hints remain supported, but do not generate keyboard metadata.

Browsers, operating systems and assistive technology may reserve key combinations. Keep actions reachable by button, choose suitable bindings for your audience,
and offer application-owned remapping where needed. See
[MDN's aria-keyshortcuts guidance](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts).

## Playground

Open `/components/menu-item` or `/components/menu` for working menu-opening combinations and sequences, OS previews, disabled-command guards, an editable field,
and visible action results.
