import type { ComponentFixture } from '@angular/core/testing';

import { TestBed } from '@angular/core/testing';

import { Step } from './step';

describe('Step', () => {
  let component: Step;
  let fixture: ComponentFixture<Step>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Step] }).compileComponents();
    fixture = TestBed.createComponent(Step);
    fixture.componentRef.setInput('id', 'details');
    fixture.componentRef.setInput('label', 'Details');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.definition().id).toBe('details');
  });
});
