import type { InputSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, effect, inject, input, output, signal } from '@angular/core';

import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { LoadingSpinner, TooltipDirective, TruncateDirective, TruncatedTextPipe } from '@filip.mazev/blocks/primitives';

import { Button } from '@forms/components/button/button';
import { FormField } from '@forms/components/form-field/form-field';
import { ISearchRetryConfig } from '@forms/components/search-input/interfaces/isearch-retry-config.interface';
import { BxValueControl } from '@forms/components/shared/classes/bx-value-control';

@Component({
  selector: 'bx-search-input',
  imports: [BxSurfaceDirective, FormField, Icon, LoadingSpinner, Button, TooltipDirective, TruncateDirective, TruncatedTextPipe],
  templateUrl: './search-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './search-input.scss'
})
export class SearchInput extends BxValueControl<string> {
  private readonly i18n = inject(BX_I18N, { optional: true });

  // The application clears loadError when retrying; retain it to reserve the status row's height.
  private readonly retryError: WritableSignal<ResolvableText | undefined> = signal<ResolvableText | undefined>(undefined);

  private readonly retrying: Signal<boolean> = computed(() => this.retryError() !== undefined);

  protected readonly resolvedClearLabel: Signal<string> = computed(() => resolveText(this.clearLabel(), this.i18n));
  protected readonly resolvedLoadError: Signal<string> = computed(() => resolveText(this.loadError(), this.i18n));
  protected readonly resolvedLoadingLabel: Signal<string> = computed(() => resolveText(this.loadingLabel(), this.i18n));
  protected readonly resolvedLoadingAriaLabel: Signal<string> = computed(() => resolveText(this.loadingAriaLabel(), this.i18n));
  protected readonly resolvedRetryLabel: Signal<string> = computed(() => resolveText(this.retryLabel(), this.i18n));
  protected readonly resolvedRetryAriaLabel: Signal<string> = computed(() => resolveText(this.retryConfig().ariaLabel, this.i18n) || this.resolvedRetryLabel());
  protected readonly resolvedRetainedError: Signal<string> = computed(() => resolveText(this.retryError() ?? this.loadError(), this.i18n));
  protected readonly isBusy: Signal<boolean> = computed(() => this.loading() || this.pending());
  protected readonly showRetry: Signal<boolean> = computed(() => !!this.loadError() || this.retrying());
  protected readonly showStatus: Signal<boolean> = computed(
    () => !!this.resolvedLoadError() || (this.isBusy() && (!!this.resolvedLoadingLabel() || this.showRetry()))
  );
  protected readonly searchDescribedBy: Signal<string> = computed(() => `${this.describedBy()} ${this.controlId()}-search-status`);

  public readonly clearLabel: InputSignal<ResolvableText> = input<ResolvableText>('Clear search');
  public readonly autocomplete: InputSignal<string> = input('off');
  /** Application-owned request failure, separate from form validation. */
  public readonly loadError: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Optional visible loading text; otherwise only loadingAriaLabel is announced. */
  public readonly loadingLabel: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  public readonly loadingAriaLabel: InputSignal<ResolvableText> = input<ResolvableText>('Searching');
  public readonly retryLabel: InputSignal<ResolvableText> = input<ResolvableText>('Retry search');
  public readonly retryConfig: InputSignal<ISearchRetryConfig> = input<ISearchRetryConfig>({});

  // eslint-disable-next-line @angular-eslint/no-output-native -- Preserve the established public search event.
  public readonly search: OutputEmitterRef<string> = output<string>();
  /** Requests another attempt for the current query. Set loading synchronously before starting the request. */
  public readonly retry: OutputEmitterRef<string> = output<string>();

  private composing: boolean = false;

  constructor() {
    super();
    effect(() => {
      if (this.retrying() && !this.loading()) this.retryError.set(undefined);
    });
  }

  public clear(): void {
    if (this.disabled() || this.isReadonly()) return;

    this.retryError.set(undefined);
    this.updateValue('');
    this.search.emit('');
    this.focus();
  }

  public retrySearch(): void {
    if (this.disabled() || this.isReadonly() || this.isBusy() || this.retrying() || !this.loadError()) return;

    this.retryError.set(this.loadError());
    // Keep focus on the input when the retry button becomes busy or is removed after success.
    this.focus();
    this.retry.emit(this.internalValue() ?? '');
  }

  protected onInput(event: Event): void {
    if (this.composing || this.disabled() || this.isReadonly()) return;

    const value = (event.target as HTMLInputElement).value;

    this.retryError.set(undefined);
    this.updateValue(value);
    this.search.emit(value);
  }

  protected onCompositionStart(): void {
    this.composing = true;
  }

  protected onCompositionEnd(event: Event): void {
    this.composing = false;
    this.onInput(event);
  }

  protected onBlur(): void {
    this.markAsTouched();
  }
}
