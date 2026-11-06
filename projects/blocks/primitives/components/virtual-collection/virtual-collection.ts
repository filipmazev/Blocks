import type { InputSignal, Signal, WritableSignal } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import {
  afterNextRender,
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  DestroyRef,
  ElementRef,
  inject,
  input,
  NgZone,
  signal,
  untracked,
  viewChild,
  viewChildren
} from '@angular/core';

import type { IVirtualCollectionConfig } from '@primitives/interfaces/ivirtual-collection-config.interface';
import type { IVirtualCollectionState } from '@primitives/interfaces/ivirtual-collection-state.interface';
import type { IVirtualFocusAnchor } from '@primitives/interfaces/ivirtual-focus-anchor.interface';
import type { IVirtualRange } from '@primitives/interfaces/ivirtual-range.interface';
import type { IVirtualRow } from '@primitives/interfaces/ivirtual-row.interface';
import type { IVirtualScrollAnchor } from '@primitives/interfaces/ivirtual-scroll-anchor.interface';
import type { VirtualItemKey, VirtualTrackBy } from '@primitives/types/virtual-collection.types';

import { BxA11yService, findScrollContainer } from '@filip.mazev/blocks/core';

import { VirtualRowMetrics } from '@primitives/classes/virtual-row-metrics';
import { VirtualItemDirective } from '@primitives/directives/virtual-item/virtual-item.directive';

/**
 * Bidirectional, measured row virtualization independent of scroll-end detection and data requests.
 * @typeParam T - Consumer-owned item data rendered by the projected template.
 */
@Component({
  selector: 'bx-virtual-collection',
  imports: [NgTemplateOutlet],
  templateUrl: './virtual-collection.html',
  styleUrl: './virtual-collection.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'list',
    '[style.--bx-virtual-min-column-width]': 'minimumColumnWidth()',
    '[style.--bx-virtual-columns]': 'columns()',
    '(focusin)': 'onFocusChanged()',
    '(focusout)': 'onFocusChanged()'
  }
})
export class VirtualCollection<T> {
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly ngZone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private readonly bxA11yService = inject(BxA11yService);

  private readonly metrics: VirtualRowMetrics = new VirtualRowMetrics();
  private readonly heights: Map<VirtualItemKey, number> = new Map<VirtualItemKey, number>();
  private readonly observedRows: Map<Element, number> = new Map<Element, number>();

  private readonly probe: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('probe');

  private readonly rowElements: Signal<readonly ElementRef<HTMLElement>[]> = viewChildren<ElementRef<HTMLElement>>('row');

  protected readonly columns: WritableSignal<number> = signal(1);

  protected readonly state: WritableSignal<IVirtualCollectionState<T>> = signal<IVirtualCollectionState<T>>({
    range: { start: 0, end: 0, columns: 1 },
    rows: [],
    bottom: 0
  });

  protected readonly minimumColumnWidth: Signal<string> = computed(() => {
    const width = this.config().minColumnWidth ?? '7rem';

    return typeof width === 'number' ? `${Math.max(1, width)}px` : width;
  });

  protected readonly itemTemplate: Signal<VirtualItemDirective<T> | undefined> = contentChild<VirtualItemDirective<T>>(VirtualItemDirective);

  /** Contiguous rendered item range, including overscan; count refers to supplied items, not the entire remote dataset. */
  public readonly renderedRange: Signal<IVirtualRange> = computed(() => this.state().range);
  /** Currently mounted items, including a focused row retained outside the contiguous window; useful for bounded presentation work. */
  public readonly renderedItems: Signal<readonly T[]> = computed(() => this.state().rows.flatMap((row) => row.items.map((item) => item.context.$implicit)));

  /** Supplied items, default empty. Append immutable pages for progressive loading; virtualization never requests or discards application data. */
  public readonly items: InputSignal<readonly T[]> = input<readonly T[]>([]);
  /** Required stable, unique item-key extractor. Keys preserve measurements and anchors across append and regrouping. */
  public readonly trackBy: InputSignal<VirtualTrackBy<T>> = input.required<VirtualTrackBy<T>>();
  /** Optional layout, estimate, overscan, and grid-width configuration. Defaults to a list with 128px rows and 800px overscan. */
  public readonly config: InputSignal<IVirtualCollectionConfig> = input<IVirtualCollectionConfig>({});
  /** Optional actual scroll viewport; omission discovers an ancestor or the document viewport after rendering. */
  public readonly scrollContainer: InputSignal<HTMLElement | undefined> = input<HTMLElement | undefined>(undefined);
  /** Optional layout revision invalidating cached heights, for example after changing icon size, density, or typography. */
  public readonly measurementRevision: InputSignal<unknown> = input<unknown>(undefined);
  /** Role on each mounted item wrapper, default listitem. Set row for a list used inside an application-owned accessible table. */
  public readonly itemRole: InputSignal<string> = input('listitem');

  private mounted: boolean = false;
  private target: HTMLElement | undefined;
  private rowResize: ResizeObserver | undefined;
  private disconnect: (() => void) | undefined;
  private data: readonly T[] = [];
  private keys: readonly VirtualItemKey[] = [];
  private rowColumns: number = 1;
  private rowGap: number = 12;
  private measuredWidth: number = 0;
  private previousWidth: number = 0;
  private previousRevision: unknown;
  private previousEstimate: number = 0;
  private lastPinned: number = -1;
  private pendingIndex: number | undefined;
  private rebuilding: boolean = false;
  private pendingScrollDelta: number = 0;
  private pendingScrollTop: number | undefined;
  private pendingFocus: IVirtualFocusAnchor | undefined;

  constructor() {
    afterNextRender(() => {
      this.mounted = true;
      this.connect();
      this.measureLayout();
    });

    afterRenderEffect(() => {
      const items = this.items();
      const columns = this.columns();
      const config = this.config();
      const revision = this.measurementRevision();
      const trackBy = this.trackBy();
      const container = this.scrollContainer();

      untracked(() => {
        if (this.mounted && this.target !== (container ?? findScrollContainer(this.nativeElement))) this.connect();

        const probe = this.probe()?.nativeElement;
        const win = this.nativeElement.ownerDocument.defaultView;
        const styles = this.mounted && probe && win ? win.getComputedStyle(probe) : undefined;
        const measuredColumns = config.layout === 'grid' ? (styles ? Math.max(1, styles.gridTemplateColumns.split(/\s+/).filter(Boolean).length) : columns) : 1;

        if (styles) {
          this.measuredWidth = this.nativeElement.clientWidth;
          this.rowGap = Number.parseFloat(styles.rowGap) || 0;
        }

        if (measuredColumns !== this.columns()) this.columns.set(measuredColumns);

        this.rebuild(items, measuredColumns, config, revision, trackBy);
      });
    });

    afterRenderEffect(() => {
      const elements = this.rowElements();

      this.state();

      untracked(() => {
        this.applyScrollCorrection();
        this.observeRows(elements);
        this.restoreFocusedItem();
      });
    });

    this.destroyRef.onDestroy(() => {
      this.disconnect?.();
      this.rowResize?.disconnect();
      this.observedRows.clear();
    });
  }

  /**
   * Scroll to a supplied item index using cached/estimated geometry; later measurements preserve the target anchor.
   * @param index - Zero-based supplied item index; clamped to the available data. Calls before mounting are applied after initialization.
   * @param behavior - Browser scrolling behavior, default auto. Reduced-motion preferences override smooth with instant.
   */
  public scrollToIndex(index: number, behavior: ScrollBehavior = 'auto'): void {
    if (!Number.isFinite(index)) return;

    if (!this.mounted || !this.target || !this.data.length) {
      this.pendingIndex = index;

      return;
    }

    const item = Math.max(0, Math.min(this.data.length - 1, Math.trunc(index)));

    this.pendingScrollDelta = 0;
    this.pendingScrollTop = undefined;

    const offset = this.viewportOffset();
    const top = this.target.scrollTop + this.metrics.prefix(Math.floor(item / this.rowColumns)) - offset;

    this.target.scrollTo({ top: Math.max(0, top), behavior: this.bxA11yService.isReducedMotion() ? 'instant' : behavior });
    this.updateWindow(true);
  }

  /**
   * Scroll to a stable item key; missing keys leave scroll position unchanged.
   * @param key - Identity returned by trackBy for an already supplied item.
   * @param behavior - Browser scrolling behavior, default auto; reduced-motion preferences take precedence.
   */
  public scrollToItem(key: VirtualItemKey, behavior: ScrollBehavior = 'auto'): void {
    const index = this.keys.indexOf(key);

    if (index >= 0) this.scrollToIndex(index, behavior);
  }

  /** Drop cached heights and remeasure the current window, preserving its first visible item. Prefer measurementRevision for declarative updates. */
  public refreshMeasurements(): void {
    this.heights.clear();
    this.rebuild(this.items(), this.columns(), this.config(), this.measurementRevision(), this.trackBy());
  }

  protected onFocusChanged(): void {
    queueMicrotask(() => {
      if (!this.destroyRef.destroyed) this.updateWindow();
    });
  }

  //#region Helpers

  private connect(): void {
    this.disconnect?.();
    this.target = this.scrollContainer() ?? findScrollContainer(this.nativeElement);

    const target = this.target;
    const document = this.nativeElement.ownerDocument;
    const win = document.defaultView;

    if (!target || !win) return;

    this.ngZone.runOutsideAngular(() => {
      const scrollTarget = target === document.scrollingElement ? document : target;
      const onScroll = () => this.updateWindow();
      const onResize = () => this.measureLayout();
      const resize = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(onResize);

      resize?.observe(this.nativeElement);
      resize?.observe(target);
      scrollTarget.addEventListener('scroll', onScroll, { passive: true });
      win.addEventListener('resize', onResize);
      win.visualViewport?.addEventListener('resize', onResize);
      this.disconnect = () => {
        resize?.disconnect();
        scrollTarget.removeEventListener('scroll', onScroll);
        win.removeEventListener('resize', onResize);
        win.visualViewport?.removeEventListener('resize', onResize);
      };
    });
  }

  private measureLayout(): void {
    const probe = this.probe()?.nativeElement;
    const win = this.nativeElement.ownerDocument.defaultView;

    if (!probe || !win || this.nativeElement.clientWidth <= 0) return;

    const styles = win.getComputedStyle(probe);
    const columns = this.config().layout === 'grid' ? Math.max(1, styles.gridTemplateColumns.split(/\s+/).filter(Boolean).length) : 1;
    const widthChanged = Math.abs(this.measuredWidth - this.nativeElement.clientWidth) >= 0.5;
    const gap = Number.parseFloat(styles.rowGap) || 0;

    this.measuredWidth = this.nativeElement.clientWidth;

    if (columns !== this.columns()) this.ngZone.run(() => this.columns.set(columns));
    else if (widthChanged || gap !== this.rowGap) {
      this.heights.clear();
      this.rowGap = gap;
      this.rebuild(this.items(), columns, this.config(), this.measurementRevision(), this.trackBy());
    } else this.updateWindow();
  }

  private rebuild(items: readonly T[], columns: number, config: IVirtualCollectionConfig, revision: unknown, trackBy: VirtualTrackBy<T>): void {
    if (this.rebuilding) return;

    this.rebuilding = true;

    const anchor = this.captureAnchor();
    const requestedEstimate = config.estimatedRowHeight ?? 128;
    const estimate = Number.isFinite(requestedEstimate) && requestedEstimate > 0 ? requestedEstimate : 128;
    const regrouping = columns !== this.rowColumns || Math.abs(this.previousWidth - this.measuredWidth) >= 0.5;

    if (regrouping) this.captureFocusedItem();

    if (regrouping || revision !== this.previousRevision || estimate !== this.previousEstimate) this.heights.clear();

    this.data = items;
    this.keys = items.map((item, index) => trackBy(item, index));
    this.rowColumns = config.layout === 'grid' ? columns : 1;
    this.previousWidth = this.measuredWidth;
    this.previousRevision = revision;
    this.previousEstimate = estimate;

    const activeKeys = new Set(this.keys);

    for (const key of this.heights.keys()) if (!activeKeys.has(key)) this.heights.delete(key);

    const rows = Math.ceil(items.length / this.rowColumns);

    this.metrics.reset(
      Array.from({ length: rows }, (_, row) => this.heights.get(this.keys[row * this.rowColumns]) ?? estimate + (row + 1 < rows ? this.rowGap : 0))
    );
    this.restoreAnchor(anchor);
    this.rebuilding = false;
    this.updateWindow(true);

    if (this.pendingIndex !== undefined && this.mounted && this.data.length) {
      const index = this.pendingIndex;

      this.pendingIndex = undefined;
      this.scrollToIndex(index);
    }
  }

  private viewportOffset(): number {
    const target = this.target;

    if (!target) return 0;

    const top = target === target.ownerDocument.scrollingElement ? 0 : target.getBoundingClientRect().top + target.clientTop;

    return top - this.nativeElement.getBoundingClientRect().top;
  }

  private viewportHeight(): number {
    const target = this.target;

    if (!target) return 800;

    return target === target.ownerDocument.scrollingElement
      ? (target.ownerDocument.defaultView?.innerHeight ?? target.clientHeight)
      : (target?.clientHeight ?? 800);
  }

  private captureAnchor(): IVirtualScrollAnchor | undefined {
    if (!this.mounted || !this.metrics.length || !this.keys.length) return undefined;

    const offset = this.viewportOffset() + this.pendingScrollDelta;

    if (offset < 0 || offset >= this.metrics.total) return undefined;

    const row = this.metrics.indexAt(offset);
    const top = this.metrics.prefix(row);

    return { key: this.keys[row * this.rowColumns], offset: offset - top, top };
  }

  private restoreAnchor(anchor: IVirtualScrollAnchor | undefined): void {
    if (!anchor || !this.target) return;

    const index = this.keys.indexOf(anchor.key);

    if (index < 0) return;

    const row = Math.floor(index / this.rowColumns);
    const top = this.metrics.prefix(row);
    const height = this.metrics.prefix(row + 1) - top;
    const delta = top - anchor.top + Math.min(anchor.offset, Math.max(0, height - 1)) - anchor.offset;

    if (Math.abs(delta) >= 0.5) {
      this.pendingScrollTop = (this.pendingScrollTop ?? this.target.scrollTop) + delta;
      this.pendingScrollDelta += delta;
    }
  }

  private applyScrollCorrection(): void {
    if (!this.target || this.pendingScrollTop === undefined) return;

    const top = this.pendingScrollTop;

    this.pendingScrollDelta = 0;
    this.pendingScrollTop = undefined;
    this.target.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
    this.updateWindow();
  }

  private updateWindow(force: boolean = false): void {
    if (this.destroyRef.destroyed) return;

    const offset = this.viewportOffset() + this.pendingScrollDelta;
    const height = this.viewportHeight();
    const requestedOverscan = this.config().overscan ?? 800;
    const overscan = Number.isFinite(requestedOverscan) ? Math.max(0, requestedOverscan) : 800;
    const outside = offset + height + overscan < 0 || offset - overscan > this.metrics.total;
    const startRow = outside || !this.metrics.length ? 0 : this.metrics.indexAt(Math.max(0, offset - overscan));
    const endRow = outside || !this.metrics.length ? 0 : Math.min(this.metrics.length, this.metrics.indexAt(Math.max(0, offset + height + overscan)) + 1);
    const active = this.nativeElement.ownerDocument.activeElement;
    const focusedEntry = [...this.observedRows].find(([element]) => element.contains(active));
    const pendingIndex = this.pendingFocus ? this.keys.indexOf(this.pendingFocus.key) : -1;
    const pinned = pendingIndex >= 0 ? Math.floor(pendingIndex / this.rowColumns) : (focusedEntry?.[1] ?? -1);
    const range: IVirtualRange = { start: startRow * this.rowColumns, end: Math.min(this.data.length, endRow * this.rowColumns), columns: this.rowColumns };
    const previous = this.state().range;

    if (!force && range.start === previous.start && range.end === previous.end && range.columns === previous.columns && pinned === this.lastPinned) return;

    this.lastPinned = pinned;

    const indices = Array.from({ length: Math.max(0, endRow - startRow) }, (_, index) => index + startRow);

    if (pinned >= 0 && pinned < this.metrics.length && !indices.includes(pinned)) indices.push(pinned);

    indices.sort((left, right) => left - right);

    let previousEnd = 0;

    const rows: IVirtualRow<T>[] = indices.map((index) => {
      const top = this.metrics.prefix(index);
      const startIndex = index * this.rowColumns;
      const row: IVirtualRow<T> = {
        key: this.keys[startIndex],
        index,
        startIndex,
        items: this.data.slice(startIndex, startIndex + this.rowColumns).map((item, localIndex) => {
          const itemIndex = startIndex + localIndex;

          return { key: this.keys[itemIndex], context: { $implicit: item, index: itemIndex, count: this.data.length } };
        }),
        before: Math.max(0, top - previousEnd)
      };

      previousEnd = this.metrics.prefix(index + 1);

      return row;
    });

    this.ngZone.run(() => this.state.set({ range, rows, bottom: Math.max(0, this.metrics.total - previousEnd) }));
  }

  private observeRows(elements: readonly ElementRef<HTMLElement>[]): void {
    if (!this.mounted || typeof ResizeObserver === 'undefined') return;

    this.ngZone.runOutsideAngular(() => {
      this.rowResize ??= new ResizeObserver((entries) => this.measureRows(entries));

      const next = new Set<Element>(elements.map((element) => element.nativeElement));

      for (const element of this.observedRows.keys()) {
        if (!next.has(element)) {
          this.rowResize.unobserve(element);
          this.observedRows.delete(element);
        }
      }

      for (const elementRef of elements) {
        const element = elementRef.nativeElement;
        const index = Number(element.dataset['bxVirtualRow']);

        if (!Number.isInteger(index)) continue;

        this.observedRows.set(element, index);
        this.rowResize.observe(element);
      }
    });
  }

  private captureFocusedItem(): void {
    const active = this.nativeElement.ownerDocument.activeElement;

    if (!(active instanceof HTMLElement) || !this.nativeElement.contains(active)) return;

    const wrapper = active.closest<HTMLElement>('[data-bx-virtual-index]');
    const index = Number(wrapper?.dataset['bxVirtualIndex']);

    if (!wrapper || !Number.isInteger(index) || index < 0 || index >= this.keys.length) return;

    const controls = Array.from(wrapper.querySelectorAll<HTMLElement>('button, input, select, textarea, a[href], [tabindex]'));

    this.pendingFocus = { key: this.keys[index], control: Math.max(0, controls.indexOf(active)) };
  }

  private restoreFocusedItem(): void {
    const pending = this.pendingFocus;

    if (!pending) return;

    const index = this.keys.indexOf(pending.key);
    const wrapper = this.nativeElement.querySelector<HTMLElement>(`[data-bx-virtual-index="${index}"]`);

    if (!wrapper) return;

    const controls = wrapper.querySelectorAll<HTMLElement>('button, input, select, textarea, a[href], [tabindex]');

    this.pendingFocus = undefined;
    (controls[pending.control] ?? controls[0])?.focus({ preventScroll: true });
  }

  private measureRows(entries: readonly ResizeObserverEntry[]): void {
    const anchor = this.captureAnchor();

    let changed = false;

    for (const entry of entries) {
      const index = this.observedRows.get(entry.target);
      const height = entry.borderBoxSize[0]?.blockSize ?? entry.contentRect.height;

      if (index === undefined || index >= this.metrics.length || height <= 0) continue;

      if (this.metrics.set(index, height)) {
        this.heights.set(this.keys[index * this.rowColumns], height);
        changed = true;
      }
    }

    if (changed) {
      this.restoreAnchor(anchor);
      this.updateWindow(true);
    }
  }

  //#endregion
}
