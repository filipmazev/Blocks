import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BX_I18N, isTextWithKey, ResolvableText, BxA11yService } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';
import { Tooltip } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'bx-form-field',
  standalone: true,
  imports: [CommonModule, Icon, Tooltip],
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss'
})
export class FormField {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly a11y = inject(BxA11yService);

  public readonly label = input<ResolvableText | undefined>(undefined);
  public readonly tooltip = input<ResolvableText | undefined>(undefined);
  public readonly error = input<ResolvableText | undefined>(undefined);
  public readonly required = input<boolean>(false);
  public readonly loading = input<boolean>(false);
  public readonly forId = input<string>('');

  public readonly isAnimated = computed(() => !this.a11y.isReducedMotion());

  protected readonly resolvedLabel = computed(() => this.resolveText(this.label()));
  protected readonly resolvedError = computed(() => this.resolveText(this.error()));

  protected showTooltip = false;

  private resolveText(textObj: ResolvableText | undefined): string | undefined {
    this.i18n?.version?.();
    if (!textObj) return undefined;
    if (isTextWithKey(textObj)) {
      return this.i18n?.translate(textObj.key) ?? textObj.key;
    }
    return textObj;
  }
}