# Virtual item template

Typed projection for [VirtualCollection](../../components/virtual-collection/README.md). The collection mounts only the item templates in its sliding window.

## Import

```typescript
import { VirtualCollection, VirtualItemDirective } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-virtual-collection #collection [items]="items()" [trackBy]="itemKey">
    <ng-template [bxVirtualItem]="collection" let-item let-index="index">{{ index + 1 }}. {{ item.label }}</ng-template>
</bx-virtual-collection>
```

## API

The required `bxVirtualItem` binding supplies its owning collection for generic type inference. `IVirtualItemContext<T>` exposes the item through `$implicit`,
its zero-based `index`, and the supplied item `count`.

## Appearance and customization

Use Blocks controls and semantic tokens inside the projected template. The collection owns row geometry and gap variables.

## Behavior and accessibility

Keep application state outside temporary item views. Stable keys preserve anchoring; template-local state is recreated after unmounting. Label interactive
controls and preserve ordinary keyboard behavior.

## Playground

Open `/components/virtual-collection`, `/icons`, or `/tokens`.
