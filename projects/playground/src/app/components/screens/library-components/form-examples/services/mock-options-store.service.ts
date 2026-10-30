import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { IBxSelectOption, ILoadMoreConfig, ILoadMoreRequest } from '@filip.mazev/blocks/forms';
import { MockFormsApi } from './mock-forms-api.service';

@Injectable()
export class MockOptionsStore {
  private readonly api = inject(MockFormsApi);
  public readonly options = signal<readonly IBxSelectOption<string>[]>([]);
  public readonly loading = signal(false);
  public readonly hasMore = signal(true);
  public readonly total = signal<number | undefined>(undefined);
  public readonly selectableTotal = signal<number | undefined>(undefined);
  public readonly error = signal<string | undefined>(undefined);
  public readonly query = signal('');
  public readonly pageSize = signal(3);
  public readonly failNext = signal(false);
  public readonly requests = signal<readonly string[]>([]);
  public readonly config = signal<ILoadMoreConfig>({
    buttonMode: 'auto',
    text: { key: 'loadMore' },
    loadingText: { key: 'loading' },
    retryText: { key: 'retry' },
    variant: 'tonal',
    color: 'accent'
  });

  private requestId = 0;
  private controller?: AbortController;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.controller?.abort());
    void this.load({ source: 'button' });
  }

  public async load(request: ILoadMoreRequest): Promise<void> {
    if (this.loading() || (!this.hasMore() && !this.error())) return;

    this.controller?.abort();
    const controller = new AbortController();
    const id = ++this.requestId;
    const fail = this.failNext();
    this.controller = controller;
    this.failNext.set(false);
    this.loading.set(true);
    this.error.set(undefined);
    this.record(`${request.source}: requesting ${this.pageSize()} items at offset ${this.options().length}`);

    try {
      const page = await this.api.options(this.query(), this.options().length, this.pageSize(), fail, controller.signal);

      if (id !== this.requestId) return;

      this.options.update((items) => [...items, ...page.items]);
      this.hasMore.set(page.hasMore);
      this.total.set(page.total);
      this.selectableTotal.set(page.selectableTotal);
      this.record(`success: ${page.items.length} items received`);
    } catch (error) {
      if (id !== this.requestId || controller.signal.aborted) return;

      this.error.set(error instanceof Error ? error.message : 'Request failed.');
      this.record('failed: items retained; retry is available');
    } finally {
      if (id === this.requestId) this.loading.set(false);
    }
  }

  public search(query: string): void {
    this.controller?.abort();
    ++this.requestId;
    this.loading.set(false);
    this.query.set(query);
    this.options.set([]);
    this.total.set(undefined);
    this.selectableTotal.set(undefined);
    this.hasMore.set(true);
    this.error.set(undefined);
    void this.load({ source: 'button' });
  }

  public fail(): void {
    this.failNext.set(true);
    void this.load({ source: 'button' });
  }

  //#region Helpers

  private record(message: string): void {
    this.requests.update((items) => [message, ...items].slice(0, 8));
  }

  //#endregion
}
