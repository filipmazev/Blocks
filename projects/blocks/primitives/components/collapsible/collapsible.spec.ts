import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxA11yService } from '@filip.mazev/blocks/core';

import { Collapsible } from './collapsible';

describe('Collapsible', () => {
  let component: Collapsible;
  let fixture: ComponentFixture<Collapsible>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Collapsible]
    }).compileComponents();

    fixture = TestBed.createComponent(Collapsible);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Disclosure');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('uses a quick disclosure transition and removes it on a live reduced-motion change', async () => {
    const root: HTMLElement = fixture.nativeElement;
    const panel = root.querySelector<HTMLElement>('.bx-collapsible-reveal');

    expect(panel && getComputedStyle(panel).transitionDuration).toBe('0.12s');
    fixture.componentRef.setInput('expanded', true);
    await fixture.whenStable();
    expect(panel?.getAttribute('aria-hidden')).toBe('false');
    TestBed.inject(BxA11yService).setReducedMotion(true);
    await fixture.whenStable();
    expect(panel && getComputedStyle(panel).transitionDuration).toBe('0s');
    fixture.componentRef.setInput('expanded', false);
    await fixture.whenStable();
    expect(panel?.hasAttribute('inert')).toBeTrue();
  });
});
