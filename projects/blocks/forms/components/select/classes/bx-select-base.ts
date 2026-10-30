import { createGlassTransition, inheritGlassLighting } from '@filip.mazev/blocks/effects/runtime';
import {
  computed,
  DestroyRef,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  model,
  NgZone,
  OnDestroy,
  output,
  signal,
  TemplateRef,
  untracked,
  viewChild,
  ViewChild
} from '@angular/core';
import { Overlay, ConnectionPositionPair, CdkConnectedOverlay } from '@angular/cdk/overlay';
import { BX_I18N, BxA11yService, inheritOverlayTheme, trackOverlayOrigin, DEFAULT_DEBOUNCE_TIME, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { BX_OVERLAY_CONTEXT, ITagConfig, TruncateDirective, truncatedText } from '@filip.mazev/blocks/primitives';
import { SelectionDisplay } from '../types/select.types';
import { visibleTagLimit } from '../helpers/tag-limit.helpers';
import { SearchInput } from '../../search-input/search-input';
import { BxValueControl } from '../../shared/classes/bx-value-control';
import { ILoadMoreConfig } from '../../shared/load-more/interfaces/iload-more-config.interface';
import { ILoadMoreContext } from '../../shared/load-more/interfaces/iload-more-context.interface';
import { ILoadMoreRequest } from '../../shared/load-more/interfaces/iload-more-request.interface';
import { IBxSelectOption } from '../interfaces/ibx-select-option.interface';
import { IResolvedSelectOption } from '../interfaces/iresolved-select-option.interface';
import { ISelectOptionContext } from '../interfaces/iselect-option-context.interface';
import { ISelectTriggerContext } from '../interfaces/iselect-trigger-context.interface';

@Directive()
export abstract class BxSelectBase<TValue, TOption> extends BxValueControl<TValue> implements OnDestroy {
  private readonly a11y = inject(BxA11yService);
  private readonly zone = inject(NgZone);
  private readonly overlay = inject(Overlay);
  private readonly overlayContext = inject(BX_OVERLAY_CONTEXT, { optional: true });
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly debouncing = signal(false);
  private readonly searchRequest = signal(false);
  private readonly knownOptions = signal<readonly IResolvedSelectOption<TOption>[]>([]);
  protected readonly panelScrollStrategy = this.overlay.scrollStrategies.noop();
  protected readonly isPanelAttached = signal(false);
  protected readonly searchTerm = computed(() => this.searchValue());
  protected readonly valueOverflow = viewChild<TruncateDirective>('valueOverflow');
  protected readonly labelOverflow = viewChild<TruncateDirective>('labelOverflow');
  protected readonly truncatedSelectionTooltip = computed(() => {
    if (!this.resolvedTooltipOnTruncate() || this.isOpen()) return '';

    return (
      truncatedText(this.selectedOptionLabel() || this.resolvedPlaceholder(), this.valueOverflow()?.truncated() ?? false) ||
      truncatedText(this.resolvedLabel(), this.labelOverflow()?.truncated() ?? false)
    );
  });

  protected readonly overlayPositions: ConnectionPositionPair[] = [
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }, 0, 4),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }, 0, -4)
  ];

  protected readonly resolvedOptions = computed<readonly IResolvedSelectOption<TOption>[]>(() =>
    this.options().map((option) => ({ ...option, resolvedStr: resolveText(option.label, this.i18n), resolvedGroup: resolveText(option.group, this.i18n) }))
  );

  protected readonly filteredOptions = computed(() => {
    const query = this.searchTerm().trim().toLocaleLowerCase();

    return this.externalFiltering() || !query
      ? this.resolvedOptions()
      : this.resolvedOptions().filter((option) => option.resolvedStr.toLocaleLowerCase().includes(query));
  });

  protected readonly selectedOptions = computed(() => this.knownOptions().filter((option) => this.isSelected(option.value)));
  protected readonly selectedOptionLabel = computed(() =>
    this.selectedOptions()
      .map((option) => resolveText(option.label, this.i18n))
      .join(', ')
  );

  protected readonly isFloating = computed(
    () =>
      this.isOpen() ||
      (this.value() !== null && (!Array.isArray(this.value()) || (this.value() as unknown[]).length > 0)) ||
      this.resolvedFloatLabel() === 'always'
  );

  protected readonly resolvedSearchPlaceholder = computed(() => resolveText(this.searchPlaceholder(), this.i18n));
  protected readonly resolvedEmptyMessage = computed(() => resolveText(this.emptyMessage(), this.i18n));
  protected readonly triggerContext = computed<ISelectTriggerContext<TValue>>(() => ({
    $implicit: this.value(),
    labels: this.selectedOptions().map((option) => resolveText(option.label, this.i18n))
  }));

  protected readonly visibleTags = computed(() => this.selectedOptions().slice(0, this.visibleTagCount()));
  protected readonly overflowTagLabel = computed(() => {
    const count = Math.max(0, this.selectedOptions().length - this.visibleTagCount());

    return resolveText(this.tagOverflowText(), this.i18n, { count }).replaceAll('{count}', String(count));
  });

  protected readonly overflowTagTooltip = computed(() =>
    this.selectedOptions()
      .slice(this.visibleTagCount())
      .map((option) => resolveText(option.label, this.i18n))
      .join(', ')
  );

  protected readonly resolvedLoadingAriaLabel = computed(() => resolveText(this.loadingAriaLabel(), this.i18n));
  protected readonly resolvedLoadingLabel = computed(() => resolveText(this.loadingLabel(), this.i18n));
  public readonly selectionDisplay = input<SelectionDisplay>('text');

  public readonly tagConfig = input<ITagConfig>({});

  public readonly overflowTagConfig = input<ITagConfig>({});

  public readonly visibleTagCount = input(1, { transform: visibleTagLimit });

  public readonly tagOverflowText = input<ResolvableText>('+{count}');

  public readonly options = input.required<readonly IBxSelectOption<TOption>[]>();

  public readonly compareWith = input<(a: TOption, b: TOption) => boolean>(Object.is);
  public readonly isSearchable = input(false);
  public readonly externalFiltering = input(false);
  public readonly searchValue = model('');
  public readonly searchDebounce = input(DEFAULT_DEBOUNCE_TIME);
  public readonly searchPlaceholder = input<ResolvableText>('Search...');
  public readonly emptyMessage = input<ResolvableText>('No results found.');
  public readonly loadingLabel = input<ResolvableText | undefined>(undefined);
  public readonly loadingAriaLabel = input<ResolvableText>('Loading');
  public readonly isSearching = computed(() => this.debouncing() || this.searchRequest());

  public readonly hasMore = input(false);
  public readonly loadError = input<ResolvableText | undefined>(undefined);
  public readonly loadMoreConfig = input<ILoadMoreConfig>({});
  public readonly loadMoreTemplate = input<TemplateRef<ILoadMoreContext> | undefined>(undefined);
  public readonly panelClass = input('');
  public readonly optionTemplate = input<TemplateRef<ISelectOptionContext<TOption>> | undefined>(undefined);
  public readonly triggerTemplate = input<TemplateRef<ISelectTriggerContext<TValue>> | undefined>(undefined);
  public readonly isOpen = signal(false);
  // eslint-disable-next-line @angular-eslint/no-output-native -- Preserve the established search event.
  public readonly search = output<string>();
  public readonly loadMore = output<ILoadMoreRequest>();
  public readonly openedChange = output<boolean>();

  private transition?: ReturnType<typeof createGlassTransition>;
  private disconnectTheme?: () => void;
  private disconnectLighting?: () => void;
  private disconnectOrigin?: () => void;
  private transitionRevision = 0;
  private focusOnOpen: 'first' | 'last' | null = null;
  private searchTimeout?: ReturnType<typeof setTimeout>;
  private typeaheadTimeout?: ReturnType<typeof setTimeout>;
  private typeaheadText = '';
  @ViewChild(CdkConnectedOverlay) private connectedOverlay?: CdkConnectedOverlay;
  @ViewChild('searchInput') private searchInputRef?: SearchInput;
  @ViewChild('origin', { read: ElementRef }) private originRef?: ElementRef<HTMLElement>;

  constructor() {
    super();
    effect(() => {
      if (this.searchRequest() && !this.loading() && !this.debouncing()) this.searchRequest.set(false);
    });
    effect(() => {
      const current = this.resolvedOptions();
      const retained = untracked(this.knownOptions).filter(
        (option) => this.isSelected(option.value) && !current.some((item) => this.compareWith()(item.value, option.value))
      );
      this.knownOptions.set([...retained, ...current]);
    });
    effect(() => {
      if ((this.disabled() || this.isReadonly()) && this.isOpen()) this.close();
    });
    inject(DestroyRef).onDestroy(() => {
      clearTimeout(this.searchTimeout);
      clearTimeout(this.typeaheadTimeout);
    });
  }

  public ngOnDestroy(): void {
    ++this.transitionRevision;
    this.onPanelDetach();
  }

  public abstract isSelected(value: TOption): boolean;

  public toggleOpen(): void {
    if (this.disabled() || this.isReadonly()) return;
    if (this.isOpen()) this.close();
    else this.open();
  }

  public open(): void {
    if (this.disabled() || this.isReadonly() || this.isOpen()) return;
    ++this.transitionRevision;
    this.isOpen.set(true);
    this.openedChange.emit(true);
    this.isPanelAttached.set(true);
    const pane = this.connectedOverlay?.overlayRef?.overlayElement;
    if (pane) pane.inert = false;
    const transition = this.transition;
    if (transition) void this.zone.runOutsideAngular(() => transition.enter());

    if (this.connectedOverlay?.overlayRef?.hasAttached() && this.isSearchable()) queueMicrotask(() => this.searchInputRef?.focus());
  }

  public close(): void {
    const wasOpen = this.isOpen();
    this.isOpen.set(false);

    if (wasOpen) {
      this.openedChange.emit(false);
      this.markAsTouched();
    }
    const revision = ++this.transitionRevision;
    const pane = this.connectedOverlay?.overlayRef?.overlayElement;
    if (pane?.contains(pane.ownerDocument.activeElement)) this.originRef?.nativeElement.focus({ preventScroll: true });
    if (pane) pane.inert = true;
    const transition = this.transition;
    if (transition && !this.a11y.isReducedMotion()) {
      void this.zone
        .runOutsideAngular(() => transition.exit())
        .then(() => {
          if (revision === this.transitionRevision && !this.isOpen()) this.isPanelAttached.set(false);
        })
        .catch(() => {
          if (revision === this.transitionRevision) this.isPanelAttached.set(false);
        });
    } else this.isPanelAttached.set(false);
  }

  protected onPanelAttach(): void {
    const revision = this.transitionRevision;
    const origin = this.originRef?.nativeElement;
    const overlay = this.connectedOverlay?.overlayRef;
    if (origin && overlay?.hasAttached()) {
      this.disconnectLighting?.();
      this.disconnectLighting = inheritGlassLighting(overlay.overlayElement, origin);
      this.disconnectOrigin?.();
      this.disconnectOrigin = this.zone.runOutsideAngular(() => trackOverlayOrigin(overlay, origin));
    }
    // Wait for the attached view's synchronous surface directives to finish mounting.
    queueMicrotask(() => {
      const attachedOverlay = this.connectedOverlay?.overlayRef;
      const attachedOrigin = this.originRef?.nativeElement;
      if (!attachedOverlay?.hasAttached() || !attachedOrigin || !this.isOpen() || revision !== this.transitionRevision) return;
      this.disconnectTheme?.();
      this.disconnectTheme = this.zone.runOutsideAngular(() => inheritOverlayTheme(attachedOrigin, attachedOverlay.overlayElement));
      attachedOverlay.updatePosition();
      if (!this.a11y.isReducedMotion()) {
        this.transition?.destroy();
        this.transition = this.zone.runOutsideAngular(() => createGlassTransition(attachedOrigin, attachedOverlay.overlayElement));
        const transition = this.transition;
        void this.zone
          .runOutsideAngular(() => transition.enter())
          .catch(() => {
            if (revision === this.transitionRevision) {
              this.transition?.destroy();
              this.transition = undefined;
            }
          });
      }
      if (this.isSearchable()) this.searchInputRef?.focus();
      else {
        const items = this.panelItems();
        (items.find((item) => item.getAttribute('aria-selected') === 'true') ?? (this.focusOnOpen === 'last' ? items[items.length - 1] : items[0]))?.focus();
      }
      this.focusOnOpen = null;
    });
  }

  protected onPanelDetach(): void {
    this.transition?.destroy();
    this.transition = undefined;
    this.disconnectTheme?.();
    this.disconnectTheme = undefined;
    this.disconnectLighting?.();
    this.disconnectLighting = undefined;
    this.disconnectOrigin?.();
    this.disconnectOrigin = undefined;
  }

  protected overlayPopoverLocation(origin: HTMLElement): CdkConnectedOverlay['usePopover'] {
    const useTopLayer =
      !!this.overlayContext?.useTopLayer || !!origin.closest('dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]');
    // A null location disables the CDK popover; explicit contexts and native
    // top-layer containers opt back into the global popover.
    return useTopLayer ? 'global' : null;
  }

  protected refreshPanel(): void {
    this.transition?.refresh();
  }

  protected onTriggerKey(event: KeyboardEvent): void {
    if (this.disabled() || this.isReadonly()) return;

    if (event.key === 'Escape' || (event.altKey && event.key === 'ArrowUp')) {
      event.preventDefault();
      this.close();
      return;
    }

    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)) {
      event.preventDefault();
      this.focusOnOpen = event.key === 'ArrowUp' ? 'last' : 'first';
      this.open();
    } else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      this.open();
      this.typeahead(event.key);
    }
  }

  protected onPanelKey(event: KeyboardEvent): void {
    if (event.key === 'Escape' || event.key === 'Tab' || (event.altKey && event.key === 'ArrowUp')) {
      if (event.key !== 'Tab') event.preventDefault();
      event.stopPropagation();
      this.close();
      return;
    }

    const target = event.target as HTMLElement;
    const editing = target.matches('input,textarea');

    if (editing && !['ArrowDown', 'ArrowUp'].includes(event.key)) return;

    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      if (!editing && event.key.length === 1 && event.key !== ' ') this.typeahead(event.key);
      return;
    }

    const items = this.panelItems();

    if (!items.length) return;

    const current = items.indexOf(items[0].ownerDocument.activeElement as HTMLElement);
    const next =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? items.length - 1
          : event.key === 'ArrowDown'
            ? (current + 1) % items.length
            : current < 0
              ? items.length - 1
              : (current - 1 + items.length) % items.length;
    event.preventDefault();
    items[next].focus();
  }

  protected onTriggerBlur(): void {
    if (!this.isOpen()) this.markAsTouched();
  }

  protected onOutsideClick(event: MouseEvent): void {
    const clickTarget = event.target as Node;
    if (this.originRef?.nativeElement.contains(clickTarget)) {
      return;
    }
    this.close();
  }

  protected abstract selectOption(option: IBxSelectOption<TOption>): void;

  protected onSearchChange(value: string): void {
    clearTimeout(this.searchTimeout);
    this.debouncing.set(true);
    this.searchTimeout = setTimeout(() => {
      this.debouncing.set(false);
      this.searchRequest.set(this.externalFiltering());
      this.searchValue.set(value);
      this.search.emit(value);
    }, this.searchDebounce());
  }

  protected selectionTagConfig(option: IBxSelectOption<TOption>): ITagConfig {
    return { ...this.tagConfig(), ...option.tagConfig };
  }

  protected requestMore(request: ILoadMoreRequest): void {
    this.loadMore.emit({ ...request });
  }

  //#region Helpers

  private typeahead(character: string): void {
    clearTimeout(this.typeaheadTimeout);
    this.typeaheadText += character.toLocaleLowerCase();
    this.typeaheadTimeout = setTimeout(() => {
      this.typeaheadText = '';
    }, 700);
    queueMicrotask(() =>
      this.panelItems()
        .find((item) => item.textContent?.trim().toLocaleLowerCase().startsWith(this.typeaheadText))
        ?.focus()
    );
  }

  private panelItems(): HTMLElement[] {
    return Array.from(this.connectedOverlay?.overlayRef?.overlayElement.querySelectorAll<HTMLElement>('.bx-select-option:not(:disabled)') ?? []);
  }

  //#endregion
}
