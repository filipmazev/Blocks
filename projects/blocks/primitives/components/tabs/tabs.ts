import { NgTemplateOutlet } from '@angular/common';
import {
  afterRenderEffect,
  afterNextRender,
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
import { DEFAULT_TABS_LABEL, DEFAULT_TABS_VARIANT, TAB_NAVIGATION_KEYS } from '../../constants/tabs.constants';
import { resolveTabText } from '../../helpers/tabs.helpers';
import { TabsVariant } from '../../types/tabs.types';
import { Tab } from '../tab/tab';

@Component({
  selector: 'bx-tabs',
  standalone: true,
  imports: [NgTemplateOutlet, BxSurfaceDirective, Icon],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.bx-tabs-underline]': 'variant() === "underline"',
    '[class.bx-tabs-animated]': 'hasRendered() && !a11y.isReducedMotion()'
  }
})
export class Tabs {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly triggers = viewChildren<ElementRef<HTMLButtonElement>>('trigger');
  protected readonly a11y = inject(BxA11yService);
  protected readonly hasRendered = signal(false);
  protected readonly tabs = contentChildren(Tab);
  protected readonly activeTab = computed(() => {
    const enabled = this.tabs().filter((tab) => !tab.disabled());
    return enabled.find((tab) => tab.value() === this.selectedValue()) ?? enabled[0];
  });

  protected readonly resolvedLabel = computed(() => resolveTabText(this.ariaLabel(), this.i18n));

  public readonly variant = input<TabsVariant>(DEFAULT_TABS_VARIANT);
  public readonly ariaLabel = input<ResolvableText>(DEFAULT_TABS_LABEL);
  public readonly selectedValue = model<string | null>(null);

  constructor() {
    afterNextRender(() => this.hasRendered.set(true));
    afterRenderEffect(() => {
      const value = this.activeTab()?.value() ?? null;
      if (this.selectedValue() !== value) this.selectedValue.set(value);
    });
  }

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
