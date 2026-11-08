import type { ComponentFixture } from '@angular/core/testing';

import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BxA11yService } from '@filip.mazev/blocks/core';

import { SliderTestHost } from '@forms/classes/slider-test-host.spec';

import { SliderDirective } from './slider.directive';

describe('SliderDirective motion', () => {
  let fixture: ComponentFixture<SliderTestHost>;
  let input: HTMLInputElement;
  let root: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SliderTestHost] }).compileComponents();
    fixture = TestBed.createComponent(SliderTestHost);
    root = fixture.nativeElement;
    await fixture.whenStable();
    input = fixture.componentInstance.input().nativeElement;
  });

  it('should create', () => {
    expect(fixture.debugElement.query(By.directive(SliderDirective)).injector.get(SliderDirective)).toBeTruthy();
  });

  it('updates the native value and fill immediately while decorative motion remains independent', () => {
    input.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, isPrimary: true, button: 0 }));
    input.value = '80';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    expect(input.valueAsNumber).toBe(80);
    expect(root.querySelector<HTMLElement>('.bx-slider-shell')?.style.getPropertyValue('--bx-slider-position')).toBe('0.8');
    window.dispatchEvent(new PointerEvent('pointerup'));
  });

  it('clears pressure and stretch when reduced motion changes during a drag', async () => {
    input.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, isPrimary: true, button: 0 }));
    TestBed.inject(BxA11yService).setReducedMotion(true);
    await fixture.whenStable();

    const thumb = root.querySelector<HTMLElement>('.bx-slider-thumb');

    expect(thumb?.style.getPropertyValue('--bx-slider-pressure')).toBe('0');
    expect(thumb?.style.getPropertyValue('--bx-slider-stretch')).toBe('0');
    window.dispatchEvent(new PointerEvent('pointercancel'));
  });

  it('enlarges the pressed magnifier and restores the opaque resting thumb on release', async () => {
    const thumb = root.querySelector<HTMLElement>('.bx-slider-thumb');
    const lens = root.querySelector<HTMLElement>('.bx-slider-lens');
    const restingWidth = thumb?.getBoundingClientRect().width ?? 0;
    const restingBackground = thumb && getComputedStyle(thumb).backgroundColor;

    input.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, isPrimary: true, button: 0 }));
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    expect(thumb?.getBoundingClientRect().width ?? 0).toBeGreaterThan(restingWidth);
    expect(lens && Number(getComputedStyle(lens).opacity)).toBeGreaterThan(0);
    expect(input.valueAsNumber).toBe(20);
    window.dispatchEvent(new PointerEvent('pointerup'));
    TestBed.inject(BxA11yService).setReducedMotion(true);
    await fixture.whenStable();
    expect(thumb?.getBoundingClientRect().width).toBe(restingWidth);
    expect(lens && Number(getComputedStyle(lens).opacity)).toBe(0);
    expect(thumb && getComputedStyle(thumb).backgroundColor).toBe(restingBackground);
  });
});
