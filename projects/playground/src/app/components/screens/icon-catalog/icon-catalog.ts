import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { lucideNames } from '../../../../../../blocks/icons/assets/lucide/names';
import { IconName, IconSize, IconStrokeWidth } from '@icons/types/icon.types';
import { Icon } from '@icons/components/icon';

@Component({
  selector: 'app-icon-catalog',
  imports: [Icon, FormsModule],
  templateUrl: './icon-catalog.html',
  styleUrl: './icon-catalog.scss'
})
export class IconCatalog {
  protected readonly allIcons: IconName[] = [...lucideNames];

  protected readonly sizes: IconSize[] = ['16', '20', '24', '28', '32', '36', '40', '44', '48'];

  protected readonly strokeWidths: IconStrokeWidth[] = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3];

  protected searchTerm = signal('');
  protected selectedSize = signal<IconSize>('24');

  protected selectedStrokeWidth = signal<IconStrokeWidth>(1.5);

  protected filteredIcons = computed(() => {
    const query = this.searchTerm().toLowerCase().trim();
    if (!query) return this.allIcons;

    return this.allIcons.filter((name) => name.toLowerCase().includes(query));
  });
}
