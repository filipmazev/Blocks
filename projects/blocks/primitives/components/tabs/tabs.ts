import type { InputSignal, ModelSignal, Signal, WritableSignal } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import {
  afterNextRender,
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  ElementRef,
  inject,
  input,
  model,
  signal,
  viewChildren
} from '@angular/core';

import { BX_I18N, BxA11yService, ResolvableText } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';

import { Tab } from '@primitives/components/tab/tab';
import { DEFAULT_TABS_LABEL, DEFAULT_TABS_VARIANT, TAB_NAVIGATION_KEYS } from '@primitives/constants/tabs.constants';
import { resolveTabText } from '@primitives/helpers/tabs.helpers';
import { TabsVariant } from '@primitives/types/tabs.types';

@Component({
  selector: 'bx-tabs',
  standalone: true,
  imports: [NgTemplateOutlet, BxSurfaceDirective, Icon],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.bx-tabs-underline]': 'variant() === "underline"',
    '[class.bx-tabs-animated]': 'hasRendered() && !bxA11yService.isReducedMotion()'
  }
})
export class Tabs {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly bxA11yService = inject(BxA11yService);

  private readonly triggers: Signal<readonly ElementRef<HTMLButtonElement>[]> = viewChildren<ElementRef<HTMLButtonElement>>('trigger');

  protected readonly hasRendered: WritableSignal<boolean> = signal(false);

  protected readonly activeTab: Signal<Tab> = computed(() => {
    const enabled = this.tabs().filter((tab) => !tab.disabled());

    return enabled.find((tab) => tab.value() === this.selectedValue()) ?? enabled[0];
  });
  protected readonly resolvedLabel: Signal<string> = computed(() => resolveTabText(this.ariaLabel(), this.i18n));

  protected readonly tabs: Signal<readonly Tab[]> = contentChildren(Tab);

  /** Visual presentation variant using the shared Blocks theme and component styles. Defaults to `'segmented'`. */
  public readonly variant: InputSignal<TabsVariant> = input<TabsVariant>(DEFAULT_TABS_VARIANT);
  /** Accessible name of the tab list. Defaults to `'Tabs'`. */
  public readonly ariaLabel: InputSignal<ResolvableText> = input<ResolvableText>(DEFAULT_TABS_LABEL);

  /** Value of the active tab; supports controlled two-way selection. Defaults to `null`. */
  public readonly selectedValue: ModelSignal<string | null> = model<string | null>(null);

  constructor() {
    afterNextRender(() => this.hasRendered.set(true));
    afterRenderEffect(() => {
      const value = this.activeTab()?.value() ?? null;

      if (this.selectedValue() !== value) this.selectedValue.set(value);
    });
  }

  /**
   * Select the enabled tab matching a value; unknown or disabled tab values are ignored.
   *
   * @param value - Value identifying the enabled tab to activate.
   */
  public select(value: string): void {
    const tab = this.tabs().find((item) => item.value() === value && !item.disabled());

    if (tab) this.selectedValue.set(value);
  }

  protected onTabKey(event: KeyboardEvent, tab: Tab): void {
    if (event.altKey || event.ctrlKey || event.metaKey || !TAB_NAVIGATION_KEYS.has(event.key)) return;

    const enabled = this.tabs().filter((item) => !item.disabled());
    const current = enabled.indexOf(tab);

    if (current < 0) return;

    event.preventDefault();
    event.stopPropagation();

    const button = event.currentTarget as HTMLButtonElement;
    const rtl = button.ownerDocument.defaultView?.getComputedStyle(button).direction === 'rtl';
    const direction = (event.key === 'ArrowRight' ? 1 : -1) * (rtl ? -1 : 1);
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? enabled.length - 1 : (current + direction + enabled.length) % enabled.length;
    const next = enabled[index];

    this.select(next.value());

    const trigger = this.triggers().find((item) => item.nativeElement.id === next.triggerId)?.nativeElement;

    trigger?.focus({ preventScroll: true });
    trigger?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
}
