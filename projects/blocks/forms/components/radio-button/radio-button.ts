import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Component, computed, DestroyRef, ElementRef, inject, Injectable, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BX_I18N, BxBaseControl, isTextWithKey, uuidv4 } from '@filip.mazev/blocks/core';
import { FormField } from '../form-field/form-field';

@Injectable({ providedIn: 'root' })
class RadioRegistry {
  readonly radios = new Set<Radio>();
  select(radio: Radio): void {
    for (const peer of this.radios) {
      if (peer !== radio && peer.sharesGroup(radio)) peer.writeValue(radio.value());
    }
  }
}

@Component({
  selector: 'bx-radio',
  standalone: true,
  imports: [BxSurfaceDirective, CommonModule, FormField],
  templateUrl: './radio-button.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './radio-button.scss'
})
export class Radio extends BxBaseControl<any> {
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

  public readonly value = input.required<any>();
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
    if (!this.isDisabled()) {
      this.updateValue(this.value());
      this.registry.select(this);
    }
  }

  protected onBlur(): void {
    this.markAsTouched();
  }
}
