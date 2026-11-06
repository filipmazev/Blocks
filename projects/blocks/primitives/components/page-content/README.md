# Page content

The content section of a page. It keeps projected content shrinkable and supports wrapping without adding a scroll surface.

## Import

```typescript
import { PageContent, PageContainer } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-page-container pageTitle="Projects"><bx-page-content>Project list</bx-page-content></bx-page-container>
```

## API

Projects application-owned content without inputs or outputs.

## Appearance and customization

See the [Page container CSS variables](../page-container/README.md#appearance-and-customization). Additional projected content retains its owning component's
styles and uses shared theme tokens.

## Behavior and accessibility

Adds no landmark, focus behavior, or scrolling region. Keep actions keyboard accessible and status announcements application-owned.

## Playground

`/components/layout/page-container` demonstrates this section with the other page components.
