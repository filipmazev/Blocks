import type { Signal, WritableSignal } from '@angular/core';
import type { Data } from '@angular/router';

import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, linkedSignal, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import type { IBxSelectOption } from '@filip.mazev/blocks/forms';
import type { AppNavigationSection } from '@playground/app.navigation';
import type { ComponentExample } from '@playground/components/screens/library-components/component-demo/component-catalog';
import type { IComponentCatalogGroup } from '@playground/components/screens/library-components/component-demo/interfaces/icomponent-catalog-group.interface';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import {
  Button,
  Checkbox,
  CheckboxIndicator,
  FormField,
  InputField,
  MultiSelect,
  NativeControlDirective,
  PrefixDirective,
  Radio,
  RadioGroup,
  RangeSlider,
  SearchInput,
  SliderDirective,
  SlideToggle,
  SuffixDirective
} from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { Stepper } from '@filip.mazev/blocks/navigation';
import {
  Accordion,
  Alert,
  Card,
  Chip,
  Collapsible,
  Divider,
  InfiniteScrollDirective,
  Menu,
  MenuItem,
  PageContainer,
  PageHeader,
  Popover,
  ProgressBar,
  Skeleton,
  Tag
} from '@filip.mazev/blocks/primitives';

import { COMPONENT_EXAMPLES } from '@playground/components/screens/library-components/component-demo/component-catalog';
import { COMPONENT_CATEGORIES } from '@playground/components/screens/library-components/component-demo/constants/component-categories.constants';
import {
  COMPONENT_PREVIEW_DAYS,
  COMPONENT_PREVIEW_WEEKDAYS
} from '@playground/components/screens/library-components/component-demo/constants/component-preview-fixtures.constants';
import { componentPreviewKind } from '@playground/components/screens/library-components/component-demo/helpers/component-preview.helpers';
import { componentRoute } from '@playground/components/screens/library-components/component-demo/helpers/component-route.helpers';
import { STEPPER_GALLERY_STEPS } from '@playground/components/screens/library-components/stepper-examples/constants/stepper-demo.constants';
import { ScrollToTop } from '@playground/components/shared/scroll-to-top/scroll-to-top';

@Component({
  selector: 'app-component-index',
  imports: [
    PageContainer,
    PageHeader,
    RouterLink,
    BxSurfaceDirective,
    FormsModule,
    SearchInput,
    MultiSelect,
    InputField,
    FormField,
    NativeControlDirective,
    Checkbox,
    CheckboxIndicator,
    Radio,
    RadioGroup,
    SlideToggle,
    RangeSlider,
    SliderDirective,
    PrefixDirective,
    SuffixDirective,
    Button,
    Card,
    Chip,
    BxSurfaceDirective,
    Collapsible,
    Accordion,
    Stepper,
    Divider,
    Icon,
    Tag,
    Alert,
    Skeleton,
    Menu,
    MenuItem,
    Popover,
    ProgressBar,
    InfiniteScrollDirective,
    ScrollToTop
  ],
  templateUrl: './component-index.html',
  styleUrl: './component-index.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentIndex {
  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly routeData: Signal<Data> = toSignal(this.activatedRoute.data, { initialValue: this.activatedRoute.snapshot.data });

  private readonly groupOrder: readonly AppNavigationSection[] = COMPONENT_CATEGORIES.map((category) => category.section);
  private readonly batchSize: number = 12;

  private readonly baseEntries: Signal<readonly ComponentExample[]> = computed(() =>
    COMPONENT_EXAMPLES.filter((entry) => (!this.layoutOnly() || entry.layout) && (!this.category() || entry.group === this.category()))
  );

  private readonly catalogScrollRef: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('catalogScroll');
  private readonly resultsRef: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('results');

  protected readonly gallerySteps: typeof STEPPER_GALLERY_STEPS = STEPPER_GALLERY_STEPS;
  protected readonly componentRoute: typeof componentRoute = componentRoute;
  protected readonly previewKind: typeof componentPreviewKind = componentPreviewKind;
  protected readonly weekdays: readonly string[] = COMPONENT_PREVIEW_WEEKDAYS;
  protected readonly days: readonly number[] = COMPONENT_PREVIEW_DAYS;

  protected readonly layoutOnly: Signal<boolean> = computed(() => this.routeData()['layout'] === true);
  protected readonly category: Signal<string | undefined> = computed(() => {
    const category = this.routeData()['category'];

    return typeof category === 'string' ? category : undefined;
  });
  protected readonly categories: Signal<readonly IBxSelectOption<string>[]> = computed(() => {
    const available = new Set(this.baseEntries().map((entry) => entry.group));

    return this.groupOrder.filter((group) => available.has(group)).map((group) => ({ label: group, value: group }));
  });
  protected readonly filtered: Signal<readonly ComponentExample[]> = computed(() => {
    const terms = this.query().toLowerCase().trim().split(/\s+/).filter(Boolean);
    const categories = this.selectedCategories();

    return this.baseEntries()
      .filter(
        (entry) =>
          (!categories.length || categories.includes(entry.group)) &&
          terms.every((term) => `${entry.title} ${entry.group} ${entry.description} ${entry.selector} ${entry.symbol}`.toLowerCase().includes(term))
      )
      .toSorted((first, second) => this.groupRank(first) - this.groupRank(second));
  });
  protected readonly visibleEntries: Signal<readonly ComponentExample[]> = computed(() => this.filtered().slice(0, this.renderedCount()));
  protected readonly groups: Signal<readonly IComponentCatalogGroup[]> = computed(() => {
    const totals = new Map<string, number>();
    const sections = new Map<string, ComponentExample[]>();

    for (const entry of this.filtered()) totals.set(entry.group, (totals.get(entry.group) ?? 0) + 1);

    for (const entry of this.visibleEntries()) {
      const entries = sections.get(entry.group) ?? [];

      entries.push(entry);
      sections.set(entry.group, entries);
    }

    return [...sections].map(([title, entries]) => ({ title, entries, total: totals.get(title) ?? entries.length }));
  });
  protected readonly hasMore: Signal<boolean> = computed(() => this.visibleEntries().length < this.filtered().length);

  protected readonly query: WritableSignal<string> = signal('');

  protected readonly selectedCategories: WritableSignal<readonly string[]> = signal<readonly string[]>([]);

  protected readonly renderedCount: WritableSignal<number> = linkedSignal<readonly ComponentExample[], number>({
    source: this.filtered,
    computation: () => this.batchSize
  });

  protected updateSearch(value: string): void {
    this.query.set(value);
    this.resetScroll();
  }

  protected updateCategories(values: readonly string[] | null | undefined): void {
    this.selectedCategories.set(values ?? []);
    this.resetScroll();
  }

  protected renderMore(): void {
    if (this.hasMore()) this.renderedCount.update((count) => Math.min(count + this.batchSize, this.filtered().length));
  }

  //#region Helpers

  private groupRank(entry: ComponentExample): number {
    const index = this.groupOrder.indexOf(entry.group);

    return index < 0 ? this.groupOrder.length : index;
  }

  private resetScroll(): void {
    const container = this.catalogScrollRef()?.nativeElement;
    const results = this.resultsRef()?.nativeElement;

    if (!container || !results) return;

    const viewportTop = container.getBoundingClientRect().top + container.clientTop;
    const offset = results.getBoundingClientRect().top - viewportTop;

    if (offset < 0) container.scrollTo({ top: Math.max(0, container.scrollTop + offset), behavior: 'instant' });
  }

  //#endregion
}
