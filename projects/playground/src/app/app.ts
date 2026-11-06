import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, DOCUMENT, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';

import { filter, map } from 'rxjs';

import { INavigationTreeGroup, ITopNavConfig, TopNav, TopNavActionsDirective, TopNavBrandDirective } from '@filip.mazev/blocks/navigation';

import { ThemingService } from '@core/services/theming.service';
import { Button } from '@forms/components/button/button';
import { Icon } from '@icons/components/icon/icon';
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
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly highlightLoader = inject(HighlightLoader);

  protected readonly themingService = inject(ThemingService);

  private readonly currentUrl: Signal<string> = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects)
    ),
    { initialValue: this.router.url }
  );

  protected readonly catalogRoute: Signal<boolean> = computed(() => /^\/(icons|tokens)(?:[/?#]|$)/.test(this.currentUrl()));

  protected readonly toolbarConfig: ITopNavConfig = { position: 'sticky', searchable: false, ariaLabel: 'Playground controls' };
  protected readonly toolbarGroups: readonly INavigationTreeGroup[] = [];

  protected readonly isDarkMode: Signal<boolean> = computed(() => this.themingService.activeTheme() === 'dark');

  constructor() {
    effect(() => {
      const dark = this.isDarkMode();

      this.document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');

      if (this.document.defaultView) this.highlightLoader.setTheme(dark ? 'assets/styles/vs2015.css' : 'assets/styles/github.css');
    });
  }
}
