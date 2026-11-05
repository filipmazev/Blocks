# Content container

Centers content and constrains page width using the shared breakpoint scale.

## Public import

```typescript
import { Container } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-container size="lg" landmark="main">
    <h1>Workspace</h1>
    <p>Main page content.</p>
</bx-container>
```

## API

`size: ContainerSize` is sm, md, lg (default), xl or full. Optional `landmark` accepts main, region or complementary. `ariaLabel` accepts `ResolvableText` and
names a landmark when needed. The component adds no surface or scroll container.

## Appearance and customization

`--bx-container-max-width` and `--bx-container-padding` override width and logical gutters. Presets come from core/styles/helpers; full width stays within the
parent.

## Behavior and accessibility

Use main once per page. Give regions descriptive names. Logical gutters and auto margins support RTL, narrow containers and zoom. Compose Stack, Grid and Card
inside it.

## Playground

`/components/container` includes live examples and shared appearance controls.
