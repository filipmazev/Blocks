import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSlider } from './range-slider';

describe('RangeSlider', () => {
  let component: RangeSlider;
  let fixture: ComponentFixture<RangeSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangeSlider]
    }).compileComponents();

    fixture = TestBed.createComponent(RangeSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
