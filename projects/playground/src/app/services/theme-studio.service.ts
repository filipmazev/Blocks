import type { Signal, WritableSignal } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { afterRenderEffect, computed, DOCUMENT, inject, Injectable, OnDestroy, PLATFORM_ID, signal, untracked } from '@angular/core';

import type { BxThemeId, ThemeCssVariable } from '@filip.mazev/blocks/core';
import type { IThemeStudioDocument } from '@playground/interfaces/itheme-studio-document.interface';
import type { IThemeStudioSnapshot } from '@playground/interfaces/itheme-studio-snapshot.interface';
import type { StudioColorToken, StudioMode, StudioValues } from '@playground/types/theme-studio.types';

import { BORDER_VALUES, RADIUS_VALUES, SHADOW_VALUES, SPACING_VALUES, ThemingService } from '@filip.mazev/blocks/core';

import { formatCatalogColor } from '@playground/components/screens/token-catalog/helpers/token-color.helpers';
import { STUDIO_CONTROLS } from '@playground/shared/constants/theme-studio.constants';
import { STUDIO_HISTORY_LIMIT } from '@playground/shared/constants/theme-studio-history.constants';
import { studioColorContrast } from '@playground/shared/helpers/theme-studio-contrast.helpers';
import { exportStudioScss } from '@playground/shared/helpers/theme-studio-export.helpers';
import { boundStudioHistory } from '@playground/shared/helpers/theme-studio-history.helpers';
import { studioOppositeColor } from '@playground/shared/helpers/theme-studio-opposite.helpers';
import { randomStudioTheme } from '@playground/shared/helpers/theme-studio-random.helpers';
import { isStudioDocument, normalizeStudioValue } from '@playground/shared/helpers/theme-studio-validation.helpers';

import { ThemeStudioPreviewService } from './theme-studio-preview.service';

@Injectable({ providedIn: 'root' })
export class ThemeStudioService implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly themeStudioPreviewService = inject(ThemeStudioPreviewService);

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

  private readonly onForcedColors: (event: MediaQueryListEvent) => void = (event) => this.forcedColors.set(event.matches);

  public readonly open: WritableSignal<boolean> = signal(false);
  public readonly preview: WritableSignal<boolean> = signal(true);

  public readonly autoResolve: Signal<boolean> = computed(() => this.autoResolveEnabled());
  public readonly baseline: Signal<StudioValues> = computed(() => this.modeBaselines()[this.themingService.activeTheme()]);

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
  private colorContext: CanvasRenderingContext2D | null = null;

  constructor() {
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
    this.finishEdit();
    this.recordChange();
    this.shared.set({});
    this.light.set({});
    this.dark.set({});
    this.editedText.set({});
    this.errors.set({});
    this.manualColors.set([]);
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

  //#region Helpers

  private resolveAutomaticColor(name: ThemeCssVariable, mode: StudioMode): string | undefined {
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
