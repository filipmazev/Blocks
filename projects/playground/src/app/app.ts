import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, DOCUMENT, effect, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';

import { filter, fromEvent, map } from 'rxjs';

import { SlideToggle } from '@filip.mazev/blocks/forms';
import { ModalService } from '@filip.mazev/blocks/modal';
import { INavigationTreeGroup, ITopNavConfig, TopNav, TopNavActionsDirective, TopNavBrandDirective } from '@filip.mazev/blocks/navigation';
import { SidePanel, SidePanelFooterDirective, SidePanelHeaderDirective, SidePanelLayout, TooltipDirective } from '@filip.mazev/blocks/primitives';

import { ThemingService } from '@core/services/theming.service';
import { Button } from '@forms/components/button/button';
import { Icon } from '@icons/components/icon/icon';
import { Sidenav } from '@playground/components/shared/sidenav/sidenav';
import { ThemeStudio } from '@playground/components/shared/theme-studio/theme-studio';
import { StudioAuroraDirective } from '@playground/directives/studio-aurora/studio-aurora.directive';
import { ThemeStudioService } from '@playground/services/theme-studio.service';

import { HighlightLoader } from 'ngx-highlightjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    Sidenav,
    Button,
    Icon,
    TopNav,
    TopNavBrandDirective,
    TopNavActionsDirective,
    SidePanel,
    SidePanelLayout,
    SidePanelHeaderDirective,
    SidePanelFooterDirective,
    ThemeStudio,
    StudioAuroraDirective,
    TooltipDirective,
    SlideToggle
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly highlightLoader = inject(HighlightLoader);

  protected readonly themingService = inject(ThemingService);
  protected readonly modalService = inject(ModalService);
  protected readonly themeStudioService = inject(ThemeStudioService);

  private readonly currentUrl: Signal<string> = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects)
    ),
    { initialValue: this.router.url }
  );

  private readonly studioPanel: Signal<SidePanel | undefined> = viewChild(SidePanel);

  protected readonly catalogRoute: Signal<boolean> = computed(() => /^\/(icons|tokens)(?:[/?#]|$)/.test(this.currentUrl()));
  protected readonly studioResizable: Signal<boolean> = computed(() => this.studioPanel()?.currentLayoutMode() === 'push');

  protected readonly studioWidth: WritableSignal<number | string> = signal(480);

  protected readonly studioMinWidth: number = 480;
  protected readonly studioMaxWidth: number = 624;
  protected readonly toolbarConfig: ITopNavConfig = { position: 'sticky', searchable: false, ariaLabel: 'Playground controls' };
  protected readonly toolbarGroups: readonly INavigationTreeGroup[] = [];

  protected readonly isDarkMode: Signal<boolean> = computed(() => this.themingService.activeTheme() === 'dark');

  constructor() {
    if (this.document.defaultView) {
      fromEvent<KeyboardEvent>(this.document, 'keydown')
        .pipe(takeUntilDestroyed())
        .subscribe((event) => this.handleHistoryShortcut(event));
    }

    effect(() => {
      const dark = this.isDarkMode();

      this.document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');

      if (this.document.defaultView) this.highlightLoader.setTheme(dark ? 'assets/styles/vs2015.css' : 'assets/styles/github.css');
    });

    effect(() => {
      if (!this.studioResizable() && this.studioWidth() !== this.studioMinWidth) this.studioWidth.set(this.studioMinWidth);
    });
  }

  //#region Helpers

  private handleHistoryShortcut(event: KeyboardEvent): void {
    if (
      event.defaultPrevented ||
      event.isComposing ||
      event.repeat ||
      event.altKey ||
      !(event.ctrlKey || event.metaKey) ||
      event.key.toLowerCase() !== 'z' ||
      !this.themeStudioService.open() ||
      this.modalService.modalsCount() > 0
    )
      return;

    const editingText = event.composedPath().some((target) => {
      if (!(target instanceof HTMLElement)) return false;

      return (
        target.isContentEditable ||
        target.tagName === 'TEXTAREA' ||
        (target.tagName === 'INPUT' && !['range', 'checkbox', 'radio', 'button', 'submit', 'reset', 'color'].includes((target as HTMLInputElement).type))
      );
    });

    if (editingText) return;

    event.preventDefault();

    if (event.shiftKey) {
      if (this.themeStudioService.canRedo()) this.themeStudioService.redo();
      else this.themeStudioService.status.set(this.themeStudioService.redoHint());
    } else if (this.themeStudioService.canUndo()) this.themeStudioService.undo();
    else this.themeStudioService.status.set(this.themeStudioService.undoHint());
  }

  //#endregion
}
