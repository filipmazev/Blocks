# Side nav header slot

Provide custom header content for `bx-side-nav` through a typed projected template.

## Import

```typescript
import { SideNav, SideNavHeaderDirective } from '@filip.mazev/blocks/navigation';
```

Add these declarations to the consuming standalone component's imports.

## Usage

```html
<bx-side-nav>
    <ng-template bxSideNavHeader let-collapsed="collapsed">
        <span>{{ collapsed ? 'Blocks' : 'Blocks workspace' }}</span>
    </ng-template>
</bx-side-nav>
```

## API

`SideNavHeaderDirective` selects `[bxSideNavHeader]` and registers its `TemplateRef` with the containing `SideNav`. The template context exposes `collapsed` and
`mobile`; `$implicit` is equivalent to `collapsed`. There are no configurable directive inputs or outputs.

## Appearance and customization

The template owns its content while the navigation component owns layout and material. Use Blocks controls and shared theme tokens inside the slot.

## Behavior and accessibility

Place the template inside its owning navigation component. Registration is removed when the directive is destroyed. Interactive slot content must retain
accessible names and keyboard operation. Use the context to adapt content to the available space.

## Playground

Visit `/components/side-nav` and see the [owning component guide](../../components/side-nav/README.md).
