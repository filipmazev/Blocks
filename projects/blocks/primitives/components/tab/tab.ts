import type { InputSignal, InputSignalWithTransform, Signal } from '@angular/core';

import { booleanAttribute, ChangeDetectionStrategy, Component, computed, contentChild, inject, input, TemplateRef, viewChild } from '@angular/core';

import { BX_I18N, Color, ResolvableText, uuidv4 } from '@filip.mazev/blocks/core';
import { IconName } from '@filip.mazev/blocks/icons';

import { DEFAULT_TAB_COLOR, TAB_COLOR_TOKENS, TAB_EMISSION_OPACITY } from '@primitives/constants/tabs.constants';
import { TabContentDirective } from '@primitives/directives/tab-content/tab-content.directive';
import { resolveTabColor, resolveTabText } from '@primitives/helpers/tabs.helpers';
import { TabColor } from '@primitives/types/tabs.types';

@Component({
  selector: 'bx-tab',
  standalone: true,
  templateUrl: './tab.html',
  styleUrl: './tab.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tab {
  private readonly i18n = inject(BX_I18N, { optional: true });

  private readonly id: string = uuidv4();

  private readonly projectedContent: Signal<TemplateRef<unknown> | undefined> = viewChild<TemplateRef<unknown>>('content');

  private readonly lazyContent: Signal<TabContentDirective | undefined> = contentChild(TabContentDirective);

  /** Stable identifier of the tab or disclosure trigger used for accessible relationships. */
  public readonly triggerId: string = `bx-tab-${this.id}`;
  /** Stable content-panel identifier used by triggers and accessible control relationships. */
  public readonly panelId: string = `bx-tab-panel-${this.id}`;

  /** Display label after resolving plain text or a translation key through the current adapter. */
  public readonly resolvedLabel: Signal<string> = computed(() => resolveTabText(this.label(), this.i18n));
  /** Resolved semantic or CSS highlight color for the active tab. */
  public readonly resolvedHighlight: Signal<string | null> = computed(() => resolveTabColor(this.highlightColor() ?? TAB_COLOR_TOKENS[this.color()]));
  /** Resolved light-emission color of the tab. */
  public readonly resolvedEmission: Signal<string> = computed(
    () => `color-mix(in srgb, ${this.resolvedHighlight()} ${TAB_EMISSION_OPACITY * 100}%, transparent)`
  );
  /** Resolved foreground color of the tab trigger. */
  public readonly resolvedTextColor: Signal<string | null> = computed(() => resolveTabColor(this.textColor()));
  /** Resolved foreground color used while the tab is selected. */
  public readonly resolvedSelectedText: Signal<string | null> = computed(
    () =>
      this.resolvedTextColor() ??
      resolveTabColor(this.color() === 'primary' ? 'text-brand' : this.color() === 'accent' ? 'text-accent' : TAB_COLOR_TOKENS[this.color()])
  );
  /** Resolved color override for this tab's content panel. */
  public readonly resolvedContentColor: Signal<string | null> = computed(() => resolveTabColor(this.contentColor()));
  /** Projected tab-content template, when supplied. */
  public readonly template: Signal<TemplateRef<unknown> | undefined> = computed(() => this.lazyContent()?.templateRef ?? this.projectedContent());

  /** Visible or accessible label for the component; translation-key values resolve through BX_I18N. Required input. */
  public readonly label: InputSignal<ResolvableText> = input.required<ResolvableText>();
  /** Value identifying this tab within its owning Tabs component. */
  public readonly value: InputSignal<string> = input(this.id);
  /** Whether user interaction is disabled; disabled controls do not accept ordinary activation or edits. Defaults to `false`. */
  public readonly disabled: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Semantic color role applied to the component presentation. Defaults to `'primary'`. */
  public readonly color: InputSignal<TabColor> = input<TabColor>(DEFAULT_TAB_COLOR);
  /** Optional foreground color override for this tab. Optional; omission leaves the value undefined. */
  public readonly textColor: InputSignal<Color | undefined> = input<Color>();
  /** Optional semantic or CSS color used for selection highlighting. Optional; omission leaves the value undefined. */
  public readonly highlightColor: InputSignal<Color | undefined> = input<Color>();
  /** Optional foreground color override applied to the tab content panel. Optional; omission leaves the value undefined. */
  public readonly contentColor: InputSignal<Color | undefined> = input<Color>();
  /** Optional leading icon displayed with the label. Optional; omission leaves the value undefined. */
  public readonly icon: InputSignal<IconName | undefined> = input<IconName>();
  /** Optional trailing icon displayed after the label. Optional; omission leaves the value undefined. */
  public readonly endIcon: InputSignal<IconName | undefined> = input<IconName>();
}
