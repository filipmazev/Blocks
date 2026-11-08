import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxA11yService } from '@filip.mazev/blocks/core';

import { SlideToggle } from './slide-toggle';

describe('SlideToggle', () => {
  let component: SlideToggle;
  let fixture: ComponentFixture<SlideToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideToggle]
    }).compileComponents();

    fixture = TestBed.createComponent(SlideToggle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('snaps to the current checked state when reduced motion interrupts a spring', async () => {
    fixture.componentRef.setInput('checked', true);
    await fixture.whenStable();
    TestBed.inject(BxA11yService).setReducedMotion(true);
    await fixture.whenStable();

    const root: HTMLElement = fixture.nativeElement;
    const track = root.querySelector<HTMLElement>('.bx-slide-toggle-track');

    expect(root.querySelector<HTMLInputElement>('input')?.checked).toBeTrue();
    expect(track?.style.getPropertyValue('--bx-toggle-position')).toBe('1');
    expect(track?.style.getPropertyValue('--bx-toggle-stretch')).toBe('0');
  });

  it('retains disabled and readonly contracts while programmatic changes update the thumb', async () => {
    fixture.componentRef.setInput('readOnly', true);
    fixture.componentRef.setInput('checked', true);
    TestBed.inject(BxA11yService).setReducedMotion(true);
    await fixture.whenStable();

    const root: HTMLElement = fixture.nativeElement;
    const input = root.querySelector<HTMLInputElement>('input');

    input?.click();
    await fixture.whenStable();
    expect(component.checked()).toBeTrue();
    expect(root.querySelector<HTMLElement>('.bx-slide-toggle-track')?.style.getPropertyValue('--bx-toggle-position')).toBe('1');
    expect(input?.disabled).toBeFalse();
  });
});
