import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT, inject, Injectable, OnDestroy, PLATFORM_ID } from '@angular/core';

import type { IIndexedDbStore } from '@core/interfaces/iindexed-db-store.interface';

/**
 * Reusable, typed IndexedDB access with promise-based requests and transactions.
 *
 * The service owns one open database per name, upgrades object stores through a declarative schema, and translates request, transaction, quota and
 * availability failures into rejected promises. Server rendering and contexts without IndexedDB report `supported` false and reject opens without throwing
 * synchronously.
 */
@Injectable({ providedIn: 'root' })
export class IndexedDbService implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly databases: Map<string, IDBDatabase> = new Map();
  private readonly openings: Map<string, Promise<IDBDatabase>> = new Map();

  private destroyed: boolean = false;

  /** Close every open database during teardown. */
  public ngOnDestroy(): void {
    this.destroyed = true;

    for (const database of this.databases.values()) database.close();

    this.databases.clear();
    this.openings.clear();
  }

  /** Whether IndexedDB is available in this browsing context; false disables persistence operations. */
  public get supported(): boolean {
    try {
      return !this.destroyed && isPlatformBrowser(this.platformId) && !!this.document.defaultView?.indexedDB;
    } catch {
      return false;
    }
  }

  /**
   * Open (or upgrade) a named database and return its shared connection.
   *
   * @param name - Database name; repeated calls with the same name reuse one connection.
   * @param version - Integer version; increment to run the store upgrade again.
   * @param stores - Object-store schema created when the version changes.
   * @returns The open database, rejected on blocked, unavailable or failed opening.
   */
  public open(name: string, version: number, stores: readonly IIndexedDbStore[]): Promise<IDBDatabase> {
    const existing = this.databases.get(name);

    if (!this.supported) return Promise.reject(new Error('IndexedDB storage is unavailable in this context.'));

    if (existing?.version === version) return Promise.resolve(existing);

    if (existing) this.close(name);

    const pending = this.openings.get(name);

    if (pending) return pending.then(() => this.open(name, version, stores));

    const win = this.document.defaultView;
    const opening = new Promise<IDBDatabase>((resolve, reject) => {
      if (!win?.indexedDB) {
        reject(new Error('This browser does not support IndexedDB storage.'));

        return;
      }

      const request = win.indexedDB.open(name, version);

      let abandoned = false;

      request.onupgradeneeded = () => {
        if (abandoned || this.destroyed) {
          request.transaction?.abort();

          return;
        }

        const database = request.result;
        const transaction = request.transaction;

        if (!transaction) return;

        try {
          for (const store of stores) {
            const objectStore = database.objectStoreNames.contains(store.name)
              ? transaction.objectStore(store.name)
              : database.createObjectStore(store.name, { keyPath: store.keyPath ?? null, autoIncrement: store.autoIncrement ?? false });

            for (const index of store.indexes ?? []) {
              if (!objectStore.indexNames.contains(index.name)) objectStore.createIndex(index.name, index.keyPath, index.options);
            }
          }
        } catch (error) {
          transaction.abort();
          reject(error);
        }
      };

      request.onsuccess = () => {
        const database = request.result;

        if (abandoned || this.destroyed) {
          database.close();
          reject(new Error('The database connection was closed before opening completed.'));

          return;
        }

        this.databases.set(name, database);
        database.onversionchange = () => {
          database.close();
          this.databases.delete(name);
        };

        resolve(database);
      };

      request.onerror = () => reject(request.error ?? new Error('The database could not be opened.'));
      request.onblocked = () => {
        abandoned = true;
        reject(new Error('The database was blocked by another tab. Close its other connections and retry.'));
      };
    });

    this.openings.set(name, opening);
    void opening.then(
      () => this.openings.delete(name),
      () => this.openings.delete(name)
    );

    return opening;
  }

  /**
   * Close one open database by name; subsequent opens start a fresh connection.
   *
   * @param name - Database name previously opened by this service.
   */
  public close(name: string): void {
    const database = this.databases.get(name);

    if (!database) return;

    database.close();
    this.databases.delete(name);
  }

  /**
   * Run one transaction against a store, resolving with the operation's result and rejecting on request or transaction failure.
   *
   * @typeParam T - Result type of the store-scoped operation.
   * @param database - Open database owning the store.
   * @param store - Target object-store name.
   * @param mode - Transaction mode; writes use `readwrite`.
   * @param operation - Store-scoped work; enqueue requests immediately or after awaiting this service's requests. Do not await timers, network or unrelated work.
   * @returns The operation result after commit; rejects and aborts on operation failure, request errors or quota failure.
   */
  public transaction<T>(database: IDBDatabase, store: string, mode: IDBTransactionMode, operation: (store: IDBObjectStore) => Promise<T> | T): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const transaction = database.transaction(store, mode);
      const objectStore = transaction.objectStore(store);

      let result: T;
      let operationComplete = false;
      let committed = false;

      transaction.oncomplete = () => {
        committed = true;

        if (operationComplete) resolve(result);
      };

      transaction.onabort = () => reject(transaction.error ?? new Error('The storage transaction was aborted.'));
      transaction.onerror = () => reject(transaction.error ?? new Error('The storage transaction failed.'));

      const fail = (error: unknown): void => {
        if (!committed) {
          try {
            transaction.abort();
          } catch {
            // The browser may already have aborted the transaction.
          }
        }

        reject(error);
      };

      try {
        void Promise.resolve(operation(objectStore)).then((value) => {
          result = value;
          operationComplete = true;

          if (committed) resolve(value);
        }, fail);
      } catch (error) {
        fail(error);
      }
    });
  }

  /**
   * Retrieve one record by its key.
   *
   * @typeParam T - Record type stored under the key.
   * @param database - Open database.
   * @param store - Object-store name.
   * @param key - Record key.
   * @returns The matching record, or undefined when absent.
   */
  public get<T>(database: IDBDatabase, store: string, key: IDBValidKey): Promise<T | undefined> {
    return this.transaction(database, store, 'readonly', (objectStore) => this.request(objectStore.get(key) as IDBRequest<T | undefined>));
  }

  /**
   * Retrieve every record in a store.
   *
   * @typeParam T - Record type stored in the object store.
   * @param database - Open database.
   * @param store - Object-store name.
   * @returns All records in key order.
   */
  public getAll<T>(database: IDBDatabase, store: string): Promise<T[]> {
    return this.transaction(database, store, 'readonly', (objectStore) => this.request(objectStore.getAll() as IDBRequest<T[]>));
  }

  /**
   * Insert or replace a record.
   *
   * @param database - Open database.
   * @param store - Object-store name.
   * @param value - Record to store.
   * @param key - Explicit key; omit for key-path or auto-increment stores.
   * @returns The resolved key.
   */
  public put(database: IDBDatabase, store: string, value: unknown, key?: IDBValidKey): Promise<IDBValidKey> {
    return this.transaction(database, store, 'readwrite', (objectStore) =>
      this.request(key === undefined ? objectStore.put(value) : objectStore.put(value, key))
    );
  }

  /**
   * Delete one record by key.
   *
   * @param database - Open database.
   * @param store - Object-store name.
   * @param key - Record key.
   */
  public delete(database: IDBDatabase, store: string, key: IDBValidKey): Promise<void> {
    return this.transaction(database, store, 'readwrite', (objectStore) => this.request(objectStore.delete(key) as IDBRequest<undefined>));
  }

  /**
   * Remove every record from a store.
   *
   * @param database - Open database.
   * @param store - Object-store name.
   */
  public clear(database: IDBDatabase, store: string): Promise<void> {
    return this.transaction(database, store, 'readwrite', (objectStore) => this.request(objectStore.clear() as IDBRequest<undefined>));
  }

  /**
   * Count records in a store.
   *
   * @param database - Open database.
   * @param store - Object-store name.
   * @returns The number of records.
   */
  public count(database: IDBDatabase, store: string): Promise<number> {
    return this.transaction(database, store, 'readonly', (objectStore) => this.request(objectStore.count()));
  }

  /**
   * Resolve a single IndexedDB request to its result, rejecting on request failure.
   *
   * @typeParam T - Result type of the native request.
   * @param request - Native request produced inside a transaction operation.
   * @returns The request's resolved result.
   */
  public request<T>(request: IDBRequest<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error ?? new Error('The storage request failed.'));
    });
  }
}
