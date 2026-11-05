import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxError } from './bx-error.directive';

describe('BxError', () => {
  let component: BxError;
  let fixture: ComponentFixture<BxError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxError]
    }).compileComponents();

    fixture = TestBed.createComponent(BxError);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
