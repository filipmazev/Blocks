import type { InputSignal, InputSignalWithTransform, OutputEmitterRef, Signal } from '@angular/core';

import { booleanAttribute, ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';

import { BX_I18N, BxA11yService, BxShortcutService, isTextWithKey, ResolvableShortcut, ResolvableText } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Icon, IconName } from '@filip.mazev/blocks/icons';

import { TooltipDirective } from '@primitives/directives/tooltip/tooltip.directive';
import { TruncateDirective } from '@primitives/directives/truncate/truncate.directive';
import { TruncatedTextPipe } from '@primitives/pipes/truncated-text.pipe';

@Component({
  selector: 'bx-menu-item',
  imports: [Icon, BxSurfaceDirective, TooltipDirective, TruncateDirective, TruncatedTextPipe],
  templateUrl: './menu-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './menu-item.scss'
})
export class MenuItem {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly bxA11yService = inject(BxA11yService);
  private readonly bxShortcutService = inject(BxShortcutService);

  protected readonly resolvedLabel: Signal<string | undefined> = computed(() => {
    this.i18n?.version?.();

    const label = this.label();

    if (!label) return undefined;

    if (isTextWithKey(label)) {
      return this.i18n?.translate(label.key) ?? label.key;
    }

    return label;
  });
  protected readonly resolvedShortcut: Signal<string[] | undefined> = computed(() => {
    return this.bxShortcutService.resolve(this.shortcut());
  });
  protected readonly shortcutAria: Signal<string | null> = computed(() => this.bxShortcutService.toAriaKeyshortcuts(this.shortcut()));

  /** Whether decorative motion is enabled after applying shared reduced-motion preferences. */
  public readonly isAnimated: Signal<boolean> = computed(() => !this.bxA11yService.isReducedMotion());

  /** Optional leading icon displayed with the label. Optional; omission leaves the value undefined. */
  public readonly icon: InputSignal<IconName | undefined> = input<IconName | undefined>(undefined);
  /** Optional trailing icon displayed after the label. Optional; omission leaves the value undefined. */
  public readonly endIcon: InputSignal<IconName | undefined> = input<IconName | undefined>(undefined);
  /** Visible or accessible label for the component; translation-key values resolve through BX_I18N. Optional; omission leaves the value undefined. */
  public readonly label: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Whether long menu labels wrap instead of using single-line truncation. Defaults to `false`. */
  public readonly wrapLabel: InputSignal<boolean> = input(false);
  /** Whether clipped labels receive an automatic tooltip. Defaults to true; ellipsis remains when false. */
  public readonly tooltipOnTruncate: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Whether user interaction is disabled; disabled controls do not accept ordinary activation or edits. Defaults to `false`. */
  public readonly disabled: InputSignal<boolean> = input(false);
  /** Whether the menu action uses the semantic danger presentation. Defaults to `false`. */
  public readonly danger: InputSignal<boolean> = input(false);
  /** Platform-aware hint only. Handle keyboard activation in the application with BxShortcutService.matches(). */
  public readonly shortcut: InputSignal<ResolvableShortcut | undefined> = input<ResolvableShortcut | undefined>(undefined);

  /** Emits when an enabled menu item is activated by pointer or keyboard. */
  public readonly action: OutputEmitterRef<MouseEvent> = output<MouseEvent>();

  protected onClick(event: MouseEvent): void {
    if (this.disabled()) {
      event.preventDefault();
      event.stopPropagation();

      return;
    }

    this.action.emit(event);
  }
}
