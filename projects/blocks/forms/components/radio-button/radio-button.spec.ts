import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Radio } from './radio-button';

describe('Radio', () => {
  let component: Radio;
  let fixture: ComponentFixture<Radio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Radio]
    }).compileComponents();

    fixture = TestBed.createComponent(Radio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
