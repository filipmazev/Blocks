import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxHint } from './hint';

describe('BxHint', () => {
  let component: BxHint;
  let fixture: ComponentFixture<BxHint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxHint]
    }).compileComponents();

    fixture = TestBed.createComponent(BxHint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
