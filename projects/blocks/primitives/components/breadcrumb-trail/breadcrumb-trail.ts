import type { InputSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  NgZone,
  output,
  signal,
  untracked,
  viewChild
} from '@angular/core';
import { RouterLink } from '@angular/router';

import type { BxPlacement, ResolvableText } from '@filip.mazev/blocks/core';
import type { IconName } from '@filip.mazev/blocks/icons';

import { BX_I18N, resolveText } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';

import { Menu } from '@primitives/components/menu/menu';
import { MenuItem } from '@primitives/components/menu-item/menu-item';
import { MenuTriggerDirective } from '@primitives/directives/menu-trigger/menu-trigger.directive';
import { TooltipDirective } from '@primitives/directives/tooltip/tooltip.directive';
import { TruncateDirective } from '@primitives/directives/truncate/truncate.directive';
import { IBreadcrumbTrailConfig } from '@primitives/interfaces/ibreadcrumb-trail-config.interface';
import { IBreadcrumbTrailItem } from '@primitives/interfaces/ibreadcrumb-trail-item.interface';
import { IBreadcrumbTrailSelection } from '@primitives/interfaces/ibreadcrumb-trail-selection.interface';
import { IResolvedBreadcrumbTrailItem } from '@primitives/interfaces/iresolved-breadcrumb-trail-item.interface';
import { TruncatedTextPipe } from '@primitives/pipes/truncated-text.pipe';
import { BX_BREADCRUMB_DEFAULTS } from '@primitives/tokens/breadcrumb-defaults.token';

/** Shared breadcrumb presentation with an interactive, keyboard-accessible hidden-ancestor menu. */
@Component({
  selector: 'bx-breadcrumb-trail',
  imports: [NgTemplateOutlet, RouterLink, Icon, Menu, MenuItem, MenuTriggerDirective, TooltipDirective, TruncateDirective, TruncatedTextPipe],
  templateUrl: './breadcrumb-trail.html',
  styleUrl: './breadcrumb-trail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.is-compact]': 'compact()' }
})
export class BreadcrumbTrail {
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly ngZone = inject(NgZone);
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly defaults = inject(BX_BREADCRUMB_DEFAULTS, { optional: true });

  private readonly compactCapacity: WritableSignal<number> = signal(Infinity);

  private readonly menuTriggerDirective: Signal<MenuTriggerDirective | undefined> = viewChild(MenuTriggerDirective);

  protected readonly entries: Signal<readonly IResolvedBreadcrumbTrailItem[]> = computed(() =>
    this.items().map((item, index) => ({ item, index, label: resolveText(item.label, this.i18n) }))
  );
  protected readonly limit: Signal<number> = computed(() => {
    const configured = this.config().maxVisibleItems;
    const value = configured === undefined ? this.defaults?.maxVisibleItems : configured;

    const configuredLimit = value === null ? Infinity : Number.isFinite(value ?? 3) ? Math.max(2, Math.trunc(value ?? 3)) : 3;

    return this.compact() ? Math.min(configuredLimit, this.compactCapacity()) : configuredLimit;
  });
  protected readonly truncated: Signal<boolean> = computed(() => this.entries().length > this.limit());
  protected readonly leading: Signal<readonly IResolvedBreadcrumbTrailItem[]> = computed(() =>
    this.truncated() ? this.entries().slice(0, 1) : this.entries()
  );
  protected readonly hidden: Signal<readonly IResolvedBreadcrumbTrailItem[]> = computed(() =>
    this.truncated() ? this.entries().slice(1, 1 - this.limit()) : []
  );
  protected readonly trailing: Signal<readonly IResolvedBreadcrumbTrailItem[]> = computed(() =>
    this.truncated() ? this.entries().slice(1 - this.limit()) : []
  );
  protected readonly resolvedLabel: Signal<string> = computed(() => {
    const label = resolveText(this.ariaLabel(), this.i18n);

    return this.interactive()
      ? label
      : `${label}: ${this.entries()
          .map((entry) => entry.label)
          .join(' › ')}`;
  });
  protected readonly overflowLabel: Signal<string> = computed(() =>
    resolveText(this.config().overflowLabel ?? this.defaults?.overflowLabel ?? 'Show hidden breadcrumbs', this.i18n)
  );
  protected readonly overflowText: Signal<string> = computed(() => resolveText(this.config().overflowText ?? this.defaults?.overflowText ?? '…', this.i18n));
  protected readonly customOverflowText: Signal<boolean> = computed(
    () => this.config().overflowText !== undefined || this.defaults?.overflowText !== undefined
  );
  protected readonly hiddenDescription: Signal<string> = computed(() =>
    this.hidden()
      .map((entry) => entry.label)
      .join(' › ')
  );
  protected readonly separatorText: Signal<string> = computed(() => resolveText(this.separator(), this.i18n));
  protected readonly hover: Signal<boolean> = computed(() => this.config().openOnHover ?? this.defaults?.openOnHover ?? true);
  protected readonly placement: Signal<BxPlacement> = computed(() => this.config().placement ?? this.defaults?.placement ?? 'bottom');

  /** Complete ordered breadcrumb trail. Required; input items are never mutated. */
  public readonly items: InputSignal<readonly IBreadcrumbTrailItem[]> = input.required<readonly IBreadcrumbTrailItem[]>();
  /** Overflow limit, translated labels, hover opening, and popup placement. Defaults to shared application settings, then library defaults. */
  public readonly config: InputSignal<IBreadcrumbTrailConfig> = input<IBreadcrumbTrailConfig>({});
  /** Translatable accessible name of the navigation region. Defaults to Breadcrumbs. */
  public readonly ariaLabel: InputSignal<ResolvableText> = input<ResolvableText>('Breadcrumbs');
  /** Optional icon separator. Omission uses the separator text input. */
  public readonly divider: InputSignal<IconName | undefined> = input<IconName | undefined>(undefined);
  /** Translatable separator text when divider is absent. Defaults to ›; separators are hidden from assistive technology. */
  public readonly separator: InputSignal<ResolvableText> = input<ResolvableText>('›');
  /** Render the final item as noninteractive current-page text. Defaults to true; browsing and search paths set false. */
  public readonly currentLast: InputSignal<boolean> = input(true);
  /** Whether ancestors and their overflow menu are actionable. Defaults to true; false renders descriptive text with a noninteractive overflow tooltip. */
  public readonly interactive: InputSignal<boolean> = input(true);
  /** Keep a single row, reducing the visible count to fit available width. Defaults to false; clipped labels expose full-name hover/focus/long-press tooltips. */
  public readonly compact: InputSignal<boolean> = input(false);
  /** Optional enclosing menu trigger; keeps the parent menu open while the hidden-ancestor menu is active. Omit outside coordinated menu overlays. */
  public readonly menuParent: InputSignal<MenuTriggerDirective | undefined> = input<MenuTriggerDirective | undefined>(undefined);

  /** Emits enabled, unmodified primary activations with the original item and complete-trail index. Router links retain native modified-click behavior. */
  public readonly selected: OutputEmitterRef<IBreadcrumbTrailSelection> = output<IBreadcrumbTrailSelection>();

  constructor() {
    afterRenderEffect((onCleanup) => {
      if (!this.compact()) return;

      const view = this.nativeElement.ownerDocument.defaultView;

      if (!view) return;

      this.ngZone.runOutsideAngular(() => {
        const measure = (): void => {
          const width = this.nativeElement.getBoundingClientRect().width;
          const fontSize = parseFloat(view.getComputedStyle(this.nativeElement).fontSize) || 12;

          if (width <= 0) return;

          const capacity = Math.max(2, Math.floor((width - fontSize * 2) / (fontSize * 4)));

          if (capacity !== untracked(this.compactCapacity)) this.ngZone.run(() => this.compactCapacity.set(capacity));
        };

        const resize = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(measure);

        resize?.observe(this.nativeElement);
        view.addEventListener('resize', measure);
        measure();
        onCleanup(() => {
          resize?.disconnect();
          view.removeEventListener('resize', measure);
        });
      });
    });
    effect(() => {
      this.entries();
      this.config();
      this.limit();

      untracked(() => this.menuTriggerDirective()?.close());
    });
  }

  protected activate(entry: IResolvedBreadcrumbTrailItem, event: MouseEvent): void {
    if (entry.item.disabled) {
      event.preventDefault();

      return;
    }

    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

    this.menuTriggerDirective()?.close();
    this.selected.emit({ item: entry.item, index: entry.index, event });
  }
}
