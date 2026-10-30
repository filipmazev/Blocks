import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Component, computed, DestroyRef, ElementRef, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BX_I18N, BxBaseControl, isTextWithKey, uuidv4 } from '@filip.mazev/blocks/core';
import { LabelPosition } from '../shared/types/validation.types';
import { RadioRegistry } from './services/radio-registry.service';
import { BX_RADIO_GROUP } from '../radio-group/tokens/radio-group.token';
import { FormField } from '../form-field/form-field';

@Component({
  selector: 'bx-radio',
  standalone: true,
  imports: [BxSurfaceDirective, CommonModule, FormField],
  templateUrl: './radio-button.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './radio-button.scss'
})
export class Radio extends BxBaseControl<unknown> {
  protected readonly group = inject(BX_RADIO_GROUP, { optional: true });
  private readonly registry = inject(RadioRegistry);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  private readonly i18n = inject(BX_I18N, { optional: true });
  protected readonly inputId = computed(() => `bx-radio-${uuidv4()}`);
  protected readonly resolvedLabel = computed(() => {
    this.i18n?.version?.();
    const l = this.label();
    if (!l) return undefined;
    return isTextWithKey(l) ? (this.i18n?.translate(l.key) ?? l.key) : l;
  });

  protected readonly effectiveDisabled = computed(() => this.isDisabled() || !!this.group?.disabled());
  protected readonly effectiveName = computed(() => this.group?.groupName() ?? this.name());
  protected readonly selected = computed(() => (this.group ? this.group.value() : this.internalValue()) === this.value());
  public readonly labelPosition = input<LabelPosition>('after');

  public readonly value = input.required<unknown>();

  public readonly name = input<string>('');

  protected showTooltip = false;
  constructor() {
    super();
    this.registry.radios.add(this);
    inject(DestroyRef).onDestroy(() => this.registry.radios.delete(this));
  }

  /** Match native form/name groups and radios bound to one reactive control. */
  public sharesGroup(other: Radio): boolean {
    const control = this.ngControl?.control;
    if (control && control === other.ngControl?.control) return true;
    return (
      !!this.name() &&
      this.name() === other.name() &&
      this.element.closest('form') === other.element.closest('form') &&
      control?.parent === other.ngControl?.control?.parent
    );
  }

  protected onSelect(): void {
    if (this.effectiveDisabled() || this.isReadonly() || this.group?.isReadonly()) return;

    if (this.group) this.group.select(this.value());
    else {
      this.updateValue(this.value());
      this.registry.select(this);
    }
  }

  protected onReadonlyClick(event: Event): void {
    if (this.isReadonly() || this.group?.isReadonly()) event.preventDefault();
  }

  protected override onControlPointerDown(): void {
    if (this.isReadonly() || this.group?.isReadonly()) this.keyboardFocused.set(false);
  }

  protected onBlur(): void {
    if (this.group) this.group.markTouched();
    else this.markAsTouched();
  }
}
