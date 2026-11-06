# Page header

The title section of a page, with a translated eyebrow, heading, description, and projected actions.

## Import

```typescript
import { PageHeader, PageContainer } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-page-header sectionTitle="Workspace" pageTitle="Projects" pageDescription="Manage your projects." />
```

## API

`sectionTitle`, `pageTitle`, and `pageDescription` accept optional `ResolvableText`. Undefined titles resolve from navigation when
`autoResolveTitlesFromNavigation` is true (the default). An empty string hides that title. Descriptions are explicit. `headingLevel` defaults to 1 and clamps to
1–6; use 2 for nested previews.

## Appearance and customization

See the [Page container CSS variables](../page-container/README.md#appearance-and-customization). Additional projected content retains its owning component's
styles and uses shared theme tokens.

## Behavior and accessibility

Uses a native heading and reacts to `BX_I18N` language updates. Plain strings work without an adapter.

## Playground

`/components/layout/page-container` demonstrates this section with the other page components.
