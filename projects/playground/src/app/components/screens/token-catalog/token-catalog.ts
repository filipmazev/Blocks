import type { Signal, WritableSignal } from '@angular/core';

import { Clipboard } from '@angular/cdk/clipboard';
import { afterRenderEffect, ChangeDetectionStrategy, Component, computed, ElementRef, inject, linkedSignal, signal, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { ICssToken } from '@filip.mazev/blocks/core';
import type { IVirtualCollectionConfig, VirtualTrackBy } from '@filip.mazev/blocks/primitives';
import type { ITokenCatalogChunk } from '@playground/components/screens/token-catalog/interfaces/itoken-catalog-chunk.interface';
import type { ITokenCatalogColor } from '@playground/components/screens/token-catalog/interfaces/itoken-catalog-color.interface';
import type { ITokenCatalogEntry } from '@playground/components/screens/token-catalog/interfaces/itoken-catalog-entry.interface';
import type { ITokenCatalogGroup } from '@playground/components/screens/token-catalog/interfaces/itoken-catalog-group.interface';
import type { TokenCatalogCategory, TokenCopyFormat } from '@playground/components/screens/token-catalog/types/token-catalog.types';

import { BxA11yService, CSS_TOKEN_CATALOG, ThemingService } from '@filip.mazev/blocks/core';
import { Button, MultiSelect, SearchInput } from '@filip.mazev/blocks/forms';
import {
  Accordion,
  Card,
  Collapsible,
  ContextMenuDirective,
  Divider,
  InfiniteScrollDirective,
  Menu,
  MenuItem,
  PageContainer,
  Tag,
  VirtualCollection,
  VirtualItemDirective
} from '@filip.mazev/blocks/primitives';

import {
  TOKEN_CATALOG_CATEGORIES,
  TOKEN_COPY_FORMATS,
  TOKEN_COPY_LABELS
} from '@playground/components/screens/token-catalog/constants/token-catalog.constants';
import { createCatalogEntries } from '@playground/components/screens/token-catalog/helpers/token-catalog.helpers';
import { formatCatalogColor } from '@playground/components/screens/token-catalog/helpers/token-color.helpers';
import { Readme } from '@playground/components/shared/readme/readme';
import { ScrollToTop } from '@playground/components/shared/scroll-to-top/scroll-to-top';

import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-token-catalog',
  imports: [
    PageContainer,
    FormsModule,
    Button,
    MultiSelect,
    SearchInput,
    Accordion,
    Divider,
    Card,
    Collapsible,
    Readme,
    Highlight,
    VirtualCollection,
    VirtualItemDirective,
    ScrollToTop,
    InfiniteScrollDirective,
    ContextMenuDirective,
    Menu,
    MenuItem,
    Tag
  ],
  templateUrl: './token-catalog.html',
  styleUrl: './token-catalog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenCatalog {
  private readonly bxA11yService = inject(BxA11yService);
  private readonly clipboard = inject(Clipboard);
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  protected readonly themingService = inject(ThemingService);

  private readonly entries: readonly ITokenCatalogEntry[] = createCatalogEntries();
  private readonly liveTokens: readonly ICssToken[] = CSS_TOKEN_CATALOG.filter((token) => token.scope === 'global' || token.scope === 'theme');
  private readonly colorCache: Map<string, ITokenCatalogColor | null> = new Map();

  private readonly normalizedLiveValues: Signal<ReadonlyMap<string, string>> = computed(
    () => new Map(Object.entries(this.liveValues()).map(([name, value]) => [name, value.toLowerCase()]))
  );
  private readonly colorSearch: Signal<ReadonlyMap<string, string>> = computed(() => {
    const values = new Map<string, string>();

    for (const token of this.liveTokens) {
      const color = this.resolveColor(token.name);

      if (color) values.set(token.name, `${color.hex} ${color.rgb} ${color.rgba}`);
    }

    return values;
  });

  private readonly viewports: Signal<readonly VirtualCollection<ITokenCatalogEntry>[]> = viewChildren<VirtualCollection<ITokenCatalogEntry>>(VirtualCollection);

  protected readonly entryKey: VirtualTrackBy<ITokenCatalogEntry> = (entry) => entry.id;
  protected readonly colorVirtualConfig: IVirtualCollectionConfig = { layout: 'grid', minColumnWidth: '10rem', estimatedRowHeight: 288, overscan: 800 };
  protected readonly tokenVirtualConfig: IVirtualCollectionConfig = { layout: 'grid', minColumnWidth: '15rem', estimatedRowHeight: 576, overscan: 800 };
  protected readonly categories: typeof TOKEN_CATALOG_CATEGORIES = TOKEN_CATALOG_CATEGORIES;
  protected readonly copyFormats: typeof TOKEN_COPY_FORMATS = TOKEN_COPY_FORMATS;
  protected readonly variableCount: number = CSS_TOKEN_CATALOG.length;

  protected readonly searchTerm: WritableSignal<string> = signal('');
  protected readonly copyStatus: WritableSignal<string> = signal('');

  protected readonly selectedCategories: WritableSignal<readonly TokenCatalogCategory[]> = signal<readonly TokenCatalogCategory[]>([]);
  protected readonly liveValues: WritableSignal<Readonly<Record<string, string>>> = signal({});
  protected readonly expansionOverrides: WritableSignal<ReadonlyMap<string, boolean>> = signal(new Map<string, boolean>());

  protected readonly filteredEntries: Signal<readonly ITokenCatalogEntry[]> = computed(() => {
    const terms = this.searchTerm().toLowerCase().trim().split(/\s+/).filter(Boolean);
    const categories = this.selectedCategories();
    const liveValues = terms.length ? this.normalizedLiveValues() : undefined;
    const colorValues = terms.some((term) => /#|rgba?\(/.test(term)) ? this.colorSearch() : undefined;

    return this.entries.filter((entry) => {
      if (categories.length && !categories.includes(entry.category)) return false;

      if (!terms.length) return true;

      if (terms.every((term) => entry.search.includes(term))) return true;

      const name = entry.reference.startsWith('var(') ? entry.reference.slice(4, -1) : entry.name;
      const companion = entry.companionReference.slice(4, -1);
      const search = `${entry.search} ${liveValues?.get(name) ?? ''} ${liveValues?.get(companion) ?? ''} ${colorValues?.get(name) ?? ''} ${colorValues?.get(companion) ?? ''}`;

      return terms.every((term) => search.includes(term));
    });
  });
  protected readonly groups: Signal<readonly ITokenCatalogGroup[]> = computed(() => {
    const groups = new Map<string, ITokenCatalogEntry[]>();

    for (const entry of this.filteredEntries()) {
      const key = `${entry.category} / ${entry.group}`;
      const entries = groups.get(key) ?? [];

      entries.push(entry);
      groups.set(key, entries);
    }

    return [...groups].map(([id, entries]) => ({
      id,
      label: this.resolveGroupLabel(entries[0].group),
      total: entries.length,
      entries,
      chunks: Array.from({ length: Math.ceil(entries.length / 24) }, (_, index) => ({
        id: `${id}:${index}`,
        entries: entries.slice(index * 24, (index + 1) * 24)
      }))
    }));
  });

  protected readonly renderedChunks: WritableSignal<ReadonlyMap<string, number>> = linkedSignal<readonly ITokenCatalogGroup[], ReadonlyMap<string, number>>({
    source: this.groups,
    computation: () => new Map<string, number>()
  });

  protected readonly visibleChunks: Signal<ReadonlyMap<string, readonly ITokenCatalogChunk[]>> = computed(
    () => new Map(this.groups().map((group) => [group.id, group.chunks.slice(0, this.renderedChunks().get(group.id) ?? 2)]))
  );
  protected readonly visibleEntries: Signal<ReadonlyMap<string, readonly ITokenCatalogEntry[]>> = computed(
    () => new Map([...this.visibleChunks()].map(([id, chunks]) => [id, chunks.flatMap((chunk) => chunk.entries)]))
  );
  protected readonly colors: Signal<Readonly<Record<string, ITokenCatalogColor>>> = computed(() => {
    const colors: Record<string, ITokenCatalogColor> = {};

    for (const viewport of this.viewports()) {
      for (const entry of viewport.renderedItems()) {
        for (const reference of [entry.reference, entry.companionReference]) {
          if (!reference.startsWith('var(')) continue;

          const name = reference.slice(4, -1);
          const color = this.resolveColor(name);

          if (color) colors[name] = color;
        }
      }
    }

    return colors;
  });

  private colorContext: CanvasRenderingContext2D | null = null;

  constructor() {
    afterRenderEffect(() => {
      this.themingService.activeTheme();
      this.themingService.palette();
      this.themingService.highContrast();
      this.themingService.appearance();
      this.bxA11yService.isReducedMotion();

      if (!this.colorContext) {
        const canvas = this.nativeElement.ownerDocument.createElement('canvas');

        canvas.width = 1;
        canvas.height = 1;
        this.colorContext = canvas.getContext('2d', { willReadFrequently: true });
      }

      const styles = this.nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeElement);
      const values: Record<string, string> = {};

      for (const token of this.liveTokens) {
        const value = styles?.getPropertyValue(token.name).trim() ?? '';

        values[token.name] = value === 'currentColor' ? (styles?.color ?? '') : value;
      }

      this.colorCache.clear();
      this.liveValues.set(values);
    });
  }

  protected copy(entry: ITokenCatalogEntry, format: TokenCopyFormat): void {
    const references = entry.kind === 'pair' ? [entry.reference, entry.companionReference] : [entry.reference];
    const values = references.map((reference) => {
      const name = reference.startsWith('var(') ? reference.slice(4, -1) : reference;

      return format === 'variable' ? reference : format === 'name' ? name : this.colors()[name]?.[format];
    });

    if (values.some((value) => value === undefined)) {
      this.copyStatus.set(`Cannot resolve ${format} for ${entry.name}. Choose Copy CSS variable or Copy token name.`);

      return;
    }

    const text = values.join('\n');

    this.copyStatus.set(this.clipboard.copy(text) ? `Copied ${entry.name} as ${format}.` : `Copy failed. Select and copy this value: ${text}`);
  }

  protected copyLabel(entry: ITokenCatalogEntry, format: TokenCopyFormat): string {
    if (entry.kind === 'utility') return 'Copy class';

    if (entry.kind === 'breakpoint') return 'Copy Sass';

    return TOKEN_COPY_LABELS[format];
  }

  protected categoryTitle(category: TokenCatalogCategory): string {
    const option = this.categories.find((item) => item.value === category);

    return typeof option?.label === 'string' ? option.label : category;
  }

  protected canCopy(entry: ITokenCatalogEntry, format: TokenCopyFormat): boolean {
    if (entry.kind === 'utility' || entry.kind === 'breakpoint') return format === 'variable';

    return (
      format === 'variable' ||
      format === 'name' ||
      !!(this.colors()[entry.reference.slice(4, -1)] && (entry.kind !== 'pair' || this.colors()[entry.companionReference.slice(4, -1)]))
    );
  }

  protected groupTags(group: ITokenCatalogGroup): readonly string[] {
    const family = group.entries[0].group.split(' · ')[0];
    const tags: string[] = [];
    const isPalette = family.includes('palette') || family.includes('theme') || family === 'Theme companions';
    const current =
      family.startsWith('Current theme') || (!this.themingService.highContrast() && isPalette && group.label === this.themingService.paletteLabel());

    if (current) tags.push('Current theme');

    if (group.entries[0].kind === 'pair') tags.push('Companions');
    else if (isPalette && !current) tags.push('Palette');

    return tags;
  }

  protected isExpanded(group: ITokenCatalogGroup): boolean {
    return this.expansionOverrides().get(group.id) ?? this.groups()[0]?.id === group.id;
  }

  protected collapseAll(): void {
    this.expansionOverrides.set(new Map(this.groups().map((group) => [group.id, false])));
  }

  protected updateSearch(value: string): void {
    this.searchTerm.set(value);
    this.expansionOverrides.set(new Map<string, boolean>());
  }

  protected updateCategories(values: readonly TokenCatalogCategory[] | null | undefined): void {
    this.selectedCategories.set(values ?? []);
    this.expansionOverrides.set(new Map<string, boolean>());
  }

  protected renderMore(group: ITokenCatalogGroup): void {
    this.renderedChunks.update((previous) => new Map(previous).set(group.id, Math.min(group.chunks.length, (previous.get(group.id) ?? 2) + 2)));
  }

  protected toggleGroup(id: string, expanded: boolean): void {
    this.expansionOverrides.update((previous) => new Map(previous).set(id, expanded));
  }

  //#region Helpers

  private resolveGroupLabel(group: string): string {
    const separator = group.indexOf(' · ');

    if (separator < 0) return group === 'Semantic pairs' ? 'Semantic' : group;

    const label = group.slice(separator + 3);

    return label
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  private resolveColor(name: string): ITokenCatalogColor | undefined {
    const value = this.liveValues()[name];

    if (!value || !this.colorContext) return undefined;

    if (!this.colorCache.has(value)) this.colorCache.set(value, formatCatalogColor(value, this.colorContext) ?? null);

    return this.colorCache.get(value) ?? undefined;
  }

  //#endregion
}
