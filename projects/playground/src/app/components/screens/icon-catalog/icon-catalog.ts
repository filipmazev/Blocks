import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Button, BxSelectOption, SearchInput, Select } from '@filip.mazev/blocks/forms';
import { Icon, IconName, IconSize, IconStrokeWidth, lucideNames } from '@filip.mazev/blocks/icons';

import { Readme } from '@playground/components/shared/readme/readme';

import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-icon-catalog',
  imports: [Highlight, Icon, FormsModule, SearchInput, Select, Button, Readme],
  templateUrl: './icon-catalog.html',
  styleUrl: './icon-catalog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCatalog {
  protected readonly pageSize: number = 48;
  protected readonly allIcons: readonly IconName[] = lucideNames;
  protected readonly sizes: IconSize[] = ['16', '20', '24', '28', '32', '36', '40', '44', '48'];
  protected readonly strokeWidths: IconStrokeWidth[] = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3];
  protected readonly sizeSelectOptions: BxSelectOption<IconSize>[] = this.sizes.map((value) => ({ label: `${value}px`, value }));
  protected readonly strokeSelectOptions: BxSelectOption<IconStrokeWidth>[] = this.strokeWidths.map((value) => ({ label: `${value}px`, value }));

  protected readonly searchTerm: WritableSignal<string> = signal('');
  protected readonly selectedSize: WritableSignal<IconSize> = signal<IconSize>('24');

  protected readonly selectedStrokeWidth: WritableSignal<IconStrokeWidth> = signal<IconStrokeWidth>(1.5);
  protected readonly page: WritableSignal<number> = signal(0);

  protected readonly selectedIcon: WritableSignal<IconName | null> = signal<IconName | null>(null);

  protected readonly filteredIcons: Signal<readonly IconName[]> = computed(() => {
    const query = this.searchTerm().toLowerCase().trim();

    return query ? this.allIcons.filter((name) => name.includes(query)) : this.allIcons;
  });
  protected readonly pageCount: Signal<number> = computed(() => Math.max(1, Math.ceil(this.filteredIcons().length / this.pageSize)));
  protected readonly visibleIcons: Signal<IconName[]> = computed(() =>
    this.filteredIcons().slice(this.page() * this.pageSize, (this.page() + 1) * this.pageSize)
  );
  protected readonly rangeStart: Signal<number> = computed(() => (this.filteredIcons().length ? this.page() * this.pageSize + 1 : 0));
  protected readonly rangeEnd: Signal<number> = computed(() => Math.min((this.page() + 1) * this.pageSize, this.filteredIcons().length));
  protected readonly selectedCode: Signal<string> = computed(
    () =>
      `<bx-icon name="${this.selectedIcon() ?? 'blocks'}" size="${this.selectedSize()}" [strokeWidth]="${this.selectedStrokeWidth()}" color="primary" bgColor="auto" />`
  );

  protected search(value: string): void {
    this.searchTerm.set(value);
    this.page.set(0);
  }

  protected changePage(delta: number): void {
    this.page.update((value) => Math.max(0, Math.min(this.pageCount() - 1, value + delta)));
  }
}
