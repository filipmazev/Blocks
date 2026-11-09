import type { Signal, WritableSignal } from '@angular/core';

import { isPlatformBrowser, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  DOCUMENT,
  ElementRef,
  inject,
  PLATFORM_ID,
  signal,
  viewChildren
} from '@angular/core';
import { RouterLink } from '@angular/router';

import type { ThemeCssVariable } from '@filip.mazev/blocks/core';
import type { IBxSelectOption } from '@filip.mazev/blocks/forms';
import type { ICodeFile } from '@playground/interfaces/icode-file.interface';
import type { IThemeStudioControl } from '@playground/interfaces/itheme-studio-control.interface';
import type { IThemeStudioShadow } from '@playground/interfaces/itheme-studio-shadow.interface';
import type { StudioColorToken, StudioMode, StudioValues } from '@playground/types/theme-studio.types';

import { RADIUS_CSS_VARIABLES, SHADOW_CSS_VARIABLES, SPACING_CSS_VARIABLES, THEME_PALETTES } from '@filip.mazev/blocks/core';
import { Button, InputField, Select, SliderDirective, SlideToggle } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { ModalService } from '@filip.mazev/blocks/modal';
import { Collapsible, Divider, Tab, TabContentDirective, Tabs, Tag, TooltipDirective } from '@filip.mazev/blocks/primitives';

import { formatCatalogColor } from '@playground/components/screens/token-catalog/helpers/token-color.helpers';
import { Code } from '@playground/components/shared/code/code';
import { Readme } from '@playground/components/shared/readme/readme';
import { ThemeStudioImport } from '@playground/components/shared/theme-studio-import/theme-studio-import';
import { ThemeStudioSetup } from '@playground/components/shared/theme-studio-setup/theme-studio-setup';
import { ThemeStudioService } from '@playground/services/theme-studio.service';
import { STUDIO_BORDER_STYLES, STUDIO_CONTROLS } from '@playground/shared/constants/theme-studio.constants';
import {
  STUDIO_BASE_OPTIONS,
  STUDIO_BASE_SHADES,
  STUDIO_COMMON_COLORS,
  STUDIO_DENSITY_OPTIONS,
  STUDIO_MENU_OPTIONS,
  STUDIO_SHADOW_RANGES,
  STUDIO_SHADOW_TARGETS,
  STUDIO_STYLE_OPTIONS
} from '@playground/shared/constants/theme-studio-presets.constants';
import { STUDIO_SETUP_HEADERS } from '@playground/shared/constants/theme-studio-setup.constants';
import { studioBaseColors, studioMenuColors } from '@playground/shared/helpers/theme-studio-colors.helpers';
import { studioScale } from '@playground/shared/helpers/theme-studio-presets.helpers';
import { readStudioShadow, writeStudioShadow } from '@playground/shared/helpers/theme-studio-shadow.helpers';

@Component({
  selector: 'app-theme-studio',
  imports: [
    NgTemplateOutlet,
    RouterLink,
    Button,
    InputField,
    Select,
    SlideToggle,
    SliderDirective,
    Icon,
    Collapsible,
    Divider,
    Tabs,
    Tab,
    TabContentDirective,
    Tag,
    TooltipDirective,
    Readme,
    Code
  ],
  templateUrl: './theme-studio.html',
  styleUrl: './theme-studio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeStudio {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly modalService = inject(ModalService);

  public readonly themeStudioService = inject(ThemeStudioService);

  private readonly colorPickers: Signal<readonly ElementRef<HTMLInputElement>[]> = viewChildren<ElementRef<HTMLInputElement>>('colorPicker');

  protected readonly styles: readonly IBxSelectOption<string>[] = STUDIO_STYLE_OPTIONS;
  protected readonly bases: typeof STUDIO_BASE_OPTIONS = STUDIO_BASE_OPTIONS;
  protected readonly menus: typeof STUDIO_MENU_OPTIONS = STUDIO_MENU_OPTIONS;
  protected readonly densities: readonly IBxSelectOption<string>[] = STUDIO_DENSITY_OPTIONS;
  protected readonly shadowTargets: typeof STUDIO_SHADOW_TARGETS = STUDIO_SHADOW_TARGETS;
  protected readonly shadowRanges: typeof STUDIO_SHADOW_RANGES = STUDIO_SHADOW_RANGES;
  protected readonly borderStyles: readonly IBxSelectOption<string>[] = STUDIO_BORDER_STYLES.map((value) => ({ label: value, value }));
  protected readonly palettes: readonly IBxSelectOption<string>[] = THEME_PALETTES.map((palette) => ({ label: palette.label, value: palette.id }));
  protected readonly commonColors: readonly IThemeStudioControl[] = STUDIO_CONTROLS.filter((control) =>
    STUDIO_COMMON_COLORS.includes(control.name as StudioColorToken)
  );
  protected readonly advancedColors: readonly IThemeStudioControl[] = STUDIO_CONTROLS.filter(
    (control) => control.family === 'Colors' && !STUDIO_COMMON_COLORS.includes(control.name as StudioColorToken)
  );

  protected readonly expandedColors: WritableSignal<readonly ThemeCssVariable[]> = signal([]);

  protected readonly activeTab: WritableSignal<string | null> = signal('colors');
  protected readonly shadowTarget: WritableSignal<string> = signal('all');

  protected readonly exportFiles: Signal<ICodeFile[]> = computed(() => [
    { title: 'styles.scss', path: 'studio-export.scss', language: 'scss', content: this.themeStudioService.scss() }
  ]);
  protected readonly selectedRadius: Signal<string> = computed(() => this.scaleSelection('radius'));
  protected readonly selectedDensity: Signal<string> = computed(() => this.scaleSelection('spacing'));
  protected readonly shadow: Signal<IThemeStudioShadow> = computed(() => {
    const value = this.themeStudioService.effective(this.shadowNames()[0]);
    const rootSize = parseFloat(this.document.defaultView?.getComputedStyle(this.document.documentElement).fontSize ?? '16') || 16;
    const parsed = readStudioShadow(value, rootSize) ?? { x: 0, y: 2, blur: 4, spread: 0, color: '#000000', opacity: 8 };
    const color = this.resolveColor(parsed.color);

    return {
      ...parsed,
      color: color?.hex.slice(0, 7) ?? '#000000',
      opacity: color?.hex.length === 9 ? Math.round((parseInt(color.hex.slice(7), 16) / 255) * 100) : 100
    };
  });

  private colorContext: CanvasRenderingContext2D | null = null;

  public copy(): void {
    this.themeStudioService.finishEdit();
    this.modalService.open<undefined, undefined>(ThemeStudioSetup, {
      header: STUDIO_SETUP_HEADERS.configure,
      style: {
        layout: 'center',
        breakpoints: { sm: 'bottom-sheet' },
        wrapperStyles: 'inline-size: 48rem; max-inline-size: 100%; block-size: min(52rem, 88dvh);'
      }
    });
  }

  public importTheme(): void {
    this.themeStudioService.finishEdit();
    this.modalService.open<undefined, undefined>(ThemeStudioImport, { header: { text: 'Import a theme' }, style: { layout: 'center' } });
  }

  public download(format: 'scss' | 'json' = 'scss'): void {
    const win = this.document.defaultView;

    if (!win) return;

    try {
      const contents = format === 'scss' ? this.themeStudioService.scss() : JSON.stringify(this.themeStudioService.themeDocument(), null, 4) + '\n';
      const url = win.URL.createObjectURL(new Blob([contents], { type: format === 'scss' ? 'text/x-scss;charset=utf-8' : 'application/json' }));
      const anchor = this.document.createElement('a');

      try {
        anchor.href = url;
        anchor.download = `blocks-theme.${format}`;
        this.document.body.append(anchor);
        anchor.click();
        this.themeStudioService.status.set(`Theme ${format.toUpperCase()} download started.`);
      } finally {
        anchor.remove();
        win.URL.revokeObjectURL(url);
      }
    } catch {
      this.themeStudioService.status.set('Download failed. Open Use theme to copy the stylesheet.');
    }
  }

  protected setScale(family: 'radius' | 'spacing', value: unknown): void {
    const options = family === 'radius' ? STUDIO_STYLE_OPTIONS : STUDIO_DENSITY_OPTIONS;

    if (typeof value !== 'string' || !options.some((option) => option.value === value)) return;

    const names =
      family === 'radius'
        ? RADIUS_CSS_VARIABLES.filter((name) => !name.endsWith('-none') && !name.endsWith('-pill'))
        : SPACING_CSS_VARIABLES.filter((name) => name !== '--bx-space-0');

    this.themeStudioService.updateShared(studioScale(family, value), names);
  }

  protected paletteChanged(value: unknown): void {
    const palette = THEME_PALETTES.find((item) => item.id === value);

    if (palette) this.themeStudioService.setPalette(palette.id);
  }

  protected modeChanged(value: string | null): void {
    if (value === 'light' || value === 'dark') this.themeStudioService.themingService.setApplicationTheme(value);
  }

  protected paletteColors(value: unknown): readonly string[] {
    return THEME_PALETTES.find((palette) => palette.id === value)?.colors ?? [];
  }

  protected setBase(value: unknown): void {
    if (!['default', 'carbon', 'cyber-slate'].includes(String(value))) return;

    const styles = this.document.defaultView?.getComputedStyle(this.document.documentElement);
    const maps = (mode: StudioMode): StudioValues =>
      studioBaseColors(String(value), mode, (family, shade) => styles?.getPropertyValue(`--bx-color-${family}-${shade}`).trim() ?? '');

    this.themeStudioService.updateColors(maps('light'), maps('dark'), Object.keys(STUDIO_BASE_SHADES));
  }

  protected baseSelection(): string {
    const text = this.themeStudioService.themeDocument().light['--bx-text-primary'];

    if (!text) return 'default';

    const styles = this.document.defaultView?.getComputedStyle(this.document.documentElement);

    return ['carbon', 'cyber-slate'].find((name) => styles?.getPropertyValue(`--bx-color-${name}-700`).trim().toLowerCase() === text.toLowerCase()) ?? 'custom';
  }

  protected setMenu(kind: 'color' | 'accent', value: unknown): void {
    if (!STUDIO_MENU_OPTIONS.some((option) => option.value === value && !option.disabled)) return;

    const names: readonly StudioColorToken[] =
      kind === 'color' ? ['--bx-bg-surface', '--bx-bg-surface-alt'] : ['--bx-bg-element-hover', '--bx-bg-element-active'];
    const map = (mode: StudioMode): StudioValues => {
      if (value === 'default') {
        const family = this.baseSelection();

        if (family !== 'carbon' && family !== 'cyber-slate') return {};

        return Object.fromEntries(names.map((name) => [name, this.baseShade(family, name, mode)]));
      }

      const base = this.themeStudioService.sample(this.themeStudioService.themingService.palette(), mode);
      const colors = { ...base, ...this.themeStudioService.themeDocument()[mode] };

      return studioMenuColors(kind, value, colors);
    };

    this.themeStudioService.updateColors(map('light'), map('dark'), names);
  }

  protected menuSelection(kind: 'color' | 'accent'): string {
    const name = kind === 'color' ? '--bx-bg-surface' : '--bx-bg-element-hover';
    const doc = this.themeStudioService.themeDocument();
    const value = doc[this.themeStudioService.themingService.activeTheme()][name];

    if (!value) return 'default';

    const family = this.baseSelection();

    if ((family === 'carbon' || family === 'cyber-slate') && value === this.baseShade(family, name, this.themeStudioService.themingService.activeTheme()))
      return 'default';

    const base = { ...this.themeStudioService.baseline(), ...doc[this.themeStudioService.themingService.activeTheme()] };

    return value === base['--bx-primary-subtle']
      ? 'primary'
      : value === base['--bx-accent-subtle']
        ? 'accent'
        : value === base['--bx-bg-neutral']
          ? 'neutral'
          : 'custom';
  }

  protected toggleColorEditor(name: ThemeCssVariable): void {
    this.expandedColors.update((names) => (names.includes(name) ? names.filter((entry) => entry !== name) : [...names, name]));
  }

  protected openColorEditor(name: ThemeCssVariable, mode: StudioMode, event: Event): void {
    event.preventDefault();
    this.expandedColors.update((names) => (names.includes(name) ? names : [...names, name]));

    // Render synchronously to keep the native picker within this user activation.
    this.changeDetectorRef.detectChanges();

    const picker = this.colorPickers().find(
      ({ nativeElement }) => nativeElement.dataset['token'] === name && nativeElement.dataset['mode'] === mode
    )?.nativeElement;

    if (!picker) return;

    picker.focus({ preventScroll: true });

    if (typeof picker.showPicker === 'function') {
      try {
        picker.showPicker();

        return;
      } catch {
        // Fall back to native activation where showPicker is restricted.
      }
    }

    picker.click();
  }

  protected colorHex(name: ThemeCssVariable, mode: StudioMode = this.themeStudioService.themingService.activeTheme()): string {
    return this.resolveColor(this.themeStudioService.effective(name, mode))?.hex.slice(0, 7) ?? '#000000';
  }

  protected colorOpacity(name: ThemeCssVariable, mode: StudioMode = this.themeStudioService.themingService.activeTheme()): number {
    const hex = this.resolveColor(this.themeStudioService.effective(name, mode))?.hex;

    return hex?.length === 9 ? Math.round((parseInt(hex.slice(7), 16) / 255) * 100) : 100;
  }

  protected changeColor(name: ThemeCssVariable, event: Event, mode: StudioMode = this.themeStudioService.themingService.activeTheme()): void {
    const hex = (event.target as HTMLInputElement).value;
    const alpha = Math.round((this.colorOpacity(name, mode) / 100) * 255)
      .toString(16)
      .padStart(2, '0');

    this.themeStudioService.edit(name, `${hex}${alpha === 'ff' ? '' : alpha}`, mode);
  }

  protected changeOpacity(name: ThemeCssVariable, event: Event, mode: StudioMode = this.themeStudioService.themingService.activeTheme()): void {
    const alpha = Math.round((Number((event.target as HTMLInputElement).value) / 100) * 255)
      .toString(16)
      .padStart(2, '0');

    this.themeStudioService.edit(name, `${this.colorHex(name, mode)}${alpha === 'ff' ? '' : alpha}`, mode);
  }

  protected setBorderStyle(value: unknown): void {
    if (typeof value === 'string') this.themeStudioService.edit('--bx-border-style', value);
  }

  protected setBorderWidth(event: Event): void {
    this.themeStudioService.edit('--bx-border-width', `${(event.target as HTMLInputElement).value}px`);
  }

  protected borderWidth(): number {
    const value = this.themeStudioService.effective('--bx-border-width');

    return parseFloat(value) * (/r?em$/.test(value) ? 16 : 1);
  }

  protected setShadow(key: keyof IThemeStudioShadow, event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    const next: IThemeStudioShadow = { ...this.shadow(), [key]: key === 'color' ? value : Number(value) };
    const shadow = writeStudioShadow(next);

    this.themeStudioService.updateShared(Object.fromEntries(this.shadowNames().map((name) => [name, shadow])));
  }

  protected resetShadow(): void {
    this.themeStudioService.finishEdit();
    this.themeStudioService.updateShared({}, this.shadowNames());
  }

  protected shadowNames(): readonly ThemeCssVariable[] {
    const target = this.shadowTarget();

    return SHADOW_CSS_VARIABLES.filter((name) =>
      target === 'all' || target === 'cards' ? target === 'all' || /^--bx-shadow-(sm|md|lg|xl)$/.test(name) : name === `--bx-shadow-${target}`
    );
  }

  //#region Helpers

  private baseShade(family: string, name: StudioColorToken, mode: StudioMode): string {
    const shade = STUDIO_BASE_SHADES[name]?.[mode === 'light' ? 0 : 1];

    return (
      this.document.defaultView?.getComputedStyle(this.document.documentElement).getPropertyValue(`--bx-color-${family}-${shade}`).trim().toLowerCase() ?? ''
    );
  }

  private scaleSelection(family: 'radius' | 'spacing'): string {
    const shared = this.themeStudioService.themeDocument().shared;
    const prefix = family === 'radius' ? '--bx-rounded-' : '--bx-space-';
    const values = Object.fromEntries(Object.entries(shared).filter(([name]) => name.startsWith(prefix)));

    if (!Object.keys(values).length) return 'default';

    const options = family === 'radius' ? STUDIO_STYLE_OPTIONS : STUDIO_DENSITY_OPTIONS;

    return (
      (options.find((option) => {
        const expected = studioScale(family, String(option.value));

        return Object.keys(expected).length === Object.keys(values).length && Object.entries(expected).every(([name, value]) => values[name] === value);
      })?.value as string | undefined) ?? 'custom'
    );
  }

  private resolveColor(value: string): ReturnType<typeof formatCatalogColor> {
    if (!isPlatformBrowser(this.platformId)) return undefined;

    this.colorContext ??= this.document.createElement('canvas').getContext('2d', { willReadFrequently: true });

    return this.colorContext ? formatCatalogColor(value, this.colorContext) : undefined;
  }

  //#endregion
}
