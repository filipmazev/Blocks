# Forms

Blocks fields use Angular 22 native signal control contracts and support Signal Forms, Reactive Forms, Template-driven Forms and standalone models. The library supplies presentation, interaction and accessible feedback; Angular owns validation and submission.

## Import and basic usage

```ts
import { signal } from '@angular/core';
import { form, FormField as SignalFormField, FormRoot, required, email } from '@angular/forms/signals';
import { Button, InputField } from '@filip.mazev/blocks/forms';

readonly accountModel = signal({ email: '' });
readonly account = form(this.accountModel, (p) => {
  required(p.email, { message: 'Email is required.' });
  email(p.email, { message: 'Enter a valid email address.' });
}, {
  submission: {
    ignoreValidators: 'none',
    action: async (field) => { await this.api.save(field().value()); }
  }
});
```

Import `SignalFormField`, `FormRoot`, and the used Blocks controls into the standalone component. Alias Angular's directive because Blocks also exports its frame component as `FormField`.

```html
<form [formRoot]="account">
  <bx-input-field label="Email" type="email" [formField]="account.email" />
  <button bx-button type="submit" [disabled]="!account().valid()" [loading]="account().submitting()">Save</button>
</form>
```

## Validation and state

Schema validation supplies `required`, numeric and length limits, pattern metadata, errors, pending, disabled and readonly state to compatible controls. `valid()` is false while asynchronous validation is pending; `!invalid()` alone does not guarantee readiness.

Use `ignoreValidators: 'none'` to gate the submission handler as well as the visible button while async validation is pending. Submission marks interactive fields touched, prevents duplicate submissions, and applies returned server errors to their target fields.

Read field state through the Angular field tree. Derive UI with `computed()` and use `effect()` for side effects when validity or pending state changes. Cross-field validators belong in the schema and can read related values. Blocks does not implement a second validation engine.

## Custom messages and visibility

Shared inputs include `errorMessages`, `errorPriority`, `errorMode` (`first` or `all`), and `errorPolicy` (`touched`, `dirty`, `submitted`, `always`, or a function receiving `IErrorState`). The default reveals invalid fields after touch or submission. A function can include custom group or application state. The submitted policy tracks native form submission; when invoking submission programmatically outside the form element, pass the shared `submitted` input from application state.

Message resolution prefers projected `bx-error` content, then field message overrides, schema messages, and configured defaults. `minlength`/`maxlength` Reactive Forms keys and `minLength`/`maxLength` Signal Forms kinds are recognized. Resolvers receive the original error plus its parameter payload.

```ts
readonly messages: ValidationMessages = {
  minLength: ({ params }) => `Use at least ${params['minLength'] ?? params['requiredLength']} characters.`,
  required: { key: 'validation.required' }
};
```

Put this declaration in the appropriate constants or types-supporting module according to the house rules. Translation-key overrides receive error parameters through the existing adapter. Default messages can be replaced application-wide using `FormSettingsService.update()`; instance inputs take precedence. No error-message map is mandatory when the schema supplies messages.

Projected `bx-error` supports rich content. `bx-hint`, `hint`, `hintEnd`, `bxPrefix`, and `bxSuffix` provide composable support and adornments. Supporting text and errors are associated automatically through `aria-describedby`. Custom error regions announce changes politely.

## Compatibility and migration

Existing `[formControl]`, `formControlName`, and `[(ngModel)]` component bindings remain supported. Text edits honor Reactive Forms blur and submit update strategies. `reset()` on the owning field/form clears component interaction and parse state. Standalone value controls expose `[(value)]`; checkbox-style controls expose `[(checked)]`.

`BxBaseControl` remains available for existing external CVA subclasses; repeated touch reporting and schema error-message handling are corrected. New Blocks controls use native signal contracts, without implementing CVA on the same component. The legacy individually bound radio remains available, while new forms should bind a `RadioGroup` once around its options.

Native `input`, `textarea` and `select` elements can use `bxInput` inside `bx-form-field`. Consumer components can provide `BX_FORM_FIELD_CONTROL` with `IFormFieldControl` to integrate their own state and focus behavior.

## Asynchronous options

Single select and multiselect support application-owned requests, comparison, templates, incremental loading and error/retry behavior. Their scroll wrappers use `LoadMoreDirective`, which can also be used by future paginated components. See the [load-more guide](directives/load-more/README.md) and [multiselect guide](components/multi-select/README.md).

## Appearance and accessibility

Controls follow Blocks semantic tokens, global theme/appearance configuration, reduced motion through `BxA11yService`, and reactive text resolution through `BX_I18N`. Configuration supports filled/outlined appearance, label placement, required markers, floating-label behavior and supporting-text sizing. Readonly and disabled states remain distinct in form state. All applicable controls accept `readOnly` as well as Angular Signal Forms' lowercase `readonly` contract. Either true value prevents edits while retaining focusability. Readonly controls use the default cursor and suppress pointer hover/click highlights and interactive glass lighting while preserving their static appearance and keyboard focus styling. Focus origin uses the shared Angular CDK focus monitor. Changes to readonly state update mounted surfaces, including projected native controls and grouped radios. Native select integration prevents interaction without binding a nonexistent native readOnly property.

All existing form ellipsis and full-selection fit measurement use the public `TruncateDirective` from `@filip.mazev/blocks/primitives`. Set `[tooltipOnTruncate]="false"` on an input, search, select, or multiselect to retain truncation while supplying your own tooltip. `FormSettingsService.update({ tooltipOnTruncate: false })` changes the application default; instance inputs take precedence. Tag and menu controls expose the same opt-out. The public `TruncatedTextPipe` (`bxTruncatedText`) and `truncatedText()` helper support custom feedback. See the [shared truncation guide](../primitives/directives/truncate/README.md).

## Playground

Open `/components/signal-forms` for multiple controls, sync/async/cross-field rules, pending state, custom messages, server errors, disabled submission, dynamic disabled/readonly, reset and reactive validation status. Use Fill valid data to exercise submission, or an email containing `server-error` to see a server rejection.

The load-more and selection pages include fake APIs, failed requests, retry and small pages without scrollbars.
