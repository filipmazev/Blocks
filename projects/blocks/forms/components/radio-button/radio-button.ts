import type { InputSignal, Signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, DestroyRef, ElementRef, inject, input } from '@angular/core';

import { BX_I18N, BxBaseControl, isTextWithKey, uuidv4 } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';

import { FormField } from '@forms/components/form-field/form-field';
import { RadioRegistry } from '@forms/components/radio-button/services/radio-registry.service';
import { BX_RADIO_GROUP } from '@forms/components/radio-group/tokens/radio-group.token';
import { FormSettingsService } from '@forms/components/shared/services/form-settings.service';
import { LabelPosition, SubscriptSizing } from '@forms/components/shared/types/validation.types';

@Component({
  selector: 'bx-radio',
  standalone: true,
  imports: [BxSurfaceDirective, CommonModule, FormField],
  templateUrl: './radio-button.html',
  // External NgControl validation/touched changes are read by inherited getters without signal notifications.
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './radio-button.scss'
})
export class Radio extends BxBaseControl<unknown> {
  private readonly registry = inject(RadioRegistry);
  private readonly defaults = inject(FormSettingsService);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly group = inject(BX_RADIO_GROUP, { optional: true });

  protected readonly inputId: Signal<string> = computed(() => `bx-radio-${uuidv4()}`);
  protected readonly resolvedLabel: Signal<string | undefined> = computed(() => {
    this.i18n?.version?.();

    const l = this.label();

    if (!l) return undefined;

    return isTextWithKey(l) ? (this.i18n?.translate(l.key) ?? l.key) : l;
  });
  protected readonly effectiveDisabled: Signal<boolean> = computed(() => this.isDisabled() || !!this.group?.disabled());
  protected readonly effectiveName: Signal<string> = computed(() => this.group?.groupName() ?? this.name());
  protected readonly selected: Signal<boolean> = computed(() => (this.group ? this.group.value() : this.internalValue()) === this.value());

  public readonly resolvedSubscriptSizing: Signal<SubscriptSizing> = computed(() => this.subscriptSizing() ?? this.defaults.settings().subscriptSizing);

  public readonly labelPosition: InputSignal<LabelPosition> = input<LabelPosition>('after');
  public readonly subscriptSizing: InputSignal<SubscriptSizing | undefined> = input<SubscriptSizing | undefined>(undefined);
  public readonly value: InputSignal<unknown> = input.required<unknown>();
  public readonly name: InputSignal<string> = input<string>('');

  protected showTooltip: boolean = false;

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
