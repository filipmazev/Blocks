import type { InputSignal, InputSignalWithTransform, ModelSignal, Signal } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, input, model, TemplateRef } from '@angular/core';

import { BX_I18N, ResolvableText, resolveText, uuidv4 } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';

import { BX_ACCORDION_COORDINATOR } from '@primitives/components/accordion/tokens/accordion-coordinator.token';

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

  private readonly generatedId: string = 'bx-collapsible-' + uuidv4();

  protected readonly resolvedTitle: Signal<string> = computed(() => resolveText(this.title(), this.i18n));
  protected readonly level: Signal<number> = computed(() =>
    Number.isFinite(this.headingLevel()) ? Math.max(1, Math.min(6, Math.floor(this.headingLevel()))) : 3
  );

  public readonly isReadonly: Signal<boolean> = computed(() => this.readonly() || this.readOnly());
  public readonly panelId: Signal<string> = computed(() => (this.id() ?? this.generatedId) + '-panel');
  public readonly triggerId: Signal<string> = computed(() => (this.id() ?? this.generatedId) + '-trigger');

  public readonly id: InputSignal<string | undefined> = input<string | undefined>(undefined);
  public readonly title: InputSignal<ResolvableText> = input.required<ResolvableText>();

  public readonly expanded: ModelSignal<boolean> = model(false);

  public readonly disabled: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  public readonly readonly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  public readonly readOnly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  public readonly headingLevel: InputSignal<number> = input(3);
  /** Optional lazy content. Instantiated while expanded; projected content stays mounted. */
  public readonly contentTemplate: InputSignal<TemplateRef<unknown> | undefined> = input<TemplateRef<unknown> | undefined>(undefined);
  /** Opt into a named region for substantial content. Defaults to false to avoid excessive landmarks. */
  public readonly region: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

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
