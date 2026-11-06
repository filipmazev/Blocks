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
  private readonly activeColorToken: Signal<Color | undefined> = computed(() => {
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
