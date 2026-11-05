import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastCore } from './toast-core';

describe('ToastCore', () => {
  let component: ToastCore<unknown, unknown>;
  let fixture: ComponentFixture<ToastCore<unknown, unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastCore]
    }).compileComponents();

    fixture = TestBed.createComponent(ToastCore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
