# Overlay context

Choose the overlay-hosting policy inherited by nested dropdowns, popovers, and other context-aware overlays.

## Import

```typescript
import { BxOverlayContextDirective } from '@filip.mazev/blocks/primitives';
```

Add the directive to the consuming standalone component's imports.

## Usage

```html
<section [bxOverlayContext]="{ useTopLayer: true }">
    <!-- Context-aware overlay triggers go here. -->
</section>
```

## API

`bxOverlayContext` accepts `IBxOverlayContext` and defaults to `{}`. Its optional `useTopLayer` property selects browser top-layer hosting when supported by the
owning overlay. Omission leaves the overlay's default policy in effect. Advanced integrations can inject `BX_OVERLAY_CONTEXT` to read the nearest context.

## Appearance and customization

The context controls hosting, not presentation. Configure appearance through the owning overlay's inputs and shared Blocks theme.

## Behavior and accessibility

Nested consumers inherit the nearest provided context. The owning overlay retains responsibility for focus, keyboard dismissal, positioning, and cleanup.

## Playground

See `/components/dropdown` and `/components/popover` for overlay interactions.
