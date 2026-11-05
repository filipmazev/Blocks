import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExamples } from './form-examples';

describe('FormExamples', () => {
  let component: FormExamples;
  let fixture: ComponentFixture<FormExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormExamples]
    }).compileComponents();

    fixture = TestBed.createComponent(FormExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
