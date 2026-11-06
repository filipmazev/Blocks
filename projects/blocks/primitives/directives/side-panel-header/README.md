# Side panel header slot

Projects persistent header content into [SidePanel](../../components/side-panel/README.md).

## Import

```typescript
import { SidePanelHeaderDirective } from '@filip.mazev/blocks/primitives';
```

Import the standalone slot directive together with `SidePanel`.

## Usage

Apply `bxSidePanelHeader` to projected content inside `bx-side-panel`.

## API

The marker has no inputs or outputs. Its presence controls whether the owning panel reserves section space.

## Appearance and customization

The owning panel uses the shared modal-banner title and close-control styling. Reset a projected heading's margin to zero and use `font: inherit` for the shared
title typography. Set the panel's optional `headerIcon: IIconData` for a leading icon with configurable size, semantic color, background, and stroke.

## Behavior and accessibility

Content stays mounted when closed. Include a meaningful heading or keyboard-accessible actions as appropriate.

## Playground

Open `/components/side-panel`.
