import { Component, computed, inject, output, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BX_I18N, BxBaseControl, isTextWithKey } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';
import { FormField } from '../form-field/form-field';
import { Button } from "../button/button";

@Component({
  selector: 'bx-search-input',
  standalone: true,
  imports: [CommonModule, FormField, Icon, Button],
  templateUrl: './search-input.html',
  styleUrl: './search-input.scss'
})
export class SearchInput extends BxBaseControl<string> {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly inputId = computed(() => `bx-search-${Math.random().toString(36).substr(2, 9)}`);

  public readonly search = output<string>();

  @ViewChild('inputElement') private inputElement?: ElementRef<HTMLInputElement>;

  protected readonly resolvedPlaceholder = computed(() => {
    this.i18n?.version?.();
    const p = this.placeholder();
    if (!p) return '';
    return isTextWithKey(p) ? (this.i18n?.translate(p.key) ?? p.key) : p;
  });

  protected onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.updateValue(target.value);
    this.search.emit(target.value);
  }

  protected onBlur(): void {
    this.markAsTouched();
  }

  public clear(): void {
    if (this.isDisabled()) return;
    this.updateValue('');
    this.search.emit('');
    this.focus();
  }

  public focus(): void {
    this.inputElement?.nativeElement.focus();
  }
}