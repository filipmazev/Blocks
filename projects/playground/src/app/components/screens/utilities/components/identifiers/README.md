# Stable identifiers

Create version-4 UUIDs for controls, overlays, and stable shared-resource ownership.

## Import

```typescript
import { uuidv4 } from '@filip.mazev/blocks/core';
```

## Usage

```typescript
import { uuidv4 } from '@filip.mazev/blocks/core';

const ownerId: string = uuidv4();
// Reuse ownerId for acquisition and cleanup throughout this instance's lifetime.
```

## API

`uuidv4(): string` uses `crypto.getRandomValues()` to generate a version-4 UUID. It requires that runtime API. Generate once per owning instance; avoid calling
it from templates or computed values that may regenerate an owner ID. Coordinate server/client IDs explicitly when stable hydration identity is required.

## Appearance and customization

The interactive example uses public Blocks components, semantic theme variables, and shared spacing and responsive helpers. It follows the active playground
appearance. Open the source tab for the component and template.

## Behavior and accessibility

The Blocks button generates a fresh preview UUID. A separate instance ID remains unchanged for comparison. Updated previews are announced politely, and long
values wrap on narrow screens.

The helper needs `crypto.getRandomValues()`. Coordinate server/client IDs explicitly when hydration requires the same identity.

## Playground

Open `/utilities/identifiers` from **Core → Utilities → Stable identifiers**. The demo appears first, followed by separate documentation and code tabs.

Return to the [utilities overview](../../README.md) for the coverage audit and related feature guides.
