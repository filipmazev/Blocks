import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggle } from './slide-toggle';

describe('SlideToggle', () => {
  let component: SlideToggle;
  let fixture: ComponentFixture<SlideToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideToggle]
    }).compileComponents();

    fixture = TestBed.createComponent(SlideToggle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
