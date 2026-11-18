import type { Signal, WritableSignal } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { afterRenderEffect, computed, DOCUMENT, inject, Injectable, OnDestroy, PLATFORM_ID, signal, untracked } from '@angular/core';

import type { BxThemeId, ThemeCssVariable } from '@filip.mazev/blocks/core';
import type { ISavedTheme } from '@playground/interfaces/isaved-theme.interface';
import type { IThemeStudioDocument } from '@playground/interfaces/itheme-studio-document.interface';
import type { IThemeStudioSnapshot } from '@playground/interfaces/itheme-studio-snapshot.interface';
import type { StudioColorToken, StudioMode, StudioValues } from '@playground/types/theme-studio.types';

import { BORDER_VALUES, RADIUS_VALUES, SHADOW_VALUES, SPACING_VALUES, ThemingService } from '@filip.mazev/blocks/core';

import { formatCatalogColor } from '@playground/components/screens/token-catalog/helpers/token-color.helpers';
import { SELECTED_SAVED_THEME_KEY } from '@playground/shared/constants/theme-storage.constants';
import { STUDIO_CONTROLS } from '@playground/shared/constants/theme-studio.constants';
import { STUDIO_HISTORY_LIMIT } from '@playground/shared/constants/theme-studio-history.constants';
import { studioColorContrast } from '@playground/shared/helpers/theme-studio-contrast.helpers';
import { exportStudioScss } from '@playground/shared/helpers/theme-studio-export.helpers';
import { boundStudioHistory } from '@playground/shared/helpers/theme-studio-history.helpers';
import { studioOppositeColor } from '@playground/shared/helpers/theme-studio-opposite.helpers';
import { randomStudioTheme } from '@playground/shared/helpers/theme-studio-random.helpers';
import { isStudioDocument, normalizeStudioValue } from '@playground/shared/helpers/theme-studio-validation.helpers';

import { SavedThemesStorageService } from './saved-themes-storage.service';
import { ThemeStudioPreviewService } from './theme-studio-preview.service';

@Injectable({ providedIn: 'root' })
export class ThemeStudioService implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly themeStudioPreviewService = inject(ThemeStudioPreviewService);
  private readonly savedThemesStorageService = inject(SavedThemesStorageService);

  public readonly themingService = inject(ThemingService);

  private readonly modeBaselines: WritableSignal<Readonly<Record<StudioMode, StudioValues>>> = signal({ light: {}, dark: {} });
  private readonly manualColors: WritableSignal<readonly string[]> = signal([]);
  private readonly shared: WritableSignal<StudioValues> = signal({});
  private readonly light: WritableSignal<StudioValues> = signal({});
  private readonly dark: WritableSignal<StudioValues> = signal({});
  private readonly past: WritableSignal<readonly IThemeStudioSnapshot[]> = signal([]);
  private readonly future: WritableSignal<readonly IThemeStudioSnapshot[]> = signal([]);

  private readonly transaction: WritableSignal<IThemeStudioSnapshot | null> = signal(null);

  private readonly autoResolveEnabled: WritableSignal<boolean> = signal(true);
  private readonly undoLimited: WritableSignal<boolean> = signal(false);
  private readonly forcedColors: WritableSignal<boolean> = signal(false);

  private readonly editedText: WritableSignal<Readonly<Record<string, string>>> = signal({});
  private readonly errors: WritableSignal<Readonly<Record<string, string>>> = signal({});

  private readonly referenceDocument: WritableSignal<IThemeStudioDocument | null> = signal(null);

  private readonly onForcedColors: (event: MediaQueryListEvent) => void = (event) => this.forcedColors.set(event.matches);

  public readonly open: WritableSignal<boolean> = signal(false);
  public readonly preview: WritableSignal<boolean> = signal(true);

  public readonly autoResolve: Signal<boolean> = computed(() => this.autoResolveEnabled());
  public readonly baseline: Signal<StudioValues> = computed(() => this.modeBaselines()[this.themingService.activeTheme()]);

  public readonly status: WritableSignal<string> = signal('');

  public readonly selectedSavedThemeId: WritableSignal<string | null> = signal(null);

  public readonly revision: Signal<number> = this.themeStudioPreviewService.revision;

  public readonly suspended: Signal<boolean> = computed(() => this.themingService.highContrast() || this.forcedColors());
  public readonly themeDocument: Signal<IThemeStudioDocument> = computed(() => ({
    version: 1,
    palette: this.themingService.palette(),
    shared: this.shared(),
    light: this.light(),
    dark: this.dark()
  }));
  public readonly scss: Signal<string> = computed(() => exportStudioScss(this.themeDocument()));
  public readonly overrideCount: Signal<number> = computed(
    () => Object.keys(this.shared()).length + Object.keys(this.light()).length + Object.keys(this.dark()).length
  );
  public readonly invalidCount: Signal<number> = computed(() => Object.keys(this.errors()).length);
  public readonly canUndo: Signal<boolean> = computed(
    () => this.past().length > 0 || (this.transaction() !== null && !this.sameSnapshot(this.transaction(), this.snapshot()))
  );
  public readonly canRedo: Signal<boolean> = computed(
    () => this.future().length > 0 && (this.transaction() === null || this.sameSnapshot(this.transaction(), this.snapshot()))
  );
  public readonly undoHint: Signal<string> = computed(() =>
    this.canUndo()
      ? ''
      : this.undoLimited()
        ? `Undo limit reached. History retains at most ${STUDIO_HISTORY_LIMIT} changes within 2 MiB; older changes were discarded.`
        : 'No earlier theme changes to undo.'
  );
  public readonly redoHint: Signal<string> = computed(() =>
    this.canRedo() ? '' : 'Redo limit reached: this is the latest retained theme. A new edit clears the redo branch.'
  );
  public readonly savedThemes: Signal<readonly ISavedTheme[]> = computed(() => this.savedThemesStorageService.themes());
  public readonly storageAvailable: Signal<boolean> = computed(() => this.savedThemesStorageService.available());
  public readonly storageLoading: Signal<boolean> = computed(() => this.savedThemesStorageService.loading());
  public readonly storageError: Signal<string> = computed(() => this.savedThemesStorageService.error());
  public readonly hasSaveableCustomization: Signal<boolean> = computed(() => (this.selectedSavedThemeId() !== null ? this.dirty() : this.overrideCount() > 0));
  public readonly canSaveNew: Signal<boolean> = computed(
    () => this.hasSaveableCustomization() && this.invalidCount() === 0 && !this.storageLoading() && this.savedThemesStorageService.canCreate()
  );
  public readonly remainingThemeSlots: Signal<number> = computed(() => this.savedThemesStorageService.remainingSlots());
  public readonly selectedSavedTheme: Signal<ISavedTheme | null> = computed(() => {
    const id = this.selectedSavedThemeId();

    return id ? (this.savedThemesStorageService.get(id) ?? null) : null;
  });
  public readonly dirty: Signal<boolean> = computed(() => {
    const reference = this.referenceDocument();

    const current = this.themeDocument();

    return (
      reference !== null &&
      ((this.selectedSavedThemeId() !== null && reference.palette !== current.palette) ||
        !this.sameValues(reference.shared, current.shared) ||
        !this.sameValues(reference.light, current.light) ||
        !this.sameValues(reference.dark, current.dark))
    );
  });
  public readonly canSaveChanges: Signal<boolean> = computed(
    () => this.selectedSavedThemeId() !== null && this.dirty() && this.invalidCount() === 0 && !this.storageLoading()
  );

  private initialization: Promise<void> | undefined;
  private selectionRevision: number = 0;
  private media: MediaQueryList | undefined;
  private colorContext: CanvasRenderingContext2D | null = null;

  constructor() {
    this.referenceDocument.set(structuredClone(this.themeDocument()));
    this.initializeSavedThemes();

    const win = isPlatformBrowser(this.platformId) ? this.document.defaultView : null;

    if (win) {
      this.media = win.matchMedia('(forced-colors: active)');
      this.forcedColors.set(this.media.matches);
      this.media.addEventListener('change', this.onForcedColors);
    }

    afterRenderEffect(() => {
      const palette = this.themingService.palette();

      this.modeBaselines.set({ light: this.measureBaseline(palette, 'light'), dark: this.measureBaseline(palette, 'dark') });
      untracked(() => this.syncAutomaticColors());
    });

    afterRenderEffect(() => {
      const values = { ...this.shared(), ...(this.themingService.activeTheme() === 'dark' ? this.dark() : this.light()) };
      const enabled = this.preview() && !this.suspended();

      untracked(() => this.themeStudioPreviewService.apply(enabled ? values : {}));
    });
  }

  public ngOnDestroy(): void {
    this.media?.removeEventListener('change', this.onForcedColors);
    this.themeStudioPreviewService.apply({});
  }

  public edit(name: ThemeCssVariable, raw: string, mode: StudioMode = this.themingService.activeTheme()): void {
    const key = this.editKey(name, mode);
    const value = normalizeStudioValue(name, raw);
    const control = STUDIO_CONTROLS.find((item) => item.name === name);
    const property =
      control?.family === 'Colors'
        ? 'color'
        : control?.family === 'Shadows'
          ? 'box-shadow'
          : name === '--bx-border-style'
            ? 'border-style'
            : name === '--bx-border-width'
              ? 'border-width'
              : control?.family === 'Spacing'
                ? 'padding'
                : 'border-radius';
    const valid = value !== null && (this.document.defaultView?.CSS.supports(property, value) ?? true);

    if (this.editedText()[key] === raw) return;

    this.recordChange();
    this.editedText.update((text) => ({ ...text, [key]: raw }));
    this.errors.update((errors) => {
      const next = { ...errors };

      if (valid) Reflect.deleteProperty(next, key);
      else next[key] = `Enter a supported value. ${control?.hint ?? ''} Last valid preview is retained.`;

      return next;
    });

    if (valid) {
      this.valuesFor(name, mode).update((values) => ({ ...values, [name]: value }));

      if (control?.family === 'Colors') {
        const sourceKey = this.editKey(name);
        const matchesAuto = mode !== this.themingService.activeTheme() && this.colorMatchesAuto(name, mode);

        this.manualColors.update((keys) => {
          const next = [...new Set([...keys, sourceKey, key])];

          return matchesAuto ? next.filter((entry) => entry !== key) : next;
        });

        if (matchesAuto) {
          this.editedText.update((text) => Object.fromEntries(Object.entries(text).filter(([entry]) => entry !== key)));
        }

        this.syncAutomaticColors();
      }
    }
  }

  public value(name: ThemeCssVariable, mode: StudioMode = this.themingService.activeTheme()): string {
    return this.editedText()[this.editKey(name, mode)] ?? this.valuesFor(name, mode)()[name] ?? this.modeBaselines()[mode][name] ?? '';
  }

  public base(name: ThemeCssVariable): string {
    return this.baseline()[name] ?? '';
  }

  public error(name: ThemeCssVariable, mode: StudioMode = this.themingService.activeTheme()): string {
    return this.errors()[this.editKey(name, mode)] ?? '';
  }

  public overridden(name: ThemeCssVariable, mode: StudioMode = this.themingService.activeTheme()): boolean {
    return this.valuesFor(name, mode)()[name] !== undefined || this.editedText()[this.editKey(name, mode)] !== undefined;
  }

  public effective(name: ThemeCssVariable, mode: StudioMode = this.themingService.activeTheme()): string {
    return this.valuesFor(name, mode)()[name] ?? this.modeBaselines()[mode][name] ?? '';
  }

  public reset(name: ThemeCssVariable, mode: StudioMode = this.themingService.activeTheme()): void {
    this.finishEdit();
    this.recordChange();

    const color = STUDIO_CONTROLS.find((control) => control.name === name)?.family === 'Colors';
    const opposite: StudioMode = mode === 'light' ? 'dark' : 'light';
    const keys = color ? [this.editKey(name, mode), this.editKey(name, opposite)] : [this.editKey(name, mode)];

    for (const target of color ? [mode, opposite] : [mode]) {
      this.valuesFor(name, target).update((values) => {
        const next = { ...values };

        Reflect.deleteProperty(next, name);

        return next;
      });
    }

    this.editedText.update((values) => Object.fromEntries(Object.entries(values).filter(([key]) => !keys.includes(key))));
    this.errors.update((values) => Object.fromEntries(Object.entries(values).filter(([key]) => !keys.includes(key))));
    this.manualColors.update((entries) => entries.filter((key) => !keys.includes(key)));

    if (color) this.resumeAutomaticColor(name, opposite);

    this.syncAutomaticColors();
    this.status.set(`Reset ${name} to its original ${mode} value${color ? ' and automatically resolved its opposite mode' : ''}.`);
  }

  public differsFromAuto(name: ThemeCssVariable, mode: StudioMode): boolean {
    if (!this.manualColors().includes(this.editKey(name, mode))) return false;

    const automatic = this.resolveAutomaticColor(name, mode);
    const current = this.colorContext ? formatCatalogColor(this.effective(name, mode), this.colorContext)?.hex : undefined;

    return automatic !== undefined && current !== automatic;
  }

  public useAutoColor(name: ThemeCssVariable, mode: StudioMode): void {
    this.finishEdit();
    this.recordChange();
    this.resumeAutomaticColor(name, mode);
    this.syncAutomaticColors();
    this.status.set(`Restored automatic ${mode} color for ${name}.`);
  }

  public resetAll(): void {
    const saved = this.selectedSavedTheme();
    const next: IThemeStudioDocument = saved
      ? structuredClone(saved.document)
      : { version: 1, palette: this.themingService.palette(), shared: {}, light: {}, dark: {} };

    ++this.selectionRevision;
    this.applyDocument(
      next,
      saved ? `Restored saved theme "${saved.name}" and its original palette.` : 'Cleared Studio overrides and kept the current palette.'
    );
    this.referenceDocument.set(structuredClone(next));
  }

  public applyDocument(next: IThemeStudioDocument, message: string): boolean {
    if (!isStudioDocument(next)) {
      this.status.set('The theme contains unsupported tokens or values. Your draft is unchanged.');

      return false;
    }

    this.finishEdit();
    this.recordChange();
    this.restore({ document: structuredClone(next), mode: this.themingService.applicationTheme(), text: {}, errors: {} });
    this.status.set(message);

    return true;
  }

  public updateShared(values: StudioValues, remove: readonly string[] = []): void {
    this.updateMaps(
      { ...this.themeDocument(), shared: { ...Object.fromEntries(Object.entries(this.shared()).filter(([name]) => !remove.includes(name))), ...values } },
      [...remove, ...Object.keys(values)]
    );
  }

  public updateColors(light: StudioValues, dark: StudioValues, remove: readonly string[] = []): void {
    const strip = (values: StudioValues) => Object.fromEntries(Object.entries(values).filter(([name]) => !remove.includes(name)));

    this.updateMaps({ ...this.themeDocument(), light: { ...strip(this.light()), ...light }, dark: { ...strip(this.dark()), ...dark } }, [
      ...remove,
      ...Object.keys(light),
      ...Object.keys(dark)
    ]);
    this.syncAutomaticColors();
  }

  public setAutoResolve(enabled: boolean): void {
    if (enabled === this.autoResolve()) return;

    this.finishEdit();
    this.recordChange();
    this.autoResolveEnabled.set(enabled);

    if (enabled) this.syncAutomaticColors();
  }

  public automatic(name: ThemeCssVariable, mode: StudioMode): boolean {
    return this.autoResolve() && !this.manualColors().includes(this.editKey(name, mode));
  }

  public oppositeMode(): StudioMode {
    return this.themingService.activeTheme() === 'dark' ? 'light' : 'dark';
  }

  public sample(palette: BxThemeId, mode: StudioMode): StudioValues {
    return this.measureBaseline(palette, mode);
  }

  public beginEdit(): void {
    if (!this.transaction()) this.transaction.set(this.snapshot());
  }

  public finishEdit(): void {
    const start = this.transaction();

    this.transaction.set(null);

    if (start && !this.sameSnapshot(start, this.snapshot())) {
      this.setHistory([...this.past(), start], []);
    }
  }

  public cancelEdit(): void {
    const start = this.transaction();

    this.transaction.set(null);

    if (start) this.restore(start);
  }

  public setPalette(palette: BxThemeId): void {
    if (palette === this.themingService.palette()) return;

    this.finishEdit();
    this.recordChange();
    this.themingService.setPalette(palette);
  }

  public randomize(): void {
    this.finishEdit();
    this.recordChange();

    const styles = this.document.defaultView?.getComputedStyle(this.document.documentElement);
    const canvas = this.document.createElement('canvas');

    canvas.width = 1;
    canvas.height = 1;

    const context = canvas.getContext('2d', { willReadFrequently: true });
    const next = randomStudioTheme({
      current: this.themeDocument(),
      hex: (color) => (context ? formatCatalogColor(color, context)?.hex : undefined),
      contrast: (foreground, background) => (context ? studioColorContrast(foreground, background, context) : 0),
      sample: (palette, mode) => this.sample(palette, mode),
      color: (family, shade) => styles?.getPropertyValue(`--bx-color-${family}-${shade}`).trim() ?? ''
    });

    this.restore({ document: next, mode: this.themingService.applicationTheme(), text: {}, errors: {}, manualColors: [] });
    this.status.set('Randomized palette, neutral base, menu colors, corners and shadows. Spacing is unchanged. Undo restores your previous draft.');
  }

  public undo(): void {
    this.finishEdit();

    const previous = this.past().at(-1);

    if (!previous) return;

    this.setHistory(this.past().slice(0, -1), [...this.future(), this.snapshot()]);
    this.restore(previous);
    this.status.set('Theme change undone.');
  }

  public redo(): void {
    this.finishEdit();

    const next = this.future().at(-1);

    if (!next) return;

    this.setHistory([...this.past(), this.snapshot()], this.future().slice(0, -1));
    this.restore(next);
    this.status.set('Theme change redone.');
  }

  public resolveAutomaticColor(name: ThemeCssVariable, mode: StudioMode): string | undefined {
    if (!isPlatformBrowser(this.platformId)) return undefined;

    this.colorContext ??= this.document.createElement('canvas').getContext('2d', { willReadFrequently: true });

    if (!this.colorContext) return undefined;

    const source: StudioMode = mode === 'light' ? 'dark' : 'light';
    const bases = this.modeBaselines();

    return studioOppositeColor(
      name as StudioColorToken,
      this.effective(name, source),
      bases[source],
      bases[mode],
      { ...bases[mode], ...this.valuesFor(name, mode)() },
      this.colorContext
    );
  }

  /** Begin loading persisted custom themes; the reactive list populates without blocking rendering. */
  public initializeSavedThemes(): void {
    if (this.initialization) return;

    const revision = this.selectionRevision;
    const initial = structuredClone(this.themeDocument());
    const id = this.storedSelection();

    this.initialization = this.savedThemesStorageService.initialize().then(() => {
      if (!id || !this.storageAvailable() || revision !== this.selectionRevision || !this.sameDocument(initial, this.themeDocument())) return;

      if (this.getSavedTheme(id)) {
        this.selectSavedTheme(id);
        this.setHistory([], []);
      } else this.persistSelection(null);
    });
  }

  /** Retrieve a saved theme by its stable ID from the reactive list.
   * @param id - Stable saved-theme ID.
   */
  public getSavedTheme(id: string): ISavedTheme | undefined {
    return this.savedThemesStorageService.get(id);
  }

  /** Preview a built-in palette while retaining geometry and the active saved-theme identity.
   * @param palette - Palette whose colors should replace the current color preview; returning to a saved theme's original palette restores its saved colors.
   */
  public selectBuiltIn(palette: BxThemeId): void {
    const saved = this.selectedSavedTheme();
    const original = saved?.document.palette === palette ? saved.document : null;
    const colorNames = new Set<string>(STUDIO_CONTROLS.filter((control) => control.family === 'Colors').map((control) => control.name));
    const keepGeometryText = (values: Readonly<Record<string, string>>): Readonly<Record<string, string>> =>
      Object.fromEntries(Object.entries(values).filter(([name]) => !colorNames.has(name.slice(name.indexOf(':') + 1))));

    ++this.selectionRevision;
    this.finishEdit();
    this.recordChange();
    this.restore({
      document: { version: 1, palette, shared: this.shared(), light: structuredClone(original?.light ?? {}), dark: structuredClone(original?.dark ?? {}) },
      mode: this.themingService.applicationTheme(),
      text: keepGeometryText(this.editedText()),
      errors: keepGeometryText(this.errors()),
      autoResolve: this.autoResolve()
    });

    if (!saved) {
      this.selectedSavedThemeId.set(null);
      this.persistSelection(null);
      this.referenceDocument.set({ version: 1, palette, shared: {}, light: {}, dark: {} });
    }

    this.status.set(
      saved
        ? `Previewing palette ${palette} for "${saved.name}". Save Changes commits it; Reset restores the saved theme.`
        : `Applied palette ${palette}; geometry and other custom settings retained.`
    );
  }

  /** Select a saved theme and restore its complete configuration, light/dark counterparts included.
   * @param id - Stable saved-theme ID.
   */
  public selectSavedTheme(id: string): void {
    const theme = this.savedThemesStorageService.get(id);

    if (!theme) return;

    if (this.applyDocument(theme.document, `Applied saved theme "${theme.name}".`)) {
      ++this.selectionRevision;
      this.selectedSavedThemeId.set(id);
      this.persistSelection(id);
      this.referenceDocument.set(structuredClone(theme.document));
    }
  }

  /** Persist the current working configuration as a new saved theme.
   * @param name - Validated, trimmed theme name.
   */
  public async saveAsNew(name: string): Promise<ISavedTheme | null> {
    if (!this.canSaveNew()) return null;

    this.finishEdit();

    const document = structuredClone(this.themeDocument());
    const revision = this.selectionRevision;

    try {
      const theme = await this.savedThemesStorageService.create(name, document);

      if (revision === this.selectionRevision) {
        ++this.selectionRevision;
        this.selectedSavedThemeId.set(theme.id);
        this.persistSelection(theme.id);
        this.referenceDocument.set(structuredClone(theme.document));
      }

      this.status.set(`Saved theme "${theme.name}".`);

      return theme;
    } catch (error) {
      this.status.set(this.failureMessage(error, 'The theme could not be saved.'));

      return null;
    }
  }

  /** Update the currently selected saved theme with the current working configuration. */
  public async saveChanges(): Promise<ISavedTheme | null> {
    const id = this.selectedSavedThemeId();

    if (!id || !this.canSaveChanges()) return null;

    this.finishEdit();

    const document = structuredClone(this.themeDocument());
    const revision = this.selectionRevision;

    try {
      const theme = await this.savedThemesStorageService.update(id, document);

      if (revision === this.selectionRevision) this.referenceDocument.set(structuredClone(theme.document));

      this.status.set(`Updated saved theme "${theme.name}".`);

      return theme;
    } catch (error) {
      this.status.set(this.failureMessage(error, 'The theme changes could not be saved.'));

      return null;
    }
  }

  /** Rename a saved theme, preserving its ID and configuration.
   * @param id - Stable saved-theme ID.
   * @param name - Validated, trimmed new name.
   */
  public async renameSavedTheme(id: string, name: string): Promise<ISavedTheme | null> {
    try {
      const theme = await this.savedThemesStorageService.rename(id, name);

      this.status.set(`Renamed theme to "${theme.name}".`);

      return theme;
    } catch (error) {
      this.status.set(this.failureMessage(error, 'The theme could not be renamed.'));

      return null;
    }
  }

  /** Delete a saved theme and free its slot; deleting the active theme returns to the built-in fallback.
   * @param id - Stable saved-theme ID.
   */
  public async deleteSavedTheme(id: string): Promise<void> {
    try {
      await this.savedThemesStorageService.remove(id);

      if (this.selectedSavedThemeId() === id) this.fallbackToBuiltIn();
      else this.status.set('Deleted saved theme.');
    } catch (error) {
      this.status.set(this.failureMessage(error, 'The theme could not be deleted.'));

      throw error;
    }
  }

  //#region Helpers

  private colorMatchesAuto(name: ThemeCssVariable, mode: StudioMode): boolean {
    const automatic = this.resolveAutomaticColor(name, mode);
    const current = this.colorContext ? formatCatalogColor(this.effective(name, mode), this.colorContext)?.hex : undefined;

    return automatic !== undefined && current === automatic;
  }

  private resumeAutomaticColor(name: ThemeCssVariable, mode: StudioMode): void {
    const value = this.resolveAutomaticColor(name, mode);

    if (!value) return;

    const key = this.editKey(name, mode);
    const source: StudioMode = mode === 'light' ? 'dark' : 'light';
    const sourceKey = this.editKey(name, source);

    this.manualColors.update((keys) => [...new Set([...keys.filter((entry) => entry !== key), sourceKey])]);
    this.valuesFor(name, mode).update((values) => ({ ...values, [name]: value }));
    this.editedText.update((values) => Object.fromEntries(Object.entries(values).filter(([entry]) => entry !== key)));
    this.errors.update((values) => Object.fromEntries(Object.entries(values).filter(([entry]) => entry !== key)));
  }

  private syncAutomaticColors(): void {
    if (!this.autoResolve() || !isPlatformBrowser(this.platformId)) return;

    this.colorContext ??= this.document.createElement('canvas').getContext('2d', { willReadFrequently: true });

    if (!this.colorContext) return;

    const bases = this.modeBaselines();
    const manual = this.manualColors();
    const rank = (name: string): number => (name.startsWith('--bx-on-') || name.startsWith('--bx-text-') || name.startsWith('--bx-border-') ? 1 : 0);
    const controls = STUDIO_CONTROLS.filter((control) => control.family === 'Colors').sort((a, b) => rank(a.name) - rank(b.name));

    for (const source of ['light', 'dark'] as const) {
      const target: StudioMode = source === 'light' ? 'dark' : 'light';
      const sourceValues = source === 'light' ? this.light() : this.dark();
      const targetSignal = target === 'light' ? this.light : this.dark;
      const overrides = { ...targetSignal() };
      const colors = { ...bases[target], ...overrides };

      for (const control of controls) {
        const name = control.name as StudioColorToken;
        const value = sourceValues[name] ?? bases[source][name];

        if (!value || !manual.includes(`${source}:${name}`) || manual.includes(`${target}:${name}`)) continue;

        const resolved = studioOppositeColor(name, value, bases[source], bases[target], colors, this.colorContext);

        if (resolved) {
          overrides[name] = resolved;
          colors[name] = resolved;
        }
      }

      targetSignal.set(overrides);
    }
  }

  private setHistory(past: readonly IThemeStudioSnapshot[], future: readonly IThemeStudioSnapshot[]): void {
    const bounded = boundStudioHistory(past, future);

    if (bounded.past.length < past.length) this.undoLimited.set(true);

    this.past.set(bounded.past);
    this.future.set(bounded.future);
  }

  private updateMaps(next: IThemeStudioDocument, names: readonly string[]): void {
    if (!isStudioDocument(next)) return;

    this.recordChange();
    this.shared.set(next.shared);
    this.light.set(next.light);
    this.dark.set(next.dark);
    this.manualColors.update((keys) => keys.filter((key) => !names.some((name) => key.endsWith(`:${name}`))));
    this.editedText.update((text) => Object.fromEntries(Object.entries(text).filter(([key]) => !names.some((name) => key.endsWith(`:${name}`)))));
    this.errors.update((errors) => Object.fromEntries(Object.entries(errors).filter(([key]) => !names.some((name) => key.endsWith(`:${name}`)))));
  }

  private snapshot(): IThemeStudioSnapshot {
    return {
      document: this.themeDocument(),
      mode: this.themingService.applicationTheme(),
      text: this.editedText(),
      errors: this.errors(),
      manualColors: this.manualColors(),
      autoResolve: this.autoResolve()
    };
  }

  private sameSnapshot(first: IThemeStudioSnapshot | null, second: IThemeStudioSnapshot): boolean {
    return (
      !!first &&
      JSON.stringify([first.document, first.text, first.errors, first.manualColors, first.autoResolve]) ===
        JSON.stringify([second.document, second.text, second.errors, second.manualColors, second.autoResolve])
    );
  }

  private recordChange(): void {
    if (!this.transaction()) {
      this.setHistory([...this.past(), this.snapshot()], []);
    }
  }

  private restore(snapshot: IThemeStudioSnapshot): void {
    this.shared.set(snapshot.document.shared);
    this.light.set(snapshot.document.light);
    this.dark.set(snapshot.document.dark);
    this.editedText.set(snapshot.text);
    this.errors.set(snapshot.errors);
    this.manualColors.set(
      snapshot.manualColors ?? (['light', 'dark'] as const).flatMap((mode) => Object.keys(snapshot.document[mode]).map((name) => `${mode}:${name}`))
    );
    this.autoResolveEnabled.set(snapshot.autoResolve ?? this.autoResolve());
    this.themingService.setPalette(snapshot.document.palette);
    this.themingService.setApplicationTheme(snapshot.mode);
  }

  private valuesFor(name: ThemeCssVariable, mode: StudioMode = this.themingService.activeTheme()): WritableSignal<StudioValues> {
    return STUDIO_CONTROLS.find((item) => item.name === name)?.family === 'Colors' ? (mode === 'dark' ? this.dark : this.light) : this.shared;
  }

  private editKey(name: ThemeCssVariable, mode: StudioMode = this.themingService.activeTheme()): string {
    return `${STUDIO_CONTROLS.find((item) => item.name === name)?.family === 'Colors' ? mode : 'shared'}:${name}`;
  }

  private fallbackToBuiltIn(): void {
    this.finishEdit();
    this.recordChange();
    this.shared.set({});
    this.light.set({});
    this.dark.set({});
    this.editedText.set({});
    this.errors.set({});
    this.manualColors.set([]);
    this.themingService.setPalette('carbon-cobalt');
    ++this.selectionRevision;
    this.selectedSavedThemeId.set(null);
    this.persistSelection(null);
    this.referenceDocument.set(this.themeDocument());
    this.status.set('Deleted the active theme and returned to Carbon / Cobalt.');
  }

  private storedSelection(): string | null {
    if (!isPlatformBrowser(this.platformId)) return null;

    try {
      return this.document.defaultView?.localStorage.getItem(SELECTED_SAVED_THEME_KEY) ?? null;
    } catch {
      return null;
    }
  }

  private persistSelection(id: string | null): void {
    if (!isPlatformBrowser(this.platformId)) return;

    try {
      const storage = this.document.defaultView?.localStorage;

      if (id) storage?.setItem(SELECTED_SAVED_THEME_KEY, id);
      else storage?.removeItem(SELECTED_SAVED_THEME_KEY);
    } catch {
      // Storage policies must not prevent editing or applying a theme.
    }
  }

  private failureMessage(error: unknown, fallback: string): string {
    return error instanceof Error && error.message ? error.message : fallback;
  }

  private sameDocument(first: IThemeStudioDocument, second: IThemeStudioDocument): boolean {
    return (
      first.palette === second.palette &&
      this.sameValues(first.shared, second.shared) &&
      this.sameValues(first.light, second.light) &&
      this.sameValues(first.dark, second.dark)
    );
  }

  private sameValues(first: StudioValues, second: StudioValues): boolean {
    const keys = Object.keys(first) as ThemeCssVariable[];

    return keys.length === Object.keys(second).length && keys.every((key) => first[key] === second[key]);
  }

  private measureBaseline(palette: BxThemeId, mode: StudioMode): StudioValues {
    const win = isPlatformBrowser(this.platformId) ? this.document.defaultView : null;

    if (!win || !this.document.body) return {};

    const probe = this.document.createElement('div');
    const geometry = {
      ...Object.fromEntries(Object.entries(SPACING_VALUES).map(([key, value]) => [`--bx-space-${key}`, value])),
      ...Object.fromEntries(Object.entries(RADIUS_VALUES).map(([key, value]) => [`--bx-rounded-${key}`, value])),
      ...Object.fromEntries(Object.entries(SHADOW_VALUES).map(([key, value]) => [`--bx-shadow-${key}`, value])),
      ...Object.fromEntries(Object.entries(BORDER_VALUES).map(([key, value]) => [`--bx-border-${key}`, value]))
    };

    probe.className = `theme-${palette}`;
    probe.dataset['theme'] = mode;
    probe.hidden = true;

    for (const [name, value] of Object.entries(geometry)) probe.style.setProperty(name, value);

    this.document.body.append(probe);

    try {
      const style = win.getComputedStyle(probe);
      const canvas = this.document.createElement('canvas');

      canvas.width = 1;
      canvas.height = 1;

      const context = canvas.getContext('2d', { willReadFrequently: true });

      return Object.fromEntries(
        STUDIO_CONTROLS.map(({ name, family }) => {
          const value = style.getPropertyValue(name).trim();

          return [name, family === 'Colors' && context ? (formatCatalogColor(value, context)?.hex ?? value) : value];
        })
      );
    } finally {
      probe.remove();
    }
  }

  //#endregion
}
