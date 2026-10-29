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

`Menu` projects its children and provides the menu surface. Use `MenuItem` for consistent action styling. Place it in `bxDropdown` for positioned dismissal and keyboard behavior.

## Appearance

Menus use an opaque themed backing with no container blur, reflections, or live lighting. Colors, spacing, radius, elevation and row interactions still follow Blocks tokens. Trigger and row effects retain their application appearance settings.

`BxA11yService` controls reduced motion. Forced colors preserve native contrast and focus states.

## Behavior and accessibility

Keep menu labels action-oriented. The container provides one opaque backing for its items. Avoid nested interactive controls inside one item.

## Playground

Open `/components/menu` for a working example and its current value or action result.
