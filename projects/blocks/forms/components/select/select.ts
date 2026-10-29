import { createGlassTransition, inheritGlassLighting } from '@filip.mazev/blocks/effects/runtime';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Component, computed, inject, input, output, signal, ViewChild, OnInit, OnDestroy, ElementRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Overlay, OverlayModule, ConnectionPositionPair, CdkConnectedOverlay } from '@angular/cdk/overlay';
import {
  BX_I18N,
  BxBaseControl,
  BxA11yService,
  inheritOverlayTheme,
  trackOverlayOrigin,
  DEFAULT_DEBOUNCE_TIME,
  isTextWithKey,
  ResolvableText,
  uuidv4
} from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';
import { FormField } from '../form-field/form-field';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BX_OVERLAY_CONTEXT } from '@filip.mazev/blocks/primitives';
import { BxSelectOption } from '../../interfaces/ibx-select-option.interface';
import { SearchInput } from '../search-input/search-input';

@Component({
  selector: 'bx-select',
  standalone: true,
  imports: [BxSurfaceDirective, CommonModule, OverlayModule, FormField, Icon, SearchInput],
  templateUrl: './select.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './select.scss'
})
export class Select<T> extends BxBaseControl<T> implements OnInit, OnDestroy {
  private readonly a11y = inject(BxA11yService);
  private readonly zone = inject(NgZone);
  private readonly overlay = inject(Overlay);
  private readonly overlayContext = inject(BX_OVERLAY_CONTEXT, { optional: true });
  protected readonly panelScrollStrategy = this.overlay.scrollStrategies.noop();
  protected readonly isPanelAttached = signal(false);
  private readonly i18n = inject(BX_I18N, { optional: true });
  protected readonly searchTerm = signal<string>('');
  protected readonly inputId = computed(() => `bx-select-${uuidv4()}`);
  protected readonly overlayPositions: ConnectionPositionPair[] = [
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }, 0, 4),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }, 0, -4)
  ];

  protected readonly isFloating = computed(() => {
    const val = this.internalValue();
    const hasValue = val !== null && val !== undefined && val !== '';
    return this.isOpen() || hasValue;
  });

  protected readonly resolvedLabel = computed(() => {
    this.i18n?.version?.();
    const l = this.label();
    if (!l) return '';
    return isTextWithKey(l) ? (this.i18n?.translate(l.key) ?? l.key) : l;
  });

  protected readonly resolvedPlaceholder = computed(() => {
    this.i18n?.version?.();
    const p = this.placeholder();
    if (!p) return '';
    return isTextWithKey(p) ? (this.i18n?.translate(p.key) ?? p.key) : p;
  });

  protected readonly resolvedOptions = computed(() => {
    this.i18n?.version?.();
    return this.options().map((opt) => ({
      ...opt,
      resolvedStr: this.resolveText(opt.label)
    }));
  });

  protected readonly filteredOptions = computed(() => {
    const term = this.searchTerm().trim();
    const opts = this.resolvedOptions();

    if (this.externalFiltering() || !term) return opts;

    // Literal subsequence matching accepts punctuation and never constructs user regex.
    const query = term.toLocaleLowerCase();
    return opts.filter((opt) => {
      let index = 0;
      for (const character of opt.resolvedStr.toLocaleLowerCase()) {
        if (character === query[index]) index++;
        if (index === query.length) return true;
      }
      return false;
    });
  });

  protected readonly selectedOptionLabel = computed(() => {
    const currentVal = this.internalValue();
    const selected = this.resolvedOptions().find((o) => o.value === currentVal);
    return selected ? selected.resolvedStr : '';
  });

  protected readonly resolvedSearchPlaceholder = computed(() => this.resolveText(this.searchPlaceholder()));
  protected readonly resolvedEmptyMessage = computed(() => this.resolveText(this.emptyMessage()));
  public readonly options = input.required<BxSelectOption<T>[]>();

  public readonly isSearchable = input<boolean>(false);

  public readonly externalFiltering = input<boolean>(false);
  public readonly searchPlaceholder = input<ResolvableText>('Search...');
  public readonly emptyMessage = input<ResolvableText>('No results found.');
  // eslint-disable-next-line @angular-eslint/no-output-native -- Keep the established public search event.
  public readonly search = output<string>();
  public readonly isOpen = signal<boolean>(false);
  private transition?: ReturnType<typeof createGlassTransition>;

  private disconnectTheme?: () => void;
  private disconnectLighting?: () => void;
  private disconnectOrigin?: () => void;

  private transitionRevision = 0;

  private focusOnOpen: 'first' | 'last' | null = null;

  @ViewChild(CdkConnectedOverlay) private connectedOverlay?: CdkConnectedOverlay;

  @ViewChild('searchInput') private searchInputRef?: SearchInput;

  @ViewChild('origin', { read: ElementRef }) private originRef?: ElementRef<HTMLElement>;

  private searchSubject = new Subject<string>();

  private sub?: Subscription;

  public override ngOnInit(): void {
    super.ngOnInit();

    this.sub = this.searchSubject.pipe(debounceTime(DEFAULT_DEBOUNCE_TIME), distinctUntilChanged()).subscribe((term) => {
      this.searchTerm.set(term);
      if (this.externalFiltering()) {
        this.search.emit(term);
      }
    });
  }

  public ngOnDestroy(): void {
    ++this.transitionRevision;
    this.onPanelDetach();
    this.sub?.unsubscribe();
  }

  public toggleOpen(): void {
    if (this.isDisabled() || this.loading()) return;
    if (this.isOpen()) this.close();
    else this.open();
  }

  public open(): void {
    if (this.isDisabled() || this.loading()) return;
    ++this.transitionRevision;
    this.isOpen.set(true);
    this.isPanelAttached.set(true);
    const pane = this.connectedOverlay?.overlayRef?.overlayElement;
    if (pane) pane.inert = false;
    const transition = this.transition;
    if (transition) void this.zone.runOutsideAngular(() => transition.enter());
  }

  public close(): void {
    this.isOpen.set(false);
    this.markAsTouched();
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
      else if (this.focusOnOpen) {
        const items = this.panelItems();
        (this.focusOnOpen === 'last' ? items[items.length - 1] : items[0])?.focus();
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
    if (!['ArrowDown', 'ArrowUp', 'Escape'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'Escape') {
      this.close();
      return;
    }
    this.focusOnOpen = event.key === 'ArrowUp' ? 'last' : 'first';
    if (this.isOpen()) {
      const items = this.panelItems();
      (this.focusOnOpen === 'last' ? items[items.length - 1] : items[0])?.focus();
      this.focusOnOpen = null;
    } else this.open();
  }

  protected onPanelKey(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      this.close();
      return;
    }
    if (event.key === 'Tab') {
      this.close();
      return;
    }
    if ((event.target as HTMLElement)?.matches('input,textarea')) return;
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
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

  protected onOutsideClick(event: MouseEvent): void {
    const clickTarget = event.target as Node;
    if (this.originRef?.nativeElement.contains(clickTarget)) {
      return;
    }
    this.close();
  }

  protected selectOption(option: BxSelectOption<T>): void {
    if (option.disabled) return;
    this.updateValue(option.value);
    this.close();
  }

  protected onSearchChange(value: string): void {
    this.searchSubject.next(value);
  }

  private panelItems(): HTMLElement[] {
    return Array.from(this.connectedOverlay?.overlayRef?.overlayElement.querySelectorAll<HTMLElement>('.bx-select-menu-container button:not(:disabled)') ?? []);
  }

  private resolveText(textObj: ResolvableText | undefined): string {
    if (!textObj) return '';
    return isTextWithKey(textObj) ? (this.i18n?.translate(textObj.key) ?? textObj.key) : textObj;
  }
}
