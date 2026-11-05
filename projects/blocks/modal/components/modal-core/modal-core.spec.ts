import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCore } from './modal-core';

describe('ModalCore', () => {
  let component: ModalCore<unknown, unknown>;
  let fixture: ComponentFixture<ModalCore<unknown, unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCore]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
