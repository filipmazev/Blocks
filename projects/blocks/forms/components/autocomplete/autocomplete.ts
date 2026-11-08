import type { InputSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { CdkAutofill } from '@angular/cdk/text-field';
import { isPlatformBrowser, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  NgZone,
  output,
  PLATFORM_ID,
  signal,
  TemplateRef,
  untracked,
  viewChild,
  ViewContainerRef
} from '@angular/core';

import { Subscription } from 'rxjs';

import type { IAutocompleteCompletionOptionState } from '@forms/interfaces/iautocomplete-completion-option-state.interface';
import type { IAutocompleteFilteredOptionsState } from '@forms/interfaces/iautocomplete-filtered-options-state.interface';
import type { IAutocompleteResolvedOptionsState } from '@forms/interfaces/iautocomplete-resolved-options-state.interface';

import {
  BX_I18N,
  BxA11yService,
  BxOverlayPositionService,
  inheritOverlayTheme,
  ResolvableText,
  resolveText,
  trackOverlayOrigin
} from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { createGlassTransition, inheritGlassLighting, ISelectionMotion, mountSelectionMotion } from '@filip.mazev/blocks/effects/runtime';
import { Icon } from '@filip.mazev/blocks/icons';
import { BX_OVERLAY_CONTEXT, LoadingIndicator, LoadingSpinner, TooltipDirective, TruncateDirective, TruncatedTextPipe } from '@filip.mazev/blocks/primitives';

import { BxValueControl } from '@forms/classes/bx-value-control';
import { Button } from '@forms/components/button/button';
import { FormField } from '@forms/components/form-field/form-field';
import { LoadMoreDirective } from '@forms/directives/load-more/load-more.directive';
import { IAutocompleteOption } from '@forms/interfaces/iautocomplete-option.interface';
import { IAutocompleteOptionContext } from '@forms/interfaces/iautocomplete-option-context.interface';
import { ILoadMoreConfig } from '@forms/interfaces/iload-more-config.interface';
import { ILoadMoreContext } from '@forms/interfaces/iload-more-context.interface';
import { ILoadMoreRequest } from '@forms/interfaces/iload-more-request.interface';

@Component({
  selector: 'bx-autocomplete',
  imports: [
    FormField,
    BxSurfaceDirective,
    Icon,
    LoadingIndicator,
    LoadingSpinner,
    Button,
    LoadMoreDirective,
    NgTemplateOutlet,
    CdkAutofill,
    TooltipDirective,
    TruncateDirective,
    TruncatedTextPipe
  ],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Autocomplete extends BxValueControl<string> {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly bxA11yService = inject(BxA11yService);
  private readonly overlay = inject(Overlay);
  private readonly bxOverlayPositionService = inject(BxOverlayPositionService);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly ngZone = inject(NgZone);
  private readonly context = inject(BX_OVERLAY_CONTEXT, { optional: true });

  private readonly browser: boolean = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly opened: WritableSignal<boolean> = signal(false);
  private readonly inputFocused: WritableSignal<boolean> = signal(false);
  private readonly composing: WritableSignal<boolean> = signal(false);
  private readonly caretAtEnd: WritableSignal<boolean> = signal(false);

  private readonly panelTemplate: Signal<TemplateRef<unknown>> = viewChild.required<TemplateRef<unknown>>('panelTemplate');
  private readonly anchor: Signal<ElementRef<HTMLElement>> = viewChild.required<ElementRef<HTMLElement>>('anchor');
  private readonly nativeInput: Signal<ElementRef<HTMLInputElement>> = viewChild.required<ElementRef<HTMLInputElement>>('nativeInput');
  private readonly pagination: Signal<LoadMoreDirective | undefined> = viewChild(LoadMoreDirective);
  private readonly labelText: Signal<TruncateDirective | undefined> = viewChild(TruncateDirective);

  protected readonly activeIndex: WritableSignal<number> = signal(-1);

  protected readonly autofilled: WritableSignal<boolean> = signal(false);

  protected readonly labelTruncated: Signal<boolean> = computed(() => this.labelText()?.truncated() ?? false);
  protected readonly isBusy: Signal<boolean> = computed(() => this.searching() || this.loading() || this.pending());
  protected readonly showClear: Signal<boolean> = computed(() => this.clearable() && !!this.internalValue() && !this.isReadonly());
  protected readonly resolvedClearLabel: Signal<string> = computed(() => resolveText(this.clearLabel(), this.i18n));
  protected readonly resolvedClearTooltip: Signal<string> = computed(() => resolveText(this.clearTooltip() ?? this.clearLabel(), this.i18n));
  protected readonly isFloating: Signal<boolean> = computed(
    () => this.resolvedFloatLabel() === 'always' || this.inputFocused() || this.isOpen() || this.autofilled() || !!this.internalValue()
  );

  protected readonly inputScroll: WritableSignal<number> = signal(0);

  protected readonly resolvedEmptyText: Signal<string> = computed(() => resolveText(this.emptyText(), this.i18n));
  protected readonly resolvedOptions: Signal<IAutocompleteResolvedOptionsState[]> = computed(() =>
    this.options().map((option) => ({
      ...option,
      labelText: resolveText(option.label ?? option.value, this.i18n)
    }))
  );
  protected readonly filteredOptions: Signal<IAutocompleteFilteredOptionsState[]> = computed(() => {
    const query = (this.internalValue() ?? '').toLocaleLowerCase();

    return this.externalFiltering() || !query
      ? this.resolvedOptions()
      : this.resolvedOptions().filter((option) => option.labelText.toLocaleLowerCase().includes(query) || option.value.toLocaleLowerCase().includes(query));
  });
  protected readonly activeId: Signal<string | null> = computed(() =>
    this.isOpen() && !this.searching() && this.filteredOptions()[this.activeIndex()] && !this.filteredOptions()[this.activeIndex()].disabled
      ? this.controlId() + '-option-' + this.activeIndex()
      : null
  );
  protected readonly completionOption: Signal<IAutocompleteCompletionOptionState | undefined> = computed(() => {
    const value = this.internalValue() ?? '';

    if (
      !this.inlineCompletion() ||
      !this.isOpen() ||
      !this.inputFocused() ||
      !this.caretAtEnd() ||
      this.composing() ||
      this.searching() ||
      this.effectiveDisabled() ||
      this.isReadonly() ||
      !value
    )
      return undefined;

    const options = this.filteredOptions();
    const candidate =
      this.activeIndex() >= 0
        ? options[this.activeIndex()]
        : options.find(
            (option) => !option.disabled && option.value.length > value.length && option.value.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
          );

    return candidate &&
      !candidate.disabled &&
      candidate.value.length > value.length &&
      candidate.value.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
      ? candidate
      : undefined;
  });
  protected readonly completionSuffix: Signal<string> = computed(() => this.completionOption()?.value.slice((this.internalValue() ?? '').length) ?? '');

  /** Current open state of the overlay. */
  public readonly isOpen: Signal<boolean> = this.opened.asReadonly();

  /** Currently loaded options; this collection may be only part of a remote result set. Defaults to an empty array. */
  public readonly options: InputSignal<readonly IAutocompleteOption[]> = input<readonly IAutocompleteOption[]>([]);
  /** Show a muted, uncommitted suffix for a matching suggestion. Accept with the forward arrow, End or Enter. Defaults to true. */
  public readonly inlineCompletion: InputSignal<boolean> = input(true);
  /** Shows the shared clear action for nonempty editable text. Defaults to true; hidden while readonly. */
  public readonly clearable: InputSignal<boolean> = input(true);
  /** Translated accessible name for the clear action. Defaults to Clear selection. */
  public readonly clearLabel: InputSignal<ResolvableText> = input<ResolvableText>('Clear selection');
  /** Optional translated tooltip; defaults to clearLabel. An empty string suppresses the tooltip. */
  public readonly clearTooltip: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** True when the application supplies filtered options, including remote search. Defaults to false. */
  public readonly externalFiltering: InputSignal<boolean> = input(false);
  /** Suppresses stale results and pagination while a replacement query is pending. */
  public readonly searching: InputSignal<boolean> = input(false);
  /** Whether the consumer reports additional remote results available for pagination. Defaults to `false`. */
  public readonly hasMore: InputSignal<boolean> = input(false);
  /**
   * Error state for the failed incremental request; retained items remain visible and an explicit retry is available. Optional; omission leaves the
   * value undefined.
   */
  public readonly loadError: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Text, accessibility, and appearance overrides for the shared load-more action. Defaults to an empty configuration. */
  public readonly loadMoreConfig: InputSignal<ILoadMoreConfig> = input<ILoadMoreConfig>({});
  /**
   * Optional custom shared load-more action template; preserve guarded requests and disabled/loading semantics. Optional; omission leaves the value
   * undefined.
   */
  public readonly loadMoreTemplate: InputSignal<TemplateRef<ILoadMoreContext> | undefined> = input<TemplateRef<ILoadMoreContext> | undefined>(undefined);
  /** Items reference or page revision used to acknowledge completion of a guarded load-more request. Optional; omission leaves the value undefined. */
  public readonly loadMoreRevision: InputSignal<unknown> = input<unknown>(undefined);
  /**
   * Optional presentation template for an option; the owner retains selection and accessibility behavior. Optional; omission leaves the value undefined.
   */
  public readonly optionTemplate: InputSignal<TemplateRef<IAutocompleteOptionContext> | undefined> = input<TemplateRef<IAutocompleteOptionContext> | undefined>(
    undefined
  );
  /** Text shown when autocomplete has no matching items and is not loading. Defaults to `'No suggestions. You can enter your own value.'`. */
  public readonly emptyText: InputSignal<ResolvableText> = input<ResolvableText>('No suggestions. You can enter your own value.');
  /** Text describing active autocomplete result loading. Defaults to `'Loading suggestions'`. */
  public readonly loadingText: InputSignal<ResolvableText> = input<ResolvableText>('Loading suggestions');
  /** Native browser autocomplete hint applied to the text input. Defaults to `'off'`. */
  public readonly autocomplete: InputSignal<string> = input('off');

  /** Emitted for user text edits. The application owns debounce, cancellation and remote requests. */
  public readonly queryChange: OutputEmitterRef<string> = output<string>();
  /** Emitted only when the user chooses a suggestion. Free text remains a valid value. */
  public readonly optionSelected: OutputEmitterRef<IAutocompleteOption> = output<IAutocompleteOption>();
  /** Emits a guarded incremental option request; the consumer supplies loading, errors, and result updates. */
  public readonly loadMore: OutputEmitterRef<ILoadMoreRequest> = output<ILoadMoreRequest>();
  /** Emits whether the autocomplete options panel is open. */
  public readonly openedChange: OutputEmitterRef<boolean> = output<boolean>();

  private overlayRef?: OverlayRef;
  private subscriptions: Subscription = new Subscription();
  private disconnectTheme?: () => void;
  private disconnectLighting?: () => void;
  private selectionMotion?: ISelectionMotion;
  private transition?: ReturnType<typeof createGlassTransition>;
  private presentationRevision: number = 0;

  constructor() {
    super();
    effect(() => {
      const reducedMotion = this.bxA11yService.isReducedMotion();

      this.selectionMotion?.update({ reducedMotion });
    });
    this.destroyRef.onDestroy(() => this.dispose());
    effect(() => {
      if ((this.effectiveDisabled() || this.isReadonly()) && this.isOpen()) this.close();
    });
    effect(() => {
      this.options();
      this.searching();
      untracked(() => this.activeIndex.set(-1));
    });
  }

  /** Open the component's overlay using its current configuration and shared positioning/focus mechanisms. */
  public open(): void {
    if (!this.browser || this.destroyRef.destroyed || this.isOpen() || this.effectiveDisabled() || this.isReadonly()) return;

    if (this.overlayRef) this.dispose();

    const origin = this.anchor().nativeElement;
    const overlay = this.overlay.create({
      width: origin.getBoundingClientRect().width,
      maxWidth: 'calc(100vw - 16px)',
      positionStrategy: this.bxOverlayPositionService.getElementStrategy(origin, 'bottom', 4),
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      usePopover: !!this.context?.useTopLayer || !!origin.closest('dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]')
    });

    this.overlayRef = overlay;
    this.opened.set(true);
    this.disconnectTheme = this.ngZone.runOutsideAngular(() => inheritOverlayTheme(origin, overlay.overlayElement));
    this.disconnectLighting = inheritGlassLighting(overlay.overlayElement, origin);
    this.subscriptions.add(
      this.ngZone.runOutsideAngular(() =>
        trackOverlayOrigin(overlay, origin, {
          onOriginHidden: () => this.ngZone.run(() => this.close()),
          onPosition: () => {
            const width = origin.getBoundingClientRect().width;

            if (overlay.getConfig().width !== width) overlay.updateSize({ width });
          }
        })
      )
    );
    this.subscriptions.add(
      overlay.outsidePointerEvents().subscribe((event) => {
        if (!origin.contains(event.target as Node)) this.close();
      })
    );
    this.subscriptions.add(overlay.keydownEvents().subscribe((event) => this.onPanelKey(event)));

    const view = overlay.attach(new TemplatePortal(this.panelTemplate(), this.viewContainerRef));

    view.detectChanges();
    overlay.updatePosition();

    const list = overlay.overlayElement.querySelector<HTMLElement>('[role="listbox"]');

    if (list) this.selectionMotion = this.ngZone.runOutsideAngular(() => mountSelectionMotion(list, { reducedMotion: this.bxA11yService.isReducedMotion() }));

    this.transition = this.ngZone.runOutsideAngular(() => createGlassTransition(origin, overlay.overlayElement));
    void this.ngZone.runOutsideAngular(() => this.transition?.enter());
    this.openedChange.emit(true);
  }

  /** Report closed state and restore owned focus immediately; retain an inert panel through exit and discard stale completion after reopening. */
  public close(): void {
    if (!this.isOpen()) return;

    const pane = this.overlayRef?.overlayElement;

    if (pane?.contains(pane.ownerDocument.activeElement)) this.focus({ preventScroll: true });

    const revision = ++this.presentationRevision;

    this.opened.set(false);

    if (pane) pane.inert = true;

    const finish = (): void => {
      if (revision === this.presentationRevision) this.dispose();
    };

    const transition = this.transition;

    if (transition && !this.bxA11yService.isReducedMotion()) void this.ngZone.runOutsideAngular(() => transition.exit()).then(finish, finish);
    else finish();

    this.openedChange.emit(false);
  }

  /** Release the shared request guard after completion without a loading cycle or changed revision. */
  public completeLoadMore(): void {
    this.pagination()?.complete();
  }

  /** Clears editable text, marks the field touched and requests suggestions for the empty query. */
  public clear(): void {
    if (this.effectiveDisabled() || this.isReadonly()) return;

    this.composing.set(false);
    this.updateValue('');
    this.activeIndex.set(-1);
    this.markAsTouched();
    this.focus({ preventScroll: true });
    this.queryChange.emit('');
  }

  protected onInput(event: Event): void {
    if (this.composing() || this.effectiveDisabled() || this.isReadonly()) return;

    const value = (event.target as HTMLInputElement).value;

    this.updateValue(value);
    this.activeIndex.set(-1);
    this.updateCompletionPosition();
    this.open();
    this.queryChange.emit(value);
  }

  protected onCompositionStart(): void {
    this.composing.set(true);
  }

  protected onCompositionEnd(event: Event): void {
    this.composing.set(false);
    this.onInput(event);
  }

  protected onFocus(): void {
    this.inputFocused.set(true);
    this.updateCompletionPosition();
    this.open();
  }

  protected updateCompletionPosition(): void {
    const input = this.nativeInput().nativeElement;

    this.caretAtEnd.set(input.selectionStart === input.value.length && input.selectionEnd === input.value.length);
    this.inputScroll.set(input.scrollLeft);
  }

  protected onBlur(event: FocusEvent): void {
    if (event.target === this.nativeInput().nativeElement) this.inputFocused.set(false);

    const destination = event.relatedTarget as Node | null;

    if (destination && (this.nativeElement.contains(destination) || this.overlayRef?.overlayElement.contains(destination))) return;

    queueMicrotask(() => {
      if (this.destroyRef.destroyed) return;

      const active = this.nativeElement.ownerDocument.activeElement;

      if (this.nativeElement.contains(active) || this.overlayRef?.overlayElement.contains(active)) return;

      this.close();
      this.markAsTouched();
    });
  }

  protected onInputKey(event: KeyboardEvent): void {
    if (this.composing() || event.isComposing || this.effectiveDisabled() || this.isReadonly()) return;

    this.updateCompletionPosition();

    const completion = this.completionOption();
    const direction = this.nativeInput().nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeInput().nativeElement).direction;
    const forwardKey = direction === 'rtl' ? 'ArrowLeft' : 'ArrowRight';

    if (
      completion &&
      !event.altKey &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.shiftKey &&
      (event.key === forwardKey || event.key === 'End' || (event.key === 'Enter' && !this.activeId()))
    ) {
      event.preventDefault();
      this.selectOption(completion);
    } else if (event.key === 'Escape' && this.isOpen()) {
      event.preventDefault();
      event.stopPropagation();
      this.close();
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.open();

      if (this.searching()) return;

      const options = this.filteredOptions();
      const enabled = options.map((option, index) => (option.disabled ? -1 : index)).filter((index) => index >= 0);
      const current = enabled.indexOf(this.activeIndex());
      const next =
        event.key === 'ArrowDown' ? (current + 1) % enabled.length : current < 0 ? enabled.length - 1 : (current - 1 + enabled.length) % enabled.length;

      this.activeIndex.set(enabled[next] ?? -1);
      this.overlayRef?.overlayElement.querySelector<HTMLElement>('#' + this.activeId())?.scrollIntoView({ block: 'nearest' });
    } else if (event.key === 'Enter' && this.isOpen() && this.activeId()) {
      event.preventDefault();
      this.selectOption(this.filteredOptions()[this.activeIndex()]);
    } else if (event.key === 'Tab' && this.isOpen()) {
      if (!event.shiftKey && this.showClear()) return;

      this.tabToPanel(event);
    }
  }

  protected onClearKey(event: KeyboardEvent): void {
    if (event.key === 'Tab' && !event.shiftKey && this.isOpen()) this.tabToPanel(event);
  }

  protected selectOption(option: IAutocompleteOption): void {
    if (option.disabled || this.searching() || this.effectiveDisabled() || this.isReadonly()) return;

    this.updateValue(option.value);
    this.optionSelected.emit(option);
    this.close();
    this.focus({ preventScroll: true });
  }

  protected requestMore(request: ILoadMoreRequest): void {
    // A busy native footer button becomes disabled; keep focus within the control before that happens.
    const pane = this.overlayRef?.overlayElement;

    if (pane?.contains(pane.ownerDocument.activeElement)) this.focus({ preventScroll: true });

    this.loadMore.emit(request);
  }

  //#region Helpers

  private onPanelKey(event: KeyboardEvent): void {
    const target = event.target as Node | null;

    if (event.defaultPrevented || !target || !this.overlayRef?.overlayElement.contains(target)) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      this.close();
    } else if (event.key === 'Tab') {
      if (event.shiftKey) {
        event.preventDefault();
        this.focus({ preventScroll: true });
      } else this.close();
    }
  }

  private panelAction(): HTMLButtonElement | undefined {
    return Array.from(this.overlayRef?.overlayElement.querySelectorAll<HTMLButtonElement>('button:not(:disabled)') ?? []).find(
      (button) => button.tabIndex >= 0 && button.getClientRects().length > 0
    );
  }

  private tabToPanel(event: KeyboardEvent): void {
    const action = this.panelAction();

    if (!event.shiftKey && action) {
      event.preventDefault();
      action.focus();
    } else this.close();
  }

  private dispose(): void {
    ++this.presentationRevision;
    this.selectionMotion?.destroy();
    this.selectionMotion = undefined;
    this.transition?.destroy();
    this.transition = undefined;
    this.opened.set(false);
    this.activeIndex.set(-1);
    this.subscriptions.unsubscribe();
    this.subscriptions = new Subscription();
    this.disconnectTheme?.();
    this.disconnectTheme = undefined;
    this.disconnectLighting?.();
    this.disconnectLighting = undefined;
    this.overlayRef?.dispose();
    this.overlayRef = undefined;
  }

  //#endregion
}
