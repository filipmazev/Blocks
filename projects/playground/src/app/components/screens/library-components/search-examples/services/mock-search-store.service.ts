import type { WritableSignal } from '@angular/core';

import { DestroyRef, inject, Injectable, signal } from '@angular/core';

import { ResolvableText } from '@filip.mazev/blocks/core';

import { COMPONENT_EXAMPLES } from '@playground/components/screens/library-components/component-demo/constants/component-catalog.constants';
import { delay } from '@playground/components/screens/library-components/form-examples/helpers/delay.helpers';

@Injectable()
export class MockSearchStore {
  public readonly query: WritableSignal<string> = signal('');
  public readonly completedQuery: WritableSignal<string> = signal('');

  public readonly results: WritableSignal<readonly string[]> = signal<readonly string[]>([]);

  public readonly loading: WritableSignal<boolean> = signal(false);

  public readonly error: WritableSignal<ResolvableText | undefined> = signal<ResolvableText | undefined>(undefined);
  public readonly requests: WritableSignal<readonly string[]> = signal<readonly string[]>([]);

  private controller?: AbortController;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.controller?.abort());
    void this.search('');
  }

  public async search(query: string, fail = false): Promise<void> {
    this.controller?.abort();

    const controller = new AbortController();

    this.controller = controller;
    this.query.set(query);
    this.loading.set(true);
    this.error.set(undefined);

    try {
      // The application owns debouncing, cancellation and the simulated API request.
      await delay(250, controller.signal);
      this.record(`Request: ${query || '(all components)'}`);
      await delay(800, controller.signal);

      if (controller.signal.aborted) return;

      if (fail) throw new Error('Simulated request failure');

      const term = query.trim().toLocaleLowerCase();
      const results = COMPONENT_EXAMPLES.map((entry) => entry.title).filter((title) => title.toLocaleLowerCase().includes(term));

      this.results.set(results);
      this.completedQuery.set(query);
      this.record(`Success: ${results.length} results`);
    } catch {
      if (controller.signal.aborted) return;

      this.error.set({ key: 'searchError' });
      this.record('Failed: previous results retained; retry the same query');
    } finally {
      if (this.controller === controller) this.loading.set(false);
    }
  }

  //#region Helpers

  private record(message: string): void {
    this.requests.update((items) => [message, ...items].slice(0, 8));
  }

  //#endregion
}
