# Tab

Declares a labelled panel inside [`Tabs`](../tabs/README.md).

```ts
import { Tabs, Tab, TabContentDirective } from '@filip.mazev/blocks/primitives';
```

```html
<bx-tabs ariaLabel="Project details">
  <bx-tab label="Overview" value="overview">
    <ng-template bxTabContent><app-overview /></ng-template>
  </bx-tab>
  <bx-tab label="Activity" value="activity" [disabled]="loading()">
    <ng-template bxTabContent><app-activity /></ng-template>
  </bx-tab>
</bx-tabs>
```

`label` is required and accepts `ResolvableText`. `value` identifies selection and must be unique within its group; an omitted value is generated. `disabled` removes the tab from selection and arrow-key navigation.

`color` chooses a semantic palette role: `primary`, `accent`, `success`, `danger`, `info`, `warn`, or `grayscale`. The `accent` role follows the second tone of the active palette. `textColor`, `highlightColor` and `contentColor` accept Blocks color tokens for the label, selected highlight/light and panel text. `icon` and `endIcon` add leading and trailing Blocks icons.

Use direct content for simple panels, or `ng-template bxTabContent` to create the contents only while selected. The Tabs component renders the header and accessible panel; `bx-tab` is the projected declaration.

See the Tabs documentation and `/components/tabs` for appearance, lifecycle, two-way selection and keyboard behavior.
