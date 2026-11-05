import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSide } from './modal-side';

describe('ModalSide', () => {
  let component: ModalSide;
  let fixture: ComponentFixture<ModalSide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSide]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
