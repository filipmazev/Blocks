import { 
  Component, input, computed, booleanAttribute, 
  HostListener, signal, viewChild, ElementRef, afterNextRender 
} from '@angular/core';
import { ButtonType } from '../types/button.types';
import { IconComponent, IconName, IconSize } from '@filip.mazev/icons';
import { resolveTokenToCssVar, SemanticColorToken, ThemedColor } from '@filip.mazev/blocks-core';

@Component({
  selector: 'bx-button, button[bx-button], a[bx-button]',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    '[class]': '"bx-btn bx-btn-" + variant()',
    '[class.bx-btn-icon-only]': 'isIconOnly()',
    '[attr.disabled]': 'disabled() ? true : null',
    '[attr.aria-disabled]': 'disabled()',
    '[attr.tabindex]': 'disabled() ? "-1" : null',
  }
})
export class ButtonComponent {
  public readonly variant = input.required<ButtonType>(); 
  public readonly text = input<string | undefined>(undefined);
  
  public readonly leftIcon = input<IconName | undefined>(undefined);
  public readonly rightIcon = input<IconName | undefined>(undefined);
  public readonly iconSize = input<IconSize>('24');

  public readonly disabled = input<boolean, unknown>(false, { transform: booleanAttribute });
  public readonly iconOnly = input<boolean, unknown>(false, { transform: booleanAttribute });
  
  private readonly contentWrapper = viewChild<ElementRef<HTMLSpanElement>>('contentWrapper');
  protected readonly hasProjectedContent = signal(false);

  protected readonly resolvedColor = computed(() => {
    let variantBasedColor: SemanticColorToken = 'on-primary';

    switch(this.variant()){ 
      case 'primary': variantBasedColor = 'on-primary'; break;
      case 'success': variantBasedColor = 'text-success'; break;
      case 'danger': variantBasedColor = 'text-danger'; break;
      case 'info': variantBasedColor = 'text-info'; break;
      case 'warn': variantBasedColor = 'text-warn'; break
      case 'grayscale': variantBasedColor = 'text-primary'; break;
      case 'transparent': variantBasedColor = 'text-primary'; break;
    }

    return { token: variantBasedColor, css: resolveTokenToCssVar(variantBasedColor) } as { token: ThemedColor, css: string };
  });

  constructor() {
    afterNextRender(() => {
      const target = this.contentWrapper()?.nativeElement;
      if (!target) return;

      this.syncContentStatus(target);

      const observer = new MutationObserver(() => this.syncContentStatus(target));
      observer.observe(target, { 
        childList: true, 
        characterData: true, 
        subtree: true 
      });
    });
  }

  private syncContentStatus(target: HTMLElement): void {
    const hasContent = Array.from(target.childNodes).some(node => 
      node.nodeType === Node.ELEMENT_NODE || 
      (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() !== '')
    );
    this.hasProjectedContent.set(hasContent);
  }

  protected readonly isIconOnly = computed(() => {
    if (this.iconOnly()) return true;
    const hasExactlyOneIcon = (!!this.leftIcon() && !this.rightIcon()) || (!this.leftIcon() && !!this.rightIcon());
    return hasExactlyOneIcon && !this.text() && !this.hasProjectedContent();
  });

  @HostListener('click', ['$event'])
  protected onClick(event: Event) {
    if (this.disabled()) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}