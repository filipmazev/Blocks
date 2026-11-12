# Stepper

`bx-stepper` presents progress, requests application-owned navigation, or orchestrates a guarded wizard. Behavior and presentation are independent: all three
modes support steps, segments, dots, progress and cards. The component lives in navigation and reuses Blocks buttons, icons, surfaces and progress indicators.

## Import

```ts
import {
    Stepper,
    Step,
    StepContentDirective,
    StepLabelDirective,
    IStepDefinition,
    IStepperRequest,
    IStepperTransition,
    StepperGuard
} from '@filip.mazev/blocks/navigation';
```

Add the components and directives used by your template to the standalone component's `imports`. Public contracts are exported from this same entry point.

## Usage

### Passive progress

```ts
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { IStepDefinition, Stepper } from '@filip.mazev/blocks/navigation';

@Component({
    selector: 'app-release-progress',
    imports: [Stepper],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<bx-stepper [steps]="steps" [(activeStep)]="active" variant="segments" size="sm" />`
})
export class ReleaseProgress {
    public readonly active = signal<string | null>('build');
    public readonly steps: readonly IStepDefinition[] = [
        { id: 'plan', label: 'Plan', completed: true },
        { id: 'build', label: 'Build', loading: true },
        { id: 'ship', label: 'Ship' }
    ];
}
```

Indicator mode creates no focusable step controls by default. Set `indicatorInteractive` to emit requests without committing selection.

### Application-controlled navigation

```html
<bx-stepper mode="navigation" orientation="vertical" [steps]="sections" [(activeStep)]="activeSection" (stepRequested)="navigate($event)" />
```

```ts
public readonly activeSection = signal<string | null>('overview');
public readonly sections: readonly IStepDefinition[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'access', label: 'Access' }
];

public navigate(request: IStepperRequest): void {
    // Scroll, navigate, load, expand or reject in application code.
    // Confirm only when the application accepts the destination:
    this.activeSection.set(request.id);
}
```

`stepRequested` carries `{ id, index, source, action }`. A request and confirmed `selectionChanged` are separate events. The stepper owns no router, scroll
container, section IDs, observers or scrolling offsets. Scroll/route listeners can update `activeStep` independently without creating navigation requests.

### Declarative wizard with Reactive Forms

```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button, InputField } from '@filip.mazev/blocks/forms';
import { Step, StepContentDirective, Stepper } from '@filip.mazev/blocks/navigation';

@Component({
    selector: 'app-workspace-wizard',
    imports: [ReactiveFormsModule, Button, InputField, Stepper, Step, StepContentDirective],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <bx-stepper #wizard mode="wizard" [completionContent]="done">
            <bx-step id="details" label="Details" [validation]="name">
                <ng-template bxStepContent>
                    <bx-input-field label="Workspace name" [formControl]="name" />
                </ng-template>
            </bx-step>
            <bx-step id="review" label="Review">
                <ng-template bxStepContent
                    ><p>Create {{ name.value }}.</p></ng-template
                >
            </bx-step>
        </bx-stepper>
        <ng-template #done>
            <p>Workspace created.</p>
            <button bx-button type="button" (click)="wizard.reset()">Restart</button>
        </ng-template>
    `
})
export class WorkspaceWizard {
    public readonly name = new FormControl('', { nonNullable: true, validators: Validators.required });
}
```

Built-in Back, Next, Skip and Finish actions use Blocks buttons and the same lifecycle as public navigation methods.

Wizard defaults are linear, internally committed selection, retained lazy templates and built-in controls. Only successful forward advancement or Finish marks
the current step completed. An optional Skip records skipped state and never claims completion. Disabled steps are excluded from navigation and progress totals.

### Signal Forms and other validity models

```ts
import { signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';

public readonly draft = signal({ name: '' });
public readonly registration = form(this.draft, (schema) => required(schema.name));
```

```html
<bx-step id="details" label="Details" [validation]="registration()">
    <ng-template bxStepContent>
        <bx-input-field label="Workspace name" [formField]="registration.name" />
    </ng-template>
</bx-step>
```

Import Angular's Signal Forms `FormField` directive and Blocks `InputField` into the owning component. `validation` accepts the existing form state through
`IStepValidation`: `valid`, optional `pending`, optional `statusChanges` and touch methods. Reactive Forms `AbstractControl`, a non-null `NgForm`, and Signal
Forms field state are structurally compatible. No form is required: `[valid]="canContinue()"` supports application-owned standalone state.

Explicit `valid` overrides the form's valid value. Pending validation, application `loading` and server `error` still prevent forward navigation. An invalid
attempt marks the supplied reactive subtree touched, or calls the supplied field state's `markAsTouched`. Angular Signal Forms marks the field and its
descendants touched. Untouched steps are not presented as invalid until a forward attempt; explicit server errors are shown immediately. Changing an already
completed form to invalid removes its effective completion and blocks linear progression. Backward navigation still runs guards and remains possible.

### Asynchronous guards and recovery

```ts
public readonly saveStep: StepperGuard = async ({ from, signal }) => {
    const response = await fetch('/api/workflow/save', {
        method: 'POST',
        signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stepId: from?.id })
    });

    if (!response.ok) throw new Error('Save failed');

    return true;
};
```

```html
<bx-stepper mode="wizard" [beforeTransition]="saveStep" (transitionFinished)="showResult($event)">
    <bx-step id="details" label="Details">Details</bx-step>
    <bx-step id="review" label="Review">Review</bx-step>
</bx-stepper>
```

The pipeline checks availability, forward validity and linear prerequisites; runs current `canExit`, destination `canEnter`, then `beforeTransition`; rechecks
validity; commits progress and (for internal selection) the active ID. Guards accept booleans, promises or observables. The first observable value is used;
empty observables refuse navigation. `false` produces `rejected/guard`; thrown/rejected operations produce `error` with the original error value. Neither
automatically creates a toast. Application error feedback can inspect `transitionFinished` or `lastTransition()` and retry through the same method.

`pending()` exposes the in-flight request and loading feedback. Duplicate operations return `busy` without running another guard. Reset, destruction, external
selection, definition replacement/removal and navigation-policy changes abort pending work. Observables unsubscribe. Promises are detached on cancellation; the
application must honor the supplied `AbortSignal` to cancel their underlying request. A stale result cannot select a removed destination.

### Controlled wizards and custom controls

```html
<bx-stepper
    #wizard
    mode="wizard"
    selectionMode="controlled"
    [steps]="steps"
    [(activeStep)]="active"
    [controls]="false"
    (transitionFinished)="confirm($event)" />
<button bx-button type="button" [loading]="wizard.pending() !== null" (click)="wizard.next()">Continue</button>
```

```ts
public confirm(result: IStepperTransition): void {
    if (result.outcome === 'accepted' && result.toId !== null) this.active.set(result.toId);
}
```

In controlled mode, successful guards record progress and emit an accepted transition; the application independently confirms `activeStep`. Indicator and
navigation modes always use request-only selection regardless of `selectionMode`. Direct external model changes are authoritative and bypass wizard guards; use
`goTo`, `next`, `previous`, `skip` and `finish` when the change must be guarded.

The playground deliberately separates requesting a step from confirming it. Its “Request next step” action shows a “Waiting for application confirmation” banner
and an “Open Build” (or other destination) action. The current marker moves only when that application action updates `activeStep`. Applications can confirm
immediately in their transition handler, as above; ordinary wizards use the default `selectionMode="internal"` to advance automatically.

### Content ownership and lifecycle

Choose either projected `bx-step` definitions or the `steps` input, including an explicitly empty array. Mixing sources throws. Nonempty stable IDs are
required; duplicates throw. Reordering preserves identity. Unknown, removed or disabled active IDs display the first enabled step; no enabled steps means no
selection or controls. This fallback does not overwrite the external model. Removed IDs lose their internal progress and retained views.

Data-driven wizard steps can supply `content: TemplateRef<unknown>` and `labelTemplate: TemplateRef<IStepperLabelContext>` without a separate registry.
`bxStepContent` defers expensive projected content. Ordinary direct projection is instantiated by Angular eagerly even when wrapped for display; use the
template directive when creation policy matters.

| `contentPolicy` | Creation and destruction                                                        |
| --------------- | ------------------------------------------------------------------------------- |
| `retained`      | Default. Create a template on first activation and retain it hidden on leaving. |
| `eager`         | Instantiate every content template when rendered in a wizard.                   |
| `active`        | Destroy the inactive embedded view; revisiting creates a fresh view.            |

`reset(id?)` aborts work, clears internal progress, skips, attempted validation and inactive visitation, and selects the given/first enabled ID. Application
form values, explicit step overrides and form touched state remain application-owned. Reset forms separately when starting a fresh draft. A successful Finish
emits `completed` once until reset and may replace the panels with `completionContent`. Viewing the final step alone does not finish the workflow. Percentage
represents completed enabled steps, so skipped optional steps intentionally need not yield 100%; supply `progressValue` for a different business metric.

### Progress counter formats

Show the completion counter at the top right of the progress variant with `showPercentage`. Existing usage continues to show percentages. Set
`progressFormat="fraction"` to display completed enabled steps as `X/N`, for example `1/3` instead of `33%`:

```html
<bx-stepper variant="progress" [steps]="steps" [(activeStep)]="active" [showPercentage]="true" progressFormat="fraction" />
```

Both formats describe completion rather than the current position. Disabled steps are excluded, skipped steps do not count as complete, and an empty enabled
step set displays `0/0`. `progressValue` overrides the percentage and bar only; the fraction always counts actual completed steps. Hide either counter format
with `showPercentage="false"`.

## API

### Stepper inputs and models

| Member                 | Type                         | Default / behavior                                                    |
| ---------------------- | ---------------------------- | --------------------------------------------------------------------- |
| `mode`                 | `StepperMode`                | `indicator`, `navigation`, `wizard`                                   |
| `steps`                | `readonly IStepDefinition[]` | Omitted for projected definitions                                     |
| `activeStep`           | `model<string \| null>`      | `null`; stable ID with two-way binding                                |
| `variant`              | `StepperVariant`             | `steps`, `segments`, `dots`, `progress`, `cards`                      |
| `size`                 | `StepperSize`                | `md`; also `sm`, `lg`                                                 |
| `orientation`          | `StepperOrientation`         | `horizontal`; also `vertical`                                         |
| `responsive`           | `StepperResponsive`          | `scroll`; also `vertical`, `compact`                                  |
| `showLabels`           | `boolean`                    | `true`                                                                |
| `showDescriptions`     | `boolean`                    | `true`                                                                |
| `indicatorInteractive` | `boolean`                    | `false`                                                               |
| `readOnly`, `readonly` | `boolean`                    | `false`; either blocks user/API edits                                 |
| `linear`               | `boolean`                    | `true`; requires completed predecessors                               |
| `selectionMode`        | `StepperSelectionMode`       | `internal`; also `controlled`                                         |
| `beforeTransition`     | `StepperGuard`               | Optional application guard                                            |
| `controls`             | `boolean`                    | `true` in wizard mode only                                            |
| `contentPolicy`        | `StepperContentPolicy`       | `retained`; also `eager`, `active`                                    |
| `focusOnChange`        | `boolean`                    | `true` for wizard panels only                                         |
| `completionContent`    | `TemplateRef<unknown>`       | Optional application completion view                                  |
| `progressValue`        | `number`                     | Optional explicit 0–100 completion percentage                         |
| `showPercentage`       | `boolean`                    | `false`; shows the progress counter in either format                  |
| `progressFormat`       | `StepperProgressFormat`      | `percentage` (default) or `fraction` (`X/N`)                          |
| `labels`               | `Partial<IStepperLabels>`    | Shared defaults, then English                                         |
| `glassiness`           | Shared `GlassinessMode`      | Optional material override; circular selection lenses default to auto |
| `surfaceEffects`       | `boolean`                    | `true`; interactive step lighting                                     |

### Step metadata

The declarative `Step` inputs match `IStepDefinition` fields except `content`/`labelTemplate`, which use `bxStepContent`/`bxStepLabel` templates.

| Field                       | Meaning                                                      |
| --------------------------- | ------------------------------------------------------------ |
| `id`, `label`               | Required stable ID and `ResolvableText` name                 |
| `description`, `statusText` | Optional reactive translated text                            |
| `icon`                      | Optional Blocks `IconName`                                   |
| `disabled`, `optional`      | Default `false`; excluded navigation / available skip action |
| `editable`                  | Default `true`; `false` prevents revisiting completed steps  |
| `completed`, `skipped`      | Optional explicit overrides of internal wizard state         |
| `valid`, `validation`       | Explicit validity or application-owned form state            |
| `error`, `loading`          | Application-owned error/busy state, default `false`          |
| `canExit`, `canEnter`       | Optional per-step guards                                     |
| `content`, `labelTemplate`  | Optional data-driven templates                               |

Explicit `completed: false` prevents derived completion; a linear workflow must receive an application-confirmed completion override before advancing that step.
Explicit completion is still ineffective while validation is invalid/pending or an application error/loading state is set. Derived skipped state is cleared when
the step is subsequently completed. Visual priority is disabled, loading, error, skipped, completed, then active/pending; `aria-current` always tracks selection
independently.

### Methods, state and events

| Member                                       | Result / payload                                                     |
| -------------------------------------------- | -------------------------------------------------------------------- |
| `goTo(id, source?)`                          | `Promise<IStepperTransition>`                                        |
| `next(source?)`, `previous(source?)`         | Same return type; skip disabled/non-editable completed destinations  |
| `skip(source?)`, `finish(source?)`           | Same return type; optional skip / explicit final action              |
| `reset(id?)`                                 | `void`; restart without guards, preserve application-owned form data |
| `selectedStep()`                             | Effective metadata or `null`                                         |
| `pending()`, `lastTransition()`              | Read-only current operation / latest settled result                  |
| `progress()`, `isComplete()`, `isReadonly()` | Completed percentage / finished workflow / combined readonly         |
| `stepRequested`                              | `IStepperRequest`: ID, zero-based index, source, action              |
| `selectionChanged`                           | `IStepperSelection`: ID, index, previous ID                          |
| `transitionFinished`                         | `IStepperTransition`: request, from/to IDs, outcome, reason/error    |
| `completed`                                  | `IStepperCompletion`: ordered completed and skipped ID arrays        |

Sources are `pointer`, `keyboard`, `programmatic` (the method default) and `controls`. Outcomes are `accepted`, `rejected`, `invalid`, `error`, `cancelled` and
`busy`. `busy` is returned directly without a second settled-result event. Readonly state blocks reset and requests but still permits authoritative external
selection updates. Missing destinations are rejected without throwing. Skipping a final optional step finishes the workflow while keeping that step skipped.
Final completion requires all enabled required steps even in non-linear mode.

## Appearance and customization

Sizes change marker diameter, segment thickness, spacing, typography and surface padding. Connectors remain thin and solid, with flush inner joins at fractional
widths and unequal compact-step sizes. Interactive controls retain a minimum 44 CSS pixel target. Segments use different thicknesses for `sm`, `md` and `lg`.
Dots use compact filled, hollow and checked indicators; progress uses actual completion rather than active position. Dots measure 1.25 / 1.5 / 1.75rem across
the size presets so status symbols have clear interior spacing. Step icons and spinners scale to 16 / 18 / 20 CSS pixels. Vertical progress keeps a horizontal
continuous completion bar above its vertical step list.

| CSS custom property                 | Default                                                     |
| ----------------------------------- | ----------------------------------------------------------- |
| `--bx-stepper-marker-size`          | Size preset: 1.75 / 2 / 2.5rem                              |
| `--bx-stepper-dot-size`             | Size preset: 1.25 / 1.5 / 1.75rem                           |
| `--bx-stepper-lens-gap`             | Half of shared spacing 3 (6px) outside the selected marker  |
| `--bx-stepper-magnification`        | `1.3`; backdrop enlargement beneath the circular lens       |
| `--bx-stepper-lens-border`          | Primary foreground mixed at 18% opacity                     |
| `--bx-stepper-marker-radius`        | Shared pill radius                                          |
| `--bx-stepper-thickness`            | Size preset: 0.125 / 0.25 / 0.5rem                          |
| `--bx-stepper-gap`                  | Size preset: shared spacing 2 / 3 / 4                       |
| `--bx-stepper-padding`              | Size preset: shared spacing 2 / 3 / 4                       |
| `--bx-stepper-color`                | `--bx-accent`                                               |
| `--bx-stepper-on-color`             | `--bx-on-accent`; foreground paired with the active fill    |
| `--bx-stepper-connector-thickness`  | `2px`; separate from segment/progress thickness             |
| `--bx-stepper-segment-radius`       | Shared pill radius                                          |
| `--bx-stepper-segment-length`       | Shared spacing 10 for vertical segments                     |
| `--bx-stepper-card-background`      | `--bx-bg-surface`                                           |
| `--bx-stepper-card-radius`          | Shared medium radius                                        |
| `--bx-stepper-compact-active-width` | `8rem`; readable active label in compact horizontal layouts |

Step bodies use `BxSurfaceDirective`, global materials and transparency fallbacks. Cards have a persistent neutral surface. Other variants keep transparent
backgrounds, including selected and hovered steps. Hover feedback emphasizes the marker and underlines its label without moving content. Shared lighting
attaches to the interactive button, with emitted light positioned at the visible marker for non-card variants and the card surface for cards. Labels and empty
button space do not extend a marker's light source. Steps and dots share one circular glass lens that travels between committed markers and remains over the
current marker at rest. Cards retain local marker lenses and in-place feedback. Global Off and accessibility policies take precedence over component overrides.
When refraction is active, the backing markers are transparent and their icons use semantic foreground colors; solid fallbacks pair accent fills with their
on-accent foreground. Theme and palette changes update mounted instances. Errors consistently use danger tokens for markers, feedback and emitted light. The
lens has a subtle neutral contour; keyboard focus retains its separate visible outline. Horizontal labels are centered below markers, and vertical labels align
with the marker center. Cards align their text stack to the top with a small marker offset, using the same icon-and-text arrangement as alerts and banners. No
independent animation or lighting implementation is introduced.

Custom labels use `<ng-template bxStepLabel let-step let-index="index" let-status="status">…</ng-template>` inside `bx-step`. Keep content non-interactive and
preserve a meaningful plain `label`, which remains the button's accessible name. The custom label is decorative to avoid duplicated accessible names.

Unavailable steps use muted markers and reduced visual emphasis. Completed steps with `editable: false` receive the same unavailable treatment when revisiting
is blocked. Read-only steppers keep their content, completion symbols and keyboard focus, use neutral markers, and suppress interaction feedback and lighting.
The current step remains distinguishable by its stronger marker border; read-only does not disable the control or discard progress.

### Localization

Every component-owned label is configurable as `ResolvableText`. Supply `labels` per instance or provide
`{ provide: BX_STEPPER_DEFAULTS, useValue: { labels: { next: { key: 'workflow.next' } } } }`. Merge precedence is instance member, shared member, English
default. Text reacts to `BX_I18N.version()` changes. Without an adapter, strings work directly and translation keys fall back to their key. Position text
receives `index` (one-based), `count`, `label` and rounded `percent`; plain strings can use `{index}`, `{count}`, `{label}` and `{percent}` placeholders.
`IStepperLabels` also covers pending, awaitingConfirmation, active, completed, skipped, error, loading, disabled, optional and rejection/invalid feedback.

## Behavior and accessibility

The header is a named group with an ordered list. Passive indicators have no buttons. Interactive headers use native buttons with `aria-current="step"`,
descriptions and wizard panel relationships. They do not claim tablist semantics. State text, check/error/skip symbols and filled/hollow markers supplement
semantic colors. Loading remains identifiable with reduced motion and forced colors.

Interactive steps use one roving tab stop. Orientation-aware arrows, Home and End move focus without committing selection; Enter and Space activate through
native button behavior. Horizontal movement reverses in RTL. Disabled and non-editable completed destinations are skipped. Keyboard direction follows rendered
CSS orientation, including responsive vertical layouts. Navigation mode never moves focus on external selection. Wizards focus newly rendered panels by default;
turn off `focusOnChange` when your application owns focus. If no panel exists, focus falls back to the step button. Completion content receives focus.

Status announcements cover loading, validation refusal, guard refusal, failures and completion. Wizard panel names identify selection changes without another
repeated live announcement. `BxA11yService` and shared surface/progress/spinner policies handle live reduced-motion preferences. Semantic tokens, logical CSS
and forced-colors rules preserve readable state across themes, RTL and accessibility modes.

The step list scrolls inside a separate wrapper with space below its surfaces for native horizontal scrollbars, including WebKit overlay scrollbars.
`responsive="scroll"` preserves labels with a reachable horizontal scroll region. `vertical` changes the list at the shared `sm` breakpoint. `compact` hides
supporting text and keeps the active label. Hidden visual text remains in accessible naming/descriptions. CSS performs responsive layout without browser-only
state during server rendering. Content wraps for long translations and constrained containers.

The circular lens uses the shared optical renderer. `--bx-stepper-magnification` defaults to `1.3` and enlarges the actual backdrop beneath the lens, including
icons and connectors during travel. Icons keep their ordinary size until covered; there is no separate active-icon scale. Hit targets and layout stay fixed. The
lens extends 6px beyond the marker through `--bx-stepper-lens-gap`, retaining some icon refraction without crowding the optical rim. Its subtle neutral outline
is configurable with `--bx-stepper-lens-border`.

While refraction is active, the backing markers omit decorative borders, rims and shadows so those details cannot be refracted into artifacts. Ordinary and
accessibility fallback indicators retain their state contours. Refraction has no added accent wash and remains subject to `glassiness`, global baseline/Off,
browser support and accessibility preferences. Segment indicators preserve their solid continuous fills.

### Material and motion pilot

Markers and connectors receive environmental lighting through the existing surface engine. Circular indicators reuse its rim, material and pressure response;
card presentations retain their card backing. Filled current indicators emit more strongly than tonal completed or neutral inactive indicators during engine
interaction, with restrained extra error emphasis. Emission strength does not increase reception. Indicator mode remains passive unless interaction is enabled.
Rounded hover highlights mix the semantic state color with the theme surface; they do not increase a dark elevation shadow. The traveling accent has no shadow,
keeping its light-mode rim distinct from the marker's resting depth. Segment tracks keep their continuous geometry, with fully tinted active/completed fills so
their existing material remains bright. Emission follows the visible segment surface. Error contours take precedence over cached environmental rim tint, and
committed status changes urgently refresh marker lighting.

A persistent selection surface travels between committed positions, interpolating both axes and dimensions. For steps and dots it is the same refracting lens at
rest and in motion; segment and progress variants retain their own selection treatment. The shared fluid spring runs about 12% more slowly while preserving its
damping ratio, ease-in/ease-out, bounded squash/stretch and interruption behavior. Vertical and responsive layouts use the same controller. Cards instead
animate their own border and rim lighting in place; no accent travels across the unconnected space between cards. Velocity adds a small deformation along the
travel axis. Connector completion fills independently of active position, so visiting a step never implies completing it. Circular indicators compress on press
and recover on the shared spring. Rapid navigation retargets existing motion rather than restarting it. Container resizes, orientation and presentation changes
reposition the accent without animating, so it never trails its marker; measurements use layout geometry, keeping the accent centered while an ancestor scales
during an entrance transition. Rejected guards and unconfirmed controlled requests leave the selection accent at the committed step.

Live reduced motion snaps the accent and completion fill and removes indicator deformation. Reduced transparency retains the shared opaque material fallback
independently: the traveling accent uses a soft opaque tint, preserving the contrast of the solid current marker and its label. Forced colors retain the
explicit current/completed/error markers and hide the decorative traveling accent. Springs and observers are released with their component. No existing theme
tokens were renamed or changed.

## Playground

Open `/components/stepper` for all modes, variants, sizes and orientations; English/Spanish/French/German text changes; appearance controls; a scroll-driven
section navigator; validated Reactive Forms and Signal Forms; asynchronous save success, guard refusal and failure/retry; optional/disabled/non-editable steps;
custom labels and controls; dynamic definitions; controlled confirmation; completion and reset.

Run `npm run test:stepper` for the colocated Angular TestBed browser suite. It uses the installed Angular unit-test builder with Karma/Jasmine and
ChromeHeadless.

Functional references: [Angular Material](https://material.angular.dev/components/stepper/overview), [PrimeNG](https://primeng.org/stepper),
[MUI](https://mui.com/material-ui/react-stepper/), [Mantine](https://mantine.dev/core/stepper/) and [NG-ZORRO](https://ng.ant.design/components/steps/en).
Visual review also considers [vibecoded-design-tells](https://github.com/JCarterJohnson/vibecoded-design-tells); Blocks tokens and surfaces remain
authoritative.
