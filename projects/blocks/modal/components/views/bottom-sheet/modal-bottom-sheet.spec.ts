import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBottomSheet } from './modal-bottom-sheet';

describe('ModalBottomSheet', () => {
  let component: ModalBottomSheet;
  let fixture: ComponentFixture<ModalBottomSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalBottomSheet]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBottomSheet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
