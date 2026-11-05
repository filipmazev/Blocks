import type { InputSignal, OutputEmitterRef, Signal } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, output, TemplateRef } from '@angular/core';

import { BX_I18N, isTextWithKey, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';

import { Button } from '@forms/components/button/button';
import { ILoadMoreConfig } from '@forms/components/shared/load-more/interfaces/iload-more-config.interface';
import { ILoadMoreContext } from '@forms/components/shared/load-more/interfaces/iload-more-context.interface';

@Component({
  selector: 'bx-load-more-footer',
  imports: [Button, NgTemplateOutlet, Icon],
  templateUrl: './load-more-footer.html',
  styleUrl: './load-more-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[hidden]': '!visible()', '[attr.aria-busy]': 'loading() ? "true" : null' }
})
export class LoadMoreFooter {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly text: Signal<string> = computed(() => {
    const config = this.config();
    const normal = resolveText(config.text ?? 'Load more', this.i18n);
    const retry = config.retryText;
    const retryText = resolveText(retry, this.i18n);
    const hasRetryText = !!retry && (!isTextWithKey(retry) || retryText !== retry.key);

    return this.loading() ? resolveText(config.loadingText ?? 'Loading', this.i18n) : this.retry() && hasRetryText ? retryText : normal;
  });
  protected readonly accessibleLabel: Signal<string> = computed(() => resolveText(this.config().ariaLabel, this.i18n) || this.text());
  protected readonly errorText: Signal<string> = computed(() => resolveText(this.error(), this.i18n));
  protected readonly context: Signal<ILoadMoreContext> = computed<ILoadMoreContext>(() => ({
    $implicit: this.text(),
    loading: this.loading(),
    disabled: this.disabled() || this.loading(),
    request: () => this.request.emit()
  }));

  public readonly retry: InputSignal<boolean> = input(false);
  public readonly visible: InputSignal<boolean> = input(false);
  public readonly loading: InputSignal<boolean> = input(false);
  public readonly disabled: InputSignal<boolean> = input(false);
  public readonly error: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  public readonly config: InputSignal<ILoadMoreConfig> = input<ILoadMoreConfig>({});
  public readonly buttonTemplate: InputSignal<TemplateRef<ILoadMoreContext> | undefined> = input<TemplateRef<ILoadMoreContext> | undefined>(undefined);

  public readonly request: OutputEmitterRef<void> = output();
}
