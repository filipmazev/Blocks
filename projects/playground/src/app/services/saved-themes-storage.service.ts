import type { Signal, WritableSignal } from '@angular/core';

import { computed, inject, Injectable, signal } from '@angular/core';

import type { ISavedTheme } from '@playground/interfaces/isaved-theme.interface';
import type { IThemeStudioDocument } from '@playground/interfaces/itheme-studio-document.interface';

import { IndexedDbService, uuidv4 } from '@filip.mazev/blocks/core';

import {
  SAVED_THEME_LIMIT,
  SAVED_THEME_SCHEMA_VERSION,
  THEME_STORAGE_DB_NAME,
  THEME_STORAGE_STORE,
  THEME_STORAGE_VERSION
} from '@playground/shared/constants/theme-storage.constants';
import { isValidThemeName, normalizeThemeName } from '@playground/shared/helpers/theme-name.helpers';
import { isStudioDocument } from '@playground/shared/helpers/theme-studio-validation.helpers';

/** Typed repository for locally persisted custom themes, backed by the shared IndexedDbService. */
@Injectable({ providedIn: 'root' })
export class SavedThemesStorageService {
  private readonly indexedDbService = inject(IndexedDbService);

  /** All valid saved themes, newest first; the reactive source for dropdown and state. */
  public readonly themes: WritableSignal<readonly ISavedTheme[]> = signal([]);
  /** Whether IndexedDB is usable in this browsing context. False disables persistence operations. */
  public readonly available: WritableSignal<boolean> = signal(this.indexedDbService.supported);

  /** Whether an initial load or a later mutation request is in flight. */
  public readonly loading: WritableSignal<boolean> = signal(false);

  /** Human-readable persistence failure, cleared when a later operation succeeds. */
  public readonly error: WritableSignal<string> = signal('');

  /** Whether another theme can be created without exceeding the persisted limit. */
  public readonly canCreate: Signal<boolean> = computed(() => this.available() && this.themes().length < SAVED_THEME_LIMIT);
  /** Remaining create slots, clamped to zero. */
  public readonly remainingSlots: Signal<number> = computed(() => Math.max(0, SAVED_THEME_LIMIT - this.themes().length));

  private initialization: Promise<void> | undefined;
  private mutations: number = 0;

  /** Open the database and populate the saved-theme list; failure disables persistence without breaking rendering. */
  public initialize(): Promise<void> {
    return (this.initialization ??= this.load());
  }

  /** Retrieve a saved theme by its stable ID from the in-memory reactive list. */
  public get(id: string): ISavedTheme | undefined {
    return this.themes().find((theme) => theme.id === id);
  }

  /** Create and persist a new theme snapshot, enforcing the limit atomically.
   * @param name - User-defined theme name; trimmed and validated by the caller.
   * @param document - Complete serializable theme configuration.
   */
  public async create(name: string, document: IThemeStudioDocument): Promise<ISavedTheme> {
    this.validate(name, document);

    const now = Date.now();
    const theme: ISavedTheme = {
      id: uuidv4(),
      name: normalizeThemeName(name),
      document: structuredClone(document),
      createdAt: now,
      updatedAt: now,
      schemaVersion: SAVED_THEME_SCHEMA_VERSION
    };

    await this.withStore('readwrite', (store) =>
      this.request(store.getAll() as IDBRequest<ISavedTheme[]>).then((records) => {
        if (records.length >= SAVED_THEME_LIMIT) throw new Error(`You can save at most ${SAVED_THEME_LIMIT} themes.`);

        this.assertUniqueName(name, records);

        return this.request(store.put(theme));
      })
    );

    this.themes.update((themes) => [theme, ...themes]);
    this.error.set('');

    return theme;
  }

  /** Replace a saved theme's configuration, preserving its ID, name and creation time.
   * @param id - Stable saved-theme ID.
   * @param document - Complete serializable theme configuration.
   */
  public async update(id: string, document: IThemeStudioDocument): Promise<ISavedTheme> {
    const existing = this.require(id);

    this.validate(existing.name, document);

    const next: ISavedTheme = { ...existing, document: structuredClone(document), updatedAt: Date.now() };

    await this.withStore('readwrite', (store) => this.request(store.put(next)));

    this.themes.update((themes) => themes.map((theme) => (theme.id === id ? next : theme)));
    this.error.set('');

    return next;
  }

  /** Rename a saved theme without changing its ID, configuration or creation time.
   * @param id - Stable saved-theme ID.
   * @param name - New trimmed name.
   */
  public async rename(id: string, name: string): Promise<ISavedTheme> {
    const existing = this.require(id);

    this.validate(name, existing.document);

    const next: ISavedTheme = { ...existing, name: normalizeThemeName(name), updatedAt: Date.now() };

    await this.withStore('readwrite', async (store) => {
      const records = await this.request(store.getAll() as IDBRequest<ISavedTheme[]>);

      this.assertUniqueName(
        name,
        records.filter((theme) => theme.id !== id)
      );

      return this.request(store.put(next));
    });

    this.themes.update((themes) => themes.map((theme) => (theme.id === id ? next : theme)));
    this.error.set('');

    return next;
  }

  /** Delete a saved theme and free its slot immediately. */
  public async remove(id: string): Promise<void> {
    await this.withStore('readwrite', (store) => this.request(store.delete(id)));

    this.themes.update((themes) => themes.filter((theme) => theme.id !== id));
    this.error.set('');
  }

  //#region Helpers

  private async load(): Promise<void> {
    if (!this.indexedDbService.supported) {
      this.available.set(false);
      this.error.set('IndexedDB storage is unavailable in this browser.');

      return;
    }

    this.loading.set(true);

    try {
      const records = await this.readAll();
      const themes = records.filter((record) => this.isValidTheme(record)).sort((first, second) => second.createdAt - first.createdAt);

      this.themes.set(themes);
      this.available.set(true);
      this.error.set('');
    } catch (error) {
      this.available.set(false);
      this.error.set(this.describe(error, 'Saved themes could not be loaded. Storage is unavailable.'));
    } finally {
      this.loading.set(this.mutations > 0);
    }
  }

  private async database(): Promise<IDBDatabase> {
    return this.indexedDbService.open(THEME_STORAGE_DB_NAME, THEME_STORAGE_VERSION, [{ name: THEME_STORAGE_STORE, keyPath: 'id' }]);
  }

  private async readAll(): Promise<ISavedTheme[]> {
    const database = await this.database();

    return this.indexedDbService.getAll<ISavedTheme>(database, THEME_STORAGE_STORE);
  }

  private async withStore<T>(mode: IDBTransactionMode, operation: (store: IDBObjectStore) => Promise<T> | T): Promise<T> {
    ++this.mutations;
    this.loading.set(true);

    try {
      await this.initialize();

      const database = await this.database();

      return await this.indexedDbService.transaction(database, THEME_STORAGE_STORE, mode, operation);
    } catch (error) {
      this.error.set(this.describe(error, 'The theme could not be stored.'));

      throw error;
    } finally {
      --this.mutations;
      this.loading.set(this.mutations > 0);
    }
  }

  private request<T>(request: IDBRequest<T>): Promise<T> {
    return this.indexedDbService.request(request);
  }

  private require(id: string): ISavedTheme {
    const existing = this.get(id);

    if (!existing) throw new Error('The saved theme no longer exists.');

    return existing;
  }

  private isValidTheme(value: unknown): value is ISavedTheme {
    if (!value || typeof value !== 'object') return false;

    const record = value as Partial<ISavedTheme>;

    return (
      typeof record.id === 'string' &&
      record.id.length > 0 &&
      typeof record.name === 'string' &&
      isValidThemeName(record.name) &&
      isStudioDocument(record.document) &&
      Number.isFinite(record.createdAt) &&
      Number.isFinite(record.updatedAt) &&
      record.schemaVersion === SAVED_THEME_SCHEMA_VERSION
    );
  }

  private validate(name: string, document: IThemeStudioDocument): void {
    if (!isValidThemeName(name)) throw new Error('Enter a valid theme name.');

    if (!isStudioDocument(document)) throw new Error('The theme contains unsupported tokens or values.');
  }

  private assertUniqueName(name: string, themes: readonly ISavedTheme[]): void {
    if (themes.some((theme) => normalizeThemeName(theme.name).toLowerCase() === normalizeThemeName(name).toLowerCase())) {
      throw new Error('A saved theme already uses this name.');
    }
  }

  private describe(error: unknown, fallback: string): string {
    return error instanceof Error && error.message ? error.message : fallback;
  }

  //#endregion
}
