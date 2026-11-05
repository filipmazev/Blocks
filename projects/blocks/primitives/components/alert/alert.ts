import type { InputSignal, InputSignalWithTransform, ModelSignal, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

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

import type { IconName } from '@filip.mazev/blocks/icons';
import type { ITagPalette } from '@primitives/interfaces/itag-palette.interface';

import { BX_I18N, ResolvableText, resolveText } from '@filip.mazev/blocks/core';
import { BxGlassLightingService, BxSurfaceDirective, IBxGlassLight } from '@filip.mazev/blocks/effects';
import { getGlassLightRoot } from '@filip.mazev/blocks/effects/runtime';
import { Icon } from '@filip.mazev/blocks/icons';

import { ALERT_COLORS, ALERT_ICONS } from '@primitives/constants/alert.constants';
import { TAG_PALETTES } from '@primitives/constants/tag.constants';
import { AlertAnnouncement, AlertTone } from '@primitives/types/alert.types';

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
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly injector = inject(Injector);
  private readonly destroyRef = inject(DestroyRef);
  private readonly bxGlassLightingService = inject(BxGlassLightingService);

  private readonly rendered: WritableSignal<boolean> = signal(false);

  private readonly surface: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('surface');

  protected readonly palette: Signal<ITagPalette> = computed(() => TAG_PALETTES[ALERT_COLORS[this.tone()]]);
  protected readonly icon: Signal<IconName> = computed(() => ALERT_ICONS[this.tone()]);
  protected readonly resolvedTitle: Signal<string> = computed(() => resolveText(this.title(), this.i18n));
  protected readonly resolvedMessage: Signal<string> = computed(() => resolveText(this.message(), this.i18n));
  protected readonly resolvedDismissLabel: Signal<string> = computed(() => resolveText(this.dismissLabel(), this.i18n));

  /** Semantic intent of the inline alert, affecting its icon, colors, and presentation. Defaults to `'default'`. */
  public readonly tone: InputSignal<AlertTone> = input<AlertTone>('default');
  /** Optional alert heading, resolved through the shared translation adapter. Optional; omission leaves the value undefined. */
  public readonly title: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Visible alert message; plain strings and shared translation keys are supported. Optional; omission leaves the value undefined. */
  public readonly message: InputSignal<ResolvableText | undefined> = input<ResolvableText | undefined>(undefined);
  /** Whether the inline alert exposes a dismissal action. Defaults to `false`. */
  public readonly dismissible: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Accessible name of the alert dismissal action; supports shared translation keys. Defaults to `'Dismiss notification'`. */
  public readonly dismissLabel: InputSignal<ResolvableText> = input<ResolvableText>('Dismiss notification');
  /** Steady semantic illumination of this banner and surrounding surfaces. Defaults to true. */
  public readonly emissive: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Optional light color. Defaults to the tone's semantic text color. */
  public readonly emissionColor: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /** Neighboring light strength; the shared renderer clamps to 0–4. Defaults to 0.6. */
  public readonly emissionIntensity: InputSignal<number> = input(0.6);
  /** Light falloff in CSS pixels. Defaults to 320. */
  public readonly emissionRadius: InputSignal<number> = input(320);

  /** Whether this alert is displayed; dismissal updates the two-way visibility state. Defaults to `true`. */
  public readonly visible: ModelSignal<boolean> = model(true);

  /** Static banners are silent by default. Use polite for updates, assertive for urgent errors. */
  public readonly announcement: InputSignal<AlertAnnouncement> = input<AlertAnnouncement>('off');
  /** Optional element or element ID to focus after keyboard dismissal. */
  public readonly dismissFocusTarget: InputSignal<string | HTMLElement | undefined> = input<HTMLElement | string | undefined>(undefined);

  /** Emits after a dismissible alert is hidden through its dismissal action. */
  public readonly dismissed: OutputEmitterRef<void> = output();

  private light?: IBxGlassLight;

  constructor() {
    afterNextRender(() => this.rendered.set(true));
    effect(() => this.syncLight());
    this.destroyRef.onDestroy(() => this.light?.destroy());
  }

  /** Hide a dismissible alert, emit its dismissal event, and restore configured keyboard focus when needed. */
  public dismiss(): void {
    if (!this.dismissible() || !this.visible()) return;

    const target = this.dismissFocusTarget();
    const focused = this.nativeElement.ownerDocument.activeElement;
    const restoreFocus = this.nativeElement.contains(focused);

    this.visible.set(false);
    this.dismissed.emit();

    if (restoreFocus && target) {
      afterNextRender(
        () => {
          if (this.destroyRef.destroyed || this.visible()) return;

          const document = this.nativeElement.ownerDocument;
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
    else this.light = this.bxGlassLightingService.register(getGlassLightRoot(surface), light);
  }

  //#endregion
}
