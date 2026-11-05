import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCentered } from './modal-centered';

describe('ModalCentered', () => {
  let component: ModalCentered;
  let fixture: ComponentFixture<ModalCentered>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCentered]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCentered);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
