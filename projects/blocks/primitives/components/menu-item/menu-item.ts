import { Component, computed, inject, input, output } from "@angular/core";
import { Icon, IconName } from "@filip.mazev/blocks/icons";
import { BX_I18N, BxA11yService, isTextWithKey, ResolvableText } from "@filip.mazev/blocks/core";

@Component({
  selector: 'bx-menu-item',
  imports: [Icon],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.scss'
})
export class MenuItem {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly a11y = inject(BxA11yService);

  public readonly isAnimated = computed(() => {
    return !this.a11y.isReducedMotion();
  });

  public readonly icon = input<IconName | undefined>(undefined);
  public readonly endIcon = input<IconName | undefined>(undefined);
  public readonly label = input<ResolvableText | undefined>(undefined);
  public readonly disabled = input(false);
  
  public readonly danger = input(false); 

  public readonly action = output<MouseEvent>();

  protected readonly resolvedLabel = computed(() => {
    this.i18n?.version?.(); 
    
    const label = this.label();
    if (!label) return undefined;
    
    if (isTextWithKey(label)) {
      return this.i18n?.translate(label.key) ?? label.key;
    }
    
    return label;
  });

  protected onClick(event: MouseEvent): void {
    if (this.disabled()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.action.emit(event);
  }
}