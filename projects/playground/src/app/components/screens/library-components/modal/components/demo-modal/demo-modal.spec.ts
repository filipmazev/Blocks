import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoModal } from './demo-modal';

describe('DemoModal', () => {
  let component: DemoModal;
  let fixture: ComponentFixture<DemoModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoModal]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
