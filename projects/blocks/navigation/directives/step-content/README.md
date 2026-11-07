# Lazy step content

Use this declaration inside `bx-stepper` to configure workflow presentation and content. See the [Stepper guide](../../components/stepper/README.md) for the
full API and runnable examples.

## Import

```ts
import { StepContentDirective, Step, Stepper } from '@filip.mazev/blocks/navigation';
```

## Usage

```html
<bx-stepper mode="wizard">
    <bx-step id="details" label="Details"><ng-template bxStepContent>Details content</ng-template></bx-step>
</bx-stepper>
```

## API

`StepContentDirective.templateRef` captures the projected `TemplateRef<unknown>`. The owning stepper controls its creation and destruction.

## Appearance and customization

Presentation inherits the owning stepper's variant, size, semantic tokens and appearance policies. Supply a meaningful plain or translated step label.

## Behavior and accessibility

Use `bxStepContent` for deferred creation. The stepper supports eager, lazy-retained and destroy-inactive content policies. Ordinary projection is eager.

## Playground

Open `/components/stepper` for validated workflows and content/label customization.
