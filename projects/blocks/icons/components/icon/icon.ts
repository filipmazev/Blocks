import type { InputSignal, Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, effect, inject, input, isDevMode, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import {
  Color,
  getComplementaryToken,
  invertPaletteToken,
  isPaletteToken,
  isThemedColor,
  resolveTokenToCssVar,
  ThemedColor,
  ThemingService
} from '@filip.mazev/blocks/core';

import { loadIcon } from '@icons/helpers/icon-resolve.helpers';
import { IIconDefinition } from '@icons/interfaces/icon-definition.interface';
import { IconName, IconSize, IconStrokeWidth } from '@icons/types/icon.types';

@Component({
  selector: 'bx-icon',
  standalone: true,
  templateUrl: './icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './icon.scss'
})
export class Icon {
  private readonly domSanitizer = inject(DomSanitizer);
  private readonly themingService = inject(ThemingService);

  private readonly icon: WritableSignal<IIconDefinition | undefined> = signal<IIconDefinition | undefined>(undefined);

  private readonly loadError: WritableSignal<unknown> = signal<unknown>(null);

  private readonly isDarkMode: Signal<boolean> = computed(() => this.themingService.activeTheme() === 'dark');
  private readonly activeColorToken: Signal<
    | 'primary'
    | 'accent'
    | 'primary-50'
    | 'primary-100'
    | 'primary-200'
    | 'primary-300'
    | 'primary-400'
    | 'primary-500'
    | 'primary-600'
    | 'primary-700'
    | 'primary-800'
    | 'primary-900'
    | 'primary-1000'
    | 'accent-50'
    | 'accent-100'
    | 'accent-200'
    | 'accent-300'
    | 'accent-400'
    | 'accent-500'
    | 'accent-600'
    | 'accent-700'
    | 'accent-800'
    | 'accent-900'
    | 'accent-1000'
    | 'carbon-50'
    | 'carbon-100'
    | 'carbon-200'
    | 'carbon-300'
    | 'carbon-400'
    | 'carbon-500'
    | 'carbon-600'
    | 'carbon-700'
    | 'carbon-800'
    | 'carbon-900'
    | 'carbon-1000'
    | 'cobalt-50'
    | 'cobalt-100'
    | 'cobalt-200'
    | 'cobalt-300'
    | 'cobalt-400'
    | 'cobalt-500'
    | 'cobalt-600'
    | 'cobalt-700'
    | 'cobalt-800'
    | 'cobalt-900'
    | 'cobalt-1000'
    | 'ember-50'
    | 'ember-100'
    | 'ember-200'
    | 'ember-300'
    | 'ember-400'
    | 'ember-500'
    | 'ember-600'
    | 'ember-700'
    | 'ember-800'
    | 'ember-900'
    | 'ember-1000'
    | 'brick-rose-50'
    | 'brick-rose-100'
    | 'brick-rose-200'
    | 'brick-rose-300'
    | 'brick-rose-400'
    | 'brick-rose-500'
    | 'brick-rose-600'
    | 'brick-rose-700'
    | 'brick-rose-800'
    | 'brick-rose-900'
    | 'brick-rose-1000'
    | 'azure-50'
    | 'azure-100'
    | 'azure-200'
    | 'azure-300'
    | 'azure-400'
    | 'azure-500'
    | 'azure-600'
    | 'azure-700'
    | 'azure-800'
    | 'azure-900'
    | 'azure-1000'
    | 'violet-50'
    | 'violet-100'
    | 'violet-200'
    | 'violet-300'
    | 'violet-400'
    | 'violet-500'
    | 'violet-600'
    | 'violet-700'
    | 'violet-800'
    | 'violet-900'
    | 'violet-1000'
    | 'teal-50'
    | 'teal-100'
    | 'teal-200'
    | 'teal-300'
    | 'teal-400'
    | 'teal-500'
    | 'teal-600'
    | 'teal-700'
    | 'teal-800'
    | 'teal-900'
    | 'teal-1000'
    | 'tangerine-50'
    | 'tangerine-100'
    | 'tangerine-200'
    | 'tangerine-300'
    | 'tangerine-400'
    | 'tangerine-500'
    | 'tangerine-600'
    | 'tangerine-700'
    | 'tangerine-800'
    | 'tangerine-900'
    | 'tangerine-1000'
    | 'indigo-50'
    | 'indigo-100'
    | 'indigo-200'
    | 'indigo-300'
    | 'indigo-400'
    | 'indigo-500'
    | 'indigo-600'
    | 'indigo-700'
    | 'indigo-800'
    | 'indigo-900'
    | 'indigo-1000'
    | 'cyan-50'
    | 'cyan-100'
    | 'cyan-200'
    | 'cyan-300'
    | 'cyan-400'
    | 'cyan-500'
    | 'cyan-600'
    | 'cyan-700'
    | 'cyan-800'
    | 'cyan-900'
    | 'cyan-1000'
    | 'lime-50'
    | 'lime-100'
    | 'lime-200'
    | 'lime-300'
    | 'lime-400'
    | 'lime-500'
    | 'lime-600'
    | 'lime-700'
    | 'lime-800'
    | 'lime-900'
    | 'lime-1000'
    | 'cool-violet-50'
    | 'cool-violet-100'
    | 'cool-violet-200'
    | 'cool-violet-300'
    | 'cool-violet-400'
    | 'cool-violet-500'
    | 'cool-violet-600'
    | 'cool-violet-700'
    | 'cool-violet-800'
    | 'cool-violet-900'
    | 'cool-violet-1000'
    | 'cyber-yellow-50'
    | 'cyber-yellow-100'
    | 'cyber-yellow-200'
    | 'cyber-yellow-300'
    | 'cyber-yellow-400'
    | 'cyber-yellow-500'
    | 'cyber-yellow-600'
    | 'cyber-yellow-700'
    | 'cyber-yellow-800'
    | 'cyber-yellow-900'
    | 'cyber-yellow-1000'
    | 'cyber-slate-50'
    | 'cyber-slate-100'
    | 'cyber-slate-200'
    | 'cyber-slate-300'
    | 'cyber-slate-400'
    | 'cyber-slate-500'
    | 'cyber-slate-600'
    | 'cyber-slate-700'
    | 'cyber-slate-800'
    | 'cyber-slate-900'
    | 'cyber-slate-1000'
    | 'blue-50'
    | 'blue-100'
    | 'blue-200'
    | 'blue-300'
    | 'blue-400'
    | 'blue-500'
    | 'blue-600'
    | 'blue-700'
    | 'blue-800'
    | 'blue-900'
    | 'blue-1000'
    | 'orange-50'
    | 'orange-100'
    | 'orange-200'
    | 'orange-300'
    | 'orange-400'
    | 'orange-500'
    | 'orange-600'
    | 'orange-700'
    | 'orange-800'
    | 'orange-900'
    | 'orange-1000'
    | 'purple-50'
    | 'purple-100'
    | 'purple-200'
    | 'purple-300'
    | 'purple-400'
    | 'purple-500'
    | 'purple-600'
    | 'purple-700'
    | 'purple-800'
    | 'purple-900'
    | 'purple-1000'
    | 'red-50'
    | 'red-100'
    | 'red-200'
    | 'red-300'
    | 'red-400'
    | 'red-500'
    | 'red-600'
    | 'red-700'
    | 'red-800'
    | 'red-900'
    | 'red-1000'
    | 'green-50'
    | 'green-100'
    | 'green-200'
    | 'green-300'
    | 'green-400'
    | 'green-500'
    | 'green-600'
    | 'green-700'
    | 'green-800'
    | 'green-900'
    | 'green-1000'
    | 'danger-50'
    | 'danger-100'
    | 'danger-200'
    | 'danger-300'
    | 'danger-400'
    | 'danger-500'
    | 'danger-600'
    | 'danger-700'
    | 'danger-800'
    | 'danger-900'
    | 'danger-1000'
    | 'warn-50'
    | 'warn-100'
    | 'warn-200'
    | 'warn-300'
    | 'warn-400'
    | 'warn-500'
    | 'warn-600'
    | 'warn-700'
    | 'warn-800'
    | 'warn-900'
    | 'warn-1000'
    | 'success-50'
    | 'success-100'
    | 'success-200'
    | 'success-300'
    | 'success-400'
    | 'success-500'
    | 'success-600'
    | 'success-700'
    | 'success-800'
    | 'success-900'
    | 'success-1000'
    | 'information-50'
    | 'information-100'
    | 'information-200'
    | 'information-300'
    | 'information-400'
    | 'information-500'
    | 'information-600'
    | 'information-700'
    | 'information-800'
    | 'information-900'
    | 'information-1000'
    | 'neutral-50'
    | 'neutral-100'
    | 'neutral-200'
    | 'neutral-300'
    | 'neutral-400'
    | 'neutral-500'
    | 'neutral-600'
    | 'neutral-700'
    | 'neutral-800'
    | 'neutral-900'
    | 'neutral-1000'
    | 'bg-canvas'
    | 'bg-surface'
    | 'bg-surface-alt'
    | 'bg-element'
    | 'bg-element-hover'
    | 'bg-element-active'
    | 'bg-neutral'
    | 'bg-neutral-hover'
    | 'bg-neutral-active'
    | 'primary-hover'
    | 'primary-active'
    | 'primary-subtle'
    | 'on-primary'
    | 'on-primary-hover'
    | 'on-primary-active'
    | 'accent-hover'
    | 'accent-active'
    | 'accent-subtle'
    | 'on-accent'
    | 'on-accent-hover'
    | 'on-accent-active'
    | 'text-accent'
    | 'border-accent'
    | 'text-heading'
    | 'text-primary'
    | 'text-secondary'
    | 'text-brand'
    | 'text-inverse'
    | 'text-info'
    | 'text-warn'
    | 'text-success'
    | 'text-danger'
    | 'border-subtle'
    | 'border-default'
    | 'border-strong'
    | 'border-brand'
    | 'border-info'
    | 'border-success'
    | 'border-warn'
    | 'border-danger'
    | 'bg-info'
    | 'bg-info-hover'
    | 'bg-info-active'
    | 'bg-info-disabled'
    | 'bg-info-subtle'
    | 'bg-success'
    | 'bg-success-hover'
    | 'bg-success-active'
    | 'bg-success-disabled'
    | 'bg-success-subtle'
    | 'bg-warn'
    | 'bg-warn-hover'
    | 'bg-warn-active'
    | 'bg-warn-disabled'
    | 'bg-warn-subtle'
    | 'bg-danger'
    | 'bg-danger-hover'
    | 'bg-danger-active'
    | 'bg-danger-disabled'
    | 'bg-danger-subtle'
    | 'scroll-bg'
    | 'scroll-thumb'
    | 'scroll-thumb-hover'
    | 'meta-brand-palette'
    | 'meta-accent-palette'
    | undefined
  > = computed(() => {
    const colorInput = this.color();

    if (!colorInput) return undefined;

    if (isThemedColor(colorInput)) {
      return this.isDarkMode() && colorInput.dark ? colorInput.dark : colorInput.light;
    }

    if (isPaletteToken(colorInput) && this.isDarkMode()) {
      return invertPaletteToken(colorInput) as Color;
    }

    return colorInput;
  });
  private readonly activeBgColorToken: Signal<Color | undefined> = computed(() => {
    const bgInput = this.bgColor();

    if (!bgInput) return undefined;

    let token: Color | 'auto';

    if (bgInput === 'auto') {
      token = 'auto';
    } else if (isThemedColor(bgInput)) {
      token = this.isDarkMode() && bgInput.dark ? bgInput.dark : bgInput.light;
    } else {
      if (isPaletteToken(bgInput) && this.isDarkMode()) {
        token = invertPaletteToken(bgInput) as Color;
      } else {
        token = bgInput;
      }
    }

    if (token === 'auto') {
      const fg = this.activeColorToken();

      return fg ? getComplementaryToken(fg) : undefined;
    }

    return token;
  });

  protected readonly resolvedSize: Signal<string> = computed(() => {
    const s = this.size();

    return isNaN(Number(s)) ? s : `${Number(s)}px`;
  });
  protected readonly resolvedColor: Signal<string> = computed(() => {
    const token = this.activeColorToken();

    return token ? resolveTokenToCssVar(token) : 'currentColor';
  });
  protected readonly resolvedBgColor: Signal<string | undefined> = computed(() => {
    const token = this.activeBgColorToken();

    if (!token) return undefined;

    return resolveTokenToCssVar(token);
  });
  protected readonly svg: Signal<'' | SafeHtml> = computed<SafeHtml | ''>(() => {
    const icon = this.icon();

    if (!icon?.svgContent) return '';

    const strokeWidth = this.strokeWidth() ?? 1.5;

    const svg = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="${icon.viewBox ?? '0 0 24 24'}"
      width="100%"    height="100%"   fill="none"
      stroke="currentColor"
      stroke-width="${strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      ${icon.svgContent}
    </svg>
  `.trim();

    return this.domSanitizer.bypassSecurityTrustHtml(svg);
  });

  /** Icon definition or registered Lucide icon name to render. Required input. */
  public readonly name: InputSignal<IconName> = input.required<IconName>();
  /** Rendered icon dimension in CSS pixels. Defaults to `'24'`. */
  public readonly size: InputSignal<IconSize> = input<IconSize>('24');
  /** Semantic color role applied to the component presentation. Optional; omission leaves the value undefined. */
  public readonly color: InputSignal<ThemedColor | undefined> = input<ThemedColor | undefined>(undefined);
  /** Optional background color behind the icon; auto selects the themed backing behavior. Optional; omission leaves the value undefined. */
  public readonly bgColor: InputSignal<'auto' | ThemedColor | undefined> = input<ThemedColor | 'auto' | undefined>(undefined);
  /** SVG stroke-width override for the icon. Optional; omission leaves the value undefined. */
  public readonly strokeWidth: InputSignal<IconStrokeWidth | undefined> = input<IconStrokeWidth | undefined>(undefined);
  /** Whether the visual is decorative and should be hidden from assistive technology. Defaults to `true`. */
  public readonly decorative: InputSignal<boolean> = input(true);
  /** Optional accessible name when visible text does not provide an appropriate control name. Optional; omission leaves the value undefined. */
  public readonly ariaLabel: InputSignal<string | undefined> = input<string | undefined>(undefined);

  constructor() {
    let requestId = 0;

    effect(() => {
      const currentId = ++requestId;

      const name = this.name();

      this.icon.set(undefined);
      this.loadError.set(null);

      loadIcon(name)
        .then((resolved) => {
          if (currentId !== requestId) return;

          this.handleLoadSuccess(resolved, name);
        })
        .catch((error) => {
          if (currentId !== requestId) return;

          this.handleLoadError(error);
        });
    });
  }

  //#region Helpers

  private handleLoadSuccess(iconDefinition: IIconDefinition | null, name: IconName): void {
    if (!iconDefinition?.svgContent) {
      if (isDevMode()) {
        throw new Error(`[icon] Unknown Icon: name="${name}"`);
      }

      this.icon.set(undefined);

      return;
    }

    this.icon.set(iconDefinition);
  }

  private handleLoadError(error: unknown): void {
    this.loadError.set(error);

    if (isDevMode()) {
      console.error('[icon] Failed to load icon', {
        name: this.name(),
        size: this.size(),
        error
      });
    }

    this.icon.set(undefined);
  }

  //#endregion
}
