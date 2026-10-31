# Menu shortcut examples

Shared playground view for `/components/menu` and `/components/menu-item`.

Uses the public core, forms and primitives entry points. Command/Ctrl+Shift+K opens the menu using `MenuTriggerDirective.open(true)`. Command/Ctrl+K, release, then V demonstrates application-owned sequence state with a two-second timeout; Escape, a different key, pointer activity, window blur and destruction cancel it. Modifier keydown and repeat events do not complete the sequence.

Command/Ctrl+Shift+V activates Open view using the same definition as its menu hint. The checkbox disables both activation routes. The typing field exercises editable-target guards. Duplicate project demonstrates explicit OS overrides; cards preview portable definitions and modifier symbols for macOS, Windows, Linux/Unix, iOS/iPadOS, Android and unknown/server defaults.

The menu uses Blocks' existing overlay, focus, keyboard navigation and theme behavior. See the library menu-item README for public contracts and integration examples.
