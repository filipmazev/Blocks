import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBackdrop } from './modal-backdrop';

describe('ModalBackdrop', () => {
  let component: ModalBackdrop;
  let fixture: ComponentFixture<ModalBackdrop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalBackdrop]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBackdrop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
