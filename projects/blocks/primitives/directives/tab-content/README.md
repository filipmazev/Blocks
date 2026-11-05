# Lazy tab content

Declare a tab panel as a template so its contents are instantiated only while that tab is selected.

## Import

```typescript
import { Tab, TabContentDirective, Tabs } from '@filip.mazev/blocks/primitives';
```

Add these declarations to the consuming standalone component's imports.

## Usage

```html
<bx-tabs>
    <bx-tab label="Summary" value="summary">
        <ng-template bxTabContent>
            <p>Summary content is created when this tab is active.</p>
        </ng-template>
    </bx-tab>
    <bx-tab label="Details" value="details">
        <ng-template bxTabContent>
            <p>Details content is created when this tab is active.</p>
        </ng-template>
    </bx-tab>
</bx-tabs>
```

## API

`TabContentDirective` selects `ng-template[bxTabContent]`. Its readonly `templateRef` exposes the captured `TemplateRef<unknown>` to the owning `Tab`.

## Appearance and customization

Style the projected content normally; the directive adds no wrapper or visual treatment. Configure the tab strip through `Tabs` and `Tab`.

## Behavior and accessibility

Switching tabs destroys the inactive template's view. Keep state outside that view when it must survive selection changes. `Tabs` supplies panel relationships
and keyboard navigation; see the [tabs guide](../../components/tabs/README.md).

## Playground

Visit `/components/tabs`.
