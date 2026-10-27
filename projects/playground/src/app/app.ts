import { ChangeDetectionStrategy, Component, computed, DOCUMENT, effect, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HighlightLoader } from 'ngx-highlightjs';
import { Sidenav } from '@playground/components/shared/sidenav/sidenav';
import { Icon } from '@icons/components/icon';
import { ThemingService } from '@core/services/theming.service';
import { Button } from '@forms/components/button/button';
import { Menu } from '@primitives/components/menu/menu';
import { MenuItem } from '@primitives/components/menu-item/menu-item';
import { DropdownDirective } from '@primitives/directives/dropdown.directive';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Sidenav, Button, Icon, Menu, MenuItem, DropdownDirective, BxSurfaceDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  private readonly document = inject(DOCUMENT);
  private readonly highlight = inject(HighlightLoader);
  protected readonly theme = inject(ThemingService);
  protected readonly availableThemes = this.theme.palettes;
  protected readonly selectedThemeId = this.theme.palette;
  protected readonly selectedThemeLabel = this.theme.paletteLabel;
  protected readonly isDarkMode = computed(() => this.theme.activeTheme() === 'dark');

  constructor() {
    effect(() => {
      const dark = this.isDarkMode();
      this.document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
      if (this.document.defaultView) this.highlight.setTheme(dark ? 'assets/styles/vs2015.css' : 'assets/styles/github.css');
    });
  }

  protected toggleTheme(): void {
    this.theme.setApplicationTheme(this.isDarkMode() ? 'light' : 'dark');
  }
}
