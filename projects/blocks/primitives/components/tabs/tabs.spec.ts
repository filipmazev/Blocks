import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxA11yService } from '@filip.mazev/blocks/core';

import { TabsTestHost } from '@primitives/classes/tabs-test-host.spec';

import { Tabs } from './tabs';

describe('Tabs', () => {
  let component: Tabs;
  let fixture: ComponentFixture<Tabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabs]
    }).compileComponents();

    fixture = TestBed.createComponent(Tabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Tabs pilot interaction', () => {
  let fixture: ComponentFixture<TabsTestHost>;
  let root: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TabsTestHost] }).compileComponents();
    fixture = TestBed.createComponent(TabsTestHost);
    root = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('preserves one selection surface across rapid changes and ignores disabled selection', async () => {
    const selection = root.querySelector('.bx-tab-selection');
    const tabs = fixture.componentInstance.tabs();

    tabs.select('last');
    await fixture.whenStable();
    tabs.select('one');
    await fixture.whenStable();
    tabs.select('last');
    tabs.select('disabled');
    await fixture.whenStable();
    expect(root.querySelector('.bx-tab-selection')).toBe(selection);
    expect(root.querySelector('[aria-selected="true"]')?.textContent).toContain('longer');
    expect(fixture.componentInstance.selected()).toBe('last');
  });

  it('previews captured dragging and commits on release without the trailing click reverting selection', async () => {
    const triggers = root.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    const origin = triggers[0];
    const target = triggers[2];
    const start = origin.getBoundingClientRect();
    const end = target.getBoundingClientRect();
    const capture = spyOn(origin, 'setPointerCapture');

    origin.dispatchEvent(
      new PointerEvent('pointerdown', {
        pointerId: 1,
        isPrimary: true,
        button: 0,
        clientX: start.left + start.width / 2,
        clientY: start.top + start.height / 2,
        bubbles: true
      })
    );
    origin.dispatchEvent(
      new PointerEvent('pointermove', {
        pointerId: 1,
        isPrimary: true,
        buttons: 1,
        clientX: end.left + end.width / 2,
        clientY: end.top + end.height / 2,
        bubbles: true
      })
    );
    expect(capture).toHaveBeenCalledWith(1);
    expect(fixture.componentInstance.selected()).toBe('one');
    origin.dispatchEvent(
      new PointerEvent('pointerup', {
        pointerId: 1,
        isPrimary: true,
        clientX: end.left + end.width / 2,
        clientY: end.top + end.height / 2,
        bubbles: true
      })
    );
    origin.dispatchEvent(new MouseEvent('click', { bubbles: true, detail: 1 }));
    await fixture.whenStable();
    expect(fixture.componentInstance.selected()).toBe('last');
    expect(root.querySelector('[aria-selected="true"]')).toBe(target);
  });

  it('restores committed selection on pointer cancellation during a touch drag', async () => {
    const triggers = root.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    const origin = triggers[0];
    const start = origin.getBoundingClientRect();
    const end = triggers[2].getBoundingClientRect();

    spyOn(origin, 'setPointerCapture');
    origin.dispatchEvent(
      new PointerEvent('pointerdown', {
        pointerId: 4,
        pointerType: 'touch',
        isPrimary: true,
        button: 0,
        clientX: start.left + 10,
        clientY: start.top + 10,
        bubbles: true
      })
    );
    origin.dispatchEvent(
      new PointerEvent('pointermove', {
        pointerId: 4,
        pointerType: 'touch',
        isPrimary: true,
        buttons: 1,
        clientX: end.left + 10,
        clientY: end.top + 10,
        bubbles: true
      })
    );
    origin.dispatchEvent(new PointerEvent('pointercancel', { pointerId: 4, pointerType: 'touch', bubbles: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.selected()).toBe('one');
    expect(root.querySelector('bx-tabs')?.classList.contains('bx-tabs-dragging')).toBeFalse();
  });

  it('skips disabled tabs with the keyboard and reconciles dynamic removal', async () => {
    const first = root.querySelector<HTMLButtonElement>('[role="tab"]');

    first?.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.selected()).toBe('last');
    fixture.componentInstance.showLast.set(false);
    await fixture.whenStable();
    expect(fixture.componentInstance.selected()).toBe('one');
    expect(root.querySelectorAll('[aria-selected="true"]').length).toBe(1);
    expect(root.querySelector('[role="tabpanel"]:not([hidden])')?.getAttribute('aria-labelledby')).toBe(first?.id ?? '');
  });

  it('snaps the moving geometry to the committed tab on live reduced-motion changes', async () => {
    const tabs = fixture.componentInstance.tabs();

    tabs.select('last');
    await fixture.whenStable();
    TestBed.inject(BxA11yService).setReducedMotion(true);
    await fixture.whenStable();

    const selection = root.querySelector<HTMLElement>('.bx-tab-selection');
    const selected = root.querySelector<HTMLElement>('[aria-selected="true"]');

    expect(selection?.style.width).toBe(`${selected?.offsetWidth}px`);
    expect(selection?.style.transform).toContain(`translate3d(${selected?.offsetLeft}px`);
    expect(selection?.style.transform).toContain('scale(1, 1)');
  });

  it('returns focus to the new trigger when programmatic selection replaces a focused panel', async () => {
    const input = root.querySelector<HTMLInputElement>('input');

    input?.focus();
    fixture.componentInstance.tabs().select('last');
    await fixture.whenStable();
    expect(root.ownerDocument.activeElement).toBe(root.querySelector('[aria-selected="true"]'));
  });

  it('excludes animated decoration from overflow while keeping genuinely overflowing tabs scrollable', async () => {
    root.style.display = 'block';
    root.style.width = '800px';
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

    const viewport = root.querySelector<HTMLElement>('.bx-tab-viewport');
    const layer = root.querySelector<HTMLElement>('.bx-tab-selection-layer');

    fixture.componentInstance.tabs().select('last');
    await fixture.whenStable();

    for (let frame = 0; frame < 20; frame++) {
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      expect(viewport?.scrollWidth).toBe(viewport?.clientWidth);
    }

    expect(layer && getComputedStyle(layer).overflowX).toBe('clip');
    root.style.width = '140px';
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    expect(viewport?.scrollWidth ?? 0).toBeGreaterThan(viewport?.clientWidth ?? 0);
  });
});
