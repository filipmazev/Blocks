import { afterRenderEffect, Component, computed, contentChild, ElementRef, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { BX_I18N, ResolvableText, BxA11yService, resolveText, uuidv4 } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';
import { BxGlassLightingService } from '@filip.mazev/blocks/effects';
import { LoadingSpinner, TooltipDirective } from '@filip.mazev/blocks/primitives';
import { BxError } from '../../directives/bx-error.directive';
import { BxHint } from '../../directives/hint/hint';
import { IFormFieldControl } from '../shared/interfaces/iform-field-control.interface';
import { BX_FORM_FIELD_CONTROL } from '../shared/tokens/form-field-control.token';
import { SubscriptSizing } from '../shared/types/validation.types';

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
  private readonly projectedControl = contentChild(BX_FORM_FIELD_CONTROL);
  private readonly generatedId = `bx-field-${uuidv4()}`;
  protected readonly projectedError = contentChild(BxError);
  protected readonly projectedHint = contentChild(BxHint);
  protected readonly activeControl = computed(() => this.control() ?? this.projectedControl());
  protected readonly controlId = computed(() => this.forId() || this.activeControl()?.controlId() || this.generatedId);
  protected readonly resolvedLabel = computed(() => resolveText(this.label() ?? (this.inline() ? undefined : this.activeControl()?.label()), this.i18n));
  protected readonly resolvedError = computed(() => resolveText(this.error(), this.i18n));
  protected readonly resolvedHint = computed(() => resolveText(this.hint(), this.i18n));
  protected readonly resolvedHintEnd = computed(() => resolveText(this.hintEnd(), this.i18n));
  protected readonly resolvedTooltipLabel = computed(() => resolveText(this.tooltipLabel(), this.i18n));
  protected readonly showErrors = computed(() => this.activeControl()?.showError() ?? (!!this.error() || !!this.projectedError() || this.errors().length > 0));
  protected readonly messages = computed(() => (this.resolvedError() ? [this.resolvedError()] : (this.activeControl()?.errorTexts() ?? this.errors())));
  protected readonly isRequired = computed(() => this.required() || this.activeControl()?.required());
  protected readonly isLoading = computed(() => this.loading() || this.activeControl()?.pending());
  protected readonly hideSubscript = computed(
    () => this.subscriptSizing() === 'dynamic' && !this.showErrors() && !this.resolvedHint() && !this.resolvedHintEnd() && !this.projectedHint()
  );

  public readonly inline = input(false);
  public readonly control = input<IFormFieldControl | undefined>(undefined);
  public readonly label = input<ResolvableText | undefined>(undefined);
  public readonly tooltip = input<ResolvableText | undefined>(undefined);
  public readonly tooltipLabel = input<ResolvableText>('More information');
  public readonly error = input<ResolvableText | undefined>(undefined);
  public readonly errors = input<readonly string[]>([]);
  public readonly hint = input<ResolvableText | undefined>(undefined);
  public readonly hintEnd = input<ResolvableText | undefined>(undefined);
  public readonly required = input(false);
  public readonly hideRequiredMarker = input(false);
  public readonly loading = input(false);
  public readonly showLoadingIndicator = input(true);
  public readonly forId = input('');
  public readonly subscriptSizing = input<SubscriptSizing>('fixed');
  public readonly isAnimated = computed(() => !this.a11y.isReducedMotion());

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
