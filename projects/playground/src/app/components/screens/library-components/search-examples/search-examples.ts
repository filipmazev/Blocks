import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { BX_I18N } from '@filip.mazev/blocks/core';
import { Button, Checkbox, ISearchRetryConfig, SearchInput } from '@filip.mazev/blocks/forms';
import { DemoI18nService } from '../form-examples/services/demo-i18n.service';
import { MockSearchStore } from './services/mock-search-store.service';

@Component({
  selector: 'app-search-examples',
  imports: [Button, Checkbox, SearchInput],
  providers: [MockSearchStore, DemoI18nService, { provide: BX_I18N, useExisting: DemoI18nService }],
  templateUrl: './search-examples.html',
  styleUrl: './search-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchExamples {
  private readonly i18n = inject(DemoI18nService);
  protected readonly remote = inject(MockSearchStore);
  protected readonly showLoadingText = signal(false);
  protected readonly readOnly = signal(false);
  protected readonly disabled = signal(false);
  protected readonly emptyText = computed(() => {
    this.i18n.version();

    return this.i18n.translate('searchEmpty');
  });

  protected readonly retryConfig: ISearchRetryConfig = { variant: 'tonal', color: 'accent' };

  protected changeLoadingText(show: boolean): void {
    this.showLoadingText.set(show);

    if (show && !this.remote.loading() && !this.readOnly() && !this.disabled()) void this.remote.search(this.remote.query());
  }
}
