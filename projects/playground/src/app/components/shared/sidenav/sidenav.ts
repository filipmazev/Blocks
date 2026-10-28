import { DestroyRef, ElementRef, viewChild, Component, computed, effect, inject, input, signal, ChangeDetectionStrategy } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { FormsModule } from '@angular/forms';
import { SearchInput, Button } from '@filip.mazev/blocks/forms';
import { ScrollLockService, uuidv4 } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WindowDimensionsService } from '@core/services/window-dimension.service';
import { NavigationService, INavigationItem } from '@filip.mazev/blocks/navigation';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [A11yModule, FormsModule, SearchInput, Button, RouterLink, RouterLinkActive, BxSurfaceDirective],
  templateUrl: './sidenav.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './sidenav.scss'
})
export class Sidenav {
  private readonly dimensions = inject(WindowDimensionsService);
  private readonly navigation = inject(NavigationService);

  protected readonly isHamburgerMenuOpen = signal(false);
  protected readonly isHamburgerMenu = computed(() => this.dimensions.dimensions().width <= this.dimensions.breakpoints.lg);

  protected readonly query = signal('');

  protected readonly groups = computed(() => {
    const flatten = (items: INavigationItem[]): INavigationItem[] => items.flatMap((item) => [item, ...flatten(item.children ?? [])]);
    const term = this.query().trim().toLowerCase();
    const items = flatten(this.navigation.menu()).filter((item) => !term || `${item.label} ${item.section ?? ''}`.toLowerCase().includes(term));
    const groupOrder = ['Start', 'Forms', 'Primitives', 'Navigation', 'Icons', 'Modals', 'Notifications', 'Tools'];
    return groupOrder.map((title) => ({ title, items: items.filter((item) => item.section === title) })).filter((group) => group.items.length);
  });

  public readonly title = input.required<string>();

  private readonly scrollLock = inject(ScrollLockService);
  private readonly scrollLockId = uuidv4();
  private readonly menuToggle = viewChild('menuToggle', { read: ElementRef });

  constructor() {
    effect(() => {
      if (this.isHamburgerMenuOpen()) this.scrollLock.disableScroll(this.scrollLockId, { handleTouchInput: false });
      else this.scrollLock.enableScroll(this.scrollLockId);
    });
    inject(DestroyRef).onDestroy(() => this.scrollLock.enableScroll(this.scrollLockId));
    effect(() => {
      if (!this.isHamburgerMenu()) this.isHamburgerMenuOpen.set(false);
    });
  }

  protected toggleMobileMenu(): void {
    this.menuToggle()?.nativeElement.focus({ preventScroll: true });
    this.isHamburgerMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.isHamburgerMenuOpen.set(false);
  }
}
