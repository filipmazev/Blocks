import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoToast } from './demo-toast';

describe('DemoToast', () => {
  let component: DemoToast;
  let fixture: ComponentFixture<DemoToast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoToast]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoToast);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
