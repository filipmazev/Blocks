import type { Signal, TemplateRef, WritableSignal } from '@angular/core';

import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  DOCUMENT,
  inject,
  signal,
  viewChild,
  ViewContainerRef
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { fromEvent } from 'rxjs';

import type { BxPlacement, Color, IDeviceState, OverlayOriginTracker } from '@filip.mazev/blocks/core';
import type { UtilityLockOwner } from '@playground/components/screens/utilities/types/utilities.types';
import type { ICodeFile } from '@playground/interfaces/icode-file.interface';

import {
  BxOverlayPositionService,
  DeviceTypeService,
  getComplementaryToken,
  inheritOverlayTheme,
  invertPaletteToken,
  isOverlayOriginVisible,
  isPaletteToken,
  isThemedColor,
  resolveThemeId,
  resolveTokenToCssVar,
  ScrollLockService,
  trackOverlayOrigin,
  uuidv4,
  WindowDimensionsService
} from '@filip.mazev/blocks/core';
import { Button, Select } from '@filip.mazev/blocks/forms';
import { Container } from '@filip.mazev/blocks/primitives';

import { UTILITY_COLOR_TOKENS, UTILITY_PLACEMENTS } from '@playground/components/screens/utilities/constants/utilities.constants';
import { ComponentInfo } from '@playground/components/shared/component-info/component-info';

@Component({
  selector: 'app-utilities',
  imports: [Button, ComponentInfo, Container, RouterLink, Select],
  templateUrl: './utilities.html',
  styleUrl: './utilities.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Utilities {
  private readonly bxOverlayPositionService = inject(BxOverlayPositionService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly deviceTypeService = inject(DeviceTypeService);
  private readonly document = inject(DOCUMENT);
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);

  protected readonly scrollLockService = inject(ScrollLockService);
  protected readonly windowDimensionsService = inject(WindowDimensionsService);

  private readonly lockIds: Readonly<Record<UtilityLockOwner, string>> = { first: uuidv4(), second: uuidv4() };

  private readonly overlayTemplate: Signal<TemplateRef<unknown> | undefined> = viewChild<TemplateRef<unknown>>('overlayTemplate');

  protected readonly deviceState: WritableSignal<IDeviceState> = signal(this.deviceTypeService.getDeviceState());
  protected readonly locks: WritableSignal<readonly UtilityLockOwner[]> = signal<readonly UtilityLockOwner[]>([]);
  protected readonly identifier: WritableSignal<string> = signal(uuidv4());

  protected readonly overlayOpen: WritableSignal<boolean> = signal(false);

  protected readonly placement: WritableSignal<BxPlacement> = signal('bottom');
  protected readonly colorToken: WritableSignal<Color> = signal('primary');

  protected readonly columns: Signal<number> = computed(() => this.windowDimensionsService.resolveResponsiveValue({ md: 2, xl: 3 }, 1));
  protected readonly deviceCategory: Signal<string> = computed(() => {
    const state = this.deviceState();

    return state.isTablet ? 'Tablet' : state.isMobile ? 'Mobile' : 'Desktop';
  });
  protected readonly orientation: Signal<string> = computed(() => (this.deviceState().isLandscapeOrientation() ? 'Landscape' : 'Portrait'));
  protected readonly cssVariable: Signal<string> = computed(() => resolveTokenToCssVar(this.colorToken()));
  protected readonly complementaryToken: Signal<Color> = computed(() => getComplementaryToken(this.colorToken()));
  protected readonly invertedToken: Signal<Color> = computed(() => invertPaletteToken(this.colorToken()));
  protected readonly paletteToken: Signal<boolean> = computed(() => isPaletteToken(this.colorToken()));
  protected readonly themedColor: Signal<boolean> = computed(() => isThemedColor({ light: this.colorToken(), dark: this.invertedToken() }));

  protected readonly breakpointEntries: [string, number][] = Object.entries(this.windowDimensionsService.breakpoints);
  protected readonly previewItems: readonly number[] = [1, 2, 3, 4, 5, 6];
  protected readonly placements: typeof UTILITY_PLACEMENTS = UTILITY_PLACEMENTS;
  protected readonly colorTokens: typeof UTILITY_COLOR_TOKENS = UTILITY_COLOR_TOKENS;
  protected readonly overlayId: string = 'utilities-overlay-' + uuidv4();
  protected readonly restoredPalette: string = resolveThemeId('carbon-cobalt') ?? 'Unrecognized palette';
  protected readonly unknownPalette: string = resolveThemeId('unknown-palette') ?? 'Unrecognized palette';
  protected readonly codeFiles: ICodeFile[] = [
    { title: 'utilities.ts', path: 'assets/code-snippets/utilities/utilities.ts.txt', language: 'typescript' },
    { title: 'utilities.html', path: 'assets/code-snippets/utilities/utilities.html.txt', language: 'html' },
    { title: 'utilities.scss', path: 'assets/code-snippets/utilities/utilities.scss.txt', language: 'scss' },
    { title: 'utilities.constants.ts', path: 'assets/code-snippets/utilities/constants/utilities.constants.ts.txt', language: 'typescript' },
    { title: 'utilities.types.ts', path: 'assets/code-snippets/utilities/types/utilities.types.ts.txt', language: 'typescript' }
  ];

  private overlayRef: OverlayRef | undefined;
  private disconnectOrigin: OverlayOriginTracker | undefined;
  private disconnectTheme: (() => void) | undefined;

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.releaseLocks();
      this.closeOverlay();
    });
    afterNextRender(() => {
      const orientation = this.document.defaultView?.screen.orientation;

      this.refreshDevice();

      if (orientation)
        fromEvent(orientation, 'change')
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe(() => this.refreshDevice());
    });
  }

  protected refreshDevice(): void {
    this.deviceState.set(this.deviceTypeService.getDeviceState());
  }

  protected toggleLock(owner: UtilityLockOwner): void {
    if (this.locks().includes(owner)) {
      this.scrollLockService.enableScroll(this.lockIds[owner]);
      this.locks.update((owners) => owners.filter((current) => current !== owner));
    } else {
      this.scrollLockService.disableScroll(this.lockIds[owner], { handleTouchInput: false });
      this.locks.update((owners) => [...owners, owner]);
    }
  }

  protected releaseLocks(): void {
    this.scrollLockService.enableScroll(this.lockIds.first);
    this.scrollLockService.enableScroll(this.lockIds.second);
    this.locks.set([]);
  }

  protected generateIdentifier(): void {
    this.identifier.set(uuidv4());
  }

  protected setColorToken(color: Color | null): void {
    this.colorToken.set(color ?? 'primary');
  }

  protected setPlacement(placement: BxPlacement | null): void {
    this.closeOverlay();
    this.placement.set(placement ?? 'bottom');
  }

  protected toggleOverlay(event: MouseEvent): void {
    if (this.overlayOpen()) {
      this.closeOverlay();

      return;
    }

    const origin = event.currentTarget;
    const template = this.overlayTemplate();

    if (!(origin instanceof HTMLElement) || !template || !this.windowDimensionsService.isBrowser || !isOverlayOriginVisible(origin)) return;

    const overlayRef = this.overlay.create({
      positionStrategy: this.bxOverlayPositionService.getElementStrategy(origin, this.placement()),
      scrollStrategy: this.overlay.scrollStrategies.noop()
    });

    this.overlayRef = overlayRef;
    this.overlayOpen.set(true);
    origin.focus({ preventScroll: true });

    const view = overlayRef.attach(new TemplatePortal(template, this.viewContainerRef));

    view.detectChanges();
    this.disconnectTheme = inheritOverlayTheme(origin, overlayRef.overlayElement);
    this.disconnectOrigin = trackOverlayOrigin(overlayRef, origin, { onOriginHidden: () => this.closeOverlay() });
    overlayRef
      .outsidePointerEvents()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((outsideEvent) => {
        if (outsideEvent.target instanceof Node && origin.contains(outsideEvent.target)) return;

        this.closeOverlay();
      });
    overlayRef
      .keydownEvents()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          this.closeOverlay();
        }
      });
  }

  protected closeOverlay(): void {
    this.disconnectOrigin?.();
    this.disconnectTheme?.();
    this.overlayRef?.dispose();
    this.disconnectOrigin = undefined;
    this.disconnectTheme = undefined;
    this.overlayRef = undefined;
    this.overlayOpen.set(false);
  }
}
