import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxIndicator } from './checkbox-indicator';

describe('CheckboxIndicator', () => {
  let component: CheckboxIndicator;
  let fixture: ComponentFixture<CheckboxIndicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxIndicator]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxIndicator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
