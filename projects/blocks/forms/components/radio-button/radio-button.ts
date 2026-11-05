import type { InputSignal, Signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, input } from '@angular/core';

import { BX_I18N, BxBaseControl, isTextWithKey, uuidv4 } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';

import { FormField } from '@forms/components/form-field/form-field';
import { FormSettingsService } from '@forms/services/form-settings.service';
import { RadioRegistry } from '@forms/services/radio-registry.service';
import { BX_RADIO_GROUP } from '@forms/tokens/radio-group.token';
import { LabelPosition, SubscriptSizing } from '@forms/types/validation.types';

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
  private readonly radioRegistry = inject(RadioRegistry);
  private readonly formSettingsService = inject(FormSettingsService);
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

  /** Resolved hint/error spacing policy after instance and shared form settings are combined. */
  public readonly resolvedSubscriptSizing: Signal<SubscriptSizing> = computed(
    () => this.subscriptSizing() ?? this.formSettingsService.settings().subscriptSizing
  );

  /** Position of the label relative to the checkbox or radio control. Defaults to `'after'`. */
  public readonly labelPosition: InputSignal<LabelPosition> = input<LabelPosition>('after');
  /** Space reserved for hints and validation feedback; omission uses shared form defaults. */
  public readonly subscriptSizing: InputSignal<SubscriptSizing | undefined> = input<SubscriptSizing | undefined>(undefined);
  /** Application value represented by this radio when it is selected. Required input. */
  public readonly value: InputSignal<unknown> = input.required<unknown>();
  /** Optional native radio-group name; matching form/name scopes coordinate selection. Defaults to `''`. */
  public readonly name: InputSignal<string> = input<string>('');

  protected showTooltip: boolean = false;

  constructor() {
    super();
    this.radioRegistry.radios.add(this);
    inject(DestroyRef).onDestroy(() => this.radioRegistry.radios.delete(this));
  }

  /**
   * Match native form/name groups and radios bound to one reactive control.
   *
   * @param other - Radio whose native/form group membership should be compared.
   */
  public sharesGroup(other: Radio): boolean {
    const control = this.ngControl?.control;

    if (control && control === other.ngControl?.control) return true;

    return (
      !!this.name() &&
      this.name() === other.name() &&
      this.nativeElement.closest('form') === other.nativeElement.closest('form') &&
      control?.parent === other.ngControl?.control?.parent
    );
  }

  protected onSelect(): void {
    if (this.effectiveDisabled() || this.isReadonly() || this.group?.isReadonly()) return;

    if (this.group) this.group.select(this.value());
    else {
      this.updateValue(this.value());
      this.radioRegistry.select(this);
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
