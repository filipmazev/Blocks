import type { WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';

import type { IIndexedDbDemoRecord } from '@playground/components/screens/utilities/interfaces/iindexed-db-demo-record.interface';

import { IndexedDbService, uuidv4 } from '@filip.mazev/blocks/core';
import { Button } from '@filip.mazev/blocks/forms';
import { Alert, Card, Stack } from '@filip.mazev/blocks/primitives';

import { INDEXED_DB_DEMO_DATABASE, INDEXED_DB_DEMO_STORE } from '@playground/components/screens/utilities/constants/indexed-db-demo.constants';

@Component({
  selector: 'app-indexed-db',
  imports: [Alert, Button, Card, Stack],
  templateUrl: './indexed-db.html',
  styleUrl: './indexed-db.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexedDb {
  private readonly destroyRef = inject(DestroyRef);
  private readonly indexedDbService = inject(IndexedDbService);

  protected readonly supported: boolean = this.indexedDbService.supported;

  protected readonly loading: WritableSignal<boolean> = signal(false);
  protected readonly ready: WritableSignal<boolean> = signal(false);

  protected readonly records: WritableSignal<readonly IIndexedDbDemoRecord[]> = signal([]);

  protected readonly status: WritableSignal<string> = signal('');
  protected readonly error: WritableSignal<string> = signal('');

  private database: IDBDatabase | null = null;
  private counter: number = 0;

  constructor() {
    this.destroyRef.onDestroy(() => this.indexedDbService.close(INDEXED_DB_DEMO_DATABASE));

    void this.initialize();
  }

  protected async addRecord(): Promise<void> {
    await this.run(async () => {
      const record: IIndexedDbDemoRecord = { id: uuidv4(), label: `Record ${++this.counter}`, createdAt: Date.now() };

      await this.indexedDbService.put(this.requireDatabase(), INDEXED_DB_DEMO_STORE, record);
      await this.reload();
      this.status.set(`Added "${record.label}".`);
    });
  }

  protected async countRecords(): Promise<void> {
    await this.run(async () => {
      const count = await this.indexedDbService.count(this.requireDatabase(), INDEXED_DB_DEMO_STORE);

      this.status.set(`${count} record${count === 1 ? '' : 's'} stored.`);
    });
  }

  protected async clearRecords(): Promise<void> {
    await this.run(async () => {
      await this.indexedDbService.clear(this.requireDatabase(), INDEXED_DB_DEMO_STORE);
      this.records.set([]);
      this.status.set('Cleared every record.');
    });
  }

  //#region Helpers

  private async initialize(): Promise<void> {
    if (!this.supported) {
      this.error.set('IndexedDB is unavailable in this browsing context.');

      return;
    }

    await this.run(async () => {
      const database = await this.indexedDbService.open(INDEXED_DB_DEMO_DATABASE, 1, [{ name: INDEXED_DB_DEMO_STORE, keyPath: 'id' }]);

      if (this.destroyRef.destroyed) {
        this.indexedDbService.close(INDEXED_DB_DEMO_DATABASE);

        return;
      }

      this.database = database;
      await this.reload();
      this.ready.set(true);
      this.counter = this.records().length;
      this.status.set('Demo database ready. Records persist across refresh.');
    });
  }

  private requireDatabase(): IDBDatabase {
    if (!this.database) throw new Error('The demo database is not open yet.');

    return this.database;
  }

  private async reload(): Promise<void> {
    const records = await this.indexedDbService.getAll<IIndexedDbDemoRecord>(this.requireDatabase(), INDEXED_DB_DEMO_STORE);

    this.records.set(records.sort((first, second) => second.createdAt - first.createdAt));
  }

  private async run(operation: () => Promise<void>): Promise<void> {
    if (this.loading()) return;

    this.loading.set(true);

    try {
      this.error.set('');
      await operation();
    } catch (caught) {
      this.error.set(caught instanceof Error && caught.message ? caught.message : 'The storage operation failed.');
    } finally {
      this.loading.set(false);
    }
  }

  //#endregion
}
