import { Highlight } from 'ngx-highlightjs';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icon, IconName, IconSize, IconStrokeWidth, lucideNames } from '@filip.mazev/blocks/icons';
import { Button, BxSelectOption, SearchInput, Select } from '@filip.mazev/blocks/forms';
import { Readme } from '../../shared/readme/readme';

@Component({
  selector: 'app-icon-catalog',
  imports: [Highlight, Icon, FormsModule, SearchInput, Select, Button, Readme],
  templateUrl: './icon-catalog.html',
  styleUrl: './icon-catalog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCatalog {
  protected readonly pageSize = 48;
  protected readonly allIcons: readonly IconName[] = lucideNames;
  protected readonly sizes: IconSize[] = ['16', '20', '24', '28', '32', '36', '40', '44', '48'];
  protected readonly strokeWidths: IconStrokeWidth[] = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3];
  protected readonly sizeSelectOptions: BxSelectOption<IconSize>[] = this.sizes.map((value) => ({ label: `${value}px`, value }));
  protected readonly strokeSelectOptions: BxSelectOption<IconStrokeWidth>[] = this.strokeWidths.map((value) => ({ label: `${value}px`, value }));
  protected readonly searchTerm = signal('');
  protected readonly selectedSize = signal<IconSize>('24');
  protected readonly selectedStrokeWidth = signal<IconStrokeWidth>(1.5);
  protected readonly page = signal(0);
  protected readonly selectedIcon = signal<IconName | null>(null);
  protected readonly filteredIcons = computed(() => {
    const query = this.searchTerm().toLowerCase().trim();
    return query ? this.allIcons.filter((name) => name.includes(query)) : this.allIcons;
  });

  protected readonly pageCount = computed(() => Math.max(1, Math.ceil(this.filteredIcons().length / this.pageSize)));
  protected readonly visibleIcons = computed(() => this.filteredIcons().slice(this.page() * this.pageSize, (this.page() + 1) * this.pageSize));
  protected readonly rangeStart = computed(() => (this.filteredIcons().length ? this.page() * this.pageSize + 1 : 0));
  protected readonly rangeEnd = computed(() => Math.min((this.page() + 1) * this.pageSize, this.filteredIcons().length));
  protected readonly selectedCode = computed(
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
