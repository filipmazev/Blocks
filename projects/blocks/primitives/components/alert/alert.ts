import {
  afterNextRender,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  Injector,
  input,
  model,
  output,
  signal,
  viewChild
} from '@angular/core';
import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { BxGlassLight, BxGlassLightingService, BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { getGlassLightRoot } from '@filip.mazev/blocks/effects/runtime';
import { Icon } from '@filip.mazev/blocks/icons';
import { TAG_PALETTES } from '../tag/constants/tag.constants';
import { ALERT_COLORS, ALERT_ICONS } from './constants/alert.constants';
import { AlertAnnouncement, AlertTone } from './types/alert.types';

@Component({
  selector: 'bx-alert, bx-banner',
  imports: [Icon, BxSurfaceDirective],
  templateUrl: './alert.html',
  styleUrl: './alert.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[hidden]': '!visible()',
    '[style.display]': 'visible() ? null : "none"',
    '[style.--bx-alert-role-background]': 'palette().fill',
    '[style.--bx-alert-role-color]': 'palette().text',
    '[style.--bx-alert-role-border]': 'palette().border',
    '[style.--bx-alert-emission]': 'emissionColor() ?? palette().text'
  }
})
export class Alert {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly injector = inject(Injector);
  private readonly destroy = inject(DestroyRef);
  private readonly lighting = inject(BxGlassLightingService);
  private readonly surface = viewChild<ElementRef<HTMLElement>>('surface');
  private readonly rendered = signal(false);
  protected readonly palette = computed(() => TAG_PALETTES[ALERT_COLORS[this.tone()]]);
  protected readonly icon = computed(() => ALERT_ICONS[this.tone()]);
  protected readonly resolvedTitle = computed(() => resolveText(this.title(), this.i18n));
  protected readonly resolvedMessage = computed(() => resolveText(this.message(), this.i18n));
  protected readonly resolvedDismissLabel = computed(() => resolveText(this.dismissLabel(), this.i18n));
  public readonly tone = input<AlertTone>('default');
  public readonly title = input<ResolvableText | undefined>(undefined);
  public readonly message = input<ResolvableText | undefined>(undefined);
  public readonly dismissible = input(false, { transform: booleanAttribute });
  public readonly dismissLabel = input<ResolvableText>('Dismiss notification');
  /** Steady semantic illumination of this banner and surrounding surfaces. Defaults to true. */
  public readonly emissive = input(true, { transform: booleanAttribute });
  /** Optional light color. Defaults to the tone's semantic text color. */
  public readonly emissionColor = input<string | undefined>(undefined);
  /** Neighboring light strength; the shared renderer clamps to 0–4. Defaults to 0.6. */
  public readonly emissionIntensity = input(0.6);
  /** Light falloff in CSS pixels. Defaults to 320. */
  public readonly emissionRadius = input(320);
  public readonly visible = model(true);
  /** Static banners are silent by default. Use polite for updates, assertive for urgent errors. */
  public readonly announcement = input<AlertAnnouncement>('off');
  /** Optional element or element ID to focus after keyboard dismissal. */
  public readonly dismissFocusTarget = input<HTMLElement | string | undefined>(undefined);
  public readonly dismissed = output();
  private light?: BxGlassLight;

  constructor() {
    afterNextRender(() => this.rendered.set(true));
    effect(() => this.syncLight());
    this.destroy.onDestroy(() => this.light?.destroy());
  }

  public dismiss(): void {
    if (!this.dismissible() || !this.visible()) return;

    const target = this.dismissFocusTarget();
    const focused = this.element.ownerDocument.activeElement;
    const restoreFocus = this.element.contains(focused);

    this.visible.set(false);
    this.dismissed.emit();

    if (restoreFocus && target) {
      afterNextRender(
        () => {
          if (this.destroy.destroyed || this.visible()) return;

          const document = this.element.ownerDocument;
          const active = document.activeElement;
          const focusTarget = typeof target === 'string' ? document.getElementById(target) : target;

          if (focusTarget?.isConnected && (active === document.body || active === focused)) focusTarget.focus({ preventScroll: true });
        },
        { injector: this.injector }
      );
    }
  }

  //#region Helpers

  private syncLight(): void {
    const surface = this.surface()?.nativeElement;

    if (!this.rendered() || !surface || !this.visible() || !this.emissive()) {
      this.light?.destroy();
      this.light = undefined;
      return;
    }

    const light = {
      element: surface,
      edge: 'bottom' as const,
      color: this.emissionColor() ?? this.palette().text,
      intensity: this.emissionIntensity(),
      radius: this.emissionRadius(),
      z: 48,
      excludeSource: true
    };

    if (this.light) this.light.update(light);
    else this.light = this.lighting.register(getGlassLightRoot(surface), light);
  }

  //#endregion
}
