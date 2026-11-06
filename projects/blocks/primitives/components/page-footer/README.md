# Page footer

An optional trailing section for page actions or status. The footer remains in the normal page flow.

## Import

```typescript
import { PageFooter, PageContainer } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-page-container pageTitle="Projects"><bx-page-content>Project list</bx-page-content><bx-page-footer>Page status</bx-page-footer></bx-page-container>
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
