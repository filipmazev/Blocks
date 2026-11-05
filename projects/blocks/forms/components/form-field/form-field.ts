import type { InputSignal, Signal } from '@angular/core';

import { afterRenderEffect, ChangeDetectionStrategy, Component, computed, contentChild, ElementRef, inject, input } from '@angular/core';

import { BX_I18N, BxA11yService, ResolvableText, resolveText, uuidv4 } from '@filip.mazev/blocks/core';
import { BxGlassLightingService } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { LoadingSpinner, TooltipDirective } from '@filip.mazev/blocks/primitives';

import { IFormFieldControl } from '@forms/components/shared/interfaces/iform-field-control.interface';
import { BX_FORM_FIELD_CONTROL } from '@forms/components/shared/tokens/form-field-control.token';
import { SubscriptSizing } from '@forms/components/shared/types/validation.types';
import { BxError } from '@forms/directives/bx-error.directive';
import { BxHint } from '@forms/directives/hint/hint';

@Component({
  selector: 'bx-form-field',
  imports: [Icon, TooltipDirective, LoadingSpinner],
  templateUrl: './form-field.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './form-field.scss'
})
export class FormField {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly a11y = inject(BxA11yService);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly lighting = inject(BxGlassLightingService);

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
    () => this.activeControl()?.showError() ?? (!!this.error() || !!this.projectedError() || this.errors().length > 0)
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

  public readonly isAnimated: Signal<boolean> = computed(() => !this.a11y.isReducedMotion());

  public readonly inline: InputSignal<boolean> = input(false);
  public readonly control: InputSignal<IFormFieldControl | undefined> = input<IFormFieldControl | undefined>(undefined);
  public readonly label: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  public readonly tooltip: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  public readonly tooltipLabel: InputSignal<ResolvableText> = input<ResolvableText>('More information');
  public readonly error: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  public readonly errors: InputSignal<readonly string[]> = input<readonly string[]>([]);
  public readonly hint: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  public readonly hintEnd: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  public readonly required: InputSignal<boolean> = input(false);
  public readonly hideRequiredMarker: InputSignal<boolean> = input(false);
  public readonly loading: InputSignal<boolean> = input(false);
  public readonly showLoadingIndicator: InputSignal<boolean> = input(true);
  public readonly forId: InputSignal<string> = input('');
  public readonly subscriptSizing: InputSignal<SubscriptSizing> = input<SubscriptSizing>('fixed');

  constructor() {
    afterRenderEffect((onCleanup) => {
      this.activeControl()?.setDescribedByIds?.([`${this.controlId()}-description`]);

      const control = this.element.querySelector<HTMLElement>('input,textarea,select,button[role="combobox"]');

      if (control) {
        const ids = new Set((control.getAttribute('aria-describedby') ?? '').split(' ').filter(Boolean));

        ids.add(`${this.controlId()}-description`);
        control.setAttribute('aria-describedby', [...ids].join(' '));
        control.setAttribute('aria-invalid', String(this.showErrors()));
        control.setAttribute('aria-required', String(!!this.isRequired()));
      }

      if (!this.showErrors()) return;

      const parent = this.element.parentElement;
      const root = this.element.closest<HTMLElement>('form, fieldset') ?? parent;
      const surface = this.element.querySelector<HTMLElement>('.bx-field-control > [data-bx-surface]');

      if (!root || !surface) return;

      const light = this.lighting.register(root, {
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
