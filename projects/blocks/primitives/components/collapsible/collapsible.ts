import { NgTemplateOutlet } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, input, model, TemplateRef } from '@angular/core';
import { BX_I18N, ResolvableText, resolveText, uuidv4 } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { BX_ACCORDION_COORDINATOR } from '../accordion/tokens/accordion-coordinator.token';

@Component({
  selector: 'bx-collapsible, bx-accordion-item',
  imports: [Icon, BxSurfaceDirective, NgTemplateOutlet],
  templateUrl: './collapsible.html',
  styleUrl: './collapsible.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Collapsible {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly coordinator = inject(BX_ACCORDION_COORDINATOR, { optional: true });
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly generatedId = 'bx-collapsible-' + uuidv4();
  protected readonly resolvedTitle = computed(() => resolveText(this.title(), this.i18n));
  protected readonly level = computed(() => (Number.isFinite(this.headingLevel()) ? Math.max(1, Math.min(6, Math.floor(this.headingLevel()))) : 3));
  public readonly id = input<string | undefined>(undefined);
  public readonly title = input.required<ResolvableText>();
  public readonly expanded = model(false);
  public readonly disabled = input(false, { transform: booleanAttribute });
  public readonly readonly = input(false, { transform: booleanAttribute });
  public readonly readOnly = input(false, { transform: booleanAttribute });
  public readonly isReadonly = computed(() => this.readonly() || this.readOnly());
  public readonly headingLevel = input(3);
  /** Optional lazy content. Instantiated while expanded; projected content stays mounted. */
  public readonly contentTemplate = input<TemplateRef<unknown> | undefined>(undefined);
  /** Opt into a named region for substantial content. Defaults to false to avoid excessive landmarks. */
  public readonly region = input(false, { transform: booleanAttribute });
  public readonly panelId = computed(() => (this.id() ?? this.generatedId) + '-panel');
  public readonly triggerId = computed(() => (this.id() ?? this.generatedId) + '-trigger');

  constructor() {
    effect(() => {
      if (this.expanded()) return;

      const panel = this.element.querySelector<HTMLElement>('.bx-collapsible-content');

      if (panel?.contains(this.element.ownerDocument.activeElement)) this.focus();
    });
  }

  public toggle(): void {
    if (this.disabled() || this.isReadonly()) return;

    if (!this.expanded()) this.coordinator?.requestExpansion(this.panelId());

    this.expanded.update((expanded) => !expanded);
  }

  public focus(): void {
    this.element.querySelector<HTMLButtonElement>('[data-bx-collapsible-trigger]')?.focus({ preventScroll: true });
  }
}
