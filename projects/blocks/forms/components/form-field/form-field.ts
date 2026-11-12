import type { InputSignal, Signal } from '@angular/core';

import { afterRenderEffect, ChangeDetectionStrategy, Component, computed, contentChild, ElementRef, inject, input } from '@angular/core';

import { BX_I18N, BxA11yService, ResolvableText, resolveText, uuidv4 } from '@filip.mazev/blocks/core';
import { BxGlassLightingService } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { LoadingSpinner, TooltipDirective } from '@filip.mazev/blocks/primitives';

import { BxError } from '@forms/components/error/error';
import { BxHint } from '@forms/components/hint/hint';
import { IFormFieldControl } from '@forms/interfaces/iform-field-control.interface';
import { BX_FORM_FIELD_CONTROL } from '@forms/tokens/form-field-control.token';
import { SubscriptSizing } from '@forms/types/validation.types';

@Component({
  selector: 'bx-form-field',
  imports: [Icon, TooltipDirective, LoadingSpinner],
  templateUrl: './form-field.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './form-field.scss'
})
export class FormField {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly bxA11yService = inject(BxA11yService);
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly bxGlassLightingService = inject(BxGlassLightingService);

  private readonly generatedId: string = `bx-field-${uuidv4()}`;

  private readonly projectedControl: Signal<IFormFieldControl | undefined> = contentChild(BX_FORM_FIELD_CONTROL);

  protected readonly activeControl: Signal<IFormFieldControl | undefined> = computed(() => this.control() ?? this.projectedControl());
  protected readonly controlId: Signal<string> = computed(() => this.forId() || this.activeControl()?.controlId() || this.generatedId);
  protected readonly resolvedLabel: Signal<string> = computed(() =>
    resolveText(this.label() ?? (this.inline() ? undefined : this.activeControl()?.label()), this.i18n)
  );
  protected readonly resolvedError: Signal<string> = computed(() => resolveText(this.error(), this.i18n));
  protected readonly resolvedHint: Signal<string> = computed(() => resolveText(this.hint(), this.i18n));
  protected readonly resolvedHintEnd: Signal<string> = computed(() => resolveText(this.hintEnd(), this.i18n));
  protected readonly resolvedTooltipLabel: Signal<string> = computed(() => resolveText(this.tooltipLabel(), this.i18n));
  protected readonly showErrors: Signal<boolean> = computed(
    () => !!this.error() || !!this.projectedError() || this.errors().length > 0 || (this.activeControl()?.showError() ?? false)
  );
  protected readonly messages: Signal<readonly string[]> = computed(() =>
    this.resolvedError() ? [this.resolvedError()] : (this.activeControl()?.errorTexts() ?? this.errors())
  );
  protected readonly isRequired: Signal<boolean | undefined> = computed(() => this.required() || this.activeControl()?.required());
  protected readonly isLoading: Signal<boolean | undefined> = computed(() => this.loading() || this.activeControl()?.pending());
  protected readonly hideSubscript: Signal<boolean> = computed(
    () => this.subscriptSizing() === 'dynamic' && !this.showErrors() && !this.resolvedHint() && !this.resolvedHintEnd() && !this.projectedHint()
  );

  protected readonly projectedError: Signal<BxError | undefined> = contentChild(BxError);
  protected readonly projectedHint: Signal<BxHint | undefined> = contentChild(BxHint);

  /** Whether decorative motion is enabled after applying shared reduced-motion preferences. */
  public readonly isAnimated: Signal<boolean> = computed(() => !this.bxA11yService.isReducedMotion());

  /** Whether the form-field shell aligns its label and control inline. Defaults to `false`. */
  public readonly inline: InputSignal<boolean> = input(false);
  /** Form-field control supplying value, validation, focus, and description state. Optional; omission leaves the value undefined. */
  public readonly control: InputSignal<IFormFieldControl | undefined> = input<IFormFieldControl | undefined>(undefined);
  /** Visible or accessible label for the component; translation-key values resolve through BX_I18N. Optional; omission leaves the value undefined. */
  public readonly label: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /**
   * Optional tooltip text for additional context; plain strings and shared translation keys are supported. Optional; omission leaves the value
   * undefined.
   */
  public readonly tooltip: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Accessible name of the form-field information/tooltip action; supports shared translation keys. Defaults to `'More information'`. */
  public readonly tooltipLabel: InputSignal<ResolvableText> = input<ResolvableText>('More information');
  /** Explicit validation or request-error text; supports shared translation keys. Optional; omission leaves the value undefined. */
  public readonly error: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Validation errors supplied by the owning form or component. Defaults to an empty array. */
  public readonly errors: InputSignal<readonly string[]> = input<readonly string[]>([]);
  /** Supporting text below the control on the leading side; supports shared translation keys. Optional; omission leaves the value undefined. */
  public readonly hint: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Supporting text below the control on the trailing side; supports shared translation keys. Optional; omission leaves the value undefined. */
  public readonly hintEnd: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Whether the control is required; native/form validation and the required indicator use this state. Defaults to `false`. */
  public readonly required: InputSignal<boolean> = input(false);
  /** Whether the visible required marker is hidden; does not change required validation. Defaults to `false`. */
  public readonly hideRequiredMarker: InputSignal<boolean> = input(false);
  /** Whether asynchronous work is in progress; the owning control renders its appropriate busy feedback. Defaults to `false`. */
  public readonly loading: InputSignal<boolean> = input(false);
  /** Whether the form-field shell renders its own loading indicator. Defaults to `true`. */
  public readonly showLoadingIndicator: InputSignal<boolean> = input(true);
  /** ID of the native control associated with this field's label. Defaults to `''`. */
  public readonly forId: InputSignal<string> = input('');
  /** Space reserved for hints and validation feedback; omission uses shared form defaults. */
  public readonly subscriptSizing: InputSignal<SubscriptSizing> = input<SubscriptSizing>('fixed');

  constructor() {
    afterRenderEffect((onCleanup) => {
      this.activeControl()?.setDescribedByIds?.([`${this.controlId()}-description`]);

      const control = this.nativeElement.querySelector<HTMLElement>('input,textarea,select,button[role="combobox"]');

      if (control) {
        const ids = new Set((control.getAttribute('aria-describedby') ?? '').split(' ').filter(Boolean));

        ids.add(`${this.controlId()}-description`);
        control.setAttribute('aria-describedby', [...ids].join(' '));
        control.setAttribute('aria-invalid', String(this.showErrors()));
        control.setAttribute('aria-required', String(!!this.isRequired()));
      }

      if (!this.showErrors()) return;

      const parent = this.nativeElement.parentElement;
      const root = this.nativeElement.closest<HTMLElement>('form, fieldset') ?? parent;
      const surface = this.nativeElement.querySelector<HTMLElement>('.bx-field-control > [data-bx-surface]');

      if (!root || !surface) return;

      const light = this.bxGlassLightingService.register(root, {
        element: surface,
        edge: 'bottom',
        offsetX: 0.5,
        offsetY: 1,
        z: 32,
        color: 'var(--bx-text-danger)',
        intensity: 0.9,
        radius: 240
      });

      onCleanup(() => light.destroy());
    });
  }
}
