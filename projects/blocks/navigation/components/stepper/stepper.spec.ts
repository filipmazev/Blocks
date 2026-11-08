import type { ComponentFixture } from '@angular/core/testing';

import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';
import { form, required } from '@angular/forms/signals';

import { Observable, of, Subject } from 'rxjs';

import type { IStepDefinition } from '@navigation/interfaces/istep-definition.interface';
import type { IStepperRequest } from '@navigation/interfaces/istepper-request.interface';
import type { StepperVariant } from '@navigation/types/stepper.types';

import { BX_I18N, BxA11yService } from '@filip.mazev/blocks/core';

import { StepperTestHost } from '@navigation/classes/stepper-test-host.spec';
import { BX_STEPPER_DEFAULTS } from '@navigation/tokens/stepper-defaults.token';

import { Stepper } from './stepper';

describe('Stepper', () => {
  let component: Stepper;
  let fixture: ComponentFixture<Stepper>;

  const steps: readonly IStepDefinition[] = [
    { id: 'details', label: 'Details' },
    { id: 'optional', label: 'Optional details', optional: true },
    { id: 'disabled', label: 'Disabled', disabled: true },
    { id: 'review', label: 'Review' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Stepper] }).compileComponents();
    fixture = TestBed.createComponent(Stepper);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('steps', steps);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders passive progress without focusable steps or wizard controls', async () => {
    fixture.componentRef.setInput('activeStep', 'review');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('button')).toBeNull();
    expect(component.progress()).toBe(0);
    expect(fixture.nativeElement.querySelector('[aria-current="step"]').textContent).toContain('Review');
    await component.goTo('optional');
    expect(component.activeStep()).toBe('review');
  });

  it('emits navigation intent separately from external confirmation', async () => {
    const requests: IStepperRequest[] = [];

    component.stepRequested.subscribe((request) => requests.push(request));
    fixture.componentRef.setInput('mode', 'navigation');
    await fixture.whenStable();
    await component.goTo('review', 'keyboard');
    expect(requests[0]).toEqual({ id: 'review', index: 3, action: 'select', source: 'keyboard' });
    expect(component.selectedStep()?.id).toBe('details');
    fixture.componentRef.setInput('activeStep', 'review');
    await fixture.whenStable();
    expect(component.selectedStep()?.id).toBe('review');
  });

  it('keeps progress independent from active position and honors explicit state', async () => {
    fixture.componentRef.setInput('steps', [{ ...steps[0], completed: true }, steps[1], steps[3]]);
    fixture.componentRef.setInput('activeStep', 'review');
    await fixture.whenStable();
    expect(component.progress()).toBeCloseTo(100 / 3);
    fixture.componentRef.setInput('progressValue', 42);
    expect(component.progress()).toBe(42);
    fixture.componentRef.setInput('progressValue', 120);
    expect(component.progress()).toBe(100);
  });

  it('shows completed/enabled step fractions without counting the active position or disabled steps', async () => {
    fixture.componentRef.setInput('variant', 'progress');
    fixture.componentRef.setInput('showPercentage', true);
    fixture.componentRef.setInput('steps', [{ ...steps[0], completed: true }, ...steps.slice(1)]);
    fixture.componentRef.setInput('activeStep', 'review');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.progress-value').textContent.trim()).toBe('33%');
    fixture.componentRef.setInput('progressFormat', 'fraction');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.progress-value').textContent.trim()).toBe('1/3');
    fixture.componentRef.setInput('progressValue', 42);
    await fixture.whenStable();
    expect(component.progress()).toBe(42);
    expect(fixture.nativeElement.querySelector('.progress-value').textContent.trim()).toBe('1/3');
    fixture.componentRef.setInput('progressFormat', 'percentage');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.progress-value').textContent.trim()).toBe('42%');
    fixture.componentRef.setInput('showPercentage', false);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.progress-value')).toBeNull();
  });

  it('updates fraction counts after completion changes and renders empty totals safely', async () => {
    fixture.componentRef.setInput('variant', 'progress');
    fixture.componentRef.setInput('showPercentage', true);
    fixture.componentRef.setInput('progressFormat', 'fraction');
    fixture.componentRef.setInput('steps', [
      { ...steps[0], completed: true },
      { ...steps[1], skipped: true },
      { ...steps[2], completed: true }
    ]);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.progress-value').textContent.trim()).toBe('1/2');
    fixture.componentRef.setInput('steps', [
      { ...steps[0], completed: true },
      { ...steps[1], completed: true }
    ]);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.progress-value').textContent.trim()).toBe('2/2');
    fixture.componentRef.setInput('steps', []);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.progress-value').textContent.trim()).toBe('0/0');
  });

  it('preserves IDs across reorder and falls back safely when the active step disappears or is disabled', async () => {
    fixture.componentRef.setInput('activeStep', 'review');
    fixture.componentRef.setInput('steps', [...steps].reverse());
    await fixture.whenStable();
    expect(component.selectedStep()?.id).toBe('review');
    fixture.componentRef.setInput('steps', steps.slice(0, 3));
    await fixture.whenStable();
    expect(component.selectedStep()?.id).toBe('details');
    fixture.componentRef.setInput('steps', [{ ...steps[0], disabled: true }]);
    await fixture.whenStable();
    expect(component.selectedStep()).toBeNull();
    fixture.componentRef.setInput('steps', []);
    await fixture.whenStable();
    expect(component.progress()).toBe(0);
  });

  it('rejects invalid IDs and mixed ownership explicitly', () => {
    fixture.componentRef.setInput('steps', [{ id: '', label: 'Missing ID' }]);
    expect(() => component.selectedStep()).toThrowError(/nonempty unique/);
    fixture.componentRef.setInput('steps', [steps[0], steps[0]]);
    expect(() => component.selectedStep()).toThrowError(/nonempty unique/);
  });

  it('validates required predecessors and does not complete steps just by visiting', async () => {
    fixture.componentRef.setInput('mode', 'wizard');
    fixture.componentRef.setInput('steps', [steps[0], { id: 'required', label: 'Required predecessor' }, ...steps.slice(1)]);
    await fixture.whenStable();
    expect((await component.goTo('review')).reason).toBe('linear');
    expect(component.progress()).toBe(0);
    fixture.componentRef.setInput('steps', steps);
    await fixture.whenStable();
    expect((await component.next()).outcome).toBe('accepted');
    expect(component.activeStep()).toBe('optional');
    expect(component.progress()).toBeCloseTo(100 / 3);
    await fixture.whenStable();
    expect((await component.skip()).outcome).toBe('accepted');
    expect(component.activeStep()).toBe('review');
    expect(component.isComplete()).toBe(false);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelectorAll('[data-status="skipped"]').length).toBe(1);

    const completion = jasmine.createSpy('completed');

    component.completed.subscribe(completion);
    expect((await component.finish()).outcome).toBe('accepted');
    expect(component.isComplete()).toBe(true);
    expect(completion).toHaveBeenCalledOnceWith({ completedIds: ['details', 'review'], skippedIds: ['optional'] });
    await component.finish();
    expect(completion).toHaveBeenCalledTimes(1);
  });

  it('marks an invalid reactive control touched and reacts when a completed form becomes invalid', async () => {
    const validation = new FormControl('', { nonNullable: true, validators: Validators.required });

    fixture.componentRef.setInput('steps', [{ ...steps[0], validation }, steps[3]]);
    fixture.componentRef.setInput('mode', 'wizard');
    await fixture.whenStable();
    expect(validation.touched).toBe(false);
    expect((await component.next()).outcome).toBe('invalid');
    expect(validation.touched).toBe(true);
    validation.setValue('Valid name');
    expect((await component.next()).outcome).toBe('accepted');
    await fixture.whenStable();
    validation.setValue('');
    await fixture.whenStable();
    expect(component.progress()).toBe(0);
    expect((await component.finish()).reason).toBe('linear');
    expect((await component.previous()).outcome).toBe('accepted');
  });

  it('supports signal validity with explicit precedence and pending validation', async () => {
    const valid = signal(false);
    const pending = signal(false);

    fixture.componentRef.setInput('steps', [{ ...steps[0], validation: { valid, pending }, valid: true }, steps[3]]);
    fixture.componentRef.setInput('mode', 'wizard');
    await fixture.whenStable();
    pending.set(true);
    expect((await component.next()).outcome).toBe('invalid');
    pending.set(false);
    expect((await component.next()).outcome).toBe('accepted');
  });

  it('marks Signal Forms descendants touched on invalid forward submission', async () => {
    const model = signal({ name: '' });
    const fields = TestBed.runInInjectionContext(() => form(model, (schema) => required(schema.name)));

    fixture.componentRef.setInput('mode', 'wizard');
    fixture.componentRef.setInput('steps', [{ ...steps[0], validation: fields() }, steps[3]]);
    await fixture.whenStable();
    expect(fields.name().touched()).toBe(false);
    expect((await component.next()).outcome).toBe('invalid');
    expect(fields.name().touched()).toBe(true);
    model.set({ name: 'Workspace' });
    expect((await component.next()).outcome).toBe('accepted');
  });

  it('honors explicit completion overrides and server errors without showing untouched invalid steps as errors', async () => {
    fixture.componentRef.setInput('mode', 'wizard');
    fixture.componentRef.setInput('steps', [{ ...steps[0], completed: false }, steps[3]]);
    await fixture.whenStable();
    expect((await component.next()).reason).toBe('linear');
    fixture.componentRef.setInput('steps', [{ ...steps[0], completed: true, valid: false }, steps[3]]);
    await fixture.whenStable();
    expect(component.progress()).toBe(0);
    expect(fixture.nativeElement.querySelector('[data-status="error"]')).toBeNull();
    fixture.componentRef.setInput('steps', [{ ...steps[0], error: true }, steps[3]]);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('[data-status="error"]')).not.toBeNull();
    expect((await component.next()).outcome).toBe('invalid');
  });

  it('ignores stale promise results after a new operation succeeds', async () => {
    let release: ((value: boolean) => void) | undefined;

    const guard = new Promise<boolean>((resolve) => {
      release = resolve;
    });

    fixture.componentRef.setInput('mode', 'wizard');
    fixture.componentRef.setInput('beforeTransition', () => guard);
    await fixture.whenStable();

    const oldOperation = component.next();

    await Promise.resolve();
    await Promise.resolve();
    component.reset();
    fixture.componentRef.setInput('beforeTransition', () => true);
    await fixture.whenStable();
    expect((await component.next()).outcome).toBe('accepted');
    release?.(true);
    expect((await oldOperation).outcome).toBe('cancelled');
    expect(component.selectedStep()?.id).toBe('optional');
    expect(component.lastTransition()?.outcome).toBe('accepted');
  });

  it('skips a final optional step without claiming completion', async () => {
    fixture.componentRef.setInput('mode', 'wizard');
    fixture.componentRef.setInput('steps', [{ id: 'optional', label: 'Optional', optional: true, valid: false }]);
    await fixture.whenStable();

    const completed = jasmine.createSpy('completed');

    component.completed.subscribe(completed);
    expect((await component.skip()).outcome).toBe('accepted');
    expect(component.isComplete()).toBe(true);
    expect(component.progress()).toBe(0);
    expect(completed).toHaveBeenCalledOnceWith({ completedIds: [], skippedIds: ['optional'] });
  });

  it('blocks disabled destinations and non-editable completed steps', async () => {
    fixture.componentRef.setInput('mode', 'wizard');
    fixture.componentRef.setInput('steps', [{ ...steps[0], completed: true, editable: false }, ...steps.slice(1)]);
    fixture.componentRef.setInput('activeStep', 'review');
    await fixture.whenStable();
    expect((await component.goTo('disabled')).reason).toBe('unavailable');
    expect((await component.goTo('details')).reason).toBe('unavailable');
  });

  it('supports non-linear selection and controlled wizard confirmation', async () => {
    fixture.componentRef.setInput('mode', 'wizard');
    fixture.componentRef.setInput('linear', false);
    fixture.componentRef.setInput('selectionMode', 'controlled');
    await fixture.whenStable();

    const result = await component.goTo('review');

    expect(result.outcome).toBe('accepted');
    expect(component.selectedStep()?.id).toBe('details');
    await fixture.whenStable();
    expect(component.pending()).toBeNull();
    expect(fixture.nativeElement.querySelector('.is-awaiting-confirmation .step-label').textContent.trim()).toBe('Review');
    expect(fixture.nativeElement.querySelector('.is-awaiting-confirmation .step-detail').textContent).toContain('Awaiting confirmation');
    expect(fixture.nativeElement.querySelector('.is-awaiting-confirmation [aria-current]')).toBeNull();
    fixture.componentRef.setInput('activeStep', result.toId);
    await fixture.whenStable();
    expect(component.selectedStep()?.id).toBe('review');
    expect(fixture.nativeElement.querySelector('.is-awaiting-confirmation')).toBeNull();
    fixture.componentRef.setInput('activeStep', 'details');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.is-awaiting-confirmation')).toBeNull();
  });

  it('clears controlled confirmation feedback after reset, a refused request or external selection', async () => {
    fixture.componentRef.setInput('mode', 'wizard');
    fixture.componentRef.setInput('selectionMode', 'controlled');
    await fixture.whenStable();
    await component.next();
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.is-awaiting-confirmation')).not.toBeNull();
    expect((await component.goTo('disabled')).outcome).toBe('rejected');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.is-awaiting-confirmation')).toBeNull();
    await component.next();
    await fixture.whenStable();
    component.reset();
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.is-awaiting-confirmation')).toBeNull();
    await component.next();
    await fixture.whenStable();
    fixture.componentRef.setInput('activeStep', 'review');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.is-awaiting-confirmation')).toBeNull();
    fixture.componentRef.setInput('activeStep', 'details');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.is-awaiting-confirmation')).toBeNull();
  });

  it('exposes loading and prevents duplicate guards', async () => {
    const answer = new Subject<boolean>();
    const guard = jasmine.createSpy('guard').and.returnValue(answer);

    fixture.componentRef.setInput('mode', 'wizard');
    fixture.componentRef.setInput('beforeTransition', guard);
    await fixture.whenStable();

    const first = component.next();

    await Promise.resolve();
    await Promise.resolve();
    expect(component.pending()?.id).toBe('optional');
    expect((await component.next()).outcome).toBe('busy');
    expect(guard).toHaveBeenCalledTimes(1);
    answer.next(true);
    expect((await first).outcome).toBe('accepted');
    expect(component.pending()).toBeNull();
  });

  it('supports sync, promise and observable guards in exit/enter/global order', async () => {
    const calls: string[] = [];

    fixture.componentRef.setInput('steps', [
      {
        ...steps[0],
        canExit: () => {
          calls.push('exit');

          return true;
        }
      },
      {
        ...steps[3],
        canEnter: () => {
          calls.push('enter');

          return Promise.resolve(true);
        }
      }
    ]);
    fixture.componentRef.setInput('mode', 'wizard');
    fixture.componentRef.setInput('beforeTransition', () => {
      calls.push('global');

      return of(true);
    });
    await fixture.whenStable();
    expect((await component.next()).outcome).toBe('accepted');
    expect(calls).toEqual(['exit', 'enter', 'global']);
  });

  it('recovers after guard refusal and server failure', async () => {
    fixture.componentRef.setInput('mode', 'wizard');
    fixture.componentRef.setInput('beforeTransition', () => false);
    await fixture.whenStable();
    expect((await component.next()).reason).toBe('guard');
    fixture.componentRef.setInput('beforeTransition', () => Promise.reject(new Error('Server failure')));
    await fixture.whenStable();
    expect((await component.next()).outcome).toBe('error');
    expect(component.pending()).toBeNull();
    expect(component.selectedStep()?.id).toBe('details');
    fixture.componentRef.setInput('beforeTransition', () => true);
    await fixture.whenStable();
    expect((await component.next()).outcome).toBe('accepted');
  });

  it('cancels and unsubscribes pending operations when the destination is removed', async () => {
    let subscribed = false;

    const guard = new Observable<boolean>(() => {
      subscribed = true;

      return () => {
        subscribed = false;
      };
    });

    fixture.componentRef.setInput('mode', 'wizard');
    fixture.componentRef.setInput('beforeTransition', () => guard);
    await fixture.whenStable();

    const operation = component.next();

    await Promise.resolve();
    await Promise.resolve();
    expect(subscribed).toBe(true);
    fixture.componentRef.setInput('steps', [steps[0], steps[3]]);
    await fixture.whenStable();
    expect((await operation).outcome).toBe('cancelled');
    expect(subscribed).toBe(false);
    expect(component.selectedStep()?.id).toBe('details');
  });

  it('cancels never-resolving promises after reset, external selection and destruction', async () => {
    fixture.componentRef.setInput('mode', 'wizard');
    fixture.componentRef.setInput('beforeTransition', () => new Promise<boolean>(() => undefined));
    await fixture.whenStable();

    const first = component.next();

    component.reset();
    expect((await first).outcome).toBe('cancelled');
    await fixture.whenStable();

    const second = component.next();

    fixture.componentRef.setInput('activeStep', 'review');
    await fixture.whenStable();
    expect((await second).outcome).toBe('cancelled');

    const third = component.previous();

    fixture.destroy();
    expect((await third).outcome).toBe('cancelled');
  });

  it('rechecks current validity after an async guard resolves', async () => {
    const valid = signal(true);
    const result = new Subject<boolean>();

    fixture.componentRef.setInput('mode', 'wizard');
    fixture.componentRef.setInput('steps', [{ ...steps[0], validation: { valid } }, steps[3]]);
    fixture.componentRef.setInput('beforeTransition', () => result);
    await fixture.whenStable();

    const operation = component.next();

    await Promise.resolve();
    await Promise.resolve();
    valid.set(false);
    result.next(true);
    expect((await operation).outcome).toBe('invalid');
    expect(component.selectedStep()?.id).toBe('details');
  });

  it('resets workflow state and respects readonly', async () => {
    fixture.componentRef.setInput('mode', 'wizard');
    await fixture.whenStable();
    await component.next();
    await fixture.whenStable();
    component.reset();
    expect(component.progress()).toBe(0);
    expect(component.selectedStep()?.id).toBe('details');
    fixture.componentRef.setInput('readOnly', true);
    await fixture.whenStable();
    expect((await component.next()).reason).toBe('readonly');
  });

  it('moves keyboard focus without committing selection and skips disabled controls', async () => {
    fixture.componentRef.setInput('mode', 'navigation');
    await fixture.whenStable();

    const buttons: NodeListOf<HTMLButtonElement> = fixture.nativeElement.querySelectorAll('.step-body');

    buttons[0].focus();
    buttons[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }));
    expect(document.activeElement).toBe(buttons[3]);
    expect(component.selectedStep()?.id).toBe('details');
    buttons[3].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    expect(document.activeElement).toBe(buttons[1]);
    buttons[1].click();
    expect(component.selectedStep()?.id).toBe('details');
  });

  it('reverses horizontal keyboard movement in RTL', async () => {
    fixture.componentRef.setInput('mode', 'navigation');
    fixture.nativeElement.dir = 'rtl';
    await fixture.whenStable();

    const buttons: NodeListOf<HTMLButtonElement> = fixture.nativeElement.querySelectorAll('.step-body');

    buttons[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    expect(document.activeElement).toBe(buttons[1]);
  });

  for (const variant of ['steps', 'segments', 'dots', 'progress', 'cards'] as const satisfies readonly StepperVariant[]) {
    it(`renders ${variant} in both orientations and all sizes`, async () => {
      fixture.componentRef.setInput('variant', variant);

      for (const orientation of ['horizontal', 'vertical']) {
        for (const size of ['sm', 'md', 'lg']) {
          fixture.componentRef.setInput('orientation', orientation);
          fixture.componentRef.setInput('size', size);
          await fixture.whenStable();
          expect(fixture.nativeElement.dataset['variant']).toBe(variant);
          expect(fixture.nativeElement.dataset['orientation']).toBe(orientation);
          expect(fixture.nativeElement.querySelectorAll('li').length).toBe(4);
        }
      }
    });
  }

  it('mounts shared glass on step bodies and inherits live paired foreground tokens', async () => {
    expect(fixture.nativeElement.querySelector('.step-item[data-bx-surface]')).toBeNull();
    fixture.nativeElement.style.setProperty('--bx-on-accent', 'rgb(10, 20, 30)');
    await fixture.whenStable();

    const first = fixture.nativeElement.querySelector('.marker');

    fixture.componentRef.setInput('activeStep', 'details');
    await fixture.whenStable();
    expect(getComputedStyle(first).color).toBe('rgb(10, 20, 30)');
    fixture.nativeElement.style.setProperty('--bx-on-accent', 'rgb(30, 40, 50)');
    expect(getComputedStyle(first).color).toBe('rgb(30, 40, 50)');
    fixture.componentRef.setInput('variant', 'cards');
    fixture.componentRef.setInput('glassiness', 'off');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelectorAll('.step-body[data-bx-surface="glass"]').length).toBe(4);
  });

  it('changes segment thickness and tracks shared reduced-motion preference', async () => {
    fixture.componentRef.setInput('variant', 'segments');
    fixture.componentRef.setInput('size', 'sm');
    await fixture.whenStable();

    const compact = fixture.nativeElement.querySelector('.marker').getBoundingClientRect().height;

    fixture.componentRef.setInput('size', 'lg');
    TestBed.inject(BxA11yService).setReducedMotion(true);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.marker').getBoundingClientRect().height).toBeGreaterThan(compact);
    expect(fixture.nativeElement.classList.contains('is-reduced-motion')).toBe(true);
  });
});

describe('Stepper projected content', () => {
  let fixture: ComponentFixture<StepperTestHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [StepperTestHost] }).compileComponents();
    fixture = TestBed.createComponent(StepperTestHost);
    await fixture.whenStable();
  });

  it('registers steps and retains lazily created form DOM', async () => {
    const stepper = fixture.componentInstance.stepper();
    const draft: HTMLInputElement = fixture.nativeElement.querySelector('input');

    draft.value = 'Keep this draft';
    expect(fixture.nativeElement.querySelectorAll('input').length).toBe(1);
    await stepper.next();
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelectorAll('input').length).toBe(2);

    const panel = fixture.nativeElement.querySelector('section:not([hidden])');

    expect(document.activeElement).toBe(panel);

    const trigger = document.getElementById(panel.getAttribute('aria-labelledby'));

    expect(trigger?.getAttribute('aria-controls')).toBe(panel.id);
    await stepper.previous();
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('input')).toBe(draft);
    expect(draft.value).toBe('Keep this draft');
  });

  it('advances on the first successful asynchronous retry after invalid input and a failed save', async () => {
    const host = fixture.componentInstance;
    const stepper = host.stepper();
    const guard = jasmine.createSpy('save');

    host.validation.reset('');
    host.guard.set(guard);
    await fixture.whenStable();
    expect((await stepper.next()).outcome).toBe('invalid');
    expect(host.validation.touched).toBe(true);
    expect(guard).not.toHaveBeenCalled();
    host.validation.setValue('Workspace draft');
    guard.and.callFake(() => Promise.reject(new Error('Save failed')));
    expect((await stepper.next()).outcome).toBe('error');
    expect(stepper.selectedStep()?.id).toBe('first');
    expect(host.validation.value).toBe('Workspace draft');

    const response = new Subject<boolean>();

    guard.and.returnValue(response);

    const retry = stepper.next();

    await Promise.resolve();
    await Promise.resolve();
    await fixture.whenStable();
    expect(stepper.pending()?.id).toBe('second');
    response.next(true);
    expect((await retry).outcome).toBe('accepted');
    await fixture.whenStable();
    expect(stepper.selectedStep()?.id).toBe('second');
    expect(stepper.activeStep()).toBe('second');
    expect(stepper.pending()).toBeNull();
    expect(guard).toHaveBeenCalledTimes(2);
    expect(document.activeElement).toBe(fixture.nativeElement.querySelector('section:not([hidden])'));
  });

  it('creates eager content and destroys inactive content under active policy', async () => {
    fixture.componentInstance.policy.set('eager');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelectorAll('input').length).toBe(2);
    fixture.componentInstance.policy.set('active');
    await fixture.whenStable();

    const draft = fixture.nativeElement.querySelector('input');

    await fixture.componentInstance.stepper().next();
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelectorAll('input').length).toBe(1);
    expect(draft.isConnected).toBe(false);
  });

  it('removes active projected steps without leaving focus in detached content', async () => {
    await fixture.componentInstance.stepper().next();
    await fixture.whenStable();
    fixture.componentInstance.showSecond.set(false);
    await fixture.whenStable();
    expect(fixture.componentInstance.stepper().selectedStep()?.id).toBe('first');
    expect(document.activeElement?.isConnected).toBe(true);
    expect(fixture.nativeElement.querySelectorAll('.step-item').length).toBe(1);
  });

  it('rejects mixed configured and projected steps', () => {
    fixture.componentInstance.configured.set([]);
    expect(() => fixture.detectChanges()).toThrowError(/never both/);
  });
});

describe('Stepper localization', () => {
  it('merges shared labels and reacts to language changes', async () => {
    const version = signal(0);
    const translate = (key: string): string => `${key}-${version()}`;

    await TestBed.configureTestingModule({
      imports: [Stepper],
      providers: [
        { provide: BX_I18N, useValue: { translate, version } },
        { provide: BX_STEPPER_DEFAULTS, useValue: { labels: { next: { key: 'continue' }, back: 'Shared back' } } }
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(Stepper);

    fixture.componentRef.setInput('steps', [
      { id: 'one', label: { key: 'one' } },
      { id: 'two', label: 'Two' }
    ]);
    fixture.componentRef.setInput('mode', 'wizard');
    fixture.componentRef.setInput('labels', { back: 'Instance back' });
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('one-0');
    expect(fixture.nativeElement.textContent).toContain('continue-0');
    expect(fixture.nativeElement.textContent).toContain('Instance back');
    version.set(1);
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('one-1');
    expect(fixture.nativeElement.textContent).toContain('continue-1');
  });
});
