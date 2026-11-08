import type { InputSignal, InputSignalWithTransform, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { booleanAttribute, ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, input, output, signal } from '@angular/core';

import { BX_I18N, Color, ResolvableText, resolveText, resolveTokenToCssVar } from '@filip.mazev/blocks/core';
import { injectComponentSurface } from '@filip.mazev/blocks/effects';

import { CARD_NESTED_ACTION_SELECTOR } from '@primitives/constants/card.constants';
import { CardVariant } from '@primitives/types/card.types';

@Component({
  selector: 'bx-card, button[bx-card]',
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.data-variant]': 'variant()',
    '[attr.data-clickable]': 'isClickable() ? "true" : null',
    '[attr.data-selected]': 'isClickable() && selected() === true ? "true" : null',
    '[attr.role]': 'isClickable() && !nativeButton ? "button" : originalRole',
    '[attr.tabindex]': 'isClickable() ? (disabled() ? -1 : originalTabIndex ?? "0") : originalTabIndex',
    '[attr.type]': 'nativeButton ? "button" : null',
    '[attr.disabled]': 'nativeButton && disabled() ? "" : null',
    '[attr.aria-disabled]': 'isClickable() ? (disabled() || isReadonly()) : null',
    '[attr.aria-pressed]': 'isClickable() && selected() !== undefined ? selected() : null',
    '[attr.aria-label]': 'resolvedAriaLabel() || originalAriaLabel',
    '[attr.aria-labelledby]': 'ariaLabelledBy() ?? originalAriaLabelledBy',
    '[attr.aria-describedby]': 'ariaDescribedBy() ?? originalAriaDescribedBy',
    '[class.is-disabled]': 'disabled()',
    '[class.is-readonly]': 'isReadonly()',
    '[class.is-keyboard-pressed]': 'keyboardPressed() && !disabled() && !isReadonly()',
    '[style.--bx-card-highlight]': 'resolvedHighlight()',
    '(click)': 'onClick($event)',
    '(keydown)': 'onKeydown($event)',
    '(keyup)': 'onKeyup($event)',
    '(blur)': 'keyboardPressed.set(false)'
  }
})
export class Card {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  protected readonly originalRole: string | null = this.nativeElement.getAttribute('role');
  protected readonly originalTabIndex: string | null = this.nativeElement.getAttribute('tabindex');
  protected readonly originalAriaLabel: string | null = this.nativeElement.getAttribute('aria-label');
  protected readonly originalAriaLabelledBy: string | null = this.nativeElement.getAttribute('aria-labelledby');
  protected readonly originalAriaDescribedBy: string | null = this.nativeElement.getAttribute('aria-describedby');
  protected readonly nativeButton: boolean = this.nativeElement.tagName === 'BUTTON';

  protected readonly keyboardPressed: WritableSignal<boolean> = signal(false);

  protected readonly resolvedTitle: Signal<string> = computed(() => resolveText(this.title(), this.i18n));
  protected readonly resolvedSubtitle: Signal<string> = computed(() => resolveText(this.subtitle(), this.i18n));
  protected readonly level: Signal<number> = computed(() =>
    Number.isFinite(this.headingLevel()) ? Math.max(1, Math.min(6, Math.floor(this.headingLevel()))) : 3
  );
  protected readonly resolvedAriaLabel: Signal<string> = computed(() => resolveText(this.ariaLabel(), this.i18n));
  protected readonly resolvedHighlight: Signal<string | null> = computed(() => {
    const color = this.highlightColor();

    return color ? resolveTokenToCssVar(color) : null;
  });

  /** Whether the card exposes interactive activation semantics. */
  public readonly isClickable: Signal<boolean> = computed(() => this.clickable() || this.nativeButton);
  /** Whether edits are blocked while preserving focus and enabled presentation; combines readonly and readOnly inputs. */
  public readonly isReadonly: Signal<boolean> = computed(() => this.readonly() || this.readOnly());

  /** Heading text displayed by the component; supports shared translation keys where configurable. Optional; omission leaves the value undefined. */
  public readonly title: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Supporting text displayed beneath the card title. Optional; omission leaves the value undefined. */
  public readonly subtitle: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Semantic heading level for the component title, preserving the surrounding document hierarchy. Defaults to `3`. */
  public readonly headingLevel: InputSignal<number> = input(3);
  /** Card material/presentation variant using the shared Blocks semantic styles. Defaults to `'outlined'`. */
  public readonly variant: InputSignal<CardVariant> = input<CardVariant>('outlined');
  /** Optional opaque presentation. Absent follows global appearance; false cannot override an active global or operating-system reduced-transparency preference. */
  public readonly opaque: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);
  /** Whether the card mounts shared decorative surface effects. Defaults to true; false preserves the themed card styling for dense static collections. */
  public readonly surfaceEffects: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Make the whole card an action. Defaults to false; button[bx-card] is always clickable. */
  public readonly clickable: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Controlled selection. Omit for a plain action; bind selectedChange or use [(selected)] to accept toggle requests. */
  public readonly selected: InputSignal<boolean | undefined> = input<boolean | undefined>();
  /** Suppress card activation and remove it from keyboard navigation. Defaults to false. */
  public readonly disabled: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Preserve focus and selected appearance while preventing activation and selection changes. */
  public readonly readonly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Consumer-facing alias of readonly. Defaults to false. */
  public readonly readOnly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Optional semantic or palette token for selected, hover and focus lighting. Defaults to --bx-card-highlight, then primary. */
  public readonly highlightColor: InputSignal<Color | undefined> = input<Color>();
  /** Optional translated accessible name for a clickable card; otherwise projected content names the action. */
  public readonly ariaLabel: InputSignal<ResolvableText | undefined> = input<ResolvableText>();
  /** Optional IDs that label the card action. */
  public readonly ariaLabelledBy: InputSignal<string | undefined> = input<string>();
  /** Optional IDs describing the card action. */
  public readonly ariaDescribedBy: InputSignal<string | undefined> = input<string>();

  /** Emitted once for enabled pointer, Enter or Space activation. */
  public readonly activated: OutputEmitterRef<void> = output();
  /** Requested next selection; consumers own the selected input. Not emitted for plain action cards. */
  public readonly selectedChange: OutputEmitterRef<boolean> = output<boolean>();

  constructor() {
    injectComponentSurface(
      () => ({
        interactive: this.isClickable() && !this.disabled() && !this.isReadonly(),
        reducedTransparency: this.opaque(),
        emission: this.isClickable() ? 'var(--bx-card-highlight, var(--bx-primary))' : undefined
      }),
      () => this.surfaceEffects()
    );

    effect(() => {
      if (!this.isClickable() || this.disabled() || this.isReadonly()) this.keyboardPressed.set(false);
    });
  }

  /** Activate an enabled clickable card, update editable selection, and emit the activation event. */
  public activate(): void {
    if (!this.isClickable() || this.disabled() || this.isReadonly()) return;

    if (this.selected() !== undefined) this.selectedChange.emit(!this.selected());

    this.activated.emit();
  }

  /**
   * Move focus to the component's native control using the supplied browser focus options.
   *
   * @param options - Browser focus options, including preventScroll when focus should not move the page. Optional.
   */
  public focus(options?: FocusOptions): void {
    if (this.isClickable() && !this.disabled()) this.nativeElement.focus?.(options);
  }

  protected onClick(event: MouseEvent): void {
    if (!this.isClickable() || this.isNestedAction(event.target)) return;

    if (this.disabled() || this.isReadonly()) {
      event.preventDefault();
      event.stopImmediatePropagation();

      return;
    }

    this.activate();
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.target !== this.nativeElement || !this.isClickable() || !['Enter', ' '].includes(event.key) || event.altKey || event.ctrlKey || event.metaKey)
      return;

    if (this.disabled() || this.isReadonly()) {
      event.preventDefault();

      return;
    }

    // Native buttons already synthesize a single click for Enter and Space.
    if (this.nativeButton) return;

    if (event.key === ' ') event.preventDefault();

    if (event.repeat) return;

    this.keyboardPressed.set(true);

    if (event.key === 'Enter') this.activate();
  }

  protected onKeyup(event: KeyboardEvent): void {
    if (event.target !== this.nativeElement || this.nativeButton || !['Enter', ' '].includes(event.key)) return;

    const pressed = this.keyboardPressed();

    this.keyboardPressed.set(false);

    if (event.key === ' ' && pressed) this.activate();
  }

  //#region Helpers

  private isNestedAction(target: EventTarget | null): boolean {
    const action = (target as Element | null)?.closest?.(CARD_NESTED_ACTION_SELECTOR);

    return !!action && action !== this.nativeElement && this.nativeElement.contains(action);
  }

  //#endregion
}
