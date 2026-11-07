# Custom step labels

Use this declaration inside `bx-stepper` to configure workflow presentation and content. See the [Stepper guide](../../components/stepper/README.md) for the
full API and runnable examples.

## Import

```ts
import { StepLabelDirective, Step, Stepper } from '@filip.mazev/blocks/navigation';
```

## Usage

```html
<bx-stepper mode="wizard">
    <bx-step id="review" label="Review"
        ><ng-template bxStepLabel let-step let-status="status"><strong>{{ step.label }}</strong> · {{ status }}</ng-template></bx-step
    >
</bx-stepper>
```

## API

`StepLabelDirective.templateRef` captures `TemplateRef<IStepperLabelContext>`. The context supplies `$implicit` metadata, zero-based `index`, and resolved
`status`. The template context guard types these variables.

## Appearance and customization

Presentation inherits the owning stepper's variant, size, semantic tokens and appearance policies. Supply a meaningful plain or translated step label.

## Behavior and accessibility

Custom labels are visual content inside a native button; do not nest interactive controls. The plain step label remains the accessible name.

## Playground

Open `/components/stepper` for validated workflows and content/label customization.
