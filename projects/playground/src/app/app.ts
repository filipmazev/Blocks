import { Component, DOCUMENT, inject, Renderer2, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightLoader } from 'ngx-highlightjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ThemingService } from '@core/services/theming.service';
import { Sidenav } from '@playground/components/shared/sidenav/sidenav';
import { ISidenavLink } from '@playground/interfaces/isidenav-link.interface';
import { IThemePalette } from '@playground/interfaces/itheme-palette.interface';
import { FormsModule } from '@angular/forms';
import { ThemeId } from '@playground/types/common.types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidenav, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly renderer = inject(Renderer2);
  private readonly document = inject(DOCUMENT);

  protected readonly title = signal('playground');

  protected readonly availableThemes: IThemePalette[] = [
    { id: 'default', label: 'Default', className: '' },
    { id: 'orange', label: 'Orange', className: 'theme-orange-company' }
  ];

  protected isDarkMode = signal(false);

  protected navLinks = signal<ISidenavLink[]>([
    { name: 'Home', route: '/' },
    { name: 'Modal', route: '/modal' }
  ]);

  protected selectedThemeId = signal<ThemeId>('orange');

  private hljsLoader: HighlightLoader = inject(HighlightLoader);

  private themingService = inject(ThemingService);

  constructor() {
    this.initThemeSubscription();
    this.initPalette();
  }

  private initPalette() {
    const savedPalette = localStorage.getItem('theme-palette');

    if (savedPalette && this.availableThemes.some((t) => t.id === savedPalette)) {
      this.setPalette(savedPalette as ThemeId);
    } else {
      this.setPalette('orange');
    }
  }

  protected initThemeSubscription() {
    this.themingService
      .getSystemTheme$()
      .pipe(takeUntilDestroyed())
      .subscribe((theme) => {
        const savedTheme = localStorage.getItem('theme');
        if (!savedTheme) {
          if (theme === 'dark') {
            this.enableDarkMode();
          } else {
            this.disableDarkMode();
          }
        } else {
          if (savedTheme === 'dark') {
            this.enableDarkMode();
          }
        }

        this.setCodeTheme();
      });
  }

  protected onThemeChange(themeId: ThemeId) {
    this.setPalette(themeId);
  }

  protected toggleTheme() {
    if (this.isDarkMode()) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
    this.setCodeTheme();
  }

  private enableDarkMode() {
    this.isDarkMode.set(true);
    this.renderer.setAttribute(this.document.documentElement, 'data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }

  private disableDarkMode() {
    this.isDarkMode.set(false);
    this.renderer.removeAttribute(this.document.documentElement, 'data-theme');
    localStorage.setItem('theme', 'light');
  }

  private setCodeTheme() {
    const codeTheme = this.isDarkMode() ? 'assets/styles/vs2015.css' : 'assets/styles/github.css';
    this.hljsLoader.setTheme(codeTheme);
  }

  private setPalette(themeId: ThemeId) {
    const theme = this.availableThemes.find((t) => t.id === themeId);
    if (!theme) return;

    this.selectedThemeId.set(themeId);
    localStorage.setItem('theme-palette', themeId);

    const root = this.document.documentElement;

    this.availableThemes.forEach((t) => {
      if (t.className) {
        this.renderer.removeClass(root, t.className);
      }
    });

    if (theme.className) {
      this.renderer.addClass(root, theme.className);
    }
  }
}
