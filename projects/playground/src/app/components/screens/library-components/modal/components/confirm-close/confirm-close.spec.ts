import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmClose } from './confirm-close';

describe('ConfirmClose', () => {
  let component: ConfirmClose;
  let fixture: ComponentFixture<ConfirmClose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmClose]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmClose);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
