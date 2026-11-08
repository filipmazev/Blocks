import { ComponentFixture, TestBed } from '@angular/core/testing';

import { buttonEmissionStrength } from '@forms/helpers/button-material.helpers';

import { Button } from './button';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button]
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits more strongly for filled intent than outline or neutral intent', () => {
    const filled = buttonEmissionStrength('filled', false, 'primary');

    expect(filled).toBeGreaterThan(buttonEmissionStrength('filled', true, 'primary'));
    expect(filled).toBeGreaterThan(buttonEmissionStrength('tonal', false, 'primary'));
    expect(filled).toBeGreaterThan(buttonEmissionStrength('filled', false, 'grayscale'));
    expect(buttonEmissionStrength('filled', false, 'danger')).toBeGreaterThan(filled);
    expect(buttonEmissionStrength('text', false, 'danger')).toBe(0);
  });

  it('keeps labels undistorted while the surface responds to pressure', async () => {
    fixture.componentRef.setInput('variant', 'filled');
    await fixture.whenStable();

    const root: HTMLElement = fixture.nativeElement;
    const label = root.querySelector<HTMLElement>('.bx-btn-content-wrapper');

    root.dispatchEvent(new PointerEvent('pointerdown', { pointerId: 1, isPrimary: true, button: 0, bubbles: true }));
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    expect(label && getComputedStyle(label).transform).toBe('none');
    window.dispatchEvent(new PointerEvent('pointerup', { pointerId: 1 }));
  });
});
