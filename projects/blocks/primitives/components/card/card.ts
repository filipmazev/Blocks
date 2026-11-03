import { booleanAttribute, ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, input, output, signal } from '@angular/core';
import { BX_I18N, Color, ResolvableText, resolveText, resolveTokenToCssVar } from '@filip.mazev/blocks/core';
import { injectComponentSurface } from '@filip.mazev/blocks/effects';
import { CardVariant } from './types/card.types';
import { CARD_NESTED_ACTION_SELECTOR } from './constants/card.constants';

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
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  protected readonly originalRole = this.element.getAttribute('role');
  protected readonly originalTabIndex = this.element.getAttribute('tabindex');
  protected readonly originalAriaLabel = this.element.getAttribute('aria-label');
  protected readonly originalAriaLabelledBy = this.element.getAttribute('aria-labelledby');
  protected readonly originalAriaDescribedBy = this.element.getAttribute('aria-describedby');
  protected readonly nativeButton = this.element.tagName === 'BUTTON';
  protected readonly keyboardPressed = signal(false);
  protected readonly resolvedTitle = computed(() => resolveText(this.title(), this.i18n));
  protected readonly resolvedSubtitle = computed(() => resolveText(this.subtitle(), this.i18n));
  protected readonly level = computed(() => (Number.isFinite(this.headingLevel()) ? Math.max(1, Math.min(6, Math.floor(this.headingLevel()))) : 3));
  protected readonly resolvedAriaLabel = computed(() => resolveText(this.ariaLabel(), this.i18n));
  protected readonly resolvedHighlight = computed(() => {
    const color = this.highlightColor();

    return color ? resolveTokenToCssVar(color) : null;
  });

  public readonly title = input<ResolvableText | undefined>(undefined);
  public readonly subtitle = input<ResolvableText | undefined>(undefined);
  public readonly headingLevel = input(3);
  public readonly variant = input<CardVariant>('outlined');
  /** Optional opaque presentation. Absent follows the global appearance. */
  public readonly opaque = input<boolean | undefined>(undefined);
  /** Make the whole card an action. Defaults to false; button[bx-card] is always clickable. */
  public readonly clickable = input(false, { transform: booleanAttribute });
  public readonly isClickable = computed(() => this.clickable() || this.nativeButton);
  /** Controlled selection. Omit for a plain action; bind selectedChange or use [(selected)] to accept toggle requests. */
  public readonly selected = input<boolean | undefined>();
  /** Suppress card activation and remove it from keyboard navigation. Defaults to false. */
  public readonly disabled = input(false, { transform: booleanAttribute });
  /** Preserve focus and selected appearance while preventing activation and selection changes. */
  public readonly readonly = input(false, { transform: booleanAttribute });
  /** Consumer-facing alias of readonly. Defaults to false. */
  public readonly readOnly = input(false, { transform: booleanAttribute });
  public readonly isReadonly = computed(() => this.readonly() || this.readOnly());
  /** Optional semantic or palette token for selected, hover and focus lighting. Defaults to --bx-card-highlight, then primary. */
  public readonly highlightColor = input<Color>();
  /** Optional translated accessible name for a clickable card; otherwise projected content names the action. */
  public readonly ariaLabel = input<ResolvableText>();
  /** Optional IDs that label the card action. */
  public readonly ariaLabelledBy = input<string>();
  /** Optional IDs describing the card action. */
  public readonly ariaDescribedBy = input<string>();
  /** Emitted once for enabled pointer, Enter or Space activation. */
  public readonly activated = output();
  /** Requested next selection; consumers own the selected input. Not emitted for plain action cards. */
  public readonly selectedChange = output<boolean>();

  constructor() {
    injectComponentSurface(() => ({
      interactive: this.isClickable() && !this.disabled() && !this.isReadonly(),
      reducedTransparency: this.opaque(),
      emission: this.isClickable() ? 'var(--bx-card-highlight, var(--bx-primary))' : undefined
    }));

    effect(() => {
      if (!this.isClickable() || this.disabled() || this.isReadonly()) this.keyboardPressed.set(false);
    });
  }

  public activate(): void {
    if (!this.isClickable() || this.disabled() || this.isReadonly()) return;

    if (this.selected() !== undefined) this.selectedChange.emit(!this.selected());

    this.activated.emit();
  }

  public focus(options?: FocusOptions): void {
    if (this.isClickable() && !this.disabled()) this.element.focus?.(options);
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
    if (event.target !== this.element || !this.isClickable() || !['Enter', ' '].includes(event.key) || event.altKey || event.ctrlKey || event.metaKey) return;

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
    if (event.target !== this.element || this.nativeButton || !['Enter', ' '].includes(event.key)) return;

    const pressed = this.keyboardPressed();
    this.keyboardPressed.set(false);

    if (event.key === ' ' && pressed) this.activate();
  }

  //#region Helpers

  private isNestedAction(target: EventTarget | null): boolean {
    const action = (target as Element | null)?.closest?.(CARD_NESTED_ACTION_SELECTOR);

    return !!action && action !== this.element && this.element.contains(action);
  }

  //#endregion
}
