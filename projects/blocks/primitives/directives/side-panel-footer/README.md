# Side panel footer slot

Projects persistent footer content into [SidePanel](../../components/side-panel/README.md).

## Import

```typescript
import { SidePanelFooterDirective } from '@filip.mazev/blocks/primitives';
```

Import the standalone slot directive together with `SidePanel`.

## Usage

Apply `bxSidePanelFooter` to projected content inside `bx-side-panel`.

## API

The marker has no inputs or outputs. Its presence controls whether the owning panel reserves section space.

## Appearance and customization

Use the owning panel's CSS variables and Blocks semantic tokens.

## Behavior and accessibility

Content stays mounted when closed. Include a meaningful heading or keyboard-accessible actions as appropriate.

## Playground

Open `/components/side-panel`.
