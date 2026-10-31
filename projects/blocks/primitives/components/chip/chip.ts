import { booleanAttribute, ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, model, output } from '@angular/core';
import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { TAG_PALETTES } from '../tag/constants/tag.constants';
import { IChipConfig } from './interfaces/ichip-config.interface';
import { BX_CHIP_DEFAULTS } from './tokens/chip-defaults.token';

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
  protected readonly settings = computed(() => {
    const config = this.config();

    return {
      color: config.color ?? this.defaults?.color ?? 'primary',
      variant: config.variant ?? this.defaults?.variant ?? 'tonal',
      size: config.size ?? this.defaults?.size ?? 'medium',
      icon: config.icon ?? this.defaults?.icon,
      removeLabel: config.removeLabel ?? this.defaults?.removeLabel ?? 'Remove {label}'
    };
  });

  protected readonly palette = computed(() => TAG_PALETTES[this.settings().color ?? 'primary']);
  protected readonly resolvedLabel = computed(() => resolveText(this.label(), this.i18n));
  protected readonly resolvedRemoveLabel = computed(() =>
    resolveText(this.settings().removeLabel ?? 'Remove {label}', this.i18n, { label: this.resolvedLabel() }).replaceAll('{label}', this.resolvedLabel())
  );

  public readonly label = input.required<ResolvableText>();
  public readonly config = input<IChipConfig>({});
  public readonly selected = model(false);
  public readonly selectable = input(true, { transform: booleanAttribute });
  public readonly removable = input(false, { transform: booleanAttribute });
  public readonly disabled = input(false, { transform: booleanAttribute });
  public readonly readonly = input(false, { transform: booleanAttribute });
  public readonly readOnly = input(false, { transform: booleanAttribute });
  public readonly isReadonly = computed(() => this.readonly() || this.readOnly());
  public readonly activated = output();
  /** Requests removal. The application owns its items and chooses focus after removing a chip. */
  public readonly removed = output();

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
