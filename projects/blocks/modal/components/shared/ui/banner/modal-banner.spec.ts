import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBanner } from './modal-banner';

describe('ModalBanner', () => {
  let component: ModalBanner;
  let fixture: ComponentFixture<ModalBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalBanner]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
