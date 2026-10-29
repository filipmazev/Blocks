import { booleanAttribute, ChangeDetectionStrategy, Component, computed, contentChild, inject, input, TemplateRef, viewChild } from '@angular/core';
import { BX_I18N, Color, ResolvableText, uuidv4 } from '@filip.mazev/blocks/core';
import { IconName } from '@filip.mazev/blocks/icons';
import { DEFAULT_TAB_COLOR, TAB_COLOR_TOKENS, TAB_EMISSION_OPACITY } from '../../constants/tabs.constants';
import { TabContentDirective } from '../../directives/tab-content.directive';
import { resolveTabColor, resolveTabText } from '../../helpers/tabs.helpers';
import { TabColor } from '../../types/tabs.types';

@Component({
  selector: 'bx-tab',
  standalone: true,
  templateUrl: './tab.html',
  styleUrl: './tab.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tab {
  private readonly id = uuidv4();
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly projectedContent = viewChild<TemplateRef<unknown>>('content');
  private readonly lazyContent = contentChild(TabContentDirective);

  public readonly label = input.required<ResolvableText>();
  public readonly value = input(this.id);
  public readonly disabled = input(false, { transform: booleanAttribute });
  public readonly color = input<TabColor>(DEFAULT_TAB_COLOR);
  public readonly textColor = input<Color>();
  public readonly highlightColor = input<Color>();
  public readonly contentColor = input<Color>();
  public readonly icon = input<IconName>();
  public readonly endIcon = input<IconName>();
  public readonly triggerId = `bx-tab-${this.id}`;
  public readonly panelId = `bx-tab-panel-${this.id}`;
  public readonly resolvedLabel = computed(() => resolveTabText(this.label(), this.i18n));
  public readonly resolvedHighlight = computed(() => resolveTabColor(this.highlightColor() ?? TAB_COLOR_TOKENS[this.color()]));
  public readonly resolvedEmission = computed(() => `color-mix(in srgb, ${this.resolvedHighlight()} ${TAB_EMISSION_OPACITY * 100}%, transparent)`);
  public readonly resolvedTextColor = computed(() => resolveTabColor(this.textColor()));
  public readonly resolvedSelectedText = computed(
    () => this.resolvedTextColor() ?? resolveTabColor(this.color() === 'primary' ? 'text-brand' : TAB_COLOR_TOKENS[this.color()])
  );

  public readonly resolvedContentColor = computed(() => resolveTabColor(this.contentColor()));
  public readonly template = computed(() => this.lazyContent()?.template ?? this.projectedContent());
}
