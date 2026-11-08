import type { Signal, WritableSignal } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { afterRenderEffect, computed, DOCUMENT, inject, Injectable, OnDestroy, PLATFORM_ID, signal, untracked } from '@angular/core';

import type { BxThemeId, ThemeCssVariable } from '@filip.mazev/blocks/core';
import type { IThemeStudioDocument } from '@playground/interfaces/itheme-studio-document.interface';
import type { IThemeStudioSnapshot } from '@playground/interfaces/itheme-studio-snapshot.interface';
import type { StudioMode, StudioValues } from '@playground/types/theme-studio.types';

import { BORDER_VALUES, RADIUS_VALUES, SHADOW_VALUES, SPACING_VALUES, ThemingService } from '@filip.mazev/blocks/core';

import { formatCatalogColor } from '@playground/components/screens/token-catalog/helpers/token-color.helpers';
import { STUDIO_CONTROLS } from '@playground/shared/constants/theme-studio.constants';
import { STUDIO_HISTORY_LIMIT } from '@playground/shared/constants/theme-studio-history.constants';
import { studioColorContrast } from '@playground/shared/helpers/theme-studio-contrast.helpers';
import { exportStudioScss } from '@playground/shared/helpers/theme-studio-export.helpers';
import { boundStudioHistory } from '@playground/shared/helpers/theme-studio-history.helpers';
import { randomStudioTheme } from '@playground/shared/helpers/theme-studio-random.helpers';
import { isStudioDocument, normalizeStudioValue } from '@playground/shared/helpers/theme-studio-validation.helpers';

import { ThemeStudioPreviewService } from './theme-studio-preview.service';

@Injectable({ providedIn: 'root' })
export class ThemeStudioService implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly themeStudioPreviewService = inject(ThemeStudioPreviewService);

  public readonly themingService = inject(ThemingService);

  private readonly shared: WritableSignal<StudioValues> = signal({});
  private readonly light: WritableSignal<StudioValues> = signal({});
  private readonly dark: WritableSignal<StudioValues> = signal({});
  private readonly past: WritableSignal<readonly IThemeStudioSnapshot[]> = signal([]);
  private readonly future: WritableSignal<readonly IThemeStudioSnapshot[]> = signal([]);

  private readonly transaction: WritableSignal<IThemeStudioSnapshot | null> = signal(null);

  private readonly undoLimited: WritableSignal<boolean> = signal(false);
  private readonly forcedColors: WritableSignal<boolean> = signal(false);

  private readonly editedText: WritableSignal<Readonly<Record<string, string>>> = signal({});
  private readonly errors: WritableSignal<Readonly<Record<string, string>>> = signal({});

  private readonly onForcedColors: (event: MediaQueryListEvent) => void = (event) => this.forcedColors.set(event.matches);

  public readonly open: WritableSignal<boolean> = signal(false);
  public readonly preview: WritableSignal<boolean> = signal(true);

  public readonly baseline: WritableSignal<StudioValues> = signal({});

  public readonly status: WritableSignal<string> = signal('');

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

  private media: MediaQueryList | undefined;

  constructor() {
    const win = isPlatformBrowser(this.platformId) ? this.document.defaultView : null;

    if (win) {
      this.media = win.matchMedia('(forced-colors: active)');
      this.forcedColors.set(this.media.matches);
      this.media.addEventListener('change', this.onForcedColors);
    }

    afterRenderEffect(() => {
      const mode = this.themingService.activeTheme();
      const palette = this.themingService.palette();

      this.baseline.set(this.measureBaseline(palette, mode));
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

  public edit(name: ThemeCssVariable, raw: string): void {
    const key = this.editKey(name);
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

    if (valid) this.valuesFor(name).update((values) => ({ ...values, [name]: value }));
  }

  public value(name: ThemeCssVariable): string {
    return this.editedText()[this.editKey(name)] ?? this.valuesFor(name)()[name] ?? this.base(name);
  }

  public base(name: ThemeCssVariable): string {
    return this.baseline()[name] ?? '';
  }

  public error(name: ThemeCssVariable): string {
    return this.errors()[this.editKey(name)] ?? '';
  }

  public overridden(name: ThemeCssVariable): boolean {
    return this.valuesFor(name)()[name] !== undefined || this.editedText()[this.editKey(name)] !== undefined;
  }

  public effective(name: ThemeCssVariable): string {
    return this.valuesFor(name)()[name] ?? this.baseline()[name] ?? '';
  }

  public reset(name: ThemeCssVariable): void {
    this.finishEdit();
    this.recordChange();

    const key = this.editKey(name);

    this.valuesFor(name).update((values) => {
      const next = { ...values };

      Reflect.deleteProperty(next, name);

      return next;
    });
    this.editedText.update((values) => {
      const next = { ...values };

      Reflect.deleteProperty(next, key);

      return next;
    });
    this.errors.update((values) => {
      const next = { ...values };

      Reflect.deleteProperty(next, key);

      return next;
    });
    this.status.set(`Reset ${name} to its inherited base value.`);
  }

  public resetAll(): void {
    this.finishEdit();
    this.recordChange();
    this.shared.set({});
    this.light.set({});
    this.dark.set({});
    this.editedText.set({});
    this.errors.set({});
    this.themingService.setPalette('carbon-cobalt');
    this.status.set('Reset to Carbon / Cobalt and cleared all Studio overrides. Mode and appearance preferences retained.');
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

    this.restore({ document: next, mode: this.themingService.applicationTheme(), text: {}, errors: {} });
    this.status.set('Randomized a coordinated palette, neutral base, menu colors and layout. Undo restores your previous draft.');
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

  //#region Helpers

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
    this.editedText.update((text) => Object.fromEntries(Object.entries(text).filter(([key]) => !names.some((name) => key.endsWith(`:${name}`)))));
    this.errors.update((errors) => Object.fromEntries(Object.entries(errors).filter(([key]) => !names.some((name) => key.endsWith(`:${name}`)))));
  }

  private snapshot(): IThemeStudioSnapshot {
    return { document: this.themeDocument(), mode: this.themingService.applicationTheme(), text: this.editedText(), errors: this.errors() };
  }

  private sameSnapshot(first: IThemeStudioSnapshot | null, second: IThemeStudioSnapshot): boolean {
    return !!first && JSON.stringify([first.document, first.text, first.errors]) === JSON.stringify([second.document, second.text, second.errors]);
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
    this.themingService.setPalette(snapshot.document.palette);
    this.themingService.setApplicationTheme(snapshot.mode);
  }

  private valuesFor(name: ThemeCssVariable): WritableSignal<StudioValues> {
    return STUDIO_CONTROLS.find((item) => item.name === name)?.family === 'Colors'
      ? this.themingService.activeTheme() === 'dark'
        ? this.dark
        : this.light
      : this.shared;
  }

  private editKey(name: ThemeCssVariable): string {
    return `${STUDIO_CONTROLS.find((item) => item.name === name)?.family === 'Colors' ? this.themingService.activeTheme() : 'shared'}:${name}`;
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
