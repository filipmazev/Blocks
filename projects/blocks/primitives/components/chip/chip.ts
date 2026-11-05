import type { InputSignal, InputSignalWithTransform, ModelSignal, OutputEmitterRef, Signal } from '@angular/core';

import { booleanAttribute, ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, model, output } from '@angular/core';

import type { IChipSettingsState } from '@primitives/components/chip/interfaces/ichip-settings-state.interface';
import type { ITagPalette } from '@primitives/components/tag/interfaces/itag-palette.interface';

import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';

import { IChipConfig } from '@primitives/components/chip/interfaces/ichip-config.interface';
import { BX_CHIP_DEFAULTS } from '@primitives/components/chip/tokens/chip-defaults.token';
import { TAG_PALETTES } from '@primitives/components/tag/constants/tag.constants';

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
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);

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

  public readonly isReadonly: Signal<boolean> = computed(() => this.readonly() || this.readOnly());

  public readonly label: InputSignal<ResolvableText> = input.required<ResolvableText>();
  public readonly config: InputSignal<IChipConfig> = input<IChipConfig>({});

  public readonly selected: ModelSignal<boolean> = model(false);

  public readonly selectable: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  public readonly removable: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  public readonly disabled: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  public readonly readonly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  public readonly readOnly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  public readonly activated: OutputEmitterRef<void> = output();
  /** Requests removal. The application owns its items and chooses focus after removing a chip. */
  public readonly removed: OutputEmitterRef<void> = output();

  public focus(options?: FocusOptions): void {
    this.element.nativeElement.querySelector<HTMLButtonElement>('.bx-chip-action')?.focus(options);
  }

  public activate(): void {
    if (this.disabled() || this.isReadonly()) return;

    if (this.selectable()) this.selected.update((selected) => !selected);

    this.activated.emit();
  }

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
