import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { BX_I18N } from '@filip.mazev/blocks/core';
import { Button, Checkbox, ISearchRetryConfig, SearchInput } from '@filip.mazev/blocks/forms';

import { DemoI18nService } from '@playground/components/screens/library-components/form-examples/services/demo-i18n.service';
import { MockSearchStore } from '@playground/components/screens/library-components/search-examples/services/mock-search-store.service';

@Component({
  selector: 'app-search-examples',
  imports: [Button, Checkbox, SearchInput],
  providers: [MockSearchStore, DemoI18nService, { provide: BX_I18N, useExisting: DemoI18nService }],
  templateUrl: './search-examples.html',
  styleUrl: './search-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchExamples {
  private readonly demoI18nService = inject(DemoI18nService);

  protected readonly mockSearchStore = inject(MockSearchStore);

  protected readonly showLoadingText: WritableSignal<boolean> = signal(false);
  protected readonly readOnly: WritableSignal<boolean> = signal(false);
  protected readonly disabled: WritableSignal<boolean> = signal(false);

  protected readonly emptyText: Signal<string> = computed(() => {
    this.demoI18nService.version();

    return this.demoI18nService.translate('searchEmpty');
  });

  protected readonly retryConfig: ISearchRetryConfig = { variant: 'tonal', color: 'accent' };

  protected changeLoadingText(show: boolean): void {
    this.showLoadingText.set(show);

    if (show && !this.mockSearchStore.loading() && !this.readOnly() && !this.disabled()) void this.mockSearchStore.search(this.mockSearchStore.query());
  }
}
