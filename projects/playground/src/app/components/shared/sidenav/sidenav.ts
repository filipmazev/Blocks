import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ISidenavLink } from '@playground/interfaces/isidenav-link.interface';
import { WindowDimensionsService } from '@core/services/window-dimension.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss'
})
export class Sidenav {
  private readonly windowDimensionsService = inject(WindowDimensionsService);

  public links = input.required<ISidenavLink[]>();
  public title = input.required<string>();

  protected isHamburgerMenuOpen = signal(false);
  protected isHamburgerMenu = signal(false);

  protected dimensions = this.windowDimensionsService.dimensions;

  constructor() {
    effect(() => {
      const width = this.dimensions().width;
      this.checkScreenSize(width);
    })
  }

  private checkScreenSize(width: number) {
    const mobile = width < this.windowDimensionsService.breakpoints.lg;
    this.isHamburgerMenu.set(mobile);

    if (!mobile) {
      this.isHamburgerMenuOpen.set(false);
    }
  }

  protected toggleMobileMenu() {
    this.isHamburgerMenuOpen.update(v => !v);
  }

  protected closeMobileMenu() {
    this.isHamburgerMenuOpen.set(false);
  }
}