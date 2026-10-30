import { BX_I18N, BxA11yService, BxShortcutService, isTextWithKey, ResolvableShortcut, ResolvableText } from '@filip.mazev/blocks/core';
import { booleanAttribute, Component, computed, inject, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Icon, IconName } from '@filip.mazev/blocks/icons';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { TooltipDirective } from '../../directives/tooltip.directive';
import { TruncateDirective } from '../../directives/truncate.directive';
import { TruncatedTextPipe } from '../../pipes/truncated-text.pipe';

@Component({
  selector: 'bx-menu-item',
  imports: [Icon, BxSurfaceDirective, TooltipDirective, TruncateDirective, TruncatedTextPipe],
  templateUrl: './menu-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './menu-item.scss'
})
export class MenuItem {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly a11y = inject(BxA11yService);
  private readonly bxShortcutService = inject(BxShortcutService);

  protected readonly resolvedLabel = computed(() => {
    this.i18n?.version?.();

    const label = this.label();
    if (!label) return undefined;

    if (isTextWithKey(label)) {
      return this.i18n?.translate(label.key) ?? label.key;
    }
    return label;
  });

  protected readonly resolvedShortcut = computed(() => {
    return this.bxShortcutService.resolve(this.shortcut());
  });

  public readonly isAnimated = computed(() => !this.a11y.isReducedMotion());

  public readonly icon = input<IconName | undefined>(undefined);
  public readonly endIcon = input<IconName | undefined>(undefined);
  public readonly label = input<ResolvableText | undefined>(undefined);
  public readonly wrapLabel = input(false);
  /** Whether clipped labels receive an automatic tooltip. Defaults to true; ellipsis remains when false. */
  public readonly tooltipOnTruncate = input(true, { transform: booleanAttribute });
  public readonly disabled = input(false);
  public readonly danger = input(false);

  public readonly shortcut = input<ResolvableShortcut | undefined>(undefined);

  public readonly action = output<MouseEvent>();

  protected onClick(event: MouseEvent): void {
    if (this.disabled()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.action.emit(event);
  }
}
