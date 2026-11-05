# Top nav brand slot

Provide custom brand content for `bx-top-nav` through a typed projected template.

## Import

```typescript
import { TopNav, TopNavBrandDirective } from '@filip.mazev/blocks/navigation';
```

Add these declarations to the consuming standalone component's imports.

## Usage

```html
<bx-top-nav>
    <ng-template bxTopNavBrand let-compact="compact">
        <span>{{ compact ? 'Blocks' : 'Blocks workspace' }}</span>
    </ng-template>
</bx-top-nav>
```

## API

`TopNavBrandDirective` selects `[bxTopNavBrand]` and registers its `TemplateRef` with the containing `TopNav`. The template context exposes `compact` and
`open`; `$implicit` is equivalent to `compact`. There are no configurable directive inputs or outputs.

## Appearance and customization

The template owns its content while the navigation component owns layout and material. Use Blocks controls and shared theme tokens inside the slot.

## Behavior and accessibility

Place the template inside its owning navigation component. Registration is removed when the directive is destroyed. Interactive slot content must retain
accessible names and keyboard operation. Use the context to adapt content to the available space.

## Playground

Visit `/components/top-nav` and see the [owning component guide](../../components/top-nav/README.md).
