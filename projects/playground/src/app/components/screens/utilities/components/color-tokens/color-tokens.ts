import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { Color } from '@filip.mazev/blocks/core';

import { getComplementaryToken, invertPaletteToken, isPaletteToken, isThemedColor, resolveThemeId, resolveTokenToCssVar } from '@filip.mazev/blocks/core';
import { Button, Select } from '@filip.mazev/blocks/forms';
import { Alert, Card, Grid, Stack } from '@filip.mazev/blocks/primitives';

import { UTILITY_COLOR_TOKENS } from '@playground/components/screens/utilities/constants/utilities.constants';

@Component({
  selector: 'app-color-tokens',
  imports: [Alert, Button, Card, Grid, RouterLink, Select, Stack],
  templateUrl: './color-tokens.html',
  styleUrl: '../../utility-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorTokens {
  protected readonly colorTokens: typeof UTILITY_COLOR_TOKENS = UTILITY_COLOR_TOKENS;
  protected readonly restoredPalette: string = resolveThemeId('carbon-cobalt') ?? 'Unrecognized palette';
  protected readonly unknownPalette: string = resolveThemeId('unknown-palette') ?? 'Unrecognized palette';

  protected readonly colorToken: WritableSignal<Color> = signal('primary');

  protected readonly cssVariable: Signal<string> = computed(() => resolveTokenToCssVar(this.colorToken()));
  protected readonly complementaryToken: Signal<Color> = computed(() => getComplementaryToken(this.colorToken()));
  protected readonly invertedToken: Signal<Color> = computed(() => invertPaletteToken(this.colorToken()));
  protected readonly paletteToken: Signal<boolean> = computed(() => isPaletteToken(this.colorToken()));
  protected readonly themedColor: Signal<boolean> = computed(() => isThemedColor({ light: this.colorToken(), dark: this.invertedToken() }));

  protected setColorToken(color: Color | null): void {
    this.colorToken.set(color ?? 'primary');
  }
}
