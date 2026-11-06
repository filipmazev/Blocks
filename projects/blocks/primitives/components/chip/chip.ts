import type { InputSignal, InputSignalWithTransform, ModelSignal, OutputEmitterRef, Signal } from '@angular/core';

import { booleanAttribute, ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, model, output } from '@angular/core';

import type { IChipSettingsState } from '@primitives/interfaces/ichip-settings-state.interface';
import type { ITagPalette } from '@primitives/interfaces/itag-palette.interface';

import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';

import { TAG_PALETTES } from '@primitives/constants/tag.constants';
import { IChipConfig } from '@primitives/interfaces/ichip-config.interface';
import { BX_CHIP_DEFAULTS } from '@primitives/tokens/chip-defaults.token';

@Component({
  selector: 'bx-chip',
  imports: [Icon, BxSurfaceDirective],
  templateUrl: './chip.html',
  styleUrl: './chip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--bx-chip-role-text]': 'palette().text',
    '[style.--bx-chip-role-background]': 'palette().tonal',
    '[style.--bx-chip-role-border]': 'palette().border',
    '[style.--bx-chip-role-fill]': 'palette().fill',
    '[style.--bx-chip-role-on-fill]': 'palette().onFill'
  }
})
export class Chip {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly defaults = inject(BX_CHIP_DEFAULTS, { optional: true });
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly settings: Signal<IChipSettingsState> = computed(() => {
    const config = this.config();

    return {
      color: config.color ?? this.defaults?.color ?? 'primary',
      variant: config.variant ?? this.defaults?.variant ?? 'tonal',
      size: config.size ?? this.defaults?.size ?? 'medium',
      icon: config.icon ?? this.defaults?.icon,
      removeLabel: config.removeLabel ?? this.defaults?.removeLabel ?? 'Remove {label}'
    };
  });
  protected readonly palette: Signal<ITagPalette> = computed(() => TAG_PALETTES[this.settings().color ?? 'primary']);
  protected readonly resolvedLabel: Signal<string> = computed(() => resolveText(this.label(), this.i18n));
  protected readonly resolvedRemoveLabel: Signal<string> = computed(() =>
    resolveText(this.settings().removeLabel ?? 'Remove {label}', this.i18n, { label: this.resolvedLabel() }).replaceAll('{label}', this.resolvedLabel())
  );

  /** Whether edits are blocked while preserving focus and enabled presentation; combines readonly and readOnly inputs. */
  public readonly isReadonly: Signal<boolean> = computed(() => this.readonly() || this.readOnly());

  /** Visible or accessible label for the component; translation-key values resolve through BX_I18N. Required input. */
  public readonly label: InputSignal<ResolvableText> = input.required<ResolvableText>();
  /** Chip appearance and action defaults merged with explicit instance inputs. */
  public readonly config: InputSignal<IChipConfig> = input<IChipConfig>({});

  /** Whether the item is selected; consumers may control this state. Defaults to `false`. */
  public readonly selected: ModelSignal<boolean> = model(false);

  /** Whether chip activation is allowed to change selection. Defaults to `true`. */
  public readonly selectable: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether activating a selected chip can deselect it. Defaults to true; false supports owner-coordinated single-choice groups. */
  public readonly deselectable: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether the chip offers its removal action. Defaults to `false`. */
  public readonly removable: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Whether user interaction is disabled; disabled controls do not accept ordinary activation or edits. Defaults to `false`. */
  public readonly disabled: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Angular forms readonly state; prevents edits without disabling or removing keyboard focus. Defaults to `false`. */
  public readonly readonly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Consumer-facing alias for readonly; either input makes the control read-only. Defaults to `false`. */
  public readonly readOnly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  /** Emits pointer or keyboard activation of an enabled chip. */
  public readonly activated: OutputEmitterRef<void> = output();
  /** Requests removal. The application owns its items and chooses focus after removing a chip. */
  public readonly removed: OutputEmitterRef<void> = output();

  /**
   * Move focus to the component's native control using the supplied browser focus options.
   *
   * @param options - Browser focus options, including preventScroll when focus should not move the page. Optional.
   */
  public focus(options?: FocusOptions): void {
    this.elementRef.nativeElement.querySelector<HTMLButtonElement>('.bx-chip-action')?.focus(options);
  }

  /** Activate an enabled editable chip and update selectable state when selection is supported. */
  public activate(): void {
    if (this.disabled() || this.isReadonly()) return;

    if (this.selectable()) this.selected.set(this.deselectable() ? !this.selected() : true);

    this.activated.emit();
  }

  /** Emit a removal request when the chip is removable, enabled, and editable. */
  public remove(): void {
    if (this.disabled() || this.isReadonly() || !this.removable()) return;

    this.removed.emit();
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (!this.removable() || this.disabled() || this.isReadonly() || !['Delete', 'Backspace'].includes(event.key)) return;

    event.preventDefault();
    event.stopPropagation();
    this.remove();
  }
}
