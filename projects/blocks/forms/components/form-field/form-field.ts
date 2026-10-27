import { afterRenderEffect, Component, computed, contentChild, ElementRef, inject, input, viewChild, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BX_I18N, isTextWithKey, ResolvableText, BxA11yService } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';
import { BxGlassLightingService } from '@filip.mazev/blocks/effects';
import { BxError } from '../../directives/bx-error.directive';
import { TooltipDirective } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'bx-form-field',
  standalone: true,
  imports: [CommonModule, Icon, TooltipDirective],
  templateUrl: './form-field.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './form-field.scss'
})
export class FormField {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly a11y = inject(BxA11yService);

  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly lighting = inject(BxGlassLightingService);
  protected readonly projectedError = contentChild(BxError, { read: ElementRef<HTMLElement> });
  private readonly errorElement = viewChild<ElementRef<HTMLElement>>('errorText');

  protected readonly resolvedLabel = computed(() => this.resolveText(this.label()));
  protected readonly resolvedError = computed(() => this.resolveText(this.error()));
  public readonly inline = input(false);
  public readonly label = input<ResolvableText | undefined>(undefined);
  public readonly tooltip = input<ResolvableText | undefined>(undefined);
  public readonly error = input<ResolvableText | undefined>(undefined);
  public readonly required = input<boolean>(false);
  public readonly loading = input<boolean>(false);
  public readonly forId = input<string>('');
  public readonly isAnimated = computed(() => !this.a11y.isReducedMotion());
  constructor() {
    afterRenderEffect((onCleanup) => {
      const projected = this.projectedError()?.nativeElement;
      const error = this.resolvedError() ? this.errorElement()?.nativeElement : projected;
      if (!error) return;
      const parent = this.element.parentElement;
      const root = this.element.closest<HTMLElement>('form, fieldset') ?? (parent?.tagName.startsWith('BX-') ? parent.parentElement : parent);
      if (!root) return;
      const control = this.element.querySelector<HTMLElement>('.bx-field-control > [data-bx-surface]');
      const light = this.lighting.register(root, {
        // Anchor the lower-edge glow to the control, independently of floating
        // labels, error icons and the length of the validation message.
        element: control ?? error,
        edge: control ? 'bottom' : undefined,
        offsetX: 0.5,
        offsetY: control ? 1 : 0,
        z: 32,
        color: 'var(--bx-text-danger)',
        intensity: 0.9,
        radius: 240
      });
      onCleanup(() => light.destroy());
    });
  }

  private resolveText(textObj: ResolvableText | undefined): string | undefined {
    this.i18n?.version?.();
    if (!textObj) return undefined;
    if (isTextWithKey(textObj)) {
      return this.i18n?.translate(textObj.key) ?? textObj.key;
    }
    return textObj;
  }
}
