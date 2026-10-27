import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BX_I18N, BxBaseControl, isTextWithKey, uuidv4 } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';
import { FormField } from '../form-field/form-field';

@Component({
  selector: 'bx-checkbox',
  standalone: true,
  imports: [BxSurfaceDirective, CommonModule, FormField, Icon],
  templateUrl: './checkbox.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './checkbox.scss'
})
export class Checkbox extends BxBaseControl<boolean> {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly inputId = computed(() => `bx-checkbox-${uuidv4()}`);
  protected readonly resolvedLabel = computed(() => {
    this.i18n?.version?.();
    const l = this.label();
    if (!l) return undefined;
    return isTextWithKey(l) ? (this.i18n?.translate(l.key) ?? l.key) : l;
  });

  protected showTooltip = false;

  protected onToggle(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.updateValue(target.checked);
  }

  protected onBlur(): void {
    this.markAsTouched();
  }
}
