import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, DOCUMENT, effect, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { INavigationTreeGroup, ITopNavConfig, TopNav, TopNavActionsDirective, TopNavBrandDirective } from '@filip.mazev/blocks/navigation';

import { ThemingService } from '@core/services/theming.service';
import { Button } from '@forms/components/button/button';
import { Icon } from '@icons/components/icon';
import { Sidenav } from '@playground/components/shared/sidenav/sidenav';

import { HighlightLoader } from 'ngx-highlightjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Sidenav, Button, Icon, TopNav, TopNavBrandDirective, TopNavActionsDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  private readonly document = inject(DOCUMENT);
  private readonly highlight = inject(HighlightLoader);

  protected readonly theme = inject(ThemingService);

  protected readonly toolbarConfig: ITopNavConfig = { position: 'sticky', searchable: false, ariaLabel: 'Playground controls' };
  protected readonly toolbarGroups: readonly INavigationTreeGroup[] = [];

  protected readonly isDarkMode: Signal<boolean> = computed(() => this.theme.activeTheme() === 'dark');

  constructor() {
    effect(() => {
      const dark = this.isDarkMode();

      this.document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');

      if (this.document.defaultView) this.highlight.setTheme(dark ? 'assets/styles/vs2015.css' : 'assets/styles/github.css');
    });
  }
}
