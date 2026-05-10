import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BX_I18N, BxBaseControl, isTextWithKey, uuidv4 } from '@filip.mazev/blocks/core';
import { FormField } from '../form-field/form-field';

@Component({
  selector: 'bx-radio',
  standalone: true,
  imports: [CommonModule, FormField],
  templateUrl: './radio-button.html',
  styleUrl: './radio-button.scss'
})
export class Radio extends BxBaseControl<any> {
  private readonly i18n = inject(BX_I18N, { optional: true });

  public readonly value = input.required<any>();
  public readonly name = input<string>('');

  protected readonly inputId = computed(() => `bx-radio-${uuidv4()}`);
  protected showTooltip = false;

  protected readonly resolvedLabel = computed(() => {
    this.i18n?.version?.();
    const l = this.label();
    if (!l) return undefined;
    return isTextWithKey(l) ? (this.i18n?.translate(l.key) ?? l.key) : l;
  });

  protected onSelect(): void {
    if (!this.isDisabled()) {
      this.updateValue(this.value());
    }
  }

  protected onBlur(): void {
    this.markAsTouched();
  }
}