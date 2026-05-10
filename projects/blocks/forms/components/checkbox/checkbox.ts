import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BX_I18N, BxBaseControl, isTextWithKey, uuidv4 } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';
import { FormField } from '../form-field/form-field';

@Component({
  selector: 'bx-checkbox',
  standalone: true,
  imports: [CommonModule, FormField, Icon],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss'
})
export class Checkbox extends BxBaseControl<boolean> {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly inputId = computed(() => `bx-checkbox-${uuidv4()}`);
  protected showTooltip = false;

  protected readonly resolvedLabel = computed(() => {
    this.i18n?.version?.();
    const l = this.label();
    if (!l) return undefined;
    return isTextWithKey(l) ? (this.i18n?.translate(l.key) ?? l.key) : l;
  });

  protected onToggle(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.updateValue(target.checked);
  }

  protected onBlur(): void {
    this.markAsTouched();
  }
}