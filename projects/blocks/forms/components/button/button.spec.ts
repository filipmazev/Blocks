import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxA11yService } from '@filip.mazev/blocks/core';

import { ButtonTestHost } from '@forms/classes/button-test-host.spec';
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

  it('anchors SVG spinners to the icon and preserves dimensions and names across loading and restoration', async () => {
    const host = TestBed.createComponent(ButtonTestHost);

    TestBed.inject(BxA11yService).setReducedMotion(true);
    await host.whenStable();

    const buttons: HTMLButtonElement[] = Array.from(host.nativeElement.querySelectorAll('button'));
    const original = buttons.map((button) => ({ width: button.offsetWidth, height: button.offsetHeight, text: button.textContent }));
    const customIcon = buttons[1].querySelector<SVGElement>('svg[bxButtonIcon]');

    if (!customIcon) throw new Error('Expected the projected SVG icon.');

    const iconRect = customIcon.getBoundingClientRect();

    expect(customIcon?.clientWidth).toBe(24);
    host.componentInstance.loading.set(true);
    await host.whenStable();

    const spinner = buttons[1].querySelector<HTMLElement>('.bx-btn-spinner');

    if (!spinner) throw new Error('Expected the loading spinner anchor.');

    const spinnerRect = spinner.getBoundingClientRect();

    expect(Math.abs(spinnerRect.left + spinnerRect.width / 2 - iconRect.left - iconRect.width / 2)).toBeLessThan(0.1);
    expect(spinnerRect.width).toBe(24);
    buttons.forEach((button, index) => {
      expect(button.offsetWidth).toBe(original[index].width);
      expect(button.offsetHeight).toBe(original[index].height);
      expect(button.textContent).toBe(original[index].text);
      expect(button.getAttribute('aria-busy')).toBe('true');
    });
    expect(buttons[3].getAttribute('aria-label')).toBe('Save project');
    host.componentInstance.loading.set(false);
    await host.whenStable();
    buttons.forEach((button, index) => {
      expect(button.offsetWidth).toBe(original[index].width);
      expect(button.offsetHeight).toBe(original[index].height);
      expect(button.querySelector('bx-loading-spinner')).toBeNull();
      expect(button.getAttribute('aria-busy')).toBeNull();
    });
    expect(customIcon?.style.opacity).toBe('1');
    host.destroy();
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
