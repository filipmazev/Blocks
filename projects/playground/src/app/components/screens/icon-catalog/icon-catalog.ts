import type { Signal, WritableSignal } from '@angular/core';

import { Clipboard } from '@angular/cdk/clipboard';
import { afterNextRender, ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, linkedSignal, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { IconName, LucideCategoryId } from '@filip.mazev/blocks/icons';
import type { IVirtualCollectionConfig, SidePanelBreakpoints, VirtualTrackBy } from '@filip.mazev/blocks/primitives';
import type { IIconCatalogCustomization } from '@playground/components/screens/icon-catalog/interfaces/iicon-catalog-customization.interface';
import type { IconCatalogPanel } from '@playground/components/screens/icon-catalog/types/icon-catalog.types';

import { Button, SearchInput, Select, SliderDirective, SlideToggle } from '@filip.mazev/blocks/forms';
import { Icon, LUCIDE_CATEGORIES, LUCIDE_ICON_CATEGORIES, lucideNames } from '@filip.mazev/blocks/icons';
import {
  Chip,
  Collapsible,
  InfiniteScrollDirective,
  PageContainer,
  SidePanel,
  SidePanelFooterDirective,
  SidePanelHeaderDirective,
  SidePanelLayout,
  TooltipDirective,
  VirtualCollection,
  VirtualItemDirective
} from '@filip.mazev/blocks/primitives';

import { WindowDimensionsService } from '@core/services/window-dimension.service';
import {
  ICON_CATALOG_CATEGORY_CHIP,
  ICON_CATALOG_COLORS,
  ICON_CATALOG_DEFAULTS,
  ICON_CATALOG_SELECTED_CATEGORY_CHIP
} from '@playground/components/screens/icon-catalog/constants/icon-catalog.constants';
import { IconCatalogPreferencesService } from '@playground/components/screens/icon-catalog/services/icon-catalog-preferences.service';
import { Readme } from '@playground/components/shared/readme/readme';
import { ScrollToTop } from '@playground/components/shared/scroll-to-top/scroll-to-top';

import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-icon-catalog',
  imports: [
    PageContainer,
    Highlight,
    Icon,
    FormsModule,
    SearchInput,
    Select,
    Button,
    Readme,
    Collapsible,
    Chip,
    InfiniteScrollDirective,
    SidePanel,
    SidePanelLayout,
    VirtualCollection,
    VirtualItemDirective,
    SidePanelHeaderDirective,
    SidePanelFooterDirective,
    SliderDirective,
    SlideToggle,
    TooltipDirective,
    ScrollToTop
  ],
  providers: [IconCatalogPreferencesService],
  templateUrl: './icon-catalog.html',
  styleUrl: './icon-catalog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCatalog {
  private readonly clipboard = inject(Clipboard);
  private readonly iconCatalogPreferencesService = inject(IconCatalogPreferencesService);
  private readonly windowDimensionsService = inject(WindowDimensionsService);

  private readonly allIcons: readonly IconName[] = lucideNames;
  private readonly batchSize: number = 72;
  private readonly categoryLabels: ReadonlyMap<LucideCategoryId, string> = new Map(LUCIDE_CATEGORIES.map((category) => [category.id, category.label]));

  private readonly customizations: WritableSignal<ReadonlyMap<IconName, IIconCatalogCustomization>> = signal<ReadonlyMap<IconName, IIconCatalogCustomization>>(
    new Map<IconName, IIconCatalogCustomization>()
  );

  private readonly results: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('results');
  private readonly catalogScroll: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('catalogScroll');

  protected readonly filtersPanelBreakpoints: SidePanelBreakpoints = { '2xl': 'push' };
  protected readonly iconKey: VirtualTrackBy<IconName> = (name) => name;

  protected readonly isOnSmallerScreen: Signal<boolean> = computed(() => {
    return this.windowDimensionsService.isBelow('2xl');
  });
  protected readonly virtualConfig: Signal<IVirtualCollectionConfig> = computed(() => ({
    layout: 'grid',
    minColumnWidth: '7rem',
    estimatedRowHeight: this.selectedSize() + 80,
    overscan: 800
  }));

  protected readonly categoryChipConfig: typeof ICON_CATALOG_CATEGORY_CHIP = ICON_CATALOG_CATEGORY_CHIP;
  protected readonly selectedCategoryChipConfig: typeof ICON_CATALOG_SELECTED_CATEGORY_CHIP = ICON_CATALOG_SELECTED_CATEGORY_CHIP;
  protected readonly colors: typeof ICON_CATALOG_COLORS = ICON_CATALOG_COLORS;
  protected readonly categories: typeof LUCIDE_CATEGORIES = LUCIDE_CATEGORIES;

  protected readonly activePanel: WritableSignal<IconCatalogPanel> = signal<IconCatalogPanel>(null);
  protected readonly selectedIcon: WritableSignal<IconName | null> = signal<IconName | null>(null);

  protected readonly scrollContainer: WritableSignal<HTMLElement | undefined> = signal<HTMLElement | undefined>(undefined);

  protected readonly searchTerm: WritableSignal<string> = signal('');
  protected readonly copyStatus: WritableSignal<string> = signal('');

  protected readonly selectedSize: WritableSignal<number> = signal(this.iconCatalogPreferencesService.initial.size);
  protected readonly selectedStrokeWidth: WritableSignal<number> = signal(this.iconCatalogPreferencesService.initial.strokeWidth);
  protected readonly selectedCategories: WritableSignal<readonly LucideCategoryId[]> = signal(this.iconCatalogPreferencesService.initial.categories);

  protected readonly selectedCategoryIds: Signal<ReadonlySet<LucideCategoryId>> = computed(() => new Set(this.selectedCategories()));
  protected readonly highlightedIcon: Signal<IconName | null> = computed(() => (this.activePanel() === 'details' ? this.selectedIcon() : null));
  protected readonly filteredIcons: Signal<readonly IconName[]> = computed(() => {
    const terms = this.searchTerm()
      .toLowerCase()
      .trim()
      .split(/[\s_-]+/)
      .filter(Boolean);
    const selected = this.selectedCategoryIds();

    return this.allIcons.filter(
      (name) => terms.every((term) => name.includes(term)) && (!selected.size || LUCIDE_ICON_CATEGORIES[name].some((id) => selected.has(id)))
    );
  });

  protected readonly renderedCount: WritableSignal<number> = linkedSignal<readonly IconName[], number>({
    source: this.filteredIcons,
    computation: () => this.batchSize
  });

  protected readonly hasActiveFilters: Signal<boolean> = computed((): boolean => this.selectedCategories().length > 0);
  protected readonly visibleIcons: Signal<readonly IconName[]> = computed(() => this.filteredIcons().slice(0, this.renderedCount()));
  protected readonly hasMore: Signal<boolean> = computed(() => this.visibleIcons().length < this.filteredIcons().length);
  protected readonly details: Signal<IIconCatalogCustomization> = computed(() => {
    const name = this.selectedIcon();

    return (name ? this.customizations().get(name) : undefined) ?? this.initialCustomization();
  });
  protected readonly selectedCategoryLabels: Signal<readonly string[]> = computed(() => {
    const name = this.selectedIcon();

    return name ? LUCIDE_ICON_CATEGORIES[name].map((id) => this.categoryLabels.get(id) ?? id) : [];
  });
  protected readonly selectedCode: Signal<string> = computed(() => {
    const settings = this.details();
    const attributes: string[] = [`name="${this.selectedIcon() ?? 'blocks'}"`];

    if (settings.size !== 24) attributes.push(`[size]="${settings.size}"`);

    if (settings.strokeWidth !== 1.5) attributes.push(`[strokeWidth]="${settings.strokeWidth}"`);

    attributes.push(`color="${settings.color}"`);

    if (settings.background) attributes.push('bgColor="auto"');

    return `<bx-icon ${attributes.join(' ')} />`;
  });

  constructor() {
    afterNextRender(() => {
      this.scrollContainer.set(this.catalogScroll()?.nativeElement);
    });
    effect(() => {
      this.selectedCode();
      this.copyStatus.set('');
    });
  }

  protected search(value: string): void {
    this.searchTerm.set(value);
    this.resetScroll();
  }

  protected filterCategories(values: readonly LucideCategoryId[] | null): void {
    this.selectedCategories.set(values?.slice(0, 1) ?? []);
    this.resetScroll();
  }

  protected toggleCategory(category: LucideCategoryId, selected: boolean): void {
    this.filterCategories(selected ? [category] : this.selectedCategories().filter((id: LucideCategoryId): boolean => id !== category));
  }

  protected renderMore(): void {
    if (this.hasMore()) this.renderedCount.update((count) => Math.min(count + this.batchSize, this.filteredIcons().length));
  }

  protected selectIcon(name: IconName): void {
    if (!this.customizations().has(name)) this.customizations.update((previous) => new Map(previous).set(name, this.initialCustomization()));

    this.selectedIcon.set(name);
    this.activePanel.set('details');
  }

  protected panelChanged(panel: Exclude<IconCatalogPanel, null>, open: boolean): void {
    if (open) this.activePanel.set(panel);
    else if (this.activePanel() === panel) this.activePanel.set(null);
  }

  protected customize(patch: Partial<IIconCatalogCustomization>): void {
    const name = this.selectedIcon();

    if (!name) return;

    this.customizations.update((previous) => new Map(previous).set(name, { ...this.details(), ...patch }));
  }

  protected resetCustomization(): void {
    this.customize(this.initialCustomization());
  }

  protected resetFilters(): void {
    this.selectedSize.set(ICON_CATALOG_DEFAULTS.size);
    this.selectedStrokeWidth.set(ICON_CATALOG_DEFAULTS.strokeWidth);
    this.selectedCategories.set([]);
    this.resetScroll();
  }

  protected copyCode(): void {
    this.copyStatus.set(this.clipboard.copy(this.selectedCode()) ? 'Copied icon code.' : 'Copy failed. Select the code and copy it manually.');
  }

  //#region Helpers

  private initialCustomization(): IIconCatalogCustomization {
    return { size: Math.max(64, this.selectedSize()), strokeWidth: this.selectedStrokeWidth(), color: 'accent', background: true };
  }

  private resetScroll(): void {
    const container = this.scrollContainer();
    const results = this.results()?.nativeElement;

    if (!container || !results) return;

    const documentScroll = container === container.ownerDocument.scrollingElement;
    const viewportTop = documentScroll ? 0 : container.getBoundingClientRect().top + container.clientTop;
    const offset = results.getBoundingClientRect().top - viewportTop;

    if (offset < 0) container.scrollTo({ top: Math.max(0, container.scrollTop + offset), behavior: 'instant' });
  }

  //#endregion
}
