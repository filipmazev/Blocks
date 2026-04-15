import { Component, computed, effect, inject, input, isDevMode, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Color, getComplementaryToken, invertPaletteToken, isPaletteToken, isThemedColor, resolveTokenToCssVar, ThemedColor, ThemingService } from '@filip.mazev/blocks/core';
import { IconName, IconSize, IconStrokeWidth } from '../types/icon.types';
import { IconDefinition } from '../interfaces/icon-definition.interface';
import { loadIcon } from '../helpers/icon.resolve';

@Component({
  selector: 'bx-icon',
  standalone: true,
  templateUrl: './icon.html',
  styleUrl: './icon.scss'
})
export class Icon {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly themingService = inject(ThemingService);

  protected readonly resolvedSize = computed(() => {
    const s = this.size();
    return isNaN(Number(s)) ? s : `${Number(s)}px`;
  });

  protected readonly resolvedColor = computed(() => {
    const token = this.activeColorToken();
    return token ? resolveTokenToCssVar(token) : 'currentColor';
  });

  protected readonly resolvedBgColor = computed(() => {
    const token = this.activeBgColorToken();
    if (!token) return undefined;

    return resolveTokenToCssVar(token);
  });

  protected readonly svg = computed<SafeHtml | ''>(() => {
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

    return this.sanitizer.bypassSecurityTrustHtml(svg);
  });

  public readonly name = input.required<IconName>();
  public readonly size = input<IconSize>('24');

  public readonly color = input<ThemedColor | undefined>(undefined);
  public readonly bgColor = input<ThemedColor | 'auto' | undefined>(undefined);

  public readonly strokeWidth = input<IconStrokeWidth | undefined>(undefined);
  public readonly decorative = input(true);
  public readonly ariaLabel = input<string | undefined>(undefined);

  private readonly icon = signal<IconDefinition | undefined>(undefined);
  private readonly loadError = signal<unknown>(null);

  private readonly isDarkMode = computed(() => this.themingService.activeTheme() === 'dark');

  private readonly activeColorToken = computed(() => {
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

  private readonly activeBgColorToken = computed(() => {
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

  //#region Handlers

  private handleLoadSuccess(iconDefinition: IconDefinition | null, name: IconName): void {
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
