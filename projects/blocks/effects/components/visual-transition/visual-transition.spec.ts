import { TestBed } from '@angular/core/testing';

import { BxA11yService } from '@filip.mazev/blocks/core';

import { VisualTransitionTestHost } from '@effects/classes/visual-transition-test-host.spec';

describe('VisualTransition', () => {
  it('retains the outgoing visual context, bounds layers, and reuses a reversing layer', async () => {
    const fixture = TestBed.createComponent(VisualTransitionTestHost);

    TestBed.inject(BxA11yService).setReducedMotion(false);
    await fixture.whenStable();

    const root: HTMLElement = fixture.nativeElement;
    const original = root.querySelector('.bx-visual-layer');

    expect(original?.textContent).toBe('upload');
    fixture.componentInstance.value.set('done');
    await fixture.whenStable();
    expect(root.querySelectorAll('.bx-visual-layer').length).toBe(2);
    expect(root.querySelector('.bx-visual-outgoing')?.textContent).toBe('upload');
    expect(root.querySelector('.bx-visual-outgoing')?.getAttribute('aria-hidden')).toBe('true');
    expect(root.querySelector<HTMLElement>('.bx-visual-outgoing')?.inert).toBeTrue();

    fixture.componentInstance.value.set('upload');
    await fixture.whenStable();
    expect(root.querySelector('.bx-visual-layer:not(.bx-visual-outgoing)')).toBe(original);

    fixture.componentInstance.value.set('failed');
    await fixture.whenStable();
    expect(root.querySelectorAll('.bx-visual-layer').length).toBe(2);
    expect(root.querySelector('.bx-visual-layer:not(.bx-visual-outgoing)')?.textContent).toBe('failed');
    fixture.destroy();
  });

  it('removes outgoing content and snaps active motion when reduced motion changes live', async () => {
    const fixture = TestBed.createComponent(VisualTransitionTestHost);
    const bxA11yService = TestBed.inject(BxA11yService);

    bxA11yService.setReducedMotion(false);
    await fixture.whenStable();
    fixture.componentInstance.value.set('done');
    await fixture.whenStable();
    bxA11yService.setReducedMotion(true);
    await fixture.whenStable();

    const layers: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('.bx-visual-layer');

    expect(layers.length).toBe(1);
    expect(layers[0].textContent).toBe('done');
    expect(layers[0].style.opacity).toBe('1');
    expect(layers[0].inert).toBeFalse();
    fixture.destroy();
  });

  it('does not retain outgoing content when animation is explicitly disabled', async () => {
    const fixture = TestBed.createComponent(VisualTransitionTestHost);

    await fixture.whenStable();

    fixture.componentInstance.animated.set(false);
    fixture.componentInstance.value.set('done');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelectorAll('.bx-visual-layer').length).toBe(1);
    fixture.destroy();
  });
});
