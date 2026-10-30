import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, output, TemplateRef } from '@angular/core';
import { BX_I18N, ResolvableText, isTextWithKey, resolveText } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';
import { Button } from '../../button/button';
import { ILoadMoreConfig } from './interfaces/iload-more-config.interface';
import { ILoadMoreContext } from './interfaces/iload-more-context.interface';

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
  protected readonly text = computed(() => {
    const config = this.config();
    const normal = resolveText(config.text ?? 'Load more', this.i18n);
    const retry = config.retryText;
    const retryText = resolveText(retry, this.i18n);
    const hasRetryText = !!retry && (!isTextWithKey(retry) || retryText !== retry.key);

    return this.loading() ? resolveText(config.loadingText ?? 'Loading', this.i18n) : this.retry() && hasRetryText ? retryText : normal;
  });

  protected readonly accessibleLabel = computed(() => resolveText(this.config().ariaLabel, this.i18n) || this.text());
  protected readonly errorText = computed(() => resolveText(this.error(), this.i18n));
  protected readonly context = computed<ILoadMoreContext>(() => ({
    $implicit: this.text(),
    loading: this.loading(),
    disabled: this.disabled() || this.loading(),
    request: () => this.request.emit()
  }));

  public readonly retry = input(false);
  public readonly visible = input(false);
  public readonly loading = input(false);
  public readonly disabled = input(false);
  public readonly error = input<ResolvableText | undefined>(undefined);
  public readonly config = input<ILoadMoreConfig>({});
  public readonly buttonTemplate = input<TemplateRef<ILoadMoreContext> | undefined>(undefined);
  public readonly request = output();
}
