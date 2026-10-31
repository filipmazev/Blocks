import { computed, DestroyRef, inject, Injectable, signal } from '@angular/core';
import { IAutocompleteOption, ILoadMoreConfig, ILoadMoreRequest } from '@filip.mazev/blocks/forms';
import { ResolvableText } from '@filip.mazev/blocks/core';
import { AUTOCOMPLETE_OPTIONS } from '../constants/autocomplete-options.constants';

@Injectable()
export class AutocompleteDemoService {
  private readonly destroy = inject(DestroyRef);
  private readonly query = signal('');
  private readonly matches = computed(() => AUTOCOMPLETE_OPTIONS.filter((option) => option.value.toLowerCase().includes(this.query().toLowerCase())));
  public readonly options = signal<readonly IAutocompleteOption[]>([]);
  public readonly loading = signal(false);
  public readonly searching = signal(false);
  public readonly error = signal<ResolvableText | undefined>(undefined);
  public readonly hasMore = computed(() => this.options().length < this.matches().length);
  public readonly pageSize = signal(3);
  public readonly failNext = signal(false);
  public readonly status = signal('Ready');
  public readonly loadMoreConfig: ILoadMoreConfig = {
    text: 'Load more suggestions',
    loadingText: 'Loading suggestions',
    retryText: 'Retry request',
    variant: 'tonal',
    color: 'accent'
  };

  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    this.destroy.onDestroy(() => clearTimeout(this.timer));
  }

  public search(query: string): void {
    clearTimeout(this.timer);
    this.query.set(query);
    this.error.set(undefined);
    this.loading.set(true);
    this.searching.set(true);
    this.status.set('Replacing suggestions…');
    this.timer = setTimeout(() => {
      this.options.set(this.matches().slice(0, this.pageSize()));
      this.loading.set(false);
      this.searching.set(false);
      this.status.set('First page ready');
    }, 650);
  }

  public loadMore(request: ILoadMoreRequest): void {
    if (this.loading()) return;

    this.loading.set(true);
    this.error.set(undefined);
    this.status.set('Request source: ' + request.source);
    const fail = this.failNext() && request.source !== 'retry';
    this.failNext.set(false);
    this.timer = setTimeout(() => {
      if (fail) {
        this.error.set('The next page failed. Your results are kept.');
        this.status.set('Failed page retained. Choose Retry request.');
      } else {
        this.options.set(this.matches().slice(0, this.options().length + this.pageSize()));
        this.status.set(request.source === 'retry' ? 'Retry succeeded' : 'Page appended');
      }

      this.loading.set(false);
    }, 900);
  }

  public setPageSize(value: string | number | null): void {
    const size = Number(value);
    this.pageSize.set(Number.isFinite(size) ? Math.max(1, Math.min(24, Math.floor(size))) : 3);
    this.search(this.query());
  }
}
